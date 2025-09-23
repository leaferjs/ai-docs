<script setup>
import Case from '/component/Case.vue'
</script>

# 编辑器配置

### [基础](/plugin/in/editor/config/base.md) &nbsp; &nbsp; 事件 &nbsp; &nbsp; [样式](/plugin/in/editor/config/style.md) &nbsp; &nbsp; [按钮组](/plugin/in/editor/config/buttons.md) &nbsp; &nbsp; [光标](/plugin/in/editor/config/cursor.md) &nbsp; &nbsp; [选择](/plugin/in/editor/config/select.md) &nbsp; &nbsp; [控制](/plugin/in/editor/config/control.md) &nbsp; &nbsp; [启用](/plugin/in/editor/config/enable.md) &nbsp; &nbsp; [内部编辑器](/plugin/in/editor/config/innerEditor.md)

##

事件相关配置，应用运行中可实时修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 生效。

同时元素拥有 [独立的编辑配置](/reference/UI/editable.md#editconfig-ieditorconfig) 属性，可实时覆盖主配置。

## 关键属性

### keyEvent: `boolean`

是否接收键盘事件（如方向键移动），默认为 true。

### multipleSelectKey: [IShortcutKeysCheck](/api/interfaces/IShortcutKeysCheck.md)

多选元素的快捷键钩子函数。

```ts
multipleSelectKey(event) {
    return event.shiftKey || event.ctrlKey // 默认为 shiftKey
}
```

### rotateKey: [IShortcutKeysCheck](/api/interfaces/IShortcutKeysCheck.md)

在 resize 控制点上按下某个快捷键，会变旋转功能的钩子函数。

```ts
rotateKey(event) {
    return event.ctrlKey // 默认值
}
```

### diagonalRotateKey: [IShortcutKeysCheck](/api/interfaces/IShortcutKeysCheck.md)

对角旋转的快捷键钩子函数。

```ts
diagonalRotateKey(event) {
    return event.shiftKey // 默认值
}
```

### beforeSelect: [`IEditorBeforeSelect`](/api/interfaces/IEditorBeforeSelect.md)

选择元素事件的前置钩子函数， 仅在初始化配置或修改 [app.editor.config](/plugin/in/editor/index.md#config-ieditorconfig) 有效。

参数 data 为选择数据 `{ target }`。

返回 `false` 时将忽略本次选择操作，返回 `target` 时将修改选择数据。

```ts
beforeSelect(data) {
    const { target } = data // target 可以为单个元素或多个元素，需要自己判断一下
    return true // return false | target
}
```

### beforeEditOuter: [`IEditorEditOuterData`](/api/interfaces/IEditorEditOuterData.md)

打开元素编辑工具 [editOuter](/reference/UI/editable.md#editouter-string) 的前置钩子函数。

参数 data 为 `{ target, name }`, name 为将打开的编辑工具名称，如 'EditTool'。

返回 `false` 时将忽略本次打开操作，返回 字符串 时将修改 name，直接打开指定的编辑工具。

```ts
beforeEditOuter(data) {
    const { target, name } = data // target 为 app.editor.element
    return true // return false | name
}
```

### beforeEditInner: [`IEditorEditInnerData`](/api/modules.md#ieditoreditinnerdata)

打开元素内部编辑工具 [editInner](/reference/UI/editable.md#editinner-string) 的前置钩子函数。

参数 data 为 `{ target, name }`, name 为将打开的编辑工具名称，如 'PathEditor'。

返回 `false` 时将忽略本次打开操作，返回 字符串 时将修改 name，直接打开指定的编辑工具。

```ts
beforeEditInner(data) {
    const { target, name } = data // target 为打开内部编辑器的目标元素
    return true // return false | name
}
```

---

### beforeMove: [`IEditorBeforeMove`](/api/interfaces/IEditorBeforeMove.md)

移动元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, x, y }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ x, y }` 时将修改移动操作数据。

```ts
beforeMove(data) {
    const { target, x, y } = data
    return true // return false | { x, y }
}
```

### beforeScale: [`IEditorBeforeScale`](/api/interfaces/IEditorBeforeScale.md)

resize 元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, scaleX, scaleY }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ scaleX, scaleY }` 时将修改缩放操作数据。

另外元素可直接设置 [widthRange](/reference/UI/editable.md#widthrange-irangesize)、 [heightRange](/reference/UI/editable.md#widthrange-irangesize) 支持限制宽高范围。

```ts
beforeScale(data) {
    const { target, origin, scaleX, scaleY } = data
    return true // return false | { scaleX, scaleY }
}
```

### beforeRotate: [`IEditorBeforeRotate`](/api/interfaces/IEditorBeforeRotate.md)

旋转元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, rotation }`。

返回 `false` 时将忽略本次编辑操作，返回 `rotation` 数字时将修改旋转操作数据。

```ts
beforeRotate(data) {
    const { target, origin, rotation } = data
    return true // return false | rotation
}
```

### beforeSkew: [`IEditorBeforeSkew`](/api/interfaces/IEditorBeforeSkew.md)

倾斜元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, skewX, skewY }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ skewX, skewY }` 时将修改倾斜操作数据。

```ts
beforeSkew(data) {
    const { target, origin, skewX, skewY } = data
    return true // return false | { skewX, skewY }
}
```

## 示例

### 限制最小编辑尺寸

通过 resize 元素事件的前置钩子函数实现。

::: code-group
```ts
// #图形编辑器 [限制最小编辑尺寸 （resize 元素事件前置钩子函数）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        lockRatio: true,
        beforeScale({ target, scaleX, scaleY }) { // [!code hl:7]
            if (target.width * scaleX < 20 || target.height * scaleY < 20) {
                const scale = Math.min(20 / target.width, 20 / target.height)
                return { scaleX: scale, scaleY: scale }
            }
            return true
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
```ts
// #图形编辑器 [限制最小编辑尺寸，且支持镜像操作 （resize 元素事件前置钩子函数）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: {
        lockRatio: true,
        beforeScale({ target, scaleX, scaleY }) { // [!code hl:7]
            if (target.width * Math.abs(scaleX) < 20 || target.height * Math.abs(scaleY) < 20) {
                const scale = Math.min(20 / target.width, 20 / target.height)
                return { scaleX: scaleX < 0 ? -scale : scale, scaleY: scaleY < 0 ? -scale : scale }
            }
            return true
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
:::
