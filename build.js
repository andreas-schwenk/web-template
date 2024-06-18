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
 * This file uses esbuild for compilation, bundling and minification.
 * Use the command "node build.js" in a terminal window to execute this file.
 */

import esbuild from "esbuild";

esbuild.buildSync({
  platform: "browser",
  globalName: "myApp",
  minify: true, // e.g. removes white spaces and shortens identifiers
  target: "es6", // e.g. resolves private attributes in classes
  entryPoints: ["src/index.js"], // the root input file
  bundle: true, // just output one file
  outfile: "dist/myApp.min.js", // the output file
});
