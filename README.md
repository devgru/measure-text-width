# measure-text-width

> measure-text-width uses canvas to measure text width.
>

## Installing

```sh
$ yarn add measure-text-width
# or
$ npm install --save measure-text-width
```

## Usage

```js

import CreateWidthMeasurer from 'measure-text-width';

const measureWidth = CreateWidthMeasurer(window)
  .setFont('12px Arial');

const stringWidth = measureWidth('Hello world!'); // 63

```

## API

measure-text-width exports one function, *CreateWidthMeasurer*.

## CreateWidthMeasurer(*window = this*)

Creates *widthMeasurer*.

## widthMeasurer(*text*)

Measures and returns width of *text* in pixels, rounded to integer.

## widthMeasurer.setFont(*font*)

Sets font for canvas, as in [CSS spec](https://developer.mozilla.org/en-US/docs/Web/CSS/font).

## widthMeasurer.useElementFont(*element*)

Sets font for canvas, extracting passed Element's font via [getComputedStyle](https://developer.mozilla.org/ru/docs/Web/API/Window/getComputedStyle).

## License

MIT © [Dmitriy Semyushkin](https://devg.ru)
