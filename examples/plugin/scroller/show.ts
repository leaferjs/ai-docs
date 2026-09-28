// #Box滚动条 [保持显示]
import { Leafer, Rect, Box } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/state' // 导入交互状态插件 (可选)
import '@leafer-in/animate' // 导入动画插件 (可选)

import '@leafer-in/scroller' // 导入Box滚动条插件  // [!code hl]

const leafer = new Leafer({
    view: window,
    fill: '#333',
})

const box = Box.one({
    fill: 'white',
    overflow: 'scroll',
    scrollConfig: { hideOnActionEnd: false }, // 离开滚动区域后，不自动隐藏滚动条 //[!code hl] 
    children: [
        Rect.one({ draggable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ draggable: true, fill: '#32cd79' }, 300, 550),
        Rect.one({ draggable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 200, 1000)
    ]
}, 100, 100, 500, 600)

leafer.add(box)
