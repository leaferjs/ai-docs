// #Video [在 Polygon 中使用 Video]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PaintVideo } from '@leafer-in/video' // 导入视频插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({
    sides: 6,
    fill: { // [!code hl:5]
        type: 'video',
        url: '/video/forest.mp4',
        mode: 'stretch',
    },
    pixelRatio: 2,
    editable: true
})

app.tree.add(polygon)

const video = new PaintVideo(polygon)

// 点击 video 暂停/播放视频 // [!code hl:17]
polygon.on('click', () => {

    video.togglePlay()

    // 获取、设置视频相关参数，后续会做一个可选的视频播放控制条插件

    // video.duration // 获取视频总时长，以秒为单位

    // video.currentTime // 获取、设置当前视频的播放时间，以秒为单位

    // video.volume // 获取、设置视频的音量，0～1

    // video.paused // 视频是否已暂停

    // video.ended // 视频是否已结束

})