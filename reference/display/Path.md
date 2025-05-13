<script setup>
import Case from '/component/Case.vue'
</script>

# Path 元素

绘制路径，可以画出任意形状的图形， 了解 [绘图命令](/reference/interface/ui/PathData.md)。

<case name="Path" editor=false></case>

<br/>

::: tip 继承
Path &nbsp;>&nbsp; [UI](./UI.md)
:::

## 关键属性

### path: [`IPathString`](/reference/interface/ui/PathData.md#ipathstring) ｜ [`IPathCommandData`](/reference/interface/ui/PathData.md#ipathcommanddata) ｜ [`IPathCommandObject`](/reference/interface/ui/PathData.md#ipathcommandobject)[]

路径数据，支持 [SVG 绘图字符串](/reference/interface/ui/PathData.md#ipathstring) 、 [绘图数字数组](/reference/interface/ui/PathData.md#ipathcommanddata)、[绘图对象数组](/reference/interface/ui/PathData.md#ipathcommandobject)。

可通过 [pen 画笔](#pen-pathcreator) 快速绘制路径。

### windingRule: `WindingRule`

路径缠绕规则， 默认为非零缠绕 nonzero。

两条以上路径重合时的填充算法，可产生相加、相交、减去的效果。

```ts
type WindingRule: =  "nonzero" | "evenodd"
```

## 只读属性

### pen: [PathCreator](/reference/path/PathCreator.md)

画笔，可以像 Canvas 2D API 一样快速 [绘制路径](/reference/path/PathCreator.md)，并提供了一些新的方法。

画笔实际上修改的是元素 path 属性数据。

:::danger 注意事项

为了节省创建 pen 实例的数量，全局共享的是同一只画笔，访问 pen 属性时自动装载当前元素的 path，

所以 pen 要紧跟着元素，一次把内容绘制完成，如：rect.pen.moveTo(100,100).lineTo(200,200)。

:::

<!-- ## 继承元素

### [UI](./UI.md) -->

<!-- ## API

### [Path](/api/classes/Path.md) -->

## 示例

<case name="Path" index=5 editor=false></case>

### 创建路径

::: code-group
```ts
// #创建 Path [标准创建 (Leafer)]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({ // [!code hl:5]
    scale: 0.1,
    path: 'M945.344 586.304c-13.056-93.44-132.48-98.048-132.48-98.048 0-29.888-39.808-47.424-39.808-47.424L201.664 440.832c-36.736 0-42.112 51.264-42.112 51.264 7.68 288 181.44 382.976 181.44 382.976l299.456 0c42.88-31.36 101.888-122.56 101.888-122.56 9.216 3.072 72.768-0.832 97.984-6.144C865.6 740.992 958.336 679.68 945.344 586.304zM365.568 825.28c-145.472-105.664-130.944-328.576-130.944-328.576l80.448 0c-44.416 126.4 43.648 285.696 55.872 307.904C383.232 826.816 365.568 825.28 365.568 825.28zM833.472 694.272c-37.568 22.272-65.152 7.68-65.152 7.68 39.04-54.4 42.112-159.296 42.112-159.296 6.848 2.304 12.288-26.048 61.312 23.744C920.768 616.128 871.04 672.064 833.472 694.272z M351.68 129.856c0 0-119.424 72.832-44.416 140.928 75.008 68.16 68.16 93.44 24.512 153.216 0 0 81.92-41.344 71.168-104.192s-89.6-94.208-72.768-137.792C347.136 138.304 351.68 129.856 351.68 129.856z M615.232 91.648c0 0-119.488 72.832-44.352 140.928 74.944 68.16 68.032 93.44 24.448 153.216 0 0 81.984-41.344 71.232-104.192-10.688-62.784-89.6-94.208-72.832-137.792C610.624 100.032 615.232 91.648 615.232 91.648z M491.136 64c0 0-74.304 6.144-88.128 78.144C389.248 214.144 435.968 240.96 471.936 276.992 507.904 312.96 492.608 380.352 452.032 427.904c0 0 72.768-25.344 89.6-94.976 16.832-69.76-17.344-94.272-52.8-134.784C453.312 157.504 456.64 83.968 491.136 64z',
    fill: '#32cd79'
})

leafer.add(path)
```
```ts
// #创建 Path [标准创建 (App)]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const path = new Path({ // [!code hl:6]
    scale: 0.1,
    path: 'M945.344 586.304c-13.056-93.44-132.48-98.048-132.48-98.048 0-29.888-39.808-47.424-39.808-47.424L201.664 440.832c-36.736 0-42.112 51.264-42.112 51.264 7.68 288 181.44 382.976 181.44 382.976l299.456 0c42.88-31.36 101.888-122.56 101.888-122.56 9.216 3.072 72.768-0.832 97.984-6.144C865.6 740.992 958.336 679.68 945.344 586.304zM365.568 825.28c-145.472-105.664-130.944-328.576-130.944-328.576l80.448 0c-44.416 126.4 43.648 285.696 55.872 307.904C383.232 826.816 365.568 825.28 365.568 825.28zM833.472 694.272c-37.568 22.272-65.152 7.68-65.152 7.68 39.04-54.4 42.112-159.296 42.112-159.296 6.848 2.304 12.288-26.048 61.312 23.744C920.768 616.128 871.04 672.064 833.472 694.272z M351.68 129.856c0 0-119.424 72.832-44.416 140.928 75.008 68.16 68.16 93.44 24.512 153.216 0 0 81.92-41.344 71.168-104.192s-89.6-94.208-72.768-137.792C347.136 138.304 351.68 129.856 351.68 129.856z M615.232 91.648c0 0-119.488 72.832-44.352 140.928 74.944 68.16 68.032 93.44 24.448 153.216 0 0 81.984-41.344 71.232-104.192-10.688-62.784-89.6-94.208-72.832-137.792C610.624 100.032 615.232 91.648 615.232 91.648z M491.136 64c0 0-74.304 6.144-88.128 78.144C389.248 214.144 435.968 240.96 471.936 276.992 507.904 312.96 492.608 380.352 452.032 427.904c0 0 72.768-25.344 89.6-94.976 16.832-69.76-17.344-94.272-52.8-134.784C453.312 157.504 456.64 83.968 491.136 64z',
    fill: '#32cd79',
    editable: true
})

app.tree.add(path)
```
:::

<case name="Pen" index=0 editor=false></case>

### 缠绕路径

底部圆角矩形与圆形相交，产生挖空效果。

::: code-group
```ts
// #创建 Path [缠绕路径 (Leafer)]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path1 = new Path({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B'
})

const path2 = new Path({
    path: 'P 50 50 20',
    fill: '#FEB027'
})

leafer.add(path1)
leafer.add(path2)
```
```ts
// #创建 Path [缠绕路径 (App)]
import { App, Path } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)

const app = new App({ view: window, editor: {} })

const path1 = new Path({
    path: 'X 0 0 100 100 30 P 50 50 25', // [!code hl:2]
    windingRule: 'evenodd',
    fill: '#FF4B4B',
    editable: true
})

const path2 = new Path({
    path: 'P 50 50 20',
    fill: '#FEB027',
    editable: true
})

app.tree.add(path1)
app.tree.add(path2)
```
:::

<case name="Rect" index=6 editor=false></case>

### 使用画笔绘制

```ts
// #创建 Path [使用 pen 绘制]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({
    fill: '#32cd79'
})

leafer.add(path)

path.windingRule = 'evenodd' // [!code hl:2] 
path.pen.roundRect(0, 0, 100, 100, 30).drawArc(50, 50, 25)

```

### 使用路径数据

```ts
// #创建 Path [使用路径数据]
import { Leafer, Path } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const path = new Path({
    windingRule: 'evenodd',  // [!code hl:2] 
    path: 'X0 0 100 100 30M75 50P50 50 25',
    fill: '#32cd79'
})

leafer.add(path)

```
