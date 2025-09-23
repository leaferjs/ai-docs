# 应用与引擎配置

### [基础](/reference/config/app/base.md) &nbsp; &nbsp; [视口类型](/reference/config/app/type.md) &nbsp; &nbsp; [画布](/reference/config/app/canvas.md) &nbsp; &nbsp; [点按](/reference/config/app/pointer.md) &nbsp; &nbsp; 多点 &nbsp; &nbsp; [触屏](/reference/config/app/touch.md) &nbsp; &nbsp; [滚轮](/reference/config/app/wheel.md) &nbsp; &nbsp; [平移视图](/reference/config/app/move.md) &nbsp; &nbsp; [缩放视图](/reference/config/app/zoom.md)

##

多点触摸事件相关配置, 引擎运行中修改 [app.config.multiTouch](/reference/display/Leafer.md#config-ileaferconfig) 立即生效。

:::tip 注意事项
[App 结构](/guide/advanced/app.md) 下只能设置在 [App](/reference/display/App.md) 的 config 上。
:::

## 关键属性

### multiTouch.disabled: `boolean`

是否禁用多点触屏产生的缩放/平移/旋转事件， 默认为 false。

### multiTouch.singleGesture: `boolean` | [`ISingleGestureConfig`](/api/interfaces/ISingleGestureConfig.md)

是否识别并锁定单一手势操作（缩放/平移/旋转手势同时只会优先使用一个）， 默认为 false。

设置对象时，可以进一步细化手势识别阈值。

```ts
interface ISingleGestureConfig {
  move?: number // 识别移动的阈值，默认为 5
  scale?: number // 识别缩放的阈值，默认为 0.03
  rotation?: number // 识别旋转的阈值，默认为 2度
  count?: number // 连续识别几次同样手势类型进行锁定，默认为 2次
  time?: number // 最长手势类型识别时间，默认为 160ms
}
```

## 示例

### 禁用多点触屏功能

::: code-group
```ts
// #应用与引擎配置 - 禁用多点触屏功能 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    multiTouch: { disabled: true } // [!code hl]
})

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))
```
```ts
// #应用与引擎配置 - 禁用多点触屏功能 [App]
import { App, Rect } from 'leafer-ui'

const app = new App({
    view: window,
    tree: { multiTouch: { disabled: true } }  // [!code hl]
})

app.tree.add(Rect.one({ fill: '#32cd79' }, 100, 100))
```
:::

### 锁定单一手势操作

::: code-group
```ts
// #应用与引擎配置 - 锁定单一手势操作 [Leafer]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/viewport' // 导入视口插件

const leafer = new Leafer({
    view: window,
    type: 'viewport',
    mobile: true, // 适配移动端
    multiTouch: {
        singleGesture: true // 识别并锁定单一手势操作 // [!code hl]
    }
})

leafer.add(Rect.one({ fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100))
leafer.add(Rect.one({ ill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100))
```
```ts
// #应用与引擎配置 - 锁定单一手势操作 [App]
import { App, Rect, Frame } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件

const app = new App({
    view: window,
    fill: '#333',
    mobile: true, // 适配移动端
    multiTouch: {
        singleGesture: true // 识别并锁定单一手势操作 // [!code hl]
    },
    editor: { moveable: 'gesture', resizeable: 'gesture', rotateable: 'gesture' }  //  编辑元素支持手势操作 
})

app.tree.add(Frame.one({ // 页面内容
    children: [
        Rect.one({ editable: true, fill: '#FEB027', cornerRadius: [20, 0, 0, 20] }, 100, 100),
        Rect.one({ editable: true, fill: '#FFE04B', cornerRadius: [0, 20, 20, 0] }, 300, 100)
    ]
}, 100, 100, 500, 600))
```
:::
