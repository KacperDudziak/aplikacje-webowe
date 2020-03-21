var Board = /** @class */ (function () {
    function Board() {
        var cells = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            cells[_i] = arguments[_i];
        }
        this.cells = cells;
    }
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell() {
    }
    return Cell;
}());
var State;
(function (State) {
    State[State["Empyt"] = 0] = "Empyt";
    State[State["X"] = 1] = "X";
    State[State["Y"] = 2] = "Y";
})(State || (State = {}));
