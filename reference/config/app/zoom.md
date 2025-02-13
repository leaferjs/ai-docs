# 应用配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; [多点](/reference/config/app/multiTouch.md) &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; 缩放视图

##

缩放视图相关配置，应用运行中修改 [app.config.zoom](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### zoom.disabled: `boolean`

是否禁用缩放视图，默认为 false。

### zoom.min: `number`

视图最小缩放比例， 默认为 0.02。

### zoom.max: `number`

视图最大缩放比例， 默认为 256。

## 示例

### 控制视图缩放范围

::: code-group
```ts
// #应用配置 - 控制视图缩放范围 [App]
import { App, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    tree: { type: 'viewport' },
    zoom: { min: 0.02, max: 256 } // [!code hl]
})

app.tree.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))
```

```ts
// #应用配置 - 控制视图缩放范围 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    zoom: { min: 0.02, max: 256 } // [!code hl]
})

leafer.add(new Rect({ x: 100, y: 100, fill: '#32cd79', draggable: true }))
```
:::
