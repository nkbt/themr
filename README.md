# themr

Theming wrapper for React UI libs


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
  theme: React.PropTypes.object.isRequired
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


## License

MIT
