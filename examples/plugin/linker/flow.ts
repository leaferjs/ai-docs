// #Linker [带流动动画的连线元素]
import { App, Box, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1 })] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300, 100, 100)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [new Ellipse({ x: 8, y: 20, width: 8, height: 8, around: 'center', fill: '#836DFF' })] }, 400, 200, 100, 100)


const linker1 = new Linker({  // 类似 AI 工作流连线，位于底部 
    startPoint: { id: 'rect1', point: 'right' },
    endPoint: { id: 'rect3', direction: 'left', point: 'top-left', offset: { y: 20 } },
    stroke: '#836DFF',
    strokeWidth: 2,
    dashPattern: [10, 10], // 绘制虚线 
    dashOffset: 0,
    animation: { // 虚线动画 // [!code hl:7]
        style: { dashOffset: -20 },
        easing: 'linear',
        duration: 0.5,
        // reverse: true, // 反向流动
        loop: true,
    }
})

app.tree.add(linker1)


app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)


const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect3' },
    endArrow: 'angle',
    stroke: '#ff4c4c',
    strokeWidth: 2
})

app.tree.add(linker2)