# @leafer-ui/worker

### [web 版](/guide/install/ui/start.md) &nbsp; &nbsp; worker 版 &nbsp; &nbsp; [node 版](/guide/install/ui/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/ui/miniapp/start.md)

##

在 Web Worker 后台多线程环境中运行，不能操作 DOM。

Web 版和 Worker 版可以在同一个项目中共存，按需搭配使用。

## 安装

::: code-group

```sh [npm]
npm install @leafer-ui/worker
```

```sh [pnpm]
pnpm add @leafer-ui/worker
```

```sh [yarn]
yarn add @leafer-ui/worker
```

```sh [bun]
bun add @leafer-ui/worker
```

:::

#### 或通过 importScripts 引入

通过全局变量 LeaferUI 访问内部功能。

::: code-group

```js [worker.min.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.8.0/dist/worker.min.js')
```

```js [worker.js]
importScripts('https://unpkg.com/@leafer-ui/worker@1.8.0/dist/worker.js')
```

:::

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 体验

通过 Worker 创建一张包含矩形的画布，并在主线程生成图片显示。

::: code-group

```js
const worker = new Worker('./worker.js') // 相对当前运行的根目录

worker.onmessage = (e) => { // 通过worker生成一张图片进行显示
    const image = new Image()
    image.src = e.data
    document.body.appendChild(image)
}
```

```js
// 你也可以使用npm包模式，编译成js文件供worker调用
importScripts(
  'https://unpkg.com/@leafer-ui/worker@1.8.0/dist/worker.min.js'
)

const { Leafer, Rect } = LeaferUI

const leafer = new Leafer({ width: 800, height: 600 })
leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

leafer.export('jpg').then((result) => {
  self.postMessage(result.data)
})

```

:::
