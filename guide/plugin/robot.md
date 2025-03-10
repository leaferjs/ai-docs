<script setup>
import Case from '/component/Case.vue'
</script>

# Robot 游戏元素

Robot 元素类似于游戏中的精灵元素，集成了帧播放和动作预设功能，可以快速制作出具有行走和攻击动作的游戏角色。

::: tip 注意事项
需安装 [Robot 插件](/plugin/in/robot/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)（已集成 Robot 插件）。

:::

可提供图片列表，或一张、多张包含游戏动作的雪碧图，这些动作将会被自动编号，如下所示：

![雪碧图](/image/arrows-numbers.png)

<case name="Robot" editor=false></case>

按住、抬起不同的方向键试试～

```ts
// #创建 Robot 游戏元素
import { Leafer, KeyEvent } from 'leafer-ui'
import { Robot } from '@leafer-in/robot'

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

## 下一步

### [自动布局](/guide/plugin/flow.md)
