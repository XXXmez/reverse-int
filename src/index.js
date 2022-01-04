module.exports = function reverse (n) {
    if (n > 0) {
        let str = '' + n;
        let newNum = +((str).split('').reverse().join(''));
        //console.log('Больше');
        //console.log(str, typeof str);
        //console.log(newNum);
        return newNum;
    } else {
        let str = '' + -n;
        let newNum = +((str).split('').reverse().join(''));
        //console.log('Меньше');
        //console.log(str, typeof str);
        //console.log(newNum);
        return newNum;
    }
}
