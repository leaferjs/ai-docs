# 使用编辑工具

自定义编辑工具的第 3 步是： **使用编辑工具**。

同类元素一般使用同一种编辑工具。

## 使用步骤

### 1. 设置编辑工具

通过元素的 `setEditOuter()` 静态方法设置编辑工具名称。

实现原理：会自动修改元素属性 editOuter 的 getter 方法， 支持传入一个函数。

### 2. 运行看看效果

选中元素后，编辑工具将增加一个新的控制点.

拖动这个控制点会打印控制台日志，缩放页面会跟随移动。

## 常见问题

### 1. 访问自定义属性取不到值？

给自定义属性增加 [createAttr()](../../../../reference/display/custom/base/attr.md#普通属性) 装饰器， 可解决 JS 类继承的执行顺序导致重写内部方法时，访问属性取不到值的问题。

## 继承

### [EditTool](../EditTool.md)

## 示例

::: code-group

```ts
// #图形编辑器 [自定义编辑工具]
import { App, Rect, Box, DragEvent } from 'leafer-ui'
import { EditTool, Editor, registerEditTool } from '@leafer-in/editor'


@registerEditTool()
export class CustomEditTool extends EditTool {

    public get tag() { return 'CustomEditTool' }

    public point: Box

    constructor(editor: Editor) {
        super(editor)

        // 创建控制点
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    public onLoad(): void {
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    public onUpdate(): void {
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    public onUnload(): void {
        this.editBox.remove(this.view)
    }

    public onDestroy(): void {
        this.point = null
    }

}


Rect.setEditOuter('CustomEditTool') // 1. 为元素类绑定编辑工具  // [!code hl:4]
// Rect.setEditTool(function (rect: Rect) {
//     return rect.cornerRadius ? 'CustomEditTool' : 'EditTool' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Rect.one({ editable: true, fill: '#FEB027', cornerRadius: 20 }, 100, 100),
    Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: 20 }, 300, 100)
)
```

```js
import { App, Rect, Box, DragEvent } from 'leafer-ui'
import { EditTool, registerEditTool } from '@leafer-in/editor'


export class CustomEditTool extends EditTool {

    get tag() { return 'CustomEditTool' }

    onCreate() { 
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    onLoad() { 
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    onUpdate() {   
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    onUnload() {  
        this.editBox.remove(this.view)
    }

    onDestroy() {
       this.point = null
    }

}

CustomEditTool.registerEditTool() 


Rect.setEditOuter('CustomEditTool') // 1. 为元素类绑定编辑工具  // [!code hl:4]
// Rect.setEditTool(function (rect: Rect) {
//     return rect.cornerRadius ? 'CustomEditTool' : 'EditTool' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Rect.one({ editable: true, fill: '#FEB027', cornerRadius: 20 }, 100, 100),
    Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: 20 }, 300, 100)
)
```
:::

## 恭喜 🎉

你已完成自定义编辑工具的基础学习，快去开发试试吧～

### [自定义内部编辑器](../editInner/register.md)
