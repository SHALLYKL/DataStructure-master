/*
 * @Descripttion: 栈的应用——迷宫
 * @Author: kl <657669149@qq.com>
 * @Date: 2020-08-10 17:18:45
 * @LastEditors: kl
 * @LastEditTime: 2020-08-11 20:41:23
 */

import SqStack from './SqStack.js';
var Pos = function(){
    return {
        passed: 0,//是否已通过
        // dePassed: 0,//是否标记为不可通过
        type: 1,//当前块的类型（可通过的类型为1，不可通过的为0）
        index: 0,//通道块在迷宫中的唯一标识
        ord: 0,//通道块在路径上的'序号'
        seat: { x: 0, y: 0 },//此通道块的位置 坐标原点为左上角，向下为y正，向右为x正
        di: 1,//此通道块走向下一通道块的方向
    } //栈的元素类型
}
var maze = [
    [0,0,0,1,0,1,1,1,0,0],
    [1,0,0,0,0,1,0,0,1,0],
    [1,1,0,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0],
    [1,0,0,1,0,1,0,0,1,0],
    [1,0,0,1,0,0,0,1,1,0],
    [1,0,0,1,1,1,0,0,1,1],
    [1,0,0,0,0,1,1,0,1,0],
    [1,0,0,0,0,1,1,1,1,0],
    [1,0,0,0,0,1,0,0,1,0]
]

//maze,start=Pos,end=Pos
var startP = [0,2];
var endP = [9,6];

var row = maze.length;
var col = maze[0].length;
var dePassedL = [];//已标记为不可通过的列表
var passedL = [];//已标记为走过的列表
function MazePath(_maze,_start,_end){
    var stack = new SqStack();
    // let curPos = _start;
    let curPos = getP({ x: _start[0], y: _start[1]});
    let endPos = getP({ x: _end[0], y: _end[1]});
    let curStep = 1;
    do{
        if (Pass(curPos)) {//当前位置可通过并且是未曾走到过的通道块
            FootPrint(curPos);//留下足迹
            // let e = [curStep, curPos, 1];
            // let e = new Pos();
            let e = curPos;
            e.ord = curStep;
            // e.seat = curPos;
            e.di = 1;
            e.passed = 1;
            e.type = _maze[curPos.seat.y][curPos.seat.x];
            stack.push(e);
            if (curPos.index == endPos.index) return stack;
            console.log("通过",stack);
            curPos = NextPos(_maze,curPos, 1);//下一位置是当前位置的东邻
            curStep++;//探索下一步
        } else {//当前位置不能通过
            if (!stack.isEmpty()) {
                console.log("不通过", curPos);
                let e = stack.pop();
                while(e.di==4 && !stack.isEmpty()){
                    MarkPrint(e);
                    e = stack.pop();//留下不能通过的标记，并退回一步
                    curStep--;
                }
                if (e.di < 4) {
                    e.di++;
                    stack.push(e);//换下一个方向探索
                    curPos = NextPos(_maze, e, e.di);//设定当前位置为该新方向上的相邻块
                }
            }
        }
    }while(!stack.isEmpty());

    return false;

}
function getP(seat){
    let p = new Pos();
    p.seat = seat;
    p.type = maze[seat.y][seat.x];
    p.index = getIndex(seat);
    return p;
}
function Pass(pos){
    if(!pos) return false;
    return pos.type===1 && passedL.indexOf(pos.index)==-1 && dePassedL.indexOf(pos.index)==-1;
}
function FootPrint(pos){
    passedL.push(pos.index);
}
function MarkPrint(pos){
    dePassedL.push(pos.index);
}
function NextPos(_maze,pos,di){
    let p = pos.seat;
    if(di==1){//右
        p = { x: p.x + 1, y: p.y };
    }else if(di==2){//下
        p = { x: p.x, y: p.y+1 };
    }else if(di==3){//左
        p = {x:p.x-1,y:p.y};
    }else if(di==4){//上
        p = {x:p.x,y:p.y-1};
    }
    if(p.x>=col || p.x<0) return null;//超出边界
    if(p.y>=row||p.y<0) return null;//超出边界
    return getP(p);
}
function getIndex(p){
    return p.x + p.y * col;
}
console.log(MazePath(maze, startP, endP));