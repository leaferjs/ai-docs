# clone

克隆元素。

## 关键属性

### clone ( data?: [`IUIInputData`](/api/interfaces/IUIInputData.md))

克隆当前元素，可以增加 data 参数覆盖旧数据。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 克隆元素，并设置位置

```ts
// #克隆元素
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' })

leafer.add(rect)

setTimeout(() => {

    // 克隆元素，并设置位置
    const rect2 = rect.clone({ x: 200, y: 200 }) // [!code hl:2]
    leafer.add(rect2)

}, 1000)
```
