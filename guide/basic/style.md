<script setup>
import Case from '/component/Case.vue'
</script>

# 设置样式

<case name="Rect" index=8 editor=false></case>

## 初始化样式

创建一个带虚线边框样式的矩形。

```ts
// #初始化元素样式
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:10]
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)
```

## 修改样式

```ts
// #修改样式 [标准修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 标准修改
rect.stroke = 'blue'
rect.strokeWidth = 4
// #endregion main
```

## 简洁修改

```ts
// #修改样式 [简洁修改]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 简洁修改
rect.set({
    stroke: 'blue',
    strokeWidth: 4,
})
// #endregion main
```

## 重置样式

```ts
// #修改样式 [重置样式]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    stroke: '#32cd79',
    strokeWidth: 2,
    dashPattern: [6, 6] // 绘制虚线
})

leafer.add(rect)

// #region main
// 重置样式
rect.reset()

// 重置为新样式
rect.reset({
    stroke: 'blue',
    strokeWidth: 4,
})
// #endregion main
```

## 修改对象

::: danger 注意事项
元素只能检测到 **第一层级属性** 的 setter 变化，单独修改 rect.fill.url = url 是不会渲染更新的。
:::

```ts
// #修改样式 [修改对象]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    fill: {
        type: 'image',
        url: '/image/leafer.jpg',
    }
})

leafer.add(rect)

// 修改对象
setTimeout(() => {
    // 元素只能检测到 第一层级属性 的 setter 变化
    // 需要给 fill 再次赋值， 单独修改 rect.fill.url = url 不会渲染更新
    rect.fill = {
        type: 'image',
        url: '/image/arrows.png',
    }
}, 1000)
```

## 使用 JSON

了解 JSON 数据 [导入导出](/reference/UI/json.md)。

```ts
// #修改数据 [使用 JSON]
import { Group, Leafer } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group()

leafer.add(group)

const json = { "x": 20, "y": 20, "children": [{ "tag": "Rect", "x": 100, "y": 100, "width": 200, "height": 200, "fill": "#32cd79", "draggable": true }] } // [!code hl:3]

group.set(json)


```

## 初步了解元素外观样式

### [fill](/reference/UI/fill.md)

填充，类似于 HTML5 中的 background-color，或文字的 color。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案填充](/reference/UI/paint/image.md) 等类型， 支持多个填充同时叠加。

<case name="Fill"  editor=false></case>

<case name="ImageFill" editor=false></case>

```ts
// #线性渐变填充 [默认方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    fill: {  // [!code hl:4]
        type: 'linear', // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)
```

### [stroke](/reference/UI/stroke.md)

描边，类似于 HTML5 中的 border-color。

支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案](/reference/UI/paint/image.md) 等类型， 支持多个描边同时叠加。

<case name="Stroke" editor=false></case>

```ts
// #线性渐变描边 [默认方向]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    stroke: {  // [!code hl:4]
        type: 'linear',  // 从顶部居中 -> 底部居中垂直绘制的渐变
        stops: ['#FF4B4B', '#FEB027']
    },
})

leafer.add(rect)
```

支持进一步设置描边样式。

| 名称                                                                 | 描述                             | 值                                |
| -------------------------------------------------------------------- | -------------------------------- | --------------------------------- |
| [strokeAlign](/reference/UI/stroke.md#strokealign-strokealign)       | 描边的对齐方式                   | 'inside' 、 'center' 、 'outside' |
| [strokeWidth](/reference/UI/stroke.md#strokewidth-number)            | 描边的宽度                       | `number`                          |
| [strokeWidthFixed](/reference/UI/stroke.md#strokewidthfixed-boolean) | 是否固定线宽（不受视图放大影响） | `boolean`                         |
| [strokeCap](/reference/UI/stroke.md#strokecap-strokecap)             | 描边的端点形状                   | 'none' 、 'round' 、'square'      |
| [strokeJoin](/reference/UI/stroke.md#strokejoin-strokejoin)          | 描边的拐角处理                   | 'miter' 、 'bevel' 、 'round'     |
| [dashPattern](/reference/UI/stroke.md#dashpattern-number)            | 虚线描边                         | `number`[]                        |
| [dashOffset](/reference/UI/stroke.md#dashoffset-number)              | 虚线描边的起点偏移值             | `number`                          |

```ts
// #描边样式
import { Leafer, Line } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Line({
    y: 100,
    stroke: '#32cd79', // [!code hl:8]
    strokeWidth: 5, // 描边的宽度
    strokeWidthFixed: true, // 是否固定线宽（不受视图放大影响）
    strokeAlign: 'center', // 描边的对齐方式 'inside'、'center' 、'outside'
    strokeCap: 'round', // 描边的端点形状 'none' 、'round' 、'square'
    strokeJoin: 'round', // 描边的拐角处理 'miter' 、'bevel' 、'round'
    dashPattern: [15, 15], // 绘制虚线
    dashOffset: 15,	// 虚线描边的起点偏移值
})

leafer.add(rect)
```

### [shadow](/reference/UI/shadow.md)

元素的外阴影，支持多个阴影叠加、boxShadow 效果。

<case name="Shadow" editor=false></case>

```ts
// #外阴影 [drop-shadow]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: 'rgba(50,205,121,0.7)',
    shadow: { // [!code hl:6]
        x: 10,
        y: -10,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```

### [innerShadow](/reference/UI/innerShadow.md)

元素的内阴影，支持多个内阴影叠加。

<case name="InnerShadow" editor=false></case>

```ts
// #内阴影
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    width: 100,
    height: 100,
    cornerRadius: 30,
    fill: '#32cd79',
    innerShadow: { // [!code hl:6]
        x: 10,
        y: 5,
        blur: 20,
        color: '#FF0000AA'
    }
})

leafer.add(rect)
```

### [mask](/reference/UI/mask.md)

遮罩功能，将 Group 内的某个元素指定为遮罩，可以实现复杂的裁剪效果， 支持 5 种遮罩类型。

<case name="Mask" editor=false></case>

```ts
// #遮罩功能 [将圆环设为遮罩]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100 })

const mask = new Ellipse({ // [!code hl:7]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    fill: 'black',
    mask: true
})

const image = new Image({
    width: 100,
    height: 100,
    url: '/image/leafer.jpg'
})

leafer.add(group)

group.add([mask, image])   // [!code hl]
```

### [eraser](/reference/UI/eraser.md)

擦除功能，将 Group 内的某个元素指定为橡皮擦，可实现复杂的擦除效果，支持 2 种擦除类型。

<case name="Eraser" editor=false></case>

```ts
// #擦除功能 [将圆环设为橡皮擦]
import { Leafer, Group, Ellipse, Image } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const group = new Group({ x: 100, y: 100, draggable: true })

const image = new Image({
    width: 100,
    height: 100,
    cornerRadius: 30,
    url: '/image/leafer.jpg'
})

const eraser = new Ellipse({ // [!code hl:9]
    x: 15,
    y: 15,
    width: 70,
    height: 70,
    innerRadius: 0.5,
    fill: 'black',
    eraser: true,
    draggable: true
})

leafer.add(group)

group.add([image, eraser])  // [!code hl]
```

### 元素可见性

### [visible](/reference/UI/visible.md)

元素的可见性，可用于隐藏元素。

```ts
// #隐藏元素
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 隐藏元素
    rect.visible = false
    // #endregion main

}, 1000)
```

### [opacity](/reference/UI/opacity.md)

元素的不透明度。

```ts
// #设置不透明度
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    // #region main
    // 设置不透明度
    rect.opacity = 0.5
    // #endregion main

}, 1000)
```

### 高级定位属性

### [origin](/reference/UI/origin.md)

围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)。

<case name="Around"   editor=false></case>

```ts
// #原点 [围绕原点旋转 45 度]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 25,
    y: 25,
    width: 50,
    height: 50,
    origin: 'center', // [!code hl:2]
    rotation: 45,
    draggable: true,
    fill: '#4DCB71'
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))
```

### [around](/reference/UI/around.md)

围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能。

与 [origin](/reference/UI/origin.md) 的区别： 多了一个步骤，会把元素内部的 around 点移动到元素的 (x,y) 坐标。

![围绕中心点绘制](/svg/around.svg?d=0131)

```ts
// #around 属性 [围绕坐标(50,50) 为中心旋转 45 度]
import { Leafer, Rect, Frame } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 50,
    y: 50,
    width: 50,
    height: 50,
    around: 'center', // [!code hl:2]
    rotation: 45,
    fill: '#4DCB71',
    draggable: true
})

leafer.add(new Frame({ width: 100, height: 100, fill: '#FF4A2C', children: [rect] }))
```

## 概览元素通用属性

| 名称                                                                             | 描述                                                                                                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 标识                                                                             |                                                                                                                                                                                                                                                                                                                |
| [id](/reference/UI/id.md)                                                        | 元素的唯一 id                                                                                                                                                                                                                                                                                                  |
| [tag](/reference/UI/tag.md)                                                      | 元素标签名（即元素的类名）                                                                                                                                                                                                                                                                                     |
| [name](/reference/UI/name.md)                                                    | 元素的名称                                                                                                                                                                                                                                                                                                     |
| [className](/reference/UI/className.md)                                          | 分类名称，暂时只支持设置 1 个                                                                                                                                                                                                                                                                                  |
| [innerId](/reference/UI/innerId.md)                                              | 运行时创建的临时 id（递增），不能用于远程存储                                                                                                                                                                                                                                                                  |
| [innerName](/reference/UI/innerName.md)                                          | 运行时创建的临时名称，用于快速识别元素                                                                                                                                                                                                                                                                         |
| 布局                                                                             |                                                                                                                                                                                                                                                                                                                |
| [x](/reference/UI/position.md#x-number)                                          | x 轴位置                                                                                                                                                                                                                                                                                                       |
| [y](/reference/UI/position.md#y-number)                                          | y 轴位置                                                                                                                                                                                                                                                                                                       |
| [width](/reference/UI/size.md#width-number)                                      | 宽度                                                                                                                                                                                                                                                                                                           |
| [height](/reference/UI/size.md#height-number)                                    | 高度                                                                                                                                                                                                                                                                                                           |
| [lockRatio](/reference/UI/resize.md#lockratio-boolean)                           | 是否锁定元素的宽高比例，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                                                                                                                                                       |
| [scaleX](/reference/UI/scale.md#scalex-number)                                   | x 轴缩放比例， 为负数时表示镜像 X 轴                                                                                                                                                                                                                                                                           |
| [scaleY](/reference/UI/scale.md#scaley-number)                                   | y 轴缩放比例，为负数时表示镜像 Y 轴                                                                                                                                                                                                                                                                            |
| [scale](/reference/UI/scale.md#scale)                                            | 快速设置 / 获取 scaleX, scaleY                                                                                                                                                                                                                                                                                 |
| [rotation](/reference/UI/rotation.md)                                            | [旋转角度](/reference/interface/math/Math.md#rotation)                                                                                                                                                                                                                                                         |
| [skewX](/reference/UI/skew.md#skewx-number)                                      | x 轴倾斜角度                                                                                                                                                                                                                                                                                                   |
| [skewY](/reference/UI/skew.md#skewy-number)                                      | y 轴倾斜角度                                                                                                                                                                                                                                                                                                   |
| [offsetX](/reference/UI/offset.md#offsetx-number)                                | x 轴偏移量                                                                                                                                                                                                                                                                                                     |
| [offsetY](/reference/UI/offset.md#offsety-number)                                | y 轴偏移量                                                                                                                                                                                                                                                                                                     |
| [origin](/reference/UI/origin.md)                                                | 围绕原点旋转、缩放元素，同 CSS 的 [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)                                                                                                                                                                                        |
| [around](/reference/UI/around.md)                                                | 围绕 around 点绘制元素，类似于游戏引擎中的 anchor 锚点功能                                                                                                                                                                                                                                                     |
| 包围盒                                                                           |                                                                                                                                                                                                                                                                                                                |
| [boxBounds](/reference/UI/bounds.md#boxbounds-iboundsdata)                       | 元素在 [内部坐标系](/guide/advanced/coordinate.md) 中的基础边界（[OBB](/reference/UI/bounds.md) 包围盒）                                                                                                                                                                                                       |
| [renderBounds](/reference/UI/bounds.md#renderbounds-iboundsdata)                 | 元素在 [内部坐标系](/guide/advanced/coordinate.md) 中的渲染边界（[AABB](/reference/UI/bounds.md) 包围盒）                                                                                                                                                                                                      |
| [worldBoxBounds](/reference/UI/bounds.md#worldboxbounds-iboundsdata)             | 元素在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中的基础边界（[AABB](/reference/UI/bounds.md) 包围盒）                                                                                                                                                                                     |
| [worldRenderBounds](/reference/UI/bounds.md#worldrenderbounds-iboundsdata)       | 元素在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中的渲染边界（[AABB](/reference/UI/bounds.md) 包围盒）                                                                                                                                                                                     |
| 变换                                                                             |                                                                                                                                                                                                                                                                                                                |
| [worldTransform](/reference/UI/transform.md#worldtransform-imatrixwithscaledata) | 相对于世界坐标的变换矩阵, 包含 scaleX、scaleY 属性                                                                                                                                                                                                                                                             |
| [localTransform](/reference/UI/transform.md#localtransform-imatrixdata)          | 相对于父元素的变换矩阵                                                                                                                                                                                                                                                                                         |
| 外观                                                                             |                                                                                                                                                                                                                                                                                                                |
| [zIndex](/reference/UI/zIndex.md)                                                | 在父元素中的层叠顺序                                                                                                                                                                                                                                                                                           |
| [opacity](/reference/UI/opacity.md)                                              | 不透明度                                                                                                                                                                                                                                                                                                       |
| [worldOpacity](/reference/UI/opacity.md)                                         | 元素在全局视图中的不透明度（会受父元素影响）                                                                                                                                                                                                                                                                   |
| [visible](/reference/UI/visible.md)                                              | 元素的可见性，可用于隐藏元素                                                                                                                                                                                                                                                                                   |
| [fill](/reference/UI/fill.md)                                                    | 填充，类似于 HTML5 中的 background-color，或文字的 color，支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案填充](/reference/UI/paint/image.md) 等类型， 支持多个填充同时叠加 |
| [stroke](/reference/UI/stroke.md)                                                | 描边，类似于 HTML5 中的 border-color，支持 [纯色](/reference/UI/paint/solid.md)、 [线性渐变](/reference/UI/paint/linear.md)、[径向渐变](/reference/UI/paint/radial.md)、[角度渐变](/reference/UI/paint/angular.md)、[图案](/reference/UI/paint/image.md) 等类型， 支持多个描边同时叠加                         |
| [strokeAlign](/reference/UI/stroke.md#strokealign-strokealign)                   | 描边的对齐方式                                                                                                                                                                                                                                                                                                 |
| [strokeWidth](/reference/UI/stroke.md#strokewidth-number)                        | 描边的宽度                                                                                                                                                                                                                                                                                                     |
| [strokeWidthFixed](/reference/UI/stroke.md#strokewidthfixed-boolean)             | 是否固定线宽（不受视图放大影响）                                                                                                                                                                                                                                                                               |
| [strokeCap](/reference/UI/stroke.md#strokecap-strokecap)                         | 描边的端点形状                                                                                                                                                                                                                                                                                                 |
| [strokeJoin](/reference/UI/stroke.md#strokejoin-strokejoin)                      | 描边的拐角处理                                                                                                                                                                                                                                                                                                 |
| [dashPattern](/reference/UI/stroke.md#dashpattern-number)                        | 虚线描边                                                                                                                                                                                                                                                                                                       |
| [dashOffset](/reference/UI/stroke.md#dashoffset-number)                          | 虚线描边的起点偏移值                                                                                                                                                                                                                                                                                           |
| [shadow](/reference/UI/shadow.md)                                                | 外阴影， 支持多个阴影叠加、boxShadow 效果                                                                                                                                                                                                                                                                      |
| [innerShadow](/reference/UI/innerShadow.md)                                      | 内阴影， 支持多个内阴影叠加                                                                                                                                                                                                                                                                                    |
| [dim](/reference/UI/dim.md)                                                      | 淡化元素（半透明），需结合 [dimskip](/reference/UI/dim.md) 使用                                                                                                                                                                                                                                                |
| [dimskip](/reference/UI/dim.md)                                                  | 跳过淡化，突出显示元素, 需结合 [dim](/reference/UI/dim.md) 使用                                                                                                                                                                                                                                                |
| [mask](/reference/UI/mask.md)                                                    | 设为遮罩                                                                                                                                                                                                                                                                                                       |
| [eraser](/reference/UI/eraser.md)                                                | 设为橡皮擦                                                                                                                                                                                                                                                                                                     |
| [blendMode](/reference/UI/blendMode.md)                                          | 混合模式                                                                                                                                                                                                                                                                                                       |
| 交互                                                                             |                                                                                                                                                                                                                                                                                                                |
| [hittable](/reference/UI/hit.md)                                                 | 元素是否响应鼠标、触摸或其他指针设备的交互事件，类似 CSS 的 pointer-events 属性                                                                                                                                                                                                                                |
| [hitChildren](/reference/UI/hitChildren.md)                                      | 进一步定义元素子级的可交互性                                                                                                                                                                                                                                                                                   |
| [hitSelf](/reference/UI/hitSelf.md)                                              | 进一步定义自身（不含子元素）的可交互性                                                                                                                                                                                                                                                                         |
| [hitFill](/reference/UI/hitFill.md)                                              | 进一步定义元素 [fill](/reference/UI/fill.md) 的可交互性，设置 pixel 可以进行 PNG / SVG 图片的像素级检测，过滤掉透明像素                                                                                                                                                                                        |
| [hitStroke](/reference/UI/hitStroke.md)                                          | 进一步定义元素 [stroke](/reference/UI/stroke.md) 的可交互性                                                                                                                                                                                                                                                    |
| [editable](/reference/UI/editable.md)                                            | 是否允许编辑，需安装 [图形编辑器插件](/plugin/in/editor/index.md)                                                                                                                                                                                                                                              |
| [draggable](/reference/UI/draggable.md)                                          | 是否允许拖拽                                                                                                                                                                                                                                                                                                   |
| [dragBounds](/reference/UI/dragBounds.md)                                        | 限制元素的拖动范围                                                                                                                                                                                                                                                                                             |
| [cursor](/reference/UI/cursor.md)                                                | hover 到元素上时，显示的光标样式，支持所有 [CSS 的光标名称](https://developer.mozilla.org/zh-CN/docs/Web/CSS/cursor)                                                                                                                                                                                           |
| 状态                                                                             |                                                                                                                                                                                                                                                                                                                |
| [states](/reference/UI/state/state.md#states-istates)                            | 状态列表，可预设复杂多样的元素、游戏状态，用于随时切换， 支持添加 [过渡效果](/reference/UI/transition.md)，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                    |
| [state](/reference/UI/state/state.md#state-string)                               | 当前状态，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                     |
| [button](/reference/UI/state/state.md#button-boolean)                            | 设为按钮，子元素将自动同步交互状态，如 state、hover、press...，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                |
| [hoverStyle](/reference/UI/state/hover.md#hoverstyle-iuiinputdata)               | 光标移入时的交互样式， 移出后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                        |
| [pressStyle](/reference/UI/state/press.md#pressstyle-iuiinputdata)               | 光标按下时的交互样式， 抬起后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                        |
| [focusStyle](/reference/UI/state/focus.md#focusstyle-iuiinputdata)               | 元素 focus() 时的聚焦样式， 失去焦点后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                               |
| [selected](/reference/UI/state/selected.md#selected-boolean)                     | 是否选中，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                     |
| [selectedStyle](/reference/UI/state/selected.md#selectedstyle-iuiinputdata)      | 元素 `selected` 设为 true 时的选中样式， `selected` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                    |
| [disabled](/reference/UI/state/disabled.md#disabled-boolean)                     | 是否禁用，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                                                                                     |
| [disabledStyle](/reference/UI/state/disabled.md#disabledstyle-iuiinputdata)      | 元素 `disabled` 设为 true 时的禁用样式， `disabled` 设为 false 后自动还原，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                                                                                                                    |
| 动画                                                                             |                                                                                                                                                                                                                                                                                                                |
| [animation](/reference/UI/animation.md)                                          | 动画属性，支持延时、循环和 seek，可制作过渡动画、摇摆动画、关键帧动画、路径动画，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                |
| [transition](/reference/UI/transition.md)                                        | 状态过渡 / 进入状态过渡效果，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                                                                    |
| [transitionOut](/reference/UI/transition.md)                                     | 退出状态时的过渡效果，未设置时使用 transition，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                                                                                                                                  |
| [motionPath](/reference/UI/motionPath.md)                                        | 设为运动路径，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                                                                                                                                                           |
| [motionPrecision](/reference/UI/motionPath.md)                                   | 设置运动路径的精度值，用于控制提取运动路径上指定点的精度，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                                                                                                               |
| [motion](/reference/UI/motion.md)                                                | 定位元素在 [运动路径](/reference/UI/motionPath.md) 上的位置，可使用百分比类型，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                                                                                          |
| [motionRotation](/reference/UI/motion.md)                                        | 在 [运动路径](/reference/UI/motionPath.md) 产生的自动角度上偏移一个角度，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                                                                                                |
| 关联                                                                             |                                                                                                                                                                                                                                                                                                                |
| [parent](/reference/UI/parent.md)                                                | 父元素                                                                                                                                                                                                                                                                                                         |
| [leafer](/reference/UI/leafer.md)                                                | 元素所在的 Leafer 引擎                                                                                                                                                                                                                                                                                         |
| [app](/reference/UI/leafer.md#app-app-leafer)                                    | 元素所在的 App 实例（根应用），非 App 结构时为 Leafer                                                                                                                                                                                                                                                          |
| [isLeafer](/reference/UI/leafer.md#isleafer-boolean)                             | 元素是否为 Leafer 引擎                                                                                                                                                                                                                                                                                         |
| [leaferIsCreated](/reference/UI/leafer.md#leaferiscreated-boolean)               | Leafer 引擎及子元素 [创建完成](/reference/display/Leafer.md#created-boolean)（完成首次创建）                                                                                                                                                                                                                   |
| [leaferIsReady](/reference/UI/leafer.md#leaferisready-boolean)                   | Leafer 引擎是否 [准备就绪](/reference/display/Leafer.md#ready-boolean)（完成首次布局）                                                                                                                                                                                                                         |
| [zoomLayer](/reference/UI/leafer.md#zoomlayer-group)                             | Leafer 引擎的 [缩放平移视图层](/reference/display/Leafer.md#zoomlayer-group)                                                                                                                                                                                                                                   |
| 数据                                                                             |                                                                                                                                                                                                                                                                                                                |
| [data](/reference/UI/data.md)                                                    | 预留给用户的自定义数据对象，我们永远不会占用， 默认为空对象 {}                                                                                                                                                                                                                                                 |
| [\_\_](/reference/UI/data.md#iuiinputdata)                                       | 内部数据处理实例（两个下划线的变量）                                                                                                                                                                                                                                                                           |
| [proxyData](/reference/UI/proxy.md)                                              | 让元素在 Vue / React 等前端框架 中支持响应式数据                                                                                                                                                                                                                                                               |
| [path](/reference/UI/path.md)                                                    | 路径数据，支持 SVG 与 Cavnas [绘图命令](/reference/interface/ui/PathData.md) （元素可进入路径优先模式）                                                                                                                                                                                                        |


## 概览元素通用方法

| 名称                                                                                                                                                                     | 描述                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 布局                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [move()](/reference/UI/position.md#move-addx-number-ipointdata-addy-0-transition-itranstion)                                                                             | 位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                                                                             |
| [moveInner()](/reference/UI/position.md#moveinner-addx-number-ipointdata-addy-0-transition-itranstion)                                                                   | 在 [内部坐标系](/guide/advanced/coordinate.md) 中位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                            |
| [moveWorld()](/reference/UI/position.md#moveworld-addworldx-number-ipointdata-addworldy-0-transition-itranstion)                                                         | 在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中位移元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                           |
| [resizeWidth()](/reference/UI/resize.md#resizewidth-width-number)                                                                                                        | resize 元素/组元素的包围盒宽度，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                                                         |
| [resizeHeight()](/reference/UI/resize.md#resizeheight-height-number)                                                                                                     | resize 元素/组元素的包围盒高度，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                                                         |
| [scaleResize()](/reference/UI/resize.md#scaleresize-scalex-number-scaley-scalex)                                                                                         | 缩放操作转换为宽高值 <badge>增量操作</badge>，需安装 [resize 插件](/plugin/in/resize/index.md)                                                                                                                           |
| [scaleOf()](/reference/UI/scale.md#scaleof-origin-ialign-ipointdata-multiplyscalex-number-multiplyscaley-number-itranstion-resize-boolean-transition-itranstion)         | 围绕原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）缩放元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                    |
| [scaleOfWorld()](/reference/UI/scale.md#scaleofworld-worldorigin-ipointdata-multiplyscalex-number-multiplyscaley-number-itranstion-resize-boolean-transition-itranstion) | 围绕原点 worldOrigin（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）缩放元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                         |
| [flip()](/reference/UI/flip.md)                                                                                                                                          | 在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中， 按轴方向 镜像/翻转元素，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                  |
| [rotateOf()](/reference/UI/rotation.md#rotateof-origin-ialign-ipointdata-addrotation-number-transition-itranstion)                                                       | 围绕原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）旋转元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                    |
| [rotateOfWorld()](/reference/UI/rotation.md#rotateofworld-worldorigin-ipointdata-addrotation-number-transition-itranstion)                                               | 围绕原点 worldOrigin（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）旋转元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                         |
| [skewOf()](/reference/UI/skew.md#skewof-origin-ialign-ipointdata-addskewx-number-addskewy-0-resize-boolean-transition-itranstion)                                        | 围绕原点 origin（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ）倾斜元素 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                    |
| [skewOfWorld()](/reference/UI/skew.md#skewofworld-worldorigin-ipointdata-addskewx-number-addskewy-0-resize-boolean-transition-itranstion)                                | 围绕原点 worldOrigin（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ）倾斜元素 <badge>增量操作</badge> ，可选 [动画](/guide/plugin/animate.md) 过渡                                                        |
| 包围盒                                                                                                                                                                   |                                                                                                                                                                                                                          |
| [getBounds()](/reference/UI/bounds.md#getbounds-type-iboundstype-box-relative-ilocationtype-ui-world-iboundsdata)                                                        | 获取 [AABB](/reference/UI/bounds.md) 包围盒（边界）                                                                                                                                                                      |
| [getLayoutBounds()](/reference/UI/bounds.md#getlayoutbounds-type-iboundstype-box-relative-ilocationtype-ui-world-unscale-boolean-ilayoutboundsdata)                      | 获取 [OBB](/reference/UI/bounds.md) 包围盒（边界），含缩放、旋转等布局属性                                                                                                                                               |
| [getLayoutPoints()](/reference/UI/bounds.md#getlayoutpoints-type-iboundstype-box-relative-ilocationtype-ui-world-ipointdata)                                             | 获取 [OBB](/reference/UI/bounds.md) 包围盒（边界）的四个坐标点）                                                                                                                                                         |
| 变换                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [setTransform()](/reference/UI/transform.md#settransform-matrix-imatrixdata-resize-boolean-transition-itranstion)                                                        | 设置本地变换矩阵，会自动分解为元素的布局属性，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                                                                 |
| [getTransform()](/reference/UI/transform.md#gettransform-relative-ilocationtype-ui-local-imatrixdata)                                                                    | 获取变换矩阵, 支持获取相对任意父元素 `relative` 的相对矩阵                                                                                                                                                               |
| [transform()](/reference/UI/transform.md#transform-matrix-imatrixdata-resize-boolean-transition-itranstion)                                                              | 变换操作，会自动分解为布局属性 <badge>增量操作</badge>，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                                                       |
| [transformWorld()](/reference/UI/transform.md#transformworld-worldtransform-imatrixdata-resize-boolean-transition-itranstion)                                            | transform() 在 [世界坐标系](/guide/advanced/coordinate.md#world-世界坐标系) 中操作，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                           |
| 转换坐标                                                                                                                                                                 |                                                                                                                                                                                                                          |
| [getPagePoint()](/reference/UI/point/index.md#转换世界坐标)                                                                                                              | 获取 page 坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系) ），支持转换移动距离                                                           |
| [getLocalPoint()](/reference/UI/point/index.md#转换世界坐标)                                                                                                             | 获取本地坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) ），支持转换移动距离                                                             |
| [getInnerPoint()](/reference/UI/point/index.md#转换世界坐标)                                                                                                             | 获取内部坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ），支持转换移动距离                                                             |
| [getBoxPoint()](/reference/UI/point/index.md#转换世界坐标)                                                                                                               | 获取 box 坐标（ [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) 转 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ），支持转换移动距离                                                                  |
| [getWorldPointByPage()](/reference/UI/point/index.md#转换-page-坐标)                                                                                                     | 获取世界坐标（ [page 坐标](/guide/advanced/coordinate.md#page-场景坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ），支持转换移动距离                                                             |
| [getWorldPointByLocal()](/reference/UI/point/index.md#转换本地坐标)                                                                                                      | 获取世界坐标（ [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ），支持转换移动距离                                                             |
| [getInnerPointByLocal()](/reference/UI/point/index.md#转换本地坐标)                                                                                                      | 获取内部坐标（ [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ），支持转换移动距离                                                             |
| [getWorldPoint()](/reference/UI/point/index.md#转换内部坐标)                                                                                                             | 获取世界坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ），支持转换移动距离                                                             |
| [getLocalPointByInner()](/reference/UI/point/index.md#转换内部坐标)                                                                                                      | 获取本地坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [本地坐标](/guide/advanced/coordinate.md#local-本地坐标系) ），支持转换移动距离                                                             |
| [getBoxPointByInner()](/reference/UI/point/index.md#转换内部坐标)                                                                                                        | 获取 box 坐标（ [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) 转 [box 坐标](/guide/advanced/coordinate.md#box-坐标系) ），支持转换移动距离                                                                  |
| [getWorldPointByBox()](/reference/UI/point/index.md#转换内部坐标)                                                                                                        | 获取世界坐标（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 转 [世界坐标](/guide/advanced/coordinate.md#world-世界坐标系) ），支持转换移动距离                                                                   |
| [getInnerPointByBox()](/reference/UI/point/index.md#转换内部坐标)                                                                                                        | 获取内部坐标（ [box 坐标](/guide/advanced/coordinate.md#box-坐标系) 转 [内部坐标](/guide/advanced/coordinate.md#inner-内部坐标系) ），支持转换移动距离                                                                   |
| 操作                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [dropTo()](/reference/UI/dropTo.md)                                                                                                                                      | 将元素拖拽放置到另一个父容器中                                                                                                                                                                                           |
| [focus()](/reference/UI/state/focus.md#focus-value-boolean)                                                                                                              | 聚焦元素操作，单个 App 只能同时有一个元素聚焦，当一个元素聚焦时，之前元素会失焦，需安装 [交互状态插件](/plugin/in/state/index.md)                                                                                        |
| 动画                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [animate()](/reference/UI/animate.md)                                                                                                                                    | 执行动画方法，并返回 [动画实例](/plugin/in/animate/index.md#animate-类)，需安装 [动画插件](/plugin/in/animate/index.md)                                                                                                  |
| [getMotionTotal()](/reference/UI/getMotionTotal.md)                                                                                                                      | 获取运动路径的总长度，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                                                             |
| [getMotionPoint()](/reference/UI/getMotionPoint.md)                                                                                                                      | 获取运动路径上指定位置的 坐标点, 返回一个包含 rotation 的 坐标点，需安装 [运动路径插件](/plugin/in/motion-path/index.md)                                                                                                 |
| 事件                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [on()](/reference/UI/on.md#on-type-string-string-listener-ieventlistener-options-ieventoption)                                                                           | 侦听事件                                                                                                                                                                                                                 |
| [on\_()](/reference/UI/on.md#on-type-string-string-listener-ieventlistener-bind-iobject-options-ieventoption-ieventlistenerid)                                           | 侦听事件，支持传入 bind 作为 listener 的 this 对象，并返回事件 id，与 [off\_()](/reference/UI/off.md#off) 配套使用                                                                                                       |
| [once()](/reference/UI/on.md#once-type-string-string-listener-ieventlistener-capture-boolean)                                                                            | 只侦听一次事件                                                                                                                                                                                                           |
| [off()](/reference/UI/off.md)                                                                                                                                            | 移除事件                                                                                                                                                                                                                 |
| [off\_()](/reference/UI/off.md)                                                                                                                                          | 移除事件， 与 [on\_()](/reference/UI/on.md#on_) 配套使用                                                                                                                                                                 |
| [emit()](/reference/UI/emit.md)                                                                                                                                          | 手动派发事件                                                                                                                                                                                                             |
| [emitEvent()](/reference/UI/emit.md)                                                                                                                                     | 手动派发事件，参数必须为 IEvent 对象                                                                                                                                                                                     |
| 更新                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [forceUpdate()](/reference/UI/forceUpdate.md)                                                                                                                            | 强制更新元素（异步），默认会更新元素的布局与渲染                                                                                                                                                                         |
| [updateLayout()](/reference/UI/forceUpdate.md#updatelayout)                                                                                                              | 请求更新布局，若布局无变化，则会忽略更新                                                                                                                                                                                 |
| [forceRender()](/reference/UI/forceRender.md)                                                                                                                            | 强制渲染元素（异步），只会重新渲染，不会更新布局                                                                                                                                                                         |
| [nextRender()](/reference/UI/nextRender.md)                                                                                                                              | 等待下一次渲染帧执行函数                                                                                                                                                                                                 |
| [removeNextRender()](/reference/UI/nextRender.md)                                                                                                                        | 移除 nextRender() 监听的函数                                                                                                                                                                                             |
| 查找                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [find()](/reference/UI/find.md)                                                                                                                                          | 通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，返回一个数组，需安装 [查找插件](/plugin/in/find/index.md)   |
| [findTag()](/reference/UI/find.md)                                                                                                                                       | 查找 tag，支持通过数组查找多个 tag，返回一个数组，需安装 [查找插件](/plugin/in/find/index.md)                                                                                                                            |
| [findOne()](/reference/UI/findOne.md)                                                                                                                                    | 通过 [id](/reference/UI/id.md)、[innerId](/reference/UI/innerId.md)、[className](/reference/UI/className.md)、[tag](/reference/UI/tag.md)、函数条件查找元素，只返回一个元素，需安装 [查找插件](/plugin/in/find/index.md) |
| [findId()](/reference/UI/findOne.md)                                                                                                                                     | 查找 id, 支持查找数字类型的 id（必须原始 id 类型为数字），需安装 [查找插件](/plugin/in/find/index.md)                                                                                                                    |
| [pick()](/reference/UI/pick.md)                                                                                                                                          | 通过坐标点（相对世界坐标）拾取元素，支持获取穿透路径，返回拾取到的目标元素和路径                                                                                                                                         |
| 关联                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [waitParent()](/reference/UI/parent.md#waitparent-item-function-bind-object)                                                                                             | 等待元素有 [`parent`](/reference/UI/parent.md) 属性时执行                                                                                                                                                                |
| [waitLeafer()](/reference/UI/leafer.md#waitleafer-item-function-bind-object)                                                                                             | 等待元素有 [`leafer`](/reference/UI/leafer.md) 属性时执行                                                                                                                                                                |
| 数据                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [set()](/reference/UI/data.md#set-data-iuiinputdata-transition-itranstion)                                                                                               | 设置元素样式，可选 [动画](/guide/plugin/animate.md) 过渡                                                                                                                                                                 |
| [reset()](/reference/UI/data.md#reset-data-iuiinputdata)                                                                                                                 | 重置元素样式, 支持传入一个新的样式                                                                                                                                                                                       |
| [get()](/reference/UI/data.md#get-iuiinputdata)                                                                                                                          | 获取设置过的属性数据                                                                                                                                                                                                     |
| [setAttr()](/reference/UI/data.md#setattr-name-string-value-any)                                                                                                         | 设置属性值                                                                                                                                                                                                               |
| [getAttr()](/reference/UI/data.md#getattr-name-string-any)                                                                                                               | 获取属性值                                                                                                                                                                                                               |
| [getComputedAttr()](/reference/UI/data.md#getcomputedattr-name-string-any)                                                                                               | 获取计算属性值                                                                                                                                                                                                           |
| [clone()](/reference/UI/clone.md)                                                                                                                                        | 克隆当前元素， 可以增加新样式                                                                                                                                                                                            |
| 路径                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [getPath()](/reference/UI/getPath.md)                                                                                                                                    | 获取元素的数字路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)）                                                                                                                                 |
| [getPathString()](/reference/UI/getPathString.md)                                                                                                                        | 获取元素的字符串路径（Canvas [绘图命令](/reference/interface/ui/PathData.md#canvas-命令)，包含非 SVG 绘图命令）                                                                                                          |
| 导出                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [export()](/reference/UI/export.md)                                                                                                                                      | 异步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)                                                                                                                    |
| [syncExport()](/reference/UI/export.md#syncexport)                                                                                                                       | 同步导出元素为图片、json、画布，支持截图、切片，可下载，需安装 [导出插件](/plugin/in/export/index.md)                                                                                                                    |
| [toJSON()](/reference/UI/json.md)                                                                                                                                        | 导出 JSON 对象                                                                                                                                                                                                           |
| [toString()](/reference/UI/json.md#tostring-options-ijsonoptions-string)                                                                                                 | 导出 JSON 字符串                                                                                                                                                                                                         |
| 移除                                                                                                                                                                     |                                                                                                                                                                                                                          |
| [remove()](/reference/UI/remove.md)                                                                                                                                      | 移除当前元素                                                                                                                                                                                                             |
| [destroy()](/reference/UI/destroy.md)                                                                                                                                    | 销毁当前元素                                                                                                                                                                                                             |


## 下一步

### [事件处理](/guide/basic/event.md)
