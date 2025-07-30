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
  scaleFixed?: 'zoom-in' | false // 缩放时是否固定原有比例，zoom-in表示仅在放大时固定比例（缩小时仍跟随缩小）
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

### 阴影不随画布放大

```ts
// #图形编辑器 [背景为透明方格的画板]
import { App, Frame, Rect, Platform } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件 // [!code hl] 
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ // [!code hl:5]
    view: window,
    fill: '#333',
    editor: {},  //  配置 editor 会自动创建并添加 app.editor 实例、tree 层、sky 层
})

// 平铺的透明方格
const svg = Platform.toURL(
    `<svg width="10" height="10" xmlns="http://www.w3.org/2000/svg">
<rect x="0" y="0" width="5" height="5" fill="#FFF"/><rect x="5" y="0" width="5" height="5" fill="#CCC"/>
<rect x="0" y="5" width="5" height="5" fill="#CCC"/><rect x="5" y="5" width="5" height="5" fill="#FFF"/>
</svg>`, 'svg',)


app.tree.add(Frame.one({ // 背景为透明方格的画板
    fill: {
        type: 'image',
        url: svg,
        mode: 'repeat',
        scaleFixed: true // 固定平铺图比例，不随画布缩放  //[!code hl]
    },
    shadow: {
        x: 0,
        y: 3,
        blur: 15,
        color: '#0009',
        scaleFixed: 'zoom-in' // 固定阴影比例，不随画布放大 //[!code hl]
    },
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))
```
