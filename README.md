# tic-tac-tao-game

**Clone and start using Typescript to build Single Page Application in Typescript and React**

This is a minimal React Single Page Application (SPA) in TypeScript to start build game in Typescript and React.

These files are of interest to get started.  

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `\src\app\index.tsx` - The entry point of scripts to be loaded on start-up of SPA.
- `\src\index.html` - The web page to render on start-up of SPA.

## To Use and enjoy the game

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/dust7francis/tic-tac-tao-game.git
# Go into the repository
cd tic-tac-tao-game
# Install dependencies
npm i
# Run the app in development mode with hot-reload upon changes of index.ts
npm start
# Run the tests
npm test
# Run the app in production mode with 'serve'
npm run prod
```

## To lint and to prettier

```bash
# check lint error
npm run lint
# check and fix lint error
npm run lint:fix
# prettier the codes
npm run prettier:format
```

The lint rule of semicolon is 'never' (means they are not allowed). If you prefer to use semicolons, change `"never"` to `"always"` in the lines of `tslint.json` and remove the cli option `--no-semi` in script of `prettier:format` in `package.json`

``` bash
# defined in tslint.json:
# semicolon not allowed -- currently set
"semicolon": [true, "never", "ignore-bound-class-methods"],
# semicolor is required -- can be set as below
"semicolon": [true, "always", "ignore-bound-class-methods"],
# defined 'prettier:format' in package.json:
"prettier:format": "prettier --single-quote --no-semi --write \"src/**/*.{json,ts,tsx,css,scss}\"",
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)