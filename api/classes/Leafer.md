# Class: Leafer

## Hierarchy

- [`Group`](Group.md)

  ↳ **`Leafer`**

  ↳↳ [`App`](App.md)

## Implements

- [`ILeafer`](../interfaces/ILeafer.md)

## Table of contents

### Constructors

- [constructor](Leafer.md#constructor)

### Properties

- [innerId](Leafer.md#innerid)
- [syncEventer](Leafer.md#synceventer)
- [lockNormalStyle](Leafer.md#locknormalstyle)
- [\_\_layout](Leafer.md#__layout)
- [\_\_world](Leafer.md#__world)
- [\_\_local](Leafer.md#__local)
- [\_\_nowWorld](Leafer.md#__nowworld)
- [\_\_cameraWorld](Leafer.md#__cameraworld)
- [\_\_worldOpacity](Leafer.md#__worldopacity)
- [\_\_level](Leafer.md#__level)
- [\_\_tempNumber](Leafer.md#__tempnumber)
- [\_\_hasAutoLayout](Leafer.md#__hasautolayout)
- [\_\_hasMask](Leafer.md#__hasmask)
- [\_\_hasEraser](Leafer.md#__haseraser)
- [\_\_hitCanvas](Leafer.md#__hitcanvas)
- [\_\_captureMap](Leafer.md#__capturemap)
- [\_\_bubbleMap](Leafer.md#__bubblemap)
- [destroyed](Leafer.md#destroyed)
- [width](Leafer.md#width)
- [height](Leafer.md#height)
- [children](Leafer.md#children)
- [list](Leafer.md#list)
- [\_\_](Leafer.md#__)
- [pixelRatio](Leafer.md#pixelratio)
- [parentApp](Leafer.md#parentapp)
- [parent](Leafer.md#parent)
- [running](Leafer.md#running)
- [created](Leafer.md#created)
- [ready](Leafer.md#ready)
- [viewReady](Leafer.md#viewready)
- [viewCompleted](Leafer.md#viewcompleted)
- [transforming](Leafer.md#transforming)
- [view](Leafer.md#view)
- [canvas](Leafer.md#canvas)
- [renderer](Leafer.md#renderer)
- [watcher](Leafer.md#watcher)
- [layouter](Leafer.md#layouter)
- [selector](Leafer.md#selector)
- [interaction](Leafer.md#interaction)
- [canvasManager](Leafer.md#canvasmanager)
- [hitCanvasManager](Leafer.md#hitcanvasmanager)
- [editor](Leafer.md#editor)
- [userConfig](Leafer.md#userconfig)
- [config](Leafer.md#config)
- [autoLayout](Leafer.md#autolayout)
- [lazyBounds](Leafer.md#lazybounds)
- [leafs](Leafer.md#leafs)
- [\_\_eventIds](Leafer.md#__eventids)
- [\_\_startTimer](Leafer.md#__starttimer)
- [\_\_controllers](Leafer.md#__controllers)
- [\_\_initWait](Leafer.md#__initwait)
- [\_\_readyWait](Leafer.md#__readywait)
- [\_\_viewReadyWait](Leafer.md#__viewreadywait)
- [\_\_viewCompletedWait](Leafer.md#__viewcompletedwait)
- [\_\_nextRenderWait](Leafer.md#__nextrenderwait)
- [proxyData](Leafer.md#proxydata)
- [\_\_proxyData](Leafer.md#__proxydata)
- [leafer](Leafer.md#leafer)
- [zoomLayer](Leafer.md#zoomlayer)
- [id](Leafer.md#id)
- [name](Leafer.md#name)
- [className](Leafer.md#classname)
- [blendMode](Leafer.md#blendmode)
- [opacity](Leafer.md#opacity)
- [visible](Leafer.md#visible)
- [locked](Leafer.md#locked)
- [dim](Leafer.md#dim)
- [dimskip](Leafer.md#dimskip)
- [zIndex](Leafer.md#zindex)
- [mask](Leafer.md#mask)
- [eraser](Leafer.md#eraser)
- [x](Leafer.md#x)
- [y](Leafer.md#y)
- [scaleX](Leafer.md#scalex)
- [scaleY](Leafer.md#scaley)
- [rotation](Leafer.md#rotation)
- [skewX](Leafer.md#skewx)
- [skewY](Leafer.md#skewy)
- [offsetX](Leafer.md#offsetx)
- [offsetY](Leafer.md#offsety)
- [scrollX](Leafer.md#scrollx)
- [scrollY](Leafer.md#scrolly)
- [origin](Leafer.md#origin)
- [around](Leafer.md#around)
- [lazy](Leafer.md#lazy)
- [path](Leafer.md#path)
- [windingRule](Leafer.md#windingrule)
- [closed](Leafer.md#closed)
- [flow](Leafer.md#flow)
- [padding](Leafer.md#padding)
- [gap](Leafer.md#gap)
- [flowAlign](Leafer.md#flowalign)
- [flowWrap](Leafer.md#flowwrap)
- [itemBox](Leafer.md#itembox)
- [inFlow](Leafer.md#inflow)
- [autoWidth](Leafer.md#autowidth)
- [autoHeight](Leafer.md#autoheight)
- [lockRatio](Leafer.md#lockratio)
- [autoBox](Leafer.md#autobox)
- [widthRange](Leafer.md#widthrange)
- [heightRange](Leafer.md#heightrange)
- [draggable](Leafer.md#draggable)
- [dragBounds](Leafer.md#dragbounds)
- [editable](Leafer.md#editable)
- [hittable](Leafer.md#hittable)
- [hitFill](Leafer.md#hitfill)
- [hitStroke](Leafer.md#hitstroke)
- [hitBox](Leafer.md#hitbox)
- [hitChildren](Leafer.md#hitchildren)
- [hitSelf](Leafer.md#hitself)
- [hitRadius](Leafer.md#hitradius)
- [cursor](Leafer.md#cursor)
- [fill](Leafer.md#fill)
- [stroke](Leafer.md#stroke)
- [strokeAlign](Leafer.md#strokealign)
- [strokeWidth](Leafer.md#strokewidth)
- [strokeWidthFixed](Leafer.md#strokewidthfixed)
- [strokeCap](Leafer.md#strokecap)
- [strokeJoin](Leafer.md#strokejoin)
- [dashPattern](Leafer.md#dashpattern)
- [dashOffset](Leafer.md#dashoffset)
- [miterLimit](Leafer.md#miterlimit)
- [startArrow](Leafer.md#startarrow)
- [endArrow](Leafer.md#endarrow)
- [cornerRadius](Leafer.md#cornerradius)
- [cornerSmoothing](Leafer.md#cornersmoothing)
- [shadow](Leafer.md#shadow)
- [innerShadow](Leafer.md#innershadow)
- [blur](Leafer.md#blur)
- [backgroundBlur](Leafer.md#backgroundblur)
- [grayscale](Leafer.md#grayscale)
- [filter](Leafer.md#filter)
- [animation](Leafer.md#animation)
- [animationOut](Leafer.md#animationout)
- [transition](Leafer.md#transition)
- [transitionOut](Leafer.md#transitionout)
- [motionPath](Leafer.md#motionpath)
- [motionPrecision](Leafer.md#motionprecision)
- [motion](Leafer.md#motion)
- [motionRotation](Leafer.md#motionrotation)
- [states](Leafer.md#states)
- [state](Leafer.md#state)
- [selected](Leafer.md#selected)
- [disabled](Leafer.md#disabled)
- [normalStyle](Leafer.md#normalstyle)
- [hoverStyle](Leafer.md#hoverstyle)
- [pressStyle](Leafer.md#pressstyle)
- [focusStyle](Leafer.md#focusstyle)
- [selectedStyle](Leafer.md#selectedstyle)
- [disabledStyle](Leafer.md#disabledstyle)
- [placeholderStyle](Leafer.md#placeholderstyle)
- [button](Leafer.md#button)
- [data](Leafer.md#data)
- [\_\_box](Leafer.md#__box)
- [\_\_animate](Leafer.md#__animate)
- [editConfig](Leafer.md#editconfig)
- [editOuter](Leafer.md#editouter)
- [editInner](Leafer.md#editinner)

### Accessors

- [tag](Leafer.md#tag)
- [innerName](Leafer.md#innername)
- [\_\_DataProcessor](Leafer.md#__dataprocessor)
- [\_\_LayoutProcessor](Leafer.md#__layoutprocessor)
- [leaferIsCreated](Leafer.md#leaferiscreated)
- [leaferIsReady](Leafer.md#leaferisready)
- [isBranchLeaf](Leafer.md#isbranchleaf)
- [\_\_localMatrix](Leafer.md#__localmatrix)
- [\_\_localBoxBounds](Leafer.md#__localboxbounds)
- [worldTransform](Leafer.md#worldtransform)
- [localTransform](Leafer.md#localtransform)
- [boxBounds](Leafer.md#boxbounds)
- [renderBounds](Leafer.md#renderbounds)
- [worldBoxBounds](Leafer.md#worldboxbounds)
- [worldStrokeBounds](Leafer.md#worldstrokebounds)
- [worldRenderBounds](Leafer.md#worldrenderbounds)
- [worldOpacity](Leafer.md#worldopacity)
- [\_\_worldFlipped](Leafer.md#__worldflipped)
- [\_\_onlyHitMask](Leafer.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Leafer.md#__ignorehitworld)
- [\_\_inLazyBounds](Leafer.md#__inlazybounds)
- [pathInputed](Leafer.md#pathinputed)
- [event](Leafer.md#event)
- [isBranch](Leafer.md#isbranch)
- [\_\_tag](Leafer.md#__tag)
- [isApp](Leafer.md#isapp)
- [app](Leafer.md#app)
- [isLeafer](Leafer.md#isleafer)
- [imageReady](Leafer.md#imageready)
- [layoutLocked](Leafer.md#layoutlocked)
- [FPS](Leafer.md#fps)
- [cursorPoint](Leafer.md#cursorpoint)
- [clientBounds](Leafer.md#clientbounds)
- [isFrame](Leafer.md#isframe)
- [scale](Leafer.md#scale)
- [pen](Leafer.md#pen)

### Methods

- [resetCustom](Leafer.md#resetcustom)
- [waitParent](Leafer.md#waitparent)
- [waitLeafer](Leafer.md#waitleafer)
- [removeNextRender](Leafer.md#removenextrender)
- [\_\_bindLeafer](Leafer.md#__bindleafer)
- [setAttr](Leafer.md#setattr)
- [getAttr](Leafer.md#getattr)
- [getComputedAttr](Leafer.md#getcomputedattr)
- [toString](Leafer.md#tostring)
- [toSVG](Leafer.md#tosvg)
- [\_\_SVG](Leafer.md#__svg)
- [toHTML](Leafer.md#tohtml)
- [setProxyAttr](Leafer.md#setproxyattr)
- [getProxyAttr](Leafer.md#getproxyattr)
- [focus](Leafer.md#focus)
- [updateState](Leafer.md#updatestate)
- [updateLayout](Leafer.md#updatelayout)
- [forceUpdate](Leafer.md#forceupdate)
- [\_\_extraUpdate](Leafer.md#__extraupdate)
- [\_\_updateWorldMatrix](Leafer.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Leafer.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Leafer.md#__updateworldbounds)
- [\_\_updateLocalBounds](Leafer.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Leafer.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Leafer.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Leafer.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Leafer.md#__updateboxbounds)
- [\_\_updateContentBounds](Leafer.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Leafer.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Leafer.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Leafer.md#__updateautolayout)
- [\_\_updateFlowLayout](Leafer.md#__updateflowlayout)
- [\_\_updateNaturalSize](Leafer.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Leafer.md#__updatestrokespread)
- [\_\_updateRenderSpread](Leafer.md#__updaterenderspread)
- [\_\_updateEraser](Leafer.md#__updateeraser)
- [\_\_renderEraser](Leafer.md#__rendereraser)
- [\_\_updateMask](Leafer.md#__updatemask)
- [\_\_renderMask](Leafer.md#__rendermask)
- [\_\_getNowWorld](Leafer.md#__getnowworld)
- [getTransform](Leafer.md#gettransform)
- [getBounds](Leafer.md#getbounds)
- [getLayoutBounds](Leafer.md#getlayoutbounds)
- [getLayoutPoints](Leafer.md#getlayoutpoints)
- [getWorldBounds](Leafer.md#getworldbounds)
- [worldToLocal](Leafer.md#worldtolocal)
- [localToWorld](Leafer.md#localtoworld)
- [worldToInner](Leafer.md#worldtoinner)
- [innerToWorld](Leafer.md#innertoworld)
- [getBoxPoint](Leafer.md#getboxpoint)
- [getBoxPointByInner](Leafer.md#getboxpointbyinner)
- [getInnerPoint](Leafer.md#getinnerpoint)
- [getInnerPointByBox](Leafer.md#getinnerpointbybox)
- [getInnerPointByLocal](Leafer.md#getinnerpointbylocal)
- [getLocalPoint](Leafer.md#getlocalpoint)
- [getLocalPointByInner](Leafer.md#getlocalpointbyinner)
- [getPagePoint](Leafer.md#getpagepoint)
- [getWorldPoint](Leafer.md#getworldpoint)
- [getWorldPointByBox](Leafer.md#getworldpointbybox)
- [getWorldPointByLocal](Leafer.md#getworldpointbylocal)
- [getWorldPointByPage](Leafer.md#getworldpointbypage)
- [setTransform](Leafer.md#settransform)
- [transform](Leafer.md#transform)
- [move](Leafer.md#move)
- [moveInner](Leafer.md#moveinner)
- [scaleOf](Leafer.md#scaleof)
- [rotateOf](Leafer.md#rotateof)
- [skewOf](Leafer.md#skewof)
- [transformWorld](Leafer.md#transformworld)
- [moveWorld](Leafer.md#moveworld)
- [scaleOfWorld](Leafer.md#scaleofworld)
- [rotateOfWorld](Leafer.md#rotateofworld)
- [skewOfWorld](Leafer.md#skewofworld)
- [flip](Leafer.md#flip)
- [scaleResize](Leafer.md#scaleresize)
- [\_\_scaleResize](Leafer.md#__scaleresize)
- [resizeWidth](Leafer.md#resizewidth)
- [resizeHeight](Leafer.md#resizeheight)
- [\_\_hitWorld](Leafer.md#__hitworld)
- [\_\_hit](Leafer.md#__hit)
- [\_\_hitFill](Leafer.md#__hitfill)
- [\_\_hitStroke](Leafer.md#__hitstroke)
- [\_\_hitPixel](Leafer.md#__hitpixel)
- [\_\_drawHitPath](Leafer.md#__drawhitpath)
- [\_\_updateHitCanvas](Leafer.md#__updatehitcanvas)
- [\_\_render](Leafer.md#__render)
- [\_\_drawFast](Leafer.md#__drawfast)
- [\_\_draw](Leafer.md#__draw)
- [\_\_clip](Leafer.md#__clip)
- [\_\_renderShape](Leafer.md#__rendershape)
- [\_\_updateWorldOpacity](Leafer.md#__updateworldopacity)
- [\_\_updateChange](Leafer.md#__updatechange)
- [\_\_updatePath](Leafer.md#__updatepath)
- [getMotionPathData](Leafer.md#getmotionpathdata)
- [getMotionPoint](Leafer.md#getmotionpoint)
- [getMotionTotal](Leafer.md#getmotiontotal)
- [\_\_updateMotionPath](Leafer.md#__updatemotionpath)
- [\_\_runAnimation](Leafer.md#__runanimation)
- [\_\_updateSortChildren](Leafer.md#__updatesortchildren)
- [dropTo](Leafer.md#dropto)
- [on](Leafer.md#on)
- [off](Leafer.md#off)
- [on\_](Leafer.md#on_)
- [off\_](Leafer.md#off_)
- [once](Leafer.md#once)
- [emit](Leafer.md#emit)
- [emitEvent](Leafer.md#emitevent)
- [hasEvent](Leafer.md#hasevent)
- [changeAttr](Leafer.md#changeattr)
- [addAttr](Leafer.md#addattr)
- [\_\_emitLifeEvent](Leafer.md#__emitlifeevent)
- [reset](Leafer.md#reset)
- [\_\_setBranch](Leafer.md#__setbranch)
- [toJSON](Leafer.md#tojson)
- [pick](Leafer.md#pick)
- [addAt](Leafer.md#addat)
- [addAfter](Leafer.md#addafter)
- [addBefore](Leafer.md#addbefore)
- [add](Leafer.md#add)
- [addMany](Leafer.md#addmany)
- [remove](Leafer.md#remove)
- [removeAll](Leafer.md#removeall)
- [clear](Leafer.md#clear)
- [init](Leafer.md#init)
- [onInit](Leafer.md#oninit)
- [initType](Leafer.md#inittype)
- [set](Leafer.md#set)
- [start](Leafer.md#start)
- [stop](Leafer.md#stop)
- [unlockLayout](Leafer.md#unlocklayout)
- [lockLayout](Leafer.md#locklayout)
- [resize](Leafer.md#resize)
- [forceRender](Leafer.md#forcerender)
- [requestRender](Leafer.md#requestrender)
- [updateCursor](Leafer.md#updatecursor)
- [updateLazyBounds](Leafer.md#updatelazybounds)
- [\_\_doResize](Leafer.md#__doresize)
- [\_\_onResize](Leafer.md#__onresize)
- [\_\_setApp](Leafer.md#__setapp)
- [\_\_bindApp](Leafer.md#__bindapp)
- [\_\_setLeafer](Leafer.md#__setleafer)
- [\_\_checkAutoLayout](Leafer.md#__checkautolayout)
- [\_\_setAttr](Leafer.md#__setattr)
- [\_\_getAttr](Leafer.md#__getattr)
- [\_\_changeCanvasSize](Leafer.md#__changecanvassize)
- [\_\_changeFill](Leafer.md#__changefill)
- [\_\_onCreated](Leafer.md#__oncreated)
- [\_\_onReady](Leafer.md#__onready)
- [\_\_onViewReady](Leafer.md#__onviewready)
- [\_\_onLayoutEnd](Leafer.md#__onlayoutend)
- [\_\_onNextRender](Leafer.md#__onnextrender)
- [\_\_checkViewCompleted](Leafer.md#__checkviewcompleted)
- [\_\_onWatchData](Leafer.md#__onwatchdata)
- [waitInit](Leafer.md#waitinit)
- [waitReady](Leafer.md#waitready)
- [waitViewReady](Leafer.md#waitviewready)
- [waitViewCompleted](Leafer.md#waitviewcompleted)
- [nextRender](Leafer.md#nextrender)
- [zoom](Leafer.md#zoom)
- [getValidMove](Leafer.md#getvalidmove)
- [getValidScale](Leafer.md#getvalidscale)
- [getWorldPointByClient](Leafer.md#getworldpointbyclient)
- [getPagePointByClient](Leafer.md#getpagepointbyclient)
- [getClientPointByWorld](Leafer.md#getclientpointbyworld)
- [updateClientBounds](Leafer.md#updateclientbounds)
- [receiveEvent](Leafer.md#receiveevent)
- [emitLeafer](Leafer.md#emitleafer)
- [\_\_listenEvents](Leafer.md#__listenevents)
- [\_\_removeListenEvents](Leafer.md#__removelistenevents)
- [destroy](Leafer.md#destroy)
- [get](Leafer.md#get)
- [createProxyData](Leafer.md#createproxydata)
- [find](Leafer.md#find)
- [findTag](Leafer.md#findtag)
- [findOne](Leafer.md#findone)
- [findId](Leafer.md#findid)
- [getPath](Leafer.md#getpath)
- [getPathString](Leafer.md#getpathstring)
- [load](Leafer.md#load)
- [\_\_onUpdateSize](Leafer.md#__onupdatesize)
- [\_\_updateRenderPath](Leafer.md#__updaterenderpath)
- [\_\_drawRenderPath](Leafer.md#__drawrenderpath)
- [\_\_drawPath](Leafer.md#__drawpath)
- [\_\_drawPathByData](Leafer.md#__drawpathbydata)
- [\_\_drawPathByBox](Leafer.md#__drawpathbybox)
- [animate](Leafer.md#animate)
- [killAnimate](Leafer.md#killanimate)
- [export](Leafer.md#export)
- [syncExport](Leafer.md#syncexport)
- [clone](Leafer.md#clone)
- [one](Leafer.md#one)
- [registerUI](Leafer.md#registerui)
- [registerData](Leafer.md#registerdata)
- [setEditConfig](Leafer.md#seteditconfig)
- [setEditOuter](Leafer.md#seteditouter)
- [setEditInner](Leafer.md#seteditinner)

## Constructors

### constructor

• **new Leafer**(`userConfig?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |
| `data?` | [`ILeaferInputData`](../interfaces/ILeaferInputData.md) |

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[ui/packages/display/src/Leafer.ts:89](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L89)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[innerId](../interfaces/ILeafer.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[syncEventer](../interfaces/ILeafer.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockNormalStyle](../interfaces/ILeafer.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__layout](../interfaces/ILeafer.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__world](../interfaces/ILeafer.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__local](../interfaces/ILeafer.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__nowWorld](../interfaces/ILeafer.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__cameraWorld](../interfaces/ILeafer.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__worldOpacity](../interfaces/ILeafer.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__level](../interfaces/ILeafer.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__tempNumber](../interfaces/ILeafer.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasAutoLayout](../interfaces/ILeafer.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasMask](../interfaces/ILeafer.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasEraser](../interfaces/ILeafer.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hitCanvas](../interfaces/ILeafer.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__captureMap](../interfaces/ILeafer.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__bubbleMap](../interfaces/ILeafer.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L97)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[destroyed](../interfaces/ILeafer.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L102)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[width](../interfaces/ILeafer.md#width)

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[height](../interfaces/ILeafer.md#height)

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[children](../interfaces/ILeafer.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L28)

___

### list

▪ `Static` **list**: [`LeafList`](LeafList.md)

#### Defined in

[ui/packages/display/src/Leafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L15)

___

### \_\_

• **\_\_**: [`ILeaferData`](../interfaces/ILeaferData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__](../interfaces/ILeafer.md#__)

#### Overrides

[Group](Group.md).[__](Group.md#__)

#### Defined in

[ui/packages/display/src/Leafer.ts:21](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L21)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pixelRatio](../interfaces/ILeafer.md#pixelratio)

#### Overrides

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[ui/packages/display/src/Leafer.ts:24](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L24)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[parentApp](../interfaces/ILeafer.md#parentapp)

#### Defined in

[ui/packages/display/src/Leafer.ts:31](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L31)

___

### parent

• `Optional` **parent**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[parent](../interfaces/ILeafer.md#parent)

#### Overrides

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[ui/packages/display/src/Leafer.ts:32](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L32)

___

### running

• **running**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[running](../interfaces/ILeafer.md#running)

#### Defined in

[ui/packages/display/src/Leafer.ts:34](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L34)

___

### created

• **created**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[created](../interfaces/ILeafer.md#created)

#### Defined in

[ui/packages/display/src/Leafer.ts:35](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L35)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[ready](../interfaces/ILeafer.md#ready)

#### Defined in

[ui/packages/display/src/Leafer.ts:36](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L36)

___

### viewReady

• **viewReady**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[viewReady](../interfaces/ILeafer.md#viewready)

#### Defined in

[ui/packages/display/src/Leafer.ts:37](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L37)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[viewCompleted](../interfaces/ILeafer.md#viewcompleted)

#### Defined in

[ui/packages/display/src/Leafer.ts:38](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L38)

___

### transforming

• **transforming**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transforming](../interfaces/ILeafer.md#transforming)

#### Defined in

[ui/packages/display/src/Leafer.ts:42](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L42)

___

### view

• **view**: `unknown`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[view](../interfaces/ILeafer.md#view)

#### Defined in

[ui/packages/display/src/Leafer.ts:44](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L44)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[canvas](../interfaces/ILeafer.md#canvas)

#### Defined in

[ui/packages/display/src/Leafer.ts:47](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L47)

___

### renderer

• **renderer**: [`IRenderer`](../interfaces/IRenderer.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[renderer](../interfaces/ILeafer.md#renderer)

#### Defined in

[ui/packages/display/src/Leafer.ts:48](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L48)

___

### watcher

• **watcher**: [`IWatcher`](../interfaces/IWatcher.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[watcher](../interfaces/ILeafer.md#watcher)

#### Defined in

[ui/packages/display/src/Leafer.ts:50](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L50)

___

### layouter

• **layouter**: [`ILayouter`](../interfaces/ILayouter.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[layouter](../interfaces/ILeafer.md#layouter)

#### Defined in

[ui/packages/display/src/Leafer.ts:51](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L51)

___

### selector

• `Optional` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selector](../interfaces/ILeafer.md#selector)

#### Defined in

[ui/packages/display/src/Leafer.ts:53](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L53)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](../interfaces/IInteraction.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[interaction](../interfaces/ILeafer.md#interaction)

#### Defined in

[ui/packages/display/src/Leafer.ts:54](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L54)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[canvasManager](../interfaces/ILeafer.md#canvasmanager)

#### Defined in

[ui/packages/display/src/Leafer.ts:56](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L56)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](../interfaces/IHitCanvasManager.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitCanvasManager](../interfaces/ILeafer.md#hitcanvasmanager)

#### Defined in

[ui/packages/display/src/Leafer.ts:57](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L57)

___

### editor

• **editor**: [`IEditorBase`](../interfaces/IEditorBase.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editor](../interfaces/ILeafer.md#editor)

#### Defined in

[ui/packages/display/src/Leafer.ts:60](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L60)

___

### userConfig

• **userConfig**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[userConfig](../interfaces/ILeafer.md#userconfig)

#### Defined in

[ui/packages/display/src/Leafer.ts:62](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L62)

___

### config

• **config**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[config](../interfaces/ILeafer.md#config)

#### Defined in

[ui/packages/display/src/Leafer.ts:63](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L63)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoLayout](../interfaces/ILeafer.md#autolayout)

#### Defined in

[ui/packages/display/src/Leafer.ts:71](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L71)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lazyBounds](../interfaces/ILeafer.md#lazybounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:72](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L72)

___

### leafs

• **leafs**: `number` = `0`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leafs](../interfaces/ILeafer.md#leafs)

#### Defined in

[ui/packages/display/src/Leafer.ts:77](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L77)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__eventIds](../interfaces/ILeafer.md#__eventids)

#### Defined in

[ui/packages/display/src/Leafer.ts:79](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L79)

___

### \_\_startTimer

• `Protected` **\_\_startTimer**: `any`

#### Defined in

[ui/packages/display/src/Leafer.ts:80](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L80)

___

### \_\_controllers

• `Protected` **\_\_controllers**: [`IControl`](../interfaces/IControl.md)[] = `[]`

#### Defined in

[ui/packages/display/src/Leafer.ts:81](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L81)

___

### \_\_initWait

• `Protected` **\_\_initWait**: [`IFunction`](../interfaces/IFunction.md)[]

#### Defined in

[ui/packages/display/src/Leafer.ts:83](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L83)

___

### \_\_readyWait

• `Protected` **\_\_readyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[ui/packages/display/src/Leafer.ts:84](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L84)

___

### \_\_viewReadyWait

• `Protected` **\_\_viewReadyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[ui/packages/display/src/Leafer.ts:85](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L85)

___

### \_\_viewCompletedWait

• `Protected` **\_\_viewCompletedWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[ui/packages/display/src/Leafer.ts:86](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L86)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__nextRenderWait](../interfaces/ILeafer.md#__nextrenderwait)

#### Defined in

[ui/packages/display/src/Leafer.ts:87](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L87)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[proxyData](../interfaces/ILeafer.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__proxyData](../interfaces/ILeafer.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leafer](../interfaces/ILeafer.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L26)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[zoomLayer](../interfaces/ILeafer.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[id](../interfaces/ILeafer.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[name](../interfaces/ILeafer.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[className](../interfaces/ILeafer.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[blendMode](../interfaces/ILeafer.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[opacity](../interfaces/ILeafer.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[visible](../interfaces/ILeafer.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[locked](../interfaces/ILeafer.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dim](../interfaces/ILeafer.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dimskip](../interfaces/ILeafer.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[zIndex](../interfaces/ILeafer.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[mask](../interfaces/ILeafer.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[eraser](../interfaces/ILeafer.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[x](../interfaces/ILeafer.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[y](../interfaces/ILeafer.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scaleX](../interfaces/ILeafer.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scaleY](../interfaces/ILeafer.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[rotation](../interfaces/ILeafer.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[skewX](../interfaces/ILeafer.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[skewY](../interfaces/ILeafer.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[offsetX](../interfaces/ILeafer.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[offsetY](../interfaces/ILeafer.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scrollX](../interfaces/ILeafer.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scrollY](../interfaces/ILeafer.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[origin](../interfaces/ILeafer.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[around](../interfaces/ILeafer.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lazy](../interfaces/ILeafer.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L140)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[path](../interfaces/ILeafer.md#path)

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[windingRule](../interfaces/ILeafer.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[closed](../interfaces/ILeafer.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flow](../interfaces/ILeafer.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[padding](../interfaces/ILeafer.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[gap](../interfaces/ILeafer.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flowAlign](../interfaces/ILeafer.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flowWrap](../interfaces/ILeafer.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[itemBox](../interfaces/ILeafer.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[inFlow](../interfaces/ILeafer.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoWidth](../interfaces/ILeafer.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoHeight](../interfaces/ILeafer.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockRatio](../interfaces/ILeafer.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoBox](../interfaces/ILeafer.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[widthRange](../interfaces/ILeafer.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[heightRange](../interfaces/ILeafer.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[draggable](../interfaces/ILeafer.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dragBounds](../interfaces/ILeafer.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editable](../interfaces/ILeafer.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hittable](../interfaces/ILeafer.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitFill](../interfaces/ILeafer.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitStroke](../interfaces/ILeafer.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitBox](../interfaces/ILeafer.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitChildren](../interfaces/ILeafer.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitSelf](../interfaces/ILeafer.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitRadius](../interfaces/ILeafer.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cursor](../interfaces/ILeafer.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[fill](../interfaces/ILeafer.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[stroke](../interfaces/ILeafer.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeAlign](../interfaces/ILeafer.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeWidth](../interfaces/ILeafer.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeWidthFixed](../interfaces/ILeafer.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeCap](../interfaces/ILeafer.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeJoin](../interfaces/ILeafer.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dashPattern](../interfaces/ILeafer.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dashOffset](../interfaces/ILeafer.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[miterLimit](../interfaces/ILeafer.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[startArrow](../interfaces/ILeafer.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[endArrow](../interfaces/ILeafer.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cornerRadius](../interfaces/ILeafer.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cornerSmoothing](../interfaces/ILeafer.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[shadow](../interfaces/ILeafer.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[innerShadow](../interfaces/ILeafer.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[blur](../interfaces/ILeafer.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[backgroundBlur](../interfaces/ILeafer.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[grayscale](../interfaces/ILeafer.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[filter](../interfaces/ILeafer.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[animation](../interfaces/ILeafer.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[animationOut](../interfaces/ILeafer.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transition](../interfaces/ILeafer.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transitionOut](../interfaces/ILeafer.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionPath](../interfaces/ILeafer.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionPrecision](../interfaces/ILeafer.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motion](../interfaces/ILeafer.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionRotation](../interfaces/ILeafer.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[states](../interfaces/ILeafer.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[state](../interfaces/ILeafer.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selected](../interfaces/ILeafer.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[disabled](../interfaces/ILeafer.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[normalStyle](../interfaces/ILeafer.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hoverStyle](../interfaces/ILeafer.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pressStyle](../interfaces/ILeafer.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[focusStyle](../interfaces/ILeafer.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selectedStyle](../interfaces/ILeafer.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[disabledStyle](../interfaces/ILeafer.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[placeholderStyle](../interfaces/ILeafer.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L349)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[button](../interfaces/ILeafer.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L352)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[data](../interfaces/ILeafer.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L357)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__box](../interfaces/ILeafer.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L363)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__animate](../interfaces/ILeafer.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L364)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editConfig](../interfaces/ILeafer.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L376)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editOuter](../interfaces/ILeafer.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:378](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L378)

___

### editInner

• **editInner**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editInner](../interfaces/ILeafer.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L380)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[tag](../interfaces/ILeafer.md#tag)

#### Inherited from

Group.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[tag](../interfaces/ILeafer.md#tag)

#### Inherited from

Group.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[innerName](../interfaces/ILeafer.md#innername)

#### Inherited from

Group.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__DataProcessor](../interfaces/ILeafer.md#__dataprocessor)

#### Inherited from

Group.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__LayoutProcessor](../interfaces/ILeafer.md#__layoutprocessor)

#### Inherited from

Group.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leaferIsCreated](../interfaces/ILeafer.md#leaferiscreated)

#### Inherited from

Group.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leaferIsReady](../interfaces/ILeafer.md#leaferisready)

#### Inherited from

Group.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L40)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isBranchLeaf](../interfaces/ILeafer.md#isbranchleaf)

#### Inherited from

Group.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__localMatrix](../interfaces/ILeafer.md#__localmatrix)

#### Inherited from

Group.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__localBoxBounds](../interfaces/ILeafer.md#__localboxbounds)

#### Inherited from

Group.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[worldTransform](../interfaces/ILeafer.md#worldtransform)

#### Inherited from

Group.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[localTransform](../interfaces/ILeafer.md#localtransform)

#### Inherited from

Group.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[boxBounds](../interfaces/ILeafer.md#boxbounds)

#### Inherited from

Group.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[renderBounds](../interfaces/ILeafer.md#renderbounds)

#### Inherited from

Group.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[worldBoxBounds](../interfaces/ILeafer.md#worldboxbounds)

#### Inherited from

Group.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[worldStrokeBounds](../interfaces/ILeafer.md#worldstrokebounds)

#### Inherited from

Group.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[worldRenderBounds](../interfaces/ILeafer.md#worldrenderbounds)

#### Inherited from

Group.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[worldOpacity](../interfaces/ILeafer.md#worldopacity)

#### Inherited from

Group.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__worldFlipped](../interfaces/ILeafer.md#__worldflipped)

#### Inherited from

Group.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__onlyHitMask](../interfaces/ILeafer.md#__onlyhitmask)

#### Inherited from

Group.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__ignoreHitWorld](../interfaces/ILeafer.md#__ignorehitworld)

#### Inherited from

Group.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__inLazyBounds](../interfaces/ILeafer.md#__inlazybounds)

#### Inherited from

Group.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pathInputed](../interfaces/ILeafer.md#pathinputed)

#### Inherited from

Group.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L91)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventMap`](../interfaces/IEventMap.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[event](../interfaces/ILeafer.md#event)

#### Inherited from

Group.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L94)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isBranch](../interfaces/ILeafer.md#isbranch)

#### Inherited from

Group.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L16)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__tag](../interfaces/ILeafer.md#__tag)

#### Overrides

Group.\_\_tag

#### Defined in

[ui/packages/display/src/Leafer.ts:18](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L18)

___

### isApp

• `get` **isApp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isApp](../interfaces/ILeafer.md#isapp)

#### Defined in

[ui/packages/display/src/Leafer.ts:26](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L26)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[app](../interfaces/ILeafer.md#app)

#### Overrides

Group.app

#### Defined in

[ui/packages/display/src/Leafer.ts:27](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L27)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isLeafer](../interfaces/ILeafer.md#isleafer)

#### Overrides

Group.isLeafer

#### Defined in

[ui/packages/display/src/Leafer.ts:29](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L29)

___

### imageReady

• `get` **imageReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[imageReady](../interfaces/ILeafer.md#imageready)

#### Defined in

[ui/packages/display/src/Leafer.ts:39](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L39)

___

### layoutLocked

• `get` **layoutLocked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[layoutLocked](../interfaces/ILeafer.md#layoutlocked)

#### Defined in

[ui/packages/display/src/Leafer.ts:40](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L40)

___

### FPS

• `get` **FPS**(): `number`

#### Returns

`number`

#### Defined in

[ui/packages/display/src/Leafer.ts:74](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L74)

___

### cursorPoint

• `get` **cursorPoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cursorPoint](../interfaces/ILeafer.md#cursorpoint)

#### Defined in

[ui/packages/display/src/Leafer.ts:75](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L75)

___

### clientBounds

• `get` **clientBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[clientBounds](../interfaces/ILeafer.md#clientbounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:76](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L76)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isFrame](../interfaces/ILeafer.md#isframe)

#### Inherited from

Group.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scale](../interfaces/ILeafer.md#scale)

#### Inherited from

Group.scale

#### Defined in

[ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L361)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scale](../interfaces/ILeafer.md#scale)

#### Inherited from

Group.scale

#### Defined in

[ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L360)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pen](../interfaces/ILeafer.md#pen)

#### Inherited from

Group.pen

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L366)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[resetCustom](../interfaces/ILeafer.md#resetcustom)

#### Inherited from

[Group](Group.md).[resetCustom](Group.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:132](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L132)

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

[ILeafer](../interfaces/ILeafer.md).[waitParent](../interfaces/ILeafer.md#waitparent)

#### Inherited from

[Group](Group.md).[waitParent](Group.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:138](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L138)

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

[ILeafer](../interfaces/ILeafer.md).[waitLeafer](../interfaces/ILeafer.md#waitleafer)

#### Inherited from

[Group](Group.md).[waitLeafer](Group.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L143)

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

[ILeafer](../interfaces/ILeafer.md).[removeNextRender](../interfaces/ILeafer.md#removenextrender)

#### Inherited from

[Group](Group.md).[removeNextRender](Group.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L152)

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

[ILeafer](../interfaces/ILeafer.md).[__bindLeafer](../interfaces/ILeafer.md#__bindleafer)

#### Inherited from

[Group](Group.md).[__bindLeafer](Group.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:156](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L156)

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

[ILeafer](../interfaces/ILeafer.md).[setAttr](../interfaces/ILeafer.md#setattr)

#### Inherited from

[Group](Group.md).[setAttr](Group.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:185](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L185)

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

[ILeafer](../interfaces/ILeafer.md).[getAttr](../interfaces/ILeafer.md#getattr)

#### Inherited from

[Group](Group.md).[getAttr](Group.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:186](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L186)

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

[ILeafer](../interfaces/ILeafer.md).[getComputedAttr](../interfaces/ILeafer.md#getcomputedattr)

#### Inherited from

[Group](Group.md).[getComputedAttr](Group.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:188](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L188)

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

[ILeafer](../interfaces/ILeafer.md).[toString](../interfaces/ILeafer.md#tostring)

#### Inherited from

[Group](Group.md).[toString](Group.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L195)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[toSVG](../interfaces/ILeafer.md#tosvg)

#### Inherited from

[Group](Group.md).[toSVG](Group.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L199)

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

[ILeafer](../interfaces/ILeafer.md).[__SVG](../interfaces/ILeafer.md#__svg)

#### Inherited from

[Group](Group.md).[__SVG](Group.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L201)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[toHTML](../interfaces/ILeafer.md#tohtml)

#### Inherited from

[Group](Group.md).[toHTML](Group.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:203](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L203)

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

[ILeafer](../interfaces/ILeafer.md).[setProxyAttr](../interfaces/ILeafer.md#setproxyattr)

#### Inherited from

[Group](Group.md).[setProxyAttr](Group.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:211](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L211)

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

[ILeafer](../interfaces/ILeafer.md).[getProxyAttr](../interfaces/ILeafer.md#getproxyattr)

#### Inherited from

[Group](Group.md).[getProxyAttr](Group.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:213](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L213)

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

[ILeafer](../interfaces/ILeafer.md).[focus](../interfaces/ILeafer.md#focus)

#### Inherited from

[Group](Group.md).[focus](Group.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:233](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L233)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[updateState](../interfaces/ILeafer.md#updatestate)

#### Inherited from

[Group](Group.md).[updateState](Group.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:235](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L235)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[updateLayout](../interfaces/ILeafer.md#updatelayout)

#### Inherited from

[Group](Group.md).[updateLayout](Group.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L240)

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

[ILeafer](../interfaces/ILeafer.md).[forceUpdate](../interfaces/ILeafer.md#forceupdate)

#### Inherited from

[Group](Group.md).[forceUpdate](Group.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L244)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__extraUpdate](../interfaces/ILeafer.md#__extraupdate)

#### Inherited from

[Group](Group.md).[__extraUpdate](Group.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:256](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L256)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateWorldMatrix](../interfaces/ILeafer.md#__updateworldmatrix)

#### Inherited from

[Group](Group.md).[__updateWorldMatrix](Group.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:262](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L262)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateLocalMatrix](../interfaces/ILeafer.md#__updatelocalmatrix)

#### Inherited from

[Group](Group.md).[__updateLocalMatrix](Group.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:264](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L264)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateWorldBounds](../interfaces/ILeafer.md#__updateworldbounds)

#### Inherited from

[Group](Group.md).[__updateWorldBounds](Group.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:270](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L270)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateLocalBounds](../interfaces/ILeafer.md#__updatelocalbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBounds](Group.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:272](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L272)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateLocalBoxBounds](../interfaces/ILeafer.md#__updatelocalboxbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBoxBounds](Group.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateLocalStrokeBounds](../interfaces/ILeafer.md#__updatelocalstrokebounds)

#### Inherited from

[Group](Group.md).[__updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L277)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateLocalRenderBounds](../interfaces/ILeafer.md#__updatelocalrenderbounds)

#### Inherited from

[Group](Group.md).[__updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:279](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L279)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateBoxBounds](../interfaces/ILeafer.md#__updateboxbounds)

#### Inherited from

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L283)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateContentBounds](../interfaces/ILeafer.md#__updatecontentbounds)

#### Inherited from

[Group](Group.md).[__updateContentBounds](Group.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L285)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateStrokeBounds](../interfaces/ILeafer.md#__updatestrokebounds)

#### Inherited from

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:287](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L287)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateRenderBounds](../interfaces/ILeafer.md#__updaterenderbounds)

#### Inherited from

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:289](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L289)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateAutoLayout](../interfaces/ILeafer.md#__updateautolayout)

#### Inherited from

[Group](Group.md).[__updateAutoLayout](Group.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L292)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateFlowLayout](../interfaces/ILeafer.md#__updateflowlayout)

#### Inherited from

[Group](Group.md).[__updateFlowLayout](Group.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L294)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateNaturalSize](../interfaces/ILeafer.md#__updatenaturalsize)

#### Inherited from

[Group](Group.md).[__updateNaturalSize](Group.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L296)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateStrokeSpread](../interfaces/ILeafer.md#__updatestrokespread)

#### Inherited from

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L299)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateRenderSpread](../interfaces/ILeafer.md#__updaterenderspread)

#### Inherited from

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L301)

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

[ILeafer](../interfaces/ILeafer.md).[__updateEraser](../interfaces/ILeafer.md#__updateeraser)

#### Inherited from

[Group](Group.md).[__updateEraser](Group.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:308](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L308)

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

[ILeafer](../interfaces/ILeafer.md).[__renderEraser](../interfaces/ILeafer.md#__rendereraser)

#### Inherited from

[Group](Group.md).[__renderEraser](Group.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L312)

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

[ILeafer](../interfaces/ILeafer.md).[__updateMask](../interfaces/ILeafer.md#__updatemask)

#### Inherited from

[Group](Group.md).[__updateMask](Group.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:320](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L320)

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

[ILeafer](../interfaces/ILeafer.md).[__renderMask](../interfaces/ILeafer.md#__rendermask)

#### Inherited from

[Group](Group.md).[__renderMask](Group.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:326](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L326)

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

[ILeafer](../interfaces/ILeafer.md).[__getNowWorld](../interfaces/ILeafer.md#__getnowworld)

#### Inherited from

[Group](Group.md).[__getNowWorld](Group.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:334](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L334)

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

[ILeafer](../interfaces/ILeafer.md).[getTransform](../interfaces/ILeafer.md#gettransform)

#### Inherited from

[Group](Group.md).[getTransform](Group.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L347)

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

[ILeafer](../interfaces/ILeafer.md).[getBounds](../interfaces/ILeafer.md#getbounds)

#### Inherited from

[Group](Group.md).[getBounds](Group.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L352)

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

[ILeafer](../interfaces/ILeafer.md).[getLayoutBounds](../interfaces/ILeafer.md#getlayoutbounds)

#### Inherited from

[Group](Group.md).[getLayoutBounds](Group.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L356)

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

[ILeafer](../interfaces/ILeafer.md).[getLayoutPoints](../interfaces/ILeafer.md#getlayoutpoints)

#### Inherited from

[Group](Group.md).[getLayoutPoints](Group.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:360](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L360)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldBounds](../interfaces/ILeafer.md#getworldbounds)

#### Inherited from

[Group](Group.md).[getWorldBounds](Group.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L365)

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

[ILeafer](../interfaces/ILeafer.md).[worldToLocal](../interfaces/ILeafer.md#worldtolocal)

#### Inherited from

[Group](Group.md).[worldToLocal](Group.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L373)

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

[ILeafer](../interfaces/ILeafer.md).[localToWorld](../interfaces/ILeafer.md#localtoworld)

#### Inherited from

[Group](Group.md).[localToWorld](Group.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:381](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L381)

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

[ILeafer](../interfaces/ILeafer.md).[worldToInner](../interfaces/ILeafer.md#worldtoinner)

#### Inherited from

[Group](Group.md).[worldToInner](Group.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L389)

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

[ILeafer](../interfaces/ILeafer.md).[innerToWorld](../interfaces/ILeafer.md#innertoworld)

#### Inherited from

[Group](Group.md).[innerToWorld](Group.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L397)

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

[ILeafer](../interfaces/ILeafer.md).[getBoxPoint](../interfaces/ILeafer.md#getboxpoint)

#### Inherited from

[Group](Group.md).[getBoxPoint](Group.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:404](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L404)

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

[ILeafer](../interfaces/ILeafer.md).[getBoxPointByInner](../interfaces/ILeafer.md#getboxpointbyinner)

#### Inherited from

[Group](Group.md).[getBoxPointByInner](Group.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L408)

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

[ILeafer](../interfaces/ILeafer.md).[getInnerPoint](../interfaces/ILeafer.md#getinnerpoint)

#### Inherited from

[Group](Group.md).[getInnerPoint](Group.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:414](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L414)

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

[ILeafer](../interfaces/ILeafer.md).[getInnerPointByBox](../interfaces/ILeafer.md#getinnerpointbybox)

#### Inherited from

[Group](Group.md).[getInnerPointByBox](Group.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:420](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L420)

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

[ILeafer](../interfaces/ILeafer.md).[getInnerPointByLocal](../interfaces/ILeafer.md#getinnerpointbylocal)

#### Inherited from

[Group](Group.md).[getInnerPointByLocal](Group.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:426](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L426)

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

[ILeafer](../interfaces/ILeafer.md).[getLocalPoint](../interfaces/ILeafer.md#getlocalpoint)

#### Inherited from

[Group](Group.md).[getLocalPoint](Group.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L430)

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

[ILeafer](../interfaces/ILeafer.md).[getLocalPointByInner](../interfaces/ILeafer.md#getlocalpointbyinner)

#### Inherited from

[Group](Group.md).[getLocalPointByInner](Group.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:436](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L436)

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

[ILeafer](../interfaces/ILeafer.md).[getPagePoint](../interfaces/ILeafer.md#getpagepoint)

#### Inherited from

[Group](Group.md).[getPagePoint](Group.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L440)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldPoint](../interfaces/ILeafer.md#getworldpoint)

#### Inherited from

[Group](Group.md).[getWorldPoint](Group.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L445)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldPointByBox](../interfaces/ILeafer.md#getworldpointbybox)

#### Inherited from

[Group](Group.md).[getWorldPointByBox](Group.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:451](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L451)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldPointByLocal](../interfaces/ILeafer.md#getworldpointbylocal)

#### Inherited from

[Group](Group.md).[getWorldPointByLocal](Group.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L455)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldPointByPage](../interfaces/ILeafer.md#getworldpointbypage)

#### Inherited from

[Group](Group.md).[getWorldPointByPage](Group.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:461](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L461)

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

[ILeafer](../interfaces/ILeafer.md).[setTransform](../interfaces/ILeafer.md#settransform)

#### Inherited from

[Group](Group.md).[setTransform](Group.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L469)

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

[ILeafer](../interfaces/ILeafer.md).[transform](../interfaces/ILeafer.md#transform)

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:473](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L473)

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

[ILeafer](../interfaces/ILeafer.md).[move](../interfaces/ILeafer.md#move)

#### Inherited from

[Group](Group.md).[move](Group.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L477)

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

[ILeafer](../interfaces/ILeafer.md).[moveInner](../interfaces/ILeafer.md#moveinner)

#### Inherited from

[Group](Group.md).[moveInner](Group.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L482)

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

[ILeafer](../interfaces/ILeafer.md).[scaleOf](../interfaces/ILeafer.md#scaleof)

#### Inherited from

[Group](Group.md).[scaleOf](Group.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:486](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L486)

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

[ILeafer](../interfaces/ILeafer.md).[rotateOf](../interfaces/ILeafer.md#rotateof)

#### Inherited from

[Group](Group.md).[rotateOf](Group.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:490](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L490)

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

[ILeafer](../interfaces/ILeafer.md).[skewOf](../interfaces/ILeafer.md#skewof)

#### Inherited from

[Group](Group.md).[skewOf](Group.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:494](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L494)

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

[ILeafer](../interfaces/ILeafer.md).[transformWorld](../interfaces/ILeafer.md#transformworld)

#### Inherited from

[Group](Group.md).[transformWorld](Group.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L499)

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

[ILeafer](../interfaces/ILeafer.md).[moveWorld](../interfaces/ILeafer.md#moveworld)

#### Inherited from

[Group](Group.md).[moveWorld](Group.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L503)

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

[ILeafer](../interfaces/ILeafer.md).[scaleOfWorld](../interfaces/ILeafer.md#scaleofworld)

#### Inherited from

[Group](Group.md).[scaleOfWorld](Group.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:507](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L507)

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

[ILeafer](../interfaces/ILeafer.md).[rotateOfWorld](../interfaces/ILeafer.md#rotateofworld)

#### Inherited from

[Group](Group.md).[rotateOfWorld](Group.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:511](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L511)

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

[ILeafer](../interfaces/ILeafer.md).[skewOfWorld](../interfaces/ILeafer.md#skewofworld)

#### Inherited from

[Group](Group.md).[skewOfWorld](Group.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:515](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L515)

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

[ILeafer](../interfaces/ILeafer.md).[flip](../interfaces/ILeafer.md#flip)

#### Inherited from

[Group](Group.md).[flip](Group.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L519)

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

[ILeafer](../interfaces/ILeafer.md).[scaleResize](../interfaces/ILeafer.md#scaleresize)

#### Inherited from

[Group](Group.md).[scaleResize](Group.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L526)

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

[ILeafer](../interfaces/ILeafer.md).[__scaleResize](../interfaces/ILeafer.md#__scaleresize)

#### Inherited from

[Group](Group.md).[__scaleResize](Group.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L531)

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

[ILeafer](../interfaces/ILeafer.md).[resizeWidth](../interfaces/ILeafer.md#resizewidth)

#### Inherited from

[Group](Group.md).[resizeWidth](Group.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L534)

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

[ILeafer](../interfaces/ILeafer.md).[resizeHeight](../interfaces/ILeafer.md#resizeheight)

#### Inherited from

[Group](Group.md).[resizeHeight](Group.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:536](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L536)

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

[ILeafer](../interfaces/ILeafer.md).[__hitWorld](../interfaces/ILeafer.md#__hitworld)

#### Inherited from

[Group](Group.md).[__hitWorld](Group.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L541)

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

[ILeafer](../interfaces/ILeafer.md).[__hit](../interfaces/ILeafer.md#__hit)

#### Inherited from

[Group](Group.md).[__hit](Group.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L543)

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

[ILeafer](../interfaces/ILeafer.md).[__hitFill](../interfaces/ILeafer.md#__hitfill)

#### Inherited from

[Group](Group.md).[__hitFill](Group.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L545)

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

[ILeafer](../interfaces/ILeafer.md).[__hitStroke](../interfaces/ILeafer.md#__hitstroke)

#### Inherited from

[Group](Group.md).[__hitStroke](Group.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:547](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L547)

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

[ILeafer](../interfaces/ILeafer.md).[__hitPixel](../interfaces/ILeafer.md#__hitpixel)

#### Inherited from

[Group](Group.md).[__hitPixel](Group.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:549](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L549)

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

[ILeafer](../interfaces/ILeafer.md).[__drawHitPath](../interfaces/ILeafer.md#__drawhitpath)

#### Inherited from

[Group](Group.md).[__drawHitPath](Group.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L551)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateHitCanvas](../interfaces/ILeafer.md#__updatehitcanvas)

#### Inherited from

[Group](Group.md).[__updateHitCanvas](Group.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L553)

___

### \_\_render

▸ **__render**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__render](../interfaces/ILeafer.md#__render)

#### Inherited from

[Group](Group.md).[__render](Group.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L560)

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

[ILeafer](../interfaces/ILeafer.md).[__drawFast](../interfaces/ILeafer.md#__drawfast)

#### Inherited from

[Group](Group.md).[__drawFast](Group.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L562)

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

[ILeafer](../interfaces/ILeafer.md).[__draw](../interfaces/ILeafer.md#__draw)

#### Inherited from

[Group](Group.md).[__draw](Group.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L564)

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

[ILeafer](../interfaces/ILeafer.md).[__clip](../interfaces/ILeafer.md#__clip)

#### Inherited from

[Group](Group.md).[__clip](Group.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L567)

___

### \_\_renderShape

▸ **__renderShape**(`_canvas`, `_options`, `_ignoreFill?`, `_ignoreStroke?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `_ignoreFill?` | `boolean` |
| `_ignoreStroke?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__renderShape](../interfaces/ILeafer.md#__rendershape)

#### Inherited from

[Group](Group.md).[__renderShape](Group.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L569)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateWorldOpacity](../interfaces/ILeafer.md#__updateworldopacity)

#### Inherited from

[Group](Group.md).[__updateWorldOpacity](Group.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L572)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateChange](../interfaces/ILeafer.md#__updatechange)

#### Inherited from

[Group](Group.md).[__updateChange](Group.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L574)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updatePath](../interfaces/ILeafer.md#__updatepath)

#### Inherited from

[Group](Group.md).[__updatePath](Group.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:585](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L585)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[getMotionPathData](../interfaces/ILeafer.md#getmotionpathdata)

#### Inherited from

[Group](Group.md).[getMotionPathData](Group.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:594](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L594)

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

[ILeafer](../interfaces/ILeafer.md).[getMotionPoint](../interfaces/ILeafer.md#getmotionpoint)

#### Inherited from

[Group](Group.md).[getMotionPoint](Group.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L598)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[getMotionTotal](../interfaces/ILeafer.md#getmotiontotal)

#### Inherited from

[Group](Group.md).[getMotionTotal](Group.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L602)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateMotionPath](../interfaces/ILeafer.md#__updatemotionpath)

#### Inherited from

[Group](Group.md).[__updateMotionPath](Group.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L606)

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

[ILeafer](../interfaces/ILeafer.md).[__runAnimation](../interfaces/ILeafer.md#__runanimation)

#### Inherited from

[Group](Group.md).[__runAnimation](Group.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:612](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L612)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateSortChildren](../interfaces/ILeafer.md#__updatesortchildren)

#### Inherited from

[Group](Group.md).[__updateSortChildren](Group.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L617)

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

[ILeafer](../interfaces/ILeafer.md).[dropTo](../interfaces/ILeafer.md#dropto)

#### Inherited from

[Group](Group.md).[dropTo](Group.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L625)

___

### on

▸ **on**(`_type`, `_listener?`, `_options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] \| [`IEventMap`](../interfaces/IEventMap.md) |
| `_listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[on](../interfaces/ILeafer.md#on)

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L634)

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

[ILeafer](../interfaces/ILeafer.md).[off](../interfaces/ILeafer.md#off)

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L636)

___

### on\_

▸ **on_**(`_type`, `_listener`, `_bind?`, `_options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] |
| `_listener` | [`IFunction`](../interfaces/IFunction.md) |
| `_bind?` | [`IObject`](../interfaces/IObject.md) |
| `_options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[on_](../interfaces/ILeafer.md#on_)

#### Inherited from

[Group](Group.md).[on_](Group.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L638)

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

[ILeafer](../interfaces/ILeafer.md).[off_](../interfaces/ILeafer.md#off_)

#### Inherited from

[Group](Group.md).[off_](Group.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L640)

___

### once

▸ **once**(`_type`, `_listener`, `_capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | `string` \| `string`[] |
| `_listener` | [`IFunction`](../interfaces/IFunction.md) |
| `_capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[once](../interfaces/ILeafer.md#once)

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L642)

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

[ILeafer](../interfaces/ILeafer.md).[emit](../interfaces/ILeafer.md#emit)

#### Inherited from

[Group](Group.md).[emit](Group.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:644](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L644)

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

[ILeafer](../interfaces/ILeafer.md).[emitEvent](../interfaces/ILeafer.md#emitevent)

#### Inherited from

[Group](Group.md).[emitEvent](Group.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L646)

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

[ILeafer](../interfaces/ILeafer.md).[hasEvent](../interfaces/ILeafer.md#hasevent)

#### Inherited from

[Group](Group.md).[hasEvent](Group.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L648)

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

[Group](Group.md).[changeAttr](Group.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:652](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L652)

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

[Group](Group.md).[addAttr](Group.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L656)

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

[ILeafer](../interfaces/ILeafer.md).[__emitLifeEvent](../interfaces/ILeafer.md#__emitlifeevent)

#### Inherited from

[Group](Group.md).[__emitLifeEvent](Group.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/27e942d/packages/display/src/Leaf.ts#L662)

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

[ILeafer](../interfaces/ILeafer.md).[reset](../interfaces/ILeafer.md#reset)

#### Inherited from

[Group](Group.md).[reset](Group.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:34](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L34)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__setBranch](Group.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:39](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L39)

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

[ILeafer](../interfaces/ILeafer.md).[toJSON](../interfaces/ILeafer.md#tojson)

#### Inherited from

[Group](Group.md).[toJSON](Group.md#tojson)

#### Defined in

[ui/packages/display/src/Group.ts:63](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L63)

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

[ILeafer](../interfaces/ILeafer.md).[pick](../interfaces/ILeafer.md#pick)

#### Inherited from

[Group](Group.md).[pick](Group.md#pick)

#### Defined in

[ui/packages/display/src/Group.ts:72](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L72)

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

[ILeafer](../interfaces/ILeafer.md).[addAt](../interfaces/ILeafer.md#addat)

#### Inherited from

[Group](Group.md).[addAt](Group.md#addat)

#### Defined in

[ui/packages/display/src/Group.ts:77](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L77)

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

[ILeafer](../interfaces/ILeafer.md).[addAfter](../interfaces/ILeafer.md#addafter)

#### Inherited from

[Group](Group.md).[addAfter](Group.md#addafter)

#### Defined in

[ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L81)

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

[ILeafer](../interfaces/ILeafer.md).[addBefore](../interfaces/ILeafer.md#addbefore)

#### Inherited from

[Group](Group.md).[addBefore](Group.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L85)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] \| [`IUIInputData`](../interfaces/IUIInputData.md)[] |
| `_index?` | `number` |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[add](../interfaces/ILeafer.md#add)

#### Inherited from

[Group](Group.md).[add](Group.md#add)

#### Defined in

[ui/packages/display/src/Group.ts:91](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L91)

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

[ILeafer](../interfaces/ILeafer.md).[addMany](../interfaces/ILeafer.md#addmany)

#### Inherited from

[Group](Group.md).[addMany](Group.md#addmany)

#### Defined in

[ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L93)

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

[ILeafer](../interfaces/ILeafer.md).[remove](../interfaces/ILeafer.md#remove)

#### Inherited from

[Group](Group.md).[remove](Group.md#remove)

#### Defined in

[ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L95)

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

[ILeafer](../interfaces/ILeafer.md).[removeAll](../interfaces/ILeafer.md#removeall)

#### Inherited from

[Group](Group.md).[removeAll](Group.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L97)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[clear](../interfaces/ILeafer.md#clear)

#### Inherited from

[Group](Group.md).[clear](Group.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Group.ts#L99)

___

### init

▸ **init**(`userConfig?`, `parentApp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |
| `parentApp?` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[init](../interfaces/ILeafer.md#init)

#### Defined in

[ui/packages/display/src/Leafer.ts:96](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L96)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[onInit](../interfaces/ILeafer.md#oninit)

#### Defined in

[ui/packages/display/src/Leafer.ts:157](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L157)

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

[ILeafer](../interfaces/ILeafer.md).[initType](../interfaces/ILeafer.md#inittype)

#### Defined in

[ui/packages/display/src/Leafer.ts:159](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L159)

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

[ILeafer](../interfaces/ILeafer.md).[set](../interfaces/ILeafer.md#set)

#### Overrides

[Group](Group.md).[set](Group.md#set)

#### Defined in

[ui/packages/display/src/Leafer.ts:161](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L161)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[start](../interfaces/ILeafer.md#start)

#### Defined in

[ui/packages/display/src/Leafer.ts:165](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L165)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[stop](../interfaces/ILeafer.md#stop)

#### Defined in

[ui/packages/display/src/Leafer.ts:175](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L175)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[unlockLayout](../interfaces/ILeafer.md#unlocklayout)

#### Defined in

[ui/packages/display/src/Leafer.ts:184](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L184)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockLayout](../interfaces/ILeafer.md#locklayout)

#### Defined in

[ui/packages/display/src/Leafer.ts:189](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L189)

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

[ILeafer](../interfaces/ILeafer.md).[resize](../interfaces/ILeafer.md#resize)

#### Defined in

[ui/packages/display/src/Leafer.ts:194](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L194)

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

[ILeafer](../interfaces/ILeafer.md).[forceRender](../interfaces/ILeafer.md#forcerender)

#### Overrides

[Group](Group.md).[forceRender](Group.md#forcerender)

#### Defined in

[ui/packages/display/src/Leafer.ts:199](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L199)

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

[ILeafer](../interfaces/ILeafer.md).[requestRender](../interfaces/ILeafer.md#requestrender)

#### Defined in

[ui/packages/display/src/Leafer.ts:207](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L207)

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

[ILeafer](../interfaces/ILeafer.md).[updateCursor](../interfaces/ILeafer.md#updatecursor)

#### Defined in

[ui/packages/display/src/Leafer.ts:211](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L211)

___

### updateLazyBounds

▸ **updateLazyBounds**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:216](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L216)

___

### \_\_doResize

▸ `Protected` **__doResize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:220](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L220)

___

### \_\_onResize

▸ `Protected` **__onResize**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IResizeEvent`](../interfaces/IResizeEvent.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:229](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L229)

___

### \_\_setApp

▸ `Protected` **__setApp**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:235](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L235)

___

### \_\_bindApp

▸ `Protected` **__bindApp**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:237](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L237)

___

### \_\_setLeafer

▸ **__setLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeafer`](../interfaces/ILeafer.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:245](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L245)

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

#### Defined in

[ui/packages/display/src/Leafer.ts:250](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L250)

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

[ILeafer](../interfaces/ILeafer.md).[__setAttr](../interfaces/ILeafer.md#__setattr)

#### Overrides

[Group](Group.md).[__setAttr](Group.md#__setattr)

#### Defined in

[ui/packages/display/src/Leafer.ts:257](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L257)

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

[ILeafer](../interfaces/ILeafer.md).[__getAttr](../interfaces/ILeafer.md#__getattr)

#### Overrides

[Group](Group.md).[__getAttr](Group.md#__getattr)

#### Defined in

[ui/packages/display/src/Leafer.ts:274](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L274)

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

#### Defined in

[ui/packages/display/src/Leafer.ts:279](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L279)

___

### \_\_changeFill

▸ `Protected` **__changeFill**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:286](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L286)

___

### \_\_onCreated

▸ `Protected` **__onCreated**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:292](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L292)

___

### \_\_onReady

▸ `Protected` **__onReady**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:296](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L296)

___

### \_\_onViewReady

▸ `Protected` **__onViewReady**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:304](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L304)

___

### \_\_onLayoutEnd

▸ `Protected` **__onLayoutEnd**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:311](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L311)

___

### \_\_onNextRender

▸ `Protected` **__onNextRender**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:324](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L324)

___

### \_\_checkViewCompleted

▸ `Protected` **__checkViewCompleted**(`emit?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `emit` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:337](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L337)

___

### \_\_onWatchData

▸ `Protected` **__onWatchData**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:347](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L347)

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

#### Defined in

[ui/packages/display/src/Leafer.ts:353](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L353)

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

[ILeafer](../interfaces/ILeafer.md).[waitReady](../interfaces/ILeafer.md#waitready)

#### Defined in

[ui/packages/display/src/Leafer.ts:359](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L359)

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

[ILeafer](../interfaces/ILeafer.md).[waitViewReady](../interfaces/ILeafer.md#waitviewready)

#### Defined in

[ui/packages/display/src/Leafer.ts:364](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L364)

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

[ILeafer](../interfaces/ILeafer.md).[waitViewCompleted](../interfaces/ILeafer.md#waitviewcompleted)

#### Defined in

[ui/packages/display/src/Leafer.ts:369](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L369)

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

[ILeafer](../interfaces/ILeafer.md).[nextRender](../interfaces/ILeafer.md#nextrender)

#### Overrides

[Group](Group.md).[nextRender](Group.md#nextrender)

#### Defined in

[ui/packages/display/src/Leafer.ts:376](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L376)

___

### zoom

▸ **zoom**(`_zoomType`, `_padding?`, `_fixedScale?`, `_transition?`): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `_padding?` | [`IFourNumber`](../modules.md#ifournumber) |
| `_fixedScale?` | `boolean` |
| `_transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[zoom](../interfaces/ILeafer.md#zoom)

#### Defined in

[ui/packages/display/src/Leafer.ts:388](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L388)

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

[ILeafer](../interfaces/ILeafer.md).[getValidMove](../interfaces/ILeafer.md#getvalidmove)

#### Defined in

[ui/packages/display/src/Leafer.ts:394](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L394)

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

[ILeafer](../interfaces/ILeafer.md).[getValidScale](../interfaces/ILeafer.md#getvalidscale)

#### Defined in

[ui/packages/display/src/Leafer.ts:395](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L395)

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

[ILeafer](../interfaces/ILeafer.md).[getWorldPointByClient](../interfaces/ILeafer.md#getworldpointbyclient)

#### Defined in

[ui/packages/display/src/Leafer.ts:398](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L398)

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

[ILeafer](../interfaces/ILeafer.md).[getPagePointByClient](../interfaces/ILeafer.md#getpagepointbyclient)

#### Defined in

[ui/packages/display/src/Leafer.ts:402](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L402)

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

[ILeafer](../interfaces/ILeafer.md).[getClientPointByWorld](../interfaces/ILeafer.md#getclientpointbyworld)

#### Defined in

[ui/packages/display/src/Leafer.ts:406](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L406)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[updateClientBounds](../interfaces/ILeafer.md#updateclientbounds)

#### Defined in

[ui/packages/display/src/Leafer.ts:411](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L411)

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

[ILeafer](../interfaces/ILeafer.md).[receiveEvent](../interfaces/ILeafer.md#receiveevent)

#### Defined in

[ui/packages/display/src/Leafer.ts:416](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L416)

___

### emitLeafer

▸ `Protected` **emitLeafer**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:418](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L418)

___

### \_\_listenEvents

▸ `Protected` **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:422](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L422)

___

### \_\_removeListenEvents

▸ `Protected` **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Leafer.ts:435](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L435)

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

[ILeafer](../interfaces/ILeafer.md).[destroy](../interfaces/ILeafer.md#destroy)

#### Overrides

[Group](Group.md).[destroy](Group.md#destroy)

#### Defined in

[ui/packages/display/src/Leafer.ts:440](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/Leafer.ts#L440)

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

[ILeafer](../interfaces/ILeafer.md).[get](../interfaces/ILeafer.md#get)

#### Inherited from

[Group](Group.md).[get](Group.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L406)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[createProxyData](../interfaces/ILeafer.md#createproxydata)

#### Inherited from

[Group](Group.md).[createProxyData](Group.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:410](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L410)

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

[ILeafer](../interfaces/ILeafer.md).[find](../interfaces/ILeafer.md#find)

#### Inherited from

[Group](Group.md).[find](Group.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L415)

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

[ILeafer](../interfaces/ILeafer.md).[findTag](../interfaces/ILeafer.md#findtag)

#### Inherited from

[Group](Group.md).[findTag](Group.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:417](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L417)

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

[ILeafer](../interfaces/ILeafer.md).[findOne](../interfaces/ILeafer.md#findone)

#### Inherited from

[Group](Group.md).[findOne](Group.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:419](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L419)

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

[ILeafer](../interfaces/ILeafer.md).[findId](../interfaces/ILeafer.md#findid)

#### Inherited from

[Group](Group.md).[findId](Group.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:421](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L421)

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

[ILeafer](../interfaces/ILeafer.md).[getPath](../interfaces/ILeafer.md#getpath)

#### Inherited from

[Group](Group.md).[getPath](Group.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L426)

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

[ILeafer](../interfaces/ILeafer.md).[getPathString](../interfaces/ILeafer.md#getpathstring)

#### Inherited from

[Group](Group.md).[getPathString](Group.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L433)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[load](../interfaces/ILeafer.md#load)

#### Inherited from

[Group](Group.md).[load](Group.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L438)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__onUpdateSize](../interfaces/ILeafer.md#__onupdatesize)

#### Inherited from

[Group](Group.md).[__onUpdateSize](Group.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L442)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateRenderPath](../interfaces/ILeafer.md#__updaterenderpath)

#### Inherited from

[Group](Group.md).[__updateRenderPath](Group.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L449)

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

[ILeafer](../interfaces/ILeafer.md).[__drawRenderPath](../interfaces/ILeafer.md#__drawrenderpath)

#### Inherited from

[Group](Group.md).[__drawRenderPath](Group.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:457](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L457)

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

[ILeafer](../interfaces/ILeafer.md).[__drawPath](../interfaces/ILeafer.md#__drawpath)

#### Inherited from

[Group](Group.md).[__drawPath](Group.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:462](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L462)

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

[ILeafer](../interfaces/ILeafer.md).[__drawPathByData](../interfaces/ILeafer.md#__drawpathbydata)

#### Inherited from

[Group](Group.md).[__drawPathByData](Group.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:467](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L467)

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

[ILeafer](../interfaces/ILeafer.md).[__drawPathByBox](../interfaces/ILeafer.md#__drawpathbybox)

#### Inherited from

[Group](Group.md).[__drawPathByBox](Group.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:471](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L471)

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

[ILeafer](../interfaces/ILeafer.md).[animate](../interfaces/ILeafer.md#animate)

#### Inherited from

[Group](Group.md).[animate](Group.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:481](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L481)

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

[ILeafer](../interfaces/ILeafer.md).[killAnimate](../interfaces/ILeafer.md#killanimate)

#### Inherited from

[Group](Group.md).[killAnimate](Group.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:485](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L485)

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

[ILeafer](../interfaces/ILeafer.md).[export](../interfaces/ILeafer.md#export)

#### Inherited from

[Group](Group.md).[export](Group.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L491)

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

[ILeafer](../interfaces/ILeafer.md).[syncExport](../interfaces/ILeafer.md#syncexport)

#### Inherited from

[Group](Group.md).[syncExport](Group.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:495](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L495)

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

[ILeafer](../interfaces/ILeafer.md).[clone](../interfaces/ILeafer.md#clone)

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:499](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L499)

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

[Group](Group.md).[one](Group.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L505)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerUI](Group.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:509](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L509)

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

[Group](Group.md).[registerData](Group.md#registerdata)

#### Defined in

[ui/packages/display/src/UI.ts:513](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L513)

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

[Group](Group.md).[setEditConfig](Group.md#seteditconfig)

#### Defined in

[ui/packages/display/src/UI.ts:520](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L520)

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

[Group](Group.md).[setEditOuter](Group.md#seteditouter)

#### Defined in

[ui/packages/display/src/UI.ts:522](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L522)

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

[Group](Group.md).[setEditInner](Group.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:524](https://github.com/leaferjs/leafer-ui/blob/e76fc82/packages/display/src/UI.ts#L524)
