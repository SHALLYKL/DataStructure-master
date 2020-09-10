//回溯算法的通用框架已写在markdown里面了。

var res = [];
/**
 * @name: 输入一组不重复的数字，返回它们的全排列
 * @param {Array}
 * @return {Array} 全排列数组
 */
function permute(arr){
    backtrack(arr,[]);
}
/**
 * @name: 
 * @param {type} 
 * @param {Array} track 路径
 * @return {type} 
 */
//路径：记录在track中
//选择列表：arr中不存在与track的那些元素
//结束条件：arr中的元素全都在track中出现
function backtrack(arr,track){
    if(track.length==arr.length){
        res.push([].concat(track));
        return;
    }
    for(let i=0;i<arr.length;i++){
        //排除不合适的选择
        if(track.indexOf(arr[i])!=-1) continue;
        //做选择
        track.push(arr[i]);
        //进入下一层决策树
        backtrack(arr,track);
        track.pop();
    }
}

var testArr = [1,2,3];
// permute(testArr);

var queArr = [];
/**
 * @name: N皇后问题 输入棋盘边长n，返回所有合法的位置
 * @param {type} 
 * @return {type} 
 */
function NQueens(n){
    //0表示空，1表示皇后，初始化空棋盘
    let arr = [];
    arr.length = n;
    for(let i=0;i<n;i++){
        arr[i] = [];
        arr[i].length=n;
        arr[i].fill(0);
    }
    NQueensBacktrack(arr,0);
    return queArr;
}
//路径：arr中小于row的那些都已经成功放置了皇后
//选择列表：第row行的所有列都是放置皇后的选择
//结束条件：row超过arr的最后一行
function NQueensBacktrack(arr,row){
    // console.log(arr,row)
    if(row == arr.length){
        queArr.push([].concat(arr));
        return;
    }
    let n = arr[row].length;
    for(let col = 0;col<n;col++){
        //排除不合法选择
        if(!isValid(arr,row,col)) continue;
        //做选择
        console.log(row,col);
        arr[row][col] = 1;
        //进入下一行决策
        NQueensBacktrack(arr,row+1);
        //撤销选择
        arr[row][col] = 0;
    }
}
function isValid(arr,row,col){
    let n = arr.length;
    //检查列是否有皇后互相冲突
    for(let i=0;i<n;i++){
        if(arr[i][col] == 1){
            return false;
        }
    }
    //检查右上方是否有皇后互相冲突
    for(let i = row-1,j=col+1;i>=0 && j<n;i--,j++){
        if(arr[i][j]==1){
            return false;
        }
    }
    for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
        if(arr[i][j]==1){
            return false;
        }
    }
    return true;
}
NQueens(4);
