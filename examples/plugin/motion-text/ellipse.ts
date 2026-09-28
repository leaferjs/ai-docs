// #Motion Text [环绕圆形]
import { Group, App, Ellipse, Text } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/text-editor' // 导入文本编辑插件 
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/motion-path' // 导入运动路径插件

import '@leafer-in/motion-text' // 导入运动文本插件 // [!code hl]

const app = new App({ view: window, editor: {} })

const group = new Group({ hitChildren: false, editable: true })

const path = new Ellipse({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: "#32cd79",
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    editable: true
})

const text = new Text({
    text: 'Welcome to PxGrow',
    fontSize: 20,
    fill: '#32cd79',
    editable: true,
    motion: { type: 'percent', value: 0.75 }, // 运动位置
    motionText: true, // 设为运动文本，沿着路径排列 // [!code hl]
    motionAround: 'bottom'  // 路径在文本下方
})

group.add(path)
group.add(text)

app.tree.add(group)