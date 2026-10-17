// #Film [在 Polygon 中使用 Film]
import { App, Polygon } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { PaintFilm } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const polygon = new Polygon({
    sides: 6,
    fill: { // [!code hl:5]
        type: 'film',
        url: '/film/color.gif',
        mode: 'stretch',
    },
    editable: true
})

app.tree.add(polygon)

const film = new PaintFilm(polygon) // 提取元素中的 film  // [!code hl]

polygon.on('click', () => {
    film.togglePlay() // 点击 film 暂停/播放动图
})