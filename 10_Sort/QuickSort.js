function Partition(arr,low,high){
    let pivot = arr[low];
    while(low<high){
        while(low<high && arr[high]>=pivot) --high;
        arr[low] = arr[high];
        while(low<high && arr[low]<=pivot) ++low;
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}
/**
 * @name: 
 * @param {Array} 数组
 * @param {low} 基准
 * @param {high} 基准
 */
function QuickSort1(arr,low,high){
    low= low==void 0?0:low;
    high = high==void 0?arr.length-1:high;
    if(low<high){
        pivotLoc = Partition(arr,low,high);
        QuickSort1(arr,low,pivotLoc-1);
        QuickSort1(arr,pivotLoc+1,high);
    }
}
var testArr = [7, 5, 3, 10, 2, 4, 1];
console.log(QuickSort1(testArr));


/**
 * @name: 第二种快排，该方法需要堆栈更多，容易溢出
 * @param {type} 
 * @return {type} 
 */
function QuickSort2(arr){
    if(arr.length==1) return arr;
    var pivotI = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotI,1)[0];
    var left = [];
    var right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return QuickSort2(left).concat([pivot],QuickSort2(right));
}
var testArr = [7,5,3,10,2,4,1];
QuickSort2(testArr);