// Attribution:

// JavaScript implementation by Stack Overflow user bryc
// User profile: https://stackoverflow.com/users/815680/bryc
// Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
// Stack OVerflow licenses: https://stackoverflow.com/help/licensing
// This implementation subject to CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
// No changes were made.

// xoshiro128** was designed by David Blackman and Sebastiano Vigna
// xoshiro128** is Public Domain: https://prng.di.unimi.it/xoshiro128starstar.c
// License: https://creativecommons.org/publicdomain/zero/1.0/

function xoshiro128ss(a, b, c, d) {
    return function() {
        let t = b << 9, r = a * 5; r = (r << 7 | r >>> 25) * 9;
        c ^= a; d ^= b;
        b ^= c; a ^= d; c ^= t;
        d = d << 11 | d >>> 21;
        return (r >>> 0) / 4294967296;
    }
}
