import { h } from "preact";
import { render } from "preact-render-to-string";
import { MDXProvider } from "@mdx-js/preact";
import fs from "node:fs/promises";
import { exec } from "node:child_process";

import { Base } from "./src/base";

(async () => {
  console.log("Cleaning output");
  await fs.rm("dist", { recursive: true, force: true });

  console.log("Building HTML");
  await fs.mkdir("./dist");
  await fs.writeFile(
    "./dist/index.html",
    render(
      <MDXProvider>
        <Base />
      </MDXProvider>
    )
  );

  console.log("Building CSS");
  await exec(
    `sass ./src/main.scss | tailwind --postcss ./postcss.config.js -i - -o dist/index.css`,
    (error, stdout, stderr) => {
      console.log(stdout);

      if (error) {
        console.log(error);
        console.log(stderr);
      }
    }
  );
})();
