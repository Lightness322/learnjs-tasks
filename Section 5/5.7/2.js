function aclean(arr) {
    newArr = [];
    newObj = {};
    for (item of arr) {
        sortedArrItem = item.toLowerCase().split('').sort().join('');
        newObj[sortedArrItem] = item;
    }
    for (key in newObj) {
        newArr.push(newObj[key]);
    }
    return newArr;
}