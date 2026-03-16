# LeaferJS 性能

LeaferJS 是一款好用的 Canvas 引擎，专注图形交互和编辑场景。

在官方性能测试中，LeaferJS 在创建、交互和渲染性能方面均表现优异。

测试环境：

- Chrome 浏览器
- 2K 屏笔记本
- Canvas 渲染

性能基准测试

测试地址： https://benchmark.leaferjs.com

仓库地址：https://github.com/leaferjs/canvas-benchmark

# 创建性能

创建 **100万个可交互矩形** 的创建时间：

| 引擎   | 创建时间 |
| ------ | -------- |
| Leafer | 1.28 秒  |
| SVG    | 5.83 秒  |
| HTML   | 9.45 秒  |
| Pixi   | 9.91 秒  |
| Konva  | 15.93 秒 |
| Fabric | 41.33 秒 |

说明：

- LeaferJS 创建百万图形速度明显更快
- 在复杂图形编辑场景下优势明显

# 内存占用

创建 **100万个可交互矩形** 的内存占用：

| 引擎   | 内存占用 |
| ------ | -------- |
| Leafer | 0.32GB   |
| HTML   | 2.24GB   |
| SVG    | 2.67GB   |
| Pixi   | 3.17GB   |
| Konva  | 4.46GB   |
| Fabric | 8.17GB   |

说明：

- LeaferJS 内存占用远低于其他引擎
- 适合海量元素场景

# 拖拽元素性能

在 **100万个可交互矩形** 中拖拽单个元素的平均帧率：

| 引擎   | 帧率   |
| ------ | ------ |
| Leafer | 60 FPS |
| SVG    | 4 FPS  |
| Pixi   | 1 FPS  |
| HTML   | 1 FPS  |
| Konva  | 0 FPS  |
| Fabric | 0 FPS  |

说明：

LeaferJS 在大量元素场景下依然可以保持流畅拖拽体验。

# 平移视图性能

同时平移 **10万个可交互矩形** 的平均帧率：

| 引擎   | 帧率   |
| ------ | ------ |
| Leafer | 55 FPS |
| SVG    | 44 FPS |
| HTML   | 34 FPS |
| Pixi   | 17 FPS |
| Fabric | 3 FPS  |
| Konva  | 2 FPS  |

# 缩放视图性能

同时缩放 **10万个可交互矩形**：

| 引擎   | 帧率   |
| ------ | ------ |
| SVG    | 19 FPS |
| Leafer | 16 FPS |
| Pixi   | 13 FPS |
| HTML   | 8 FPS  |
| Konva  | 2 FPS  |
| Fabric | 1 FPS  |

# 动态元素性能

**1.6万个随机移动元素** 的平均帧率：

| 引擎   | 帧率   |
| ------ | ------ |
| Pixi   | 58 FPS |
| Leafer | 40 FPS |
| SVG    | 14 FPS |
| Konva  | 10 FPS |
| HTML   | 9 FPS  |
| Fabric | 8 FPS  |

# 图片缩放性能

同时缩放 **1000张 1000×600 图片**：

| 引擎   | 帧率   |
| ------ | ------ |
| Leafer | 60 FPS |
| Pixi   | 58 FPS |
| SVG    | 8 FPS  |
| Konva  | 7 FPS  |
| Fabric | 7 FPS  |
| HTML   | 6 FPS  |

# 官方性能结论

LeaferJS 能够：

- 瞬间创建 **100万个图形**
- 创建速度 **约 1.28 秒**
- 内存占用 **约 320MB**

并且在图形交互和编辑场景中保持流畅操作。
