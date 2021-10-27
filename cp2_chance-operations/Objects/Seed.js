// Core class controlling array of growth renderings of roots/branches

// TODO: As with Growth.js, more magic numbers than I would prefer in this
// class. Needs major refactor/really re-architecting. Leaving as-is for
// current project.

class Seed extends Drawable {

    _energy;
    _growths;
    _min;

    constructor(x, y, width, height, colour) {
        // Immediately call super constructor
        super(x, y, width, height, color(colour.r, colour.g, colour.b));

        // Initialize control variables
        this._energy = 20;
        this._min = this._energy * 3 / 4;

        // 20211027 - per suggestion in class 20211026, increased color diversty
        let colors = [];
        colors.push(color(colour.r - 15 - (randoms[0]() * 5), colour.g, colour.b));
        colors.push(color(colour.r, colour.g, colour.b));
        colors.push(color(colour.r + 15 + (randoms[2]() * 5), colour.g, colour.b));

        // Initialize array of Growths
        this._growths = [];
        for (let i = 0; i < randoms.length; i++) {
            // Root
            this._growths.push(new Growth(0, 0, width, height, colors[i],
                this._energy, this._min, randoms[i]() * 90 + 45, i));
            // Branch
            this._growths.push(new Growth(0, 0, width, height, colors[i],
                this._energy, this._min, randoms[i]() * 90 + 235, i));
        }
    }

    // Overrides Drawable update
    update() {
        // Call overridden Drawable update calls on children
        this._growths.forEach(element => element.update());
    }

    // Overrides Drawable draw
    draw() {
        // Call Drawable predraw
        super.predraw();

        // Call overridden Drawable draw calls on children
        this._growths.forEach(element => element.draw());

        // Call Drawable postdraw
        super.postdraw();
    }
}
