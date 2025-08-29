<script setup>
import Case from '/component/Case.vue'
</script>

# 交互状态

使元素支持 [hover](/reference/UI/state/hover.md) 、 [press](/reference/UI/state/press.md) 、 [focus](/reference/UI/state/focus.md) 、 [selected](/reference/UI/state/selected.md) 、 [disabled](/reference/UI/state/disabled.md) 交互状态样式。

## 安装插件

需要安装 state 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/state)。

::: code-group

```sh [npm]
npm install @leafer-in/state
```

```sh [pnpm]
pnpm add @leafer-in/state
```

```sh [yarn]
yarn add @leafer-in/state
```

```sh [bun]
bun add @leafer-in/state
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.state 访问插件内部功能。

::: code-group

```html [state.min]
<script src="https://unpkg.com/@leafer-in/state@1.9.5/dist/state.min.js"></script>
```

```html [state]
<script src="https://unpkg.com/@leafer-in/state@1.9.5/dist/state.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 体验

<case name="PressStyle" index=1 editor="false" ></case>

按钮交互效果

```ts
// #交互状态 [按钮效果]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: 'rgba(50,205,121, 0.7)',
    cornerRadius: 30,
    hoverStyle: { fill: 'rgba(50,205,121, 0.8)' }, // [!code hl:2]
    pressStyle: { fill: 'rgba(50,205,121, 1)' },
    cursor: 'pointer'
})

leafer.add(rect)
```

## 下一步

### [hover 状态样式](/reference/UI/state/hover.md)

### [press 状态样式](/reference/UI/state/press.md)

### [focus 状态样式](/reference/UI/state/focus.md)

### [selected 状态样式](/reference/UI/state/selected.md)

### [disabled 状态样式](/reference/UI/state/disabled.md)
