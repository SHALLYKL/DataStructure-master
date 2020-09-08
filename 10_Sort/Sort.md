## 排序
### 内部排序
#### 插入排序
##### 直接插入排序
> 基本操作：将一个记录插入到已排好序的有序表中，从而得到一个新的有序表
##### 其它插入排序
###### 折半插入排序
> 基本操作：在一个有序表中进行查找和插入，查找使用折半查找来实现
> * <font color=#3F9AD6>折半插入排序所需附加存储空间和直接插入排序相同，从时间少比较，折半插入排序仅减少了关键字间的比较次数，而记录的移动次数不变。因此，折半插入排序的时间复杂度仍为*O(n²)* </font>

###### 2-路插入排序
> * 基本操作：在折半插入排序的基础上再改进之，其目的是减少排序过程中移动记录的次数，但为此需要n个记录的辅助空间
> * 具体做法：

###### 表插入排序

##### 希尔排序
#### 快速排序
> * 基本思想：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录的值均比另一部分的小，则可分别对着两部分记录继续进行排序，以达到整个序列有序
> * 具体做法：首先实现一趟快速排序，然后再递归。一趟快速排序是步骤：<br/>
>   1. 附设low和high两个指针，设枢轴记录的关键字为pivot<br/>
>   2. 从high所致位置向前搜索，找到第一个关键字小于pivot的记录和枢轴记录互相交换
>   3. 从low所指位置向后搜索，找到第一个关键字大于pivot的记录和枢轴记录交换
>   4. 重复这两步直至low=high为止
> * 实现交换时，由于每一对记录都要进行3次记录移动，而实际上，可以直接在一趟排序结束时，再将枢轴记录到正确位置上。

> * 代码如下：
```JavaScript
function Partition(arr,low,high){
    let pivot = arr[low];
    while(low<high){
        while(low<high && arr[high]>=pivot) --high;
        arr[low] = arr[high];
        while(low<high && arr[low]<=pivot) ++low;
        arr[high] = arr[low];
    }
    arr[low] = pivot; //将枢轴移到正确的位置上。
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
```
#### 选择排序
##### 简单选择排序
> * 基本思想：一趟简单选择排序的操作为：通过n-i次值之间的比较，从n-i+1个记录中选出关键字最小的记录，并和第i(1<=i<=n)个记录交换之
##### 树形选择排序
##### 堆排序
#### 归并排序
#### 基数排序
##### 多关键字排序
##### 链式基数排序
#### 各种内部排序方法的比较讨论
<style>
table th:first-of-type {
	width: 100px;
}
table th:nth-of-type(2) {
	width: 100px;
}
table th:nth-of-type(3) {
	width: 100px;
}
table th:nth-of-type(4) {
	width: 100px;
}
table th:nth-of-type(5) {
	width: 100px;
}
table th:nth-of-type(6) {
	width: 100px;
}
</style>
| 排序方法 | 时间复杂度 | 空间复杂度 | 优点 | 缺点 | 适用场景 |  |
| --- | --- | --- | --- | --- | --- | --- |
| 直接插入排序 | O(n²) | 1 | 简洁易实现 | 时间复杂度高 | n值很小时 |  |
| 折半插入排序 | O(n²) | 1 | 简洁易实现 | 时间复杂度高 | n值很小时 |  |
|  |  |  |  |  |  |  |
### 外部排序