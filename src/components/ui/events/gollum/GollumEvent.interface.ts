interface Page {
    page_name: string
    title: string
    action: string
    sha: string
    html_url: string
}

export interface GollumEvent {
    pages: Page[]
}
