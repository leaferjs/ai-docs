# destroy

销毁当前元素。

## 只读属性

### destroyed: `boolean`

元素是否已被销毁。

## 关键方法

### destroy ( )

移除 + 销毁当前元素，如存在子元素也会被遍历销毁。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

## 销毁移除

```ts
// #移除元素 [销毁移除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    rect.destroy() // [!code hl] // 等同于 rect.remove() => rect.destroy()

}, 2000)

```

## 清空元素

```ts
// #移除元素 [清空元素]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
const rect2 = Rect.one({ fill: 'blue' }, 300, 100)

leafer.addMany(rect, rect2)

setTimeout(() => {

    leafer.clear() // [!code hl] // 清空并销毁所有子元素

}, 2000)

```

## 销毁引擎

```ts
// #销毁引擎
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

setTimeout(() => {

    leafer.destroy() // [!code hl:2] // 销毁引擎，默认为异步方式
    // leafer.destroy(true)  //  销毁引擎，同步方式

}, 2000)

```
