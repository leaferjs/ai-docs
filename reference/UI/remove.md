# remove

移除当前元素。

## 关键方法

### remove ( )

移除当前元素。

### remove ( child: [`UI`](/reference/display/UI.md))

组元素移除指定的子元素。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 标准移除

```ts
// #移除元素 [标准移除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    rect.remove() // [!code hl] // 等同于 leafer.remove(rect)

}, 2000)

```

### 条件移除

同 [find()](/reference/UI/find.md) 方法的参数一致，内部会先 find() 再批量移除。

```ts
// #移除元素 [条件移除]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect = Rect.one({ id: 'book', fill: '#32cd79' }, 100, 100)
const rect2 = Rect.one({ fill: 'blue' }, 300, 100)

leafer.addMany(rect, rect2)

setTimeout(() => {

    // 移除 id 为 book 的元素
    leafer.remove('#book') // [!code hl] // 等同于 leafer.find('#book').forEach(item => item.remove())

}, 2000)

```
