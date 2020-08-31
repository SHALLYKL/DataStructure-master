/*
 * @Descripttion: 赫夫曼编码
 * @Author: shally <657669149@qq.com>
 * @Date: 2020-08-29 21:06:35
 * @LastEditors: kl
 * @LastEditTime: 2020-08-31 20:27:20
 */

const HTNode = function(w,p,l,r){
    return {
        weight:w,
        parent:p,
        lchild:l,
        rchild:r
    }
}
function Select(HT,len){
    let s1,s2;
    let w1,w2;
    w1 = w2 = 2147483647;//最大的数值
    len = len == void 0 ?HT.length:len;
    for (let i = 1; i <= len; i++) {
        if (HT[i].parent != 0) continue;
        if (w1 > HT[i].weight) {
            s2 = s1;
            w2 = w1;
            
            s1 = i;
            w1 = HT[i].weight;
        }else if(HT[i].weight>=w1 && HT[i].weight<w2){
            s2 = i;
            w2 = HT[i].weight;
        }
    }
    return {s1:s1,s2:s2,w1:w1,w2:w2};
}
// var arr = [{weight:1,parent:0,lchild:0,rchild:0},
//     {weight:6,parent:0,lchild:0,rchild:0},
//     {weight:4,parent:0,lchild:0,rchild:0},
//     {weight:8,parent:0,lchild:0,rchild:0},
//     {weight:10,parent:0,lchild:0,rchild:0},
//     {weight:3,parent:0,lchild:0,rchild:0},
//     {weight:7,parent:0,lchild:0,rchild:0},
//     {weight:6,parent:0,lchild:0,rchild:0}];
// console.log(Select(arr));

/**
 * @name: 编码 
 * 1.根据指定的n个权值信息w来创建赫夫曼树HT。
 * 2.由赫夫曼树HT逆序计算赫夫曼编码值HC。
 * @param {HuffmanTree} HT 赫夫曼树 
 * @param {HuffmanCode} HC 赫夫曼编码表
 * @param {Array}  w n个字符的权值
 * @param {Number}  n 字符数量
 * @return {HuffmanCode} 赫夫曼编码表
 */
function huffmanCoding(HT,HC,w,n){
    if(n<1) return;
    let m = 2*n-1;//求出树的结点数（一棵有n个叶子结点的赫夫曼树共有2n-1个结点）
    let i;
    HT[0] = HTNode(n,0,0,0);//0号单元未使用，但其weight记录了原始的权值数量

    //记录权值信息
    for(i=1;i<n;++i){
        HT[i] = HTNode(w[i],0,0,0);
    }
    
    //后面的部分需要计算
    for(i=n;i<=m;++i){
        HT[i] = HTNode(0,0,0,0);
    } 
    // HT.sort((e1,e2)=>{
    //     return e1.weight-e2.weight;
    // });
    let s1 =1;
    let s2 =2;
    //建赫夫曼树
    for(i=n+1;i<=m;++i){
        //在HT[1...i-1]中选择parent为0（未加入树）且weight最小的两个结点，其序号分别未s1和s2
        Select(HT,i-1,s1,s2);
        let s = Select(HT,i-1);
        s1 = s.s1;
        s2 = s.s2;
        HT[s1].parent = i;
        HT[s2].parent = i;
        HT[i].lchild = s1;
        HT[i].rchild = s2;
        HT[i].weight = HT[s1].weight+HT[s2].weight;
        
    }
    
    //从叶子到根逆向求每个字符的赫夫曼编码
    
    for(let i=1;i<=n;++i){//逐个字符求赫夫曼编码
        let start = n-1;//编码结束符位置
        //从叶子到根逆向求编码
        let cd = [];
        for(let c=i,f = HT[i].parent;f!=0;c=f,f=HT[f].parent){
            console.log(c,f,HT[f].lchild)
            if(HT[f].lchild==c){
                cd[--start] = 0;
            }else{
                cd[--start] = 1;
            }
        }
        HC[i] = cd;
    }
    // HC = cd;
    return HC;
}

//打印赫夫曼树结构
function printHuffmanTree(HT){
    for(let i=1;i<HT.length;i++){
        
    }
}
var a = [1,2,3,4]
for(let i=0;i<a.length;++i){
    console.log(a[i],i)
}
console.log(huffmanCoding([], [], [4, 3, 5, 6, 8], 5));