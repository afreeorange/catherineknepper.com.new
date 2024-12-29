import { h, Fragment } from "preact";

import packageJson from "../package.json";
import Hello from "../content/Hello";
import About from "../content/About";
import Contact from "../content/Contact";

const PROD_PREFIX = "";
const SECTION_MAP = [
  {
    label: "Hello",
    component: <Hello />,
  },
  // {
  //   label: "Clients",
  //   component: <Hello />,
  // },
  // {
  //   label: "About",
  //   component: <About />,
  // },
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
    component: <Contact />,
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
              <div>
                {/* <input type="checkbox" id="nav-toggle" />
                <label for="nav-toggle">
                  <span></span>
                </label> */}
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
              </div>
            </nav>
          </header>

          <main>
            {SECTION_MAP.map(({ label, component }) => (
              <div class="section-wrapper">
                <section id={label}>{component}</section>
              </div>
            ))}
          </main>

          <footer>
            <p>
              &copy; {new Date().getFullYear()} Catherine Knepper Writing
              Services, LLC
            </p>
            <p>
              Photo by my friend{" "}
              <a
                href="https://kathryngamble.com/"
                title="Kathryn Gamble's portfolio"
              >
                Kathryn Gamble
              </a>
              . I respect your privacy and use{" "}
              <a
                href="https://plausible.io/"
                title="Plausible.io, a privacy-friendly website analytics tool"
              >
                Plausible
              </a>{" "}
              for this website's analytics.
            </p>
            <p>
              v{packageJson.version}, built {new Date().toISOString()}
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
};
