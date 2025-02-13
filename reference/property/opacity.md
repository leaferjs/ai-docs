# opacity

元素的不透明度。

## 关键属性

### opacity: `number`

元素的不透明度，取值范围为 0 ～ 1， 默认为 1。

## 计算属性（只读）

### worldOpacity: `number`

元素在全局视图中的不透明度（会受父元素影响）。

当 `visible` 为 false 时，此属性值为 0。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 设置不透明度

```ts
// #设置不透明度
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // 设置不透明度
    rect.opacity = 0.5 // [!code hl]

}, 1000)
```
