<script setup>
import Case from '/component/Case.vue'
</script>

# cursor

设置元素光标，hover 到下面的图形上看看效果。

<case name="Cursor" editor=false></case>

## 关键属性

### cursor: [`ICursorType`](/api/modules.md#icursortype) | [`ICursorType`](/api/modules.md#icursortype)[]

hover 到元素上时，显示的光标样式，支持所有 [CSS 的光标名称](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)。

可设置图片对象作为光标，支持偏移距离。

```ts
type ICursorType =
  | IImageCursor
  | ''
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | 'help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'grab'
  | 'grabbing'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize'
  | 'nwse-resize'
  | 'col-resize'
  | 'row-resize'
  | 'all-scroll'
  | 'zoom -in'
  | 'zoom-out'

interface IImageCursor {
  url: string
  x?: number
  y?: number
}
```

## 自定义光标

可以通过 Cursor.set() 替换系统光标名，或注册自定义光标名。

```ts
// #光标样式 [覆盖系统光标]
import { Cursor } from 'leafer-ui'

Cursor.set('pointer', { url: 'https://leaferjs.com/image/cursor.svg' }) // 替换pointer光标

Cursor.set('pointer_custom', { url: 'https://leaferjs.com/image/cursor.svg' }) // 注册自定义光标名
```

## 手动更新

Leafer 支持手动强制更新光标样式 [updateCursor()](/reference/display/Leafer.md#updatecursor-cursor-icursortype)。

## 停用光标

引擎通过 [app.config.cursor](/reference/config/app/base.md#cursor-boolean) 配置，可随时停用光标功能， 之后可完全自定义光标行为。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Cursor" index=4 editor=false></case>

### 设置光标

```ts
// #光标样式 [设置光标]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [10, 90, 10, 10, 50, 70, 90, 10, 90, 90, 90, 90, 10, 90],
    curve: true,
    fill: '#32cd79',
    cursor: 'no-drop' // [!code hl]
})

leafer.add(polygon)
```

<case name="Cursor" index=5 editor=false></case>

### 设置图片光标

支持 png、 svg 格式的图片, 偏移距离 x、y 为可选字段。

```ts
// #光标样式 [设置图片光标]
import { Leafer, Polygon } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const polygon = new Polygon({
    width: 100,
    height: 100,
    points: [0, 90, 20, 60, 40, 80, 60, 40, 75, 50, 90, 10, 100, 90, 100, 90, 0, 90],
    curve: true,
    fill: '#32cd79',
    cursor: { url: 'https://leaferjs.com/image/cursor.svg', x: 2, y: 2 } // [!code hl]
})

leafer.add(polygon)
```
