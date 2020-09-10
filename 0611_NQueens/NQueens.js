
/**
 * @name: N皇后问题（在指定大小棋盘上求出N皇后问题的各解）
 * @param {Int} i 当前行数
 * @return {Int} n 棋盘规格nxn
 */
//
// var data = [{i:0,j:0}];
var layout = [];
/**
 * @name: N皇后问题 输入棋盘边长n，返回所有合法的位置
 * @param {Int} n 棋盘规格nxn
 * @return {Array} 所有的解
 */
function NQueens(n) {
    //0表示空，1表示皇后，初始化空棋盘
    let arr = [];
    arr.length = n;
    for (let i = 0; i < n; i++) {
        arr[i] = [];
        arr[i].length = n;
        arr[i].fill(0);
    }
    NQueensBacktrack(arr, 0);
    return layout;
}
//因为是二维数组，需要用深拷贝
function deepCopy(target, source) {
    for (let i = 0; i < source.length; i++) {
        if (source[i].constructor === Array) {
            target[i] = [];
            deepCopy(target[i], source[i]);
        } else {
            target[i] = source[i];
        }
    }
    return target;
}
//路径：arr中小于row的那些都已经成功放置了皇后
//选择列表：第row行的所有列都是放置皇后的选择
//结束条件：row超过arr的最后一行
function NQueensBacktrack(arr, row) {
    // console.log(arr,row)
    if (row == arr.length) {
        layout.push(deepCopy([], arr));
        return;
    }
    let n = arr[row].length;
    for (let col = 0; col < n; col++) {
        //排除不合法选择
        if (!isValid(arr, row, col)) continue;
        //做选择
        console.log(row, col);
        arr[row][col] = 1;
        //进入下一行决策
        NQueensBacktrack(arr, row + 1);
        //撤销选择
        arr[row][col] = 0;
    }
}
function isValid(arr, row, col) {
    let n = arr.length;
    //检查列是否有皇后互相冲突
    for (let i = 0; i < n; i++) {
        if (arr[i][col] == 1) {
            return false;
        }
    }
    //检查右上方是否有皇后互相冲突
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i-- , j++) {
        if (arr[i][j] == 1) {
            return false;
        }
    }
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i-- , j--) {
        if (arr[i][j] == 1) {
            return false;
        }
    }
    return true;
}
console.log(NQueens(4));