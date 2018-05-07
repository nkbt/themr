import React from 'react';
import {themr} from '../../src';


const css = {button: 'button'};


const Button = themr(css)(({theme, ...props}) => (
  <button className={theme.button} {...props} />
));


const ThemedButtonRed = props => <Button theme={{button: 'red'}} {...props} />;
const ThemedButtonGreen = props => <Button theme={{button: 'green'}} {...props} />;
const ThemedButtonBlue = props => <Button theme={{button: 'blue'}} {...props} />;


const App = () => (
  <div className="app">
    <div className="content">
      <h1>@nkbt/themr</h1>
      <section>
        <Button>Button</Button>
        <ThemedButtonRed>ThemedButtonRed</ThemedButtonRed>
        <ThemedButtonGreen>ThemedButtonGreen</ThemedButtonGreen>
        <ThemedButtonBlue>ThemedButtonBlue</ThemedButtonBlue>
      </section>
    </div>
  </div>
);


export default App;
