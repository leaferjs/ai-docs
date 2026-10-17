// #Film [使用 Rect 代替 Film]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PaintFilm } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const rect = new Rect({
    fill: { // [!code hl:5]
        type: 'film',
        url: '/film/color.gif',
        mode: 'stretch',
    },
    editable: true
})

app.tree.add(rect)

const film = new PaintFilm(rect) // 提取元素中的 film  // [!code hl]

rect.on('click', () => {
    film.togglePlay() // 点击 film 暂停/播放动图
})