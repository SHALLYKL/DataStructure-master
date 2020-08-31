
function TSMatrix(){

};

var proto = TSMatrix.prototype;
/**
 * 转置矩阵 （该算法虽然节省了空间，但是时间复杂度高了。因此该算法仅适用于tu<<muxnu的情况）
 * @param {M} M ={data:{[null,{i,j,e},...]},mu:矩阵的行数,nu:矩阵的列数,tu:非零个数}
 * @returns {Boolean} true
 */
proto.TransposeSMatrix = function (M, T) {
    //采用三元组表存储表示，求稀疏矩阵M的转置矩阵T。
    T.mu = M.nu; T.nu = M.mu; T.tu = M.tu;
    if (T.tu) {
        let q = 1;
        for (let col = 1; col <= M.nu; ++col) {
            for (let p = 1; p <= M.tu; ++p) {
                if (M.data[p].j == col) {
                    T.data[q].i = M.data[p].j;
                    T.data[q].j = M.data[p].i;
                    T.data[q].e = M.data[p].e;
                    ++q;
                }
            }
        }
    }
    return true;
}
/**
 * 快速转置矩阵 
 * @param {M} M ={data:{[null,{i,j,e},...]},mu:矩阵的行数,nu:矩阵的列数,tu:非零个数}
 * @returns {Boolean} true
 */
proto.FastTransposeSMatrix = function(M,T){
    T.mu = M.nu; T.nu = M.mu; T.tu = M.tu;
    if(T.tu){
        
    }

}