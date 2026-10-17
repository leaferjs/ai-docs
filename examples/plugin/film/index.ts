// #Film [创建Film元素]
import { App } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const film = new Film({ // [!code hl:4]
    url: '/film/color.gif',
    editable: true
})

app.tree.add(film)

film.on('click', () => {
    film.togglePlay() // 点击 film 暂停/播放动图
})