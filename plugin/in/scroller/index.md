<script setup>
import Case from '/component/Case.vue'
</script>

# Scroller 元素

适用于 [Box](../../../reference/display/Box.md) / [Frame](../../../reference/display/Frame.md) 元素的滚动条，仅需设置 [overflow](../../../reference/display/Box.md#overflow-ioverflow) 属性为 'scroll' 即可启用。

::: tip 继承
Scroller &nbsp;>&nbsp; [Group](../../../reference/display/Group.md)
:::

## 更新日志

开源前的最后版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 scroller 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/scroller)。

::: code-group

```sh [npm]
npm install @leafer-in/scroller
```

```sh [pnpm]
pnpm add @leafer-in/scroller
```

```sh [yarn]
yarn add @leafer-in/scroller
```

```sh [bun]
bun add @leafer-in/scroller
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.scroller 访问插件内部功能。

::: code-group

```html [scroller.min]
<script src="https://unpkg.com/@leafer-in/scroller@2.3.0/dist/scroller.min.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

```html [scroller]
<script src="https://unpkg.com/@leafer-in/scroller@2.3.0/dist/scroller.js"></script>
<script>
  const { Scroller } = LeaferIN.scroller
</script>
```

:::

## 示例

### 快速创建

```ts
// #Box滚动条 [快速创建]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({ // 鼠标 hover 时显示滚动条
    fill: 'white',
    overflow: 'scroll', // 溢出时滚动显示内容  //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)
```

### 夜晚模式

```ts
// #Box滚动条 [夜晚模式]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: '#111',
    overflow: 'scroll',
    scrollConfig: { theme: 'dark' }, // 夜晚模式下的滚动条显示效果 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 配置颜色和光标

```ts
// #Box滚动条 [配置颜色和光标]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { style: { fill: 'blue', cursor: 'pointer' } }, // 滚动条配置颜色和光标 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 无圆角的滚动条

```ts
// #Box滚动条 [无圆角的滚动条]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { size: 10, cornerRadius: 0, endsMargin: 0, sideMargin: 0 }, // 无圆角的滚动条效果 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 保持显示

```ts
// #Box滚动条 [保持显示]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { hideOnActionEnd: false }, // 离开滚动区域后，不自动隐藏滚动条 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 只允许拖拽滚动条进行滚动内容

```ts
// #Box滚动条 [只允许拖拽滚动条进行滚动内容]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { scrollType: 'drag' }, // 只允许拖拽滚动条进行滚动内容，鼠标滚动不生效 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 跟随视图放大滚动条

```ts
// #Box滚动条 [跟随视图放大滚动条]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
    type: 'design'
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { scaleFixed: false }, // 跟随视图放大滚动条 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)

```

### 与视图滚动条共存

```ts
// #Box滚动条 [与视图滚动条共存]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    move: { holdSpaceKey: true },
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',  // 滚动元素到顶部或底部时，才允许滚动视图（与html中的div滚动逻辑一致）  //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))

```

### 与视图滚动条共存时，阻止默认视图滚动

```ts
// #Box滚动条 [与视图滚动条共存时，阻止默认视图滚动]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { stopDefault: true }, //  滚动元素时，阻止默认视图滚动 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))

```
