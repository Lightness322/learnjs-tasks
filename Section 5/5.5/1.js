function camelize(str) {
    arr = str.split('-');
    upperArr = arr.map((word, index) => index != 0 ? word[0].toUpperCase() + word.slice(1) : word);
    return upperArr.join('');
}