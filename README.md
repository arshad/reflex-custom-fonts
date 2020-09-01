# Reflex custom fonts

An example site using custom fonts.

## Installation

1. Create a `static` directory at the root of your site.
2. Place your font files and a `fonts.css` file in the `static` directory.

```
static
└── fonts
    ├── fonts.css
    └── Rounded_Elegance.woff
```

```css
/* static/fonts/fonts.css */
@font-face {
  font-family: "Rounded";
  src: url("Rounded_Elegance.woff") format("woff");
}
```

3. Install `gatsby-plugin-web-font-loader` and configure it as follows in `gatsby-config.js`

```js
require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: "Reflex",
    description: "Starter for Reflex.",
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    "@reflexjs/gatsby-theme-base",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Rounded"],
          urls: ["fonts/fonts.css"],
        },
      },
    },
  ],
};
```

3. Import your custom `fonts.css` in `gatsby-browser.js`

```js
// gatsby-browser.js
import "./static/fonts/fonts.css";
```

4. Create `src/@reflexjs/gatsby-theme-base/theme.js` and add the font for your heading or body.

```js
// src/@reflexjs/gatsby-theme-base/theme.js
import base from "@reflexjs/preset-base";

export default {
  preset: base,

  fonts: {
    heading: "Rounded",
  },
};
```
