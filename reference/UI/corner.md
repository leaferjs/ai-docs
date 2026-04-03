<script setup>
import Case from '/component/Case.vue'
</script>

# Corner

默认支持折线圆角，曲线圆角需安装插件。

::: tip 注意事项
曲线与折线、折线与曲线之间的圆角需安装 [corner 插件](/plugin/in/corner/index.md) 才能使用。
:::

## 关键属性

### cornerRadius: `number`

圆角大小。

<!-- ### cornerSmoothing: `number`

计划开发的功能。

平滑圆角所对应的数值，取值范围为 0 ～ 1，常用的 iOS 规范为 0.6。 -->

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

<case name="Ellipse" index=5 editor=false></case>

### 绘制带圆角的扇形圆环

::: code-group
```ts
// #创建 Ellipse [绘制带圆角的扇形圆环 (Leafer)]
import { Leafer, Ellipse } from 'leafer-ui'
import '@leafer-in/corner' // 导入圆角插件  // [!code hl]

const leafer = new Leafer({ view: window })

const ellipse = new Ellipse({  // [!code hl:9]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    cornerRadius: 10,
    fill: "#32cd79"
})

leafer.add(ellipse)
```
```ts
// #创建 Ellipse [绘制带圆角的扇形圆环 (App)]
import { App, Ellipse } from 'leafer-ui'
import '@leafer-in/editor' // 导入图形编辑器插件
import '@leafer-in/viewport' // 导入视口插件 (可选)
import '@leafer-in/corner' // 导入圆角插件 // [!code hl]

const app = new App({ view: window, editor: {} })

const ellipse = new Ellipse({  // [!code hl:10]
    width: 100,
    height: 100,
    startAngle: -60,
    endAngle: 180,
    innerRadius: 0.5,
    cornerRadius: 10,
    fill: "#32cd79",
    editable: true
})

app.tree.add(ellipse)
```
:::
