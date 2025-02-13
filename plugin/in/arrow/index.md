<script setup>
import Case from '/component/Case.vue'
</script>

# 箭头 插件

为线条添加起始/结束箭头，自带 12 种常用的箭头样式，并支持自定义。

<case name="Arrow" editor=false></case>

## 适用平台

支持所有平台。

## 安装插件

需要安装 arrow 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/arrow)。

::: code-group

```sh [npm]
npm install @leafer-in/arrow
```

```sh [pnpm]
pnpm add @leafer-in/arrow
```

```sh [yarn]
yarn add @leafer-in/arrow
```

```sh [bun]
bun add @leafer-in/arrow
```

:::

### 通过 script 标签引入

通过全局变量 LeaferIN.arrow 访问插件内部功能。
::: code-group

```html [arrow.min]
<script src="https://unpkg.com/@leafer-in/arrow@1.4.0/dist/arrow.min.js"></script>
<script>
  const { Arrow } = LeaferIN.arrow
</script>
```

```html [arrow]
<script src="https://unpkg.com/@leafer-in/arrow@1.4.0/dist/arrow.js"></script>
<script>
  const { Arrow } = LeaferIN.arrow
</script>
```

https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm
:::

## 体验

<case name="Arrow" index=6 editor=false></case>

```ts
// #箭头样式 [角度箭头]
import { Leafer } from 'leafer-ui'
import { Arrow } from '@leafer-in/arrow'

const leafer = new Leafer({ view: window })

const arrow = new Arrow({  // [!code hl:5]
    y: 50,
    strokeWidth: 5,
    stroke: '#32cd79'
})

leafer.add(arrow)
```

## 下一步

### [Arrow 元素](./Arrow.md)
