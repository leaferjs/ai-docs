<script setup>
import Case from '/component/Case.vue'
</script>

# 自动宽度

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

## 关键属性

### autoWidth: `number`

自动宽度权重，分配剩余宽度给此元素（忽略 width），类似 Flex 的 grow / shrink，默认为 0。

设为大于 0 的值会自动扩充宽度，一般设为 1，后面会支持百分比宽度。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

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

<case name="FlowAutoSize" index=1 height=130 editor=false></case>

### 自动宽度和高度

```ts
// #自动布局 - 自动宽度 [自动宽度和高度]
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
            autoWidth: 1, // 自动宽度和高度 // [!code hl:2]
            autoHeight: 1,
            fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }]
        })
    ],
})

leafer.add(flow)
```
