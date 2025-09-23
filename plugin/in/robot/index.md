<script setup>
import Case from '/component/Case.vue'
</script>

# Robot 元素

机器人元素，类似游戏中的精灵，集成了帧播放和动作预设功能，可以快速制作出具有行走和攻击动作的游戏角色。

可提供图片列表，或一张、多张包含游戏动作的雪碧图，这些动作将会被自动编号，如下所示：

![雪碧图](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

按住、抬起不同的方向键试试～

::: tip 继承
Robot &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

## 安装插件

需要安装 robot 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/robot)。

::: code-group

```sh [npm]
npm install @leafer-in/robot
```

```sh [pnpm]
pnpm add @leafer-in/robot
```

```sh [yarn]
yarn add @leafer-in/robot
```

```sh [bun]
bun add @leafer-in/robot
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.robot 访问插件内部功能。

::: code-group

```html [robot.min]
<script src="https://unpkg.com/@leafer-in/robot@1.9.8/dist/robot.min.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

```html [robot]
<script src="https://unpkg.com/@leafer-in/robot@1.9.8/dist/robot.js"></script>
<script>
  const { Robot } = LeaferIN.robot
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 关键属性

### robot: [`IRobotKeyframe`](/api/interfaces/IRobotKeyframe.md) | [`IRobotKeyframe`](/api/interfaces/IRobotKeyframe.md) []

机器人的图片序列帧，按顺序加载，从 0 开始对图片帧进行编号。

可以为图片列表，或一张、多张不同尺寸的雪碧图，可通过 offset 与 size 定位图片。

```ts
interface IRobotKeyframe {
  url: string // 图片

  offset?: IPointData // 定位坐标，从此处开始从左往右、自上而下的读取多帧图片， 默认为 0,0
  size?: number | ISizeData // 每一帧的尺寸，非雪碧图的独立图片可不设置
  total?: number // 一张图上有多帧时，必须设置读取总数，否则会按1帧处理
}
```

### actions: [`IRobotActions`](/api/interfaces/IRobotActions.md)

预设动作列表， 一个键值对象（通过图片帧编号进行组合）。

动作为数组编号时，将按 FPS 帧率自动循环播放。

```ts
interface IRobotActions {
  [name: string]: number | number[] | IRobotAnimation // 图片帧编号（默认从0开始）
}

interface IRobotAnimation {
  keyframes: number[] // 图片帧编号
  loop?: boolean | number
  FPS?: number
}
```

### action: `string`

元素当前的动作， 动作名为 actions 的键名， 默认为空。

### now: `number`

当前播放的图片帧编号

### FPS: `number`

每秒播放的帧率，默认为 12， 最大 60。

### loop: `boolean`

是否循环播放动作中的图片帧。

<!-- ## 继承元素

### [UI](/reference/display/UI.md) -->

<!-- ## API

### [Robot](/api/classes/Robot.md) -->

## 示例

<case name="Robot" editor=false></case>

### 可交互的游戏箭头

```ts
// #创建 Robot 游戏元素
import { Leafer, KeyEvent } from 'leafer-ui'
import { Robot } from '@leafer-in/robot' // 导入 robot 插件  // [!code hl] 

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
    action: 'arrowRight' // 设置动作：动态向右的箭头
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

<!-- 箭头的雪碧图

![雪碧图](/image/arrows.png) -->
