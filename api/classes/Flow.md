# Class: Flow

## Hierarchy

- [`Box`](Box.md)

  ↳ **`Flow`**

## Implements

- [`IFlow`](../interfaces/IFlow.md)

## Table of contents

### Constructors

- [constructor](Flow.md#constructor)

### Properties

- [\_\_](Flow.md#__)
- [flow](Flow.md#flow)
- [innerId](Flow.md#innerid)
- [syncEventer](Flow.md#synceventer)
- [lockNormalStyle](Flow.md#locknormalstyle)
- [\_\_layout](Flow.md#__layout)
- [\_\_world](Flow.md#__world)
- [\_\_local](Flow.md#__local)
- [\_\_nowWorld](Flow.md#__nowworld)
- [\_\_cameraWorld](Flow.md#__cameraworld)
- [\_\_worldOpacity](Flow.md#__worldopacity)
- [\_\_level](Flow.md#__level)
- [\_\_tempNumber](Flow.md#__tempnumber)
- [\_\_hasAutoLayout](Flow.md#__hasautolayout)
- [\_\_hasMask](Flow.md#__hasmask)
- [\_\_hasEraser](Flow.md#__haseraser)
- [\_\_hitCanvas](Flow.md#__hitcanvas)
- [\_\_captureMap](Flow.md#__capturemap)
- [\_\_bubbleMap](Flow.md#__bubblemap)
- [\_\_hasLocalEvent](Flow.md#__haslocalevent)
- [\_\_hasWorldEvent](Flow.md#__hasworldevent)
- [destroyed](Flow.md#destroyed)
- [width](Flow.md#width)
- [height](Flow.md#height)
- [resizeChildren](Flow.md#resizechildren)
- [textBox](Flow.md#textbox)
- [overflow](Flow.md#overflow)
- [isOverflow](Flow.md#isoverflow)
- [scrollBar](Flow.md#scrollbar)
- [children](Flow.md#children)
- [childlessJSON](Flow.md#childlessjson)
- [proxyData](Flow.md#proxydata)
- [\_\_proxyData](Flow.md#__proxydata)
- [leafer](Flow.md#leafer)
- [parent](Flow.md#parent)
- [zoomLayer](Flow.md#zoomlayer)
- [id](Flow.md#id)
- [name](Flow.md#name)
- [className](Flow.md#classname)
- [blendMode](Flow.md#blendmode)
- [opacity](Flow.md#opacity)
- [visible](Flow.md#visible)
- [locked](Flow.md#locked)
- [dim](Flow.md#dim)
- [dimskip](Flow.md#dimskip)
- [zIndex](Flow.md#zindex)
- [mask](Flow.md#mask)
- [eraser](Flow.md#eraser)
- [x](Flow.md#x)
- [y](Flow.md#y)
- [scaleX](Flow.md#scalex)
- [scaleY](Flow.md#scaley)
- [rotation](Flow.md#rotation)
- [skewX](Flow.md#skewx)
- [skewY](Flow.md#skewy)
- [offsetX](Flow.md#offsetx)
- [offsetY](Flow.md#offsety)
- [scrollX](Flow.md#scrollx)
- [scrollY](Flow.md#scrolly)
- [origin](Flow.md#origin)
- [around](Flow.md#around)
- [lazy](Flow.md#lazy)
- [pixelRatio](Flow.md#pixelratio)
- [renderSpread](Flow.md#renderspread)
- [path](Flow.md#path)
- [windingRule](Flow.md#windingrule)
- [closed](Flow.md#closed)
- [padding](Flow.md#padding)
- [gap](Flow.md#gap)
- [flowAlign](Flow.md#flowalign)
- [flowWrap](Flow.md#flowwrap)
- [itemBox](Flow.md#itembox)
- [inFlow](Flow.md#inflow)
- [autoWidth](Flow.md#autowidth)
- [autoHeight](Flow.md#autoheight)
- [lockRatio](Flow.md#lockratio)
- [autoBox](Flow.md#autobox)
- [widthRange](Flow.md#widthrange)
- [heightRange](Flow.md#heightrange)
- [draggable](Flow.md#draggable)
- [dragBounds](Flow.md#dragbounds)
- [editable](Flow.md#editable)
- [hittable](Flow.md#hittable)
- [hitFill](Flow.md#hitfill)
- [hitStroke](Flow.md#hitstroke)
- [hitBox](Flow.md#hitbox)
- [hitChildren](Flow.md#hitchildren)
- [hitSelf](Flow.md#hitself)
- [hitRadius](Flow.md#hitradius)
- [cursor](Flow.md#cursor)
- [fill](Flow.md#fill)
- [stroke](Flow.md#stroke)
- [strokeAlign](Flow.md#strokealign)
- [strokeWidth](Flow.md#strokewidth)
- [strokeWidthFixed](Flow.md#strokewidthfixed)
- [strokeCap](Flow.md#strokecap)
- [strokeJoin](Flow.md#strokejoin)
- [dashPattern](Flow.md#dashpattern)
- [dashOffset](Flow.md#dashoffset)
- [miterLimit](Flow.md#miterlimit)
- [startArrow](Flow.md#startarrow)
- [endArrow](Flow.md#endarrow)
- [cornerRadius](Flow.md#cornerradius)
- [cornerSmoothing](Flow.md#cornersmoothing)
- [shadow](Flow.md#shadow)
- [innerShadow](Flow.md#innershadow)
- [blur](Flow.md#blur)
- [backgroundBlur](Flow.md#backgroundblur)
- [grayscale](Flow.md#grayscale)
- [filter](Flow.md#filter)
- [animation](Flow.md#animation)
- [animationOut](Flow.md#animationout)
- [transition](Flow.md#transition)
- [transitionOut](Flow.md#transitionout)
- [motionPath](Flow.md#motionpath)
- [motionPrecision](Flow.md#motionprecision)
- [motion](Flow.md#motion)
- [motionRotation](Flow.md#motionrotation)
- [states](Flow.md#states)
- [state](Flow.md#state)
- [selected](Flow.md#selected)
- [disabled](Flow.md#disabled)
- [normalStyle](Flow.md#normalstyle)
- [hoverStyle](Flow.md#hoverstyle)
- [pressStyle](Flow.md#pressstyle)
- [focusStyle](Flow.md#focusstyle)
- [selectedStyle](Flow.md#selectedstyle)
- [disabledStyle](Flow.md#disabledstyle)
- [placeholderStyle](Flow.md#placeholderstyle)
- [placeholderColor](Flow.md#placeholdercolor)
- [placeholderDelay](Flow.md#placeholderdelay)
- [button](Flow.md#button)
- [editConfig](Flow.md#editconfig)
- [editOuter](Flow.md#editouter)
- [editInner](Flow.md#editinner)
- [data](Flow.md#data)
- [useFastShadow](Flow.md#usefastshadow)
- [\_\_box](Flow.md#__box)
- [\_\_animate](Flow.md#__animate)

### Accessors

- [\_\_tag](Flow.md#__tag)
- [tag](Flow.md#tag)
- [innerName](Flow.md#innername)
- [\_\_DataProcessor](Flow.md#__dataprocessor)
- [\_\_LayoutProcessor](Flow.md#__layoutprocessor)
- [leaferIsCreated](Flow.md#leaferiscreated)
- [leaferIsReady](Flow.md#leaferisready)
- [isLeafer](Flow.md#isleafer)
- [\_\_localMatrix](Flow.md#__localmatrix)
- [\_\_localBoxBounds](Flow.md#__localboxbounds)
- [worldTransform](Flow.md#worldtransform)
- [localTransform](Flow.md#localtransform)
- [boxBounds](Flow.md#boxbounds)
- [renderBounds](Flow.md#renderbounds)
- [worldBoxBounds](Flow.md#worldboxbounds)
- [worldStrokeBounds](Flow.md#worldstrokebounds)
- [worldRenderBounds](Flow.md#worldrenderbounds)
- [worldOpacity](Flow.md#worldopacity)
- [\_\_worldFlipped](Flow.md#__worldflipped)
- [\_\_onlyHitMask](Flow.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Flow.md#__ignorehitworld)
- [\_\_inLazyBounds](Flow.md#__inlazybounds)
- [pathInputed](Flow.md#pathinputed)
- [event](Flow.md#event)
- [isBranchLeaf](Flow.md#isbranchleaf)
- [isBranch](Flow.md#isbranch)
- [app](Flow.md#app)
- [isFrame](Flow.md#isframe)
- [scale](Flow.md#scale)
- [isAutoWidth](Flow.md#isautowidth)
- [isAutoHeight](Flow.md#isautoheight)
- [pen](Flow.md#pen)

### Methods

- [resetCustom](Flow.md#resetcustom)
- [waitParent](Flow.md#waitparent)
- [waitLeafer](Flow.md#waitleafer)
- [nextRender](Flow.md#nextrender)
- [removeNextRender](Flow.md#removenextrender)
- [\_\_bindLeafer](Flow.md#__bindleafer)
- [setAttr](Flow.md#setattr)
- [getAttr](Flow.md#getattr)
- [getComputedAttr](Flow.md#getcomputedattr)
- [toString](Flow.md#tostring)
- [toSVG](Flow.md#tosvg)
- [\_\_SVG](Flow.md#__svg)
- [toHTML](Flow.md#tohtml)
- [\_\_setAttr](Flow.md#__setattr)
- [\_\_getAttr](Flow.md#__getattr)
- [setProxyAttr](Flow.md#setproxyattr)
- [getProxyAttr](Flow.md#getproxyattr)
- [focus](Flow.md#focus)
- [updateState](Flow.md#updatestate)
- [updateLayout](Flow.md#updatelayout)
- [forceUpdate](Flow.md#forceupdate)
- [forceRender](Flow.md#forcerender)
- [\_\_extraUpdate](Flow.md#__extraupdate)
- [\_\_updateWorldMatrix](Flow.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Flow.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Flow.md#__updateworldbounds)
- [\_\_updateLocalBounds](Flow.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Flow.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Flow.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Flow.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](Flow.md#__updatecontentbounds)
- [\_\_updateAutoLayout](Flow.md#__updateautolayout)
- [\_\_updateFlowLayout](Flow.md#__updateflowlayout)
- [\_\_updateNaturalSize](Flow.md#__updatenaturalsize)
- [\_\_updateEraser](Flow.md#__updateeraser)
- [\_\_renderEraser](Flow.md#__rendereraser)
- [\_\_updateMask](Flow.md#__updatemask)
- [\_\_renderMask](Flow.md#__rendermask)
- [\_\_getNowWorld](Flow.md#__getnowworld)
- [getClampRenderScale](Flow.md#getclamprenderscale)
- [getRenderScaleData](Flow.md#getrenderscaledata)
- [getTransform](Flow.md#gettransform)
- [getBounds](Flow.md#getbounds)
- [getLayoutBounds](Flow.md#getlayoutbounds)
- [getLayoutPoints](Flow.md#getlayoutpoints)
- [getWorldBounds](Flow.md#getworldbounds)
- [worldToLocal](Flow.md#worldtolocal)
- [localToWorld](Flow.md#localtoworld)
- [worldToInner](Flow.md#worldtoinner)
- [innerToWorld](Flow.md#innertoworld)
- [getBoxPoint](Flow.md#getboxpoint)
- [getBoxPointByInner](Flow.md#getboxpointbyinner)
- [getInnerPoint](Flow.md#getinnerpoint)
- [getInnerPointByBox](Flow.md#getinnerpointbybox)
- [getInnerPointByLocal](Flow.md#getinnerpointbylocal)
- [getLocalPoint](Flow.md#getlocalpoint)
- [getLocalPointByInner](Flow.md#getlocalpointbyinner)
- [getPagePoint](Flow.md#getpagepoint)
- [getWorldPoint](Flow.md#getworldpoint)
- [getWorldPointByBox](Flow.md#getworldpointbybox)
- [getWorldPointByLocal](Flow.md#getworldpointbylocal)
- [getWorldPointByPage](Flow.md#getworldpointbypage)
- [setTransform](Flow.md#settransform)
- [transform](Flow.md#transform)
- [move](Flow.md#move)
- [moveInner](Flow.md#moveinner)
- [scaleOf](Flow.md#scaleof)
- [rotateOf](Flow.md#rotateof)
- [skewOf](Flow.md#skewof)
- [transformWorld](Flow.md#transformworld)
- [moveWorld](Flow.md#moveworld)
- [scaleOfWorld](Flow.md#scaleofworld)
- [rotateOfWorld](Flow.md#rotateofworld)
- [skewOfWorld](Flow.md#skewofworld)
- [flip](Flow.md#flip)
- [scaleResize](Flow.md#scaleresize)
- [\_\_scaleResize](Flow.md#__scaleresize)
- [resizeWidth](Flow.md#resizewidth)
- [resizeHeight](Flow.md#resizeheight)
- [\_\_hitWorld](Flow.md#__hitworld)
- [\_\_hit](Flow.md#__hit)
- [\_\_hitFill](Flow.md#__hitfill)
- [\_\_hitStroke](Flow.md#__hitstroke)
- [\_\_hitPixel](Flow.md#__hitpixel)
- [\_\_drawHitPath](Flow.md#__drawhitpath)
- [\_\_updateHitCanvas](Flow.md#__updatehitcanvas)
- [\_\_drawFast](Flow.md#__drawfast)
- [\_\_draw](Flow.md#__draw)
- [\_\_clip](Flow.md#__clip)
- [\_\_renderShape](Flow.md#__rendershape)
- [\_\_drawShape](Flow.md#__drawshape)
- [\_\_updateWorldOpacity](Flow.md#__updateworldopacity)
- [\_\_updatePath](Flow.md#__updatepath)
- [getMotionPathData](Flow.md#getmotionpathdata)
- [getMotionPoint](Flow.md#getmotionpoint)
- [getMotionTotal](Flow.md#getmotiontotal)
- [\_\_updateMotionPath](Flow.md#__updatemotionpath)
- [\_\_runAnimation](Flow.md#__runanimation)
- [\_\_updateSortChildren](Flow.md#__updatesortchildren)
- [dropTo](Flow.md#dropto)
- [on](Flow.md#on)
- [off](Flow.md#off)
- [on\_](Flow.md#on_)
- [off\_](Flow.md#off_)
- [once](Flow.md#once)
- [emit](Flow.md#emit)
- [emitEvent](Flow.md#emitevent)
- [hasEvent](Flow.md#hasevent)
- [changeAttr](Flow.md#changeattr)
- [addAttr](Flow.md#addattr)
- [\_\_emitLifeEvent](Flow.md#__emitlifeevent)
- [\_\_updateStrokeSpread](Flow.md#__updatestrokespread)
- [\_\_updateRectRenderSpread](Flow.md#__updaterectrenderspread)
- [\_\_updateRenderSpread](Flow.md#__updaterenderspread)
- [\_\_updateRectBoxBounds](Flow.md#__updaterectboxbounds)
- [\_\_updateBoxBounds](Flow.md#__updateboxbounds)
- [\_\_updateStrokeBounds](Flow.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Flow.md#__updaterenderbounds)
- [\_\_updateRectRenderBounds](Flow.md#__updaterectrenderbounds)
- [\_\_updateScrollBar](Flow.md#__updatescrollbar)
- [\_\_updateRectChange](Flow.md#__updaterectchange)
- [\_\_updateChange](Flow.md#__updatechange)
- [\_\_renderRect](Flow.md#__renderrect)
- [\_\_renderGroup](Flow.md#__rendergroup)
- [\_\_render](Flow.md#__render)
- [\_\_drawContent](Flow.md#__drawcontent)
- [reset](Flow.md#reset)
- [\_\_setBranch](Flow.md#__setbranch)
- [set](Flow.md#set)
- [toJSON](Flow.md#tojson)
- [pick](Flow.md#pick)
- [addAt](Flow.md#addat)
- [addAfter](Flow.md#addafter)
- [addBefore](Flow.md#addbefore)
- [add](Flow.md#add)
- [addMany](Flow.md#addmany)
- [remove](Flow.md#remove)
- [removeAll](Flow.md#removeall)
- [clear](Flow.md#clear)
- [get](Flow.md#get)
- [createProxyData](Flow.md#createproxydata)
- [find](Flow.md#find)
- [findTag](Flow.md#findtag)
- [findOne](Flow.md#findone)
- [findId](Flow.md#findid)
- [getPath](Flow.md#getpath)
- [getPathString](Flow.md#getpathstring)
- [load](Flow.md#load)
- [\_\_onUpdateSize](Flow.md#__onupdatesize)
- [\_\_updateRenderPath](Flow.md#__updaterenderpath)
- [\_\_drawRenderPath](Flow.md#__drawrenderpath)
- [\_\_drawPath](Flow.md#__drawpath)
- [\_\_drawPathByData](Flow.md#__drawpathbydata)
- [\_\_drawPathByBox](Flow.md#__drawpathbybox)
- [drawImagePlaceholder](Flow.md#drawimageplaceholder)
- [animate](Flow.md#animate)
- [killAnimate](Flow.md#killanimate)
- [export](Flow.md#export)
- [syncExport](Flow.md#syncexport)
- [clone](Flow.md#clone)
- [one](Flow.md#one)
- [registerUI](Flow.md#registerui)
- [registerData](Flow.md#registerdata)
- [setEditConfig](Flow.md#seteditconfig)
- [setEditOuter](Flow.md#seteditouter)
- [setEditInner](Flow.md#seteditinner)
- [destroy](Flow.md#destroy)

## Constructors

### constructor

• **new Flow**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFlowInputData`](../interfaces/IFlowInputData.md) |

#### Overrides

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[in/packages/flow/src/Flow.ts:18](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/flow/src/Flow.ts#L18)

## Properties

### \_\_

• **\_\_**: [`IFlowData`](../interfaces/IFlowData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__](../interfaces/IFlow.md#__)

#### Overrides

[Box](Box.md).[__](Box.md#__)

#### Defined in

[in/packages/flow/src/Flow.ts:13](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/flow/src/Flow.ts#L13)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[flow](../interfaces/IFlow.md#flow)

#### Overrides

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[in/packages/flow/src/Flow.ts:16](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/flow/src/Flow.ts#L16)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[innerId](../interfaces/IFlow.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[syncEventer](../interfaces/IFlow.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[lockNormalStyle](../interfaces/IFlow.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__layout](../interfaces/IFlow.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__world](../interfaces/IFlow.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__local](../interfaces/IFlow.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__nowWorld](../interfaces/IFlow.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__cameraWorld](../interfaces/IFlow.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__worldOpacity](../interfaces/IFlow.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L63)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__level](../interfaces/IFlow.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L79)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__tempNumber](../interfaces/IFlow.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L80)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hasAutoLayout](../interfaces/IFlow.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L84)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hasMask](../interfaces/IFlow.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L85)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hasEraser](../interfaces/IFlow.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L86)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hitCanvas](../interfaces/IFlow.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L87)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__captureMap](../interfaces/IFlow.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L98)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__bubbleMap](../interfaces/IFlow.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L99)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hasLocalEvent](../interfaces/IFlow.md#__haslocalevent)

#### Inherited from

[Box](Box.md).[__hasLocalEvent](Box.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L101)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__hasWorldEvent](../interfaces/IFlow.md#__hasworldevent)

#### Inherited from

[Box](Box.md).[__hasWorldEvent](Box.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L102)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[destroyed](../interfaces/IFlow.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L107)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[width](../interfaces/IFlow.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[ui/packages/display/src/Box.ts:28](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L28)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[height](../interfaces/IFlow.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[ui/packages/display/src/Box.ts:31](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L31)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[resizeChildren](../interfaces/IFlow.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[ui/packages/display/src/Box.ts:34](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L34)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[textBox](../interfaces/IFlow.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[ui/packages/display/src/Box.ts:37](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L37)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[overflow](../interfaces/IFlow.md#overflow)

#### Inherited from

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[ui/packages/display/src/Box.ts:40](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L40)

___

### isOverflow

• **isOverflow**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isOverflow](../interfaces/IFlow.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[ui/packages/display/src/Box.ts:42](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L42)

___

### scrollBar

• `Optional` **scrollBar**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scrollBar](../interfaces/IFlow.md#scrollbar)

#### Inherited from

[Box](Box.md).[scrollBar](Box.md#scrollbar)

#### Defined in

[ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L44)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[children](../interfaces/IFlow.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L28)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[childlessJSON](../interfaces/IFlow.md#childlessjson)

#### Inherited from

[Box](Box.md).[childlessJSON](Box.md#childlessjson)

#### Defined in

[ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L30)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[proxyData](../interfaces/IFlow.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__proxyData](../interfaces/IFlow.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[leafer](../interfaces/IFlow.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[parent](../interfaces/IFlow.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[zoomLayer](../interfaces/IFlow.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[id](../interfaces/IFlow.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[name](../interfaces/IFlow.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[className](../interfaces/IFlow.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[blendMode](../interfaces/IFlow.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[opacity](../interfaces/IFlow.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IFlow](../interfaces/IFlow.md).[visible](../interfaces/IFlow.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[locked](../interfaces/IFlow.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[dim](../interfaces/IFlow.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[dimskip](../interfaces/IFlow.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[zIndex](../interfaces/IFlow.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[mask](../interfaces/IFlow.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[eraser](../interfaces/IFlow.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[x](../interfaces/IFlow.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[y](../interfaces/IFlow.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scaleX](../interfaces/IFlow.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scaleY](../interfaces/IFlow.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[rotation](../interfaces/IFlow.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[skewX](../interfaces/IFlow.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[skewY](../interfaces/IFlow.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[offsetX](../interfaces/IFlow.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[offsetY](../interfaces/IFlow.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scrollX](../interfaces/IFlow.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scrollY](../interfaces/IFlow.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[origin](../interfaces/IFlow.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[around](../interfaces/IFlow.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[lazy](../interfaces/IFlow.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[pixelRatio](../interfaces/IFlow.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L143)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[renderSpread](../interfaces/IFlow.md#renderspread)

#### Inherited from

[Box](Box.md).[renderSpread](Box.md#renderspread)

#### Defined in

[ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[path](../interfaces/IFlow.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[windingRule](../interfaces/IFlow.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[closed](../interfaces/IFlow.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[padding](../interfaces/IFlow.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[gap](../interfaces/IFlow.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[flowAlign](../interfaces/IFlow.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[flowWrap](../interfaces/IFlow.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[itemBox](../interfaces/IFlow.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[inFlow](../interfaces/IFlow.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[autoWidth](../interfaces/IFlow.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[autoHeight](../interfaces/IFlow.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[lockRatio](../interfaces/IFlow.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[autoBox](../interfaces/IFlow.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[widthRange](../interfaces/IFlow.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[heightRange](../interfaces/IFlow.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[draggable](../interfaces/IFlow.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[dragBounds](../interfaces/IFlow.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L200)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[editable](../interfaces/IFlow.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L204)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hittable](../interfaces/IFlow.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:209](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L209)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitFill](../interfaces/IFlow.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L212)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitStroke](../interfaces/IFlow.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L215)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitBox](../interfaces/IFlow.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L218)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitChildren](../interfaces/IFlow.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L221)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitSelf](../interfaces/IFlow.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L224)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hitRadius](../interfaces/IFlow.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L227)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[cursor](../interfaces/IFlow.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L230)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[fill](../interfaces/IFlow.md#fill)

#### Inherited from

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L238)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[stroke](../interfaces/IFlow.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:243](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L243)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[strokeAlign](../interfaces/IFlow.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L246)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[strokeWidth](../interfaces/IFlow.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L249)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[strokeWidthFixed](../interfaces/IFlow.md#strokewidthfixed)

#### Inherited from

[Box](Box.md).[strokeWidthFixed](Box.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L252)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[strokeCap](../interfaces/IFlow.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L255)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[strokeJoin](../interfaces/IFlow.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L258)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[dashPattern](../interfaces/IFlow.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L261)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[dashOffset](../interfaces/IFlow.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L264)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[miterLimit](../interfaces/IFlow.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L267)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[startArrow](../interfaces/IFlow.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:272](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L272)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[endArrow](../interfaces/IFlow.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L274)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[cornerRadius](../interfaces/IFlow.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L279)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[cornerSmoothing](../interfaces/IFlow.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L282)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[shadow](../interfaces/IFlow.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:287](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L287)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[innerShadow](../interfaces/IFlow.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L290)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[blur](../interfaces/IFlow.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L293)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[backgroundBlur](../interfaces/IFlow.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L296)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[grayscale](../interfaces/IFlow.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L299)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[filter](../interfaces/IFlow.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L302)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[animation](../interfaces/IFlow.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:307](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L307)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFlow](../interfaces/IFlow.md).[animationOut](../interfaces/IFlow.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L309)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[transition](../interfaces/IFlow.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L312)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[transitionOut](../interfaces/IFlow.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L314)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[motionPath](../interfaces/IFlow.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L319)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[motionPrecision](../interfaces/IFlow.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L321)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[motion](../interfaces/IFlow.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L324)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[motionRotation](../interfaces/IFlow.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L326)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[states](../interfaces/IFlow.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L331)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[state](../interfaces/IFlow.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L333)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[selected](../interfaces/IFlow.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L336)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[disabled](../interfaces/IFlow.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L338)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[normalStyle](../interfaces/IFlow.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L341)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[hoverStyle](../interfaces/IFlow.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L343)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[pressStyle](../interfaces/IFlow.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L345)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[focusStyle](../interfaces/IFlow.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L347)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[selectedStyle](../interfaces/IFlow.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L349)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[disabledStyle](../interfaces/IFlow.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:351](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L351)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[placeholderStyle](../interfaces/IFlow.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L354)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[placeholderColor](../interfaces/IFlow.md#placeholdercolor)

#### Inherited from

[Box](Box.md).[placeholderColor](Box.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L357)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[placeholderDelay](../interfaces/IFlow.md#placeholderdelay)

#### Inherited from

[Box](Box.md).[placeholderDelay](Box.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L360)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[button](../interfaces/IFlow.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L363)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[editConfig](../interfaces/IFlow.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L368)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[editOuter](../interfaces/IFlow.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L370)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[editInner](../interfaces/IFlow.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L372)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[data](../interfaces/IFlow.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L377)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[useFastShadow](../interfaces/IFlow.md#usefastshadow)

#### Inherited from

[Box](Box.md).[useFastShadow](Box.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L386)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__box](../interfaces/IFlow.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L388)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__animate](../interfaces/IFlow.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L389)

## Accessors

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__tag](../interfaces/IFlow.md#__tag)

#### Overrides

Box.\_\_tag

#### Defined in

[in/packages/flow/src/Flow.ts:10](https://github.com/leaferjs/leafer-in/blob/8a9bfb8/packages/flow/src/Flow.ts#L10)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[tag](../interfaces/IFlow.md#tag)

#### Inherited from

Box.tag

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

[IFlow](../interfaces/IFlow.md).[tag](../interfaces/IFlow.md#tag)

#### Inherited from

Box.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L28)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[innerName](../interfaces/IFlow.md#innername)

#### Inherited from

Box.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__DataProcessor](../interfaces/IFlow.md#__dataprocessor)

#### Inherited from

Box.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__LayoutProcessor](../interfaces/IFlow.md#__layoutprocessor)

#### Inherited from

Box.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[leaferIsCreated](../interfaces/IFlow.md#leaferiscreated)

#### Inherited from

Box.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[leaferIsReady](../interfaces/IFlow.md#leaferisready)

#### Inherited from

Box.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L42)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isLeafer](../interfaces/IFlow.md#isleafer)

#### Inherited from

Box.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__localMatrix](../interfaces/IFlow.md#__localmatrix)

#### Inherited from

Box.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__localBoxBounds](../interfaces/IFlow.md#__localboxbounds)

#### Inherited from

Box.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[worldTransform](../interfaces/IFlow.md#worldtransform)

#### Inherited from

Box.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[localTransform](../interfaces/IFlow.md#localtransform)

#### Inherited from

Box.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L67)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[boxBounds](../interfaces/IFlow.md#boxbounds)

#### Inherited from

Box.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L70)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[renderBounds](../interfaces/IFlow.md#renderbounds)

#### Inherited from

Box.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L71)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[worldBoxBounds](../interfaces/IFlow.md#worldboxbounds)

#### Inherited from

Box.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L72)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[worldStrokeBounds](../interfaces/IFlow.md#worldstrokebounds)

#### Inherited from

Box.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L73)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[worldRenderBounds](../interfaces/IFlow.md#worldrenderbounds)

#### Inherited from

Box.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L74)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[worldOpacity](../interfaces/IFlow.md#worldopacity)

#### Inherited from

Box.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L77)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__worldFlipped](../interfaces/IFlow.md#__worldflipped)

#### Inherited from

Box.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L82)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__onlyHitMask](../interfaces/IFlow.md#__onlyhitmask)

#### Inherited from

Box.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L89)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__ignoreHitWorld](../interfaces/IFlow.md#__ignorehitworld)

#### Inherited from

Box.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L90)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__inLazyBounds](../interfaces/IFlow.md#__inlazybounds)

#### Inherited from

Box.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L91)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[pathInputed](../interfaces/IFlow.md#pathinputed)

#### Inherited from

Box.pathInputed

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

[IFlow](../interfaces/IFlow.md).[event](../interfaces/IFlow.md#event)

#### Inherited from

Box.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L96)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isBranchLeaf](../interfaces/IFlow.md#isbranchleaf)

#### Inherited from

Box.isBranchLeaf

#### Defined in

[ui/packages/display/src/Box.ts:21](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L21)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isBranch](../interfaces/IFlow.md#isbranch)

#### Inherited from

Box.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[app](../interfaces/IFlow.md#app)

#### Inherited from

Box.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isFrame](../interfaces/IFlow.md#isframe)

#### Inherited from

Box.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[scale](../interfaces/IFlow.md#scale)

#### Inherited from

Box.scale

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

[IFlow](../interfaces/IFlow.md).[scale](../interfaces/IFlow.md#scale)

#### Inherited from

Box.scale

#### Defined in

[ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L380)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isAutoWidth](../interfaces/IFlow.md#isautowidth)

#### Inherited from

Box.isAutoWidth

#### Defined in

[ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L383)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[isAutoHeight](../interfaces/IFlow.md#isautoheight)

#### Inherited from

Box.isAutoHeight

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L384)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[pen](../interfaces/IFlow.md#pen)

#### Inherited from

Box.pen

#### Defined in

[ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L391)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[resetCustom](../interfaces/IFlow.md#resetcustom)

#### Inherited from

[Box](Box.md).[resetCustom](Box.md#resetcustom)

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

[IFlow](../interfaces/IFlow.md).[waitParent](../interfaces/IFlow.md#waitparent)

#### Inherited from

[Box](Box.md).[waitParent](Box.md#waitparent)

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

[IFlow](../interfaces/IFlow.md).[waitLeafer](../interfaces/IFlow.md#waitleafer)

#### Inherited from

[Box](Box.md).[waitLeafer](Box.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L148)

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

[IFlow](../interfaces/IFlow.md).[nextRender](../interfaces/IFlow.md#nextrender)

#### Inherited from

[Box](Box.md).[nextRender](Box.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L153)

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

[IFlow](../interfaces/IFlow.md).[removeNextRender](../interfaces/IFlow.md#removenextrender)

#### Inherited from

[Box](Box.md).[removeNextRender](Box.md#removenextrender)

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

[IFlow](../interfaces/IFlow.md).[__bindLeafer](../interfaces/IFlow.md#__bindleafer)

#### Inherited from

[Box](Box.md).[__bindLeafer](Box.md#__bindleafer)

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

[IFlow](../interfaces/IFlow.md).[setAttr](../interfaces/IFlow.md#setattr)

#### Inherited from

[Box](Box.md).[setAttr](Box.md#setattr)

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

[IFlow](../interfaces/IFlow.md).[getAttr](../interfaces/IFlow.md#getattr)

#### Inherited from

[Box](Box.md).[getAttr](Box.md#getattr)

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

[IFlow](../interfaces/IFlow.md).[getComputedAttr](../interfaces/IFlow.md#getcomputedattr)

#### Inherited from

[Box](Box.md).[getComputedAttr](Box.md#getcomputedattr)

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

[IFlow](../interfaces/IFlow.md).[toString](../interfaces/IFlow.md#tostring)

#### Inherited from

[Box](Box.md).[toString](Box.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L200)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[toSVG](../interfaces/IFlow.md#tosvg)

#### Inherited from

[Box](Box.md).[toSVG](Box.md#tosvg)

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

[IFlow](../interfaces/IFlow.md).[__SVG](../interfaces/IFlow.md#__svg)

#### Inherited from

[Box](Box.md).[__SVG](Box.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L206)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[toHTML](../interfaces/IFlow.md#tohtml)

#### Inherited from

[Box](Box.md).[toHTML](Box.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L208)

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

[IFlow](../interfaces/IFlow.md).[__setAttr](../interfaces/IFlow.md#__setattr)

#### Inherited from

[Box](Box.md).[__setAttr](Box.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L212)

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

[IFlow](../interfaces/IFlow.md).[__getAttr](../interfaces/IFlow.md#__getattr)

#### Inherited from

[Box](Box.md).[__getAttr](Box.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L214)

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

[IFlow](../interfaces/IFlow.md).[setProxyAttr](../interfaces/IFlow.md#setproxyattr)

#### Inherited from

[Box](Box.md).[setProxyAttr](Box.md#setproxyattr)

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

[IFlow](../interfaces/IFlow.md).[getProxyAttr](../interfaces/IFlow.md#getproxyattr)

#### Inherited from

[Box](Box.md).[getProxyAttr](Box.md#getproxyattr)

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

[IFlow](../interfaces/IFlow.md).[focus](../interfaces/IFlow.md#focus)

#### Inherited from

[Box](Box.md).[focus](Box.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L238)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[updateState](../interfaces/IFlow.md#updatestate)

#### Inherited from

[Box](Box.md).[updateState](Box.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L240)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[updateLayout](../interfaces/IFlow.md#updatelayout)

#### Inherited from

[Box](Box.md).[updateLayout](Box.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L245)

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

[IFlow](../interfaces/IFlow.md).[forceUpdate](../interfaces/IFlow.md#forceupdate)

#### Inherited from

[Box](Box.md).[forceUpdate](Box.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L249)

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

[IFlow](../interfaces/IFlow.md).[forceRender](../interfaces/IFlow.md#forcerender)

#### Inherited from

[Box](Box.md).[forceRender](Box.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L257)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__extraUpdate](../interfaces/IFlow.md#__extraupdate)

#### Inherited from

[Box](Box.md).[__extraUpdate](Box.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L261)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateWorldMatrix](../interfaces/IFlow.md#__updateworldmatrix)

#### Inherited from

[Box](Box.md).[__updateWorldMatrix](Box.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L267)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateLocalMatrix](../interfaces/IFlow.md#__updatelocalmatrix)

#### Inherited from

[Box](Box.md).[__updateLocalMatrix](Box.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L269)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateWorldBounds](../interfaces/IFlow.md#__updateworldbounds)

#### Inherited from

[Box](Box.md).[__updateWorldBounds](Box.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateLocalBounds](../interfaces/IFlow.md#__updatelocalbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBounds](Box.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L277)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateLocalBoxBounds](../interfaces/IFlow.md#__updatelocalboxbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBoxBounds](Box.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateLocalStrokeBounds](../interfaces/IFlow.md#__updatelocalstrokebounds)

#### Inherited from

[Box](Box.md).[__updateLocalStrokeBounds](Box.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L282)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateLocalRenderBounds](../interfaces/IFlow.md#__updatelocalrenderbounds)

#### Inherited from

[Box](Box.md).[__updateLocalRenderBounds](Box.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L284)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateContentBounds](../interfaces/IFlow.md#__updatecontentbounds)

#### Inherited from

[Box](Box.md).[__updateContentBounds](Box.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L290)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateAutoLayout](../interfaces/IFlow.md#__updateautolayout)

#### Inherited from

[Box](Box.md).[__updateAutoLayout](Box.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L297)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateFlowLayout](../interfaces/IFlow.md#__updateflowlayout)

#### Inherited from

[Box](Box.md).[__updateFlowLayout](Box.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L299)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateNaturalSize](../interfaces/IFlow.md#__updatenaturalsize)

#### Inherited from

[Box](Box.md).[__updateNaturalSize](Box.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L301)

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

[IFlow](../interfaces/IFlow.md).[__updateEraser](../interfaces/IFlow.md#__updateeraser)

#### Inherited from

[Box](Box.md).[__updateEraser](Box.md#__updateeraser)

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

[IFlow](../interfaces/IFlow.md).[__renderEraser](../interfaces/IFlow.md#__rendereraser)

#### Inherited from

[Box](Box.md).[__renderEraser](Box.md#__rendereraser)

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

[IFlow](../interfaces/IFlow.md).[__updateMask](../interfaces/IFlow.md#__updatemask)

#### Inherited from

[Box](Box.md).[__updateMask](Box.md#__updatemask)

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

[IFlow](../interfaces/IFlow.md).[__renderMask](../interfaces/IFlow.md#__rendermask)

#### Inherited from

[Box](Box.md).[__renderMask](Box.md#__rendermask)

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

[IFlow](../interfaces/IFlow.md).[__getNowWorld](../interfaces/IFlow.md#__getnowworld)

#### Inherited from

[Box](Box.md).[__getNowWorld](Box.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L339)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[getClampRenderScale](../interfaces/IFlow.md#getclamprenderscale)

#### Inherited from

[Box](Box.md).[getClampRenderScale](Box.md#getclamprenderscale)

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

[IFlow](../interfaces/IFlow.md).[getRenderScaleData](../interfaces/IFlow.md#getrenderscaledata)

#### Inherited from

[Box](Box.md).[getRenderScaleData](Box.md#getrenderscaledata)

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

[IFlow](../interfaces/IFlow.md).[getTransform](../interfaces/IFlow.md#gettransform)

#### Inherited from

[Box](Box.md).[getTransform](Box.md#gettransform)

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

[IFlow](../interfaces/IFlow.md).[getBounds](../interfaces/IFlow.md#getbounds)

#### Inherited from

[Box](Box.md).[getBounds](Box.md#getbounds)

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

[IFlow](../interfaces/IFlow.md).[getLayoutBounds](../interfaces/IFlow.md#getlayoutbounds)

#### Inherited from

[Box](Box.md).[getLayoutBounds](Box.md#getlayoutbounds)

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

[IFlow](../interfaces/IFlow.md).[getLayoutPoints](../interfaces/IFlow.md#getlayoutpoints)

#### Inherited from

[Box](Box.md).[getLayoutPoints](Box.md#getlayoutpoints)

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

[IFlow](../interfaces/IFlow.md).[getWorldBounds](../interfaces/IFlow.md#getworldbounds)

#### Inherited from

[Box](Box.md).[getWorldBounds](Box.md#getworldbounds)

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

[IFlow](../interfaces/IFlow.md).[worldToLocal](../interfaces/IFlow.md#worldtolocal)

#### Inherited from

[Box](Box.md).[worldToLocal](Box.md#worldtolocal)

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

[IFlow](../interfaces/IFlow.md).[localToWorld](../interfaces/IFlow.md#localtoworld)

#### Inherited from

[Box](Box.md).[localToWorld](Box.md#localtoworld)

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

[IFlow](../interfaces/IFlow.md).[worldToInner](../interfaces/IFlow.md#worldtoinner)

#### Inherited from

[Box](Box.md).[worldToInner](Box.md#worldtoinner)

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

[IFlow](../interfaces/IFlow.md).[innerToWorld](../interfaces/IFlow.md#innertoworld)

#### Inherited from

[Box](Box.md).[innerToWorld](Box.md#innertoworld)

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

[IFlow](../interfaces/IFlow.md).[getBoxPoint](../interfaces/IFlow.md#getboxpoint)

#### Inherited from

[Box](Box.md).[getBoxPoint](Box.md#getboxpoint)

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

[IFlow](../interfaces/IFlow.md).[getBoxPointByInner](../interfaces/IFlow.md#getboxpointbyinner)

#### Inherited from

[Box](Box.md).[getBoxPointByInner](Box.md#getboxpointbyinner)

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

[IFlow](../interfaces/IFlow.md).[getInnerPoint](../interfaces/IFlow.md#getinnerpoint)

#### Inherited from

[Box](Box.md).[getInnerPoint](Box.md#getinnerpoint)

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

[IFlow](../interfaces/IFlow.md).[getInnerPointByBox](../interfaces/IFlow.md#getinnerpointbybox)

#### Inherited from

[Box](Box.md).[getInnerPointByBox](Box.md#getinnerpointbybox)

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

[IFlow](../interfaces/IFlow.md).[getInnerPointByLocal](../interfaces/IFlow.md#getinnerpointbylocal)

#### Inherited from

[Box](Box.md).[getInnerPointByLocal](Box.md#getinnerpointbylocal)

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

[IFlow](../interfaces/IFlow.md).[getLocalPoint](../interfaces/IFlow.md#getlocalpoint)

#### Inherited from

[Box](Box.md).[getLocalPoint](Box.md#getlocalpoint)

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

[IFlow](../interfaces/IFlow.md).[getLocalPointByInner](../interfaces/IFlow.md#getlocalpointbyinner)

#### Inherited from

[Box](Box.md).[getLocalPointByInner](Box.md#getlocalpointbyinner)

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

[IFlow](../interfaces/IFlow.md).[getPagePoint](../interfaces/IFlow.md#getpagepoint)

#### Inherited from

[Box](Box.md).[getPagePoint](Box.md#getpagepoint)

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

[IFlow](../interfaces/IFlow.md).[getWorldPoint](../interfaces/IFlow.md#getworldpoint)

#### Inherited from

[Box](Box.md).[getWorldPoint](Box.md#getworldpoint)

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

[IFlow](../interfaces/IFlow.md).[getWorldPointByBox](../interfaces/IFlow.md#getworldpointbybox)

#### Inherited from

[Box](Box.md).[getWorldPointByBox](Box.md#getworldpointbybox)

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

[IFlow](../interfaces/IFlow.md).[getWorldPointByLocal](../interfaces/IFlow.md#getworldpointbylocal)

#### Inherited from

[Box](Box.md).[getWorldPointByLocal](Box.md#getworldpointbylocal)

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

[IFlow](../interfaces/IFlow.md).[getWorldPointByPage](../interfaces/IFlow.md#getworldpointbypage)

#### Inherited from

[Box](Box.md).[getWorldPointByPage](Box.md#getworldpointbypage)

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

[IFlow](../interfaces/IFlow.md).[setTransform](../interfaces/IFlow.md#settransform)

#### Inherited from

[Box](Box.md).[setTransform](Box.md#settransform)

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

[IFlow](../interfaces/IFlow.md).[transform](../interfaces/IFlow.md#transform)

#### Inherited from

[Box](Box.md).[transform](Box.md#transform)

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

[IFlow](../interfaces/IFlow.md).[move](../interfaces/IFlow.md#move)

#### Inherited from

[Box](Box.md).[move](Box.md#move)

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

[IFlow](../interfaces/IFlow.md).[moveInner](../interfaces/IFlow.md#moveinner)

#### Inherited from

[Box](Box.md).[moveInner](Box.md#moveinner)

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

[IFlow](../interfaces/IFlow.md).[scaleOf](../interfaces/IFlow.md#scaleof)

#### Inherited from

[Box](Box.md).[scaleOf](Box.md#scaleof)

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

[IFlow](../interfaces/IFlow.md).[rotateOf](../interfaces/IFlow.md#rotateof)

#### Inherited from

[Box](Box.md).[rotateOf](Box.md#rotateof)

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

[IFlow](../interfaces/IFlow.md).[skewOf](../interfaces/IFlow.md#skewof)

#### Inherited from

[Box](Box.md).[skewOf](Box.md#skewof)

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

[IFlow](../interfaces/IFlow.md).[transformWorld](../interfaces/IFlow.md#transformworld)

#### Inherited from

[Box](Box.md).[transformWorld](Box.md#transformworld)

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

[IFlow](../interfaces/IFlow.md).[moveWorld](../interfaces/IFlow.md#moveworld)

#### Inherited from

[Box](Box.md).[moveWorld](Box.md#moveworld)

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

[IFlow](../interfaces/IFlow.md).[scaleOfWorld](../interfaces/IFlow.md#scaleofworld)

#### Inherited from

[Box](Box.md).[scaleOfWorld](Box.md#scaleofworld)

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

[IFlow](../interfaces/IFlow.md).[rotateOfWorld](../interfaces/IFlow.md#rotateofworld)

#### Inherited from

[Box](Box.md).[rotateOfWorld](Box.md#rotateofworld)

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

[IFlow](../interfaces/IFlow.md).[skewOfWorld](../interfaces/IFlow.md#skewofworld)

#### Inherited from

[Box](Box.md).[skewOfWorld](Box.md#skewofworld)

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

[IFlow](../interfaces/IFlow.md).[flip](../interfaces/IFlow.md#flip)

#### Inherited from

[Box](Box.md).[flip](Box.md#flip)

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

[IFlow](../interfaces/IFlow.md).[scaleResize](../interfaces/IFlow.md#scaleresize)

#### Inherited from

[Box](Box.md).[scaleResize](Box.md#scaleresize)

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

[IFlow](../interfaces/IFlow.md).[__scaleResize](../interfaces/IFlow.md#__scaleresize)

#### Inherited from

[Box](Box.md).[__scaleResize](Box.md#__scaleresize)

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

[IFlow](../interfaces/IFlow.md).[resizeWidth](../interfaces/IFlow.md#resizewidth)

#### Inherited from

[Box](Box.md).[resizeWidth](Box.md#resizewidth)

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

[IFlow](../interfaces/IFlow.md).[resizeHeight](../interfaces/IFlow.md#resizeheight)

#### Inherited from

[Box](Box.md).[resizeHeight](Box.md#resizeheight)

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

[IFlow](../interfaces/IFlow.md).[__hitWorld](../interfaces/IFlow.md#__hitworld)

#### Inherited from

[Box](Box.md).[__hitWorld](Box.md#__hitworld)

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

[IFlow](../interfaces/IFlow.md).[__hit](../interfaces/IFlow.md#__hit)

#### Inherited from

[Box](Box.md).[__hit](Box.md#__hit)

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

[IFlow](../interfaces/IFlow.md).[__hitFill](../interfaces/IFlow.md#__hitfill)

#### Inherited from

[Box](Box.md).[__hitFill](Box.md#__hitfill)

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

[IFlow](../interfaces/IFlow.md).[__hitStroke](../interfaces/IFlow.md#__hitstroke)

#### Inherited from

[Box](Box.md).[__hitStroke](Box.md#__hitstroke)

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

[IFlow](../interfaces/IFlow.md).[__hitPixel](../interfaces/IFlow.md#__hitpixel)

#### Inherited from

[Box](Box.md).[__hitPixel](Box.md#__hitpixel)

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

[IFlow](../interfaces/IFlow.md).[__drawHitPath](../interfaces/IFlow.md#__drawhitpath)

#### Inherited from

[Box](Box.md).[__drawHitPath](Box.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L570)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateHitCanvas](../interfaces/IFlow.md#__updatehitcanvas)

#### Inherited from

[Box](Box.md).[__updateHitCanvas](Box.md#__updatehitcanvas)

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

[IFlow](../interfaces/IFlow.md).[__drawFast](../interfaces/IFlow.md#__drawfast)

#### Inherited from

[Box](Box.md).[__drawFast](Box.md#__drawfast)

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

[IFlow](../interfaces/IFlow.md).[__draw](../interfaces/IFlow.md#__draw)

#### Inherited from

[Box](Box.md).[__draw](Box.md#__draw)

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

[IFlow](../interfaces/IFlow.md).[__clip](../interfaces/IFlow.md#__clip)

#### Inherited from

[Box](Box.md).[__clip](Box.md#__clip)

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

[IFlow](../interfaces/IFlow.md).[__renderShape](../interfaces/IFlow.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

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

[IFlow](../interfaces/IFlow.md).[__drawShape](../interfaces/IFlow.md#__drawshape)

#### Inherited from

[Box](Box.md).[__drawShape](Box.md#__drawshape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L590)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateWorldOpacity](../interfaces/IFlow.md#__updateworldopacity)

#### Inherited from

[Box](Box.md).[__updateWorldOpacity](Box.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L593)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updatePath](../interfaces/IFlow.md#__updatepath)

#### Inherited from

[Box](Box.md).[__updatePath](Box.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L606)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[getMotionPathData](../interfaces/IFlow.md#getmotionpathdata)

#### Inherited from

[Box](Box.md).[getMotionPathData](Box.md#getmotionpathdata)

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

[IFlow](../interfaces/IFlow.md).[getMotionPoint](../interfaces/IFlow.md#getmotionpoint)

#### Inherited from

[Box](Box.md).[getMotionPoint](Box.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:619](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L619)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[getMotionTotal](../interfaces/IFlow.md#getmotiontotal)

#### Inherited from

[Box](Box.md).[getMotionTotal](Box.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:623](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L623)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateMotionPath](../interfaces/IFlow.md#__updatemotionpath)

#### Inherited from

[Box](Box.md).[__updateMotionPath](Box.md#__updatemotionpath)

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

[IFlow](../interfaces/IFlow.md).[__runAnimation](../interfaces/IFlow.md#__runanimation)

#### Inherited from

[Box](Box.md).[__runAnimation](Box.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:633](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L633)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateSortChildren](../interfaces/IFlow.md#__updatesortchildren)

#### Inherited from

[Box](Box.md).[__updateSortChildren](Box.md#__updatesortchildren)

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

[IFlow](../interfaces/IFlow.md).[dropTo](../interfaces/IFlow.md#dropto)

#### Inherited from

[Box](Box.md).[dropTo](Box.md#dropto)

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

[IFlow](../interfaces/IFlow.md).[on](../interfaces/IFlow.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

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

[IFlow](../interfaces/IFlow.md).[off](../interfaces/IFlow.md#off)

#### Inherited from

[Box](Box.md).[off](Box.md#off)

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

[IFlow](../interfaces/IFlow.md).[on_](../interfaces/IFlow.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

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

[IFlow](../interfaces/IFlow.md).[off_](../interfaces/IFlow.md#off_)

#### Inherited from

[Box](Box.md).[off_](Box.md#off_)

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

[IFlow](../interfaces/IFlow.md).[once](../interfaces/IFlow.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

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

[IFlow](../interfaces/IFlow.md).[emit](../interfaces/IFlow.md#emit)

#### Inherited from

[Box](Box.md).[emit](Box.md#emit)

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

[IFlow](../interfaces/IFlow.md).[emitEvent](../interfaces/IFlow.md#emitevent)

#### Inherited from

[Box](Box.md).[emitEvent](Box.md#emitevent)

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

[IFlow](../interfaces/IFlow.md).[hasEvent](../interfaces/IFlow.md#hasevent)

#### Inherited from

[Box](Box.md).[hasEvent](Box.md#hasevent)

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

[Box](Box.md).[changeAttr](Box.md#changeattr)

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

[Box](Box.md).[addAttr](Box.md#addattr)

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

[IFlow](../interfaces/IFlow.md).[__emitLifeEvent](../interfaces/IFlow.md#__emitlifeevent)

#### Inherited from

[Box](Box.md).[__emitLifeEvent](Box.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:683](https://github.com/leaferjs/leafer/blob/c7e50b8/packages/display/src/Leaf.ts#L683)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateStrokeSpread](../interfaces/IFlow.md#__updatestrokespread)

#### Inherited from

[Box](Box.md).[__updateStrokeSpread](Box.md#__updatestrokespread)

#### Defined in

[ui/packages/display/src/Box.ts:52](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L52)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L55)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateRenderSpread](../interfaces/IFlow.md#__updaterenderspread)

#### Inherited from

[Box](Box.md).[__updateRenderSpread](Box.md#__updaterenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:57](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L57)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:61](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L61)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`_secondLayout?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_secondLayout?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateBoxBounds](../interfaces/IFlow.md#__updateboxbounds)

#### Inherited from

[Box](Box.md).[__updateBoxBounds](Box.md#__updateboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:65](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L65)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateStrokeBounds](../interfaces/IFlow.md#__updatestrokebounds)

#### Inherited from

[Box](Box.md).[__updateStrokeBounds](Box.md#__updatestrokebounds)

#### Defined in

[ui/packages/display/src/Box.ts:96](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L96)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateRenderBounds](../interfaces/IFlow.md#__updaterenderbounds)

#### Inherited from

[Box](Box.md).[__updateRenderBounds](Box.md#__updaterenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:98](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L98)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateRectRenderBounds](../interfaces/IFlow.md#__updaterectrenderbounds)

#### Inherited from

[Box](Box.md).[__updateRectRenderBounds](Box.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:124](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L124)

___

### \_\_updateScrollBar

▸ **__updateScrollBar**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateScrollBar](../interfaces/IFlow.md#__updatescrollbar)

#### Inherited from

[Box](Box.md).[__updateScrollBar](Box.md#__updatescrollbar)

#### Defined in

[ui/packages/display/src/Box.ts:127](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L127)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[ui/packages/display/src/Box.ts:131](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L131)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateChange](../interfaces/IFlow.md#__updatechange)

#### Inherited from

[Box](Box.md).[__updateChange](Box.md#__updatechange)

#### Defined in

[ui/packages/display/src/Box.ts:133](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L133)

___

### \_\_renderRect

▸ **__renderRect**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__renderRect](Box.md#__renderrect)

#### Defined in

[ui/packages/display/src/Box.ts:140](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L140)

___

### \_\_renderGroup

▸ **__renderGroup**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__renderGroup](../interfaces/IFlow.md#__rendergroup)

#### Inherited from

[Box](Box.md).[__renderGroup](Box.md#__rendergroup)

#### Defined in

[ui/packages/display/src/Box.ts:143](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L143)

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

[IFlow](../interfaces/IFlow.md).[__render](../interfaces/IFlow.md#__render)

#### Inherited from

[Box](Box.md).[__render](Box.md#__render)

#### Defined in

[ui/packages/display/src/Box.ts:146](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L146)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__drawContent](../interfaces/IFlow.md#__drawcontent)

#### Inherited from

[Box](Box.md).[__drawContent](Box.md#__drawcontent)

#### Defined in

[ui/packages/display/src/Box.ts:157](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Box.ts#L157)

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

[IFlow](../interfaces/IFlow.md).[reset](../interfaces/IFlow.md#reset)

#### Inherited from

[Box](Box.md).[reset](Box.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:36](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L36)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:41](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L41)

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

[IFlow](../interfaces/IFlow.md).[set](../interfaces/IFlow.md#set)

#### Inherited from

[Box](Box.md).[set](Box.md#set)

#### Defined in

[ui/packages/display/src/Group.ts:48](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L48)

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

[IFlow](../interfaces/IFlow.md).[toJSON](../interfaces/IFlow.md#tojson)

#### Inherited from

[Box](Box.md).[toJSON](Box.md#tojson)

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

[IFlow](../interfaces/IFlow.md).[pick](../interfaces/IFlow.md#pick)

#### Inherited from

[Box](Box.md).[pick](Box.md#pick)

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

[IFlow](../interfaces/IFlow.md).[addAt](../interfaces/IFlow.md#addat)

#### Inherited from

[Box](Box.md).[addAt](Box.md#addat)

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

[IFlow](../interfaces/IFlow.md).[addAfter](../interfaces/IFlow.md#addafter)

#### Inherited from

[Box](Box.md).[addAfter](Box.md#addafter)

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

[IFlow](../interfaces/IFlow.md).[addBefore](../interfaces/IFlow.md#addbefore)

#### Inherited from

[Box](Box.md).[addBefore](Box.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:87](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L87)

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

[IFlow](../interfaces/IFlow.md).[add](../interfaces/IFlow.md#add)

#### Inherited from

[Box](Box.md).[add](Box.md#add)

#### Defined in

[ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L93)

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

[IFlow](../interfaces/IFlow.md).[addMany](../interfaces/IFlow.md#addmany)

#### Inherited from

[Box](Box.md).[addMany](Box.md#addmany)

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

[IFlow](../interfaces/IFlow.md).[remove](../interfaces/IFlow.md#remove)

#### Inherited from

[Box](Box.md).[remove](Box.md#remove)

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

[IFlow](../interfaces/IFlow.md).[removeAll](../interfaces/IFlow.md#removeall)

#### Inherited from

[Box](Box.md).[removeAll](Box.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L99)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[clear](../interfaces/IFlow.md#clear)

#### Inherited from

[Box](Box.md).[clear](Box.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/Group.ts#L101)

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

[IFlow](../interfaces/IFlow.md).[get](../interfaces/IFlow.md#get)

#### Inherited from

[Box](Box.md).[get](Box.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L422)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFlow](../interfaces/IFlow.md).[createProxyData](../interfaces/IFlow.md#createproxydata)

#### Inherited from

[Box](Box.md).[createProxyData](Box.md#createproxydata)

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

[IFlow](../interfaces/IFlow.md).[find](../interfaces/IFlow.md#find)

#### Inherited from

[Box](Box.md).[find](Box.md#find)

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

[IFlow](../interfaces/IFlow.md).[findTag](../interfaces/IFlow.md#findtag)

#### Inherited from

[Box](Box.md).[findTag](Box.md#findtag)

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

[IFlow](../interfaces/IFlow.md).[findOne](../interfaces/IFlow.md#findone)

#### Inherited from

[Box](Box.md).[findOne](Box.md#findone)

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

[IFlow](../interfaces/IFlow.md).[findId](../interfaces/IFlow.md#findid)

#### Inherited from

[Box](Box.md).[findId](Box.md#findid)

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

[IFlow](../interfaces/IFlow.md).[getPath](../interfaces/IFlow.md#getpath)

#### Inherited from

[Box](Box.md).[getPath](Box.md#getpath)

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

[IFlow](../interfaces/IFlow.md).[getPathString](../interfaces/IFlow.md#getpathstring)

#### Inherited from

[Box](Box.md).[getPathString](Box.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L449)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[load](../interfaces/IFlow.md#load)

#### Inherited from

[Box](Box.md).[load](Box.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L454)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__onUpdateSize](../interfaces/IFlow.md#__onupdatesize)

#### Inherited from

[Box](Box.md).[__onUpdateSize](Box.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L458)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[__updateRenderPath](../interfaces/IFlow.md#__updaterenderpath)

#### Inherited from

[Box](Box.md).[__updateRenderPath](Box.md#__updaterenderpath)

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

[IFlow](../interfaces/IFlow.md).[__drawRenderPath](../interfaces/IFlow.md#__drawrenderpath)

#### Inherited from

[Box](Box.md).[__drawRenderPath](Box.md#__drawrenderpath)

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

[IFlow](../interfaces/IFlow.md).[__drawPath](../interfaces/IFlow.md#__drawpath)

#### Inherited from

[Box](Box.md).[__drawPath](Box.md#__drawpath)

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

[IFlow](../interfaces/IFlow.md).[__drawPathByData](../interfaces/IFlow.md#__drawpathbydata)

#### Inherited from

[Box](Box.md).[__drawPathByData](Box.md#__drawpathbydata)

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

[IFlow](../interfaces/IFlow.md).[__drawPathByBox](../interfaces/IFlow.md#__drawpathbybox)

#### Inherited from

[Box](Box.md).[__drawPathByBox](Box.md#__drawpathbybox)

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

[IFlow](../interfaces/IFlow.md).[drawImagePlaceholder](../interfaces/IFlow.md#drawimageplaceholder)

#### Inherited from

[Box](Box.md).[drawImagePlaceholder](Box.md#drawimageplaceholder)

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

[IFlow](../interfaces/IFlow.md).[animate](../interfaces/IFlow.md#animate)

#### Inherited from

[Box](Box.md).[animate](Box.md#animate)

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

[IFlow](../interfaces/IFlow.md).[killAnimate](../interfaces/IFlow.md#killanimate)

#### Inherited from

[Box](Box.md).[killAnimate](Box.md#killanimate)

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

[IFlow](../interfaces/IFlow.md).[export](../interfaces/IFlow.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

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

[IFlow](../interfaces/IFlow.md).[syncExport](../interfaces/IFlow.md#syncexport)

#### Inherited from

[Box](Box.md).[syncExport](Box.md#syncexport)

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

[IFlow](../interfaces/IFlow.md).[clone](../interfaces/IFlow.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

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

[Box](Box.md).[one](Box.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L525)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

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

[Box](Box.md).[registerData](Box.md#registerdata)

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

[Box](Box.md).[setEditConfig](Box.md#seteditconfig)

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

[Box](Box.md).[setEditOuter](Box.md#seteditouter)

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

[Box](Box.md).[setEditInner](Box.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:544](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L544)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IFlow](../interfaces/IFlow.md).[destroy](../interfaces/IFlow.md#destroy)

#### Inherited from

[Box](Box.md).[destroy](Box.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:547](https://github.com/leaferjs/leafer-ui/blob/d5b15f5/packages/display/src/UI.ts#L547)
