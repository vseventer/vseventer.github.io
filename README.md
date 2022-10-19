# vseventer.github.io
> My personal website, [vseventer.com](https://www.vseventer.com).

## Changelog
See the [Changelog](./CHANGELOG.md) for a list of changes.

## Installation
1. Run `npm install` to download and install dependencies.
2. Run `npm start` to start the development environment.
3. Run `npm run build` to build a production-ready bundle.

## Deployment
1. Ensure the `dist/` directory is a git worktree using `git worktree add -B master dist/ origin/master`.
2. Run `npm version <major|minor|patch>`.
3. Push the code changes using `git push`.
4. Commit the build changes using `cd dist/ && git commit -am 'Publishing changes.'`.
5. Push the build changes using `cd dist/ && git push`.

## Credits
* Ionicons pack - https://www.iconfinder.com/iconsets/ionicons
* Background photo - https://unsplash.com/@asoggetti

## License
    The MIT License (MIT)

    Copyright (c) 2022 Mark van Seventer

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
    FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
    COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
    IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
    CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
