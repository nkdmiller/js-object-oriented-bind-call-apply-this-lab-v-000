function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue, arg);
}

function setThisWithCall(fn, thisValue, args){
  return fn.apply(thisValue, [args]);
}