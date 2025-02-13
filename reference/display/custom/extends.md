# Custom

通过继承其他元素自定义图形（推荐）。

适合于想为元素增加自定义数据属性的场景。绘制复杂的效果，可以通过继承 [Pen](/reference/display/Pen.md) 实现。

## 示例

### 继承 Rect

```ts
// #自定义元素 [继承 Rect]
import { IRectInputData, IRectData } from '@leafer-ui/interface'
import { Leafer, registerUI, dataProcessor, Rect, RectData, dataType } from 'leafer-ui'


// 定义数据

export interface ICustomRectInputData extends IRectInputData {
    top?: number
}

export interface ICustomRectData extends IRectData {
    top?: number
}

export class CustomRectData extends RectData implements ICustomRectData {

}

// 定义类

@registerUI()
class CustomRect extends Rect {

    public get __tag() { return 'CustomRect' }

    @dataProcessor(CustomRectData)
    declare public __: ICustomRectData

    @dataType(0)
    declare public top: string // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomRectInputData) {
        super(data)
        // ...
    }

}

const leafer = new Leafer({ view: window })
const customRect = new CustomRect({ top: 50, y: 100, width: 200, height: 50, fill: 'blue', draggable: true })

leafer.add(customRect)
```

### 继承 Pen

```ts
// #自定义元素 [继承 Pen]
import { IPenInputData, IPenData, IPen } from '@leafer-ui/interface'
import { Leafer, registerUI, dataProcessor, Pen, PenData, boundsType } from 'leafer-ui'


interface ICustomPen extends IPen {
    createShapes(): void
}

// 定义数据

export interface ICustomPenInputData extends IPenInputData {
    size?: number
}

export interface ICustomPenData extends IPenData {
    size?: number
}

export class CustomPenData extends PenData implements ICustomPenData {
    protected _size: number

    protected setSize(value: number): void {
        this._size = value;
        (this.__leaf as CustomPen).createShapes()
    }
}

// 定义类

@registerUI()
class CustomPen extends Pen implements ICustomPen {

    public get __tag() { return 'CustomPen' }

    @dataProcessor(CustomPenData)
    declare public __: ICustomPenData

    @boundsType(0)
    declare public size: number // 增加自定义属性， 注意必须加上 declare 关键词

    constructor(data: ICustomPenInputData) {
        super(data)
    }

    // 根据size创建组合图形
    public createShapes(): void {
        this.clear() // 清除之前创建的路径

        const { size } = this.__
        const center = size / 2

        this.setStyle({ fill: '#FF4B4B', windingRule: 'evenodd' })
        this.roundRect(0, 0, size, size, size / 3).arc(center, center, size / 4)

        this.setStyle({ x: center, y: center, fill: '#FEB027' })
        this.arc(0, 0, size / 5)
    }

}

const leafer = new Leafer({ view: window })
const customPen = new CustomPen({ size: 100, fill: 'blue', draggable: true })

leafer.add(customPen)

setTimeout(() => {
    customPen.size = 200 // 2秒后放大尺寸
}, 2000)
```

## 下一步

### [绘制路径](/reference/display/custom/path.md)
