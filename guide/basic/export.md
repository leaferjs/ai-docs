<script setup>
import Case from '/component/Case.vue'
</script>

# 导出元素

将元素导出为图片、JSON。

::: tip 注意事项
需安装 [导出元素插件](/plugin/in/export/index.md) 才能使用，或直接安装 [leafer-editor](/guide/install/editor/start.md)、node 版（已集成导出元素插件）。
:::

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

### 导出整个画布

将当前应用画布进行截图导出。

```ts
// #导出图片 [画面截图]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/export' // 引入导出元素插件 // [!code hl] 

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('screenshot.png', { screenshot: true }) // 将当前应用画布进行截图导出 [!code hl:3]

// const result = await leafer.export('screenshot.png', {screenshot: true}
```

### 导出 JSON

```ts
// #导出 JSON
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    draggable: true
})

leafer.add(rect)

const json = leafer.toJSON() // [!code hl:3]

console.log(json) // {"tag":"Leafer","width":1273,"height":877,"pixelRatio":2,"hittable":true,"children":[{"tag":"Rect","x":100,"y":100,"width":100,"height":100,"fill":"#32cd79","draggable":true}]}
```

## 了解元素导出方法

| 名称                                                                     | 描述                                                                                                            |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| 路径                                                                     |                                                                                                                 |
| [getPath()](/reference/UI/getPath.md)                                    | 获取元素的数字路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)）                        |
| [getPathString()](/reference/UI/getPathString.md)                        | 获取元素的字符串路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令） |
| 导出                                                                     |                                                                                                                 |
| [export()](/reference/UI/export.md)                                      | 异步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)           |
| [syncExport()](/reference/UI/export.md#syncexport)                       | 同步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)           |
| [toJSON()](/reference/UI/json.md)                                        | 导出 JSON 对象                                                                                                  |
| [toString()](/reference/UI/json.md#tostring-options-ijsonoptions-string) | 导出 JSON 字符串                                                                                                |

## 恭喜 🎉

你已完成基础知识的学习，接下来带你了解几个 **好玩的插件**，放松一下～

## 下一步

### [动画功能](/guide/plugin/animate.md)

<br/>

### 在前端环境中使用

[Vue](/guide/framework/vue/index.md)

[React](/guide/framework/react/index.md)

### 在服务端渲染中使用

[Nuxt.js](/guide/framework/nuxt/index.md)

[VitePress](/guide/framework/vitepress/index.md)

[Next.js](/guide/framework/next/index.md)

### 组件式开发（社区提供）

[leafer-vue](https://leafer-vue.netlify.app/)
