/**
 * @name： 顺序表的查找查找 
 * @param {Array} st 静态查找表(0号空间留空，用来做监视哨)
 * @param {Any} key 查找的关键字
 * @return {Int} 目标的下标，未找到为0(虽然这不符合js的编程逻辑)
 */
// typedef struct{
//     ElemType *elem;
//     int length;
// }SSTable
function SeqSearch(st,key){
    st[0] = key; //设置哨兵（哨兵的作用：当ST.length>=1000时，进行一次查找所需的平均时间几乎减少一半）
    let i;
    for(i=st.length;st[i]!=key;--i){//从后往前找
                 
    }
    return i; //返回i，找不到时，i为0 
}
var arr = [null,2,3,4,5];
SeqSearch(arr,3);
/**
 * @name: 折半查找
 * @param {Array} st  需要查找的目标数组(st是有序表)
 * @param {Int} key  需要查找的关键字
 * @return {Int}  index 返回对应的下标 未找到返回-1
 */
function BinarySearch(st,key){
    let low = 0;
    let high = st.length;
    let mid;
    while(low<=high){

        mid = Math.floor((low+high)/2);
        console.log(mid);
        if(st[mid]==key) return mid;
        else if(key<st[mid]){
            //在左边
            high = mid-1;
        }else{
            low = mid+1;
        }
    }
    return -1;
}

var arr = [1,2,3,4,5];
BinarySearch(arr,3);