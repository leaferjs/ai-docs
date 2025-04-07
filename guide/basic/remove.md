<script setup>
import Case from '/component/Case.vue'
</script>

# 移除元素

## 标准移除

```ts
// #移除元素 [标准移除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    rect.remove() // [!code hl] // 等同于 leafer.remove(rect)

}, 2000)

```

## 条件移除

同 [find()](/reference/UI/find.md) 方法的参数一致，内部会先 find() 再批量移除。

::: tip 注意事项
需安装 [查找元素插件](/plugin/in/find/index.md) 才能使用，或直接安装 [leafer-game](/guide/install/game/start.md)、 [leafer-editor](/guide/install/editor/start.md) （已集成查找元素插件）
:::

```ts
// #移除元素 [条件移除]
import { Leafer, Rect } from 'leafer-ui'
import '@leafer-in/find' // 导入查找元素插件

const leafer = new Leafer({ view: window })

const rect = Rect.one({ id: 'book', fill: '#32cd79' }, 100, 100)
const rect2 = Rect.one({ fill: 'blue' }, 300, 100)

leafer.addMany(rect, rect2)

setTimeout(() => {

    // 移除 id 为 book 的元素
    leafer.remove('#book') // [!code hl] // 等同于 leafer.find('#book').forEach(item => item.remove())

}, 2000)

```

## 销毁移除

```ts
// #移除元素 [销毁移除]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)

leafer.add(rect)

setTimeout(() => {

    rect.destroy() // [!code hl] // 等同于 rect.remove() => rect.destroy()

}, 2000)

```

## 清空元素

```ts
// #移除元素 [清空元素]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = Rect.one({ fill: '#32cd79' }, 100, 100)
const rect2 = Rect.one({ fill: 'blue' }, 300, 100)

leafer.addMany(rect, rect2)

setTimeout(() => {

    leafer.clear() // [!code hl] // 清空并销毁所有子元素

}, 2000)

```

## 销毁应用

```ts
// #销毁应用
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

leafer.add(Rect.one({ fill: '#32cd79' }, 100, 100))

setTimeout(() => {

    leafer.destroy() // [!code hl:2] // 应用销毁，默认为异步方式
    // leafer.destroy(true)  //  销毁应用，同步方式

}, 2000)

```

## 下一步

### [导出元素](/guide/basic/export.md)
