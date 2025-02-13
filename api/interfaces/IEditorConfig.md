# Interface: IEditorConfig

## Hierarchy

- [`IObject`](IObject.md)

  ↳ **`IEditorConfig`**

## Table of contents

### Properties

- [editSize](IEditorConfig.md#editsize)
- [dualEvent](IEditorConfig.md#dualevent)
- [keyEvent](IEditorConfig.md#keyevent)
- [stroke](IEditorConfig.md#stroke)
- [strokeWidth](IEditorConfig.md#strokewidth)
- [pointFill](IEditorConfig.md#pointfill)
- [pointSize](IEditorConfig.md#pointsize)
- [pointRadius](IEditorConfig.md#pointradius)
- [point](IEditorConfig.md#point)
- [middlePoint](IEditorConfig.md#middlepoint)
- [rect](IEditorConfig.md#rect)
- [area](IEditorConfig.md#area)
- [mask](IEditorConfig.md#mask)
- [circle](IEditorConfig.md#circle)
- [circleDirection](IEditorConfig.md#circledirection)
- [circleMargin](IEditorConfig.md#circlemargin)
- [rotatePoint](IEditorConfig.md#rotatepoint)
- [buttonsDirection](IEditorConfig.md#buttonsdirection)
- [buttonsFixed](IEditorConfig.md#buttonsfixed)
- [buttonsMargin](IEditorConfig.md#buttonsmargin)
- [hideOnMove](IEditorConfig.md#hideonmove)
- [hideOnSmall](IEditorConfig.md#hideonsmall)
- [moveCursor](IEditorConfig.md#movecursor)
- [resizeCursor](IEditorConfig.md#resizecursor)
- [rotateCursor](IEditorConfig.md#rotatecursor)
- [skewCursor](IEditorConfig.md#skewcursor)
- [around](IEditorConfig.md#around)
- [lockRatio](IEditorConfig.md#lockratio)
- [rotateGap](IEditorConfig.md#rotategap)
- [selector](IEditorConfig.md#selector)
- [hover](IEditorConfig.md#hover)
- [hoverStyle](IEditorConfig.md#hoverstyle)
- [select](IEditorConfig.md#select)
- [boxSelect](IEditorConfig.md#boxselect)
- [continuousSelect](IEditorConfig.md#continuousselect)
- [openInner](IEditorConfig.md#openinner)
- [moveable](IEditorConfig.md#moveable)
- [resizeable](IEditorConfig.md#resizeable)
- [flipable](IEditorConfig.md#flipable)
- [rotateable](IEditorConfig.md#rotateable)
- [skewable](IEditorConfig.md#skewable)
- [textEditor](IEditorConfig.md#texteditor)
- [pathEditor](IEditorConfig.md#patheditor)

## Properties

### editSize

• `Optional` **editSize**: [`IEditSize`](../modules.md#ieditsize)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:68](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L68)

___

### dualEvent

• `Optional` **dualEvent**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:69](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L69)

___

### keyEvent

• `Optional` **keyEvent**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:70](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L70)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:72](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L72)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:73](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L73)

___

### pointFill

• `Optional` **pointFill**: [`IFill`](../modules.md#ifill)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:75](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L75)

___

### pointSize

• `Optional` **pointSize**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:76](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L76)

___

### pointRadius

• `Optional` **pointRadius**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:77](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L77)

___

### point

• `Optional` **point**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:79](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L79)

___

### middlePoint

• `Optional` **middlePoint**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:80](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L80)

___

### rect

• `Optional` **rect**: [`IBoxInputData`](IBoxInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:82](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L82)

___

### area

• `Optional` **area**: [`IRectInputData`](IRectInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:83](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L83)

___

### mask

• `Optional` **mask**: `string` \| `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:84](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L84)

___

### circle

• `Optional` **circle**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:86](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L86)

___

### circleDirection

• `Optional` **circleDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:87](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L87)

___

### circleMargin

• `Optional` **circleMargin**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:88](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L88)

___

### rotatePoint

• `Optional` **rotatePoint**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:89](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L89)

___

### buttonsDirection

• `Optional` **buttonsDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:91](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L91)

___

### buttonsFixed

• `Optional` **buttonsFixed**: `boolean` \| ``"AABB"`` \| ``"OBB"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:92](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L92)

___

### buttonsMargin

• `Optional` **buttonsMargin**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:93](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L93)

___

### hideOnMove

• `Optional` **hideOnMove**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:95](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L95)

___

### hideOnSmall

• `Optional` **hideOnSmall**: `number` \| `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:96](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L96)

___

### moveCursor

• `Optional` **moveCursor**: [`ICursorType`](../modules.md#icursortype)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:98](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L98)

___

### resizeCursor

• `Optional` **resizeCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:99](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L99)

___

### rotateCursor

• `Optional` **rotateCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:100](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L100)

___

### skewCursor

• `Optional` **skewCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:101](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L101)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:103](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L103)

___

### lockRatio

• `Optional` **lockRatio**: `boolean` \| ``"corner"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:104](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L104)

___

### rotateGap

• `Optional` **rotateGap**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:105](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L105)

___

### selector

• `Optional` **selector**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:107](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L107)

___

### hover

• `Optional` **hover**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:108](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L108)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:109](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L109)

___

### select

• `Optional` **select**: ``"press"`` \| ``"tap"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:110](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L110)

___

### boxSelect

• `Optional` **boxSelect**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:111](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L111)

___

### continuousSelect

• `Optional` **continuousSelect**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:112](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L112)

___

### openInner

• `Optional` **openInner**: ``"long"`` \| ``"double"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:113](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L113)

___

### moveable

• `Optional` **moveable**: `boolean` \| ``"move"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:115](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L115)

___

### resizeable

• `Optional` **resizeable**: `boolean` \| ``"zoom"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:116](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L116)

___

### flipable

• `Optional` **flipable**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:117](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L117)

___

### rotateable

• `Optional` **rotateable**: `boolean` \| ``"rotate"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:118](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L118)

___

### skewable

• `Optional` **skewable**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:119](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L119)

___

### textEditor

• `Optional` **textEditor**: [`IObject`](IObject.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:121](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L121)

___

### pathEditor

• `Optional` **pathEditor**: [`IObject`](IObject.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:122](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/interface/src/editor/IEditor.ts#L122)
