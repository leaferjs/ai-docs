# getPath

获取数字路径。

## 关键方法

### getPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

获取元素的数字路径（Canvas [绘图命令](../interface/ui/PathData.md#canvas-命令)）。

`curve` 表示是否转换为曲线路径（ M、L、C、Z ），`pathForRender` 表示是否获取最终的渲染路径（含圆角属性）。

### asPath ( curve?: `boolean`, pathForRender?: `boolean`): [`IPathCommandData`](../interface/ui/PathData.md)

强制转换元素为路径，等于执行 `rect.path = rect.getPath()`，具体原理可以了解一下 [path 路径优先模式](./path.md)。

## 归属

### [UI 元素](../display/UI.md)

## 示例

### 获取元素的数字路径

::: code-group
```ts
// #获取元素的数字路径 (Leafer)
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
```ts
// #获取元素的数字路径 (App)
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    fill: "#32cd79"
})

app.tree.add(ellipse)

// 打印数字路径
console.log(ellipse.getPath()) // [!code hl]
```
:::
