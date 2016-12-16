import React from 'react';
import Bar from './bar.jsx';

// Add export in front of `class`
class Foo extends Bar {
  render() {
    return (
      <h1>{this.exclaim()}</h1>
    );
  }
}

export default Foo;
