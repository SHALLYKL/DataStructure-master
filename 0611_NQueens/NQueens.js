
/**
 * @name: N皇后问题（在指定大小棋盘上求出N皇后问题的各解）
 * @param {Int} i 用来追踪当前深入的层级 
 * @return {Array} A 集合A 
 * @return {Array} B 集合B 用来暂存每次求出的幂集子集
 */
function GetPowerSet(i,A,B){
    let k = 0;
    let e;
    if (i > A.length) {
        return B;
    } else {
        e = A[i];
        k = B.length;

        B.push(e); //+第i个元素
        GetPowerSet(i + 1, A, B);

        B.pop(e); //-第i个元素
        GetPowerSet(i + 1, A, B);
    }
}