# eleventy-parcel-boilerplate
> Starter kit for using [Eleventy][11ty] with [Parcel][parcel], backed by [Forestry][forestry].

[Eleventy][11ty] is an extremely powerful static site generator, but does not offer a built-in asset pipeline. This is where [Parcel][parcel] comes in: it bundles all assets of your web application, leaving you with a site that's ready for production!

## Installation
1. Clone the repository using `git clone https://github.com/vseventer/eleventy-parcel-boilerplate`.
2. Navigate to your project directory using `cd eleventy-parcel-boilerplate`. 3. Install the dependencies using `npm install`.

_This project supports both `npm` and `yarn`, feel free to use whichever package manager you're most comfortable with._

## Features
This project aims to be a boilerplate for your future [Eleventy][11ty] with [Parcel][parcel] project. It sets up your build pipeline, adds basic linting (JavaScript and SASS), and offers built-in CSS optimization ([PurgeCSS][purgecss] and [autoprefixer][autoprefixer]) using [PostCSS][postcss].

## Configuration
This project predefines a set of configuration files, which can be tweaked depending on your preferences:
* `package.json`: contains [browserslist][browserslist] configuration, and input, intermediate, and output directories of your site.
* `.babelrc`: [Babel][babel] configuration.
* `.eslintrc` and `src/.eslintrc`: [ESLint][eslint] configuration.
* `.stylelintrc`: [stylelint][stylelint] configuration.
* `eleventy.config.js`: [Eleventy][11ty] configuration in ES6 format.
* `postcss.config.js`: [PostCSS][postcss] configuration in ES6 format.

## Content Management
Content of your site lives in the `src/` directory by default.

If you are using Forestry to manage your content, import your site by following the steps in the Forestry Dashboard. `eleventy-parcel-boilerplate` is set-up so that the [Instant Preview][preview] functionality of Forestry will work out of the box.

## Development
* To start the development server, run `npm start` and navigate to `http://localhost:8080`.
* To build your site just once, run `npm run build`.

_The development server, [browser-sync][browser-sync], is provided by [Eleventy][11ty] and set-up to work in sync with [Parcel.js][parcel] development server. If you prefer to use the development server from [Parcel.js][parcel] directly, navigate to `http://localhost:1234`._

## Alternatives
* [parceleventy][parceleleventy]

## License
    Copyright 2019 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[11ty]: https://www.11ty.io/
[autoprefixer]: https://github.com/postcss/autoprefixer
[babel]: https://babeljs.io/
[browser-sync]: https://www.browsersync.io/
[browserslist]: https://github.com/browserslist/browserslist
[eslint]: https://eslint.org/
[forestry]: https://forestry.io/
[parcel]: https://parceljs.org/
[parceleventy]: https://github.com/chrisdmacrae/parceleventy
[postcss]: https://postcss.org/
[preview]: https://forestry.io/docs/previews/instant-previews/
[purgecss]: https://www.purgecss.com/
[stylelint]: https://stylelint.io/
