// #独立边框 [创建独立边框的 Rect 元素]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/stroke-sides' // 导入独立边框插件

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: '#32cd79',
    stroke: '#000',
    cornerRadius: 20,
    strokeWidth: [5, 0, 5, 10], // [top, right, bottom, left]
    editable: true
})

app.tree.add(rect)