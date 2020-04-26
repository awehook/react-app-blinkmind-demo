export function convertIsoToFormat(activeDate) {
    if (activeDate.getMonth() + 1 < 10) {
        return activeDate.getFullYear() + '-0' + (activeDate.getMonth() + 1) + '-' + activeDate.getDate();
    } else {
        return activeDate.getFullYear() + '-' + (activeDate.getMonth() + 1) + '-' + activeDate.getDate();
    }
}