// #position 布局 [在指定id元素的居中位置显示]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 500,
    height: 300
})

const rect = new Rect({
    position: { id: 'rect2', align: 'bottom' }, // 在指定 rect2 元素的居中位置显示，会自动修改元素的 x、y 属性 // [!code hl] 
    fill: '#32cd79',
    zIndex: 1
})

leafer.add(frame)
frame.add(rect)

const rect2 = new Rect({
    id: 'rect2',
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#FEB027',
    cornerRadius: [0, 20, 20, 0],
    draggable: true
})

frame.add(rect2)