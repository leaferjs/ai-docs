# 使用内部编辑器

自定义内部编辑器的第 3 步是： **使用内部编辑器**。

同类元素一般使用同一种内部编辑器。

## 使用步骤

### 1. 设置内部编辑器

通过元素的 `setEditInner()` 静态方法设置内部编辑器的名称。

实现原理：自动修改元素属性 editInner 的 getter 方法， 支持传入一个函数。

### 2. 运行看看效果

选中并双击元素后，可以打开内部编辑器，包含一个控制点和一个完成按钮。

拖动这个控制点会打印控制台日志，缩放页面会跟随移动。

点击完成按钮会退出内部编辑器。

## 常见问题

### 1. 访问自定义属性取不到值？

给自定义属性增加 [createAttr()](../../../../reference/display/custom/base/attr.md#普通属性) 装饰器， 可解决 JS 类继承的执行顺序导致重写内部方法时，访问属性取不到值的问题。

## 继承

### [InnerEditor](../InnerEditor.md)

## 示例

::: code-group

```ts
// #图形编辑器 [自定义内部编辑工具]
import { App, Star, Box, DragEvent, PointerEvent } from 'leafer-ui'
import { InnerEditor, Editor, registerInnerEditor } from '@leafer-in/editor'


@registerInnerEditor()
export class CustomEditor extends InnerEditor {

    public get tag() { return 'CustomEditor' }

    public point: Box
    public closeBtn: Box

    constructor(editor: Editor) {
        super(editor)

        // 创建控制点
        this.point = new Box()
        this.closeBtn = new Box({ fill: '#FF4B4B', cornerRadius: 20, around: 'top', cursor: 'pointer', children: [{ tag: 'Text', text: '完成', padding: [10, 20] }] })
        this.view.addMany(this.point, this.closeBtn)
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') }),
            this.closeBtn.on_(PointerEvent.TAP, () => { this.editor.closeInnerEditor() }) // 关闭内部编辑器
        ]
    }

    public onLoad(): void {
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    public onUpdate(): void {
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y, height } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 50) * Math.abs(scaleX), y: y * Math.abs(scaleY) })
        this.closeBtn.set({ x: (x + 50) * Math.abs(scaleX), y: (y + height) * Math.abs(scaleY) })
    }

    public onUnload(): void {
        this.editBox.remove(this.view)
    }

    public onDestroy(): void {
        this.point = this.closeBtn = null
    }

}


Star.setEditInner('CustomEditor') // 1. 为元素类设置内部编辑器  // [!code hl:4]
// Star.setEditInner(function (star: Rect) {
//     return star.pathInputed ? 'PathEditor' : 'CustomEditor' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Star.one({ editable: true, fill: '#FEB027' }, 100, 100),
    Star.one({ editable: true, fill: '#FFE04B' }, 300, 100)
)
```

```js
import { App, Star, Box, Group,PointerEvent,DragEvent } from 'leafer-ui'
import { InnerEditor} from '@leafer-in/editor'


export class CustomEditor extends InnerEditor {

    get tag() { return 'CustomEditor' }

    onCreate() {
        this.point = new Box()
        this.closeBtn = new Box({ fill: '#FF4B4B', cornerRadius: 20, around: 'top', cursor: 'pointer', children: [{ tag: 'Text', text: '完成', padding: [10, 20] }] })
        this.view.addMany(this.point, this.closeBtn)
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') }),
            this.closeBtn.on_(PointerEvent.TAP, () => { this.editor.closeInnerEditor() }) // 关闭内部编辑器
        ]
    }

    onLoad() {
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    onUpdate() {
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y, height } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 50) * Math.abs(scaleX), y: y * Math.abs(scaleY) })
        this.closeBtn.set({ x: (x + 50) * Math.abs(scaleX), y: (y + height) * Math.abs(scaleY) })
    }

    onUnload() {
        this.editBox.remove(this.view)
    }

    onDestroy() {
        this.point = this.closeBtn = null
    }
}

CustomEditor.registerInnerEditor()


Star.setEditInner('CustomEditor') // 1. 为元素类设置内部编辑器  // [!code hl:4]
// Star.setEditInner(function (star: Rect) {
//     return star.pathInputed ? 'PathEditor' : 'CustomEditor' // 支持函数
// })


const app = new App({ view: window, editor: {} })

app.tree.addMany(
    Star.one({ editable: true, fill: '#FEB027' }, 100, 100),
    Star.one({ editable: true, fill: '#FFE04B' }, 300, 100)
)
```
:::

## 恭喜 🎉

你已完成自定义内部编辑器的基础学习，快去开发试试吧～

### [自定义编辑工具](../editOuter/register.md)
