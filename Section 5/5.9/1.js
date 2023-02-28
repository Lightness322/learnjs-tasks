function sumSalaries(obj) {
    let result = 0;
    for (item of Object.values(obj)) {
        result += item;
    }
    return result;
}