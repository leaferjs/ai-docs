# Interface: ILeaf

## Hierarchy

- [`ILeafRender`](ILeafRender.md)

- [`ILeafHit`](ILeafHit.md)

- [`ILeafBounds`](ILeafBounds.md)

- [`ILeafMatrix`](ILeafMatrix.md)

- [`ILeafDataProxy`](ILeafDataProxy.md)

- [`ILeafInputData`](ILeafInputData.md)

- [`IEventer`](IEventer.md)

  ↳ **`ILeaf`**

  ↳↳ [`IUI`](IUI.md)

  ↳↳ [`IBranch`](IBranch.md)

## Implemented by

- [`Leaf`](../classes/Leaf.md)

## Table of contents

### Properties

- [id](ILeaf.md#id)
- [name](ILeaf.md#name)
- [className](ILeaf.md#classname)
- [blendMode](ILeaf.md#blendmode)
- [opacity](ILeaf.md#opacity)
- [visible](ILeaf.md#visible)
- [selected](ILeaf.md#selected)
- [disabled](ILeaf.md#disabled)
- [locked](ILeaf.md#locked)
- [zIndex](ILeaf.md#zindex)
- [mask](ILeaf.md#mask)
- [eraser](ILeaf.md#eraser)
- [filter](ILeaf.md#filter)
- [x](ILeaf.md#x)
- [y](ILeaf.md#y)
- [width](ILeaf.md#width)
- [height](ILeaf.md#height)
- [scaleX](ILeaf.md#scalex)
- [scaleY](ILeaf.md#scaley)
- [rotation](ILeaf.md#rotation)
- [skewX](ILeaf.md#skewx)
- [skewY](ILeaf.md#skewy)
- [scale](ILeaf.md#scale)
- [offsetX](ILeaf.md#offsetx)
- [offsetY](ILeaf.md#offsety)
- [scrollX](ILeaf.md#scrollx)
- [scrollY](ILeaf.md#scrolly)
- [origin](ILeaf.md#origin)
- [around](ILeaf.md#around)
- [lazy](ILeaf.md#lazy)
- [pixelRatio](ILeaf.md#pixelratio)
- [path](ILeaf.md#path)
- [windingRule](ILeaf.md#windingrule)
- [closed](ILeaf.md#closed)
- [flow](ILeaf.md#flow)
- [padding](ILeaf.md#padding)
- [gap](ILeaf.md#gap)
- [flowAlign](ILeaf.md#flowalign)
- [flowWrap](ILeaf.md#flowwrap)
- [itemBox](ILeaf.md#itembox)
- [inFlow](ILeaf.md#inflow)
- [autoWidth](ILeaf.md#autowidth)
- [autoHeight](ILeaf.md#autoheight)
- [lockRatio](ILeaf.md#lockratio)
- [autoBox](ILeaf.md#autobox)
- [widthRange](ILeaf.md#widthrange)
- [heightRange](ILeaf.md#heightrange)
- [draggable](ILeaf.md#draggable)
- [dragBounds](ILeaf.md#dragbounds)
- [editable](ILeaf.md#editable)
- [hittable](ILeaf.md#hittable)
- [hitFill](ILeaf.md#hitfill)
- [hitStroke](ILeaf.md#hitstroke)
- [hitBox](ILeaf.md#hitbox)
- [hitChildren](ILeaf.md#hitchildren)
- [hitSelf](ILeaf.md#hitself)
- [hitRadius](ILeaf.md#hitradius)
- [button](ILeaf.md#button)
- [cursor](ILeaf.md#cursor)
- [motionPath](ILeaf.md#motionpath)
- [motionPrecision](ILeaf.md#motionprecision)
- [motion](ILeaf.md#motion)
- [motionRotation](ILeaf.md#motionrotation)
- [normalStyle](ILeaf.md#normalstyle)
- [event](ILeaf.md#event)
- [data](ILeaf.md#data)
- [noBounds](ILeaf.md#nobounds)
- [tag](ILeaf.md#tag)
- [\_\_tag](ILeaf.md#__tag)
- [innerName](ILeaf.md#innername)
- [\_\_DataProcessor](ILeaf.md#__dataprocessor)
- [\_\_LayoutProcessor](ILeaf.md#__layoutprocessor)
- [app](ILeaf.md#app)
- [leafer](ILeaf.md#leafer)
- [parent](ILeaf.md#parent)
- [zoomLayer](ILeaf.md#zoomlayer)
- [leaferIsCreated](ILeaf.md#leaferiscreated)
- [leaferIsReady](ILeaf.md#leaferisready)
- [isApp](ILeaf.md#isapp)
- [isLeafer](ILeaf.md#isleafer)
- [isBranch](ILeaf.md#isbranch)
- [isBranchLeaf](ILeaf.md#isbranchleaf)
- [isOutside](ILeaf.md#isoutside)
- [\_\_](ILeaf.md#__)
- [proxyData](ILeaf.md#proxydata)
- [\_\_proxyData](ILeaf.md#__proxydata)
- [syncEventer](ILeaf.md#synceventer)
- [lockNormalStyle](ILeaf.md#locknormalstyle)
- [\_\_layout](ILeaf.md#__layout)
- [\_\_world](ILeaf.md#__world)
- [\_\_local](ILeaf.md#__local)
- [\_\_nowWorld](ILeaf.md#__nowworld)
- [\_\_cameraWorld](ILeaf.md#__cameraworld)
- [\_\_localMatrix](ILeaf.md#__localmatrix)
- [\_\_localBoxBounds](ILeaf.md#__localboxbounds)
- [\_\_worldOpacity](ILeaf.md#__worldopacity)
- [worldTransform](ILeaf.md#worldtransform)
- [localTransform](ILeaf.md#localtransform)
- [boxBounds](ILeaf.md#boxbounds)
- [renderBounds](ILeaf.md#renderbounds)
- [worldBoxBounds](ILeaf.md#worldboxbounds)
- [worldStrokeBounds](ILeaf.md#worldstrokebounds)
- [worldRenderBounds](ILeaf.md#worldrenderbounds)
- [worldOpacity](ILeaf.md#worldopacity)
- [\_\_level](ILeaf.md#__level)
- [\_\_tempNumber](ILeaf.md#__tempnumber)
- [\_\_worldFlipped](ILeaf.md#__worldflipped)
- [animation](ILeaf.md#animation)
- [animationOut](ILeaf.md#animationout)
- [\_\_hasAutoLayout](ILeaf.md#__hasautolayout)
- [\_\_hasMotionPath](ILeaf.md#__hasmotionpath)
- [\_\_hasMask](ILeaf.md#__hasmask)
- [\_\_hasEraser](ILeaf.md#__haseraser)
- [\_\_hitCanvas](ILeaf.md#__hitcanvas)
- [\_\_flowBounds](ILeaf.md#__flowbounds)
- [\_\_widthGrow](ILeaf.md#__widthgrow)
- [\_\_heightGrow](ILeaf.md#__heightgrow)
- [\_\_hasGrow](ILeaf.md#__hasgrow)
- [\_\_onlyHitMask](ILeaf.md#__onlyhitmask)
- [\_\_ignoreHitWorld](ILeaf.md#__ignorehitworld)
- [\_\_inLazyBounds](ILeaf.md#__inlazybounds)
- [pathInputed](ILeaf.md#pathinputed)
- [destroyed](ILeaf.md#destroyed)
- [children](ILeaf.md#children)
- [innerId](ILeaf.md#innerid)
- [\_\_captureMap](ILeaf.md#__capturemap)
- [\_\_bubbleMap](ILeaf.md#__bubblemap)

### Methods

- [reset](ILeaf.md#reset)
- [resetCustom](ILeaf.md#resetcustom)
- [waitParent](ILeaf.md#waitparent)
- [waitLeafer](ILeaf.md#waitleafer)
- [nextRender](ILeaf.md#nextrender)
- [removeNextRender](ILeaf.md#removenextrender)
- [\_\_bindLeafer](ILeaf.md#__bindleafer)
- [set](ILeaf.md#set)
- [get](ILeaf.md#get)
- [setAttr](ILeaf.md#setattr)
- [getAttr](ILeaf.md#getattr)
- [getComputedAttr](ILeaf.md#getcomputedattr)
- [toJSON](ILeaf.md#tojson)
- [toString](ILeaf.md#tostring)
- [toSVG](ILeaf.md#tosvg)
- [\_\_SVG](ILeaf.md#__svg)
- [toHTML](ILeaf.md#tohtml)
- [clone](ILeaf.md#clone)
- [animate](ILeaf.md#animate)
- [\_\_setAttr](ILeaf.md#__setattr)
- [\_\_getAttr](ILeaf.md#__getattr)
- [setProxyAttr](ILeaf.md#setproxyattr)
- [getProxyAttr](ILeaf.md#getproxyattr)
- [find](ILeaf.md#find)
- [findTag](ILeaf.md#findtag)
- [findOne](ILeaf.md#findone)
- [findId](ILeaf.md#findid)
- [focus](ILeaf.md#focus)
- [updateState](ILeaf.md#updatestate)
- [updateLayout](ILeaf.md#updatelayout)
- [forceUpdate](ILeaf.md#forceupdate)
- [forceRender](ILeaf.md#forcerender)
- [\_\_extraUpdate](ILeaf.md#__extraupdate)
- [\_\_updateWorldMatrix](ILeaf.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](ILeaf.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](ILeaf.md#__updateworldbounds)
- [\_\_updateLocalBounds](ILeaf.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](ILeaf.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](ILeaf.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](ILeaf.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](ILeaf.md#__updatecontentbounds)
- [\_\_updateBoxBounds](ILeaf.md#__updateboxbounds)
- [\_\_updateStrokeBounds](ILeaf.md#__updatestrokebounds)
- [\_\_updateRenderBounds](ILeaf.md#__updaterenderbounds)
- [\_\_updateAutoLayout](ILeaf.md#__updateautolayout)
- [\_\_updateFlowLayout](ILeaf.md#__updateflowlayout)
- [\_\_updateNaturalSize](ILeaf.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](ILeaf.md#__updatestrokespread)
- [\_\_updateRenderSpread](ILeaf.md#__updaterenderspread)
- [\_\_onUpdateSize](ILeaf.md#__onupdatesize)
- [\_\_updateEraser](ILeaf.md#__updateeraser)
- [\_\_updateMask](ILeaf.md#__updatemask)
- [\_\_renderMask](ILeaf.md#__rendermask)
- [\_\_renderEraser](ILeaf.md#__rendereraser)
- [\_\_getNowWorld](ILeaf.md#__getnowworld)
- [getTransform](ILeaf.md#gettransform)
- [getBounds](ILeaf.md#getbounds)
- [getLayoutBounds](ILeaf.md#getlayoutbounds)
- [getLayoutPoints](ILeaf.md#getlayoutpoints)
- [getWorldBounds](ILeaf.md#getworldbounds)
- [worldToLocal](ILeaf.md#worldtolocal)
- [localToWorld](ILeaf.md#localtoworld)
- [worldToInner](ILeaf.md#worldtoinner)
- [innerToWorld](ILeaf.md#innertoworld)
- [getBoxPoint](ILeaf.md#getboxpoint)
- [getBoxPointByInner](ILeaf.md#getboxpointbyinner)
- [getInnerPoint](ILeaf.md#getinnerpoint)
- [getInnerPointByBox](ILeaf.md#getinnerpointbybox)
- [getInnerPointByLocal](ILeaf.md#getinnerpointbylocal)
- [getLocalPoint](ILeaf.md#getlocalpoint)
- [getLocalPointByInner](ILeaf.md#getlocalpointbyinner)
- [getPagePoint](ILeaf.md#getpagepoint)
- [getWorldPoint](ILeaf.md#getworldpoint)
- [getWorldPointByBox](ILeaf.md#getworldpointbybox)
- [getWorldPointByLocal](ILeaf.md#getworldpointbylocal)
- [getWorldPointByPage](ILeaf.md#getworldpointbypage)
- [setTransform](ILeaf.md#settransform)
- [transform](ILeaf.md#transform)
- [move](ILeaf.md#move)
- [moveInner](ILeaf.md#moveinner)
- [scaleOf](ILeaf.md#scaleof)
- [rotateOf](ILeaf.md#rotateof)
- [skewOf](ILeaf.md#skewof)
- [transformWorld](ILeaf.md#transformworld)
- [moveWorld](ILeaf.md#moveworld)
- [scaleOfWorld](ILeaf.md#scaleofworld)
- [rotateOfWorld](ILeaf.md#rotateofworld)
- [skewOfWorld](ILeaf.md#skewofworld)
- [flip](ILeaf.md#flip)
- [scaleResize](ILeaf.md#scaleresize)
- [\_\_scaleResize](ILeaf.md#__scaleresize)
- [resizeWidth](ILeaf.md#resizewidth)
- [resizeHeight](ILeaf.md#resizeheight)
- [\_\_hitWorld](ILeaf.md#__hitworld)
- [\_\_hit](ILeaf.md#__hit)
- [\_\_hitFill](ILeaf.md#__hitfill)
- [\_\_hitStroke](ILeaf.md#__hitstroke)
- [\_\_hitPixel](ILeaf.md#__hitpixel)
- [\_\_drawHitPath](ILeaf.md#__drawhitpath)
- [\_\_updateHitCanvas](ILeaf.md#__updatehitcanvas)
- [\_\_render](ILeaf.md#__render)
- [\_\_drawFast](ILeaf.md#__drawfast)
- [\_\_draw](ILeaf.md#__draw)
- [\_\_clip](ILeaf.md#__clip)
- [\_\_renderShape](ILeaf.md#__rendershape)
- [\_\_updateWorldOpacity](ILeaf.md#__updateworldopacity)
- [\_\_updateChange](ILeaf.md#__updatechange)
- [\_\_drawPath](ILeaf.md#__drawpath)
- [\_\_drawRenderPath](ILeaf.md#__drawrenderpath)
- [\_\_updatePath](ILeaf.md#__updatepath)
- [\_\_updateRenderPath](ILeaf.md#__updaterenderpath)
- [getMotionPathData](ILeaf.md#getmotionpathdata)
- [getMotionPoint](ILeaf.md#getmotionpoint)
- [getMotionTotal](ILeaf.md#getmotiontotal)
- [\_\_updateMotionPath](ILeaf.md#__updatemotionpath)
- [\_\_runAnimation](ILeaf.md#__runanimation)
- [\_\_emitLifeEvent](ILeaf.md#__emitlifeevent)
- [\_\_updateSortChildren](ILeaf.md#__updatesortchildren)
- [add](ILeaf.md#add)
- [remove](ILeaf.md#remove)
- [dropTo](ILeaf.md#dropto)
- [\_\_realSetAttr](ILeaf.md#__realsetattr)
- [destroyEventer](ILeaf.md#destroyeventer)
- [on](ILeaf.md#on)
- [off](ILeaf.md#off)
- [on\_](ILeaf.md#on_)
- [off\_](ILeaf.md#off_)
- [once](ILeaf.md#once)
- [emit](ILeaf.md#emit)
- [emitEvent](ILeaf.md#emitevent)
- [hasEvent](ILeaf.md#hasevent)
- [destroy](ILeaf.md#destroy)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[id](ILeafInputData.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[name](ILeafInputData.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[className](ILeafInputData.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[blendMode](ILeafInputData.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[opacity](ILeafInputData.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeafInputData](ILeafInputData.md).[visible](ILeafInputData.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[selected](ILeafInputData.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[disabled](ILeafInputData.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[locked](ILeafInputData.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[zIndex](ILeafInputData.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[mask](ILeafInputData.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[eraser](ILeafInputData.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[filter](ILeafInputData.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[x](ILeafInputData.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[y](ILeafInputData.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[width](ILeafInputData.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[height](ILeafInputData.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scaleX](ILeafInputData.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scaleY](ILeafInputData.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[rotation](ILeafInputData.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[skewX](ILeafInputData.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[skewY](ILeafInputData.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scale](ILeafInputData.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[offsetX](ILeafInputData.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[offsetY](ILeafInputData.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scrollX](ILeafInputData.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[scrollY](ILeafInputData.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[origin](ILeafInputData.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[around](ILeafInputData.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[lazy](ILeafInputData.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[pixelRatio](ILeafInputData.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[path](ILeafInputData.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[windingRule](ILeafInputData.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[closed](ILeafInputData.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flow](ILeafInputData.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[padding](ILeafInputData.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[gap](ILeafInputData.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flowAlign](ILeafInputData.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[flowWrap](ILeafInputData.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[itemBox](ILeafInputData.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[inFlow](ILeafInputData.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoWidth](ILeafInputData.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoHeight](ILeafInputData.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[lockRatio](ILeafInputData.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[autoBox](ILeafInputData.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[widthRange](ILeafInputData.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[heightRange](ILeafInputData.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[draggable](ILeafInputData.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[dragBounds](ILeafInputData.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[editable](ILeafInputData.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hittable](ILeafInputData.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitFill](ILeafInputData.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitStroke](ILeafInputData.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitBox](ILeafInputData.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitChildren](ILeafInputData.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitSelf](ILeafInputData.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[hitRadius](ILeafInputData.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[button](ILeafInputData.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeafInputData](ILeafInputData.md).[cursor](ILeafInputData.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionPath](ILeafInputData.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionPrecision](ILeafInputData.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motion](ILeafInputData.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[motionRotation](ILeafInputData.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[normalStyle](ILeafInputData.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IEventer](IEventer.md).[event](IEventer.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeafInputData](ILeafInputData.md).[data](ILeafInputData.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L305)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[ILeafInputData](ILeafInputData.md).[noBounds](ILeafInputData.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L314)

___

### tag

• **tag**: `string`

#### Overrides

[ILeafInputData](ILeafInputData.md).[tag](ILeafInputData.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L434)

___

### innerName

• `Readonly` **innerName**: `string`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L438)

___

### app

• `Optional` `Readonly` **app**: [`ILeaferBase`](ILeaferBase.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L440)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](ILeaferBase.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L441)

___

### parent

• `Optional` **parent**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L442)

___

### zoomLayer

• `Optional` **zoomLayer**: [`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L443)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L445)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L446)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L448)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L449)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L450)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L451)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_

• **\_\_**: [`ILeafData`](ILeafData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L454)

___

### proxyData

• `Optional` **proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L456)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L457)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Overrides

[IEventer](IEventer.md).[syncEventer](IEventer.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L459)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L464)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L473)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L475)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L476)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L478)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L479)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L480)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L481)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L482)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_level

• **\_\_level**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L489)

___

### animation

• `Optional` **animation**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L491)

___

### animationOut

• `Optional` **animationOut**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L508)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L510)

___

### destroyed

• **destroyed**: `boolean`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L512)

___

### children

• `Optional` **children**: [`ILeaf`](ILeaf.md)[]

#### Overrides

[ILeafInputData](ILeafInputData.md).[children](ILeafInputData.md#children)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L683)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IEventer](IEventer.md).[innerId](IEventer.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEventer](IEventer.md).[__captureMap](IEventer.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEventer](IEventer.md).[__bubbleMap](IEventer.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L41)

## Methods

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L514)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L515)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L517)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L518)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `off?` | ``"off"`` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L519)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L520)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L522)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](IObject.md) |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L524)

___

### get

▸ **get**(`name?`): [`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](ILeafInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `string`[] \| [`IObject`](IObject.md) |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](ILeafInputData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L525)

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

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L526)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L527)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L528)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L530)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

`string`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L531)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L532)

___

### \_\_SVG

▸ **__SVG**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L533)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L534)

___

### clone

▸ `Optional` **clone**(`data?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L535)

___

### animate

▸ `Optional` **animate**(`_keyframe?`, `_options?`, `_type?`, `_isTemp?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_keyframe?` | `any` |
| `_options?` | `any` |
| `_type?` | `any` |
| `_isTemp?` | `boolean` |

#### Returns

`any`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L537)

___

### \_\_setAttr

▸ **__setAttr**(`attrName`, `newValue`, `checkFiniteNumber?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |
| `checkFiniteNumber?` | `boolean` |

#### Returns

`boolean`

#### Overrides

[ILeafDataProxy](ILeafDataProxy.md).[__setAttr](ILeafDataProxy.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L540)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Overrides

[ILeafDataProxy](ILeafDataProxy.md).[__getAttr](ILeafDataProxy.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L541)

___

### setProxyAttr

▸ **setProxyAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Overrides

[ILeafDataProxy](ILeafDataProxy.md).[setProxyAttr](ILeafDataProxy.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L542)

___

### getProxyAttr

▸ **getProxyAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Overrides

[ILeafDataProxy](ILeafDataProxy.md).[getProxyAttr](ILeafDataProxy.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L543)

___

### find

▸ **find**(`condition`, `options?`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindMethod`](IFindMethod.md) |
| `options?` | `any` |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L546)

___

### findTag

▸ **findTag**(`tag`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L547)

___

### findOne

▸ **findOne**(`condition`, `options?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindMethod`](IFindMethod.md) |
| `options?` | `any` |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L548)

___

### findId

▸ **findId**(`id`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`ILeaf`](ILeaf.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L549)

___

### focus

▸ **focus**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L551)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L553)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L554)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L555)

___

### forceRender

▸ **forceRender**(`bounds?`, `sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |
| `sync?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L558)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Overrides

[ILeafMatrix](ILeafMatrix.md).[__updateWorldMatrix](ILeafMatrix.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Overrides

[ILeafMatrix](ILeafMatrix.md).[__updateLocalMatrix](ILeafMatrix.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateWorldBounds](ILeafBounds.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateLocalBounds](ILeafBounds.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateLocalBoxBounds](ILeafBounds.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateLocalStrokeBounds](ILeafBounds.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateLocalRenderBounds](ILeafBounds.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L572)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondLayout?` | `boolean` |

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateBoxBounds](ILeafBounds.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateStrokeBounds](ILeafBounds.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateRenderBounds](ILeafBounds.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateAutoLayout](ILeafBounds.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateFlowLayout](ILeafBounds.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateNaturalSize](ILeafBounds.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateStrokeSpread](ILeafBounds.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__updateRenderSpread](ILeafBounds.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Overrides

[ILeafBounds](ILeafBounds.md).[__onUpdateSize](ILeafBounds.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_updateMask

▸ **__updateMask**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L588)

___

### \_\_renderMask

▸ **__renderMask**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L589)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L590)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L593)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L595)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L597)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L598)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](IPointData.md)[]

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L599)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IBoundsData`](IBoundsData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `change?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L601)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L603)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L604)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L605)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L606)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L608)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L609)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L610)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L611)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L612)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L613)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L614)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L615)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L616)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L617)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L618)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L619)

___

### setTransform

▸ **setTransform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L622)

___

### transform

▸ **transform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L623)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L624)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L626)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L627)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L628)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L629)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L631)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L632)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L633)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L634)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L635)

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

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L637)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY`, `noResize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `noResize?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L639)

___

### \_\_scaleResize

▸ **__scaleResize**(`scaleX`, `scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L640)

___

### resizeWidth

▸ **resizeWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L642)

___

### resizeHeight

▸ **resizeHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L643)

___

### \_\_hitWorld

▸ **__hitWorld**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Overrides

[ILeafHit](ILeafHit.md).[__hitWorld](ILeafHit.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L646)

___

### \_\_hit

▸ **__hit**(`local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Overrides

[ILeafHit](ILeafHit.md).[__hit](ILeafHit.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L647)

___

### \_\_hitFill

▸ **__hitFill**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Overrides

[ILeafHit](ILeafHit.md).[__hitFill](ILeafHit.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L648)

___

### \_\_hitStroke

▸ **__hitStroke**(`inner`, `strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |
| `strokeWidth` | `number` |

#### Returns

`boolean`

#### Overrides

[ILeafHit](ILeafHit.md).[__hitStroke](ILeafHit.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L649)

___

### \_\_hitPixel

▸ **__hitPixel**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Overrides

[ILeafHit](ILeafHit.md).[__hitPixel](ILeafHit.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L650)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Overrides

[ILeafHit](ILeafHit.md).[__drawHitPath](ILeafHit.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Overrides

[ILeafHit](ILeafHit.md).[__updateHitCanvas](ILeafHit.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L652)

___

### \_\_render

▸ **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__render](ILeafRender.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L655)

___

### \_\_drawFast

▸ **__drawFast**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__drawFast](ILeafRender.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_draw

▸ **__draw**(`canvas`, `options`, `originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `originCanvas?` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__draw](ILeafRender.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L657)

___

### \_\_clip

▸ **__clip**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__clip](ILeafRender.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L659)

___

### \_\_renderShape

▸ **__renderShape**(`canvas`, `options`, `ignoreFill?`, `ignoreStroke?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `ignoreFill?` | `boolean` |
| `ignoreStroke?` | `boolean` |

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__renderShape](ILeafRender.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__updateWorldOpacity](ILeafRender.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Overrides

[ILeafRender](ILeafRender.md).[__updateChange](ILeafRender.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L663)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L666)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L669)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L672)

___

### getMotionPoint

▸ **getMotionPoint**(`motionDistance`): [`IRotationPointData`](IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `motionDistance` | `number` \| [`IUnitData`](IUnitData.md) |

#### Returns

[`IRotationPointData`](IRotationPointData.md)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L673)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L676)

___

### \_\_runAnimation

▸ **__runAnimation**(`type`, `complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"in"`` \| ``"out"`` |
| `complete?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L678)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L680)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L685)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](ILeaf.md) \| [`ILeafInputData`](ILeafInputData.md) \| [`ILeaf`](ILeaf.md)[] \| [`ILeafInputData`](ILeafInputData.md)[] |
| `index?` | `number` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:686](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L686)

___

### remove

▸ **remove**(`child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | `string` \| `number` \| [`ILeaf`](ILeaf.md) \| [`IFindMethod`](IFindMethod.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L687)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](ILeaf.md) |
| `index?` | `number` |
| `resize?` | `boolean` |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/ILeaf.ts#L688)

___

### \_\_realSetAttr

▸ `Optional` **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[ILeafDataProxy](ILeafDataProxy.md).[__realSetAttr](ILeafDataProxy.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[destroyEventer](IEventer.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventMap`](IEventMap.md) |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[on](IEventer.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L45)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[off](IEventer.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L46)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[IEventer](IEventer.md).[on_](IEventer.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L47)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](IEventListenerId.md) \| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[off_](IEventer.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L48)

___

### once

▸ **once**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[once](IEventer.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L49)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](IObject.md) \| [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[emit](IEventer.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L50)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[emitEvent](IEventer.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L51)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[IEventer](IEventer.md).[hasEvent](IEventer.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IEventer](IEventer.md).[destroy](IEventer.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/a165a56/packages/interface/src/event/IEventer.ts#L54)
