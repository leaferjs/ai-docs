<script setup>
import Case from '/component/Case.vue'
</script>

# Frame 元素

创建画板。继承自 [Box](/reference/display/Box.md)，默认白色背景、会裁剪掉超出宽高的内容，类似于 HTML5 中的页面，一般用于设计软件中创建画板。

<case name="Frame" editor=false></case>

<br/>

::: tip 继承
Frame &nbsp;>&nbsp; [Box](./Box.md) &nbsp;>&nbsp; [Group](./Group.md) 、[Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度。

### height: `number`

高度。

### fill: `string` | [`Paint`](../interface/ui/Paint) ｜ [`Paint`](../interface/ui/Paint.md)[]

默认白色背景。

### overflow: `IOverflow`

如何显示超出宽高的内容，默认为 hide。

```ts
type IOverflow = 'show' | 'hide'
```

## 编辑属性

### resizeChildren: `boolean`

子元素是否跟随 resize， 默认为 false。

<!-- ## 继承元素

### [Box](./Box.md) -->

<!-- ## API

### [Frame](/api/classes/Frame.md) -->

## 示例

<case name="Frame" index=0 editor=false></case>

### 创建画板

::: code-group
```ts
// #创建 Frame [标准创建（Leafer)]
import { Leafer, Frame, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({ // [!code hl:4]
    width: 100,
    height: 100
})

const rect = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#32cd79',
    draggable: true
})

leafer.add(frame)
frame.add(rect)
```
```ts
// #创建 Frame [标准创建（App)]
import { App, Frame, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {}, fill: '#333' })

const frame = new Frame({ // [!code hl:6]
    width: 100,
    height: 100,
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const rect = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#32cd79',
    editable: true
})

app.tree.add(frame)
frame.add(rect)
```
:::
