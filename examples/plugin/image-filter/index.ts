// #Image Filter [添加图片滤镜]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/image-filter' // 导入图片滤镜插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const image = new Image({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [  // 添加图片滤镜  [!code hl:9]
            { type: 'exposure', value: 0.3 }, // 取值范围 -1 ～ 1，0 表示无滤镜效果
            { type: 'contrast', value: -0.5 },
            { type: 'saturation', value: -1 },
            { type: 'temperature', value: 1 },
            { type: 'tint', value: 0.5 },
            { type: 'highlights', value: 0.2 },
            { type: 'shadows', value: 0.5 },
        ],
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(image)