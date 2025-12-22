# 滤镜

目前只支持自定义滤镜，后续会有官方的标准滤镜。

## 安装插件

需要安装 filter 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/filter)。

::: code-group

```sh [npm]
npm install @leafer-in/filter
```

```sh [pnpm]
pnpm add @leafer-in/filter
```

```sh [yarn]
yarn add @leafer-in/filter
```

```sh [bun]
bun add @leafer-in/filter
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.filter 访问插件内部功能。

::: code-group

```html [filter.min]
<script src="https://unpkg.com/@leafer-in/filter@1.12.1/dist/filter.min.js"></script>
```

```html [filter]
<script src="https://unpkg.com/@leafer-in/filter@1.12.1/dist/filter.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 自定义滤镜

```ts
// #自定义滤镜 [blur 滤镜]
import { Leafer, Rect, Filter } from 'leafer-ui'
import '@leafer-in/filter'  // 导入滤镜插件  // [!code hl] 

// 注册自定义滤镜
Filter.register('blur', {
    apply(filter, _ui, worldBounds, currentCanvas, _orginCanvas, _shape) { // 应用自定义滤镜
        currentCanvas.filter = `blur(${filter.blur}px)`
        currentCanvas.resetTransform()
        // currentCanvas.clipWorld(worldBounds) // 某些svg滤镜需要裁剪区域再应用，否则会污染画布
        currentCanvas.copyWorld(currentCanvas, worldBounds, worldBounds, "copy")
        currentCanvas.filter = 'none'
    },
    getSpread(filter) { // 扩展元素的渲染边界
        return filter.blur
    }
})

// 使用滤镜
const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    draggable: true,
    filter: { // 支持多个滤镜 [filter, filter]
        type: 'blur',  // 对应注册的滤镜名称
        blur: 20
    }
})

leafer.add(rect)
```

## 待续

详细的自定义滤镜教程和说明文档正在完善...
