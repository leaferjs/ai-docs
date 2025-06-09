# Interface: IEditorConfig

## Hierarchy

- [`IObject`](IObject.md)

  ↳ **`IEditorConfig`**

## Table of contents

### Properties

- [editSize](IEditorConfig.md#editsize)
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
- [editBox](IEditorConfig.md#editbox)
- [hover](IEditorConfig.md#hover)
- [hoverStyle](IEditorConfig.md#hoverstyle)
- [select](IEditorConfig.md#select)
- [selectedStyle](IEditorConfig.md#selectedstyle)
- [multipleSelect](IEditorConfig.md#multipleselect)
- [boxSelect](IEditorConfig.md#boxselect)
- [continuousSelect](IEditorConfig.md#continuousselect)
- [openInner](IEditorConfig.md#openinner)
- [moveable](IEditorConfig.md#moveable)
- [resizeable](IEditorConfig.md#resizeable)
- [flipable](IEditorConfig.md#flipable)
- [rotateable](IEditorConfig.md#rotateable)
- [skewable](IEditorConfig.md#skewable)
- [beforeSelect](IEditorConfig.md#beforeselect)
- [beforeMove](IEditorConfig.md#beforemove)
- [beforeScale](IEditorConfig.md#beforescale)
- [beforeRotate](IEditorConfig.md#beforerotate)
- [beforeSkew](IEditorConfig.md#beforeskew)
- [preventEditInner](IEditorConfig.md#preventeditinner)
- [textEditor](IEditorConfig.md#texteditor)
- [pathEditor](IEditorConfig.md#patheditor)

## Properties

### editSize

• `Optional` **editSize**: [`IEditSize`](../modules.md#ieditsize)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:81](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L81)

___

### keyEvent

• `Optional` **keyEvent**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:82](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L82)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L84)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:85](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L85)

___

### pointFill

• `Optional` **pointFill**: [`IFill`](../modules.md#ifill)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:87](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L87)

___

### pointSize

• `Optional` **pointSize**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:88](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L88)

___

### pointRadius

• `Optional` **pointRadius**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:89](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L89)

___

### point

• `Optional` **point**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:91](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L91)

___

### middlePoint

• `Optional` **middlePoint**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:92](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L92)

___

### rect

• `Optional` **rect**: [`IBoxInputData`](IBoxInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:94](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L94)

___

### area

• `Optional` **area**: [`IRectInputData`](IRectInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:95](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L95)

___

### mask

• `Optional` **mask**: `string` \| `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:96](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L96)

___

### circle

• `Optional` **circle**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:98](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L98)

___

### circleDirection

• `Optional` **circleDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:99](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L99)

___

### circleMargin

• `Optional` **circleMargin**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:100](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L100)

___

### rotatePoint

• `Optional` **rotatePoint**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:101](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L101)

___

### buttonsDirection

• `Optional` **buttonsDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:103](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L103)

___

### buttonsFixed

• `Optional` **buttonsFixed**: `boolean` \| ``"AABB"`` \| ``"OBB"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:104](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L104)

___

### buttonsMargin

• `Optional` **buttonsMargin**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:105](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L105)

___

### hideOnMove

• `Optional` **hideOnMove**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:107](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L107)

___

### hideOnSmall

• `Optional` **hideOnSmall**: `number` \| `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:108](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L108)

___

### moveCursor

• `Optional` **moveCursor**: [`ICursorType`](../modules.md#icursortype)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:110](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L110)

___

### resizeCursor

• `Optional` **resizeCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:111](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L111)

___

### rotateCursor

• `Optional` **rotateCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:112](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L112)

___

### skewCursor

• `Optional` **skewCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:113](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L113)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:115](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L115)

___

### lockRatio

• `Optional` **lockRatio**: `boolean` \| ``"corner"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:116](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L116)

___

### rotateGap

• `Optional` **rotateGap**: `number`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:117](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L117)

___

### selector

• `Optional` **selector**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:119](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L119)

___

### editBox

• `Optional` **editBox**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:120](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L120)

___

### hover

• `Optional` **hover**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:121](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L121)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:122](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L122)

___

### select

• `Optional` **select**: ``"press"`` \| ``"tap"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:123](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L123)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:124](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L124)

___

### multipleSelect

• `Optional` **multipleSelect**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:125](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L125)

___

### boxSelect

• `Optional` **boxSelect**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:126](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L126)

___

### continuousSelect

• `Optional` **continuousSelect**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:127](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L127)

___

### openInner

• `Optional` **openInner**: ``"long"`` \| ``"double"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:128](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L128)

___

### moveable

• `Optional` **moveable**: `boolean` \| ``"move"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:130](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L130)

___

### resizeable

• `Optional` **resizeable**: `boolean` \| ``"zoom"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:131](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L131)

___

### flipable

• `Optional` **flipable**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:132](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L132)

___

### rotateable

• `Optional` **rotateable**: `boolean` \| ``"rotate"``

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:133](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L133)

___

### skewable

• `Optional` **skewable**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:134](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L134)

___

### beforeSelect

• `Optional` **beforeSelect**: [`IEditorBeforeSelect`](IEditorBeforeSelect.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:136](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L136)

___

### beforeMove

• `Optional` **beforeMove**: [`IEditorBeforeMove`](IEditorBeforeMove.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:137](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L137)

___

### beforeScale

• `Optional` **beforeScale**: [`IEditorBeforeScale`](IEditorBeforeScale.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:138](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L138)

___

### beforeRotate

• `Optional` **beforeRotate**: [`IEditorBeforeRotate`](IEditorBeforeRotate.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:139](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L139)

___

### beforeSkew

• `Optional` **beforeSkew**: [`IEditorBeforeSkew`](IEditorBeforeSkew.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:140](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L140)

___

### preventEditInner

• `Optional` **preventEditInner**: `boolean`

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:142](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L142)

___

### textEditor

• `Optional` **textEditor**: [`IObject`](IObject.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:144](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L144)

___

### pathEditor

• `Optional` **pathEditor**: [`IObject`](IObject.md)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:145](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/editor/IEditor.ts#L145)
