<script setup>
import Case from '/component/Case.vue'
</script>

# 内边距

<case name="FlowPadding" count=2 height=160 editor=false></case>

## 关键属性

### padding: [`IFourNumber`](/reference/interface/math/Math.md#ifournumber)

容器的内边距, 默认为 0。

```ts
padding: [20, 10, 20, 10] // [top, right, bottom, left]
padding: [20, 10, 20] // [top, (right-left), bottom]
padding: [20, 10] // [ (top-bottom), (right-left)]
padding: 20 // all
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowPadding" index=0 height=160 editor=false></case>

### 设置内边距

```ts
// #自动布局 - 内边距
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

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
