export function formatDateString(value: string) {
    return new Date(value).toLocaleDateString(['en'], {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export function formatDateAgo(value: string | null) {
    const current = new Date()
    const previous = new Date(value || Date.now())

    const msPerMinute = 60 * 1000
    const msPerHour = msPerMinute * 60
    const msPerDay = msPerHour * 24
    const msPerMonth = msPerDay * 30
    const elapsed = current.getTime() - previous.getTime()

    if (elapsed < msPerMinute) {
        return `${Math.round(elapsed / 1000)} seconds ago`
    } else if (elapsed < msPerHour) {
        return `${Math.round(elapsed / msPerMinute)} minutes ago`
    } else if (elapsed < msPerDay) {
        return `${Math.round(elapsed / msPerHour)} hours ago`
    } else if (elapsed < msPerMonth && Math.round(elapsed / msPerDay) <= 2) {
        return `${Math.round(elapsed / msPerDay)} days ago`
    }

    return previous.toLocaleDateString(['en'], {
        month: 'long',
        day: 'numeric'
    })
}
