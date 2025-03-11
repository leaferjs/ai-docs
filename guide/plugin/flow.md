<script setup>
import Case from '/component/Case.vue'
</script>

# 自动布局

类似 Flex 的自动布局，更简单、直观，可以快速自动排版内容。

::: tip 注意事项
需安装 [自动布局插件](/plugin/in/flow/index.md) 才能使用。
:::

<br/>

方向

<case name="Flow" count=6 height=160 editor=false></case>

<br/>

换行

<case name="FlowWrap" count=2 height=160 editor=false></case>

<case name="FlowWrap" index=2 count=2 height=160 editor=false></case>

<br/>

对齐

<case name="FlowAlign" count=3 height=160 editor=false></case>

<case name="FlowAlign" index=3 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=6 count=3 height=160 editor=false></case>

<br/>

行内对齐

<case name="FlowYAlign" index=9 count=3 height=160 editor=false></case>

<case name="FlowAlign" index=9 count=3 height=160 editor=false></case>

<br/>

间距

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

<br/>

自动尺寸

<case name="FlowAutoSize" count=2 height=160 editor=false></case>

<case name="FlowAutoSize" index=2 count=2 height=160 editor=false></case>

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

## 下一步

### [图形编辑器](/guide/plugin/editor.md)
