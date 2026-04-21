# 添加方法

自定义元素的第 4 步是： **添加方法**。

通过自定义方法可以实现一些操作，比如控制动画。

## 示例

::: code-group

```ts
// #自定义元素 [添加方法]
import { Rect, RectData, registerUI, dataProcessor, PointerEvent } from '@leafer-ui/core' // 引入跨平台核心包
import { IRectInputData, IRectData } from '@leafer-ui/interface'


export interface ICustomInputData extends IRectInputData { }

export interface ICustomData extends IRectData { }

export class CustomData extends RectData implements ICustomData { }


@registerUI()
export class Custom extends Rect {

    public get __tag() { return 'Custom' }

    @dataProcessor(CustomData)
    declare public __: ICustomData

    // 1. 添加普通属性，不用进json，只是辅助逻辑判断  // [!code hl:2]
    public rotating: boolean

    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

    // 2. 添加自定义方法, 动画开关  // [!code hl:16]
    startAnimate(): void {
        this.rotating = true
        this.rotateAnimate()
    }

    stopAnimate(): void {
        this.rotating = false
    }

    rotateAnimate(): void {
        this.nextRender(() => {
            this.rotation += 1
            if (this.rotating) this.rotateAnimate()
        })
    }

}


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const custom = new Custom({ x: 100, y: 100, width: 100, height: 200, around: 'center', fill: 'blue', draggable: true })

leafer.add(custom)

// 3. 使用方法， 通过按下鼠标切换开启/停止旋转动画 // [!code hl:4]
custom.on(PointerEvent.DOWN, () => {
    custom.rotating ? custom.stopAnimate() : custom.startAnimate()
})
```

```js
import { Rect, RectData, PointerEvent } from '@leafer-ui/core' // 引入跨平台核心包


export class Custom extends Rect {

    get __tag() { return 'Custom' }

    // 1. 添加普通属性，不用进json，只是辅助逻辑判断  // [!code hl:2]
    rotating = false

    // 2. 添加自定义方法，动画开关  // [!code hl:16]
    startAnimate() {
        this.rotating = true
        this.rotateAnimate()
    }

    stopAnimate() {
        this.rotating = false
    }

    rotateAnimate() {
        this.nextRender(() => {
            this.rotation += 1
            if (this.rotating) this.rotateAnimate()
        })
    }

}

export class CustomData extends RectData {}

Custom.registerUI()
Custom.registerData(CustomData)


// 使用自定义元素
import { Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })
const custom = new Custom({ x: 100, y: 100, width: 100, height: 200, around: 'center', fill: 'blue', draggable: true })

leafer.add(custom)

// 3. 使用方法， 通过按下鼠标切换开启/停止旋转动画 // [!code hl:4]
custom.on(PointerEvent.DOWN, () => {
    custom.rotating ? custom.stopAnimate() : custom.startAnimate()
})
```
:::

## 恭喜 🎉

你已完成自定义元素的基础学习，可通过 [高级示例](../extends.md) 进一步掌握自定义元素～
