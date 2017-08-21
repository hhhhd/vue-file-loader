# vue-file-loader

Small, lightweight multiple-files components solution.

`Component = template file + script file + style file`

## Installation

```bash
yarn add vue-file-loader --dev
```

## Configuration

```js
{
  test: /\.vue$/,
  loaders: [
    {
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      loader: 'vue-file-loader',
      options: {
        style: {
          filename: 'style.less',
          scoped: true
        }
      }
    }
  ],
}
```

## Usage

A component contains 3 files:

```html
<!-- index.vue -->
<p>Result: {{ computedMsg }}</p>
```

```js
// script.js
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Msg extends Vue {
  msg = '123'

  mounted() {
    this.msg = 456
  }

  get computedMsg() {
    return `computed ${this.msg}`
  }
}
```

```css
/* style.less */
p {
  font-size: 99px;
}
```
