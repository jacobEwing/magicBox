function change(creation) {
    var x, y, cell, swap, swapx, swapy, xDir, yDir;
    cell = creation.cells[creation.info.selectedCell];    
    var randseed;
    var c1 = creation.info.selectedIndex;
    var c2 = creation.info.secondSelectedIndex;
    if(c1 > c2){
        c1 += c2;
        c2 = c1 - c2;
        c1 -= c2;
    }
    var newMap = Array();
    for(x = 0; x < cell.length; x++){
        newMap[x] = Array();
    }
    
    for(x = 0; x < cell.length; x++){
        for(y = 0; y < cell[x].length; y++){
            if(newMap[x][y] != undefined){
                continue;
            }
            randseed = Math.random();
            xDir = Math.random() < .33 ? -1 : (Math.random() < .5 ? 1 : 0); 
            yDir = Math.random() < .33 ? -1 : (Math.random() < .5 ? 1 : 0); 
            
            if(newMap[x + xDir] == undefined || newMap[x + xDir][y + yDir] == undefined){
                newMap[x][y] = cell[x][y];
                continue;
            }
            
            if(cell[x][y] == 11 || cell[x + xDir][y + yDir] == 11){
                newMap[x][y] = cell[x][y];
                continue
            }
            
            if(
                   cell[x][y] > c2
                || cell[x][y] < c1
                || cell[x + xDir][y + yDir] > c2
                || cell[x + xDir][y + yDir] < c1
            ){
                newMap[x][y] = cell[x][y];
                continue
            }
            
            newMap[x][y] = cell[x + xDir][y + yDir];
            newMap[x + xDir][y + yDir] = cell[x][y];
        }
    }
    creation.cells[creation.info.selectedCell] = newMap;
    return creation;
}

