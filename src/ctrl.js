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
 * This file implements the controller class.
 */

import { DrawVectors } from "./draw.js";
import { Vec } from "./vec.js";

export class Control {
  constructor() {
    /** @type {Vec} */
    this.vec = new Vec(5, 5);

    /** @type {DrawVectors} */
    this.draw = new DrawVectors(
      /** @type {HTMLCanvasElement} */ (document.getElementById("my-canvas"))
    );
    this.draw.setVector(this.vec);

    // init
    this.#behave();
  }

  /**
   * Private method that implements the behavior.
   * @returns {void}
   */
  #behave() {
    /** @type {HTMLInputElement} */
    this.inputX = /** @type {HTMLInputElement} */ (
      document.getElementById("x")
    );
    this.inputX.addEventListener("keyup", () => {
      this.vec.x = parseFloat(this.inputX.value);
      this.draw.draw();
    });

    /** @type {HTMLInputElement} */
    this.inputY = /** @type {HTMLInputElement} */ (
      document.getElementById("y")
    );
    this.inputY.addEventListener("keyup", () => {
      this.vec.y = parseFloat(this.inputY.value);
      this.draw.draw();
    });

    const btnNorm = document.getElementById("norm");
    btnNorm.addEventListener("click", () => {
      this.vec.normalize();
      this.inputX.value = `${this.vec.x}`;
      this.inputY.value = `${this.vec.y}`;
      this.draw.draw();
    });
  }
}
