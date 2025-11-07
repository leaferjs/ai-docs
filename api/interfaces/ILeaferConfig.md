# Interface: ILeaferConfig

## Hierarchy

- [`IRendererConfig`](IRendererConfig.md)

- [`ILeaferCanvasConfig`](ILeaferCanvasConfig.md)

- [`IInteractionConfig`](IInteractionConfig.md)

- [`ILayouterConfig`](ILayouterConfig.md)

  ↳ **`ILeaferConfig`**

  ↳↳ [`IAppConfig`](IAppConfig.md)

## Table of contents

### Properties

- [start](ILeaferConfig.md#start)
- [type](ILeaferConfig.md#type)
- [mobile](ILeaferConfig.md#mobile)
- [realCanvas](ILeaferConfig.md#realcanvas)
- [grow](ILeaferConfig.md#grow)
- [lazySpeard](ILeaferConfig.md#lazyspeard)
- [view](ILeaferConfig.md#view)
- [canvas](ILeaferConfig.md#canvas)
- [pixelRatio](ILeaferConfig.md#pixelratio)
- [pixelSnap](ILeaferConfig.md#pixelsnap)
- [pointSnap](ILeaferConfig.md#pointsnap)
- [smooth](ILeaferConfig.md#smooth)
- [hittable](ILeaferConfig.md#hittable)
- [webgl](ILeaferConfig.md#webgl)
- [contextSettings](ILeaferConfig.md#contextsettings)
- [wheel](ILeaferConfig.md#wheel)
- [pointer](ILeaferConfig.md#pointer)
- [touch](ILeaferConfig.md#touch)
- [multiTouch](ILeaferConfig.md#multitouch)
- [zoom](ILeaferConfig.md#zoom)
- [move](ILeaferConfig.md#move)
- [eventer](ILeaferConfig.md#eventer)
- [cursor](ILeaferConfig.md#cursor)
- [keyEvent](ILeaferConfig.md#keyevent)
- [partLayout](ILeaferConfig.md#partlayout)
- [top](ILeaferConfig.md#top)
- [right](ILeaferConfig.md#right)
- [bottom](ILeaferConfig.md#bottom)
- [left](ILeaferConfig.md#left)
- [width](ILeaferConfig.md#width)
- [height](ILeaferConfig.md#height)
- [usePartRender](ILeaferConfig.md#usepartrender)
- [maxFPS](ILeaferConfig.md#maxfps)
- [fill](ILeaferConfig.md#fill)

## Properties

### start

• `Optional` **start**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:26](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L26)

___

### type

• `Optional` **type**: [`ILeaferType`](../modules.md#ileafertype)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:27](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L27)

___

### mobile

• `Optional` **mobile**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:28](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L28)

___

### realCanvas

• `Optional` **realCanvas**: `boolean`

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:29](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L29)

___

### grow

• `Optional` **grow**: `boolean` \| ``"box"`` \| ``"render"``

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:30](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L30)

___

### lazySpeard

• `Optional` **lazySpeard**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:31](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/app/ILeafer.ts#L31)

___

### view

• `Optional` **view**: `string` \| [`IObject`](IObject.md)

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[view](ILeaferCanvasConfig.md#view)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:12](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L12)

___

### canvas

• `Optional` **canvas**: `string` \| [`IObject`](IObject.md)

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[canvas](ILeaferCanvasConfig.md#canvas)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:13](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L13)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[pixelRatio](ILeaferCanvasConfig.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:15](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L15)

___

### pixelSnap

• `Optional` **pixelSnap**: `boolean`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[pixelSnap](ILeaferCanvasConfig.md#pixelsnap)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:16](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L16)

___

### pointSnap

• `Optional` **pointSnap**: `boolean`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[pointSnap](ILeaferCanvasConfig.md#pointsnap)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:17](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L17)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[smooth](ILeaferCanvasConfig.md#smooth)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:18](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L18)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[hittable](ILeaferCanvasConfig.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:19](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L19)

___

### webgl

• `Optional` **webgl**: `boolean`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[webgl](ILeaferCanvasConfig.md#webgl)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:20](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L20)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[contextSettings](ILeaferCanvasConfig.md#contextsettings)

#### Defined in

[src/leafer/packages/interface/src/canvas/ILeaferCanvas.ts:21](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/canvas/ILeaferCanvas.ts#L21)

___

### wheel

• `Optional` **wheel**: [`IWheelConfig`](IWheelConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[wheel](IInteractionConfig.md#wheel)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:97](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L97)

___

### pointer

• `Optional` **pointer**: [`IPointerConfig`](IPointerConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[pointer](IInteractionConfig.md#pointer)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:98](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L98)

___

### touch

• `Optional` **touch**: [`ITouchConfig`](ITouchConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[touch](IInteractionConfig.md#touch)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:99](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L99)

___

### multiTouch

• `Optional` **multiTouch**: [`IMultiTouchConfig`](IMultiTouchConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[multiTouch](IInteractionConfig.md#multitouch)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:100](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L100)

___

### zoom

• `Optional` **zoom**: [`IZoomConfig`](IZoomConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[zoom](IInteractionConfig.md#zoom)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:101](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L101)

___

### move

• `Optional` **move**: [`IMoveConfig`](IMoveConfig.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[move](IInteractionConfig.md#move)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:102](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L102)

___

### eventer

• `Optional` **eventer**: [`IObject`](IObject.md)

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[eventer](IInteractionConfig.md#eventer)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:103](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L103)

___

### cursor

• `Optional` **cursor**: `boolean`

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[cursor](IInteractionConfig.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:104](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L104)

___

### keyEvent

• `Optional` **keyEvent**: `boolean`

#### Inherited from

[IInteractionConfig](IInteractionConfig.md).[keyEvent](IInteractionConfig.md#keyevent)

#### Defined in

[src/leafer/packages/interface/src/interaction/IInteraction.ts:105](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/interaction/IInteraction.ts#L105)

___

### partLayout

• `Optional` **partLayout**: [`IPartLayoutConfig`](IPartLayoutConfig.md)

#### Inherited from

[ILayouterConfig](ILayouterConfig.md).[partLayout](ILayouterConfig.md#partlayout)

#### Defined in

[src/leafer/packages/interface/src/layouter/ILayouter.ts:31](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/layouter/ILayouter.ts#L31)

___

### top

• `Optional` **top**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[top](ILeaferCanvasConfig.md#top)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:142](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L142)

___

### right

• `Optional` **right**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[right](ILeaferCanvasConfig.md#right)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:143](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L143)

___

### bottom

• `Optional` **bottom**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[bottom](ILeaferCanvasConfig.md#bottom)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:144](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L144)

___

### left

• `Optional` **left**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[left](ILeaferCanvasConfig.md#left)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:145](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L145)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[width](ILeaferCanvasConfig.md#width)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:150](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L150)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[height](ILeaferCanvasConfig.md#height)

#### Defined in

[src/leafer/packages/interface/src/math/IMath.ts:151](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/math/IMath.ts#L151)

___

### usePartRender

• `Optional` **usePartRender**: `boolean`

#### Inherited from

[IRendererConfig](IRendererConfig.md).[usePartRender](IRendererConfig.md#usepartrender)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:27](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/renderer/IRenderer.ts#L27)

___

### maxFPS

• `Optional` **maxFPS**: `number`

#### Inherited from

[IRendererConfig](IRendererConfig.md).[maxFPS](IRendererConfig.md#maxfps)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:28](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/renderer/IRenderer.ts#L28)

___

### fill

• `Optional` **fill**: `string`

#### Inherited from

[ILeaferCanvasConfig](ILeaferCanvasConfig.md).[fill](ILeaferCanvasConfig.md#fill)

#### Defined in

[src/leafer/packages/interface/src/renderer/IRenderer.ts:29](https://github.com/leaferjs/leafer/blob/85fdb76749efb9e5fee7bb7bc97ec6696df6e224/packages/interface/src/renderer/IRenderer.ts#L29)
