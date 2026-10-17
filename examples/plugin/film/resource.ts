// #Film [等待动图加载完，再添加到引擎中]
import { App, Resource } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { Film } from '@leafer-in/film' // 导入动图插件  // [!code hl]

const app = new App({ view: window, editor: {} })

const url = '/film/color.gif'

Resource.loadFilm(url).then(() => { // [!code hl:5]

    app.tree.add(new Film({ url, editable: true }))

})

// Resource.loadFilm(url, 'gif') // 第二个参数可以强制指定动图格式 'gif' | 'webp' | 'png' | 'avif'，需要安装相应的格式解码插件