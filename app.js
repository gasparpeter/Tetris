const cvs = document.getElementById('tetris');
const ctx = cvs.getContext('2d');

const ROW = 20;
const COL = COLUMN = 10;
const SQ = squareSize = 20;
const VACANT = 'WHITE';

function draw(x, y, color) {
    ctx.fillStyle = 'red';
    ctx.fillRect( x*SQ,y*SQ,SQ,SQ );

    ctx.strokeStyle = 'BLACK';
    ctx.strokeRect( x*SQ,y*SQ,SQ,SQ );
}

draw(0, 0, 'red');


