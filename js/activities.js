(async () => {
    home.select('meta[property="og:url"]').content += `/${username}`;
    if (username !== '') {
        const response_user = await fetch(`https://api.github.com/users/${username}`);
        const json_user = await response_user.json();

        if (json_user.message === 'Not Found') {
            home.select('#loading').classList.add('d-none');
            home.select('#notfound').classList.remove('d-none');
            home.select('.navbar').classList.add('d-flex');
            home.select('.navbar').classList.remove('d-none');
            return false;
        }

        const response_rep = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const response_event = await fetch(`https://api.github.com/users/${username}/events/public`);
        const json_rep = await response_rep.json();
        const json_event = await response_event.json();

        let allStars = 0;
        let allForks = 0;
        let languages = [];
        json_rep.forEach(repo => {
            allStars += repo.stargazers_count;
            allForks += repo.forks_count;
            languages.push(repo.language);
        });

        const gitSearchElement = home.select('#search_first');
        gitSearchElement.value = json_user.login;

        const gitAvatarElement = home.select('#avatar');
        gitAvatarElement.src = json_user.avatar_url;
        home.select('meta[name="twitter:image"]').content = json_user.avatar_url;
        home.select('meta[property="og:image"]').content = json_user.avatar_url;

        const gitNameElement = home.select('#name');
        gitNameElement.href = json_user.html_url;
        if (json_user.name === null) {
            gitNameElement.textContent = json_user.login;
            home.select('title').textContent = `${json_user.login} | GitHub Stat`;
            home.select('meta[name="twitter:title"]').content = json_user.login;
            home.select('meta[property="og:title"]').content = json_user.login;
        } else {
            gitNameElement.textContent = json_user.name;
            home.select('title').textContent = `${json_user.name} | GitHub Stat`;
            home.select('meta[name="twitter:title"]').content = json_user.name;
            home.select('meta[property="og:title"]').content = json_user.name;
        }
        if (json_user.site_admin === true) {
            gitNameElement.classList.remove('text-body');
            gitNameElement.classList.add('text-primary');
        }

        const gitBlogElement = home.select('#blog');
        if (json_user.blog !== '') {
            gitNameElement.innerHTML += '<br>';
            gitBlogElement.href = json_user.blog; // todo: fix for non http url
            gitBlogElement.textContent = `${json_user.blog.replace(/^(http:|https:)?\/*/i,"")}`;
        }

        if (json_user.company !== null) {
            const gitCompanyElement = home.select('#company');
            if (json_user.blog !== '') 
                gitBlogElement.innerHTML += '<br>';
            else 
                gitNameElement.innerHTML += '<br>';
            gitCompanyElement.className = `badge badge-primary`;
            gitCompanyElement.innerHTML = `<i class="fas fa-users fa-fw mr-2"></i>${json_user.company}`;
        }

        const gitMoreElement = home.select('#more');
        if (json_user.bio !== null) {
            gitMoreElement.innerHTML += `<li class="list-group-item"><small class="text-muted">Bio:</small><p class="m-0">${json_user.bio}</p></li>`;
            home.select('meta[name="description"]').content = json_user.bio;
            home.select('meta[name="twitter:description"]').content = json_user.bio;
            home.select('meta[property="og:description"]').content = json_user.bio;
        }
        gitMoreElement.innerHTML += `
        <li class="list-group-item d-flex flex-column">
            <div><div class="float-left text-muted">Followers</div><div class="text-monospace float-right">${json_user.followers}</div></div>
            <div><div class="float-left text-muted">Following</div><div class="text-monospace float-right">${json_user.following}</div></div>
            <div><div class="float-left text-muted">Public Repositories</div><div class="text-monospace float-right">${json_user.public_repos}</div></div>
            <div><div class="float-left text-muted">Public Gists</div><div class="text-monospace float-right">${json_user.public_gists}</div></div>
            <div><div class="float-left text-muted">Stars Received</div><div class="text-monospace float-right">${allStars}</div></div>
            <div><div class="float-left text-muted">Forks by users</div><div class="text-monospace float-right">${allForks}</div></div>
        </li>`;

        let langBadge = [];
        for (let lang of languages.filter(function(elem, index, self){return index == self.indexOf(elem);}).filter(Boolean))
            langBadge += `<span class="badge badge-primary">${lang}</span>\n`;
        if (langBadge != '')
            gitMoreElement.innerHTML += `<li class="list-group-item">${langBadge}</li>`;

        const gitAboutElement = home.select('#about');
        gitAboutElement.innerHTML = `<small class="text-muted">Joined</small><p>${isDate(json_user.created_at)}</p>`;
        if (json_user.location !== null)
            gitAboutElement.innerHTML += `<small class="text-muted">Location</small><p class="text-primary">${json_user.location}</p>`;
        gitAboutElement.innerHTML += `<p class="text-muted m-0">Last Updated on ${isDate(json_user.updated_at)}</p>`;

        const gitActivitiesElement = home.select('#activities');
        let plusIcon, branchIcon, trashIcon, commentIcon, starIcon;
        plusIcon = `<i class="fas fa-plus-circle fa-fw text-success"></i>`;
        branchIcon = `<i class="fas fa-code-branch fa-fw text-success"></i>`;
        trashIcon = `<i class="fas fa-trash-alt fa-fw text-danger"></i>`;
        commentIcon = `<i class="fas fa-comment-dots fa-fw text-muted"></i>`;
        starIcon = `<i class="fas fa-star fa-fw text-warning"></i>`;
        json_event.forEach(activities => {
            repoURL = `<a href="${isURL(activities.repo.url)}">${activities.repo.name}</a>`;
            switch (activities.type) {
                case "PushEvent":
                    let commit = `commit`;
                    if (activities.payload.size > 1) {
                        commit += "s";
                    }
                    isStr = `${plusIcon} Pushed <a href="https://github.com/${activities.repo.name}/commits/${activities.payload.ref.split('/').pop()}">${activities.payload.size} ${commit}</a> to ${repoURL}`;
                    break;
                case "WatchEvent":
                    isStr = `${starIcon} Starred a repo ${repoURL}`;
                    break;
                case "CreateEvent":
                    if (activities.payload.ref_type === "branch") {
                        isStr = branchIcon;
                    } else {
                        isStr = plusIcon;
                    }
                    isStr += ` Created a ${activities.payload.ref_type} `;
                    if (activities.payload.ref_type === "branch") {
                        isStr += `<a href="${isURL(activities.repo.url)}/tree/${activities.payload.ref}">${activities.payload.ref}</a> in ${repoURL}`;
                    } else {
                        isStr += repoURL;
                    }
                    break;
                case "DeleteEvent":
                    isStr = `${trashIcon} Deleted a ${activities.payload.ref_type} ${activities.payload.ref} from ${repoURL}`;
                    break;
                case "ForkEvent":
                    isStr = `${branchIcon} Forked a repo ${repoURL} to <a href="${activities.payload.forkee.html_url}">${activities.payload.forkee.full_name}</a>"`;
                    break;
                case "PullRequestEvent":
                    if (activities.payload.action === "closed") {
                        isStr = trashIcon;
                    } else {
                        isStr = plusIcon;
                    }
                    isStr += ` ${activities.payload.action.charAt(0).toUpperCase()}${activities.payload.action.slice(1)} a <a href="${activities.payload.pull_request.html_url}">pull request</a> in ${repoURL}`;
                    break;
                case "PullRequestReviewCommentEvent":
                    isStr = `${commentIcon} ${activities.payload.action.charAt(0).toUpperCase()}${activities.payload.action.slice(1)} a <a href="${activities.payload.comment.html_url}">comment</a> on their pull request in ${repoURL}`;
                    break;
                case "IssuesEvent":
                    if (activities.payload.action === "closed") {
                        isStr = trashIcon;
                    } else {
                        isStr = plusIcon;
                    }
                    isStr += ` ${activities.payload.action.charAt(0).toUpperCase()}${activities.payload.action.slice(1)} an <a href="${activities.payload.issue.html_url}">issue</a> in ${repoURL}`;
                    break;
                case "IssueCommentEvent":
                    isStr = `${commentIcon} ${activities.payload.action.charAt(0).toUpperCase()}${activities.payload.action.slice(1)} <a href="${activities.payload.comment.html_url}">a comment</a> on an issue in ${repoURL}`;
                    break;
                default:
                    console.log(activities.type);
                    return false;
                    break;
            }
            gitActivitiesElement.innerHTML += `<li class="list-group-item"><div class="row"><div class="col-9">${isStr}</div><div class="col-3 text-muted text-right">${isTimeAgo(activities.created_at)}</div></div></li>`;
        });
        home.select('#loading').classList.add('d-none');
        home.select('#profile').classList.remove('d-none');
        home.select('.navbar').classList.add('d-flex');
        home.select('.navbar').classList.remove('d-none');
    }
})();