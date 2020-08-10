var SqStack = function () {
    this._data = [];
};
var proto = SqStack.prototype;
proto.init = function () {
    this._data = [];
};
proto.clear = function () {
    this._data.length = 0;
};
proto.destroy = function () {
    this._data.length = 0;
};
proto.isEmpty = function () {
    return this._data.length === 0;
};
proto.push = function (ele) {
    this._data.push(ele);
    return true;
};
proto.pop = function () {
    return this._data.pop();
};
proto.getTop = function () {
    if (this.isEmpty()) return null;
    return this._data[this._data.length - 1];
};
proto.traverse = function (visit) {
    for (let i = 0; i < this._data.length; i++) {
        if (!visit(this._data[i])) {
            return false;
        }
    }
    return true;
}
// module.exports = SqStack;
export default SqStack;
