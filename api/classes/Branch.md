# Class: Branch

## Hierarchy

- [`Leaf`](Leaf.md)

  ↳ **`Branch`**

## Table of contents

### Constructors

- [constructor](Branch.md#constructor)

### Properties

- [innerId](Branch.md#innerid)
- [leafer](Branch.md#leafer)
- [parent](Branch.md#parent)
- [syncEventer](Branch.md#synceventer)
- [lockNormalStyle](Branch.md#locknormalstyle)
- [\_\_](Branch.md#__)
- [\_\_layout](Branch.md#__layout)
- [\_\_world](Branch.md#__world)
- [\_\_local](Branch.md#__local)
- [\_\_nowWorld](Branch.md#__nowworld)
- [\_\_cameraWorld](Branch.md#__cameraworld)
- [\_\_worldOpacity](Branch.md#__worldopacity)
- [\_\_scrollWorld](Branch.md#__scrollworld)
- [\_\_level](Branch.md#__level)
- [\_\_tempNumber](Branch.md#__tempnumber)
- [\_\_hasAutoLayout](Branch.md#__hasautolayout)
- [\_\_hasMask](Branch.md#__hasmask)
- [\_\_hasEraser](Branch.md#__haseraser)
- [\_\_hitCanvas](Branch.md#__hitcanvas)
- [\_\_captureMap](Branch.md#__capturemap)
- [\_\_bubbleMap](Branch.md#__bubblemap)
- [\_\_hasLocalEvent](Branch.md#__haslocalevent)
- [\_\_hasWorldEvent](Branch.md#__hasworldevent)
- [children](Branch.md#children)
- [topChildren](Branch.md#topchildren)
- [destroyed](Branch.md#destroyed)

### Accessors

- [tag](Branch.md#tag)
- [\_\_tag](Branch.md#__tag)
- [innerName](Branch.md#innername)
- [\_\_DataProcessor](Branch.md#__dataprocessor)
- [\_\_LayoutProcessor](Branch.md#__layoutprocessor)
- [leaferIsCreated](Branch.md#leaferiscreated)
- [leaferIsReady](Branch.md#leaferisready)
- [isLeafer](Branch.md#isleafer)
- [isBranch](Branch.md#isbranch)
- [isBranchLeaf](Branch.md#isbranchleaf)
- [\_\_localMatrix](Branch.md#__localmatrix)
- [\_\_localBoxBounds](Branch.md#__localboxbounds)
- [worldTransform](Branch.md#worldtransform)
- [localTransform](Branch.md#localtransform)
- [scrollWorldTransform](Branch.md#scrollworldtransform)
- [boxBounds](Branch.md#boxbounds)
- [renderBounds](Branch.md#renderbounds)
- [worldBoxBounds](Branch.md#worldboxbounds)
- [worldStrokeBounds](Branch.md#worldstrokebounds)
- [worldRenderBounds](Branch.md#worldrenderbounds)
- [worldOpacity](Branch.md#worldopacity)
- [\_\_worldFlipped](Branch.md#__worldflipped)
- [\_\_onlyHitMask](Branch.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Branch.md#__ignorehitworld)
- [\_\_inLazyBounds](Branch.md#__inlazybounds)
- [pathInputed](Branch.md#pathinputed)
- [event](Branch.md#event)

### Methods

- [\_\_updateStrokeSpread](Branch.md#__updatestrokespread)
- [\_\_updateRenderSpread](Branch.md#__updaterenderspread)
- [\_\_updateBoxBounds](Branch.md#__updateboxbounds)
- [\_\_updateStrokeBounds](Branch.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Branch.md#__updaterenderbounds)
- [\_\_updateSortChildren](Branch.md#__updatesortchildren)
- [add](Branch.md#add)
- [addMany](Branch.md#addmany)
- [remove](Branch.md#remove)
- [removeAll](Branch.md#removeall)
- [clear](Branch.md#clear)
- [\_\_remove](Branch.md#__remove)
- [\_\_preRemove](Branch.md#__preremove)
- [\_\_realRemoveChild](Branch.md#__realremovechild)
- [\_\_emitChildEvent](Branch.md#__emitchildevent)
- [reset](Branch.md#reset)
- [resetCustom](Branch.md#resetcustom)
- [waitParent](Branch.md#waitparent)
- [waitLeafer](Branch.md#waitleafer)
- [nextRender](Branch.md#nextrender)
- [removeNextRender](Branch.md#removenextrender)
- [\_\_bindLeafer](Branch.md#__bindleafer)
- [set](Branch.md#set)
- [get](Branch.md#get)
- [setAttr](Branch.md#setattr)
- [getAttr](Branch.md#getattr)
- [getComputedAttr](Branch.md#getcomputedattr)
- [toJSON](Branch.md#tojson)
- [toString](Branch.md#tostring)
- [toSVG](Branch.md#tosvg)
- [\_\_SVG](Branch.md#__svg)
- [toHTML](Branch.md#tohtml)
- [\_\_setAttr](Branch.md#__setattr)
- [\_\_getAttr](Branch.md#__getattr)
- [setProxyAttr](Branch.md#setproxyattr)
- [getProxyAttr](Branch.md#getproxyattr)
- [find](Branch.md#find)
- [findTag](Branch.md#findtag)
- [findOne](Branch.md#findone)
- [findId](Branch.md#findid)
- [focus](Branch.md#focus)
- [updateState](Branch.md#updatestate)
- [updateLayout](Branch.md#updatelayout)
- [forceUpdate](Branch.md#forceupdate)
- [forceRender](Branch.md#forcerender)
- [\_\_extraUpdate](Branch.md#__extraupdate)
- [\_\_updateWorldMatrix](Branch.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Branch.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Branch.md#__updateworldbounds)
- [\_\_updateLocalBounds](Branch.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Branch.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Branch.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Branch.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](Branch.md#__updatecontentbounds)
- [\_\_updateAutoLayout](Branch.md#__updateautolayout)
- [\_\_updateFlowLayout](Branch.md#__updateflowlayout)
- [\_\_updateNaturalSize](Branch.md#__updatenaturalsize)
- [\_\_onUpdateSize](Branch.md#__onupdatesize)
- [\_\_updateEraser](Branch.md#__updateeraser)
- [\_\_renderEraser](Branch.md#__rendereraser)
- [\_\_updateMask](Branch.md#__updatemask)
- [\_\_renderMask](Branch.md#__rendermask)
- [\_\_getNowWorld](Branch.md#__getnowworld)
- [getClampRenderScale](Branch.md#getclamprenderscale)
- [getRenderScaleData](Branch.md#getrenderscaledata)
- [getTransform](Branch.md#gettransform)
- [getBounds](Branch.md#getbounds)
- [getLayoutBounds](Branch.md#getlayoutbounds)
- [getLayoutPoints](Branch.md#getlayoutpoints)
- [getWorldBounds](Branch.md#getworldbounds)
- [worldToLocal](Branch.md#worldtolocal)
- [localToWorld](Branch.md#localtoworld)
- [worldToInner](Branch.md#worldtoinner)
- [innerToWorld](Branch.md#innertoworld)
- [getBoxPoint](Branch.md#getboxpoint)
- [getBoxPointByInner](Branch.md#getboxpointbyinner)
- [getInnerPoint](Branch.md#getinnerpoint)
- [getInnerPointByBox](Branch.md#getinnerpointbybox)
- [getInnerPointByLocal](Branch.md#getinnerpointbylocal)
- [getLocalPoint](Branch.md#getlocalpoint)
- [getLocalPointByInner](Branch.md#getlocalpointbyinner)
- [getPagePoint](Branch.md#getpagepoint)
- [getWorldPoint](Branch.md#getworldpoint)
- [getWorldPointByBox](Branch.md#getworldpointbybox)
- [getWorldPointByLocal](Branch.md#getworldpointbylocal)
- [getWorldPointByPage](Branch.md#getworldpointbypage)
- [setTransform](Branch.md#settransform)
- [transform](Branch.md#transform)
- [move](Branch.md#move)
- [moveInner](Branch.md#moveinner)
- [scaleOf](Branch.md#scaleof)
- [rotateOf](Branch.md#rotateof)
- [skewOf](Branch.md#skewof)
- [transformWorld](Branch.md#transformworld)
- [moveWorld](Branch.md#moveworld)
- [scaleOfWorld](Branch.md#scaleofworld)
- [rotateOfWorld](Branch.md#rotateofworld)
- [skewOfWorld](Branch.md#skewofworld)
- [flip](Branch.md#flip)
- [scaleResize](Branch.md#scaleresize)
- [\_\_scaleResize](Branch.md#__scaleresize)
- [resizeWidth](Branch.md#resizewidth)
- [resizeHeight](Branch.md#resizeheight)
- [hit](Branch.md#hit)
- [\_\_hitWorld](Branch.md#__hitworld)
- [\_\_hit](Branch.md#__hit)
- [\_\_hitFill](Branch.md#__hitfill)
- [\_\_hitStroke](Branch.md#__hitstroke)
- [\_\_hitPixel](Branch.md#__hitpixel)
- [\_\_drawHitPath](Branch.md#__drawhitpath)
- [\_\_updateHitCanvas](Branch.md#__updatehitcanvas)
- [\_\_render](Branch.md#__render)
- [\_\_drawFast](Branch.md#__drawfast)
- [\_\_draw](Branch.md#__draw)
- [\_\_clip](Branch.md#__clip)
- [\_\_renderShape](Branch.md#__rendershape)
- [\_\_drawShape](Branch.md#__drawshape)
- [\_\_updateWorldOpacity](Branch.md#__updateworldopacity)
- [\_\_updateChange](Branch.md#__updatechange)
- [\_\_drawPath](Branch.md#__drawpath)
- [\_\_drawRenderPath](Branch.md#__drawrenderpath)
- [\_\_updatePath](Branch.md#__updatepath)
- [\_\_updateRenderPath](Branch.md#__updaterenderpath)
- [getMotionPathData](Branch.md#getmotionpathdata)
- [getMotionPoint](Branch.md#getmotionpoint)
- [getMotionTotal](Branch.md#getmotiontotal)
- [\_\_updateMotionPath](Branch.md#__updatemotionpath)
- [\_\_runAnimation](Branch.md#__runanimation)
- [dropTo](Branch.md#dropto)
- [on](Branch.md#on)
- [off](Branch.md#off)
- [on\_](Branch.md#on_)
- [off\_](Branch.md#off_)
- [once](Branch.md#once)
- [emit](Branch.md#emit)
- [emitEvent](Branch.md#emitevent)
- [hasEvent](Branch.md#hasevent)
- [changeAttr](Branch.md#changeattr)
- [addAttr](Branch.md#addattr)
- [\_\_emitLifeEvent](Branch.md#__emitlifeevent)
- [destroy](Branch.md#destroy)

## Constructors

### constructor

• **new Branch**(`data?`): [`Branch`](Branch.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](../interfaces/ILeafInputData.md) |

#### Returns

[`Branch`](Branch.md)

#### Inherited from

[Leaf](Leaf.md).[constructor](Leaf.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:114](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L114)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[Leaf](Leaf.md).[innerId](Leaf.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L32)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](../interfaces/ILeaferBase.md)

#### Inherited from

[Leaf](Leaf.md).[leafer](Leaf.md#leafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:38](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L38)

___

### parent

• `Optional` **parent**: [`ILeaf`](../interfaces/ILeaf.md)

#### Inherited from

[Leaf](Leaf.md).[parent](Leaf.md#parent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L39)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Inherited from

[Leaf](Leaf.md).[syncEventer](Leaf.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[lockNormalStyle](Leaf.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L49)

___

### \_\_

• **\_\_**: [`ILeafData`](../interfaces/ILeafData.md)

#### Inherited from

[Leaf](Leaf.md).[__](Leaf.md#__)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:51](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L51)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Inherited from

[Leaf](Leaf.md).[__layout](Leaf.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Inherited from

[Leaf](Leaf.md).[__world](Leaf.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Inherited from

[Leaf](Leaf.md).[__local](Leaf.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Inherited from

[Leaf](Leaf.md).[__nowWorld](Leaf.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Inherited from

[Leaf](Leaf.md).[__cameraWorld](Leaf.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[Leaf](Leaf.md).[__worldOpacity](Leaf.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L63)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Inherited from

[Leaf](Leaf.md).[__scrollWorld](Leaf.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L69)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[Leaf](Leaf.md).[__level](Leaf.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L82)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Inherited from

[Leaf](Leaf.md).[__tempNumber](Leaf.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L83)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[__hasAutoLayout](Leaf.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L87)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[__hasMask](Leaf.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L88)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[__hasEraser](Leaf.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L89)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Inherited from

[Leaf](Leaf.md).[__hitCanvas](Leaf.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L90)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Inherited from

[Leaf](Leaf.md).[__captureMap](Leaf.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L101)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Inherited from

[Leaf](Leaf.md).[__bubbleMap](Leaf.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L102)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[__hasLocalEvent](Leaf.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L104)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[__hasWorldEvent](Leaf.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L105)

___

### children

• `Optional` **children**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Inherited from

[Leaf](Leaf.md).[children](Leaf.md#children)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:108](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L108)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Inherited from

[Leaf](Leaf.md).[topChildren](Leaf.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:109](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L109)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[Leaf](Leaf.md).[destroyed](Leaf.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L111)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Inherited from

Leaf.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L27)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Inherited from

Leaf.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L28)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Inherited from

Leaf.\_\_tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L30)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Inherited from

Leaf.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Inherited from

Leaf.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Inherited from

Leaf.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L42)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L44)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.isBranch

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L45)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L46)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

Leaf.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Inherited from

Leaf.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

Leaf.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L67)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Inherited from

Leaf.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L70)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L73)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L74)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L75)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L76)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Inherited from

Leaf.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L77)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Inherited from

Leaf.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L80)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L85)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L92)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L93)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L94)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Leaf.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L96)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Inherited from

Leaf.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L99)

## Methods

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Overrides

[Leaf](Leaf.md).[__updateStrokeSpread](Leaf.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:24](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L24)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Overrides

[Leaf](Leaf.md).[__updateRenderSpread](Leaf.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:32](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L32)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`, `bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |
| `bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[__updateBoxBounds](Leaf.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:40](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L40)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[__updateStrokeBounds](Leaf.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:44](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L44)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[__updateRenderBounds](Leaf.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:48](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L48)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[__updateSortChildren](Leaf.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:55](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L55)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |
| `index?` | `number` |

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[add](Leaf.md#add)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:68](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L68)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | [`ILeaf`](../interfaces/ILeaf.md)[] |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:97](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L97)

___

### remove

▸ **remove**(`child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Overrides

[Leaf](Leaf.md).[remove](Leaf.md#remove)

#### Defined in

[src/leafer/packages/display/src/Branch.ts:99](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L99)

___

### removeAll

▸ **removeAll**(`destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:114](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L114)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:127](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L127)

___

### \_\_remove

▸ **__remove**(`child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:131](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L131)

___

### \_\_preRemove

▸ **__preRemove**(): `void`

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:142](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L142)

___

### \_\_realRemoveChild

▸ **__realRemoveChild**(`child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:149](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L149)

___

### \_\_emitChildEvent

▸ **__emitChildEvent**(`type`, `child`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `child` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Defined in

[src/leafer/packages/display/src/Branch.ts:161](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Branch.ts#L161)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](../interfaces/ILeafInputData.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[reset](Leaf.md#reset)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:121](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L121)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[resetCustom](Leaf.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L141)

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

#### Inherited from

[Leaf](Leaf.md).[waitParent](Leaf.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:147](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L147)

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

#### Inherited from

[Leaf](Leaf.md).[waitLeafer](Leaf.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L152)

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

#### Inherited from

[Leaf](Leaf.md).[nextRender](Leaf.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L157)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[removeNextRender](Leaf.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L161)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__bindLeafer](Leaf.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:165](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L165)

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

#### Inherited from

[Leaf](Leaf.md).[set](Leaf.md#set)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L191)

___

### get

▸ **get**(`_name?`): [`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](../interfaces/ILeafInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_name?` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](../interfaces/ILeafInputData.md)

#### Inherited from

[Leaf](Leaf.md).[get](Leaf.md#get)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:192](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L192)

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

#### Inherited from

[Leaf](Leaf.md).[setAttr](Leaf.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:194](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L194)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[Leaf](Leaf.md).[getAttr](Leaf.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L195)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[Leaf](Leaf.md).[getComputedAttr](Leaf.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L197)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Inherited from

[Leaf](Leaf.md).[toJSON](Leaf.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L199)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

`string`

#### Inherited from

[Leaf](Leaf.md).[toString](Leaf.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L204)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[Leaf](Leaf.md).[toSVG](Leaf.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L208)

___

### \_\_SVG

▸ **__SVG**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__SVG](Leaf.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L210)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[Leaf](Leaf.md).[toHTML](Leaf.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L212)

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

#### Inherited from

[Leaf](Leaf.md).[__setAttr](Leaf.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L216)

___

### \_\_getAttr

▸ **__getAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[Leaf](Leaf.md).[__getAttr](Leaf.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L218)

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

#### Inherited from

[Leaf](Leaf.md).[setProxyAttr](Leaf.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L220)

___

### getProxyAttr

▸ **getProxyAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[Leaf](Leaf.md).[getProxyAttr](Leaf.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L222)

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

#### Inherited from

[Leaf](Leaf.md).[find](Leaf.md#find)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:229](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L229)

___

### findTag

▸ **findTag**(`_tag`): [`ILeaf`](../interfaces/ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_tag` | `string` \| `string`[] |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)[]

#### Inherited from

[Leaf](Leaf.md).[findTag](Leaf.md#findtag)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:231](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L231)

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

#### Inherited from

[Leaf](Leaf.md).[findOne](Leaf.md#findone)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:233](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L233)

___

### findId

▸ **findId**(`_id`): [`ILeaf`](../interfaces/ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | `string` \| `number` |

#### Returns

[`ILeaf`](../interfaces/ILeaf.md)

#### Inherited from

[Leaf](Leaf.md).[findId](Leaf.md#findid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:235](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L235)

___

### focus

▸ **focus**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[focus](Leaf.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:242](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L242)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[updateState](Leaf.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L244)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[updateLayout](Leaf.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L249)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[forceUpdate](Leaf.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L253)

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

#### Inherited from

[Leaf](Leaf.md).[forceRender](Leaf.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L261)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__extraUpdate](Leaf.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateWorldMatrix](Leaf.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateLocalMatrix](Leaf.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L273)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateWorldBounds](Leaf.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:279](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L279)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateLocalBounds](Leaf.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L281)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateLocalBoxBounds](Leaf.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L284)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateLocalStrokeBounds](Leaf.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L286)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateLocalRenderBounds](Leaf.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L288)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateContentBounds](Leaf.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L294)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateAutoLayout](Leaf.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L301)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateFlowLayout](Leaf.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L303)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateNaturalSize](Leaf.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L305)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__onUpdateSize](Leaf.md#__onupdatesize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L312)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateEraser](Leaf.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L317)

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

#### Inherited from

[Leaf](Leaf.md).[__renderEraser](Leaf.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L321)

___

### \_\_updateMask

▸ **__updateMask**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateMask](Leaf.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L329)

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

#### Inherited from

[Leaf](Leaf.md).[__renderMask](Leaf.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L335)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Inherited from

[Leaf](Leaf.md).[__getNowWorld](Leaf.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:343](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L343)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[Leaf](Leaf.md).[getClampRenderScale](Leaf.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L356)

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

#### Inherited from

[Leaf](Leaf.md).[getRenderScaleData](Leaf.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:362](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L362)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Inherited from

[Leaf](Leaf.md).[getTransform](Leaf.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L371)

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

#### Inherited from

[Leaf](Leaf.md).[getBounds](Leaf.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L376)

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

#### Inherited from

[Leaf](Leaf.md).[getLayoutBounds](Leaf.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L380)

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

#### Inherited from

[Leaf](Leaf.md).[getLayoutPoints](Leaf.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L384)

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

#### Inherited from

[Leaf](Leaf.md).[getWorldBounds](Leaf.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L389)

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

#### Inherited from

[Leaf](Leaf.md).[worldToLocal](Leaf.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L397)

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

#### Inherited from

[Leaf](Leaf.md).[localToWorld](Leaf.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L405)

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

#### Inherited from

[Leaf](Leaf.md).[worldToInner](Leaf.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L413)

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

#### Inherited from

[Leaf](Leaf.md).[innerToWorld](Leaf.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L421)

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

#### Inherited from

[Leaf](Leaf.md).[getBoxPoint](Leaf.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L428)

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

#### Inherited from

[Leaf](Leaf.md).[getBoxPointByInner](Leaf.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:432](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L432)

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

#### Inherited from

[Leaf](Leaf.md).[getInnerPoint](Leaf.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:438](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L438)

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

#### Inherited from

[Leaf](Leaf.md).[getInnerPointByBox](Leaf.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:444](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L444)

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

#### Inherited from

[Leaf](Leaf.md).[getInnerPointByLocal](Leaf.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:450](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L450)

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

#### Inherited from

[Leaf](Leaf.md).[getLocalPoint](Leaf.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L454)

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

#### Inherited from

[Leaf](Leaf.md).[getLocalPointByInner](Leaf.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:460](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L460)

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

#### Inherited from

[Leaf](Leaf.md).[getPagePoint](Leaf.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L464)

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

#### Inherited from

[Leaf](Leaf.md).[getWorldPoint](Leaf.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L469)

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

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByBox](Leaf.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:475](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L475)

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

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByLocal](Leaf.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:479](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L479)

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

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByPage](Leaf.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L485)

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

#### Inherited from

[Leaf](Leaf.md).[setTransform](Leaf.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L493)

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

#### Inherited from

[Leaf](Leaf.md).[transform](Leaf.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L497)

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

#### Inherited from

[Leaf](Leaf.md).[move](Leaf.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:501](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L501)

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

#### Inherited from

[Leaf](Leaf.md).[moveInner](Leaf.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L506)

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

#### Inherited from

[Leaf](Leaf.md).[scaleOf](Leaf.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L510)

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

#### Inherited from

[Leaf](Leaf.md).[rotateOf](Leaf.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L514)

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

#### Inherited from

[Leaf](Leaf.md).[skewOf](Leaf.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L518)

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

#### Inherited from

[Leaf](Leaf.md).[transformWorld](Leaf.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:523](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L523)

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

#### Inherited from

[Leaf](Leaf.md).[moveWorld](Leaf.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:527](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L527)

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

#### Inherited from

[Leaf](Leaf.md).[scaleOfWorld](Leaf.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L531)

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

#### Inherited from

[Leaf](Leaf.md).[rotateOfWorld](Leaf.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:535](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L535)

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

#### Inherited from

[Leaf](Leaf.md).[skewOfWorld](Leaf.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L539)

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

#### Inherited from

[Leaf](Leaf.md).[flip](Leaf.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L543)

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

#### Inherited from

[Leaf](Leaf.md).[scaleResize](Leaf.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L550)

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

#### Inherited from

[Leaf](Leaf.md).[__scaleResize](Leaf.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:555](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L555)

___

### resizeWidth

▸ **resizeWidth**(`_width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_width` | `number` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[resizeWidth](Leaf.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L558)

___

### resizeHeight

▸ **resizeHeight**(`_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_height` | `number` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[resizeHeight](Leaf.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L560)

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

#### Inherited from

[Leaf](Leaf.md).[hit](Leaf.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L565)

___

### \_\_hitWorld

▸ **__hitWorld**(`_point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[Leaf](Leaf.md).[__hitWorld](Leaf.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L567)

___

### \_\_hit

▸ **__hit**(`_local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_local` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[Leaf](Leaf.md).[__hit](Leaf.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L569)

___

### \_\_hitFill

▸ **__hitFill**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[Leaf](Leaf.md).[__hitFill](Leaf.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L571)

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

#### Inherited from

[Leaf](Leaf.md).[__hitStroke](Leaf.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L573)

___

### \_\_hitPixel

▸ **__hitPixel**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[Leaf](Leaf.md).[__hitPixel](Leaf.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L575)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__drawHitPath](Leaf.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L577)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateHitCanvas](Leaf.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L579)

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

#### Inherited from

[Leaf](Leaf.md).[__render](Leaf.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:586](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L586)

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

#### Inherited from

[Leaf](Leaf.md).[__drawFast](Leaf.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L588)

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

#### Inherited from

[Leaf](Leaf.md).[__draw](Leaf.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L590)

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

#### Inherited from

[Leaf](Leaf.md).[__clip](Leaf.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L593)

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

#### Inherited from

[Leaf](Leaf.md).[__renderShape](Leaf.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L595)

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

#### Inherited from

[Leaf](Leaf.md).[__drawShape](Leaf.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L597)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateWorldOpacity](Leaf.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L600)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateChange](Leaf.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L602)

___

### \_\_drawPath

▸ **__drawPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__drawPath](Leaf.md#__drawpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:609](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L609)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__drawRenderPath](Leaf.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:611](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L611)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updatePath](Leaf.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:613](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L613)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateRenderPath](Leaf.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L615)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Inherited from

[Leaf](Leaf.md).[getMotionPathData](Leaf.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L622)

___

### getMotionPoint

▸ **getMotionPoint**(`_motionDistance`): [`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionDistance` | `number` \| [`IUnitData`](../interfaces/IUnitData.md) |

#### Returns

[`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Inherited from

[Leaf](Leaf.md).[getMotionPoint](Leaf.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L626)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[Leaf](Leaf.md).[getMotionTotal](Leaf.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L630)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__updateMotionPath](Leaf.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L634)

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

#### Inherited from

[Leaf](Leaf.md).[__runAnimation](Leaf.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L640)

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

#### Inherited from

[Leaf](Leaf.md).[dropTo](Leaf.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:653](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L653)

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

#### Inherited from

[Leaf](Leaf.md).[on](Leaf.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L662)

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

#### Inherited from

[Leaf](Leaf.md).[off](Leaf.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L664)

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

#### Inherited from

[Leaf](Leaf.md).[on_](Leaf.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L666)

___

### off\_

▸ **off_**(`_id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[off_](Leaf.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L668)

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

#### Inherited from

[Leaf](Leaf.md).[once](Leaf.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L670)

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

#### Inherited from

[Leaf](Leaf.md).[emit](Leaf.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L672)

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

#### Inherited from

[Leaf](Leaf.md).[emitEvent](Leaf.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L674)

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

#### Inherited from

[Leaf](Leaf.md).[hasEvent](Leaf.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L676)

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

#### Inherited from

[Leaf](Leaf.md).[changeAttr](Leaf.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:680](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L680)

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

#### Inherited from

[Leaf](Leaf.md).[addAttr](Leaf.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:684](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L684)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[__emitLifeEvent](Leaf.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:690](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L690)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Leaf](Leaf.md).[destroy](Leaf.md#destroy)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:695](https://github.com/leaferjs/leafer/blob/c0a3cd1f6ba179c1348a90558ab02097cb535d9a/packages/display/src/Leaf.ts#L695)
