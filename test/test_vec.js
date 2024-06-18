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

// import the assert library, provided by node.js
import assert from "assert";

// import the class under test
import { Vec } from "../src/vec.js";

/**
 * This file implements tests for the vector class.
 * It is intended to be executed by Node.js.
 */

let v = new Vec(4, -1);
assert.equal(v.x, 4);
assert.equal(v.y, -1);

const EPS = 1e-9;
v.normalize();

assert.ok(Math.abs(v.x - 0.9701425001) < EPS);
assert.ok(Math.abs(v.y + 0.242535625) < EPS);

v = Vec.add(new Vec(1, 2), new Vec(3, 4));
assert.equal(v.x, 4);
assert.equal(v.y, 6);

v = new Vec(1, 2);
v.scale(2);
assert.ok(Math.abs(v.length() - 4.4721359549) < EPS);
