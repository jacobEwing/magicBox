function change(creation) {
    var x, y, cell, swap, swapx, swapy;
    cell = creation.cells[creation.info.selectedCell];
    
    for(x = 0; x < cell.length; x++){
        for(y = 0; y < cell[x].length; y++){
            swapx = Math.floor(Math.random() * cell.length);
            swapy = Math.floor(Math.random() * cell[swapx].length);
            swap = cell[x][y];
            cell[x][y] = cell[swapx][swapy];
            cell[swapx][swapy] = swap;
        }
    }
    return creation;
}

