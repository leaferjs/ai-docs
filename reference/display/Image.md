<script setup>
import Case from '/component/Case.vue'
</script>

# Image 元素

图片对象，支持使用 svg 格式的图片，另外所有图形都支持通过 [图案填充](/reference/UI/paint/image.md) 来显示图片。

<case name="ImageFill" editor=false></case>

<br/>

::: tip 继承
Image &nbsp;>&nbsp; [Rect](./Rect.md) &nbsp;>&nbsp; [UI](./UI.md)

<br/>

注意：[script 标签引入](/guide/install/ui/start.md#通过-script-标签引入) 需用别名 **MyImage** 代替。
:::

## 关键属性

### width?: `number`

宽度，默认使用图片原始宽度。

### height?: `number`

高度， 默认使用图片原始高度。

### url: `string`

图片 url 地址，支持 Blob url、Data url(Base64)。

我们还提供了 [资源库](/reference/resource/Resource.md)，支持原始图片对象、画布对象转 url， 及预加载图片。

::: tip 注意事项
[Image](./Image.md) 暂时不支持设置 fill 属性（内部已使用），可使用 [Rect](./Rect.md) 元素代替。
:::

## 辅助属性

[图案填充](/reference/UI/paint/image.md) 的元素也支持这些辅助属性。

### pixelRatio: `number`

图片的像素比， 默认为 1，（适配高清屏为 2，超高清屏为 3）。

自动宽高的图片，此属性才有效。

### lazy: `boolean`

图片是否懒加载，可以加快页面显示速度， 默认为 false。

### placeholderColor: `string`

图片占位符的背景颜色，当图片加载中(延迟 100ms)或加载失败时均会显示。

## 只读属性

### ready: `boolean`

图片是否已经加载完成。

### image?: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始图片封装对象, 图片加载完成才存在。

## 辅助方法

### load ()

手动加载图片。

一般用于元素未添加到 Leafer 中时，手动加载图片，获取图片自然宽高。

## 图片缓存

图片缓存的全局配置，可根据需要动态调整。

```ts
import { Platform } from 'leafer-ui'

// 最大缓存等级，默认2k: 2560 * 1600 像素
Platform.image.maxCacheSize = 2560 * 1600

// 最大重复pattern缓存等级, 默认4k: 4096 * 2160 像素
Platform.image.maxPatternSize = 4096 * 2160

// 图片后缀，区分dom中image标签的缓存，否则可能会有浏览器缓存跨域问题，默认: leaf
Platform.image.suffix = 'leaf'  // image.jpg?leaf
```

## 图片跨域

图片跨域的全局配置，可根据需要动态调整。

设为 null 时可以渲染未经服务端允许的跨域图片， 但不支持导出画板内容（浏览器的限制）。

```ts
import { Platform } from 'leafer-ui'

// 默认配置，未经服务端允许的跨域图片不能渲染。
Platform.image.crossOrigin = 'anonymous'

// 允许跨域图片渲染，但不支持导出画板内容（浏览器的限制）。
Platform.image.crossOrigin = null
```

### 使用 Rect 代替 Image

想为图片设置 fill 时，请用 Rect 代替，Rect 不设置宽高也会自适应图片，并支持多个填充。

::: code-group
```ts
// #使用 Rect 代替 Image (Leafer)
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch'
    },
    draggable: true
})

leafer.add(rect)
```
```ts
// #使用 Rect 代替 Image (App)
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    fill: {  // [!code hl:5]
        type: 'image',
        url: '/image/leafer.jpg',
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(rect)
```
:::

## 资源库

我们还提供了 [资源库](/reference/resource/Resource.md)，可预加载图片，原始图片对象、画布对象可转为 url。

引擎中的所有图片都会通过 资源库 有序并行加载，当图片不再使用时，会进入回收列表，到达阈值会自动销毁。

## 图片事件

### [ImageEvent](/reference/event/basic/Image.md)

<!-- ## 继承元素

### [Rect](./Rect.md) -->

<!-- ## API

### [Image](/api/classes/Image.md) -->

## 示例

<case name="ImageFill" index=0 editor=false></case>

### 使用默认宽高

::: code-group
```ts
// #创建Image [使用默认宽高 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    draggable: true
})

leafer.add(image)
```
```ts
// #创建Image [使用默认宽高 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    editable: true
})

app.tree.add(image)
```
:::

### 固定宽度，自适应高度

::: code-group
```ts
// #创建Image [固定宽度，自适应高度 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    width: 50,
    draggable: true
})

leafer.add(image)
```
```ts
// #创建Image [固定宽度，自适应高度 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({  // [!code hl:4]
    url: '/image/leafer.jpg',
    width: 50,
    editable: true
})

app.tree.add(image)
```
:::

### 固定高度，自适应宽度

::: code-group
```ts
// #创建Image [固定高度，自适应宽度 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:5]
    url: '/image/leafer.jpg',
    height: 50,
    draggable: true
})

leafer.add(image)
```
```ts
// #创建Image [固定高度，自适应宽度 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({  // [!code hl:5]
    url: '/image/leafer.jpg',
    height: 50,
    editable: true
})

app.tree.add(image)
```
:::

### 图片占位符

::: code-group
```ts
// #创建Image [图片占位符 (Leafer)]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({
    url: '/image/leafer-error.jpg',
    width: 110,
    height: 80,
    draggable: true,
    placeholderColor: 'rgba(120,120,120,0.2)' // 设置图片占位符的背景颜色 // [!code hl] 
})

leafer.add(image)


setTimeout(() => {

    image.url = '/image/leafer.jpg' // 变为正确的图片

}, 1000)
```
```ts
// #创建Image [图片占位符 (App)]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const image = new Image({
    url: '/image/leafer-error.jpg',
    width: 110,
    height: 80,
    draggable: true,
    placeholderColor: 'rgba(120,120,120,0.2)' // 设置图片占位符的背景颜色 // [!code hl] 
})

app.tree.add(image)


setTimeout(() => {

    image.url = '/image/leafer.jpg' // 变为正确的图片

}, 1000)
```
:::

### 监听图片加载

::: code-group
```ts
// #监听图片事件 [加载成功]
import { Leafer, Image, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({ // [!code hl:8]
    url: '/image/leafer.jpg',
    draggable: true
})

image.once(ImageEvent.LOADED, function (e: ImageEvent) {
    console.log(e)
})

leafer.add(image)
```
```js
// #监听图片事件 [加载成功]
import { Leafer, Image, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({ // [!code hl:8]
    url: '/image/leafer.jpg',
    draggable: true
})

image.once(ImageEvent.LOADED, function (e) {
    console.log(e)
})

leafer.add(image)
```
:::

### 监听错误

::: code-group
```ts
// #监听图片事件 [加载失败]
import { Leafer, Image, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({
    url: '/image/leafer.jpg',
    draggable: true
})

image.once(ImageEvent.ERROR, function (e: ImageEvent) { // [!code hl:3]
    console.log(e.error)
})

leafer.add(image)
```
```js
// #监听图片事件 [加载失败]
import { Leafer, Image, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({
    url: '/image/leafer.jpg',
    draggable: true
})

image.once(ImageEvent.ERROR, function (e) { // [!code hl:3]
    console.log(e.error)
})

leafer.add(image)
```
:::
