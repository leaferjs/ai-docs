<script setup>
import Case from '/component/Case.vue'
</script>

# animate 插件

丰富的动画功能，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画、滚动动画。

<case name="AnimateFrames" editor=false></case>

## 适用平台

支持所有平台。

## 安装插件

需要安装 animate 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/animate)。

::: code-group

```sh [npm]
npm install @leafer-in/animate
npm install @leafer-in/color
```

```sh [pnpm]
pnpm add @leafer-in/animate
pnpm add @leafer-in/color
```

```sh [yarn]
yarn add @leafer-in/animate
yarn add @leafer-in/color
```

```sh [bun]
bun add @leafer-in/animate
bun add @leafer-in/color
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.animate 访问插件内部功能。
::: code-group

```html [animate.min]
<script src="https://unpkg.com/@leafer-in/animate@1.4.1/dist/animate.min.js"></script>
<script src="https://unpkg.com/@leafer-in/color@1.4.1/dist/color.min.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

```html [animate]
<script src="https://unpkg.com/@leafer-in/animate@1.4.1/dist/animate.js"></script>
<script src="https://unpkg.com/@leafer-in/color@1.4.1/dist/color.js"></script>
<script>
  const { Animate } = LeaferIN.animate
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 依赖插件

### [color 插件](/plugin/in/color/index.md)

## 体验

<case name="AnimateColor" editor=false></case>

```ts
// #创建动画实例 [颜色过渡]
import { Leafer, Rect } from 'leafer-ui'
import { Animate } from '@leafer-in/animate' // 导入动画插件

const leafer = new Leafer({ view: window })

const rect = new Rect({ y: 100, cornerRadius: 50, fill: '#32cd79' })

leafer.add(rect)

new Animate(  // [!code hl:7]
    rect,
    { x: 500, cornerRadius: 0, fill: '#ffcd00' }, // style keyframe
    {
        duration: 1,
        swing: true // 摇摆循环播放
    } // options
)
```

## 下一步

### [Animate 元素](./Animate.md)
