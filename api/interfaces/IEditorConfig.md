# Interface: IEditorConfig

## Hierarchy

- [`IObject`](IObject.md)

  ↳ **`IEditorConfig`**

## Table of contents

### Properties

- [ClipEditor](IEditorConfig.md#clipeditor)
- [PathEditor](IEditorConfig.md#patheditor)
- [editSize](IEditorConfig.md#editsize)
- [keyEvent](IEditorConfig.md#keyevent)
- [stroke](IEditorConfig.md#stroke)
- [strokeWidth](IEditorConfig.md#strokewidth)
- [spread](IEditorConfig.md#spread)
- [pointFill](IEditorConfig.md#pointfill)
- [pointSize](IEditorConfig.md#pointsize)
- [pointRadius](IEditorConfig.md#pointradius)
- [point](IEditorConfig.md#point)
- [middlePoint](IEditorConfig.md#middlepoint)
- [resizeLine](IEditorConfig.md#resizeline)
- [rect](IEditorConfig.md#rect)
- [rectThrough](IEditorConfig.md#rectthrough)
- [area](IEditorConfig.md#area)
- [mask](IEditorConfig.md#mask)
- [dimOthers](IEditorConfig.md#dimothers)
- [bright](IEditorConfig.md#bright)
- [circle](IEditorConfig.md#circle)
- [circleDirection](IEditorConfig.md#circledirection)
- [circleMargin](IEditorConfig.md#circlemargin)
- [rotatePoint](IEditorConfig.md#rotatepoint)
- [buttonsDirection](IEditorConfig.md#buttonsdirection)
- [buttonsFixed](IEditorConfig.md#buttonsfixed)
- [buttonsMargin](IEditorConfig.md#buttonsmargin)
- [hideOnMove](IEditorConfig.md#hideonmove)
- [hideOnSmall](IEditorConfig.md#hideonsmall)
- [hideRotatePoints](IEditorConfig.md#hiderotatepoints)
- [hideResizeLines](IEditorConfig.md#hideresizelines)
- [moveCursor](IEditorConfig.md#movecursor)
- [resizeCursor](IEditorConfig.md#resizecursor)
- [rotateCursor](IEditorConfig.md#rotatecursor)
- [skewCursor](IEditorConfig.md#skewcursor)
- [around](IEditorConfig.md#around)
- [rotateAround](IEditorConfig.md#rotatearound)
- [rotateGap](IEditorConfig.md#rotategap)
- [lockRatio](IEditorConfig.md#lockratio)
- [dragLimitAnimate](IEditorConfig.md#draglimitanimate)
- [ignorePixelSnap](IEditorConfig.md#ignorepixelsnap)
- [selector](IEditorConfig.md#selector)
- [editBox](IEditorConfig.md#editbox)
- [hover](IEditorConfig.md#hover)
- [hoverStyle](IEditorConfig.md#hoverstyle)
- [select](IEditorConfig.md#select)
- [selectKeep](IEditorConfig.md#selectkeep)
- [selectedStyle](IEditorConfig.md#selectedstyle)
- [selectedPathType](IEditorConfig.md#selectedpathtype)
- [multipleSelect](IEditorConfig.md#multipleselect)
- [boxSelect](IEditorConfig.md#boxselect)
- [continuousSelect](IEditorConfig.md#continuousselect)
- [openInner](IEditorConfig.md#openinner)
- [moveable](IEditorConfig.md#moveable)
- [resizeable](IEditorConfig.md#resizeable)
- [flipable](IEditorConfig.md#flipable)
- [rotateable](IEditorConfig.md#rotateable)
- [skewable](IEditorConfig.md#skewable)
- [multipleSelectKey](IEditorConfig.md#multipleselectkey)
- [rotateKey](IEditorConfig.md#rotatekey)
- [diagonalRotateKey](IEditorConfig.md#diagonalrotatekey)
- [beforeSelect](IEditorConfig.md#beforeselect)
- [beforeEditOuter](IEditorConfig.md#beforeeditouter)
- [beforeEditInner](IEditorConfig.md#beforeeditinner)
- [beforeMove](IEditorConfig.md#beforemove)
- [beforeScale](IEditorConfig.md#beforescale)
- [beforeRotate](IEditorConfig.md#beforerotate)
- [beforeSkew](IEditorConfig.md#beforeskew)
- [preventEditInner](IEditorConfig.md#preventeditinner)
- [textEditor](IEditorConfig.md#texteditor)
- [pathEditor](IEditorConfig.md#patheditor-1)

## Properties

### ClipEditor

• `Optional` **ClipEditor**: `IClipEditorConfig`

#### Defined in

src/pxgrow/packages/clipper/src/interface/IClipEditor.ts:5

___

### PathEditor

• `Optional` **PathEditor**: `IPathEditorConfig`

#### Defined in

src/pxgrow/packages/path-editor/src/interface/IPathEditor.ts:7

___

### editSize

• `Optional` **editSize**: [`IEditSize`](../modules.md#ieditsize)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:98](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L98)

___

### keyEvent

• `Optional` **keyEvent**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:99](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L99)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:101](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L101)

___

### strokeWidth

• `Optional` **strokeWidth**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:102](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L102)

___

### spread

• `Optional` **spread**: [`IFourNumber`](../modules.md#ifournumber)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:104](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L104)

___

### pointFill

• `Optional` **pointFill**: [`IFill`](../modules.md#ifill)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:106](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L106)

___

### pointSize

• `Optional` **pointSize**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:107](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L107)

___

### pointRadius

• `Optional` **pointRadius**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:108](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L108)

___

### point

• `Optional` **point**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:110](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L110)

___

### middlePoint

• `Optional` **middlePoint**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:111](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L111)

___

### resizeLine

• `Optional` **resizeLine**: [`IEditPointInputData`](IEditPointInputData.md) \| [`IEditPointInputData`](IEditPointInputData.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:112](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L112)

___

### rect

• `Optional` **rect**: [`IBoxInputData`](IBoxInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:114](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L114)

___

### rectThrough

• `Optional` **rectThrough**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:115](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L115)

___

### area

• `Optional` **area**: [`IRectInputData`](IRectInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:117](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L117)

___

### mask

• `Optional` **mask**: `string` \| `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:119](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L119)

___

### dimOthers

• `Optional` **dimOthers**: `number` \| `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:120](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L120)

___

### bright

• `Optional` **bright**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:121](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L121)

___

### circle

• `Optional` **circle**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:123](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L123)

___

### circleDirection

• `Optional` **circleDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:124](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L124)

___

### circleMargin

• `Optional` **circleMargin**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:125](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L125)

___

### rotatePoint

• `Optional` **rotatePoint**: [`IEditPointInputData`](IEditPointInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:126](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L126)

___

### buttonsDirection

• `Optional` **buttonsDirection**: [`IDirection4`](../modules.md#idirection4)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:128](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L128)

___

### buttonsFixed

• `Optional` **buttonsFixed**: `boolean` \| ``"AABB"`` \| ``"OBB"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:129](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L129)

___

### buttonsMargin

• `Optional` **buttonsMargin**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:130](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L130)

___

### hideOnMove

• `Optional` **hideOnMove**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:132](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L132)

___

### hideOnSmall

• `Optional` **hideOnSmall**: `number` \| `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:133](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L133)

___

### hideRotatePoints

• `Optional` **hideRotatePoints**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:134](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L134)

___

### hideResizeLines

• `Optional` **hideResizeLines**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:135](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L135)

___

### moveCursor

• `Optional` **moveCursor**: [`ICursorType`](../modules.md#icursortype)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:137](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L137)

___

### resizeCursor

• `Optional` **resizeCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:138](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L138)

___

### rotateCursor

• `Optional` **rotateCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:139](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L139)

___

### skewCursor

• `Optional` **skewCursor**: [`IImageCursor`](IImageCursor.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:140](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L140)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:142](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L142)

___

### rotateAround

• `Optional` **rotateAround**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:143](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L143)

___

### rotateGap

• `Optional` **rotateGap**: `number`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:144](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L144)

___

### lockRatio

• `Optional` **lockRatio**: `boolean` \| ``"corner"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:145](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L145)

___

### dragLimitAnimate

• `Optional` **dragLimitAnimate**: `number` \| `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:146](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L146)

___

### ignorePixelSnap

• `Optional` **ignorePixelSnap**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:147](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L147)

___

### selector

• `Optional` **selector**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:149](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L149)

___

### editBox

• `Optional` **editBox**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:150](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L150)

___

### hover

• `Optional` **hover**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:151](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L151)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:152](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L152)

___

### select

• `Optional` **select**: ``"press"`` \| ``"tap"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:153](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L153)

___

### selectKeep

• `Optional` **selectKeep**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:154](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L154)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IUIInputData`](IUIInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:155](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L155)

___

### selectedPathType

• `Optional` **selectedPathType**: ``"path"`` \| ``"render-path"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:156](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L156)

___

### multipleSelect

• `Optional` **multipleSelect**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:157](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L157)

___

### boxSelect

• `Optional` **boxSelect**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:159](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L159)

___

### continuousSelect

• `Optional` **continuousSelect**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:160](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L160)

___

### openInner

• `Optional` **openInner**: ``"long"`` \| ``"double"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:161](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L161)

___

### moveable

• `Optional` **moveable**: `boolean` \| ``"move"`` \| ``"gesture"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:163](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L163)

___

### resizeable

• `Optional` **resizeable**: `boolean` \| ``"zoom"`` \| ``"gesture"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:164](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L164)

___

### flipable

• `Optional` **flipable**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:165](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L165)

___

### rotateable

• `Optional` **rotateable**: `boolean` \| ``"rotate"`` \| ``"gesture"``

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:166](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L166)

___

### skewable

• `Optional` **skewable**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:167](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L167)

___

### multipleSelectKey

• `Optional` **multipleSelectKey**: [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:169](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L169)

___

### rotateKey

• `Optional` **rotateKey**: [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:170](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L170)

___

### diagonalRotateKey

• `Optional` **diagonalRotateKey**: [`IShortcutKeysCheck`](IShortcutKeysCheck.md) \| [`IShortcutKeys`](../modules.md#ishortcutkeys)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:171](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L171)

___

### beforeSelect

• `Optional` **beforeSelect**: [`IEditorBeforeSelect`](IEditorBeforeSelect.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:173](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L173)

___

### beforeEditOuter

• `Optional` **beforeEditOuter**: [`IEditorBeforeEditOuter`](IEditorBeforeEditOuter.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:174](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L174)

___

### beforeEditInner

• `Optional` **beforeEditInner**: [`IEditorBeforeEditInner`](IEditorBeforeEditInner.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:175](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L175)

___

### beforeMove

• `Optional` **beforeMove**: [`IEditorBeforeMove`](IEditorBeforeMove.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:177](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L177)

___

### beforeScale

• `Optional` **beforeScale**: [`IEditorBeforeScale`](IEditorBeforeScale.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:178](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L178)

___

### beforeRotate

• `Optional` **beforeRotate**: [`IEditorBeforeRotate`](IEditorBeforeRotate.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:179](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L179)

___

### beforeSkew

• `Optional` **beforeSkew**: [`IEditorBeforeSkew`](IEditorBeforeSkew.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:180](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L180)

___

### preventEditInner

• `Optional` **preventEditInner**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:182](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L182)

___

### textEditor

• `Optional` **textEditor**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:184](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L184)

___

### pathEditor

• `Optional` **pathEditor**: [`IObject`](IObject.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:185](https://github.com/leaferjs/leafer-ui/blob/0b47d9bb3ce3043816b290a732c28d937f45e12e/packages/interface/src/editor/IEditor.ts#L185)
