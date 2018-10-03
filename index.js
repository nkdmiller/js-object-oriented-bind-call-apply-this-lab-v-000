function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn.call(this, thisValue, arg);
}