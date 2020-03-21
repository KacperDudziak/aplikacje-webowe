class Board{
    public cells :Cell[];

    constructor(...cells :Cell[]){
        this.cells = cells;
    }
}

class Cell{
    public id :number;
    public state :State;
}

enum State{
     Empyt = 0,
     X = 1,
     Y = 2   
}