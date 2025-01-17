## Digital Clock

![Logo](https://raw.githubusercontent.com/Andres6936/Digital.Clock/master/docs/mock/Timer.jpg)

## Monorepo Structure

This package is part of a monorepo. All commands, such as building or installing dependencies,
should be executed from the root of the project to ensure proper functionality and
dependency management.

## Optimized Bundle Size

This library is specifically designed to generate code that is highly optimized to minimize the final
bundle size. Files with the `.stories.ts` extension, which are used exclusively by Storybook for
documentation and testing purposes, will be excluded from the final production bundle as they are
not required for the application's functionality.

## Usage

### Basic usage

```typescript jsx
import React from 'react'
import {DigitalClock} from "react-digital-clock";

function App() {
    return (
        <DigitalClock/>
    )
}
```

###### Mock Design by [Lorenzo Buosi](https://dribbble.com/lorenzobuosi), See screenshot of Mockup [Page](https://dribbble.com/shots/1012575--Freebie-Timer)
