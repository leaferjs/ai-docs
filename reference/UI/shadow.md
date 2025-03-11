<script setup>
import Case from '/component/Case.vue'
</script>

# shadow

元素的外阴影。

<case name="Shadow" editor=false></case>

## 关键属性

### shadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

外阴影， 支持多个阴影叠加、boxShadow 效果。

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
  box?: boolean // 和 CSS3 中的 boxShadow 效果一致, 只显示图形外部的阴影
}
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Shadow" index=1 editor=false></case>

### 绘制阴影

```ts
// #外阴影 [drop-shadow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:6]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```

<case name="Shadow" index=0 editor=false></case>

### 绘制 boxShadow 阴影

```ts
// #外阴影 [box-shadow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:7]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA',
        box: true // box-shadow
    }
})

leafer.add(rect)
```
