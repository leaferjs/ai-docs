# 创建 Leafer

[Leafer](/reference/display/Leafer.md) 实例是一个树状结构（提供了布局、渲染等管理功能），能够独立运行。作为根节点，可以往里面添加子元素，并且子元素可以通过 [Group](/reference/display/Group.md) / [Box](/reference/display/Box.md) 层层嵌套，组成一颗复杂的渲染树。

<br/>

![leafer](/svg/leafer.svg)

<br/>

## 创建固定宽高的 Leafer

view 参数支持 window 、div、canvas 标签对象，注意 view 为 id 字符串时不用加 # 号。

::: code-group
```ts
// #创建固定宽高的 Leafer [window]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window, // view 参数支持设置 window 对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [div]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
document.body.appendChild(div)

const leafer = new Leafer({
    view: div, // view 参数支持设置 div 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [canvas]
import { Leafer, Rect } from 'leafer-ui'

const canvas = document.createElement('canvas')
document.body.appendChild(canvas)

const leafer = new Leafer({
    view: canvas, // view 参数支持设置 canvas 标签对象
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
```ts
// #创建固定宽高的 Leafer [id]
import { Leafer, Rect } from 'leafer-ui'

const div = document.createElement('div')
div.setAttribute('id', 'leafer-view')
document.body.appendChild(div)


const leafer = new Leafer({
    view: 'leafer-view', // view 参数支持使用id字符串(不用加 # 号)
    width: 600, // 不能设置为 0， 否则会变成自动布局
    height: 600,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100))
```
:::

## 创建自适应布局的 Leafer

当画布的父节点尺寸改变后会自动 resize， [了解详情](/reference/config/app/canvas.md#自适应布局)。

::: code-group
```ts
// #创建自适应布局的 Leafer [full]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 0 } 
const leafer = new Leafer({ view: window, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自适应布局的 Leafer [padding-left]
import { Leafer, Rect } from 'leafer-ui'

// 等同于 { view: window, top:0, right: 0, bottom: 0, left: 100 }
const leafer = new Leafer({ view: window, left: 100, fill: '#333' })

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自适应布局的 Leafer [padding]
import { Leafer, Rect } from 'leafer-ui'

// 四周始终保持固定的间距
const leafer = new Leafer({
    view: window,
    top: 50,
    left: 100,
    right: 100,
    bottom: 30,
    fill: '#333'
})

leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
:::

## 创建自动生长的 Leafer

画布大小会生长，自动贴合实际内容，用于快速在 HTML 中嵌入 Leafer 元素，[了解详情](/reference/config/app/canvas.md#自动生长)。

注意 [App 结构](/guide/advanced/app.md) 暂不支持此功能。

::: code-group
```ts
// #创建自动生长的 Leafer [grow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({
    view: window,
    grow: true, // 自动生长 // [!code hl:3] 
    // growWidth: true, // 进一步细化宽度是否生长， 默认同 grow
    // growHeight: true  // 进一步细化高度是否生长， 默认同 grow
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自动生长的 Leafer [grow-width]
import { Leafer, Rect } from 'leafer-ui'

// 宽度自动生长, 高度固定不变
const leafer = new Leafer({
    view: window,
    height: 200,
    grow: true, // 自动生长 // [!code hl:3] 
    growHeight: false,  // 单独阻止高度自动生长
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
```ts
// #创建自动生长的 Leafer [grow-height]
import { Leafer, Rect } from 'leafer-ui'

// 高度自动生长, 宽度固定不变
const leafer = new Leafer({
    view: window,
    width: 200,
    grow: true, // 自动生长 // [!code hl:3] 
    growWidth: false,  // 单独阻止宽度自动生长
    fill: '#333'
})

// 拖拽矩形可以看到画布在生长，自动贴合内容
leafer.add(Rect.one({ fill: '#32cd79', draggable: true }, 100, 100)) 
```
:::

## 详细了解

### [Leafer](/reference/display/Leafer.md)

## 配置 Leafer

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp;[触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md)

## 下一步

### [创建元素](/guide/basic/display)
