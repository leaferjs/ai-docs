# innerName

运行时创建的临时名称（innerId + tag），用于快速识别元素。

## 只读属性

### innerName: `string`

运行时创建的临时名称，用于快速识别元素。

## 归属

### [UI](/reference/display/UI.md)

## 示例

### 显示矩形元素的 innerName

```ts
// #显示矩形元素的 innerName
import { Leafer, Rect, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 0, 30)

leafer.add(rect)

leafer.add(new Text({ text: rect.innerName, fill: '#32cd79' }))  // [!code hl] 

```
