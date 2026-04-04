# box 元素

让基础元素支持 Box 能力，可往里面添加子元素。

## 安装插件

需要安装 box 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/box)。

::: code-group

```sh [npm]
npm install @leafer-in/box
```

```sh [pnpm]
pnpm add @leafer-in/box
```

```sh [yarn]
yarn add @leafer-in/box
```

```sh [bun]
bun add @leafer-in/box
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.box 访问插件内部功能。

::: code-group

```html [box.min]
<script src="https://unpkg.com/@leafer-in/box@2.0.8/dist/box.min.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

```html [box]
<script src="https://unpkg.com/@leafer-in/box@2.0.8/dist/box.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 元素

### [ImageBox](/plugin/in/box/ImageBox.md)

### [EllipseBox](/plugin/in/box/EllipseBox.md)

### [PolygonBox](/plugin/in/box/PolygonBox.md)

### [StarBox](/plugin/in/box/StarBox.md)

### [PathBox](/plugin/in/box/PathBox.md)

## 示例

### 创建 ImageBox

::: code-group
```ts

// #创建 ImageBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { ImageBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new ImageBox({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```
```ts
// #创建 ImageBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { ImageBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new ImageBox({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::

### 创建 EllipseBox

::: code-group
```ts
// #创建 EllipseBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { EllipseBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })

const box = new EllipseBox({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: '#FF4B4B',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)

```
```ts
// #创建 EllipseBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { EllipseBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new EllipseBox({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: '#FF4B4B',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::

### 创建 PolygonBox

::: code-group
```ts

// #创建 PolygonBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { PolygonBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new PolygonBox({
    width: 100,
    height: 100,
    sides: 5,
    fill: '#FF4B4B',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```
```ts
// #创建 PolygonBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PolygonBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new PolygonBox({
    width: 100,
    height: 100,
    sides: 5,
    fill: '#FF4B4B',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::

### 创建 StarBox

::: code-group
```ts

// #创建 StarBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { StarBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new StarBox({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#FF4B4B',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```
```ts
// #创建 StarBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { StarBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new StarBox({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#FF4B4B',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::

### 创建 PathBox

::: code-group
```ts

// #创建 PathBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { PathBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new PathBox({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```
```ts
// #创建 PathBox [标准创建 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PathBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new PathBox({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::
