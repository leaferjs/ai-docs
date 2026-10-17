// #Image Filter [自定义图片滤镜]
import { App, Image } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { registerImageFilter } from '@leafer-in/image-filter' // 导入图片滤镜插件  // [!code hl]

// [!code hl:13]
/* 注册自定义图片滤镜，允许覆盖默认滤镜
| 参数 | 类型 | 说明 |
| ------------ | ------- | ------------------------ |
| `c` | `vec3` | 输入颜色（RGB），范围`0.0 ~ 1.0` |
| `v` | `float` | 曝光值（EV），控制亮度 |
| `uv` | `vec2` | 当前像素的纹理坐标（`0~1`） |
| `resolution` | `vec2` | 画布分辨率（像素），画布的实际宽高值 |
*/
registerImageFilter('customFilter', `
vec3 customFilter( vec3 c, float v, vec2 uv, vec2 resolution ){
    return c*vec3(1.0+0.3);
}`)

const app = new App({ view: window, editor: {} })

const image = new Image({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
        filter: [  // 添加自定义图片滤镜  [!code hl:3]
            { type: 'customFilter', value: 1 }, // 滤镜名只能为字母
        ],
        mode: 'stretch'
    },
    editable: true
})

app.tree.add(image)