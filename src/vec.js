/**
 * Template for a (vanilla) JavaScript-based Web Application using VS Code
 *
 * 2024 by Andreas Schwenk <contact@compiler-construction.com>
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

/**
 * This file demonstrates the implementation of a class for a 2D vector.
 */

/**
 * A simple class to implement a two dimensional vector.
 * Note that attributes x and y are set public for simplicity.
 */
export class Vec {
  /**
   * TUTORIAL NOTES: All attributes are listed in the following lines.
   * If an attribute is NOT initialized in the constructor,
   * you should set its initial value here.
   */

  /** @type {number} -- public attribute for the first component */
  x;
  /** @type {number} -- public attribute for the second component */
  y;

  /**
   * Creates a new instance of class Vector.
   * @param {number} [x=0] -- initial value for the first component
   * @param {number} [y=0] -- initial value for the second component
   */
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  /**
   * Scales the vector by a scalar.
   * @param {number} w -- the scaling scalar
   * @returns {void}
   */
  scale(w) {
    this.x *= w;
    this.y *= w;
  }

  /**
   * Calculates the length of the vector.
   * @returns {number}
   */
  length() {
    // TUTORIAL NOTES: library Math must NOT be imported explicitly.
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  /**
   * Normalizes the vector.
   * @returns {void}
   */
  normalize() {
    let l = this.length();
    this.x /= l;
    this.y /= l;
  }

  /**
   * Static method that returns a new instance representing the sum of two given
   * vectors.
   * @param {Vec} u -- the first summand
   * @param {Vec} v -- the second summand
   * @returns {Vec} -- the sum
   */
  static add(u, v) {
    return new Vec(u.x + v.x, u.y + v.y);
  }

  /**
   * Stringifies the vector.
   * Example output: "(1,2)".
   * @returns {string}
   */
  toString() {
    return `(${this.x},${this.y})`;
  }

  /**
   * Exports the current vector object as JSON-data.
   * Example output:  { "x": 1, "y": 2 }
   * @returns {Object.<string,any>}
   */
  toJSON() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  /**
   * Creates an instance from JSON data.
   * @param {Object.<string,any>} json -- JSON data. Example: { "x": 1, "y": 2 }
   * @returns {Vec} -- a new instance of class Vector
   */
  fromJSON(json) {
    let v = new Vec();
    /*
      TUTORIAL NOTES: In a real-world application, you should validate all 
      members of the provided JSON data, or at a minimum, include a try-catch 
      block on the caller side for error handling.

        if ("x" in j == false) 
          throw Error("missing 'x'");
        
        if (typeof (j["x"] !== "number")) 
          throw Error("'x' must be of type number");
    */
    v.x = json["x"];
    v.y = json["y"];
    return v;
  }
}
