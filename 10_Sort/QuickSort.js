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
function QuickSort(arr,low,high){
    low= low==void 0?0:low;
    high = high==void 0?arr.length-1:high;
    if(low<high){
        pivotLoc = Partition(arr,low,high);
        QuickSort(arr,low,pivotLoc-1);
        QuickSort(arr,pivotLoc+1,high);
    }
}
var testArr = [7,5,3,10,2,4,1];
QuickSort(testArr);