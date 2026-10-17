// #Video [监听视频加载失败事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Video } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const video = new Video({
    url: '/video/forest.mp4',
    pixelRatio: 2,
    editable: true
})

app.tree.add(video)

video.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})