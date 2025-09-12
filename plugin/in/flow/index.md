<script setup>
import Case from '/component/Case.vue'
</script>

# Flow 元素

自动布局（流动）元素，类似 Flex 的自动布局，可以快速自动排版内容，简单、直观。

<case name="Flow" count=6 height=160 editor=false></case>

::: tip 继承
Flow &nbsp;>&nbsp; [Box](/reference/display/Box.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)

<br/>

[Box](/reference/display/Box.md) / [Frame](/reference/display/Frame.md) 元素也支持自动布局属性（ 需引入此插件）。

暂时未适配 [图形编辑](/plugin/in/editor/index.md) 功能，自动布局的元素频繁变化时，对性能的消耗会比较大，后期会优化～
:::

## 安装插件

需要安装 flow 插件、[resize 插件](/plugin/in/resize/index.md) 才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/flow)。

::: code-group

```sh [npm]
npm install @leafer-in/flow
npm install @leafer-in/resize
```

```sh [pnpm]
pnpm add @leafer-in/flow
pnpm add @leafer-in/resize
```

```sh [yarn]
yarn add @leafer-in/flow
yarn add @leafer-in/resize
```

```sh [bun]
bun add @leafer-in/flow
bun add @leafer-in/resize
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.flow 访问插件内部功能。

::: code-group

```html [flow.min]
<script src="https://unpkg.com/@leafer-in/flow@1.9.7/dist/flow.min.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.9.7/dist/resize.min.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

```html [flow]
<script src="https://unpkg.com/@leafer-in/flow@1.9.7/dist/flow.js"></script>
<script src="https://unpkg.com/@leafer-in/resize@1.9.7/dist/resize.js"></script>
<script>
  const { Flow } = LeaferIN.flow
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

| 名称                                           | 描述                                                                          |
| ---------------------------------------------- | ----------------------------------------------------------------------------- |
| [flow](/plugin/in/flow/Flow/flow.md)           | 布局方向：是否进行自动布局，可进一步指定布局的轴方向 x 或 y ，默认为 x 轴     |
| [flowWrap](/plugin/in/flow/Flow/flowWrap.md)   | 自动换行：是否自动换行， 默认不换行                                           |
| [flowAlign](/plugin/in/flow/Flow/flowAlign.md) | 对齐：对齐子元素的方式， 默认为 top-left                                      |
| [gap](/plugin/in/flow/Flow/gap.md)             | 间距：子元素之间的间距， 默认为 0                                             |
| [padding](/plugin/in/flow/Flow/padding.md)     | 内边距：容器的内边距, 默认为 0                                                |
| [itemBox](/plugin/in/flow/Flow/itemBox.md)     | 盒类型：采用子元素的哪个 [盒类型](/guide/advanced/bounds.md) 来布局, 默认 box |

## Flow 内的子元素布局属性

| 名称                                               | 描述                                                                      |
| -------------------------------------------------- | ------------------------------------------------------------------------- |
| [inFlow](/plugin/in/flow/Flow/inFlow.md)           | 加入布局：元素是否加入自动布局, 默认会加入（父元素为自动布局的情况下）    |
| [autoWidth](/plugin/in/flow/Flow/autoWidth.md)     | 自动宽度：分配剩余宽度给此元素（忽略 width），类似 Flex 的 grow / shrink  |
| [autoHeight](/plugin/in/flow/Flow/autoHeight.md)   | 自动高度：分配剩余高度给此元素（忽略 height），类似 Flex 的 grow / shrink |
| [widthRange](/plugin/in/flow/Flow/widthRange.md)   | 限制宽度：限制 autoWidth 影响的宽度范围                                   |
| [heightRange](/plugin/in/flow/Flow/heightRange.md) | 限制高度：限制 autoHeight 影响的高度范围                                  |
| [lockRatio](/plugin/in/flow/Flow/lockRatio.md)     | 锁定比例：采用自动宽高时，是否锁定原始宽高比例                            |

<!-- ## 继承元素

### [Box](/reference/display/Box.md) -->

## 示例

<case name="Flow" count=1 height=130 editor=false></case>

### 自动布局

```ts
// #自动布局
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({ // [!code hl:10]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowWrap" index=0 height=130 editor=false></case>

### 沿 X 轴自动换行

```ts
// #自动布局 - 自动换行 [沿 X 轴自动换行]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flowWrap: true, // 沿 X 轴自动换行 // [!code hl]
    gap: { x: 0, y: 10 },
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowAlign" index=4 height=130 editor=false></case>

### 居中对齐

```ts
// #自动布局 - 对齐内容 [居中对齐]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flowAlign: 'center', // 居中对齐 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowGap"  index=0 height=130 editor=false></case>

### 固定数值的间距

```ts
// #自动布局 - 子元素间距 [固定数值的间距]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: 5, // 固定数值的间距 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowPadding" index=0 height=160 editor=false></case>

### 设置内边距

```ts
// #自动布局 - 内边距
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    padding: 5, // 内边距 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowIn" index=1 height=160 editor=false></case>

### 元素不加入自动布局

```ts
// #自动布局 - 子元素不加入自动布局 
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({
            inFlow: false,  // 元素不加入自动布局，通过坐标定位 // [!code hl]
            x: 50, y: 110, fill: '#FF4B4B', around: 'top', children: [{ tag: 'Text', text: 'false', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 20 }]
        })

    ],
})

leafer.add(flow)
```

<case name="FlowAutoSize" index=0 height=130 editor=false></case>

### 自动宽度

```ts
// #自动布局 - 自动宽度 [自动宽度（填充剩余宽度）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({
            autoWidth: 1, // 自动宽度（填充剩余宽度） // [!code hl]
            fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }]
        })
    ],
})

leafer.add(flow)
```

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### 自动高度

```ts
// #自动布局 - 自动高度 [自动高度（填充剩余高度）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y',
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({
            autoHeight: 1, // 自动高度（填充剩余高度） // [!code hl]
            fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }]
        })
    ],
})

leafer.add(flow)
```

### 综合属性

```ts
// #自动布局
import { Leafer, Rect, Star, Ellipse } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y',  // [!code hl:4] 
    gap: { x: 'auto', y: 20 },
    flowAlign: { content: 'top', x: 'from' },
    flowWrap: true,
    x: 100,
    y: 100,
    width: 260,
    height: 260,
    fill: '#333'
})

const rect = new Rect({ fill: 'red' })
const star = new Star({ fill: 'green', x: 800, height: 100 })
const ellipse = new Ellipse({ fill: 'blue' })
flow.add([rect, star, ellipse])

leafer.add(flow)
```
