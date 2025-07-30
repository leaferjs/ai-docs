# Class: EditBox

## Hierarchy

- [`Group`](Group.md)

  ↳ **`EditBox`**

## Implements

- [`IEditBox`](../interfaces/IEditBox.md)

## Table of contents

### Constructors

- [constructor](EditBox.md#constructor)

### Properties

- [editor](EditBox.md#editor)
- [dragging](EditBox.md#dragging)
- [gesturing](EditBox.md#gesturing)
- [moving](EditBox.md#moving)
- [resizing](EditBox.md#resizing)
- [rotating](EditBox.md#rotating)
- [skewing](EditBox.md#skewing)
- [view](EditBox.md#view)
- [rect](EditBox.md#rect)
- [circle](EditBox.md#circle)
- [buttons](EditBox.md#buttons)
- [resizePoints](EditBox.md#resizepoints)
- [rotatePoints](EditBox.md#rotatepoints)
- [resizeLines](EditBox.md#resizelines)
- [enterPoint](EditBox.md#enterpoint)
- [dragPoint](EditBox.md#dragpoint)
- [dragStartData](EditBox.md#dragstartdata)
- [config](EditBox.md#config)
- [mergedConfig](EditBox.md#mergedconfig)
- [\_target](EditBox.md#_target)
- [\_transformTool](EditBox.md#_transformtool)
- [\_\_eventIds](EditBox.md#__eventids)
- [innerId](EditBox.md#innerid)
- [syncEventer](EditBox.md#synceventer)
- [lockNormalStyle](EditBox.md#locknormalstyle)
- [\_\_layout](EditBox.md#__layout)
- [\_\_world](EditBox.md#__world)
- [\_\_local](EditBox.md#__local)
- [\_\_nowWorld](EditBox.md#__nowworld)
- [\_\_cameraWorld](EditBox.md#__cameraworld)
- [\_\_worldOpacity](EditBox.md#__worldopacity)
- [\_\_level](EditBox.md#__level)
- [\_\_tempNumber](EditBox.md#__tempnumber)
- [\_\_hasAutoLayout](EditBox.md#__hasautolayout)
- [\_\_hasMask](EditBox.md#__hasmask)
- [\_\_hasEraser](EditBox.md#__haseraser)
- [\_\_hitCanvas](EditBox.md#__hitcanvas)
- [\_\_captureMap](EditBox.md#__capturemap)
- [\_\_bubbleMap](EditBox.md#__bubblemap)
- [\_\_hasLocalEvent](EditBox.md#__haslocalevent)
- [\_\_hasWorldEvent](EditBox.md#__hasworldevent)
- [destroyed](EditBox.md#destroyed)
- [\_\_](EditBox.md#__)
- [width](EditBox.md#width)
- [height](EditBox.md#height)
- [children](EditBox.md#children)
- [childlessJSON](EditBox.md#childlessjson)
- [proxyData](EditBox.md#proxydata)
- [\_\_proxyData](EditBox.md#__proxydata)
- [leafer](EditBox.md#leafer)
- [parent](EditBox.md#parent)
- [zoomLayer](EditBox.md#zoomlayer)
- [id](EditBox.md#id)
- [name](EditBox.md#name)
- [className](EditBox.md#classname)
- [blendMode](EditBox.md#blendmode)
- [opacity](EditBox.md#opacity)
- [visible](EditBox.md#visible)
- [locked](EditBox.md#locked)
- [dim](EditBox.md#dim)
- [dimskip](EditBox.md#dimskip)
- [zIndex](EditBox.md#zindex)
- [mask](EditBox.md#mask)
- [eraser](EditBox.md#eraser)
- [x](EditBox.md#x)
- [y](EditBox.md#y)
- [scaleX](EditBox.md#scalex)
- [scaleY](EditBox.md#scaley)
- [rotation](EditBox.md#rotation)
- [skewX](EditBox.md#skewx)
- [skewY](EditBox.md#skewy)
- [offsetX](EditBox.md#offsetx)
- [offsetY](EditBox.md#offsety)
- [scrollX](EditBox.md#scrollx)
- [scrollY](EditBox.md#scrolly)
- [origin](EditBox.md#origin)
- [around](EditBox.md#around)
- [lazy](EditBox.md#lazy)
- [pixelRatio](EditBox.md#pixelratio)
- [renderSpread](EditBox.md#renderspread)
- [path](EditBox.md#path)
- [windingRule](EditBox.md#windingrule)
- [closed](EditBox.md#closed)
- [flow](EditBox.md#flow)
- [padding](EditBox.md#padding)
- [gap](EditBox.md#gap)
- [flowAlign](EditBox.md#flowalign)
- [flowWrap](EditBox.md#flowwrap)
- [itemBox](EditBox.md#itembox)
- [inFlow](EditBox.md#inflow)
- [autoWidth](EditBox.md#autowidth)
- [autoHeight](EditBox.md#autoheight)
- [lockRatio](EditBox.md#lockratio)
- [autoBox](EditBox.md#autobox)
- [widthRange](EditBox.md#widthrange)
- [heightRange](EditBox.md#heightrange)
- [draggable](EditBox.md#draggable)
- [dragBounds](EditBox.md#dragbounds)
- [editable](EditBox.md#editable)
- [hittable](EditBox.md#hittable)
- [hitFill](EditBox.md#hitfill)
- [hitStroke](EditBox.md#hitstroke)
- [hitBox](EditBox.md#hitbox)
- [hitChildren](EditBox.md#hitchildren)
- [hitSelf](EditBox.md#hitself)
- [hitRadius](EditBox.md#hitradius)
- [cursor](EditBox.md#cursor)
- [fill](EditBox.md#fill)
- [stroke](EditBox.md#stroke)
- [strokeAlign](EditBox.md#strokealign)
- [strokeWidth](EditBox.md#strokewidth)
- [strokeWidthFixed](EditBox.md#strokewidthfixed)
- [strokeCap](EditBox.md#strokecap)
- [strokeJoin](EditBox.md#strokejoin)
- [dashPattern](EditBox.md#dashpattern)
- [dashOffset](EditBox.md#dashoffset)
- [miterLimit](EditBox.md#miterlimit)
- [startArrow](EditBox.md#startarrow)
- [endArrow](EditBox.md#endarrow)
- [cornerRadius](EditBox.md#cornerradius)
- [cornerSmoothing](EditBox.md#cornersmoothing)
- [shadow](EditBox.md#shadow)
- [innerShadow](EditBox.md#innershadow)
- [blur](EditBox.md#blur)
- [backgroundBlur](EditBox.md#backgroundblur)
- [grayscale](EditBox.md#grayscale)
- [filter](EditBox.md#filter)
- [animation](EditBox.md#animation)
- [animationOut](EditBox.md#animationout)
- [transition](EditBox.md#transition)
- [transitionOut](EditBox.md#transitionout)
- [motionPath](EditBox.md#motionpath)
- [motionPrecision](EditBox.md#motionprecision)
- [motion](EditBox.md#motion)
- [motionRotation](EditBox.md#motionrotation)
- [states](EditBox.md#states)
- [state](EditBox.md#state)
- [selected](EditBox.md#selected)
- [disabled](EditBox.md#disabled)
- [normalStyle](EditBox.md#normalstyle)
- [hoverStyle](EditBox.md#hoverstyle)
- [pressStyle](EditBox.md#pressstyle)
- [focusStyle](EditBox.md#focusstyle)
- [selectedStyle](EditBox.md#selectedstyle)
- [disabledStyle](EditBox.md#disabledstyle)
- [placeholderStyle](EditBox.md#placeholderstyle)
- [placeholderColor](EditBox.md#placeholdercolor)
- [placeholderDelay](EditBox.md#placeholderdelay)
- [button](EditBox.md#button)
- [editConfig](EditBox.md#editconfig)
- [editOuter](EditBox.md#editouter)
- [editInner](EditBox.md#editinner)
- [data](EditBox.md#data)
- [useFastShadow](EditBox.md#usefastshadow)
- [\_\_box](EditBox.md#__box)
- [\_\_animate](EditBox.md#__animate)

### Accessors

- [mergeConfig](EditBox.md#mergeconfig)
- [target](EditBox.md#target)
- [single](EditBox.md#single)
- [transformTool](EditBox.md#transformtool)
- [flipped](EditBox.md#flipped)
- [flippedX](EditBox.md#flippedx)
- [flippedY](EditBox.md#flippedy)
- [flippedOne](EditBox.md#flippedone)
- [canUse](EditBox.md#canuse)
- [canGesture](EditBox.md#cangesture)
- [tag](EditBox.md#tag)
- [innerName](EditBox.md#innername)
- [\_\_DataProcessor](EditBox.md#__dataprocessor)
- [\_\_LayoutProcessor](EditBox.md#__layoutprocessor)
- [leaferIsCreated](EditBox.md#leaferiscreated)
- [leaferIsReady](EditBox.md#leaferisready)
- [isLeafer](EditBox.md#isleafer)
- [isBranchLeaf](EditBox.md#isbranchleaf)
- [\_\_localMatrix](EditBox.md#__localmatrix)
- [\_\_localBoxBounds](EditBox.md#__localboxbounds)
- [worldTransform](EditBox.md#worldtransform)
- [localTransform](EditBox.md#localtransform)
- [boxBounds](EditBox.md#boxbounds)
- [renderBounds](EditBox.md#renderbounds)
- [worldBoxBounds](EditBox.md#worldboxbounds)
- [worldStrokeBounds](EditBox.md#worldstrokebounds)
- [worldRenderBounds](EditBox.md#worldrenderbounds)
- [worldOpacity](EditBox.md#worldopacity)
- [\_\_worldFlipped](EditBox.md#__worldflipped)
- [\_\_onlyHitMask](EditBox.md#__onlyhitmask)
- [\_\_ignoreHitWorld](EditBox.md#__ignorehitworld)
- [\_\_inLazyBounds](EditBox.md#__inlazybounds)
- [pathInputed](EditBox.md#pathinputed)
- [event](EditBox.md#event)
- [\_\_tag](EditBox.md#__tag)
- [isBranch](EditBox.md#isbranch)
- [app](EditBox.md#app)
- [isFrame](EditBox.md#isframe)
- [scale](EditBox.md#scale)
- [isAutoWidth](EditBox.md#isautowidth)
- [isAutoHeight](EditBox.md#isautoheight)
- [pen](EditBox.md#pen)

### Methods

- [create](EditBox.md#create)
- [load](EditBox.md#load)
- [update](EditBox.md#update)
- [unload](EditBox.md#unload)
- [updateBounds](EditBox.md#updatebounds)
- [layoutCircle](EditBox.md#layoutcircle)
- [layoutButtons](EditBox.md#layoutbuttons)
- [setButtonPosition](EditBox.md#setbuttonposition)
- [getPointStyle](EditBox.md#getpointstyle)
- [getPointsStyle](EditBox.md#getpointsstyle)
- [getMiddlePointsStyle](EditBox.md#getmiddlepointsstyle)
- [onDragStart](EditBox.md#ondragstart)
- [onDragEnd](EditBox.md#ondragend)
- [onDrag](EditBox.md#ondrag)
- [resetDoing](EditBox.md#resetdoing)
- [onMove](EditBox.md#onmove)
- [onScale](EditBox.md#onscale)
- [onRotate](EditBox.md#onrotate)
- [isHoldRotateKey](EditBox.md#isholdrotatekey)
- [onKey](EditBox.md#onkey)
- [onArrow](EditBox.md#onarrow)
- [onDoubleTap](EditBox.md#ondoubletap)
- [onLongPress](EditBox.md#onlongpress)
- [openInner](EditBox.md#openinner)
- [listenPointEvents](EditBox.md#listenpointevents)
- [\_\_listenEvents](EditBox.md#__listenevents)
- [\_\_removeListenEvents](EditBox.md#__removelistenevents)
- [destroy](EditBox.md#destroy)
- [resetCustom](EditBox.md#resetcustom)
- [waitParent](EditBox.md#waitparent)
- [waitLeafer](EditBox.md#waitleafer)
- [nextRender](EditBox.md#nextrender)
- [removeNextRender](EditBox.md#removenextrender)
- [\_\_bindLeafer](EditBox.md#__bindleafer)
- [setAttr](EditBox.md#setattr)
- [getAttr](EditBox.md#getattr)
- [getComputedAttr](EditBox.md#getcomputedattr)
- [toString](EditBox.md#tostring)
- [toSVG](EditBox.md#tosvg)
- [\_\_SVG](EditBox.md#__svg)
- [toHTML](EditBox.md#tohtml)
- [\_\_setAttr](EditBox.md#__setattr)
- [\_\_getAttr](EditBox.md#__getattr)
- [setProxyAttr](EditBox.md#setproxyattr)
- [getProxyAttr](EditBox.md#getproxyattr)
- [focus](EditBox.md#focus)
- [updateState](EditBox.md#updatestate)
- [updateLayout](EditBox.md#updatelayout)
- [forceUpdate](EditBox.md#forceupdate)
- [forceRender](EditBox.md#forcerender)
- [\_\_extraUpdate](EditBox.md#__extraupdate)
- [\_\_updateWorldMatrix](EditBox.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](EditBox.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](EditBox.md#__updateworldbounds)
- [\_\_updateLocalBounds](EditBox.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](EditBox.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](EditBox.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](EditBox.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](EditBox.md#__updateboxbounds)
- [\_\_updateContentBounds](EditBox.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](EditBox.md#__updatestrokebounds)
- [\_\_updateRenderBounds](EditBox.md#__updaterenderbounds)
- [\_\_updateAutoLayout](EditBox.md#__updateautolayout)
- [\_\_updateFlowLayout](EditBox.md#__updateflowlayout)
- [\_\_updateNaturalSize](EditBox.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](EditBox.md#__updatestrokespread)
- [\_\_updateRenderSpread](EditBox.md#__updaterenderspread)
- [\_\_updateEraser](EditBox.md#__updateeraser)
- [\_\_renderEraser](EditBox.md#__rendereraser)
- [\_\_updateMask](EditBox.md#__updatemask)
- [\_\_renderMask](EditBox.md#__rendermask)
- [\_\_getNowWorld](EditBox.md#__getnowworld)
- [getClampRenderScale](EditBox.md#getclamprenderscale)
- [getRenderScaleData](EditBox.md#getrenderscaledata)
- [getTransform](EditBox.md#gettransform)
- [getBounds](EditBox.md#getbounds)
- [getLayoutBounds](EditBox.md#getlayoutbounds)
- [getLayoutPoints](EditBox.md#getlayoutpoints)
- [getWorldBounds](EditBox.md#getworldbounds)
- [worldToLocal](EditBox.md#worldtolocal)
- [localToWorld](EditBox.md#localtoworld)
- [worldToInner](EditBox.md#worldtoinner)
- [innerToWorld](EditBox.md#innertoworld)
- [getBoxPoint](EditBox.md#getboxpoint)
- [getBoxPointByInner](EditBox.md#getboxpointbyinner)
- [getInnerPoint](EditBox.md#getinnerpoint)
- [getInnerPointByBox](EditBox.md#getinnerpointbybox)
- [getInnerPointByLocal](EditBox.md#getinnerpointbylocal)
- [getLocalPoint](EditBox.md#getlocalpoint)
- [getLocalPointByInner](EditBox.md#getlocalpointbyinner)
- [getPagePoint](EditBox.md#getpagepoint)
- [getWorldPoint](EditBox.md#getworldpoint)
- [getWorldPointByBox](EditBox.md#getworldpointbybox)
- [getWorldPointByLocal](EditBox.md#getworldpointbylocal)
- [getWorldPointByPage](EditBox.md#getworldpointbypage)
- [setTransform](EditBox.md#settransform)
- [transform](EditBox.md#transform)
- [move](EditBox.md#move)
- [moveInner](EditBox.md#moveinner)
- [scaleOf](EditBox.md#scaleof)
- [rotateOf](EditBox.md#rotateof)
- [skewOf](EditBox.md#skewof)
- [transformWorld](EditBox.md#transformworld)
- [moveWorld](EditBox.md#moveworld)
- [scaleOfWorld](EditBox.md#scaleofworld)
- [rotateOfWorld](EditBox.md#rotateofworld)
- [skewOfWorld](EditBox.md#skewofworld)
- [flip](EditBox.md#flip)
- [scaleResize](EditBox.md#scaleresize)
- [\_\_scaleResize](EditBox.md#__scaleresize)
- [resizeWidth](EditBox.md#resizewidth)
- [resizeHeight](EditBox.md#resizeheight)
- [hit](EditBox.md#hit)
- [\_\_hitWorld](EditBox.md#__hitworld)
- [\_\_hit](EditBox.md#__hit)
- [\_\_hitFill](EditBox.md#__hitfill)
- [\_\_hitStroke](EditBox.md#__hitstroke)
- [\_\_hitPixel](EditBox.md#__hitpixel)
- [\_\_drawHitPath](EditBox.md#__drawhitpath)
- [\_\_updateHitCanvas](EditBox.md#__updatehitcanvas)
- [\_\_render](EditBox.md#__render)
- [\_\_drawFast](EditBox.md#__drawfast)
- [\_\_draw](EditBox.md#__draw)
- [\_\_clip](EditBox.md#__clip)
- [\_\_renderShape](EditBox.md#__rendershape)
- [\_\_drawShape](EditBox.md#__drawshape)
- [\_\_updateWorldOpacity](EditBox.md#__updateworldopacity)
- [\_\_updateChange](EditBox.md#__updatechange)
- [\_\_updatePath](EditBox.md#__updatepath)
- [getMotionPathData](EditBox.md#getmotionpathdata)
- [getMotionPoint](EditBox.md#getmotionpoint)
- [getMotionTotal](EditBox.md#getmotiontotal)
- [\_\_updateMotionPath](EditBox.md#__updatemotionpath)
- [\_\_runAnimation](EditBox.md#__runanimation)
- [\_\_updateSortChildren](EditBox.md#__updatesortchildren)
- [dropTo](EditBox.md#dropto)
- [on](EditBox.md#on)
- [off](EditBox.md#off)
- [on\_](EditBox.md#on_)
- [off\_](EditBox.md#off_)
- [once](EditBox.md#once)
- [emit](EditBox.md#emit)
- [emitEvent](EditBox.md#emitevent)
- [hasEvent](EditBox.md#hasevent)
- [changeAttr](EditBox.md#changeattr)
- [addAttr](EditBox.md#addattr)
- [\_\_emitLifeEvent](EditBox.md#__emitlifeevent)
- [reset](EditBox.md#reset)
- [\_\_setBranch](EditBox.md#__setbranch)
- [set](EditBox.md#set)
- [toJSON](EditBox.md#tojson)
- [pick](EditBox.md#pick)
- [addAt](EditBox.md#addat)
- [addAfter](EditBox.md#addafter)
- [addBefore](EditBox.md#addbefore)
- [add](EditBox.md#add)
- [addMany](EditBox.md#addmany)
- [remove](EditBox.md#remove)
- [removeAll](EditBox.md#removeall)
- [clear](EditBox.md#clear)
- [get](EditBox.md#get)
- [createProxyData](EditBox.md#createproxydata)
- [find](EditBox.md#find)
- [findTag](EditBox.md#findtag)
- [findOne](EditBox.md#findone)
- [findId](EditBox.md#findid)
- [getPath](EditBox.md#getpath)
- [getPathString](EditBox.md#getpathstring)
- [\_\_onUpdateSize](EditBox.md#__onupdatesize)
- [\_\_updateRenderPath](EditBox.md#__updaterenderpath)
- [\_\_drawRenderPath](EditBox.md#__drawrenderpath)
- [\_\_drawPath](EditBox.md#__drawpath)
- [\_\_drawPathByData](EditBox.md#__drawpathbydata)
- [\_\_drawPathByBox](EditBox.md#__drawpathbybox)
- [drawImagePlaceholder](EditBox.md#drawimageplaceholder)
- [animate](EditBox.md#animate)
- [killAnimate](EditBox.md#killanimate)
- [export](EditBox.md#export)
- [syncExport](EditBox.md#syncexport)
- [clone](EditBox.md#clone)
- [one](EditBox.md#one)
- [registerUI](EditBox.md#registerui)
- [registerData](EditBox.md#registerdata)
- [setEditConfig](EditBox.md#seteditconfig)
- [setEditOuter](EditBox.md#seteditouter)
- [setEditInner](EditBox.md#seteditinner)

## Constructors

### constructor

• **new EditBox**(`editor`): [`EditBox`](EditBox.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `editor` | [`IEditor`](../interfaces/IEditor.md) |

#### Returns

[`EditBox`](EditBox.md)

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:74](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L74)

## Properties

### editor

• **editor**: [`IEditor`](../interfaces/IEditor.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[editor](../interfaces/IEditBox.md#editor)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:16](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L16)

___

### dragging

• **dragging**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dragging](../interfaces/IEditBox.md#dragging)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:18](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L18)

___

### gesturing

• **gesturing**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[gesturing](../interfaces/IEditBox.md#gesturing)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:19](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L19)

___

### moving

• **moving**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[moving](../interfaces/IEditBox.md#moving)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:21](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L21)

___

### resizing

• **resizing**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[resizing](../interfaces/IEditBox.md#resizing)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:22](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L22)

___

### rotating

• **rotating**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[rotating](../interfaces/IEditBox.md#rotating)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:23](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L23)

___

### skewing

• **skewing**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[skewing](../interfaces/IEditBox.md#skewing)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:24](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L24)

___

### view

• **view**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[view](../interfaces/IEditBox.md#view)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:26](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L26)

___

### rect

• **rect**: [`IBox`](../interfaces/IBox.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[rect](../interfaces/IEditBox.md#rect)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:28](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L28)

___

### circle

• **circle**: [`IEditPoint`](../interfaces/IEditPoint.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[circle](../interfaces/IEditBox.md#circle)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:29](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L29)

___

### buttons

• **buttons**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[buttons](../interfaces/IEditBox.md#buttons)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:30](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L30)

___

### resizePoints

• **resizePoints**: [`IEditPoint`](../interfaces/IEditPoint.md)[] = `[]`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[resizePoints](../interfaces/IEditBox.md#resizepoints)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:32](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L32)

___

### rotatePoints

• **rotatePoints**: [`IEditPoint`](../interfaces/IEditPoint.md)[] = `[]`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[rotatePoints](../interfaces/IEditBox.md#rotatepoints)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:33](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L33)

___

### resizeLines

• **resizeLines**: [`IEditPoint`](../interfaces/IEditPoint.md)[] = `[]`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[resizeLines](../interfaces/IEditBox.md#resizelines)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:34](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L34)

___

### enterPoint

• **enterPoint**: [`IEditPoint`](../interfaces/IEditPoint.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[enterPoint](../interfaces/IEditBox.md#enterpoint)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:36](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L36)

___

### dragPoint

• **dragPoint**: [`IEditPoint`](../interfaces/IEditPoint.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dragPoint](../interfaces/IEditBox.md#dragpoint)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:37](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L37)

___

### dragStartData

• **dragStartData**: [`IEditorDragStartData`](../interfaces/IEditorDragStartData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dragStartData](../interfaces/IEditBox.md#dragstartdata)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:39](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L39)

___

### config

• **config**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[config](../interfaces/IEditBox.md#config)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:41](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L41)

___

### mergedConfig

• **mergedConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[mergedConfig](../interfaces/IEditBox.md#mergedconfig)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:42](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L42)

___

### \_target

• `Protected` **\_target**: [`IUI`](../interfaces/IUI.md)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:49](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L49)

___

### \_transformTool

• `Protected` **\_transformTool**: [`ITransformTool`](../interfaces/ITransformTool.md)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:55](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L55)

___

### \_\_eventIds

• `Protected` **\_\_eventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:72](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L72)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[innerId](../interfaces/IEditBox.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[syncEventer](../interfaces/IEditBox.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[lockNormalStyle](../interfaces/IEditBox.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__layout](../interfaces/IEditBox.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__world](../interfaces/IEditBox.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__local](../interfaces/IEditBox.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__nowWorld](../interfaces/IEditBox.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__cameraWorld](../interfaces/IEditBox.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__worldOpacity](../interfaces/IEditBox.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L63)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__level](../interfaces/IEditBox.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L79)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__tempNumber](../interfaces/IEditBox.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L80)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hasAutoLayout](../interfaces/IEditBox.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L84)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hasMask](../interfaces/IEditBox.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L85)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hasEraser](../interfaces/IEditBox.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L86)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hitCanvas](../interfaces/IEditBox.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L87)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__captureMap](../interfaces/IEditBox.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L98)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__bubbleMap](../interfaces/IEditBox.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L99)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hasLocalEvent](../interfaces/IEditBox.md#__haslocalevent)

#### Inherited from

[Group](Group.md).[__hasLocalEvent](Group.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L101)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__hasWorldEvent](../interfaces/IEditBox.md#__hasworldevent)

#### Inherited from

[Group](Group.md).[__hasWorldEvent](Group.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L102)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[destroyed](../interfaces/IEditBox.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L107)

___

### \_\_

• **\_\_**: [`IGroupData`](../interfaces/IGroupData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__](../interfaces/IEditBox.md#__)

#### Inherited from

[Group](Group.md).[__](Group.md#__)

#### Defined in

[src/ui/packages/display/src/Group.ts:19](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L19)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[width](../interfaces/IEditBox.md#width)

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[src/ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[height](../interfaces/IEditBox.md#height)

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[src/ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[children](../interfaces/IEditBox.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L28)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[childlessJSON](../interfaces/IEditBox.md#childlessjson)

#### Inherited from

[Group](Group.md).[childlessJSON](Group.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L30)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[proxyData](../interfaces/IEditBox.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__proxyData](../interfaces/IEditBox.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[leafer](../interfaces/IEditBox.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[parent](../interfaces/IEditBox.md#parent)

#### Inherited from

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[zoomLayer](../interfaces/IEditBox.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[id](../interfaces/IEditBox.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[name](../interfaces/IEditBox.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[className](../interfaces/IEditBox.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[blendMode](../interfaces/IEditBox.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[opacity](../interfaces/IEditBox.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[visible](../interfaces/IEditBox.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[locked](../interfaces/IEditBox.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dim](../interfaces/IEditBox.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dimskip](../interfaces/IEditBox.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[zIndex](../interfaces/IEditBox.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[mask](../interfaces/IEditBox.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[eraser](../interfaces/IEditBox.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[x](../interfaces/IEditBox.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[y](../interfaces/IEditBox.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scaleX](../interfaces/IEditBox.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scaleY](../interfaces/IEditBox.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[rotation](../interfaces/IEditBox.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[skewX](../interfaces/IEditBox.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[skewY](../interfaces/IEditBox.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[offsetX](../interfaces/IEditBox.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[offsetY](../interfaces/IEditBox.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scrollX](../interfaces/IEditBox.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scrollY](../interfaces/IEditBox.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[origin](../interfaces/IEditBox.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[around](../interfaces/IEditBox.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[lazy](../interfaces/IEditBox.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[pixelRatio](../interfaces/IEditBox.md#pixelratio)

#### Inherited from

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L143)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[renderSpread](../interfaces/IEditBox.md#renderspread)

#### Inherited from

[Group](Group.md).[renderSpread](Group.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[path](../interfaces/IEditBox.md#path)

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[windingRule](../interfaces/IEditBox.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[closed](../interfaces/IEditBox.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L158)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flow](../interfaces/IEditBox.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L162)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[padding](../interfaces/IEditBox.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[gap](../interfaces/IEditBox.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flowAlign](../interfaces/IEditBox.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flowWrap](../interfaces/IEditBox.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[itemBox](../interfaces/IEditBox.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[inFlow](../interfaces/IEditBox.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[autoWidth](../interfaces/IEditBox.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[autoHeight](../interfaces/IEditBox.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[lockRatio](../interfaces/IEditBox.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[autoBox](../interfaces/IEditBox.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[widthRange](../interfaces/IEditBox.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[heightRange](../interfaces/IEditBox.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[draggable](../interfaces/IEditBox.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dragBounds](../interfaces/IEditBox.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L200)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[editable](../interfaces/IEditBox.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L204)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hittable](../interfaces/IEditBox.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:209](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L209)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitFill](../interfaces/IEditBox.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L212)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitStroke](../interfaces/IEditBox.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L215)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitBox](../interfaces/IEditBox.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L218)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitChildren](../interfaces/IEditBox.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L221)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitSelf](../interfaces/IEditBox.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L224)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hitRadius](../interfaces/IEditBox.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L227)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[cursor](../interfaces/IEditBox.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L230)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[fill](../interfaces/IEditBox.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L238)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[stroke](../interfaces/IEditBox.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:243](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L243)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[strokeAlign](../interfaces/IEditBox.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L246)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[strokeWidth](../interfaces/IEditBox.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L249)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[strokeWidthFixed](../interfaces/IEditBox.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L252)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[strokeCap](../interfaces/IEditBox.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L255)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[strokeJoin](../interfaces/IEditBox.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L258)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dashPattern](../interfaces/IEditBox.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L261)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[dashOffset](../interfaces/IEditBox.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L264)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[miterLimit](../interfaces/IEditBox.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L267)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[startArrow](../interfaces/IEditBox.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:272](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L272)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[endArrow](../interfaces/IEditBox.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L274)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[cornerRadius](../interfaces/IEditBox.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L279)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[cornerSmoothing](../interfaces/IEditBox.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L282)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[shadow](../interfaces/IEditBox.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:287](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L287)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[innerShadow](../interfaces/IEditBox.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L290)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[blur](../interfaces/IEditBox.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L293)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[backgroundBlur](../interfaces/IEditBox.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L296)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[grayscale](../interfaces/IEditBox.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L299)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[filter](../interfaces/IEditBox.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L302)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[animation](../interfaces/IEditBox.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:307](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L307)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[animationOut](../interfaces/IEditBox.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L309)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[transition](../interfaces/IEditBox.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L312)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[transitionOut](../interfaces/IEditBox.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L314)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[motionPath](../interfaces/IEditBox.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L319)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[motionPrecision](../interfaces/IEditBox.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L321)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[motion](../interfaces/IEditBox.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L324)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[motionRotation](../interfaces/IEditBox.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L326)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[states](../interfaces/IEditBox.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L331)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[state](../interfaces/IEditBox.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L333)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[selected](../interfaces/IEditBox.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L336)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[disabled](../interfaces/IEditBox.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L338)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[normalStyle](../interfaces/IEditBox.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L341)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[hoverStyle](../interfaces/IEditBox.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L343)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[pressStyle](../interfaces/IEditBox.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L345)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[focusStyle](../interfaces/IEditBox.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L347)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[selectedStyle](../interfaces/IEditBox.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L349)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[disabledStyle](../interfaces/IEditBox.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:351](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L351)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[placeholderStyle](../interfaces/IEditBox.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L354)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[placeholderColor](../interfaces/IEditBox.md#placeholdercolor)

#### Inherited from

[Group](Group.md).[placeholderColor](Group.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L357)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[placeholderDelay](../interfaces/IEditBox.md#placeholderdelay)

#### Inherited from

[Group](Group.md).[placeholderDelay](Group.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L360)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[button](../interfaces/IEditBox.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L363)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[editConfig](../interfaces/IEditBox.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L368)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[editOuter](../interfaces/IEditBox.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L370)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[editInner](../interfaces/IEditBox.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L372)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[data](../interfaces/IEditBox.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L377)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[useFastShadow](../interfaces/IEditBox.md#usefastshadow)

#### Inherited from

[Group](Group.md).[useFastShadow](Group.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L386)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__box](../interfaces/IEditBox.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L388)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__animate](../interfaces/IEditBox.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L389)

## Accessors

### mergeConfig

• `get` **mergeConfig**(): [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Returns

[`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[mergeConfig](../interfaces/IEditBox.md#mergeconfig)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:44](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L44)

___

### target

• `get` **target**(): [`IUI`](../interfaces/IUI.md)

#### Returns

[`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[target](../interfaces/IEditBox.md#target)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:50](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L50)

• `set` **target**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[target](../interfaces/IEditBox.md#target)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:51](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L51)

___

### single

• `get` **single**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[single](../interfaces/IEditBox.md#single)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:53](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L53)

___

### transformTool

• `get` **transformTool**(): [`ITransformTool`](../interfaces/ITransformTool.md)

#### Returns

[`ITransformTool`](../interfaces/ITransformTool.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[transformTool](../interfaces/IEditBox.md#transformtool)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:56](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L56)

• `set` **transformTool**(`tool`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tool` | [`ITransformTool`](../interfaces/ITransformTool.md) |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[transformTool](../interfaces/IEditBox.md#transformtool)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:57](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L57)

___

### flipped

• `get` **flipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flipped](../interfaces/IEditBox.md#flipped)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:60](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L60)

___

### flippedX

• `get` **flippedX**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flippedX](../interfaces/IEditBox.md#flippedx)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:61](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L61)

___

### flippedY

• `get` **flippedY**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flippedY](../interfaces/IEditBox.md#flippedy)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:62](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L62)

___

### flippedOne

• `get` **flippedOne**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[flippedOne](../interfaces/IEditBox.md#flippedone)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:63](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L63)

___

### canUse

• `get` **canUse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[canUse](../interfaces/IEditBox.md#canuse)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:65](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L65)

___

### canGesture

• `get` **canGesture**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[canGesture](../interfaces/IEditBox.md#cangesture)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:66](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L66)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[tag](../interfaces/IEditBox.md#tag)

#### Inherited from

Group.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L27)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[tag](../interfaces/IEditBox.md#tag)

#### Inherited from

Group.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L28)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[innerName](../interfaces/IEditBox.md#innername)

#### Inherited from

Group.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__DataProcessor](../interfaces/IEditBox.md#__dataprocessor)

#### Inherited from

Group.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__LayoutProcessor](../interfaces/IEditBox.md#__layoutprocessor)

#### Inherited from

Group.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[leaferIsCreated](../interfaces/IEditBox.md#leaferiscreated)

#### Inherited from

Group.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[leaferIsReady](../interfaces/IEditBox.md#leaferisready)

#### Inherited from

Group.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L42)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isLeafer](../interfaces/IEditBox.md#isleafer)

#### Inherited from

Group.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L44)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isBranchLeaf](../interfaces/IEditBox.md#isbranchleaf)

#### Inherited from

Group.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L46)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__localMatrix](../interfaces/IEditBox.md#__localmatrix)

#### Inherited from

Group.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__localBoxBounds](../interfaces/IEditBox.md#__localboxbounds)

#### Inherited from

Group.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[worldTransform](../interfaces/IEditBox.md#worldtransform)

#### Inherited from

Group.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[localTransform](../interfaces/IEditBox.md#localtransform)

#### Inherited from

Group.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L67)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[boxBounds](../interfaces/IEditBox.md#boxbounds)

#### Inherited from

Group.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L70)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[renderBounds](../interfaces/IEditBox.md#renderbounds)

#### Inherited from

Group.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L71)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[worldBoxBounds](../interfaces/IEditBox.md#worldboxbounds)

#### Inherited from

Group.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L72)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[worldStrokeBounds](../interfaces/IEditBox.md#worldstrokebounds)

#### Inherited from

Group.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L73)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[worldRenderBounds](../interfaces/IEditBox.md#worldrenderbounds)

#### Inherited from

Group.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L74)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[worldOpacity](../interfaces/IEditBox.md#worldopacity)

#### Inherited from

Group.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L77)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__worldFlipped](../interfaces/IEditBox.md#__worldflipped)

#### Inherited from

Group.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L82)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__onlyHitMask](../interfaces/IEditBox.md#__onlyhitmask)

#### Inherited from

Group.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L89)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__ignoreHitWorld](../interfaces/IEditBox.md#__ignorehitworld)

#### Inherited from

Group.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L90)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__inLazyBounds](../interfaces/IEditBox.md#__inlazybounds)

#### Inherited from

Group.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L91)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[pathInputed](../interfaces/IEditBox.md#pathinputed)

#### Inherited from

Group.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L93)

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

[IEditBox](../interfaces/IEditBox.md).[event](../interfaces/IEditBox.md#event)

#### Inherited from

Group.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L96)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__tag](../interfaces/IEditBox.md#__tag)

#### Inherited from

Group.\_\_tag

#### Defined in

[src/ui/packages/display/src/Group.ts:14](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isBranch](../interfaces/IEditBox.md#isbranch)

#### Inherited from

Group.isBranch

#### Defined in

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[app](../interfaces/IEditBox.md#app)

#### Inherited from

Group.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isFrame](../interfaces/IEditBox.md#isframe)

#### Inherited from

Group.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scale](../interfaces/IEditBox.md#scale)

#### Inherited from

Group.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L381)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[scale](../interfaces/IEditBox.md#scale)

#### Inherited from

Group.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L380)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isAutoWidth](../interfaces/IEditBox.md#isautowidth)

#### Inherited from

Group.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L383)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isAutoHeight](../interfaces/IEditBox.md#isautoheight)

#### Inherited from

Group.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L384)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[pen](../interfaces/IEditBox.md#pen)

#### Inherited from

Group.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L391)

## Methods

### create

▸ **create**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:82](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L82)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[load](../interfaces/IEditBox.md#load)

#### Overrides

[Group](Group.md).[load](Group.md#load)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:110](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L110)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[update](../interfaces/IEditBox.md#update)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:147](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L147)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[unload](../interfaces/IEditBox.md#unload)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:155](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L155)

___

### updateBounds

▸ **updateBounds**(`bounds`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds` | [`IBoundsData`](../interfaces/IBoundsData.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:161](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L161)

___

### layoutCircle

▸ **layoutCircle**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:222](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L222)

___

### layoutButtons

▸ **layoutButtons**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:228](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L228)

___

### setButtonPosition

▸ **setButtonPosition**(`buttons`, `direction`, `buttonsMargin`, `useMiddlePoint`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `buttons` | [`IUI`](../interfaces/IUI.md) |
| `direction` | `number` |
| `buttonsMargin` | `number` |
| `useMiddlePoint` | `boolean` |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:246](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L246)

___

### getPointStyle

▸ **getPointStyle**(`userStyle?`): [`IBoxInputData`](../interfaces/IBoxInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userStyle?` | [`IBoxInputData`](../interfaces/IBoxInputData.md) |

#### Returns

[`IBoxInputData`](../interfaces/IBoxInputData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getPointStyle](../interfaces/IEditBox.md#getpointstyle)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:264](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L264)

___

### getPointsStyle

▸ **getPointsStyle**(): [`IBoxInputData`](../interfaces/IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](../interfaces/IBoxInputData.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getPointsStyle](../interfaces/IEditBox.md#getpointsstyle)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:270](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L270)

___

### getMiddlePointsStyle

▸ **getMiddlePointsStyle**(): [`IBoxInputData`](../interfaces/IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](../interfaces/IBoxInputData.md)[]

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getMiddlePointsStyle](../interfaces/IEditBox.md#getmiddlepointsstyle)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:275](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L275)

___

### onDragStart

▸ **onDragStart**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:283](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L283)

___

### onDragEnd

▸ **onDragEnd**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:309](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L309)

___

### onDrag

▸ **onDrag**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`DragEvent`](DragEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:319](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L319)

___

### resetDoing

▸ **resetDoing**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:334](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L334)

___

### onMove

▸ **onMove**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`MoveEvent`](MoveEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:340](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L340)

___

### onScale

▸ **onScale**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`ZoomEvent`](ZoomEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:350](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L350)

___

### onRotate

▸ **onRotate**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`RotateEvent`](RotateEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:360](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L360)

___

### isHoldRotateKey

▸ **isHoldRotateKey**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IUIEvent`](../interfaces/IUIEvent.md) |

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[isHoldRotateKey](../interfaces/IEditBox.md#isholdrotatekey)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:371](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L371)

___

### onKey

▸ **onKey**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`KeyEvent`](KeyEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:377](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L377)

___

### onArrow

▸ **onArrow**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IKeyEvent`](../interfaces/IKeyEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[onArrow](../interfaces/IEditBox.md#onarrow)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:381](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L381)

___

### onDoubleTap

▸ **onDoubleTap**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent`](PointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:404](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L404)

___

### onLongPress

▸ **onLongPress**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent`](PointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:409](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L409)

___

### openInner

▸ **openInner**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`PointerEvent`](PointerEvent.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:414](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L414)

___

### listenPointEvents

▸ **listenPointEvents**(`point`, `type`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IEditPoint`](../interfaces/IEditPoint.md) |
| `type` | [`IEditPointType`](../modules.md#ieditpointtype) |
| `direction` | [`Direction9`](../enums/Direction9.md) |

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:434](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L434)

___

### \_\_listenEvents

▸ **__listenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:448](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L448)

___

### \_\_removeListenEvents

▸ **__removeListenEvents**(): `void`

#### Returns

`void`

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:479](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L479)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[destroy](../interfaces/IEditBox.md#destroy)

#### Overrides

[Group](Group.md).[destroy](Group.md#destroy)

#### Defined in

[src/in/packages/editor/src/display/EditBox.ts:483](https://github.com/leaferjs/leafer-in/blob/8da60ed3215e51d220002bda65a7ad66a16c0490/packages/editor/src/display/EditBox.ts#L483)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[resetCustom](../interfaces/IEditBox.md#resetcustom)

#### Inherited from

[Group](Group.md).[resetCustom](Group.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:137](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L137)

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

[IEditBox](../interfaces/IEditBox.md).[waitParent](../interfaces/IEditBox.md#waitparent)

#### Inherited from

[Group](Group.md).[waitParent](Group.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L143)

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

[IEditBox](../interfaces/IEditBox.md).[waitLeafer](../interfaces/IEditBox.md#waitleafer)

#### Inherited from

[Group](Group.md).[waitLeafer](Group.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L148)

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

[IEditBox](../interfaces/IEditBox.md).[nextRender](../interfaces/IEditBox.md#nextrender)

#### Inherited from

[Group](Group.md).[nextRender](Group.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L153)

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

[IEditBox](../interfaces/IEditBox.md).[removeNextRender](../interfaces/IEditBox.md#removenextrender)

#### Inherited from

[Group](Group.md).[removeNextRender](Group.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L157)

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

[IEditBox](../interfaces/IEditBox.md).[__bindLeafer](../interfaces/IEditBox.md#__bindleafer)

#### Inherited from

[Group](Group.md).[__bindLeafer](Group.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L161)

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

[IEditBox](../interfaces/IEditBox.md).[setAttr](../interfaces/IEditBox.md#setattr)

#### Inherited from

[Group](Group.md).[setAttr](Group.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:190](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L190)

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

[IEditBox](../interfaces/IEditBox.md).[getAttr](../interfaces/IEditBox.md#getattr)

#### Inherited from

[Group](Group.md).[getAttr](Group.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L191)

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

[IEditBox](../interfaces/IEditBox.md).[getComputedAttr](../interfaces/IEditBox.md#getcomputedattr)

#### Inherited from

[Group](Group.md).[getComputedAttr](Group.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:193](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L193)

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

[IEditBox](../interfaces/IEditBox.md).[toString](../interfaces/IEditBox.md#tostring)

#### Inherited from

[Group](Group.md).[toString](Group.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L200)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[toSVG](../interfaces/IEditBox.md#tosvg)

#### Inherited from

[Group](Group.md).[toSVG](Group.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L204)

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

[IEditBox](../interfaces/IEditBox.md).[__SVG](../interfaces/IEditBox.md#__svg)

#### Inherited from

[Group](Group.md).[__SVG](Group.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L206)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[toHTML](../interfaces/IEditBox.md#tohtml)

#### Inherited from

[Group](Group.md).[toHTML](Group.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L208)

___

### \_\_setAttr

▸ **__setAttr**(`_attrName`, `_newValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |
| `_newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`boolean`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__setAttr](../interfaces/IEditBox.md#__setattr)

#### Inherited from

[Group](Group.md).[__setAttr](Group.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L212)

___

### \_\_getAttr

▸ **__getAttr**(`_attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__getAttr](../interfaces/IEditBox.md#__getattr)

#### Inherited from

[Group](Group.md).[__getAttr](Group.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L214)

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

[IEditBox](../interfaces/IEditBox.md).[setProxyAttr](../interfaces/IEditBox.md#setproxyattr)

#### Inherited from

[Group](Group.md).[setProxyAttr](Group.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L216)

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

[IEditBox](../interfaces/IEditBox.md).[getProxyAttr](../interfaces/IEditBox.md#getproxyattr)

#### Inherited from

[Group](Group.md).[getProxyAttr](Group.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L218)

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

[IEditBox](../interfaces/IEditBox.md).[focus](../interfaces/IEditBox.md#focus)

#### Inherited from

[Group](Group.md).[focus](Group.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L238)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[updateState](../interfaces/IEditBox.md#updatestate)

#### Inherited from

[Group](Group.md).[updateState](Group.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L240)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[updateLayout](../interfaces/IEditBox.md#updatelayout)

#### Inherited from

[Group](Group.md).[updateLayout](Group.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L245)

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

[IEditBox](../interfaces/IEditBox.md).[forceUpdate](../interfaces/IEditBox.md#forceupdate)

#### Inherited from

[Group](Group.md).[forceUpdate](Group.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L249)

___

### forceRender

▸ **forceRender**(`_bounds?`, `_sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_bounds?` | [`IBoundsData`](../interfaces/IBoundsData.md) |
| `_sync?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[forceRender](../interfaces/IEditBox.md#forcerender)

#### Inherited from

[Group](Group.md).[forceRender](Group.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L257)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__extraUpdate](../interfaces/IEditBox.md#__extraupdate)

#### Inherited from

[Group](Group.md).[__extraUpdate](Group.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L261)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateWorldMatrix](../interfaces/IEditBox.md#__updateworldmatrix)

#### Inherited from

[Group](Group.md).[__updateWorldMatrix](Group.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L267)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateLocalMatrix](../interfaces/IEditBox.md#__updatelocalmatrix)

#### Inherited from

[Group](Group.md).[__updateLocalMatrix](Group.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateWorldBounds](../interfaces/IEditBox.md#__updateworldbounds)

#### Inherited from

[Group](Group.md).[__updateWorldBounds](Group.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateLocalBounds](../interfaces/IEditBox.md#__updatelocalbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBounds](Group.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L277)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateLocalBoxBounds](../interfaces/IEditBox.md#__updatelocalboxbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBoxBounds](Group.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateLocalStrokeBounds](../interfaces/IEditBox.md#__updatelocalstrokebounds)

#### Inherited from

[Group](Group.md).[__updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L282)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateLocalRenderBounds](../interfaces/IEditBox.md#__updatelocalrenderbounds)

#### Inherited from

[Group](Group.md).[__updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L284)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateBoxBounds](../interfaces/IEditBox.md#__updateboxbounds)

#### Inherited from

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L288)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateContentBounds](../interfaces/IEditBox.md#__updatecontentbounds)

#### Inherited from

[Group](Group.md).[__updateContentBounds](Group.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L290)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateStrokeBounds](../interfaces/IEditBox.md#__updatestrokebounds)

#### Inherited from

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L292)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateRenderBounds](../interfaces/IEditBox.md#__updaterenderbounds)

#### Inherited from

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L294)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateAutoLayout](../interfaces/IEditBox.md#__updateautolayout)

#### Inherited from

[Group](Group.md).[__updateAutoLayout](Group.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L297)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateFlowLayout](../interfaces/IEditBox.md#__updateflowlayout)

#### Inherited from

[Group](Group.md).[__updateFlowLayout](Group.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L299)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateNaturalSize](../interfaces/IEditBox.md#__updatenaturalsize)

#### Inherited from

[Group](Group.md).[__updateNaturalSize](Group.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L301)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateStrokeSpread](../interfaces/IEditBox.md#__updatestrokespread)

#### Inherited from

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:304](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L304)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateRenderSpread](../interfaces/IEditBox.md#__updaterenderspread)

#### Inherited from

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:306](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L306)

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

[IEditBox](../interfaces/IEditBox.md).[__updateEraser](../interfaces/IEditBox.md#__updateeraser)

#### Inherited from

[Group](Group.md).[__updateEraser](Group.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:313](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L313)

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

[IEditBox](../interfaces/IEditBox.md).[__renderEraser](../interfaces/IEditBox.md#__rendereraser)

#### Inherited from

[Group](Group.md).[__renderEraser](Group.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L317)

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

[IEditBox](../interfaces/IEditBox.md).[__updateMask](../interfaces/IEditBox.md#__updatemask)

#### Inherited from

[Group](Group.md).[__updateMask](Group.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:325](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L325)

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

[IEditBox](../interfaces/IEditBox.md).[__renderMask](../interfaces/IEditBox.md#__rendermask)

#### Inherited from

[Group](Group.md).[__renderMask](Group.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:331](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L331)

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

[IEditBox](../interfaces/IEditBox.md).[__getNowWorld](../interfaces/IEditBox.md#__getnowworld)

#### Inherited from

[Group](Group.md).[__getNowWorld](Group.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L339)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getClampRenderScale](../interfaces/IEditBox.md#getclamprenderscale)

#### Inherited from

[Group](Group.md).[getClampRenderScale](Group.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L352)

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

[IEditBox](../interfaces/IEditBox.md).[getRenderScaleData](../interfaces/IEditBox.md#getrenderscaledata)

#### Inherited from

[Group](Group.md).[getRenderScaleData](Group.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:358](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L358)

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

[IEditBox](../interfaces/IEditBox.md).[getTransform](../interfaces/IEditBox.md#gettransform)

#### Inherited from

[Group](Group.md).[getTransform](Group.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:367](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L367)

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

[IEditBox](../interfaces/IEditBox.md).[getBounds](../interfaces/IEditBox.md#getbounds)

#### Inherited from

[Group](Group.md).[getBounds](Group.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:372](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L372)

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

[IEditBox](../interfaces/IEditBox.md).[getLayoutBounds](../interfaces/IEditBox.md#getlayoutbounds)

#### Inherited from

[Group](Group.md).[getLayoutBounds](Group.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L376)

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

[IEditBox](../interfaces/IEditBox.md).[getLayoutPoints](../interfaces/IEditBox.md#getlayoutpoints)

#### Inherited from

[Group](Group.md).[getLayoutPoints](Group.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L380)

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

[IEditBox](../interfaces/IEditBox.md).[getWorldBounds](../interfaces/IEditBox.md#getworldbounds)

#### Inherited from

[Group](Group.md).[getWorldBounds](Group.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:385](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L385)

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

[IEditBox](../interfaces/IEditBox.md).[worldToLocal](../interfaces/IEditBox.md#worldtolocal)

#### Inherited from

[Group](Group.md).[worldToLocal](Group.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:393](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L393)

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

[IEditBox](../interfaces/IEditBox.md).[localToWorld](../interfaces/IEditBox.md#localtoworld)

#### Inherited from

[Group](Group.md).[localToWorld](Group.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:401](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L401)

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

[IEditBox](../interfaces/IEditBox.md).[worldToInner](../interfaces/IEditBox.md#worldtoinner)

#### Inherited from

[Group](Group.md).[worldToInner](Group.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:409](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L409)

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

[IEditBox](../interfaces/IEditBox.md).[innerToWorld](../interfaces/IEditBox.md#innertoworld)

#### Inherited from

[Group](Group.md).[innerToWorld](Group.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:417](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L417)

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

[IEditBox](../interfaces/IEditBox.md).[getBoxPoint](../interfaces/IEditBox.md#getboxpoint)

#### Inherited from

[Group](Group.md).[getBoxPoint](Group.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:424](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L424)

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

[IEditBox](../interfaces/IEditBox.md).[getBoxPointByInner](../interfaces/IEditBox.md#getboxpointbyinner)

#### Inherited from

[Group](Group.md).[getBoxPointByInner](Group.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L428)

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

[IEditBox](../interfaces/IEditBox.md).[getInnerPoint](../interfaces/IEditBox.md#getinnerpoint)

#### Inherited from

[Group](Group.md).[getInnerPoint](Group.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:434](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L434)

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

[IEditBox](../interfaces/IEditBox.md).[getInnerPointByBox](../interfaces/IEditBox.md#getinnerpointbybox)

#### Inherited from

[Group](Group.md).[getInnerPointByBox](Group.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L440)

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

[IEditBox](../interfaces/IEditBox.md).[getInnerPointByLocal](../interfaces/IEditBox.md#getinnerpointbylocal)

#### Inherited from

[Group](Group.md).[getInnerPointByLocal](Group.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:446](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L446)

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

[IEditBox](../interfaces/IEditBox.md).[getLocalPoint](../interfaces/IEditBox.md#getlocalpoint)

#### Inherited from

[Group](Group.md).[getLocalPoint](Group.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:450](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L450)

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

[IEditBox](../interfaces/IEditBox.md).[getLocalPointByInner](../interfaces/IEditBox.md#getlocalpointbyinner)

#### Inherited from

[Group](Group.md).[getLocalPointByInner](Group.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:456](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L456)

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

[IEditBox](../interfaces/IEditBox.md).[getPagePoint](../interfaces/IEditBox.md#getpagepoint)

#### Inherited from

[Group](Group.md).[getPagePoint](Group.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:460](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L460)

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

[IEditBox](../interfaces/IEditBox.md).[getWorldPoint](../interfaces/IEditBox.md#getworldpoint)

#### Inherited from

[Group](Group.md).[getWorldPoint](Group.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:465](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L465)

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

[IEditBox](../interfaces/IEditBox.md).[getWorldPointByBox](../interfaces/IEditBox.md#getworldpointbybox)

#### Inherited from

[Group](Group.md).[getWorldPointByBox](Group.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:471](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L471)

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

[IEditBox](../interfaces/IEditBox.md).[getWorldPointByLocal](../interfaces/IEditBox.md#getworldpointbylocal)

#### Inherited from

[Group](Group.md).[getWorldPointByLocal](Group.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:475](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L475)

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

[IEditBox](../interfaces/IEditBox.md).[getWorldPointByPage](../interfaces/IEditBox.md#getworldpointbypage)

#### Inherited from

[Group](Group.md).[getWorldPointByPage](Group.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:481](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L481)

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

[IEditBox](../interfaces/IEditBox.md).[setTransform](../interfaces/IEditBox.md#settransform)

#### Inherited from

[Group](Group.md).[setTransform](Group.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:489](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L489)

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

[IEditBox](../interfaces/IEditBox.md).[transform](../interfaces/IEditBox.md#transform)

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L493)

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

[IEditBox](../interfaces/IEditBox.md).[move](../interfaces/IEditBox.md#move)

#### Inherited from

[Group](Group.md).[move](Group.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L497)

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

[IEditBox](../interfaces/IEditBox.md).[moveInner](../interfaces/IEditBox.md#moveinner)

#### Inherited from

[Group](Group.md).[moveInner](Group.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:502](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L502)

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

[IEditBox](../interfaces/IEditBox.md).[scaleOf](../interfaces/IEditBox.md#scaleof)

#### Inherited from

[Group](Group.md).[scaleOf](Group.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L506)

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

[IEditBox](../interfaces/IEditBox.md).[rotateOf](../interfaces/IEditBox.md#rotateof)

#### Inherited from

[Group](Group.md).[rotateOf](Group.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L510)

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

[IEditBox](../interfaces/IEditBox.md).[skewOf](../interfaces/IEditBox.md#skewof)

#### Inherited from

[Group](Group.md).[skewOf](Group.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L514)

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

[IEditBox](../interfaces/IEditBox.md).[transformWorld](../interfaces/IEditBox.md#transformworld)

#### Inherited from

[Group](Group.md).[transformWorld](Group.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L519)

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

[IEditBox](../interfaces/IEditBox.md).[moveWorld](../interfaces/IEditBox.md#moveworld)

#### Inherited from

[Group](Group.md).[moveWorld](Group.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:523](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L523)

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

[IEditBox](../interfaces/IEditBox.md).[scaleOfWorld](../interfaces/IEditBox.md#scaleofworld)

#### Inherited from

[Group](Group.md).[scaleOfWorld](Group.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:527](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L527)

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

[IEditBox](../interfaces/IEditBox.md).[rotateOfWorld](../interfaces/IEditBox.md#rotateofworld)

#### Inherited from

[Group](Group.md).[rotateOfWorld](Group.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L531)

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

[IEditBox](../interfaces/IEditBox.md).[skewOfWorld](../interfaces/IEditBox.md#skewofworld)

#### Inherited from

[Group](Group.md).[skewOfWorld](Group.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:535](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L535)

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

[IEditBox](../interfaces/IEditBox.md).[flip](../interfaces/IEditBox.md#flip)

#### Inherited from

[Group](Group.md).[flip](Group.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L539)

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

[IEditBox](../interfaces/IEditBox.md).[scaleResize](../interfaces/IEditBox.md#scaleresize)

#### Inherited from

[Group](Group.md).[scaleResize](Group.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:546](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L546)

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

[IEditBox](../interfaces/IEditBox.md).[__scaleResize](../interfaces/IEditBox.md#__scaleresize)

#### Inherited from

[Group](Group.md).[__scaleResize](Group.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L551)

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

[IEditBox](../interfaces/IEditBox.md).[resizeWidth](../interfaces/IEditBox.md#resizewidth)

#### Inherited from

[Group](Group.md).[resizeWidth](Group.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:554](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L554)

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

[IEditBox](../interfaces/IEditBox.md).[resizeHeight](../interfaces/IEditBox.md#resizeheight)

#### Inherited from

[Group](Group.md).[resizeHeight](Group.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:556](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L556)

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

[IEditBox](../interfaces/IEditBox.md).[hit](../interfaces/IEditBox.md#hit)

#### Inherited from

[Group](Group.md).[hit](Group.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:561](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L561)

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

[IEditBox](../interfaces/IEditBox.md).[__hitWorld](../interfaces/IEditBox.md#__hitworld)

#### Inherited from

[Group](Group.md).[__hitWorld](Group.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:563](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L563)

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

[IEditBox](../interfaces/IEditBox.md).[__hit](../interfaces/IEditBox.md#__hit)

#### Inherited from

[Group](Group.md).[__hit](Group.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L565)

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

[IEditBox](../interfaces/IEditBox.md).[__hitFill](../interfaces/IEditBox.md#__hitfill)

#### Inherited from

[Group](Group.md).[__hitFill](Group.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L567)

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

[IEditBox](../interfaces/IEditBox.md).[__hitStroke](../interfaces/IEditBox.md#__hitstroke)

#### Inherited from

[Group](Group.md).[__hitStroke](Group.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L569)

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

[IEditBox](../interfaces/IEditBox.md).[__hitPixel](../interfaces/IEditBox.md#__hitpixel)

#### Inherited from

[Group](Group.md).[__hitPixel](Group.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L571)

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

[IEditBox](../interfaces/IEditBox.md).[__drawHitPath](../interfaces/IEditBox.md#__drawhitpath)

#### Inherited from

[Group](Group.md).[__drawHitPath](Group.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L573)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateHitCanvas](../interfaces/IEditBox.md#__updatehitcanvas)

#### Inherited from

[Group](Group.md).[__updateHitCanvas](Group.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L575)

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

[IEditBox](../interfaces/IEditBox.md).[__render](../interfaces/IEditBox.md#__render)

#### Inherited from

[Group](Group.md).[__render](Group.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:582](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L582)

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

[IEditBox](../interfaces/IEditBox.md).[__drawFast](../interfaces/IEditBox.md#__drawfast)

#### Inherited from

[Group](Group.md).[__drawFast](Group.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:584](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L584)

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

[IEditBox](../interfaces/IEditBox.md).[__draw](../interfaces/IEditBox.md#__draw)

#### Inherited from

[Group](Group.md).[__draw](Group.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:586](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L586)

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

[IEditBox](../interfaces/IEditBox.md).[__clip](../interfaces/IEditBox.md#__clip)

#### Inherited from

[Group](Group.md).[__clip](Group.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:589](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L589)

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

[IEditBox](../interfaces/IEditBox.md).[__renderShape](../interfaces/IEditBox.md#__rendershape)

#### Inherited from

[Group](Group.md).[__renderShape](Group.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:591](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L591)

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

[IEditBox](../interfaces/IEditBox.md).[__drawShape](../interfaces/IEditBox.md#__drawshape)

#### Inherited from

[Group](Group.md).[__drawShape](Group.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L593)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateWorldOpacity](../interfaces/IEditBox.md#__updateworldopacity)

#### Inherited from

[Group](Group.md).[__updateWorldOpacity](Group.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:596](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L596)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateChange](../interfaces/IEditBox.md#__updatechange)

#### Inherited from

[Group](Group.md).[__updateChange](Group.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L598)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updatePath](../interfaces/IEditBox.md#__updatepath)

#### Inherited from

[Group](Group.md).[__updatePath](Group.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:609](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L609)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getMotionPathData](../interfaces/IEditBox.md#getmotionpathdata)

#### Inherited from

[Group](Group.md).[getMotionPathData](Group.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:618](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L618)

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

[IEditBox](../interfaces/IEditBox.md).[getMotionPoint](../interfaces/IEditBox.md#getmotionpoint)

#### Inherited from

[Group](Group.md).[getMotionPoint](Group.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L622)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[getMotionTotal](../interfaces/IEditBox.md#getmotiontotal)

#### Inherited from

[Group](Group.md).[getMotionTotal](Group.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L626)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateMotionPath](../interfaces/IEditBox.md#__updatemotionpath)

#### Inherited from

[Group](Group.md).[__updateMotionPath](Group.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L630)

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

[IEditBox](../interfaces/IEditBox.md).[__runAnimation](../interfaces/IEditBox.md#__runanimation)

#### Inherited from

[Group](Group.md).[__runAnimation](Group.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L636)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateSortChildren](../interfaces/IEditBox.md#__updatesortchildren)

#### Inherited from

[Group](Group.md).[__updateSortChildren](Group.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:641](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L641)

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

[IEditBox](../interfaces/IEditBox.md).[dropTo](../interfaces/IEditBox.md#dropto)

#### Inherited from

[Group](Group.md).[dropTo](Group.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L649)

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

[IEditBox](../interfaces/IEditBox.md).[on](../interfaces/IEditBox.md#on)

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:658](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L658)

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

[IEditBox](../interfaces/IEditBox.md).[off](../interfaces/IEditBox.md#off)

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:660](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L660)

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

[IEditBox](../interfaces/IEditBox.md).[on_](../interfaces/IEditBox.md#on_)

#### Inherited from

[Group](Group.md).[on_](Group.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L662)

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

[IEditBox](../interfaces/IEditBox.md).[off_](../interfaces/IEditBox.md#off_)

#### Inherited from

[Group](Group.md).[off_](Group.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L664)

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

[IEditBox](../interfaces/IEditBox.md).[once](../interfaces/IEditBox.md#once)

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L666)

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

[IEditBox](../interfaces/IEditBox.md).[emit](../interfaces/IEditBox.md#emit)

#### Inherited from

[Group](Group.md).[emit](Group.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L668)

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

[IEditBox](../interfaces/IEditBox.md).[emitEvent](../interfaces/IEditBox.md#emitevent)

#### Inherited from

[Group](Group.md).[emitEvent](Group.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L670)

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

[IEditBox](../interfaces/IEditBox.md).[hasEvent](../interfaces/IEditBox.md#hasevent)

#### Inherited from

[Group](Group.md).[hasEvent](Group.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L672)

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

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L676)

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

[src/leafer/packages/display/src/Leaf.ts:680](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L680)

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

[IEditBox](../interfaces/IEditBox.md).[__emitLifeEvent](../interfaces/IEditBox.md#__emitlifeevent)

#### Inherited from

[Group](Group.md).[__emitLifeEvent](Group.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:686](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L686)

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

[IEditBox](../interfaces/IEditBox.md).[reset](../interfaces/IEditBox.md#reset)

#### Inherited from

[Group](Group.md).[reset](Group.md#reset)

#### Defined in

[src/ui/packages/display/src/Group.ts:36](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L36)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__setBranch](Group.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:41](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L41)

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

[IEditBox](../interfaces/IEditBox.md).[set](../interfaces/IEditBox.md#set)

#### Inherited from

[Group](Group.md).[set](Group.md#set)

#### Defined in

[src/ui/packages/display/src/Group.ts:48](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L48)

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

[IEditBox](../interfaces/IEditBox.md).[toJSON](../interfaces/IEditBox.md#tojson)

#### Inherited from

[Group](Group.md).[toJSON](Group.md#tojson)

#### Defined in

[src/ui/packages/display/src/Group.ts:65](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L65)

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

[IEditBox](../interfaces/IEditBox.md).[pick](../interfaces/IEditBox.md#pick)

#### Inherited from

[Group](Group.md).[pick](Group.md#pick)

#### Defined in

[src/ui/packages/display/src/Group.ts:74](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L74)

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

[IEditBox](../interfaces/IEditBox.md).[addAt](../interfaces/IEditBox.md#addat)

#### Inherited from

[Group](Group.md).[addAt](Group.md#addat)

#### Defined in

[src/ui/packages/display/src/Group.ts:79](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L79)

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

[IEditBox](../interfaces/IEditBox.md).[addAfter](../interfaces/IEditBox.md#addafter)

#### Inherited from

[Group](Group.md).[addAfter](Group.md#addafter)

#### Defined in

[src/ui/packages/display/src/Group.ts:83](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L83)

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

[IEditBox](../interfaces/IEditBox.md).[addBefore](../interfaces/IEditBox.md#addbefore)

#### Inherited from

[Group](Group.md).[addBefore](Group.md#addbefore)

#### Defined in

[src/ui/packages/display/src/Group.ts:87](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L87)

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

[IEditBox](../interfaces/IEditBox.md).[add](../interfaces/IEditBox.md#add)

#### Inherited from

[Group](Group.md).[add](Group.md#add)

#### Defined in

[src/ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L93)

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

[IEditBox](../interfaces/IEditBox.md).[addMany](../interfaces/IEditBox.md#addmany)

#### Inherited from

[Group](Group.md).[addMany](Group.md#addmany)

#### Defined in

[src/ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L95)

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

[IEditBox](../interfaces/IEditBox.md).[remove](../interfaces/IEditBox.md#remove)

#### Inherited from

[Group](Group.md).[remove](Group.md#remove)

#### Defined in

[src/ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L97)

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

[IEditBox](../interfaces/IEditBox.md).[removeAll](../interfaces/IEditBox.md#removeall)

#### Inherited from

[Group](Group.md).[removeAll](Group.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[clear](../interfaces/IEditBox.md#clear)

#### Inherited from

[Group](Group.md).[clear](Group.md#clear)

#### Defined in

[src/ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L101)

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

[IEditBox](../interfaces/IEditBox.md).[get](../interfaces/IEditBox.md#get)

#### Inherited from

[Group](Group.md).[get](Group.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L422)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[createProxyData](../interfaces/IEditBox.md#createproxydata)

#### Inherited from

[Group](Group.md).[createProxyData](Group.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L426)

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

[IEditBox](../interfaces/IEditBox.md).[find](../interfaces/IEditBox.md#find)

#### Inherited from

[Group](Group.md).[find](Group.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:431](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L431)

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

[IEditBox](../interfaces/IEditBox.md).[findTag](../interfaces/IEditBox.md#findtag)

#### Inherited from

[Group](Group.md).[findTag](Group.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L433)

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

[IEditBox](../interfaces/IEditBox.md).[findOne](../interfaces/IEditBox.md#findone)

#### Inherited from

[Group](Group.md).[findOne](Group.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:435](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L435)

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

[IEditBox](../interfaces/IEditBox.md).[findId](../interfaces/IEditBox.md#findid)

#### Inherited from

[Group](Group.md).[findId](Group.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:437](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L437)

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

[IEditBox](../interfaces/IEditBox.md).[getPath](../interfaces/IEditBox.md#getpath)

#### Inherited from

[Group](Group.md).[getPath](Group.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L442)

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

[IEditBox](../interfaces/IEditBox.md).[getPathString](../interfaces/IEditBox.md#getpathstring)

#### Inherited from

[Group](Group.md).[getPathString](Group.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L449)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__onUpdateSize](../interfaces/IEditBox.md#__onupdatesize)

#### Inherited from

[Group](Group.md).[__onUpdateSize](Group.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L458)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditBox](../interfaces/IEditBox.md).[__updateRenderPath](../interfaces/IEditBox.md#__updaterenderpath)

#### Inherited from

[Group](Group.md).[__updateRenderPath](Group.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:465](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L465)

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

[IEditBox](../interfaces/IEditBox.md).[__drawRenderPath](../interfaces/IEditBox.md#__drawrenderpath)

#### Inherited from

[Group](Group.md).[__drawRenderPath](Group.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:473](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L473)

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

[IEditBox](../interfaces/IEditBox.md).[__drawPath](../interfaces/IEditBox.md#__drawpath)

#### Inherited from

[Group](Group.md).[__drawPath](Group.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:478](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L478)

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

[IEditBox](../interfaces/IEditBox.md).[__drawPathByData](../interfaces/IEditBox.md#__drawpathbydata)

#### Inherited from

[Group](Group.md).[__drawPathByData](Group.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L483)

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

[IEditBox](../interfaces/IEditBox.md).[__drawPathByBox](../interfaces/IEditBox.md#__drawpathbybox)

#### Inherited from

[Group](Group.md).[__drawPathByBox](Group.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:487](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L487)

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

[IEditBox](../interfaces/IEditBox.md).[drawImagePlaceholder](../interfaces/IEditBox.md#drawimageplaceholder)

#### Inherited from

[Group](Group.md).[drawImagePlaceholder](Group.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:495](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L495)

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

[IEditBox](../interfaces/IEditBox.md).[animate](../interfaces/IEditBox.md#animate)

#### Inherited from

[Group](Group.md).[animate](Group.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L501)

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

[IEditBox](../interfaces/IEditBox.md).[killAnimate](../interfaces/IEditBox.md#killanimate)

#### Inherited from

[Group](Group.md).[killAnimate](Group.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L505)

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

[IEditBox](../interfaces/IEditBox.md).[export](../interfaces/IEditBox.md#export)

#### Inherited from

[Group](Group.md).[export](Group.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:511](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L511)

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

[IEditBox](../interfaces/IEditBox.md).[syncExport](../interfaces/IEditBox.md#syncexport)

#### Inherited from

[Group](Group.md).[syncExport](Group.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:515](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L515)

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

[IEditBox](../interfaces/IEditBox.md).[clone](../interfaces/IEditBox.md#clone)

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:519](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L519)

___

### one

▸ **one**(`data`, `x?`, `y?`, `width?`, `height?`): [`IUI`](../interfaces/IUI.md)

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

[src/ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L525)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerUI](Group.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:529](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L529)

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

[src/ui/packages/display/src/UI.ts:533](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L533)

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

[src/ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L540)

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

[src/ui/packages/display/src/UI.ts:542](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L542)

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

[src/ui/packages/display/src/UI.ts:544](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L544)
