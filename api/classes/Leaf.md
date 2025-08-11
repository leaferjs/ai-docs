# Class: Leaf

## Hierarchy

- **`Leaf`**

  ↳ [`Branch`](Branch.md)

  ↳ [`UI`](UI.md)

## Implements

- [`ILeaf`](../interfaces/ILeaf.md)

## Table of contents

### Constructors

- [constructor](Leaf.md#constructor)

### Properties

- [innerId](Leaf.md#innerid)
- [leafer](Leaf.md#leafer)
- [parent](Leaf.md#parent)
- [syncEventer](Leaf.md#synceventer)
- [lockNormalStyle](Leaf.md#locknormalstyle)
- [\_\_](Leaf.md#__)
- [\_\_layout](Leaf.md#__layout)
- [\_\_world](Leaf.md#__world)
- [\_\_local](Leaf.md#__local)
- [\_\_nowWorld](Leaf.md#__nowworld)
- [\_\_cameraWorld](Leaf.md#__cameraworld)
- [\_\_worldOpacity](Leaf.md#__worldopacity)
- [\_\_scrollWorld](Leaf.md#__scrollworld)
- [\_\_level](Leaf.md#__level)
- [\_\_tempNumber](Leaf.md#__tempnumber)
- [\_\_hasAutoLayout](Leaf.md#__hasautolayout)
- [\_\_hasMask](Leaf.md#__hasmask)
- [\_\_hasEraser](Leaf.md#__haseraser)
- [\_\_hitCanvas](Leaf.md#__hitcanvas)
- [\_\_captureMap](Leaf.md#__capturemap)
- [\_\_bubbleMap](Leaf.md#__bubblemap)
- [\_\_hasLocalEvent](Leaf.md#__haslocalevent)
- [\_\_hasWorldEvent](Leaf.md#__hasworldevent)
- [children](Leaf.md#children)
- [topChildren](Leaf.md#topchildren)
- [destroyed](Leaf.md#destroyed)

### Accessors

- [tag](Leaf.md#tag)
- [\_\_tag](Leaf.md#__tag)
- [innerName](Leaf.md#innername)
- [\_\_DataProcessor](Leaf.md#__dataprocessor)
- [\_\_LayoutProcessor](Leaf.md#__layoutprocessor)
- [leaferIsCreated](Leaf.md#leaferiscreated)
- [leaferIsReady](Leaf.md#leaferisready)
- [isLeafer](Leaf.md#isleafer)
- [isBranch](Leaf.md#isbranch)
- [isBranchLeaf](Leaf.md#isbranchleaf)
- [\_\_localMatrix](Leaf.md#__localmatrix)
- [\_\_localBoxBounds](Leaf.md#__localboxbounds)
- [worldTransform](Leaf.md#worldtransform)
- [localTransform](Leaf.md#localtransform)
- [scrollWorldTransform](Leaf.md#scrollworldtransform)
- [boxBounds](Leaf.md#boxbounds)
- [renderBounds](Leaf.md#renderbounds)
- [worldBoxBounds](Leaf.md#worldboxbounds)
- [worldStrokeBounds](Leaf.md#worldstrokebounds)
- [worldRenderBounds](Leaf.md#worldrenderbounds)
- [worldOpacity](Leaf.md#worldopacity)
- [\_\_worldFlipped](Leaf.md#__worldflipped)
- [\_\_onlyHitMask](Leaf.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Leaf.md#__ignorehitworld)
- [\_\_inLazyBounds](Leaf.md#__inlazybounds)
- [pathInputed](Leaf.md#pathinputed)
- [event](Leaf.md#event)

### Methods

- [reset](Leaf.md#reset)
- [resetCustom](Leaf.md#resetcustom)
- [waitParent](Leaf.md#waitparent)
- [waitLeafer](Leaf.md#waitleafer)
- [nextRender](Leaf.md#nextrender)
- [removeNextRender](Leaf.md#removenextrender)
- [\_\_bindLeafer](Leaf.md#__bindleafer)
- [set](Leaf.md#set)
- [get](Leaf.md#get)
- [setAttr](Leaf.md#setattr)
- [getAttr](Leaf.md#getattr)
- [getComputedAttr](Leaf.md#getcomputedattr)
- [toJSON](Leaf.md#tojson)
- [toString](Leaf.md#tostring)
- [toSVG](Leaf.md#tosvg)
- [\_\_SVG](Leaf.md#__svg)
- [toHTML](Leaf.md#tohtml)
- [\_\_setAttr](Leaf.md#__setattr)
- [\_\_getAttr](Leaf.md#__getattr)
- [setProxyAttr](Leaf.md#setproxyattr)
- [getProxyAttr](Leaf.md#getproxyattr)
- [find](Leaf.md#find)
- [findTag](Leaf.md#findtag)
- [findOne](Leaf.md#findone)
- [findId](Leaf.md#findid)
- [focus](Leaf.md#focus)
- [updateState](Leaf.md#updatestate)
- [updateLayout](Leaf.md#updatelayout)
- [forceUpdate](Leaf.md#forceupdate)
- [forceRender](Leaf.md#forcerender)
- [\_\_extraUpdate](Leaf.md#__extraupdate)
- [\_\_updateWorldMatrix](Leaf.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Leaf.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Leaf.md#__updateworldbounds)
- [\_\_updateLocalBounds](Leaf.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Leaf.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Leaf.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Leaf.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Leaf.md#__updateboxbounds)
- [\_\_updateContentBounds](Leaf.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Leaf.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Leaf.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Leaf.md#__updateautolayout)
- [\_\_updateFlowLayout](Leaf.md#__updateflowlayout)
- [\_\_updateNaturalSize](Leaf.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Leaf.md#__updatestrokespread)
- [\_\_updateRenderSpread](Leaf.md#__updaterenderspread)
- [\_\_onUpdateSize](Leaf.md#__onupdatesize)
- [\_\_updateEraser](Leaf.md#__updateeraser)
- [\_\_renderEraser](Leaf.md#__rendereraser)
- [\_\_updateMask](Leaf.md#__updatemask)
- [\_\_renderMask](Leaf.md#__rendermask)
- [\_\_getNowWorld](Leaf.md#__getnowworld)
- [getClampRenderScale](Leaf.md#getclamprenderscale)
- [getRenderScaleData](Leaf.md#getrenderscaledata)
- [getTransform](Leaf.md#gettransform)
- [getBounds](Leaf.md#getbounds)
- [getLayoutBounds](Leaf.md#getlayoutbounds)
- [getLayoutPoints](Leaf.md#getlayoutpoints)
- [getWorldBounds](Leaf.md#getworldbounds)
- [worldToLocal](Leaf.md#worldtolocal)
- [localToWorld](Leaf.md#localtoworld)
- [worldToInner](Leaf.md#worldtoinner)
- [innerToWorld](Leaf.md#innertoworld)
- [getBoxPoint](Leaf.md#getboxpoint)
- [getBoxPointByInner](Leaf.md#getboxpointbyinner)
- [getInnerPoint](Leaf.md#getinnerpoint)
- [getInnerPointByBox](Leaf.md#getinnerpointbybox)
- [getInnerPointByLocal](Leaf.md#getinnerpointbylocal)
- [getLocalPoint](Leaf.md#getlocalpoint)
- [getLocalPointByInner](Leaf.md#getlocalpointbyinner)
- [getPagePoint](Leaf.md#getpagepoint)
- [getWorldPoint](Leaf.md#getworldpoint)
- [getWorldPointByBox](Leaf.md#getworldpointbybox)
- [getWorldPointByLocal](Leaf.md#getworldpointbylocal)
- [getWorldPointByPage](Leaf.md#getworldpointbypage)
- [setTransform](Leaf.md#settransform)
- [transform](Leaf.md#transform)
- [move](Leaf.md#move)
- [moveInner](Leaf.md#moveinner)
- [scaleOf](Leaf.md#scaleof)
- [rotateOf](Leaf.md#rotateof)
- [skewOf](Leaf.md#skewof)
- [transformWorld](Leaf.md#transformworld)
- [moveWorld](Leaf.md#moveworld)
- [scaleOfWorld](Leaf.md#scaleofworld)
- [rotateOfWorld](Leaf.md#rotateofworld)
- [skewOfWorld](Leaf.md#skewofworld)
- [flip](Leaf.md#flip)
- [scaleResize](Leaf.md#scaleresize)
- [\_\_scaleResize](Leaf.md#__scaleresize)
- [resizeWidth](Leaf.md#resizewidth)
- [resizeHeight](Leaf.md#resizeheight)
- [hit](Leaf.md#hit)
- [\_\_hitWorld](Leaf.md#__hitworld)
- [\_\_hit](Leaf.md#__hit)
- [\_\_hitFill](Leaf.md#__hitfill)
- [\_\_hitStroke](Leaf.md#__hitstroke)
- [\_\_hitPixel](Leaf.md#__hitpixel)
- [\_\_drawHitPath](Leaf.md#__drawhitpath)
- [\_\_updateHitCanvas](Leaf.md#__updatehitcanvas)
- [\_\_render](Leaf.md#__render)
- [\_\_drawFast](Leaf.md#__drawfast)
- [\_\_draw](Leaf.md#__draw)
- [\_\_clip](Leaf.md#__clip)
- [\_\_renderShape](Leaf.md#__rendershape)
- [\_\_drawShape](Leaf.md#__drawshape)
- [\_\_updateWorldOpacity](Leaf.md#__updateworldopacity)
- [\_\_updateChange](Leaf.md#__updatechange)
- [\_\_drawPath](Leaf.md#__drawpath)
- [\_\_drawRenderPath](Leaf.md#__drawrenderpath)
- [\_\_updatePath](Leaf.md#__updatepath)
- [\_\_updateRenderPath](Leaf.md#__updaterenderpath)
- [getMotionPathData](Leaf.md#getmotionpathdata)
- [getMotionPoint](Leaf.md#getmotionpoint)
- [getMotionTotal](Leaf.md#getmotiontotal)
- [\_\_updateMotionPath](Leaf.md#__updatemotionpath)
- [\_\_runAnimation](Leaf.md#__runanimation)
- [\_\_updateSortChildren](Leaf.md#__updatesortchildren)
- [add](Leaf.md#add)
- [remove](Leaf.md#remove)
- [dropTo](Leaf.md#dropto)
- [on](Leaf.md#on)
- [off](Leaf.md#off)
- [on\_](Leaf.md#on_)
- [off\_](Leaf.md#off_)
- [once](Leaf.md#once)
- [emit](Leaf.md#emit)
- [emitEvent](Leaf.md#emitevent)
- [hasEvent](Leaf.md#hasevent)
- [changeAttr](Leaf.md#changeattr)
- [addAttr](Leaf.md#addattr)
- [\_\_emitLifeEvent](Leaf.md#__emitlifeevent)
- [destroy](Leaf.md#destroy)

## Constructors

### constructor

• **new Leaf**(`data?`): [`Leaf`](Leaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](../interfaces/ILeafInputData.md) |

#### Returns

[`Leaf`](Leaf.md)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:114](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L114)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[innerId](../interfaces/ILeaf.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L32)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](../interfaces/ILeaferBase.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[leafer](../interfaces/ILeaf.md#leafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:38](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L38)

___

### parent

• `Optional` **parent**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[parent](../interfaces/ILeaf.md#parent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L39)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[syncEventer](../interfaces/ILeaf.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[lockNormalStyle](../interfaces/ILeaf.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L49)

___

### \_\_

• **\_\_**: [`ILeafData`](../interfaces/ILeafData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__](../interfaces/ILeaf.md#__)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__layout](../interfaces/ILeaf.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__world](../interfaces/ILeaf.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__local](../interfaces/ILeaf.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__nowWorld](../interfaces/ILeaf.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__cameraWorld](../interfaces/ILeaf.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__worldOpacity](../interfaces/ILeaf.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L63)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__scrollWorld](../interfaces/ILeaf.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L69)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__level](../interfaces/ILeaf.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L82)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__tempNumber](../interfaces/ILeaf.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L83)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hasAutoLayout](../interfaces/ILeaf.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L87)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hasMask](../interfaces/ILeaf.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L88)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hasEraser](../interfaces/ILeaf.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L89)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hitCanvas](../interfaces/ILeaf.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L90)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__captureMap](../interfaces/ILeaf.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L101)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__bubbleMap](../interfaces/ILeaf.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L102)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hasLocalEvent](../interfaces/ILeaf.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L104)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hasWorldEvent](../interfaces/ILeaf.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L105)

___

### children

• `Optional` **children**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[children](../interfaces/ILeaf.md#children)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:108](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L108)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[topChildren](../interfaces/ILeaf.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:109](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L109)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[destroyed](../interfaces/ILeaf.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L111)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[tag](../interfaces/ILeaf.md#tag)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L27)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[tag](../interfaces/ILeaf.md#tag)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L28)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__tag](../interfaces/ILeaf.md#__tag)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L30)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[innerName](../interfaces/ILeaf.md#innername)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__DataProcessor](../interfaces/ILeaf.md#__dataprocessor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__LayoutProcessor](../interfaces/ILeaf.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[leaferIsCreated](../interfaces/ILeaf.md#leaferiscreated)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[leaferIsReady](../interfaces/ILeaf.md#leaferisready)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L42)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[isLeafer](../interfaces/ILeaf.md#isleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L44)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[isBranch](../interfaces/ILeaf.md#isbranch)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L45)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[isBranchLeaf](../interfaces/ILeaf.md#isbranchleaf)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L46)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__localMatrix](../interfaces/ILeaf.md#__localmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__localBoxBounds](../interfaces/ILeaf.md#__localboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldTransform](../interfaces/ILeaf.md#worldtransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[localTransform](../interfaces/ILeaf.md#localtransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L67)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[scrollWorldTransform](../interfaces/ILeaf.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L70)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[boxBounds](../interfaces/ILeaf.md#boxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L73)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[renderBounds](../interfaces/ILeaf.md#renderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L74)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldBoxBounds](../interfaces/ILeaf.md#worldboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L75)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldStrokeBounds](../interfaces/ILeaf.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L76)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldRenderBounds](../interfaces/ILeaf.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L77)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldOpacity](../interfaces/ILeaf.md#worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L80)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__worldFlipped](../interfaces/ILeaf.md#__worldflipped)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L85)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__onlyHitMask](../interfaces/ILeaf.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L92)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__ignoreHitWorld](../interfaces/ILeaf.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L93)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__inLazyBounds](../interfaces/ILeaf.md#__inlazybounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L94)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[pathInputed](../interfaces/ILeaf.md#pathinputed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L96)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[event](../interfaces/ILeaf.md#event)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L99)

## Methods

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](../interfaces/ILeafInputData.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[reset](../interfaces/ILeaf.md#reset)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:121](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L121)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[resetCustom](../interfaces/ILeaf.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L141)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[waitParent](../interfaces/ILeaf.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:147](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L147)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[waitLeafer](../interfaces/ILeaf.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L152)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `off?` | ``"off"`` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[nextRender](../interfaces/ILeaf.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L157)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[removeNextRender](../interfaces/ILeaf.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L161)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__bindLeafer](../interfaces/ILeaf.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:165](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L165)

___

### set

▸ **set**(`_data`, `_isTemp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |
| `_isTemp?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[set](../interfaces/ILeaf.md#set)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L191)

___

### get

▸ **get**(`_name?`): [`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](../interfaces/ILeafInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_name?` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](../interfaces/ILeafInputData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[get](../interfaces/ILeaf.md#get)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:192](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L192)

___

### setAttr

▸ **setAttr**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `any` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[setAttr](../interfaces/ILeaf.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:194](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L194)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getAttr](../interfaces/ILeaf.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L195)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getComputedAttr](../interfaces/ILeaf.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L197)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[toJSON](../interfaces/ILeaf.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L199)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[toString](../interfaces/ILeaf.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L204)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[toSVG](../interfaces/ILeaf.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L208)

___

### \_\_SVG

▸ **__SVG**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__SVG](../interfaces/ILeaf.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L210)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[toHTML](../interfaces/ILeaf.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L212)

___

### \_\_setAttr

▸ **__setAttr**(`_attrName`, `_newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__setAttr](../interfaces/ILeaf.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L216)

___

### \_\_getAttr

▸ **__getAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__getAttr](../interfaces/ILeaf.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L218)

___

### setProxyAttr

▸ **setProxyAttr**(`_attrName`, `_newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[setProxyAttr](../interfaces/ILeaf.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L220)

___

### getProxyAttr

▸ **getProxyAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getProxyAttr](../interfaces/ILeaf.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L222)

___

### find

▸ **find**(`_condition`, `_options?`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `_options?` | `any` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[find](../interfaces/ILeaf.md#find)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:229](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L229)

___

### findTag

▸ **findTag**(`_tag`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_tag` | `string` \| `string`[] |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[findTag](../interfaces/ILeaf.md#findtag)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:231](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L231)

___

### findOne

▸ **findOne**(`_condition`, `_options?`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `_options?` | `any` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[findOne](../interfaces/ILeaf.md#findone)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:233](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L233)

___

### findId

▸ **findId**(`_id`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` \| `number` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[findId](../interfaces/ILeaf.md#findid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:235](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L235)

___

### focus

▸ **focus**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[focus](../interfaces/ILeaf.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:242](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L242)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[updateState](../interfaces/ILeaf.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L244)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[updateLayout](../interfaces/ILeaf.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L249)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[forceUpdate](../interfaces/ILeaf.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L253)

___

### forceRender

▸ **forceRender**(`_bounds?`, `_sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `_sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[forceRender](../interfaces/ILeaf.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L261)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__extraUpdate](../interfaces/ILeaf.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateWorldMatrix](../interfaces/ILeaf.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateLocalMatrix](../interfaces/ILeaf.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L273)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateWorldBounds](../interfaces/ILeaf.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:279](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L279)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateLocalBounds](../interfaces/ILeaf.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L281)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateLocalBoxBounds](../interfaces/ILeaf.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L284)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateLocalStrokeBounds](../interfaces/ILeaf.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L286)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateLocalRenderBounds](../interfaces/ILeaf.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L288)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`, `_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateBoxBounds](../interfaces/ILeaf.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L292)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateContentBounds](../interfaces/ILeaf.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L294)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateStrokeBounds](../interfaces/ILeaf.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L296)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateRenderBounds](../interfaces/ILeaf.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L298)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateAutoLayout](../interfaces/ILeaf.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L301)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateFlowLayout](../interfaces/ILeaf.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L303)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateNaturalSize](../interfaces/ILeaf.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L305)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateStrokeSpread](../interfaces/ILeaf.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:308](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L308)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateRenderSpread](../interfaces/ILeaf.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:310](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L310)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__onUpdateSize](../interfaces/ILeaf.md#__onupdatesize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L312)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateEraser](../interfaces/ILeaf.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L317)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__renderEraser](../interfaces/ILeaf.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L321)

___

### \_\_updateMask

▸ **__updateMask**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateMask](../interfaces/ILeaf.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L329)

___

### \_\_renderMask

▸ **__renderMask**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__renderMask](../interfaces/ILeaf.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L335)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__getNowWorld](../interfaces/ILeaf.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:343](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L343)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getClampRenderScale](../interfaces/ILeaf.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L356)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`): [`IScaleData`](../interfaces/IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abs?` | `boolean` |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

[`IScaleData`](../interfaces/IScaleData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getRenderScaleData](../interfaces/ILeaf.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:362](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L362)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getTransform](../interfaces/ILeaf.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L371)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getBounds](../interfaces/ILeaf.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L376)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getLayoutBounds](../interfaces/ILeaf.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L380)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getLayoutPoints](../interfaces/ILeaf.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L384)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `change?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getWorldBounds](../interfaces/ILeaf.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L389)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldToLocal](../interfaces/ILeaf.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L397)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[localToWorld](../interfaces/ILeaf.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L405)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[worldToInner](../interfaces/ILeaf.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L413)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[innerToWorld](../interfaces/ILeaf.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L421)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getBoxPoint](../interfaces/ILeaf.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L428)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getBoxPointByInner](../interfaces/ILeaf.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:432](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L432)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getInnerPoint](../interfaces/ILeaf.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:438](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L438)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getInnerPointByBox](../interfaces/ILeaf.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:444](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L444)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getInnerPointByLocal](../interfaces/ILeaf.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:450](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L450)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getLocalPoint](../interfaces/ILeaf.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L454)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getLocalPointByInner](../interfaces/ILeaf.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:460](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L460)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getPagePoint](../interfaces/ILeaf.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L464)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getWorldPoint](../interfaces/ILeaf.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L469)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getWorldPointByBox](../interfaces/ILeaf.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:475](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L475)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getWorldPointByLocal](../interfaces/ILeaf.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:479](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L479)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getWorldPointByPage](../interfaces/ILeaf.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L485)

___

### setTransform

▸ **setTransform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[setTransform](../interfaces/ILeaf.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L493)

___

### transform

▸ **transform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[transform](../interfaces/ILeaf.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L497)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[move](../interfaces/ILeaf.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:501](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L501)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[moveInner](../interfaces/ILeaf.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L506)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[scaleOf](../interfaces/ILeaf.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L510)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[rotateOf](../interfaces/ILeaf.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L514)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[skewOf](../interfaces/ILeaf.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L518)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[transformWorld](../interfaces/ILeaf.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:523](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L523)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[moveWorld](../interfaces/ILeaf.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:527](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L527)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[scaleOfWorld](../interfaces/ILeaf.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L531)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `rotation` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[rotateOfWorld](../interfaces/ILeaf.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:535](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L535)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[skewOfWorld](../interfaces/ILeaf.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L539)

___

### flip

▸ **flip**(`axis`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `axis` | [`IAxis`](../modules.md#iaxis) |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[flip](../interfaces/ILeaf.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L543)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY?`, `_noResize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` |
| `scaleY` | `number` | `scaleX` |
| `_noResize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[scaleResize](../interfaces/ILeaf.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L550)

___

### \_\_scaleResize

▸ **__scaleResize**(`_scaleX`, `_scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scaleX` | `number` |
| `_scaleY` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__scaleResize](../interfaces/ILeaf.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:555](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L555)

___

### resizeWidth

▸ **resizeWidth**(`_width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_width` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[resizeWidth](../interfaces/ILeaf.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L558)

___

### resizeHeight

▸ **resizeHeight**(`_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[resizeHeight](../interfaces/ILeaf.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L560)

___

### hit

▸ **hit**(`_world`, `_hitRadius?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_world` | [`IPointData`](../interfaces/IPointData.md) |
| `_hitRadius?` | `number` |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[hit](../interfaces/ILeaf.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L565)

___

### \_\_hitWorld

▸ **__hitWorld**(`_point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hitWorld](../interfaces/ILeaf.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L567)

___

### \_\_hit

▸ **__hit**(`_local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_local` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hit](../interfaces/ILeaf.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L569)

___

### \_\_hitFill

▸ **__hitFill**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hitFill](../interfaces/ILeaf.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L571)

___

### \_\_hitStroke

▸ **__hitStroke**(`_inner`, `_strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_strokeWidth` | `number` |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hitStroke](../interfaces/ILeaf.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L573)

___

### \_\_hitPixel

▸ **__hitPixel**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__hitPixel](../interfaces/ILeaf.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L575)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__drawHitPath](../interfaces/ILeaf.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L577)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateHitCanvas](../interfaces/ILeaf.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L579)

___

### \_\_render

▸ **__render**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__render](../interfaces/ILeaf.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:586](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L586)

___

### \_\_drawFast

▸ **__drawFast**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__drawFast](../interfaces/ILeaf.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L588)

___

### \_\_draw

▸ **__draw**(`_canvas`, `_options`, `_originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `_originCanvas?` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__draw](../interfaces/ILeaf.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L590)

___

### \_\_clip

▸ **__clip**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__clip](../interfaces/ILeaf.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L593)

___

### \_\_renderShape

▸ **__renderShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__renderShape](../interfaces/ILeaf.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L595)

___

### \_\_drawShape

▸ **__drawShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__drawShape](../interfaces/ILeaf.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L597)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateWorldOpacity](../interfaces/ILeaf.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L600)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateChange](../interfaces/ILeaf.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L602)

___

### \_\_drawPath

▸ **__drawPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__drawPath](../interfaces/ILeaf.md#__drawpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:609](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L609)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__drawRenderPath](../interfaces/ILeaf.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:611](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L611)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updatePath](../interfaces/ILeaf.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:613](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L613)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateRenderPath](../interfaces/ILeaf.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L615)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getMotionPathData](../interfaces/ILeaf.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L622)

___

### getMotionPoint

▸ **getMotionPoint**(`_motionDistance`): [`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionDistance` | `number` \| [`IUnitData`](../interfaces/IUnitData.md) |

#### Returns

[`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getMotionPoint](../interfaces/ILeaf.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L626)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[getMotionTotal](../interfaces/ILeaf.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L630)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateMotionPath](../interfaces/ILeaf.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L634)

___

### \_\_runAnimation

▸ **__runAnimation**(`_type`, `_complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"in"`` \| ``"out"`` |
| `_complete?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__runAnimation](../interfaces/ILeaf.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L640)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__updateSortChildren](../interfaces/ILeaf.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:645](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L645)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeafInputData`](../interfaces/ILeafInputData.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafInputData`](../interfaces/ILeafInputData.md)[] |
| `_index?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[add](../interfaces/ILeaf.md#add)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L647)

___

### remove

▸ **remove**(`_child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child?` | `string` \| `number` \| [`ILeaf`](../interfaces/ILeaf.md) \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[remove](../interfaces/ILeaf.md#remove)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L649)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](../interfaces/ILeaf.md) |
| `index?` | `number` |
| `resize?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[dropTo](../interfaces/ILeaf.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:653](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L653)

___

### on

▸ **on**(`_type`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[on](../interfaces/ILeaf.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L662)

___

### off

▸ **off**(`_type?`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | `string` \| `string`[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[off](../interfaces/ILeaf.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L664)

___

### on\_

▸ **on_**(`_type`, `_listener?`, `_bind?`, `_options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_bind?` | [`IObject`](../interfaces/IObject.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[on_](../interfaces/ILeaf.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L666)

___

### off\_

▸ **off_**(`_id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[off_](../interfaces/ILeaf.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L668)

___

### once

▸ **once**(`_type`, `_listener?`, `_captureOrBind?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[once](../interfaces/ILeaf.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L670)

___

### emit

▸ **emit**(`_type`, `_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[emit](../interfaces/ILeaf.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L672)

___

### emitEvent

▸ **emitEvent**(`_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event?` | [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[emitEvent](../interfaces/ILeaf.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L674)

___

### hasEvent

▸ **hasEvent**(`_type`, `_capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_capture?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[hasEvent](../interfaces/ILeaf.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L676)

___

### changeAttr

▸ **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:680](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L680)

___

### addAttr

▸ **addAttr**(`attrName`, `defaultValue`, `fn?`, `helpValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |
| `helpValue?` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:684](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L684)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[__emitLifeEvent](../interfaces/ILeaf.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:690](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L690)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILeaf](../interfaces/ILeaf.md).[destroy](../interfaces/ILeaf.md#destroy)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:695](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L695)
