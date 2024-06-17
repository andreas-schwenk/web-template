import esbuild from "esbuild";

esbuild.buildSync({
  platform: "browser",
  globalName: "myApp",
  minify: true,
  target: "es6",
  entryPoints: ["src/index.js"],
  bundle: true,
  outfile: "dist/myApp.min.js",
});
