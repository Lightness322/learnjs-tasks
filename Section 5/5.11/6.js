function getSecondsToTomorrow() {
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return (24 * 3600) - Math.round((now - today) / 1000);
}