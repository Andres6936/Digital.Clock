### Requirements

The most important things to know about Lit in order to work with various
browsers and tools are that:

- Lit is published as ES2019.
- Lit uses "bare module specifiers" to import modules.
- Lit uses modern web APIs such as <template>, custom elements, shadow DOM,
    and ParentNode.

These features are supported by the latest versions of major browsers
(including Chrome, Edge, Safari, and Firefox) and most popular tools
(such as Rollup, Webpack, Babel, and Terser) with the exception of bare
module specifier support in browsers.



![Logo](https://raw.githubusercontent.com/Andres6936/Digital.Clock/master/docs/mock/Timer.jpg)

### How to use

> npm install adan-digital-clock

Using in React

```jsx
import * as React from 'react';
import 'adan-digital-clock'

export default function App() {
    return (
    <div>
        <digital-clock theme="light"></digital-clock>
        <digital-clock theme="dark"></digital-clock>
    </div>
    );
}
```

Using in another Lit component

```javascript
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import 'adan-digital-clock'

@customElement('my-element')
export class MyElement extends LitElement {
    render() {
        return html`
        <digital-clock theme="light"></digital-clock>
        <digital-clock theme="dark"></digital-clock>
        `
    }
}
```

Using in the HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App</title>
    <!-- Added the link to module of digital clock -->
    <script type="module" src="node_modules/adan-digital-clock/dist/adan-digital-clock.js"></script>
</head>
<body>
    <!-- Use the Lit element as a normal tag of HTML -->
    <digital-clock theme="dark"></digital-clock>
    <digital-clock theme="light"></digital-clock>
</body>
</html>
```

Mock Design: [Lorenzo Buosi](https://dribbble.com/lorenzobuosi)

See [Page](https://dribbble.com/shots/1012575--Freebie-Timer)
