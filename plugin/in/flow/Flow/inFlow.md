<script setup>
import Case from '/component/Case.vue'
</script>

# 加入布局

<case name="FlowIn" count=2 height=160 editor=false></case>

## 关键属性

### inFlow: `boolean`

元素是否加入自动布局, 默认会加入（父元素为自动布局的情况下）。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="FlowIn" index=1 height=160 editor=false></case>

### 元素不加入自动布局

```ts
// #自动布局 - 子元素不加入自动布局 
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // [!code hl] 

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
