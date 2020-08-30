/*
 * @Descripttion: 赫夫曼编码
 * @Author: shally <657669149@qq.com>
 * @Date: 2020-08-29 21:06:35
 * @LastEditors: kl
 * @LastEditTime: 2020-08-30 18:11:18
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
    let tmp1,tmp2;
    // if(len<3){
    //     return 1;
    // }
    tmp1 = HT[1].weight;
    s1 = 1;
    
    for(let i=1;i<len;i++){
        if(HT[i].parent!=0) continue;
        if(tmp1>HT[i].weight){
            tmp1 = HT[i].weight;
            s1 = i;
        }
    }
    
    for(let i=1;i<len;i++){
        if(i==s1 || HT[i].parent!=0) continue;
        if(tmp2==void 0){
            tmp2 = HT[i].weight;
            s2 = i;
        }else{
            if(tmp2>HT[i].weight){
                tmp2 = HT[i].weight;
                s2 = i;
            }
        }
    }
    return {s1:s1,s2:s2};
}
// var arr = [{weight:1,parent:0,lchild:0,rchild:0},
//     {weight:6,parent:0,lchild:0,rchild:0},
//     {weight:4,parent:0,lchild:0,rchild:0},
//     {weight:8,parent:0,lchild:0,rchild:0},
//     {weight:10,parent:0,lchild:0,rchild:0},
//     {weight:3,parent:0,lchild:0,rchild:0},
//     {weight:7,parent:0,lchild:0,rchild:0},
//     {weight:6,parent:0,lchild:0,rchild:0}];
// console.log(Select(arr,4));

/**
 * @name: 
 * @param {HuffmanTree} HT 赫夫曼树 
 * @param {HuffmanCode} HC 赫夫曼编码表
 * @param {Array}  w n个字符的权值
 * @param {Number}  n 字符数量
 * @return {HuffmanCode} 赫夫曼编码表
 */
function HuffmanCoding(HT,HC,w,n){
    if(n<1) return;
    let m = 2*n-1;//求出树的结点数（一棵有n个叶子结点的赫夫曼树共有2n-1个结点）
    let i;
    for(i=1;i<n;++i,++p){
        HT[i] = HTNode(w[i],0,0,0);
    }
    for(i=n;i<=m;++i,++p){
        HT[i] = HTNode(0,0,0,0);

    } 
    HT.sort((e1,e2)=>{
        return e1.weight-e2.weight;
    });
    let s1 =1;
    let s2 =2;
    for(i=n+1;i<=m;++i,s1+=2,s2+=2){
        //在HT[1...i-1]选择parent为0且weight最小的两个结点，其序号分别未s1和s2；
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
    let cd = [];
    for(let i=0;i<=n;++i){//逐个字符求赫夫曼编码
        let start = n-1;//编码结束符位置
        for(c=i,f = HT[i].parent;f!=0;c=f,f=HT[f].parent){
            if(HT[f].lchild==c){
                cd[--start] = 0;
            }else{
                cd[--start] = 1;
            }
        }
    }
    HC = cd;
    return HC;
}
