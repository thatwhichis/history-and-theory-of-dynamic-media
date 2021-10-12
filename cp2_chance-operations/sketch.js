const COLOUR = 127;
const CANVAS = 200;

// Only set up to handle odd numbers at the moment
const GRID = 19;

let rando = Math.random;
let canvasTops = [0, CANVAS];
let i = 0;

const s = ( sketch ) => {

    let button, cell, maze;

    sketch.setup = () => {
        let cvs = sketch.createCanvas(CANVAS, CANVAS);
        cvs.position = sketch.createVector(0, canvasTops[i]);
        i++;
        sketch.strokeWeight(0);
        sketch.fill(0);

        maze = new Maze(sketch, GRID, rando);
        cell = CANVAS / maze.Size;

        sketch.shuffleMaze();

        sketch.drawMaze();

        button = sketch.createButton('New Maze');
        button.position(CANVAS + 10, 10);
        button.mousePressed(sketch.shuffleMaze);
    }

    sketch.drawMaze = () => {

        sketch.background(COLOUR);

        for (let y = 0; y < maze.Size; y++) {
            for (let x = 0; x < maze.Size; x++) {
                if (maze.Grid[y][x]) {
                    sketch.square(x * cell, y * cell, cell);
                }
            }
        }
    }

    sketch.shuffleMaze = () => {
        maze.shuffle(1, 1);
        sketch.drawMaze();
    }
};

let myp5 = new p5(s);
let myp6 = new p5(s);
