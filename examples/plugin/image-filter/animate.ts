// #Image Filter [图片滤镜动画]
import { App, IImagePaint, Image, RenderEvent, Debug, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import '@leafer-in/image-filter' // 导入图片滤镜插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const image = new Image({
    x: 100,
    y: 100,
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [  // 添加图片滤镜  [!code hl:9]
            { type: 'exposure', value: 0.3 }, // 取值范围 -1 ～ 1，0 表示无滤镜效果
        ],
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(image)

image.on(ImageEvent.LOADED, () => {
    setTimeout(() => {
        console.log(image.__layout.boxBounds.width, image.__layout.boxBounds.height, image.__.__naturalWidth)
        image.forceRender()
        app.tree.on(RenderEvent.END, () => {
            const fill = image.fill;
            (fill as IImagePaint).filter = [  // 添加图片滤镜  [!code hl:9]
                { type: 'exposure', value: Math.round(Math.random() * 10) / 10 }, // 取值范围 -1 ～ 1，0 表示无滤镜效果
            ]
            image.fill = { ...fill as any } as any
            console.log(image.__layout.boxBounds.width, image.__layout.boxBounds.height, image.__.__naturalWidth)
        })

        Debug.showRepaint = true
    }, 3000)


})

