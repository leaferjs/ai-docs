<script setup>
import Case from '/component/Case.vue'
</script>

# 自动换行

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

## 关键属性

### flowWrap: [`IFlowWrap`](/api/modules.md#iflowwrap)

是否自动换行， 默认不换行。

```ts
type IFlowWrap = boolean | 'reverse' // reverse表示颠倒行顺序
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowWrap" index=0 height=130 editor=false></case>

### 沿 X 轴自动换行

```ts
// #自动布局 - 自动换行 [沿 X 轴自动换行]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

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

<case name="FlowWrap" index=1 height=130  editor=false></case>

### 沿 X 轴自动换行（颠倒行顺序）

```ts
// #自动布局 - 自动换行 [沿 X 轴自动换行（颠倒行顺序）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flowWrap: 'reverse', // 沿 X 轴自动换行（颠倒行顺序） // [!code hl]
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

<case name="FlowWrap" index=2 height=130  editor=false></case>

### 沿 Y 轴自动换行

```ts
// #自动布局 - 自动换行 [沿 Y 轴自动换行]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y', // 沿 Y 轴自动换行 // [!code hl:2]
    flowWrap: true,
    gap: { x: 10, y: 0 },
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowWrap" index=3 height=130  editor=false></case>

### 沿 Y 轴自动换行（颠倒行顺序）

```ts
// #自动布局 - 自动换行 [沿 Y 轴自动换行（颠倒行顺序）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y-reverse', // 沿 Y 轴自动换行（颠倒行顺序） // [!code hl:2]
    flowWrap: true,
    gap: { x: 10, y: 0 },
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] })
    ],
})

leafer.add(flow)
```
