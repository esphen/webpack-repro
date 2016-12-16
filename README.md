# Webpack 2.2.0-rc.0 watch mode

Demo to highlight watch mode regression in Webpack 2.2.0-rc.0.

- OS: Max OS X 10.10.5
- Node: v7.0.0
- Yarn: 0.17.9


### Running the test

1. Start by running
    yarn

    yarn run watch


2. Make a bug in app.js by uncommenting `// x={}`

3. See webpack fail with

```
  ERROR in ./app.js
  Module build failed: SyntaxError: JSX attributes must only be assigned a non-empty expression (9:6)

   7 |   <Checkbox
   8 |     // uncomment this line:
  >  9 |     x={}
     |       ^
  10 |   />, document.getElementById('root')
```

Try it fix the error by see that webpack it not able to recover.
