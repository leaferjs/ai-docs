# 生命周期

元素从创建、添加、挂载，到移除、解除挂载、销毁的全过程，可在初始化事件中监听。

<br/>

![生命周期](/svg/ui_life.svg)

<br/>

## 示例

生命周期中的不同状态会通过 [ChildEvent](/reference/event/basic/Child)、 [PropertyEvent](/reference/event/basic/Property) 进行通知。

### 监听元素生命周期事件

初始化方式监听

```ts
// #监听元素生命周期事件 [通过 event 对象监听]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    cornerRadius: [50, 80, 0, 80],
    draggable: true,
    event: { // [!code hl:11]
        created() {
            console.log('rect created')
        },
        mounted: () => {
            console.log('mounted, leafer', rect.leafer) // 元素已挂载到 leafer 的树结构上，可以被渲染
        },
        unmounted() {
            console.log('unmounted')
        },
    }
})

leafer.add(rect)
```

通过 on 监听

```ts
// #监听元素生命周期事件 [通过 on 监听]
import { Leafer, Rect } from 'leafer-ui'

const leafer = new Leafer({ view: window })

const rect = new Rect({
    x: 100,
    y: 100,
    width: 200,
    height: 200,
    fill: '#32cd79',
    cornerRadius: [50, 80, 0, 80],
    draggable: true
})

leafer.add(rect)

rect.on('created', () => {  // [!code hl:11]
    console.log('rect created')
})

rect.on('mounted', () => {
    console.log('mounted, leafer', rect.leafer) // 元素已挂载到 leafer 的树结构上，可以被渲染
})

rect.on('unmounted', () => {
    console.log('unmounted')
})
```

## 下一步

### [应用周期](/guide/life/app)
