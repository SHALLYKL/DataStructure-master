//数组形成的队列
var ArrayQueue = function(){
    // this.items = [];
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
//数组形成的循环队列
var CircularQueue = function(){
    this.n = 0;
    this.head = 0;
    this.tail = 0;
}
var proto = CircularQueue.prototype;
proto.init = function(capacity){
    this.items = new Array(capacity);
    this.n = capacity;
}
proto.enqueue = function(item){
    if((this.tail+1)%this.n==this.head) return false;//队列满了
    this.items[this.tail] = item;
    this.tail = (this.tail+1)%this.n;
    return true;
}
proto.dequeue = function(){
    if(this.tail==this.head) return null;//队列为空
    let res = this.items[this.head];
    this.head = (this.head+1)%this.n;
    return res;
}