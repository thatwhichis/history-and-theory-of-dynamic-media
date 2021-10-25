// Base class to manage individual p5.js graphic instances

// TODO: Graphic management variables should have been separated from Drawable
// management variables. This has caused some interesting issues but will be
// left as-is for the current project.

class Graphic extends Drawable {

    _graphic;

    constructor(x, y, width, height, colour) {
        // Immediately call super constructor
        super(x, y, width, height, colour);

        // Generate graphics (offscreen buffer) instance
        this._graphic = createGraphics(width, height);

        // Set default graphics properties for this project
        this._graphic.noStroke();
        this._graphic.angleMode(DEGREES);
    }

    // Overrides Drawable predraw
    predraw() {
        this._graphic.push();

        this._graphic.translate(this._offset.x, this._offset.y);
        this._graphic.rotate(this._rotation);
        this._graphic.scale(this._scale);
    }

    // Overrides Drawable postdraw
    postdraw() {
        this._graphic.pop();
    }
}
