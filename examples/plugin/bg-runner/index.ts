// #后台运行 [切换浏览器tab标签页后，后台仍持续渲染动画]
import { Leafer, Rect, RenderEvent, Text } from 'leafer-ui'
import '@leafer-in/animate' // 导入动画插件 
import '@leafer-in/bg-runner' // 导入后台运行插件  // [!code hl]

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: '#32cd79',
    animation: {
        style: { x: 500, cornerRadius: 50, fill: '#ffcd00' }, // style keyframe
        duration: 1,
        swing: true // 摇摆循环播放
    }
})

leafer.add(rect)

const text = new Text({ x: 100, y: 200, fontSize: 50, fill: 'gray' })
leafer.add(text)
leafer.add(new Text({ x: 10, y: 280, fontSize: 20, fill: 'gray', text: '切换浏览器tab标签页，查看渲染次数变化' }))

let count = 1

// 切换浏览器tab标签页，查看渲染次数变化
leafer.on(RenderEvent.START, () => {
    text.text = count++
})