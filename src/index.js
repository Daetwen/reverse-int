module.exports = function reverse (n) {
    let result = 0;
    n = Math.abs(n);
    let length = ('' + n).length;
    for(i = 0; i < length; i++){
        result = result * 10;
        result += n % 10;
        n = Math.floor(n / 10);
    }
    return result;
}
