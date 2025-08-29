# Interface: ILeaferBase

## Hierarchy

- [`IZoomView`](IZoomView.md)

- [`IControl`](IControl.md)

- [`ILeaferAttrData`](ILeaferAttrData.md)

  ↳ **`ILeaferBase`**

  ↳↳ [`IAppBase`](IAppBase.md)

## Table of contents

### Properties

- [running](ILeaferBase.md#running)
- [created](ILeaferBase.md#created)
- [ready](ILeaferBase.md#ready)
- [viewReady](ILeaferBase.md#viewready)
- [imageReady](ILeaferBase.md#imageready)
- [viewCompleted](ILeaferBase.md#viewcompleted)
- [layoutLocked](ILeaferBase.md#layoutlocked)
- [transforming](ILeaferBase.md#transforming)
- [view](ILeaferBase.md#view)
- [canvas](ILeaferBase.md#canvas)
- [renderer](ILeaferBase.md#renderer)
- [watcher](ILeaferBase.md#watcher)
- [layouter](ILeaferBase.md#layouter)
- [selector](ILeaferBase.md#selector)
- [interaction](ILeaferBase.md#interaction)
- [canvasManager](ILeaferBase.md#canvasmanager)
- [hitCanvasManager](ILeaferBase.md#hitcanvasmanager)
- [autoLayout](ILeaferBase.md#autolayout)
- [lazyBounds](ILeaferBase.md#lazybounds)
- [config](ILeaferBase.md#config)
- [userConfig](ILeaferBase.md#userconfig)
- [cursorPoint](ILeaferBase.md#cursorpoint)
- [clientBounds](ILeaferBase.md#clientbounds)
- [leafs](ILeaferBase.md#leafs)
- [\_\_eventIds](ILeaferBase.md#__eventids)
- [\_\_nextRenderWait](ILeaferBase.md#__nextrenderwait)
- [isApp](ILeaferBase.md#isapp)
- [app](ILeaferBase.md#app)
- [parentApp](ILeaferBase.md#parentapp)
- [parent](ILeaferBase.md#parent)
- [children](ILeaferBase.md#children)
- [id](ILeaferBase.md#id)
- [name](ILeaferBase.md#name)
- [className](ILeaferBase.md#classname)
- [blendMode](ILeaferBase.md#blendmode)
- [opacity](ILeaferBase.md#opacity)
- [visible](ILeaferBase.md#visible)
- [selected](ILeaferBase.md#selected)
- [disabled](ILeaferBase.md#disabled)
- [locked](ILeaferBase.md#locked)
- [zIndex](ILeaferBase.md#zindex)
- [dim](ILeaferBase.md#dim)
- [dimskip](ILeaferBase.md#dimskip)
- [mask](ILeaferBase.md#mask)
- [eraser](ILeaferBase.md#eraser)
- [filter](ILeaferBase.md#filter)
- [x](ILeaferBase.md#x)
- [y](ILeaferBase.md#y)
- [width](ILeaferBase.md#width)
- [height](ILeaferBase.md#height)
- [scaleX](ILeaferBase.md#scalex)
- [scaleY](ILeaferBase.md#scaley)
- [rotation](ILeaferBase.md#rotation)
- [skewX](ILeaferBase.md#skewx)
- [skewY](ILeaferBase.md#skewy)
- [scale](ILeaferBase.md#scale)
- [offsetX](ILeaferBase.md#offsetx)
- [offsetY](ILeaferBase.md#offsety)
- [scrollX](ILeaferBase.md#scrollx)
- [scrollY](ILeaferBase.md#scrolly)
- [origin](ILeaferBase.md#origin)
- [around](ILeaferBase.md#around)
- [lazy](ILeaferBase.md#lazy)
- [pixelRatio](ILeaferBase.md#pixelratio)
- [renderSpread](ILeaferBase.md#renderspread)
- [path](ILeaferBase.md#path)
- [windingRule](ILeaferBase.md#windingrule)
- [closed](ILeaferBase.md#closed)
- [flow](ILeaferBase.md#flow)
- [padding](ILeaferBase.md#padding)
- [gap](ILeaferBase.md#gap)
- [flowAlign](ILeaferBase.md#flowalign)
- [flowWrap](ILeaferBase.md#flowwrap)
- [itemBox](ILeaferBase.md#itembox)
- [inFlow](ILeaferBase.md#inflow)
- [autoWidth](ILeaferBase.md#autowidth)
- [autoHeight](ILeaferBase.md#autoheight)
- [lockRatio](ILeaferBase.md#lockratio)
- [autoBox](ILeaferBase.md#autobox)
- [widthRange](ILeaferBase.md#widthrange)
- [heightRange](ILeaferBase.md#heightrange)
- [draggable](ILeaferBase.md#draggable)
- [dragBounds](ILeaferBase.md#dragbounds)
- [dragBoundsType](ILeaferBase.md#dragboundstype)
- [editable](ILeaferBase.md#editable)
- [hittable](ILeaferBase.md#hittable)
- [hitFill](ILeaferBase.md#hitfill)
- [hitStroke](ILeaferBase.md#hitstroke)
- [hitBox](ILeaferBase.md#hitbox)
- [hitChildren](ILeaferBase.md#hitchildren)
- [hitSelf](ILeaferBase.md#hitself)
- [hitRadius](ILeaferBase.md#hitradius)
- [button](ILeaferBase.md#button)
- [cursor](ILeaferBase.md#cursor)
- [motionPath](ILeaferBase.md#motionpath)
- [motionPrecision](ILeaferBase.md#motionprecision)
- [motion](ILeaferBase.md#motion)
- [motionRotation](ILeaferBase.md#motionrotation)
- [normalStyle](ILeaferBase.md#normalstyle)
- [event](ILeaferBase.md#event)
- [data](ILeaferBase.md#data)
- [tag](ILeaferBase.md#tag)
- [\_\_tag](ILeaferBase.md#__tag)
- [innerName](ILeaferBase.md#innername)
- [\_\_DataProcessor](ILeaferBase.md#__dataprocessor)
- [\_\_LayoutProcessor](ILeaferBase.md#__layoutprocessor)
- [leafer](ILeaferBase.md#leafer)
- [zoomLayer](ILeaferBase.md#zoomlayer)
- [leaferIsCreated](ILeaferBase.md#leaferiscreated)
- [leaferIsReady](ILeaferBase.md#leaferisready)
- [isLeafer](ILeaferBase.md#isleafer)
- [isBranch](ILeaferBase.md#isbranch)
- [isBranchLeaf](ILeaferBase.md#isbranchleaf)
- [isOutside](ILeaferBase.md#isoutside)
- [\_\_](ILeaferBase.md#__)
- [proxyData](ILeaferBase.md#proxydata)
- [\_\_proxyData](ILeaferBase.md#__proxydata)
- [syncEventer](ILeaferBase.md#synceventer)
- [lockNormalStyle](ILeaferBase.md#locknormalstyle)
- [\_\_layout](ILeaferBase.md#__layout)
- [\_\_world](ILeaferBase.md#__world)
- [\_\_local](ILeaferBase.md#__local)
- [\_\_nowWorld](ILeaferBase.md#__nowworld)
- [\_\_cameraWorld](ILeaferBase.md#__cameraworld)
- [\_\_localMatrix](ILeaferBase.md#__localmatrix)
- [\_\_localBoxBounds](ILeaferBase.md#__localboxbounds)
- [\_\_worldOpacity](ILeaferBase.md#__worldopacity)
- [worldTransform](ILeaferBase.md#worldtransform)
- [localTransform](ILeaferBase.md#localtransform)
- [\_\_scrollWorld](ILeaferBase.md#__scrollworld)
- [scrollWorldTransform](ILeaferBase.md#scrollworldtransform)
- [boxBounds](ILeaferBase.md#boxbounds)
- [renderBounds](ILeaferBase.md#renderbounds)
- [worldBoxBounds](ILeaferBase.md#worldboxbounds)
- [worldStrokeBounds](ILeaferBase.md#worldstrokebounds)
- [worldRenderBounds](ILeaferBase.md#worldrenderbounds)
- [worldOpacity](ILeaferBase.md#worldopacity)
- [\_\_level](ILeaferBase.md#__level)
- [\_\_tempNumber](ILeaferBase.md#__tempnumber)
- [\_\_worldFlipped](ILeaferBase.md#__worldflipped)
- [animation](ILeaferBase.md#animation)
- [animationOut](ILeaferBase.md#animationout)
- [\_\_hasAutoLayout](ILeaferBase.md#__hasautolayout)
- [\_\_hasMotionPath](ILeaferBase.md#__hasmotionpath)
- [\_\_hasMask](ILeaferBase.md#__hasmask)
- [\_\_hasEraser](ILeaferBase.md#__haseraser)
- [\_\_hitCanvas](ILeaferBase.md#__hitcanvas)
- [\_\_flowBounds](ILeaferBase.md#__flowbounds)
- [\_\_widthGrow](ILeaferBase.md#__widthgrow)
- [\_\_heightGrow](ILeaferBase.md#__heightgrow)
- [\_\_hasGrow](ILeaferBase.md#__hasgrow)
- [\_\_onlyHitMask](ILeaferBase.md#__onlyhitmask)
- [\_\_ignoreHitWorld](ILeaferBase.md#__ignorehitworld)
- [\_\_inLazyBounds](ILeaferBase.md#__inlazybounds)
- [pathInputed](ILeaferBase.md#pathinputed)
- [isAutoWidth](ILeaferBase.md#isautowidth)
- [isAutoHeight](ILeaferBase.md#isautoheight)
- [destroyed](ILeaferBase.md#destroyed)
- [topChildren](ILeaferBase.md#topchildren)
- [innerId](ILeaferBase.md#innerid)
- [\_\_captureMap](ILeaferBase.md#__capturemap)
- [\_\_bubbleMap](ILeaferBase.md#__bubblemap)
- [\_\_hasLocalEvent](ILeaferBase.md#__haslocalevent)
- [\_\_hasWorldEvent](ILeaferBase.md#__hasworldevent)

### Methods

- [init](ILeaferBase.md#init)
- [unlockLayout](ILeaferBase.md#unlocklayout)
- [lockLayout](ILeaferBase.md#locklayout)
- [requestRender](ILeaferBase.md#requestrender)
- [updateCursor](ILeaferBase.md#updatecursor)
- [resize](ILeaferBase.md#resize)
- [waitReady](ILeaferBase.md#waitready)
- [waitViewReady](ILeaferBase.md#waitviewready)
- [waitViewCompleted](ILeaferBase.md#waitviewcompleted)
- [zoom](ILeaferBase.md#zoom)
- [getValidMove](ILeaferBase.md#getvalidmove)
- [getValidScale](ILeaferBase.md#getvalidscale)
- [getWorldPointByClient](ILeaferBase.md#getworldpointbyclient)
- [getPagePointByClient](ILeaferBase.md#getpagepointbyclient)
- [getClientPointByWorld](ILeaferBase.md#getclientpointbyworld)
- [updateClientBounds](ILeaferBase.md#updateclientbounds)
- [receiveEvent](ILeaferBase.md#receiveevent)
- [start](ILeaferBase.md#start)
- [stop](ILeaferBase.md#stop)
- [\_\_renderBranch](ILeaferBase.md#__renderbranch)
- [addMany](ILeaferBase.md#addmany)
- [removeAll](ILeaferBase.md#removeall)
- [clear](ILeaferBase.md#clear)
- [reset](ILeaferBase.md#reset)
- [resetCustom](ILeaferBase.md#resetcustom)
- [waitParent](ILeaferBase.md#waitparent)
- [waitLeafer](ILeaferBase.md#waitleafer)
- [nextRender](ILeaferBase.md#nextrender)
- [removeNextRender](ILeaferBase.md#removenextrender)
- [\_\_bindLeafer](ILeaferBase.md#__bindleafer)
- [set](ILeaferBase.md#set)
- [get](ILeaferBase.md#get)
- [setAttr](ILeaferBase.md#setattr)
- [getAttr](ILeaferBase.md#getattr)
- [getComputedAttr](ILeaferBase.md#getcomputedattr)
- [toJSON](ILeaferBase.md#tojson)
- [toString](ILeaferBase.md#tostring)
- [toSVG](ILeaferBase.md#tosvg)
- [\_\_SVG](ILeaferBase.md#__svg)
- [toHTML](ILeaferBase.md#tohtml)
- [clone](ILeaferBase.md#clone)
- [animate](ILeaferBase.md#animate)
- [\_\_setAttr](ILeaferBase.md#__setattr)
- [\_\_getAttr](ILeaferBase.md#__getattr)
- [setProxyAttr](ILeaferBase.md#setproxyattr)
- [getProxyAttr](ILeaferBase.md#getproxyattr)
- [find](ILeaferBase.md#find)
- [findTag](ILeaferBase.md#findtag)
- [findOne](ILeaferBase.md#findone)
- [findId](ILeaferBase.md#findid)
- [focus](ILeaferBase.md#focus)
- [updateState](ILeaferBase.md#updatestate)
- [updateLayout](ILeaferBase.md#updatelayout)
- [forceUpdate](ILeaferBase.md#forceupdate)
- [forceRender](ILeaferBase.md#forcerender)
- [\_\_extraUpdate](ILeaferBase.md#__extraupdate)
- [\_\_updateWorldMatrix](ILeaferBase.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](ILeaferBase.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](ILeaferBase.md#__updateworldbounds)
- [\_\_updateLocalBounds](ILeaferBase.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](ILeaferBase.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](ILeaferBase.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](ILeaferBase.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](ILeaferBase.md#__updatecontentbounds)
- [\_\_updateBoxBounds](ILeaferBase.md#__updateboxbounds)
- [\_\_updateStrokeBounds](ILeaferBase.md#__updatestrokebounds)
- [\_\_updateRenderBounds](ILeaferBase.md#__updaterenderbounds)
- [\_\_updateAutoLayout](ILeaferBase.md#__updateautolayout)
- [\_\_updateFlowLayout](ILeaferBase.md#__updateflowlayout)
- [\_\_updateNaturalSize](ILeaferBase.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](ILeaferBase.md#__updatestrokespread)
- [\_\_updateRenderSpread](ILeaferBase.md#__updaterenderspread)
- [\_\_onUpdateSize](ILeaferBase.md#__onupdatesize)
- [\_\_updateEraser](ILeaferBase.md#__updateeraser)
- [\_\_updateMask](ILeaferBase.md#__updatemask)
- [\_\_renderMask](ILeaferBase.md#__rendermask)
- [\_\_renderEraser](ILeaferBase.md#__rendereraser)
- [\_\_getNowWorld](ILeaferBase.md#__getnowworld)
- [getClampRenderScale](ILeaferBase.md#getclamprenderscale)
- [getRenderScaleData](ILeaferBase.md#getrenderscaledata)
- [getTransform](ILeaferBase.md#gettransform)
- [getBounds](ILeaferBase.md#getbounds)
- [getLayoutBounds](ILeaferBase.md#getlayoutbounds)
- [getLayoutPoints](ILeaferBase.md#getlayoutpoints)
- [getWorldBounds](ILeaferBase.md#getworldbounds)
- [worldToLocal](ILeaferBase.md#worldtolocal)
- [localToWorld](ILeaferBase.md#localtoworld)
- [worldToInner](ILeaferBase.md#worldtoinner)
- [innerToWorld](ILeaferBase.md#innertoworld)
- [getBoxPoint](ILeaferBase.md#getboxpoint)
- [getBoxPointByInner](ILeaferBase.md#getboxpointbyinner)
- [getInnerPoint](ILeaferBase.md#getinnerpoint)
- [getInnerPointByBox](ILeaferBase.md#getinnerpointbybox)
- [getInnerPointByLocal](ILeaferBase.md#getinnerpointbylocal)
- [getLocalPoint](ILeaferBase.md#getlocalpoint)
- [getLocalPointByInner](ILeaferBase.md#getlocalpointbyinner)
- [getPagePoint](ILeaferBase.md#getpagepoint)
- [getWorldPoint](ILeaferBase.md#getworldpoint)
- [getWorldPointByBox](ILeaferBase.md#getworldpointbybox)
- [getWorldPointByLocal](ILeaferBase.md#getworldpointbylocal)
- [getWorldPointByPage](ILeaferBase.md#getworldpointbypage)
- [setTransform](ILeaferBase.md#settransform)
- [transform](ILeaferBase.md#transform)
- [move](ILeaferBase.md#move)
- [moveInner](ILeaferBase.md#moveinner)
- [scaleOf](ILeaferBase.md#scaleof)
- [rotateOf](ILeaferBase.md#rotateof)
- [skewOf](ILeaferBase.md#skewof)
- [transformWorld](ILeaferBase.md#transformworld)
- [moveWorld](ILeaferBase.md#moveworld)
- [scaleOfWorld](ILeaferBase.md#scaleofworld)
- [rotateOfWorld](ILeaferBase.md#rotateofworld)
- [skewOfWorld](ILeaferBase.md#skewofworld)
- [flip](ILeaferBase.md#flip)
- [scaleResize](ILeaferBase.md#scaleresize)
- [\_\_scaleResize](ILeaferBase.md#__scaleresize)
- [resizeWidth](ILeaferBase.md#resizewidth)
- [resizeHeight](ILeaferBase.md#resizeheight)
- [hit](ILeaferBase.md#hit)
- [\_\_hitWorld](ILeaferBase.md#__hitworld)
- [\_\_hit](ILeaferBase.md#__hit)
- [\_\_hitFill](ILeaferBase.md#__hitfill)
- [\_\_hitStroke](ILeaferBase.md#__hitstroke)
- [\_\_hitPixel](ILeaferBase.md#__hitpixel)
- [\_\_drawHitPath](ILeaferBase.md#__drawhitpath)
- [\_\_updateHitCanvas](ILeaferBase.md#__updatehitcanvas)
- [\_\_render](ILeaferBase.md#__render)
- [\_\_drawFast](ILeaferBase.md#__drawfast)
- [\_\_draw](ILeaferBase.md#__draw)
- [\_\_clip](ILeaferBase.md#__clip)
- [\_\_renderShape](ILeaferBase.md#__rendershape)
- [\_\_drawShape](ILeaferBase.md#__drawshape)
- [\_\_updateWorldOpacity](ILeaferBase.md#__updateworldopacity)
- [\_\_updateChange](ILeaferBase.md#__updatechange)
- [\_\_drawPath](ILeaferBase.md#__drawpath)
- [\_\_drawRenderPath](ILeaferBase.md#__drawrenderpath)
- [\_\_updatePath](ILeaferBase.md#__updatepath)
- [\_\_updateRenderPath](ILeaferBase.md#__updaterenderpath)
- [getMotionPathData](ILeaferBase.md#getmotionpathdata)
- [getMotionPoint](ILeaferBase.md#getmotionpoint)
- [getMotionTotal](ILeaferBase.md#getmotiontotal)
- [\_\_updateMotionPath](ILeaferBase.md#__updatemotionpath)
- [\_\_runAnimation](ILeaferBase.md#__runanimation)
- [\_\_emitLifeEvent](ILeaferBase.md#__emitlifeevent)
- [\_\_updateSortChildren](ILeaferBase.md#__updatesortchildren)
- [add](ILeaferBase.md#add)
- [remove](ILeaferBase.md#remove)
- [dropTo](ILeaferBase.md#dropto)
- [\_\_realSetAttr](ILeaferBase.md#__realsetattr)
- [emitPropertyEvent](ILeaferBase.md#emitpropertyevent)
- [destroyEventer](ILeaferBase.md#destroyeventer)
- [on](ILeaferBase.md#on)
- [off](ILeaferBase.md#off)
- [on\_](ILeaferBase.md#on_)
- [off\_](ILeaferBase.md#off_)
- [once](ILeaferBase.md#once)
- [emit](ILeaferBase.md#emit)
- [emitEvent](ILeaferBase.md#emitevent)
- [hasEvent](ILeaferBase.md#hasevent)
- [destroy](ILeaferBase.md#destroy)

## Properties

### running

• **running**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[running](ILeaferAttrData.md#running)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:32](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L32)

___

### created

• **created**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[created](ILeaferAttrData.md#created)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:33](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L33)

___

### ready

• **ready**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[ready](ILeaferAttrData.md#ready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:34](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L34)

___

### viewReady

• **viewReady**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[viewReady](ILeaferAttrData.md#viewready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:35](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L35)

___

### imageReady

• **imageReady**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[imageReady](ILeaferAttrData.md#imageready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:36](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L36)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[viewCompleted](ILeaferAttrData.md#viewcompleted)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:37](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L37)

___

### layoutLocked

• **layoutLocked**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[layoutLocked](ILeaferAttrData.md#layoutlocked)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:38](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L38)

___

### transforming

• **transforming**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[transforming](ILeaferAttrData.md#transforming)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:40](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L40)

___

### view

• **view**: `unknown`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[view](ILeaferAttrData.md#view)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:42](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L42)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[canvas](ILeaferAttrData.md#canvas)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:44](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L44)

___

### renderer

• **renderer**: [`IRenderer`](IRenderer.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[renderer](ILeaferAttrData.md#renderer)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:45](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L45)

___

### watcher

• **watcher**: [`IWatcher`](IWatcher.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[watcher](ILeaferAttrData.md#watcher)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:47](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L47)

___

### layouter

• **layouter**: [`ILayouter`](ILayouter.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[layouter](ILeaferAttrData.md#layouter)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:48](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L48)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[selector](ILeaferAttrData.md#selector)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:50](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L50)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](IInteraction.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[interaction](ILeaferAttrData.md#interaction)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:51](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L51)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[canvasManager](ILeaferAttrData.md#canvasmanager)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:53](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L53)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](IHitCanvasManager.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[hitCanvasManager](ILeaferAttrData.md#hitcanvasmanager)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:54](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L54)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](IAutoBounds.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[autoLayout](ILeaferAttrData.md#autolayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:56](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L56)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[lazyBounds](ILeaferAttrData.md#lazybounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:57](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L57)

___

### config

• **config**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[config](ILeaferAttrData.md#config)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:59](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L59)

___

### userConfig

• `Optional` **userConfig**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[userConfig](ILeaferAttrData.md#userconfig)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:60](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L60)

___

### cursorPoint

• `Readonly` **cursorPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[cursorPoint](ILeaferAttrData.md#cursorpoint)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:62](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L62)

___

### clientBounds

• `Readonly` **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[clientBounds](ILeaferAttrData.md#clientbounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:63](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L63)

___

### leafs

• **leafs**: `number`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[leafs](ILeaferAttrData.md#leafs)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:64](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L64)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[__eventIds](ILeaferAttrData.md#__eventids)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:66](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L66)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](IFunction.md)[]

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[__nextRenderWait](ILeaferAttrData.md#__nextrenderwait)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:67](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L67)

___

### isApp

• `Readonly` **isApp**: `boolean`

#### Overrides

[IZoomView](IZoomView.md).[isApp](IZoomView.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:108](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L108)

___

### app

• `Readonly` **app**: [`ILeaferBase`](ILeaferBase.md)

#### Overrides

[IZoomView](IZoomView.md).[app](IZoomView.md#app)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:109](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L109)

___

### parentApp

• `Optional` **parentApp**: [`IAppBase`](IAppBase.md)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:110](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L110)

___

### parent

• `Optional` **parent**: [`IAppBase`](IAppBase.md)

#### Overrides

[IZoomView](IZoomView.md).[parent](IZoomView.md#parent)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:111](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L111)

___

### children

• **children**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IZoomView](IZoomView.md).[children](IZoomView.md#children)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:6](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/IBranch.ts#L6)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[id](IZoomView.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L223)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[name](IZoomView.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L224)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[className](IZoomView.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L225)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IZoomView](IZoomView.md).[blendMode](IZoomView.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L227)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[opacity](IZoomView.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L229)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IZoomView](IZoomView.md).[visible](IZoomView.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L230)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[selected](IZoomView.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L231)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[disabled](IZoomView.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L232)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[locked](IZoomView.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L233)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[zIndex](IZoomView.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L234)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[dim](IZoomView.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L236)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[dimskip](IZoomView.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L237)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IZoomView](IZoomView.md).[mask](IZoomView.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L239)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IZoomView](IZoomView.md).[eraser](IZoomView.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L240)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IZoomView](IZoomView.md).[filter](IZoomView.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[x](IZoomView.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[y](IZoomView.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[width](IZoomView.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[height](IZoomView.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[scaleX](IZoomView.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[scaleY](IZoomView.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L249)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[rotation](IZoomView.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L250)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[skewX](IZoomView.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L251)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[skewY](IZoomView.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L252)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IZoomView](IZoomView.md).[scale](IZoomView.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L254)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[offsetX](IZoomView.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L256)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[offsetY](IZoomView.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L257)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[scrollX](IZoomView.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[scrollY](IZoomView.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L259)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IZoomView](IZoomView.md).[origin](IZoomView.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L261)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IZoomView](IZoomView.md).[around](IZoomView.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L262)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[lazy](IZoomView.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L264)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[pixelRatio](IZoomView.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L265)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[renderSpread](IZoomView.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L267)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IZoomView](IZoomView.md).[path](IZoomView.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L269)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IZoomView](IZoomView.md).[windingRule](IZoomView.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L270)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[closed](IZoomView.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L271)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IZoomView](IZoomView.md).[flow](IZoomView.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L274)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IZoomView](IZoomView.md).[padding](IZoomView.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L275)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IZoomView](IZoomView.md).[gap](IZoomView.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L276)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IZoomView](IZoomView.md).[flowAlign](IZoomView.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L277)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IZoomView](IZoomView.md).[flowWrap](IZoomView.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L278)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IZoomView](IZoomView.md).[itemBox](IZoomView.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L279)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[inFlow](IZoomView.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L281)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IZoomView](IZoomView.md).[autoWidth](IZoomView.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L282)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IZoomView](IZoomView.md).[autoHeight](IZoomView.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L283)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[lockRatio](IZoomView.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L284)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IZoomView](IZoomView.md).[autoBox](IZoomView.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L285)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IZoomView](IZoomView.md).[widthRange](IZoomView.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L287)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IZoomView](IZoomView.md).[heightRange](IZoomView.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L288)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IZoomView](IZoomView.md).[draggable](IZoomView.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L291)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[dragBounds](IZoomView.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IZoomView](IZoomView.md).[dragBoundsType](IZoomView.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L293)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[editable](IZoomView.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L295)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[hittable](IZoomView.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L297)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IZoomView](IZoomView.md).[hitFill](IZoomView.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L298)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IZoomView](IZoomView.md).[hitStroke](IZoomView.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L299)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[hitBox](IZoomView.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L300)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[hitChildren](IZoomView.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L301)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[hitSelf](IZoomView.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L302)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[hitRadius](IZoomView.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L303)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[button](IZoomView.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L305)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IZoomView](IZoomView.md).[cursor](IZoomView.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L306)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[motionPath](IZoomView.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:308](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L308)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[motionPrecision](IZoomView.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L309)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IZoomView](IZoomView.md).[motion](IZoomView.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:311](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L311)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[motionRotation](IZoomView.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L312)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IZoomView](IZoomView.md).[normalStyle](IZoomView.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L314)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IZoomView](IZoomView.md).[event](IZoomView.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L316)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IZoomView](IZoomView.md).[data](IZoomView.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:319](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L319)

___

### tag

• **tag**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[tag](IZoomView.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[__tag](IZoomView.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L453)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IZoomView](IZoomView.md).[innerName](IZoomView.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IZoomView](IZoomView.md).[__DataProcessor](IZoomView.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L456)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IZoomView](IZoomView.md).[__LayoutProcessor](IZoomView.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L457)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[IZoomView](IZoomView.md).[leafer](IZoomView.md#leafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L460)

___

### zoomLayer

• `Optional` **zoomLayer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IZoomView](IZoomView.md).[zoomLayer](IZoomView.md#zoomlayer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L462)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[leaferIsCreated](IZoomView.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L464)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[leaferIsReady](IZoomView.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L465)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isLeafer](IZoomView.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L468)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isBranch](IZoomView.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L469)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isBranchLeaf](IZoomView.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L470)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isOutside](IZoomView.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_

• **\_\_**: [`ILeafData`](ILeafData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__](IZoomView.md#__)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L473)

___

### proxyData

• `Optional` **proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[IZoomView](IZoomView.md).[proxyData](IZoomView.md#proxydata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L475)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__proxyData](IZoomView.md#__proxydata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L476)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IZoomView](IZoomView.md).[syncEventer](IZoomView.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L478)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[lockNormalStyle](IZoomView.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L479)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IZoomView](IZoomView.md).[__layout](IZoomView.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L481)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__world](IZoomView.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L483)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__local](IZoomView.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__nowWorld](IZoomView.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__cameraWorld](IZoomView.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__localMatrix](IZoomView.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__localBoxBounds](IZoomView.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[__worldOpacity](IZoomView.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L492)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[worldTransform](IZoomView.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L494)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IZoomView](IZoomView.md).[localTransform](IZoomView.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__scrollWorld](IZoomView.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L497)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IZoomView](IZoomView.md).[scrollWorldTransform](IZoomView.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L498)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[boxBounds](IZoomView.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L500)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[renderBounds](IZoomView.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L501)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[worldBoxBounds](IZoomView.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L502)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[worldStrokeBounds](IZoomView.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L503)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[worldRenderBounds](IZoomView.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L504)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[worldOpacity](IZoomView.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[__level](IZoomView.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[__tempNumber](IZoomView.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__worldFlipped](IZoomView.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L511)

___

### animation

• `Optional` **animation**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[IZoomView](IZoomView.md).[animation](IZoomView.md#animation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L513)

___

### animationOut

• `Optional` **animationOut**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[IZoomView](IZoomView.md).[animationOut](IZoomView.md#animationout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L514)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasAutoLayout](IZoomView.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L516)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasMotionPath](IZoomView.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L517)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasMask](IZoomView.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L519)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasEraser](IZoomView.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L520)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IZoomView](IZoomView.md).[__hitCanvas](IZoomView.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L521)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IZoomView](IZoomView.md).[__flowBounds](IZoomView.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L523)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[__widthGrow](IZoomView.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[__heightGrow](IZoomView.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L525)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasGrow](IZoomView.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__onlyHitMask](IZoomView.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L528)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__ignoreHitWorld](IZoomView.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L529)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__inLazyBounds](IZoomView.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L530)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[pathInputed](IZoomView.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L532)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isAutoWidth](IZoomView.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L534)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[isAutoHeight](IZoomView.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L535)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[destroyed](IZoomView.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L537)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IZoomView](IZoomView.md).[topChildren](IZoomView.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:713](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L713)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IZoomView](IZoomView.md).[innerId](IZoomView.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IZoomView](IZoomView.md).[__captureMap](IZoomView.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IZoomView](IZoomView.md).[__bubbleMap](IZoomView.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasLocalEvent](IZoomView.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IZoomView](IZoomView.md).[__hasWorldEvent](IZoomView.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L45)

## Methods

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](ILeaferConfig.md) |
| `parentApp?` | [`IAppBase`](IAppBase.md) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[init](ILeaferAttrData.md#init)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:69](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L69)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[unlockLayout](ILeaferAttrData.md#unlocklayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:74](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L74)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[lockLayout](ILeaferAttrData.md#locklayout)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:75](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L75)

___

### requestRender

▸ **requestRender**(`change`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `change` | `boolean` |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[requestRender](ILeaferAttrData.md#requestrender)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:77](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L77)

___

### updateCursor

▸ **updateCursor**(`cursor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | [`ICursorType`](../modules.md#icursortype) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[updateCursor](ILeaferAttrData.md#updatecursor)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:79](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L79)

___

### resize

▸ **resize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](IScreenSizeData.md) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[resize](ILeaferAttrData.md#resize)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:80](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L80)

___

### waitReady

▸ **waitReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[waitReady](ILeaferAttrData.md#waitready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:82](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L82)

___

### waitViewReady

▸ **waitViewReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[waitViewReady](ILeaferAttrData.md#waitviewready)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:83](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L83)

___

### waitViewCompleted

▸ **waitViewCompleted**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[waitViewCompleted](ILeaferAttrData.md#waitviewcompleted)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:84](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L84)

___

### zoom

▸ **zoom**(`zoomType`, `optionsOrPadding?`, `scroll?`, `transition?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `optionsOrPadding?` | [`IFourNumber`](../modules.md#ifournumber) \| [`IZoomOptions`](IZoomOptions.md) |
| `scroll?` | `boolean` \| ``"x"`` \| ``"y"`` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[zoom](ILeaferAttrData.md#zoom)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:86](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L86)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`, `checkLimit?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |
| `checkLimit?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[getValidMove](ILeaferAttrData.md#getvalidmove)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:87](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L87)

___

### getValidScale

▸ **getValidScale**(`changeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeScale` | `number` |

#### Returns

`number`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[getValidScale](ILeaferAttrData.md#getvalidscale)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:88](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L88)

___

### getWorldPointByClient

▸ **getWorldPointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[getWorldPointByClient](ILeaferAttrData.md#getworldpointbyclient)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:90](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L90)

___

### getPagePointByClient

▸ **getPagePointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[getPagePointByClient](ILeaferAttrData.md#getpagepointbyclient)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:91](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L91)

___

### getClientPointByWorld

▸ **getClientPointByWorld**(`worldPoint`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldPoint` | [`IPointData`](IPointData.md) |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[getClientPointByWorld](ILeaferAttrData.md#getclientpointbyworld)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:92](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L92)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[updateClientBounds](ILeaferAttrData.md#updateclientbounds)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:93](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L93)

___

### receiveEvent

▸ **receiveEvent**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[receiveEvent](ILeaferAttrData.md#receiveevent)

#### Defined in

[src/leafer/packages/interface/src/app/ILeafer.ts:95](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/app/ILeafer.ts#L95)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[start](ILeaferAttrData.md#start)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[stop](ILeaferAttrData.md#stop)

#### Defined in

[src/leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/control/IControl.ts#L3)

___

### \_\_renderBranch

▸ **__renderBranch**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__renderBranch](IZoomView.md#__renderbranch)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:7](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/IBranch.ts#L7)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | [`ILeaf`](ILeaf.md)[] \| [`ILeafInputData`](ILeafInputData.md)[] |

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[addMany](IZoomView.md#addmany)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:8](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/IBranch.ts#L8)

___

### removeAll

▸ **removeAll**(`destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[removeAll](IZoomView.md#removeall)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:9](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/IBranch.ts#L9)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[clear](IZoomView.md#clear)

#### Defined in

[src/leafer/packages/interface/src/display/IBranch.ts:10](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/IBranch.ts#L10)

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

[IZoomView](IZoomView.md).[reset](IZoomView.md#reset)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L539)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[resetCustom](IZoomView.md#resetcustom)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L540)

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

[IZoomView](IZoomView.md).[waitParent](IZoomView.md#waitparent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L542)

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

[IZoomView](IZoomView.md).[waitLeafer](IZoomView.md#waitleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L543)

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

[IZoomView](IZoomView.md).[nextRender](IZoomView.md#nextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L544)

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

[IZoomView](IZoomView.md).[removeNextRender](IZoomView.md#removenextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L545)

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

[IZoomView](IZoomView.md).[__bindLeafer](IZoomView.md#__bindleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L547)

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

[IZoomView](IZoomView.md).[set](IZoomView.md#set)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L549)

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

[IZoomView](IZoomView.md).[get](IZoomView.md#get)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:550](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L550)

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

[IZoomView](IZoomView.md).[setAttr](IZoomView.md#setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L551)

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

[IZoomView](IZoomView.md).[getAttr](IZoomView.md#getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:552](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L552)

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

[IZoomView](IZoomView.md).[getComputedAttr](IZoomView.md#getcomputedattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L553)

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

[IZoomView](IZoomView.md).[toJSON](IZoomView.md#tojson)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L555)

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

[IZoomView](IZoomView.md).[toString](IZoomView.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L556)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IZoomView](IZoomView.md).[toSVG](IZoomView.md#tosvg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:557](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L557)

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

[IZoomView](IZoomView.md).[__SVG](IZoomView.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L558)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IZoomView](IZoomView.md).[toHTML](IZoomView.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L559)

___

### clone

▸ **clone**(`data?`): [`ILeaf`](ILeaf.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ILeafInputData`](ILeafInputData.md) |

#### Returns

[`ILeaf`](ILeaf.md)

#### Inherited from

[IZoomView](IZoomView.md).[clone](IZoomView.md#clone)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L560)

___

### animate

▸ **animate**(`_keyframe?`, `_options?`, `_type?`, `_isTemp?`): `any`

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

[IZoomView](IZoomView.md).[animate](IZoomView.md#animate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L562)

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

[IZoomView](IZoomView.md).[__setAttr](IZoomView.md#__setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L565)

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

[IZoomView](IZoomView.md).[__getAttr](IZoomView.md#__getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L566)

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

[IZoomView](IZoomView.md).[setProxyAttr](IZoomView.md#setproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L567)

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

[IZoomView](IZoomView.md).[getProxyAttr](IZoomView.md#getproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L568)

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

[IZoomView](IZoomView.md).[find](IZoomView.md#find)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L571)

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

[IZoomView](IZoomView.md).[findTag](IZoomView.md#findtag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L572)

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

[IZoomView](IZoomView.md).[findOne](IZoomView.md#findone)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L573)

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

[IZoomView](IZoomView.md).[findId](IZoomView.md#findid)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L574)

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

[IZoomView](IZoomView.md).[focus](IZoomView.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L576)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[updateState](IZoomView.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L578)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[updateLayout](IZoomView.md#updatelayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L579)

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

[IZoomView](IZoomView.md).[forceUpdate](IZoomView.md#forceupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L580)

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

[IZoomView](IZoomView.md).[forceRender](IZoomView.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__extraUpdate](IZoomView.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateWorldMatrix](IZoomView.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateLocalMatrix](IZoomView.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateWorldBounds](IZoomView.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L590)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateLocalBounds](IZoomView.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:591](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L591)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateLocalBoxBounds](IZoomView.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L593)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateLocalStrokeBounds](IZoomView.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L594)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateLocalRenderBounds](IZoomView.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L595)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateContentBounds](IZoomView.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L597)

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

[IZoomView](IZoomView.md).[__updateBoxBounds](IZoomView.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L598)

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

[IZoomView](IZoomView.md).[__updateStrokeBounds](IZoomView.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L599)

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

[IZoomView](IZoomView.md).[__updateRenderBounds](IZoomView.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L600)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateAutoLayout](IZoomView.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L602)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateFlowLayout](IZoomView.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateNaturalSize](IZoomView.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L604)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IZoomView](IZoomView.md).[__updateStrokeSpread](IZoomView.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IZoomView](IZoomView.md).[__updateRenderSpread](IZoomView.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__onUpdateSize](IZoomView.md#__onupdatesize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L609)

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

[IZoomView](IZoomView.md).[__updateEraser](IZoomView.md#__updateeraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L612)

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

[IZoomView](IZoomView.md).[__updateMask](IZoomView.md#__updatemask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L613)

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

[IZoomView](IZoomView.md).[__renderMask](IZoomView.md#__rendermask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L614)

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

[IZoomView](IZoomView.md).[__renderEraser](IZoomView.md#__rendereraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L615)

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

[IZoomView](IZoomView.md).[__getNowWorld](IZoomView.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L618)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[IZoomView](IZoomView.md).[getClampRenderScale](IZoomView.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L619)

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

[IZoomView](IZoomView.md).[getRenderScaleData](IZoomView.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L620)

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

[IZoomView](IZoomView.md).[getTransform](IZoomView.md#gettransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L622)

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

[IZoomView](IZoomView.md).[getBounds](IZoomView.md#getbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L624)

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

[IZoomView](IZoomView.md).[getLayoutBounds](IZoomView.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:625](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L625)

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

[IZoomView](IZoomView.md).[getLayoutPoints](IZoomView.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L626)

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

[IZoomView](IZoomView.md).[getWorldBounds](IZoomView.md#getworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L628)

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

[IZoomView](IZoomView.md).[worldToLocal](IZoomView.md#worldtolocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:630](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L630)

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

[IZoomView](IZoomView.md).[localToWorld](IZoomView.md#localtoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L631)

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

[IZoomView](IZoomView.md).[worldToInner](IZoomView.md#worldtoinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L632)

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

[IZoomView](IZoomView.md).[innerToWorld](IZoomView.md#innertoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L633)

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

[IZoomView](IZoomView.md).[getBoxPoint](IZoomView.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L635)

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

[IZoomView](IZoomView.md).[getBoxPointByInner](IZoomView.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L636)

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

[IZoomView](IZoomView.md).[getInnerPoint](IZoomView.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L637)

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

[IZoomView](IZoomView.md).[getInnerPointByBox](IZoomView.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L638)

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

[IZoomView](IZoomView.md).[getInnerPointByLocal](IZoomView.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L639)

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

[IZoomView](IZoomView.md).[getLocalPoint](IZoomView.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L640)

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

[IZoomView](IZoomView.md).[getLocalPointByInner](IZoomView.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L641)

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

[IZoomView](IZoomView.md).[getPagePoint](IZoomView.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L642)

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

[IZoomView](IZoomView.md).[getWorldPoint](IZoomView.md#getworldpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L643)

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

[IZoomView](IZoomView.md).[getWorldPointByBox](IZoomView.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L644)

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

[IZoomView](IZoomView.md).[getWorldPointByLocal](IZoomView.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L645)

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

[IZoomView](IZoomView.md).[getWorldPointByPage](IZoomView.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L646)

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

[IZoomView](IZoomView.md).[setTransform](IZoomView.md#settransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L649)

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

[IZoomView](IZoomView.md).[transform](IZoomView.md#transform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L650)

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

[IZoomView](IZoomView.md).[move](IZoomView.md#move)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L651)

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

[IZoomView](IZoomView.md).[moveInner](IZoomView.md#moveinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L653)

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

[IZoomView](IZoomView.md).[scaleOf](IZoomView.md#scaleof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L654)

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

[IZoomView](IZoomView.md).[rotateOf](IZoomView.md#rotateof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L655)

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

[IZoomView](IZoomView.md).[skewOf](IZoomView.md#skewof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L656)

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

[IZoomView](IZoomView.md).[transformWorld](IZoomView.md#transformworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L658)

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

[IZoomView](IZoomView.md).[moveWorld](IZoomView.md#moveworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L659)

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

[IZoomView](IZoomView.md).[scaleOfWorld](IZoomView.md#scaleofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L660)

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

[IZoomView](IZoomView.md).[rotateOfWorld](IZoomView.md#rotateofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L661)

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

[IZoomView](IZoomView.md).[skewOfWorld](IZoomView.md#skewofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L662)

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

[IZoomView](IZoomView.md).[flip](IZoomView.md#flip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L664)

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

[IZoomView](IZoomView.md).[scaleResize](IZoomView.md#scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L666)

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

[IZoomView](IZoomView.md).[__scaleResize](IZoomView.md#__scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L667)

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

[IZoomView](IZoomView.md).[resizeWidth](IZoomView.md#resizewidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L669)

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

[IZoomView](IZoomView.md).[resizeHeight](IZoomView.md#resizeheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L670)

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

[IZoomView](IZoomView.md).[hit](IZoomView.md#hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L673)

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

[IZoomView](IZoomView.md).[__hitWorld](IZoomView.md#__hitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L674)

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

[IZoomView](IZoomView.md).[__hit](IZoomView.md#__hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L675)

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

[IZoomView](IZoomView.md).[__hitFill](IZoomView.md#__hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L676)

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

[IZoomView](IZoomView.md).[__hitStroke](IZoomView.md#__hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L677)

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

[IZoomView](IZoomView.md).[__hitPixel](IZoomView.md#__hitpixel)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L678)

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

[IZoomView](IZoomView.md).[__drawHitPath](IZoomView.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateHitCanvas](IZoomView.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L680)

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

[IZoomView](IZoomView.md).[__render](IZoomView.md#__render)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L683)

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

[IZoomView](IZoomView.md).[__drawFast](IZoomView.md#__drawfast)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:684](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L684)

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

[IZoomView](IZoomView.md).[__draw](IZoomView.md#__draw)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L685)

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

[IZoomView](IZoomView.md).[__clip](IZoomView.md#__clip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L687)

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

[IZoomView](IZoomView.md).[__renderShape](IZoomView.md#__rendershape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L688)

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

[IZoomView](IZoomView.md).[__drawShape](IZoomView.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:689](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L689)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateWorldOpacity](IZoomView.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:691](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L691)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateChange](IZoomView.md#__updatechange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L692)

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

[IZoomView](IZoomView.md).[__drawPath](IZoomView.md#__drawpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L695)

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

[IZoomView](IZoomView.md).[__drawRenderPath](IZoomView.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:696](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L696)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updatePath](IZoomView.md#__updatepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:697](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L697)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateRenderPath](IZoomView.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:698](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L698)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IZoomView](IZoomView.md).[getMotionPathData](IZoomView.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:701](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L701)

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

[IZoomView](IZoomView.md).[getMotionPoint](IZoomView.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:702](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L702)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IZoomView](IZoomView.md).[getMotionTotal](IZoomView.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:703](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L703)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateMotionPath](IZoomView.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:705](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L705)

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

[IZoomView](IZoomView.md).[__runAnimation](IZoomView.md#__runanimation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:707](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L707)

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

[IZoomView](IZoomView.md).[__emitLifeEvent](IZoomView.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L709)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[__updateSortChildren](IZoomView.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:715](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L715)

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

[IZoomView](IZoomView.md).[add](IZoomView.md#add)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:716](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L716)

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

[IZoomView](IZoomView.md).[remove](IZoomView.md#remove)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:717](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L717)

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

[IZoomView](IZoomView.md).[dropTo](IZoomView.md#dropto)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L718)

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

[IZoomView](IZoomView.md).[__realSetAttr](IZoomView.md#__realsetattr)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

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

[IZoomView](IZoomView.md).[emitPropertyEvent](IZoomView.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IZoomView](IZoomView.md).[destroyEventer](IZoomView.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[IZoomView](IZoomView.md).[on](IZoomView.md#on)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L49)

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

[IZoomView](IZoomView.md).[off](IZoomView.md#off)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L50)

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

[IZoomView](IZoomView.md).[on_](IZoomView.md#on_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L51)

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

[IZoomView](IZoomView.md).[off_](IZoomView.md#off_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L52)

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

[IZoomView](IZoomView.md).[once](IZoomView.md#once)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L53)

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

[IZoomView](IZoomView.md).[emit](IZoomView.md#emit)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L54)

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

[IZoomView](IZoomView.md).[emitEvent](IZoomView.md#emitevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L55)

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

[IZoomView](IZoomView.md).[hasEvent](IZoomView.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L58)
