//插入排序法 包括:直接插入排序、折半插入排序、2-路插入排序
/**
 * @name: 直接插入排序法（设置监视哨）
 * @param {Array} arr
 * @return {Array} 
 */
function InsertSort(arr){
    if(arr.length==0) return arr;
    let cur = 0; //监视哨
    let i,j
    for(i=1;i<arr.length-1;i++){
        if(arr[i]<arr[i-1]){
            cur = arr[i]; //复制为监视哨
            arr[i] = arr[i - 1];
            for (j = i-1; j > 0,cur < arr[j]; --j) {
                arr[j + 1] = arr[j];//记录后移
            }
            arr[j+1 ] = cur; //插入到正确的位置
        }
    }
    return arr;
}
// var testArr = [3, 2, 1, 10,8, 9, 10];
// console.log(InsertSort(testArr));

/**
 * @name: 直接插入排序法2 利用while
 * @param {Array} arr
 * @return {Array}
 */
function InsertSort2(arr) {
    if (arr.length === 0) return arr;
    let cur = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        cur = arr[i + 1];
        let preIndex = i;
        while (preIndex >= 0 && cur < arr[preIndex]) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = cur;
    }
    return arr;
}

/**
 * @name: 折半插入排序法
 * @param {Array} arr
 * @return {Array}
 */
function BInsertSort(arr){
    let i,j;
    let tmp,m;
    let num = 0;
    for(i=1;i<arr.length;i++){
        tmp = arr[i];//将arr[i]暂存到tmp;
        let low = 0;
        let high = i-1;
        num+=1;
        while(low<=high){ //在arr[low,hight]中折半查找有序插入的位置
            m = Math.floor((low + high) / 2);
            if(tmp<arr[m]){ //插入点在低半区
                high = m-1;
            }else{
                low = m+1; //插入点在高半区
            }
        }
        for(j=i-1;j>=high+1;--j){ //记录后移
            arr[j+1] = arr[j];
            num += 1;
        }
        arr[high+1] = tmp;
    }
    console.log(num);
}
// var testArr = [3, 2, 1, 10, 8, 9, 10];
// BInsertSort(testArr);
// console.log(testArr);
/**
 * @name: 2-路插入排序法
 * @param {Array} arr
 * @return {Array}
 */
function BBInsertSort(arr){
    let tmpArr = [];
    tmpArr[0] = arr[0];
    let i, j;
    let tmp, m;
    let low=0;
    let high = tmpArr.length-1;
    let end = tmpArr.length - 1;
    for (i = 1; i < arr.length; i++) {
        tmp = arr[i];//将arr[i]暂存到tmp;
        // let low = 0;
        // let high =tmpArr.length;
        high = end;
        while (low <= high) { //在arr[low,hight]中折半查找有序插入的位置
            m = Math.floor((low + high) / 2);
            if (tmp < tmpArr[m]) { //插入点在低半区
                high = m - 1;
            } else {
                low = m + 1; //插入点在高半区
            }
        }
        for (j = i - 1; j >= high + 1; --j) { //记录后移
            tmpArr[j + 1] = tmpArr[j];
        }
        tmpArr[high + 1] = tmp;
        end++;//高位+1
    }
    return tmpArr;
}
var testArr = [3, 2, 1, 10, 8, 9, 10];
console.log(BBInsertSort(testArr));


