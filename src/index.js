module.exports = function check(str, bracketsConfig) {
  // your solution
  const left = ['(','{','[','|','1','3','5','7','8'];
  const right = [')','}',']','|','2','4','6','7','8'];
  let as = str.split('');
  const copy = as.slice();
  let stack = [];
  if(as.length % 2 === 0){
  for(i=0;i<as.length;i++){
    if(copy[0] === left[0] || copy[0] === left[1] || copy[0] === left[2] ||
       copy[0] === left[3] || copy[0] === left[4] || copy[0] === left[5] ||
       copy[0] === left[6] || copy[0] === left[7] || copy[0] === left[8]){
    if(as[0] === left[0]){
      stack.push(as[0]);
      as.shift();
      }
    if(as[0] === right[0]){
      const pr = stack.pop();
      if(pr === left[0]){
        as.shift();
        }else{
          return false;
        }
    }
    if(as[0] === left[1]){
      stack.push(as[0]);
      as.shift();
      }
      if(as[0] === right[1]){
        const pr = stack.pop();
        if(pr === left[1]){
          as.shift();
          }else{
            return false;
          }
      }
    if(as[0] === left[2]){
      stack.push(as[0]);
      as.shift();
      }
      if(as[0] === right[2]){
        const pr = stack.pop();
        if(pr === left[2]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[3] && stack.indexOf(left[3]) === -1){
        stack.push(as[0]);
        as.shift();
      }
      if(as[0] === right[3]){
        const pr = stack.pop();
        if(pr === left[3]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[4]){
        stack.push(as[0]);
        as.shift();
      }      
      if(as[0] === right[4]){
        const pr = stack.pop();
        if(pr === left[4]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[5]){
        stack.push(as[0]);
        as.shift();
      }
      if(as[0] === right[5]){
        const pr = stack.pop();
        if(pr === left[5]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[6]){
        stack.push(as[0]);
        as.shift();
      }
      if(as[0] === right[6]){
        const pr = stack.pop();
        if(pr === left[6]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[7]  && stack.indexOf(left[7]) === -1){
        stack.push(as[0]);
        as.shift();
      }
      if(as[0] === right[7]){
        const pr = stack.pop();
        if(pr === left[7]){
          as.shift();
          }else{
            return false;
          }
      }
      if(as[0] === left[8]  && stack.indexOf(left[8]) === -1){
        stack.push(as[0]);
        as.shift();
      }
      if(as[0] === right[8]){
        const pr = stack.pop();
        if(pr === left[8]){
          as.shift();
          }else{
            return false;
          }
      }
   }else{
    return false;
  }
}
return true;
}else{
  return false;
}
}
