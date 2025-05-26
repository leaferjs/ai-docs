# Interface: IEditBox

## Hierarchy

- [`IEditBoxBase`](IEditBoxBase.md)

  ↳ **`IEditBox`**

## Implemented by

- [`EditBox`](../classes/EditBox.md)

## Table of contents

### Properties

- [editor](IEditBox.md#editor)
- [id](IEditBox.md#id)
- [name](IEditBox.md#name)
- [className](IEditBox.md#classname)
- [blendMode](IEditBox.md#blendmode)
- [opacity](IEditBox.md#opacity)
- [visible](IEditBox.md#visible)
- [selected](IEditBox.md#selected)
- [disabled](IEditBox.md#disabled)
- [locked](IEditBox.md#locked)
- [zIndex](IEditBox.md#zindex)
- [dim](IEditBox.md#dim)
- [dimskip](IEditBox.md#dimskip)
- [mask](IEditBox.md#mask)
- [eraser](IEditBox.md#eraser)
- [filter](IEditBox.md#filter)
- [x](IEditBox.md#x)
- [y](IEditBox.md#y)
- [width](IEditBox.md#width)
- [height](IEditBox.md#height)
- [scaleX](IEditBox.md#scalex)
- [scaleY](IEditBox.md#scaley)
- [rotation](IEditBox.md#rotation)
- [skewX](IEditBox.md#skewx)
- [skewY](IEditBox.md#skewy)
- [scale](IEditBox.md#scale)
- [offsetX](IEditBox.md#offsetx)
- [offsetY](IEditBox.md#offsety)
- [scrollX](IEditBox.md#scrollx)
- [scrollY](IEditBox.md#scrolly)
- [origin](IEditBox.md#origin)
- [around](IEditBox.md#around)
- [lazy](IEditBox.md#lazy)
- [pixelRatio](IEditBox.md#pixelratio)
- [path](IEditBox.md#path)
- [windingRule](IEditBox.md#windingrule)
- [closed](IEditBox.md#closed)
- [flow](IEditBox.md#flow)
- [padding](IEditBox.md#padding)
- [gap](IEditBox.md#gap)
- [flowAlign](IEditBox.md#flowalign)
- [flowWrap](IEditBox.md#flowwrap)
- [itemBox](IEditBox.md#itembox)
- [inFlow](IEditBox.md#inflow)
- [autoWidth](IEditBox.md#autowidth)
- [autoHeight](IEditBox.md#autoheight)
- [lockRatio](IEditBox.md#lockratio)
- [autoBox](IEditBox.md#autobox)
- [widthRange](IEditBox.md#widthrange)
- [heightRange](IEditBox.md#heightrange)
- [draggable](IEditBox.md#draggable)
- [dragBounds](IEditBox.md#dragbounds)
- [editable](IEditBox.md#editable)
- [hittable](IEditBox.md#hittable)
- [hitFill](IEditBox.md#hitfill)
- [hitStroke](IEditBox.md#hitstroke)
- [hitBox](IEditBox.md#hitbox)
- [hitChildren](IEditBox.md#hitchildren)
- [hitSelf](IEditBox.md#hitself)
- [hitRadius](IEditBox.md#hitradius)
- [button](IEditBox.md#button)
- [cursor](IEditBox.md#cursor)
- [motionPath](IEditBox.md#motionpath)
- [motionPrecision](IEditBox.md#motionprecision)
- [motion](IEditBox.md#motion)
- [motionRotation](IEditBox.md#motionrotation)
- [normalStyle](IEditBox.md#normalstyle)
- [event](IEditBox.md#event)
- [data](IEditBox.md#data)
- [tag](IEditBox.md#tag)
- [\_\_tag](IEditBox.md#__tag)
- [innerName](IEditBox.md#innername)
- [\_\_DataProcessor](IEditBox.md#__dataprocessor)
- [\_\_LayoutProcessor](IEditBox.md#__layoutprocessor)
- [leaferIsCreated](IEditBox.md#leaferiscreated)
- [leaferIsReady](IEditBox.md#leaferisready)
- [isApp](IEditBox.md#isapp)
- [isLeafer](IEditBox.md#isleafer)
- [isBranch](IEditBox.md#isbranch)
- [isBranchLeaf](IEditBox.md#isbranchleaf)
- [isOutside](IEditBox.md#isoutside)
- [syncEventer](IEditBox.md#synceventer)
- [lockNormalStyle](IEditBox.md#locknormalstyle)
- [\_\_layout](IEditBox.md#__layout)
- [\_\_world](IEditBox.md#__world)
- [\_\_local](IEditBox.md#__local)
- [\_\_nowWorld](IEditBox.md#__nowworld)
- [\_\_cameraWorld](IEditBox.md#__cameraworld)
- [\_\_localMatrix](IEditBox.md#__localmatrix)
- [\_\_localBoxBounds](IEditBox.md#__localboxbounds)
- [\_\_worldOpacity](IEditBox.md#__worldopacity)
- [worldTransform](IEditBox.md#worldtransform)
- [localTransform](IEditBox.md#localtransform)
- [boxBounds](IEditBox.md#boxbounds)
- [renderBounds](IEditBox.md#renderbounds)
- [worldBoxBounds](IEditBox.md#worldboxbounds)
- [worldStrokeBounds](IEditBox.md#worldstrokebounds)
- [worldRenderBounds](IEditBox.md#worldrenderbounds)
- [worldOpacity](IEditBox.md#worldopacity)
- [\_\_level](IEditBox.md#__level)
- [\_\_tempNumber](IEditBox.md#__tempnumber)
- [\_\_worldFlipped](IEditBox.md#__worldflipped)
- [\_\_hasAutoLayout](IEditBox.md#__hasautolayout)
- [\_\_hasMotionPath](IEditBox.md#__hasmotionpath)
- [\_\_hasMask](IEditBox.md#__hasmask)
- [\_\_hasEraser](IEditBox.md#__haseraser)
- [\_\_hitCanvas](IEditBox.md#__hitcanvas)
- [\_\_flowBounds](IEditBox.md#__flowbounds)
- [\_\_widthGrow](IEditBox.md#__widthgrow)
- [\_\_heightGrow](IEditBox.md#__heightgrow)
- [\_\_hasGrow](IEditBox.md#__hasgrow)
- [\_\_onlyHitMask](IEditBox.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IEditBox.md#__ignorehitworld)
- [\_\_inLazyBounds](IEditBox.md#__inlazybounds)
- [pathInputed](IEditBox.md#pathinputed)
- [destroyed](IEditBox.md#destroyed)
- [innerId](IEditBox.md#innerid)
- [\_\_captureMap](IEditBox.md#__capturemap)
- [\_\_bubbleMap](IEditBox.md#__bubblemap)
- [\_\_hasLocalEvent](IEditBox.md#__haslocalevent)
- [\_\_hasWorldEvent](IEditBox.md#__hasworldevent)
- [cornerRadius](IEditBox.md#cornerradius)
- [cornerSmoothing](IEditBox.md#cornersmoothing)
- [fill](IEditBox.md#fill)
- [stroke](IEditBox.md#stroke)
- [strokeAlign](IEditBox.md#strokealign)
- [strokeWidth](IEditBox.md#strokewidth)
- [strokeWidthFixed](IEditBox.md#strokewidthfixed)
- [strokeCap](IEditBox.md#strokecap)
- [strokeJoin](IEditBox.md#strokejoin)
- [dashPattern](IEditBox.md#dashpattern)
- [dashOffset](IEditBox.md#dashoffset)
- [miterLimit](IEditBox.md#miterlimit)
- [startArrow](IEditBox.md#startarrow)
- [endArrow](IEditBox.md#endarrow)
- [shadow](IEditBox.md#shadow)
- [innerShadow](IEditBox.md#innershadow)
- [blur](IEditBox.md#blur)
- [backgroundBlur](IEditBox.md#backgroundblur)
- [grayscale](IEditBox.md#grayscale)
- [\_\_](IEditBox.md#__)
- [children](IEditBox.md#children)
- [app](IEditBox.md#app)
- [leafer](IEditBox.md#leafer)
- [parent](IEditBox.md#parent)
- [zoomLayer](IEditBox.md#zoomlayer)
- [isFrame](IEditBox.md#isframe)
- [isOverflow](IEditBox.md#isoverflow)
- [useFastShadow](IEditBox.md#usefastshadow)
- [proxyData](IEditBox.md#proxydata)
- [\_\_proxyData](IEditBox.md#__proxydata)
- [animation](IEditBox.md#animation)
- [animationOut](IEditBox.md#animationout)
- [\_\_box](IEditBox.md#__box)
- [\_\_animate](IEditBox.md#__animate)
- [pen](IEditBox.md#pen)
- [transition](IEditBox.md#transition)
- [transitionOut](IEditBox.md#transitionout)
- [states](IEditBox.md#states)
- [state](IEditBox.md#state)
- [hoverStyle](IEditBox.md#hoverstyle)
- [pressStyle](IEditBox.md#pressstyle)
- [focusStyle](IEditBox.md#focusstyle)
- [selectedStyle](IEditBox.md#selectedstyle)
- [disabledStyle](IEditBox.md#disabledstyle)
- [placeholderStyle](IEditBox.md#placeholderstyle)
- [placeholderColor](IEditBox.md#placeholdercolor)
- [placeholderDelay](IEditBox.md#placeholderdelay)
- [editConfig](IEditBox.md#editconfig)
- [editOuter](IEditBox.md#editouter)
- [editInner](IEditBox.md#editinner)
- [dragging](IEditBox.md#dragging)
- [moving](IEditBox.md#moving)
- [view](IEditBox.md#view)
- [circle](IEditBox.md#circle)
- [rect](IEditBox.md#rect)
- [buttons](IEditBox.md#buttons)
- [resizePoints](IEditBox.md#resizepoints)
- [rotatePoints](IEditBox.md#rotatepoints)
- [resizeLines](IEditBox.md#resizelines)
- [enterPoint](IEditBox.md#enterpoint)
- [dragPoint](IEditBox.md#dragpoint)
- [dragStartData](IEditBox.md#dragstartdata)
- [flipped](IEditBox.md#flipped)
- [flippedX](IEditBox.md#flippedx)
- [flippedY](IEditBox.md#flippedy)
- [flippedOne](IEditBox.md#flippedone)

### Methods

- [resetCustom](IEditBox.md#resetcustom)
- [waitParent](IEditBox.md#waitparent)
- [waitLeafer](IEditBox.md#waitleafer)
- [nextRender](IEditBox.md#nextrender)
- [removeNextRender](IEditBox.md#removenextrender)
- [\_\_bindLeafer](IEditBox.md#__bindleafer)
- [setAttr](IEditBox.md#setattr)
- [getAttr](IEditBox.md#getattr)
- [getComputedAttr](IEditBox.md#getcomputedattr)
- [toString](IEditBox.md#tostring)
- [toSVG](IEditBox.md#tosvg)
- [\_\_SVG](IEditBox.md#__svg)
- [toHTML](IEditBox.md#tohtml)
- [\_\_setAttr](IEditBox.md#__setattr)
- [\_\_getAttr](IEditBox.md#__getattr)
- [setProxyAttr](IEditBox.md#setproxyattr)
- [getProxyAttr](IEditBox.md#getproxyattr)
- [focus](IEditBox.md#focus)
- [updateState](IEditBox.md#updatestate)
- [updateLayout](IEditBox.md#updatelayout)
- [forceUpdate](IEditBox.md#forceupdate)
- [forceRender](IEditBox.md#forcerender)
- [\_\_extraUpdate](IEditBox.md#__extraupdate)
- [\_\_updateWorldMatrix](IEditBox.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IEditBox.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IEditBox.md#__updateworldbounds)
- [\_\_updateLocalBounds](IEditBox.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IEditBox.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IEditBox.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IEditBox.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IEditBox.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IEditBox.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IEditBox.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IEditBox.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IEditBox.md#__updateautolayout)
- [\_\_updateFlowLayout](IEditBox.md#__updateflowlayout)
- [\_\_updateNaturalSize](IEditBox.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IEditBox.md#__updatestrokespread)
- [\_\_updateRenderSpread](IEditBox.md#__updaterenderspread)
- [\_\_onUpdateSize](IEditBox.md#__onupdatesize)
- [\_\_updateEraser](IEditBox.md#__updateeraser)
- [\_\_updateMask](IEditBox.md#__updatemask)
- [\_\_renderMask](IEditBox.md#__rendermask)
- [\_\_renderEraser](IEditBox.md#__rendereraser)
- [\_\_getNowWorld](IEditBox.md#__getnowworld)
- [getTransform](IEditBox.md#gettransform)
- [getBounds](IEditBox.md#getbounds)
- [getLayoutBounds](IEditBox.md#getlayoutbounds)
- [getLayoutPoints](IEditBox.md#getlayoutpoints)
- [getWorldBounds](IEditBox.md#getworldbounds)
- [worldToLocal](IEditBox.md#worldtolocal)
- [localToWorld](IEditBox.md#localtoworld)
- [worldToInner](IEditBox.md#worldtoinner)
- [innerToWorld](IEditBox.md#innertoworld)
- [getBoxPoint](IEditBox.md#getboxpoint)
- [getBoxPointByInner](IEditBox.md#getboxpointbyinner)
- [getInnerPoint](IEditBox.md#getinnerpoint)
- [getInnerPointByBox](IEditBox.md#getinnerpointbybox)
- [getInnerPointByLocal](IEditBox.md#getinnerpointbylocal)
- [getLocalPoint](IEditBox.md#getlocalpoint)
- [getLocalPointByInner](IEditBox.md#getlocalpointbyinner)
- [getPagePoint](IEditBox.md#getpagepoint)
- [getWorldPoint](IEditBox.md#getworldpoint)
- [getWorldPointByBox](IEditBox.md#getworldpointbybox)
- [getWorldPointByLocal](IEditBox.md#getworldpointbylocal)
- [getWorldPointByPage](IEditBox.md#getworldpointbypage)
- [setTransform](IEditBox.md#settransform)
- [transform](IEditBox.md#transform)
- [move](IEditBox.md#move)
- [moveInner](IEditBox.md#moveinner)
- [scaleOf](IEditBox.md#scaleof)
- [rotateOf](IEditBox.md#rotateof)
- [skewOf](IEditBox.md#skewof)
- [transformWorld](IEditBox.md#transformworld)
- [moveWorld](IEditBox.md#moveworld)
- [scaleOfWorld](IEditBox.md#scaleofworld)
- [rotateOfWorld](IEditBox.md#rotateofworld)
- [skewOfWorld](IEditBox.md#skewofworld)
- [flip](IEditBox.md#flip)
- [scaleResize](IEditBox.md#scaleresize)
- [\_\_scaleResize](IEditBox.md#__scaleresize)
- [resizeWidth](IEditBox.md#resizewidth)
- [resizeHeight](IEditBox.md#resizeheight)
- [\_\_hitWorld](IEditBox.md#__hitworld)
- [\_\_hit](IEditBox.md#__hit)
- [\_\_hitFill](IEditBox.md#__hitfill)
- [\_\_hitStroke](IEditBox.md#__hitstroke)
- [\_\_hitPixel](IEditBox.md#__hitpixel)
- [\_\_drawHitPath](IEditBox.md#__drawhitpath)
- [\_\_updateHitCanvas](IEditBox.md#__updatehitcanvas)
- [\_\_render](IEditBox.md#__render)
- [\_\_drawFast](IEditBox.md#__drawfast)
- [\_\_draw](IEditBox.md#__draw)
- [\_\_clip](IEditBox.md#__clip)
- [\_\_renderShape](IEditBox.md#__rendershape)
- [\_\_updateWorldOpacity](IEditBox.md#__updateworldopacity)
- [\_\_updateChange](IEditBox.md#__updatechange)
- [\_\_drawPath](IEditBox.md#__drawpath)
- [\_\_drawRenderPath](IEditBox.md#__drawrenderpath)
- [\_\_updatePath](IEditBox.md#__updatepath)
- [\_\_updateRenderPath](IEditBox.md#__updaterenderpath)
- [getMotionPathData](IEditBox.md#getmotionpathdata)
- [getMotionPoint](IEditBox.md#getmotionpoint)
- [getMotionTotal](IEditBox.md#getmotiontotal)
- [\_\_updateMotionPath](IEditBox.md#__updatemotionpath)
- [\_\_runAnimation](IEditBox.md#__runanimation)
- [\_\_emitLifeEvent](IEditBox.md#__emitlifeevent)
- [\_\_updateSortChildren](IEditBox.md#__updatesortchildren)
- [dropTo](IEditBox.md#dropto)
- [\_\_realSetAttr](IEditBox.md#__realsetattr)
- [destroyEventer](IEditBox.md#destroyeventer)
- [on](IEditBox.md#on)
- [off](IEditBox.md#off)
- [on\_](IEditBox.md#on_)
- [off\_](IEditBox.md#off_)
- [once](IEditBox.md#once)
- [emit](IEditBox.md#emit)
- [emitEvent](IEditBox.md#emitevent)
- [hasEvent](IEditBox.md#hasevent)
- [destroy](IEditBox.md#destroy)
- [pick](IEditBox.md#pick)
- [add](IEditBox.md#add)
- [addAt](IEditBox.md#addat)
- [addAfter](IEditBox.md#addafter)
- [addBefore](IEditBox.md#addbefore)
- [addMany](IEditBox.md#addmany)
- [remove](IEditBox.md#remove)
- [removeAll](IEditBox.md#removeall)
- [clear](IEditBox.md#clear)
- [reset](IEditBox.md#reset)
- [set](IEditBox.md#set)
- [toJSON](IEditBox.md#tojson)
- [get](IEditBox.md#get)
- [createProxyData](IEditBox.md#createproxydata)
- [find](IEditBox.md#find)
- [findTag](IEditBox.md#findtag)
- [findOne](IEditBox.md#findone)
- [findId](IEditBox.md#findid)
- [getPath](IEditBox.md#getpath)
- [getPathString](IEditBox.md#getpathstring)
- [\_\_drawPathByData](IEditBox.md#__drawpathbydata)
- [\_\_drawPathByBox](IEditBox.md#__drawpathbybox)
- [\_\_drawAfterFill](IEditBox.md#__drawafterfill)
- [\_\_drawContent](IEditBox.md#__drawcontent)
- [drawImagePlaceholder](IEditBox.md#drawimageplaceholder)
- [animate](IEditBox.md#animate)
- [killAnimate](IEditBox.md#killanimate)
- [export](IEditBox.md#export)
- [syncExport](IEditBox.md#syncexport)
- [clone](IEditBox.md#clone)
- [getPointStyle](IEditBox.md#getpointstyle)
- [getPointsStyle](IEditBox.md#getpointsstyle)
- [getMiddlePointsStyle](IEditBox.md#getmiddlepointsstyle)
- [load](IEditBox.md#load)
- [update](IEditBox.md#update)
- [unload](IEditBox.md#unload)
- [onArrow](IEditBox.md#onarrow)

## Properties

### editor

• **editor**: [`IEditor`](IEditor.md)

#### Overrides

[IEditBoxBase](IEditBoxBase.md).[editor](IEditBoxBase.md#editor)

#### Defined in

[in/packages/interface/src/editor/IEditBox.ts:5](https://github.com/leaferjs/leafer-in/blob/2d7cc42/packages/interface/src/editor/IEditBox.ts#L5)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[id](IEditBoxBase.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[name](IEditBoxBase.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[className](IEditBoxBase.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[blendMode](IEditBoxBase.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[opacity](IEditBoxBase.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[visible](IEditBoxBase.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[selected](IEditBoxBase.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[disabled](IEditBoxBase.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[locked](IEditBoxBase.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[zIndex](IEditBoxBase.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dim](IEditBoxBase.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dimskip](IEditBoxBase.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[mask](IEditBoxBase.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[eraser](IEditBoxBase.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[filter](IEditBoxBase.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[x](IEditBoxBase.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[y](IEditBoxBase.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[width](IEditBoxBase.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[height](IEditBoxBase.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[scaleX](IEditBoxBase.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[scaleY](IEditBoxBase.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[rotation](IEditBoxBase.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[skewX](IEditBoxBase.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[skewY](IEditBoxBase.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[scale](IEditBoxBase.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[offsetX](IEditBoxBase.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[offsetY](IEditBoxBase.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[scrollX](IEditBoxBase.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[scrollY](IEditBoxBase.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[origin](IEditBoxBase.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[around](IEditBoxBase.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[lazy](IEditBoxBase.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[pixelRatio](IEditBoxBase.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[path](IEditBoxBase.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[windingRule](IEditBoxBase.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[closed](IEditBoxBase.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flow](IEditBoxBase.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[padding](IEditBoxBase.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[gap](IEditBoxBase.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flowAlign](IEditBoxBase.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flowWrap](IEditBoxBase.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[itemBox](IEditBoxBase.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[inFlow](IEditBoxBase.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[autoWidth](IEditBoxBase.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[autoHeight](IEditBoxBase.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[lockRatio](IEditBoxBase.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[autoBox](IEditBoxBase.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[widthRange](IEditBoxBase.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[heightRange](IEditBoxBase.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[draggable](IEditBoxBase.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dragBounds](IEditBoxBase.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[editable](IEditBoxBase.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hittable](IEditBoxBase.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitFill](IEditBoxBase.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitStroke](IEditBoxBase.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitBox](IEditBoxBase.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitChildren](IEditBoxBase.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitSelf](IEditBoxBase.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hitRadius](IEditBoxBase.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[button](IEditBoxBase.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[cursor](IEditBoxBase.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[motionPath](IEditBoxBase.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[motionPrecision](IEditBoxBase.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[motion](IEditBoxBase.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[motionRotation](IEditBoxBase.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[normalStyle](IEditBoxBase.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[event](IEditBoxBase.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[data](IEditBoxBase.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[tag](IEditBoxBase.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__tag](IEditBoxBase.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L439)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[innerName](IEditBoxBase.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__DataProcessor](IEditBoxBase.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__LayoutProcessor](IEditBoxBase.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L443)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[leaferIsCreated](IEditBoxBase.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L450)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[leaferIsReady](IEditBoxBase.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L451)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isApp](IEditBoxBase.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L453)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isLeafer](IEditBoxBase.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L454)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isBranch](IEditBoxBase.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isBranchLeaf](IEditBoxBase.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L456)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isOutside](IEditBoxBase.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L457)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[syncEventer](IEditBoxBase.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L464)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[lockNormalStyle](IEditBoxBase.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__layout](IEditBoxBase.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__world](IEditBoxBase.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__local](IEditBoxBase.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__nowWorld](IEditBoxBase.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L472)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__cameraWorld](IEditBoxBase.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__localMatrix](IEditBoxBase.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L475)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__localBoxBounds](IEditBoxBase.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__worldOpacity](IEditBoxBase.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L478)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[worldTransform](IEditBoxBase.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L480)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[localTransform](IEditBoxBase.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L481)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[boxBounds](IEditBoxBase.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L483)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[renderBounds](IEditBoxBase.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L484)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[worldBoxBounds](IEditBoxBase.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L485)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[worldStrokeBounds](IEditBoxBase.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L486)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[worldRenderBounds](IEditBoxBase.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L487)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[worldOpacity](IEditBoxBase.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__level](IEditBoxBase.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L491)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__tempNumber](IEditBoxBase.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__worldFlipped](IEditBoxBase.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasAutoLayout](IEditBoxBase.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasMotionPath](IEditBoxBase.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasMask](IEditBoxBase.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasEraser](IEditBoxBase.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hitCanvas](IEditBoxBase.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__flowBounds](IEditBoxBase.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__widthGrow](IEditBoxBase.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__heightGrow](IEditBoxBase.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasGrow](IEditBoxBase.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__onlyHitMask](IEditBoxBase.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__ignoreHitWorld](IEditBoxBase.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__inLazyBounds](IEditBoxBase.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L513)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[pathInputed](IEditBoxBase.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L515)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[destroyed](IEditBoxBase.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L517)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[innerId](IEditBoxBase.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__captureMap](IEditBoxBase.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__bubbleMap](IEditBoxBase.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasLocalEvent](IEditBoxBase.md#__haslocalevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__hasWorldEvent](IEditBoxBase.md#__hasworldevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[cornerRadius](IEditBoxBase.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[cornerSmoothing](IEditBoxBase.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[fill](IEditBoxBase.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[stroke](IEditBoxBase.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[strokeAlign](IEditBoxBase.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[strokeWidth](IEditBoxBase.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[strokeWidthFixed](IEditBoxBase.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[strokeCap](IEditBoxBase.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[strokeJoin](IEditBoxBase.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dashPattern](IEditBoxBase.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dashOffset](IEditBoxBase.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[miterLimit](IEditBoxBase.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[startArrow](IEditBoxBase.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[endArrow](IEditBoxBase.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[shadow](IEditBoxBase.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[innerShadow](IEditBoxBase.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[blur](IEditBoxBase.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[backgroundBlur](IEditBoxBase.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[grayscale](IEditBoxBase.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__](IEditBoxBase.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:357](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L357)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[children](IEditBoxBase.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:358](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L358)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[app](IEditBoxBase.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L376)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[leafer](IEditBoxBase.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L377)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[parent](IEditBoxBase.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L378)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[zoomLayer](IEditBoxBase.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L379)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isFrame](IEditBoxBase.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L380)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[isOverflow](IEditBoxBase.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L381)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[useFastShadow](IEditBoxBase.md#usefastshadow)

#### Defined in

[ui/packages/interface/src/IUI.ts:382](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L382)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[proxyData](IEditBoxBase.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L384)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__proxyData](IEditBoxBase.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L385)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[animation](IEditBoxBase.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L387)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[animationOut](IEditBoxBase.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L388)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__box](IEditBoxBase.md#__box)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L392)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__animate](IEditBoxBase.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:393](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L393)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[pen](IEditBoxBase.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L395)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[transition](IEditBoxBase.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L448)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[transitionOut](IEditBoxBase.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L449)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[states](IEditBoxBase.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L451)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[state](IEditBoxBase.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:452](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L452)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[hoverStyle](IEditBoxBase.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L454)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[pressStyle](IEditBoxBase.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L455)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[focusStyle](IEditBoxBase.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L456)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[selectedStyle](IEditBoxBase.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L457)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[disabledStyle](IEditBoxBase.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L458)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[placeholderStyle](IEditBoxBase.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L459)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[placeholderColor](IEditBoxBase.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L460)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[placeholderDelay](IEditBoxBase.md#placeholderdelay)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L461)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[editConfig](IEditBoxBase.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L463)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[editOuter](IEditBoxBase.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L464)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[editInner](IEditBoxBase.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L465)

___

### dragging

• **dragging**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dragging](IEditBoxBase.md#dragging)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:193](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L193)

___

### moving

• **moving**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[moving](IEditBoxBase.md#moving)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:194](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L194)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[view](IEditBoxBase.md#view)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:196](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L196)

___

### circle

• **circle**: [`IEditPoint`](IEditPoint.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[circle](IEditBoxBase.md#circle)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:198](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L198)

___

### rect

• **rect**: [`IRect`](IRect.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[rect](IEditBoxBase.md#rect)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:199](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L199)

___

### buttons

• **buttons**: [`IGroup`](IGroup.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[buttons](IEditBoxBase.md#buttons)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:201](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L201)

___

### resizePoints

• **resizePoints**: [`IEditPoint`](IEditPoint.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[resizePoints](IEditBoxBase.md#resizepoints)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:203](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L203)

___

### rotatePoints

• **rotatePoints**: [`IEditPoint`](IEditPoint.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[rotatePoints](IEditBoxBase.md#rotatepoints)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:204](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L204)

___

### resizeLines

• **resizeLines**: [`IEditPoint`](IEditPoint.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[resizeLines](IEditBoxBase.md#resizelines)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:205](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L205)

___

### enterPoint

• **enterPoint**: [`IEditPoint`](IEditPoint.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[enterPoint](IEditBoxBase.md#enterpoint)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:207](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L207)

___

### dragPoint

• **dragPoint**: [`IEditPoint`](IEditPoint.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dragPoint](IEditBoxBase.md#dragpoint)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:208](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L208)

___

### dragStartData

• **dragStartData**: [`IEditorDragStartData`](IEditorDragStartData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[dragStartData](IEditBoxBase.md#dragstartdata)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:210](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L210)

___

### flipped

• `Readonly` **flipped**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flipped](IEditBoxBase.md#flipped)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:212](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L212)

___

### flippedX

• `Readonly` **flippedX**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flippedX](IEditBoxBase.md#flippedx)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:213](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L213)

___

### flippedY

• `Readonly` **flippedY**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flippedY](IEditBoxBase.md#flippedy)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:214](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L214)

___

### flippedOne

• `Readonly` **flippedOne**: `boolean`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[flippedOne](IEditBoxBase.md#flippedone)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:215](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L215)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[resetCustom](IEditBoxBase.md#resetcustom)

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

[IEditBoxBase](IEditBoxBase.md).[waitParent](IEditBoxBase.md#waitparent)

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

[IEditBoxBase](IEditBoxBase.md).[waitLeafer](IEditBoxBase.md#waitleafer)

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

[IEditBoxBase](IEditBoxBase.md).[nextRender](IEditBoxBase.md#nextrender)

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

[IEditBoxBase](IEditBoxBase.md).[removeNextRender](IEditBoxBase.md#removenextrender)

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

[IEditBoxBase](IEditBoxBase.md).[__bindLeafer](IEditBoxBase.md#__bindleafer)

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

[IEditBoxBase](IEditBoxBase.md).[setAttr](IEditBoxBase.md#setattr)

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

[IEditBoxBase](IEditBoxBase.md).[getAttr](IEditBoxBase.md#getattr)

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

[IEditBoxBase](IEditBoxBase.md).[getComputedAttr](IEditBoxBase.md#getcomputedattr)

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

[IEditBoxBase](IEditBoxBase.md).[toString](IEditBoxBase.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L536)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[toSVG](IEditBoxBase.md#tosvg)

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

[IEditBoxBase](IEditBoxBase.md).[__SVG](IEditBoxBase.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L538)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[toHTML](IEditBoxBase.md#tohtml)

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

[IEditBoxBase](IEditBoxBase.md).[__setAttr](IEditBoxBase.md#__setattr)

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

[IEditBoxBase](IEditBoxBase.md).[__getAttr](IEditBoxBase.md#__getattr)

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

[IEditBoxBase](IEditBoxBase.md).[setProxyAttr](IEditBoxBase.md#setproxyattr)

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

[IEditBoxBase](IEditBoxBase.md).[getProxyAttr](IEditBoxBase.md#getproxyattr)

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

[IEditBoxBase](IEditBoxBase.md).[focus](IEditBoxBase.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L556)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[updateState](IEditBoxBase.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L558)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[updateLayout](IEditBoxBase.md#updatelayout)

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

[IEditBoxBase](IEditBoxBase.md).[forceUpdate](IEditBoxBase.md#forceupdate)

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

[IEditBoxBase](IEditBoxBase.md).[forceRender](IEditBoxBase.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__extraUpdate](IEditBoxBase.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L563)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateWorldMatrix](IEditBoxBase.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateLocalMatrix](IEditBoxBase.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateWorldBounds](IEditBoxBase.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateLocalBounds](IEditBoxBase.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateLocalBoxBounds](IEditBoxBase.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateLocalStrokeBounds](IEditBoxBase.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateLocalRenderBounds](IEditBoxBase.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateContentBounds](IEditBoxBase.md#__updatecontentbounds)

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

[IEditBoxBase](IEditBoxBase.md).[__updateBoxBounds](IEditBoxBase.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateStrokeBounds](IEditBoxBase.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateRenderBounds](IEditBoxBase.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateAutoLayout](IEditBoxBase.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateFlowLayout](IEditBoxBase.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateNaturalSize](IEditBoxBase.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateStrokeSpread](IEditBoxBase.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateRenderSpread](IEditBoxBase.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__onUpdateSize](IEditBoxBase.md#__onupdatesize)

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

[IEditBoxBase](IEditBoxBase.md).[__updateEraser](IEditBoxBase.md#__updateeraser)

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

[IEditBoxBase](IEditBoxBase.md).[__updateMask](IEditBoxBase.md#__updatemask)

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

[IEditBoxBase](IEditBoxBase.md).[__renderMask](IEditBoxBase.md#__rendermask)

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

[IEditBoxBase](IEditBoxBase.md).[__renderEraser](IEditBoxBase.md#__rendereraser)

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

[IEditBoxBase](IEditBoxBase.md).[__getNowWorld](IEditBoxBase.md#__getnowworld)

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

[IEditBoxBase](IEditBoxBase.md).[getTransform](IEditBoxBase.md#gettransform)

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

[IEditBoxBase](IEditBoxBase.md).[getBounds](IEditBoxBase.md#getbounds)

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

[IEditBoxBase](IEditBoxBase.md).[getLayoutBounds](IEditBoxBase.md#getlayoutbounds)

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

[IEditBoxBase](IEditBoxBase.md).[getLayoutPoints](IEditBoxBase.md#getlayoutpoints)

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

[IEditBoxBase](IEditBoxBase.md).[getWorldBounds](IEditBoxBase.md#getworldbounds)

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

[IEditBoxBase](IEditBoxBase.md).[worldToLocal](IEditBoxBase.md#worldtolocal)

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

[IEditBoxBase](IEditBoxBase.md).[localToWorld](IEditBoxBase.md#localtoworld)

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

[IEditBoxBase](IEditBoxBase.md).[worldToInner](IEditBoxBase.md#worldtoinner)

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

[IEditBoxBase](IEditBoxBase.md).[innerToWorld](IEditBoxBase.md#innertoworld)

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

[IEditBoxBase](IEditBoxBase.md).[getBoxPoint](IEditBoxBase.md#getboxpoint)

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

[IEditBoxBase](IEditBoxBase.md).[getBoxPointByInner](IEditBoxBase.md#getboxpointbyinner)

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

[IEditBoxBase](IEditBoxBase.md).[getInnerPoint](IEditBoxBase.md#getinnerpoint)

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

[IEditBoxBase](IEditBoxBase.md).[getInnerPointByBox](IEditBoxBase.md#getinnerpointbybox)

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

[IEditBoxBase](IEditBoxBase.md).[getInnerPointByLocal](IEditBoxBase.md#getinnerpointbylocal)

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

[IEditBoxBase](IEditBoxBase.md).[getLocalPoint](IEditBoxBase.md#getlocalpoint)

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

[IEditBoxBase](IEditBoxBase.md).[getLocalPointByInner](IEditBoxBase.md#getlocalpointbyinner)

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

[IEditBoxBase](IEditBoxBase.md).[getPagePoint](IEditBoxBase.md#getpagepoint)

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

[IEditBoxBase](IEditBoxBase.md).[getWorldPoint](IEditBoxBase.md#getworldpoint)

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

[IEditBoxBase](IEditBoxBase.md).[getWorldPointByBox](IEditBoxBase.md#getworldpointbybox)

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

[IEditBoxBase](IEditBoxBase.md).[getWorldPointByLocal](IEditBoxBase.md#getworldpointbylocal)

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

[IEditBoxBase](IEditBoxBase.md).[getWorldPointByPage](IEditBoxBase.md#getworldpointbypage)

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

[IEditBoxBase](IEditBoxBase.md).[setTransform](IEditBoxBase.md#settransform)

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

[IEditBoxBase](IEditBoxBase.md).[transform](IEditBoxBase.md#transform)

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

[IEditBoxBase](IEditBoxBase.md).[move](IEditBoxBase.md#move)

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

[IEditBoxBase](IEditBoxBase.md).[moveInner](IEditBoxBase.md#moveinner)

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

[IEditBoxBase](IEditBoxBase.md).[scaleOf](IEditBoxBase.md#scaleof)

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

[IEditBoxBase](IEditBoxBase.md).[rotateOf](IEditBoxBase.md#rotateof)

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

[IEditBoxBase](IEditBoxBase.md).[skewOf](IEditBoxBase.md#skewof)

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

[IEditBoxBase](IEditBoxBase.md).[transformWorld](IEditBoxBase.md#transformworld)

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

[IEditBoxBase](IEditBoxBase.md).[moveWorld](IEditBoxBase.md#moveworld)

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

[IEditBoxBase](IEditBoxBase.md).[scaleOfWorld](IEditBoxBase.md#scaleofworld)

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

[IEditBoxBase](IEditBoxBase.md).[rotateOfWorld](IEditBoxBase.md#rotateofworld)

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

[IEditBoxBase](IEditBoxBase.md).[skewOfWorld](IEditBoxBase.md#skewofworld)

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

[IEditBoxBase](IEditBoxBase.md).[flip](IEditBoxBase.md#flip)

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

[IEditBoxBase](IEditBoxBase.md).[scaleResize](IEditBoxBase.md#scaleresize)

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

[IEditBoxBase](IEditBoxBase.md).[__scaleResize](IEditBoxBase.md#__scaleresize)

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

[IEditBoxBase](IEditBoxBase.md).[resizeWidth](IEditBoxBase.md#resizewidth)

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

[IEditBoxBase](IEditBoxBase.md).[resizeHeight](IEditBoxBase.md#resizeheight)

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

[IEditBoxBase](IEditBoxBase.md).[__hitWorld](IEditBoxBase.md#__hitworld)

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

[IEditBoxBase](IEditBoxBase.md).[__hit](IEditBoxBase.md#__hit)

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

[IEditBoxBase](IEditBoxBase.md).[__hitFill](IEditBoxBase.md#__hitfill)

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

[IEditBoxBase](IEditBoxBase.md).[__hitStroke](IEditBoxBase.md#__hitstroke)

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

[IEditBoxBase](IEditBoxBase.md).[__hitPixel](IEditBoxBase.md#__hitpixel)

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

[IEditBoxBase](IEditBoxBase.md).[__drawHitPath](IEditBoxBase.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateHitCanvas](IEditBoxBase.md#__updatehitcanvas)

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

[IEditBoxBase](IEditBoxBase.md).[__render](IEditBoxBase.md#__render)

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

[IEditBoxBase](IEditBoxBase.md).[__drawFast](IEditBoxBase.md#__drawfast)

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

[IEditBoxBase](IEditBoxBase.md).[__draw](IEditBoxBase.md#__draw)

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

[IEditBoxBase](IEditBoxBase.md).[__clip](IEditBoxBase.md#__clip)

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

[IEditBoxBase](IEditBoxBase.md).[__renderShape](IEditBoxBase.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L665)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateWorldOpacity](IEditBoxBase.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateChange](IEditBoxBase.md#__updatechange)

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

[IEditBoxBase](IEditBoxBase.md).[__drawPath](IEditBoxBase.md#__drawpath)

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

[IEditBoxBase](IEditBoxBase.md).[__drawRenderPath](IEditBoxBase.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L672)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updatePath](IEditBoxBase.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L673)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateRenderPath](IEditBoxBase.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L674)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[getMotionPathData](IEditBoxBase.md#getmotionpathdata)

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

[IEditBoxBase](IEditBoxBase.md).[getMotionPoint](IEditBoxBase.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L678)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[getMotionTotal](IEditBoxBase.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateMotionPath](IEditBoxBase.md#__updatemotionpath)

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

[IEditBoxBase](IEditBoxBase.md).[__runAnimation](IEditBoxBase.md#__runanimation)

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

[IEditBoxBase](IEditBoxBase.md).[__emitLifeEvent](IEditBoxBase.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L685)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[__updateSortChildren](IEditBoxBase.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/ILeaf.ts#L690)

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

[IEditBoxBase](IEditBoxBase.md).[dropTo](IEditBoxBase.md#dropto)

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

[IEditBoxBase](IEditBoxBase.md).[__realSetAttr](IEditBoxBase.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[destroyEventer](IEditBoxBase.md#destroyeventer)

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

[IEditBoxBase](IEditBoxBase.md).[on](IEditBoxBase.md#on)

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

[IEditBoxBase](IEditBoxBase.md).[off](IEditBoxBase.md#off)

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

[IEditBoxBase](IEditBoxBase.md).[on_](IEditBoxBase.md#on_)

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

[IEditBoxBase](IEditBoxBase.md).[off_](IEditBoxBase.md#off_)

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

[IEditBoxBase](IEditBoxBase.md).[once](IEditBoxBase.md#once)

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

[IEditBoxBase](IEditBoxBase.md).[emit](IEditBoxBase.md#emit)

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

[IEditBoxBase](IEditBoxBase.md).[emitEvent](IEditBoxBase.md#emitevent)

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

[IEditBoxBase](IEditBoxBase.md).[hasEvent](IEditBoxBase.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[destroy](IEditBoxBase.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/985f85e/packages/interface/src/event/IEventer.ts#L58)

___

### pick

▸ **pick**(`hitPoint`, `options?`): [`IPickResult`](IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`IPickResult`](IPickResult.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[pick](IEditBoxBase.md#pick)

#### Defined in

[ui/packages/interface/src/IUI.ts:359](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L359)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `index?` | `number` |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[add](IEditBoxBase.md#add)

#### Defined in

[ui/packages/interface/src/IUI.ts:360](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L360)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[addAt](IEditBoxBase.md#addat)

#### Defined in

[ui/packages/interface/src/IUI.ts:361](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L361)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `after` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[addAfter](IEditBoxBase.md#addafter)

#### Defined in

[ui/packages/interface/src/IUI.ts:362](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L362)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `before` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[addBefore](IEditBoxBase.md#addbefore)

#### Defined in

[ui/packages/interface/src/IUI.ts:363](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L363)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | [`ILeaf`](ILeaf.md)[] \| [`IUIInputData`](IUIInputData.md)[] |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[addMany](IEditBoxBase.md#addmany)

#### Defined in

[ui/packages/interface/src/IUI.ts:364](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L364)

___

### remove

▸ **remove**(`child?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IUI`](IUI.md) \| [`IFindUIMethod`](IFindUIMethod.md) |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[remove](IEditBoxBase.md#remove)

#### Defined in

[ui/packages/interface/src/IUI.ts:365](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L365)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[removeAll](IEditBoxBase.md#removeall)

#### Defined in

[ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L366)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[clear](IEditBoxBase.md#clear)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L367)

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

[IEditBoxBase](IEditBoxBase.md).[reset](IEditBoxBase.md#reset)

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

[IEditBoxBase](IEditBoxBase.md).[set](IEditBoxBase.md#set)

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

[IEditBoxBase](IEditBoxBase.md).[toJSON](IEditBoxBase.md#tojson)

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

[IEditBoxBase](IEditBoxBase.md).[get](IEditBoxBase.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L402)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[createProxyData](IEditBoxBase.md#createproxydata)

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

[IEditBoxBase](IEditBoxBase.md).[find](IEditBoxBase.md#find)

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

[IEditBoxBase](IEditBoxBase.md).[findTag](IEditBoxBase.md#findtag)

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

[IEditBoxBase](IEditBoxBase.md).[findOne](IEditBoxBase.md#findone)

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

[IEditBoxBase](IEditBoxBase.md).[findId](IEditBoxBase.md#findid)

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

[IEditBoxBase](IEditBoxBase.md).[getPath](IEditBoxBase.md#getpath)

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

[IEditBoxBase](IEditBoxBase.md).[getPathString](IEditBoxBase.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L411)

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

[IEditBoxBase](IEditBoxBase.md).[__drawPathByData](IEditBoxBase.md#__drawpathbydata)

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

[IEditBoxBase](IEditBoxBase.md).[__drawPathByBox](IEditBoxBase.md#__drawpathbybox)

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

[IEditBoxBase](IEditBoxBase.md).[__drawAfterFill](IEditBoxBase.md#__drawafterfill)

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

[IEditBoxBase](IEditBoxBase.md).[__drawContent](IEditBoxBase.md#__drawcontent)

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

[IEditBoxBase](IEditBoxBase.md).[drawImagePlaceholder](IEditBoxBase.md#drawimageplaceholder)

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

[IEditBoxBase](IEditBoxBase.md).[animate](IEditBoxBase.md#animate)

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

[IEditBoxBase](IEditBoxBase.md).[killAnimate](IEditBoxBase.md#killanimate)

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

[IEditBoxBase](IEditBoxBase.md).[export](IEditBoxBase.md#export)

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

[IEditBoxBase](IEditBoxBase.md).[syncExport](IEditBoxBase.md#syncexport)

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

[IEditBoxBase](IEditBoxBase.md).[clone](IEditBoxBase.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/IUI.ts#L427)

___

### getPointStyle

▸ **getPointStyle**(`userStyle?`): [`IBoxInputData`](IBoxInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userStyle?` | [`IBoxInputData`](IBoxInputData.md) |

#### Returns

[`IBoxInputData`](IBoxInputData.md)

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[getPointStyle](IEditBoxBase.md#getpointstyle)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:217](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L217)

___

### getPointsStyle

▸ **getPointsStyle**(): [`IBoxInputData`](IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](IBoxInputData.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[getPointsStyle](IEditBoxBase.md#getpointsstyle)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:218](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L218)

___

### getMiddlePointsStyle

▸ **getMiddlePointsStyle**(): [`IBoxInputData`](IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](IBoxInputData.md)[]

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[getMiddlePointsStyle](IEditBoxBase.md#getmiddlepointsstyle)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:219](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L219)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[load](IEditBoxBase.md#load)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:221](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L221)

___

### update

▸ **update**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[update](IEditBoxBase.md#update)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:222](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L222)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[unload](IEditBoxBase.md#unload)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:223](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L223)

___

### onArrow

▸ **onArrow**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Inherited from

[IEditBoxBase](IEditBoxBase.md).[onArrow](IEditBoxBase.md#onarrow)

#### Defined in

[ui/packages/interface/src/editor/IEditor.ts:225](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/interface/src/editor/IEditor.ts#L225)
