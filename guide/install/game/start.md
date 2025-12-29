<script setup>
import Case from '/component/Case.vue'
</script>

# leafer-game

在 [leafer-ui](/guide/install/ui/start.md) 基础上，引入了 [Robot](/plugin/in/robot/index.md) 、[交互状态](/plugin/in/state/index.md) 、 [动画](/plugin/in/animate/index.md)、[运动路径](/plugin/in/motion-path/index.md)、[查找元素](/plugin/in/find/index.md) 插件，适用于小游戏场景。

##

### web 版 &nbsp; &nbsp; [worker 版](/guide/install/game/worker/start.md) &nbsp; &nbsp; [node 版](/guide/install/game/node/start.md) &nbsp; &nbsp; [小程序版](/guide/install/game/miniapp/start.md)

##

在 Web 环境中运行，已适配移动端。

## 安装

::: code-group

```sh [npm]
npm install leafer-game
```

```sh [pnpm]
pnpm add leafer-game
```

```sh [yarn]
yarn add leafer-game
```

```sh [bun]
bun add leafer-game
```

:::

同时我们提供了 [Playground 环境](/guide/runtime.md) 和 [create-leafer 命令行工具](/create/leafer.md)，方便大家直接体验官网示例。

#### 或通过 script 标签引入

::: code-group

```html [web.min]
<script src="https://unpkg.com/leafer-game@1.12.2/dist/web.min.js"></script>
<script>
  const { Leafer, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [web]
<script src="https://unpkg.com/leafer-game@1.12.2/dist/web.js"></script>
<script>
  const { Leafer, Robot, Animate } = LeaferUI
  // ...
</script>
```

```html [module.min]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-game@1.12.2/dist/web.module.min.js'
  // ...
</script>
```

```html [module]
<script type="module">
  import {
    Leafer,
    Editor,
    Arrow,
  } from 'https://unpkg.com/leafer-game@1.12.2/dist/web.module.js'
  // ...
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 更新

了解如何 [快速更新版本](/guide/update.md)。

## 使用

使用方式、全局变量和 [leafer-ui](/guide/install/ui/start.md) 一致, 只需改下包名，即可运行官网示例代码。

## create-leafer 命令行工具

### 直接创建 [Vue + Leafer 项目](/create/leafer.md)

### 在项目中 [快速集成 Leafer](/create/leafer.md)

### 在项目中 [安装、升级插件](/create/leafer.md)

## Playground 环境

### 想直接运行官网示例代码，可以使用 [Playground 环境](/guide/runtime.md) 。

## 开始体验

<case name="Robot" editor=false></case>

试试下面的游戏示例，不用再单独引入插件包。

按住方向键，移动箭头～

```ts
// #创建 Robot 游戏元素 [leafer-game]
import { Leafer, Robot, KeyEvent } from 'leafer-game'

const leafer = new Leafer({ view: window })

const robot = new Robot({
    robot: { url: '/image/arrows.png', size: { width: 100, height: 100 }, total: 20 },
    actions: {  // 预设游戏动作（通过动作帧）
        up: 0, // 静止向上的箭头（ 编号为0的动作帧）
        right: 5,
        down: 10,
        left: 15,
        arrowUp: [0, 1, 2, 3, 4], // 动态向上的箭头（循环播放编号为 1-4 的动作帧）
        arrowRight: [5, 6, 7, 8, 9],
        arrowDown: [10, 11, 12, 13, 14],
        arrowLeft: [15, 16, 17, 18, 19]
    },
    action: 'right' // 设置动作：静止向右的箭头
})

leafer.add(robot)

// 监听方向键进行交互

let speed = 5

leafer.on(KeyEvent.DOWN, (e: KeyEvent) => {
    speed++
    switch (e.code) { // 动态的方向箭头
        case 'ArrowUp':
            robot.action = 'arrowUp'
            robot.y -= speed
            break
        case 'ArrowDown':
            robot.action = 'arrowDown'
            robot.y += speed
            break
        case 'ArrowLeft':
            robot.action = 'arrowLeft'
            robot.x -= speed
            break
        case 'ArrowRight':
            robot.action = 'arrowRight'
            robot.x += speed
            break
    }
})

leafer.on(KeyEvent.UP, (e: KeyEvent) => {
    speed = 5
    switch (e.code) { // 静态的方向箭头
        case 'ArrowUp':
            robot.action = 'up'
            break
        case 'ArrowDown':
            robot.action = 'down'
            break
        case 'ArrowLeft':
            robot.action = 'left'
            break
        case 'ArrowRight':
            robot.action = 'right'
            break
    }
})
```
