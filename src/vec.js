/**
 * == VANILLA HTML/CSS/JAVASCRIPT TEMPLATE FOR WEB APPLICATIONS ==
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
 * This file demonstrates the implementation of a class for a vector.
 */

/**
 * A simple class to implement a three dimensional vector.
 * Note that attributes x and y are public for simplicity.
 */
export class Vec {
  /** @type {number} -- public attribute for the x-coordinate */
  x;
  /** @type {number} -- public attribute for the y-coordinate */
  y;

  /**
   * @param {number} x -- the x-coordinate
   * @param {number} y -- the y-coordinate
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
   * Static method, that returns a new objects that adds two given vectors.
   * @param {Vec} u -- the first summand
   * @param {Vec} v -- the second summand
   * @returns {Vec} -- the sum
   */
  static add(u, v) {
    return new Vec(u.x + v.x, u.y + v.y);
  }

  /**
   * Stringifies the vector.
   * @returns {string}
   */
  toString() {
    return `(${this.x},${this.y})`;
  }

  /**
   * Exports the current vector object as JSON-data.
   * @returns {Object.<string,any>}
   */
  toJSON() {
    return {
      x: this.x,
      y: this.y,
    };
  }

  /**
   * Creates an instance, given JSON-data.
   * @param {Object.<string,any>} j -- JSON data
   * @returns {Vec} -- the vector
   */
  fromJSON(j) {
    let v = new Vec();

    // TODO
    if ("x" in j == false) throw Error("missing 'x'");
    if (typeof (j["x"] !== "number")) throw Error("'x' must be of type number");

    v.x = j["x"];
    v.y = j["y"];

    return v;
  }
}
