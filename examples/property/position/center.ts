// #position 布局 [在父级的居中位置显示]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: 'center', // 在父级的居中位置显示，会自动修改元素的 x、y 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)