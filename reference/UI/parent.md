# parent

元素的父节点。

## 只读属性

### parent: [`Group`](../display/Group.md)

父元素。

## 辅助方法

### waitParent ( item: `function`, bind?: `object` )

等待元素有 [`parent`](./parent.md) 属性时执行 item 函数，可通过参数 `bind` 绑定 item 函数 的 this 对象。

已存在则立即执行。

### waitParentChange ( item: `function` )

等待元素 [`parent`](./parent.md) 属性更改时执行 item 函数，注意 item 函数会常驻在监听队列中（同一个函数会自动排重）。

已存在则立即执行。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 等待元素被添加到父元素中时，执行回调

::: code-group
```ts
// #等待元素被添加到父元素中时，执行回调 (Leafer)
import { Leafer, Group, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ fill: '#32cd79' })

const group = new Group()

rect.waitParent(() => { // [!code hl:3]
    rect.draggable = true
})

group.add(rect)
leafer.add(group)
```
```ts
// #等待元素被添加到父元素中时，执行回调 (App)
import { App, Group, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({ fill: '#32cd79' })

const group = new Group()

rect.waitParent(() => { // [!code hl:3]
    rect.draggable = true
})

group.add(rect)
app.tree.add(group)
```
:::
