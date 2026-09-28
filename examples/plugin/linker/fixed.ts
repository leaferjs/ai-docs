// #Linker [连线元素固定线宽不随视图放大]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/find' // 导入查找元素插件
import '@leafer-in/arrow' // 导入箭头插件

import { Linker } from '@leafer-in/linker' // 导入连线插件  // [!code hl]

const app = new App({ view: window, editor: {} })

app.tree.cacheId = true // 创建时缓存元素id, 加快查找id的速度

const rect1 = Rect.one({ id: 'rect1', editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100)
const rect2 = Rect.one({ id: 'rect2', editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)

app.tree.add(rect1)
app.tree.add(rect2)

const linker = new Linker({
    startPoint: { id: 'rect1' }, // 箭头自动方向
    endPoint: { id: 'rect2' },
    endArrow: 'angle',
    stroke: '#836DFF',
    strokeWidth: 2,
    strokeScaleFixed: 'zoom-in', // 固定线宽，不随视图放大 // [!code hl]
})

app.tree.add(linker)