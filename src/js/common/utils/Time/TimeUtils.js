export function getTimeDiff(start, end = new Date().getTime()) {
    const timeDiff = start ? end - start : 0;
    const time = new Date(0, 0);
    time.setMilliseconds(timeDiff);
    return time;
}

function getParsedNumber(n) {
    return n === 0 ? false : n < 10 ? '0' + n : n;
}
export function getTimeString(date) {
    const hours   = getParsedNumber(date.getHours());
    const minutes = getParsedNumber(date.getMinutes());
    const seconds = getParsedNumber(date.getSeconds()) || '00';
    let millis  = getParsedNumber(date.getMilliseconds()) || '00';
    millis = millis.toString().substring(0, 2);

    return (
        (!!hours   ? hours   + ':' : '') +
        (!!minutes ? minutes + ':' : '') +
        (seconds + '.') +
        (millis)
    );

}