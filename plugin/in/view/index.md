# 视图控制 插件

控制视图的缩放，支持放大、缩小、fit、fit-width、fit-height 视图， 支持聚焦元素，聚焦区域。

## 适用平台

支持所有平台。

## 安装插件

需要安装 view 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/view)。

::: code-group

```sh [npm]
npm install @leafer-in/view
```

```sh [pnpm]
pnpm add @leafer-in/view
```

```sh [yarn]
yarn add @leafer-in/view
```

```sh [bun]
bun add @leafer-in/view
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.view 访问插件内部功能。
::: code-group

```html [view.min]
<script src="https://unpkg.com/@leafer-in/view@1.4.1/dist/view.min.js"></script>
```

```html [view]
<script src="https://unpkg.com/@leafer-in/view@1.4.1/dist/view.js"></script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

缩放到合适大小

```ts
// #视图控制 [缩放到合适大小]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom('fit', 100) // [!code hl:1]

}, 1000)

```

## 下一步

### [zoom 操作](./zoom.md)
