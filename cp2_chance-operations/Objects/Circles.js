class Circles {

    _circles;
    _size;

    constructor(size, width, height, colour) {
        this._size = size;
        this._cell = width / size;
        this._circles = [];

        for (let x = 0; x < this._size; x++) {
            this._circles[x] = [];
            for (let y = 0; y < this._size; y++) {
                this._circles[x][y] = new Circle(
                    x * this._cell + this._cell / 2,
                    y * this._cell + this._cell / 2,
                    this._cell,
                    color(colour.r + random() * 5,
                    colour.g + random() * 2,
                    255 - y * (colour.b + random() * 2) / 3
                    )
                );
            }
        }
    }

    get Size() {
        return this._size;
    }

    update() {
        for (let x = 0; x < this._size; x++) {
            for (let y = 0; y < this._size; y++) {
                this._circles[x][y].update();
            }
        }
    }

    draw() {
        push();

        for (let x = 0; x < this._size; x++) {
            for (let y = 0; y < this._size; y++) {
                this._circles[x][y].draw();
            }
        }

        pop();
    }
}

class Circle {

    _color;
    _drawPosition;
    _drawSize;
    _position;
    _size;
    _timer;

    constructor(x, y, size, color) {
        this._position = createVector(x, y);
        this._size = size;
        this._color = color;

        this._drawPosition = createVector(x, y);
        this._drawSize = size;

        this._timer = random() * 30;
    }

    update() {
        this._timer--;

        if (this._timer <= 0 ) {
            this._drawPosition.x = this._position.x + (random() - 0.5);
            this._drawPosition.y = this._position.y + (random() - 0.5);
            this._drawSize = this._size + (random() * 2 - 1);
            this._timer = random() * 30;
        }
    }

    draw() {
        push();

        translate(this._drawPosition.x, this._drawPosition.y);
        fill(this._color);
        circle(0, 0, this._drawSize);

        pop();
    }
}
