<script setup>
import Case from '/component/Case.vue'
</script>

# SVG

## 图片

[Image 元素](/reference/display/Image.md) 和 [图案填充](/reference/property/paint/image.md) 都支持直接加载 svg 格式的图片。

svg 图片采用了特殊的渲染逻辑，可以实现高清晰缩放.

通过 url 无法识别出 svg 的情况下，可以通过 [图案填充](/reference/property/paint/image.md) 指定 format 为 svg。

想修改 svg 图片的颜色，可以采用 [这个办法](https://developers.weixin.qq.com/community/develop/article/doc/000606868600b8d5f2ae12d9551813)。

## 路径

[Path](./Path.md) 支持 svg 路径数据

## 格式转换

期待社区出现 svg 转换为图形元素的插件

## 示例

### 使用 url

```ts
// #Image 加载 SVG [使用url]
import { Leafer, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const image = new Image({  // [!code hl:3]
    url: './resize.svg',
    draggable: true
})

leafer.add(image)
```

### 使用 字符串

```ts
// #Image 加载 SVG [使用svg字符串]
import { Leafer, Image, Platform } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const svg = `
<svg width="48" height="24" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M7.5 8.0H8.5V5.9L6.8 7.2L7.5 8.0ZM3 11.4L2.3 10.6L1.3 11.4L2.3 12.2L3 11.4ZM7.5 10.4H6.5V11.4H7.5V10.4ZM16.5 10.4V11.4H17.5V10.4H16.5ZM16.5 8.0L17.1 7.2L15.5 5.9V8.0H16.5ZM21 11.4L21.6 12.2L22.6 11.4L21.6 10.6L21 11.4ZM16.5 14.9H15.5V16.9L17.1 15.7L16.5 14.9ZM16.5 12.4H17.5V11.4H16.5V12.4ZM7.5 12.4V11.4H6.5V12.4H7.5ZM7.5 14.9L6.8 15.7L8.5 16.9V14.9H7.5ZM6.8 7.2L2.3 10.6L3.6 12.2L8.1 8.7L6.8 7.2ZM8.5 10.4V8.0H6.5V10.4H8.5ZM16.5 9.4H7.5V11.4H16.5V9.4ZM17.5 10.4V8.0H15.5V10.4H17.5ZM15.8 8.7L20.3 12.2L21.6 10.6L17.1 7.2L15.8 8.7ZM20.3 10.6L15.8 14.1L17.1 15.7L21.6 12.2L20.3 10.6ZM17.5 14.9V12.4H15.5V14.9H17.5ZM7.5 13.4H16.5V11.4H7.5V13.4ZM8.5 14.9V12.4H6.5V14.9H8.5ZM2.3 12.2L6.8 15.7L8.1 14.1L3.6 10.6L2.3 12.2Z" fill="white"/>
<path fill-rule="evenodd" d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z" fill="black"/>
</g>
</svg>`

const image = new Image({  // [!code hl:3]
    url: Platform.toURL(svg, 'svg'),
    draggable: true
})

leafer.add(image)


```

图案填充

```ts
// #Rect 填充 SVG [使用svg字符串]
import { Leafer, Rect, Platform } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const svg = `
<svg width="48" height="24" xmlns="http://www.w3.org/2000/svg">
<g>
<path d="M7.5 8.0H8.5V5.9L6.8 7.2L7.5 8.0ZM3 11.4L2.3 10.6L1.3 11.4L2.3 12.2L3 11.4ZM7.5 10.4H6.5V11.4H7.5V10.4ZM16.5 10.4V11.4H17.5V10.4H16.5ZM16.5 8.0L17.1 7.2L15.5 5.9V8.0H16.5ZM21 11.4L21.6 12.2L22.6 11.4L21.6 10.6L21 11.4ZM16.5 14.9H15.5V16.9L17.1 15.7L16.5 14.9ZM16.5 12.4H17.5V11.4H16.5V12.4ZM7.5 12.4V11.4H6.5V12.4H7.5ZM7.5 14.9L6.8 15.7L8.5 16.9V14.9H7.5ZM6.8 7.2L2.3 10.6L3.6 12.2L8.1 8.7L6.8 7.2ZM8.5 10.4V8.0H6.5V10.4H8.5ZM16.5 9.4H7.5V11.4H16.5V9.4ZM17.5 10.4V8.0H15.5V10.4H17.5ZM15.8 8.7L20.3 12.2L21.6 10.6L17.1 7.2L15.8 8.7ZM20.3 10.6L15.8 14.1L17.1 15.7L21.6 12.2L20.3 10.6ZM17.5 14.9V12.4H15.5V14.9H17.5ZM7.5 13.4H16.5V11.4H7.5V13.4ZM8.5 14.9V12.4H6.5V14.9H8.5ZM2.3 12.2L6.8 15.7L8.1 14.1L3.6 10.6L2.3 12.2Z" fill="white"/>
<path fill-rule="evenodd" d="M3 11.4L7.5 8.0V10.4H16.5V8.0L21 11.4L16.5 14.9V12.4H7.5V14.9L3 11.4Z" fill="black"/>
</g>
</svg>`

const rect = new Rect({
    fill: {  // [!code hl:5]
        type: 'image',
        url: Platform.toURL(svg, 'svg'),
        mode: 'stretch'
    },
    draggable: true
})

leafer.add(rect)


```
