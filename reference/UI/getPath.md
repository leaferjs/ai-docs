# getPath

获取数字路径。

## 关键方法

### getPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

获取元素的数字路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)）。

`curve` 表示是否转换为曲线路径（ M、L、C、Z ），`pathForRender` 表示是否获取最终的渲染路径（含圆角属性）。

### asPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

强制转换元素为路径，等于执行 `rect.path = rect.getPath()`，具体原理可以了解一下 [path 路径优先模式](/reference/UI/path.md)。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 获取元素的数字路径

```ts
// #获取元素的数字路径
import { Leafer, Ellipse } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "#32cd79"
})

leafer.add(ellipse)

// 打印数字路径
console.log(ellipse.getPath()) // [!code hl]
```
