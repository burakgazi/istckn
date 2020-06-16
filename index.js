/**
 *
 * RULES OF TURKISH IDENTITY NUMBER ALGORITHM
 *  + First digit cannot be '0'
 *  + 1,3,5,7,9 digit total multiply by 7 minus 2,4,6,8 digits total mod by 10 gives us 10th digit
 *  + 1,2,3,4,5,6,7,8,9,10 digits total mod by 10 gives us the 11th digit
 */

/**
 * Validating Turkish Identity Number
 * @param {String || Number} tckn -- Turkis Identity Number
 */
function IsTCKN(v) {
    // Only number or string is allowed
    if (!Number.isInteger(v) && typeof v !== typeof 'string') return false;
    const tckn = v.toString();
    // Id number must be 11 chars long
    if (tckn.length !== 11) return false;

    // Lets divide the tckn into digits
    const vals = tckn.split('').map(a => Number(a));
    // First digit cannot be 0
    if (vals[0] === 0) return false;
    const evens = (vals[0] + vals[2] + vals[4] + vals[6] + vals[8]);
    const odds = (vals[1] + vals[3] + vals[5] + vals[7]);

    // odds times 7 minus evens mod 10 = tenth
    const tenthDigit = ((evens * 7) - odds) % 10;
    // odds + evens + 10th mod 10 = eleventh
    const eleventhDigit = (odds + evens + vals[9]) % 10;
    if (tenthDigit !== vals[9]) return false;
    if (eleventhDigit !== vals[10]) return false;
    return true;
}

module.exports = IsTCKN;