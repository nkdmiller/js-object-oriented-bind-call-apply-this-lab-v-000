function justInvoke(fn){
  return fn();
}

function setThisWithCall(fn, thisValue, arg){
  return fn(thisValue, arg).call(this);
}