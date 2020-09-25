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

/**
 * @name: 根据中序和后序遍历结果，还原二叉树
 * @param {Array} inorder 中序遍历结果
 * @param {Array} postorder 后续遍历结果
 * @return  {TreeNode}  二叉树结构
 * */

var buildTree2 = function buildTree(inorder, postorder) {
    return build2(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1);
}
function build2(inorder, inStart, inEnd, postorder, postStart, postEnd) {
    if (inStart > inEnd) { return null; }
    let rootVal = postorder[postEnd];
    let index = inorder.indexOf(rootVal);
    let rightSize = inEnd - index;
    let root = new TreeNode(rootVal);
    root.left = build2(inorder, inStart, index - 1, postorder, postStart, postEnd - rightSize - 1);
    root.right = build2(inorder, index + 1, inEnd, postorder, postEnd - rightSize, postEnd - 1);
}

/**
 * @name: 根据已排好序的数组构造平衡搜索二叉树（BST）
 * @param {Array} nums 已排好序的数组
 * @return {TreeNode} 构造好的平衡搜索二叉树 
 */
var sortedArrayToBST = function (nums) {
    return bst(nums, 0, nums.length - 1)
};
function bst(nums, start, end) {
    if (start > end) return null;
    let mid = Math.floor((start + end) / 2);
    let node = new TreeNode(nums[mid]);
    node.left = bst(nums, start, mid - 1);
    node.right = bst(nums, mid + 1, end);
    return node;
}

/**
 * @name: 判断一颗二叉树是否是平衡二叉树(先序遍历，时间复杂度为O(n^2))
 * @param {type}
 * @return {type}
 */
var isBalanced = function (root) {
    if (root == null) return true;
    //获取左右的深度
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    //若左右深度相差大于1，则不是平衡树
    if (Math.abs(leftDeep - rightDeep) > 1) {
        return false;
    } else {
        //判断左右子树是否平衡
        return isBalanced(root.left) && isBalanced(root.right);
    }
}
//获取树的深度
function getDeep(root) {
    if (root == null) return 0;
    if (root.left == void 0 && root.right == void 0) return 1;
    return Math.max(getDeep(root.left), getDeep(root.right)) + 1;//取两个深度中最大的一个，加上自身
}

/**
 * @name: 判断一颗二叉树是否是平衡二叉树(后序遍历，时间复杂度为O(n))(该方法还有问题，需要解决)
 * @param {type} 
 * @return {type} 
 */
var isBalanced = function (root) {
    if (!root) return true;
    return helper(root, 1);
};
//由于先序遍历要先求出树的深度，因此这次走后序遍历来实现,
// 由于这里不方便用引用，因此定义了一个全局变量depth，depth[1]表示左子树的深度,depth[2]表示右子树的深度
function helper(root, dir) {
    //如果为空，往父节点返
    if (root == null) {
        depth[dir] = 0;
        return true;
    }
    let left = 0;
    let right = 0;
    //记录左节点和右节点的深度
    if (helper(root.left, 1) && helper(root.right, 2)) {
        let pf = depth[1] - depth[2];
        if (Math.abs(pf) < 2) {
            let tmpDir = depth[2] > depth[1] ? 2 : 1;
            // depth[dir]+=1;
            depth[dir] = 1 + depth[tmpDir];
            return true;
        }
    }
    return false;
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
        traverse(tree.left,res);
        res.push(tree.val);
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
        traverse(tree.left,res);
        traverse(tree.right,res);
        res.push(tree.val);
    }
    traverse(tree,res);
    return res;
}