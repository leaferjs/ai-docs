# 自定义控制点

自定义内部编辑器的第 2 步是： **自定义控制点**。

控制点一般用来调整路径节点，文本编辑器需要通过创建 DOM 代替控制点，可自由定义。

## 自定义步骤

### 1. 创建控制点

在 `constructor()` 或 `onCreate()` 方法中创建自定义控制点。

实例化内部编辑器时会自动调用此方法。

### 2. 载入控制点

在 `onLoad()` 方法中添加控制点到视图中。

当用户双击元素时，会打开内部编辑器，自动调用此方法载入。

### 3. 更新控制点

在 `onUpdate()` 方法中更新控制点位置、状态。

当用户操作视图、元素时，会自动调用此方法更新。

### 4. 卸载控制点

在 `onUnload()` 方法中将控制点从视图中移除。

当用户退出内部编辑器时，会自动调用此方法卸载。

路径编辑器一般通过点击完成按钮退出，文本编辑器一般点击页面其他位置自动退出。

## 继承

### [InnerEditor](../InnerEditor.md)

## 示例

::: code-group

```ts
import { Box, DragEvent } from 'leafer-ui'
import { InnerEditor, Editor, registerInnerEditor } from '@leafer-in/editor'


@registerInnerEditor()
export class CustomEditor extends InnerEditor {

    public get tag() { return 'CustomEditor' }

    public point: Box

    constructor(editor: Editor) {
        super(editor)

        // 1. 创建控制点 // [!code hl:5]
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    public onLoad(): void { // 2. 载入控制点  // [!code hl:4]
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    public onUpdate(): void {   // 3. 更新控制点  // [!code hl:5]
        const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    public onUnload(): void {  // 4. 卸载控制点  // [!code hl:3]
        this.editBox.remove(this.view)
    }

    public onDestroy(): void {
        this.point = null
    }

}
```

```js
import { Box, Group, DragEvent } from 'leafer-ui'
import { InnerEditor } from '@leafer-in/editor'


export class CustomEditor extends InnerEditor {

    get tag() { return 'CustomEditor' }

    onCreate() {  // 1. 创建控制点 // [!code hl:6]
        this.view.add(this.point = new Box()) // 可以添加多个
        this.eventIds = [
            this.point.on_(DragEvent.DRAG, () => { console.log('drag point') })
        ]
    }

    onLoad() { // 2. 载入控制点  // [!code hl:4]
        this.point.set({ ...this.editBox.getPointStyle(), strokeWidth: 1 })
        this.editBox.add(this.view) // 添加在 editor 或 editBox 中都可以， 注意editBox本身具有定位
    }

    onUpdate() {   // 3. 更新控制点  // [!code hl:5]
       const { boxBounds, worldTransform } = this.editor.element // 单个选中时 element 代表选中的元素
        const { x, y } = boxBounds, { scaleX, scaleY } = worldTransform
        this.point.set({ x: (x + 15) * Math.abs(scaleX), y: (y + 15) * Math.abs(scaleY) })
    }

    onUnload() {  // 4. 卸载控制点  // [!code hl:3]
        this.editBox.remove(this.view)
    }

    onDestroy() {
        this.point = null
    }

}

CustomEditor.registerInnerEditor()
```
:::

## 下一步

### [使用内部编辑器](/plugin/in/editor/editInner/use.md)
