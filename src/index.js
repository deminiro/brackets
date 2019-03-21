module.exports = function check(str, bracketsConfig) {
  // your solution
  const devide0 = ['(', ')'];
  const devide1 = ['{', '}'];
  const devide2 = ['[', ']'];
  const devide3 = ['|', '|'];
  const devide4 = ['1', '2'];
  const devide5 = ['3', '4'];
  const devide6 = ['5', '6'];
  const devide7 = ['7', '7'];
  const devide8 = ['8', '8'];
  let stack = [];
  let as = str.split('');
  if(as.length%2 === 0){
    for(i=0;i<=as.length;i++){
      if(as[0] === devide0[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide0[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide1[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide1[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide2[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide2[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide3[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide3[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide4[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide4[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide5[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide5[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide6[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide6[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide7[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide7[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      if(as[0] === devide8[0]){
        stack.push(as[0]);
        as.shift();
        const ind = as.indexOf(devide8[1],[fromIndex = 0]);
        stack.push(as[ind]);
        as.splice(ind,1);
      }
      else if( as[0] === devide0[1] || as[0] === devide1[1] 
             ||as[0] === devide2[1] || as[0] === devide4[1]
             ||as[0] === devide5[1] || as[0] === devide6[1]){
               return false;
      }
      else if(as.length === 0){
        break;
      }
     }
    return true;
  }else{
  return false;
  }
}
