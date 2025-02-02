export function removeProtocol(value: string) {
    return value.replace(/^[a-zA-Z]+:\/\//i, '')
}
