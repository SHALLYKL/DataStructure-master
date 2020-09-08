/**
 * @name: 冒泡排序
 * @param {type} 
 * @return {type} 
 */
function BubbleSort1(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let tmp = arr[j];
                arr[j] = arr[i];
                arr[i] = tmp;
            }
        }
    }
}

function BubbleSort2(arr){
    
    for(let i=arr.length-1;i>=0;--i){
        // change = false;
        for(let j=0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let tmp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = tmp;
            }
        }
    }

}
var testArr = [7,5,3,10,2,4,1];
BubbleSort2(testArr);