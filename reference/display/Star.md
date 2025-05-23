<script setup>
import Case from '/component/Case.vue'
</script>

# Star 元素

绘制车标、星光、五角星、多角星形。

<case name="Star" editor=false></case>

<br/>

::: tip 继承
Star &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### width: `number`

星形的宽度。

### height: `number`

星形的高度。

### corners: `number`

星形的角数，取值范围为 >=3。

内部逻辑：在内外圆上每 (360 / corners) 度取一个点，再将点连成线，组成一个多角星形。

### innerRadius: `number`

内半径比例，默认 0.382，取值范围为 0.0 ～ 1.0。

```ts
// 五角星
corners: 5
innerRadius: 0.382
```

## 圆角属性

### cornerRadius: `number`

圆角大小，使图形拐角处变的圆滑。

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Star](/api/classes/Star.md) -->

## 示例

<case name="Star" index=0 editor=false></case>

### 绘制车标

::: code-group
```ts
// #创建 Star [绘制车标 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:7]
    width: 100,
    height: 100,
    corners: 3,
    innerRadius: 0.15,
    fill: '#32cd79'
})

leafer.add(star)
```
```ts
// #创建 Star [绘制车标 (App)]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const star = new Star({  // [!code hl:8]
    width: 100,
    height: 100,
    corners: 3,
    innerRadius: 0.15,
    fill: '#32cd79',
    editable: true
})

app.tree.add(star)
```
:::

<case name="Star" index=1 editor=false></case>

### 绘制星光

::: code-group
```ts
// #创建 Star [绘制星光 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:7]
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: '#32cd79'
})

leafer.add(star)
```
```ts
// #创建 Star [绘制星光 (App)]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const star = new Star({  // [!code hl:8]
    width: 100,
    height: 100,
    corners: 4,
    innerRadius: 0.1,
    fill: '#32cd79',
    editable: true
})

app.tree.add(star)
```
:::

<case name="Star" index=2 editor=false></case>

### 绘制五角星

::: code-group
```ts
// #创建 Star [绘制五角星 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:6]
    width: 100,
    height: 100,
    corners: 5,
    fill: '#32cd79'
})

leafer.add(star)
```
```ts
// #创建 Star [绘制五角星 (App)]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const star = new Star({  // [!code hl:7]
    width: 100,
    height: 100,
    corners: 5,
    fill: '#32cd79',
    editable: true
})

app.tree.add(star)
```
:::

<case name="Star" index=5 editor=false></case>

### 绘制圆角星形

::: code-group
```ts
// #创建 Star [绘制圆角星形 (Leafer)]
import { Leafer, Star } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const star = new Star({  // [!code hl:8]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#32cd79'
})

leafer.add(star)
```
```ts
// #创建 Star [绘制圆角星形 (App)]
import { App, Star } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const star = new Star({  // [!code hl:9]
    width: 100,
    height: 100,
    innerRadius: 0.5,
    corners: 8,
    cornerRadius: 5,
    fill: '#32cd79',
    editable: true
})

app.tree.add(star)
```
:::
