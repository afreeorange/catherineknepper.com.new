import { h, Fragment } from "preact";

import packageJson from "../package.json";
import Hello from "../content/Hello";
import About from "../content/About";

const PROD_PREFIX = "";
const SECTION_MAP = [
  {
    label: "Hello",
    component: <Hello />,
  },
  {
    label: "Clients",
    component: <Hello />,
  },
  {
    label: "About",
    component: <About />,
  },
  {
    label: "Services",
    component: <Hello />,
  },
  {
    label: "Testimonials",
    component: <Hello />,
  },
  {
    label: "Contact",
    component: <Hello />,
  },
];

const Meta = () => (
  <>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <meta name="view-transition" content="same-origin" />

    <meta
      property="og:title"
      content="Catherine Knepper Writing Services, LLC"
    />
    <meta
      property="og:description"
      content="I help smart, talented people bring their ideas to the page and to the marketplace."
    />
    <meta property="og:type" content="website" />
    <meta
      property="og:image"
      content="http://catherineknepper.com/catherine-small.jpg"
    />
    <meta property="og:url" content="http://catherineknepper.com/" />
  </>
);

export const Base = () => {
  return (
    <html lang="en-US">
      <head>
        <title>Catherine Knepper Writing Services, LLC</title>
        <Meta />

        {import.meta.env && import.meta.env.DEV ? (
          <link rel="stylesheet" href="/src/main.scss" />
        ) : (
          <link rel="stylesheet" href={`${PROD_PREFIX}/index.css`} />
        )}
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/assets/img/favicon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/assets/img/favicon.png" />

        <script
          async
          defer
          data-domain="catherineknepper.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </head>
      <body>
        <div className="wrapper">
          <header>
            <h1>Catherine Knepper</h1>
            <nav>
              <ul>
                {SECTION_MAP.filter((_) => _.label !== "Hello").map(
                  ({ label }) => (
                    <li>
                      <a href={`#${label}`} title={label}>
                        {label}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </nav>
          </header>

          <main>
            {SECTION_MAP.map(({ label, component }) => (
              <section id={label}>{component}</section>
            ))}
          </main>

          <footer>
            v{packageJson.version}, built {new Date().toISOString()}
          </footer>
        </div>
      </body>
    </html>
  );
};
