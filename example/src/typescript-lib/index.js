/* eslint-disable */
function cntl(template) {
    var templateElements = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        templateElements[_i - 1] = arguments[_i];
    }
    return template
        .reduce(function (sum, n, index) {
        var templateElement = templateElements[index];
        if (typeof templateElement === 'string') {
            return "" + sum + n + templateElement;
        }
        return "" + sum + n;
    }, '')
        .trim()
        .replace(/\s{2,}/g, ' ');
}

export default cntl;
