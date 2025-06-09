# Interface: IBranch

## Hierarchy

- [`ILeaf`](ILeaf.md)

  ↳ **`IBranch`**

  ↳↳ [`IZoomView`](IZoomView.md)

## Table of contents

### Properties

- [children](IBranch.md#children)
- [id](IBranch.md#id)
- [name](IBranch.md#name)
- [className](IBranch.md#classname)
- [blendMode](IBranch.md#blendmode)
- [opacity](IBranch.md#opacity)
- [visible](IBranch.md#visible)
- [selected](IBranch.md#selected)
- [disabled](IBranch.md#disabled)
- [locked](IBranch.md#locked)
- [zIndex](IBranch.md#zindex)
- [dim](IBranch.md#dim)
- [dimskip](IBranch.md#dimskip)
- [mask](IBranch.md#mask)
- [eraser](IBranch.md#eraser)
- [filter](IBranch.md#filter)
- [x](IBranch.md#x)
- [y](IBranch.md#y)
- [width](IBranch.md#width)
- [height](IBranch.md#height)
- [scaleX](IBranch.md#scalex)
- [scaleY](IBranch.md#scaley)
- [rotation](IBranch.md#rotation)
- [skewX](IBranch.md#skewx)
- [skewY](IBranch.md#skewy)
- [scale](IBranch.md#scale)
- [offsetX](IBranch.md#offsetx)
- [offsetY](IBranch.md#offsety)
- [scrollX](IBranch.md#scrollx)
- [scrollY](IBranch.md#scrolly)
- [origin](IBranch.md#origin)
- [around](IBranch.md#around)
- [lazy](IBranch.md#lazy)
- [pixelRatio](IBranch.md#pixelratio)
- [path](IBranch.md#path)
- [windingRule](IBranch.md#windingrule)
- [closed](IBranch.md#closed)
- [flow](IBranch.md#flow)
- [padding](IBranch.md#padding)
- [gap](IBranch.md#gap)
- [flowAlign](IBranch.md#flowalign)
- [flowWrap](IBranch.md#flowwrap)
- [itemBox](IBranch.md#itembox)
- [inFlow](IBranch.md#inflow)
- [autoWidth](IBranch.md#autowidth)
- [autoHeight](IBranch.md#autoheight)
- [lockRatio](IBranch.md#lockratio)
- [autoBox](IBranch.md#autobox)
- [widthRange](IBranch.md#widthrange)
- [heightRange](IBranch.md#heightrange)
- [draggable](IBranch.md#draggable)
- [dragBounds](IBranch.md#dragbounds)
- [editable](IBranch.md#editable)
- [hittable](IBranch.md#hittable)
- [hitFill](IBranch.md#hitfill)
- [hitStroke](IBranch.md#hitstroke)
- [hitBox](IBranch.md#hitbox)
- [hitChildren](IBranch.md#hitchildren)
- [hitSelf](IBranch.md#hitself)
- [hitRadius](IBranch.md#hitradius)
- [button](IBranch.md#button)
- [cursor](IBranch.md#cursor)
- [motionPath](IBranch.md#motionpath)
- [motionPrecision](IBranch.md#motionprecision)
- [motion](IBranch.md#motion)
- [motionRotation](IBranch.md#motionrotation)
- [normalStyle](IBranch.md#normalstyle)
- [event](IBranch.md#event)
- [data](IBranch.md#data)
- [tag](IBranch.md#tag)
- [\_\_tag](IBranch.md#__tag)
- [innerName](IBranch.md#innername)
- [\_\_DataProcessor](IBranch.md#__dataprocessor)
- [\_\_LayoutProcessor](IBranch.md#__layoutprocessor)
- [app](IBranch.md#app)
- [leafer](IBranch.md#leafer)
- [parent](IBranch.md#parent)
- [zoomLayer](IBranch.md#zoomlayer)
- [leaferIsCreated](IBranch.md#leaferiscreated)
- [leaferIsReady](IBranch.md#leaferisready)
- [isApp](IBranch.md#isapp)
- [isLeafer](IBranch.md#isleafer)
- [isBranch](IBranch.md#isbranch)
- [isBranchLeaf](IBranch.md#isbranchleaf)
- [isOutside](IBranch.md#isoutside)
- [\_\_](IBranch.md#__)
- [proxyData](IBranch.md#proxydata)
- [\_\_proxyData](IBranch.md#__proxydata)
- [syncEventer](IBranch.md#synceventer)
- [lockNormalStyle](IBranch.md#locknormalstyle)
- [\_\_layout](IBranch.md#__layout)
- [\_\_world](IBranch.md#__world)
- [\_\_local](IBranch.md#__local)
- [\_\_nowWorld](IBranch.md#__nowworld)
- [\_\_cameraWorld](IBranch.md#__cameraworld)
- [\_\_localMatrix](IBranch.md#__localmatrix)
- [\_\_localBoxBounds](IBranch.md#__localboxbounds)
- [\_\_worldOpacity](IBranch.md#__worldopacity)
- [worldTransform](IBranch.md#worldtransform)
- [localTransform](IBranch.md#localtransform)
- [boxBounds](IBranch.md#boxbounds)
- [renderBounds](IBranch.md#renderbounds)
- [worldBoxBounds](IBranch.md#worldboxbounds)
- [worldStrokeBounds](IBranch.md#worldstrokebounds)
- [worldRenderBounds](IBranch.md#worldrenderbounds)
- [worldOpacity](IBranch.md#worldopacity)
- [\_\_level](IBranch.md#__level)
- [\_\_tempNumber](IBranch.md#__tempnumber)
- [\_\_worldFlipped](IBranch.md#__worldflipped)
- [animation](IBranch.md#animation)
- [animationOut](IBranch.md#animationout)
- [\_\_hasAutoLayout](IBranch.md#__hasautolayout)
- [\_\_hasMotionPath](IBranch.md#__hasmotionpath)
- [\_\_hasMask](IBranch.md#__hasmask)
- [\_\_hasEraser](IBranch.md#__haseraser)
- [\_\_hitCanvas](IBranch.md#__hitcanvas)
- [\_\_flowBounds](IBranch.md#__flowbounds)
- [\_\_widthGrow](IBranch.md#__widthgrow)
- [\_\_heightGrow](IBranch.md#__heightgrow)
- [\_\_hasGrow](IBranch.md#__hasgrow)
- [\_\_onlyHitMask](IBranch.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IBranch.md#__ignorehitworld)
- [\_\_inLazyBounds](IBranch.md#__inlazybounds)
- [pathInputed](IBranch.md#pathinputed)
- [destroyed](IBranch.md#destroyed)
- [innerId](IBranch.md#innerid)
- [\_\_captureMap](IBranch.md#__capturemap)
- [\_\_bubbleMap](IBranch.md#__bubblemap)
- [\_\_hasLocalEvent](IBranch.md#__haslocalevent)
- [\_\_hasWorldEvent](IBranch.md#__hasworldevent)

### Methods

- [\_\_renderBranch](IBranch.md#__renderbranch)
- [addMany](IBranch.md#addmany)
- [removeAll](IBranch.md#removeall)
- [clear](IBranch.md#clear)
- [reset](IBranch.md#reset)
- [resetCustom](IBranch.md#resetcustom)
- [waitParent](IBranch.md#waitparent)
- [waitLeafer](IBranch.md#waitleafer)
- [nextRender](IBranch.md#nextrender)
- [removeNextRender](IBranch.md#removenextrender)
- [\_\_bindLeafer](IBranch.md#__bindleafer)
- [set](IBranch.md#set)
- [get](IBranch.md#get)
- [setAttr](IBranch.md#setattr)
- [getAttr](IBranch.md#getattr)
- [getComputedAttr](IBranch.md#getcomputedattr)
- [toJSON](IBranch.md#tojson)
- [toString](IBranch.md#tostring)
- [toSVG](IBranch.md#tosvg)
- [\_\_SVG](IBranch.md#__svg)
- [toHTML](IBranch.md#tohtml)
- [clone](IBranch.md#clone)
- [animate](IBranch.md#animate)
- [\_\_setAttr](IBranch.md#__setattr)
- [\_\_getAttr](IBranch.md#__getattr)
- [setProxyAttr](IBranch.md#setproxyattr)
- [getProxyAttr](IBranch.md#getproxyattr)
- [find](IBranch.md#find)
- [findTag](IBranch.md#findtag)
- [findOne](IBranch.md#findone)
- [findId](IBranch.md#findid)
- [focus](IBranch.md#focus)
- [updateState](IBranch.md#updatestate)
- [updateLayout](IBranch.md#updatelayout)
- [forceUpdate](IBranch.md#forceupdate)
- [forceRender](IBranch.md#forcerender)
- [\_\_extraUpdate](IBranch.md#__extraupdate)
- [\_\_updateWorldMatrix](IBranch.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IBranch.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IBranch.md#__updateworldbounds)
- [\_\_updateLocalBounds](IBranch.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IBranch.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IBranch.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IBranch.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IBranch.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IBranch.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IBranch.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IBranch.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IBranch.md#__updateautolayout)
- [\_\_updateFlowLayout](IBranch.md#__updateflowlayout)
- [\_\_updateNaturalSize](IBranch.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IBranch.md#__updatestrokespread)
- [\_\_updateRenderSpread](IBranch.md#__updaterenderspread)
- [\_\_onUpdateSize](IBranch.md#__onupdatesize)
- [\_\_updateEraser](IBranch.md#__updateeraser)
- [\_\_updateMask](IBranch.md#__updatemask)
- [\_\_renderMask](IBranch.md#__rendermask)
- [\_\_renderEraser](IBranch.md#__rendereraser)
- [\_\_getNowWorld](IBranch.md#__getnowworld)
- [getTransform](IBranch.md#gettransform)
- [getBounds](IBranch.md#getbounds)
- [getLayoutBounds](IBranch.md#getlayoutbounds)
- [getLayoutPoints](IBranch.md#getlayoutpoints)
- [getWorldBounds](IBranch.md#getworldbounds)
- [worldToLocal](IBranch.md#worldtolocal)
- [localToWorld](IBranch.md#localtoworld)
- [worldToInner](IBranch.md#worldtoinner)
- [innerToWorld](IBranch.md#innertoworld)
- [getBoxPoint](IBranch.md#getboxpoint)
- [getBoxPointByInner](IBranch.md#getboxpointbyinner)
- [getInnerPoint](IBranch.md#getinnerpoint)
- [getInnerPointByBox](IBranch.md#getinnerpointbybox)
- [getInnerPointByLocal](IBranch.md#getinnerpointbylocal)
- [getLocalPoint](IBranch.md#getlocalpoint)
- [getLocalPointByInner](IBranch.md#getlocalpointbyinner)
- [getPagePoint](IBranch.md#getpagepoint)
- [getWorldPoint](IBranch.md#getworldpoint)
- [getWorldPointByBox](IBranch.md#getworldpointbybox)
- [getWorldPointByLocal](IBranch.md#getworldpointbylocal)
- [getWorldPointByPage](IBranch.md#getworldpointbypage)
- [setTransform](IBranch.md#settransform)
- [transform](IBranch.md#transform)
- [move](IBranch.md#move)
- [moveInner](IBranch.md#moveinner)
- [scaleOf](IBranch.md#scaleof)
- [rotateOf](IBranch.md#rotateof)
- [skewOf](IBranch.md#skewof)
- [transformWorld](IBranch.md#transformworld)
- [moveWorld](IBranch.md#moveworld)
- [scaleOfWorld](IBranch.md#scaleofworld)
- [rotateOfWorld](IBranch.md#rotateofworld)
- [skewOfWorld](IBranch.md#skewofworld)
- [flip](IBranch.md#flip)
- [scaleResize](IBranch.md#scaleresize)
- [\_\_scaleResize](IBranch.md#__scaleresize)
- [resizeWidth](IBranch.md#resizewidth)
- [resizeHeight](IBranch.md#resizeheight)
- [\_\_hitWorld](IBranch.md#__hitworld)
- [\_\_hit](IBranch.md#__hit)
- [\_\_hitFill](IBranch.md#__hitfill)
- [\_\_hitStroke](IBranch.md#__hitstroke)
- [\_\_hitPixel](IBranch.md#__hitpixel)
- [\_\_drawHitPath](IBranch.md#__drawhitpath)
- [\_\_updateHitCanvas](IBranch.md#__updatehitcanvas)
- [\_\_render](IBranch.md#__render)
- [\_\_drawFast](IBranch.md#__drawfast)
- [\_\_draw](IBranch.md#__draw)
- [\_\_clip](IBranch.md#__clip)
- [\_\_renderShape](IBranch.md#__rendershape)
- [\_\_drawShape](IBranch.md#__drawshape)
- [\_\_updateWorldOpacity](IBranch.md#__updateworldopacity)
- [\_\_updateChange](IBranch.md#__updatechange)
- [\_\_drawPath](IBranch.md#__drawpath)
- [\_\_drawRenderPath](IBranch.md#__drawrenderpath)
- [\_\_updatePath](IBranch.md#__updatepath)
- [\_\_updateRenderPath](IBranch.md#__updaterenderpath)
- [getMotionPathData](IBranch.md#getmotionpathdata)
- [getMotionPoint](IBranch.md#getmotionpoint)
- [getMotionTotal](IBranch.md#getmotiontotal)
- [\_\_updateMotionPath](IBranch.md#__updatemotionpath)
- [\_\_runAnimation](IBranch.md#__runanimation)
- [\_\_emitLifeEvent](IBranch.md#__emitlifeevent)
- [\_\_updateSortChildren](IBranch.md#__updatesortchildren)
- [add](IBranch.md#add)
- [remove](IBranch.md#remove)
- [dropTo](IBranch.md#dropto)
- [\_\_realSetAttr](IBranch.md#__realsetattr)
- [destroyEventer](IBranch.md#destroyeventer)
- [on](IBranch.md#on)
- [off](IBranch.md#off)
- [on\_](IBranch.md#on_)
- [off\_](IBranch.md#off_)
- [once](IBranch.md#once)
- [emit](IBranch.md#emit)
- [emitEvent](IBranch.md#emitevent)
- [hasEvent](IBranch.md#hasevent)
- [destroy](IBranch.md#destroy)

## Properties

### children

• **children**: [`ILeaf`](ILeaf.md)[]

#### Overrides

[ILeaf](ILeaf.md).[children](ILeaf.md#children)

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:6](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/IBranch.ts#L6)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[id](ILeaf.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[name](ILeaf.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[className](ILeaf.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeaf](ILeaf.md).[blendMode](ILeaf.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[opacity](ILeaf.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeaf](ILeaf.md).[visible](ILeaf.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[selected](ILeaf.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[disabled](ILeaf.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[locked](ILeaf.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[zIndex](ILeaf.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[dim](ILeaf.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[dimskip](ILeaf.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeaf](ILeaf.md).[mask](ILeaf.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeaf](ILeaf.md).[eraser](ILeaf.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[filter](ILeaf.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[x](ILeaf.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[y](ILeaf.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[width](ILeaf.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[height](ILeaf.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scaleX](ILeaf.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scaleY](ILeaf.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[rotation](ILeaf.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[skewX](ILeaf.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[skewY](ILeaf.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[scale](ILeaf.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[offsetX](ILeaf.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[offsetY](ILeaf.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scrollX](ILeaf.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[scrollY](ILeaf.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaf](ILeaf.md).[origin](ILeaf.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaf](ILeaf.md).[around](ILeaf.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lazy](ILeaf.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[pixelRatio](ILeaf.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeaf](ILeaf.md).[path](ILeaf.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeaf](ILeaf.md).[windingRule](ILeaf.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[closed](ILeaf.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeaf](ILeaf.md).[flow](ILeaf.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaf](ILeaf.md).[padding](ILeaf.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeaf](ILeaf.md).[gap](ILeaf.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeaf](ILeaf.md).[flowAlign](ILeaf.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeaf](ILeaf.md).[flowWrap](ILeaf.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeaf](ILeaf.md).[itemBox](ILeaf.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[inFlow](ILeaf.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaf](ILeaf.md).[autoWidth](ILeaf.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaf](ILeaf.md).[autoHeight](ILeaf.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lockRatio](ILeaf.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeaf](ILeaf.md).[autoBox](ILeaf.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaf](ILeaf.md).[widthRange](ILeaf.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaf](ILeaf.md).[heightRange](ILeaf.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeaf](ILeaf.md).[draggable](ILeaf.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[dragBounds](ILeaf.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[editable](ILeaf.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hittable](ILeaf.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaf](ILeaf.md).[hitFill](ILeaf.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaf](ILeaf.md).[hitStroke](ILeaf.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitBox](ILeaf.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitChildren](ILeaf.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[hitSelf](ILeaf.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[hitRadius](ILeaf.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[button](ILeaf.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeaf](ILeaf.md).[cursor](ILeaf.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[motionPath](ILeaf.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[motionPrecision](ILeaf.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaf](ILeaf.md).[motion](ILeaf.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[motionRotation](ILeaf.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[normalStyle](ILeaf.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[event](ILeaf.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[data](ILeaf.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[tag](ILeaf.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[__tag](ILeaf.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L440)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[ILeaf](ILeaf.md).[innerName](ILeaf.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[__DataProcessor](ILeaf.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[__LayoutProcessor](ILeaf.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L444)

___

### app

• `Optional` `Readonly` **app**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaf](ILeaf.md).[app](ILeaf.md#app)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L446)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaf](ILeaf.md).[leafer](ILeaf.md#leafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L447)

___

### parent

• `Optional` **parent**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[parent](ILeaf.md#parent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L448)

___

### zoomLayer

• `Optional` **zoomLayer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[zoomLayer](ILeaf.md#zoomlayer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L449)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[leaferIsCreated](ILeaf.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L451)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[leaferIsReady](ILeaf.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L452)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isApp](ILeaf.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L454)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isLeafer](ILeaf.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isBranch](ILeaf.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L456)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isBranchLeaf](ILeaf.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L457)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[isOutside](ILeaf.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:458](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L458)

___

### \_\_

• **\_\_**: [`ILeafData`](ILeafData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__](ILeaf.md#__)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L460)

___

### proxyData

• `Optional` **proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[proxyData](ILeaf.md#proxydata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__proxyData](ILeaf.md#__proxydata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:463](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L463)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[syncEventer](ILeaf.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L465)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[lockNormalStyle](ILeaf.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:466](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L466)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[ILeaf](ILeaf.md).[__layout](ILeaf.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__world](ILeaf.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__local](ILeaf.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__nowWorld](ILeaf.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__cameraWorld](ILeaf.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L474)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__localMatrix](ILeaf.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__localBoxBounds](ILeaf.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:477](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L477)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__worldOpacity](ILeaf.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L479)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldTransform](ILeaf.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L481)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[localTransform](ILeaf.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L482)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[boxBounds](ILeaf.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L484)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[renderBounds](ILeaf.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L485)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldBoxBounds](ILeaf.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L486)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldStrokeBounds](ILeaf.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L487)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[worldRenderBounds](ILeaf.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:488](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L488)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[worldOpacity](ILeaf.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__level](ILeaf.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__tempNumber](ILeaf.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L493)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__worldFlipped](ILeaf.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L495)

___

### animation

• `Optional` **animation**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[animation](ILeaf.md#animation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L497)

___

### animationOut

• `Optional` **animationOut**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[animationOut](ILeaf.md#animationout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasAutoLayout](ILeaf.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasMotionPath](ILeaf.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasMask](ILeaf.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasEraser](ILeaf.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[ILeaf](ILeaf.md).[__hitCanvas](ILeaf.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L505)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__flowBounds](ILeaf.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__widthGrow](ILeaf.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[__heightGrow](ILeaf.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasGrow](ILeaf.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L510)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__onlyHitMask](ILeaf.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__ignoreHitWorld](ILeaf.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__inLazyBounds](ILeaf.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L514)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[pathInputed](ILeaf.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L516)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[destroyed](ILeaf.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L518)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaf](ILeaf.md).[innerId](ILeaf.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[__captureMap](ILeaf.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaf](ILeaf.md).[__bubbleMap](ILeaf.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasLocalEvent](ILeaf.md#__haslocalevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hasWorldEvent](ILeaf.md#__hasworldevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L45)

## Methods

### \_\_renderBranch

▸ `Optional` **__renderBranch**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:7](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/IBranch.ts#L7)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | [`ILeaf`](ILeaf.md)[] \| [`ILeafInputData`](ILeafInputData.md)[] |

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:8](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/IBranch.ts#L8)

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

[leafer/packages/interface/src/display/IBranch.ts:9](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/IBranch.ts#L9)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:10](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/IBranch.ts#L10)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[reset](ILeaf.md#reset)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L520)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resetCustom](ILeaf.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L521)

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

#### Inherited from

[ILeaf](ILeaf.md).[waitParent](ILeaf.md#waitparent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L523)

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

#### Inherited from

[ILeaf](ILeaf.md).[waitLeafer](ILeaf.md#waitleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L524)

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

#### Inherited from

[ILeaf](ILeaf.md).[nextRender](ILeaf.md#nextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L525)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[removeNextRender](ILeaf.md#removenextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__bindLeafer](ILeaf.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L528)

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

#### Inherited from

[ILeaf](ILeaf.md).[set](ILeaf.md#set)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L530)

___

### get

▸ **get**(`name?`): [`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](ILeafInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `string`[] \| [`IObject`](IObject.md) |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaf](ILeaf.md).[get](ILeaf.md#get)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L531)

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

[ILeaf](ILeaf.md).[setAttr](ILeaf.md#setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L532)

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

[ILeaf](ILeaf.md).[getAttr](ILeaf.md#getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L533)

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

[ILeaf](ILeaf.md).[getComputedAttr](ILeaf.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L534)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IObject`](IObject.md)

#### Inherited from

[ILeaf](ILeaf.md).[toJSON](ILeaf.md#tojson)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L536)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toString](ILeaf.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L537)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toSVG](ILeaf.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L538)

___

### \_\_SVG

▸ **__SVG**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__SVG](ILeaf.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L539)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaf](ILeaf.md).[toHTML](ILeaf.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L540)

___

### clone

▸ `Optional` **clone**(`data?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[clone](ILeaf.md#clone)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L541)

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

#### Inherited from

[ILeaf](ILeaf.md).[animate](ILeaf.md#animate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L543)

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

#### Inherited from

[ILeaf](ILeaf.md).[__setAttr](ILeaf.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L546)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[ILeaf](ILeaf.md).[__getAttr](ILeaf.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L547)

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

#### Inherited from

[ILeaf](ILeaf.md).[setProxyAttr](ILeaf.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L548)

___

### getProxyAttr

▸ **getProxyAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[ILeaf](ILeaf.md).[getProxyAttr](ILeaf.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L549)

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

#### Inherited from

[ILeaf](ILeaf.md).[find](ILeaf.md#find)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:552](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L552)

___

### findTag

▸ **findTag**(`tag`): [`ILeaf`](ILeaf.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`ILeaf`](ILeaf.md)[]

#### Inherited from

[ILeaf](ILeaf.md).[findTag](ILeaf.md#findtag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L553)

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

#### Inherited from

[ILeaf](ILeaf.md).[findOne](ILeaf.md#findone)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L554)

___

### findId

▸ **findId**(`id`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaf](ILeaf.md).[findId](ILeaf.md#findid)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L555)

___

### focus

▸ **focus**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[focus](ILeaf.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:557](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L557)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[updateState](ILeaf.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L559)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[updateLayout](ILeaf.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L560)

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

[ILeaf](ILeaf.md).[forceUpdate](ILeaf.md#forceupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L561)

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

#### Inherited from

[ILeaf](ILeaf.md).[forceRender](ILeaf.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__extraUpdate](ILeaf.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:564](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L564)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldMatrix](ILeaf.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalMatrix](ILeaf.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldBounds](ILeaf.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalBounds](ILeaf.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L572)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalBoxBounds](ILeaf.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalStrokeBounds](ILeaf.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateLocalRenderBounds](ILeaf.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L576)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateContentBounds](ILeaf.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondLayout?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateBoxBounds](ILeaf.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateStrokeBounds](ILeaf.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderBounds](ILeaf.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateAutoLayout](ILeaf.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateFlowLayout](ILeaf.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateNaturalSize](ILeaf.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:585](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L585)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaf](ILeaf.md).[__updateStrokeSpread](ILeaf.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderSpread](ILeaf.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L588)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__onUpdateSize](ILeaf.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L590)

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

[ILeaf](ILeaf.md).[__updateEraser](ILeaf.md#__updateeraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L593)

___

### \_\_updateMask

▸ **__updateMask**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateMask](ILeaf.md#__updatemask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L594)

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

#### Inherited from

[ILeaf](ILeaf.md).[__renderMask](ILeaf.md#__rendermask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L595)

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

#### Inherited from

[ILeaf](ILeaf.md).[__renderEraser](ILeaf.md#__rendereraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L596)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaf](ILeaf.md).[__getNowWorld](ILeaf.md#__getnowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L599)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getTransform](ILeaf.md#gettransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L601)

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

#### Inherited from

[ILeaf](ILeaf.md).[getBounds](ILeaf.md#getbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L603)

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

#### Inherited from

[ILeaf](ILeaf.md).[getLayoutBounds](ILeaf.md#getlayoutbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L604)

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

#### Inherited from

[ILeaf](ILeaf.md).[getLayoutPoints](ILeaf.md#getlayoutpoints)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L605)

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

#### Inherited from

[ILeaf](ILeaf.md).[getWorldBounds](ILeaf.md#getworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L607)

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

#### Inherited from

[ILeaf](ILeaf.md).[worldToLocal](ILeaf.md#worldtolocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L609)

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

#### Inherited from

[ILeaf](ILeaf.md).[localToWorld](ILeaf.md#localtoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L610)

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

#### Inherited from

[ILeaf](ILeaf.md).[worldToInner](ILeaf.md#worldtoinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L611)

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

#### Inherited from

[ILeaf](ILeaf.md).[innerToWorld](ILeaf.md#innertoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L612)

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

#### Inherited from

[ILeaf](ILeaf.md).[getBoxPoint](ILeaf.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L614)

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

#### Inherited from

[ILeaf](ILeaf.md).[getBoxPointByInner](ILeaf.md#getboxpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L615)

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

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPoint](ILeaf.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L616)

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

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPointByBox](ILeaf.md#getinnerpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L617)

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

#### Inherited from

[ILeaf](ILeaf.md).[getInnerPointByLocal](ILeaf.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L618)

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

#### Inherited from

[ILeaf](ILeaf.md).[getLocalPoint](ILeaf.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L619)

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

#### Inherited from

[ILeaf](ILeaf.md).[getLocalPointByInner](ILeaf.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L620)

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

#### Inherited from

[ILeaf](ILeaf.md).[getPagePoint](ILeaf.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L621)

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

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPoint](ILeaf.md#getworldpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L622)

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

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByBox](ILeaf.md#getworldpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L623)

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

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByLocal](ILeaf.md#getworldpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L624)

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

#### Inherited from

[ILeaf](ILeaf.md).[getWorldPointByPage](ILeaf.md#getworldpointbypage)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:625](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L625)

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

#### Inherited from

[ILeaf](ILeaf.md).[setTransform](ILeaf.md#settransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L628)

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

#### Inherited from

[ILeaf](ILeaf.md).[transform](ILeaf.md#transform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L629)

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

#### Inherited from

[ILeaf](ILeaf.md).[move](ILeaf.md#move)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:630](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L630)

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

#### Inherited from

[ILeaf](ILeaf.md).[moveInner](ILeaf.md#moveinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L632)

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

#### Inherited from

[ILeaf](ILeaf.md).[scaleOf](ILeaf.md#scaleof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L633)

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

#### Inherited from

[ILeaf](ILeaf.md).[rotateOf](ILeaf.md#rotateof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L634)

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

#### Inherited from

[ILeaf](ILeaf.md).[skewOf](ILeaf.md#skewof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L635)

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

#### Inherited from

[ILeaf](ILeaf.md).[transformWorld](ILeaf.md#transformworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L637)

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

#### Inherited from

[ILeaf](ILeaf.md).[moveWorld](ILeaf.md#moveworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L638)

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

#### Inherited from

[ILeaf](ILeaf.md).[scaleOfWorld](ILeaf.md#scaleofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L639)

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

#### Inherited from

[ILeaf](ILeaf.md).[rotateOfWorld](ILeaf.md#rotateofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L640)

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

#### Inherited from

[ILeaf](ILeaf.md).[skewOfWorld](ILeaf.md#skewofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L641)

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

[ILeaf](ILeaf.md).[flip](ILeaf.md#flip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L643)

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

#### Inherited from

[ILeaf](ILeaf.md).[scaleResize](ILeaf.md#scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L645)

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

#### Inherited from

[ILeaf](ILeaf.md).[__scaleResize](ILeaf.md#__scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L646)

___

### resizeWidth

▸ **resizeWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resizeWidth](ILeaf.md#resizewidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L648)

___

### resizeHeight

▸ **resizeHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[resizeHeight](ILeaf.md#resizeheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L649)

___

### \_\_hitWorld

▸ **__hitWorld**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitWorld](ILeaf.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L652)

___

### \_\_hit

▸ **__hit**(`local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hit](ILeaf.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L653)

___

### \_\_hitFill

▸ **__hitFill**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitFill](ILeaf.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L654)

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

#### Inherited from

[ILeaf](ILeaf.md).[__hitStroke](ILeaf.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L655)

___

### \_\_hitPixel

▸ **__hitPixel**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[ILeaf](ILeaf.md).[__hitPixel](ILeaf.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawHitPath](ILeaf.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L657)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateHitCanvas](ILeaf.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L658)

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

#### Inherited from

[ILeaf](ILeaf.md).[__render](ILeaf.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L661)

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

#### Inherited from

[ILeaf](ILeaf.md).[__drawFast](ILeaf.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L662)

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

#### Inherited from

[ILeaf](ILeaf.md).[__draw](ILeaf.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L663)

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

#### Inherited from

[ILeaf](ILeaf.md).[__clip](ILeaf.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L665)

___

### \_\_renderShape

▸ **__renderShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__renderShape](ILeaf.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L666)

___

### \_\_drawShape

▸ **__drawShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawShape](ILeaf.md#__drawshape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateWorldOpacity](ILeaf.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L669)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateChange](ILeaf.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L670)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawPath](ILeaf.md#__drawpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L673)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__drawRenderPath](ILeaf.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updatePath](ILeaf.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L675)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateRenderPath](ILeaf.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L676)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getMotionPathData](ILeaf.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L679)

___

### getMotionPoint

▸ **getMotionPoint**(`motionDistance`): [`IRotationPointData`](IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `motionDistance` | `number` \| [`IUnitData`](IUnitData.md) |

#### Returns

[`IRotationPointData`](IRotationPointData.md)

#### Inherited from

[ILeaf](ILeaf.md).[getMotionPoint](ILeaf.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L680)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaf](ILeaf.md).[getMotionTotal](ILeaf.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L681)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateMotionPath](ILeaf.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L683)

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

#### Inherited from

[ILeaf](ILeaf.md).[__runAnimation](ILeaf.md#__runanimation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L685)

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

[ILeaf](ILeaf.md).[__emitLifeEvent](ILeaf.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L687)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[__updateSortChildren](ILeaf.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L692)

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

#### Inherited from

[ILeaf](ILeaf.md).[add](ILeaf.md#add)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L693)

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

#### Inherited from

[ILeaf](ILeaf.md).[remove](ILeaf.md#remove)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:694](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L694)

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

#### Inherited from

[ILeaf](ILeaf.md).[dropTo](ILeaf.md#dropto)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L695)

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

[ILeaf](ILeaf.md).[__realSetAttr](ILeaf.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[destroyEventer](ILeaf.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[on](ILeaf.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L49)

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

[ILeaf](ILeaf.md).[off](ILeaf.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L50)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[ILeaf](ILeaf.md).[on_](ILeaf.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L51)

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

[ILeaf](ILeaf.md).[off_](ILeaf.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L52)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `captureOrBind?` | `boolean` \| [`IObject`](IObject.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[once](ILeaf.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L53)

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

[ILeaf](ILeaf.md).[emit](ILeaf.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L54)

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

[ILeaf](ILeaf.md).[emitEvent](ILeaf.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L55)

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

[ILeaf](ILeaf.md).[hasEvent](ILeaf.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaf](ILeaf.md).[destroy](ILeaf.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L58)
