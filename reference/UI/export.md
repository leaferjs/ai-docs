# 导出

导出内容。

::: tip 注意事项
需安装 [导出元素插件](/plugin/in/export/index.md) 才能使用，或直接安装 [leafer-editor](/guide/install/editor/start.md)、node 版（已集成导出元素插件）。
:::

## 关键方法

### export ( )

export( name: [`IExportFileType`](/api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](/api/interfaces/IExportOptions.md) | `number` | `boolean`): `Promise`<[`IExportResult`](/api/interfaces/IExportResult.md)>

异步导出方法，会等待视图内所有网络资源都加载完再进行导出图片。

支持导出单个元素、画面截图， 默认导出为 1 倍图（元素逻辑尺寸）。

name 为文件名时表示保存文件。

options 为数字时表示图片质量， 为布尔时表示二进制数据 。

:::tip 注意事项
[Leafer](/reference/display/Leafer.md) 引擎默认导出为内容（非画布），想导出画布需要增加 `screenshot` 截图参数。

<del>单独导出 [App](/reference/display/App.md) 实例，只能为画面截图。</del> <badge>v1.8.0 之后不再限制</badge>
:::

```ts
type IExportFileType = 'canvas' | 'json' | 'jpg' | 'png' | 'webp' ｜ 'bmp' // 后续会支持svg、pdf, bmp 格式需平台自身支持
```

```ts
interface IExportOptions {
  quality?: number // 设置 jpg / webp 的图片质量
  blob?: boolean // 导出二进制数据

  fill?: string // 设置一个默认背景填充色

  scale?: number | IPointData // 缩放比例，默认为1，可用于生成小尺寸的缩略图
  size?: number | IOptionSizeData // 导出宽高（单独设置宽或高，另一边可自适应原始比例，同时设置宽高会拉伸），自动换算出缩放比例 scale
  padding?: number | number[] // 设置内边距, 支持数字或数组 [top, right, bottom, left]

  pixelRatio?: number // 像素比，默认为1倍图，可导出适配高清屏的2倍图、3倍图...
  smooth?: boolean // 设置画布的平滑绘制属性，默认同当前leafer画布
  contextSettings?: ICanvasRenderingContext2DSettings // 原生画布的 context 设置, 默认同当前leafer画布

  clip?: IBoundsData // 相对元素渲染区域进行裁剪，需指定裁剪区域

  slice?: boolean // 是否为切片元素，将导出切片bounds内的画布上所有内容
  trim?: boolean // 是否裁剪透明像素，默认false
  screenshot?: IBoundsData | boolean // 以当前视图比例导出截图，可指定一个截图区域

  json?: IJSONOptions // json导出选项

  relative?: ILocationType | IUI // 相对坐标系 或父元素 的缩放比例导出，默认Leafer为 inner, 其他元素为 local，可以单独设置: inner |  local | world
  onCanvas?: IExportOnCanvasFunction // onCanvas(canvas => { }) 用于叠加绘制自定义内容
}

interface IOptionSizeData {
  width?: number // 宽度，当单独设置宽度时，高度自适应原始比例
  height?: number // 高度，当单独设置高度时，宽度自适应原始比例
}

interface IJSONOptions {
  matrix?: boolean
}

interface IExportOnCanvasFunction {
  (canvas: ILeaferCanvas): void
}

interface ICanvasRenderingContext2DSettings {
  alpha?: boolean // 画布是否包含alpha通道， 默认为false
  colorSpace?: 'display-p3' | 'srgb' // 颜色空间， 默认为srgb
  desynchronized?: boolean // 低延时渲染，默认为false
  willReadFrequently?: boolean // 用于 getImageData() 加速， 默认为false
}
```

```ts
interface IExportResult {
  data: ILeaferCanvas | IBlob | string | boolean // data为无时表示导出失败

  width?: number // 图片宽度(实际像素)
  height?: number // 图片高度(实际像素)

  renderBounds?: IBoundsData // 相对父元素的导出bounds，可用于切图定位还原
  trimBounds?: IBoundsData // 裁剪透明像素后的bounds，相对导出bounds，可用于切图定位还原
}
```

### syncExport ( )

syncExport( name: [`IExportFileType`](/api/modules.md#iexportimagetype) | `string`, options?: [`IExportOptions`](/api/interfaces/IExportOptions.md) | `number`): [`IExportResult`](/api/interfaces/IExportResult.md)

同步导出方法，参数同 export() 方法一致, 仅支持图片已经加载成功的情况，不支持同步导出二进制数据。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 导出元素为图片

```ts
// #导出图片 [导出文件]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('test.png') // 传文件名参数，浏览器版会直接下载文件，Node.js 版会保存到指定路径 // [!code hl:3]

// const result = await rect.export('./home/test.png')
```

### 导出高清图

```ts
// #导出图片 [导出高清图]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('HD.png', { pixelRatio: 2 }) // 导出2倍高清图 [!code hl:3]

// const result = await rect.export('HD.png', { pixelRatio: 2 }}
```

### 导出 Base64 编码数据

默认图片质量为 0.92。

```ts
// #导出图片 [导出 Base64 编码数据]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('jpg').then(result => { // 可设置图片质量 export('jpg', 0.92), 默认为0.92 // [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg')
```

手动设置图片质量。

```ts
// #导出图片 [导出二进制数据]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('jpg', 0.5).then(result => { // 第2个参数为图片质量，可选参数（默认为0.92） [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('jpg', {quality: 0.5})
```

### 同步导出 Base64 编码数据

```ts
// #导出图片 [同步导出 Base64 编码数据]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

// 同步导出图片，前提：需确认异步加载的图片已经完成，才能同步导出 [!code hl:3]
const result = rect.syncExport('jpg') // 可设置图片质量 syncExport('jpg', 0.92), 默认为0.92
console.log(result.data)
```

### 导出二进制数据

```ts
// #导出图片 [导出二进制数据]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('png', true).then(result => { // 第2个参数为true表示导出二进制 [!code hl:5]
    console.log(result.data)
})

// const result = await rect.export('png', { blob: true })
```

### 导出时绘制水印

```ts
// #导出图片 [绘制水印]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('test.png', {
    pixelRatio: 2,
    onCanvas(canvas) {  // 通过onCanvas钩子函数绘制水印 // [!code hl:10]
        const {
            context,  // CanvasRenderingContext2D，原生canvas上下文对象
            pixelRatio, // 像素比
            width, // 逻辑宽度， 获取实际像素宽度请使用 pixelWidth
            height // 逻辑高度， 获取实际像素高度请使用 pixelHeight
        } = canvas
        context.scale(pixelRatio, pixelRatio) // 抹平像素比差异
        context.fillText('绘制水印', width - 60, height - 20)
    }
})
```

### 导出为画布

```ts
// #导出图片 [导出画布]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
leafer.add(rect)

rect.export('canvas').then(result => { // [!code hl:11]
    const leaferCanvas = result.data
    const canvas = leaferCanvas.view
    const context = leaferCanvas.context

    console.log('canvas', canvas) // HTMLCanvasElement
    console.log('2d context', context) // CanvasRenderingContext2D

    // 有和rect.export() 一样的导出函数，导出结果直接是一个data
    leaferCanvas.export('a.jpg', 0.9) // options只能设置图像相关的参数
})

// const result = await rect.export('canvas')
```

### 裁剪元素后导出

相对元素渲染区域进行裁剪。

```ts
// #导出图片 [裁剪元素]
import { Leafer, Ellipse } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: "#32cd79"
})

leafer.add(ellipse)

ellipse.export('clip.jpg', {
    clip: { x: 50, y: 50, width: 50, height: 50 }  // 对导出元素进行裁剪 // [!code hl]
})
```

### 导出整个画布

将当前引擎画布进行截图导出。

```ts
// #导出图片 [画面截图]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('screenshot.png', { screenshot: true }) // 将当前引擎画布进行截图导出 [!code hl:3]

// const result = await leafer.export('screenshot.png', {screenshot: true}
```

### 添加一个自定义异步任务

导出图片时会等待此任务执行完再导出

```ts
// #添加一个自定义异步任务（导出图片时会等待此任务执行完再导出）
import { Resource } from 'leafer-ui'

async function doSomething() {
    // 执行异步任务
}

// 添加异步任务
Resource.tasker.add(async () => await doSomething())
```
