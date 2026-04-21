# Custom

使用 canvas.context 自定义图形。

需要自己处理元素边界、光标碰撞、绘制样式，一般用来对接其他的 canvas 库。

## 注意事项

### 元素边界

我们通过定义明确的 [元素边界](../../../guide/advanced/bounds.md) 来进行局部渲染、高效检测光标碰撞。

根据情况确定是否需重写 `__updateBoxBounds()` 方法定义正确的 [boxBounds 边界](../../UI/bounds.md#boxbounds-iboundsdata)。

### 光标碰撞

我们首先会检测光标与元素边界是否碰撞，之后才会进行细节碰撞检测，从而可以达到从百万级的元素中快速拾取元素。

根据情况确定是否需重写元素 ` __drawHitPath()` 方法定义碰撞路径。

### 绘制样式

为了提高绘制性能，并没有在每一次绘制时进行 save() 与 restore() 操作，需注意：

1. 当描边时，需调用 `canvas.setStrokeOptions()` 重置为当前描边样式（如 dashPattern、strokeCap 等），否则可能会应用到之前的描边样式。

2. 当使用了 clip 和滤镜时需要进行还原操作，否则会影响后续元素的绘制。

## 示例

```ts
// #自定义元素 [使用 canvas.context 自定义图形]
import { UI, registerUI, dataProcessor, UIData } from '@leafer-ui/core' // 引入跨平台核心包
import { IUIInputData, ILeaferCanvas, IRadiusPointData, IUIData } from '@leafer-ui/interface'


// 定义数据

interface ICustomInputData extends IUIInputData { }
interface ICustomData extends IUIData { }

class CustomData extends UIData implements ICustomData {

}


// 定义类

@registerUI()
class Custom extends UI {

    public get __tag() { return 'Custom' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

    // 1. 如果通过width、height属性无法确定图形 bounds，需要重写此函数手动计算bounds
    __updateBoxBounds(): void {
        const box = this.__layout.boxBounds
        const { width, height } = this.__
        box.x = 0
        box.y = 0
        box.width = width
        box.height = height
    }

    // 2. 绘制碰撞路径
    __drawHitPath(hitCanvas: ILeaferCanvas): void {
        const { context } = hitCanvas
        const { x, y, width, height } = this.__layout.boxBounds
        context.beginPath()
        context.rect(x, y, width, height)
    }

    // 3. 碰撞检测(可选), 不重写此方法时，需要元素有fill或stroke值。
    __hit(inner: IRadiusPointData): boolean {
        const { context } = this.__hitCanvas
        if (context.isPointInPath(inner.x, inner.y)) return true

        // 碰撞半径
        const lineWidth = inner.radiusX * 2 // 可增加自定的线宽
        if (context.lineWidth !== lineWidth) {
            context.lineWidth = lineWidth
            context.stroke()
        }

        return context.isPointInStroke(inner.x, inner.y)
    }

    // 4. 绘制自定义内容
    __draw(canvas: ILeaferCanvas): void {
        const { context } = canvas
        const { width, height } = this.__

        canvas.setStrokeOptions(this.__)  // 绘制描边前，需要设置一下描边选项（可选）。

        context.fillStyle = 'blue'
        context.fillRect(0, 0, width / 2, height)

        context.strokeStyle = 'blue'
        context.strokeRect(width / 2, 0.5, width / 2, height - 1)
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const custom = new Custom({ x: 100, y: 100, width: 200, height: 50, draggable: true })

leafer.add(custom)
```

## 恭喜 🎉

你已完成所有自定义元素的教程～
