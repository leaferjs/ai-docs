<script setup>
import Case from '/component/Case.vue'
</script>

# Box 元素

创建 Box。支持 [Group](/reference/display/Group.md) 的功能和 [Rect](/reference/display/Rect.md) 的外观样式， 类似于 HTML5 中的 DIV，可以不断嵌套 。

<case name="Box" editor=false></case>

<br/>

::: tip 继承
Box &nbsp;>&nbsp; [Group](./Group.md) 、[Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度，不设置宽高时会自适应内容。

### height: `number`

高度，不设置宽高时会自适应内容。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 show。

```ts
type IOverflow = 'show' | 'hide'
```

## 滚动属性

用于 Box / Frame 滚动内部元素，可实现滚动条效果。

### scrollX: `number`

内部元素在 x 轴上的滚动量。

### scrollY: `number`

内部元素在 y 轴上的滚动量。

## 编辑属性

### textBox: `boolean`

是否为文本框，默认为 false。

为文本框时，可在编辑器中双击 Box 元素直接编辑内部的 [editable](/reference/UI/editable.md) 子文本，适用于输入框、便利贴、脑图、流程图等编辑文本的场景。

### resizeChildren: `boolean`

子元素是否跟随 resize， 默认为 false。

## 路径模式

### [path 优先模式](/reference/UI/path.md)

<!--
## 继承元素

### [Group](./Group.md) + [Rect](./Rect.md) -->

<!-- ## API

### [Box](/api/classes/Box.md) -->

## 示例

<case name="Box" index=0 editor=false></case>

### 创建 Box

```ts
// #创建 Box [标准创建]
import { Leafer, Box, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const box = new Box({ // [!code hl:4]
    width: 100,
    height: 100,
    fill: '#FF4B4B'
})

const rect = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(rect)
```

<case name="Box" index=1 editor=false></case>

### 隐藏超出宽高的内容

```ts
// #创建 Box [隐藏超出宽高的内容]
import { Leafer, Box, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const box = new Box({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#FF4B4B',
    overflow: 'hide'
})

const rect = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(rect)
```

<case name="Box" index=6 editor=false></case>

### 创建自适应背景的文本

```ts
// #创建 Box [自适应文本]
import { Leafer, Box } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

// Box 不设置宽高时，将自适应内容
const box = new Box({
    x: 100,
    y: 100,
    fill: '#FF4B4B',
    cornerRadius: 20,
    children: [{
        tag: 'Text',
        text: 'Welcome to LeaferJS',
        fill: 'black',
        padding: [10, 20],
        textAlign: 'left',
        verticalAlign: 'top'
    }]
})

leafer.add(box)
```
