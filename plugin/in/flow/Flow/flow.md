<script setup>
import Case from '/component/Case.vue'
</script>

# 布局方向

<case name="Flow" count=2 height=160 editor=false></case>

<case name="Flow" index=2 count=2 height=160 editor=false></case>

## 关键属性

### flow: `boolean` | [`IFlowType`](/api/modules.md#iflowtype)

是否进行自动布局，可进一步指定布局的轴方向 x 或 y ，默认为 x 轴。

```ts
type IFlowType = 'x' | 'y' | 'x-reverse' | 'y-reverse' // 轴方向，reverse 表示反向
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="Flow" index=0 height=130 editor=false></case>

### 沿 X 轴自动布局

```ts
// #自动布局 - 布局方向 [沿 X 轴自动布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'x', // 沿 X 轴自动布局 // [!code hl]
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

<case name="Flow" index=1 height=130  editor=false></case>

### 沿 X 轴反向自动布局

```ts
// #自动布局 - 布局方向 [沿 X 轴反向自动布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'x-reverse', // 沿 X 轴反向自动布局 // [!code hl]
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

<case name="Flow" index=2 height=130  editor=false></case>

### 沿 Y 轴自动布局

```ts
// #自动布局 - 布局方向 [沿 Y 轴自动布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y', // 沿 Y 轴自动布局 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] })
    ],
})

leafer.add(flow)
```

<case name="Flow" index=3 height=130  editor=false></case>

### 沿 Y 轴反向自动布局

```ts
// #自动布局 - 布局方向 [沿 Y 轴反向自动布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    flow: 'y-reverse', // 沿 Y 轴反向自动布局 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 20, height: 25 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 40, height: 25 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }] })
    ],
})

leafer.add(flow)
```
