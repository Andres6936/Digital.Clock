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

<details>
    <summary>How to use</summary>
    
Install the package using npm:
    
> npm install adan-digital-clock

Install the package using yarn:
    
> yarn add adan-digital-clock
    
Using the component with React:

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

Using the component in another Lit component:

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
</details>

Mock Design by [Lorenzo Buosi](https://dribbble.com/lorenzobuosi), See screenshot of Mockup [Page](https://dribbble.com/shots/1012575--Freebie-Timer)
