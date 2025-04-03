# Interface: IGIF

## Hierarchy

- `IPlayerMethods`

- [`IRect`](IRect.md)

  ↳ **`IGIF`**

## Table of contents

### Properties

- [id](IGIF.md#id)
- [name](IGIF.md#name)
- [className](IGIF.md#classname)
- [blendMode](IGIF.md#blendmode)
- [opacity](IGIF.md#opacity)
- [visible](IGIF.md#visible)
- [selected](IGIF.md#selected)
- [disabled](IGIF.md#disabled)
- [locked](IGIF.md#locked)
- [zIndex](IGIF.md#zindex)
- [mask](IGIF.md#mask)
- [eraser](IGIF.md#eraser)
- [filter](IGIF.md#filter)
- [x](IGIF.md#x)
- [y](IGIF.md#y)
- [width](IGIF.md#width)
- [height](IGIF.md#height)
- [scaleX](IGIF.md#scalex)
- [scaleY](IGIF.md#scaley)
- [rotation](IGIF.md#rotation)
- [skewX](IGIF.md#skewx)
- [skewY](IGIF.md#skewy)
- [scale](IGIF.md#scale)
- [offsetX](IGIF.md#offsetx)
- [offsetY](IGIF.md#offsety)
- [scrollX](IGIF.md#scrollx)
- [scrollY](IGIF.md#scrolly)
- [origin](IGIF.md#origin)
- [around](IGIF.md#around)
- [lazy](IGIF.md#lazy)
- [pixelRatio](IGIF.md#pixelratio)
- [path](IGIF.md#path)
- [windingRule](IGIF.md#windingrule)
- [closed](IGIF.md#closed)
- [flow](IGIF.md#flow)
- [padding](IGIF.md#padding)
- [gap](IGIF.md#gap)
- [flowAlign](IGIF.md#flowalign)
- [flowWrap](IGIF.md#flowwrap)
- [itemBox](IGIF.md#itembox)
- [inFlow](IGIF.md#inflow)
- [autoWidth](IGIF.md#autowidth)
- [autoHeight](IGIF.md#autoheight)
- [lockRatio](IGIF.md#lockratio)
- [autoBox](IGIF.md#autobox)
- [widthRange](IGIF.md#widthrange)
- [heightRange](IGIF.md#heightrange)
- [draggable](IGIF.md#draggable)
- [dragBounds](IGIF.md#dragbounds)
- [editable](IGIF.md#editable)
- [hittable](IGIF.md#hittable)
- [hitFill](IGIF.md#hitfill)
- [hitStroke](IGIF.md#hitstroke)
- [hitBox](IGIF.md#hitbox)
- [hitChildren](IGIF.md#hitchildren)
- [hitSelf](IGIF.md#hitself)
- [hitRadius](IGIF.md#hitradius)
- [button](IGIF.md#button)
- [cursor](IGIF.md#cursor)
- [motionPath](IGIF.md#motionpath)
- [motionPrecision](IGIF.md#motionprecision)
- [motion](IGIF.md#motion)
- [motionRotation](IGIF.md#motionrotation)
- [normalStyle](IGIF.md#normalstyle)
- [event](IGIF.md#event)
- [data](IGIF.md#data)
- [noBounds](IGIF.md#nobounds)
- [tag](IGIF.md#tag)
- [\_\_tag](IGIF.md#__tag)
- [innerName](IGIF.md#innername)
- [\_\_DataProcessor](IGIF.md#__dataprocessor)
- [\_\_LayoutProcessor](IGIF.md#__layoutprocessor)
- [leaferIsCreated](IGIF.md#leaferiscreated)
- [leaferIsReady](IGIF.md#leaferisready)
- [isApp](IGIF.md#isapp)
- [isLeafer](IGIF.md#isleafer)
- [isBranch](IGIF.md#isbranch)
- [isBranchLeaf](IGIF.md#isbranchleaf)
- [isOutside](IGIF.md#isoutside)
- [syncEventer](IGIF.md#synceventer)
- [lockNormalStyle](IGIF.md#locknormalstyle)
- [\_\_layout](IGIF.md#__layout)
- [\_\_world](IGIF.md#__world)
- [\_\_local](IGIF.md#__local)
- [\_\_nowWorld](IGIF.md#__nowworld)
- [\_\_cameraWorld](IGIF.md#__cameraworld)
- [\_\_localMatrix](IGIF.md#__localmatrix)
- [\_\_localBoxBounds](IGIF.md#__localboxbounds)
- [\_\_worldOpacity](IGIF.md#__worldopacity)
- [worldTransform](IGIF.md#worldtransform)
- [localTransform](IGIF.md#localtransform)
- [boxBounds](IGIF.md#boxbounds)
- [renderBounds](IGIF.md#renderbounds)
- [worldBoxBounds](IGIF.md#worldboxbounds)
- [worldStrokeBounds](IGIF.md#worldstrokebounds)
- [worldRenderBounds](IGIF.md#worldrenderbounds)
- [worldOpacity](IGIF.md#worldopacity)
- [\_\_level](IGIF.md#__level)
- [\_\_tempNumber](IGIF.md#__tempnumber)
- [\_\_worldFlipped](IGIF.md#__worldflipped)
- [\_\_hasAutoLayout](IGIF.md#__hasautolayout)
- [\_\_hasMotionPath](IGIF.md#__hasmotionpath)
- [\_\_hasMask](IGIF.md#__hasmask)
- [\_\_hasEraser](IGIF.md#__haseraser)
- [\_\_hitCanvas](IGIF.md#__hitcanvas)
- [\_\_flowBounds](IGIF.md#__flowbounds)
- [\_\_widthGrow](IGIF.md#__widthgrow)
- [\_\_heightGrow](IGIF.md#__heightgrow)
- [\_\_hasGrow](IGIF.md#__hasgrow)
- [\_\_onlyHitMask](IGIF.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IGIF.md#__ignorehitworld)
- [\_\_inLazyBounds](IGIF.md#__inlazybounds)
- [pathInputed](IGIF.md#pathinputed)
- [destroyed](IGIF.md#destroyed)
- [innerId](IGIF.md#innerid)
- [\_\_captureMap](IGIF.md#__capturemap)
- [\_\_bubbleMap](IGIF.md#__bubblemap)
- [cornerRadius](IGIF.md#cornerradius)
- [cornerSmoothing](IGIF.md#cornersmoothing)
- [fill](IGIF.md#fill)
- [stroke](IGIF.md#stroke)
- [strokeAlign](IGIF.md#strokealign)
- [strokeWidth](IGIF.md#strokewidth)
- [strokeWidthFixed](IGIF.md#strokewidthfixed)
- [strokeCap](IGIF.md#strokecap)
- [strokeJoin](IGIF.md#strokejoin)
- [dashPattern](IGIF.md#dashpattern)
- [dashOffset](IGIF.md#dashoffset)
- [miterLimit](IGIF.md#miterlimit)
- [startArrow](IGIF.md#startarrow)
- [endArrow](IGIF.md#endarrow)
- [shadow](IGIF.md#shadow)
- [innerShadow](IGIF.md#innershadow)
- [blur](IGIF.md#blur)
- [backgroundBlur](IGIF.md#backgroundblur)
- [grayscale](IGIF.md#grayscale)
- [\_\_](IGIF.md#__)
- [app](IGIF.md#app)
- [leafer](IGIF.md#leafer)
- [parent](IGIF.md#parent)
- [zoomLayer](IGIF.md#zoomlayer)
- [isFrame](IGIF.md#isframe)
- [isOverflow](IGIF.md#isoverflow)
- [proxyData](IGIF.md#proxydata)
- [\_\_proxyData](IGIF.md#__proxydata)
- [animation](IGIF.md#animation)
- [animationOut](IGIF.md#animationout)
- [children](IGIF.md#children)
- [\_\_animate](IGIF.md#__animate)
- [pen](IGIF.md#pen)
- [transition](IGIF.md#transition)
- [transitionOut](IGIF.md#transitionout)
- [states](IGIF.md#states)
- [state](IGIF.md#state)
- [hoverStyle](IGIF.md#hoverstyle)
- [pressStyle](IGIF.md#pressstyle)
- [focusStyle](IGIF.md#focusstyle)
- [selectedStyle](IGIF.md#selectedstyle)
- [disabledStyle](IGIF.md#disabledstyle)
- [placeholderStyle](IGIF.md#placeholderstyle)
- [editConfig](IGIF.md#editconfig)
- [editOuter](IGIF.md#editouter)
- [editInner](IGIF.md#editinner)

### Methods

- [resetCustom](IGIF.md#resetcustom)
- [waitParent](IGIF.md#waitparent)
- [waitLeafer](IGIF.md#waitleafer)
- [nextRender](IGIF.md#nextrender)
- [removeNextRender](IGIF.md#removenextrender)
- [\_\_bindLeafer](IGIF.md#__bindleafer)
- [setAttr](IGIF.md#setattr)
- [getAttr](IGIF.md#getattr)
- [getComputedAttr](IGIF.md#getcomputedattr)
- [toString](IGIF.md#tostring)
- [toSVG](IGIF.md#tosvg)
- [\_\_SVG](IGIF.md#__svg)
- [toHTML](IGIF.md#tohtml)
- [\_\_setAttr](IGIF.md#__setattr)
- [\_\_getAttr](IGIF.md#__getattr)
- [setProxyAttr](IGIF.md#setproxyattr)
- [getProxyAttr](IGIF.md#getproxyattr)
- [focus](IGIF.md#focus)
- [updateState](IGIF.md#updatestate)
- [updateLayout](IGIF.md#updatelayout)
- [forceUpdate](IGIF.md#forceupdate)
- [forceRender](IGIF.md#forcerender)
- [\_\_extraUpdate](IGIF.md#__extraupdate)
- [\_\_updateWorldMatrix](IGIF.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IGIF.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IGIF.md#__updateworldbounds)
- [\_\_updateLocalBounds](IGIF.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IGIF.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IGIF.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IGIF.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IGIF.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IGIF.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IGIF.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IGIF.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IGIF.md#__updateautolayout)
- [\_\_updateFlowLayout](IGIF.md#__updateflowlayout)
- [\_\_updateNaturalSize](IGIF.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IGIF.md#__updatestrokespread)
- [\_\_updateRenderSpread](IGIF.md#__updaterenderspread)
- [\_\_onUpdateSize](IGIF.md#__onupdatesize)
- [\_\_updateEraser](IGIF.md#__updateeraser)
- [\_\_updateMask](IGIF.md#__updatemask)
- [\_\_renderMask](IGIF.md#__rendermask)
- [\_\_renderEraser](IGIF.md#__rendereraser)
- [\_\_getNowWorld](IGIF.md#__getnowworld)
- [getTransform](IGIF.md#gettransform)
- [getBounds](IGIF.md#getbounds)
- [getLayoutBounds](IGIF.md#getlayoutbounds)
- [getLayoutPoints](IGIF.md#getlayoutpoints)
- [getWorldBounds](IGIF.md#getworldbounds)
- [worldToLocal](IGIF.md#worldtolocal)
- [localToWorld](IGIF.md#localtoworld)
- [worldToInner](IGIF.md#worldtoinner)
- [innerToWorld](IGIF.md#innertoworld)
- [getBoxPoint](IGIF.md#getboxpoint)
- [getBoxPointByInner](IGIF.md#getboxpointbyinner)
- [getInnerPoint](IGIF.md#getinnerpoint)
- [getInnerPointByBox](IGIF.md#getinnerpointbybox)
- [getInnerPointByLocal](IGIF.md#getinnerpointbylocal)
- [getLocalPoint](IGIF.md#getlocalpoint)
- [getLocalPointByInner](IGIF.md#getlocalpointbyinner)
- [getPagePoint](IGIF.md#getpagepoint)
- [getWorldPoint](IGIF.md#getworldpoint)
- [getWorldPointByBox](IGIF.md#getworldpointbybox)
- [getWorldPointByLocal](IGIF.md#getworldpointbylocal)
- [getWorldPointByPage](IGIF.md#getworldpointbypage)
- [setTransform](IGIF.md#settransform)
- [transform](IGIF.md#transform)
- [move](IGIF.md#move)
- [moveInner](IGIF.md#moveinner)
- [scaleOf](IGIF.md#scaleof)
- [rotateOf](IGIF.md#rotateof)
- [skewOf](IGIF.md#skewof)
- [transformWorld](IGIF.md#transformworld)
- [moveWorld](IGIF.md#moveworld)
- [scaleOfWorld](IGIF.md#scaleofworld)
- [rotateOfWorld](IGIF.md#rotateofworld)
- [skewOfWorld](IGIF.md#skewofworld)
- [flip](IGIF.md#flip)
- [scaleResize](IGIF.md#scaleresize)
- [\_\_scaleResize](IGIF.md#__scaleresize)
- [resizeWidth](IGIF.md#resizewidth)
- [resizeHeight](IGIF.md#resizeheight)
- [\_\_hitWorld](IGIF.md#__hitworld)
- [\_\_hit](IGIF.md#__hit)
- [\_\_hitFill](IGIF.md#__hitfill)
- [\_\_hitStroke](IGIF.md#__hitstroke)
- [\_\_hitPixel](IGIF.md#__hitpixel)
- [\_\_drawHitPath](IGIF.md#__drawhitpath)
- [\_\_updateHitCanvas](IGIF.md#__updatehitcanvas)
- [\_\_render](IGIF.md#__render)
- [\_\_drawFast](IGIF.md#__drawfast)
- [\_\_draw](IGIF.md#__draw)
- [\_\_clip](IGIF.md#__clip)
- [\_\_renderShape](IGIF.md#__rendershape)
- [\_\_updateWorldOpacity](IGIF.md#__updateworldopacity)
- [\_\_updateChange](IGIF.md#__updatechange)
- [\_\_drawPath](IGIF.md#__drawpath)
- [\_\_drawRenderPath](IGIF.md#__drawrenderpath)
- [\_\_updatePath](IGIF.md#__updatepath)
- [\_\_updateRenderPath](IGIF.md#__updaterenderpath)
- [getMotionPathData](IGIF.md#getmotionpathdata)
- [getMotionPoint](IGIF.md#getmotionpoint)
- [getMotionTotal](IGIF.md#getmotiontotal)
- [\_\_updateMotionPath](IGIF.md#__updatemotionpath)
- [\_\_runAnimation](IGIF.md#__runanimation)
- [\_\_emitLifeEvent](IGIF.md#__emitlifeevent)
- [\_\_updateSortChildren](IGIF.md#__updatesortchildren)
- [add](IGIF.md#add)
- [remove](IGIF.md#remove)
- [dropTo](IGIF.md#dropto)
- [\_\_realSetAttr](IGIF.md#__realsetattr)
- [destroyEventer](IGIF.md#destroyeventer)
- [on](IGIF.md#on)
- [off](IGIF.md#off)
- [on\_](IGIF.md#on_)
- [off\_](IGIF.md#off_)
- [once](IGIF.md#once)
- [emit](IGIF.md#emit)
- [emitEvent](IGIF.md#emitevent)
- [hasEvent](IGIF.md#hasevent)
- [destroy](IGIF.md#destroy)
- [play](IGIF.md#play)
- [pause](IGIF.md#pause)
- [stop](IGIF.md#stop)
- [reset](IGIF.md#reset)
- [set](IGIF.md#set)
- [toJSON](IGIF.md#tojson)
- [get](IGIF.md#get)
- [createProxyData](IGIF.md#createproxydata)
- [find](IGIF.md#find)
- [findTag](IGIF.md#findtag)
- [findOne](IGIF.md#findone)
- [findId](IGIF.md#findid)
- [getPath](IGIF.md#getpath)
- [getPathString](IGIF.md#getpathstring)
- [load](IGIF.md#load)
- [\_\_drawPathByData](IGIF.md#__drawpathbydata)
- [\_\_drawPathByBox](IGIF.md#__drawpathbybox)
- [\_\_drawAfterFill](IGIF.md#__drawafterfill)
- [\_\_drawContent](IGIF.md#__drawcontent)
- [animate](IGIF.md#animate)
- [killAnimate](IGIF.md#killanimate)
- [export](IGIF.md#export)
- [syncExport](IGIF.md#syncexport)
- [clone](IGIF.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IRect](IRect.md).[id](IRect.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRect](IRect.md).[name](IRect.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRect](IRect.md).[className](IRect.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRect](IRect.md).[blendMode](IRect.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRect](IRect.md).[opacity](IRect.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRect](IRect.md).[visible](IRect.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRect](IRect.md).[selected](IRect.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRect](IRect.md).[disabled](IRect.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRect](IRect.md).[locked](IRect.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRect](IRect.md).[zIndex](IRect.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRect](IRect.md).[mask](IRect.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRect](IRect.md).[eraser](IRect.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IRect](IRect.md).[filter](IRect.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRect](IRect.md).[x](IRect.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRect](IRect.md).[y](IRect.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRect](IRect.md).[width](IRect.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRect](IRect.md).[height](IRect.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRect](IRect.md).[scaleX](IRect.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRect](IRect.md).[scaleY](IRect.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRect](IRect.md).[rotation](IRect.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRect](IRect.md).[skewX](IRect.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRect](IRect.md).[skewY](IRect.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRect](IRect.md).[scale](IRect.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRect](IRect.md).[offsetX](IRect.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRect](IRect.md).[offsetY](IRect.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRect](IRect.md).[scrollX](IRect.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRect](IRect.md).[scrollY](IRect.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[origin](IRect.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[around](IRect.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRect](IRect.md).[lazy](IRect.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRect](IRect.md).[pixelRatio](IRect.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IRect](IRect.md).[path](IRect.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRect](IRect.md).[windingRule](IRect.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRect](IRect.md).[closed](IRect.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRect](IRect.md).[flow](IRect.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[padding](IRect.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRect](IRect.md).[gap](IRect.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRect](IRect.md).[flowAlign](IRect.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRect](IRect.md).[flowWrap](IRect.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRect](IRect.md).[itemBox](IRect.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRect](IRect.md).[inFlow](IRect.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoWidth](IRect.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoHeight](IRect.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockRatio](IRect.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRect](IRect.md).[autoBox](IRect.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[widthRange](IRect.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[heightRange](IRect.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRect](IRect.md).[draggable](IRect.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[dragBounds](IRect.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRect](IRect.md).[editable](IRect.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRect](IRect.md).[hittable](IRect.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitFill](IRect.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitStroke](IRect.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitBox](IRect.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitChildren](IRect.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitSelf](IRect.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRect](IRect.md).[hitRadius](IRect.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRect](IRect.md).[button](IRect.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRect](IRect.md).[cursor](IRect.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[motionPath](IRect.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRect](IRect.md).[motionPrecision](IRect.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRect](IRect.md).[motion](IRect.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRect](IRect.md).[motionRotation](IRect.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[normalStyle](IRect.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IRect](IRect.md).[event](IRect.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[data](IRect.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L305)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IRect](IRect.md).[noBounds](IRect.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L314)

___

### tag

• **tag**: `string`

#### Inherited from

[IRect](IRect.md).[tag](IRect.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IRect](IRect.md).[__tag](IRect.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L434)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IRect](IRect.md).[innerName](IRect.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__DataProcessor](IRect.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__LayoutProcessor](IRect.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L438)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsCreated](IRect.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L445)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsReady](IRect.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L446)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IRect](IRect.md).[isApp](IRect.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L448)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IRect](IRect.md).[isLeafer](IRect.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L449)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranch](IRect.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L450)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranchLeaf](IRect.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L451)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOutside](IRect.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L452)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRect](IRect.md).[syncEventer](IRect.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L459)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockNormalStyle](IRect.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IRect](IRect.md).[__layout](IRect.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__world](IRect.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L464)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__local](IRect.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__nowWorld](IRect.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__cameraWorld](IRect.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[__localMatrix](IRect.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__localBoxBounds](IRect.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[__worldOpacity](IRect.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L473)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IRect](IRect.md).[worldTransform](IRect.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L475)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[localTransform](IRect.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L476)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[boxBounds](IRect.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L478)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[renderBounds](IRect.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L479)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldBoxBounds](IRect.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L480)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldStrokeBounds](IRect.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L481)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldRenderBounds](IRect.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L482)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[worldOpacity](IRect.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IRect](IRect.md).[__level](IRect.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IRect](IRect.md).[__tempNumber](IRect.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IRect](IRect.md).[__worldFlipped](IRect.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasAutoLayout](IRect.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMotionPath](IRect.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMask](IRect.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasEraser](IRect.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IRect](IRect.md).[__hitCanvas](IRect.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__flowBounds](IRect.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__widthGrow](IRect.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__heightGrow](IRect.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasGrow](IRect.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__onlyHitMask](IRect.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IRect](IRect.md).[__ignoreHitWorld](IRect.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IRect](IRect.md).[__inLazyBounds](IRect.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L508)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IRect](IRect.md).[pathInputed](IRect.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L510)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IRect](IRect.md).[destroyed](IRect.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L512)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IRect](IRect.md).[innerId](IRect.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__captureMap](IRect.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__bubbleMap](IRect.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L41)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[cornerRadius](IRect.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRect](IRect.md).[cornerSmoothing](IRect.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IRect](IRect.md).[fill](IRect.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IRect](IRect.md).[stroke](IRect.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRect](IRect.md).[strokeAlign](IRect.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[strokeWidth](IRect.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IRect](IRect.md).[strokeWidthFixed](IRect.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRect](IRect.md).[strokeCap](IRect.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRect](IRect.md).[strokeJoin](IRect.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IRect](IRect.md).[dashPattern](IRect.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRect](IRect.md).[dashOffset](IRect.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRect](IRect.md).[miterLimit](IRect.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRect](IRect.md).[startArrow](IRect.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRect](IRect.md).[endArrow](IRect.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[shadow](IRect.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[innerShadow](IRect.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[blur](IRect.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[backgroundBlur](IRect.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IRect](IRect.md).[grayscale](IRect.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IGIFData`](IGIFData.md)

#### Overrides

[IRect](IRect.md).[__](IRect.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:75](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L75)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[app](IRect.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L367)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[leafer](IRect.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:368](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L368)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[parent](IRect.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:369](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L369)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[zoomLayer](IRect.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:370](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L370)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IRect](IRect.md).[isFrame](IRect.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:371](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L371)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOverflow](IRect.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:372](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L372)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[proxyData](IRect.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:374](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L374)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[__proxyData](IRect.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:375](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L375)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animation](IRect.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L377)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animationOut](IRect.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L378)

___

### children

• `Optional` **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IRect](IRect.md).[children](IRect.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L380)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IRect](IRect.md).[__animate](IRect.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:382](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L382)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IRect](IRect.md).[pen](IRect.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L384)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transition](IRect.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L435)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transitionOut](IRect.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:436](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L436)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRect](IRect.md).[states](IRect.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L438)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRect](IRect.md).[state](IRect.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:439](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L439)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[hoverStyle](IRect.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L441)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[pressStyle](IRect.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L442)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[focusStyle](IRect.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L443)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[selectedStyle](IRect.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L444)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[disabledStyle](IRect.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L445)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[placeholderStyle](IRect.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L446)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRect](IRect.md).[editConfig](IRect.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L448)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRect](IRect.md).[editOuter](IRect.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L449)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRect](IRect.md).[editInner](IRect.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L450)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[resetCustom](IRect.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L515)

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

[IRect](IRect.md).[waitParent](IRect.md#waitparent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L517)

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

[IRect](IRect.md).[waitLeafer](IRect.md#waitleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L518)

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

[IRect](IRect.md).[nextRender](IRect.md#nextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L519)

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

[IRect](IRect.md).[removeNextRender](IRect.md#removenextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L520)

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

[IRect](IRect.md).[__bindLeafer](IRect.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L522)

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

[IRect](IRect.md).[setAttr](IRect.md#setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L526)

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

[IRect](IRect.md).[getAttr](IRect.md#getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L527)

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

[IRect](IRect.md).[getComputedAttr](IRect.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L528)

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

[IRect](IRect.md).[toString](IRect.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L531)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toSVG](IRect.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L532)

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

[IRect](IRect.md).[__SVG](IRect.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L533)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toHTML](IRect.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L534)

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

[IRect](IRect.md).[__setAttr](IRect.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L540)

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

[IRect](IRect.md).[__getAttr](IRect.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L541)

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

[IRect](IRect.md).[setProxyAttr](IRect.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L542)

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

[IRect](IRect.md).[getProxyAttr](IRect.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L543)

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

[IRect](IRect.md).[focus](IRect.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L551)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateState](IRect.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L553)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateLayout](IRect.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L554)

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

[IRect](IRect.md).[forceUpdate](IRect.md#forceupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L555)

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

[IRect](IRect.md).[forceRender](IRect.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__extraUpdate](IRect.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L558)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldMatrix](IRect.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalMatrix](IRect.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldBounds](IRect.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBounds](IRect.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBoxBounds](IRect.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalStrokeBounds](IRect.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalRenderBounds](IRect.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateContentBounds](IRect.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L572)

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

[IRect](IRect.md).[__updateBoxBounds](IRect.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateStrokeBounds](IRect.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateRenderBounds](IRect.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateAutoLayout](IRect.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateFlowLayout](IRect.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateNaturalSize](IRect.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[__updateStrokeSpread](IRect.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[__updateRenderSpread](IRect.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__onUpdateSize](IRect.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L584)

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

[IRect](IRect.md).[__updateEraser](IRect.md#__updateeraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L587)

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

[IRect](IRect.md).[__updateMask](IRect.md#__updatemask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L588)

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

[IRect](IRect.md).[__renderMask](IRect.md#__rendermask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L589)

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

[IRect](IRect.md).[__renderEraser](IRect.md#__rendereraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L590)

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

[IRect](IRect.md).[__getNowWorld](IRect.md#__getnowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L593)

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

[IRect](IRect.md).[getTransform](IRect.md#gettransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L595)

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

[IRect](IRect.md).[getBounds](IRect.md#getbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L597)

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

[IRect](IRect.md).[getLayoutBounds](IRect.md#getlayoutbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L598)

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

[IRect](IRect.md).[getLayoutPoints](IRect.md#getlayoutpoints)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L599)

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

[IRect](IRect.md).[getWorldBounds](IRect.md#getworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L601)

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

[IRect](IRect.md).[worldToLocal](IRect.md#worldtolocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L603)

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

[IRect](IRect.md).[localToWorld](IRect.md#localtoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L604)

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

[IRect](IRect.md).[worldToInner](IRect.md#worldtoinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L605)

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

[IRect](IRect.md).[innerToWorld](IRect.md#innertoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L606)

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

[IRect](IRect.md).[getBoxPoint](IRect.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L608)

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

[IRect](IRect.md).[getBoxPointByInner](IRect.md#getboxpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L609)

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

[IRect](IRect.md).[getInnerPoint](IRect.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L610)

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

[IRect](IRect.md).[getInnerPointByBox](IRect.md#getinnerpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L611)

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

[IRect](IRect.md).[getInnerPointByLocal](IRect.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L612)

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

[IRect](IRect.md).[getLocalPoint](IRect.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L613)

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

[IRect](IRect.md).[getLocalPointByInner](IRect.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L614)

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

[IRect](IRect.md).[getPagePoint](IRect.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L615)

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

[IRect](IRect.md).[getWorldPoint](IRect.md#getworldpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L616)

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

[IRect](IRect.md).[getWorldPointByBox](IRect.md#getworldpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L617)

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

[IRect](IRect.md).[getWorldPointByLocal](IRect.md#getworldpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L618)

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

[IRect](IRect.md).[getWorldPointByPage](IRect.md#getworldpointbypage)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L619)

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

[IRect](IRect.md).[setTransform](IRect.md#settransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L622)

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

[IRect](IRect.md).[transform](IRect.md#transform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L623)

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

[IRect](IRect.md).[move](IRect.md#move)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L624)

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

[IRect](IRect.md).[moveInner](IRect.md#moveinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L626)

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

[IRect](IRect.md).[scaleOf](IRect.md#scaleof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L627)

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

[IRect](IRect.md).[rotateOf](IRect.md#rotateof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L628)

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

[IRect](IRect.md).[skewOf](IRect.md#skewof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L629)

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

[IRect](IRect.md).[transformWorld](IRect.md#transformworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L631)

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

[IRect](IRect.md).[moveWorld](IRect.md#moveworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L632)

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

[IRect](IRect.md).[scaleOfWorld](IRect.md#scaleofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L633)

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

[IRect](IRect.md).[rotateOfWorld](IRect.md#rotateofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L634)

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

[IRect](IRect.md).[skewOfWorld](IRect.md#skewofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L635)

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

[IRect](IRect.md).[flip](IRect.md#flip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L637)

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

[IRect](IRect.md).[scaleResize](IRect.md#scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L639)

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

[IRect](IRect.md).[__scaleResize](IRect.md#__scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L640)

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

[IRect](IRect.md).[resizeWidth](IRect.md#resizewidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L642)

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

[IRect](IRect.md).[resizeHeight](IRect.md#resizeheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L643)

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

[IRect](IRect.md).[__hitWorld](IRect.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L646)

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

[IRect](IRect.md).[__hit](IRect.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L647)

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

[IRect](IRect.md).[__hitFill](IRect.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L648)

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

[IRect](IRect.md).[__hitStroke](IRect.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L649)

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

[IRect](IRect.md).[__hitPixel](IRect.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L650)

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

[IRect](IRect.md).[__drawHitPath](IRect.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateHitCanvas](IRect.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L652)

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

[IRect](IRect.md).[__render](IRect.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L655)

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

[IRect](IRect.md).[__drawFast](IRect.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L656)

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

[IRect](IRect.md).[__draw](IRect.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L657)

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

[IRect](IRect.md).[__clip](IRect.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L659)

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

#### Inherited from

[IRect](IRect.md).[__renderShape](IRect.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldOpacity](IRect.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateChange](IRect.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L663)

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

[IRect](IRect.md).[__drawPath](IRect.md#__drawpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L666)

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

[IRect](IRect.md).[__drawRenderPath](IRect.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updatePath](IRect.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateRenderPath](IRect.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L669)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRect](IRect.md).[getMotionPathData](IRect.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L672)

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

[IRect](IRect.md).[getMotionPoint](IRect.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L673)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[getMotionTotal](IRect.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateMotionPath](IRect.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L676)

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

[IRect](IRect.md).[__runAnimation](IRect.md#__runanimation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L678)

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

[IRect](IRect.md).[__emitLifeEvent](IRect.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L680)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateSortChildren](IRect.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L685)

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

[IRect](IRect.md).[add](IRect.md#add)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:686](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L686)

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

[IRect](IRect.md).[remove](IRect.md#remove)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L687)

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

[IRect](IRect.md).[dropTo](IRect.md#dropto)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L688)

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

[IRect](IRect.md).[__realSetAttr](IRect.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroyEventer](IRect.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[IRect](IRect.md).[on](IRect.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L45)

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

[IRect](IRect.md).[off](IRect.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L46)

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

[IRect](IRect.md).[on_](IRect.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L47)

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

[IRect](IRect.md).[off_](IRect.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L48)

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

[IRect](IRect.md).[once](IRect.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L49)

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

[IRect](IRect.md).[emit](IRect.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L50)

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

[IRect](IRect.md).[emitEvent](IRect.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L51)

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

[IRect](IRect.md).[hasEvent](IRect.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroy](IRect.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L54)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.play

#### Defined in

[ui/packages/interface/src/IUI.ts:60](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L60)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.pause

#### Defined in

[ui/packages/interface/src/IUI.ts:61](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L61)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.stop

#### Defined in

[ui/packages/interface/src/IUI.ts:62](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L62)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[reset](IRect.md#reset)

#### Defined in

[ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L386)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](IUIInputData.md) |
| `transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[set](IRect.md#set)

#### Defined in

[ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L388)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](IUIJSONData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IUIJSONData`](IUIJSONData.md)

#### Inherited from

[IRect](IRect.md).[toJSON](IRect.md#tojson)

#### Defined in

[ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L389)

___

### get

▸ **get**(`name?`): [`IValue`](../modules.md#ivalue) \| [`IUIInputData`](IUIInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `string`[] \| [`IUIInputData`](IUIInputData.md) |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[get](IRect.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L391)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[createProxyData](IRect.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L392)

___

### find

▸ **find**(`condition`, `options?`): [`IUI`](IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?` | `any` |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[IRect](IRect.md).[find](IRect.md#find)

#### Defined in

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L394)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[IRect](IRect.md).[findTag](IRect.md#findtag)

#### Defined in

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L395)

___

### findOne

▸ **findOne**(`condition`, `options?`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?` | `any` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IRect](IRect.md).[findOne](IRect.md#findone)

#### Defined in

[ui/packages/interface/src/IUI.ts:396](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L396)

___

### findId

▸ **findId**(`id`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IRect](IRect.md).[findId](IRect.md#findid)

#### Defined in

[ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L397)

___

### getPath

▸ **getPath**(`curve?`, `pathForRender?`): [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

[`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IRect](IRect.md).[getPath](IRect.md#getpath)

#### Defined in

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L399)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[getPathString](IRect.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L400)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[load](IRect.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L402)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](IPathDrawer.md) |
| `data` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__drawPathByData](IRect.md#__drawpathbydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L404)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](IPathDrawer.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__drawPathByBox](IRect.md#__drawpathbybox)

#### Defined in

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L405)

___

### \_\_drawAfterFill

▸ `Optional` **__drawAfterFill**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__drawAfterFill](IRect.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L406)

___

### \_\_drawContent

▸ `Optional` **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__drawContent](IRect.md#__drawcontent)

#### Defined in

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L407)

___

### animate

▸ **animate**(`keyframe?`, `options?`, `type?`, `isTemp?`): [`IAnimate`](IAnimate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `options?` | [`ITransition`](../modules.md#itransition) |
| `type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `isTemp?` | `boolean` |

#### Returns

[`IAnimate`](IAnimate.md)

#### Inherited from

[IRect](IRect.md).[animate](IRect.md#animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L409)

___

### killAnimate

▸ **killAnimate**(`type?`, `nextStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `nextStyle?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[killAnimate](IRect.md#killanimate)

#### Defined in

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L410)

___

### export

▸ **export**(`filename`, `options?`): `Promise`<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`<[`IExportResult`](IExportResult.md)\>

#### Inherited from

[IRect](IRect.md).[export](IRect.md#export)

#### Defined in

[ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L412)

___

### syncExport

▸ **syncExport**(`filename`, `options?`): [`IExportResult`](IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

[`IExportResult`](IExportResult.md)

#### Inherited from

[IRect](IRect.md).[syncExport](IRect.md#syncexport)

#### Defined in

[ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L413)

___

### clone

▸ **clone**(`data?`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IRect](IRect.md).[clone](IRect.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L414)
