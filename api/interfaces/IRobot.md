# Interface: IRobot

## Hierarchy

- `IRobotAttrData`

- `IPlayerMethods`

- [`IRect`](IRect.md)

  ↳ **`IRobot`**

## Implemented by

- [`Robot`](../classes/Robot.md)

## Table of contents

### Properties

- [id](IRobot.md#id)
- [name](IRobot.md#name)
- [className](IRobot.md#classname)
- [blendMode](IRobot.md#blendmode)
- [opacity](IRobot.md#opacity)
- [visible](IRobot.md#visible)
- [selected](IRobot.md#selected)
- [disabled](IRobot.md#disabled)
- [locked](IRobot.md#locked)
- [zIndex](IRobot.md#zindex)
- [dim](IRobot.md#dim)
- [dimskip](IRobot.md#dimskip)
- [bright](IRobot.md#bright)
- [mask](IRobot.md#mask)
- [eraser](IRobot.md#eraser)
- [filter](IRobot.md#filter)
- [x](IRobot.md#x)
- [y](IRobot.md#y)
- [width](IRobot.md#width)
- [height](IRobot.md#height)
- [scaleX](IRobot.md#scalex)
- [scaleY](IRobot.md#scaley)
- [rotation](IRobot.md#rotation)
- [skewX](IRobot.md#skewx)
- [skewY](IRobot.md#skewy)
- [scale](IRobot.md#scale)
- [offsetX](IRobot.md#offsetx)
- [offsetY](IRobot.md#offsety)
- [scrollX](IRobot.md#scrollx)
- [scrollY](IRobot.md#scrolly)
- [origin](IRobot.md#origin)
- [around](IRobot.md#around)
- [lazy](IRobot.md#lazy)
- [pixelRatio](IRobot.md#pixelratio)
- [renderSpread](IRobot.md#renderspread)
- [path](IRobot.md#path)
- [windingRule](IRobot.md#windingrule)
- [closed](IRobot.md#closed)
- [flow](IRobot.md#flow)
- [padding](IRobot.md#padding)
- [gap](IRobot.md#gap)
- [flowAlign](IRobot.md#flowalign)
- [flowWrap](IRobot.md#flowwrap)
- [itemBox](IRobot.md#itembox)
- [inFlow](IRobot.md#inflow)
- [autoWidth](IRobot.md#autowidth)
- [autoHeight](IRobot.md#autoheight)
- [lockRatio](IRobot.md#lockratio)
- [autoBox](IRobot.md#autobox)
- [widthRange](IRobot.md#widthrange)
- [heightRange](IRobot.md#heightrange)
- [draggable](IRobot.md#draggable)
- [dragBounds](IRobot.md#dragbounds)
- [dragBoundsType](IRobot.md#dragboundstype)
- [editable](IRobot.md#editable)
- [hittable](IRobot.md#hittable)
- [hitFill](IRobot.md#hitfill)
- [hitStroke](IRobot.md#hitstroke)
- [hitBox](IRobot.md#hitbox)
- [hitChildren](IRobot.md#hitchildren)
- [hitSelf](IRobot.md#hitself)
- [hitRadius](IRobot.md#hitradius)
- [button](IRobot.md#button)
- [cursor](IRobot.md#cursor)
- [motionPath](IRobot.md#motionpath)
- [motionPrecision](IRobot.md#motionprecision)
- [motion](IRobot.md#motion)
- [motionRotation](IRobot.md#motionrotation)
- [normalStyle](IRobot.md#normalstyle)
- [event](IRobot.md#event)
- [data](IRobot.md#data)
- [tag](IRobot.md#tag)
- [\_\_tag](IRobot.md#__tag)
- [innerName](IRobot.md#innername)
- [\_\_DataProcessor](IRobot.md#__dataprocessor)
- [\_\_LayoutProcessor](IRobot.md#__layoutprocessor)
- [leaferIsCreated](IRobot.md#leaferiscreated)
- [leaferIsReady](IRobot.md#leaferisready)
- [isApp](IRobot.md#isapp)
- [isLeafer](IRobot.md#isleafer)
- [isBranch](IRobot.md#isbranch)
- [isBranchLeaf](IRobot.md#isbranchleaf)
- [isOutside](IRobot.md#isoutside)
- [syncEventer](IRobot.md#synceventer)
- [lockNormalStyle](IRobot.md#locknormalstyle)
- [\_\_layout](IRobot.md#__layout)
- [\_\_world](IRobot.md#__world)
- [\_\_local](IRobot.md#__local)
- [\_\_nowWorld](IRobot.md#__nowworld)
- [\_\_cameraWorld](IRobot.md#__cameraworld)
- [\_\_nowWorldShapeBounds](IRobot.md#__nowworldshapebounds)
- [\_\_localMatrix](IRobot.md#__localmatrix)
- [\_\_localBoxBounds](IRobot.md#__localboxbounds)
- [\_\_worldOpacity](IRobot.md#__worldopacity)
- [worldTransform](IRobot.md#worldtransform)
- [localTransform](IRobot.md#localtransform)
- [\_\_scrollWorld](IRobot.md#__scrollworld)
- [scrollWorldTransform](IRobot.md#scrollworldtransform)
- [boxBounds](IRobot.md#boxbounds)
- [renderBounds](IRobot.md#renderbounds)
- [worldBoxBounds](IRobot.md#worldboxbounds)
- [worldStrokeBounds](IRobot.md#worldstrokebounds)
- [worldRenderBounds](IRobot.md#worldrenderbounds)
- [worldOpacity](IRobot.md#worldopacity)
- [\_\_level](IRobot.md#__level)
- [\_\_tempNumber](IRobot.md#__tempnumber)
- [\_\_worldFlipped](IRobot.md#__worldflipped)
- [\_\_hasAutoLayout](IRobot.md#__hasautolayout)
- [\_\_hasMotionPath](IRobot.md#__hasmotionpath)
- [\_\_hasMask](IRobot.md#__hasmask)
- [\_\_hasEraser](IRobot.md#__haseraser)
- [\_\_hitCanvas](IRobot.md#__hitcanvas)
- [\_\_flowBounds](IRobot.md#__flowbounds)
- [\_\_widthGrow](IRobot.md#__widthgrow)
- [\_\_heightGrow](IRobot.md#__heightgrow)
- [\_\_hasGrow](IRobot.md#__hasgrow)
- [\_\_onlyHitMask](IRobot.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IRobot.md#__ignorehitworld)
- [\_\_inLazyBounds](IRobot.md#__inlazybounds)
- [pathInputed](IRobot.md#pathinputed)
- [isAutoWidth](IRobot.md#isautowidth)
- [isAutoHeight](IRobot.md#isautoheight)
- [destroyed](IRobot.md#destroyed)
- [topChildren](IRobot.md#topchildren)
- [innerId](IRobot.md#innerid)
- [\_\_captureMap](IRobot.md#__capturemap)
- [\_\_bubbleMap](IRobot.md#__bubblemap)
- [\_\_hasLocalEvent](IRobot.md#__haslocalevent)
- [\_\_hasWorldEvent](IRobot.md#__hasworldevent)
- [cornerRadius](IRobot.md#cornerradius)
- [cornerSmoothing](IRobot.md#cornersmoothing)
- [fill](IRobot.md#fill)
- [stroke](IRobot.md#stroke)
- [startArrow](IRobot.md#startarrow)
- [endArrow](IRobot.md#endarrow)
- [strokeAlign](IRobot.md#strokealign)
- [strokeWidth](IRobot.md#strokewidth)
- [strokeWidthFixed](IRobot.md#strokewidthfixed)
- [strokeCap](IRobot.md#strokecap)
- [strokeJoin](IRobot.md#strokejoin)
- [dashPattern](IRobot.md#dashpattern)
- [dashOffset](IRobot.md#dashoffset)
- [miterLimit](IRobot.md#miterlimit)
- [shadow](IRobot.md#shadow)
- [innerShadow](IRobot.md#innershadow)
- [blur](IRobot.md#blur)
- [backgroundBlur](IRobot.md#backgroundblur)
- [grayscale](IRobot.md#grayscale)
- [\_\_](IRobot.md#__)
- [running](IRobot.md#running)
- [nowFrame](IRobot.md#nowframe)
- [robotFrames](IRobot.md#robotframes)
- [robot](IRobot.md#robot)
- [actions](IRobot.md#actions)
- [action](IRobot.md#action)
- [now](IRobot.md#now)
- [FPS](IRobot.md#fps)
- [loop](IRobot.md#loop)
- [app](IRobot.md#app)
- [leafer](IRobot.md#leafer)
- [parent](IRobot.md#parent)
- [zoomLayer](IRobot.md#zoomlayer)
- [isFrame](IRobot.md#isframe)
- [isOverflow](IRobot.md#isoverflow)
- [useFastShadow](IRobot.md#usefastshadow)
- [proxyData](IRobot.md#proxydata)
- [\_\_proxyData](IRobot.md#__proxydata)
- [animation](IRobot.md#animation)
- [animationOut](IRobot.md#animationout)
- [children](IRobot.md#children)
- [\_\_box](IRobot.md#__box)
- [\_\_animate](IRobot.md#__animate)
- [pen](IRobot.md#pen)
- [transition](IRobot.md#transition)
- [transitionOut](IRobot.md#transitionout)
- [states](IRobot.md#states)
- [state](IRobot.md#state)
- [hoverStyle](IRobot.md#hoverstyle)
- [pressStyle](IRobot.md#pressstyle)
- [focusStyle](IRobot.md#focusstyle)
- [selectedStyle](IRobot.md#selectedstyle)
- [disabledStyle](IRobot.md#disabledstyle)
- [placeholderStyle](IRobot.md#placeholderstyle)
- [placeholderColor](IRobot.md#placeholdercolor)
- [placeholderDelay](IRobot.md#placeholderdelay)
- [editConfig](IRobot.md#editconfig)
- [editOuter](IRobot.md#editouter)
- [editInner](IRobot.md#editinner)

### Methods

- [resetCustom](IRobot.md#resetcustom)
- [waitParent](IRobot.md#waitparent)
- [waitLeafer](IRobot.md#waitleafer)
- [nextRender](IRobot.md#nextrender)
- [removeNextRender](IRobot.md#removenextrender)
- [\_\_bindLeafer](IRobot.md#__bindleafer)
- [setAttr](IRobot.md#setattr)
- [getAttr](IRobot.md#getattr)
- [getComputedAttr](IRobot.md#getcomputedattr)
- [toString](IRobot.md#tostring)
- [toSVG](IRobot.md#tosvg)
- [\_\_SVG](IRobot.md#__svg)
- [toHTML](IRobot.md#tohtml)
- [\_\_setAttr](IRobot.md#__setattr)
- [\_\_getAttr](IRobot.md#__getattr)
- [setProxyAttr](IRobot.md#setproxyattr)
- [getProxyAttr](IRobot.md#getproxyattr)
- [focus](IRobot.md#focus)
- [updateState](IRobot.md#updatestate)
- [updateLayout](IRobot.md#updatelayout)
- [forceUpdate](IRobot.md#forceupdate)
- [forceRender](IRobot.md#forcerender)
- [\_\_extraUpdate](IRobot.md#__extraupdate)
- [\_\_updateWorldMatrix](IRobot.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IRobot.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IRobot.md#__updateworldbounds)
- [\_\_updateLocalBounds](IRobot.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IRobot.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IRobot.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IRobot.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IRobot.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IRobot.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IRobot.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IRobot.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IRobot.md#__updateautolayout)
- [\_\_updateFlowLayout](IRobot.md#__updateflowlayout)
- [\_\_updateNaturalSize](IRobot.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IRobot.md#__updatestrokespread)
- [\_\_updateRenderSpread](IRobot.md#__updaterenderspread)
- [\_\_onUpdateSize](IRobot.md#__onupdatesize)
- [\_\_updateEraser](IRobot.md#__updateeraser)
- [\_\_updateMask](IRobot.md#__updatemask)
- [\_\_renderMask](IRobot.md#__rendermask)
- [\_\_renderEraser](IRobot.md#__rendereraser)
- [\_\_getNowWorld](IRobot.md#__getnowworld)
- [getClampRenderScale](IRobot.md#getclamprenderscale)
- [getRenderScaleData](IRobot.md#getrenderscaledata)
- [getTransform](IRobot.md#gettransform)
- [getBounds](IRobot.md#getbounds)
- [getLayoutBounds](IRobot.md#getlayoutbounds)
- [getLayoutPoints](IRobot.md#getlayoutpoints)
- [getWorldBounds](IRobot.md#getworldbounds)
- [worldToLocal](IRobot.md#worldtolocal)
- [localToWorld](IRobot.md#localtoworld)
- [worldToInner](IRobot.md#worldtoinner)
- [innerToWorld](IRobot.md#innertoworld)
- [getBoxPoint](IRobot.md#getboxpoint)
- [getBoxPointByInner](IRobot.md#getboxpointbyinner)
- [getInnerPoint](IRobot.md#getinnerpoint)
- [getInnerPointByBox](IRobot.md#getinnerpointbybox)
- [getInnerPointByLocal](IRobot.md#getinnerpointbylocal)
- [getLocalPoint](IRobot.md#getlocalpoint)
- [getLocalPointByInner](IRobot.md#getlocalpointbyinner)
- [getPagePoint](IRobot.md#getpagepoint)
- [getWorldPoint](IRobot.md#getworldpoint)
- [getWorldPointByBox](IRobot.md#getworldpointbybox)
- [getWorldPointByLocal](IRobot.md#getworldpointbylocal)
- [getWorldPointByPage](IRobot.md#getworldpointbypage)
- [setTransform](IRobot.md#settransform)
- [transform](IRobot.md#transform)
- [move](IRobot.md#move)
- [moveInner](IRobot.md#moveinner)
- [scaleOf](IRobot.md#scaleof)
- [rotateOf](IRobot.md#rotateof)
- [skewOf](IRobot.md#skewof)
- [transformWorld](IRobot.md#transformworld)
- [moveWorld](IRobot.md#moveworld)
- [scaleOfWorld](IRobot.md#scaleofworld)
- [rotateOfWorld](IRobot.md#rotateofworld)
- [skewOfWorld](IRobot.md#skewofworld)
- [flip](IRobot.md#flip)
- [scaleResize](IRobot.md#scaleresize)
- [\_\_scaleResize](IRobot.md#__scaleresize)
- [resizeWidth](IRobot.md#resizewidth)
- [resizeHeight](IRobot.md#resizeheight)
- [hit](IRobot.md#hit)
- [\_\_hitWorld](IRobot.md#__hitworld)
- [\_\_hit](IRobot.md#__hit)
- [\_\_hitFill](IRobot.md#__hitfill)
- [\_\_hitStroke](IRobot.md#__hitstroke)
- [\_\_hitPixel](IRobot.md#__hitpixel)
- [\_\_drawHitPath](IRobot.md#__drawhitpath)
- [\_\_updateHitCanvas](IRobot.md#__updatehitcanvas)
- [\_\_render](IRobot.md#__render)
- [\_\_drawFast](IRobot.md#__drawfast)
- [\_\_draw](IRobot.md#__draw)
- [\_\_clip](IRobot.md#__clip)
- [\_\_renderShape](IRobot.md#__rendershape)
- [\_\_drawShape](IRobot.md#__drawshape)
- [\_\_updateWorldOpacity](IRobot.md#__updateworldopacity)
- [\_\_updateChange](IRobot.md#__updatechange)
- [\_\_drawPath](IRobot.md#__drawpath)
- [\_\_drawRenderPath](IRobot.md#__drawrenderpath)
- [\_\_updatePath](IRobot.md#__updatepath)
- [\_\_updateRenderPath](IRobot.md#__updaterenderpath)
- [getMotionPathData](IRobot.md#getmotionpathdata)
- [getMotionPoint](IRobot.md#getmotionpoint)
- [getMotionTotal](IRobot.md#getmotiontotal)
- [\_\_updateMotionPath](IRobot.md#__updatemotionpath)
- [\_\_runAnimation](IRobot.md#__runanimation)
- [\_\_emitLifeEvent](IRobot.md#__emitlifeevent)
- [\_\_updateSortChildren](IRobot.md#__updatesortchildren)
- [add](IRobot.md#add)
- [remove](IRobot.md#remove)
- [dropTo](IRobot.md#dropto)
- [\_\_realSetAttr](IRobot.md#__realsetattr)
- [emitPropertyEvent](IRobot.md#emitpropertyevent)
- [destroyEventer](IRobot.md#destroyeventer)
- [on](IRobot.md#on)
- [off](IRobot.md#off)
- [on\_](IRobot.md#on_)
- [off\_](IRobot.md#off_)
- [once](IRobot.md#once)
- [emit](IRobot.md#emit)
- [emitEvent](IRobot.md#emitevent)
- [hasEvent](IRobot.md#hasevent)
- [destroy](IRobot.md#destroy)
- [play](IRobot.md#play)
- [pause](IRobot.md#pause)
- [stop](IRobot.md#stop)
- [\_\_updateRobot](IRobot.md#__updaterobot)
- [\_\_updateAction](IRobot.md#__updateaction)
- [reset](IRobot.md#reset)
- [set](IRobot.md#set)
- [toJSON](IRobot.md#tojson)
- [get](IRobot.md#get)
- [createProxyData](IRobot.md#createproxydata)
- [find](IRobot.md#find)
- [findTag](IRobot.md#findtag)
- [findOne](IRobot.md#findone)
- [findId](IRobot.md#findid)
- [getPath](IRobot.md#getpath)
- [getPathString](IRobot.md#getpathstring)
- [load](IRobot.md#load)
- [\_\_drawPathByData](IRobot.md#__drawpathbydata)
- [\_\_drawPathByBox](IRobot.md#__drawpathbybox)
- [\_\_drawAfterFill](IRobot.md#__drawafterfill)
- [\_\_drawContent](IRobot.md#__drawcontent)
- [drawImagePlaceholder](IRobot.md#drawimageplaceholder)
- [animate](IRobot.md#animate)
- [killAnimate](IRobot.md#killanimate)
- [export](IRobot.md#export)
- [syncExport](IRobot.md#syncexport)
- [clone](IRobot.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IRect](IRect.md).[id](IRect.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L223)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IRect](IRect.md).[name](IRect.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L224)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IRect](IRect.md).[className](IRect.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L225)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IRect](IRect.md).[blendMode](IRect.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L227)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IRect](IRect.md).[opacity](IRect.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L229)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IRect](IRect.md).[visible](IRect.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L230)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IRect](IRect.md).[selected](IRect.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L231)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IRect](IRect.md).[disabled](IRect.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L232)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IRect](IRect.md).[locked](IRect.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L233)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IRect](IRect.md).[zIndex](IRect.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L234)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IRect](IRect.md).[dim](IRect.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L236)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IRect](IRect.md).[dimskip](IRect.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L237)

___

### bright

• `Optional` **bright**: `boolean`

#### Inherited from

[IRect](IRect.md).[bright](IRect.md#bright)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L238)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IRect](IRect.md).[mask](IRect.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L240)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IRect](IRect.md).[eraser](IRect.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L241)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IRect](IRect.md).[filter](IRect.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L242)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IRect](IRect.md).[x](IRect.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L245)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IRect](IRect.md).[y](IRect.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L246)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IRect](IRect.md).[width](IRect.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L247)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IRect](IRect.md).[height](IRect.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IRect](IRect.md).[scaleX](IRect.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L249)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IRect](IRect.md).[scaleY](IRect.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L250)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IRect](IRect.md).[rotation](IRect.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L251)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IRect](IRect.md).[skewX](IRect.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L252)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IRect](IRect.md).[skewY](IRect.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L253)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IRect](IRect.md).[scale](IRect.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L255)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IRect](IRect.md).[offsetX](IRect.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L257)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IRect](IRect.md).[offsetY](IRect.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IRect](IRect.md).[scrollX](IRect.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L259)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IRect](IRect.md).[scrollY](IRect.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L260)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[origin](IRect.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L262)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IRect](IRect.md).[around](IRect.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L263)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IRect](IRect.md).[lazy](IRect.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L265)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IRect](IRect.md).[pixelRatio](IRect.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L266)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[renderSpread](IRect.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L268)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IRect](IRect.md).[path](IRect.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L270)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IRect](IRect.md).[windingRule](IRect.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L271)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IRect](IRect.md).[closed](IRect.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L272)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IRect](IRect.md).[flow](IRect.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L275)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[padding](IRect.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L276)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IRect](IRect.md).[gap](IRect.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L277)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IRect](IRect.md).[flowAlign](IRect.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L278)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IRect](IRect.md).[flowWrap](IRect.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L279)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IRect](IRect.md).[itemBox](IRect.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L280)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IRect](IRect.md).[inFlow](IRect.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L282)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoWidth](IRect.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L283)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IRect](IRect.md).[autoHeight](IRect.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L284)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockRatio](IRect.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L285)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IRect](IRect.md).[autoBox](IRect.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L286)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[widthRange](IRect.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L288)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IRect](IRect.md).[heightRange](IRect.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L289)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IRect](IRect.md).[draggable](IRect.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[dragBounds](IRect.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L293)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IRect](IRect.md).[dragBoundsType](IRect.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L294)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IRect](IRect.md).[editable](IRect.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L296)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IRect](IRect.md).[hittable](IRect.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L298)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitFill](IRect.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L299)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IRect](IRect.md).[hitStroke](IRect.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L300)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitBox](IRect.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L301)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitChildren](IRect.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L302)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IRect](IRect.md).[hitSelf](IRect.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L303)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IRect](IRect.md).[hitRadius](IRect.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:304](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L304)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IRect](IRect.md).[button](IRect.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L306)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IRect](IRect.md).[cursor](IRect.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L307)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[motionPath](IRect.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L309)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IRect](IRect.md).[motionPrecision](IRect.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IRect](IRect.md).[motion](IRect.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IRect](IRect.md).[motionRotation](IRect.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:313](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L313)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[normalStyle](IRect.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:315](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L315)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IRect](IRect.md).[event](IRect.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:317](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L317)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[data](IRect.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:320](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L320)

___

### tag

• **tag**: `string`

#### Inherited from

[IRect](IRect.md).[tag](IRect.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L457)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IRect](IRect.md).[__tag](IRect.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:458](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L458)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IRect](IRect.md).[innerName](IRect.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L459)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__DataProcessor](IRect.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:461](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L461)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IRect](IRect.md).[__LayoutProcessor](IRect.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L462)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsCreated](IRect.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L469)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IRect](IRect.md).[leaferIsReady](IRect.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L470)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IRect](IRect.md).[isApp](IRect.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L472)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IRect](IRect.md).[isLeafer](IRect.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L473)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranch](IRect.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L474)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IRect](IRect.md).[isBranchLeaf](IRect.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L475)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOutside](IRect.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L476)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IRect](IRect.md).[syncEventer](IRect.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L483)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IRect](IRect.md).[lockNormalStyle](IRect.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IRect](IRect.md).[__layout](IRect.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__world](IRect.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:488](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L488)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__local](IRect.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__nowWorld](IRect.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L491)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__cameraWorld](IRect.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_nowWorldShapeBounds

• `Optional` **\_\_nowWorldShapeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__nowWorldShapeBounds](IRect.md#__nowworldshapebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[__localMatrix](IRect.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:496](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L496)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__localBoxBounds](IRect.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[__worldOpacity](IRect.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L499)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IRect](IRect.md).[worldTransform](IRect.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L501)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IRect](IRect.md).[localTransform](IRect.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IRect](IRect.md).[__scrollWorld](IRect.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L504)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IRect](IRect.md).[scrollWorldTransform](IRect.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L505)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[boxBounds](IRect.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L507)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[renderBounds](IRect.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L508)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldBoxBounds](IRect.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L509)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldStrokeBounds](IRect.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L510)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[worldRenderBounds](IRect.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L511)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IRect](IRect.md).[worldOpacity](IRect.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L513)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IRect](IRect.md).[__level](IRect.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L515)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IRect](IRect.md).[__tempNumber](IRect.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L516)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IRect](IRect.md).[__worldFlipped](IRect.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L518)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasAutoLayout](IRect.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L523)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMotionPath](IRect.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasMask](IRect.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasEraser](IRect.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L527)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IRect](IRect.md).[__hitCanvas](IRect.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L528)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IRect](IRect.md).[__flowBounds](IRect.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L530)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__widthGrow](IRect.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L531)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IRect](IRect.md).[__heightGrow](IRect.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L532)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasGrow](IRect.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L533)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IRect](IRect.md).[__onlyHitMask](IRect.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L535)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IRect](IRect.md).[__ignoreHitWorld](IRect.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L536)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IRect](IRect.md).[__inLazyBounds](IRect.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L537)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IRect](IRect.md).[pathInputed](IRect.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L539)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[IRect](IRect.md).[isAutoWidth](IRect.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L541)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[IRect](IRect.md).[isAutoHeight](IRect.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L542)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IRect](IRect.md).[destroyed](IRect.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L544)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IRect](IRect.md).[topChildren](IRect.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:721](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L721)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IRect](IRect.md).[innerId](IRect.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__captureMap](IRect.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IRect](IRect.md).[__bubbleMap](IRect.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasLocalEvent](IRect.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IRect](IRect.md).[__hasWorldEvent](IRect.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[cornerRadius](IRect.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IRect](IRect.md).[cornerSmoothing](IRect.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IRect](IRect.md).[fill](IRect.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IRect](IRect.md).[stroke](IRect.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L40)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IRect](IRect.md).[startArrow](IRect.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L42)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IRect](IRect.md).[endArrow](IRect.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IRect](IRect.md).[strokeAlign](IRect.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[strokeWidth](IRect.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IRect](IRect.md).[strokeWidthFixed](IRect.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IRect](IRect.md).[strokeCap](IRect.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IRect](IRect.md).[strokeJoin](IRect.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IRect](IRect.md).[dashPattern](IRect.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IRect](IRect.md).[dashOffset](IRect.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IRect](IRect.md).[miterLimit](IRect.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L61)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[shadow](IRect.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:150](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L150)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IRect](IRect.md).[innerShadow](IRect.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:151](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L151)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[blur](IRect.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:152](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L152)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IRect](IRect.md).[backgroundBlur](IRect.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L153)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IRect](IRect.md).[grayscale](IRect.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/ICommonAttr.ts#L154)

___

### \_\_

• **\_\_**: [`IRobotData`](IRobotData.md)

#### Overrides

[IRect](IRect.md).[__](IRect.md#__)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:92](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L92)

___

### running

• `Readonly` **running**: `boolean`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:93](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L93)

___

### nowFrame

• `Optional` `Readonly` **nowFrame**: [`IRobotComputedKeyframe`](IRobotComputedKeyframe.md)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:94](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L94)

___

### robotFrames

• `Optional` `Readonly` **robotFrames**: [`IRobotComputedKeyframe`](IRobotComputedKeyframe.md)[]

#### Defined in

[src/ui/packages/interface/src/IUI.ts:95](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L95)

___

### robot

• `Optional` **robot**: [`IRobotKeyframe`](IRobotKeyframe.md) \| [`IRobotKeyframe`](IRobotKeyframe.md)[]

#### Inherited from

IRobotAttrData.robot

#### Defined in

[src/ui/packages/interface/src/IUI.ts:102](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L102)

___

### actions

• `Optional` **actions**: [`IRobotActions`](IRobotActions.md)

#### Inherited from

IRobotAttrData.actions

#### Defined in

[src/ui/packages/interface/src/IUI.ts:103](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L103)

___

### action

• `Optional` **action**: `string`

#### Inherited from

IRobotAttrData.action

#### Defined in

[src/ui/packages/interface/src/IUI.ts:104](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L104)

___

### now

• `Optional` **now**: `number`

#### Inherited from

IRobotAttrData.now

#### Defined in

[src/ui/packages/interface/src/IUI.ts:105](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L105)

___

### FPS

• `Optional` **FPS**: `number`

#### Inherited from

IRobotAttrData.FPS

#### Defined in

[src/ui/packages/interface/src/IUI.ts:106](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L106)

___

### loop

• `Optional` **loop**: `number` \| `boolean`

#### Inherited from

IRobotAttrData.loop

#### Defined in

[src/ui/packages/interface/src/IUI.ts:107](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L107)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[app](IRect.md#app)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L385)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IRect](IRect.md).[leafer](IRect.md#leafer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L386)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[parent](IRect.md#parent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L387)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IRect](IRect.md).[zoomLayer](IRect.md#zoomlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L388)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IRect](IRect.md).[isFrame](IRect.md#isframe)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L389)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IRect](IRect.md).[isOverflow](IRect.md#isoverflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:390](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L390)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IRect](IRect.md).[useFastShadow](IRect.md#usefastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L391)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[proxyData](IRect.md#proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:393](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L393)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[__proxyData](IRect.md#__proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L394)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animation](IRect.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:396](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L396)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IRect](IRect.md).[animationOut](IRect.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L397)

___

### children

• `Optional` **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IRect](IRect.md).[children](IRect.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L399)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IRect](IRect.md).[__box](IRect.md#__box)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:401](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L401)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IRect](IRect.md).[__animate](IRect.md#__animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L402)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IRect](IRect.md).[pen](IRect.md#pen)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L404)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transition](IRect.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L459)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IRect](IRect.md).[transitionOut](IRect.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:460](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L460)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IRect](IRect.md).[states](IRect.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L462)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IRect](IRect.md).[state](IRect.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L463)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[hoverStyle](IRect.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L465)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[pressStyle](IRect.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L466)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[focusStyle](IRect.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L467)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[selectedStyle](IRect.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L468)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[disabledStyle](IRect.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:469](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L469)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IRect](IRect.md).[placeholderStyle](IRect.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L470)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IRect](IRect.md).[placeholderColor](IRect.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L471)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IRect](IRect.md).[placeholderDelay](IRect.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L472)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IRect](IRect.md).[editConfig](IRect.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:474](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L474)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IRect](IRect.md).[editOuter](IRect.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:475](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L475)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IRect](IRect.md).[editInner](IRect.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:476](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L476)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[resetCustom](IRect.md#resetcustom)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L547)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L549)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:550](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L550)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L551)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:552](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L552)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L554)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L559)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L560)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L561)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:564](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L564)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toSVG](IRect.md#tosvg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L565)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L566)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IRect](IRect.md).[toHTML](IRect.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L567)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L573)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L574)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L575)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L576)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L584)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateState](IRect.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L586)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[updateLayout](IRect.md#updatelayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L587)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L588)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L589)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__extraUpdate](IRect.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:591](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L591)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldMatrix](IRect.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L594)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalMatrix](IRect.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L595)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldBounds](IRect.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L598)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBounds](IRect.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L599)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalBoxBounds](IRect.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L601)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalStrokeBounds](IRect.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L602)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateLocalRenderBounds](IRect.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateContentBounds](IRect.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L605)

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

[IRect](IRect.md).[__updateBoxBounds](IRect.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L606)

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

[IRect](IRect.md).[__updateStrokeBounds](IRect.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L607)

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

[IRect](IRect.md).[__updateRenderBounds](IRect.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L608)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateAutoLayout](IRect.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L610)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateFlowLayout](IRect.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L611)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateNaturalSize](IRect.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L612)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[__updateStrokeSpread](IRect.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L614)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IRect](IRect.md).[__updateRenderSpread](IRect.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L615)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__onUpdateSize](IRect.md#__onupdatesize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L617)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L620)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L621)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L622)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L623)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L626)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[getClampRenderScale](IRect.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L627)

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

[IRect](IRect.md).[getRenderScaleData](IRect.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L628)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:630](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L630)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L632)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L633)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L634)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L636)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L638)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L639)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L640)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L641)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L643)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L644)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L645)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L646)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L647)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L648)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L649)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L650)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L651)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L652)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L653)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L654)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L657)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L658)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L659)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L661)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L662)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L663)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L664)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L666)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L667)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L668)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L669)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L670)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L672)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L674)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L675)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L677)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L678)

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

[IRect](IRect.md).[hit](IRect.md#hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L681)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:682](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L682)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L683)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:684](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L684)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L685)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:686](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L686)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L687)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateHitCanvas](IRect.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L688)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:691](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L691)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L692)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L693)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L695)

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

[IRect](IRect.md).[__renderShape](IRect.md#__rendershape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:696](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L696)

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

[IRect](IRect.md).[__drawShape](IRect.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:697](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L697)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateWorldOpacity](IRect.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:699](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L699)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateChange](IRect.md#__updatechange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:700](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L700)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:703](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L703)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:704](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L704)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updatePath](IRect.md#__updatepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:705](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L705)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateRenderPath](IRect.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:706](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L706)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IRect](IRect.md).[getMotionPathData](IRect.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L709)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:710](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L710)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IRect](IRect.md).[getMotionTotal](IRect.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:711](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L711)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateMotionPath](IRect.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:713](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L713)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:715](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L715)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:717](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L717)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[__updateSortChildren](IRect.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:723](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L723)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`ILeaf`](ILeaf.md) \| [`ILeaf`](ILeaf.md)[] \| [`ILeafInputData`](ILeafInputData.md) \| [`ILeafInputData`](ILeafInputData.md)[] |
| `index?` | `number` |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[add](IRect.md#add)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:724](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L724)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:725](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L725)

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

[src/leafer/packages/interface/src/display/ILeaf.ts:726](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/ILeaf.ts#L726)

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

[IRect](IRect.md).[__realSetAttr](IRect.md#__realsetattr)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

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

[IRect](IRect.md).[emitPropertyEvent](IRect.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroyEventer](IRect.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L49)

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

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L50)

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

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L51)

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

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L52)

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

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L53)

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

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L54)

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

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L55)

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

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[destroy](IRect.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/interface/src/event/IEventer.ts#L58)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.play

#### Defined in

[src/ui/packages/interface/src/IUI.ts:64](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L64)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.pause

#### Defined in

[src/ui/packages/interface/src/IUI.ts:65](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L65)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

IPlayerMethods.stop

#### Defined in

[src/ui/packages/interface/src/IUI.ts:66](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L66)

___

### \_\_updateRobot

▸ **__updateRobot**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:97](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L97)

___

### \_\_updateAction

▸ **__updateAction**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/IUI.ts:98](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L98)

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

[src/ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L406)

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

[src/ui/packages/interface/src/IUI.ts:408](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L408)

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

[src/ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L409)

___

### get

▸ **get**\<`K`\>(`name`): [`IRobot`](IRobot.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IRobot`](IRobot.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `K` |

#### Returns

[`IRobot`](IRobot.md)[`K`]

#### Inherited from

[IRect](IRect.md).[get](IRect.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:411](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L411)

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](IUIInputData.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IRobot`](IRobot.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](IUIInputData.md) \| `K`[] |

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[get](IRect.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L412)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IRect](IRect.md).[createProxyData](IRect.md#createproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L414)

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

[src/ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L416)

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

[src/ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L417)

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

[src/ui/packages/interface/src/IUI.ts:418](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L418)

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

[src/ui/packages/interface/src/IUI.ts:419](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L419)

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

[src/ui/packages/interface/src/IUI.ts:421](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L421)

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

[src/ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L422)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[load](IRect.md#load)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:424](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L424)

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

[src/ui/packages/interface/src/IUI.ts:426](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L426)

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

[src/ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L427)

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

[IRect](IRect.md).[__drawAfterFill](IRect.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:428](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L428)

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

[IRect](IRect.md).[__drawContent](IRect.md#__drawcontent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:429](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L429)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`image`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`ILeafPaint`](ILeafPaint.md) |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IRect](IRect.md).[drawImagePlaceholder](IRect.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:431](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L431)

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

[src/ui/packages/interface/src/IUI.ts:433](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L433)

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

[src/ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L434)

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

[IRect](IRect.md).[export](IRect.md#export)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:436](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L436)

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

[src/ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L437)

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

[src/ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/interface/src/IUI.ts#L438)
