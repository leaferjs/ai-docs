// #Box滚动条 [与视图滚动条共存]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    move: { holdSpaceKey: true },
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',  // 滚动元素到顶部或底部时，才允许滚动视图（与html中的div滚动逻辑一致）  //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))
