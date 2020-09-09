/**
 * @name: 简单选择排序
 * @param {Array} arr
 */
function SelectSort(arr){
    //对顺序表arr做简单选择排序
    let j;
    for(let i=0;i<arr.length;i++){
        // j = SelectMin(arr,i);
        let tmp = arr[i];
        j = i;
        for(let m=i;m<arr.length;m++){
           if(arr[m]<tmp){
               tmp = arr[m];
               j = m;
           }
        }
        if(i!=j){
            let tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
var testArr = [7, 5, 3, 10, 2, 4, 1];
console.log(SelectSort(testArr));

/**
 * @name: 树形选择排序 减少选择对比的次数（不实现了）
 * @param {Array} arr
 */
function TreeSelectSort(arr){

}
