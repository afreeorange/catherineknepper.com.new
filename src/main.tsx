// Just for development and sweet live-reloading

import { h } from "preact";
import { render } from "preact-render-to-string";
import { Base } from "./base";

// biome-ignore lint/style/noNonNullAssertion: Fuck it.
document.querySelector<HTMLDivElement>("#app")!.innerHTML = render(<Base />);
