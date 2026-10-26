# position

position 布局，相对父级进行方位定位、四周边缘定位。

会自动修改元素的 x、y、width、height 信息，父级必须为有宽高属性的 [Box](../../../reference/display/Box.md)、[Frame](../../../reference/display/Frame.md) 元素。

## 安装插件

需要安装 position 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/position)。

::: code-group

```sh [npm]
npm install @leafer-in/position
```

```sh [pnpm]
pnpm add @leafer-in/position
```

```sh [yarn]
yarn add @leafer-in/position
```

```sh [bun]
bun add @leafer-in/position
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.position 访问插件内部功能。

::: code-group

```html [position.min]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.min.js"></script>
```

```html [position]
<script src="https://unpkg.com/@leafer-in/position@2.3.2/dist/position.js"></script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 下一步

### [position 属性](../../../reference/UI/position.md#position-ialign-iinset)

## 示例

### 在父级的居中位置显示

```ts
// #position 布局 [在父级的居中位置显示]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: 'center', // 在父级的居中位置显示，会自动修改元素的 x、y 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```

### 距离父级四周各20px

```ts
// #position 布局 [距离父级四周各20px]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: { top: 20, left: 20, right: 20, bottom: 20 }, // 距离父级四周各20px, 会自动修改元素的 x、y、width、height 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```

### 距离父级左右各20px

```ts
// #position 布局 [距离父级左右各20px]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: { left: 20, right: 20 }, // 距离父级左右各20px, 会自动修改元素的 x、width 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```

### 距离父级右边20px

```ts
// #position 布局 [距离父级右边20px]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: { right: 20 }, // 距离父级右边20px, 会自动修改元素的 x 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```

### 距离父级底部20px

```ts
// #position 布局 [距离父级底部20px]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: { bottom: 20 }, // 距离父级底部20px, 会自动修改元素的 y 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```

### 距离父级底部 20%

```ts
// #position 布局 [距离父级底部 20%]
import { Leafer, Frame, Rect } from 'leafer-ui'
import '@leafer-in/position' // 导入 position 插件 // [!code hl] 

const leafer = new Leafer({ view: window, fill: '#333' })

const frame = new Frame({
    x: 100,
    y: 100,
    width: 300,
    height: 300
})

const rect = new Rect({
    position: { bottom: { value: 0.2, type: 'percent' } },  // 距离父级底部 20%, 会自动修改元素的 y 属性 // [!code hl] 
    fill: '#32cd79',
})

leafer.add(frame)
frame.add(rect)
```
