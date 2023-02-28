function topSalary(obj) {
    let topSal = 0;
    let topName = null;
    for ([name, value] of Object.entries(obj)) {
        if (value > topSal) {
            topSal = value;
            topName = name;
        }
    }
    return topName;
}