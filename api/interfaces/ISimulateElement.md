# Interface: ISimulateElement

## Hierarchy

- [`IRect`](IRect.md)

  ↳ **`ISimulateElement`**

## Table of contents

### Properties

- [checkChange](ISimulateElement.md#checkchange)
- [canChange](ISimulateElement.md#canchange)
- [changedTransform](ISimulateElement.md#changedtransform)
- [id](ISimulateElement.md#id)
- [name](ISimulateElement.md#name)
- [className](ISimulateElement.md#classname)
- [blendMode](ISimulateElement.md#blendmode)
- [opacity](ISimulateElement.md#opacity)
- [visible](ISimulateElement.md#visible)
- [selected](ISimulateElement.md#selected)
- [disabled](ISimulateElement.md#disabled)
- [locked](ISimulateElement.md#locked)
- [zIndex](ISimulateElement.md#zindex)
- [dim](ISimulateElement.md#dim)
- [dimskip](ISimulateElement.md#dimskip)
- [mask](ISimulateElement.md#mask)
- [eraser](ISimulateElement.md#eraser)
- [filter](ISimulateElement.md#filter)
- [x](ISimulateElement.md#x)
- [y](ISimulateElement.md#y)
- [width](ISimulateElement.md#width)
- [height](ISimulateElement.md#height)
- [scaleX](ISimulateElement.md#scalex)
- [scaleY](ISimulateElement.md#scaley)
- [rotation](ISimulateElement.md#rotation)
- [skewX](ISimulateElement.md#skewx)
- [skewY](ISimulateElement.md#skewy)
- [scale](ISimulateElement.md#scale)
- [offsetX](ISimulateElement.md#offsetx)
- [offsetY](ISimulateElement.md#offsety)
- [scrollX](ISimulateElement.md#scrollx)
- [scrollY](ISimulateElement.md#scrolly)
- [origin](ISimulateElement.md#origin)
- [around](ISimulateElement.md#around)
- [lazy](ISimulateElement.md#lazy)
- [pixelRatio](ISimulateElement.md#pixelratio)
- [path](ISimulateElement.md#path)
- [windingRule](ISimulateElement.md#windingrule)
- [closed](ISimulateElement.md#closed)
- [flow](ISimulateElement.md#flow)
- [padding](ISimulateElement.md#padding)
- [gap](ISimulateElement.md#gap)
- [flowAlign](ISimulateElement.md#flowalign)
- [flowWrap](ISimulateElement.md#flowwrap)
- [itemBox](ISimulateElement.md#itembox)
- [inFlow](ISimulateElement.md#inflow)
- [autoWidth](ISimulateElement.md#autowidth)
- [autoHeight](ISimulateElement.md#autoheight)
- [lockRatio](ISimulateElement.md#lockratio)
- [autoBox](ISimulateElement.md#autobox)
- [widthRange](ISimulateElement.md#widthrange)
- [heightRange](ISimulateElement.md#heightrange)
- [draggable](ISimulateElement.md#draggable)
- [dragBounds](ISimulateElement.md#dragbounds)
- [editable](ISimulateElement.md#editable)
- [hittable](ISimulateElement.md#hittable)
- [hitFill](ISimulateElement.md#hitfill)
- [hitStroke](ISimulateElement.md#hitstroke)
- [hitBox](ISimulateElement.md#hitbox)
- [hitChildren](ISimulateElement.md#hitchildren)
- [hitSelf](ISimulateElement.md#hitself)
- [hitRadius](ISimulateElement.md#hitradius)
- [button](ISimulateElement.md#button)
- [cursor](ISimulateElement.md#cursor)
- [motionPath](ISimulateElement.md#motionpath)
- [motionPrecision](ISimulateElement.md#motionprecision)
- [motion](ISimulateElement.md#motion)
- [motionRotation](ISimulateElement.md#motionrotation)
- [normalStyle](ISimulateElement.md#normalstyle)
- [event](ISimulateElement.md#event)
- [data](ISimulateElement.md#data)
- [tag](ISimulateElement.md#tag)
- [\_\_tag](ISimulateElement.md#__tag)
- [innerName](ISimulateElement.md#innername)
- [\_\_DataProcessor](ISimulateElement.md#__dataprocessor)
- [\_\_LayoutProcessor](ISimulateElement.md#__layoutprocessor)
- [leaferIsCreated](ISimulateElement.md#leaferiscreated)
- [leaferIsReady](ISimulateElement.md#leaferisready)
- [isApp](ISimulateElement.md#isapp)
- [isLeafer](ISimulateElement.md#isleafer)
- [isBranch](ISimulateElement.md#isbranch)
- [isBranchLeaf](ISimulateElement.md#isbranchleaf)
- [isOutside](ISimulateElement.md#isoutside)
- [syncEventer](ISimulateElement.md#synceventer)
- [lockNormalStyle](ISimulateElement.md#locknormalstyle)
- [\_\_layout](ISimulateElement.md#__layout)
- [\_\_world](ISimulateElement.md#__world)
- [\_\_local](ISimulateElement.md#__local)
- [\_\_nowWorld](ISimulateElement.md#__nowworld)
- [\_\_cameraWorld](ISimulateElement.md#__cameraworld)
- [\_\_localMatrix](ISimulateElement.md#__localmatrix)
- [\_\_localBoxBounds](ISimulateElement.md#__localboxbounds)
- [\_\_worldOpacity](ISimulateElement.md#__worldopacity)
- [worldTransform](ISimulateElement.md#worldtransform)
- [localTransform](ISimulateElement.md#localtransform)
- [boxBounds](ISimulateElement.md#boxbounds)
- [renderBounds](ISimulateElement.md#renderbounds)
- [worldBoxBounds](ISimulateElement.md#worldboxbounds)
- [worldStrokeBounds](ISimulateElement.md#worldstrokebounds)
- [worldRenderBounds](ISimulateElement.md#worldrenderbounds)
- [worldOpacity](ISimulateElement.md#worldopacity)
- [\_\_level](ISimulateElement.md#__level)
- [\_\_tempNumber](ISimulateElement.md#__tempnumber)
- [\_\_worldFlipped](ISimulateElement.md#__worldflipped)
- [\_\_hasAutoLayout](ISimulateElement.md#__hasautolayout)
- [\_\_hasMotionPath](ISimulateElement.md#__hasmotionpath)
- [\_\_hasMask](ISimulateElement.md#__hasmask)
- [\_\_hasEraser](ISimulateElement.md#__haseraser)
- [\_\_hitCanvas](ISimulateElement.md#__hitcanvas)
- [\_\_flowBounds](ISimulateElement.md#__flowbounds)
- [\_\_widthGrow](ISimulateElement.md#__widthgrow)
- [\_\_heightGrow](ISimulateElement.md#__heightgrow)
- [\_\_hasGrow](ISimulateElement.md#__hasgrow)
- [\_\_onlyHitMask](ISimulateElement.md#__onlyhitmask)
- [\_\_ignoreHitWorld](ISimulateElement.md#__ignorehitworld)
- [\_\_inLazyBounds](ISimulateElement.md#__inlazybounds)
- [pathInputed](ISimulateElement.md#pathinputed)
- [destroyed](ISimulateElement.md#destroyed)
- [innerId](ISimulateElement.md#innerid)
- [\_\_captureMap](ISimulateElement.md#__capturemap)
- [\_\_bubbleMap](ISimulateElement.md#__bubblemap)
- [\_\_hasLocalEvent](ISimulateElement.md#__haslocalevent)
- [\_\_hasWorldEvent](ISimulateElement.md#__hasworldevent)
- [cornerRadius](ISimulateElement.md#cornerradius)
- [cornerSmoothing](ISimulateElement.md#cornersmoothing)
- [fill](ISimulateElement.md#fill)
- [stroke](ISimulateElement.md#stroke)
- [strokeAlign](ISimulateElement.md#strokealign)
- [strokeWidth](ISimulateElement.md#strokewidth)
- [strokeWidthFixed](ISimulateElement.md#strokewidthfixed)
- [strokeCap](ISimulateElement.md#strokecap)
- [strokeJoin](ISimulateElement.md#strokejoin)
- [dashPattern](ISimulateElement.md#dashpattern)
- [dashOffset](ISimulateElement.md#dashoffset)
- [miterLimit](ISimulateElement.md#miterlimit)
- [startArrow](ISimulateElement.md#startarrow)
- [endArrow](ISimulateElement.md#endarrow)
- [shadow](ISimulateElement.md#shadow)
- [innerShadow](ISimulateElement.md#innershadow)
- [blur](ISimulateElement.md#blur)
- [backgroundBlur](ISimulateElement.md#backgroundblur)
- [grayscale](ISimulateElement.md#grayscale)
- [\_\_](ISimulateElement.md#__)
- [app](ISimulateElement.md#app)
- [leafer](ISimulateElement.md#leafer)
- [parent](ISimulateElement.md#parent)
- [zoomLayer](ISimulateElement.md#zoomlayer)
- [isFrame](ISimulateElement.md#isframe)
- [isOverflow](ISimulateElement.md#isoverflow)
- [useFastShadow](ISimulateElement.md#usefastshadow)
- [proxyData](ISimulateElement.md#proxydata)
- [\_\_proxyData](ISimulateElement.md#__proxydata)
- [animation](ISimulateElement.md#animation)
- [animationOut](ISimulateElement.md#animationout)
- [children](ISimulateElement.md#children)
- [\_\_box](ISimulateElement.md#__box)
- [\_\_animate](ISimulateElement.md#__animate)
- [pen](ISimulateElement.md#pen)
- [transition](ISimulateElement.md#transition)
- [transitionOut](ISimulateElement.md#transitionout)
- [states](ISimulateElement.md#states)
- [state](ISimulateElement.md#state)
- [hoverStyle](ISimulateElement.md#hoverstyle)
- [pressStyle](ISimulateElement.md#pressstyle)
- [focusStyle](ISimulateElement.md#focusstyle)
- [selectedStyle](ISimulateElement.md#selectedstyle)
- [disabledStyle](ISimulateElement.md#disabledstyle)
- [placeholderStyle](ISimulateElement.md#placeholderstyle)
- [placeholderColor](ISimulateElement.md#placeholdercolor)
- [placeholderDelay](ISimulateElement.md#placeholderdelay)
- [editConfig](ISimulateElement.md#editconfig)
- [editOuter](ISimulateElement.md#editouter)
- [editInner](ISimulateElement.md#editinner)

### Methods

- [safeChange](ISimulateElement.md#safechange)
- [resetCustom](ISimulateElement.md#resetcustom)
- [waitParent](ISimulateElement.md#waitparent)
- [waitLeafer](ISimulateElement.md#waitleafer)
- [nextRender](ISimulateElement.md#nextrender)
- [removeNextRender](ISimulateElement.md#removenextrender)
- [\_\_bindLeafer](ISimulateElement.md#__bindleafer)
- [setAttr](ISimulateElement.md#setattr)
- [getAttr](ISimulateElement.md#getattr)
- [getComputedAttr](ISimulateElement.md#getcomputedattr)
- [toString](ISimulateElement.md#tostring)
- [toSVG](ISimulateElement.md#tosvg)
- [\_\_SVG](ISimulateElement.md#__svg)
- [toHTML](ISimulateElement.md#tohtml)
- [\_\_setAttr](ISimulateElement.md#__setattr)
- [\_\_getAttr](ISimulateElement.md#__getattr)
- [setProxyAttr](ISimulateElement.md#setproxyattr)
- [getProxyAttr](ISimulateElement.md#getproxyattr)
- [focus](ISimulateElement.md#focus)
- [updateState](ISimulateElement.md#updatestate)
- [updateLayout](ISimulateElement.md#updatelayout)
- [forceUpdate](ISimulateElement.md#forceupdate)
- [forceRender](ISimulateElement.md#forcerender)
- [\_\_extraUpdate](ISimulateElement.md#__extraupdate)
- [\_\_updateWorldMatrix](ISimulateElement.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](ISimulateElement.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](ISimulateElement.md#__updateworldbounds)
- [\_\_updateLocalBounds](ISimulateElement.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](ISimulateElement.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](ISimulateElement.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](ISimulateElement.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](ISimulateElement.md#__updatecontentbounds)
- [\_\_updateBoxBounds](ISimulateElement.md#__updateboxbounds)
- [\_\_updateStrokeBounds](ISimulateElement.md#__updatestrokebounds)
- [\_\_updateRenderBounds](ISimulateElement.md#__updaterenderbounds)
- [\_\_updateAutoLayout](ISimulateElement.md#__updateautolayout)
- [\_\_updateFlowLayout](ISimulateElement.md#__updateflowlayout)
- [\_\_updateNaturalSize](ISimulateElement.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](ISimulateElement.md#__updatestrokespread)
- [\_\_updateRenderSpread](ISimulateElement.md#__updaterenderspread)
- [\_\_onUpdateSize](ISimulateElement.md#__onupdatesize)
- [\_\_updateEraser](ISimulateElement.md#__updateeraser)
- [\_\_updateMask](ISimulateElement.md#__updatemask)
- [\_\_renderMask](ISimulateElement.md#__rendermask)
- [\_\_renderEraser](ISimulateElement.md#__rendereraser)
- [\_\_getNowWorld](ISimulateElement.md#__getnowworld)
- [getTransform](ISimulateElement.md#gettransform)
- [getBounds](ISimulateElement.md#getbounds)
- [getLayoutBounds](ISimulateElement.md#getlayoutbounds)
- [getLayoutPoints](ISimulateElement.md#getlayoutpoints)
- [getWorldBounds](ISimulateElement.md#getworldbounds)
- [worldToLocal](ISimulateElement.md#worldtolocal)
- [localToWorld](ISimulateElement.md#localtoworld)
- [worldToInner](ISimulateElement.md#worldtoinner)
- [innerToWorld](ISimulateElement.md#innertoworld)
- [getBoxPoint](ISimulateElement.md#getboxpoint)
- [getBoxPointByInner](ISimulateElement.md#getboxpointbyinner)
- [getInnerPoint](ISimulateElement.md#getinnerpoint)
- [getInnerPointByBox](ISimulateElement.md#getinnerpointbybox)
- [getInnerPointByLocal](ISimulateElement.md#getinnerpointbylocal)
- [getLocalPoint](ISimulateElement.md#getlocalpoint)
- [getLocalPointByInner](ISimulateElement.md#getlocalpointbyinner)
- [getPagePoint](ISimulateElement.md#getpagepoint)
- [getWorldPoint](ISimulateElement.md#getworldpoint)
- [getWorldPointByBox](ISimulateElement.md#getworldpointbybox)
- [getWorldPointByLocal](ISimulateElement.md#getworldpointbylocal)
- [getWorldPointByPage](ISimulateElement.md#getworldpointbypage)
- [setTransform](ISimulateElement.md#settransform)
- [transform](ISimulateElement.md#transform)
- [move](ISimulateElement.md#move)
- [moveInner](ISimulateElement.md#moveinner)
- [scaleOf](ISimulateElement.md#scaleof)
- [rotateOf](ISimulateElement.md#rotateof)
- [skewOf](ISimulateElement.md#skewof)
- [transformWorld](ISimulateElement.md#transformworld)
- [moveWorld](ISimulateElement.md#moveworld)
- [scaleOfWorld](ISimulateElement.md#scaleofworld)
- [rotateOfWorld](ISimulateElement.md#rotateofworld)
- [skewOfWorld](ISimulateElement.md#skewofworld)
- [flip](ISimulateElement.md#flip)
- [scaleResize](ISimulateElement.md#scaleresize)
- [\_\_scaleResize](ISimulateElement.md#__scaleresize)
- [resizeWidth](ISimulateElement.md#resizewidth)
- [resizeHeight](ISimulateElement.md#resizeheight)
- [\_\_hitWorld](ISimulateElement.md#__hitworld)
- [\_\_hit](ISimulateElement.md#__hit)
- [\_\_hitFill](ISimulateElement.md#__hitfill)
- [\_\_hitStroke](ISimulateElement.md#__hitstroke)
- [\_\_hitPixel](ISimulateElement.md#__hitpixel)
- [\_\_drawHitPath](ISimulateElement.md#__drawhitpath)
- [\_\_updateHitCanvas](ISimulateElement.md#__updatehitcanvas)
- [\_\_render](ISimulateElement.md#__render)
- [\_\_drawFast](ISimulateElement.md#__drawfast)
- [\_\_draw](ISimulateElement.md#__draw)
- [\_\_clip](ISimulateElement.md#__clip)
- [\_\_renderShape](ISimulateElement.md#__rendershape)
- [\_\_updateWorldOpacity](ISimulateElement.md#__updateworldopacity)
- [\_\_updateChange](ISimulateElement.md#__updatechange)
- [\_\_drawPath](ISimulateElement.md#__drawpath)
- [\_\_drawRenderPath](ISimulateElement.md#__drawrenderpath)
- [\_\_updatePath](ISimulateElement.md#__updatepath)
- [\_\_updateRenderPath](ISimulateElement.md#__updaterenderpath)
- [getMotionPathData](ISimulateElement.md#getmotionpathdata)
- [getMotionPoint](ISimulateElement.md#getmotionpoint)
- [getMotionTotal](ISimulateElement.md#getmotiontotal)
- [\_\_updateMotionPath](ISimulateElement.md#__updatemotionpath)
- [\_\_runAnimation](ISimulateElement.md#__runanimation)
- [\_\_emitLifeEvent](ISimulateElement.md#__emitlifeevent)
- [\_\_updateSortChildren](ISimulateElement.md#__updatesortchildren)
- [add](ISimulateElement.md#add)
- [remove](ISimulateElement.md#remove)
- [dropTo](ISimulateElement.md#dropto)
- [\_\_realSetAttr](ISimulateElement.md#__realsetattr)
- [destroyEventer](ISimulateElement.md#destroyeventer)
- [on](ISimulateElement.md#on)
- [off](ISimulateElement.md#off)
- [on\_](ISimulateElement.md#on_)
- [off\_](ISimulateElement.md#off_)
- [once](ISimulateElement.md#once)
- [emit](ISimulateElement.md#emit)
- [emitEvent](ISimulateElement.md#emitevent)
- [hasEvent](ISimulateElement.md#hasevent)
- [destroy](ISimulateElement.md#destroy)
- [reset](ISimulateElement.md#reset)
- [set](ISimulateElement.md#set)
- [toJSON](ISimulateElement.md#tojson)
- [get](ISimulateElement.md#get)
- [createProxyData](ISimulateElement.md#createproxydata)
- [find](ISimulateElement.md#find)
- [findTag](ISimulateElement.md#findtag)
- [findOne](ISimulateElement.md#findone)
- [findId](ISimulateElement.md#findid)
- [getPath](ISimulateElement.md#getpath)
- [getPathString](ISimulateElement.md#getpathstring)
- [load](ISimulateElement.md#load)
- [\_\_drawPathByData](ISimulateElement.md#__drawpathbydata)
- [\_\_drawPathByBox](ISimulateElement.md#__drawpathbybox)
- [\_\_drawAfterFill](ISimulateElement.md#__drawafterfill)
- [\_\_drawContent](ISimulateElement.md#__drawcontent)
- [drawImagePlaceholder](ISimulateElement.md#drawimageplaceholder)
- [animate](ISimulateElement.md#animate)
- [killAnimate](ISimulateElement.md#killanimate)
- [export](ISimulateElement.md#export)
- [syncExport](ISimulateElement.md#syncexport)
- [clone](ISimulateElement.md#clone)

## Properties

### checkChange

• **checkChange**: `boolean`

#### Defined in

[in/packages/interface/src/editor/ISimulateTarget.ts:4](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/interface/src/editor/ISimulateTarget.ts#L4)

___

### canChange

• **canChange**: `boolean`

#### Defined in

[in/packages/interface/src/editor/ISimulateTarget.ts:5](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/interface/src/editor/ISimulateTarget.ts#L5)

___

### changedTransform

• **changedTransform**: [`IMatrix`](IMatrix.md)

#### Defined in

[in/packages/interface/src/editor/ISimulateTarget.ts:6](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/interface/src/editor/ISimulateTarget.ts#L6)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IRect](IRect.md).[id](IRect.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRect](IRect.md).[name](IRect.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRect](IRect.md).[className](IRect.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRect](IRect.md).[blendMode](IRect.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRect](IRect.md).[opacity](IRect.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRect](IRect.md).[visible](IRect.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRect](IRect.md).[selected](IRect.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRect](IRect.md).[disabled](IRect.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRect](IRect.md).[locked](IRect.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRect](IRect.md).[zIndex](IRect.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRect](IRect.md).[dim](IRect.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRect](IRect.md).[dimskip](IRect.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRect](IRect.md).[mask](IRect.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRect](IRect.md).[eraser](IRect.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IRect](IRect.md).[filter](IRect.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRect](IRect.md).[x](IRect.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRect](IRect.md).[y](IRect.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRect](IRect.md).[width](IRect.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRect](IRect.md).[height](IRect.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRect](IRect.md).[scaleX](IRect.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRect](IRect.md).[scaleY](IRect.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRect](IRect.md).[rotation](IRect.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRect](IRect.md).[skewX](IRect.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRect](IRect.md).[skewY](IRect.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRect](IRect.md).[scale](IRect.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRect](IRect.md).[offsetX](IRect.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRect](IRect.md).[offsetY](IRect.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRect](IRect.md).[scrollX](IRect.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRect](IRect.md).[scrollY](IRect.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[origin](IRect.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[around](IRect.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRect](IRect.md).[lazy](IRect.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRect](IRect.md).[pixelRatio](IRect.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IRect](IRect.md).[path](IRect.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRect](IRect.md).[windingRule](IRect.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRect](IRect.md).[closed](IRect.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRect](IRect.md).[flow](IRect.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[padding](IRect.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRect](IRect.md).[gap](IRect.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRect](IRect.md).[flowAlign](IRect.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRect](IRect.md).[flowWrap](IRect.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRect](IRect.md).[itemBox](IRect.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRect](IRect.md).[inFlow](IRect.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoWidth](IRect.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoHeight](IRect.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockRatio](IRect.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRect](IRect.md).[autoBox](IRect.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[widthRange](IRect.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[heightRange](IRect.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRect](IRect.md).[draggable](IRect.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[dragBounds](IRect.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRect](IRect.md).[editable](IRect.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRect](IRect.md).[hittable](IRect.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitFill](IRect.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitStroke](IRect.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitBox](IRect.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitChildren](IRect.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitSelf](IRect.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRect](IRect.md).[hitRadius](IRect.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRect](IRect.md).[button](IRect.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRect](IRect.md).[cursor](IRect.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[motionPath](IRect.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRect](IRect.md).[motionPrecision](IRect.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRect](IRect.md).[motion](IRect.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRect](IRect.md).[motionRotation](IRect.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[normalStyle](IRect.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IRect](IRect.md).[event](IRect.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[data](IRect.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[IRect](IRect.md).[tag](IRect.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IRect](IRect.md).[__tag](IRect.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L439)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IRect](IRect.md).[innerName](IRect.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__DataProcessor](IRect.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__LayoutProcessor](IRect.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L443)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsCreated](IRect.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L450)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsReady](IRect.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L451)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IRect](IRect.md).[isApp](IRect.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L453)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IRect](IRect.md).[isLeafer](IRect.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L454)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranch](IRect.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranchLeaf](IRect.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L456)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOutside](IRect.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L457)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRect](IRect.md).[syncEventer](IRect.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L464)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockNormalStyle](IRect.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IRect](IRect.md).[__layout](IRect.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__world](IRect.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__local](IRect.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__nowWorld](IRect.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L472)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__cameraWorld](IRect.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[__localMatrix](IRect.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L475)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__localBoxBounds](IRect.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[__worldOpacity](IRect.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L478)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IRect](IRect.md).[worldTransform](IRect.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L480)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[localTransform](IRect.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L481)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[boxBounds](IRect.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L483)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[renderBounds](IRect.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L484)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldBoxBounds](IRect.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L485)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldStrokeBounds](IRect.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L486)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldRenderBounds](IRect.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L487)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[worldOpacity](IRect.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IRect](IRect.md).[__level](IRect.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L491)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IRect](IRect.md).[__tempNumber](IRect.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IRect](IRect.md).[__worldFlipped](IRect.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasAutoLayout](IRect.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMotionPath](IRect.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMask](IRect.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasEraser](IRect.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IRect](IRect.md).[__hitCanvas](IRect.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__flowBounds](IRect.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__widthGrow](IRect.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__heightGrow](IRect.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasGrow](IRect.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__onlyHitMask](IRect.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IRect](IRect.md).[__ignoreHitWorld](IRect.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IRect](IRect.md).[__inLazyBounds](IRect.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L513)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IRect](IRect.md).[pathInputed](IRect.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L515)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IRect](IRect.md).[destroyed](IRect.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L517)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IRect](IRect.md).[innerId](IRect.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__captureMap](IRect.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__bubbleMap](IRect.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasLocalEvent](IRect.md#__haslocalevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasWorldEvent](IRect.md#__hasworldevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[cornerRadius](IRect.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRect](IRect.md).[cornerSmoothing](IRect.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IRect](IRect.md).[fill](IRect.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IRect](IRect.md).[stroke](IRect.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRect](IRect.md).[strokeAlign](IRect.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[strokeWidth](IRect.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IRect](IRect.md).[strokeWidthFixed](IRect.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRect](IRect.md).[strokeCap](IRect.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRect](IRect.md).[strokeJoin](IRect.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IRect](IRect.md).[dashPattern](IRect.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRect](IRect.md).[dashOffset](IRect.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRect](IRect.md).[miterLimit](IRect.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRect](IRect.md).[startArrow](IRect.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IRect](IRect.md).[endArrow](IRect.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[shadow](IRect.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[innerShadow](IRect.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[blur](IRect.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[backgroundBlur](IRect.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IRect](IRect.md).[grayscale](IRect.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IRectData`](IRectData.md)

#### Inherited from

[IRect](IRect.md).[__](IRect.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:138](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L138)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[app](IRect.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L376)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[leafer](IRect.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L377)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[parent](IRect.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L378)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[zoomLayer](IRect.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L379)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IRect](IRect.md).[isFrame](IRect.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L380)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOverflow](IRect.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L381)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IRect](IRect.md).[useFastShadow](IRect.md#usefastshadow)

#### Defined in

[ui/packages/interface/src/IUI.ts:382](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L382)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[proxyData](IRect.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L384)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[__proxyData](IRect.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L385)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animation](IRect.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L387)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animationOut](IRect.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L388)

___

### children

• `Optional` **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IRect](IRect.md).[children](IRect.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:390](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L390)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IRect](IRect.md).[__box](IRect.md#__box)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L392)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IRect](IRect.md).[__animate](IRect.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:393](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L393)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IRect](IRect.md).[pen](IRect.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L395)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transition](IRect.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L448)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transitionOut](IRect.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L449)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRect](IRect.md).[states](IRect.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L451)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRect](IRect.md).[state](IRect.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L452)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[hoverStyle](IRect.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L454)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[pressStyle](IRect.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L455)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[focusStyle](IRect.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L456)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[selectedStyle](IRect.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L457)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[disabledStyle](IRect.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L458)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[placeholderStyle](IRect.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L459)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRect](IRect.md).[placeholderColor](IRect.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L460)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IRect](IRect.md).[placeholderDelay](IRect.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L461)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRect](IRect.md).[editConfig](IRect.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L463)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRect](IRect.md).[editOuter](IRect.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L464)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRect](IRect.md).[editInner](IRect.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L465)

## Methods

### safeChange

▸ **safeChange**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Defined in

[in/packages/interface/src/editor/ISimulateTarget.ts:7](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/interface/src/editor/ISimulateTarget.ts#L7)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[resetCustom](IRect.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L520)

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

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L522)

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

[leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L523)

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

[leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L524)

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

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L525)

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

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L527)

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

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L531)

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

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L532)

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

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L533)

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

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L536)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toSVG](IRect.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L537)

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

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L538)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toHTML](IRect.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L539)

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

[leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L545)

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

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L546)

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

[leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L547)

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

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L548)

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

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L556)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateState](IRect.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L558)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateLayout](IRect.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L559)

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

[leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L560)

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

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__extraUpdate](IRect.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L563)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldMatrix](IRect.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalMatrix](IRect.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldBounds](IRect.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBounds](IRect.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBoxBounds](IRect.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalStrokeBounds](IRect.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalRenderBounds](IRect.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateContentBounds](IRect.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L577)

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

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateStrokeBounds](IRect.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateRenderBounds](IRect.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateAutoLayout](IRect.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateFlowLayout](IRect.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateNaturalSize](IRect.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[__updateStrokeSpread](IRect.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[__updateRenderSpread](IRect.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__onUpdateSize](IRect.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L589)

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

[leafer/packages/interface/src/display/ILeaf.ts:592](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L592)

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

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L593)

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

[leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L594)

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

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L595)

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

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L598)

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

[leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L600)

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

[leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L602)

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

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L603)

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

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L604)

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

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L606)

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

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L608)

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

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L609)

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

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L610)

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

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L611)

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

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L613)

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

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L614)

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

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L615)

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

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L616)

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

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L617)

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

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L618)

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

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L619)

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

[leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L620)

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

[leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L621)

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

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L622)

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

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L623)

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

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L624)

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

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L627)

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

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L628)

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

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L629)

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

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L631)

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

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L632)

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

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L633)

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

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L634)

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

[leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L636)

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

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L637)

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

[leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L638)

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

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L639)

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

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L640)

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

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L642)

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

[leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L644)

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

[leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L645)

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

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L647)

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

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L648)

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

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L651)

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

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L652)

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

[leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L653)

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

[leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L654)

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

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L655)

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

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateHitCanvas](IRect.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L657)

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

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L660)

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

[leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L661)

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

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L662)

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

[leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L664)

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

[leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L665)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldOpacity](IRect.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateChange](IRect.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L668)

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

[leafer/packages/interface/src/display/ILeaf.ts:671](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L671)

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

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L672)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updatePath](IRect.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L673)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateRenderPath](IRect.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L674)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRect](IRect.md).[getMotionPathData](IRect.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L677)

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

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L678)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[getMotionTotal](IRect.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateMotionPath](IRect.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L681)

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

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L683)

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

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L685)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateSortChildren](IRect.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L690)

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

[leafer/packages/interface/src/display/ILeaf.ts:691](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L691)

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

[leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L692)

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

[leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L693)

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

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroyEventer](IRect.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[IRect](IRect.md).[on](IRect.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L49)

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

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L50)

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

[IRect](IRect.md).[on_](IRect.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L51)

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

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L52)

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

[IRect](IRect.md).[once](IRect.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L53)

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

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L54)

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

[leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L55)

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

[leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroy](IRect.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L58)

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

[ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L397)

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

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L399)

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

[ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L400)

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

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L402)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[createProxyData](IRect.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:403](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L403)

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

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L405)

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

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L406)

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

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L407)

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

[ui/packages/interface/src/IUI.ts:408](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L408)

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

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L410)

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

[ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L411)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[load](IRect.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L413)

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

[ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L415)

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

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L416)

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

[ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L417)

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

[ui/packages/interface/src/IUI.ts:418](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L418)

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

[IRect](IRect.md).[drawImagePlaceholder](IRect.md#drawimageplaceholder)

#### Defined in

[ui/packages/interface/src/IUI.ts:420](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L420)

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

[ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L422)

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

[ui/packages/interface/src/IUI.ts:423](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L423)

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

[ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L425)

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

[ui/packages/interface/src/IUI.ts:426](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L426)

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

[ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L427)
