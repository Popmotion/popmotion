import { bodyFont, codeFont, fontSize } from './fonts';
import { BLACK, WHITE, cols, media } from './vars';
import syntaxHighlighting from './syntax-highlighting';

export default `
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-style: inherit;
  font-size: 100%;
  color: ${BLACK};
  ${bodyFont}
  line-height: 1;
  vertical-align: baseline;
  word-wrap: break-word;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-font-smoothing: antialiased;
}

br {
  line-height: 0;
}

textarea,
input {
  -webkit-appearance: none;
  border-radius: 0;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px white inset;
}

/*! normalize.css v4.1.1 | MIT License | github.com/necolas/normalize.css */

/**
 * 1. Change the default font family in all browsers (opinionated).
 * 2. Prevent adjustments of font size after orientation changes in IE and iOS.
 */

html {
  font-family: sans-serif; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/**
 * Remove the margin in all browsers (opinionated).
 */

body {
  margin: 0;
}

/* HTML5 display definitions
   ========================================================================== */

/**
 * Add the correct display in IE 9-.
 * 1. Add the correct display in Edge, IE, and Firefox.
 * 2. Add the correct display in IE.
 */

article,
aside,
details, /* 1 */
figcaption,
figure,
footer,
header,
main, /* 2 */
menu,
nav,
section,
summary { /* 1 */
  display: block;
}

/**
 * Add the correct display in IE 9-.
 */

audio,
canvas,
progress,
video {
  display: inline-block;
}

ul, ol {
  list-style-type: none;
}

/**
 * Add the correct display in iOS 4-7.
 */

audio:not([controls]) {
  display: none;
  height: 0;
}

/* Links
   ========================================================================== */

/**
 * 1. Remove the gray background on active links in IE 10.
 * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.
 */

a {
  background-color: transparent; /* 1 */
  -webkit-text-decoration-skip: objects; /* 2 */
}

/**
 * Remove the outline on focused links when they are also active or hovered
 * in all browsers (opinionated).
 */

a:active,
a:hover {
  outline-width: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * 1. Remove the bottom border in Firefox 39-.
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Prevent the duplicate application of bolder by the next rule in Safari 6.
 */

strong {
  font-weight: inherit;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

strong {
  font-weight: bolder;
}

/**
 * Prevent sub and sup elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10-.
 */

img {
  border-style: none;
}

/**
 * Hide the overflow in IE.
 */

svg:not(:root) {
  overflow: hidden;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd em font sizing in all browsers.
 */

code,
kbd,
pre,
samp,
code span,
pre span {
  ${codeFont}
  font-size: 14px;
  -webkit-font-smoothing: initial;
  tab-size: 2;
}

/* Would prefer not to do this - marked doesn't return themable pre tags */
pre {
  background: ${BLACK};
  padding: ${cols(1)};
  margin-bottom: 1.4rem;
  white-space: pre-wrap;
}
pre code,
pre.prism-code {
  color: ${WHITE};
  line-height: 1.5;
}

@media (max-width: ${cols(50)}) {
  pre, pre code, pre span, code span {
    ${fontSize(14)}
  }
}
/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/* Forms
   ========================================================================== */

/**
 * 1. Change font properties to inherit in all browsers (opinionated).
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font: inherit; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Restore the font weight unset by the previous rule.
 */

optgroup {
  font-weight: bold;
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/* Reset button and button-style input default styles */
input[type="submit"],
input[type="reset"],
input[type="button"],
button {
    background: none;
    border: 0;
    color: inherit;
    cursor: default;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    -webkit-appearance: none; /* for input */
    -webkit-user-select: none; /* for button */
       -moz-user-select: none;
        -ms-user-select: none;
}
input::-moz-focus-inner,
button::-moz-focus-inner {
    border: 0;
    padding: 0;
}

/**
 * 1. Prevent a WebKit bug where (2) destroys native audio and video
 *    controls in Android 4.
 * 2. Correct the inability to style clickable types in iOS and Safari.
 */

button,
html [type="button"], /* 1 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: none; /* 2 */
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}


/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from fieldset elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    fieldset elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Remove the default vertical scrollbar in IE.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10-.
 * 2. Remove the padding in IE 10-.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding and cancel buttons in Chrome and Safari on OS X.
 */

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * Correct the text style of placeholders in Chrome, Edge, and Safari.
 */

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: none; /* 1 */
  font: inherit; /* 2 */
}
${syntaxHighlighting}
`;
