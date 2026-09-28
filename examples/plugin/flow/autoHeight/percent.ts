// #自动布局 - 自动宽高 [使用百分比]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件

const leafer = new Leafer({ view: window })

const flow = new Flow({
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({
            autoWidth: { type: 'percent', value: 0.8 }, // 80% 父元素宽度
            autoHeight: { type: 'percent', value: 0.8 }, // 80% 父元素高度
            fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }]
        })
    ],
})

leafer.add(flow)