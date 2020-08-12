function move(from, n, to) {
    to.push(from.pop());
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