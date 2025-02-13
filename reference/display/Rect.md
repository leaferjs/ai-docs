<script setup>
import Case from '/component/Case.vue'
</script>

# Rect

绘制矩形、圆角矩形。

<case name="Rect" editor=false></case>

<br/>

::: tip 继承
Rect &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

宽度。

### height: `number`

高度。

## 圆角属性

### cornerRadius: `number` | `number`[]

圆角大小，可以分别设置 4 个圆角。

```ts
cornerRadius: [20, 10, 20, 10] // [topLeft, topRight, bottomRight, bottomLeft]
cornerRadius: [20, 10, 20] // [topLeft, (topRight-bottomLeft), bottomRight]
cornerRadius: [20, 10] // [ (topLeft-bottomRight), (topRight-bottomLeft)]
cornerRadius: 20 // all
```

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Rect](/api/classes/Rect.md) -->

## 示例

<case name="Rect" index=0 editor=false></case>

### 绘制矩形

```ts
// #创建 Rect [绘制矩形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({  // [!code hl:5]
    width: 100,
    height: 100,
    fill: '#32cd79'
})

leafer.add(rect)
```

<case name="Rect" index=1 editor=false></case>

### 绘制圆角矩形

```ts
// #创建 Rect [绘制圆角矩形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: 20
})

leafer.add(rect)
```

<case name="Rect" index=4 editor=false></case>

### 绘制不同圆角的矩形

```ts
// #创建 Rect [绘制不同圆角的矩形]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({ // [!code hl:6]
    width: 100,
    height: 100,
    fill: '#32cd79',
    cornerRadius: [0, 40, 20, 40]
})

leafer.add(rect)
```
