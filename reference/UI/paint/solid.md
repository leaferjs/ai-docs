<script setup>
import Case from '/component/Case.vue'
</script>

# SolidPaint 对象

纯色填充对象, 可设置给 [fill](/reference/UI/fill.md) 或 [stroke](/reference/UI/stroke.md) 属性。

<case name="SolidFill"  editor=false></case>

## 关键属性

### type: `string`

填充类型为 `solid`。

### color: [`Color`](/reference/interface/ui/Color.md)

颜色。

## 基础属性

### blendMode?: [`BlendMode`](/reference/UI/blendMode.md)

混合模式，默认为 normal。

### visible?: `boolean`

是否可见，默认为 true。

### opacity?: `number`

不透明度，默认为 1， color 为非 [颜色对象](/reference/interface/ui/Color.md#rgb) 时需安装 [color 插件](/plugin/in/color/index.md) 才能生效。

## 子描边属性

### style?: [`IStrokeStyle`](/api/interfaces/IStrokeStyle.md)

当为元素设置多个描边时，可设置子描边样式 `style` ，用于覆盖 [主描边样式](/reference/UI/stroke.md#描边样式属性)。

可形成蚂蚁线、模拟内中外三层描边等各种效果，[了解具体设置](/reference/UI/stroke.md#子描边属性)。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="SolidFill" index=0 editor=false></case>

```ts
// #纯色填充
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
