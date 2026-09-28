<script setup>
import Case from '/component/Case.vue'
</script>

# Transition

Transition —— 轻松实现渐变颜色过渡动画。

## 更新日志

开源前的最后版本为 v1.0.0，[查看更新日志](./update.md)。

## 📦 安装插件（已开源）

需要安装 transition 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/transition)。

::: code-group

```sh [npm]
npm install @leafer-in/transition
```

```sh [pnpm]
pnpm add @leafer-in/transition
```

```sh [yarn]
yarn add @leafer-in/transition
```

```sh [bun]
bun add @leafer-in/transition
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.transition 访问插件内部功能。

::: code-group

```html [transition.min]
<script src="https://unpkg.com/@leafer-in/transition@2.3.0/dist/transition.min.js"></script>
<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

```html [transition]
<script src="https://unpkg.com/@leafer-in/transition@2.3.0/dist/transition.js"></script>
<script>
  const { Transition, TransitionData } = LeaferIN.transition
</script>
```

:::

## 示例

### 带渐变动画的连线元素

```ts
// #Transition [带渐变动画的连线元素]
import { App, Box, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import '@leafer-in/transition' // 导入渐变颜色过渡插件  // [!code hl:2]
import { Linker } from '@leafer-in/linker' // 导入连线插件 

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1 })] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300, 100, 100)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [new Ellipse({ x: 8, y: 20, width: 8, height: 8, around: 'center', fill: '#836DFF' })] }, 400, 200, 100, 100)

const linker1 = new Linker({  // 类似 AI 工作流连线，位于底部 
    startPoint: { id: 'rect1', point: 'right' },
    endPoint: { id: 'rect3', direction: 'left', point: 'top-left', offset: { y: 20 } },
    stroke: {
        type: 'linear',
        from: { type: 'percent', x: -1, y: 0.5 },
        to: { type: 'percent', x: 0, y: 0.5 },
        stops: ['#836DFF', '#FEB027', '#836DFF']
    },
    strokeWidth: 2,
    animation: { // 渐变动画 // [!code hl:14]
        style: {
            stroke: {
                type: 'linear',
                from: { type: 'percent', x: 1, y: 0.5 },
                to: { type: 'percent', x: 2, y: 0.5 },
                stops: ['#836DFF', '#FEB027', '#836DFF']
            }
        },
        easing: 'linear',
        duration: 1,
        // reverse: true, // 反向流动
        loop: true,
    }
})

app.tree.add(linker1)


app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)


const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    stroke: '#ff4c4c',
    strokeWidth: 2,
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect3' },
    endArrow: 'angle'
})

app.tree.add(linker2)
```

### 带渐变动画的边框

```ts
// #Transition [带渐变动画的边框]
import { App, Box, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import '@leafer-in/transition' // 导入渐变颜色过渡插件  // [!code hl:2]
import { Linker } from '@leafer-in/linker' // 导入连线插件 

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1 })] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300, 100, 100)
const rect3 = Box.one({
    id: 'rect3', editable: true, fill: '#666', cornerRadius: [0, 20, 20, 0], children: [new Ellipse({ x: 8, y: 20, width: 8, height: 8, around: 'center', fill: '#836DFF' })],
    stroke: {
        type: 'angular',
        rotation: 0,
        stops: ['#836DFF', '#836DFF', '#FEB027', '#836DFF', '#836DFF']
    },
    strokeWidth: 2,
    animation: { // 旋转渐变动画 // [!code hl:13]
        style: {
            stroke: {
                type: 'angular',
                rotation: 360, // 依赖 LeaferJS v2.3.0
                stops: ['#836DFF', '#836DFF', 'white', '#836DFF', '#836DFF']
            }
        },
        easing: 'linear',
        duration: 2,
        // reverse: true, // 反向流动
        loop: true,
    }
}, 400, 200, 100, 150)


const linker1 = new Linker({  // 类似 AI 工作流连线，位于底部 
    startPoint: { id: 'rect1', point: 'right' },
    endPoint: { id: 'rect3', direction: 'left', point: 'top-left', offset: { y: 20 } },
    stroke: {
        type: 'linear',
        from: { type: 'percent', x: -1, y: 0.5 },
        to: { type: 'percent', x: 0, y: 0.5 },
        stops: ['#836DFF', '#FEB027', '#836DFF']
    },
    strokeWidth: 2,
    animation: { // 渐变动画 // [!code hl:14]
        style: {
            stroke: {
                type: 'linear',
                from: { type: 'percent', x: 1, y: 0.5 },
                to: { type: 'percent', x: 2, y: 0.5 },
                stops: ['#836DFF', '#FEB027', '#836DFF']
            }
        },
        easing: 'linear',
        duration: 1,
        // reverse: true, // 反向流动
        loop: true,
    }
})

app.tree.add(linker1)


app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)


const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    stroke: '#836DFF',
    strokeWidth: 2,
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect3' },
    endArrow: 'angle'
})

app.tree.add(linker2)
```

### hover时渐变颜色过渡

```ts
// #Transition [hover时渐变颜色过渡]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/state' // 导入交互状态插件
import '@leafer-in/animate' // 导入动画插件
import '@leafer-in/transition' // 导入渐变颜色过渡插件

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: {
        type: 'linear',
        stops: ['#FEB027', '#79CB4D']
    },
    hoverStyle: {
        fill: {
            type: 'radial',
            from: 'top',
            stops: ['#FF4B4B', '#FEB027']
        }
    },
    transition: 1
})

leafer.add(rect)
```
