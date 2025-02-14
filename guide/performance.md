# 体验性能

LeaferJS 可以让你拥有瞬间创建 100 万个图形的能力。经过更细颗粒的代码模块划分，在拥有高性能的同时，我们并没有牺牲掉代码的可维护性，预计将来还会有很大的性能提升空间。

## 创建速度

创建 100 万个可交互的矩形，首屏渲染最快仅需 1.5 秒。

比同类引擎快 10 倍左右。

## 内存占用

创建 100 万个可交互的矩形，仅占用 350M 内存。

比同类引擎节省 10 倍左右的内存。

## 体验代码

下面是可以创建 100 万个矩形的示例代码，可以直接复制使用。建议使用 Chrome 浏览器，通过控制台查看打印信息。

::: code-group

```ts
// #创建百万矩形的性能示例
import { Leafer, Group, Rect, Debug } from 'leafer-ui'

class RectsCase {

    constructor(view: Group, num: number) {

        let group: Group
        const groupSize = 10 * 100 * 1.5
        const column = num > 25 ? 10 : 5

        for (let i = 0; i < num; i++) {
            group = new Group()
            group.x = groupSize * (i % column)
            group.y = groupSize * Math.floor(i / column)
            view.add(group)
            this.createRects(group, 0, 0, `hsl(${i * 3},50%, 50%)`)
        }
    }

    createRects(group: Group, startX: number, startY: number, color: string): void {

        let y: number, rect: Rect

        for (let i = 0; i < 100; i++) {
            if (i % 10 === 0) startX += 10
            y = startY
            for (let j = 0; j < 100; j++) {
                if (j % 10 === 0) y += 10
                rect = new Rect(null)
                rect.x = startX
                rect.y = y
                rect.height = 10
                rect.width = 10
                rect.fill = color
                rect.draggable = true
                group.add(rect)
                y += 12
            }
            startX += 12
        }
    }
}


const startTime = Date.now()


const app = new Leafer({ view: window })

Debug.enable = true
Debug.filter = 'RunTime'

new RectsCase(app, 100) // 100万个


console.log(`创建100万个矩形用时：`, Date.now() - startTime, '毫秒')
```

<<< @/code/performance/million.html

:::

## 下一步

### [快速入门](/guide/basic/leafer.md)
