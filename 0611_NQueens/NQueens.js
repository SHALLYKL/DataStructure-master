
/**
 * @name: N皇后问题（在指定大小棋盘上求出N皇后问题的各解）
 * @param {Int} i 当前行数
 * @return {Int} n 棋盘规格nxn
 */
//
// var data = [{i:0,j:0}];
var data = [];
function Trial(i,n){
    //进入本函数时，在nxn棋盘前i-1行已放置了互不攻击的i-1个棋子
    if(i>n){
        //输出棋盘当前的布局 //n为4时，即为4皇后问题
        console.log()
    }else{
        for(let j=0;j<n;++j){
            //todo 在第i行第j列放置一个棋子
            isLegal(data);
            if(legal){//当前布局合法
                Trial(i+1,n);
            }else{
                //todo 移走第i行第j列的棋子
            }
        }
    }
}

/**
 * @name: 判断在i行y列放入棋子后棋盘布局是否合理
 * @param {Int} i 行
 * @return {Int} j 列
 */
function allowLayout(i, j) {
    let m, n, k;
    let s;
    let len;
    //在行中轮询
    for (k = 0, n = j; k <= N - 1; k++) {
        n = (n + 1) - n / N * N;
        if (CB[i][n] == 1) {
            return 0;
        }
    }
    // 在列中轮询
    for (k = 0, n = i; k <= N - 1; k++) {
        m = (m + 1) - m / N * N;
        if (CB[m][j] == 1) {
            return 0;
        }
    }

}
var arr = [[1,0,0],[0,1,0],[0,0,1]]
console.log(isLegal(arr));