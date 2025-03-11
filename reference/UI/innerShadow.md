<script setup>
import Case from '/component/Case.vue'
</script>

# innerShadow

元素的内阴影。

<case name="InnerShadow" editor=false></case>

## 关键属性

### innerShadow: [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect) | [`ShadowEffect`](../interface/ui/Effect.md#shadoweffect)[]

内阴影， 支持多个内阴影叠加。

```ts
interface ShadowEffect {
  x: number
  y: number
  blur: number
  spread?: number
  color: Color
  blendMode?: BlendMode
  visible?: boolean
}
```

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="InnerShadow" index=0 editor=false></case>

### 绘制内阴影

```ts
// #内阴影
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: '#32cd79',
    innerShadow: { // [!code hl:6]
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```
