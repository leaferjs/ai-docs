# 自定义控制点

自定义编辑工具的第 2 步是： **自定义控制点**。

控制点一般用来控制元素的形状，如控制圆角矩形的四个角，多边形的边数。

## 自定义步骤

### 1. 创建控制点

在 `constructor()` 或 `onCreate()` 方法中创建自定义控制点（可选）。

实例化编辑工具时会自动调用此方法。

### 2. 载入控制点

在 `onLoad()` 方法中添加控制点到视图中。

当用户选择元素时，会切换编辑工具，自动调用此方法载入。

### 3. 更新控制点

在 `onUpdate()` 方法中更新控制点位置、状态。

当用户操作视图、元素时，会自动调用此方法更新。

### 4. 卸载控制点

在 `onUnload()` 方法中将控制点从视图中移除。

当用户切换到其他编辑工具时，会自动调用此方法卸载。

## 继承

### [EditTool](../EditTool.md)

## 示例

::: code-group

```ts
import { Box, DragEvent } from 'leafer-ui'
import { EditTool, Editor, registerEditTool } from '@leafer-in/editor'


@registerEditTool()
export class CustomEditTool extends EditTool {

    public get tag() { return 'CustomEditTool' }

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
import { Box, DragEvent } from 'leafer-ui'
import { EditTool, registerEditTool } from '@leafer-in/editor'


export class CustomEditTool extends EditTool {

    get tag() { return 'CustomEditTool' }
 
    onCreate() {  // 1. 创建控制点 // [!code hl:6]
        this.view.add( this.point = new Box()) // 可以添加多个
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

CustomEditTool.registerEditTool() 
```
:::

## 下一步

### [使用编辑工具](/plugin/in/editor/editOuter/use.md)
