<script setup>
import Case from '/component/Case.vue'
</script>

# SolidPaint 对象

纯色填充对象, 可设置给 [fill](../fill.md) 或 [stroke](../stroke.md) 属性。

<case name="SolidFill"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `solid`。

### color: [`Color`](../../interface/ui/Color.md)

颜色。

## 基础属性

### blendMode?: [`BlendMode`](../blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1， color 为非 [颜色对象](../../interface/ui/Color.md#rgb) 时需安装 [color 插件](/plugin/in/color/index.md) 才能生效。

## 子描边属性

### style?: [`IStrokeStyle`](../../../api/interfaces/IStrokeStyle.md)

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](../stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果，[了解具体设置](../stroke.md#子描边属性)。

## 归属

### [UI 元素](../../display/UI.md)

## 示例

<case name="SolidFill" index=0 editor=false></case>

::: code-group
```ts
// #纯色填充 (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: { // [!code hl:4]
        type: 'solid',
        color: '#32cd79'
    },
})

leafer.add(rect)
```
```ts
// #纯色填充 (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: { // [!code hl:4]
        type: 'solid',
        color: '#32cd79'
    },
})

app.tree.add(rect)
```
:::
