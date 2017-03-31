XMLHttpRequest.prototype.oldSend = XMLHttpRequest.prototype.send;


XMLHttpRequest.prototype.send = function(arg){
this.setRequestHeader("Authorization","Bearer "+"test");
this.oldSend(arg);
}
