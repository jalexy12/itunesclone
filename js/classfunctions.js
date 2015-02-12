function assertNumber (number, errorMessage) {
    if (typeof number !== "number") {
        throw new Error(errorMessage);
    }
};

function uniq(a) {
    return a.sort().filter(function(item, pos) {
        return !pos || item != a[pos - 1];
    });
} 

module.exports.uniq = uniq; 
module.exports.assertNumber = assertNumber;
