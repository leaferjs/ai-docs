# 注册元素

自定义元素的第 1 步是： **注册元素**。

注册成功后可以导入导出 [JSON](/reference/property/json.md) 。

## 注意事项

TypeScript 环境需在 `tsconfig.json` 配置文件中开启装饰器功能支持：

::: code-group

```json [tsconfig.json]
{
  "compilerOptions": {
    "experimentalDecorators": true // 开启装饰器功能
  }
}
```

:::

## 注册步骤

### 1. 注册元素

通过 `registerUI()` 方法注册元素。

实现原理：将元素的 tag 属性作为键值存放元素类。

### 2. 定义标签名

定义全局唯一的 [tag](/reference/property/tag.md) 名称。

导入 json 时，通过 tag 属性查找对应元素类进行实例化。

## 示例

::: code-group

```ts
// #自定义元素 [注册元素]
import { Leafer, Rect, UI, registerUI } from 'leafer-ui'


@registerUI()  // 1. 注册元素  // [!code hl:6]
class Custom extends Rect {

    public get __tag() { return 'Custom' } // 2. 定义全局唯一的 tag 名称

}


const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill: 'blue', draggable: true })

leafer.add(custom)

const json = custom.toJSON()
console.log(json) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

json.y = 300
leafer.add(UI.one(json)) // 通过json创建自定义元素
```

```js
import { Leafer, Rect, UI, registerUI } from 'leafer-ui'


class Custom extends Rect {   // [!code hl:7]

    get __tag() { return 'Custom' } // 2. 定义全局唯一的 tag 名称

}

Custom.registerUI() // 1. 注册元素


const leafer = new Leafer({ view: window })
const custom = new Custom({ width: 100, height: 200, fill:'blue', draggable: true })

leafer.add(custom)

const json = custom.toJSON()
console.log(json) // 导出json {tag: 'Custom', width: 200, height: 50, fill: 'blue', draggable: true }

json.y = 300
leafer.add(UI.one(json)) // 通过json创建自定义元素
```
:::

## 下一步

### [注册数据](/reference/display/custom/base/data.md)
