# 调试模式

通过开启调试模式可以观察应用内部状态。

```ts
import { Debug } from 'leafer-ui'

Debug.enable = true
```

## 定制打印信息

打印指定类型的信息

```ts
Debug.filter = 'RunTime' // or ['RunTime', 'Life']
```

排除指定类型的信息

```ts
Debug.exclude = 'Life' // or ['RunTime', 'Life']
```

## 显示重绘区域

```ts
Debug.showRepaint = true
```

## 自定义类型

自定义类型的信息可以通过`Debug.filter`与`Debug.exclude`定义是否输出到控制台。

```ts
import { Debug } from 'leafer-ui'

Debug.enable = true

const debug = Debug.get('CustomType') // [!code hl:7]

debug.log('content1', 'content2') // CustomType content1 content2

debug.warn('content')

debug.error('content')
```

## 关键属性

### enable: `boolean`

开启调试模式

### showWarn: `boolean`

是否打印警告信息，默认为 true。

### filter: `string` | `string`[]

打印指定类型的信息

### exclude: `string` | `string`[]

排除指定类型的信息

### showRepaint: `boolean`

显示重绘区域

## API

### [Debug](/api/classes/Debug.md)
