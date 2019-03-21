module.exports = function check(str, bracketsConfig) {
  // your solution
  var as = str.split(', ');
    var opens = ['(','{','[','|','1','3','5','7','8'];
    var closes = [')','{','[','|','2','4','6','7','8'];
  var stack = [];
  as.sort(bracketsConfig);
  return true;
}
