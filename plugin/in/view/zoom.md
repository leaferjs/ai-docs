# zoom

控制视图的缩放。

## 关键方法

### zoom ( zoomType: `IZoomType`, padding?: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber), fixedScale?: `boolean` ): [`IBoundsData`](/reference/interface/math/Math.md#iboundsdata)

`zoomType` 为缩放类型， 支持放大、缩小、fit、fit-width、fit-height 视图，聚焦元素、区域。

当 `zoomType` 为 fit、元素、区域时，可以传入 `padding` 进行四周留白。如果不想缩放画布，只进行位移，可以设置 `fixedScale` 为 true。

函数返回一个缩放后的焦点区域（世界坐标系）。

```ts
type IZoomType =
  | 'in' // 放大 (从画布中心缩放)
  | 'out' // 缩小
  | 'fit' // 缩放到合适大小
  | 'fit-width' // 缩放到合适大小，以宽度为主
  | 'fit-height' // 缩放到合适大小，以高度为主
  | number // 指定缩放比例  (从画布中心缩放)
  | IUI // 聚焦到某一个元素
  | IUI[] // 聚焦到一组元素
  | IBoundsData // 聚焦到指定区域（page坐标系），当宽或高为0时，会自动按画布比例补全
```

## 归属

### [Leafer](/reference/display/Leafer.md)

## 示例

### 放大

```ts
// #视图控制 [放大]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom('in') // [!code hl:1]

}, 1000)

```

### 缩小

```ts
// #视图控制 [缩小]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom('out') // [!code hl:1]

}, 1000)

```

### 指定缩放值

```ts
// #视图控制 [指定缩放值]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom(1.5) // [!code hl:1]

}, 1000)

```

### 缩放到合适大小

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

### 让画布内容居中显示

```ts
// #视图控制 [让画布内容居中显示]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom('fit', 0, true) // [!code hl:1]

}, 1000)

```

### 聚焦到指定元素

```ts
// #视图控制 [聚焦到指定元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom(rect, [100, 50]) // [!code hl:1]

}, 1000)

```

不缩放画布，只进行位移

```ts
// #视图控制 [聚焦到指定元素 - 不缩放画布，只进行位移]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

const rect = Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
app.tree.add(rect)
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))

setTimeout(() => {

    app.tree.zoom(rect, 0, true) // [!code hl:1]

}, 1000)

```

### 聚焦到指定区域

```ts
// #视图控制 [聚焦到指定区域]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/view'

const app = new App({ view: window, editor: {} })

app.tree.add(Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 500, 400))
app.tree.add(Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 650, 400))

setTimeout(() => {

    app.tree.zoom({ x: 650, y: 400, width: 100, height: 100 }, [100, 20, 50, 20]) // [!code hl:1]

}, 1000)

```
