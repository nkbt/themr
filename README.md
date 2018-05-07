# @nkbt/themr [![npm](https://img.shields.io/npm/v/@nkbt/themr.svg?style=flat-square)](https://www.npmjs.com/package/@nkbt/themr)

Theming wrapper for React UI libs


[![CircleCI](https://img.shields.io/circleci/project/nkbt/themr.svg?style=flat-square)](https://circleci.com/gh/nkbt/themr)
[![Dependencies](https://img.shields.io/david/nkbt/themr.svg?style=flat-square)](https://david-dm.org/nkbt/themr)
[![Dev Dependencies](https://img.shields.io/david/dev/nkbt/themr.svg?style=flat-square)](https://david-dm.org/nkbt/themr#info=devDependencies)


## Installation

### NPM

```sh
npm install --save @nkbt/themr
```

### 1998 Script Tag:
```html
<script src="https://unpkg.com/react/umd/react.production.min.js"></script>
<script src="https://unpkg.com/@nkbt/themr/build/themr.min.js"></script>
(Module exposed as `themr`)
```


## Demo

[http://nkbt.github.io/themr](http://nkbt.github.io/themr)

## Codepen demo

[http://codepen.io/nkbt/pen/VxrYKq](http://codepen.io/nkbt/pen/VxrYKq?editors=101)


## Usage

See [example/App/index.js](example/App/index.js)


## Usage


### Example of themed UI component
```jsx
import {themr} from 'themr';
import css from './TextWithIcon.css';
/*
const css = {
  container: 'TextWithIcon-container',
  icon: 'TextWithIcon-icon',
  text: 'TextWithIcon-text',
}
*/

const TextWithIcon = ({icon, theme, ...props}) => (
  <div className={theme.container}>
    <span className={theme.icon} />
    <span className={theme.text} {...props} />
  </div>
);
TextWithIcon.propTypes = {
  theme: PropTypes.object.isRequired
};


export default themr(css, {override: false})(TextWithIcon);
```

### Output
```
import TextWithIcon from './TextWithIcon';
import css from './Themed.css';
/*
const css = {
  text: 'Themed-text',
}
*/

const Themed = () =>
  <TextWithIcon theme={css}>Test</TextWithIcon>;
```

```html
<div class="TextWithIcon-container">
  <span class="TextWithIcon-icon"></span>
  <span class="TextWithIcon-text Themed-text">Test</span>
  <!--                           ^^^ added class -->
  <!-- if {override: true} option was used-->
</div>
```

if `{override: true}` option was used

```html
<div class="TextWithIcon-container">
  <span class="TextWithIcon-icon"></span>
  <span class="Themed-text">Test</span>
  <!--         ^^^ overridden class -->
</div>
```


## Development and testing

Currently is being developed and tested with the latest stable `Node` on `OSX`.

To run example covering all `ReactComponentRouter` features, use `yarn start`, which will compile `example/index.js`

```bash
git clone git@github.com:nkbt/themr.git
cd themr
yarn install
yarn start

# then
open http://localhost:8080
```

## Tests

```bash
# to run ESLint check
yarn lint

# to run tests
yarn test

# to run end-to-end tests
# first, run `selenium/standalone-firefox:3.4.0` docker image
docker run -p 4444:4444 selenium/standalone-firefox:3.4.0
# then run test
yarn e2e
```

## License

MIT
