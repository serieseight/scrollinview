# Scroll in View

A tiny library that triggers classes on elements as they scroll into the viewport.

## Installation

Scroll in View makes use of [Core Events](https://github.com/serieseight/core-events), so be sure to install this as a dependancy if you haven't already.

```
npm install scrollinview core-events
```

### Usage

```js
import Event from 'core-events'
import scrollinview from 'scrollinview'

const event = new Event()

scrollinview(event)
```

```html
<div class="content" data-inview>
  <!-- Content here -->
</div>
```

As soon as the element enters the viewport, a `js-in-view` class is added allowing a css animation to be triggered — this class can also be customised using an option (see below).

### Options

The `scrollinview` function can optionally take an object as the second argument, that may include the following properties.

### className

The class name that Scroll in View uses when an element enters the viewport. Defaults to `js-in-view`.

```js
scrollinview(event, { className: 'my-custom-class' })
```
