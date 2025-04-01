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

<!-- ### dualEvent: `boolean`

是否派发双重事件， 默认为 false。

开启后，首次点击元素时，元素可以接收 tap 等鼠标事件。 -->

### beforeMove: [`IEditorBeforeMove`](/api/interfaces/IEditorBeforeMove.md)

移动元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, x, y }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ x, y }` 时将修改移动操作数据。

### beforeScale: [`IEditorBeforeScale`](/api/interfaces/IEditorBeforeScale.md)

resize 元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, scaleX, scaleY }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ scaleX, scaleY }` 时将修改缩放操作数据。

### beforeRotate: [`IEditorBeforeRotate`](/api/interfaces/IEditorBeforeRotate.md)

旋转元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, rotation }`。

返回 `false` 时将忽略本次编辑操作，返回 `rotation` 数字时将修改旋转操作数据。

### beforeSkew: [`IEditorBeforeSkew`](/api/interfaces/IEditorBeforeSkew.md)

倾斜元素事件的前置钩子函数。

参数 data 为增量操作数据 `{ target, origin, skewX, skewY }`。

返回 `false` 时将忽略本次编辑操作，返回 `{ skewX, skewY }` 时将修改倾斜操作数据。

## 示例

### 限制最小编辑尺寸

通过 resize 元素事件的前置钩子函数实现。

```ts
// #图形编辑器 [限制最小编辑尺寸 （resize 元素事件前置钩子函数）]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({
    view: window,
    editor: { // [!code hl:7]
        lockRatio: true,
        beforeScale({ target, scaleX, scaleY }) {
            if (target.width * scaleX < 20 || target.height * scaleY < 20) return false
            return true
        }
    }
})

const rect = Rect.one({ editable: true, fill: '#32cd79', cornerRadius: 30 }, 100, 100)
app.tree.add(rect)

app.editor.select(rect)
```
