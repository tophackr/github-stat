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