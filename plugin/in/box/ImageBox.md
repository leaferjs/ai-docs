# ImageBox 元素

同时支持 [Image](/reference/display/Image.md) + [Box](/reference/display/Box.md) 元素的功能，可往里面添加子元素。

<br/>

::: tip 继承
ImageBox &nbsp;>&nbsp; [Image](/reference/display/Image.md) 、[Box](/reference/display/Box.md) &nbsp;>&nbsp; [Group](/reference/display/Group.md) 、[Rect](/reference/display/Rect.md) &nbsp;>&nbsp; [UI](/reference/display/UI.md)
:::

::: tip 注意事项
需安装 [box插件](/plugin/in/box/index.md) 才能使用。
:::

## 示例

### 创建 ImageBox

::: code-group
```ts

// #创建 ImageBox [标准创建 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import { ImageBox } from '@leafer-in/box' // 导入box插件

const leafer = new Leafer({ view: window })


const box = new ImageBox({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg',
    draggable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    draggable: true
})

leafer.add(box)
box.add(circle)
```
```ts
// #创建 ImageBox [标准创建 (Leafer)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

import { ImageBox } from '@leafer-in/box' // 导入box插件

const app = new App({ view: window, editor: {} })

const box = new ImageBox({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg',
    hitChildren: false, // 阻止直接选择子元素（防止父子选择冲突，可双击进入组内选择子元素）
    editable: true
})

const circle = new Ellipse({
    x: 60,
    y: 60,
    width: 50,
    height: 50,
    fill: '#FEB027',
    editable: true
})

app.tree.add(box)
box.add(circle)

```
:::
