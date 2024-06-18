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
 * This file demonstrates to draw to a HTMLCanvasElement.
 */

import { Vec } from "./vec.js";

/**
 * Viewer class that renders a 2D-vector in a Cartesian coordinate system.
 */
export class Paint {
  /** @type {HTMLCanvasElement} -- drawing area */
  canvas;
  /** @type {Vec} -- private attribute for the vector */
  #vector;
  /** @type {CanvasRenderingContext2D} -- rendering context */
  ctx;
  /** @type {HTMLImageElement} -- image */
  img;

  /**
   * Constructor.
   * @param {HTMLCanvasElement} canvasElement -- a canvas element
   */
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.#vector = new Vec(1, 0);
    this.ctx = this.canvas.getContext("2d");

    // load image
    this.img = /** @type {HTMLImageElement} */ (document.createElement("img"));
    this.img.src = "img/img.png?version=1";
    this.img.addEventListener("load", () => {
      this.draw();
    });

    // initialize resizing
    window.addEventListener("resize", () => {
      this.#resize();
    });
    this.#resize();
  }

  /**
   * Setter method for private attribute vector.
   * @param {Vec} v
   */
  setVector(v) {
    this.#vector = v;
    this.draw();
  }

  /**
   * Getter method for private attribute vector.
   * @returns {Vec}
   */
  getVector() {
    return this.#vector;
  }

  /**
   * Private method for resizing the canvas HTML element.
   * @returns {void}
   */
  #resize() {
    const ratio = window.devicePixelRatio;
    this.canvas.width = ratio * this.canvas.offsetWidth;
    this.canvas.height = ratio * this.canvas.offsetHeight;
    this.draw();
  }

  /**
   * Draws the current contents.
   * @returns {void}
   */
  draw() {
    // get view width and height
    const w = this.canvas.width;
    const h = this.canvas.height;

    // calculate the canvas center
    const cx = w / 2;
    const cy = h / 2;

    // clear all pixels
    this.ctx.clearRect(0, 0, w, h);

    // draw an image
    this.ctx.drawImage(this.img, 10, 10);

    // transform
    this.ctx.save(); // push the current drawing state on stack
    this.ctx.translate(cx, cy);
    this.ctx.scale(1, -1); // invert the y-axis

    // draw axes
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 2;
    //   x-axis
    this.ctx.beginPath();
    this.ctx.moveTo(-w / 2, 0);
    this.ctx.lineTo(w / 2, 0);
    this.ctx.stroke();
    //   y-axis
    this.ctx.beginPath();
    this.ctx.moveTo(0, -h / 2);
    this.ctx.lineTo(0, h / 2);
    this.ctx.stroke();

    // draw a circle at origin
    this.ctx.fillStyle = "red";
    this.ctx.beginPath();
    this.ctx.arc(0, 0, 10, 0, 2 * Math.PI);
    this.ctx.fill();

    // draw the vector line segment
    let x = 50 * this.#vector.x;
    let y = 50 * this.#vector.y;
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(x, y);
    this.ctx.stroke();

    // draw arrow (triangular polygon)
    let angle = Math.atan2(this.#vector.y, this.#vector.x);
    //   (a) translate
    this.ctx.save(); // push the current drawing state on stack
    this.ctx.translate(x, y);
    this.ctx.rotate(angle);
    //   (b) draw
    const arrowWidth = 30;
    const arrowHeight = 30;
    this.ctx.fillStyle = "green";
    this.ctx.beginPath();
    this.ctx.moveTo(-arrowWidth / 2, -arrowHeight / 2);
    this.ctx.lineTo(arrowWidth / 2, 0);
    this.ctx.lineTo(-arrowWidth / 2, arrowHeight / 2);
    this.ctx.closePath();
    this.ctx.fill();
    //   (c) pop "local" translation
    this.ctx.restore();

    // pop "global" translation
    this.ctx.restore();
  }
}
