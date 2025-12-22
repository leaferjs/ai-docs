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
- [\_\_scrollWorld](Leafer.md#__scrollworld)
- [\_\_level](Leafer.md#__level)
- [\_\_tempNumber](Leafer.md#__tempnumber)
- [\_\_hasAutoLayout](Leafer.md#__hasautolayout)
- [\_\_hasMask](Leafer.md#__hasmask)
- [\_\_hasEraser](Leafer.md#__haseraser)
- [\_\_hitCanvas](Leafer.md#__hitcanvas)
- [\_\_captureMap](Leafer.md#__capturemap)
- [\_\_bubbleMap](Leafer.md#__bubblemap)
- [\_\_hasLocalEvent](Leafer.md#__haslocalevent)
- [\_\_hasWorldEvent](Leafer.md#__hasworldevent)
- [destroyed](Leafer.md#destroyed)
- [width](Leafer.md#width)
- [height](Leafer.md#height)
- [children](Leafer.md#children)
- [topChildren](Leafer.md#topchildren)
- [childlessJSON](Leafer.md#childlessjson)
- [list](Leafer.md#list)
- [\_\_](Leafer.md#__)
- [pixelRatio](Leafer.md#pixelratio)
- [mode](Leafer.md#mode)
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
- [bright](Leafer.md#bright)
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
- [renderSpread](Leafer.md#renderspread)
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
- [dragBoundsType](Leafer.md#dragboundstype)
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
- [placeholderColor](Leafer.md#placeholdercolor)
- [placeholderDelay](Leafer.md#placeholderdelay)
- [button](Leafer.md#button)
- [editConfig](Leafer.md#editconfig)
- [editOuter](Leafer.md#editouter)
- [editInner](Leafer.md#editinner)
- [data](Leafer.md#data)
- [useFastShadow](Leafer.md#usefastshadow)
- [\_\_box](Leafer.md#__box)
- [\_\_animate](Leafer.md#__animate)

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
- [scrollWorldTransform](Leafer.md#scrollworldtransform)
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
- [isAutoWidth](Leafer.md#isautowidth)
- [isAutoHeight](Leafer.md#isautoheight)
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
- [getClampRenderScale](Leafer.md#getclamprenderscale)
- [getRenderScaleData](Leafer.md#getrenderscaledata)
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
- [hit](Leafer.md#hit)
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
- [\_\_drawShape](Leafer.md#__drawshape)
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
- [drawImagePlaceholder](Leafer.md#drawimageplaceholder)
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

• **new Leafer**(`userConfig?`, `data?`): [`Leafer`](Leafer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`ILeaferConfig`](../interfaces/ILeaferConfig.md) |
| `data?` | [`ILeaferInputData`](../interfaces/ILeaferInputData.md) |

#### Returns

[`Leafer`](Leafer.md)

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:93](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L93)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[innerId](../interfaces/ILeafer.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L33)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[syncEventer](../interfaces/ILeafer.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L49)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockNormalStyle](../interfaces/ILeafer.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L50)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__layout](../interfaces/ILeafer.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L53)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__world](../interfaces/ILeafer.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L55)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__local](../interfaces/ILeafer.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L56)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__nowWorld](../interfaces/ILeafer.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L58)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__cameraWorld](../interfaces/ILeafer.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L59)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__worldOpacity](../interfaces/ILeafer.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L64)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__scrollWorld](../interfaces/ILeafer.md#__scrollworld)

#### Inherited from

[Group](Group.md).[__scrollWorld](Group.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L70)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__level](../interfaces/ILeafer.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L83)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__tempNumber](../interfaces/ILeafer.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L84)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasAutoLayout](../interfaces/ILeafer.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L88)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasMask](../interfaces/ILeafer.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L89)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasEraser](../interfaces/ILeafer.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L90)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hitCanvas](../interfaces/ILeafer.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L91)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__captureMap](../interfaces/ILeafer.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L102)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__bubbleMap](../interfaces/ILeafer.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L103)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasLocalEvent](../interfaces/ILeafer.md#__haslocalevent)

#### Inherited from

[Group](Group.md).[__hasLocalEvent](Group.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L105)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__hasWorldEvent](../interfaces/ILeafer.md#__hasworldevent)

#### Inherited from

[Group](Group.md).[__hasWorldEvent](Group.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L106)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[destroyed](../interfaces/ILeafer.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:112](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L112)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[width](../interfaces/ILeafer.md#width)

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[src/ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[height](../interfaces/ILeafer.md#height)

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[src/ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[children](../interfaces/ILeafer.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L28)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[topChildren](../interfaces/ILeafer.md#topchildren)

#### Inherited from

[Group](Group.md).[topChildren](Group.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[childlessJSON](../interfaces/ILeafer.md#childlessjson)

#### Inherited from

[Group](Group.md).[childlessJSON](Group.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L32)

___

### list

▪ `Static` **list**: [`LeafList`](LeafList.md)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L15)

___

### \_\_

• **\_\_**: [`ILeaferData`](../interfaces/ILeaferData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__](../interfaces/ILeafer.md#__)

#### Overrides

[Group](Group.md).[__](Group.md#__)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:21](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L21)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pixelRatio](../interfaces/ILeafer.md#pixelratio)

#### Overrides

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:24](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L24)

___

### mode

• **mode**: [`ILeaferMode`](../modules.md#ileafermode)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[mode](../interfaces/ILeafer.md#mode)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:27](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L27)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[parentApp](../interfaces/ILeafer.md#parentapp)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:34](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L34)

___

### parent

• `Optional` **parent**: [`IApp`](../interfaces/IApp.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[parent](../interfaces/ILeafer.md#parent)

#### Overrides

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:35](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L35)

___

### running

• **running**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[running](../interfaces/ILeafer.md#running)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:37](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L37)

___

### created

• **created**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[created](../interfaces/ILeafer.md#created)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:38](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L38)

___

### ready

• **ready**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[ready](../interfaces/ILeafer.md#ready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:39](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L39)

___

### viewReady

• **viewReady**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[viewReady](../interfaces/ILeafer.md#viewready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:40](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L40)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[viewCompleted](../interfaces/ILeafer.md#viewcompleted)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:41](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L41)

___

### transforming

• **transforming**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transforming](../interfaces/ILeafer.md#transforming)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:45](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L45)

___

### view

• **view**: `unknown`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[view](../interfaces/ILeafer.md#view)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:47](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L47)

___

### canvas

• **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[canvas](../interfaces/ILeafer.md#canvas)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:50](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L50)

___

### renderer

• **renderer**: [`IRenderer`](../interfaces/IRenderer.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[renderer](../interfaces/ILeafer.md#renderer)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:51](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L51)

___

### watcher

• **watcher**: [`IWatcher`](../interfaces/IWatcher.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[watcher](../interfaces/ILeafer.md#watcher)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:53](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L53)

___

### layouter

• **layouter**: [`ILayouter`](../interfaces/ILayouter.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[layouter](../interfaces/ILeafer.md#layouter)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:54](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L54)

___

### selector

• `Optional` **selector**: [`ISelector`](../interfaces/ISelector.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selector](../interfaces/ILeafer.md#selector)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:56](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L56)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](../interfaces/IInteraction.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[interaction](../interfaces/ILeafer.md#interaction)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:57](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L57)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](../interfaces/ICanvasManager.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[canvasManager](../interfaces/ILeafer.md#canvasmanager)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:59](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L59)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](../interfaces/IHitCanvasManager.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitCanvasManager](../interfaces/ILeafer.md#hitcanvasmanager)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:60](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L60)

___

### editor

• **editor**: [`IEditorBase`](../interfaces/IEditorBase.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editor](../interfaces/ILeafer.md#editor)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:63](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L63)

___

### userConfig

• **userConfig**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[userConfig](../interfaces/ILeafer.md#userconfig)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:65](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L65)

___

### config

• **config**: [`ILeaferConfig`](../interfaces/ILeaferConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[config](../interfaces/ILeafer.md#config)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:66](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L66)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](../interfaces/IAutoBounds.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoLayout](../interfaces/ILeafer.md#autolayout)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:75](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L75)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](../interfaces/IBounds.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lazyBounds](../interfaces/ILeafer.md#lazybounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:76](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L76)

___

### leafs

• **leafs**: `number` = `0`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leafs](../interfaces/ILeafer.md#leafs)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:81](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L81)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__eventIds](../interfaces/ILeafer.md#__eventids)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:83](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L83)

___

### \_\_startTimer

• `Protected` **\_\_startTimer**: `any`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:84](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L84)

___

### \_\_controllers

• `Protected` **\_\_controllers**: [`IControl`](../interfaces/IControl.md)[] = `[]`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:85](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L85)

___

### \_\_initWait

• `Protected` **\_\_initWait**: [`IFunction`](../interfaces/IFunction.md)[]

#### Defined in

[src/ui/packages/display/src/Leafer.ts:87](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L87)

___

### \_\_readyWait

• `Protected` **\_\_readyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:88](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L88)

___

### \_\_viewReadyWait

• `Protected` **\_\_viewReadyWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:89](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L89)

___

### \_\_viewCompletedWait

• `Protected` **\_\_viewCompletedWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:90](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L90)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](../interfaces/IFunction.md)[] = `[]`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__nextRenderWait](../interfaces/ILeafer.md#__nextrenderwait)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:91](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L91)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[proxyData](../interfaces/ILeafer.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__proxyData](../interfaces/ILeafer.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[leafer](../interfaces/ILeafer.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L26)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[zoomLayer](../interfaces/ILeafer.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[id](../interfaces/ILeafer.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[name](../interfaces/ILeafer.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[className](../interfaces/ILeafer.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[blendMode](../interfaces/ILeafer.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[opacity](../interfaces/ILeafer.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[visible](../interfaces/ILeafer.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[locked](../interfaces/ILeafer.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dim](../interfaces/ILeafer.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:67](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L67)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dimskip](../interfaces/ILeafer.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:70](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L70)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[bright](../interfaces/ILeafer.md#bright)

#### Inherited from

[Group](Group.md).[bright](Group.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L72)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[zIndex](../interfaces/ILeafer.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L76)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[mask](../interfaces/ILeafer.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L80)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[eraser](../interfaces/ILeafer.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:83](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L83)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[x](../interfaces/ILeafer.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:88](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L88)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[y](../interfaces/ILeafer.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L91)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scaleX](../interfaces/ILeafer.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L102)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scaleY](../interfaces/ILeafer.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L105)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[rotation](../interfaces/ILeafer.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L109)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[skewX](../interfaces/ILeafer.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L113)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[skewY](../interfaces/ILeafer.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L116)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[offsetX](../interfaces/ILeafer.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:121](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L121)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[offsetY](../interfaces/ILeafer.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L124)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scrollX](../interfaces/ILeafer.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L128)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scrollY](../interfaces/ILeafer.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L131)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[origin](../interfaces/ILeafer.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:136](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L136)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[around](../interfaces/ILeafer.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:139](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L139)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lazy](../interfaces/ILeafer.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L144)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[renderSpread](../interfaces/ILeafer.md#renderspread)

#### Inherited from

[Group](Group.md).[renderSpread](Group.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L151)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandNode`](../modules.md#ipathcommandnode)[] \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[path](../interfaces/ILeafer.md#path)

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:156](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L156)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[windingRule](../interfaces/ILeafer.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:159](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L159)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[closed](../interfaces/ILeafer.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L162)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flow](../interfaces/ILeafer.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L166)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[padding](../interfaces/ILeafer.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L169)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[gap](../interfaces/ILeafer.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L171)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flowAlign](../interfaces/ILeafer.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L173)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[flowWrap](../interfaces/ILeafer.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L175)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[itemBox](../interfaces/ILeafer.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L178)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[inFlow](../interfaces/ILeafer.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L180)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoWidth](../interfaces/ILeafer.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:183](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L183)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoHeight](../interfaces/ILeafer.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L185)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockRatio](../interfaces/ILeafer.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L188)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[autoBox](../interfaces/ILeafer.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L190)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[widthRange](../interfaces/ILeafer.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L193)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[heightRange](../interfaces/ILeafer.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L196)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[draggable](../interfaces/ILeafer.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L201)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dragBounds](../interfaces/ILeafer.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L204)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dragBoundsType](../interfaces/ILeafer.md#dragboundstype)

#### Inherited from

[Group](Group.md).[dragBoundsType](Group.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L207)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editable](../interfaces/ILeafer.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L211)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hittable](../interfaces/ILeafer.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L216)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitFill](../interfaces/ILeafer.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L219)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitStroke](../interfaces/ILeafer.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:222](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L222)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitBox](../interfaces/ILeafer.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:225](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L225)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitChildren](../interfaces/ILeafer.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:228](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L228)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitSelf](../interfaces/ILeafer.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:231](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L231)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hitRadius](../interfaces/ILeafer.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L234)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cursor](../interfaces/ILeafer.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:237](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L237)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[fill](../interfaces/ILeafer.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L245)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[stroke](../interfaces/ILeafer.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L250)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeAlign](../interfaces/ILeafer.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:253](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L253)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeWidth](../interfaces/ILeafer.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L256)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeWidthFixed](../interfaces/ILeafer.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:259](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L259)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeCap](../interfaces/ILeafer.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:262](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L262)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[strokeJoin](../interfaces/ILeafer.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:265](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L265)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dashPattern](../interfaces/ILeafer.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L268)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[dashOffset](../interfaces/ILeafer.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L271)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[miterLimit](../interfaces/ILeafer.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L274)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[startArrow](../interfaces/ILeafer.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L279)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[endArrow](../interfaces/ILeafer.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:281](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L281)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cornerRadius](../interfaces/ILeafer.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L286)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cornerSmoothing](../interfaces/ILeafer.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L289)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[shadow](../interfaces/ILeafer.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:294](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L294)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[innerShadow](../interfaces/ILeafer.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L297)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[blur](../interfaces/ILeafer.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L300)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[backgroundBlur](../interfaces/ILeafer.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L303)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[grayscale](../interfaces/ILeafer.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:306](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L306)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[filter](../interfaces/ILeafer.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L309)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[animation](../interfaces/ILeafer.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L314)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[animationOut](../interfaces/ILeafer.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:316](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L316)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transition](../interfaces/ILeafer.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L319)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[transitionOut](../interfaces/ILeafer.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L321)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionPath](../interfaces/ILeafer.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L326)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionPrecision](../interfaces/ILeafer.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:328](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L328)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motion](../interfaces/ILeafer.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L331)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[motionRotation](../interfaces/ILeafer.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L333)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[states](../interfaces/ILeafer.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L338)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[state](../interfaces/ILeafer.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:340](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L340)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selected](../interfaces/ILeafer.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L343)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[disabled](../interfaces/ILeafer.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L345)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[normalStyle](../interfaces/ILeafer.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:348](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L348)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hoverStyle](../interfaces/ILeafer.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L350)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[pressStyle](../interfaces/ILeafer.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L352)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[focusStyle](../interfaces/ILeafer.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L354)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[selectedStyle](../interfaces/ILeafer.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L356)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[disabledStyle](../interfaces/ILeafer.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:358](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L358)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[placeholderStyle](../interfaces/ILeafer.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L361)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[placeholderColor](../interfaces/ILeafer.md#placeholdercolor)

#### Inherited from

[Group](Group.md).[placeholderColor](Group.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L364)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[placeholderDelay](../interfaces/ILeafer.md#placeholderdelay)

#### Inherited from

[Group](Group.md).[placeholderDelay](Group.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:367](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L367)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[button](../interfaces/ILeafer.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L370)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editConfig](../interfaces/ILeafer.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:375](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L375)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editOuter](../interfaces/ILeafer.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L377)

___

### editInner

• **editInner**: `string`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[editInner](../interfaces/ILeafer.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L379)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[data](../interfaces/ILeafer.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L384)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[useFastShadow](../interfaces/ILeafer.md#usefastshadow)

#### Inherited from

[Group](Group.md).[useFastShadow](Group.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L393)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__box](../interfaces/ILeafer.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L395)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__animate](../interfaces/ILeafer.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:396](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L396)

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

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L28)

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

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L29)

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

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L34)

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

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L36)

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

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L37)

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

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L42)

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

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L43)

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

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L47)

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

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L61)

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

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L62)

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

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L67)

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

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L68)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[scrollWorldTransform](../interfaces/ILeafer.md#scrollworldtransform)

#### Inherited from

Group.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L71)

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

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L74)

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

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L75)

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

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L76)

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

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L77)

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

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L78)

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

[src/leafer/packages/display/src/Leaf.ts:81](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L81)

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

[src/leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L86)

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

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L93)

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

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L94)

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

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L95)

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

[src/leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L97)

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

[ILeafer](../interfaces/ILeafer.md).[event](../interfaces/ILeafer.md#event)

#### Inherited from

Group.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L100)

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

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L16)

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

[src/ui/packages/display/src/Leafer.ts:18](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L18)

___

### isApp

• `get` **isApp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isApp](../interfaces/ILeafer.md#isapp)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:29](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L29)

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

[src/ui/packages/display/src/Leafer.ts:30](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L30)

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

[src/ui/packages/display/src/Leafer.ts:32](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L32)

___

### imageReady

• `get` **imageReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[imageReady](../interfaces/ILeafer.md#imageready)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:42](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L42)

___

### layoutLocked

• `get` **layoutLocked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[layoutLocked](../interfaces/ILeafer.md#layoutlocked)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:43](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L43)

___

### FPS

• `get` **FPS**(): `number`

#### Returns

`number`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:78](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L78)

___

### cursorPoint

• `get` **cursorPoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[cursorPoint](../interfaces/ILeafer.md#cursorpoint)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:79](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L79)

___

### clientBounds

• `get` **clientBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[clientBounds](../interfaces/ILeafer.md#clientbounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:80](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L80)

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

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L32)

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

[src/ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L388)

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

[src/ui/packages/display/src/UI.ts:387](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L387)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isAutoWidth](../interfaces/ILeafer.md#isautowidth)

#### Inherited from

Group.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:390](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L390)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[isAutoHeight](../interfaces/ILeafer.md#isautoheight)

#### Inherited from

Group.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L391)

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

[src/ui/packages/display/src/UI.ts:398](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L398)

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

[src/leafer/packages/display/src/Leaf.ts:142](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L142)

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

[src/leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L148)

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

[src/leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L153)

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

[src/leafer/packages/display/src/Leaf.ts:162](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L162)

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

[src/leafer/packages/display/src/Leaf.ts:166](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L166)

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

[src/leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L196)

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

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L197)

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

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L199)

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

[src/leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L206)

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

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L210)

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

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L212)

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

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L214)

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

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L222)

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

[src/leafer/packages/display/src/Leaf.ts:224](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L224)

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

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L244)

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

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L246)

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

[src/leafer/packages/display/src/Leaf.ts:251](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L251)

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

[src/leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L255)

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

[src/leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L267)

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

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L273)

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

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L275)

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

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L281)

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

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L283)

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

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L286)

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

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L288)

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

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L290)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`, `_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateBoxBounds](../interfaces/ILeafer.md#__updateboxbounds)

#### Inherited from

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L294)

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

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L296)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateStrokeBounds](../interfaces/ILeafer.md#__updatestrokebounds)

#### Inherited from

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L298)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`_bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateRenderBounds](../interfaces/ILeafer.md#__updaterenderbounds)

#### Inherited from

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L300)

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

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L303)

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

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L305)

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

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L307)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateStrokeSpread](../interfaces/ILeafer.md#__updatestrokespread)

#### Inherited from

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:310](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L310)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[__updateRenderSpread](../interfaces/ILeafer.md#__updaterenderspread)

#### Inherited from

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L312)

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

[src/leafer/packages/display/src/Leaf.ts:319](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L319)

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

[src/leafer/packages/display/src/Leaf.ts:323](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L323)

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

[src/leafer/packages/display/src/Leaf.ts:331](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L331)

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

[src/leafer/packages/display/src/Leaf.ts:337](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L337)

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

[src/leafer/packages/display/src/Leaf.ts:345](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L345)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[getClampRenderScale](../interfaces/ILeafer.md#getclamprenderscale)

#### Inherited from

[Group](Group.md).[getClampRenderScale](Group.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:359](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L359)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`): [`IScaleData`](../interfaces/IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abs?` | `boolean` |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

[`IScaleData`](../interfaces/IScaleData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[getRenderScaleData](../interfaces/ILeafer.md#getrenderscaledata)

#### Inherited from

[Group](Group.md).[getRenderScaleData](Group.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L365)

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

[src/leafer/packages/display/src/Leaf.ts:374](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L374)

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

[src/leafer/packages/display/src/Leaf.ts:379](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L379)

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

[src/leafer/packages/display/src/Leaf.ts:383](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L383)

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

[src/leafer/packages/display/src/Leaf.ts:387](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L387)

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

[src/leafer/packages/display/src/Leaf.ts:392](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L392)

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

[src/leafer/packages/display/src/Leaf.ts:400](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L400)

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

[src/leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L408)

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

[src/leafer/packages/display/src/Leaf.ts:416](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L416)

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

[src/leafer/packages/display/src/Leaf.ts:424](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L424)

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

[src/leafer/packages/display/src/Leaf.ts:431](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L431)

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

[src/leafer/packages/display/src/Leaf.ts:435](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L435)

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

[src/leafer/packages/display/src/Leaf.ts:441](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L441)

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

[src/leafer/packages/display/src/Leaf.ts:447](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L447)

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

[src/leafer/packages/display/src/Leaf.ts:453](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L453)

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

[src/leafer/packages/display/src/Leaf.ts:457](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L457)

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

[src/leafer/packages/display/src/Leaf.ts:463](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L463)

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

[src/leafer/packages/display/src/Leaf.ts:467](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L467)

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

[src/leafer/packages/display/src/Leaf.ts:472](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L472)

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

[src/leafer/packages/display/src/Leaf.ts:478](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L478)

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

[src/leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L482)

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

[src/leafer/packages/display/src/Leaf.ts:488](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L488)

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

[src/leafer/packages/display/src/Leaf.ts:496](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L496)

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

[src/leafer/packages/display/src/Leaf.ts:500](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L500)

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

[src/leafer/packages/display/src/Leaf.ts:504](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L504)

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

[src/leafer/packages/display/src/Leaf.ts:509](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L509)

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

[src/leafer/packages/display/src/Leaf.ts:513](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L513)

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

[src/leafer/packages/display/src/Leaf.ts:517](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L517)

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

[src/leafer/packages/display/src/Leaf.ts:521](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L521)

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

[src/leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L526)

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

[src/leafer/packages/display/src/Leaf.ts:530](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L530)

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

[src/leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L534)

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

[src/leafer/packages/display/src/Leaf.ts:538](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L538)

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

[src/leafer/packages/display/src/Leaf.ts:542](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L542)

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

[src/leafer/packages/display/src/Leaf.ts:546](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L546)

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

[src/leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L553)

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

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L558)

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

[src/leafer/packages/display/src/Leaf.ts:561](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L561)

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

[src/leafer/packages/display/src/Leaf.ts:563](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L563)

___

### hit

▸ **hit**(`_world`, `_hitRadius?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_world` | [`IPointData`](../interfaces/IPointData.md) |
| `_hitRadius?` | `number` |

#### Returns

`boolean`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[hit](../interfaces/ILeafer.md#hit)

#### Inherited from

[Group](Group.md).[hit](Group.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:568](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L568)

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

[src/leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L570)

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

[src/leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L572)

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

[src/leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L574)

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

[src/leafer/packages/display/src/Leaf.ts:576](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L576)

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

[src/leafer/packages/display/src/Leaf.ts:578](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L578)

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

[src/leafer/packages/display/src/Leaf.ts:580](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L580)

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

[src/leafer/packages/display/src/Leaf.ts:582](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L582)

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

[src/leafer/packages/display/src/Leaf.ts:589](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L589)

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

[src/leafer/packages/display/src/Leaf.ts:591](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L591)

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

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L593)

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

[src/leafer/packages/display/src/Leaf.ts:596](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L596)

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

[ILeafer](../interfaces/ILeafer.md).[__renderShape](../interfaces/ILeafer.md#__rendershape)

#### Inherited from

[Group](Group.md).[__renderShape](Group.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L598)

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

[ILeafer](../interfaces/ILeafer.md).[__drawShape](../interfaces/ILeafer.md#__drawshape)

#### Inherited from

[Group](Group.md).[__drawShape](Group.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L600)

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

[src/leafer/packages/display/src/Leaf.ts:603](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L603)

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

[src/leafer/packages/display/src/Leaf.ts:605](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L605)

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

[src/leafer/packages/display/src/Leaf.ts:616](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L616)

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

[src/leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L625)

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

[src/leafer/packages/display/src/Leaf.ts:629](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L629)

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

[src/leafer/packages/display/src/Leaf.ts:633](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L633)

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

[src/leafer/packages/display/src/Leaf.ts:637](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L637)

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

[src/leafer/packages/display/src/Leaf.ts:643](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L643)

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

[src/leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L648)

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

[src/leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L656)

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

[ILeafer](../interfaces/ILeafer.md).[on](../interfaces/ILeafer.md#on)

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:665](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L665)

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

[src/leafer/packages/display/src/Leaf.ts:667](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L667)

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

[ILeafer](../interfaces/ILeafer.md).[on_](../interfaces/ILeafer.md#on_)

#### Inherited from

[Group](Group.md).[on_](Group.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:669](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L669)

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

[src/leafer/packages/display/src/Leaf.ts:671](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L671)

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

[ILeafer](../interfaces/ILeafer.md).[once](../interfaces/ILeafer.md#once)

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:673](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L673)

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

[src/leafer/packages/display/src/Leaf.ts:675](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L675)

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

[src/leafer/packages/display/src/Leaf.ts:677](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L677)

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

[src/leafer/packages/display/src/Leaf.ts:679](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L679)

___

### changeAttr

▸ **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

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

[src/leafer/packages/display/src/Leaf.ts:683](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L683)

___

### addAttr

▸ **addAttr**(`attrName`, `defaultValue`, `fn?`, `helpValue?`): `void`

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

[src/leafer/packages/display/src/Leaf.ts:687](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L687)

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

[src/leafer/packages/display/src/Leaf.ts:693](https://github.com/leaferjs/leafer/blob/60fd3e8e777defd91781ff8b04a601ebce9300f4/packages/display/src/Leaf.ts#L693)

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

[src/ui/packages/display/src/Group.ts:35](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L35)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__setBranch](Group.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:40](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L40)

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

[src/ui/packages/display/src/Group.ts:64](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L64)

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

[src/ui/packages/display/src/Group.ts:73](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L73)

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

[src/ui/packages/display/src/Group.ts:78](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L78)

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

[src/ui/packages/display/src/Group.ts:82](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L82)

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

[src/ui/packages/display/src/Group.ts:86](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L86)

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

[src/ui/packages/display/src/Group.ts:92](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L92)

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

[src/ui/packages/display/src/Group.ts:94](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L94)

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

[src/ui/packages/display/src/Group.ts:96](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L96)

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

[src/ui/packages/display/src/Group.ts:98](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L98)

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

[src/ui/packages/display/src/Group.ts:100](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Group.ts#L100)

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

[src/ui/packages/display/src/Leafer.ts:100](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L100)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[onInit](../interfaces/ILeafer.md#oninit)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:161](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L161)

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

[src/ui/packages/display/src/Leafer.ts:163](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L163)

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

[src/ui/packages/display/src/Leafer.ts:165](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L165)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[start](../interfaces/ILeafer.md#start)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:169](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L169)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[stop](../interfaces/ILeafer.md#stop)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:179](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L179)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[unlockLayout](../interfaces/ILeafer.md#unlocklayout)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:188](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L188)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[lockLayout](../interfaces/ILeafer.md#locklayout)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:193](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L193)

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

[src/ui/packages/display/src/Leafer.ts:198](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L198)

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

[src/ui/packages/display/src/Leafer.ts:203](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L203)

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

[src/ui/packages/display/src/Leafer.ts:211](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L211)

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

[src/ui/packages/display/src/Leafer.ts:215](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L215)

___

### updateLazyBounds

▸ **updateLazyBounds**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:220](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L220)

___

### \_\_doResize

▸ **__doResize**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | [`IScreenSizeData`](../interfaces/IScreenSizeData.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:224](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L224)

___

### \_\_onResize

▸ **__onResize**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IResizeEvent`](../interfaces/IResizeEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:233](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L233)

___

### \_\_setApp

▸ **__setApp**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:239](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L239)

___

### \_\_bindApp

▸ **__bindApp**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:241](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L241)

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

[src/ui/packages/display/src/Leafer.ts:249](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L249)

___

### \_\_checkAutoLayout

▸ **__checkAutoLayout**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:254](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L254)

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

[src/ui/packages/display/src/Leafer.ts:262](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L262)

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

[src/ui/packages/display/src/Leafer.ts:279](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L279)

___

### \_\_changeCanvasSize

▸ **__changeCanvasSize**(`attrName`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | [`ICanvasSizeAttr`](../modules.md#icanvassizeattr) |
| `newValue` | `number` |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:284](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L284)

___

### \_\_changeFill

▸ **__changeFill**(`newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newValue` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:292](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L292)

___

### \_\_onCreated

▸ **__onCreated**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:298](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L298)

___

### \_\_onReady

▸ **__onReady**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:302](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L302)

___

### \_\_onViewReady

▸ **__onViewReady**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:310](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L310)

___

### \_\_onLayoutEnd

▸ **__onLayoutEnd**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:317](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L317)

___

### \_\_onNextRender

▸ **__onNextRender**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:330](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L330)

___

### \_\_checkViewCompleted

▸ **__checkViewCompleted**(`emit?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `emit` | `boolean` | `true` |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:343](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L343)

___

### \_\_onWatchData

▸ **__onWatchData**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:353](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L353)

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

[src/ui/packages/display/src/Leafer.ts:359](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L359)

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

[src/ui/packages/display/src/Leafer.ts:365](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L365)

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

[src/ui/packages/display/src/Leafer.ts:370](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L370)

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

[src/ui/packages/display/src/Leafer.ts:375](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L375)

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

[src/ui/packages/display/src/Leafer.ts:382](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L382)

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

[ILeafer](../interfaces/ILeafer.md).[zoom](../interfaces/ILeafer.md#zoom)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:394](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L394)

___

### getValidMove

▸ **getValidMove**(`moveX`, `moveY`, `_checkLimit?`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moveX` | `number` |
| `moveY` | `number` |
| `_checkLimit?` | `boolean` |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[getValidMove](../interfaces/ILeafer.md#getvalidmove)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:400](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L400)

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

[src/ui/packages/display/src/Leafer.ts:401](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L401)

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

[src/ui/packages/display/src/Leafer.ts:404](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L404)

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

[src/ui/packages/display/src/Leafer.ts:408](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L408)

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

[src/ui/packages/display/src/Leafer.ts:412](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L412)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[updateClientBounds](../interfaces/ILeafer.md#updateclientbounds)

#### Defined in

[src/ui/packages/display/src/Leafer.ts:417](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L417)

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

[src/ui/packages/display/src/Leafer.ts:422](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L422)

___

### emitLeafer

▸ **emitLeafer**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:424](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L424)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:428](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L428)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/display/src/Leafer.ts:445](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L445)

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

[src/ui/packages/display/src/Leafer.ts:449](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/Leafer.ts#L449)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`Leafer`](Leafer.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Leafer`](Leafer.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \| `K` \| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`Leafer`](Leafer.md)[`K`]

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[get](../interfaces/ILeafer.md#get)

#### Inherited from

[Group](Group.md).[get](Group.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L418)

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

[src/ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L422)

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

[src/ui/packages/display/src/UI.ts:427](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L427)

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

[src/ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L429)

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

[src/ui/packages/display/src/UI.ts:431](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L431)

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

[src/ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L433)

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

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L438)

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

[src/ui/packages/display/src/UI.ts:445](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L445)

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

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L450)

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

[src/ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L454)

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

[src/ui/packages/display/src/UI.ts:461](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L461)

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

[src/ui/packages/display/src/UI.ts:469](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L469)

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

[src/ui/packages/display/src/UI.ts:474](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L474)

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

[src/ui/packages/display/src/UI.ts:479](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L479)

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

[src/ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L483)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`_paint`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_paint` | [`ILeafPaint`](../interfaces/ILeafPaint.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[drawImagePlaceholder](../interfaces/ILeafer.md#drawimageplaceholder)

#### Inherited from

[Group](Group.md).[drawImagePlaceholder](Group.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L491)

___

### animate

▸ **animate**(`keyframe?`, `_options?`, `_type?`, `_isTemp?`): [`IAnimate`](../interfaces/IAnimate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] \| [`IAnimation`](../modules.md#ianimation)[] |
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

[src/ui/packages/display/src/UI.ts:497](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L497)

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

[src/ui/packages/display/src/UI.ts:502](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L502)

___

### export

▸ **export**(`_filename`, `_options?`): `Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_filename` | `string` |
| `_options?` | `number` \| `boolean` \| [`IExportOptions`](../interfaces/IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](../interfaces/IExportResult.md)\>

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[export](../interfaces/ILeafer.md#export)

#### Inherited from

[Group](Group.md).[export](Group.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L508)

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

[src/ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L512)

___

### clone

▸ **clone**(`data?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`this`

#### Implementation of

[ILeafer](../interfaces/ILeafer.md).[clone](../interfaces/ILeafer.md#clone)

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:516](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L516)

___

### one

▸ **one**\<`T`\>(`this`, `data`, `x?`, `y?`, `width?`, `height?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UI`](UI.md)\<[`IUIInputData`](../interfaces/IUIInputData.md)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | (...`args`: `any`[]) => `T` |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `x?` | `number` |
| `y?` | `number` |
| `width?` | `number` |
| `height?` | `number` |

#### Returns

`T`

#### Inherited from

[Group](Group.md).[one](Group.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:523](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L523)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerUI](Group.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:527](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L527)

___

### registerData

▸ **registerData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIData`](../interfaces/IUIData.md) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerData](Group.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:531](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L531)

___

### setEditConfig

▸ **setEditConfig**(`_config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_config` | [`IEditorConfig`](../interfaces/IEditorConfig.md) \| [`IEditorConfigFunction`](../interfaces/IEditorConfigFunction.md) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setEditConfig](Group.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:538](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L538)

___

### setEditOuter

▸ **setEditOuter**(`_toolName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toolName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setEditOuter](Group.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L540)

___

### setEditInner

▸ **setEditInner**(`_editorName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_editorName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Inherited from

[Group](Group.md).[setEditInner](Group.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:542](https://github.com/leaferjs/leafer-ui/blob/359ab06c5cabeea51af5d887ce3cba2153ebc16c/packages/display/src/UI.ts#L542)
