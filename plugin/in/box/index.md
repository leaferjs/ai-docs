# box 元素

让基础元素支持 Box 能力，可往里面添加子元素。

## 安装插件

需要安装 box 插件才能使用，[点此访问 Github 仓库](https://github.com/leaferjs/leafer-in/tree/main/packages/box)。

::: code-group

```sh [npm]
npm install @leafer-in/box
```

```sh [pnpm]
pnpm add @leafer-in/box
```

```sh [yarn]
yarn add @leafer-in/box
```

```sh [bun]
bun add @leafer-in/box
```

:::

或通过 script 标签引入，使用全局变量 LeaferIN.box 访问插件内部功能。

::: code-group

```html [box.min]
<script src="https://unpkg.com/@leafer-in/box@2.0.4/dist/box.min.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

```html [box]
<script src="https://unpkg.com/@leafer-in/box@2.0.4/dist/box.js"></script>
<script>
  const { ImageBox } = LeaferIN.box
</script>
```

<!-- https://unpkg.com 无法访问时，可替换为 https://cdn.jsdelivr.net/npm -->

:::

## 元素

### [ImageBox](/plugin/in/box/ImageBox.md)

### [EllipseBox](/plugin/in/box/EllipseBox.md)

### [PolygonBox](/plugin/in/box/PolygonBox.md)

### [StarBox](/plugin/in/box/StarBox.md)

### [PathBox](/plugin/in/box/PathBox.md)
