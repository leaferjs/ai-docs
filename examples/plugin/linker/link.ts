// #Linker [拖拽创建连线元素]
import { App, Box, DragEvent, Ellipse, LeafList } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件
import '@leafer-in/animate' // 导入动画插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const pointA = new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1, cursor: 'cell', data: { id: 'rect1', point: 'right' } })
const pointB = new Ellipse({ x: 92, y: 50, width: 8, height: 8, around: 'center', fill: '#836DFF', stroke: '#000', strokeWidth: 1, cursor: 'cell', data: { id: 'rect3', point: 'right' } })
const pointC = new Ellipse({ x: 8, y: 30, width: 8, height: 8, around: 'center', fill: '#836DFF', cursor: 'cell', data: { id: 'rect4', point: 'top-left', offset: { y: 30 } } })

const rect1 = Box.one({ id: 'rect1', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [pointA] }, 100, 100, 100, 100)
const rect2 = Box.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20] }, 100, 300)
const rect3 = Box.one({ id: 'rect3', editable: true, fill: '#FFE04B', cornerRadius: [20, 0, 0, 20], children: [pointB] }, 100, 500, 100, 100)
const rect4 = Box.one({ id: 'rect4', editable: true, fill: '#FEB027', cornerRadius: [0, 20, 20, 0], children: [pointC] }, 400, 200, 100, 100)

app.tree.add([rect1, rect2, rect3, rect4])

const linker2 = new Linker({  // 带箭头的连线，位于顶部 
    startPoint: { id: 'rect2' }, // 箭头自动方向
    endPoint: { id: 'rect4' },
    stroke: '#ff4c4c',
    strokeWidth: 2,
    endArrow: 'angle'
})

app.tree.add(linker2)


// 拖拽创建连线  // [!code hl:33]

listenAdd(pointA)
listenAdd(pointB)
listenAdd(pointC)

function listenAdd(point: Ellipse): void {

    let linker: Linker

    point.on(DragEvent.START, (e: DragEvent) => {
        e.stop()
        linker = new Linker({
            startPoint: { ...point.data },
            stroke: '#836DFF',
            strokeWidth: 2,
        })
        app.tree.add(linker)
    })

    point.on(DragEvent.DRAG, (e: DragEvent) => {
        // 可以增加连接判断逻辑
        const pick = app.tree.pick(e, { exclude: new LeafList([linker, point.parent]) }) // 手动pick元素
        const target = pick && pick.path.list.find(item => item.editable && item.id) // 查找可以连接的元素
        linker.endPoint = linker.createEndPoint(e, target, {
            // 吸附模式
            // mode: 'edge' // 自动吸附到元素Box包围盒边缘，默认模式
            // mode: 'four' // 自动吸附到元素Box包围盒上的4个方向
            // mode: 'auto' // 自动吸附到元素Box包围盒上，拖拽元素会自定更新最佳方向
            // mode: 'free' // 可以吸附到元素内部
        })
    })

}
