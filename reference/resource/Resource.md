# Resource

资源库，外部资源管理（静态类）。

用于管理及有序并行加载图片、视频、声音等素材。

## 关键方法

### loadImage ( key: `string`, format?: [`IExportFileType`](/api/modules.md#iexportimagetype) ): Promise<[`ILeaferImage`](/api/interfaces/ILeaferImage.md)>

预加载图片资源，`key` 为图片的 url 地址，`format` 用于强制定义图片类型 。

### setImage ( key: `string`, value: `string` | [`IObject`](/api/interfaces/IObject.md) | [`ILeaferImage`](/api/interfaces/ILeaferImage.md) | [`ILeaferCanvas`](/api/interfaces/ILeaferCanvas.md), format?: [`IExportFileType`](/api/modules.md#iexportimagetype) ): [`ILeaferImage`](/api/interfaces/ILeaferImage.md)

自定义图片资源的 `key`，建议采用 leafer://协议 + 类型后缀名，方便识别导出资源。

`value` 支持 base64，原始图像、画布，以及封装的跨平台图像、画布。

`format` 用于强制定义图片类型。

### set ( key: `string`, value: `any` )

设置资源的 `key`, 图像类型必须为 [`ILeaferImage`](/api/interfaces/ILeaferImage.md)。

### get ( key: `string` ): `any`

通过 `key` 获取资源对象。

### remove ( key: `string` )

通过 `key` 移除资源，移除后会自动释放该资源的内存。

### destroy ( )

销毁所有资源。

## 　示例

### 等待图片加载完，再添加到应用中

```ts
// # 等待图片加载完，再添加到应用中
import { Leafer, Image, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const url = '/image/leafer.jpg'

Resource.loadImage(url).then(() => { // [!code hl:5]

    leafer.add(new Image({ url }))

})
```

### 原始图片对象 转 url

```ts
// # 图片 url [原始图片对象转 url]  
import { Leafer, Image, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => { // 加载原始图片对象（跨平台） [!code hl:7]

    const { url } = Resource.setImage('leafer://test1.jpg', img) // 原始图片对象 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test1.jpg

})
```

### 原始 canvas 对象转 url

```ts
// # 图片 url [原始 canvas 对象转 url]
import { Leafer, Image, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => {

    const canvas = document.createElement('canvas') // 原始画布 // [!code hl:8]
    canvas.width = img.width
    canvas.height = img.height
    canvas.getContext('2d').drawImage(img, 0, 0)

    const { url } = Resource.setImage('leafer://test2.jpg', canvas) // 原始canvas 对象 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test2.jpg

})
```

### 跨平台 LeaferCanvas 对象转 url

```ts
// # 图片 url [跨平台 LeaferCanvas 对象转 url] 
import { Leafer, Image, LeaferCanvas, Platform, Resource } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Platform.origin.loadImage('/image/leafer.jpg').then((img) => {

    const leaferCanvas = new LeaferCanvas({ width: img.width, height: img.height }) // LeaferCanvas 跨平台画布 // [!code hl:6]
    leaferCanvas.drawImage(img, 0, 0)

    const { url } = Resource.setImage('leafer://test3.jpg', leaferCanvas) // LeaferCanvas 转为 自定义资源符

    leafer.add(new Image({ url })) // url = leafer://test3.jpg

})
```
