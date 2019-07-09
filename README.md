# maintainable-icon-system-react

[![Greenkeeper badge](https://badges.greenkeeper.io/EmaSuriano/maintainable-icon-system-react.svg)](https://greenkeeper.io/)

> Demo Repository to setup an icon system that can be easily maintainable between React and React Native

This repository serves as example of this article: [Building a Maintainable Icon System in React and React Native][article-link]

## Demo

### [Live Web Demo ⚛️][demo-link]

![Demo](https://user-images.githubusercontent.com/3399429/60707633-7bfb4700-9f0c-11e9-9279-8e8764c28bb9.png)

Collection of icons used: Landmarks and Monuments from [FlatIcon](https://www.flaticon.com/packs/landmarks-and-monuments-18)

## Setup the project

In case you want to run the Android or iOS project you need to first setup the environment for both:

- [iOS Setup](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies)
- [Android Setup](https://facebook.github.io/react-native/docs/getting-started#installing-dependencies-1)

```bash
> git clone https://github.com/EmaSuriano/maintainable-icon-system-react.git
> cd maintainable-icon-system-react
> yarn
```

## Commands

- `start-web`: Run the web project using React in the browser.
- `build-web`: Build the web project using React for the browser.
- `start-ios`: Run the iOS project using React Native in the emulator.
- `start-android`: Run the Android project using React Native in the emulator.
- `generate-icon`: Generate the Icon Components given the icons inside the assets folder.
- `lint`: Run `eslint` with the `create-react-app` config.

## Dependencies

- `react`: UI component library.
- `react-dom`: to render in the browser.
- `react-native`: UI mobile library.
- `styled-components`: to style both web and native components.
- `react-scripts`: provides the `start` command.
- `icon-font-generator`: generate a font from the `svg` icons.
- `randomcolor`: generate fancy colors for the icons 🦄.
- `eslint`: linter for the whole project. The configuration is the default from `create-react-app`.

## License

MIT.

[article-link]: https://darcs.nomeata.de/screen-message/sm.html#t=Coming%20soon%20...%20
[demo-link]: https://emasuriano.github.io/maintainable-icon-system-react/index.html
