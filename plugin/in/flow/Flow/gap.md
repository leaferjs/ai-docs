<script setup>
import Case from '/component/Case.vue'
</script>

# 间距

<case name="FlowGap"  count=3 height=160 editor=false></case>

<case name="FlowGap" index=3 count=2 height=160 editor=false></case>

## 关键属性

### gap: [`IGap`](/api/modules.md#igap) | [`IPointGap`](/api/interfaces/IPointGap.md)

子元素之间的间距， 默认为 0。

```ts
// 设置 auto / fit 会均分剩余的空间，auto 最小值为 0，fit 允许为负数。
type IGap = number | 'auto' | 'fit'

interface IPointGap {
  x?: IGap // 单独设置 x 轴间距
  y?: IGap // 单独设置 y 轴间距
}
```

## 归属

### [Flow 元素](/plugin/in/flow/index.md)

## 示例

<case name="FlowGap"  index=0 height=130 editor=false></case>

### 固定数值的间距

```ts
// #自动布局 - 子元素间距 [固定数值的间距]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: 5, // 固定数值的间距 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowGap"  index=1 height=130 editor=false></case>

### 自动分配剩余空间为间距

```ts
// #自动布局 - 子元素间距 [自动分配剩余空间为间距]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: 'auto', // 自动分配剩余空间为间距 // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowGap"  index=2 height=130 editor=false></case>

### 自动分配剩余空间为间距（允许负值）

```ts
// #自动布局 - 子元素间距 [自动分配剩余空间为间距（允许负值）]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: 'fit', // 自动分配剩余空间为间距（允许负值） // [!code hl]
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowGap"  index=3 height=130 editor=false></case>

### 分别指定 X 轴和 Y 轴间距

```ts
// #自动布局 - 子元素间距 [分别指定 X 轴和 Y 轴间距]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: { x: 5, y: 10 }, // 分别指定 X 轴和 Y 轴间距 // [!code hl]
    flowWrap: true,
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```

<case name="FlowGap"  index=4 height=130 editor=false></case>

### 自动分配 Y 轴剩余空间为间距

```ts
// #自动布局 - 子元素间距 [自动分配 Y 轴剩余空间为间距]
import { Leafer, Box } from 'leafer-ui'
import { Flow } from '@leafer-in/flow'  // 导入自动布局插件 // [!code hl] 

const leafer = new Leafer({ view: window })

const flow = new Flow({
    gap: { x: 5, y: 'auto' }, // 自动分配 Y 轴剩余空间为间距 // [!code hl]
    flowWrap: true,
    fill: '#676',
    width: 100,
    height: 100,
    children: [
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '1', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '2', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '3', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] }),
        new Box({ fill: '#FF4B4B', children: [{ tag: 'Text', text: '4', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 20 }] }),
        new Box({ fill: '#FEB027', children: [{ tag: 'Text', text: '5', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 40 }] }),
        new Box({ fill: '#79CB4D', children: [{ tag: 'Text', text: '6', fill: 'white', textAlign: 'center', verticalAlign: 'middle', width: 25, height: 30 }] })
    ],
})

leafer.add(flow)
```
