
import SqStack from './SqStack.js';

function move(from, n, to) {
    to.push(from.pop());
/**
 * @name: 汉诺塔的递归实现
 * @param {type} 
 * @return {type} 
 */
}
function hanoi(n, x, y, z) {
    if (n == 1) {
        move(x, 1, z);//将编号为1的圆盘从x移到z
        // return [x,y,z];
    } else {
        hanoi(n - 1, x, z, y);//将x上编号为1至n-1的圆盘移到y，z做辅助塔
        move(x, n, z);//将编号为n的圆盘从x移到z
        hanoi(n - 1, y, x, z);//将y上编号为1至n-1的圆盘移到z，x做辅助塔
    }
    return [x,y,z];
}

console.log(hanoi(10, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1], [], []));

/**
 * @name: 汉诺塔的非递归实现
 * @param {type} 
 * @return {type} 
 */
const Action = {
    No:0,
    LToM:1,
    MToL:2,
    MToR:3,
    RToM:4
}
function hanoi2(num,left,mid,right){
    let ls = [];//用数组代替栈
    let ms = [];
    let rs = [];
    for(let i=num;i>0;i--){
        ls.push(i);//初始化汉诺塔
    }
    let record = [Action.no];
    let step = 0;
    while(rs.length!=num+1){
        step +=stackToStack(record,Action.LToM,Action.MToL)
    }
}
function stackToStack(record,preAct,nowAct,fStack,tStack,from,to){
    
}