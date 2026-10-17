// #Film [监听动图加载成功事件]
import { App, ImageEvent } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({
    url: '/film/color.gif',
    editable: true
})

app.tree.add(film)

film.once(ImageEvent.LOADED, function (e: ImageEvent) {  // [!code hl:3]
    console.log(e)
})