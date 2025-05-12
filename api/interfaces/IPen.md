# Interface: IPen

## Hierarchy

- [`IGroup`](IGroup.md)

- [`IPathCreator`](IPathCreator.md)

  ↳ **`IPen`**

## Implemented by

- [`Pen`](../classes/Pen.md)

## Table of contents

### Properties

- [id](IPen.md#id)
- [name](IPen.md#name)
- [className](IPen.md#classname)
- [blendMode](IPen.md#blendmode)
- [opacity](IPen.md#opacity)
- [visible](IPen.md#visible)
- [selected](IPen.md#selected)
- [disabled](IPen.md#disabled)
- [locked](IPen.md#locked)
- [zIndex](IPen.md#zindex)
- [dim](IPen.md#dim)
- [dimskip](IPen.md#dimskip)
- [mask](IPen.md#mask)
- [eraser](IPen.md#eraser)
- [filter](IPen.md#filter)
- [x](IPen.md#x)
- [y](IPen.md#y)
- [width](IPen.md#width)
- [height](IPen.md#height)
- [scaleX](IPen.md#scalex)
- [scaleY](IPen.md#scaley)
- [rotation](IPen.md#rotation)
- [skewX](IPen.md#skewx)
- [skewY](IPen.md#skewy)
- [scale](IPen.md#scale)
- [offsetX](IPen.md#offsetx)
- [offsetY](IPen.md#offsety)
- [scrollX](IPen.md#scrollx)
- [scrollY](IPen.md#scrolly)
- [origin](IPen.md#origin)
- [around](IPen.md#around)
- [lazy](IPen.md#lazy)
- [pixelRatio](IPen.md#pixelratio)
- [windingRule](IPen.md#windingrule)
- [closed](IPen.md#closed)
- [flow](IPen.md#flow)
- [padding](IPen.md#padding)
- [gap](IPen.md#gap)
- [flowAlign](IPen.md#flowalign)
- [flowWrap](IPen.md#flowwrap)
- [itemBox](IPen.md#itembox)
- [inFlow](IPen.md#inflow)
- [autoWidth](IPen.md#autowidth)
- [autoHeight](IPen.md#autoheight)
- [lockRatio](IPen.md#lockratio)
- [autoBox](IPen.md#autobox)
- [widthRange](IPen.md#widthrange)
- [heightRange](IPen.md#heightrange)
- [draggable](IPen.md#draggable)
- [dragBounds](IPen.md#dragbounds)
- [editable](IPen.md#editable)
- [hittable](IPen.md#hittable)
- [hitFill](IPen.md#hitfill)
- [hitStroke](IPen.md#hitstroke)
- [hitBox](IPen.md#hitbox)
- [hitChildren](IPen.md#hitchildren)
- [hitSelf](IPen.md#hitself)
- [hitRadius](IPen.md#hitradius)
- [button](IPen.md#button)
- [cursor](IPen.md#cursor)
- [motionPath](IPen.md#motionpath)
- [motionPrecision](IPen.md#motionprecision)
- [motion](IPen.md#motion)
- [motionRotation](IPen.md#motionrotation)
- [normalStyle](IPen.md#normalstyle)
- [event](IPen.md#event)
- [data](IPen.md#data)
- [tag](IPen.md#tag)
- [\_\_tag](IPen.md#__tag)
- [innerName](IPen.md#innername)
- [\_\_DataProcessor](IPen.md#__dataprocessor)
- [\_\_LayoutProcessor](IPen.md#__layoutprocessor)
- [leaferIsCreated](IPen.md#leaferiscreated)
- [leaferIsReady](IPen.md#leaferisready)
- [isApp](IPen.md#isapp)
- [isLeafer](IPen.md#isleafer)
- [isBranch](IPen.md#isbranch)
- [isBranchLeaf](IPen.md#isbranchleaf)
- [isOutside](IPen.md#isoutside)
- [syncEventer](IPen.md#synceventer)
- [lockNormalStyle](IPen.md#locknormalstyle)
- [\_\_layout](IPen.md#__layout)
- [\_\_world](IPen.md#__world)
- [\_\_local](IPen.md#__local)
- [\_\_nowWorld](IPen.md#__nowworld)
- [\_\_cameraWorld](IPen.md#__cameraworld)
- [\_\_localMatrix](IPen.md#__localmatrix)
- [\_\_localBoxBounds](IPen.md#__localboxbounds)
- [\_\_worldOpacity](IPen.md#__worldopacity)
- [worldTransform](IPen.md#worldtransform)
- [localTransform](IPen.md#localtransform)
- [boxBounds](IPen.md#boxbounds)
- [renderBounds](IPen.md#renderbounds)
- [worldBoxBounds](IPen.md#worldboxbounds)
- [worldStrokeBounds](IPen.md#worldstrokebounds)
- [worldRenderBounds](IPen.md#worldrenderbounds)
- [worldOpacity](IPen.md#worldopacity)
- [\_\_level](IPen.md#__level)
- [\_\_tempNumber](IPen.md#__tempnumber)
- [\_\_worldFlipped](IPen.md#__worldflipped)
- [\_\_hasAutoLayout](IPen.md#__hasautolayout)
- [\_\_hasMotionPath](IPen.md#__hasmotionpath)
- [\_\_hasMask](IPen.md#__hasmask)
- [\_\_hasEraser](IPen.md#__haseraser)
- [\_\_hitCanvas](IPen.md#__hitcanvas)
- [\_\_flowBounds](IPen.md#__flowbounds)
- [\_\_widthGrow](IPen.md#__widthgrow)
- [\_\_heightGrow](IPen.md#__heightgrow)
- [\_\_hasGrow](IPen.md#__hasgrow)
- [\_\_onlyHitMask](IPen.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IPen.md#__ignorehitworld)
- [\_\_inLazyBounds](IPen.md#__inlazybounds)
- [pathInputed](IPen.md#pathinputed)
- [destroyed](IPen.md#destroyed)
- [innerId](IPen.md#innerid)
- [\_\_captureMap](IPen.md#__capturemap)
- [\_\_bubbleMap](IPen.md#__bubblemap)
- [\_\_path](IPen.md#__path)
- [cornerRadius](IPen.md#cornerradius)
- [cornerSmoothing](IPen.md#cornersmoothing)
- [fill](IPen.md#fill)
- [stroke](IPen.md#stroke)
- [strokeAlign](IPen.md#strokealign)
- [strokeWidth](IPen.md#strokewidth)
- [strokeWidthFixed](IPen.md#strokewidthfixed)
- [strokeCap](IPen.md#strokecap)
- [strokeJoin](IPen.md#strokejoin)
- [dashPattern](IPen.md#dashpattern)
- [dashOffset](IPen.md#dashoffset)
- [miterLimit](IPen.md#miterlimit)
- [startArrow](IPen.md#startarrow)
- [endArrow](IPen.md#endarrow)
- [shadow](IPen.md#shadow)
- [innerShadow](IPen.md#innershadow)
- [blur](IPen.md#blur)
- [backgroundBlur](IPen.md#backgroundblur)
- [grayscale](IPen.md#grayscale)
- [\_\_](IPen.md#__)
- [pathElement](IPen.md#pathelement)
- [pathStyle](IPen.md#pathstyle)
- [path](IPen.md#path)
- [children](IPen.md#children)
- [app](IPen.md#app)
- [leafer](IPen.md#leafer)
- [parent](IPen.md#parent)
- [zoomLayer](IPen.md#zoomlayer)
- [isFrame](IPen.md#isframe)
- [isOverflow](IPen.md#isoverflow)
- [proxyData](IPen.md#proxydata)
- [\_\_proxyData](IPen.md#__proxydata)
- [animation](IPen.md#animation)
- [animationOut](IPen.md#animationout)
- [\_\_box](IPen.md#__box)
- [\_\_animate](IPen.md#__animate)
- [pen](IPen.md#pen)
- [transition](IPen.md#transition)
- [transitionOut](IPen.md#transitionout)
- [states](IPen.md#states)
- [state](IPen.md#state)
- [hoverStyle](IPen.md#hoverstyle)
- [pressStyle](IPen.md#pressstyle)
- [focusStyle](IPen.md#focusstyle)
- [selectedStyle](IPen.md#selectedstyle)
- [disabledStyle](IPen.md#disabledstyle)
- [placeholderStyle](IPen.md#placeholderstyle)
- [placeholderColor](IPen.md#placeholdercolor)
- [editConfig](IPen.md#editconfig)
- [editOuter](IPen.md#editouter)
- [editInner](IPen.md#editinner)

### Methods

- [resetCustom](IPen.md#resetcustom)
- [waitParent](IPen.md#waitparent)
- [waitLeafer](IPen.md#waitleafer)
- [nextRender](IPen.md#nextrender)
- [removeNextRender](IPen.md#removenextrender)
- [\_\_bindLeafer](IPen.md#__bindleafer)
- [setAttr](IPen.md#setattr)
- [getAttr](IPen.md#getattr)
- [getComputedAttr](IPen.md#getcomputedattr)
- [toString](IPen.md#tostring)
- [toSVG](IPen.md#tosvg)
- [\_\_SVG](IPen.md#__svg)
- [toHTML](IPen.md#tohtml)
- [\_\_setAttr](IPen.md#__setattr)
- [\_\_getAttr](IPen.md#__getattr)
- [setProxyAttr](IPen.md#setproxyattr)
- [getProxyAttr](IPen.md#getproxyattr)
- [focus](IPen.md#focus)
- [updateState](IPen.md#updatestate)
- [updateLayout](IPen.md#updatelayout)
- [forceUpdate](IPen.md#forceupdate)
- [forceRender](IPen.md#forcerender)
- [\_\_extraUpdate](IPen.md#__extraupdate)
- [\_\_updateWorldMatrix](IPen.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IPen.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IPen.md#__updateworldbounds)
- [\_\_updateLocalBounds](IPen.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IPen.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IPen.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IPen.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IPen.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IPen.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IPen.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IPen.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IPen.md#__updateautolayout)
- [\_\_updateFlowLayout](IPen.md#__updateflowlayout)
- [\_\_updateNaturalSize](IPen.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IPen.md#__updatestrokespread)
- [\_\_updateRenderSpread](IPen.md#__updaterenderspread)
- [\_\_onUpdateSize](IPen.md#__onupdatesize)
- [\_\_updateEraser](IPen.md#__updateeraser)
- [\_\_updateMask](IPen.md#__updatemask)
- [\_\_renderMask](IPen.md#__rendermask)
- [\_\_renderEraser](IPen.md#__rendereraser)
- [\_\_getNowWorld](IPen.md#__getnowworld)
- [getTransform](IPen.md#gettransform)
- [getBounds](IPen.md#getbounds)
- [getLayoutBounds](IPen.md#getlayoutbounds)
- [getLayoutPoints](IPen.md#getlayoutpoints)
- [getWorldBounds](IPen.md#getworldbounds)
- [worldToLocal](IPen.md#worldtolocal)
- [localToWorld](IPen.md#localtoworld)
- [worldToInner](IPen.md#worldtoinner)
- [innerToWorld](IPen.md#innertoworld)
- [getBoxPoint](IPen.md#getboxpoint)
- [getBoxPointByInner](IPen.md#getboxpointbyinner)
- [getInnerPoint](IPen.md#getinnerpoint)
- [getInnerPointByBox](IPen.md#getinnerpointbybox)
- [getInnerPointByLocal](IPen.md#getinnerpointbylocal)
- [getLocalPoint](IPen.md#getlocalpoint)
- [getLocalPointByInner](IPen.md#getlocalpointbyinner)
- [getPagePoint](IPen.md#getpagepoint)
- [getWorldPoint](IPen.md#getworldpoint)
- [getWorldPointByBox](IPen.md#getworldpointbybox)
- [getWorldPointByLocal](IPen.md#getworldpointbylocal)
- [getWorldPointByPage](IPen.md#getworldpointbypage)
- [setTransform](IPen.md#settransform)
- [transform](IPen.md#transform)
- [move](IPen.md#move)
- [moveInner](IPen.md#moveinner)
- [scaleOf](IPen.md#scaleof)
- [rotateOf](IPen.md#rotateof)
- [skewOf](IPen.md#skewof)
- [transformWorld](IPen.md#transformworld)
- [moveWorld](IPen.md#moveworld)
- [scaleOfWorld](IPen.md#scaleofworld)
- [rotateOfWorld](IPen.md#rotateofworld)
- [skewOfWorld](IPen.md#skewofworld)
- [flip](IPen.md#flip)
- [scaleResize](IPen.md#scaleresize)
- [\_\_scaleResize](IPen.md#__scaleresize)
- [resizeWidth](IPen.md#resizewidth)
- [resizeHeight](IPen.md#resizeheight)
- [\_\_hitWorld](IPen.md#__hitworld)
- [\_\_hit](IPen.md#__hit)
- [\_\_hitFill](IPen.md#__hitfill)
- [\_\_hitStroke](IPen.md#__hitstroke)
- [\_\_hitPixel](IPen.md#__hitpixel)
- [\_\_drawHitPath](IPen.md#__drawhitpath)
- [\_\_updateHitCanvas](IPen.md#__updatehitcanvas)
- [\_\_render](IPen.md#__render)
- [\_\_drawFast](IPen.md#__drawfast)
- [\_\_draw](IPen.md#__draw)
- [\_\_clip](IPen.md#__clip)
- [\_\_renderShape](IPen.md#__rendershape)
- [\_\_updateWorldOpacity](IPen.md#__updateworldopacity)
- [\_\_updateChange](IPen.md#__updatechange)
- [\_\_drawPath](IPen.md#__drawpath)
- [\_\_drawRenderPath](IPen.md#__drawrenderpath)
- [\_\_updatePath](IPen.md#__updatepath)
- [\_\_updateRenderPath](IPen.md#__updaterenderpath)
- [getMotionPathData](IPen.md#getmotionpathdata)
- [getMotionPoint](IPen.md#getmotionpoint)
- [getMotionTotal](IPen.md#getmotiontotal)
- [\_\_updateMotionPath](IPen.md#__updatemotionpath)
- [\_\_runAnimation](IPen.md#__runanimation)
- [\_\_emitLifeEvent](IPen.md#__emitlifeevent)
- [\_\_updateSortChildren](IPen.md#__updatesortchildren)
- [dropTo](IPen.md#dropto)
- [\_\_realSetAttr](IPen.md#__realsetattr)
- [destroyEventer](IPen.md#destroyeventer)
- [on](IPen.md#on)
- [off](IPen.md#off)
- [on\_](IPen.md#on_)
- [off\_](IPen.md#off_)
- [once](IPen.md#once)
- [emit](IPen.md#emit)
- [emitEvent](IPen.md#emitevent)
- [hasEvent](IPen.md#hasevent)
- [destroy](IPen.md#destroy)
- [beginPath](IPen.md#beginpath)
- [moveTo](IPen.md#moveto)
- [lineTo](IPen.md#lineto)
- [bezierCurveTo](IPen.md#beziercurveto)
- [quadraticCurveTo](IPen.md#quadraticcurveto)
- [closePath](IPen.md#closepath)
- [arc](IPen.md#arc)
- [arcTo](IPen.md#arcto)
- [ellipse](IPen.md#ellipse)
- [rect](IPen.md#rect)
- [roundRect](IPen.md#roundrect)
- [drawEllipse](IPen.md#drawellipse)
- [drawArc](IPen.md#drawarc)
- [drawPoints](IPen.md#drawpoints)
- [clearPath](IPen.md#clearpath)
- [paint](IPen.md#paint)
- [pick](IPen.md#pick)
- [add](IPen.md#add)
- [addAt](IPen.md#addat)
- [addAfter](IPen.md#addafter)
- [addBefore](IPen.md#addbefore)
- [addMany](IPen.md#addmany)
- [remove](IPen.md#remove)
- [removeAll](IPen.md#removeall)
- [clear](IPen.md#clear)
- [reset](IPen.md#reset)
- [set](IPen.md#set)
- [toJSON](IPen.md#tojson)
- [get](IPen.md#get)
- [createProxyData](IPen.md#createproxydata)
- [find](IPen.md#find)
- [findTag](IPen.md#findtag)
- [findOne](IPen.md#findone)
- [findId](IPen.md#findid)
- [getPath](IPen.md#getpath)
- [getPathString](IPen.md#getpathstring)
- [load](IPen.md#load)
- [\_\_drawPathByData](IPen.md#__drawpathbydata)
- [\_\_drawPathByBox](IPen.md#__drawpathbybox)
- [\_\_drawAfterFill](IPen.md#__drawafterfill)
- [\_\_drawContent](IPen.md#__drawcontent)
- [drawImagePlaceholder](IPen.md#drawimageplaceholder)
- [animate](IPen.md#animate)
- [killAnimate](IPen.md#killanimate)
- [export](IPen.md#export)
- [syncExport](IPen.md#syncexport)
- [clone](IPen.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IGroup](IGroup.md).[id](IGroup.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IGroup](IGroup.md).[name](IGroup.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IGroup](IGroup.md).[className](IGroup.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IGroup](IGroup.md).[blendMode](IGroup.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[opacity](IGroup.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IGroup](IGroup.md).[visible](IGroup.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[selected](IGroup.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[disabled](IGroup.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[locked](IGroup.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IGroup](IGroup.md).[zIndex](IGroup.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IGroup](IGroup.md).[dim](IGroup.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[dimskip](IGroup.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IGroup](IGroup.md).[mask](IGroup.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IGroup](IGroup.md).[eraser](IGroup.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IGroup](IGroup.md).[filter](IGroup.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IGroup](IGroup.md).[x](IGroup.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IGroup](IGroup.md).[y](IGroup.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IGroup](IGroup.md).[width](IGroup.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IGroup](IGroup.md).[height](IGroup.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleX](IGroup.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleY](IGroup.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IGroup](IGroup.md).[rotation](IGroup.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewX](IGroup.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewY](IGroup.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IGroup](IGroup.md).[scale](IGroup.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetX](IGroup.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetY](IGroup.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollX](IGroup.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollY](IGroup.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[origin](IGroup.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[around](IGroup.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lazy](IGroup.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IGroup](IGroup.md).[pixelRatio](IGroup.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L259)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IGroup](IGroup.md).[windingRule](IGroup.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[closed](IGroup.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IGroup](IGroup.md).[flow](IGroup.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[padding](IGroup.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IGroup](IGroup.md).[gap](IGroup.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IGroup](IGroup.md).[flowAlign](IGroup.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IGroup](IGroup.md).[flowWrap](IGroup.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IGroup](IGroup.md).[itemBox](IGroup.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[inFlow](IGroup.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoWidth](IGroup.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoHeight](IGroup.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockRatio](IGroup.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IGroup](IGroup.md).[autoBox](IGroup.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[widthRange](IGroup.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[heightRange](IGroup.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IGroup](IGroup.md).[draggable](IGroup.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[dragBounds](IGroup.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[editable](IGroup.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hittable](IGroup.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitFill](IGroup.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitStroke](IGroup.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitBox](IGroup.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitChildren](IGroup.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitSelf](IGroup.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IGroup](IGroup.md).[hitRadius](IGroup.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[button](IGroup.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IGroup](IGroup.md).[cursor](IGroup.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionPath](IGroup.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IGroup](IGroup.md).[motionPrecision](IGroup.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IGroup](IGroup.md).[motion](IGroup.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionRotation](IGroup.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[normalStyle](IGroup.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IGroup](IGroup.md).[event](IGroup.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[data](IGroup.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[tag](IGroup.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[__tag](IGroup.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L439)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IGroup](IGroup.md).[innerName](IGroup.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__DataProcessor](IGroup.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__LayoutProcessor](IGroup.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L443)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsCreated](IGroup.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L450)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsReady](IGroup.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L451)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isApp](IGroup.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L453)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isLeafer](IGroup.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L454)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranch](IGroup.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranchLeaf](IGroup.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L456)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOutside](IGroup.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L457)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IGroup](IGroup.md).[syncEventer](IGroup.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L464)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockNormalStyle](IGroup.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IGroup](IGroup.md).[__layout](IGroup.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__world](IGroup.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__local](IGroup.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__nowWorld](IGroup.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L472)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__cameraWorld](IGroup.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[__localMatrix](IGroup.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L475)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__localBoxBounds](IGroup.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[__worldOpacity](IGroup.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L478)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[worldTransform](IGroup.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L480)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[localTransform](IGroup.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L481)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[boxBounds](IGroup.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L483)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[renderBounds](IGroup.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L484)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldBoxBounds](IGroup.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L485)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldStrokeBounds](IGroup.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L486)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldRenderBounds](IGroup.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L487)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[worldOpacity](IGroup.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IGroup](IGroup.md).[__level](IGroup.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L491)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IGroup](IGroup.md).[__tempNumber](IGroup.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__worldFlipped](IGroup.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasAutoLayout](IGroup.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMotionPath](IGroup.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMask](IGroup.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasEraser](IGroup.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IGroup](IGroup.md).[__hitCanvas](IGroup.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__flowBounds](IGroup.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__widthGrow](IGroup.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__heightGrow](IGroup.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasGrow](IGroup.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__onlyHitMask](IGroup.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__ignoreHitWorld](IGroup.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__inLazyBounds](IGroup.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L513)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[pathInputed](IGroup.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L515)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[destroyed](IGroup.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L517)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IGroup](IGroup.md).[innerId](IGroup.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__captureMap](IGroup.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__bubbleMap](IGroup.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_path

• **\_\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Inherited from

[IPathCreator](IPathCreator.md).[__path](IPathCreator.md#__path)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:22](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L22)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[cornerRadius](IGroup.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IGroup](IGroup.md).[cornerSmoothing](IGroup.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IGroup](IGroup.md).[fill](IGroup.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IGroup](IGroup.md).[stroke](IGroup.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IGroup](IGroup.md).[strokeAlign](IGroup.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[strokeWidth](IGroup.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[strokeWidthFixed](IGroup.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IGroup](IGroup.md).[strokeCap](IGroup.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IGroup](IGroup.md).[strokeJoin](IGroup.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IGroup](IGroup.md).[dashPattern](IGroup.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IGroup](IGroup.md).[dashOffset](IGroup.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IGroup](IGroup.md).[miterLimit](IGroup.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroup](IGroup.md).[startArrow](IGroup.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroup](IGroup.md).[endArrow](IGroup.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[shadow](IGroup.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[innerShadow](IGroup.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[blur](IGroup.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[backgroundBlur](IGroup.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IGroup](IGroup.md).[grayscale](IGroup.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IPenData`](IPenData.md)

#### Overrides

[IGroup](IGroup.md).[__](IGroup.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:194](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L194)

___

### pathElement

• **pathElement**: [`IPath`](IPath.md)

#### Defined in

[ui/packages/interface/src/IUI.ts:195](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L195)

___

### pathStyle

• **pathStyle**: [`IPathInputData`](IPathInputData.md)

#### Defined in

[ui/packages/interface/src/IUI.ts:196](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L196)

___

### path

• **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Overrides

[IPathCreator](IPathCreator.md).[path](IPathCreator.md#path)

#### Defined in

[ui/packages/interface/src/IUI.ts:197](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L197)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IGroup](IGroup.md).[children](IGroup.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:358](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L358)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IGroup](IGroup.md).[app](IGroup.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L376)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IGroup](IGroup.md).[leafer](IGroup.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L377)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IGroup](IGroup.md).[parent](IGroup.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L378)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IGroup](IGroup.md).[zoomLayer](IGroup.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L379)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isFrame](IGroup.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L380)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOverflow](IGroup.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L381)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[proxyData](IGroup.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:383](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L383)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[__proxyData](IGroup.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L384)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animation](IGroup.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L386)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animationOut](IGroup.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L387)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IGroup](IGroup.md).[__box](IGroup.md#__box)

#### Defined in

[ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L391)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IGroup](IGroup.md).[__animate](IGroup.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L392)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IGroup](IGroup.md).[pen](IGroup.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L394)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transition](IGroup.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L447)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transitionOut](IGroup.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L448)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IGroup](IGroup.md).[states](IGroup.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L450)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IGroup](IGroup.md).[state](IGroup.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L451)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[hoverStyle](IGroup.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L453)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[pressStyle](IGroup.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L454)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[focusStyle](IGroup.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L455)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[selectedStyle](IGroup.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L456)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[disabledStyle](IGroup.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L457)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[placeholderStyle](IGroup.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L458)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IGroup](IGroup.md).[placeholderColor](IGroup.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L459)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IGroup](IGroup.md).[editConfig](IGroup.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L461)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IGroup](IGroup.md).[editOuter](IGroup.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L462)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IGroup](IGroup.md).[editInner](IGroup.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L463)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[resetCustom](IGroup.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L520)

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

[IGroup](IGroup.md).[waitParent](IGroup.md#waitparent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L522)

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

[IGroup](IGroup.md).[waitLeafer](IGroup.md#waitleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L523)

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

[IGroup](IGroup.md).[nextRender](IGroup.md#nextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L524)

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

[IGroup](IGroup.md).[removeNextRender](IGroup.md#removenextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L525)

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

[IGroup](IGroup.md).[__bindLeafer](IGroup.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L527)

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

[IGroup](IGroup.md).[setAttr](IGroup.md#setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L531)

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

[IGroup](IGroup.md).[getAttr](IGroup.md#getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L532)

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

[IGroup](IGroup.md).[getComputedAttr](IGroup.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L533)

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

[IGroup](IGroup.md).[toString](IGroup.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L536)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toSVG](IGroup.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L537)

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

[IGroup](IGroup.md).[__SVG](IGroup.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L538)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toHTML](IGroup.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L539)

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

[IGroup](IGroup.md).[__setAttr](IGroup.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L545)

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

[IGroup](IGroup.md).[__getAttr](IGroup.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L546)

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

[IGroup](IGroup.md).[setProxyAttr](IGroup.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L547)

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

[IGroup](IGroup.md).[getProxyAttr](IGroup.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L548)

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

[IGroup](IGroup.md).[focus](IGroup.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L556)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateState](IGroup.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L558)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateLayout](IGroup.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L559)

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

[IGroup](IGroup.md).[forceUpdate](IGroup.md#forceupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L560)

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

[IGroup](IGroup.md).[forceRender](IGroup.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__extraUpdate](IGroup.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L563)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldMatrix](IGroup.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalMatrix](IGroup.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldBounds](IGroup.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBounds](IGroup.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBoxBounds](IGroup.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalStrokeBounds](IGroup.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalRenderBounds](IGroup.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateContentBounds](IGroup.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L577)

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

[IGroup](IGroup.md).[__updateBoxBounds](IGroup.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeBounds](IGroup.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderBounds](IGroup.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateAutoLayout](IGroup.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateFlowLayout](IGroup.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateNaturalSize](IGroup.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeSpread](IGroup.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderSpread](IGroup.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__onUpdateSize](IGroup.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L589)

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

[IGroup](IGroup.md).[__updateEraser](IGroup.md#__updateeraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:592](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L592)

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

[IGroup](IGroup.md).[__updateMask](IGroup.md#__updatemask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L593)

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

[IGroup](IGroup.md).[__renderMask](IGroup.md#__rendermask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L594)

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

[IGroup](IGroup.md).[__renderEraser](IGroup.md#__rendereraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L595)

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

[IGroup](IGroup.md).[__getNowWorld](IGroup.md#__getnowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L598)

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

[IGroup](IGroup.md).[getTransform](IGroup.md#gettransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L600)

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

[IGroup](IGroup.md).[getBounds](IGroup.md#getbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L602)

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

[IGroup](IGroup.md).[getLayoutBounds](IGroup.md#getlayoutbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L603)

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

[IGroup](IGroup.md).[getLayoutPoints](IGroup.md#getlayoutpoints)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L604)

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

[IGroup](IGroup.md).[getWorldBounds](IGroup.md#getworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L606)

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

[IGroup](IGroup.md).[worldToLocal](IGroup.md#worldtolocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L608)

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

[IGroup](IGroup.md).[localToWorld](IGroup.md#localtoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L609)

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

[IGroup](IGroup.md).[worldToInner](IGroup.md#worldtoinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L610)

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

[IGroup](IGroup.md).[innerToWorld](IGroup.md#innertoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L611)

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

[IGroup](IGroup.md).[getBoxPoint](IGroup.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L613)

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

[IGroup](IGroup.md).[getBoxPointByInner](IGroup.md#getboxpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L614)

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

[IGroup](IGroup.md).[getInnerPoint](IGroup.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L615)

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

[IGroup](IGroup.md).[getInnerPointByBox](IGroup.md#getinnerpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L616)

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

[IGroup](IGroup.md).[getInnerPointByLocal](IGroup.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L617)

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

[IGroup](IGroup.md).[getLocalPoint](IGroup.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L618)

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

[IGroup](IGroup.md).[getLocalPointByInner](IGroup.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L619)

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

[IGroup](IGroup.md).[getPagePoint](IGroup.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L620)

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

[IGroup](IGroup.md).[getWorldPoint](IGroup.md#getworldpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L621)

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

[IGroup](IGroup.md).[getWorldPointByBox](IGroup.md#getworldpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L622)

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

[IGroup](IGroup.md).[getWorldPointByLocal](IGroup.md#getworldpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L623)

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

[IGroup](IGroup.md).[getWorldPointByPage](IGroup.md#getworldpointbypage)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L624)

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

[IGroup](IGroup.md).[setTransform](IGroup.md#settransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L627)

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

[IGroup](IGroup.md).[transform](IGroup.md#transform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L628)

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

[IGroup](IGroup.md).[move](IGroup.md#move)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L629)

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

[IGroup](IGroup.md).[moveInner](IGroup.md#moveinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L631)

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

[IGroup](IGroup.md).[scaleOf](IGroup.md#scaleof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L632)

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

[IGroup](IGroup.md).[rotateOf](IGroup.md#rotateof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L633)

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

[IGroup](IGroup.md).[skewOf](IGroup.md#skewof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L634)

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

[IGroup](IGroup.md).[transformWorld](IGroup.md#transformworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L636)

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

[IGroup](IGroup.md).[moveWorld](IGroup.md#moveworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L637)

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

[IGroup](IGroup.md).[scaleOfWorld](IGroup.md#scaleofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L638)

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

[IGroup](IGroup.md).[rotateOfWorld](IGroup.md#rotateofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L639)

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

[IGroup](IGroup.md).[skewOfWorld](IGroup.md#skewofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L640)

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

[IGroup](IGroup.md).[flip](IGroup.md#flip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L642)

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

[IGroup](IGroup.md).[scaleResize](IGroup.md#scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L644)

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

[IGroup](IGroup.md).[__scaleResize](IGroup.md#__scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L645)

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

[IGroup](IGroup.md).[resizeWidth](IGroup.md#resizewidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L647)

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

[IGroup](IGroup.md).[resizeHeight](IGroup.md#resizeheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L648)

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

[IGroup](IGroup.md).[__hitWorld](IGroup.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L651)

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

[IGroup](IGroup.md).[__hit](IGroup.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L652)

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

[IGroup](IGroup.md).[__hitFill](IGroup.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L653)

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

[IGroup](IGroup.md).[__hitStroke](IGroup.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L654)

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

[IGroup](IGroup.md).[__hitPixel](IGroup.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L655)

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

[IGroup](IGroup.md).[__drawHitPath](IGroup.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateHitCanvas](IGroup.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L657)

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

[IGroup](IGroup.md).[__render](IGroup.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L660)

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

[IGroup](IGroup.md).[__drawFast](IGroup.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L661)

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

[IGroup](IGroup.md).[__draw](IGroup.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L662)

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

[IGroup](IGroup.md).[__clip](IGroup.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L664)

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

[IGroup](IGroup.md).[__renderShape](IGroup.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L665)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldOpacity](IGroup.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateChange](IGroup.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L668)

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

[IGroup](IGroup.md).[__drawPath](IGroup.md#__drawpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:671](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L671)

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

[IGroup](IGroup.md).[__drawRenderPath](IGroup.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L672)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updatePath](IGroup.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L673)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderPath](IGroup.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L674)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IGroup](IGroup.md).[getMotionPathData](IGroup.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L677)

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

[IGroup](IGroup.md).[getMotionPoint](IGroup.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L678)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[getMotionTotal](IGroup.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateMotionPath](IGroup.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L681)

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

[IGroup](IGroup.md).[__runAnimation](IGroup.md#__runanimation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L683)

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

[IGroup](IGroup.md).[__emitLifeEvent](IGroup.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L685)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateSortChildren](IGroup.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L690)

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

[IGroup](IGroup.md).[dropTo](IGroup.md#dropto)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L693)

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

[IGroup](IGroup.md).[__realSetAttr](IGroup.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[destroyEventer](IGroup.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[IGroup](IGroup.md).[on](IGroup.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L45)

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

[IGroup](IGroup.md).[off](IGroup.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L46)

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

[IGroup](IGroup.md).[on_](IGroup.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L47)

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

[IGroup](IGroup.md).[off_](IGroup.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L48)

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

[IGroup](IGroup.md).[once](IGroup.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L49)

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

[IGroup](IGroup.md).[emit](IGroup.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L50)

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

[IGroup](IGroup.md).[emitEvent](IGroup.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L51)

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

[IGroup](IGroup.md).[hasEvent](IGroup.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[destroy](IGroup.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L54)

___

### beginPath

▸ **beginPath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[beginPath](IPathCreator.md#beginpath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:24](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L24)

___

### moveTo

▸ **moveTo**(`x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[moveTo](IPathCreator.md#moveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:26](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L26)

___

### lineTo

▸ **lineTo**(`x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[lineTo](IPathCreator.md#lineto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:27](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L27)

___

### bezierCurveTo

▸ **bezierCurveTo**(`x1`, `y1`, `x2`, `y2`, `x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[bezierCurveTo](IPathCreator.md#beziercurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:28](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L28)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`x1`, `y1`, `x`, `y`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[quadraticCurveTo](IPathCreator.md#quadraticcurveto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:29](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L29)

___

### closePath

▸ **closePath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[closePath](IPathCreator.md#closepath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:30](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L30)

___

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[arc](IPathCreator.md#arc)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:32](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L32)

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[arcTo](IPathCreator.md#arcto)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:33](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L33)

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[ellipse](IPathCreator.md#ellipse)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:34](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L34)

___

### rect

▸ **rect**(`x`, `y`, `width`, `height`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[rect](IPathCreator.md#rect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:36](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L36)

___

### roundRect

▸ **roundRect**(`x`, `y`, `width`, `height`, `radius?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `radius?` | `number` \| `number`[] |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[roundRect](IPathCreator.md#roundrect)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:37](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L37)

___

### drawEllipse

▸ **drawEllipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation?`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation?` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[drawEllipse](IPathCreator.md#drawellipse)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:40](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L40)

___

### drawArc

▸ **drawArc**(`x`, `y`, `radius`, `startAngle?`, `endAngle?`, `anticlockwise?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle?` | `number` |
| `endAngle?` | `number` |
| `anticlockwise?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[drawArc](IPathCreator.md#drawarc)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:41](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L41)

___

### drawPoints

▸ **drawPoints**(`points`, `curve?`, `close?`): [`IPathCreator`](IPathCreator.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | `number`[] \| [`IPointData`](IPointData.md)[] |
| `curve?` | `number` \| `boolean` |
| `close?` | `boolean` |

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[drawPoints](IPathCreator.md#drawpoints)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:42](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L42)

___

### clearPath

▸ **clearPath**(): [`IPathCreator`](IPathCreator.md)

#### Returns

[`IPathCreator`](IPathCreator.md)

#### Inherited from

[IPathCreator](IPathCreator.md).[clearPath](IPathCreator.md#clearpath)

#### Defined in

[leafer/packages/interface/src/path/IPathDrawer.ts:44](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/path/IPathDrawer.ts#L44)

___

### paint

▸ **paint**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/IUI.ts:198](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L198)

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

[IGroup](IGroup.md).[pick](IGroup.md#pick)

#### Defined in

[ui/packages/interface/src/IUI.ts:359](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L359)

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

[IGroup](IGroup.md).[add](IGroup.md#add)

#### Defined in

[ui/packages/interface/src/IUI.ts:360](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L360)

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

[IGroup](IGroup.md).[addAt](IGroup.md#addat)

#### Defined in

[ui/packages/interface/src/IUI.ts:361](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L361)

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

[IGroup](IGroup.md).[addAfter](IGroup.md#addafter)

#### Defined in

[ui/packages/interface/src/IUI.ts:362](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L362)

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

[IGroup](IGroup.md).[addBefore](IGroup.md#addbefore)

#### Defined in

[ui/packages/interface/src/IUI.ts:363](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L363)

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

[IGroup](IGroup.md).[addMany](IGroup.md#addmany)

#### Defined in

[ui/packages/interface/src/IUI.ts:364](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L364)

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

[IGroup](IGroup.md).[remove](IGroup.md#remove)

#### Defined in

[ui/packages/interface/src/IUI.ts:365](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L365)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[removeAll](IGroup.md#removeall)

#### Defined in

[ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L366)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[clear](IGroup.md#clear)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L367)

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

[IGroup](IGroup.md).[reset](IGroup.md#reset)

#### Defined in

[ui/packages/interface/src/IUI.ts:396](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L396)

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

[IGroup](IGroup.md).[set](IGroup.md#set)

#### Defined in

[ui/packages/interface/src/IUI.ts:398](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L398)

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

[IGroup](IGroup.md).[toJSON](IGroup.md#tojson)

#### Defined in

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L399)

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

[IGroup](IGroup.md).[get](IGroup.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:401](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L401)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[createProxyData](IGroup.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L402)

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

[IGroup](IGroup.md).[find](IGroup.md#find)

#### Defined in

[ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L404)

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

[IGroup](IGroup.md).[findTag](IGroup.md#findtag)

#### Defined in

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L405)

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

[IGroup](IGroup.md).[findOne](IGroup.md#findone)

#### Defined in

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L406)

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

[IGroup](IGroup.md).[findId](IGroup.md#findid)

#### Defined in

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L407)

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

[IGroup](IGroup.md).[getPath](IGroup.md#getpath)

#### Defined in

[ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L409)

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

[IGroup](IGroup.md).[getPathString](IGroup.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L410)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[load](IGroup.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L412)

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

[IGroup](IGroup.md).[__drawPathByData](IGroup.md#__drawpathbydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L414)

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

[IGroup](IGroup.md).[__drawPathByBox](IGroup.md#__drawpathbybox)

#### Defined in

[ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L415)

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

[IGroup](IGroup.md).[__drawAfterFill](IGroup.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L416)

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

[IGroup](IGroup.md).[__drawContent](IGroup.md#__drawcontent)

#### Defined in

[ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L417)

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

[IGroup](IGroup.md).[drawImagePlaceholder](IGroup.md#drawimageplaceholder)

#### Defined in

[ui/packages/interface/src/IUI.ts:419](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L419)

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

[IGroup](IGroup.md).[animate](IGroup.md#animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:421](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L421)

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

[IGroup](IGroup.md).[killAnimate](IGroup.md#killanimate)

#### Defined in

[ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L422)

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

[IGroup](IGroup.md).[export](IGroup.md#export)

#### Defined in

[ui/packages/interface/src/IUI.ts:424](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L424)

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

[IGroup](IGroup.md).[syncExport](IGroup.md#syncexport)

#### Defined in

[ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L425)

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

[IGroup](IGroup.md).[clone](IGroup.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:426](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L426)
