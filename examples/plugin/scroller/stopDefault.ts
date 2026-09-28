// #Box滚动条 [与视图滚动条共存时，阻止默认视图滚动]
import { App, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import { ScrollBar } from '@leafer-in/scroll' // 导入视图滚动条 (可选，后期会被 scroller 插件替代)
import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]


const app = new App({
    view: window,
    fill: '#333',
    tree: { type: 'document' },
    sky: {}
})

new ScrollBar(app)

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { stopDefault: true }, //  滚动元素时，阻止默认视图滚动 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

app.tree.add(box)


app.tree.add(Rect.one({ draggable: true, fill: '#32cd79' }, 300, 2000))
