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
function TreeNode(val,left,right) {
    this.val = val;
    this.left = left===undefined?null:left;
    this.right = right === undefined ? null : right;
}

/**
 * @name: 根据先序和中序遍历结果，还原二叉树(二叉树中没有值相同的结点)
 * @param {type} 
 * @return {type} 
 */
var buildTree = function buildTree(preorder,inorder){
    return build(preorder,0,preorder.length-1,inorder,0,inorder.length-1);
}
function build(preorder,preStart,preEnd,inorder,inStart,inEnd){
    console.log(preStart, preEnd);
    if(preStart>preEnd){return null;}
    let rootVal = preorder[preStart];
    let index = inorder.indexOf(rootVal);
    let leftSize = index-inStart;
    let rightSize = inEnd-index;
    
    let root = new TreeNode(rootVal);
    root.left = build(preorder,preStart+1,preStart+leftSize,inorder,inStart,index-1);
    root.right = build(preorder, preStart + leftSize+1,preEnd,inorder,index+1,inEnd);
    return root;
}
var proto = TreeNode.prototype;

proto.init = function(){
    
}
proto.preOrder = function(){
    
}
/**
 * @name: 先序遍历二叉树
 * @param {TreeNode} tree
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
 * @param {TreeNode} tree
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
 * @param {TreeNode} tree
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