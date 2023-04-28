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
    <summary>How to use the Component</summary>

##
    
<p style="margin-top:3rem">
Lit doesn't require any specialized tools, and Lit components work in any JavaScript framework
or with any server templating system or CMS, so Lit is ideal for adding to existing projects
and applications.
</p>
    
First, install the component from npm:
    
> npm install adan-digital-clock

Or using the package with yarn:
    
> yarn add adan-digital-clock
    
How you use a component depends on your project and the libraries or frameworks 
it uses. You can use your component in HTML, with DOM APIs, or in template languages,
for example with React:

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

You can create a new element anywhere in your project's sources:

```javascript
import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

// Import the package for use in the sources
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
    
### Framework Templates
    
Most JavaScript frameworks have great support for web components and Lit. 
Just import your element definition and use the element tag names in your templates.
    
</details>

##
    
###### Mock Design by [Lorenzo Buosi](https://dribbble.com/lorenzobuosi), See screenshot of Mockup [Page](https://dribbble.com/shots/1012575--Freebie-Timer)
