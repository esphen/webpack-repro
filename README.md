# Webpack 2.2.0-rc.1 broken by babel-plugin-add-module-exports

Demo to highlight babel-plugin-add-module-exports breaking webpack

- OS: Fedora 25
- Node: v7.2.0
- Yarn: 0.18.0


### Reproducing

1. Start by running

    yarn
    yarn start


2. Check the console and see that it is broken

3. Go into `foo.jsx` and add `export` right before `class`

4. Reload and see that it works now

Also read [this][1]

[1]: https://stackoverflow.com/questions/41290538/webpack-2-0-with-native-es6-modules-uncaught-typeerror-cannot-read-property-a/41290631#41290631

