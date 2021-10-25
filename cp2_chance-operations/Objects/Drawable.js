// Base class to manage individual p5.js drawable instances

class Drawable {

    _color;
    _dimensions;
    _offset;
    _origin;
    _position;
    _rotation;
    _scale;

    constructor(x, y, width, height, colour) {
        // Localize parameters
        this._color = colour || color(0, 0, 0);
        // Mostly assuming perfect-world input for now; TODO: validate parameters
        this._dimensions = createVector(width, height);
        this._offset = createVector(0, 0);
        this._position = createVector(x, y);
        this._rotation = 0;
        this._scale = 1;

        // Calling Origin by its setter automatically calculates _offset
        this.Origin = createVector(0.5, 0.5);
    }

    // Generate Accessors/Mutators as necessary
    set Dimensions(value) {
        this._dimensions = value;
        this.updateOffset();
    }

    set Origin(value) {
        this._origin = value;
        this.updateOffset();
    }

    set Scale(value) {
        this._scale = value;
        this.updateOffset();
    }

    updateOffset() {
        this._offset.x = this._dimensions.x * this._origin.x * this._scale;
        this._offset.y = this._dimensions.y * this._origin.y * this._scale;
    }

    // Stub to be overridden
    update() { }

    // Predraw sets the context state based on parameters
    predraw() {
        push();

        translate(this._position.x - this._offset.x,
            this._position.y - this._offset.y
        )
        rotate(this._rotation);
        scale(this._scale);
    }

    // Stub to be overridden
    draw() { }

    // Postdraw restores the previous context state
    postdraw() {
        pop();
    }
}
