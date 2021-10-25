// Constants
const CANVAS_SIZE = 400;

// Control variables
let alpha, bgColor, bg, functions, growth, randoms, seconds, timing;

// Sound variables
let distortion, oscillator, playing;

// Input
let input, buttons = [];

function setup() {
    // Create canvas, center, and set basic p5.js properties
    let canvas = createCanvas(CANVAS_SIZE, CANVAS_SIZE);
    canvas.center('horizontal');
    angleMode(DEGREES);
    frameRate(30);
    noStroke();

    // Identify the random functions to be generated in generateRandoms
    functions = [jsf32, sfc32, xoshiro128ss];

    // Initialize sound control variables
    oscillator = new p5.Oscillator('sawtooth');
    distortion = new p5.Distortion(0.25);
    oscillator.connect(distortion);
    distortion.drywet(0.25, 'none');
    oscillator.freq(55 + random(5));
    oscillator.amp(0);

    playing = false;

    // Default variables for timer control
    let seed = Math.floor(Date.now() / 1000);
    seconds = second();
    timing = true;

    alpha = 255;

    // May need this if we move the background to randoms
    //generateRandoms(seed);

    bgColor = color(126, 84, 42);

    // Felt like we needed something visually interesting in the background
    bg = new Circles(19, CANVAS_SIZE, CANVAS_SIZE / 2, {r: 146, g: 104, b: 62});

    // Create input field
    input = createInput(String(seed));
    input.position(0, CANVAS_SIZE + 15);
    input.size(100);
    input.center('horizontal');

    // Create UI button
    buttons.push(createButton('seed'));
    buttons[0].position(0, CANVAS_SIZE + 40);
    buttons[0].center('horizontal');
    buttons[0].mousePressed(() => { callback(); });
}

function update() {
    // Update timer
    if (timing) {
        let sec = second();
        if (seconds !== sec) {
            seconds = sec;
            let seed = Math.floor(Date.now() / 1000);
            input.value(String(seed));
        }
    }

    // Update background object(s)
    bg.update();

    // Update the growth object
    if (growth) growth.update();

    //oscillator.freq(0.15);
    if (playing) {
        oscillator.amp(0.0002, 10);
    }
}

function draw() {
    // Not necessary but helps me conceptualize to have update/draw
    update();

    // Render background
    background(bgColor);

    // Render background object(s)
    bg.draw();

    // Render the growth object
    if (growth) {
        growth.draw();
        alpha = alpha > 0 ? alpha - 5 : 0;
    }

    fill(0, 0, 0, alpha)
    rect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
}

function callback() {
    // Get the current input value
    let seed = input.value();

    // If the current input value is empty, grab the current time
    if(seed === "") seed = String(second());

    // Generate random functions based off seed
    generateRandoms(seed);

    // Disable the timer
    timing = false;

    // Create the growth object
    growth = new Seed(CANVAS_SIZE / 2, CANVAS_SIZE / 2, 400, 400, {r: 48, g: 27, b: 6});

    oscillator.start();
    playing = true;
}

function generateRandoms(seed) {
    // Create xmur3 seed generator based off seed
    let generate = xmur3(seed);

    // Generate an array of four seeds
    let seeds = [];
    for (let i = 0; i < 4; i++) {
        seeds.push(generate());
    }

    // Generate random functions fed identical xmur3 generated seeds
    randoms = [];
    for (let i = 0; i < functions.length; i++) {
        randoms.push(functions[i](seeds[0], seeds[1], seeds[2], seeds[3]));
    }
}
