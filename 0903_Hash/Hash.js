/*
 * @Descripttion: 开放定址哈希表
 * @Author: kl <657669149@qq.com>
 * @Date: 2020-09-03 15:54:53
 * @LastEditors: kl
 * @LastEditTime: 2020-09-03 19:50:13
 */

var hashsize = [977]  //哈希表容量递增表，一个合适的素数序列
var hashTableEle = {
    elem: 0, //数据元素存储基址，动态分配数组
    count: 0,    //当前数据元素个数
    sizeindex: 0 //hashsize[sizeindex]为当前的容量
};
// var HashTable = [hashTableEle]
const SEARCH_RESULT = {
    SUCCESS:1,
    UNSUCCESS:0,
    DUPLICATE:-1
}

/**
 * @name: 开放定址哈希表查找
 * @param {HashTable} H 开放定址哈希表
 * @param {Any} key 关键码
 * @param {Int} p 若查找成功，以p指示待查数据
 * @param {Int} c 用以计冲突次数，其初值置零，供建表插入时参考
 * @return {SEARCH_RESULT} 返回结果值
 */
function SearchHash(H,key,p,c){
    p = Hash(key);//求得哈希地址
    while(H.elem[p].key!=void 0 && key!=H.elem[p].key){
        collision(p,++c);
    }
    if (key == H.elem[p].key){
        return SEARCH_RESULT.SUCCESS;
    }else{
        return UNSUCCESS;
    }
}

/**
 * @name: 插入 查找不成功时插入数据元素e到开放定址哈希表H中，并返回SUCCESS；
 * 若冲突次数过大，则重建哈希表
 * @param {HashTable} H 开放定址哈希表
 * @param {hashTableEle} e 插入元素
* @return {SEARCH_RESULT} 返回结果值
 */
function InsertHash(H,e){
    let c = 0;
    if(SearchHash(H,e.key,0,c)){
        return SEARCH_RESULT.DUPLICATE;
    }else if(c<hashsize[H.sizeindex]/2){
        H.elem[p] = e; //插入e
        ++H.count;
        return SEARCH_RESULT.SUCCESS;
    }else{
        RecreateHashTable(H); //重建哈希表
        return UNSUCCESS;
    }
}