# 滚动条 插件

无限画布滚动条，按需显示横向、竖向滚动条，支持切换黑白主题或自定义样式。

## 适用平台

支持所有平台。

## 安装插件

需要安装 scroll 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/scroll)。

::: code-group

```sh [npm]
npm install @leafer-in/scroll
```

```sh [pnpm]
pnpm add @leafer-in/scroll
```

```sh [yarn]
yarn add @leafer-in/scroll
```

```sh [bun]
bun add @leafer-in/scroll
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.scroll 访问插件内部功能。
::: code-group

```html [scroll.min]
<script src="https://unpkg.com/@leafer-in/scroll@1.4.0/dist/scroll.min.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

```html [scroll]
<script src="https://unpkg.com/@leafer-in/scroll@1.4.0/dist/scroll.js"></script>
<script>
  const { ScrollBar } = LeaferIN.scroll
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

```ts
// #滚动条 [默认主题]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import { ScrollBar } from '@leafer-in/scroll' // 导入滚动条插件

const app = new App({ view: window, editor: {} })

new ScrollBar(app)  // [!code hl:1]  // = app.sky.add(new ScrollBar(app.tree))

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 100))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 2400))
```

## 下一步

### [ScrollBar 元素](./ScrollBar.md)
