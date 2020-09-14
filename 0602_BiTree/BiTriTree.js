/*二叉树
 * @Descripttion: 
 * @Author: kl <657669149@qq.com>
 * @Date: 2020-08-28 13:51:06
 * @LastEditors: kl
 * @LastEditTime: 2020-08-28 13:52:53
 */
/**
 * // Definition for a Node.
 * function Node(val, left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
function BiTree(val,left,right) {
    this.val = val;
    this.left = left;
    this.right = right;
}
//按线序次序输入二叉树中结点的值，null表示空树
//构造二叉树
function CreateBiTree(arr){
    var res = new BiTree();
    var index = 0;
    function create(arr,T){
        if(arr==void 0) return null;
        console.log(arr,index,T);
        T = T==void 0?new BiTree():T;
        T.val = arr[index];
        CreateBiTree(arr[index+1],index+1,T.left);//构造左子树
        CreateBiTree(arr[index+2],index+2,T.right);//构造右子树
        // return T;
    }
    create(arr,0,res)
    return res;
};
CreateBiTree([1,null,1]);
var proto = BiTree.prototype;
/**
 * 转置矩阵 （该算法虽然节省了空间，但是时间复杂度高了。因此该算法仅适用于tu<<muxnu的情况）
 * @param {M} M ={data:{[null,{i,j,e},...]},mu:矩阵的行数,nu:矩阵的列数,tu:非零个数}
 * @returns {Boolean} true
 */
proto.init = function(){
    
}
proto.createBiTree = function(){

}
proto.preOrder = function(){

}
/**
 * @name: 先序遍历二叉树
 * @param {BiTree} tree
 * @return {Array} 
 */
function preOrder(tree){
    if(tree==void 0) return [];
    let res = [];
    function traverse(tree,res){
        if(tree==void 0) return res;
        res.push(tree.val);
        traverse(tree.left,res);
        traverse(tree.right,res);
    }
    traverse(tree,res);
    return res;
}

/**
 * @name: 中序遍历二叉树
 * @param {BiTree} tree
 * @return {Array} 
 */
function inOrder(tree){
    if(tree==void 0) return [];
    let res = [];
    function traverse(tree,res){
        if(tree==void 0) return res;
        res.push(tree.val);
        traverse(tree.left,res);
        traverse(tree.right,res);
    }
    traverse(tree,res);
    return res;
}
/**
 * @name: 中序遍历二叉树
 * @param {BiTree} tree
 * @return {Array} 
 */
function postOrder(tree){
    if(tree==void 0) return [];
    let res = [];
    function traverse(tree,res){
        if(tree==void 0) return res;
        res.push(tree.val);
        traverse(tree.left,res);
        traverse(tree.right,res);
    }
    traverse(tree,res);
    return res;
}