// Core class controlling growth rendering of roots/branches

// TODO: See note in Graphics.js

// TODO: More "magic numbers" in this class than I would like; will update in
// the future but will leave as-is for current project.

class Growth extends Graphic {

    _id;
    _growing;
    _growths;
    _leaves;
    _min;
    _size;

    constructor(x, y, width, height, colour, size, min, rotation, id) {
        // Immediately call super constructor
        super(x, y, width, height, colour);

        // Localize parameters
        this._id = id;
        this._min = min;
        this._size = size;
        this._rotation = rotation;

        this._growing = 2;
        this._leaves = this._rotation > 180 ? 20 : 0;
    }

    // Overrides Drawable update
    update() {
        // If this Growth is currently growing
        if (this._size > this._min) {
            // Move
            this._position.x += 0.3;

            // Rotate to create "knotted" appearance
            this._rotation += randoms[this._id]() * (this._size / 5) - (this._size / 10);

            // Decrement size
            this._size -= 0.035;

        // If this Growth is done
        } else {
            this._growing = false;

            // If this isn't a final growth
            if (this._min > 0) {
                // Does this Growth have children?
                if (!this._growths) {
                    // Create child growths array/Growths
                    this._growths = [];

                    this._growths.push(new Growth(this._position.x, this._position.y,
                        width, height, this._color, this._min, this._min - 5,
                        this._rotation + randoms[this._id]() * (this._size / 2) - (this._size / 4), this._id));

                    this._growths.push(new Growth(this._position.x, this._position.y,
                        width, height, this._color, this._min, this._min - 5,
                        this._rotation - randoms[this._id]() * (this._size / 2) - (this._size / 4), this._id));
                }

                // Call overridden Drawable update calls on children
                this._growths.forEach(element => element.update());
            }
        }
    }

    // Overrides Drawable draw
    draw() {
        // If this Growth is still growing, render to the graphic
        if (this._growing) {
            // Call the Graphic predraw
            super.predraw();

            // Set graphic fill color
            this._graphic.fill(this._color);

            // Draw a(nother) circle to the dirty buffer
            this._graphic.circle(this._position.x, this._position.y, this._size);

            // Call the Graphic postdraw
            super.postdraw();

        // If this is done growing, a final growth, and still has leaves to render
        } else if (this._min <= 0 && this._leaves > 0) {
            // Decrement leaf count
            this._leaves--;

            // Call the Graphic predraw
            super.predraw();

            // Set the graphic fill color
            this._graphic.fill(0, 180, 0);

            // Draw a(nother) circle to the dirty buffer
            this._graphic.circle(
                this._position.x - (randoms[this._id]() * 30),
                this._position.y + (randoms[this._id]() * 30 - 15),
                3
            );

            // Call the Graphic postdraw
            super.postdraw();
        }

        // Call overridden Drawable draw calls on children
        if (this._growths) this._growths.forEach(element => element.draw());

        // Render the Graphic instance to the canvas
        image(this._graphic, 0, 0);
    }
}
