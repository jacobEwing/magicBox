/*
    This changer will search for nearby pixels of the same
    colour and move them toward each other.  Repeated use
    of this changer will cause 


    If you want to change the results of this changer, you can
    modify the "radius" value below.  The higher you make this
    number, the more pixels will cluster together.
    
    A value of 2 gives a very mild clustering, and a value of
    16 gives a very strong one.
    
    If you want to change the strength of the clustering, you 
    change the value of applications.  That value can be as low
    as 1, and as high as you want.  About 10-20 will give you the
    the maximum amount of clustering.
*/
var parameters = {
    radius : 1,
    applications: 1,
    skipEmpty: true
}


function change(creation) {
    var cell = creation.cells[creation.info.selectedCell];
    var x, y, n;
    
    if(parameters.radius < 1) parameters.radius = 1;
    if(parameters.radius > 57) parameters.radius = 57;
    if(parameters.applications < 1) parameters.applications = 1;
    if(parameters.applications > 20) parameters.applications = 20;
    for(n = 0; n < parameters.applications; n++){
        for(x = 0; x < cell.length; x++){
            for(y = 0; y < cell[x].length; y++){
                tryMotion(cell, x, y);
            }
        }
    }
    return creation;
}

function tryMotion(cell, x, y){

    var dx, dy, rx, ry, avgdx = 0, avgdy = 0, matchCount = 0, wrappedrx, wrappedry;
    var newX, newY, direction;
    for(dx = -parameters.radius; dx <= parameters.radius; dx++){
        for(dy = -parameters.radius; dy <= parameters.radius; dy++){
            rx = x - dx;
            ry = y - dy;
            
            wrappedrx = (rx + cell.length) % cell.length;
            wrappedry = (ry + cell[wrappedrx].length) % cell[wrappedrx].length;

            

            if(cell[wrappedrx][wrappedry] == cell[x][y]){
                avgdx += dx;
                avgdy += dy;
                matchCount++;
            }
        }
    }
    
    direction = {
        x : Math.sign(Math.round(avgdx / matchCount)),
        y : Math.sign(Math.round(avgdy / matchCount))
    };

    // added cell length part is to make it wrap around
    newX = (x + direction.x + cell.length) % cell.length;
    newY = (y + direction.y + cell[newX].length) % cell[newX].length;
    
    
    if(parameters.skipEmpty){
        if(cell[x][y] == 11 || cell[newX][newY] == 11){
            return;
        }
    }
    var tmp = cell[x][y];
    cell[x][y] = cell[newX][newY];
    cell[newX][newY] = tmp;
}

function withinCell(cell, x, y){
    // return true/false if x,y falls within the 2d array's boundaries
    return x >= 0 && x < cell.length && y >= 0 && y < cell[0].length;
}
