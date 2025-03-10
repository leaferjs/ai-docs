# 注册数据

自定义元素的第 2 步是： **注册数据处理类**。

元素 `ui.__` 属性是通过数据处理类自动创建的实例，用来计算、存储数据属性的多种状态。

## 注册步骤

### 1. 定义数据接口

需要为输入数据、数据处理（计算数据）定义接口（js 可忽略）。

**命名规范：**

输入数据接口： I + 元素名 + InputData, 如 `IRectInputData`

数据处理接口： I + 元素名 + Data, 如 `IRectData`

### 2. 定义数据处理类

需要继承之前的数据类定义。

**命名规范：** 元素名 + Data, 如 `RectData`

### 3. 注册数据处理类

记住必须在其他数据属性的前面注册，元素创建的时候会自动创建数据实例。

### 4. 定义初始化输入数据

主要用于创建元素时 ts 类型校验和提示（js 可忽略）。

## 了解数据结构

### [数据分层结构](/reference/UI/data.md#数据分层结构)

## 示例

::: code-group

```ts
// #自定义元素 [定义数据]
import { Leafer, Rect, RectData, registerUI, dataProcessor } from 'leafer-ui'
import { IRectInputData, IRectData } from '@leafer-ui/interface'


// 1. 定义数据接口  // [!code hl:9]

export interface ICustomInputData extends IRectInputData {
    // 输入数据接口，需定义为可选项，比如: width?: number | string
}

export interface ICustomData extends IRectData {
    // 数据处理（计算数据）接口, 需定义为可选项，比如: width?: number
}

// 2. 定义数据处理类 // [!code hl:4]
export class CustomData extends RectData implements ICustomData {
    // 元素数据类，负责元素的数据处理， 没有特殊处理逻辑的情况，定义一个空类就行
}


@registerUI()
export class Custom extends Rect {

    public get __tag() { return 'Custom' }

    // 3. 注册数据处理类，防止污染被继承元素的数据 // [!code hl:3]
    @dataProcessor(CustomData)
    declare public __: ICustomData


    // 4. 定义初始化输入数据 // [!code hl:5]
    constructor(data: ICustomInputData) {
        super(data)
        // ...
    }

}


const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.toJSON()) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

```

```js
import { Leafer, Rect, RectData, registerUI, dataProcessor } from 'leafer-ui'


export class Custom extends Rect {
    get __tag() { return 'Custom' }
}

Custom.registerUI()

// 1. 定义数据处理类 // [!code hl:7]
export class CustomData extends RectData {
    // 元素数据类，负责元素的数据处理， 没有特殊处理逻辑的情况，定义一个空类就行
}

 // 2. 注册数据处理类，防止污染被继承元素的数据
 Custom.registerData(CustomData)


const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

console.log(custom.__ instanceof CustomData) // true, 可以检查一下类型是否生效
console.log(custom.toJSON()) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

```
:::

## 下一步

### [添加属性](/reference/display/custom/base/attr.md)
