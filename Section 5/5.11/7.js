function formatDate(date) {
    let now = new Date();
    let difSec = Math.round((now - date) / 1000);
    if (difSec < 1) {
        return 'прямо сейчас';
    }
    else if (difSec < 60) {
        return `${difSec} сек. назад`;
    }
    else if (difSec < 3600) {
        return `${Math.round(difSec / 60)} мин. назад`;
    }
    else {
        dateDay = String(date.getDate()).length < 2 ? '0' + date.getDate() : date.getDate();
        dateMonth = String(date.getMonth() + 1).length < 2 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        dateYear = String(date.getFullYear()).slice(2, 4);
        dateHours = String(date.getHours()).length < 2 ? '0' + date.getHours() : date.getHours();
        dateMinutes = String(date.getMinutes()).length < 2 ? '0' + date.getMinutes() : date.getMinutes();
        return `${dateDay}.${dateMonth}.${dateYear} ${dateHours}:${dateMinutes}`;
    }
}