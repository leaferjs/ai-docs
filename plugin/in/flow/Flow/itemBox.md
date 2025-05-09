<script setup>
import Case from '/component/Case.vue'
</script>

# 盒类型

<case name="FlowItemBox" count=2 height=160 editor=false></case>

## 关键属性

### itemBox: `'box'` | `'stroke'`

采用子元素的哪个 [盒类型](/guide/advanced/bounds.md) 来布局, 默认 box。

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowItemBox" index=0 height=160 editor=false></case>

### 采用子元素的 box 盒类型布局

```ts
// #自动布局 - 盒类型 [采用子元素的 box 盒类型布局]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    itemBox: 'box', // 采用子元素的 box 盒类型布局 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowItemBox" index=1 height=160 editor=false></case>

### 采用子元素的 stroke 盒类型布局（包含描边）

```ts
// #自动布局 - 盒类型 [采用子元素的 stroke 盒类型布局（包含描边）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    itemBox: 'stroke', // 采用子元素的 stroke 盒类型布局（包含描边） // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', stroke: 'black', strokeWidth: 4, strokeAlign: 'center', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```
