<script setup>
import Case from '/component/Case.vue'
</script>

# Image Filter

Image Filter —— 轻松实现高性能 GPU 图像调色与滤镜处理。

## 更新日志

开源前的最后版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 image-filter 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/image-filter)。

::: code-group

```sh [npm]
npm install @leafer-in/image-filter
```

```sh [pnpm]
pnpm add @leafer-in/image-filter
```

```sh [yarn]
yarn add @leafer-in/image-filter
```

```sh [bun]
bun add @leafer-in/image-filter
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.imageFilter 访问插件内部功能。

::: code-group

```html [image-filter.min]
<script src="https://unpkg.com/@leafer-in/image-filter@2.3.3/dist/image-filter.min.js"></script>
<script>
  const { ImageFilter } = LeaferIN.imageFilter
</script>
```

```html [image-filter]
<script src="https://unpkg.com/@leafer-in/image-filter@2.3.3/dist/image-filter.js"></script>
<script>
  const { ImageFilter } = LeaferIN.imageFilter
</script>
```

:::

## 示例

### 添加图片滤镜

```ts
// #Image Filter [添加图片滤镜]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/image-filter' // 导入图片滤镜插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const image = new Image({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [  // 添加图片滤镜  [!code hl:9]
            { type: 'exposure', value: 0.3 }, // 取值范围 -1 ～ 1，0 表示无滤镜效果
            { type: 'contrast', value: -0.5 },
            { type: 'saturation', value: -1 },
            { type: 'temperature', value: 1 },
            { type: 'tint', value: 0.5 },
            { type: 'highlights', value: 0.2 },
            { type: 'shadows', value: 0.5 },
        ],
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(image)
```

### 自定义图片滤镜

```ts
// #Image Filter [自定义图片滤镜]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { registerImageFilter } from '@leafer-in/image-filter' // 导入图片滤镜插件  // [!code hl]

// [!code hl:13]
/* 注册自定义图片滤镜，允许覆盖默认滤镜
| 参数 | 类型 | 说明 |
| ------------ | ------- | ------------------------ |
| `c` | `vec3` | 输入颜色（RGB），范围`0.0 ~ 1.0` |
| `v` | `float` | 曝光值（EV），控制亮度 |
| `uv` | `vec2` | 当前像素的纹理坐标（`0~1`） |
| `resolution` | `vec2` | 画布分辨率（像素），画布的实际宽高值 |
*/
registerImageFilter('customFilter', `
vec3 customFilter( vec3 c, float v, vec2 uv, vec2 resolution ){
    return c*vec3(1.0+0.3);
}`)

const app = new App({ view: window, editor: {} })

const image = new Image({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [  // 添加自定义图片滤镜  [!code hl:3]
            { type: 'customFilter', value: 1 }, // 滤镜名只能为字母
        ],
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(image)
```
