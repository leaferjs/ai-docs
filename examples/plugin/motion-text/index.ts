// #Motion Text [运动文本]
import { Group, App, Line, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件
import '@leafer-in/motion-path' // 导入运动路径插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/motion-text' // 导入运动文本插件 

const app = new App({ view: window, tree: { type: 'viewport' } })

const group = new Group()

const path = new Line({
    x: 100,
    y: 100,
    motionPath: true, // 设置为运动路径，该 Group 内的其他元素都可以沿此路径运动
    points: [0, 90, 100, 60, 200, 80, 300, 40, 375, 50, 450, 10, 550, 90, 550, 90],
    curve: 0.4,
    fill: '#32cd79',
})


const text = new Text({
    fill: '#32cd79',
    text: 'Welcome to LeaferJS',
    letterSpacing: 1,
    motion: 0,
    motionText: true, // 设为运动文本，沿着路径排列 
    motionAround: 'bottom',  // 路径在文本下方
    animation: { // 沿 path 运动至 100%
        style: { motion: { type: "percent", value: 1 } },
        duration: 3,
        easing: 'linear',
        loop: true
    }
})

group.add(path)
group.add(text)

app.tree.add(group)