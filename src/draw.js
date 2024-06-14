/**
 * This file demonstrates to draw to a HTMLCanvasElement.
 */

export class Draw {
  /**
   * @param {HTMLCanvasElement} canvasElement
   */
  constructor(canvasElement) {
    /** @type {HTMLCanvasElement} */
    this.canvas = canvasElement;

    /** @type {CanvasRenderingContext2D} */
    this.ctx = this.canvas.getContext("2d");

    window.addEventListener("resize", () => {
      this.resize();
    });
    this.resize();
  }

  /**
   *
   */
  resize() {
    const ratio = window.devicePixelRatio;
    this.canvas.width = ratio * this.canvas.offsetWidth;
    this.canvas.height = ratio * this.canvas.offsetHeight;
    this.ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    this.draw();
  }

  /**
   *
   */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw a line
    this.ctx.strokeStyle = "black";
    this.ctx.beginPath();
    this.ctx.moveTo(10, 10);
    this.ctx.lineTo(100, 100);
    this.ctx.stroke();

    // fill a rectangle
    this.ctx.fillStyle = "rgba(100,0,100,0.5)";
    this.ctx.beginPath();
    this.ctx.rect(20, 20, 75, 50);
    this.ctx.fill();

    // TODO: image
  }
}
