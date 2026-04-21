# scaleFixed

固定元素的全局缩放，不随视图放大。

::: tip 注意事项
需安装 [scale-fixed 插件](../../plugin/in/scale-fixed/index.md) 才能使用，或直接安装 [leafer-editor](../../guide/install/editor/start.md)（已集成该插件）。
:::

## 关键属性

### scaleFixed: `'zoom-in'` | `number` | `false`

固定元素的全局缩放，默认值为 false。

设置 'zoom-in' 或 数字 1 时， 表示元素不会跟随画面放大，但会跟随缩小（防止堆成一团）。

设置 0～1 之间的小数时，表示在画面缩小到这个缩放值的时候，元素才开始变小。

::: tip
可结合 [around](./around.md) 属性定位元素，如果只想固定线宽可使用 [strokeScaleFixed](./stroke.md#strokescalefixed-zoom-in-number-boolean) 。
:::

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 元素不随画面放大

::: code-group
```ts
// #scaleFixed [元素不随画面放大 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(Rect.one({
    scaleFixed: 'zoom-in', // 元素不随画面放大，但会跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    leafer.scale = 2 // 画面放大2倍

}, 1000)
```
```ts
// #scaleFixed [元素不随画面放大 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({
    scaleFixed: 'zoom-in', // 元素不随画面放大，但会跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    app.tree.scale = 2 // 画面放大2倍

}, 1000)
```
:::

### 画布缩放到0.5时才跟随缩小

::: code-group
```ts
// #scaleFixed [画布缩放到0.5时才跟随缩小 (Leafer)]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(Rect.one({
    scaleFixed: 0.5, // 画布缩放到0.5时，才跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    leafer.scale = 0.5 // 画面缩小到0.5倍

}, 1000)
```
```ts
// #scaleFixed [画布缩放到0.5时才跟随缩小 (App)]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
app.tree.add(Rect.one({
    scaleFixed: 0.5, // 画布缩放到0.5时，才跟随缩小 // [!code hl]
    editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0]
}, 300, 100))

setTimeout(() => {

    app.tree.scale = 0.5 // 画面缩小到0.5倍

}, 1000)
```
:::
