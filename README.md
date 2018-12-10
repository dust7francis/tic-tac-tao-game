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

## Coding Patterns deployed

### Stateless Functional Components

This pattern behaves as a snapshot of the UI dependings on the prpos being passing down.

As it is a good idea to have more dumb components in our application, so they can be built, test and forget for most of the use cases changes. `Board` and `Square` components are implement as dump components and as a `Stateless Functional Components`.

``` javascript
const Board = ({ squares, onClick }: IProps) => (
  <div>
    <div className="status">{status}</div>
...
const Square = ({ index, value, onClick }: IProps) => {
  return (
    <button
      className="square"
```

It translates to

* No class declaration, simpler code

* No need for this keyword

* works with React Context 

* React lifecycles hooks is now available in the React latest beta version.

### Controlled Components

The pattern relies on `controllable` props, which are passed down to the `Component`.

The component needs not to decides if it should be `Controlled` or if it should switch to it's internal state.

``` javascript
// use `react-redux` to map State props and State Dispatch actions to `Game` component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

```

It translates to 

* Gives flexibility to us, as developer

* This pattern can be compposed easily to add extra functionality

* No need to handle `props` and the internal `state`, or less complexity.


### Compound Components by Extending Children

The pattern focuses on passing down the stat of the parent component, like `Game`, to its children. This solves the problem that arises when a child component, like `Square`, to communicate with its parent.

This pattern works well in situations where you want to have communication between a parent compoent and its children. For example, inform `Game` on user actions, and disable `Square` components for `onClick` action when state of application is `isGameOver`.

``` javascript
// in game/reducer.ts, where when `State` has `winnner` or 'isAllClicked`, the click action return current state, without any changes to the state.  It effects that `square` onClick action is diabled
case ACTION_TYPES.ON_CLICK: {
      if (
        state.isAllClicked ||
        state.winner !== null ||
        state.squares[action.payload.index] !== ''
      ) {
        return state
      }
      ...
    }
```

## Layout Components

Layout components result in some form of static DOM element. It might not need to update frequently, if ever.

``` javascript
// in footer/index.tsx, it defines a layout component
const Footer = props => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
      ...
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)