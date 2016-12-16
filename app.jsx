import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Foo from './foo';

console.log("Hello");
ReactDOM.render(
  <Foo />, document.getElementById('root')
);
