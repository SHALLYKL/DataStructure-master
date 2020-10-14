var ArrayQueue = function(){
    this.items = [];
    this.n = 0;
    this.head = 0;//队头下标
    this.tail = 0;//队尾下标
}
var proto = ArrayQueue.prototype;
proto.init = function(capacity){
    this.items = new Array(capacity);
    this.n = capacity;
}
proto.enqueue = function(item){
    if(this.tail==n) return false;//队列已满
    this.items[tail] = item;
    ++this.tail;
    return true;
}
proto.dequeue = function(){
    if(this.head==this.tail) return false;
    let res = this.items[head];
    ++head;
    return res;
}