/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length===0) return 0;
    var len = 0;
    var maxLen = 0;
    var str = '';
    for(var i = 0; i < s.length; i++){
        str += s.charAt(i);
        len ++;
        if(str.indexOf(s.charAt(i)) != (len - 1)){
            str = str.substr(str.indexOf(s.charAt(i)) + 1, len - str.indexOf(s.charAt(i)));
            len = str.length;
        }
        maxLen = maxLen > len ? maxLen: len;
    }
    return maxLen;
};