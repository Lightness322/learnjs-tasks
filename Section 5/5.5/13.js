function unique(arr) {
    let result = [];
    for (item of arr) {
        if (!result.includes(item)) {
            result.push(item);
        };
    };
    return result;
};