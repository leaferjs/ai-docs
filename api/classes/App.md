# Class: App

## Hierarchy

- [`Leafer`](Leafer.md)

  ↳ **`App`**

## Implements

- [`IApp`](../interfaces/IApp.md)

## Table of contents

### Constructors

- [constructor](App.md#constructor)

### Properties

- [innerId](App.md#innerid)
- [syncEventer](App.md#synceventer)
- [lockNormalStyle](App.md#locknormalstyle)
- [\_\_layout](App.md#__layout)
- [\_\_world](App.md#__world)
- [\_\_local](App.md#__local)
- [\_\_nowWorld](App.md#__nowworld)
- [\_\_cameraWorld](App.md#__cameraworld)
- [\_\_worldOpacity](App.md#__worldopacity)
- [\_\_level](App.md#__level)
- [\_\_tempNumber](App.md#__tempnumber)
- [\_\_hasAutoLayout](App.md#__hasautolayout)
- [\_\_hasMask](App.md#__hasmask)
- [\_\_hasEraser](App.md#__haseraser)
- [\_\_hitCanvas](App.md#__hitcanvas)
- [\_\_captureMap](App.md#__capturemap)
- [\_\_bubbleMap](App.md#__bubblemap)
- [\_\_hasLocalEvent](App.md#__haslocalevent)
- [\_\_hasWorldEvent](App.md#__hasworldevent)
- [destroyed](App.md#destroyed)
- [children](App.md#children)
- [realCanvas](App.md#realcanvas)
- [ground](App.md#ground)
- [tree](App.md#tree)
- [sky](App.md#sky)
- [width](App.md#width)
- [height](App.md#height)
- [childlessJSON](App.md#childlessjson)
- [list](App.md#list)
- [\_\_](App.md#__)
- [pixelRatio](App.md#pixelratio)
- [parentApp](App.md#parentapp)
- [parent](App.md#parent)
- [running](App.md#running)
- [created](App.md#created)
- [ready](App.md#ready)
- [viewReady](App.md#viewready)
- [viewCompleted](App.md#viewcompleted)
- [transforming](App.md#transforming)
- [view](App.md#view)
- [canvas](App.md#canvas)
- [renderer](App.md#renderer)
- [watcher](App.md#watcher)
- [layouter](App.md#layouter)
- [selector](App.md#selector)
- [interaction](App.md#interaction)
- [canvasManager](App.md#canvasmanager)
- [hitCanvasManager](App.md#hitcanvasmanager)
- [editor](App.md#editor)
- [userConfig](App.md#userconfig)
- [config](App.md#config)
- [autoLayout](App.md#autolayout)
- [lazyBounds](App.md#lazybounds)
- [leafs](App.md#leafs)
- [\_\_eventIds](App.md#__eventids)
- [\_\_startTimer](App.md#__starttimer)
- [\_\_controllers](App.md#__controllers)
- [\_\_initWait](App.md#__initwait)
- [\_\_readyWait](App.md#__readywait)
- [\_\_viewReadyWait](App.md#__viewreadywait)
- [\_\_viewCompletedWait](App.md#__viewcompletedwait)
- [\_\_nextRenderWait](App.md#__nextrenderwait)
- [proxyData](App.md#proxydata)
- [\_\_proxyData](App.md#__proxydata)
- [leafer](App.md#leafer)
- [zoomLayer](App.md#zoomlayer)
- [id](App.md#id)
- [name](App.md#name)
- [className](App.md#classname)
- [blendMode](App.md#blendmode)
- [opacity](App.md#opacity)
- [visible](App.md#visible)
- [locked](App.md#locked)
- [dim](App.md#dim)
- [dimskip](App.md#dimskip)
- [zIndex](App.md#zindex)
- [mask](App.md#mask)
- [eraser](App.md#eraser)
- [x](App.md#x)
- [y](App.md#y)
- [scaleX](App.md#scalex)
- [scaleY](App.md#scaley)
- [rotation](App.md#rotation)
- [skewX](App.md#skewx)
- [skewY](App.md#skewy)
- [offsetX](App.md#offsetx)
- [offsetY](App.md#offsety)
- [scrollX](App.md#scrollx)
- [scrollY](App.md#scrolly)
- [origin](App.md#origin)
- [around](App.md#around)
- [lazy](App.md#lazy)
- [renderSpread](App.md#renderspread)
- [path](App.md#path)
- [windingRule](App.md#windingrule)
- [closed](App.md#closed)
- [flow](App.md#flow)
- [padding](App.md#padding)
- [gap](App.md#gap)
- [flowAlign](App.md#flowalign)
- [flowWrap](App.md#flowwrap)
- [itemBox](App.md#itembox)
- [inFlow](App.md#inflow)
- [autoWidth](App.md#autowidth)
- [autoHeight](App.md#autoheight)
- [lockRatio](App.md#lockratio)
- [autoBox](App.md#autobox)
- [widthRange](App.md#widthrange)
- [heightRange](App.md#heightrange)
- [draggable](App.md#draggable)
- [dragBounds](App.md#dragbounds)
- [editable](App.md#editable)
- [hittable](App.md#hittable)
- [hitFill](App.md#hitfill)
- [hitStroke](App.md#hitstroke)
- [hitBox](App.md#hitbox)
- [hitChildren](App.md#hitchildren)
- [hitSelf](App.md#hitself)
- [hitRadius](App.md#hitradius)
- [cursor](App.md#cursor)
- [fill](App.md#fill)
- [stroke](App.md#stroke)
- [strokeAlign](App.md#strokealign)
- [strokeWidth](App.md#strokewidth)
- [strokeWidthFixed](App.md#strokewidthfixed)
- [strokeCap](App.md#strokecap)
- [strokeJoin](App.md#strokejoin)
- [dashPattern](App.md#dashpattern)
- [dashOffset](App.md#dashoffset)
- [miterLimit](App.md#miterlimit)
- [startArrow](App.md#startarrow)
- [endArrow](App.md#endarrow)
- [cornerRadius](App.md#cornerradius)
- [cornerSmoothing](App.md#cornersmoothing)
- [shadow](App.md#shadow)
- [innerShadow](App.md#innershadow)
- [blur](App.md#blur)
- [backgroundBlur](App.md#backgroundblur)
- [grayscale](App.md#grayscale)
- [filter](App.md#filter)
- [animation](App.md#animation)
- [animationOut](App.md#animationout)
- [transition](App.md#transition)
- [transitionOut](App.md#transitionout)
- [motionPath](App.md#motionpath)
- [motionPrecision](App.md#motionprecision)
- [motion](App.md#motion)
- [motionRotation](App.md#motionrotation)
- [states](App.md#states)
- [state](App.md#state)
- [selected](App.md#selected)
- [disabled](App.md#disabled)
- [normalStyle](App.md#normalstyle)
- [hoverStyle](App.md#hoverstyle)
- [pressStyle](App.md#pressstyle)
- [focusStyle](App.md#focusstyle)
- [selectedStyle](App.md#selectedstyle)
- [disabledStyle](App.md#disabledstyle)
- [placeholderStyle](App.md#placeholderstyle)
- [placeholderColor](App.md#placeholdercolor)
- [placeholderDelay](App.md#placeholderdelay)
- [button](App.md#button)
- [editConfig](App.md#editconfig)
- [editOuter](App.md#editouter)
- [editInner](App.md#editinner)
- [data](App.md#data)
- [useFastShadow](App.md#usefastshadow)
- [\_\_box](App.md#__box)
- [\_\_animate](App.md#__animate)

### Accessors

- [tag](App.md#tag)
- [innerName](App.md#innername)
- [\_\_DataProcessor](App.md#__dataprocessor)
- [\_\_LayoutProcessor](App.md#__layoutprocessor)
- [leaferIsCreated](App.md#leaferiscreated)
- [leaferIsReady](App.md#leaferisready)
- [isBranchLeaf](App.md#isbranchleaf)
- [\_\_localMatrix](App.md#__localmatrix)
- [\_\_localBoxBounds](App.md#__localboxbounds)
- [worldTransform](App.md#worldtransform)
- [localTransform](App.md#localtransform)
- [boxBounds](App.md#boxbounds)
- [renderBounds](App.md#renderbounds)
- [worldBoxBounds](App.md#worldboxbounds)
- [worldStrokeBounds](App.md#worldstrokebounds)
- [worldRenderBounds](App.md#worldrenderbounds)
- [worldOpacity](App.md#worldopacity)
- [\_\_worldFlipped](App.md#__worldflipped)
- [\_\_onlyHitMask](App.md#__onlyhitmask)
- [\_\_ignoreHitWorld](App.md#__ignorehitworld)
- [\_\_inLazyBounds](App.md#__inlazybounds)
- [pathInputed](App.md#pathinputed)
- [event](App.md#event)
- [\_\_tag](App.md#__tag)
- [isApp](App.md#isapp)
- [isBranch](App.md#isbranch)
- [app](App.md#app)
- [isLeafer](App.md#isleafer)
- [imageReady](App.md#imageready)
- [layoutLocked](App.md#layoutlocked)
- [FPS](App.md#fps)
- [cursorPoint](App.md#cursorpoint)
- [clientBounds](App.md#clientbounds)
- [isFrame](App.md#isframe)
- [scale](App.md#scale)
- [isAutoWidth](App.md#isautowidth)
- [isAutoHeight](App.md#isautoheight)
- [pen](App.md#pen)

### Methods

- [resetCustom](App.md#resetcustom)
- [waitParent](App.md#waitparent)
- [waitLeafer](App.md#waitleafer)
- [removeNextRender](App.md#removenextrender)
- [\_\_bindLeafer](App.md#__bindleafer)
- [setAttr](App.md#setattr)
- [getAttr](App.md#getattr)
- [getComputedAttr](App.md#getcomputedattr)
- [toString](App.md#tostring)
- [toSVG](App.md#tosvg)
- [\_\_SVG](App.md#__svg)
- [toHTML](App.md#tohtml)
- [setProxyAttr](App.md#setproxyattr)
- [getProxyAttr](App.md#getproxyattr)
- [focus](App.md#focus)
- [updateState](App.md#updatestate)
- [forceUpdate](App.md#forceupdate)
- [\_\_extraUpdate](App.md#__extraupdate)
- [\_\_updateWorldMatrix](App.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](App.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](App.md#__updateworldbounds)
- [\_\_updateLocalBoxBounds](App.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](App.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](App.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](App.md#__updateboxbounds)
- [\_\_updateContentBounds](App.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](App.md#__updatestrokebounds)
- [\_\_updateRenderBounds](App.md#__updaterenderbounds)
- [\_\_updateAutoLayout](App.md#__updateautolayout)
- [\_\_updateFlowLayout](App.md#__updateflowlayout)
- [\_\_updateNaturalSize](App.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](App.md#__updatestrokespread)
- [\_\_updateRenderSpread](App.md#__updaterenderspread)
- [\_\_updateEraser](App.md#__updateeraser)
- [\_\_renderEraser](App.md#__rendereraser)
- [\_\_updateMask](App.md#__updatemask)
- [\_\_renderMask](App.md#__rendermask)
- [\_\_getNowWorld](App.md#__getnowworld)
- [getClampRenderScale](App.md#getclamprenderscale)
- [getRenderScaleData](App.md#getrenderscaledata)
- [getTransform](App.md#gettransform)
- [getBounds](App.md#getbounds)
- [getLayoutBounds](App.md#getlayoutbounds)
- [getLayoutPoints](App.md#getlayoutpoints)
- [getWorldBounds](App.md#getworldbounds)
- [worldToLocal](App.md#worldtolocal)
- [localToWorld](App.md#localtoworld)
- [worldToInner](App.md#worldtoinner)
- [innerToWorld](App.md#innertoworld)
- [getBoxPoint](App.md#getboxpoint)
- [getBoxPointByInner](App.md#getboxpointbyinner)
- [getInnerPoint](App.md#getinnerpoint)
- [getInnerPointByBox](App.md#getinnerpointbybox)
- [getInnerPointByLocal](App.md#getinnerpointbylocal)
- [getLocalPoint](App.md#getlocalpoint)
- [getLocalPointByInner](App.md#getlocalpointbyinner)
- [getPagePoint](App.md#getpagepoint)
- [getWorldPoint](App.md#getworldpoint)
- [getWorldPointByBox](App.md#getworldpointbybox)
- [getWorldPointByLocal](App.md#getworldpointbylocal)
- [getWorldPointByPage](App.md#getworldpointbypage)
- [setTransform](App.md#settransform)
- [transform](App.md#transform)
- [move](App.md#move)
- [moveInner](App.md#moveinner)
- [scaleOf](App.md#scaleof)
- [rotateOf](App.md#rotateof)
- [skewOf](App.md#skewof)
- [transformWorld](App.md#transformworld)
- [moveWorld](App.md#moveworld)
- [scaleOfWorld](App.md#scaleofworld)
- [rotateOfWorld](App.md#rotateofworld)
- [skewOfWorld](App.md#skewofworld)
- [flip](App.md#flip)
- [scaleResize](App.md#scaleresize)
- [\_\_scaleResize](App.md#__scaleresize)
- [resizeWidth](App.md#resizewidth)
- [resizeHeight](App.md#resizeheight)
- [\_\_hitWorld](App.md#__hitworld)
- [\_\_hit](App.md#__hit)
- [\_\_hitFill](App.md#__hitfill)
- [\_\_hitStroke](App.md#__hitstroke)
- [\_\_hitPixel](App.md#__hitpixel)
- [\_\_drawHitPath](App.md#__drawhitpath)
- [\_\_updateHitCanvas](App.md#__updatehitcanvas)
- [\_\_drawFast](App.md#__drawfast)
- [\_\_draw](App.md#__draw)
- [\_\_clip](App.md#__clip)
- [\_\_renderShape](App.md#__rendershape)
- [\_\_drawShape](App.md#__drawshape)
- [\_\_updateWorldOpacity](App.md#__updateworldopacity)
- [\_\_updateChange](App.md#__updatechange)
- [\_\_updatePath](App.md#__updatepath)
- [getMotionPathData](App.md#getmotionpathdata)
- [getMotionPoint](App.md#getmotionpoint)
- [getMotionTotal](App.md#getmotiontotal)
- [\_\_updateMotionPath](App.md#__updatemotionpath)
- [\_\_runAnimation](App.md#__runanimation)
- [\_\_updateSortChildren](App.md#__updatesortchildren)
- [dropTo](App.md#dropto)
- [on](App.md#on)
- [off](App.md#off)
- [on\_](App.md#on_)
- [off\_](App.md#off_)
- [once](App.md#once)
- [emit](App.md#emit)
- [emitEvent](App.md#emitevent)
- [hasEvent](App.md#hasevent)
- [changeAttr](App.md#changeattr)
- [addAttr](App.md#addattr)
- [\_\_emitLifeEvent](App.md#__emitlifeevent)
- [init](App.md#init)
- [\_\_setApp](App.md#__setapp)
- [\_\_updateLocalBounds](App.md#__updatelocalbounds)
- [start](App.md#start)
- [stop](App.md#stop)
- [unlockLayout](App.md#unlocklayout)
- [lockLayout](App.md#locklayout)
- [forceRender](App.md#forcerender)
- [addLeafer](App.md#addleafer)
- [add](App.md#add)
- [forEach](App.md#foreach)
- [\_\_onCreated](App.md#__oncreated)
- [\_\_onReady](App.md#__onready)
- [\_\_onViewReady](App.md#__onviewready)
- [\_\_onChildRenderEnd](App.md#__onchildrenderend)
- [\_\_render](App.md#__render)
- [\_\_onResize](App.md#__onresize)
- [updateLayout](App.md#updatelayout)
- [\_\_getChildConfig](App.md#__getchildconfig)
- [\_\_listenChildEvents](App.md#__listenchildevents)
- [reset](App.md#reset)
- [\_\_setBranch](App.md#__setbranch)
- [toJSON](App.md#tojson)
- [pick](App.md#pick)
- [addAt](App.md#addat)
- [addAfter](App.md#addafter)
- [addBefore](App.md#addbefore)
- [addMany](App.md#addmany)
- [remove](App.md#remove)
- [removeAll](App.md#removeall)
- [clear](App.md#clear)
- [onInit](App.md#oninit)
- [initType](App.md#inittype)
- [set](App.md#set)
- [resize](App.md#resize)
- [requestRender](App.md#requestrender)
- [updateCursor](App.md#updatecursor)
- [updateLazyBounds](App.md#updatelazybounds)
- [\_\_doResize](App.md#__doresize)
- [\_\_bindApp](App.md#__bindapp)
- [\_\_setLeafer](App.md#__setleafer)
- [\_\_checkAutoLayout](App.md#__checkautolayout)
- [\_\_setAttr](App.md#__setattr)
- [\_\_getAttr](App.md#__getattr)
- [\_\_changeCanvasSize](App.md#__changecanvassize)
- [\_\_changeFill](App.md#__changefill)
- [\_\_onLayoutEnd](App.md#__onlayoutend)
- [\_\_onNextRender](App.md#__onnextrender)
- [\_\_checkViewCompleted](App.md#__checkviewcompleted)
- [\_\_onWatchData](App.md#__onwatchdata)
- [waitInit](App.md#waitinit)
- [waitReady](App.md#waitready)
- [waitViewReady](App.md#waitviewready)
- [waitViewCompleted](App.md#waitviewcompleted)
- [nextRender](App.md#nextrender)
- [zoom](App.md#zoom)
- [getValidMove](App.md#getvalidmove)
- [getValidScale](App.md#getvalidscale)
- [getWorldPointByClient](App.md#getworldpointbyclient)
- [getPagePointByClient](App.md#getpagepointbyclient)
- [getClientPointByWorld](App.md#getclientpointbyworld)
- [updateClientBounds](App.md#updateclientbounds)
- [receiveEvent](App.md#receiveevent)
- [emitLeafer](App.md#emitleafer)
- [\_\_listenEvents](App.md#__listenevents)
- [\_\_removeListenEvents](App.md#__removelistenevents)
- [destroy](App.md#destroy)
- [get](App.md#get)
- [createProxyData](App.md#createproxydata)
- [find](App.md#find)
- [findTag](App.md#findtag)
- [findOne](App.md#findone)
- [findId](App.md#findid)
- [getPath](App.md#getpath)
- [getPathString](App.md#getpathstring)
- [load](App.md#load)
- [\_\_onUpdateSize](App.md#__onupdatesize)
- [\_\_updateRenderPath](App.md#__updaterenderpath)
- [\_\_drawRenderPath](App.md#__drawrenderpath)
- [\_\_drawPath](App.md#__drawpath)
- [\_\_drawPathByData](App.md#__drawpathbydata)
- [\_\_drawPathByBox](App.md#__drawpathbybox)
- [drawImagePlaceholder](App.md#drawimageplaceholder)
- [animate](App.md#animate)
- [killAnimate](App.md#killanimate)
- [export](App.md#export)
- [syncExport](App.md#syncexport)
- [clone](App.md#clone)
- [one](App.md#one)
- [registerUI](App.md#registerui)
- [registerData](App.md#registerdata)
- [setEditConfig](App.md#seteditconfig)
- [setEditOuter](App.md#seteditouter)
- [setEditInner](App.md#seteditinner)

## Constructors

### constructor

• **new App**(`userConfig?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`IAppConfig`](../interfaces/IAppConfig.md) |
| `data?` | [`IAppInputData`](../interfaces/IAppInputData.md) |

#### Overrides

[Leafer](Leafer.md).[constructor](Leafer.md#constructor)

#### Defined in

[ui/packages/app/src/App.ts:24](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L24)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[innerId](../interfaces/IApp.md#innerid)

#### Inherited from

[Leafer](Leafer.md).[innerId](Leafer.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[syncEventer](../interfaces/IApp.md#synceventer)

#### Inherited from

[Leafer](Leafer.md).[syncEventer](Leafer.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockNormalStyle](../interfaces/IApp.md#locknormalstyle)

#### Inherited from

[Leafer](Leafer.md).[lockNormalStyle](Leafer.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__layout](../interfaces/IApp.md#__layout)

#### Inherited from

[Leafer](Leafer.md).[__layout](Leafer.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__world](../interfaces/IApp.md#__world)

#### Inherited from

[Leafer](Leafer.md).[__world](Leafer.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__local](../interfaces/IApp.md#__local)

#### Inherited from

[Leafer](Leafer.md).[__local](Leafer.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__nowWorld](../interfaces/IApp.md#__nowworld)

#### Inherited from

[Leafer](Leafer.md).[__nowWorld](Leafer.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__cameraWorld](../interfaces/IApp.md#__cameraworld)

#### Inherited from

[Leafer](Leafer.md).[__cameraWorld](Leafer.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__worldOpacity](../interfaces/IApp.md#__worldopacity)

#### Inherited from

[Leafer](Leafer.md).[__worldOpacity](Leafer.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L63)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__level](../interfaces/IApp.md#__level)

#### Inherited from

[Leafer](Leafer.md).[__level](Leafer.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L79)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__tempNumber](../interfaces/IApp.md#__tempnumber)

#### Inherited from

[Leafer](Leafer.md).[__tempNumber](Leafer.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L80)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasAutoLayout](../interfaces/IApp.md#__hasautolayout)

#### Inherited from

[Leafer](Leafer.md).[__hasAutoLayout](Leafer.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L84)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasMask](../interfaces/IApp.md#__hasmask)

#### Inherited from

[Leafer](Leafer.md).[__hasMask](Leafer.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L85)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasEraser](../interfaces/IApp.md#__haseraser)

#### Inherited from

[Leafer](Leafer.md).[__hasEraser](Leafer.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L86)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitCanvas](../interfaces/IApp.md#__hitcanvas)

#### Inherited from

[Leafer](Leafer.md).[__hitCanvas](Leafer.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L87)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__captureMap](../interfaces/IApp.md#__capturemap)

#### Inherited from

[Leafer](Leafer.md).[__captureMap](Leafer.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L98)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__bubbleMap](../interfaces/IApp.md#__bubblemap)

#### Inherited from

[Leafer](Leafer.md).[__bubbleMap](Leafer.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L99)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasLocalEvent](../interfaces/IApp.md#__haslocalevent)

#### Inherited from

[Leafer](Leafer.md).[__hasLocalEvent](Leafer.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L101)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hasWorldEvent](../interfaces/IApp.md#__hasworldevent)

#### Inherited from

[Leafer](Leafer.md).[__hasWorldEvent](Leafer.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L102)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[destroyed](../interfaces/IApp.md#destroyed)

#### Inherited from

[Leafer](Leafer.md).[destroyed](Leafer.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L107)

___

### children

• **children**: [`ILeafer`](../interfaces/ILeafer.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[children](../interfaces/IApp.md#children)

#### Overrides

[Leafer](Leafer.md).[children](Leafer.md#children)

#### Defined in

[ui/packages/app/src/App.ts:16](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L16)

___

### realCanvas

• **realCanvas**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[realCanvas](../interfaces/IApp.md#realcanvas)

#### Defined in

[ui/packages/app/src/App.ts:18](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L18)

___

### ground

• **ground**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[ground](../interfaces/IApp.md#ground)

#### Defined in

[ui/packages/app/src/App.ts:20](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L20)

___

### tree

• **tree**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[tree](../interfaces/IApp.md#tree)

#### Defined in

[ui/packages/app/src/App.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L21)

___

### sky

• **sky**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[sky](../interfaces/IApp.md#sky)

#### Defined in

[ui/packages/app/src/App.ts:22](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L22)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[width](../interfaces/IApp.md#width)

#### Inherited from

[Leafer](Leafer.md).[width](Leafer.md#width)

#### Defined in

[ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[height](../interfaces/IApp.md#height)

#### Inherited from

[Leafer](Leafer.md).[height](Leafer.md#height)

#### Defined in

[ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L26)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[childlessJSON](../interfaces/IApp.md#childlessjson)

#### Inherited from

[Leafer](Leafer.md).[childlessJSON](Leafer.md#childlessjson)

#### Defined in

[ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L30)

___

### list

▪ `Static` **list**: [`LeafList`](LeafList.md)

#### Inherited from

[Leafer](Leafer.md).[list](Leafer.md#list)

#### Defined in

[ui/packages/display/src/Leafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L15)

___

### \_\_

• **\_\_**: [`ILeaferData`](../interfaces/ILeaferData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__](../interfaces/IApp.md#__)

#### Inherited from

[Leafer](Leafer.md).[__](Leafer.md#__)

#### Defined in

[ui/packages/display/src/Leafer.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L21)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[pixelRatio](../interfaces/IApp.md#pixelratio)

#### Inherited from

[Leafer](Leafer.md).[pixelRatio](Leafer.md#pixelratio)

#### Defined in

[ui/packages/display/src/Leafer.ts:24](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L24)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[parentApp](../interfaces/IApp.md#parentapp)

#### Inherited from

[Leafer](Leafer.md).[parentApp](Leafer.md#parentapp)

#### Defined in

[ui/packages/display/src/Leafer.ts:31](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L31)

___

### parent

• `Optional` **parent**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[parent](../interfaces/IApp.md#parent)

#### Inherited from

[Leafer](Leafer.md).[parent](Leafer.md#parent)

#### Defined in

[ui/packages/display/src/Leafer.ts:32](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L32)

___

### running

• **running**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[running](../interfaces/IApp.md#running)

#### Inherited from

[Leafer](Leafer.md).[running](Leafer.md#running)

#### Defined in

[ui/packages/display/src/Leafer.ts:34](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L34)

___

### created

• **created**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[created](../interfaces/IApp.md#created)

#### Inherited from

[Leafer](Leafer.md).[created](Leafer.md#created)

#### Defined in

[ui/packages/display/src/Leafer.ts:35](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L35)

___

### ready

• **ready**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[ready](../interfaces/IApp.md#ready)

#### Inherited from

[Leafer](Leafer.md).[ready](Leafer.md#ready)

#### Defined in

[ui/packages/display/src/Leafer.ts:36](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L36)

___

### viewReady

• **viewReady**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[viewReady](../interfaces/IApp.md#viewready)

#### Inherited from

[Leafer](Leafer.md).[viewReady](Leafer.md#viewready)

#### Defined in

[ui/packages/display/src/Leafer.ts:37](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L37)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[viewCompleted](../interfaces/IApp.md#viewcompleted)

#### Inherited from

[Leafer](Leafer.md).[viewCompleted](Leafer.md#viewcompleted)

#### Defined in

[ui/packages/display/src/Leafer.ts:38](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L38)

___

### transforming

• **transforming**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[transforming](../interfaces/IApp.md#transforming)

#### Inherited from

[Leafer](Leafer.md).[transforming](Leafer.md#transforming)

#### Defined in

[ui/packages/display/src/Leafer.ts:42](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L42)

___

### view

• **view**: `unknown`

#### Implementation of

[IApp](../interfaces/IApp.md).[view](../interfaces/IApp.md#view)

#### Inherited from

[Leafer](Leafer.md).[view](Leafer.md#view)

#### Defined in

[ui/packages/display/src/Leafer.ts:44](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L44)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[canvas](../interfaces/IApp.md#canvas)

#### Inherited from

[Leafer](Leafer.md).[canvas](Leafer.md#canvas)

#### Defined in

[ui/packages/display/src/Leafer.ts:47](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L47)

___

### renderer

• **renderer**: [`IRenderer`](../interfaces/IRenderer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[renderer](../interfaces/IApp.md#renderer)

#### Inherited from

[Leafer](Leafer.md).[renderer](Leafer.md#renderer)

#### Defined in

[ui/packages/display/src/Leafer.ts:48](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L48)

___

### watcher

• **watcher**: [`IWatcher`](../interfaces/IWatcher.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[watcher](../interfaces/IApp.md#watcher)

#### Inherited from

[Leafer](Leafer.md).[watcher](Leafer.md#watcher)

#### Defined in

[ui/packages/display/src/Leafer.ts:50](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L50)

___

### layouter

• **layouter**: [`ILayouter`](../interfaces/ILayouter.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[layouter](../interfaces/IApp.md#layouter)

#### Inherited from

[Leafer](Leafer.md).[layouter](Leafer.md#layouter)

#### Defined in

[ui/packages/display/src/Leafer.ts:51](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L51)

___

### selector

• `Optional` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[selector](../interfaces/IApp.md#selector)

#### Inherited from

[Leafer](Leafer.md).[selector](Leafer.md#selector)

#### Defined in

[ui/packages/display/src/Leafer.ts:53](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L53)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](../interfaces/IInteraction.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[interaction](../interfaces/IApp.md#interaction)

#### Inherited from

[Leafer](Leafer.md).[interaction](Leafer.md#interaction)

#### Defined in

[ui/packages/display/src/Leafer.ts:54](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L54)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[canvasManager](../interfaces/IApp.md#canvasmanager)

#### Inherited from

[Leafer](Leafer.md).[canvasManager](Leafer.md#canvasmanager)

#### Defined in

[ui/packages/display/src/Leafer.ts:56](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L56)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](../interfaces/IHitCanvasManager.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitCanvasManager](../interfaces/IApp.md#hitcanvasmanager)

#### Inherited from

[Leafer](Leafer.md).[hitCanvasManager](Leafer.md#hitcanvasmanager)

#### Defined in

[ui/packages/display/src/Leafer.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L57)

___

### editor

• **editor**: [`IEditorBase`](../interfaces/IEditorBase.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[editor](../interfaces/IApp.md#editor)

#### Inherited from

[Leafer](Leafer.md).[editor](Leafer.md#editor)

#### Defined in

[ui/packages/display/src/Leafer.ts:60](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L60)

___

### userConfig

• **userConfig**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[userConfig](../interfaces/IApp.md#userconfig)

#### Inherited from

[Leafer](Leafer.md).[userConfig](Leafer.md#userconfig)

#### Defined in

[ui/packages/display/src/Leafer.ts:62](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L62)

___

### config

• **config**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[config](../interfaces/IApp.md#config)

#### Inherited from

[Leafer](Leafer.md).[config](Leafer.md#config)

#### Defined in

[ui/packages/display/src/Leafer.ts:63](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L63)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoLayout](../interfaces/IApp.md#autolayout)

#### Inherited from

[Leafer](Leafer.md).[autoLayout](Leafer.md#autolayout)

#### Defined in

[ui/packages/display/src/Leafer.ts:71](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L71)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[lazyBounds](../interfaces/IApp.md#lazybounds)

#### Inherited from

[Leafer](Leafer.md).[lazyBounds](Leafer.md#lazybounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:72](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L72)

___

### leafs

• **leafs**: `number` = `0`

#### Implementation of

[IApp](../interfaces/IApp.md).[leafs](../interfaces/IApp.md#leafs)

#### Inherited from

[Leafer](Leafer.md).[leafs](Leafer.md#leafs)

#### Defined in

[ui/packages/display/src/Leafer.ts:77](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L77)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IApp](../interfaces/IApp.md).[__eventIds](../interfaces/IApp.md#__eventids)

#### Inherited from

[Leafer](Leafer.md).[__eventIds](Leafer.md#__eventids)

#### Defined in

[ui/packages/display/src/Leafer.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L79)

___

### \_\_startTimer

• `Protected` **\_\_startTimer**: `any`

#### Inherited from

[Leafer](Leafer.md).[__startTimer](Leafer.md#__starttimer)

#### Defined in

[ui/packages/display/src/Leafer.ts:80](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L80)

___

### \_\_controllers

• `Protected` **\_\_controllers**: [`IControl`](../interfaces/IControl.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__controllers](Leafer.md#__controllers)

#### Defined in

[ui/packages/display/src/Leafer.ts:81](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L81)

___

### \_\_initWait

• `Protected` **\_\_initWait**: [`IFunction`](../interfaces/IFunction.md)[]

#### Inherited from

[Leafer](Leafer.md).[__initWait](Leafer.md#__initwait)

#### Defined in

[ui/packages/display/src/Leafer.ts:83](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L83)

___

### \_\_readyWait

• `Protected` **\_\_readyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__readyWait](Leafer.md#__readywait)

#### Defined in

[ui/packages/display/src/Leafer.ts:84](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L84)

___

### \_\_viewReadyWait

• `Protected` **\_\_viewReadyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__viewReadyWait](Leafer.md#__viewreadywait)

#### Defined in

[ui/packages/display/src/Leafer.ts:85](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L85)

___

### \_\_viewCompletedWait

• `Protected` **\_\_viewCompletedWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Inherited from

[Leafer](Leafer.md).[__viewCompletedWait](Leafer.md#__viewcompletedwait)

#### Defined in

[ui/packages/display/src/Leafer.ts:86](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L86)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Implementation of

[IApp](../interfaces/IApp.md).[__nextRenderWait](../interfaces/IApp.md#__nextrenderwait)

#### Inherited from

[Leafer](Leafer.md).[__nextRenderWait](Leafer.md#__nextrenderwait)

#### Defined in

[ui/packages/display/src/Leafer.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L87)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[proxyData](../interfaces/IApp.md#proxydata)

#### Inherited from

[Leafer](Leafer.md).[proxyData](Leafer.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__proxyData](../interfaces/IApp.md#__proxydata)

#### Inherited from

[Leafer](Leafer.md).[__proxyData](Leafer.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[leafer](../interfaces/IApp.md#leafer)

#### Inherited from

[Leafer](Leafer.md).[leafer](Leafer.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L26)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[zoomLayer](../interfaces/IApp.md#zoomlayer)

#### Inherited from

[Leafer](Leafer.md).[zoomLayer](Leafer.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[id](../interfaces/IApp.md#id)

#### Inherited from

[Leafer](Leafer.md).[id](Leafer.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[name](../interfaces/IApp.md#name)

#### Inherited from

[Leafer](Leafer.md).[name](Leafer.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[className](../interfaces/IApp.md#classname)

#### Inherited from

[Leafer](Leafer.md).[className](Leafer.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IApp](../interfaces/IApp.md).[blendMode](../interfaces/IApp.md#blendmode)

#### Inherited from

[Leafer](Leafer.md).[blendMode](Leafer.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[opacity](../interfaces/IApp.md#opacity)

#### Inherited from

[Leafer](Leafer.md).[opacity](Leafer.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IApp](../interfaces/IApp.md).[visible](../interfaces/IApp.md#visible)

#### Inherited from

[Leafer](Leafer.md).[visible](Leafer.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[locked](../interfaces/IApp.md#locked)

#### Inherited from

[Leafer](Leafer.md).[locked](Leafer.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[dim](../interfaces/IApp.md#dim)

#### Inherited from

[Leafer](Leafer.md).[dim](Leafer.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[dimskip](../interfaces/IApp.md#dimskip)

#### Inherited from

[Leafer](Leafer.md).[dimskip](Leafer.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[zIndex](../interfaces/IApp.md#zindex)

#### Inherited from

[Leafer](Leafer.md).[zIndex](Leafer.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IApp](../interfaces/IApp.md).[mask](../interfaces/IApp.md#mask)

#### Inherited from

[Leafer](Leafer.md).[mask](Leafer.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IApp](../interfaces/IApp.md).[eraser](../interfaces/IApp.md#eraser)

#### Inherited from

[Leafer](Leafer.md).[eraser](Leafer.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[x](../interfaces/IApp.md#x)

#### Inherited from

[Leafer](Leafer.md).[x](Leafer.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[y](../interfaces/IApp.md#y)

#### Inherited from

[Leafer](Leafer.md).[y](Leafer.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleX](../interfaces/IApp.md#scalex)

#### Inherited from

[Leafer](Leafer.md).[scaleX](Leafer.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleY](../interfaces/IApp.md#scaley)

#### Inherited from

[Leafer](Leafer.md).[scaleY](Leafer.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[rotation](../interfaces/IApp.md#rotation)

#### Inherited from

[Leafer](Leafer.md).[rotation](Leafer.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewX](../interfaces/IApp.md#skewx)

#### Inherited from

[Leafer](Leafer.md).[skewX](Leafer.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewY](../interfaces/IApp.md#skewy)

#### Inherited from

[Leafer](Leafer.md).[skewY](Leafer.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[offsetX](../interfaces/IApp.md#offsetx)

#### Inherited from

[Leafer](Leafer.md).[offsetX](Leafer.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[offsetY](../interfaces/IApp.md#offsety)

#### Inherited from

[Leafer](Leafer.md).[offsetY](Leafer.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scrollX](../interfaces/IApp.md#scrollx)

#### Inherited from

[Leafer](Leafer.md).[scrollX](Leafer.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[scrollY](../interfaces/IApp.md#scrolly)

#### Inherited from

[Leafer](Leafer.md).[scrollY](Leafer.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IApp](../interfaces/IApp.md).[origin](../interfaces/IApp.md#origin)

#### Inherited from

[Leafer](Leafer.md).[origin](Leafer.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IApp](../interfaces/IApp.md).[around](../interfaces/IApp.md#around)

#### Inherited from

[Leafer](Leafer.md).[around](Leafer.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lazy](../interfaces/IApp.md#lazy)

#### Inherited from

[Leafer](Leafer.md).[lazy](Leafer.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L140)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[renderSpread](../interfaces/IApp.md#renderspread)

#### Inherited from

[Leafer](Leafer.md).[renderSpread](Leafer.md#renderspread)

#### Defined in

[ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[path](../interfaces/IApp.md#path)

#### Inherited from

[Leafer](Leafer.md).[path](Leafer.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IApp](../interfaces/IApp.md).[windingRule](../interfaces/IApp.md#windingrule)

#### Inherited from

[Leafer](Leafer.md).[windingRule](Leafer.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[closed](../interfaces/IApp.md#closed)

#### Inherited from

[Leafer](Leafer.md).[closed](Leafer.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L158)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[flow](../interfaces/IApp.md#flow)

#### Inherited from

[Leafer](Leafer.md).[flow](Leafer.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L162)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[padding](../interfaces/IApp.md#padding)

#### Inherited from

[Leafer](Leafer.md).[padding](Leafer.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[gap](../interfaces/IApp.md#gap)

#### Inherited from

[Leafer](Leafer.md).[gap](Leafer.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IApp](../interfaces/IApp.md).[flowAlign](../interfaces/IApp.md#flowalign)

#### Inherited from

[Leafer](Leafer.md).[flowAlign](Leafer.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IApp](../interfaces/IApp.md).[flowWrap](../interfaces/IApp.md#flowwrap)

#### Inherited from

[Leafer](Leafer.md).[flowWrap](Leafer.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[itemBox](../interfaces/IApp.md#itembox)

#### Inherited from

[Leafer](Leafer.md).[itemBox](Leafer.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[inFlow](../interfaces/IApp.md#inflow)

#### Inherited from

[Leafer](Leafer.md).[inFlow](Leafer.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoWidth](../interfaces/IApp.md#autowidth)

#### Inherited from

[Leafer](Leafer.md).[autoWidth](Leafer.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoHeight](../interfaces/IApp.md#autoheight)

#### Inherited from

[Leafer](Leafer.md).[autoHeight](Leafer.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockRatio](../interfaces/IApp.md#lockratio)

#### Inherited from

[Leafer](Leafer.md).[lockRatio](Leafer.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[autoBox](../interfaces/IApp.md#autobox)

#### Inherited from

[Leafer](Leafer.md).[autoBox](Leafer.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[widthRange](../interfaces/IApp.md#widthrange)

#### Inherited from

[Leafer](Leafer.md).[widthRange](Leafer.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[heightRange](../interfaces/IApp.md#heightrange)

#### Inherited from

[Leafer](Leafer.md).[heightRange](Leafer.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IApp](../interfaces/IApp.md).[draggable](../interfaces/IApp.md#draggable)

#### Inherited from

[Leafer](Leafer.md).[draggable](Leafer.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[dragBounds](../interfaces/IApp.md#dragbounds)

#### Inherited from

[Leafer](Leafer.md).[dragBounds](Leafer.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L200)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[editable](../interfaces/IApp.md#editable)

#### Inherited from

[Leafer](Leafer.md).[editable](Leafer.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L204)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hittable](../interfaces/IApp.md#hittable)

#### Inherited from

[Leafer](Leafer.md).[hittable](Leafer.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:209](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L209)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitFill](../interfaces/IApp.md#hitfill)

#### Inherited from

[Leafer](Leafer.md).[hitFill](Leafer.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L212)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IApp](../interfaces/IApp.md).[hitStroke](../interfaces/IApp.md#hitstroke)

#### Inherited from

[Leafer](Leafer.md).[hitStroke](Leafer.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L215)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitBox](../interfaces/IApp.md#hitbox)

#### Inherited from

[Leafer](Leafer.md).[hitBox](Leafer.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L218)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitChildren](../interfaces/IApp.md#hitchildren)

#### Inherited from

[Leafer](Leafer.md).[hitChildren](Leafer.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L221)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitSelf](../interfaces/IApp.md#hitself)

#### Inherited from

[Leafer](Leafer.md).[hitSelf](Leafer.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L224)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[hitRadius](../interfaces/IApp.md#hitradius)

#### Inherited from

[Leafer](Leafer.md).[hitRadius](Leafer.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L227)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[cursor](../interfaces/IApp.md#cursor)

#### Inherited from

[Leafer](Leafer.md).[cursor](Leafer.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L230)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IApp](../interfaces/IApp.md).[fill](../interfaces/IApp.md#fill)

#### Inherited from

[Leafer](Leafer.md).[fill](Leafer.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L238)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IApp](../interfaces/IApp.md).[stroke](../interfaces/IApp.md#stroke)

#### Inherited from

[Leafer](Leafer.md).[stroke](Leafer.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:243](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L243)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeAlign](../interfaces/IApp.md#strokealign)

#### Inherited from

[Leafer](Leafer.md).[strokeAlign](Leafer.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L246)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeWidth](../interfaces/IApp.md#strokewidth)

#### Inherited from

[Leafer](Leafer.md).[strokeWidth](Leafer.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L249)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeWidthFixed](../interfaces/IApp.md#strokewidthfixed)

#### Inherited from

[Leafer](Leafer.md).[strokeWidthFixed](Leafer.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L252)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeCap](../interfaces/IApp.md#strokecap)

#### Inherited from

[Leafer](Leafer.md).[strokeCap](Leafer.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L255)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IApp](../interfaces/IApp.md).[strokeJoin](../interfaces/IApp.md#strokejoin)

#### Inherited from

[Leafer](Leafer.md).[strokeJoin](Leafer.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L258)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IApp](../interfaces/IApp.md).[dashPattern](../interfaces/IApp.md#dashpattern)

#### Inherited from

[Leafer](Leafer.md).[dashPattern](Leafer.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L261)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[dashOffset](../interfaces/IApp.md#dashoffset)

#### Inherited from

[Leafer](Leafer.md).[dashOffset](Leafer.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L264)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[miterLimit](../interfaces/IApp.md#miterlimit)

#### Inherited from

[Leafer](Leafer.md).[miterLimit](Leafer.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L267)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[startArrow](../interfaces/IApp.md#startarrow)

#### Inherited from

[Leafer](Leafer.md).[startArrow](Leafer.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:272](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L272)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IApp](../interfaces/IApp.md).[endArrow](../interfaces/IApp.md#endarrow)

#### Inherited from

[Leafer](Leafer.md).[endArrow](Leafer.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L274)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IApp](../interfaces/IApp.md).[cornerRadius](../interfaces/IApp.md#cornerradius)

#### Inherited from

[Leafer](Leafer.md).[cornerRadius](Leafer.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L279)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[cornerSmoothing](../interfaces/IApp.md#cornersmoothing)

#### Inherited from

[Leafer](Leafer.md).[cornerSmoothing](Leafer.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L282)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[shadow](../interfaces/IApp.md#shadow)

#### Inherited from

[Leafer](Leafer.md).[shadow](Leafer.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:287](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L287)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[innerShadow](../interfaces/IApp.md#innershadow)

#### Inherited from

[Leafer](Leafer.md).[innerShadow](Leafer.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L290)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[blur](../interfaces/IApp.md#blur)

#### Inherited from

[Leafer](Leafer.md).[blur](Leafer.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L293)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[backgroundBlur](../interfaces/IApp.md#backgroundblur)

#### Inherited from

[Leafer](Leafer.md).[backgroundBlur](Leafer.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L296)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[grayscale](../interfaces/IApp.md#grayscale)

#### Inherited from

[Leafer](Leafer.md).[grayscale](Leafer.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L299)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[filter](../interfaces/IApp.md#filter)

#### Inherited from

[Leafer](Leafer.md).[filter](Leafer.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L302)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[animation](../interfaces/IApp.md#animation)

#### Inherited from

[Leafer](Leafer.md).[animation](Leafer.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:307](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L307)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[animationOut](../interfaces/IApp.md#animationout)

#### Inherited from

[Leafer](Leafer.md).[animationOut](Leafer.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L309)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IApp](../interfaces/IApp.md).[transition](../interfaces/IApp.md#transition)

#### Inherited from

[Leafer](Leafer.md).[transition](Leafer.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L312)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IApp](../interfaces/IApp.md).[transitionOut](../interfaces/IApp.md#transitionout)

#### Inherited from

[Leafer](Leafer.md).[transitionOut](Leafer.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L314)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionPath](../interfaces/IApp.md#motionpath)

#### Inherited from

[Leafer](Leafer.md).[motionPath](Leafer.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L319)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionPrecision](../interfaces/IApp.md#motionprecision)

#### Inherited from

[Leafer](Leafer.md).[motionPrecision](Leafer.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L321)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[motion](../interfaces/IApp.md#motion)

#### Inherited from

[Leafer](Leafer.md).[motion](Leafer.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L324)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[motionRotation](../interfaces/IApp.md#motionrotation)

#### Inherited from

[Leafer](Leafer.md).[motionRotation](Leafer.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L326)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[states](../interfaces/IApp.md#states)

#### Inherited from

[Leafer](Leafer.md).[states](Leafer.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L331)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[state](../interfaces/IApp.md#state)

#### Inherited from

[Leafer](Leafer.md).[state](Leafer.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L333)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[selected](../interfaces/IApp.md#selected)

#### Inherited from

[Leafer](Leafer.md).[selected](Leafer.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L336)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[disabled](../interfaces/IApp.md#disabled)

#### Inherited from

[Leafer](Leafer.md).[disabled](Leafer.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L338)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[normalStyle](../interfaces/IApp.md#normalstyle)

#### Inherited from

[Leafer](Leafer.md).[normalStyle](Leafer.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L341)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[hoverStyle](../interfaces/IApp.md#hoverstyle)

#### Inherited from

[Leafer](Leafer.md).[hoverStyle](Leafer.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L343)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pressStyle](../interfaces/IApp.md#pressstyle)

#### Inherited from

[Leafer](Leafer.md).[pressStyle](Leafer.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L345)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[focusStyle](../interfaces/IApp.md#focusstyle)

#### Inherited from

[Leafer](Leafer.md).[focusStyle](Leafer.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L347)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[selectedStyle](../interfaces/IApp.md#selectedstyle)

#### Inherited from

[Leafer](Leafer.md).[selectedStyle](Leafer.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L349)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[disabledStyle](../interfaces/IApp.md#disabledstyle)

#### Inherited from

[Leafer](Leafer.md).[disabledStyle](Leafer.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:351](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L351)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderStyle](../interfaces/IApp.md#placeholderstyle)

#### Inherited from

[Leafer](Leafer.md).[placeholderStyle](Leafer.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L354)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderColor](../interfaces/IApp.md#placeholdercolor)

#### Inherited from

[Leafer](Leafer.md).[placeholderColor](Leafer.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L357)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IApp](../interfaces/IApp.md).[placeholderDelay](../interfaces/IApp.md#placeholderdelay)

#### Inherited from

[Leafer](Leafer.md).[placeholderDelay](Leafer.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L360)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[button](../interfaces/IApp.md#button)

#### Inherited from

[Leafer](Leafer.md).[button](Leafer.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L363)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[editConfig](../interfaces/IApp.md#editconfig)

#### Inherited from

[Leafer](Leafer.md).[editConfig](Leafer.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L368)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[editOuter](../interfaces/IApp.md#editouter)

#### Inherited from

[Leafer](Leafer.md).[editOuter](Leafer.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L370)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IApp](../interfaces/IApp.md).[editInner](../interfaces/IApp.md#editinner)

#### Inherited from

[Leafer](Leafer.md).[editInner](Leafer.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L372)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[data](../interfaces/IApp.md#data)

#### Inherited from

[Leafer](Leafer.md).[data](Leafer.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L377)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[useFastShadow](../interfaces/IApp.md#usefastshadow)

#### Inherited from

[Leafer](Leafer.md).[useFastShadow](Leafer.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L386)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__box](../interfaces/IApp.md#__box)

#### Inherited from

[Leafer](Leafer.md).[__box](Leafer.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L388)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__animate](../interfaces/IApp.md#__animate)

#### Inherited from

[Leafer](Leafer.md).[__animate](Leafer.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L389)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[tag](../interfaces/IApp.md#tag)

#### Inherited from

Leafer.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L27)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[tag](../interfaces/IApp.md#tag)

#### Inherited from

Leafer.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L28)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[innerName](../interfaces/IApp.md#innername)

#### Inherited from

Leafer.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__DataProcessor](../interfaces/IApp.md#__dataprocessor)

#### Inherited from

Leafer.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__LayoutProcessor](../interfaces/IApp.md#__layoutprocessor)

#### Inherited from

Leafer.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[leaferIsCreated](../interfaces/IApp.md#leaferiscreated)

#### Inherited from

Leafer.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[leaferIsReady](../interfaces/IApp.md#leaferisready)

#### Inherited from

Leafer.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L42)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isBranchLeaf](../interfaces/IApp.md#isbranchleaf)

#### Inherited from

Leafer.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L46)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__localMatrix](../interfaces/IApp.md#__localmatrix)

#### Inherited from

Leafer.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__localBoxBounds](../interfaces/IApp.md#__localboxbounds)

#### Inherited from

Leafer.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldTransform](../interfaces/IApp.md#worldtransform)

#### Inherited from

Leafer.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[localTransform](../interfaces/IApp.md#localtransform)

#### Inherited from

Leafer.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L67)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[boxBounds](../interfaces/IApp.md#boxbounds)

#### Inherited from

Leafer.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L70)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[renderBounds](../interfaces/IApp.md#renderbounds)

#### Inherited from

Leafer.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L71)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldBoxBounds](../interfaces/IApp.md#worldboxbounds)

#### Inherited from

Leafer.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L72)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldStrokeBounds](../interfaces/IApp.md#worldstrokebounds)

#### Inherited from

Leafer.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L73)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[worldRenderBounds](../interfaces/IApp.md#worldrenderbounds)

#### Inherited from

Leafer.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L74)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[worldOpacity](../interfaces/IApp.md#worldopacity)

#### Inherited from

Leafer.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L77)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__worldFlipped](../interfaces/IApp.md#__worldflipped)

#### Inherited from

Leafer.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L82)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__onlyHitMask](../interfaces/IApp.md#__onlyhitmask)

#### Inherited from

Leafer.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L89)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__ignoreHitWorld](../interfaces/IApp.md#__ignorehitworld)

#### Inherited from

Leafer.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L90)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__inLazyBounds](../interfaces/IApp.md#__inlazybounds)

#### Inherited from

Leafer.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L91)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[pathInputed](../interfaces/IApp.md#pathinputed)

#### Inherited from

Leafer.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L93)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventParamsMap`](../interfaces/IEventParamsMap.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[event](../interfaces/IApp.md#event)

#### Inherited from

Leafer.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L96)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[__tag](../interfaces/IApp.md#__tag)

#### Overrides

Leafer.\_\_tag

#### Defined in

[ui/packages/app/src/App.ts:12](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L12)

___

### isApp

• `get` **isApp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isApp](../interfaces/IApp.md#isapp)

#### Overrides

Leafer.isApp

#### Defined in

[ui/packages/app/src/App.ts:14](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isBranch](../interfaces/IApp.md#isbranch)

#### Inherited from

Leafer.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[app](../interfaces/IApp.md#app)

#### Inherited from

Leafer.app

#### Defined in

[ui/packages/display/src/Leafer.ts:27](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L27)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isLeafer](../interfaces/IApp.md#isleafer)

#### Inherited from

Leafer.isLeafer

#### Defined in

[ui/packages/display/src/Leafer.ts:29](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L29)

___

### imageReady

• `get` **imageReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[imageReady](../interfaces/IApp.md#imageready)

#### Inherited from

Leafer.imageReady

#### Defined in

[ui/packages/display/src/Leafer.ts:39](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L39)

___

### layoutLocked

• `get` **layoutLocked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[layoutLocked](../interfaces/IApp.md#layoutlocked)

#### Inherited from

Leafer.layoutLocked

#### Defined in

[ui/packages/display/src/Leafer.ts:40](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L40)

___

### FPS

• `get` **FPS**(): `number`

#### Returns

`number`

#### Inherited from

Leafer.FPS

#### Defined in

[ui/packages/display/src/Leafer.ts:74](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L74)

___

### cursorPoint

• `get` **cursorPoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[cursorPoint](../interfaces/IApp.md#cursorpoint)

#### Inherited from

Leafer.cursorPoint

#### Defined in

[ui/packages/display/src/Leafer.ts:75](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L75)

___

### clientBounds

• `get` **clientBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[clientBounds](../interfaces/IApp.md#clientbounds)

#### Inherited from

Leafer.clientBounds

#### Defined in

[ui/packages/display/src/Leafer.ts:76](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L76)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isFrame](../interfaces/IApp.md#isframe)

#### Inherited from

Leafer.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[scale](../interfaces/IApp.md#scale)

#### Inherited from

Leafer.scale

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L381)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[scale](../interfaces/IApp.md#scale)

#### Inherited from

Leafer.scale

#### Defined in

[ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L380)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isAutoWidth](../interfaces/IApp.md#isautowidth)

#### Inherited from

Leafer.isAutoWidth

#### Defined in

[ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L383)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[isAutoHeight](../interfaces/IApp.md#isautoheight)

#### Inherited from

Leafer.isAutoHeight

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L384)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pen](../interfaces/IApp.md#pen)

#### Inherited from

Leafer.pen

#### Defined in

[ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L391)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resetCustom](../interfaces/IApp.md#resetcustom)

#### Inherited from

[Leafer](Leafer.md).[resetCustom](Leafer.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:137](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L137)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitParent](../interfaces/IApp.md#waitparent)

#### Inherited from

[Leafer](Leafer.md).[waitParent](Leafer.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L143)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitLeafer](../interfaces/IApp.md#waitleafer)

#### Inherited from

[Leafer](Leafer.md).[waitLeafer](Leafer.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L148)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[removeNextRender](../interfaces/IApp.md#removenextrender)

#### Inherited from

[Leafer](Leafer.md).[removeNextRender](Leafer.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L157)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__bindLeafer](../interfaces/IApp.md#__bindleafer)

#### Inherited from

[Leafer](Leafer.md).[__bindLeafer](Leafer.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L161)

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

#### Implementation of

[IApp](../interfaces/IApp.md).[setAttr](../interfaces/IApp.md#setattr)

#### Inherited from

[Leafer](Leafer.md).[setAttr](Leafer.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:190](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L190)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IApp](../interfaces/IApp.md).[getAttr](../interfaces/IApp.md#getattr)

#### Inherited from

[Leafer](Leafer.md).[getAttr](Leafer.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L191)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Implementation of

[IApp](../interfaces/IApp.md).[getComputedAttr](../interfaces/IApp.md#getcomputedattr)

#### Inherited from

[Leafer](Leafer.md).[getComputedAttr](Leafer.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:193](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L193)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[toString](../interfaces/IApp.md#tostring)

#### Inherited from

[Leafer](Leafer.md).[toString](Leafer.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L200)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[toSVG](../interfaces/IApp.md#tosvg)

#### Inherited from

[Leafer](Leafer.md).[toSVG](Leafer.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L204)

___

### \_\_SVG

▸ **__SVG**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__SVG](../interfaces/IApp.md#__svg)

#### Inherited from

[Leafer](Leafer.md).[__SVG](Leafer.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L206)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[toHTML](../interfaces/IApp.md#tohtml)

#### Inherited from

[Leafer](Leafer.md).[toHTML](Leafer.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L208)

___

### setProxyAttr

▸ **setProxyAttr**(`_attrName`, `_newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[setProxyAttr](../interfaces/IApp.md#setproxyattr)

#### Inherited from

[Leafer](Leafer.md).[setProxyAttr](Leafer.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L216)

___

### getProxyAttr

▸ **getProxyAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IApp](../interfaces/IApp.md).[getProxyAttr](../interfaces/IApp.md#getproxyattr)

#### Inherited from

[Leafer](Leafer.md).[getProxyAttr](Leafer.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L218)

___

### focus

▸ **focus**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[focus](../interfaces/IApp.md#focus)

#### Inherited from

[Leafer](Leafer.md).[focus](Leafer.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L238)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateState](../interfaces/IApp.md#updatestate)

#### Inherited from

[Leafer](Leafer.md).[updateState](Leafer.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L240)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[forceUpdate](../interfaces/IApp.md#forceupdate)

#### Inherited from

[Leafer](Leafer.md).[forceUpdate](Leafer.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L249)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__extraUpdate](../interfaces/IApp.md#__extraupdate)

#### Inherited from

[Leafer](Leafer.md).[__extraUpdate](Leafer.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L261)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldMatrix](../interfaces/IApp.md#__updateworldmatrix)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldMatrix](Leafer.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L267)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalMatrix](../interfaces/IApp.md#__updatelocalmatrix)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalMatrix](Leafer.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldBounds](../interfaces/IApp.md#__updateworldbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldBounds](Leafer.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalBoxBounds](../interfaces/IApp.md#__updatelocalboxbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalBoxBounds](Leafer.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalStrokeBounds](../interfaces/IApp.md#__updatelocalstrokebounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalStrokeBounds](Leafer.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L282)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalRenderBounds](../interfaces/IApp.md#__updatelocalrenderbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateLocalRenderBounds](Leafer.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L284)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateBoxBounds](../interfaces/IApp.md#__updateboxbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateBoxBounds](Leafer.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L288)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateContentBounds](../interfaces/IApp.md#__updatecontentbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateContentBounds](Leafer.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L290)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateStrokeBounds](../interfaces/IApp.md#__updatestrokebounds)

#### Inherited from

[Leafer](Leafer.md).[__updateStrokeBounds](Leafer.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L292)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateRenderBounds](../interfaces/IApp.md#__updaterenderbounds)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderBounds](Leafer.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L294)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateAutoLayout](../interfaces/IApp.md#__updateautolayout)

#### Inherited from

[Leafer](Leafer.md).[__updateAutoLayout](Leafer.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L297)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateFlowLayout](../interfaces/IApp.md#__updateflowlayout)

#### Inherited from

[Leafer](Leafer.md).[__updateFlowLayout](Leafer.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L299)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateNaturalSize](../interfaces/IApp.md#__updatenaturalsize)

#### Inherited from

[Leafer](Leafer.md).[__updateNaturalSize](Leafer.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L301)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateStrokeSpread](../interfaces/IApp.md#__updatestrokespread)

#### Inherited from

[Leafer](Leafer.md).[__updateStrokeSpread](Leafer.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:304](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L304)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateRenderSpread](../interfaces/IApp.md#__updaterenderspread)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderSpread](Leafer.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:306](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L306)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateEraser](../interfaces/IApp.md#__updateeraser)

#### Inherited from

[Leafer](Leafer.md).[__updateEraser](Leafer.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:313](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L313)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__renderEraser](../interfaces/IApp.md#__rendereraser)

#### Inherited from

[Leafer](Leafer.md).[__renderEraser](Leafer.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L317)

___

### \_\_updateMask

▸ **__updateMask**(`_value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateMask](../interfaces/IApp.md#__updatemask)

#### Inherited from

[Leafer](Leafer.md).[__updateMask](Leafer.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:325](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L325)

___

### \_\_renderMask

▸ **__renderMask**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__renderMask](../interfaces/IApp.md#__rendermask)

#### Inherited from

[Leafer](Leafer.md).[__renderMask](Leafer.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:331](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L331)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[__getNowWorld](../interfaces/IApp.md#__getnowworld)

#### Inherited from

[Leafer](Leafer.md).[__getNowWorld](Leafer.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L339)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getClampRenderScale](../interfaces/IApp.md#getclamprenderscale)

#### Inherited from

[Leafer](Leafer.md).[getClampRenderScale](Leafer.md#getclamprenderscale)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L352)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`): [`IScaleData`](../interfaces/IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abs?` | `boolean` |
| `scaleFixed?` | `boolean` |

#### Returns

[`IScaleData`](../interfaces/IScaleData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getRenderScaleData](../interfaces/IApp.md#getrenderscaledata)

#### Inherited from

[Leafer](Leafer.md).[getRenderScaleData](Leafer.md#getrenderscaledata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:358](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L358)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getTransform](../interfaces/IApp.md#gettransform)

#### Inherited from

[Leafer](Leafer.md).[getTransform](Leafer.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:366](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L366)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getBounds](../interfaces/IApp.md#getbounds)

#### Inherited from

[Leafer](Leafer.md).[getBounds](Leafer.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L371)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](../interfaces/ILayoutBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getLayoutBounds](../interfaces/IApp.md#getlayoutbounds)

#### Inherited from

[Leafer](Leafer.md).[getLayoutBounds](Leafer.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:375](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L375)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](../interfaces/IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[getLayoutPoints](../interfaces/IApp.md#getlayoutpoints)

#### Inherited from

[Leafer](Leafer.md).[getLayoutPoints](Leafer.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:379](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L379)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `change?` | `boolean` |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldBounds](../interfaces/IApp.md#getworldbounds)

#### Inherited from

[Leafer](Leafer.md).[getWorldBounds](Leafer.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L384)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[worldToLocal](../interfaces/IApp.md#worldtolocal)

#### Inherited from

[Leafer](Leafer.md).[worldToLocal](Leafer.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:392](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L392)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[localToWorld](../interfaces/IApp.md#localtoworld)

#### Inherited from

[Leafer](Leafer.md).[localToWorld](Leafer.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:400](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L400)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[worldToInner](../interfaces/IApp.md#worldtoinner)

#### Inherited from

[Leafer](Leafer.md).[worldToInner](Leafer.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L408)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `to?` | [`IPointData`](../interfaces/IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[innerToWorld](../interfaces/IApp.md#innertoworld)

#### Inherited from

[Leafer](Leafer.md).[innerToWorld](Leafer.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:416](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L416)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getBoxPoint](../interfaces/IApp.md#getboxpoint)

#### Inherited from

[Leafer](Leafer.md).[getBoxPoint](Leafer.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:423](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L423)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getBoxPointByInner](../interfaces/IApp.md#getboxpointbyinner)

#### Inherited from

[Leafer](Leafer.md).[getBoxPointByInner](Leafer.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:427](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L427)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getInnerPoint](../interfaces/IApp.md#getinnerpoint)

#### Inherited from

[Leafer](Leafer.md).[getInnerPoint](Leafer.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:433](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L433)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `_relative?`, `_distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `_distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getInnerPointByBox](../interfaces/IApp.md#getinnerpointbybox)

#### Inherited from

[Leafer](Leafer.md).[getInnerPointByBox](Leafer.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:439](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L439)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getInnerPointByLocal](../interfaces/IApp.md#getinnerpointbylocal)

#### Inherited from

[Leafer](Leafer.md).[getInnerPointByLocal](Leafer.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L445)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getLocalPoint](../interfaces/IApp.md#getlocalpoint)

#### Inherited from

[Leafer](Leafer.md).[getLocalPoint](Leafer.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:449](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L449)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `_relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `_relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getLocalPointByInner](../interfaces/IApp.md#getlocalpointbyinner)

#### Inherited from

[Leafer](Leafer.md).[getLocalPointByInner](Leafer.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L455)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getPagePoint](../interfaces/IApp.md#getpagepoint)

#### Inherited from

[Leafer](Leafer.md).[getPagePoint](Leafer.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:459](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L459)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPoint](../interfaces/IApp.md#getworldpoint)

#### Inherited from

[Leafer](Leafer.md).[getWorldPoint](Leafer.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L464)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPointByBox](../interfaces/IApp.md#getworldpointbybox)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByBox](Leafer.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:470](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L470)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPointByLocal](../interfaces/IApp.md#getworldpointbylocal)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByLocal](Leafer.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:474](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L474)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPointData`](../interfaces/IPointData.md) |
| `relative?` | [`ILeaf`](../interfaces/ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPointByPage](../interfaces/IApp.md#getworldpointbypage)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByPage](Leafer.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:480](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L480)

___

### setTransform

▸ **setTransform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[setTransform](../interfaces/IApp.md#settransform)

#### Inherited from

[Leafer](Leafer.md).[setTransform](Leafer.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:488](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L488)

___

### transform

▸ **transform**(`matrix`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[transform](../interfaces/IApp.md#transform)

#### Inherited from

[Leafer](Leafer.md).[transform](Leafer.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:492](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L492)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[move](../interfaces/IApp.md#move)

#### Inherited from

[Leafer](Leafer.md).[move](Leafer.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:496](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L496)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[moveInner](../interfaces/IApp.md#moveinner)

#### Inherited from

[Leafer](Leafer.md).[moveInner](Leafer.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:501](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L501)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleOf](../interfaces/IApp.md#scaleof)

#### Inherited from

[Leafer](Leafer.md).[scaleOf](Leafer.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:505](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L505)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[rotateOf](../interfaces/IApp.md#rotateof)

#### Inherited from

[Leafer](Leafer.md).[rotateOf](Leafer.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:509](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L509)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewOf](../interfaces/IApp.md#skewof)

#### Inherited from

[Leafer](Leafer.md).[skewOf](Leafer.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:513](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L513)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](../interfaces/IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[transformWorld](../interfaces/IApp.md#transformworld)

#### Inherited from

[Leafer](Leafer.md).[transformWorld](Leafer.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L518)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[moveWorld](../interfaces/IApp.md#moveworld)

#### Inherited from

[Leafer](Leafer.md).[moveWorld](Leafer.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:522](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L522)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleOfWorld](../interfaces/IApp.md#scaleofworld)

#### Inherited from

[Leafer](Leafer.md).[scaleOfWorld](Leafer.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L526)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `rotation` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[rotateOfWorld](../interfaces/IApp.md#rotateofworld)

#### Inherited from

[Leafer](Leafer.md).[rotateOfWorld](Leafer.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:530](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L530)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](../interfaces/IPointData.md) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[skewOfWorld](../interfaces/IApp.md#skewofworld)

#### Inherited from

[Leafer](Leafer.md).[skewOfWorld](Leafer.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L534)

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

#### Implementation of

[IApp](../interfaces/IApp.md).[flip](../interfaces/IApp.md#flip)

#### Inherited from

[Leafer](Leafer.md).[flip](Leafer.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:538](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L538)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY?`, `_noResize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scaleX` | `number` | `undefined` |
| `scaleY` | `number` | `scaleX` |
| `_noResize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[scaleResize](../interfaces/IApp.md#scaleresize)

#### Inherited from

[Leafer](Leafer.md).[scaleResize](Leafer.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L545)

___

### \_\_scaleResize

▸ **__scaleResize**(`_scaleX`, `_scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_scaleX` | `number` |
| `_scaleY` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__scaleResize](../interfaces/IApp.md#__scaleresize)

#### Inherited from

[Leafer](Leafer.md).[__scaleResize](Leafer.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L550)

___

### resizeWidth

▸ **resizeWidth**(`_width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_width` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resizeWidth](../interfaces/IApp.md#resizewidth)

#### Inherited from

[Leafer](Leafer.md).[resizeWidth](Leafer.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L553)

___

### resizeHeight

▸ **resizeHeight**(`_height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_height` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resizeHeight](../interfaces/IApp.md#resizeheight)

#### Inherited from

[Leafer](Leafer.md).[resizeHeight](Leafer.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:555](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L555)

___

### \_\_hitWorld

▸ **__hitWorld**(`_point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_point` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitWorld](../interfaces/IApp.md#__hitworld)

#### Inherited from

[Leafer](Leafer.md).[__hitWorld](Leafer.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L560)

___

### \_\_hit

▸ **__hit**(`_local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_local` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hit](../interfaces/IApp.md#__hit)

#### Inherited from

[Leafer](Leafer.md).[__hit](Leafer.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L562)

___

### \_\_hitFill

▸ **__hitFill**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitFill](../interfaces/IApp.md#__hitfill)

#### Inherited from

[Leafer](Leafer.md).[__hitFill](Leafer.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L564)

___

### \_\_hitStroke

▸ **__hitStroke**(`_inner`, `_strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |
| `_strokeWidth` | `number` |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitStroke](../interfaces/IApp.md#__hitstroke)

#### Inherited from

[Leafer](Leafer.md).[__hitStroke](Leafer.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:566](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L566)

___

### \_\_hitPixel

▸ **__hitPixel**(`_inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_inner` | [`IRadiusPointData`](../interfaces/IRadiusPointData.md) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__hitPixel](../interfaces/IApp.md#__hitpixel)

#### Inherited from

[Leafer](Leafer.md).[__hitPixel](Leafer.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:568](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L568)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`_canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawHitPath](../interfaces/IApp.md#__drawhitpath)

#### Inherited from

[Leafer](Leafer.md).[__drawHitPath](Leafer.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L570)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateHitCanvas](../interfaces/IApp.md#__updatehitcanvas)

#### Inherited from

[Leafer](Leafer.md).[__updateHitCanvas](Leafer.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L572)

___

### \_\_drawFast

▸ **__drawFast**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawFast](../interfaces/IApp.md#__drawfast)

#### Inherited from

[Leafer](Leafer.md).[__drawFast](Leafer.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:581](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L581)

___

### \_\_draw

▸ **__draw**(`_canvas`, `_options`, `_originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `_originCanvas?` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__draw](../interfaces/IApp.md#__draw)

#### Inherited from

[Leafer](Leafer.md).[__draw](Leafer.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:583](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L583)

___

### \_\_clip

▸ **__clip**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__clip](../interfaces/IApp.md#__clip)

#### Inherited from

[Leafer](Leafer.md).[__clip](Leafer.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:586](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L586)

___

### \_\_renderShape

▸ **__renderShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__renderShape](../interfaces/IApp.md#__rendershape)

#### Inherited from

[Leafer](Leafer.md).[__renderShape](Leafer.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L588)

___

### \_\_drawShape

▸ **__drawShape**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawShape](../interfaces/IApp.md#__drawshape)

#### Inherited from

[Leafer](Leafer.md).[__drawShape](Leafer.md#__drawshape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L590)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateWorldOpacity](../interfaces/IApp.md#__updateworldopacity)

#### Inherited from

[Leafer](Leafer.md).[__updateWorldOpacity](Leafer.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L593)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateChange](../interfaces/IApp.md#__updatechange)

#### Inherited from

[Leafer](Leafer.md).[__updateChange](Leafer.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L595)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updatePath](../interfaces/IApp.md#__updatepath)

#### Inherited from

[Leafer](Leafer.md).[__updatePath](Leafer.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L606)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getMotionPathData](../interfaces/IApp.md#getmotionpathdata)

#### Inherited from

[Leafer](Leafer.md).[getMotionPathData](Leafer.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L615)

___

### getMotionPoint

▸ **getMotionPoint**(`_motionDistance`): [`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_motionDistance` | `number` \| [`IUnitData`](../interfaces/IUnitData.md) |

#### Returns

[`IRotationPointData`](../interfaces/IRotationPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getMotionPoint](../interfaces/IApp.md#getmotionpoint)

#### Inherited from

[Leafer](Leafer.md).[getMotionPoint](Leafer.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:619](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L619)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getMotionTotal](../interfaces/IApp.md#getmotiontotal)

#### Inherited from

[Leafer](Leafer.md).[getMotionTotal](Leafer.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:623](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L623)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateMotionPath](../interfaces/IApp.md#__updatemotionpath)

#### Inherited from

[Leafer](Leafer.md).[__updateMotionPath](Leafer.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:627](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L627)

___

### \_\_runAnimation

▸ **__runAnimation**(`_type`, `_complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"in"`` \| ``"out"`` |
| `_complete?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__runAnimation](../interfaces/IApp.md#__runanimation)

#### Inherited from

[Leafer](Leafer.md).[__runAnimation](Leafer.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:633](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L633)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateSortChildren](../interfaces/IApp.md#__updatesortchildren)

#### Inherited from

[Leafer](Leafer.md).[__updateSortChildren](Leafer.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L638)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](../interfaces/ILeaf.md) |
| `index?` | `number` |
| `resize?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[dropTo](../interfaces/IApp.md#dropto)

#### Inherited from

[Leafer](Leafer.md).[dropTo](Leafer.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L646)

___

### on

▸ **on**(`_type`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[on](../interfaces/IApp.md#on)

#### Inherited from

[Leafer](Leafer.md).[on](Leafer.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:655](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L655)

___

### off

▸ **off**(`_type?`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | `string` \| `string`[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[off](../interfaces/IApp.md#off)

#### Inherited from

[Leafer](Leafer.md).[off](Leafer.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:657](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L657)

___

### on\_

▸ **on_**(`_type`, `_listener?`, `_bind?`, `_options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_bind?` | [`IObject`](../interfaces/IObject.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[on_](../interfaces/IApp.md#on_)

#### Inherited from

[Leafer](Leafer.md).[on_](Leafer.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:659](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L659)

___

### off\_

▸ **off_**(`_id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[off_](../interfaces/IApp.md#off_)

#### Inherited from

[Leafer](Leafer.md).[off_](Leafer.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:661](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L661)

___

### once

▸ **once**(`_type`, `_listener?`, `_captureOrBind?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[once](../interfaces/IApp.md#once)

#### Inherited from

[Leafer](Leafer.md).[once](Leafer.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:663](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L663)

___

### emit

▸ **emit**(`_type`, `_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[emit](../interfaces/IApp.md#emit)

#### Inherited from

[Leafer](Leafer.md).[emit](Leafer.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:665](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L665)

___

### emitEvent

▸ **emitEvent**(`_event?`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event?` | [`IEvent`](../interfaces/IEvent.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[emitEvent](../interfaces/IApp.md#emitevent)

#### Inherited from

[Leafer](Leafer.md).[emitEvent](Leafer.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:667](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L667)

___

### hasEvent

▸ **hasEvent**(`_type`, `_capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` |
| `_capture?` | `boolean` |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[hasEvent](../interfaces/IApp.md#hasevent)

#### Inherited from

[Leafer](Leafer.md).[hasEvent](Leafer.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:669](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L669)

___

### changeAttr

▸ `Static` **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[changeAttr](Leafer.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:673](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L673)

___

### addAttr

▸ `Static` **addAttr**(`attrName`, `defaultValue`, `fn?`, `helpValue?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValueFunction`](../interfaces/IValueFunction.md) \| [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |
| `helpValue?` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[addAttr](Leafer.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:677](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L677)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__emitLifeEvent](../interfaces/IApp.md#__emitlifeevent)

#### Inherited from

[Leafer](Leafer.md).[__emitLifeEvent](Leafer.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:683](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L683)

___

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`IAppConfig`](../interfaces/IAppConfig.md) |
| `parentApp?` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[init](../interfaces/IApp.md#init)

#### Overrides

[Leafer](Leafer.md).[init](Leafer.md#init)

#### Defined in

[ui/packages/app/src/App.ts:28](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L28)

___

### \_\_setApp

▸ `Protected` **__setApp**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__setApp](Leafer.md#__setapp)

#### Defined in

[ui/packages/app/src/App.ts:39](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L39)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateLocalBounds](../interfaces/IApp.md#__updatelocalbounds)

#### Overrides

[Leafer](Leafer.md).[__updateLocalBounds](Leafer.md#__updatelocalbounds)

#### Defined in

[ui/packages/app/src/App.ts:50](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L50)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[start](../interfaces/IApp.md#start)

#### Overrides

[Leafer](Leafer.md).[start](Leafer.md#start)

#### Defined in

[ui/packages/app/src/App.ts:55](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L55)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[stop](../interfaces/IApp.md#stop)

#### Overrides

[Leafer](Leafer.md).[stop](Leafer.md#stop)

#### Defined in

[ui/packages/app/src/App.ts:60](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L60)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[unlockLayout](../interfaces/IApp.md#unlocklayout)

#### Overrides

[Leafer](Leafer.md).[unlockLayout](Leafer.md#unlocklayout)

#### Defined in

[ui/packages/app/src/App.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L65)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[lockLayout](../interfaces/IApp.md#locklayout)

#### Overrides

[Leafer](Leafer.md).[lockLayout](Leafer.md#locklayout)

#### Defined in

[ui/packages/app/src/App.ts:70](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L70)

___

### forceRender

▸ **forceRender**(`bounds?`, `sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[forceRender](../interfaces/IApp.md#forcerender)

#### Overrides

[Leafer](Leafer.md).[forceRender](Leafer.md#forcerender)

#### Defined in

[ui/packages/app/src/App.ts:75](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L75)

___

### addLeafer

▸ **addLeafer**(`merge?`): [`Leafer`](Leafer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `merge?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |

#### Returns

[`Leafer`](Leafer.md)

#### Defined in

[ui/packages/app/src/App.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L79)

___

### add

▸ **add**(`leafer`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeafer`](../interfaces/ILeafer.md) |
| `index?` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[add](../interfaces/IApp.md#add)

#### Overrides

[Leafer](Leafer.md).[add](Leafer.md#add)

#### Defined in

[ui/packages/app/src/App.ts:85](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L85)

___

### forEach

▸ **forEach**(`fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`IAppForEachFunction`](../interfaces/IAppForEachFunction.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[forEach](../interfaces/IApp.md#foreach)

#### Defined in

[ui/packages/app/src/App.ts:99](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L99)

___

### \_\_onCreated

▸ `Protected` **__onCreated**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onCreated](Leafer.md#__oncreated)

#### Defined in

[ui/packages/app/src/App.ts:103](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L103)

___

### \_\_onReady

▸ `Protected` **__onReady**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onReady](Leafer.md#__onready)

#### Defined in

[ui/packages/app/src/App.ts:107](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L107)

___

### \_\_onViewReady

▸ `Protected` **__onViewReady**(): `void`

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onViewReady](Leafer.md#__onviewready)

#### Defined in

[ui/packages/app/src/App.ts:111](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L111)

___

### \_\_onChildRenderEnd

▸ `Protected` **__onChildRenderEnd**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`RenderEvent`](RenderEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/app/src/App.ts:115](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L115)

___

### \_\_render

▸ **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__render](../interfaces/IApp.md#__render)

#### Overrides

[Leafer](Leafer.md).[__render](Leafer.md#__render)

#### Defined in

[ui/packages/app/src/App.ts:120](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L120)

___

### \_\_onResize

▸ **__onResize**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IResizeEvent`](../interfaces/IResizeEvent.md) |

#### Returns

`void`

#### Overrides

[Leafer](Leafer.md).[__onResize](Leafer.md#__onresize)

#### Defined in

[ui/packages/app/src/App.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L124)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateLayout](../interfaces/IApp.md#updatelayout)

#### Overrides

[Leafer](Leafer.md).[updateLayout](Leafer.md#updatelayout)

#### Defined in

[ui/packages/app/src/App.ts:129](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L129)

___

### \_\_getChildConfig

▸ `Protected` **__getChildConfig**(`userConfig?`): [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |

#### Returns

[`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Defined in

[ui/packages/app/src/App.ts:133](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L133)

___

### \_\_listenChildEvents

▸ `Protected` **__listenChildEvents**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](../interfaces/ILeaferBase.md) |

#### Returns

`void`

#### Defined in

[ui/packages/app/src/App.ts:145](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/app/src/App.ts#L145)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[reset](../interfaces/IApp.md#reset)

#### Inherited from

[Leafer](Leafer.md).[reset](Leafer.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:36](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L36)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__setBranch](Leafer.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:41](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L41)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IUIJSONData`](../interfaces/IUIJSONData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[toJSON](../interfaces/IApp.md#tojson)

#### Inherited from

[Leafer](Leafer.md).[toJSON](Leafer.md#tojson)

#### Defined in

[ui/packages/display/src/Group.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L65)

___

### pick

▸ **pick**(`_hitPoint`, `_options?`): [`IPickResult`](../interfaces/IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_hitPoint` | [`IPointData`](../interfaces/IPointData.md) |
| `_options?` | [`IPickOptions`](../interfaces/IPickOptions.md) |

#### Returns

[`IPickResult`](../interfaces/IPickResult.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[pick](../interfaces/IApp.md#pick)

#### Inherited from

[Leafer](Leafer.md).[pick](Leafer.md#pick)

#### Defined in

[ui/packages/display/src/Group.ts:74](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L74)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `index` | `number` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addAt](../interfaces/IApp.md#addat)

#### Inherited from

[Leafer](Leafer.md).[addAt](Leafer.md#addat)

#### Defined in

[ui/packages/display/src/Group.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L79)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `after` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addAfter](../interfaces/IApp.md#addafter)

#### Inherited from

[Leafer](Leafer.md).[addAfter](Leafer.md#addafter)

#### Defined in

[ui/packages/display/src/Group.ts:83](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L83)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `before` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addBefore](../interfaces/IApp.md#addbefore)

#### Inherited from

[Leafer](Leafer.md).[addBefore](Leafer.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L87)

___

### addMany

▸ **addMany**(`..._children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `..._children` | [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[addMany](../interfaces/IApp.md#addmany)

#### Inherited from

[Leafer](Leafer.md).[addMany](Leafer.md#addmany)

#### Defined in

[ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L95)

___

### remove

▸ **remove**(`_child?`, `_destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child?` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IUI`](../interfaces/IUI.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[remove](../interfaces/IApp.md#remove)

#### Inherited from

[Leafer](Leafer.md).[remove](Leafer.md#remove)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L97)

___

### removeAll

▸ **removeAll**(`_destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[removeAll](../interfaces/IApp.md#removeall)

#### Inherited from

[Leafer](Leafer.md).[removeAll](Leafer.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[clear](../interfaces/IApp.md#clear)

#### Inherited from

[Leafer](Leafer.md).[clear](Leafer.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L101)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[onInit](../interfaces/IApp.md#oninit)

#### Inherited from

[Leafer](Leafer.md).[onInit](Leafer.md#oninit)

#### Defined in

[ui/packages/display/src/Leafer.ts:157](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L157)

___

### initType

▸ **initType**(`_type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | [`ILeaferType`](../modules.md#ileafertype) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[initType](../interfaces/IApp.md#inittype)

#### Inherited from

[Leafer](Leafer.md).[initType](Leafer.md#inittype)

#### Defined in

[ui/packages/display/src/Leafer.ts:159](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L159)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[set](../interfaces/IApp.md#set)

#### Inherited from

[Leafer](Leafer.md).[set](Leafer.md#set)

#### Defined in

[ui/packages/display/src/Leafer.ts:161](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L161)

___

### resize

▸ **resize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[resize](../interfaces/IApp.md#resize)

#### Inherited from

[Leafer](Leafer.md).[resize](Leafer.md#resize)

#### Defined in

[ui/packages/display/src/Leafer.ts:194](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L194)

___

### requestRender

▸ **requestRender**(`change?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `change` | `boolean` | `false` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[requestRender](../interfaces/IApp.md#requestrender)

#### Inherited from

[Leafer](Leafer.md).[requestRender](Leafer.md#requestrender)

#### Defined in

[ui/packages/display/src/Leafer.ts:207](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L207)

___

### updateCursor

▸ **updateCursor**(`cursor?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cursor?` | [`ICursorType`](../modules.md#icursortype) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateCursor](../interfaces/IApp.md#updatecursor)

#### Inherited from

[Leafer](Leafer.md).[updateCursor](Leafer.md#updatecursor)

#### Defined in

[ui/packages/display/src/Leafer.ts:211](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L211)

___

### updateLazyBounds

▸ **updateLazyBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[updateLazyBounds](Leafer.md#updatelazybounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:216](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L216)

___

### \_\_doResize

▸ `Protected` **__doResize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__doResize](Leafer.md#__doresize)

#### Defined in

[ui/packages/display/src/Leafer.ts:220](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L220)

___

### \_\_bindApp

▸ `Protected` **__bindApp**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__bindApp](Leafer.md#__bindapp)

#### Defined in

[ui/packages/display/src/Leafer.ts:237](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L237)

___

### \_\_setLeafer

▸ **__setLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeafer`](../interfaces/ILeafer.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__setLeafer](Leafer.md#__setleafer)

#### Defined in

[ui/packages/display/src/Leafer.ts:245](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L245)

___

### \_\_checkAutoLayout

▸ `Protected` **__checkAutoLayout**(`config`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |
| `parentApp?` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__checkAutoLayout](Leafer.md#__checkautolayout)

#### Defined in

[ui/packages/display/src/Leafer.ts:250](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L250)

___

### \_\_setAttr

▸ **__setAttr**(`attrName`, `newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[IApp](../interfaces/IApp.md).[__setAttr](../interfaces/IApp.md#__setattr)

#### Inherited from

[Leafer](Leafer.md).[__setAttr](Leafer.md#__setattr)

#### Defined in

[ui/packages/display/src/Leafer.ts:257](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L257)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IApp](../interfaces/IApp.md).[__getAttr](../interfaces/IApp.md#__getattr)

#### Inherited from

[Leafer](Leafer.md).[__getAttr](Leafer.md#__getattr)

#### Defined in

[ui/packages/display/src/Leafer.ts:274](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L274)

___

### \_\_changeCanvasSize

▸ `Protected` **__changeCanvasSize**(`attrName`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `newValue` | `number` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__changeCanvasSize](Leafer.md#__changecanvassize)

#### Defined in

[ui/packages/display/src/Leafer.ts:279](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L279)

___

### \_\_changeFill

▸ `Protected` **__changeFill**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__changeFill](Leafer.md#__changefill)

#### Defined in

[ui/packages/display/src/Leafer.ts:286](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L286)

___

### \_\_onLayoutEnd

▸ `Protected` **__onLayoutEnd**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onLayoutEnd](Leafer.md#__onlayoutend)

#### Defined in

[ui/packages/display/src/Leafer.ts:311](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L311)

___

### \_\_onNextRender

▸ `Protected` **__onNextRender**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onNextRender](Leafer.md#__onnextrender)

#### Defined in

[ui/packages/display/src/Leafer.ts:324](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L324)

___

### \_\_checkViewCompleted

▸ `Protected` **__checkViewCompleted**(`emit?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `emit` | `boolean` | `true` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__checkViewCompleted](Leafer.md#__checkviewcompleted)

#### Defined in

[ui/packages/display/src/Leafer.ts:337](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L337)

___

### \_\_onWatchData

▸ `Protected` **__onWatchData**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__onWatchData](Leafer.md#__onwatchdata)

#### Defined in

[ui/packages/display/src/Leafer.ts:347](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L347)

___

### waitInit

▸ **waitInit**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[waitInit](Leafer.md#waitinit)

#### Defined in

[ui/packages/display/src/Leafer.ts:353](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L353)

___

### waitReady

▸ **waitReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitReady](../interfaces/IApp.md#waitready)

#### Inherited from

[Leafer](Leafer.md).[waitReady](Leafer.md#waitready)

#### Defined in

[ui/packages/display/src/Leafer.ts:359](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L359)

___

### waitViewReady

▸ **waitViewReady**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitViewReady](../interfaces/IApp.md#waitviewready)

#### Inherited from

[Leafer](Leafer.md).[waitViewReady](Leafer.md#waitviewready)

#### Defined in

[ui/packages/display/src/Leafer.ts:364](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L364)

___

### waitViewCompleted

▸ **waitViewCompleted**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[waitViewCompleted](../interfaces/IApp.md#waitviewcompleted)

#### Inherited from

[Leafer](Leafer.md).[waitViewCompleted](Leafer.md#waitviewcompleted)

#### Defined in

[ui/packages/display/src/Leafer.ts:369](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L369)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `off?` | ``"off"`` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[nextRender](../interfaces/IApp.md#nextrender)

#### Inherited from

[Leafer](Leafer.md).[nextRender](Leafer.md#nextrender)

#### Defined in

[ui/packages/display/src/Leafer.ts:376](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L376)

___

### zoom

▸ **zoom**(`_zoomType`, `_optionsOrPadding?`, `_scroll?`, `_transition?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `_optionsOrPadding?` | [`IFourNumber`](../modules.md#ifournumber) \| [`IZoomOptions`](../interfaces/IZoomOptions.md) |
| `_scroll?` | `boolean` \| ``"x"`` \| ``"y"`` |
| `_transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[zoom](../interfaces/IApp.md#zoom)

#### Inherited from

[Leafer](Leafer.md).[zoom](Leafer.md#zoom)

#### Defined in

[ui/packages/display/src/Leafer.ts:388](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L388)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getValidMove](../interfaces/IApp.md#getvalidmove)

#### Inherited from

[Leafer](Leafer.md).[getValidMove](Leafer.md#getvalidmove)

#### Defined in

[ui/packages/display/src/Leafer.ts:394](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L394)

___

### getValidScale

▸ **getValidScale**(`changeScale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `changeScale` | `number` |

#### Returns

`number`

#### Implementation of

[IApp](../interfaces/IApp.md).[getValidScale](../interfaces/IApp.md#getvalidscale)

#### Inherited from

[Leafer](Leafer.md).[getValidScale](Leafer.md#getvalidscale)

#### Defined in

[ui/packages/display/src/Leafer.ts:395](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L395)

___

### getWorldPointByClient

▸ **getWorldPointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getWorldPointByClient](../interfaces/IApp.md#getworldpointbyclient)

#### Inherited from

[Leafer](Leafer.md).[getWorldPointByClient](Leafer.md#getworldpointbyclient)

#### Defined in

[ui/packages/display/src/Leafer.ts:398](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L398)

___

### getPagePointByClient

▸ **getPagePointByClient**(`clientPoint`, `updateClient?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientPoint` | [`IClientPointData`](../interfaces/IClientPointData.md) |
| `updateClient?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getPagePointByClient](../interfaces/IApp.md#getpagepointbyclient)

#### Inherited from

[Leafer](Leafer.md).[getPagePointByClient](Leafer.md#getpagepointbyclient)

#### Defined in

[ui/packages/display/src/Leafer.ts:402](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L402)

___

### getClientPointByWorld

▸ **getClientPointByWorld**(`worldPoint`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldPoint` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[getClientPointByWorld](../interfaces/IApp.md#getclientpointbyworld)

#### Inherited from

[Leafer](Leafer.md).[getClientPointByWorld](Leafer.md#getclientpointbyworld)

#### Defined in

[ui/packages/display/src/Leafer.ts:406](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L406)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[updateClientBounds](../interfaces/IApp.md#updateclientbounds)

#### Inherited from

[Leafer](Leafer.md).[updateClientBounds](Leafer.md#updateclientbounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:411](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L411)

___

### receiveEvent

▸ **receiveEvent**(`_event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_event` | `any` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[receiveEvent](../interfaces/IApp.md#receiveevent)

#### Inherited from

[Leafer](Leafer.md).[receiveEvent](Leafer.md#receiveevent)

#### Defined in

[ui/packages/display/src/Leafer.ts:416](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L416)

___

### emitLeafer

▸ `Protected` **emitLeafer**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[emitLeafer](Leafer.md#emitleafer)

#### Defined in

[ui/packages/display/src/Leafer.ts:418](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L418)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__listenEvents](Leafer.md#__listenevents)

#### Defined in

[ui/packages/display/src/Leafer.ts:422](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L422)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[__removeListenEvents](Leafer.md#__removelistenevents)

#### Defined in

[ui/packages/display/src/Leafer.ts:439](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L439)

___

### destroy

▸ **destroy**(`sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[destroy](../interfaces/IApp.md#destroy)

#### Inherited from

[Leafer](Leafer.md).[destroy](Leafer.md#destroy)

#### Defined in

[ui/packages/display/src/Leafer.ts:443](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Leafer.ts#L443)

___

### get

▸ **get**(`name?`): [`IValue`](../modules.md#ivalue) \| [`IUIInputData`](../interfaces/IUIInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `string`[] \| [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[get](../interfaces/IApp.md#get)

#### Inherited from

[Leafer](Leafer.md).[get](Leafer.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L422)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[createProxyData](../interfaces/IApp.md#createproxydata)

#### Inherited from

[Leafer](Leafer.md).[createProxyData](Leafer.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L426)

___

### find

▸ **find**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?` | `any` |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[find](../interfaces/IApp.md#find)

#### Inherited from

[Leafer](Leafer.md).[find](Leafer.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:431](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L431)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](../interfaces/IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IApp](../interfaces/IApp.md).[findTag](../interfaces/IApp.md#findtag)

#### Inherited from

[Leafer](Leafer.md).[findTag](Leafer.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L433)

___

### findOne

▸ **findOne**(`_condition`, `_options?`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_condition` | `string` \| `number` \| [`IFindCondition`](../interfaces/IFindCondition.md) \| [`IFindUIMethod`](../interfaces/IFindUIMethod.md) |
| `_options?` | `any` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[findOne](../interfaces/IApp.md#findone)

#### Inherited from

[Leafer](Leafer.md).[findOne](Leafer.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:435](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L435)

___

### findId

▸ **findId**(`id`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[findId](../interfaces/IApp.md#findid)

#### Inherited from

[Leafer](Leafer.md).[findId](Leafer.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:437](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L437)

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

#### Implementation of

[IApp](../interfaces/IApp.md).[getPath](../interfaces/IApp.md#getpath)

#### Inherited from

[Leafer](Leafer.md).[getPath](Leafer.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L442)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`, `floatLength?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |
| `floatLength?` | `number` |

#### Returns

`string`

#### Implementation of

[IApp](../interfaces/IApp.md).[getPathString](../interfaces/IApp.md#getpathstring)

#### Inherited from

[Leafer](Leafer.md).[getPathString](Leafer.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L449)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[load](../interfaces/IApp.md#load)

#### Inherited from

[Leafer](Leafer.md).[load](Leafer.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L454)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__onUpdateSize](../interfaces/IApp.md#__onupdatesize)

#### Inherited from

[Leafer](Leafer.md).[__onUpdateSize](Leafer.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L458)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__updateRenderPath](../interfaces/IApp.md#__updaterenderpath)

#### Inherited from

[Leafer](Leafer.md).[__updateRenderPath](Leafer.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:465](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L465)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawRenderPath](../interfaces/IApp.md#__drawrenderpath)

#### Inherited from

[Leafer](Leafer.md).[__drawRenderPath](Leafer.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:473](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L473)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawPath](../interfaces/IApp.md#__drawpath)

#### Inherited from

[Leafer](Leafer.md).[__drawPath](Leafer.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:478](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L478)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](../interfaces/IPathDrawer.md) |
| `data` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawPathByData](../interfaces/IApp.md#__drawpathbydata)

#### Inherited from

[Leafer](Leafer.md).[__drawPathByData](Leafer.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L483)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](../interfaces/IPathDrawer.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[__drawPathByBox](../interfaces/IApp.md#__drawpathbybox)

#### Inherited from

[Leafer](Leafer.md).[__drawPathByBox](Leafer.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:487](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L487)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`canvas`, `_image?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_image?` | [`ILeaferImage`](../interfaces/ILeaferImage.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[drawImagePlaceholder](../interfaces/IApp.md#drawimageplaceholder)

#### Inherited from

[Leafer](Leafer.md).[drawImagePlaceholder](Leafer.md#drawimageplaceholder)

#### Defined in

[ui/packages/display/src/UI.ts:495](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L495)

___

### animate

▸ **animate**(`_keyframe?`, `_options?`, `_type?`, `_isTemp?`): [`IAnimate`](../interfaces/IAnimate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_keyframe?` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `_options?` | [`ITransition`](../modules.md#itransition) |
| `_type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `_isTemp?` | `boolean` |

#### Returns

[`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[animate](../interfaces/IApp.md#animate)

#### Inherited from

[Leafer](Leafer.md).[animate](Leafer.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L501)

___

### killAnimate

▸ **killAnimate**(`_type?`, `_nextStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `_nextStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IApp](../interfaces/IApp.md).[killAnimate](../interfaces/IApp.md#killanimate)

#### Inherited from

[Leafer](Leafer.md).[killAnimate](Leafer.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L505)

___

### export

▸ **export**(`_filename`, `_options?`): `Promise`<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`Promise`<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Implementation of

[IApp](../interfaces/IApp.md).[export](../interfaces/IApp.md#export)

#### Inherited from

[Leafer](Leafer.md).[export](Leafer.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:511](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L511)

___

### syncExport

▸ **syncExport**(`_filename`, `_options?`): [`IExportResult`](../interfaces/IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

[`IExportResult`](../interfaces/IExportResult.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[syncExport](../interfaces/IApp.md#syncexport)

#### Inherited from

[Leafer](Leafer.md).[syncExport](Leafer.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:515](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L515)

___

### clone

▸ **clone**(`data?`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IApp](../interfaces/IApp.md).[clone](../interfaces/IApp.md#clone)

#### Inherited from

[Leafer](Leafer.md).[clone](Leafer.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:519](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L519)

___

### one

▸ `Static` **one**(`data`, `x?`, `y?`, `width?`, `height?`): [`IUI`](../interfaces/IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Inherited from

[Leafer](Leafer.md).[one](Leafer.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L525)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[registerUI](Leafer.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:529](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L529)

___

### registerData

▸ `Static` **registerData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIData`](../interfaces/IUIData.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[registerData](Leafer.md#registerdata)

#### Defined in

[ui/packages/display/src/UI.ts:533](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L533)

___

### setEditConfig

▸ `Static` **setEditConfig**(`_config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_config` | [`IEditorConfig`](../interfaces/IEditorConfig.md) \| [`IEditorConfigFunction`](../interfaces/IEditorConfigFunction.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[setEditConfig](Leafer.md#seteditconfig)

#### Defined in

[ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L540)

___

### setEditOuter

▸ `Static` **setEditOuter**(`_toolName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toolName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[setEditOuter](Leafer.md#seteditouter)

#### Defined in

[ui/packages/display/src/UI.ts:542](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L542)

___

### setEditInner

▸ `Static` **setEditInner**(`_editorName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_editorName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Leafer](Leafer.md).[setEditInner](Leafer.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:544](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L544)
