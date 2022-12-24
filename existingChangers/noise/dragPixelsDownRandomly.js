/*
pick random pixels throughout the currently active cell and streak them
downwards, copying them on to the pixel below
*/
function change(creation) {
    var smearchance = .4;
    
    var cell = creation.cells[creation.info.selectedCell]
    var newCell = [];
    
    for(var x = 0; x < cell.length; x++){
        newCell[x] = [];
        for(var y = 0; y < cell[x].length; y++){
            if(Math.random() < smearchance){
                newCell[x][y] = cell[x][(y - 1 + cell[x].length) % cell[x].length];
            }else{
                newCell[x][y] = cell[x][y];
            }
        }
    }
    creation.cells[creation.info.selectedCell] = newCell;
    return creation;
}

