/**
 * @name： 二叉排序树
 * @param {Array} {
    data:{key:0},
    lchild: 0,
    rchild: 0
}[] t 二叉树数据结构
 * @param {Any} key 查找的关键字
 * @param {Any} f t的双亲下标
 * @param {Any} p 该元素节点下标
 * @return {Int} 目标的下标
 */
var data = [{data:{key:1},lchild:1,rchild:2}];
function SearchBST(t, key,f,p) {
    //在根指针t所指二叉排序树中递归地查找某关键字等于key的数据元素
    //若查找成功，则返回指向该数据元素结点的指针，否则返回空指针。
    if(!t) {p=f;return false;} //查找不成功

    else if (t.data.key == key) {p=t;return true}//查找成功
    else if (t.data.key > key) {
        return SearchBST(t.lchild, key,t,p);
    } else {
        return SearchBST(t.rchild, key,t,p);
    }
}

function InsertBST(t,e){
    if(!SearchBST(t,e.key,null,p)){//查找不成功
        let s = {};
        s.data = e;
        s.lchild = s.rchild = null;
        if(!p) t = s; //被插节点s为新的根节点
        else if(e.key<p.data.key){
            p.lchild = s; //被插节点s为左孩子
        }else{
            p.rchild = s;//被插节点s为右孩子
        }
        return true;
    }
    return false;
}

function DeleteBST(t, key) {
    if(!t) return false;
    if(key==t.data.key){
        // return 
        return Delete(t);
    }else if(key<t.data.key){
        return DeleteBST(t.lchild,key);
    }else{
        return DeleteBST(t.rchild,key)
    }
}

function Delete(p){
    //从二叉排序树中删除结点p，并重接它的左或右子树
    let q;
    if (!p.rchild) {//右子树为空则只需重接它的左子树
        q=p;
        p = p.lchild;
    }else if(!p.rchild){ //只需重接它的右子树
        q = p;
        p = p.rchild;
    }else{ //左右子树均不空
        q=p;
        let s = p.lchild;//转左，然后向右到尽头
        while(s.rchild){  
            q=s;        
            s= s.rchild;
        }
        p.data = s.data;  //s指向被删节点的“前驱”
        if(q!=p){
            q.rchild=s.lchild; //重接q的右子树
        }else{
            q.lchild = s.lchild; //重接q的左子树
        }
    }
    return true;
}

/**
 * @name: 平衡二叉树
 * @param {type} 
 * @return {type} 
 */
function AVLTree(){
    
}