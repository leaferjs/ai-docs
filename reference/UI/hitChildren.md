<script setup>
import Case from '/component/Case.vue'
</script>

# hitChildren

进一步定义元素子级的可交互性。

## 关键属性

### hitChildren: `boolean`

子元素是否响应交互事件，默认为 true。

## 归属

### [UI 元素](/reference/display/UI.md)

### 停用子元素交互事件

::: code-group
```ts
// #停用子元素交互事件 (Leafer)
import { Leafer, Group, Rect, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({
    draggable: true,
    children: [
        new Rect({
            width: 100,
            height: 100,
            fill: '#32cd79',
            draggable: true
        }),
        new Ellipse({
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            fill: "#FEB027",
            draggable: true
        })
    ]
})

leafer.add(group)

setTimeout(() => {

    // 停用子元素交互事件，子元素将不能被单独拖拽
    group.hitChildren = false // [!code hl]

}, 1000)


```
```ts
// #停用子元素交互事件 (App)
import { App, Group, Rect, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const group = new Group({
    draggable: true,
    children: [
        new Rect({
            width: 100,
            height: 100,
            fill: '#32cd79',
            draggable: true
        }),
        new Ellipse({
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            innerRadius: 0.5,
            fill: "#FEB027",
            draggable: true
        })
    ]
})

app.tree.add(group)

setTimeout(() => {

    // 停用子元素交互事件，子元素将不能被单独拖拽
    group.hitChildren = false // [!code hl]

}, 1000)


```
:::
