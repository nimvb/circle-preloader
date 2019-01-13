# circle-preloader

> 

[![NPM](https://img.shields.io/npm/v/circle-preloader.svg)](https://www.npmjs.com/package/circle-preloader) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save circle-preloader
```

## Usage

```jsx
import React, { Component } from 'react'

import {Preloader} from 'circle-preloader'

class Example extends Component {
  render () {
    return (
      <Preloader />
    )
  }
}
```

### Properties (props)

<table>
  <tr>
    <th>Properties =></th>
    <th>visible</th>
    <th>backgroundColor</th>
    <th>opacity</th>
    <th>shadowColor</th>
    <th>outerColor</th>
    <th>innerColor</th>
  </tr>
  <tr>
    <th>type</th>
    <td>bool</td>
    <td>string</td>
    <td>string</td>
    <td>string</td>
    <td>string</td>
    <td>string</td>
  </tr>
  <tr>
    <th>Default</th>
    <td>true</td>
    <td>rgb(0, 0, 0)</td>
    <td>1</td>
    <td>#2187e7</td>
    <td>rgb(0, 183, 229)</td>
    <td>rgb(0, 183, 229)</td>
  </tr>
</table>

## License

MIT © [Nima Afzal Ahangaran](https://github.com/nimvb)


