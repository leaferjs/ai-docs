# ImageEvent

图片事件。

::: tip 继承
ImageEvent &nbsp;>&nbsp; [Event](../basic/Event.md)
:::

## 关键属性

### image: [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

原始图片封装对象。

### error: `string` | `object`

图片加载错误信息。

## 辅助属性

用于区分图形内使用多个图案填充的情况。

### attrName: `string`

图案填充的属性名: `fill` | `stroke`

### attrValue: [`ImagePaint`](/reference/UI/paint/image.md)

图案填充的属性值。

## 事件名称

### ImageEvent.LOAD

图片开始加载。

`image.load`

### ImageEvent.LOADED

图片加载完成。

`image.loaded`

### ImageEvent.ERROR

图片加载失败。

`image.error`

<!--
## 继承事件

### [Event](./Event.md) -->

<!-- ## API

### [ImageEvent](/api/classes/LeaferEvent.md) -->

## 示例

### 监听 Image 的图片加载

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

### 监听 fill 中的图片加载

::: code-group
```ts
// #监听 fill 图片事件 [加载成功]
import { Leafer, Rect, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:8]
    fill: { type: 'image', url: '/image/leafer.jpg' },
    draggable: true
})

rect.once(ImageEvent.LOADED, function (e: ImageEvent) {
    console.log(e)
})

leafer.add(rect)
```
```js
// #监听 fill 图片事件 [加载成功]
import { Leafer, Rect, ImageEvent } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:8]
    fill: { type: 'image', url: '/image/leafer.jpg' },
    draggable: true
})

rect.once(ImageEvent.LOADED, function (e) {
    console.log(e)
})

leafer.add(rect)
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
