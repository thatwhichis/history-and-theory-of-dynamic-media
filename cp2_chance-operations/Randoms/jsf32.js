// Attribution:

// JavaScript implementation by Stack Overflow user bryc
// User profile: https://stackoverflow.com/users/815680/bryc
// Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
// Stack OVerflow licenses: https://stackoverflow.com/help/licensing
// This implementation subject to CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
// No changes were made.

// JSF was designed by Robert Jenkins
// JSF is Public Domain: http://burtleburtle.net/bob/rand/smallprng.html

function jsf32(a, b, c, d) {
    return function() {
        a |= 0; b |= 0; c |= 0; d |= 0;
        var t = a - (b << 27 | b >>> 5) | 0;
        a = b ^ (c << 17 | c >>> 15);
        b = c + d | 0;
        c = d + t | 0;
        d = a + t | 0;
        return (d >>> 0) / 4294967296;
    }
}
