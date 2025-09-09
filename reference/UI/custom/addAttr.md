# addAttr

新增元素属性（静态方法），新增后的属性，可以收集变化和 JSON 导出。

## 关键属性

### addAttr ( attrName: `string`, defaultValue: [`IValue`](/api/modules.md#ivalue), typeFn?: [IAttrDecorator](/api/interfaces/IAttrDecorator.md) )

新增元素属性（全局操作）， defaultValue 为默认值（支持函数返回），typeFn 为数据装饰器（默认为 [boundsType](/api/modules.md#boundstype)）。

## 数据装饰器

数据处理方法，自动为属性生成有相关业务逻辑的 setter/getter 函数。

### [boundsType](/api/modules.md#boundstype)

边界类型。

当属性有变化时，会引起元素的重新布局和渲染。

### [surfaceType](/api/modules.md#boundstype)

表面类型。

当属性有变化时，会引起元素的重新渲染， 但不会布局。

### [dataType](/api/modules.md#datatype)

数据类型。

当属性有变化时，不会重新布局和渲染。

## 归属

### [UI 元素](/reference/display/UI.md)

## 示例

### 为文本新增一个 float 属性

```ts
// #新增元素属性 [为文本新增一个 float 属性]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('float', 'left')  //  [!code hl]

// default float

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).float) // left

// set float

const text2 = new Text({ float: 'right' } as any)

console.log((text2 as any).float) // right
```

### 为文本新增一个可变的 float 属性

```ts
// #新增元素属性 [为文本新增一个可变 float 属性]
import { Leafer, Text } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('float', (text: Text) => { return text.width === 200 ? 'center' : 'left' })  //  [!code hl]

// default float

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).float) // left

text.width = 200

console.log((text as any).float) // right

// set float

const text2 = new Text({ float: 'right' } as any)

console.log((text2 as any).float) // right
```

### 为文本新增一个 dataType 类型的属性

```ts
// #新增元素属性 [为文本新增一个 dataType 类型的属性]
import { Leafer, Text, dataType } from 'leafer-ui'

const leafer = new Leafer({ view: window })

Text.addAttr('version', '1.9.6', dataType)  //  [!code hl]

// default version

const text = new Text({ text: 'Welcome to LeaferJS' })

leafer.add(text)

console.log((text as any).version) // 1.9.6

// set version

const text2 = new Text({ version: '1.9.6' } as any)

console.log((text2 as any).version) // 1.9.6
```
