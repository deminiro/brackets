module.exports = function check(str, bracketsConfig) {
  // your solution
  const devide = [['(', ')']];
  const devide1 = [['{', '}']];
  const devide2 = [['[', ']']];
  const devide3 = [['|', '|']];
  const devide4 = [['1', '2']];
  const devide5 = [['3', '4']];
  const devide6 = [['5', '6']];
  const devide7 = [['7', '7']];
  const devide8 = [['8', '8']];

  let stack = [];
  const as = str.split('');
  if(as.length%2 === 0){
    for(i=0;i<=as.length;i++){
      stack.push(as[0]);
      as.shift();
      for(j=0;j<as.length;j++){
        
      }
    }
  }else{
  return false;
  }
}
