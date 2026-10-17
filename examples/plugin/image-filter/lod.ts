// #Image Lighter [LOD 图片加载]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/view'
import '@leafer-in/image-filter'

import { ImageLighter } from '@pxgrow/image-lighter'  // [!code hl]

const app = new App({ view: window, editor: {}, fill: '#333' })

new ImageLighter(app.tree, {}) // 图片加速

const rect = new Rect({
    width: 2000,
    height: 2000,
    fill: {
        type: 'image',
        url: '/image/large.png', // 原图为 8000 * 8000px 的大图
        mode: 'stretch',
        // lod层级按需自动获取url, lod层级会从原始图的0.5倍、0.25倍，每层级依次除2递进，直至宽高接近16px为止
        // 如果存在大的lod层级缓存时，不会再次加载小的lod层级图片，会直接通过大的生成小的层级，避免浪费网络资源
        lod: {
            url: `/image/lod/large-w{width}-h{height}.png`, // lod层级按需自动裁剪url， width、height、level等变量会自动替换为真实url
            width: 8000, // 原图宽度
            height: 8000, // 原图高度
            // thumb: -5, // 首次加载的lod层级，-1表示原始图的0.5倍，-2表示0.25倍，每层级依次除2类推，默认会加载最小层级
        },
        filter: [
            { type: 'exposure', value: 1 },
            // { type: 'contrast', value: 1 },
            // { type: 'saturation', value: -1 },
            // { type: 'temperature', value: 1 },
            // { type: 'tint', value: 0.5 },
            // { type: 'highlights', value: 1 },
            // { type: 'shadows', value: 1 },
        ],
    },
    editable: true
})

app.tree.add(rect)

app.waitReady(() => {
    app.tree.zoom('fit')
})


// setTimeout(() => {
//     rect.fill = {
//         type: 'image',
//         url: '/image/large.png', // 原图为 8000 * 8000px 的大图
//         mode: 'stretch',
//         // lod层级按需自动获取url, lod层级会从原始图的0.5倍、0.25倍，每层级依次除2递进，直至宽高接近16px为止
//         // 如果存在大的lod层级缓存时，不会再次加载小的lod层级图片，会直接通过大的生成小的层级，避免浪费网络资源
//         lod: {
//             url: `/image/lod/large-w{width}-h{height}.png`, // lod层级按需自动裁剪url， width、height、level等变量会自动替换为真实url
//             width: 8000, // 原图宽度
//             height: 8000, // 原图高度
//             // thumb: -5, // 首次加载的lod层级，-1表示原始图的0.5倍，-2表示0.25倍，每层级依次除2类推，默认会加载最小层级
//         },
//         filter: [
//             // { type: 'exposure', value: 1 },
//             { type: 'contrast', value: 1 },
//             // { type: 'saturation', value: -1 },
//             // { type: 'temperature', value: 1 },
//             // { type: 'tint', value: 0.5 },
//             // { type: 'highlights', value: 1 },
//             // { type: 'shadows', value: 1 },
//         ],
//     }
// }, 5000)