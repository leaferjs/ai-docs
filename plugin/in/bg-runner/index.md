<script setup>
import Case from '/component/Case.vue'
</script>

# BackgroundRunner

后台运行插件，切换浏览器 tab 标签页后，后台仍可持续渲染动画。

支持禁用、设置最大渲染帧率。

## 更新日志

开源前的最后版本为 v1.0.1，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 bg-runner 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/bg-runner)。

::: code-group

```sh [npm]
npm install @leafer-in/bg-runner
```

```sh [pnpm]
pnpm add @leafer-in/bg-runner
```

```sh [yarn]
yarn add @leafer-in/bg-runner
```

```sh [bun]
bun add @leafer-in/bg-runner
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.bgRunner 访问插件内部功能。

::: code-group

```html [bg-runner.min]
<script src="https://unpkg.com/@leafer-in/bg-runner@2.3.1/dist/bg-runner.min.js"></script>
<script>
  const { BackgroundRunner } = LeaferIN.bgRunner
</script>
```

```html [bg-runner]
<script src="https://unpkg.com/@leafer-in/bg-runner@2.3.1/dist/bg-runner.js"></script>
<script>
  const { BackgroundRunner } = LeaferIN.bgRunner
</script>
```

:::

## Electron 中要做到最小化后继续运行，需要确保

不启用 renderer backgrounding

```ts
const { app, BrowserWindow } = require('electron')

app.commandLine.appendSwitch('disable-renderer-backgrounding')
app.commandLine.appendSwitch('disable-background-timer-throttling')
app.commandLine.appendSwitch('disable-backgrounding-occluded-windows')
```

不启用 Chromium 的 background throttling

```ts
const { BrowserWindow } = require('electron')

const win = new BrowserWindow({
  width: 800,
  height: 600,
  webPreferences: {
    backgroundThrottling: false, // 🔥 关键
  },
})
```

## 示例

### 切换浏览器 tab 标签页后，后台仍持续渲染动画

```ts
// #后台运行 [切换浏览器tab标签页后，后台仍持续渲染动画]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 
import '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})
```

### 控制最大渲染帧

```ts
// #后台运行 [控制最大渲染帧]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 
import { BackgroundRunner } from '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})

BackgroundRunner.maxFPS = 10 // 控制最大渲染帧，默认为60帧  // [!code hl]
```

### 禁用后台渲染

```ts
// #后台运行 [禁用后台渲染]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件
import { BackgroundRunner } from '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})

BackgroundRunner.disabled = true // 禁用后台渲染  // [!code hl]
```
