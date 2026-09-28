// #Linker [创建连线点，自动吸附方向、偏移距离]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Rect.one({ id: 'rect1', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
const rect2 = Rect.one({ id: 'rect2', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 300)
const rect3 = Rect.one({ id: 'rect3', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 200)

app.tree.add(rect1)
app.tree.add(rect2)
app.tree.add(rect3)

const linker = new Linker({
    startPoint: { id: 'rect1' },
    endPoint: { id: 'rect3' },
    endArrow: 'arrow',
    stroke: '#836DFF',
    strokeWidth: 2,
})

app.tree.add(linker)

setTimeout(() => {

    // 创建连线点，自动吸附方向 // [!code hl:4]
    console.log(linker.createStartPoint({ x: 400, y: 380 }, rect2, {
        snapRadius: 10 // 吸附到方向点上之后，如果吸附距离超过这个吸附半径（相对元素的Box坐标系），连接点对象会自动增加 offset: {x,y}
    }))

}, 2000)

