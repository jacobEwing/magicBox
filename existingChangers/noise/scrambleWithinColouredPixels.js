function change(creation) {
    var x, y, cell, swap, swapx, swapy;
    cell = creation.cells[creation.info.selectedCell];
    
    for(x = 0; x < cell.length; x++){
        for(y = 0; y < cell[x].length; y++){
            if(cell[x][y] == 11) continue;
            swapx = Math.floor(Math.random() * cell.length);
            swapy = Math.floor(Math.random() * cell[swapx].length);
            if(cell[swapx][swapy] == 11) continue;

            swap = cell[x][y];
            if(cell[swapx][swapy] == 11) continue;
            cell[x][y] = cell[swapx][swapy];
            cell[swapx][swapy] = swap;
        }
    }
    return creation;
}

