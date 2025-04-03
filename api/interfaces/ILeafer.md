# Interface: ILeafer

## Hierarchy

- [`IGroup`](IGroup.md)

- [`ILeaferAttrData`](ILeaferAttrData.md)

- [`IControl`](IControl.md)

  ↳ **`ILeafer`**

  ↳↳ [`IApp`](IApp.md)

## Implemented by

- [`Leafer`](../classes/Leafer.md)

## Table of contents

### Properties

- [running](ILeafer.md#running)
- [created](ILeafer.md#created)
- [ready](ILeafer.md#ready)
- [viewReady](ILeafer.md#viewready)
- [imageReady](ILeafer.md#imageready)
- [viewCompleted](ILeafer.md#viewcompleted)
- [layoutLocked](ILeafer.md#layoutlocked)
- [transforming](ILeafer.md#transforming)
- [view](ILeafer.md#view)
- [canvas](ILeafer.md#canvas)
- [renderer](ILeafer.md#renderer)
- [watcher](ILeafer.md#watcher)
- [layouter](ILeafer.md#layouter)
- [selector](ILeafer.md#selector)
- [interaction](ILeafer.md#interaction)
- [canvasManager](ILeafer.md#canvasmanager)
- [hitCanvasManager](ILeafer.md#hitcanvasmanager)
- [autoLayout](ILeafer.md#autolayout)
- [lazyBounds](ILeafer.md#lazybounds)
- [config](ILeafer.md#config)
- [userConfig](ILeafer.md#userconfig)
- [cursorPoint](ILeafer.md#cursorpoint)
- [clientBounds](ILeafer.md#clientbounds)
- [leafs](ILeafer.md#leafs)
- [\_\_eventIds](ILeafer.md#__eventids)
- [\_\_nextRenderWait](ILeafer.md#__nextrenderwait)
- [id](ILeafer.md#id)
- [name](ILeafer.md#name)
- [className](ILeafer.md#classname)
- [blendMode](ILeafer.md#blendmode)
- [opacity](ILeafer.md#opacity)
- [visible](ILeafer.md#visible)
- [selected](ILeafer.md#selected)
- [disabled](ILeafer.md#disabled)
- [locked](ILeafer.md#locked)
- [zIndex](ILeafer.md#zindex)
- [mask](ILeafer.md#mask)
- [eraser](ILeafer.md#eraser)
- [filter](ILeafer.md#filter)
- [x](ILeafer.md#x)
- [y](ILeafer.md#y)
- [width](ILeafer.md#width)
- [height](ILeafer.md#height)
- [scaleX](ILeafer.md#scalex)
- [scaleY](ILeafer.md#scaley)
- [rotation](ILeafer.md#rotation)
- [skewX](ILeafer.md#skewx)
- [skewY](ILeafer.md#skewy)
- [scale](ILeafer.md#scale)
- [offsetX](ILeafer.md#offsetx)
- [offsetY](ILeafer.md#offsety)
- [scrollX](ILeafer.md#scrollx)
- [scrollY](ILeafer.md#scrolly)
- [origin](ILeafer.md#origin)
- [around](ILeafer.md#around)
- [lazy](ILeafer.md#lazy)
- [pixelRatio](ILeafer.md#pixelratio)
- [path](ILeafer.md#path)
- [windingRule](ILeafer.md#windingrule)
- [closed](ILeafer.md#closed)
- [flow](ILeafer.md#flow)
- [padding](ILeafer.md#padding)
- [gap](ILeafer.md#gap)
- [flowAlign](ILeafer.md#flowalign)
- [flowWrap](ILeafer.md#flowwrap)
- [itemBox](ILeafer.md#itembox)
- [inFlow](ILeafer.md#inflow)
- [autoWidth](ILeafer.md#autowidth)
- [autoHeight](ILeafer.md#autoheight)
- [lockRatio](ILeafer.md#lockratio)
- [autoBox](ILeafer.md#autobox)
- [widthRange](ILeafer.md#widthrange)
- [heightRange](ILeafer.md#heightrange)
- [draggable](ILeafer.md#draggable)
- [dragBounds](ILeafer.md#dragbounds)
- [editable](ILeafer.md#editable)
- [hittable](ILeafer.md#hittable)
- [hitFill](ILeafer.md#hitfill)
- [hitStroke](ILeafer.md#hitstroke)
- [hitBox](ILeafer.md#hitbox)
- [hitChildren](ILeafer.md#hitchildren)
- [hitSelf](ILeafer.md#hitself)
- [hitRadius](ILeafer.md#hitradius)
- [button](ILeafer.md#button)
- [cursor](ILeafer.md#cursor)
- [motionPath](ILeafer.md#motionpath)
- [motionPrecision](ILeafer.md#motionprecision)
- [motion](ILeafer.md#motion)
- [motionRotation](ILeafer.md#motionrotation)
- [normalStyle](ILeafer.md#normalstyle)
- [event](ILeafer.md#event)
- [data](ILeafer.md#data)
- [noBounds](ILeafer.md#nobounds)
- [tag](ILeafer.md#tag)
- [\_\_tag](ILeafer.md#__tag)
- [innerName](ILeafer.md#innername)
- [\_\_DataProcessor](ILeafer.md#__dataprocessor)
- [\_\_LayoutProcessor](ILeafer.md#__layoutprocessor)
- [leaferIsCreated](ILeafer.md#leaferiscreated)
- [leaferIsReady](ILeafer.md#leaferisready)
- [isLeafer](ILeafer.md#isleafer)
- [isBranch](ILeafer.md#isbranch)
- [isBranchLeaf](ILeafer.md#isbranchleaf)
- [isOutside](ILeafer.md#isoutside)
- [syncEventer](ILeafer.md#synceventer)
- [lockNormalStyle](ILeafer.md#locknormalstyle)
- [\_\_layout](ILeafer.md#__layout)
- [\_\_world](ILeafer.md#__world)
- [\_\_local](ILeafer.md#__local)
- [\_\_nowWorld](ILeafer.md#__nowworld)
- [\_\_cameraWorld](ILeafer.md#__cameraworld)
- [\_\_localMatrix](ILeafer.md#__localmatrix)
- [\_\_localBoxBounds](ILeafer.md#__localboxbounds)
- [\_\_worldOpacity](ILeafer.md#__worldopacity)
- [worldTransform](ILeafer.md#worldtransform)
- [localTransform](ILeafer.md#localtransform)
- [boxBounds](ILeafer.md#boxbounds)
- [renderBounds](ILeafer.md#renderbounds)
- [worldBoxBounds](ILeafer.md#worldboxbounds)
- [worldStrokeBounds](ILeafer.md#worldstrokebounds)
- [worldRenderBounds](ILeafer.md#worldrenderbounds)
- [worldOpacity](ILeafer.md#worldopacity)
- [\_\_level](ILeafer.md#__level)
- [\_\_tempNumber](ILeafer.md#__tempnumber)
- [\_\_worldFlipped](ILeafer.md#__worldflipped)
- [\_\_hasAutoLayout](ILeafer.md#__hasautolayout)
- [\_\_hasMotionPath](ILeafer.md#__hasmotionpath)
- [\_\_hasMask](ILeafer.md#__hasmask)
- [\_\_hasEraser](ILeafer.md#__haseraser)
- [\_\_hitCanvas](ILeafer.md#__hitcanvas)
- [\_\_flowBounds](ILeafer.md#__flowbounds)
- [\_\_widthGrow](ILeafer.md#__widthgrow)
- [\_\_heightGrow](ILeafer.md#__heightgrow)
- [\_\_hasGrow](ILeafer.md#__hasgrow)
- [\_\_onlyHitMask](ILeafer.md#__onlyhitmask)
- [\_\_ignoreHitWorld](ILeafer.md#__ignorehitworld)
- [\_\_inLazyBounds](ILeafer.md#__inlazybounds)
- [pathInputed](ILeafer.md#pathinputed)
- [destroyed](ILeafer.md#destroyed)
- [innerId](ILeafer.md#innerid)
- [\_\_captureMap](ILeafer.md#__capturemap)
- [\_\_bubbleMap](ILeafer.md#__bubblemap)
- [cornerRadius](ILeafer.md#cornerradius)
- [cornerSmoothing](ILeafer.md#cornersmoothing)
- [fill](ILeafer.md#fill)
- [stroke](ILeafer.md#stroke)
- [strokeAlign](ILeafer.md#strokealign)
- [strokeWidth](ILeafer.md#strokewidth)
- [strokeWidthFixed](ILeafer.md#strokewidthfixed)
- [strokeCap](ILeafer.md#strokecap)
- [strokeJoin](ILeafer.md#strokejoin)
- [dashPattern](ILeafer.md#dashpattern)
- [dashOffset](ILeafer.md#dashoffset)
- [miterLimit](ILeafer.md#miterlimit)
- [startArrow](ILeafer.md#startarrow)
- [endArrow](ILeafer.md#endarrow)
- [shadow](ILeafer.md#shadow)
- [innerShadow](ILeafer.md#innershadow)
- [blur](ILeafer.md#blur)
- [backgroundBlur](ILeafer.md#backgroundblur)
- [grayscale](ILeafer.md#grayscale)
- [\_\_](ILeafer.md#__)
- [children](ILeafer.md#children)
- [leafer](ILeafer.md#leafer)
- [isFrame](ILeafer.md#isframe)
- [isOverflow](ILeafer.md#isoverflow)
- [proxyData](ILeafer.md#proxydata)
- [\_\_proxyData](ILeafer.md#__proxydata)
- [animation](ILeafer.md#animation)
- [animationOut](ILeafer.md#animationout)
- [\_\_animate](ILeafer.md#__animate)
- [pen](ILeafer.md#pen)
- [transition](ILeafer.md#transition)
- [transitionOut](ILeafer.md#transitionout)
- [states](ILeafer.md#states)
- [state](ILeafer.md#state)
- [hoverStyle](ILeafer.md#hoverstyle)
- [pressStyle](ILeafer.md#pressstyle)
- [focusStyle](ILeafer.md#focusstyle)
- [selectedStyle](ILeafer.md#selectedstyle)
- [disabledStyle](ILeafer.md#disabledstyle)
- [placeholderStyle](ILeafer.md#placeholderstyle)
- [editConfig](ILeafer.md#editconfig)
- [editOuter](ILeafer.md#editouter)
- [editInner](ILeafer.md#editinner)
- [isApp](ILeafer.md#isapp)
- [app](ILeafer.md#app)
- [parentApp](ILeafer.md#parentapp)
- [parent](ILeafer.md#parent)
- [zoomLayer](ILeafer.md#zoomlayer)
- [editor](ILeafer.md#editor)
- [ground](ILeafer.md#ground)
- [tree](ILeafer.md#tree)
- [sky](ILeafer.md#sky)

### Methods

- [init](ILeafer.md#init)
- [start](ILeafer.md#start)
- [stop](ILeafer.md#stop)
- [unlockLayout](ILeafer.md#unlocklayout)
- [lockLayout](ILeafer.md#locklayout)
- [requestRender](ILeafer.md#requestrender)
- [updateCursor](ILeafer.md#updatecursor)
- [resize](ILeafer.md#resize)
- [waitReady](ILeafer.md#waitready)
- [waitViewReady](ILeafer.md#waitviewready)
- [waitViewCompleted](ILeafer.md#waitviewcompleted)
- [zoom](ILeafer.md#zoom)
- [getValidMove](ILeafer.md#getvalidmove)
- [getValidScale](ILeafer.md#getvalidscale)
- [getWorldPointByClient](ILeafer.md#getworldpointbyclient)
- [getPagePointByClient](ILeafer.md#getpagepointbyclient)
- [getClientPointByWorld](ILeafer.md#getclientpointbyworld)
- [updateClientBounds](ILeafer.md#updateclientbounds)
- [receiveEvent](ILeafer.md#receiveevent)
- [resetCustom](ILeafer.md#resetcustom)
- [waitParent](ILeafer.md#waitparent)
- [waitLeafer](ILeafer.md#waitleafer)
- [nextRender](ILeafer.md#nextrender)
- [removeNextRender](ILeafer.md#removenextrender)
- [\_\_bindLeafer](ILeafer.md#__bindleafer)
- [setAttr](ILeafer.md#setattr)
- [getAttr](ILeafer.md#getattr)
- [getComputedAttr](ILeafer.md#getcomputedattr)
- [toString](ILeafer.md#tostring)
- [toSVG](ILeafer.md#tosvg)
- [\_\_SVG](ILeafer.md#__svg)
- [toHTML](ILeafer.md#tohtml)
- [\_\_setAttr](ILeafer.md#__setattr)
- [\_\_getAttr](ILeafer.md#__getattr)
- [setProxyAttr](ILeafer.md#setproxyattr)
- [getProxyAttr](ILeafer.md#getproxyattr)
- [focus](ILeafer.md#focus)
- [updateState](ILeafer.md#updatestate)
- [updateLayout](ILeafer.md#updatelayout)
- [forceUpdate](ILeafer.md#forceupdate)
- [forceRender](ILeafer.md#forcerender)
- [\_\_extraUpdate](ILeafer.md#__extraupdate)
- [\_\_updateWorldMatrix](ILeafer.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](ILeafer.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](ILeafer.md#__updateworldbounds)
- [\_\_updateLocalBounds](ILeafer.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](ILeafer.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](ILeafer.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](ILeafer.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](ILeafer.md#__updatecontentbounds)
- [\_\_updateBoxBounds](ILeafer.md#__updateboxbounds)
- [\_\_updateStrokeBounds](ILeafer.md#__updatestrokebounds)
- [\_\_updateRenderBounds](ILeafer.md#__updaterenderbounds)
- [\_\_updateAutoLayout](ILeafer.md#__updateautolayout)
- [\_\_updateFlowLayout](ILeafer.md#__updateflowlayout)
- [\_\_updateNaturalSize](ILeafer.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](ILeafer.md#__updatestrokespread)
- [\_\_updateRenderSpread](ILeafer.md#__updaterenderspread)
- [\_\_onUpdateSize](ILeafer.md#__onupdatesize)
- [\_\_updateEraser](ILeafer.md#__updateeraser)
- [\_\_updateMask](ILeafer.md#__updatemask)
- [\_\_renderMask](ILeafer.md#__rendermask)
- [\_\_renderEraser](ILeafer.md#__rendereraser)
- [\_\_getNowWorld](ILeafer.md#__getnowworld)
- [getTransform](ILeafer.md#gettransform)
- [getBounds](ILeafer.md#getbounds)
- [getLayoutBounds](ILeafer.md#getlayoutbounds)
- [getLayoutPoints](ILeafer.md#getlayoutpoints)
- [getWorldBounds](ILeafer.md#getworldbounds)
- [worldToLocal](ILeafer.md#worldtolocal)
- [localToWorld](ILeafer.md#localtoworld)
- [worldToInner](ILeafer.md#worldtoinner)
- [innerToWorld](ILeafer.md#innertoworld)
- [getBoxPoint](ILeafer.md#getboxpoint)
- [getBoxPointByInner](ILeafer.md#getboxpointbyinner)
- [getInnerPoint](ILeafer.md#getinnerpoint)
- [getInnerPointByBox](ILeafer.md#getinnerpointbybox)
- [getInnerPointByLocal](ILeafer.md#getinnerpointbylocal)
- [getLocalPoint](ILeafer.md#getlocalpoint)
- [getLocalPointByInner](ILeafer.md#getlocalpointbyinner)
- [getPagePoint](ILeafer.md#getpagepoint)
- [getWorldPoint](ILeafer.md#getworldpoint)
- [getWorldPointByBox](ILeafer.md#getworldpointbybox)
- [getWorldPointByLocal](ILeafer.md#getworldpointbylocal)
- [getWorldPointByPage](ILeafer.md#getworldpointbypage)
- [setTransform](ILeafer.md#settransform)
- [transform](ILeafer.md#transform)
- [move](ILeafer.md#move)
- [moveInner](ILeafer.md#moveinner)
- [scaleOf](ILeafer.md#scaleof)
- [rotateOf](ILeafer.md#rotateof)
- [skewOf](ILeafer.md#skewof)
- [transformWorld](ILeafer.md#transformworld)
- [moveWorld](ILeafer.md#moveworld)
- [scaleOfWorld](ILeafer.md#scaleofworld)
- [rotateOfWorld](ILeafer.md#rotateofworld)
- [skewOfWorld](ILeafer.md#skewofworld)
- [flip](ILeafer.md#flip)
- [scaleResize](ILeafer.md#scaleresize)
- [\_\_scaleResize](ILeafer.md#__scaleresize)
- [resizeWidth](ILeafer.md#resizewidth)
- [resizeHeight](ILeafer.md#resizeheight)
- [\_\_hitWorld](ILeafer.md#__hitworld)
- [\_\_hit](ILeafer.md#__hit)
- [\_\_hitFill](ILeafer.md#__hitfill)
- [\_\_hitStroke](ILeafer.md#__hitstroke)
- [\_\_hitPixel](ILeafer.md#__hitpixel)
- [\_\_drawHitPath](ILeafer.md#__drawhitpath)
- [\_\_updateHitCanvas](ILeafer.md#__updatehitcanvas)
- [\_\_render](ILeafer.md#__render)
- [\_\_drawFast](ILeafer.md#__drawfast)
- [\_\_draw](ILeafer.md#__draw)
- [\_\_clip](ILeafer.md#__clip)
- [\_\_renderShape](ILeafer.md#__rendershape)
- [\_\_updateWorldOpacity](ILeafer.md#__updateworldopacity)
- [\_\_updateChange](ILeafer.md#__updatechange)
- [\_\_drawPath](ILeafer.md#__drawpath)
- [\_\_drawRenderPath](ILeafer.md#__drawrenderpath)
- [\_\_updatePath](ILeafer.md#__updatepath)
- [\_\_updateRenderPath](ILeafer.md#__updaterenderpath)
- [getMotionPathData](ILeafer.md#getmotionpathdata)
- [getMotionPoint](ILeafer.md#getmotionpoint)
- [getMotionTotal](ILeafer.md#getmotiontotal)
- [\_\_updateMotionPath](ILeafer.md#__updatemotionpath)
- [\_\_runAnimation](ILeafer.md#__runanimation)
- [\_\_emitLifeEvent](ILeafer.md#__emitlifeevent)
- [\_\_updateSortChildren](ILeafer.md#__updatesortchildren)
- [dropTo](ILeafer.md#dropto)
- [\_\_realSetAttr](ILeafer.md#__realsetattr)
- [destroyEventer](ILeafer.md#destroyeventer)
- [on](ILeafer.md#on)
- [off](ILeafer.md#off)
- [on\_](ILeafer.md#on_)
- [off\_](ILeafer.md#off_)
- [once](ILeafer.md#once)
- [emit](ILeafer.md#emit)
- [emitEvent](ILeafer.md#emitevent)
- [hasEvent](ILeafer.md#hasevent)
- [pick](ILeafer.md#pick)
- [add](ILeafer.md#add)
- [addAt](ILeafer.md#addat)
- [addAfter](ILeafer.md#addafter)
- [addBefore](ILeafer.md#addbefore)
- [addMany](ILeafer.md#addmany)
- [remove](ILeafer.md#remove)
- [removeAll](ILeafer.md#removeall)
- [clear](ILeafer.md#clear)
- [reset](ILeafer.md#reset)
- [set](ILeafer.md#set)
- [toJSON](ILeafer.md#tojson)
- [get](ILeafer.md#get)
- [createProxyData](ILeafer.md#createproxydata)
- [find](ILeafer.md#find)
- [findTag](ILeafer.md#findtag)
- [findOne](ILeafer.md#findone)
- [findId](ILeafer.md#findid)
- [getPath](ILeafer.md#getpath)
- [getPathString](ILeafer.md#getpathstring)
- [load](ILeafer.md#load)
- [\_\_drawPathByData](ILeafer.md#__drawpathbydata)
- [\_\_drawPathByBox](ILeafer.md#__drawpathbybox)
- [\_\_drawAfterFill](ILeafer.md#__drawafterfill)
- [\_\_drawContent](ILeafer.md#__drawcontent)
- [animate](ILeafer.md#animate)
- [killAnimate](ILeafer.md#killanimate)
- [export](ILeafer.md#export)
- [syncExport](ILeafer.md#syncexport)
- [clone](ILeafer.md#clone)
- [onInit](ILeafer.md#oninit)
- [initType](ILeafer.md#inittype)
- [destroy](ILeafer.md#destroy)

## Properties

### running

• **running**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[running](ILeaferAttrData.md#running)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:32](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L32)

___

### created

• **created**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[created](ILeaferAttrData.md#created)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:33](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L33)

___

### ready

• **ready**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[ready](ILeaferAttrData.md#ready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:34](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L34)

___

### viewReady

• **viewReady**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[viewReady](ILeaferAttrData.md#viewready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:35](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L35)

___

### imageReady

• **imageReady**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[imageReady](ILeaferAttrData.md#imageready)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:36](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L36)

___

### viewCompleted

• **viewCompleted**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[viewCompleted](ILeaferAttrData.md#viewcompleted)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:37](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L37)

___

### layoutLocked

• **layoutLocked**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[layoutLocked](ILeaferAttrData.md#layoutlocked)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:38](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L38)

___

### transforming

• **transforming**: `boolean`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[transforming](ILeaferAttrData.md#transforming)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:40](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L40)

___

### view

• **view**: `unknown`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[view](ILeaferAttrData.md#view)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:42](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L42)

___

### canvas

• **canvas**: [`ILeaferCanvas`](ILeaferCanvas.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[canvas](ILeaferAttrData.md#canvas)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:44](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L44)

___

### renderer

• **renderer**: [`IRenderer`](IRenderer.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[renderer](ILeaferAttrData.md#renderer)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L45)

___

### watcher

• **watcher**: [`IWatcher`](IWatcher.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[watcher](ILeaferAttrData.md#watcher)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L47)

___

### layouter

• **layouter**: [`ILayouter`](ILayouter.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[layouter](ILeaferAttrData.md#layouter)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:48](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L48)

___

### selector

• `Optional` **selector**: [`ISelector`](ISelector.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[selector](ILeaferAttrData.md#selector)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:50](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L50)

___

### interaction

• `Optional` **interaction**: [`IInteraction`](IInteraction.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[interaction](ILeaferAttrData.md#interaction)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:51](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L51)

___

### canvasManager

• **canvasManager**: [`ICanvasManager`](ICanvasManager.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[canvasManager](ILeaferAttrData.md#canvasmanager)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:53](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L53)

___

### hitCanvasManager

• `Optional` **hitCanvasManager**: [`IHitCanvasManager`](IHitCanvasManager.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[hitCanvasManager](ILeaferAttrData.md#hitcanvasmanager)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:54](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L54)

___

### autoLayout

• `Optional` **autoLayout**: [`IAutoBounds`](IAutoBounds.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[autoLayout](ILeaferAttrData.md#autolayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:56](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L56)

___

### lazyBounds

• **lazyBounds**: [`IBounds`](IBounds.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[lazyBounds](ILeaferAttrData.md#lazybounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:57](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L57)

___

### config

• **config**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[config](ILeaferAttrData.md#config)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:59](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L59)

___

### userConfig

• `Optional` **userConfig**: [`ILeaferConfig`](ILeaferConfig.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[userConfig](ILeaferAttrData.md#userconfig)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:60](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L60)

___

### cursorPoint

• `Readonly` **cursorPoint**: [`IPointData`](IPointData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[cursorPoint](ILeaferAttrData.md#cursorpoint)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:62](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L62)

___

### clientBounds

• `Readonly` **clientBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[clientBounds](ILeaferAttrData.md#clientbounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:63](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L63)

___

### leafs

• **leafs**: `number`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[leafs](ILeaferAttrData.md#leafs)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:64](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L64)

___

### \_\_eventIds

• **\_\_eventIds**: [`IEventListenerId`](IEventListenerId.md)[]

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[__eventIds](ILeaferAttrData.md#__eventids)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:66](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L66)

___

### \_\_nextRenderWait

• **\_\_nextRenderWait**: [`IFunction`](IFunction.md)[]

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[__nextRenderWait](ILeaferAttrData.md#__nextrenderwait)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:67](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L67)

___

### id

• `Optional` **id**: `string`

#### Inherited from

[IGroup](IGroup.md).[id](IGroup.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IGroup](IGroup.md).[name](IGroup.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IGroup](IGroup.md).[className](IGroup.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IGroup](IGroup.md).[blendMode](IGroup.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[opacity](IGroup.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IGroup](IGroup.md).[visible](IGroup.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[selected](IGroup.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[disabled](IGroup.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[locked](IGroup.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IGroup](IGroup.md).[zIndex](IGroup.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IGroup](IGroup.md).[mask](IGroup.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IGroup](IGroup.md).[eraser](IGroup.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IGroup](IGroup.md).[filter](IGroup.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IGroup](IGroup.md).[x](IGroup.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IGroup](IGroup.md).[y](IGroup.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IGroup](IGroup.md).[width](IGroup.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IGroup](IGroup.md).[height](IGroup.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleX](IGroup.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleY](IGroup.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IGroup](IGroup.md).[rotation](IGroup.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewX](IGroup.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewY](IGroup.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IGroup](IGroup.md).[scale](IGroup.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetX](IGroup.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetY](IGroup.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollX](IGroup.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollY](IGroup.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[origin](IGroup.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[around](IGroup.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lazy](IGroup.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IGroup](IGroup.md).[pixelRatio](IGroup.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IGroup](IGroup.md).[path](IGroup.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IGroup](IGroup.md).[windingRule](IGroup.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[closed](IGroup.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IGroup](IGroup.md).[flow](IGroup.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[padding](IGroup.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IGroup](IGroup.md).[gap](IGroup.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IGroup](IGroup.md).[flowAlign](IGroup.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IGroup](IGroup.md).[flowWrap](IGroup.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IGroup](IGroup.md).[itemBox](IGroup.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[inFlow](IGroup.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoWidth](IGroup.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoHeight](IGroup.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockRatio](IGroup.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IGroup](IGroup.md).[autoBox](IGroup.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[widthRange](IGroup.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[heightRange](IGroup.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IGroup](IGroup.md).[draggable](IGroup.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[dragBounds](IGroup.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[editable](IGroup.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hittable](IGroup.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitFill](IGroup.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitStroke](IGroup.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitBox](IGroup.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitChildren](IGroup.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitSelf](IGroup.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IGroup](IGroup.md).[hitRadius](IGroup.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[button](IGroup.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IGroup](IGroup.md).[cursor](IGroup.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionPath](IGroup.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IGroup](IGroup.md).[motionPrecision](IGroup.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IGroup](IGroup.md).[motion](IGroup.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionRotation](IGroup.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[normalStyle](IGroup.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IGroup](IGroup.md).[event](IGroup.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[data](IGroup.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L305)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[noBounds](IGroup.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L314)

___

### tag

• **tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[tag](IGroup.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[__tag](IGroup.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L434)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IGroup](IGroup.md).[innerName](IGroup.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__DataProcessor](IGroup.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__LayoutProcessor](IGroup.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L438)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsCreated](IGroup.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L445)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsReady](IGroup.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L446)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isLeafer](IGroup.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L449)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranch](IGroup.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L450)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranchLeaf](IGroup.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L451)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOutside](IGroup.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L452)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IGroup](IGroup.md).[syncEventer](IGroup.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L459)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockNormalStyle](IGroup.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IGroup](IGroup.md).[__layout](IGroup.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__world](IGroup.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L464)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__local](IGroup.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__nowWorld](IGroup.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__cameraWorld](IGroup.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[__localMatrix](IGroup.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__localBoxBounds](IGroup.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[__worldOpacity](IGroup.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L473)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[worldTransform](IGroup.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L475)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[localTransform](IGroup.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L476)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[boxBounds](IGroup.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L478)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[renderBounds](IGroup.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L479)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldBoxBounds](IGroup.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L480)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldStrokeBounds](IGroup.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L481)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldRenderBounds](IGroup.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L482)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[worldOpacity](IGroup.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IGroup](IGroup.md).[__level](IGroup.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IGroup](IGroup.md).[__tempNumber](IGroup.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__worldFlipped](IGroup.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasAutoLayout](IGroup.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMotionPath](IGroup.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMask](IGroup.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasEraser](IGroup.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IGroup](IGroup.md).[__hitCanvas](IGroup.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__flowBounds](IGroup.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__widthGrow](IGroup.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__heightGrow](IGroup.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasGrow](IGroup.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__onlyHitMask](IGroup.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__ignoreHitWorld](IGroup.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__inLazyBounds](IGroup.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L508)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[pathInputed](IGroup.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L510)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[destroyed](IGroup.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L512)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IGroup](IGroup.md).[innerId](IGroup.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__captureMap](IGroup.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__bubbleMap](IGroup.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L41)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[cornerRadius](IGroup.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IGroup](IGroup.md).[cornerSmoothing](IGroup.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IGroup](IGroup.md).[fill](IGroup.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IGroup](IGroup.md).[stroke](IGroup.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IGroup](IGroup.md).[strokeAlign](IGroup.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[strokeWidth](IGroup.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[strokeWidthFixed](IGroup.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IGroup](IGroup.md).[strokeCap](IGroup.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IGroup](IGroup.md).[strokeJoin](IGroup.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IGroup](IGroup.md).[dashPattern](IGroup.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IGroup](IGroup.md).[dashOffset](IGroup.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IGroup](IGroup.md).[miterLimit](IGroup.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroup](IGroup.md).[startArrow](IGroup.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IGroup](IGroup.md).[endArrow](IGroup.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[shadow](IGroup.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[innerShadow](IGroup.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[blur](IGroup.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[backgroundBlur](IGroup.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IGroup](IGroup.md).[grayscale](IGroup.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Inherited from

[IGroup](IGroup.md).[__](IGroup.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:348](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L348)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IGroup](IGroup.md).[children](IGroup.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:349](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L349)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IGroup](IGroup.md).[leafer](IGroup.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:368](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L368)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isFrame](IGroup.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:371](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L371)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOverflow](IGroup.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:372](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L372)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[proxyData](IGroup.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:374](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L374)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[__proxyData](IGroup.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:375](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L375)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animation](IGroup.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L377)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animationOut](IGroup.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L378)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IGroup](IGroup.md).[__animate](IGroup.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:382](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L382)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IGroup](IGroup.md).[pen](IGroup.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L384)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transition](IGroup.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:435](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L435)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transitionOut](IGroup.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:436](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L436)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IGroup](IGroup.md).[states](IGroup.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L438)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IGroup](IGroup.md).[state](IGroup.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:439](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L439)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[hoverStyle](IGroup.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L441)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[pressStyle](IGroup.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:442](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L442)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[focusStyle](IGroup.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L443)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[selectedStyle](IGroup.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L444)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[disabledStyle](IGroup.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L445)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[placeholderStyle](IGroup.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L446)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IGroup](IGroup.md).[editConfig](IGroup.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L448)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IGroup](IGroup.md).[editOuter](IGroup.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:449](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L449)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IGroup](IGroup.md).[editInner](IGroup.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L450)

___

### isApp

• `Readonly` **isApp**: `boolean`

#### Overrides

[IGroup](IGroup.md).[isApp](IGroup.md#isapp)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:7](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L7)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Overrides

[IGroup](IGroup.md).[app](IGroup.md#app)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:8](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L8)

___

### parentApp

• `Optional` **parentApp**: [`IApp`](IApp.md)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:9](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L9)

___

### parent

• `Optional` **parent**: [`IApp`](IApp.md)

#### Overrides

[IGroup](IGroup.md).[parent](IGroup.md#parent)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:10](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L10)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](IGroup.md)

#### Overrides

[IGroup](IGroup.md).[zoomLayer](IGroup.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:11](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L11)

___

### editor

• **editor**: [`IEditorBase`](IEditorBase.md)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:12](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L12)

___

### ground

• `Optional` **ground**: [`ILeafer`](ILeafer.md)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:14](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L14)

___

### tree

• `Optional` **tree**: [`ILeafer`](ILeafer.md)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:15](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L15)

___

### sky

• `Optional` **sky**: [`ILeafer`](ILeafer.md)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:16](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L16)

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

[leafer/packages/interface/src/app/ILeafer.ts:69](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L69)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[start](IControl.md#start)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:71](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L71)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Inherited from

[IControl](IControl.md).[stop](IControl.md#stop)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:72](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L72)

___

### unlockLayout

▸ **unlockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[unlockLayout](ILeaferAttrData.md#unlocklayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:74](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L74)

___

### lockLayout

▸ **lockLayout**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[lockLayout](ILeaferAttrData.md#locklayout)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:75](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L75)

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

[leafer/packages/interface/src/app/ILeafer.ts:77](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L77)

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

[leafer/packages/interface/src/app/ILeafer.ts:79](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L79)

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

[leafer/packages/interface/src/app/ILeafer.ts:80](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L80)

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

[leafer/packages/interface/src/app/ILeafer.ts:82](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L82)

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

[leafer/packages/interface/src/app/ILeafer.ts:83](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L83)

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

[leafer/packages/interface/src/app/ILeafer.ts:84](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L84)

___

### zoom

▸ **zoom**(`zoomType`, `padding?`, `fixedScale?`, `transition?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `zoomType` | [`IZoomType`](../modules.md#izoomtype) |
| `padding?` | [`IFourNumber`](../modules.md#ifournumber) |
| `fixedScale?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[zoom](ILeaferAttrData.md#zoom)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:86](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L86)

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

[ILeaferAttrData](ILeaferAttrData.md).[getValidMove](ILeaferAttrData.md#getvalidmove)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:87](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L87)

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

[leafer/packages/interface/src/app/ILeafer.ts:88](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L88)

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

[leafer/packages/interface/src/app/ILeafer.ts:90](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L90)

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

[leafer/packages/interface/src/app/ILeafer.ts:91](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L91)

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

[leafer/packages/interface/src/app/ILeafer.ts:92](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L92)

___

### updateClientBounds

▸ **updateClientBounds**(): `void`

#### Returns

`void`

#### Inherited from

[ILeaferAttrData](ILeaferAttrData.md).[updateClientBounds](ILeaferAttrData.md#updateclientbounds)

#### Defined in

[leafer/packages/interface/src/app/ILeafer.ts:93](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L93)

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

[leafer/packages/interface/src/app/ILeafer.ts:95](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/app/ILeafer.ts#L95)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[resetCustom](IGroup.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L515)

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

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L517)

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

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L518)

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

[leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L519)

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

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L520)

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

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L522)

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

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L526)

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

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L527)

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

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L528)

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

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L531)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toSVG](IGroup.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L532)

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

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L533)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toHTML](IGroup.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L534)

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

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L540)

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

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L541)

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

[leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L542)

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

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L543)

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

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L551)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateState](IGroup.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L553)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateLayout](IGroup.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L554)

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

[leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L555)

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

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__extraUpdate](IGroup.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L558)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldMatrix](IGroup.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalMatrix](IGroup.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldBounds](IGroup.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBounds](IGroup.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBoxBounds](IGroup.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalStrokeBounds](IGroup.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalRenderBounds](IGroup.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateContentBounds](IGroup.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L572)

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

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeBounds](IGroup.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderBounds](IGroup.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateAutoLayout](IGroup.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateFlowLayout](IGroup.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateNaturalSize](IGroup.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeSpread](IGroup.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderSpread](IGroup.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__onUpdateSize](IGroup.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L584)

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

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L587)

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

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L588)

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

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L589)

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

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L590)

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

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L593)

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

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L595)

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

[leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L597)

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

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L598)

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

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L599)

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

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L601)

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

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L603)

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

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L604)

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

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L605)

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

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L606)

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

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L608)

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

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L609)

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

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L610)

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

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L611)

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

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L612)

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

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L613)

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

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L614)

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

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L615)

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

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L616)

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

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L617)

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

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L618)

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

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L619)

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

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L622)

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

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L623)

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

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L624)

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

[leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L626)

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

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L627)

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

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L628)

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

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L629)

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

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L631)

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

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L632)

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

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L633)

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

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L634)

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

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L635)

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

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L637)

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

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L639)

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

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L640)

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

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L642)

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

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L643)

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

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L646)

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

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L647)

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

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L648)

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

[leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L649)

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

[leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L650)

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

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateHitCanvas](IGroup.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L652)

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

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L655)

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

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L656)

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

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L657)

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

[leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L659)

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

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldOpacity](IGroup.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateChange](IGroup.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L663)

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

[leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L666)

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

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updatePath](IGroup.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderPath](IGroup.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L669)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IGroup](IGroup.md).[getMotionPathData](IGroup.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L672)

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

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L673)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[getMotionTotal](IGroup.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateMotionPath](IGroup.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L676)

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

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L678)

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

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L680)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateSortChildren](IGroup.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L685)

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

[leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/ILeaf.ts#L688)

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

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[destroyEventer](IGroup.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L45)

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

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L46)

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

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L47)

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

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L48)

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

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L49)

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

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L50)

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

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L51)

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

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/8db572e/packages/interface/src/event/IEventer.ts#L52)

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

[ui/packages/interface/src/IUI.ts:350](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L350)

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

[ui/packages/interface/src/IUI.ts:351](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L351)

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

[ui/packages/interface/src/IUI.ts:352](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L352)

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

[ui/packages/interface/src/IUI.ts:353](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L353)

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

[ui/packages/interface/src/IUI.ts:354](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L354)

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

[ui/packages/interface/src/IUI.ts:355](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L355)

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

[ui/packages/interface/src/IUI.ts:356](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L356)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[removeAll](IGroup.md#removeall)

#### Defined in

[ui/packages/interface/src/IUI.ts:357](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L357)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[clear](IGroup.md#clear)

#### Defined in

[ui/packages/interface/src/IUI.ts:358](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L358)

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

[ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L386)

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

[ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L388)

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

[ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L389)

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

[ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L391)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[createProxyData](IGroup.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L392)

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

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L394)

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

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L395)

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

[ui/packages/interface/src/IUI.ts:396](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L396)

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

[ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L397)

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

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L399)

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

[ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L400)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[load](IGroup.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L402)

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

[ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L404)

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

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L405)

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

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L406)

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

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L407)

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

[ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L409)

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

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L410)

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

[ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L412)

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

[ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L413)

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

[ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/IUI.ts#L414)

___

### onInit

▸ **onInit**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:18](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L18)

___

### initType

▸ **initType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`ILeaferType`](../modules.md#ileafertype) |

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:19](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L19)

___

### destroy

▸ **destroy**(`sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sync?` | `boolean` |

#### Returns

`void`

#### Overrides

[IControl](IControl.md).[destroy](IControl.md#destroy)

#### Defined in

[ui/packages/interface/src/app/ILeafer.ts:20](https://github.com/leaferjs/leafer-ui/blob/63b7718/packages/interface/src/app/ILeafer.ts#L20)
