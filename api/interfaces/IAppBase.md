# Interface: IAppBase

## Hierarchy

- [`ILeaferBase`](ILeaferBase.md)

  ↳ **`IAppBase`**

## Table of contents

### Properties

- [children](IAppBase.md#children)
- [realCanvas](IAppBase.md#realcanvas)
- [running](IAppBase.md#running)
- [created](IAppBase.md#created)
- [ready](IAppBase.md#ready)
- [viewReady](IAppBase.md#viewready)
- [imageReady](IAppBase.md#imageready)
- [viewCompleted](IAppBase.md#viewcompleted)
- [layoutLocked](IAppBase.md#layoutlocked)
- [transforming](IAppBase.md#transforming)
- [view](IAppBase.md#view)
- [canvas](IAppBase.md#canvas)
- [renderer](IAppBase.md#renderer)
- [watcher](IAppBase.md#watcher)
- [layouter](IAppBase.md#layouter)
- [selector](IAppBase.md#selector)
- [interaction](IAppBase.md#interaction)
- [canvasManager](IAppBase.md#canvasmanager)
- [hitCanvasManager](IAppBase.md#hitcanvasmanager)
- [autoLayout](IAppBase.md#autolayout)
- [lazyBounds](IAppBase.md#lazybounds)
- [config](IAppBase.md#config)
- [userConfig](IAppBase.md#userconfig)
- [cursorPoint](IAppBase.md#cursorpoint)
- [clientBounds](IAppBase.md#clientbounds)
- [leafs](IAppBase.md#leafs)
- [\_\_eventIds](IAppBase.md#__eventids)
- [\_\_nextRenderWait](IAppBase.md#__nextrenderwait)
- [isApp](IAppBase.md#isapp)
- [app](IAppBase.md#app)
- [parentApp](IAppBase.md#parentapp)
- [parent](IAppBase.md#parent)
- [id](IAppBase.md#id)
- [name](IAppBase.md#name)
- [className](IAppBase.md#classname)
- [blendMode](IAppBase.md#blendmode)
- [opacity](IAppBase.md#opacity)
- [visible](IAppBase.md#visible)
- [selected](IAppBase.md#selected)
- [disabled](IAppBase.md#disabled)
- [locked](IAppBase.md#locked)
- [zIndex](IAppBase.md#zindex)
- [mask](IAppBase.md#mask)
- [eraser](IAppBase.md#eraser)
- [x](IAppBase.md#x)
- [y](IAppBase.md#y)
- [width](IAppBase.md#width)
- [height](IAppBase.md#height)
- [scaleX](IAppBase.md#scalex)
- [scaleY](IAppBase.md#scaley)
- [rotation](IAppBase.md#rotation)
- [skewX](IAppBase.md#skewx)
- [skewY](IAppBase.md#skewy)
- [scale](IAppBase.md#scale)
- [offsetX](IAppBase.md#offsetx)
- [offsetY](IAppBase.md#offsety)
- [scrollX](IAppBase.md#scrollx)
- [scrollY](IAppBase.md#scrolly)
- [origin](IAppBase.md#origin)
- [around](IAppBase.md#around)
- [lazy](IAppBase.md#lazy)
- [pixelRatio](IAppBase.md#pixelratio)
- [path](IAppBase.md#path)
- [windingRule](IAppBase.md#windingrule)
- [closed](IAppBase.md#closed)
- [flow](IAppBase.md#flow)
- [padding](IAppBase.md#padding)
- [gap](IAppBase.md#gap)
- [flowAlign](IAppBase.md#flowalign)
- [flowWrap](IAppBase.md#flowwrap)
- [itemBox](IAppBase.md#itembox)
- [inFlow](IAppBase.md#inflow)
- [autoWidth](IAppBase.md#autowidth)
- [autoHeight](IAppBase.md#autoheight)
- [lockRatio](IAppBase.md#lockratio)
- [autoBox](IAppBase.md#autobox)
- [widthRange](IAppBase.md#widthrange)
- [heightRange](IAppBase.md#heightrange)
- [draggable](IAppBase.md#draggable)
- [dragBounds](IAppBase.md#dragbounds)
- [editable](IAppBase.md#editable)
- [hittable](IAppBase.md#hittable)
- [hitFill](IAppBase.md#hitfill)
- [hitStroke](IAppBase.md#hitstroke)
- [hitBox](IAppBase.md#hitbox)
- [hitChildren](IAppBase.md#hitchildren)
- [hitSelf](IAppBase.md#hitself)
- [hitRadius](IAppBase.md#hitradius)
- [button](IAppBase.md#button)
- [cursor](IAppBase.md#cursor)
- [motionPath](IAppBase.md#motionpath)
- [motionPrecision](IAppBase.md#motionprecision)
- [motion](IAppBase.md#motion)
- [motionRotation](IAppBase.md#motionrotation)
- [normalStyle](IAppBase.md#normalstyle)
- [event](IAppBase.md#event)
- [data](IAppBase.md#data)
- [noBounds](IAppBase.md#nobounds)
- [tag](IAppBase.md#tag)
- [\_\_tag](IAppBase.md#__tag)
- [innerName](IAppBase.md#innername)
- [\_\_DataProcessor](IAppBase.md#__dataprocessor)
- [\_\_LayoutProcessor](IAppBase.md#__layoutprocessor)
- [leafer](IAppBase.md#leafer)
- [zoomLayer](IAppBase.md#zoomlayer)
- [leaferIsCreated](IAppBase.md#leaferiscreated)
- [leaferIsReady](IAppBase.md#leaferisready)
- [isLeafer](IAppBase.md#isleafer)
- [isBranch](IAppBase.md#isbranch)
- [isBranchLeaf](IAppBase.md#isbranchleaf)
- [isOutside](IAppBase.md#isoutside)
- [\_\_](IAppBase.md#__)
- [proxyData](IAppBase.md#proxydata)
- [\_\_proxyData](IAppBase.md#__proxydata)
- [syncEventer](IAppBase.md#synceventer)
- [lockNormalStyle](IAppBase.md#locknormalstyle)
- [\_\_layout](IAppBase.md#__layout)
- [\_\_world](IAppBase.md#__world)
- [\_\_local](IAppBase.md#__local)
- [\_\_nowWorld](IAppBase.md#__nowworld)
- [\_\_cameraWorld](IAppBase.md#__cameraworld)
- [\_\_localMatrix](IAppBase.md#__localmatrix)
- [\_\_localBoxBounds](IAppBase.md#__localboxbounds)
- [\_\_worldOpacity](IAppBase.md#__worldopacity)
- [worldTransform](IAppBase.md#worldtransform)
- [localTransform](IAppBase.md#localtransform)
- [boxBounds](IAppBase.md#boxbounds)
- [renderBounds](IAppBase.md#renderbounds)
- [worldBoxBounds](IAppBase.md#worldboxbounds)
- [worldStrokeBounds](IAppBase.md#worldstrokebounds)
- [worldRenderBounds](IAppBase.md#worldrenderbounds)
- [worldOpacity](IAppBase.md#worldopacity)
- [\_\_level](IAppBase.md#__level)
- [\_\_tempNumber](IAppBase.md#__tempnumber)
- [\_\_worldFlipped](IAppBase.md#__worldflipped)
- [animation](IAppBase.md#animation)
- [animationOut](IAppBase.md#animationout)
- [\_\_hasAutoLayout](IAppBase.md#__hasautolayout)
- [\_\_hasMotionPath](IAppBase.md#__hasmotionpath)
- [\_\_hasMask](IAppBase.md#__hasmask)
- [\_\_hasEraser](IAppBase.md#__haseraser)
- [\_\_hitCanvas](IAppBase.md#__hitcanvas)
- [\_\_flowBounds](IAppBase.md#__flowbounds)
- [\_\_widthGrow](IAppBase.md#__widthgrow)
- [\_\_heightGrow](IAppBase.md#__heightgrow)
- [\_\_hasGrow](IAppBase.md#__hasgrow)
- [\_\_onlyHitMask](IAppBase.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IAppBase.md#__ignorehitworld)
- [\_\_inLazyBounds](IAppBase.md#__inlazybounds)
- [pathInputed](IAppBase.md#pathinputed)
- [destroyed](IAppBase.md#destroyed)
- [innerId](IAppBase.md#innerid)
- [\_\_captureMap](IAppBase.md#__capturemap)
- [\_\_bubbleMap](IAppBase.md#__bubblemap)

### Methods

- [init](IAppBase.md#init)
- [unlockLayout](IAppBase.md#unlocklayout)
- [lockLayout](IAppBase.md#locklayout)
- [requestRender](IAppBase.md#requestrender)
- [updateCursor](IAppBase.md#updatecursor)
- [resize](IAppBase.md#resize)
- [waitReady](IAppBase.md#waitready)
- [waitViewReady](IAppBase.md#waitviewready)
- [waitViewCompleted](IAppBase.md#waitviewcompleted)
- [zoom](IAppBase.md#zoom)
- [getValidMove](IAppBase.md#getvalidmove)
- [getValidScale](IAppBase.md#getvalidscale)
- [getWorldPointByClient](IAppBase.md#getworldpointbyclient)
- [getPagePointByClient](IAppBase.md#getpagepointbyclient)
- [updateClientBounds](IAppBase.md#updateclientbounds)
- [receiveEvent](IAppBase.md#receiveevent)
- [start](IAppBase.md#start)
- [stop](IAppBase.md#stop)
- [\_\_renderBranch](IAppBase.md#__renderbranch)
- [addMany](IAppBase.md#addmany)
- [removeAll](IAppBase.md#removeall)
- [clear](IAppBase.md#clear)
- [reset](IAppBase.md#reset)
- [resetCustom](IAppBase.md#resetcustom)
- [waitParent](IAppBase.md#waitparent)
- [waitLeafer](IAppBase.md#waitleafer)
- [nextRender](IAppBase.md#nextrender)
- [removeNextRender](IAppBase.md#removenextrender)
- [\_\_bindLeafer](IAppBase.md#__bindleafer)
- [set](IAppBase.md#set)
- [get](IAppBase.md#get)
- [setAttr](IAppBase.md#setattr)
- [getAttr](IAppBase.md#getattr)
- [getComputedAttr](IAppBase.md#getcomputedattr)
- [toJSON](IAppBase.md#tojson)
- [toString](IAppBase.md#tostring)
- [toSVG](IAppBase.md#tosvg)
- [\_\_SVG](IAppBase.md#__svg)
- [toHTML](IAppBase.md#tohtml)
- [clone](IAppBase.md#clone)
- [animate](IAppBase.md#animate)
- [\_\_setAttr](IAppBase.md#__setattr)
- [\_\_getAttr](IAppBase.md#__getattr)
- [setProxyAttr](IAppBase.md#setproxyattr)
- [getProxyAttr](IAppBase.md#getproxyattr)
- [find](IAppBase.md#find)
- [findTag](IAppBase.md#findtag)
- [findOne](IAppBase.md#findone)
- [findId](IAppBase.md#findid)
- [focus](IAppBase.md#focus)
- [updateState](IAppBase.md#updatestate)
- [updateLayout](IAppBase.md#updatelayout)
- [forceUpdate](IAppBase.md#forceupdate)
- [forceRender](IAppBase.md#forcerender)
- [\_\_extraUpdate](IAppBase.md#__extraupdate)
- [\_\_updateWorldMatrix](IAppBase.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IAppBase.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IAppBase.md#__updateworldbounds)
- [\_\_updateLocalBounds](IAppBase.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IAppBase.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IAppBase.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IAppBase.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IAppBase.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IAppBase.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IAppBase.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IAppBase.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IAppBase.md#__updateautolayout)
- [\_\_updateFlowLayout](IAppBase.md#__updateflowlayout)
- [\_\_updateNaturalSize](IAppBase.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IAppBase.md#__updatestrokespread)
- [\_\_updateRenderSpread](IAppBase.md#__updaterenderspread)
- [\_\_onUpdateSize](IAppBase.md#__onupdatesize)
- [\_\_updateEraser](IAppBase.md#__updateeraser)
- [\_\_updateMask](IAppBase.md#__updatemask)
- [\_\_renderMask](IAppBase.md#__rendermask)
- [\_\_renderEraser](IAppBase.md#__rendereraser)
- [\_\_getNowWorld](IAppBase.md#__getnowworld)
- [getTransform](IAppBase.md#gettransform)
- [getBounds](IAppBase.md#getbounds)
- [getLayoutBounds](IAppBase.md#getlayoutbounds)
- [getLayoutPoints](IAppBase.md#getlayoutpoints)
- [getWorldBounds](IAppBase.md#getworldbounds)
- [worldToLocal](IAppBase.md#worldtolocal)
- [localToWorld](IAppBase.md#localtoworld)
- [worldToInner](IAppBase.md#worldtoinner)
- [innerToWorld](IAppBase.md#innertoworld)
- [getBoxPoint](IAppBase.md#getboxpoint)
- [getBoxPointByInner](IAppBase.md#getboxpointbyinner)
- [getInnerPoint](IAppBase.md#getinnerpoint)
- [getInnerPointByBox](IAppBase.md#getinnerpointbybox)
- [getInnerPointByLocal](IAppBase.md#getinnerpointbylocal)
- [getLocalPoint](IAppBase.md#getlocalpoint)
- [getLocalPointByInner](IAppBase.md#getlocalpointbyinner)
- [getPagePoint](IAppBase.md#getpagepoint)
- [getWorldPoint](IAppBase.md#getworldpoint)
- [getWorldPointByBox](IAppBase.md#getworldpointbybox)
- [getWorldPointByLocal](IAppBase.md#getworldpointbylocal)
- [getWorldPointByPage](IAppBase.md#getworldpointbypage)
- [setTransform](IAppBase.md#settransform)
- [transform](IAppBase.md#transform)
- [move](IAppBase.md#move)
- [moveInner](IAppBase.md#moveinner)
- [scaleOf](IAppBase.md#scaleof)
- [rotateOf](IAppBase.md#rotateof)
- [skewOf](IAppBase.md#skewof)
- [transformWorld](IAppBase.md#transformworld)
- [moveWorld](IAppBase.md#moveworld)
- [scaleOfWorld](IAppBase.md#scaleofworld)
- [rotateOfWorld](IAppBase.md#rotateofworld)
- [skewOfWorld](IAppBase.md#skewofworld)
- [flip](IAppBase.md#flip)
- [scaleResize](IAppBase.md#scaleresize)
- [\_\_scaleResize](IAppBase.md#__scaleresize)
- [resizeWidth](IAppBase.md#resizewidth)
- [resizeHeight](IAppBase.md#resizeheight)
- [\_\_hitWorld](IAppBase.md#__hitworld)
- [\_\_hit](IAppBase.md#__hit)
- [\_\_hitFill](IAppBase.md#__hitfill)
- [\_\_hitStroke](IAppBase.md#__hitstroke)
- [\_\_hitPixel](IAppBase.md#__hitpixel)
- [\_\_drawHitPath](IAppBase.md#__drawhitpath)
- [\_\_updateHitCanvas](IAppBase.md#__updatehitcanvas)
- [\_\_render](IAppBase.md#__render)
- [\_\_drawFast](IAppBase.md#__drawfast)
- [\_\_draw](IAppBase.md#__draw)
- [\_\_clip](IAppBase.md#__clip)
- [\_\_renderShape](IAppBase.md#__rendershape)
- [\_\_updateWorldOpacity](IAppBase.md#__updateworldopacity)
- [\_\_updateChange](IAppBase.md#__updatechange)
- [\_\_drawPath](IAppBase.md#__drawpath)
- [\_\_drawRenderPath](IAppBase.md#__drawrenderpath)
- [\_\_updatePath](IAppBase.md#__updatepath)
- [\_\_updateRenderPath](IAppBase.md#__updaterenderpath)
- [getMotionPathData](IAppBase.md#getmotionpathdata)
- [getMotionPoint](IAppBase.md#getmotionpoint)
- [getMotionTotal](IAppBase.md#getmotiontotal)
- [\_\_updateMotionPath](IAppBase.md#__updatemotionpath)
- [\_\_runAnimation](IAppBase.md#__runanimation)
- [\_\_emitLifeEvent](IAppBase.md#__emitlifeevent)
- [\_\_updateSortChildren](IAppBase.md#__updatesortchildren)
- [add](IAppBase.md#add)
- [remove](IAppBase.md#remove)
- [dropTo](IAppBase.md#dropto)
- [\_\_realSetAttr](IAppBase.md#__realsetattr)
- [destroyEventer](IAppBase.md#destroyeventer)
- [on](IAppBase.md#on)
- [off](IAppBase.md#off)
- [on\_](IAppBase.md#on_)
- [off\_](IAppBase.md#off_)
- [once](IAppBase.md#once)
- [emit](IAppBase.md#emit)
- [emitEvent](IAppBase.md#emitevent)
- [hasEvent](IAppBase.md#hasevent)
- [destroy](IAppBase.md#destroy)

## Properties

### children

• **children**: [`ILeaferBase`](ILeaferBase.md)[]

#### Overrides

[ILeaferBase](ILeaferBase.md).[children](ILeaferBase.md#children)

#### Defined in

[leafer/packages/interface/src/app/IApp.ts:4](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/IApp.ts#L4)

___

### realCanvas

• **realCanvas**: `boolean`

#### Defined in

[leafer/packages/interface/src/app/IApp.ts:5](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/IApp.ts#L5)

___

### running

• **running**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[running](ILeaferBase.md#running)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L33)

___

### created

• **created**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[created](ILeaferBase.md#created)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:34](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L34)

___

### ready

• **ready**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[ready](ILeaferBase.md#ready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:35](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L35)

___

### viewReady

• **viewReady**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[viewReady](ILeaferBase.md#viewready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:36](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L36)

___

### imageReady

• **imageReady**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[imageReady](ILeaferBase.md#imageready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:37](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L37)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[viewCompleted](ILeaferBase.md#viewcompleted)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:38](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L38)

___

### layoutLocked

• **layoutLocked**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[layoutLocked](ILeaferBase.md#layoutlocked)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:39](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L39)

___

### transforming

• **transforming**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[transforming](ILeaferBase.md#transforming)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:41](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L41)

___

### view

• **view**: `unknown`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[view](ILeaferBase.md#view)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:43](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L43)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[canvas](ILeaferBase.md#canvas)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:45](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L45)

___

### renderer

• **renderer**: [`IRenderer`](IRenderer.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[renderer](ILeaferBase.md#renderer)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:46](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L46)

___

### watcher

• **watcher**: [`IWatcher`](IWatcher.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[watcher](ILeaferBase.md#watcher)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:48](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L48)

___

### layouter

• **layouter**: [`ILayouter`](ILayouter.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[layouter](ILeaferBase.md#layouter)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:49](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L49)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[selector](ILeaferBase.md#selector)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:51](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L51)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](IInteraction.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[interaction](ILeaferBase.md#interaction)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:52](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L52)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[canvasManager](ILeaferBase.md#canvasmanager)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:54](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L54)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](IHitCanvasManager.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitCanvasManager](ILeaferBase.md#hitcanvasmanager)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:55](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L55)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](IAutoBounds.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[autoLayout](ILeaferBase.md#autolayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:57](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L57)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[lazyBounds](ILeaferBase.md#lazybounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:58](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L58)

___

### config

• **config**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[config](ILeaferBase.md#config)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:60](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L60)

___

### userConfig

• `Optional` **userConfig**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[userConfig](ILeaferBase.md#userconfig)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:61](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L61)

___

### cursorPoint

• `Readonly` **cursorPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[cursorPoint](ILeaferBase.md#cursorpoint)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:63](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L63)

___

### clientBounds

• `Readonly` **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[clientBounds](ILeaferBase.md#clientbounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:64](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L64)

___

### leafs

• **leafs**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[leafs](ILeaferBase.md#leafs)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:65](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L65)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__eventIds](ILeaferBase.md#__eventids)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:67](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L67)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](IFunction.md)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__nextRenderWait](ILeaferBase.md#__nextrenderwait)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:68](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L68)

___

### isApp

• `Readonly` **isApp**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[isApp](ILeaferBase.md#isapp)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:101](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L101)

___

### app

• `Readonly` **app**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[app](ILeaferBase.md#app)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:102](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L102)

___

### parentApp

• `Optional` **parentApp**: [`IAppBase`](IAppBase.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[parentApp](ILeaferBase.md#parentapp)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:103](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L103)

___

### parent

• `Optional` **parent**: [`IAppBase`](IAppBase.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[parent](ILeaferBase.md#parent)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:104](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L104)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[id](ILeaferBase.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:213](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L213)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[name](ILeaferBase.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:214](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L214)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[className](ILeaferBase.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:215](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L215)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[blendMode](ILeaferBase.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L217)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[opacity](ILeaferBase.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L218)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[ILeaferBase](ILeaferBase.md).[visible](ILeaferBase.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L219)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[selected](ILeaferBase.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L220)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[disabled](ILeaferBase.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L221)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[locked](ILeaferBase.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L222)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[zIndex](ILeaferBase.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L223)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[mask](ILeaferBase.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L225)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[eraser](ILeaferBase.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L226)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[x](ILeaferBase.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L229)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[y](ILeaferBase.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L230)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[width](ILeaferBase.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L231)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[height](ILeaferBase.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L232)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[scaleX](ILeaferBase.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L233)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[scaleY](ILeaferBase.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L234)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[rotation](ILeaferBase.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L235)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[skewX](ILeaferBase.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L236)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[skewY](ILeaferBase.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L237)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[scale](ILeaferBase.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L239)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[offsetX](ILeaferBase.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L241)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[offsetY](ILeaferBase.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L242)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[scrollX](ILeaferBase.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L243)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[scrollY](ILeaferBase.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L244)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[origin](ILeaferBase.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L246)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[around](ILeaferBase.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L247)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[lazy](ILeaferBase.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L249)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[pixelRatio](ILeaferBase.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L250)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[path](ILeaferBase.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L252)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[windingRule](ILeaferBase.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L253)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[closed](ILeaferBase.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L254)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[flow](ILeaferBase.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L257)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[padding](ILeaferBase.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L258)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[gap](ILeaferBase.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L259)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[flowAlign](ILeaferBase.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:260](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L260)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[flowWrap](ILeaferBase.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L261)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[itemBox](ILeaferBase.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L262)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[inFlow](ILeaferBase.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L264)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[autoWidth](ILeaferBase.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L265)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[autoHeight](ILeaferBase.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L266)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[lockRatio](ILeaferBase.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L267)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[autoBox](ILeaferBase.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L268)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[widthRange](ILeaferBase.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L270)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[heightRange](ILeaferBase.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L271)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[draggable](ILeaferBase.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L274)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[dragBounds](ILeaferBase.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L275)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[editable](ILeaferBase.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L277)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hittable](ILeaferBase.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L279)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitFill](ILeaferBase.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L280)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitStroke](ILeaferBase.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L281)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitBox](ILeaferBase.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L282)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitChildren](ILeaferBase.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L283)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitSelf](ILeaferBase.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L284)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[hitRadius](ILeaferBase.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L285)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[button](ILeaferBase.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L287)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[cursor](ILeaferBase.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L288)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[motionPath](ILeaferBase.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L290)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[motionPrecision](ILeaferBase.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L291)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[motion](ILeaferBase.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L293)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[motionRotation](ILeaferBase.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L294)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[normalStyle](ILeaferBase.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L296)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[event](ILeaferBase.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L298)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[data](ILeaferBase.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L301)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[noBounds](ILeaferBase.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[tag](ILeaferBase.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:428](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L428)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__tag](ILeaferBase.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:429](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L429)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[innerName](ILeaferBase.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:430](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L430)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__DataProcessor](ILeaferBase.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:432](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L432)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__LayoutProcessor](ILeaferBase.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L433)

___

### leafer

• `Optional` **leafer**: [`ILeaferBase`](ILeaferBase.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[leafer](ILeaferBase.md#leafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:436](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L436)

___

### zoomLayer

• `Optional` **zoomLayer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[zoomLayer](ILeaferBase.md#zoomlayer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L438)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[leaferIsCreated](ILeaferBase.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L440)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[leaferIsReady](ILeaferBase.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:441](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L441)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[isLeafer](ILeaferBase.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:444](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L444)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[isBranch](ILeaferBase.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L445)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[isBranchLeaf](ILeaferBase.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L446)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[isOutside](ILeaferBase.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:447](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L447)

___

### \_\_

• **\_\_**: [`ILeafData`](ILeafData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__](ILeaferBase.md#__)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L449)

___

### proxyData

• `Optional` **proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[proxyData](ILeaferBase.md#proxydata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L451)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`ILeafInputData`](ILeafInputData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__proxyData](ILeaferBase.md#__proxydata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L452)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[syncEventer](ILeaferBase.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L454)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[lockNormalStyle](ILeaferBase.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L455)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__layout](ILeaferBase.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L457)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__world](ILeaferBase.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L459)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__local](ILeaferBase.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__nowWorld](ILeaferBase.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__cameraWorld](ILeaferBase.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:463](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L463)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__localMatrix](ILeaferBase.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__localBoxBounds](ILeaferBase.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:466](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L466)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__worldOpacity](ILeaferBase.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L468)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[worldTransform](ILeaferBase.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L470)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[localTransform](ILeaferBase.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L471)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[boxBounds](ILeaferBase.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L473)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[renderBounds](ILeaferBase.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:474](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L474)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[worldBoxBounds](ILeaferBase.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L475)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[worldStrokeBounds](ILeaferBase.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L476)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[worldRenderBounds](ILeaferBase.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:477](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L477)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[worldOpacity](ILeaferBase.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L479)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__level](ILeaferBase.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L481)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__tempNumber](ILeaferBase.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L482)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__worldFlipped](ILeaferBase.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L484)

___

### animation

• `Optional` **animation**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[animation](ILeaferBase.md#animation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L486)

___

### animationOut

• `Optional` **animationOut**: [`IObject`](IObject.md) \| [`IObject`](IObject.md)[]

#### Inherited from

[ILeaferBase](ILeaferBase.md).[animationOut](ILeaferBase.md#animationout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hasAutoLayout](ILeaferBase.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hasMotionPath](ILeaferBase.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hasMask](ILeaferBase.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hasEraser](ILeaferBase.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:493](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L493)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hitCanvas](ILeaferBase.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__flowBounds](ILeaferBase.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:496](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L496)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__widthGrow](ILeaferBase.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__heightGrow](ILeaferBase.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__hasGrow](ILeaferBase.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__onlyHitMask](ILeaferBase.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__ignoreHitWorld](ILeaferBase.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__inLazyBounds](ILeaferBase.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L503)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[pathInputed](ILeaferBase.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:505](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L505)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[destroyed](ILeaferBase.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L507)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[innerId](ILeaferBase.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__captureMap](ILeaferBase.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__bubbleMap](ILeaferBase.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L41)

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

[ILeaferBase](ILeaferBase.md).[init](ILeaferBase.md#init)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:70](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L70)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[unlockLayout](ILeaferBase.md#unlocklayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:75](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L75)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[lockLayout](ILeaferBase.md#locklayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:76](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L76)

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

[ILeaferBase](ILeaferBase.md).[requestRender](ILeaferBase.md#requestrender)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:78](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L78)

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

[ILeaferBase](ILeaferBase.md).[updateCursor](ILeaferBase.md#updatecursor)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:80](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L80)

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

[ILeaferBase](ILeaferBase.md).[resize](ILeaferBase.md#resize)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:81](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L81)

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

[ILeaferBase](ILeaferBase.md).[waitReady](ILeaferBase.md#waitready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:83](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L83)

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

[ILeaferBase](ILeaferBase.md).[waitViewReady](ILeaferBase.md#waitviewready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:84](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L84)

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

[ILeaferBase](ILeaferBase.md).[waitViewCompleted](ILeaferBase.md#waitviewcompleted)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:85](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L85)

___

### zoom

▸ **zoom**(`zoomType`, `padding?`, `fixedScale?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `padding?` | [`IFourNumber`](../modules.md#ifournumber) |
| `fixedScale?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[zoom](ILeaferBase.md#zoom)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:87](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L87)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[getValidMove](ILeaferBase.md#getvalidmove)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:88](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L88)

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

[ILeaferBase](ILeaferBase.md).[getValidScale](ILeaferBase.md#getvalidscale)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:89](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L89)

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

[ILeaferBase](ILeaferBase.md).[getWorldPointByClient](ILeaferBase.md#getworldpointbyclient)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:91](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L91)

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

[ILeaferBase](ILeaferBase.md).[getPagePointByClient](ILeaferBase.md#getpagepointbyclient)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:92](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L92)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[updateClientBounds](ILeaferBase.md#updateclientbounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:93](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L93)

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

[ILeaferBase](ILeaferBase.md).[receiveEvent](ILeaferBase.md#receiveevent)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:95](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/app/ILeafer.ts#L95)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[start](ILeaferBase.md#start)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:2](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/control/IControl.ts#L2)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[stop](ILeaferBase.md#stop)

#### Defined in

[leafer/packages/interface/src/control/IControl.ts:3](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/control/IControl.ts#L3)

___

### \_\_renderBranch

▸ `Optional` **__renderBranch**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__renderBranch](ILeaferBase.md#__renderbranch)

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:7](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/IBranch.ts#L7)

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

[ILeaferBase](ILeaferBase.md).[addMany](ILeaferBase.md#addmany)

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:8](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/IBranch.ts#L8)

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

[ILeaferBase](ILeaferBase.md).[removeAll](ILeaferBase.md#removeall)

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/IBranch.ts#L9)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[clear](ILeaferBase.md#clear)

#### Defined in

[leafer/packages/interface/src/display/IBranch.ts:10](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/IBranch.ts#L10)

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

[ILeaferBase](ILeaferBase.md).[reset](ILeaferBase.md#reset)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L509)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[resetCustom](ILeaferBase.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L510)

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

[ILeaferBase](ILeaferBase.md).[waitParent](ILeaferBase.md#waitparent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L512)

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

[ILeaferBase](ILeaferBase.md).[waitLeafer](ILeaferBase.md#waitleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L513)

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

[ILeaferBase](ILeaferBase.md).[nextRender](ILeaferBase.md#nextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:514](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L514)

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

[ILeaferBase](ILeaferBase.md).[removeNextRender](ILeaferBase.md#removenextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L515)

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

[ILeaferBase](ILeaferBase.md).[__bindLeafer](ILeaferBase.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L517)

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

[ILeaferBase](ILeaferBase.md).[set](ILeaferBase.md#set)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L519)

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

[ILeaferBase](ILeaferBase.md).[get](ILeaferBase.md#get)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L520)

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

[ILeaferBase](ILeaferBase.md).[setAttr](ILeaferBase.md#setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L521)

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

[ILeaferBase](ILeaferBase.md).[getAttr](ILeaferBase.md#getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L522)

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

[ILeaferBase](ILeaferBase.md).[getComputedAttr](ILeaferBase.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L523)

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

[ILeaferBase](ILeaferBase.md).[toJSON](ILeaferBase.md#tojson)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L525)

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

[ILeaferBase](ILeaferBase.md).[toString](ILeaferBase.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L526)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[toSVG](ILeaferBase.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L527)

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

[ILeaferBase](ILeaferBase.md).[__SVG](ILeaferBase.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L528)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[toHTML](ILeaferBase.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L529)

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

[ILeaferBase](ILeaferBase.md).[clone](ILeaferBase.md#clone)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L530)

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

[ILeaferBase](ILeaferBase.md).[animate](ILeaferBase.md#animate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L532)

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

[ILeaferBase](ILeaferBase.md).[__setAttr](ILeaferBase.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L535)

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

[ILeaferBase](ILeaferBase.md).[__getAttr](ILeaferBase.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L536)

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

[ILeaferBase](ILeaferBase.md).[setProxyAttr](ILeaferBase.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L537)

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

[ILeaferBase](ILeaferBase.md).[getProxyAttr](ILeaferBase.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L538)

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

[ILeaferBase](ILeaferBase.md).[find](ILeaferBase.md#find)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L541)

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

[ILeaferBase](ILeaferBase.md).[findTag](ILeaferBase.md#findtag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L542)

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

[ILeaferBase](ILeaferBase.md).[findOne](ILeaferBase.md#findone)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L543)

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

[ILeaferBase](ILeaferBase.md).[findId](ILeaferBase.md#findid)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L544)

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

[ILeaferBase](ILeaferBase.md).[focus](ILeaferBase.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L546)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[updateState](ILeaferBase.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L548)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[updateLayout](ILeaferBase.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:549](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L549)

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

[ILeaferBase](ILeaferBase.md).[forceUpdate](ILeaferBase.md#forceupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:550](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L550)

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

[ILeaferBase](ILeaferBase.md).[forceRender](ILeaferBase.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L551)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__extraUpdate](ILeaferBase.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L553)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateWorldMatrix](ILeaferBase.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateLocalMatrix](ILeaferBase.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:557](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L557)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateWorldBounds](ILeaferBase.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L560)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateLocalBounds](ILeaferBase.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateLocalBoxBounds](ILeaferBase.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L563)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateLocalStrokeBounds](ILeaferBase.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:564](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L564)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateLocalRenderBounds](ILeaferBase.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateContentBounds](ILeaferBase.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L567)

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

[ILeaferBase](ILeaferBase.md).[__updateBoxBounds](ILeaferBase.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateStrokeBounds](ILeaferBase.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateRenderBounds](ILeaferBase.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateAutoLayout](ILeaferBase.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L572)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateFlowLayout](ILeaferBase.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateNaturalSize](ILeaferBase.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateStrokeSpread](ILeaferBase.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L576)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateRenderSpread](ILeaferBase.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__onUpdateSize](ILeaferBase.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L579)

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

[ILeaferBase](ILeaferBase.md).[__updateEraser](ILeaferBase.md#__updateeraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L582)

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

[ILeaferBase](ILeaferBase.md).[__updateMask](ILeaferBase.md#__updatemask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L583)

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

[ILeaferBase](ILeaferBase.md).[__renderMask](ILeaferBase.md#__rendermask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L584)

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

[ILeaferBase](ILeaferBase.md).[__renderEraser](ILeaferBase.md#__rendereraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:585](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L585)

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

[ILeaferBase](ILeaferBase.md).[__getNowWorld](ILeaferBase.md#__getnowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L588)

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

[ILeaferBase](ILeaferBase.md).[getTransform](ILeaferBase.md#gettransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L590)

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

[ILeaferBase](ILeaferBase.md).[getBounds](ILeaferBase.md#getbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:592](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L592)

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

[ILeaferBase](ILeaferBase.md).[getLayoutBounds](ILeaferBase.md#getlayoutbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L593)

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

[ILeaferBase](ILeaferBase.md).[getLayoutPoints](ILeaferBase.md#getlayoutpoints)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L594)

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

[ILeaferBase](ILeaferBase.md).[getWorldBounds](ILeaferBase.md#getworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:596](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L596)

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

[ILeaferBase](ILeaferBase.md).[worldToLocal](ILeaferBase.md#worldtolocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L598)

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

[ILeaferBase](ILeaferBase.md).[localToWorld](ILeaferBase.md#localtoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L599)

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

[ILeaferBase](ILeaferBase.md).[worldToInner](ILeaferBase.md#worldtoinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L600)

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

[ILeaferBase](ILeaferBase.md).[innerToWorld](ILeaferBase.md#innertoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L601)

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

[ILeaferBase](ILeaferBase.md).[getBoxPoint](ILeaferBase.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L603)

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

[ILeaferBase](ILeaferBase.md).[getBoxPointByInner](ILeaferBase.md#getboxpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L604)

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

[ILeaferBase](ILeaferBase.md).[getInnerPoint](ILeaferBase.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L605)

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

[ILeaferBase](ILeaferBase.md).[getInnerPointByBox](ILeaferBase.md#getinnerpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L606)

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

[ILeaferBase](ILeaferBase.md).[getInnerPointByLocal](ILeaferBase.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L607)

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

[ILeaferBase](ILeaferBase.md).[getLocalPoint](ILeaferBase.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L608)

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

[ILeaferBase](ILeaferBase.md).[getLocalPointByInner](ILeaferBase.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L609)

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

[ILeaferBase](ILeaferBase.md).[getPagePoint](ILeaferBase.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L610)

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

[ILeaferBase](ILeaferBase.md).[getWorldPoint](ILeaferBase.md#getworldpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L611)

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

[ILeaferBase](ILeaferBase.md).[getWorldPointByBox](ILeaferBase.md#getworldpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L612)

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

[ILeaferBase](ILeaferBase.md).[getWorldPointByLocal](ILeaferBase.md#getworldpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L613)

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

[ILeaferBase](ILeaferBase.md).[getWorldPointByPage](ILeaferBase.md#getworldpointbypage)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L614)

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

[ILeaferBase](ILeaferBase.md).[setTransform](ILeaferBase.md#settransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L617)

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

[ILeaferBase](ILeaferBase.md).[transform](ILeaferBase.md#transform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L618)

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

[ILeaferBase](ILeaferBase.md).[move](ILeaferBase.md#move)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L619)

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

[ILeaferBase](ILeaferBase.md).[moveInner](ILeaferBase.md#moveinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L621)

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

[ILeaferBase](ILeaferBase.md).[scaleOf](ILeaferBase.md#scaleof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L622)

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

[ILeaferBase](ILeaferBase.md).[rotateOf](ILeaferBase.md#rotateof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L623)

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

[ILeaferBase](ILeaferBase.md).[skewOf](ILeaferBase.md#skewof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L624)

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

[ILeaferBase](ILeaferBase.md).[transformWorld](ILeaferBase.md#transformworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L626)

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

[ILeaferBase](ILeaferBase.md).[moveWorld](ILeaferBase.md#moveworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L627)

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

[ILeaferBase](ILeaferBase.md).[scaleOfWorld](ILeaferBase.md#scaleofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L628)

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

[ILeaferBase](ILeaferBase.md).[rotateOfWorld](ILeaferBase.md#rotateofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L629)

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

[ILeaferBase](ILeaferBase.md).[skewOfWorld](ILeaferBase.md#skewofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:630](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L630)

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

[ILeaferBase](ILeaferBase.md).[flip](ILeaferBase.md#flip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L632)

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

[ILeaferBase](ILeaferBase.md).[scaleResize](ILeaferBase.md#scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L634)

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

[ILeaferBase](ILeaferBase.md).[__scaleResize](ILeaferBase.md#__scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L635)

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

[ILeaferBase](ILeaferBase.md).[resizeWidth](ILeaferBase.md#resizewidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L637)

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

[ILeaferBase](ILeaferBase.md).[resizeHeight](ILeaferBase.md#resizeheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L638)

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

[ILeaferBase](ILeaferBase.md).[__hitWorld](ILeaferBase.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L641)

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

[ILeaferBase](ILeaferBase.md).[__hit](ILeaferBase.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L642)

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

[ILeaferBase](ILeaferBase.md).[__hitFill](ILeaferBase.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L643)

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

[ILeaferBase](ILeaferBase.md).[__hitStroke](ILeaferBase.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L644)

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

[ILeaferBase](ILeaferBase.md).[__hitPixel](ILeaferBase.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L645)

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

[ILeaferBase](ILeaferBase.md).[__drawHitPath](ILeaferBase.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L646)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateHitCanvas](ILeaferBase.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L647)

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

[ILeaferBase](ILeaferBase.md).[__render](ILeaferBase.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L650)

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

[ILeaferBase](ILeaferBase.md).[__drawFast](ILeaferBase.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_draw

▸ **__draw**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__draw](ILeaferBase.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L652)

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

[ILeaferBase](ILeaferBase.md).[__clip](ILeaferBase.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L654)

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

[ILeaferBase](ILeaferBase.md).[__renderShape](ILeaferBase.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L655)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateWorldOpacity](ILeaferBase.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L657)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateChange](ILeaferBase.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L658)

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

[ILeaferBase](ILeaferBase.md).[__drawPath](ILeaferBase.md#__drawpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L661)

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

[ILeaferBase](ILeaferBase.md).[__drawRenderPath](ILeaferBase.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updatePath](ILeaferBase.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L663)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateRenderPath](ILeaferBase.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L664)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[ILeaferBase](ILeaferBase.md).[getMotionPathData](ILeaferBase.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L667)

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

[ILeaferBase](ILeaferBase.md).[getMotionPoint](ILeaferBase.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L668)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[getMotionTotal](ILeaferBase.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L669)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateMotionPath](ILeaferBase.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:671](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L671)

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

[ILeaferBase](ILeaferBase.md).[__runAnimation](ILeaferBase.md#__runanimation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L673)

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

[ILeaferBase](ILeaferBase.md).[__emitLifeEvent](ILeaferBase.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L675)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[__updateSortChildren](ILeaferBase.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L680)

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

[ILeaferBase](ILeaferBase.md).[add](ILeaferBase.md#add)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L681)

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

[ILeaferBase](ILeaferBase.md).[remove](ILeaferBase.md#remove)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:682](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L682)

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

[ILeaferBase](ILeaferBase.md).[dropTo](ILeaferBase.md#dropto)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/ILeaf.ts#L683)

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

[ILeaferBase](ILeaferBase.md).[__realSetAttr](ILeaferBase.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[destroyEventer](ILeaferBase.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[ILeaferBase](ILeaferBase.md).[on](ILeaferBase.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L45)

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

[ILeaferBase](ILeaferBase.md).[off](ILeaferBase.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L46)

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

[ILeaferBase](ILeaferBase.md).[on_](ILeaferBase.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L47)

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

[ILeaferBase](ILeaferBase.md).[off_](ILeaferBase.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L48)

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

[ILeaferBase](ILeaferBase.md).[once](ILeaferBase.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L49)

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

[ILeaferBase](ILeaferBase.md).[emit](ILeaferBase.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L50)

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

[ILeaferBase](ILeaferBase.md).[emitEvent](ILeaferBase.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L51)

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

[ILeaferBase](ILeaferBase.md).[hasEvent](ILeaferBase.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferBase](ILeaferBase.md).[destroy](ILeaferBase.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/a596007/packages/interface/src/event/IEventer.ts#L54)
