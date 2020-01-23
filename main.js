const home = {
    select: document.querySelector.bind(document),
    selectAll: document.querySelectorAll.bind(document)
};

const username = location.pathname.replace('/', '');

if (username === '') {
    home.select('#loading').classList.add('d-none');
    home.select('#main').classList.remove('d-none');
}

// HOME
(async () => {
    if (username === '') return false;
    const response_user = await fetch(`https://api.github.com/users/${username}`);
    if (response_user.ok !== true) {
        home.select('#loading').classList.add('d-none');
        home.select('#notfound').classList.remove('d-none');
        home.select('.navbar').classList.add('d-flex');
        home.select('.navbar').classList.remove('d-none');
        return false;
    }
    const response_rep = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    const response_event = await fetch(`https://api.github.com/users/${username}/events/public?sort=updated`);
    const json_user = await response_user.json();
    const json_rep = await response_rep.json();
    const json_event = await response_event.json();

    const gitUrlElement = home.select('meta[property="og:url"]');
    const gitSearchElement = home.select('#search_first');
    const gitAvatarElement = home.select('#avatar');
    const gitAvatarTwitter = home.select('meta[name="twitter:image"]');
    const gitAvatarOG = home.select('meta[property="og:image"]');
    const gitNameElement = home.select('#name');
    const gitTitle = home.select('title');
    const gitTitleTwitter = home.select('meta[name="twitter:title"]');
    const gitTitleOG = home.select('meta[property="og:title"]');
    const gitBlogElement = home.select('#blog');
    const gitCompanyElement = home.select('#company');
    const gitMoreElement = home.select('#more');
    const gitDescription = home.select('meta[name="description"]');
    const gitDescriptionTwitter = home.select('meta[name="twitter:description"]');
    const gitDescriptionOG = home.select('meta[property="og:description"]');
    const gitActivitiesElement = home.select('#activities');

    let allStars = 0;
    let allForks = 0;
    let allIssues = 0;
    let languages = [];
    json_rep.forEach(repo => {
        allStars += repo.stargazers_count;
        allForks += repo.forks_count;
        allIssues += repo.open_issues_count;
        languages.push(repo.language);
    });

    gitUrlElement.content += `/${username}`;

    // username in search bar
    gitSearchElement.value = json_user.login;

    // avatar
    gitAvatarElement.src = json_user.avatar_url;
    gitAvatarTwitter.content = json_user.avatar_url;
    gitAvatarOG.content = json_user.avatar_url;

    gitNameElement.href = json_user.html_url; // url to name
    if (json_user.name === null) { // login if name 'null'
        gitNameElement.textContent = json_user.login;
        gitTitle.textContent = `${json_user.login} | GitHub Stat`;
        gitTitleTwitter.content = json_user.login;
        gitTitleOG.content = json_user.login;
    } else { // name
        gitNameElement.textContent = json_user.name;
        gitTitle.textContent = `${json_user.name} | GitHub Stat`;
        gitTitleTwitter.content = json_user.name;
        gitTitleOG.content = json_user.name;
    }
    if (json_user.site_admin === true) { // check isadmin?
        gitNameElement.classList.remove('text-body');
        gitNameElement.classList.add('text-primary');
    }

    // blog url
    if (json_user.blog !== '') {
        gitNameElement.innerHTML += '<br>';
        gitBlogElement.href = json_user.blog; // todo: fix for non http url
        gitBlogElement.textContent = `${json_user.blog.replace(/^(http:|https:)?\/*/i,"")}`;
    }

    // company
    if (json_user.company !== null) {
        if (json_user.blog !== '') 
            gitBlogElement.innerHTML += '<br>';
        else 
            gitNameElement.innerHTML += '<br>';
        gitCompanyElement.className = `badge badge-primary`;
        gitCompanyElement.innerHTML = `<i class="fas fa-users fa-fw mr-2"></i>${json_user.company}`;
    }

    // bio
    if (json_user.bio !== null) {
        gitMoreElement.innerHTML += `<li class="list-group-item"><small class="text-muted">Bio:</small><p class="m-0">${json_user.bio}</p></li>`;
        gitDescription.content = json_user.bio;
        gitDescriptionTwitter.content = json_user.bio;
        gitDescriptionOG.content = json_user.bio;
    }

    // counts
    gitMoreElement.innerHTML += `
    <li class="list-group-item d-flex flex-column">
        <div><div class="float-left text-muted">Followers</div><div class="text-monospace float-right">${json_user.followers}</div></div>
        <div><div class="float-left text-muted">Following</div><div class="text-monospace float-right">${json_user.following}</div></div>
        <div><div class="float-left text-muted">Public Repositories</div><div class="text-monospace float-right">${json_user.public_repos}</div></div>
        <div><div class="float-left text-muted">Public Gists</div><div class="text-monospace float-right">${json_user.public_gists}</div></div>
        <div><div class="float-left text-muted">Stars Received</div><div class="text-monospace float-right">${allStars}</div></div>
        <div><div class="float-left text-muted">Forks by users</div><div class="text-monospace float-right">${allForks}</div></div>
        <div><div class="float-left text-muted">Open Issues</div><div class="text-monospace float-right">${allIssues}</div></div>
    </li>`;

    // languages badges
    let langBadge = [];
    for (let lang of languages.filter(function(elem, index, self){return index == self.indexOf(elem);}).filter(Boolean))
        langBadge += `<span class="badge badge-primary">${lang}</span>\n`;
    if (langBadge != '')
        gitMoreElement.innerHTML += `<li class="list-group-item">${langBadge}</li>`;

    // about (join date, location, last update)
    let gitAboutElement = `<small class="text-muted">Joined</small><p>${isDate(json_user.created_at)}</p>`;
    if (json_user.location !== null)
        gitAboutElement += `<small class="text-muted">Location</small><p class="text-primary">${json_user.location}</p>`;
    gitAboutElement += `<p class="text-muted m-0">Last Updated on ${isDate(json_user.updated_at)}</p>`;
    gitMoreElement.innerHTML += `<li class="list-group-item">${gitAboutElement}</li>`;

    // activities
    let plusIcon, branchIcon, tagIcon, trashIcon, banIcon, commentIcon, starIcon;
    plusIcon = `<i class="fas fa-plus-circle fa-fw text-success"></i>`;
    branchIcon = `<i class="fas fa-code-branch fa-fw text-success"></i>`;
    tagIcon = `<i class="fas fa-tag fa-fw text-success"></i>`;
    trashIcon = `<i class="fas fa-trash-alt fa-fw text-danger"></i>`;
    banIcon = `<i class="fas fa-ban fa-fw text-danger"></i>`;
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
                } else if (activities.payload.ref_type === "tag") {
                    isStr = tagIcon;
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
            case "ReleaseEvent":
                isStr = `${tagIcon} Released a <a href="${activities.html_url}">${activities.payload.release.name}</a> in ${repoURL}`;
                break;
            case "DeleteEvent":
                isStr = `${trashIcon} Deleted a ${activities.payload.ref_type} ${activities.payload.ref} from ${repoURL}`;
                break;
            case "ForkEvent":
                isStr = `${branchIcon} Forked a repo ${repoURL} to <a href="${activities.payload.forkee.html_url}">${activities.payload.forkee.full_name}</a>"`;
                break;
            case "PullRequestEvent":
                if (activities.payload.action === "closed") {
                    isStr = banIcon;
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
                    isStr = banIcon;
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
})();

// TABS
const tabTitle = home.select('#title');
const tabUpdate = home.selectAll('[data-toggle="tab"]');
for (let tab of tabUpdate) {
    tab.onclick = function() {
        tabTitle.textContent = tab.textContent;
    };
}

// (REPOSITORIES, STARS, FOLLOWERS, FOLLOWING)

(async () => {
    if (username === '') return false;
    const response_repos = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
    const response_starred_repos =  await fetch(`https://api.github.com/users/${username}/starred?sort=updated`);
    const response_followers = await fetch(`https://api.github.com/users/${username}/followers`);
    const response_following =  await fetch(`https://api.github.com/users/${username}/following`);

    const json_repos = await response_repos.json();
    const json_starred_repos = await response_starred_repos.json();
    const json_followers = await response_followers.json();
    const json_following = await response_following.json();

    const gitRepoElement = home.select('#repositories');
    const gitStarRepElement = home.select('#starred-rep');
    const gitFolowersElement = home.select('#followers');
    const gitFollowingElement = home.select('#following');
    const tabStarRepElement = home.select('#starred-rep-tab');
    const tabFolowersElement = home.select('#followers-tab');
    const tabFollowingElement = home.select('#following-tab');

    var user, org;

    json_repos.forEach(repositories => {
        gitRepoElement.innerHTML += `<li class="list-group-item"><i class="fas fa-book fa-fw text-muted"></i> <a href="${repositories.html_url}">${repositories.full_name}</a></li>`;
        user = repositories.owner.html_url;
        org = repositories.owner.type;
    });
    gitRepoElement.innerHTML += `<li class="list-group-item text-center p-2"><a href="${user}?tab=repositories"><small>View all on GitHub</small></a></li>`;

    if (org === 'Organization') {
        gitStarRepElement.remove();
        gitFolowersElement.remove();
        gitFollowingElement.remove();
        tabStarRepElement.remove();
        tabFolowersElement.remove();
        tabFollowingElement.remove();
        return false;
    }

    json_starred_repos.forEach(stars => {
        gitStarRepElement.innerHTML += `<li class="list-group-item"><i class="fas fa-star fa-fw text-warning"></i> <a href="${stars.html_url}">${stars.full_name}</a></li>`;
    });
    gitStarRepElement.innerHTML += `<li class="list-group-item text-center p-2"><a href="${user}?tab=stars"><small>View all on GitHub</small></a></li>`;

    json_followers.forEach(followers => {
        gitFolowersElement.innerHTML += `<li class="list-group-item"><img class="img-fluid rounded col-1" src="${followers.avatar_url}"><a href="${followers.html_url}">${followers.login}</a></li>`;
    });
    gitFolowersElement.innerHTML += `<li class="list-group-item text-center p-2"><a href="${user}?tab=followers"><small>View all on GitHub</small></a></li>`;

    json_following.forEach(following => {
        gitFollowingElement.innerHTML += `<li class="list-group-item"><img class="img-fluid rounded col-1" src="${following.avatar_url}"><a href="${following.html_url}">${following.login}</a></li>`;
    });
    gitFollowingElement.innerHTML += `<li class="list-group-item text-center p-2"><a href="${user}?tab=following"><small>View all on GitHub</small></a></li>`;
})();

// FUNCTIONS
function isClick() {
    if (home.select('#search_second').value !== '')
        window.location = `/${home.select('#search_second').value}`;
    else 
        window.location = `/${home.select('#search_first').value}`;
}

function isDate(d) {
    return new Date(d).toLocaleDateString(['en'], {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
}

function isURL(u) {
    return u.replace("api", "www").replace("/repos", "");
}

function isTimeAgo(t) {
    let current = new Date();
    let previous = new Date(t);
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var elapsed = current - previous;
    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) + " seconds ago";
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) + " minutes ago";
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) + " hours ago";
    } else if (elapsed < msPerMonth && Math.round(elapsed / msPerDay) <= 2) {
        return Math.round(elapsed / msPerDay) + " days ago";
    } else {
        return previous.toLocaleDateString(['en'], {
            month: "long",
            day: "numeric"
        });
    }
}