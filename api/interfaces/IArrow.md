# Interface: IArrow

## Hierarchy

- [`ILine`](ILine.md)

  ↳ **`IArrow`**

## Implemented by

- [`Arrow`](../classes/Arrow.md)

## Table of contents

### Properties

- [id](IArrow.md#id)
- [name](IArrow.md#name)
- [className](IArrow.md#classname)
- [blendMode](IArrow.md#blendmode)
- [opacity](IArrow.md#opacity)
- [visible](IArrow.md#visible)
- [selected](IArrow.md#selected)
- [disabled](IArrow.md#disabled)
- [locked](IArrow.md#locked)
- [zIndex](IArrow.md#zindex)
- [dim](IArrow.md#dim)
- [dimskip](IArrow.md#dimskip)
- [mask](IArrow.md#mask)
- [eraser](IArrow.md#eraser)
- [filter](IArrow.md#filter)
- [x](IArrow.md#x)
- [y](IArrow.md#y)
- [width](IArrow.md#width)
- [height](IArrow.md#height)
- [scaleX](IArrow.md#scalex)
- [scaleY](IArrow.md#scaley)
- [rotation](IArrow.md#rotation)
- [skewX](IArrow.md#skewx)
- [skewY](IArrow.md#skewy)
- [scale](IArrow.md#scale)
- [offsetX](IArrow.md#offsetx)
- [offsetY](IArrow.md#offsety)
- [scrollX](IArrow.md#scrollx)
- [scrollY](IArrow.md#scrolly)
- [origin](IArrow.md#origin)
- [around](IArrow.md#around)
- [lazy](IArrow.md#lazy)
- [pixelRatio](IArrow.md#pixelratio)
- [path](IArrow.md#path)
- [windingRule](IArrow.md#windingrule)
- [closed](IArrow.md#closed)
- [flow](IArrow.md#flow)
- [padding](IArrow.md#padding)
- [gap](IArrow.md#gap)
- [flowAlign](IArrow.md#flowalign)
- [flowWrap](IArrow.md#flowwrap)
- [itemBox](IArrow.md#itembox)
- [inFlow](IArrow.md#inflow)
- [autoWidth](IArrow.md#autowidth)
- [autoHeight](IArrow.md#autoheight)
- [lockRatio](IArrow.md#lockratio)
- [autoBox](IArrow.md#autobox)
- [widthRange](IArrow.md#widthrange)
- [heightRange](IArrow.md#heightrange)
- [draggable](IArrow.md#draggable)
- [dragBounds](IArrow.md#dragbounds)
- [editable](IArrow.md#editable)
- [hittable](IArrow.md#hittable)
- [hitFill](IArrow.md#hitfill)
- [hitStroke](IArrow.md#hitstroke)
- [hitBox](IArrow.md#hitbox)
- [hitChildren](IArrow.md#hitchildren)
- [hitSelf](IArrow.md#hitself)
- [hitRadius](IArrow.md#hitradius)
- [button](IArrow.md#button)
- [cursor](IArrow.md#cursor)
- [motionPath](IArrow.md#motionpath)
- [motionPrecision](IArrow.md#motionprecision)
- [motion](IArrow.md#motion)
- [motionRotation](IArrow.md#motionrotation)
- [normalStyle](IArrow.md#normalstyle)
- [event](IArrow.md#event)
- [data](IArrow.md#data)
- [tag](IArrow.md#tag)
- [\_\_tag](IArrow.md#__tag)
- [innerName](IArrow.md#innername)
- [\_\_DataProcessor](IArrow.md#__dataprocessor)
- [\_\_LayoutProcessor](IArrow.md#__layoutprocessor)
- [leaferIsCreated](IArrow.md#leaferiscreated)
- [leaferIsReady](IArrow.md#leaferisready)
- [isApp](IArrow.md#isapp)
- [isLeafer](IArrow.md#isleafer)
- [isBranch](IArrow.md#isbranch)
- [isBranchLeaf](IArrow.md#isbranchleaf)
- [isOutside](IArrow.md#isoutside)
- [syncEventer](IArrow.md#synceventer)
- [lockNormalStyle](IArrow.md#locknormalstyle)
- [\_\_layout](IArrow.md#__layout)
- [\_\_world](IArrow.md#__world)
- [\_\_local](IArrow.md#__local)
- [\_\_nowWorld](IArrow.md#__nowworld)
- [\_\_cameraWorld](IArrow.md#__cameraworld)
- [\_\_localMatrix](IArrow.md#__localmatrix)
- [\_\_localBoxBounds](IArrow.md#__localboxbounds)
- [\_\_worldOpacity](IArrow.md#__worldopacity)
- [worldTransform](IArrow.md#worldtransform)
- [localTransform](IArrow.md#localtransform)
- [boxBounds](IArrow.md#boxbounds)
- [renderBounds](IArrow.md#renderbounds)
- [worldBoxBounds](IArrow.md#worldboxbounds)
- [worldStrokeBounds](IArrow.md#worldstrokebounds)
- [worldRenderBounds](IArrow.md#worldrenderbounds)
- [worldOpacity](IArrow.md#worldopacity)
- [\_\_level](IArrow.md#__level)
- [\_\_tempNumber](IArrow.md#__tempnumber)
- [\_\_worldFlipped](IArrow.md#__worldflipped)
- [\_\_hasAutoLayout](IArrow.md#__hasautolayout)
- [\_\_hasMotionPath](IArrow.md#__hasmotionpath)
- [\_\_hasMask](IArrow.md#__hasmask)
- [\_\_hasEraser](IArrow.md#__haseraser)
- [\_\_hitCanvas](IArrow.md#__hitcanvas)
- [\_\_flowBounds](IArrow.md#__flowbounds)
- [\_\_widthGrow](IArrow.md#__widthgrow)
- [\_\_heightGrow](IArrow.md#__heightgrow)
- [\_\_hasGrow](IArrow.md#__hasgrow)
- [\_\_onlyHitMask](IArrow.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IArrow.md#__ignorehitworld)
- [\_\_inLazyBounds](IArrow.md#__inlazybounds)
- [pathInputed](IArrow.md#pathinputed)
- [destroyed](IArrow.md#destroyed)
- [innerId](IArrow.md#innerid)
- [\_\_captureMap](IArrow.md#__capturemap)
- [\_\_bubbleMap](IArrow.md#__bubblemap)
- [\_\_hasLocalEvent](IArrow.md#__haslocalevent)
- [\_\_hasWorldEvent](IArrow.md#__hasworldevent)
- [cornerRadius](IArrow.md#cornerradius)
- [cornerSmoothing](IArrow.md#cornersmoothing)
- [fill](IArrow.md#fill)
- [stroke](IArrow.md#stroke)
- [strokeAlign](IArrow.md#strokealign)
- [strokeWidth](IArrow.md#strokewidth)
- [strokeWidthFixed](IArrow.md#strokewidthfixed)
- [strokeCap](IArrow.md#strokecap)
- [strokeJoin](IArrow.md#strokejoin)
- [dashPattern](IArrow.md#dashpattern)
- [dashOffset](IArrow.md#dashoffset)
- [miterLimit](IArrow.md#miterlimit)
- [startArrow](IArrow.md#startarrow)
- [endArrow](IArrow.md#endarrow)
- [shadow](IArrow.md#shadow)
- [innerShadow](IArrow.md#innershadow)
- [blur](IArrow.md#blur)
- [backgroundBlur](IArrow.md#backgroundblur)
- [grayscale](IArrow.md#grayscale)
- [toPoint](IArrow.md#topoint)
- [points](IArrow.md#points)
- [curve](IArrow.md#curve)
- [\_\_](IArrow.md#__)
- [app](IArrow.md#app)
- [leafer](IArrow.md#leafer)
- [parent](IArrow.md#parent)
- [zoomLayer](IArrow.md#zoomlayer)
- [isFrame](IArrow.md#isframe)
- [isOverflow](IArrow.md#isoverflow)
- [useFastShadow](IArrow.md#usefastshadow)
- [proxyData](IArrow.md#proxydata)
- [\_\_proxyData](IArrow.md#__proxydata)
- [animation](IArrow.md#animation)
- [animationOut](IArrow.md#animationout)
- [children](IArrow.md#children)
- [\_\_box](IArrow.md#__box)
- [\_\_animate](IArrow.md#__animate)
- [pen](IArrow.md#pen)
- [transition](IArrow.md#transition)
- [transitionOut](IArrow.md#transitionout)
- [states](IArrow.md#states)
- [state](IArrow.md#state)
- [hoverStyle](IArrow.md#hoverstyle)
- [pressStyle](IArrow.md#pressstyle)
- [focusStyle](IArrow.md#focusstyle)
- [selectedStyle](IArrow.md#selectedstyle)
- [disabledStyle](IArrow.md#disabledstyle)
- [placeholderStyle](IArrow.md#placeholderstyle)
- [placeholderColor](IArrow.md#placeholdercolor)
- [placeholderDelay](IArrow.md#placeholderdelay)
- [editConfig](IArrow.md#editconfig)
- [editOuter](IArrow.md#editouter)
- [editInner](IArrow.md#editinner)

### Methods

- [resetCustom](IArrow.md#resetcustom)
- [waitParent](IArrow.md#waitparent)
- [waitLeafer](IArrow.md#waitleafer)
- [nextRender](IArrow.md#nextrender)
- [removeNextRender](IArrow.md#removenextrender)
- [\_\_bindLeafer](IArrow.md#__bindleafer)
- [setAttr](IArrow.md#setattr)
- [getAttr](IArrow.md#getattr)
- [getComputedAttr](IArrow.md#getcomputedattr)
- [toString](IArrow.md#tostring)
- [toSVG](IArrow.md#tosvg)
- [\_\_SVG](IArrow.md#__svg)
- [toHTML](IArrow.md#tohtml)
- [\_\_setAttr](IArrow.md#__setattr)
- [\_\_getAttr](IArrow.md#__getattr)
- [setProxyAttr](IArrow.md#setproxyattr)
- [getProxyAttr](IArrow.md#getproxyattr)
- [focus](IArrow.md#focus)
- [updateState](IArrow.md#updatestate)
- [updateLayout](IArrow.md#updatelayout)
- [forceUpdate](IArrow.md#forceupdate)
- [forceRender](IArrow.md#forcerender)
- [\_\_extraUpdate](IArrow.md#__extraupdate)
- [\_\_updateWorldMatrix](IArrow.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IArrow.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IArrow.md#__updateworldbounds)
- [\_\_updateLocalBounds](IArrow.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IArrow.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IArrow.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IArrow.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IArrow.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IArrow.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IArrow.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IArrow.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IArrow.md#__updateautolayout)
- [\_\_updateFlowLayout](IArrow.md#__updateflowlayout)
- [\_\_updateNaturalSize](IArrow.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IArrow.md#__updatestrokespread)
- [\_\_updateRenderSpread](IArrow.md#__updaterenderspread)
- [\_\_onUpdateSize](IArrow.md#__onupdatesize)
- [\_\_updateEraser](IArrow.md#__updateeraser)
- [\_\_updateMask](IArrow.md#__updatemask)
- [\_\_renderMask](IArrow.md#__rendermask)
- [\_\_renderEraser](IArrow.md#__rendereraser)
- [\_\_getNowWorld](IArrow.md#__getnowworld)
- [getTransform](IArrow.md#gettransform)
- [getBounds](IArrow.md#getbounds)
- [getLayoutBounds](IArrow.md#getlayoutbounds)
- [getLayoutPoints](IArrow.md#getlayoutpoints)
- [getWorldBounds](IArrow.md#getworldbounds)
- [worldToLocal](IArrow.md#worldtolocal)
- [localToWorld](IArrow.md#localtoworld)
- [worldToInner](IArrow.md#worldtoinner)
- [innerToWorld](IArrow.md#innertoworld)
- [getBoxPoint](IArrow.md#getboxpoint)
- [getBoxPointByInner](IArrow.md#getboxpointbyinner)
- [getInnerPoint](IArrow.md#getinnerpoint)
- [getInnerPointByBox](IArrow.md#getinnerpointbybox)
- [getInnerPointByLocal](IArrow.md#getinnerpointbylocal)
- [getLocalPoint](IArrow.md#getlocalpoint)
- [getLocalPointByInner](IArrow.md#getlocalpointbyinner)
- [getPagePoint](IArrow.md#getpagepoint)
- [getWorldPoint](IArrow.md#getworldpoint)
- [getWorldPointByBox](IArrow.md#getworldpointbybox)
- [getWorldPointByLocal](IArrow.md#getworldpointbylocal)
- [getWorldPointByPage](IArrow.md#getworldpointbypage)
- [setTransform](IArrow.md#settransform)
- [transform](IArrow.md#transform)
- [move](IArrow.md#move)
- [moveInner](IArrow.md#moveinner)
- [scaleOf](IArrow.md#scaleof)
- [rotateOf](IArrow.md#rotateof)
- [skewOf](IArrow.md#skewof)
- [transformWorld](IArrow.md#transformworld)
- [moveWorld](IArrow.md#moveworld)
- [scaleOfWorld](IArrow.md#scaleofworld)
- [rotateOfWorld](IArrow.md#rotateofworld)
- [skewOfWorld](IArrow.md#skewofworld)
- [flip](IArrow.md#flip)
- [scaleResize](IArrow.md#scaleresize)
- [\_\_scaleResize](IArrow.md#__scaleresize)
- [resizeWidth](IArrow.md#resizewidth)
- [resizeHeight](IArrow.md#resizeheight)
- [\_\_hitWorld](IArrow.md#__hitworld)
- [\_\_hit](IArrow.md#__hit)
- [\_\_hitFill](IArrow.md#__hitfill)
- [\_\_hitStroke](IArrow.md#__hitstroke)
- [\_\_hitPixel](IArrow.md#__hitpixel)
- [\_\_drawHitPath](IArrow.md#__drawhitpath)
- [\_\_updateHitCanvas](IArrow.md#__updatehitcanvas)
- [\_\_render](IArrow.md#__render)
- [\_\_drawFast](IArrow.md#__drawfast)
- [\_\_draw](IArrow.md#__draw)
- [\_\_clip](IArrow.md#__clip)
- [\_\_renderShape](IArrow.md#__rendershape)
- [\_\_drawShape](IArrow.md#__drawshape)
- [\_\_updateWorldOpacity](IArrow.md#__updateworldopacity)
- [\_\_updateChange](IArrow.md#__updatechange)
- [\_\_drawPath](IArrow.md#__drawpath)
- [\_\_drawRenderPath](IArrow.md#__drawrenderpath)
- [\_\_updatePath](IArrow.md#__updatepath)
- [\_\_updateRenderPath](IArrow.md#__updaterenderpath)
- [getMotionPathData](IArrow.md#getmotionpathdata)
- [getMotionPoint](IArrow.md#getmotionpoint)
- [getMotionTotal](IArrow.md#getmotiontotal)
- [\_\_updateMotionPath](IArrow.md#__updatemotionpath)
- [\_\_runAnimation](IArrow.md#__runanimation)
- [\_\_emitLifeEvent](IArrow.md#__emitlifeevent)
- [\_\_updateSortChildren](IArrow.md#__updatesortchildren)
- [add](IArrow.md#add)
- [remove](IArrow.md#remove)
- [dropTo](IArrow.md#dropto)
- [\_\_realSetAttr](IArrow.md#__realsetattr)
- [destroyEventer](IArrow.md#destroyeventer)
- [on](IArrow.md#on)
- [off](IArrow.md#off)
- [on\_](IArrow.md#on_)
- [off\_](IArrow.md#off_)
- [once](IArrow.md#once)
- [emit](IArrow.md#emit)
- [emitEvent](IArrow.md#emitevent)
- [hasEvent](IArrow.md#hasevent)
- [destroy](IArrow.md#destroy)
- [reset](IArrow.md#reset)
- [set](IArrow.md#set)
- [toJSON](IArrow.md#tojson)
- [get](IArrow.md#get)
- [createProxyData](IArrow.md#createproxydata)
- [find](IArrow.md#find)
- [findTag](IArrow.md#findtag)
- [findOne](IArrow.md#findone)
- [findId](IArrow.md#findid)
- [getPath](IArrow.md#getpath)
- [getPathString](IArrow.md#getpathstring)
- [load](IArrow.md#load)
- [\_\_drawPathByData](IArrow.md#__drawpathbydata)
- [\_\_drawPathByBox](IArrow.md#__drawpathbybox)
- [\_\_drawAfterFill](IArrow.md#__drawafterfill)
- [\_\_drawContent](IArrow.md#__drawcontent)
- [drawImagePlaceholder](IArrow.md#drawimageplaceholder)
- [animate](IArrow.md#animate)
- [killAnimate](IArrow.md#killanimate)
- [export](IArrow.md#export)
- [syncExport](IArrow.md#syncexport)
- [clone](IArrow.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[ILine](ILine.md).[id](ILine.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILine](ILine.md).[name](ILine.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILine](ILine.md).[className](ILine.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILine](ILine.md).[blendMode](ILine.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILine](ILine.md).[opacity](ILine.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILine](ILine.md).[visible](ILine.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILine](ILine.md).[selected](ILine.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILine](ILine.md).[disabled](ILine.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILine](ILine.md).[locked](ILine.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILine](ILine.md).[zIndex](ILine.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[ILine](ILine.md).[dim](ILine.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[ILine](ILine.md).[dimskip](ILine.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILine](ILine.md).[mask](ILine.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILine](ILine.md).[eraser](ILine.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[ILine](ILine.md).[filter](ILine.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILine](ILine.md).[x](ILine.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILine](ILine.md).[y](ILine.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILine](ILine.md).[width](ILine.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILine](ILine.md).[height](ILine.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILine](ILine.md).[scaleX](ILine.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILine](ILine.md).[scaleY](ILine.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILine](ILine.md).[rotation](ILine.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILine](ILine.md).[skewX](ILine.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILine](ILine.md).[skewY](ILine.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILine](ILine.md).[scale](ILine.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILine](ILine.md).[offsetX](ILine.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILine](ILine.md).[offsetY](ILine.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILine](ILine.md).[scrollX](ILine.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILine](ILine.md).[scrollY](ILine.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILine](ILine.md).[origin](ILine.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILine](ILine.md).[around](ILine.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILine](ILine.md).[lazy](ILine.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILine](ILine.md).[pixelRatio](ILine.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILine](ILine.md).[path](ILine.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILine](ILine.md).[windingRule](ILine.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILine](ILine.md).[closed](ILine.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILine](ILine.md).[flow](ILine.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILine](ILine.md).[padding](ILine.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILine](ILine.md).[gap](ILine.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILine](ILine.md).[flowAlign](ILine.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILine](ILine.md).[flowWrap](ILine.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILine](ILine.md).[itemBox](ILine.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILine](ILine.md).[inFlow](ILine.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILine](ILine.md).[autoWidth](ILine.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILine](ILine.md).[autoHeight](ILine.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILine](ILine.md).[lockRatio](ILine.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILine](ILine.md).[autoBox](ILine.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILine](ILine.md).[widthRange](ILine.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILine](ILine.md).[heightRange](ILine.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILine](ILine.md).[draggable](ILine.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[dragBounds](ILine.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILine](ILine.md).[editable](ILine.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILine](ILine.md).[hittable](ILine.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILine](ILine.md).[hitFill](ILine.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILine](ILine.md).[hitStroke](ILine.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILine](ILine.md).[hitBox](ILine.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILine](ILine.md).[hitChildren](ILine.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILine](ILine.md).[hitSelf](ILine.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILine](ILine.md).[hitRadius](ILine.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILine](ILine.md).[button](ILine.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILine](ILine.md).[cursor](ILine.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILine](ILine.md).[motionPath](ILine.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILine](ILine.md).[motionPrecision](ILine.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILine](ILine.md).[motion](ILine.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILine](ILine.md).[motionRotation](ILine.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILine](ILine.md).[normalStyle](ILine.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[ILine](ILine.md).[event](ILine.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILine](ILine.md).[data](ILine.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[ILine](ILine.md).[tag](ILine.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L439)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[ILine](ILine.md).[__tag](ILine.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L440)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[ILine](ILine.md).[innerName](ILine.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L441)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILine](ILine.md).[__DataProcessor](ILine.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L443)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILine](ILine.md).[__LayoutProcessor](ILine.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L444)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[ILine](ILine.md).[leaferIsCreated](ILine.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L451)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[ILine](ILine.md).[leaferIsReady](ILine.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L452)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[ILine](ILine.md).[isApp](ILine.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L454)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[ILine](ILine.md).[isLeafer](ILine.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[ILine](ILine.md).[isBranch](ILine.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L456)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[ILine](ILine.md).[isBranchLeaf](ILine.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L457)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[ILine](ILine.md).[isOutside](ILine.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:458](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L458)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILine](ILine.md).[syncEventer](ILine.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L465)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[ILine](ILine.md).[lockNormalStyle](ILine.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:466](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L466)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[ILine](ILine.md).[__layout](ILine.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILine](ILine.md).[__world](ILine.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[ILine](ILine.md).[__local](ILine.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILine](ILine.md).[__nowWorld](ILine.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILine](ILine.md).[__cameraWorld](ILine.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L474)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILine](ILine.md).[__localMatrix](ILine.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[__localBoxBounds](ILine.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:477](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L477)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[ILine](ILine.md).[__worldOpacity](ILine.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L479)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILine](ILine.md).[worldTransform](ILine.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L481)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILine](ILine.md).[localTransform](ILine.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L482)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[boxBounds](ILine.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L484)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[renderBounds](ILine.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L485)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[worldBoxBounds](ILine.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L486)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[worldStrokeBounds](ILine.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L487)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[worldRenderBounds](ILine.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:488](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L488)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[ILine](ILine.md).[worldOpacity](ILine.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[ILine](ILine.md).[__level](ILine.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[ILine](ILine.md).[__tempNumber](ILine.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L493)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[ILine](ILine.md).[__worldFlipped](ILine.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasAutoLayout](ILine.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasMotionPath](ILine.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasMask](ILine.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasEraser](ILine.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[ILine](ILine.md).[__hitCanvas](ILine.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L505)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILine](ILine.md).[__flowBounds](ILine.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[ILine](ILine.md).[__widthGrow](ILine.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[ILine](ILine.md).[__heightGrow](ILine.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasGrow](ILine.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L510)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[ILine](ILine.md).[__onlyHitMask](ILine.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[ILine](ILine.md).[__ignoreHitWorld](ILine.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[ILine](ILine.md).[__inLazyBounds](ILine.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L514)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[ILine](ILine.md).[pathInputed](ILine.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L516)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[ILine](ILine.md).[destroyed](ILine.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L518)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILine](ILine.md).[innerId](ILine.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILine](ILine.md).[__captureMap](ILine.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILine](ILine.md).[__bubbleMap](ILine.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasLocalEvent](ILine.md#__haslocalevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[ILine](ILine.md).[__hasWorldEvent](ILine.md#__hasworldevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILine](ILine.md).[cornerRadius](ILine.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[ILine](ILine.md).[cornerSmoothing](ILine.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[ILine](ILine.md).[fill](ILine.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[ILine](ILine.md).[stroke](ILine.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[ILine](ILine.md).[strokeAlign](ILine.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILine](ILine.md).[strokeWidth](ILine.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[ILine](ILine.md).[strokeWidthFixed](ILine.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[ILine](ILine.md).[strokeCap](ILine.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[ILine](ILine.md).[strokeJoin](ILine.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[ILine](ILine.md).[dashPattern](ILine.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[ILine](ILine.md).[dashOffset](ILine.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[ILine](ILine.md).[miterLimit](ILine.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[ILine](ILine.md).[startArrow](ILine.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[ILine](ILine.md).[endArrow](ILine.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILine](ILine.md).[shadow](ILine.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[ILine](ILine.md).[innerShadow](ILine.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILine](ILine.md).[blur](ILine.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[ILine](ILine.md).[backgroundBlur](ILine.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[ILine](ILine.md).[grayscale](ILine.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/ICommonAttr.ts#L157)

___

### toPoint

• `Optional` **toPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILine](ILine.md).[toPoint](ILine.md#topoint)

#### Defined in

[ui/packages/interface/src/IUI.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L23)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](IPointData.md)[]

#### Inherited from

[ILine](ILine.md).[points](ILine.md#points)

#### Defined in

[ui/packages/interface/src/IUI.ts:24](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L24)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Inherited from

[ILine](ILine.md).[curve](ILine.md#curve)

#### Defined in

[ui/packages/interface/src/IUI.ts:25](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L25)

___

### \_\_

• **\_\_**: [`IArrowData`](IArrowData.md)

#### Overrides

[ILine](ILine.md).[__](ILine.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:33](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L33)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILine](ILine.md).[app](ILine.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L376)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[ILine](ILine.md).[leafer](ILine.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L377)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[ILine](ILine.md).[parent](ILine.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L378)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[ILine](ILine.md).[zoomLayer](ILine.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L379)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[ILine](ILine.md).[isFrame](ILine.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L380)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[ILine](ILine.md).[isOverflow](ILine.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L381)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[ILine](ILine.md).[useFastShadow](ILine.md#usefastshadow)

#### Defined in

[ui/packages/interface/src/IUI.ts:382](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L382)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILine](ILine.md).[proxyData](ILine.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L384)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILine](ILine.md).[__proxyData](ILine.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L385)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILine](ILine.md).[animation](ILine.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L387)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[ILine](ILine.md).[animationOut](ILine.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L388)

___

### children

• `Optional` **children**: [`IUI`](IUI.md)[]

#### Inherited from

[ILine](ILine.md).[children](ILine.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:390](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L390)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[ILine](ILine.md).[__box](ILine.md#__box)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L392)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[ILine](ILine.md).[__animate](ILine.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:393](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L393)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[ILine](ILine.md).[pen](ILine.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L395)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILine](ILine.md).[transition](ILine.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L448)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[ILine](ILine.md).[transitionOut](ILine.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L449)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[ILine](ILine.md).[states](ILine.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L451)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[ILine](ILine.md).[state](ILine.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L452)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[hoverStyle](ILine.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L454)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[pressStyle](ILine.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L455)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[focusStyle](ILine.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L456)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[selectedStyle](ILine.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L457)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[disabledStyle](ILine.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L458)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[ILine](ILine.md).[placeholderStyle](ILine.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L459)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[ILine](ILine.md).[placeholderColor](ILine.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L460)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[ILine](ILine.md).[placeholderDelay](ILine.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L461)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[ILine](ILine.md).[editConfig](ILine.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L463)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[ILine](ILine.md).[editOuter](ILine.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L464)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[ILine](ILine.md).[editInner](ILine.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L465)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[resetCustom](ILine.md#resetcustom)

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

[ILine](ILine.md).[waitParent](ILine.md#waitparent)

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

[ILine](ILine.md).[waitLeafer](ILine.md#waitleafer)

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

[ILine](ILine.md).[nextRender](ILine.md#nextrender)

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

[ILine](ILine.md).[removeNextRender](ILine.md#removenextrender)

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

[ILine](ILine.md).[__bindLeafer](ILine.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L528)

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

[ILine](ILine.md).[setAttr](ILine.md#setattr)

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

[ILine](ILine.md).[getAttr](ILine.md#getattr)

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

[ILine](ILine.md).[getComputedAttr](ILine.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L534)

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

[ILine](ILine.md).[toString](ILine.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L537)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[ILine](ILine.md).[toSVG](ILine.md#tosvg)

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

[ILine](ILine.md).[__SVG](ILine.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L539)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[ILine](ILine.md).[toHTML](ILine.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L540)

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

[ILine](ILine.md).[__setAttr](ILine.md#__setattr)

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

[ILine](ILine.md).[__getAttr](ILine.md#__getattr)

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

[ILine](ILine.md).[setProxyAttr](ILine.md#setproxyattr)

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

[ILine](ILine.md).[getProxyAttr](ILine.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L549)

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

[ILine](ILine.md).[focus](ILine.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:557](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L557)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[updateState](ILine.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L559)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[updateLayout](ILine.md#updatelayout)

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

[ILine](ILine.md).[forceUpdate](ILine.md#forceupdate)

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

[ILine](ILine.md).[forceRender](ILine.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__extraUpdate](ILine.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:564](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L564)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateWorldMatrix](ILine.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateLocalMatrix](ILine.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateWorldBounds](ILine.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateLocalBounds](ILine.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L572)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateLocalBoxBounds](ILine.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateLocalStrokeBounds](ILine.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateLocalRenderBounds](ILine.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L576)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateContentBounds](ILine.md#__updatecontentbounds)

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

[ILine](ILine.md).[__updateBoxBounds](ILine.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateStrokeBounds](ILine.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateRenderBounds](ILine.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateAutoLayout](ILine.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateFlowLayout](ILine.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateNaturalSize](ILine.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:585](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L585)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILine](ILine.md).[__updateStrokeSpread](ILine.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILine](ILine.md).[__updateRenderSpread](ILine.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L588)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__onUpdateSize](ILine.md#__onupdatesize)

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

[ILine](ILine.md).[__updateEraser](ILine.md#__updateeraser)

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

[ILine](ILine.md).[__updateMask](ILine.md#__updatemask)

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

[ILine](ILine.md).[__renderMask](ILine.md#__rendermask)

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

[ILine](ILine.md).[__renderEraser](ILine.md#__rendereraser)

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

[ILine](ILine.md).[__getNowWorld](ILine.md#__getnowworld)

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

[ILine](ILine.md).[getTransform](ILine.md#gettransform)

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

[ILine](ILine.md).[getBounds](ILine.md#getbounds)

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

[ILine](ILine.md).[getLayoutBounds](ILine.md#getlayoutbounds)

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

[ILine](ILine.md).[getLayoutPoints](ILine.md#getlayoutpoints)

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

[ILine](ILine.md).[getWorldBounds](ILine.md#getworldbounds)

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

[ILine](ILine.md).[worldToLocal](ILine.md#worldtolocal)

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

[ILine](ILine.md).[localToWorld](ILine.md#localtoworld)

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

[ILine](ILine.md).[worldToInner](ILine.md#worldtoinner)

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

[ILine](ILine.md).[innerToWorld](ILine.md#innertoworld)

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

[ILine](ILine.md).[getBoxPoint](ILine.md#getboxpoint)

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

[ILine](ILine.md).[getBoxPointByInner](ILine.md#getboxpointbyinner)

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

[ILine](ILine.md).[getInnerPoint](ILine.md#getinnerpoint)

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

[ILine](ILine.md).[getInnerPointByBox](ILine.md#getinnerpointbybox)

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

[ILine](ILine.md).[getInnerPointByLocal](ILine.md#getinnerpointbylocal)

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

[ILine](ILine.md).[getLocalPoint](ILine.md#getlocalpoint)

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

[ILine](ILine.md).[getLocalPointByInner](ILine.md#getlocalpointbyinner)

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

[ILine](ILine.md).[getPagePoint](ILine.md#getpagepoint)

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

[ILine](ILine.md).[getWorldPoint](ILine.md#getworldpoint)

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

[ILine](ILine.md).[getWorldPointByBox](ILine.md#getworldpointbybox)

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

[ILine](ILine.md).[getWorldPointByLocal](ILine.md#getworldpointbylocal)

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

[ILine](ILine.md).[getWorldPointByPage](ILine.md#getworldpointbypage)

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

[ILine](ILine.md).[setTransform](ILine.md#settransform)

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

[ILine](ILine.md).[transform](ILine.md#transform)

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

[ILine](ILine.md).[move](ILine.md#move)

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

[ILine](ILine.md).[moveInner](ILine.md#moveinner)

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

[ILine](ILine.md).[scaleOf](ILine.md#scaleof)

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

[ILine](ILine.md).[rotateOf](ILine.md#rotateof)

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

[ILine](ILine.md).[skewOf](ILine.md#skewof)

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

[ILine](ILine.md).[transformWorld](ILine.md#transformworld)

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

[ILine](ILine.md).[moveWorld](ILine.md#moveworld)

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

[ILine](ILine.md).[scaleOfWorld](ILine.md#scaleofworld)

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

[ILine](ILine.md).[rotateOfWorld](ILine.md#rotateofworld)

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

[ILine](ILine.md).[skewOfWorld](ILine.md#skewofworld)

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

[ILine](ILine.md).[flip](ILine.md#flip)

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

[ILine](ILine.md).[scaleResize](ILine.md#scaleresize)

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

[ILine](ILine.md).[__scaleResize](ILine.md#__scaleresize)

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

[ILine](ILine.md).[resizeWidth](ILine.md#resizewidth)

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

[ILine](ILine.md).[resizeHeight](ILine.md#resizeheight)

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

[ILine](ILine.md).[__hitWorld](ILine.md#__hitworld)

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

[ILine](ILine.md).[__hit](ILine.md#__hit)

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

[ILine](ILine.md).[__hitFill](ILine.md#__hitfill)

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

[ILine](ILine.md).[__hitStroke](ILine.md#__hitstroke)

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

[ILine](ILine.md).[__hitPixel](ILine.md#__hitpixel)

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

[ILine](ILine.md).[__drawHitPath](ILine.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L657)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateHitCanvas](ILine.md#__updatehitcanvas)

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

[ILine](ILine.md).[__render](ILine.md#__render)

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

[ILine](ILine.md).[__drawFast](ILine.md#__drawfast)

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

[ILine](ILine.md).[__draw](ILine.md#__draw)

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

[ILine](ILine.md).[__clip](ILine.md#__clip)

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

[ILine](ILine.md).[__renderShape](ILine.md#__rendershape)

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

[ILine](ILine.md).[__drawShape](ILine.md#__drawshape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateWorldOpacity](ILine.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L669)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateChange](ILine.md#__updatechange)

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

[ILine](ILine.md).[__drawPath](ILine.md#__drawpath)

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

[ILine](ILine.md).[__drawRenderPath](ILine.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updatePath](ILine.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L675)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateRenderPath](ILine.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L676)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILine](ILine.md).[getMotionPathData](ILine.md#getmotionpathdata)

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

[ILine](ILine.md).[getMotionPoint](ILine.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L680)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[ILine](ILine.md).[getMotionTotal](ILine.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L681)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateMotionPath](ILine.md#__updatemotionpath)

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

[ILine](ILine.md).[__runAnimation](ILine.md#__runanimation)

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

[ILine](ILine.md).[__emitLifeEvent](ILine.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/ILeaf.ts#L687)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[__updateSortChildren](ILine.md#__updatesortchildren)

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

[ILine](ILine.md).[add](ILine.md#add)

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

[ILine](ILine.md).[remove](ILine.md#remove)

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

[ILine](ILine.md).[dropTo](ILine.md#dropto)

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

[ILine](ILine.md).[__realSetAttr](ILine.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[destroyEventer](ILine.md#destroyeventer)

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

[ILine](ILine.md).[on](ILine.md#on)

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

[ILine](ILine.md).[off](ILine.md#off)

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

[ILine](ILine.md).[on_](ILine.md#on_)

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

[ILine](ILine.md).[off_](ILine.md#off_)

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

[ILine](ILine.md).[once](ILine.md#once)

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

[ILine](ILine.md).[emit](ILine.md#emit)

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

[ILine](ILine.md).[emitEvent](ILine.md#emitevent)

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

[ILine](ILine.md).[hasEvent](ILine.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[destroy](ILine.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/interface/src/event/IEventer.ts#L58)

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

[ILine](ILine.md).[reset](ILine.md#reset)

#### Defined in

[ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L397)

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

[ILine](ILine.md).[set](ILine.md#set)

#### Defined in

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L399)

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

[ILine](ILine.md).[toJSON](ILine.md#tojson)

#### Defined in

[ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L400)

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

[ILine](ILine.md).[get](ILine.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L402)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[ILine](ILine.md).[createProxyData](ILine.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:403](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L403)

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

[ILine](ILine.md).[find](ILine.md#find)

#### Defined in

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L405)

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

[ILine](ILine.md).[findTag](ILine.md#findtag)

#### Defined in

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L406)

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

[ILine](ILine.md).[findOne](ILine.md#findone)

#### Defined in

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L407)

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

[ILine](ILine.md).[findId](ILine.md#findid)

#### Defined in

[ui/packages/interface/src/IUI.ts:408](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L408)

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

[ILine](ILine.md).[getPath](ILine.md#getpath)

#### Defined in

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L410)

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

[ILine](ILine.md).[getPathString](ILine.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L411)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[load](ILine.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L413)

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

[ILine](ILine.md).[__drawPathByData](ILine.md#__drawpathbydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L415)

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

[ILine](ILine.md).[__drawPathByBox](ILine.md#__drawpathbybox)

#### Defined in

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L416)

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

[ILine](ILine.md).[__drawAfterFill](ILine.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L417)

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

[ILine](ILine.md).[__drawContent](ILine.md#__drawcontent)

#### Defined in

[ui/packages/interface/src/IUI.ts:418](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L418)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`canvas`, `image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `image` | [`ILeaferImage`](ILeaferImage.md) |

#### Returns

`void`

#### Inherited from

[ILine](ILine.md).[drawImagePlaceholder](ILine.md#drawimageplaceholder)

#### Defined in

[ui/packages/interface/src/IUI.ts:420](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L420)

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

[ILine](ILine.md).[animate](ILine.md#animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L422)

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

[ILine](ILine.md).[killAnimate](ILine.md#killanimate)

#### Defined in

[ui/packages/interface/src/IUI.ts:423](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L423)

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

[ILine](ILine.md).[export](ILine.md#export)

#### Defined in

[ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L425)

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

[ILine](ILine.md).[syncExport](ILine.md#syncexport)

#### Defined in

[ui/packages/interface/src/IUI.ts:426](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L426)

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

[ILine](ILine.md).[clone](ILine.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/interface/src/IUI.ts#L427)
