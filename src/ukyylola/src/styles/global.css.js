import { createGlobalStyle } from 'styled-components';
import theme from './theme';

import MyriadProRegular from './MyriadPro-Regular.woff';
import MyriadProRegularW2 from './MyriadPro-Regular.woff2';

import MerriweatherBoldItalic from './Merriweather-BoldItalic.woff';
import MerriweatherBoldItalicW2 from './Merriweather-Black.woff2';

export default createGlobalStyle`


/*! modern-normalize | MIT License | https://github.com/sindresorhus/modern-normalize */

/* Document
   ========================================================================== */

/**
 * Use a better box model (opinionated).
 */



.slick-prev {
    margin-left: 40px;
	transform:scale(2);
  }

.slick-next {
    margin-right: 40px;
	transform:scale(2);

  }



/* fix for Multislideshow alpha, pretty naasty shit oee compadre. */
/* .slide {
    opacity:1!important;
} */


html {
  
    box-sizing: border-box;
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    background-color: #000;
    
    font-size: 1.2vw;

    @media (max-width: 700px) {
        font-size: 1.5vw;
    }
    @media (min-width: 1400px) {
        font-size: 1.8vw;
    }

}

@font-face {
    font-family: 'MerriweatherBoldItalic';
    src: url(${MerriweatherBoldItalicW2}) format('woff2'),
        url(${MerriweatherBoldItalic}) format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
	font-family: 'MyriadProRegular';
    src: url(${MyriadProRegularW2}) format('woff2'),
    url(${MyriadProRegular}) format('woff');
	font-weight: normal;
	font-style: normal;
}


.slick-dots li button:before {
    font-size: 15px;
	z-index: 5;

} 

.slick-dots li button {
    font-size: 15px;
	z-index: 5;

}


.slick-thumb li {
    width: 60px;
    height: 45px;
  }
*,
*::before,
*::after {
	box-sizing: inherit;
}

/**
 * Use a more readable tab size (opinionated).
 */

:root {
	-moz-tab-size: 4;
	tab-size: 4;
}

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */


/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
	margin: 0;
}

/**
 * Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
 */

body {
	font-family:
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Helvetica,
		Arial,
		sans-serif,
		'Apple Color Emoji',
		'Segoe UI Emoji',
		'Segoe UI Symbol';
}

/* Grouping content
   ========================================================================== */

/**
 * Add the correct height in Firefox.
 */

hr {
	height: 0;
}

/* Text-level semantics
   ========================================================================== */

/**
 * Add the correct text decoration in Chrome, Edge, and Safari.
 */

abbr[title] {
	text-decoration: underline dotted;
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
	font-weight: bolder;
}

/**
 * 1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
 * 2. Correct the odd em font sizing in all browsers.
 */

code,
kbd,
samp,
pre {
	font-family: SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace; /* 1 */
	font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
	font-size: 80%;
}

/**
 * Prevent sub and sup elements from affecting the line height in all browsers.
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

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
	font-family: inherit; /* 1 */
	font-size: 100%; /* 1 */
	line-height: 1.15; /* 1 */
	margin: 0; /* 2 */
}

/**
 * Remove the inheritance of text transform in Edge and Firefox.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
	text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type='button'],
[type='reset'],
[type='submit'] {
	-webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
	border-style: none;
	padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
	outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
	padding: 0.35em 0.75em 0.625em;
}

/**
 * Remove the padding so developers are not caught out when they zero out fieldset elements in all browsers.
 */

legend {
	padding: 0;
}

/**
 * Add the correct vertical alignment in Chrome and Firefox.
 */

progress {
	vertical-align: baseline;
}

/**
 * Correct the cursor style of increment and decrement buttons in Safari.
 */

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
	height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type='search'] {
	-webkit-appearance: textfield; /* 1 */
	outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type='search']::-webkit-search-decoration {
	-webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to inherit in Safari.
 */

::-webkit-file-upload-button {
	-webkit-appearance: button; /* 1 */
	font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Chrome and Safari.
 */

summary {
	display: list-item;
}
/* theme */
html{
    @media(max-width: 800px){
        font-size: 80%;
    }
}
body {
  background-color: ${theme.clearcolor};
  color: ${theme.color};
  font-family: ${theme.fontbody};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1,h2,h3,h4,h5,h6{
  font-family: ${theme.fonttitle};
  font-weight: 900;
}

/* .canvas {
  position: absolute;
  top: 0;
	left: 0;
  pointer-events: none;
	border: 1px solid #f0f;
} */
body{
	/* cursor: -webkit-image-set(url(https://dl.dropboxusercontent.com/s/5zp0ys30uh6hq0a/normal1x.png) 1x, url(https://dl.dropboxusercontent.com/s/d2zajun857fov27/normal2x.png) 2x) 0 0, pointer !important; */

}

.u-position-absolute {
    position: absolute;
}

.u-position-relative {
    position: relative;
}

.accordion {
    /* border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 2px; */
    background: ${theme.background};
}

.accordion__item + .accordion__item {
    /* border-top: 1px solid rgba(0, 0, 0, 0.1); */
}

.accordion__item--has-icon {
    position: relative;
}

.accordion__title {
    cursor: pointer;
    padding: 1rem;
    width: 100%;
    text-align: left;
    border: none;
    background-color: ${theme.background};
}

.accordion__title:hover {
    /* background-color: #ddd; */
}

.accordion__body {
    padding: 1rem;
    display: block;
    animation: fadein 0.35s ease-in;
}

.accordion__body--hidden {
    display: none;
    opacity: 0;
    animation: fadein 0.35s ease-in;
}

.accordion__title > *:last-child,
.accordion__body > *:last-child {
    margin-bottom: 0;
}

.accordion__arrow {
    display: inline-block;
    position: relative;
    width: 24px;
    height: 12px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -6px;
}

.accordion__arrow::after,
.accordion__arrow::before {
    display: block;
    position: absolute;
    top: 50%;
    width: 10px;
    height: 2px;
    background-color: currentColor;
    content: '';
}

.accordion__arrow::before {
    left: 4px;
    transform: rotate(45deg);
}

[aria-expanded='true'] .accordion__arrow::before, [aria-selected='true'] .accordion__arrow::before {
    transform: rotate(-45deg);
}

.accordion__arrow::after {
    right: 4px;
    transform: rotate(-45deg);
}

[aria-expanded='true'] .accordion__arrow::after, [aria-selected='true'] .accordion__arrow::after {
    transform: rotate(45deg);
}

.accordion__arrow::before,
.accordion__arrow::after {
    transition: transform 0.25s ease, -webkit-transform 0.25s ease;
}

/* -------------------------------------------------- */
/* ---------------- Animation part ------------------ */
/* -------------------------------------------------- */

@keyframes fadein {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes move-down {
    0% {
        transform: translateY(0);
    }
    10% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(5px);
    }
    30% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes move-up {
    0% {
        transform: translateY(0);
    }
    10% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(-5px);
    }
    30% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
}

.accordion__title--animated:hover .accordion__arrow {
    animation-name: move-down;
    animation-duration: 1.5s;
}

.accordion__title--animated[aria-expanded='true']:hover .accordion__arrow {
    animation-name: move-up;
    animation-duration: 1.5s;
}

*:focus {
    outline: none;
}

.accordionbg{
z-index: 3;
background-color: ${theme.background};
position: relative;
}

.logoql{
max-width: 100%;
max-height: 100%;
}

`;
