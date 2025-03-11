<script setup>
import Case from '/component/Case.vue'
</script>

# 自动高度

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

## 关键属性

### autoHeight: `number`

自动高度权重，分配剩余高度给此元素（忽略 height），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充高度，一般设为 1，后面会支持百分比高度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="FlowAutoSize" index=2 height=130 editor=false></case>

### 自动高度

```ts
// #自动布局 - 自动高度 [自动高度（填充剩余高度）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

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

<case name="FlowAutoSize" index=3 height=130 editor=false></case>

### 自动高度和高度

```ts
// #自动布局 - 自动宽度 [自动高度和宽度]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

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
            autoHeight: 1,  // 自动高度和宽度 // [!code hl:2]
            autoWidth: 1,
            fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 30, height: 25 }]
        })
    ],
})

leafer.add(flow)
```
