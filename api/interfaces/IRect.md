# Interface: IRect

## Hierarchy

- [`IUI`](IUI.md)

  ↳ **`IRect`**

  ↳↳ [`IImage`](IImage.md)

  ↳↳ [`ICanvas`](ICanvas.md)

  ↳↳ [`IVideo`](IVideo.md)

  ↳↳ [`IGIF`](IGIF.md)

  ↳↳ [`IRobot`](IRobot.md)

  ↳↳ [`ISimulateElement`](ISimulateElement.md)

## Implemented by

- [`Rect`](../classes/Rect.md)

## Table of contents

### Properties

- [id](IRect.md#id)
- [name](IRect.md#name)
- [className](IRect.md#classname)
- [blendMode](IRect.md#blendmode)
- [opacity](IRect.md#opacity)
- [visible](IRect.md#visible)
- [selected](IRect.md#selected)
- [disabled](IRect.md#disabled)
- [locked](IRect.md#locked)
- [zIndex](IRect.md#zindex)
- [dim](IRect.md#dim)
- [dimskip](IRect.md#dimskip)
- [bright](IRect.md#bright)
- [mask](IRect.md#mask)
- [eraser](IRect.md#eraser)
- [filter](IRect.md#filter)
- [x](IRect.md#x)
- [y](IRect.md#y)
- [width](IRect.md#width)
- [height](IRect.md#height)
- [scaleX](IRect.md#scalex)
- [scaleY](IRect.md#scaley)
- [rotation](IRect.md#rotation)
- [skewX](IRect.md#skewx)
- [skewY](IRect.md#skewy)
- [scale](IRect.md#scale)
- [offsetX](IRect.md#offsetx)
- [offsetY](IRect.md#offsety)
- [scrollX](IRect.md#scrollx)
- [scrollY](IRect.md#scrolly)
- [origin](IRect.md#origin)
- [around](IRect.md#around)
- [lazy](IRect.md#lazy)
- [pixelRatio](IRect.md#pixelratio)
- [renderSpread](IRect.md#renderspread)
- [path](IRect.md#path)
- [windingRule](IRect.md#windingrule)
- [closed](IRect.md#closed)
- [flow](IRect.md#flow)
- [padding](IRect.md#padding)
- [gap](IRect.md#gap)
- [flowAlign](IRect.md#flowalign)
- [flowWrap](IRect.md#flowwrap)
- [itemBox](IRect.md#itembox)
- [inFlow](IRect.md#inflow)
- [autoWidth](IRect.md#autowidth)
- [autoHeight](IRect.md#autoheight)
- [lockRatio](IRect.md#lockratio)
- [autoBox](IRect.md#autobox)
- [widthRange](IRect.md#widthrange)
- [heightRange](IRect.md#heightrange)
- [draggable](IRect.md#draggable)
- [dragBounds](IRect.md#dragbounds)
- [dragBoundsType](IRect.md#dragboundstype)
- [editable](IRect.md#editable)
- [hittable](IRect.md#hittable)
- [hitFill](IRect.md#hitfill)
- [hitStroke](IRect.md#hitstroke)
- [hitBox](IRect.md#hitbox)
- [hitChildren](IRect.md#hitchildren)
- [hitSelf](IRect.md#hitself)
- [hitRadius](IRect.md#hitradius)
- [button](IRect.md#button)
- [cursor](IRect.md#cursor)
- [motionPath](IRect.md#motionpath)
- [motionPrecision](IRect.md#motionprecision)
- [motion](IRect.md#motion)
- [motionRotation](IRect.md#motionrotation)
- [normalStyle](IRect.md#normalstyle)
- [event](IRect.md#event)
- [data](IRect.md#data)
- [tag](IRect.md#tag)
- [\_\_tag](IRect.md#__tag)
- [innerName](IRect.md#innername)
- [\_\_DataProcessor](IRect.md#__dataprocessor)
- [\_\_LayoutProcessor](IRect.md#__layoutprocessor)
- [leaferIsCreated](IRect.md#leaferiscreated)
- [leaferIsReady](IRect.md#leaferisready)
- [isApp](IRect.md#isapp)
- [isLeafer](IRect.md#isleafer)
- [isBranch](IRect.md#isbranch)
- [isBranchLeaf](IRect.md#isbranchleaf)
- [isOutside](IRect.md#isoutside)
- [syncEventer](IRect.md#synceventer)
- [lockNormalStyle](IRect.md#locknormalstyle)
- [\_\_layout](IRect.md#__layout)
- [\_\_world](IRect.md#__world)
- [\_\_local](IRect.md#__local)
- [\_\_nowWorld](IRect.md#__nowworld)
- [\_\_cameraWorld](IRect.md#__cameraworld)
- [\_\_localMatrix](IRect.md#__localmatrix)
- [\_\_localBoxBounds](IRect.md#__localboxbounds)
- [\_\_worldOpacity](IRect.md#__worldopacity)
- [worldTransform](IRect.md#worldtransform)
- [localTransform](IRect.md#localtransform)
- [\_\_scrollWorld](IRect.md#__scrollworld)
- [scrollWorldTransform](IRect.md#scrollworldtransform)
- [boxBounds](IRect.md#boxbounds)
- [renderBounds](IRect.md#renderbounds)
- [worldBoxBounds](IRect.md#worldboxbounds)
- [worldStrokeBounds](IRect.md#worldstrokebounds)
- [worldRenderBounds](IRect.md#worldrenderbounds)
- [worldOpacity](IRect.md#worldopacity)
- [\_\_level](IRect.md#__level)
- [\_\_tempNumber](IRect.md#__tempnumber)
- [\_\_worldFlipped](IRect.md#__worldflipped)
- [\_\_hasAutoLayout](IRect.md#__hasautolayout)
- [\_\_hasMotionPath](IRect.md#__hasmotionpath)
- [\_\_hasMask](IRect.md#__hasmask)
- [\_\_hasEraser](IRect.md#__haseraser)
- [\_\_hitCanvas](IRect.md#__hitcanvas)
- [\_\_flowBounds](IRect.md#__flowbounds)
- [\_\_widthGrow](IRect.md#__widthgrow)
- [\_\_heightGrow](IRect.md#__heightgrow)
- [\_\_hasGrow](IRect.md#__hasgrow)
- [\_\_onlyHitMask](IRect.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IRect.md#__ignorehitworld)
- [\_\_inLazyBounds](IRect.md#__inlazybounds)
- [pathInputed](IRect.md#pathinputed)
- [isAutoWidth](IRect.md#isautowidth)
- [isAutoHeight](IRect.md#isautoheight)
- [destroyed](IRect.md#destroyed)
- [topChildren](IRect.md#topchildren)
- [innerId](IRect.md#innerid)
- [\_\_captureMap](IRect.md#__capturemap)
- [\_\_bubbleMap](IRect.md#__bubblemap)
- [\_\_hasLocalEvent](IRect.md#__haslocalevent)
- [\_\_hasWorldEvent](IRect.md#__hasworldevent)
- [cornerRadius](IRect.md#cornerradius)
- [cornerSmoothing](IRect.md#cornersmoothing)
- [fill](IRect.md#fill)
- [stroke](IRect.md#stroke)
- [startArrow](IRect.md#startarrow)
- [endArrow](IRect.md#endarrow)
- [strokeAlign](IRect.md#strokealign)
- [strokeWidth](IRect.md#strokewidth)
- [strokeWidthFixed](IRect.md#strokewidthfixed)
- [strokeCap](IRect.md#strokecap)
- [strokeJoin](IRect.md#strokejoin)
- [dashPattern](IRect.md#dashpattern)
- [dashOffset](IRect.md#dashoffset)
- [miterLimit](IRect.md#miterlimit)
- [shadow](IRect.md#shadow)
- [innerShadow](IRect.md#innershadow)
- [blur](IRect.md#blur)
- [backgroundBlur](IRect.md#backgroundblur)
- [grayscale](IRect.md#grayscale)
- [\_\_](IRect.md#__)
- [app](IRect.md#app)
- [leafer](IRect.md#leafer)
- [parent](IRect.md#parent)
- [zoomLayer](IRect.md#zoomlayer)
- [isFrame](IRect.md#isframe)
- [isOverflow](IRect.md#isoverflow)
- [useFastShadow](IRect.md#usefastshadow)
- [proxyData](IRect.md#proxydata)
- [\_\_proxyData](IRect.md#__proxydata)
- [animation](IRect.md#animation)
- [animationOut](IRect.md#animationout)
- [children](IRect.md#children)
- [\_\_box](IRect.md#__box)
- [\_\_animate](IRect.md#__animate)
- [pen](IRect.md#pen)
- [transition](IRect.md#transition)
- [transitionOut](IRect.md#transitionout)
- [states](IRect.md#states)
- [state](IRect.md#state)
- [hoverStyle](IRect.md#hoverstyle)
- [pressStyle](IRect.md#pressstyle)
- [focusStyle](IRect.md#focusstyle)
- [selectedStyle](IRect.md#selectedstyle)
- [disabledStyle](IRect.md#disabledstyle)
- [placeholderStyle](IRect.md#placeholderstyle)
- [placeholderColor](IRect.md#placeholdercolor)
- [placeholderDelay](IRect.md#placeholderdelay)
- [editConfig](IRect.md#editconfig)
- [editOuter](IRect.md#editouter)
- [editInner](IRect.md#editinner)

### Methods

- [resetCustom](IRect.md#resetcustom)
- [waitParent](IRect.md#waitparent)
- [waitLeafer](IRect.md#waitleafer)
- [nextRender](IRect.md#nextrender)
- [removeNextRender](IRect.md#removenextrender)
- [\_\_bindLeafer](IRect.md#__bindleafer)
- [setAttr](IRect.md#setattr)
- [getAttr](IRect.md#getattr)
- [getComputedAttr](IRect.md#getcomputedattr)
- [toString](IRect.md#tostring)
- [toSVG](IRect.md#tosvg)
- [\_\_SVG](IRect.md#__svg)
- [toHTML](IRect.md#tohtml)
- [\_\_setAttr](IRect.md#__setattr)
- [\_\_getAttr](IRect.md#__getattr)
- [setProxyAttr](IRect.md#setproxyattr)
- [getProxyAttr](IRect.md#getproxyattr)
- [focus](IRect.md#focus)
- [updateState](IRect.md#updatestate)
- [updateLayout](IRect.md#updatelayout)
- [forceUpdate](IRect.md#forceupdate)
- [forceRender](IRect.md#forcerender)
- [\_\_extraUpdate](IRect.md#__extraupdate)
- [\_\_updateWorldMatrix](IRect.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IRect.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IRect.md#__updateworldbounds)
- [\_\_updateLocalBounds](IRect.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IRect.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IRect.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IRect.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IRect.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IRect.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IRect.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IRect.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IRect.md#__updateautolayout)
- [\_\_updateFlowLayout](IRect.md#__updateflowlayout)
- [\_\_updateNaturalSize](IRect.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IRect.md#__updatestrokespread)
- [\_\_updateRenderSpread](IRect.md#__updaterenderspread)
- [\_\_onUpdateSize](IRect.md#__onupdatesize)
- [\_\_updateEraser](IRect.md#__updateeraser)
- [\_\_updateMask](IRect.md#__updatemask)
- [\_\_renderMask](IRect.md#__rendermask)
- [\_\_renderEraser](IRect.md#__rendereraser)
- [\_\_getNowWorld](IRect.md#__getnowworld)
- [getClampRenderScale](IRect.md#getclamprenderscale)
- [getRenderScaleData](IRect.md#getrenderscaledata)
- [getTransform](IRect.md#gettransform)
- [getBounds](IRect.md#getbounds)
- [getLayoutBounds](IRect.md#getlayoutbounds)
- [getLayoutPoints](IRect.md#getlayoutpoints)
- [getWorldBounds](IRect.md#getworldbounds)
- [worldToLocal](IRect.md#worldtolocal)
- [localToWorld](IRect.md#localtoworld)
- [worldToInner](IRect.md#worldtoinner)
- [innerToWorld](IRect.md#innertoworld)
- [getBoxPoint](IRect.md#getboxpoint)
- [getBoxPointByInner](IRect.md#getboxpointbyinner)
- [getInnerPoint](IRect.md#getinnerpoint)
- [getInnerPointByBox](IRect.md#getinnerpointbybox)
- [getInnerPointByLocal](IRect.md#getinnerpointbylocal)
- [getLocalPoint](IRect.md#getlocalpoint)
- [getLocalPointByInner](IRect.md#getlocalpointbyinner)
- [getPagePoint](IRect.md#getpagepoint)
- [getWorldPoint](IRect.md#getworldpoint)
- [getWorldPointByBox](IRect.md#getworldpointbybox)
- [getWorldPointByLocal](IRect.md#getworldpointbylocal)
- [getWorldPointByPage](IRect.md#getworldpointbypage)
- [setTransform](IRect.md#settransform)
- [transform](IRect.md#transform)
- [move](IRect.md#move)
- [moveInner](IRect.md#moveinner)
- [scaleOf](IRect.md#scaleof)
- [rotateOf](IRect.md#rotateof)
- [skewOf](IRect.md#skewof)
- [transformWorld](IRect.md#transformworld)
- [moveWorld](IRect.md#moveworld)
- [scaleOfWorld](IRect.md#scaleofworld)
- [rotateOfWorld](IRect.md#rotateofworld)
- [skewOfWorld](IRect.md#skewofworld)
- [flip](IRect.md#flip)
- [scaleResize](IRect.md#scaleresize)
- [\_\_scaleResize](IRect.md#__scaleresize)
- [resizeWidth](IRect.md#resizewidth)
- [resizeHeight](IRect.md#resizeheight)
- [hit](IRect.md#hit)
- [\_\_hitWorld](IRect.md#__hitworld)
- [\_\_hit](IRect.md#__hit)
- [\_\_hitFill](IRect.md#__hitfill)
- [\_\_hitStroke](IRect.md#__hitstroke)
- [\_\_hitPixel](IRect.md#__hitpixel)
- [\_\_drawHitPath](IRect.md#__drawhitpath)
- [\_\_updateHitCanvas](IRect.md#__updatehitcanvas)
- [\_\_render](IRect.md#__render)
- [\_\_drawFast](IRect.md#__drawfast)
- [\_\_draw](IRect.md#__draw)
- [\_\_clip](IRect.md#__clip)
- [\_\_renderShape](IRect.md#__rendershape)
- [\_\_drawShape](IRect.md#__drawshape)
- [\_\_updateWorldOpacity](IRect.md#__updateworldopacity)
- [\_\_updateChange](IRect.md#__updatechange)
- [\_\_drawPath](IRect.md#__drawpath)
- [\_\_drawRenderPath](IRect.md#__drawrenderpath)
- [\_\_updatePath](IRect.md#__updatepath)
- [\_\_updateRenderPath](IRect.md#__updaterenderpath)
- [getMotionPathData](IRect.md#getmotionpathdata)
- [getMotionPoint](IRect.md#getmotionpoint)
- [getMotionTotal](IRect.md#getmotiontotal)
- [\_\_updateMotionPath](IRect.md#__updatemotionpath)
- [\_\_runAnimation](IRect.md#__runanimation)
- [\_\_emitLifeEvent](IRect.md#__emitlifeevent)
- [\_\_updateSortChildren](IRect.md#__updatesortchildren)
- [add](IRect.md#add)
- [remove](IRect.md#remove)
- [dropTo](IRect.md#dropto)
- [\_\_realSetAttr](IRect.md#__realsetattr)
- [emitPropertyEvent](IRect.md#emitpropertyevent)
- [destroyEventer](IRect.md#destroyeventer)
- [on](IRect.md#on)
- [off](IRect.md#off)
- [on\_](IRect.md#on_)
- [off\_](IRect.md#off_)
- [once](IRect.md#once)
- [emit](IRect.md#emit)
- [emitEvent](IRect.md#emitevent)
- [hasEvent](IRect.md#hasevent)
- [destroy](IRect.md#destroy)
- [reset](IRect.md#reset)
- [set](IRect.md#set)
- [toJSON](IRect.md#tojson)
- [get](IRect.md#get)
- [createProxyData](IRect.md#createproxydata)
- [find](IRect.md#find)
- [findTag](IRect.md#findtag)
- [findOne](IRect.md#findone)
- [findId](IRect.md#findid)
- [getPath](IRect.md#getpath)
- [getPathString](IRect.md#getpathstring)
- [load](IRect.md#load)
- [\_\_drawPathByData](IRect.md#__drawpathbydata)
- [\_\_drawPathByBox](IRect.md#__drawpathbybox)
- [\_\_drawAfterFill](IRect.md#__drawafterfill)
- [\_\_drawContent](IRect.md#__drawcontent)
- [drawImagePlaceholder](IRect.md#drawimageplaceholder)
- [animate](IRect.md#animate)
- [killAnimate](IRect.md#killanimate)
- [export](IRect.md#export)
- [syncExport](IRect.md#syncexport)
- [clone](IRect.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUI](IUI.md).[id](IUI.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L223)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUI](IUI.md).[name](IUI.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L224)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUI](IUI.md).[className](IUI.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L225)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUI](IUI.md).[blendMode](IUI.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L227)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUI](IUI.md).[opacity](IUI.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L229)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUI](IUI.md).[visible](IUI.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L230)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUI](IUI.md).[selected](IUI.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L231)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUI](IUI.md).[disabled](IUI.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L232)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUI](IUI.md).[locked](IUI.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L233)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUI](IUI.md).[zIndex](IUI.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L234)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IUI](IUI.md).[dim](IUI.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L236)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IUI](IUI.md).[dimskip](IUI.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L237)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IUI](IUI.md).[bright](IUI.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L238)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUI](IUI.md).[mask](IUI.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L240)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUI](IUI.md).[eraser](IUI.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L241)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUI](IUI.md).[filter](IUI.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L242)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUI](IUI.md).[x](IUI.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L245)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUI](IUI.md).[y](IUI.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L246)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUI](IUI.md).[width](IUI.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L247)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUI](IUI.md).[height](IUI.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUI](IUI.md).[scaleX](IUI.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUI](IUI.md).[scaleY](IUI.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUI](IUI.md).[rotation](IUI.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUI](IUI.md).[skewX](IUI.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUI](IUI.md).[skewY](IUI.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUI](IUI.md).[scale](IUI.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUI](IUI.md).[offsetX](IUI.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUI](IUI.md).[offsetY](IUI.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUI](IUI.md).[scrollX](IUI.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUI](IUI.md).[scrollY](IUI.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUI](IUI.md).[origin](IUI.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUI](IUI.md).[around](IUI.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUI](IUI.md).[lazy](IUI.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUI](IUI.md).[pixelRatio](IUI.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IUI](IUI.md).[renderSpread](IUI.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUI](IUI.md).[path](IUI.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUI](IUI.md).[windingRule](IUI.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUI](IUI.md).[closed](IUI.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUI](IUI.md).[flow](IUI.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[padding](IUI.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUI](IUI.md).[gap](IUI.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUI](IUI.md).[flowAlign](IUI.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUI](IUI.md).[flowWrap](IUI.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUI](IUI.md).[itemBox](IUI.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUI](IUI.md).[inFlow](IUI.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUI](IUI.md).[autoWidth](IUI.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUI](IUI.md).[autoHeight](IUI.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUI](IUI.md).[lockRatio](IUI.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUI](IUI.md).[autoBox](IUI.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUI](IUI.md).[widthRange](IUI.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUI](IUI.md).[heightRange](IUI.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUI](IUI.md).[draggable](IUI.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[dragBounds](IUI.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IUI](IUI.md).[dragBoundsType](IUI.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUI](IUI.md).[editable](IUI.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUI](IUI.md).[hittable](IUI.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUI](IUI.md).[hitFill](IUI.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUI](IUI.md).[hitStroke](IUI.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitBox](IUI.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitChildren](IUI.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitSelf](IUI.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUI](IUI.md).[hitRadius](IUI.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUI](IUI.md).[button](IUI.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUI](IUI.md).[cursor](IUI.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUI](IUI.md).[motionPath](IUI.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUI](IUI.md).[motionPrecision](IUI.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUI](IUI.md).[motion](IUI.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUI](IUI.md).[motionRotation](IUI.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[normalStyle](IUI.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IUI](IUI.md).[event](IUI.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[data](IUI.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• **tag**: `string`

#### Inherited from

[IUI](IUI.md).[tag](IUI.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IUI](IUI.md).[__tag](IUI.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L456)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IUI](IUI.md).[innerName](IUI.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L457)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[__DataProcessor](IUI.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L459)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[__LayoutProcessor](IUI.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L460)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IUI](IUI.md).[leaferIsCreated](IUI.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L467)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IUI](IUI.md).[leaferIsReady](IUI.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L468)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IUI](IUI.md).[isApp](IUI.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L470)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IUI](IUI.md).[isLeafer](IUI.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L471)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IUI](IUI.md).[isBranch](IUI.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L472)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IUI](IUI.md).[isBranchLeaf](IUI.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L473)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IUI](IUI.md).[isOutside](IUI.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L474)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IUI](IUI.md).[syncEventer](IUI.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L481)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IUI](IUI.md).[lockNormalStyle](IUI.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L482)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IUI](IUI.md).[__layout](IUI.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__world](IUI.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__local](IUI.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__nowWorld](IUI.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__cameraWorld](IUI.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IUI](IUI.md).[__localMatrix](IUI.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__localBoxBounds](IUI.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L493)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IUI](IUI.md).[__worldOpacity](IUI.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L495)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IUI](IUI.md).[worldTransform](IUI.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L497)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IUI](IUI.md).[localTransform](IUI.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__scrollWorld](IUI.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L500)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IUI](IUI.md).[scrollWorldTransform](IUI.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L501)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[boxBounds](IUI.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L503)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[renderBounds](IUI.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L504)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldBoxBounds](IUI.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L505)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldStrokeBounds](IUI.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L506)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldRenderBounds](IUI.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L507)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IUI](IUI.md).[worldOpacity](IUI.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IUI](IUI.md).[__level](IUI.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IUI](IUI.md).[__tempNumber](IUI.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IUI](IUI.md).[__worldFlipped](IUI.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L514)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasAutoLayout](IUI.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L519)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasMotionPath](IUI.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L520)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasMask](IUI.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L522)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasEraser](IUI.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L523)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IUI](IUI.md).[__hitCanvas](IUI.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__flowBounds](IUI.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IUI](IUI.md).[__widthGrow](IUI.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L527)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IUI](IUI.md).[__heightGrow](IUI.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L528)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasGrow](IUI.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L529)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IUI](IUI.md).[__onlyHitMask](IUI.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L531)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IUI](IUI.md).[__ignoreHitWorld](IUI.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L532)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IUI](IUI.md).[__inLazyBounds](IUI.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L533)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IUI](IUI.md).[pathInputed](IUI.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L535)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[IUI](IUI.md).[isAutoWidth](IUI.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L537)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[IUI](IUI.md).[isAutoHeight](IUI.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L538)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IUI](IUI.md).[destroyed](IUI.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L540)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IUI](IUI.md).[topChildren](IUI.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:716](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L716)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IUI](IUI.md).[innerId](IUI.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IUI](IUI.md).[__captureMap](IUI.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IUI](IUI.md).[__bubbleMap](IUI.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasLocalEvent](IUI.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasWorldEvent](IUI.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[cornerRadius](IUI.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUI](IUI.md).[cornerSmoothing](IUI.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUI](IUI.md).[fill](IUI.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUI](IUI.md).[stroke](IUI.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L40)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IUI](IUI.md).[startArrow](IUI.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L42)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IUI](IUI.md).[endArrow](IUI.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUI](IUI.md).[strokeAlign](IUI.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[strokeWidth](IUI.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IUI](IUI.md).[strokeWidthFixed](IUI.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUI](IUI.md).[strokeCap](IUI.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUI](IUI.md).[strokeJoin](IUI.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUI](IUI.md).[dashPattern](IUI.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUI](IUI.md).[dashOffset](IUI.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUI](IUI.md).[miterLimit](IUI.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L61)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUI](IUI.md).[shadow](IUI.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:150](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L150)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUI](IUI.md).[innerShadow](IUI.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:151](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L151)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUI](IUI.md).[blur](IUI.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:152](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L152)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUI](IUI.md).[backgroundBlur](IUI.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L153)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUI](IUI.md).[grayscale](IUI.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/ICommonAttr.ts#L154)

___

### \_\_

• **\_\_**: [`IRectData`](IRectData.md)

#### Overrides

[IUI](IUI.md).[__](IUI.md#__)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:140](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L140)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IUI](IUI.md).[app](IUI.md#app)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:383](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L383)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IUI](IUI.md).[leafer](IUI.md#leafer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L384)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IUI](IUI.md).[parent](IUI.md#parent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L385)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IUI](IUI.md).[zoomLayer](IUI.md#zoomlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L386)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IUI](IUI.md).[isFrame](IUI.md#isframe)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L387)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IUI](IUI.md).[isOverflow](IUI.md#isoverflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L388)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IUI](IUI.md).[useFastShadow](IUI.md#usefastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L389)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[proxyData](IUI.md#proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L391)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[__proxyData](IUI.md#__proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L392)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUI](IUI.md).[animation](IUI.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L394)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUI](IUI.md).[animationOut](IUI.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L395)

___

### children

• `Optional` **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IUI](IUI.md).[children](IUI.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L397)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IUI](IUI.md).[__box](IUI.md#__box)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L399)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IUI](IUI.md).[__animate](IUI.md#__animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L400)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IUI](IUI.md).[pen](IUI.md#pen)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L402)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUI](IUI.md).[transition](IUI.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUI](IUI.md).[transitionOut](IUI.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUI](IUI.md).[states](IUI.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUI](IUI.md).[state](IUI.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[hoverStyle](IUI.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[pressStyle](IUI.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[focusStyle](IUI.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[selectedStyle](IUI.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[disabledStyle](IUI.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[placeholderStyle](IUI.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IUI](IUI.md).[placeholderColor](IUI.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IUI](IUI.md).[placeholderDelay](IUI.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUI](IUI.md).[editConfig](IUI.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IUI](IUI.md).[editOuter](IUI.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IUI](IUI.md).[editInner](IUI.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L472)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[resetCustom](IUI.md#resetcustom)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L543)

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

[IUI](IUI.md).[waitParent](IUI.md#waitparent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L545)

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

[IUI](IUI.md).[waitLeafer](IUI.md#waitleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L546)

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

[IUI](IUI.md).[nextRender](IUI.md#nextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L547)

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

[IUI](IUI.md).[removeNextRender](IUI.md#removenextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L548)

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

[IUI](IUI.md).[__bindLeafer](IUI.md#__bindleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:550](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L550)

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

[IUI](IUI.md).[setAttr](IUI.md#setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L554)

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

[IUI](IUI.md).[getAttr](IUI.md#getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L555)

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

[IUI](IUI.md).[getComputedAttr](IUI.md#getcomputedattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L556)

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

[IUI](IUI.md).[toString](IUI.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L559)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IUI](IUI.md).[toSVG](IUI.md#tosvg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L560)

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

[IUI](IUI.md).[__SVG](IUI.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L561)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IUI](IUI.md).[toHTML](IUI.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L562)

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

[IUI](IUI.md).[__setAttr](IUI.md#__setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L568)

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

[IUI](IUI.md).[__getAttr](IUI.md#__getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L569)

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

[IUI](IUI.md).[setProxyAttr](IUI.md#setproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L570)

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

[IUI](IUI.md).[getProxyAttr](IUI.md#getproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L571)

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

[IUI](IUI.md).[focus](IUI.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L579)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[updateState](IUI.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L581)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[updateLayout](IUI.md#updatelayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L582)

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

[IUI](IUI.md).[forceUpdate](IUI.md#forceupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L583)

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

[IUI](IUI.md).[forceRender](IUI.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__extraUpdate](IUI.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldMatrix](IUI.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L589)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalMatrix](IUI.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L590)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldBounds](IUI.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L593)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalBounds](IUI.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L594)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalBoxBounds](IUI.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L596)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalStrokeBounds](IUI.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L597)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalRenderBounds](IUI.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L598)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateContentBounds](IUI.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L600)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`, `bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondLayout?` | `boolean` |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateBoxBounds](IUI.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L601)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateStrokeBounds](IUI.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L602)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateRenderBounds](IUI.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateAutoLayout](IUI.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L605)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateFlowLayout](IUI.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateNaturalSize](IUI.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[__updateStrokeSpread](IUI.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L609)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[__updateRenderSpread](IUI.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L610)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__onUpdateSize](IUI.md#__onupdatesize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L612)

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

[IUI](IUI.md).[__updateEraser](IUI.md#__updateeraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L615)

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

[IUI](IUI.md).[__updateMask](IUI.md#__updatemask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L616)

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

[IUI](IUI.md).[__renderMask](IUI.md#__rendermask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L617)

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

[IUI](IUI.md).[__renderEraser](IUI.md#__rendereraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L618)

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

[IUI](IUI.md).[__getNowWorld](IUI.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L621)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[getClampRenderScale](IUI.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L622)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`): [`IScaleData`](IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abs?` | `boolean` |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

[`IScaleData`](IScaleData.md)

#### Inherited from

[IUI](IUI.md).[getRenderScaleData](IUI.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L623)

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

[IUI](IUI.md).[getTransform](IUI.md#gettransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:625](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L625)

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

[IUI](IUI.md).[getBounds](IUI.md#getbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L627)

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

[IUI](IUI.md).[getLayoutBounds](IUI.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L628)

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

[IUI](IUI.md).[getLayoutPoints](IUI.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L629)

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

[IUI](IUI.md).[getWorldBounds](IUI.md#getworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L631)

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

[IUI](IUI.md).[worldToLocal](IUI.md#worldtolocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L633)

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

[IUI](IUI.md).[localToWorld](IUI.md#localtoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L634)

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

[IUI](IUI.md).[worldToInner](IUI.md#worldtoinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L635)

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

[IUI](IUI.md).[innerToWorld](IUI.md#innertoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L636)

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

[IUI](IUI.md).[getBoxPoint](IUI.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L638)

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

[IUI](IUI.md).[getBoxPointByInner](IUI.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L639)

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

[IUI](IUI.md).[getInnerPoint](IUI.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L640)

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

[IUI](IUI.md).[getInnerPointByBox](IUI.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L641)

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

[IUI](IUI.md).[getInnerPointByLocal](IUI.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L642)

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

[IUI](IUI.md).[getLocalPoint](IUI.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L643)

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

[IUI](IUI.md).[getLocalPointByInner](IUI.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L644)

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

[IUI](IUI.md).[getPagePoint](IUI.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L645)

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

[IUI](IUI.md).[getWorldPoint](IUI.md#getworldpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L646)

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

[IUI](IUI.md).[getWorldPointByBox](IUI.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L647)

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

[IUI](IUI.md).[getWorldPointByLocal](IUI.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L648)

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

[IUI](IUI.md).[getWorldPointByPage](IUI.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L649)

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

[IUI](IUI.md).[setTransform](IUI.md#settransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L652)

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

[IUI](IUI.md).[transform](IUI.md#transform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L653)

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

[IUI](IUI.md).[move](IUI.md#move)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L654)

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

[IUI](IUI.md).[moveInner](IUI.md#moveinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L656)

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

[IUI](IUI.md).[scaleOf](IUI.md#scaleof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L657)

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

[IUI](IUI.md).[rotateOf](IUI.md#rotateof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L658)

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

[IUI](IUI.md).[skewOf](IUI.md#skewof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L659)

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

[IUI](IUI.md).[transformWorld](IUI.md#transformworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L661)

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

[IUI](IUI.md).[moveWorld](IUI.md#moveworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L662)

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

[IUI](IUI.md).[scaleOfWorld](IUI.md#scaleofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L663)

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

[IUI](IUI.md).[rotateOfWorld](IUI.md#rotateofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L664)

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

[IUI](IUI.md).[skewOfWorld](IUI.md#skewofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L665)

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

[IUI](IUI.md).[flip](IUI.md#flip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L667)

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

[IUI](IUI.md).[scaleResize](IUI.md#scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L669)

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

[IUI](IUI.md).[__scaleResize](IUI.md#__scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L670)

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

[IUI](IUI.md).[resizeWidth](IUI.md#resizewidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L672)

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

[IUI](IUI.md).[resizeHeight](IUI.md#resizeheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L673)

___

### hit

▸ **hit**(`world`, `hitRadius?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `hitRadius?` | `number` |

#### Returns

`boolean`

#### Inherited from

[IUI](IUI.md).[hit](IUI.md#hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L676)

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

[IUI](IUI.md).[__hitWorld](IUI.md#__hitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L677)

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

[IUI](IUI.md).[__hit](IUI.md#__hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L678)

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

[IUI](IUI.md).[__hitFill](IUI.md#__hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L679)

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

[IUI](IUI.md).[__hitStroke](IUI.md#__hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L680)

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

[IUI](IUI.md).[__hitPixel](IUI.md#__hitpixel)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L681)

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

[IUI](IUI.md).[__drawHitPath](IUI.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:682](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L682)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateHitCanvas](IUI.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L683)

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

[IUI](IUI.md).[__render](IUI.md#__render)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:686](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L686)

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

[IUI](IUI.md).[__drawFast](IUI.md#__drawfast)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L687)

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

[IUI](IUI.md).[__draw](IUI.md#__draw)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L688)

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

[IUI](IUI.md).[__clip](IUI.md#__clip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L690)

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

[IUI](IUI.md).[__renderShape](IUI.md#__rendershape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:691](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L691)

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

[IUI](IUI.md).[__drawShape](IUI.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L692)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldOpacity](IUI.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:694](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L694)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateChange](IUI.md#__updatechange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L695)

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

[IUI](IUI.md).[__drawPath](IUI.md#__drawpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:698](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L698)

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

[IUI](IUI.md).[__drawRenderPath](IUI.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:699](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L699)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updatePath](IUI.md#__updatepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:700](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L700)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateRenderPath](IUI.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:701](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L701)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IUI](IUI.md).[getMotionPathData](IUI.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:704](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L704)

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

[IUI](IUI.md).[getMotionPoint](IUI.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:705](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L705)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[getMotionTotal](IUI.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:706](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L706)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateMotionPath](IUI.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:708](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L708)

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

[IUI](IUI.md).[__runAnimation](IUI.md#__runanimation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:710](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L710)

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

[IUI](IUI.md).[__emitLifeEvent](IUI.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:712](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L712)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateSortChildren](IUI.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L718)

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

[IUI](IUI.md).[add](IUI.md#add)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:719](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L719)

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

[IUI](IUI.md).[remove](IUI.md#remove)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:720](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L720)

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

[IUI](IUI.md).[dropTo](IUI.md#dropto)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:721](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/ILeaf.ts#L721)

___

### \_\_realSetAttr

▸ **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__realSetAttr](IUI.md#__realsetattr)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### emitPropertyEvent

▸ **emitPropertyEvent**(`type`, `attrName`, `oldValue`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `attrName` | `string` |
| `oldValue` | `unknown` |
| `newValue` | `unknown` |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[emitPropertyEvent](IUI.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[destroyEventer](IUI.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[IUI](IUI.md).[on](IUI.md#on)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L49)

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

[IUI](IUI.md).[off](IUI.md#off)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L50)

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

[IUI](IUI.md).[on_](IUI.md#on_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L51)

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

[IUI](IUI.md).[off_](IUI.md#off_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L52)

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

[IUI](IUI.md).[once](IUI.md#once)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L53)

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

[IUI](IUI.md).[emit](IUI.md#emit)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L54)

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

[IUI](IUI.md).[emitEvent](IUI.md#emitevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L55)

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

[IUI](IUI.md).[hasEvent](IUI.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[destroy](IUI.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/e3d29379fa30ec6414b4ee45872fc9fd9c3f2178/packages/interface/src/event/IEventer.ts#L58)

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

[IUI](IUI.md).[reset](IUI.md#reset)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L404)

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

[IUI](IUI.md).[set](IUI.md#set)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L406)

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

[IUI](IUI.md).[toJSON](IUI.md#tojson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L407)

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

[IUI](IUI.md).[get](IUI.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L409)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[createProxyData](IUI.md#createproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L410)

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

[IUI](IUI.md).[find](IUI.md#find)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L412)

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

[IUI](IUI.md).[findTag](IUI.md#findtag)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L413)

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

[IUI](IUI.md).[findOne](IUI.md#findone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L414)

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

[IUI](IUI.md).[findId](IUI.md#findid)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L415)

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

[IUI](IUI.md).[getPath](IUI.md#getpath)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L417)

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

[IUI](IUI.md).[getPathString](IUI.md#getpathstring)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:418](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L418)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[load](IUI.md#load)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:420](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L420)

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

[IUI](IUI.md).[__drawPathByData](IUI.md#__drawpathbydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L422)

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

[IUI](IUI.md).[__drawPathByBox](IUI.md#__drawpathbybox)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:423](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L423)

___

### \_\_drawAfterFill

▸ **__drawAfterFill**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__drawAfterFill](IUI.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:424](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L424)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__drawContent](IUI.md#__drawcontent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L425)

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

[IUI](IUI.md).[drawImagePlaceholder](IUI.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L427)

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

[IUI](IUI.md).[animate](IUI.md#animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:429](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L429)

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

[IUI](IUI.md).[killAnimate](IUI.md#killanimate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:430](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L430)

___

### export

▸ **export**(`filename`, `options?`): `Promise`\<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](IExportResult.md)\>

#### Inherited from

[IUI](IUI.md).[export](IUI.md#export)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:432](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L432)

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

[IUI](IUI.md).[syncExport](IUI.md#syncexport)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:433](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L433)

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

[IUI](IUI.md).[clone](IUI.md#clone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/16756ed01a69dbd7bc933bd482f1080c8875c2f1/packages/interface/src/IUI.ts#L434)
