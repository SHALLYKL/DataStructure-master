var LinkNode = function(next,val){
    this.next = next;
    this.val = val;
}
var LinkedList = function(){
    this.next = null;
    this.val = null;
}
var proto = LinkedList.prototype;
proto.insert = function(list,i,e){
    if(list==void 0) return false;//链表不存在，插入失败，返回false
    let p = list;
    let j=0;
    while(p!=null && j<i){
        p = p.next
        ++j;
    }
    if(p==null||j>i){
        return false;//遍历到头还没找到位置，则插入失败，返回false
    }
    s.data = e;
    s.next = p.next;
    p.next = s;
}
proto.delete = function(list,i,e){
    if(list==null || list.next==null){
        return false;
    }
    let p = list;
    let j = 0;
    while(p.next!=null && j<i){
        p = p.next;
        ++j;
    }
    if(p.next==null || j>i){
        return false;//遍历到头还没找到位置，没找到该元素
    }
    let q = p.next;
    p.next = q.next;
    let e = q.data;
    delete q;//释放q的内存
}
/**
 * @name: 判断一个用链表存储的字符串是否是回文
 * @param {LinkedList}  
 * @param {low} 基准
 * @param {high} 基准
 */
function QuickSort1(str) {
    let slow = str[0];
    let quick = str[0];
    while(quick!=null){
        slow = slow.next;
        slow.next = slow;
        quick = quick.next.next;
    }
    
}
var testArr = [7, 5, 3, 10, 2, 4, 1];
console.log(QuickSort1(testArr));