<script setup>
import Case from '/component/Case.vue'
</script>

# PathCreator

通过绘制方法生成路径数据。

## 关键属性

### path: [`IPathCommandData`](../interface/ui/PathData.md)

数字路径数据。

所有绘制方法都是往 path 里面添加数据。

<!--@include: ../path/PathDrawer.md-->

## 示例

<case name="Pen" index=2 editor=false></case>

### 创建新路径进行绘制

```ts
// #生成路径数据 - [创建新路径进行绘制]
import { Leafer, Path, PathCreator } from 'leafer-ui'

const leafer = new Leafer({ view: window })
leafer.add(new Path({ path: 'X 0 0 100 100 30', fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } }))

const drawer = new PathCreator() // [!code hl:4]
drawer.moveTo(40, 30).bezierCurveTo(70, 30, 90, 60, 63, 80).quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(new Path({ path: drawer.path, fill: 'white' }))
```

### 在字符串路径上继续绘制

```ts
// #生成路径数据 - [在字符串路径上继续绘制]
import { Leafer, Path, PathCreator } from 'leafer-ui'

const leafer = new Leafer({ view: window })
leafer.add(new Path({ path: 'X 0 0 100 100 30', fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } }))

const pathString = 'M 40, 30 C 70, 30, 90, 60, 63, 80' // [!code hl:4]

const drawer = new PathCreator(pathString)
drawer.quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(new Path({ path: drawer.path, fill: 'white' }))
```

### 在数字路径上继续绘制

```ts
// #生成路径数据 - [在数字路径上继续绘制]
import { Leafer, Path, PathCreator } from 'leafer-ui'

const leafer = new Leafer({ view: window })
leafer.add(new Path({ path: 'X 0 0 100 100 30', fill: { type: 'radial', stops: [{ offset: 0, color: '#FF4B4B' }, { offset: 1, color: '#FEB027' }] } }))

const pathCommandData = [1, 40, 30, 5, 70, 30, 90, 60, 63, 80] // [!code hl:4]

const drawer = new PathCreator(pathCommandData)
drawer.quadraticCurveTo(50, 88, 40, 80).bezierCurveTo(10, 60, 50, 40, 40, 30)

leafer.add(new Path({ path: drawer.path, fill: 'white' }))
```
