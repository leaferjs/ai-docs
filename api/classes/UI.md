# Class: UI

## Hierarchy

- [`Leaf`](Leaf.md)

  ↳ **`UI`**

  ↳↳ [`Group`](Group.md)

  ↳↳ [`Rect`](Rect.md)

  ↳↳ [`Ellipse`](Ellipse.md)

  ↳↳ [`Polygon`](Polygon.md)

  ↳↳ [`Star`](Star.md)

  ↳↳ [`Line`](Line.md)

  ↳↳ [`Text`](Text.md)

  ↳↳ [`Path`](Path.md)

  ↳↳ [`Stroker`](Stroker.md)

  ↳↳ [`Robot`](Robot.md)

## Implements

- [`IUI`](../interfaces/IUI.md)

## Table of contents

### Constructors

- [constructor](UI.md#constructor)

### Properties

- [innerId](UI.md#innerid)
- [syncEventer](UI.md#synceventer)
- [lockNormalStyle](UI.md#locknormalstyle)
- [\_\_layout](UI.md#__layout)
- [\_\_world](UI.md#__world)
- [\_\_local](UI.md#__local)
- [\_\_nowWorld](UI.md#__nowworld)
- [\_\_cameraWorld](UI.md#__cameraworld)
- [\_\_worldOpacity](UI.md#__worldopacity)
- [\_\_level](UI.md#__level)
- [\_\_tempNumber](UI.md#__tempnumber)
- [\_\_hasAutoLayout](UI.md#__hasautolayout)
- [\_\_hasMask](UI.md#__hasmask)
- [\_\_hasEraser](UI.md#__haseraser)
- [\_\_hitCanvas](UI.md#__hitcanvas)
- [\_\_captureMap](UI.md#__capturemap)
- [\_\_bubbleMap](UI.md#__bubblemap)
- [\_\_hasLocalEvent](UI.md#__haslocalevent)
- [\_\_hasWorldEvent](UI.md#__hasworldevent)
- [destroyed](UI.md#destroyed)
- [\_\_](UI.md#__)
- [proxyData](UI.md#proxydata)
- [\_\_proxyData](UI.md#__proxydata)
- [leafer](UI.md#leafer)
- [parent](UI.md#parent)
- [zoomLayer](UI.md#zoomlayer)
- [children](UI.md#children)
- [id](UI.md#id)
- [name](UI.md#name)
- [className](UI.md#classname)
- [blendMode](UI.md#blendmode)
- [opacity](UI.md#opacity)
- [visible](UI.md#visible)
- [locked](UI.md#locked)
- [dim](UI.md#dim)
- [dimskip](UI.md#dimskip)
- [zIndex](UI.md#zindex)
- [mask](UI.md#mask)
- [eraser](UI.md#eraser)
- [x](UI.md#x)
- [y](UI.md#y)
- [width](UI.md#width)
- [height](UI.md#height)
- [scaleX](UI.md#scalex)
- [scaleY](UI.md#scaley)
- [rotation](UI.md#rotation)
- [skewX](UI.md#skewx)
- [skewY](UI.md#skewy)
- [offsetX](UI.md#offsetx)
- [offsetY](UI.md#offsety)
- [scrollX](UI.md#scrollx)
- [scrollY](UI.md#scrolly)
- [origin](UI.md#origin)
- [around](UI.md#around)
- [lazy](UI.md#lazy)
- [pixelRatio](UI.md#pixelratio)
- [path](UI.md#path)
- [windingRule](UI.md#windingrule)
- [closed](UI.md#closed)
- [flow](UI.md#flow)
- [padding](UI.md#padding)
- [gap](UI.md#gap)
- [flowAlign](UI.md#flowalign)
- [flowWrap](UI.md#flowwrap)
- [itemBox](UI.md#itembox)
- [inFlow](UI.md#inflow)
- [autoWidth](UI.md#autowidth)
- [autoHeight](UI.md#autoheight)
- [lockRatio](UI.md#lockratio)
- [autoBox](UI.md#autobox)
- [widthRange](UI.md#widthrange)
- [heightRange](UI.md#heightrange)
- [draggable](UI.md#draggable)
- [dragBounds](UI.md#dragbounds)
- [editable](UI.md#editable)
- [hittable](UI.md#hittable)
- [hitFill](UI.md#hitfill)
- [hitStroke](UI.md#hitstroke)
- [hitBox](UI.md#hitbox)
- [hitChildren](UI.md#hitchildren)
- [hitSelf](UI.md#hitself)
- [hitRadius](UI.md#hitradius)
- [cursor](UI.md#cursor)
- [fill](UI.md#fill)
- [stroke](UI.md#stroke)
- [strokeAlign](UI.md#strokealign)
- [strokeWidth](UI.md#strokewidth)
- [strokeWidthFixed](UI.md#strokewidthfixed)
- [strokeCap](UI.md#strokecap)
- [strokeJoin](UI.md#strokejoin)
- [dashPattern](UI.md#dashpattern)
- [dashOffset](UI.md#dashoffset)
- [miterLimit](UI.md#miterlimit)
- [startArrow](UI.md#startarrow)
- [endArrow](UI.md#endarrow)
- [cornerRadius](UI.md#cornerradius)
- [cornerSmoothing](UI.md#cornersmoothing)
- [shadow](UI.md#shadow)
- [innerShadow](UI.md#innershadow)
- [blur](UI.md#blur)
- [backgroundBlur](UI.md#backgroundblur)
- [grayscale](UI.md#grayscale)
- [filter](UI.md#filter)
- [animation](UI.md#animation)
- [animationOut](UI.md#animationout)
- [transition](UI.md#transition)
- [transitionOut](UI.md#transitionout)
- [motionPath](UI.md#motionpath)
- [motionPrecision](UI.md#motionprecision)
- [motion](UI.md#motion)
- [motionRotation](UI.md#motionrotation)
- [states](UI.md#states)
- [state](UI.md#state)
- [selected](UI.md#selected)
- [disabled](UI.md#disabled)
- [normalStyle](UI.md#normalstyle)
- [hoverStyle](UI.md#hoverstyle)
- [pressStyle](UI.md#pressstyle)
- [focusStyle](UI.md#focusstyle)
- [selectedStyle](UI.md#selectedstyle)
- [disabledStyle](UI.md#disabledstyle)
- [placeholderStyle](UI.md#placeholderstyle)
- [placeholderColor](UI.md#placeholdercolor)
- [placeholderDelay](UI.md#placeholderdelay)
- [button](UI.md#button)
- [editConfig](UI.md#editconfig)
- [editOuter](UI.md#editouter)
- [editInner](UI.md#editinner)
- [data](UI.md#data)
- [useFastShadow](UI.md#usefastshadow)
- [\_\_box](UI.md#__box)
- [\_\_animate](UI.md#__animate)

### Accessors

- [tag](UI.md#tag)
- [\_\_tag](UI.md#__tag)
- [innerName](UI.md#innername)
- [\_\_DataProcessor](UI.md#__dataprocessor)
- [\_\_LayoutProcessor](UI.md#__layoutprocessor)
- [leaferIsCreated](UI.md#leaferiscreated)
- [leaferIsReady](UI.md#leaferisready)
- [isLeafer](UI.md#isleafer)
- [isBranch](UI.md#isbranch)
- [isBranchLeaf](UI.md#isbranchleaf)
- [\_\_localMatrix](UI.md#__localmatrix)
- [\_\_localBoxBounds](UI.md#__localboxbounds)
- [worldTransform](UI.md#worldtransform)
- [localTransform](UI.md#localtransform)
- [boxBounds](UI.md#boxbounds)
- [renderBounds](UI.md#renderbounds)
- [worldBoxBounds](UI.md#worldboxbounds)
- [worldStrokeBounds](UI.md#worldstrokebounds)
- [worldRenderBounds](UI.md#worldrenderbounds)
- [worldOpacity](UI.md#worldopacity)
- [\_\_worldFlipped](UI.md#__worldflipped)
- [\_\_onlyHitMask](UI.md#__onlyhitmask)
- [\_\_ignoreHitWorld](UI.md#__ignorehitworld)
- [\_\_inLazyBounds](UI.md#__inlazybounds)
- [pathInputed](UI.md#pathinputed)
- [event](UI.md#event)
- [app](UI.md#app)
- [isFrame](UI.md#isframe)
- [scale](UI.md#scale)
- [pen](UI.md#pen)

### Methods

- [resetCustom](UI.md#resetcustom)
- [waitParent](UI.md#waitparent)
- [waitLeafer](UI.md#waitleafer)
- [nextRender](UI.md#nextrender)
- [removeNextRender](UI.md#removenextrender)
- [\_\_bindLeafer](UI.md#__bindleafer)
- [setAttr](UI.md#setattr)
- [getAttr](UI.md#getattr)
- [getComputedAttr](UI.md#getcomputedattr)
- [toJSON](UI.md#tojson)
- [toString](UI.md#tostring)
- [toSVG](UI.md#tosvg)
- [\_\_SVG](UI.md#__svg)
- [toHTML](UI.md#tohtml)
- [\_\_setAttr](UI.md#__setattr)
- [\_\_getAttr](UI.md#__getattr)
- [setProxyAttr](UI.md#setproxyattr)
- [getProxyAttr](UI.md#getproxyattr)
- [focus](UI.md#focus)
- [updateState](UI.md#updatestate)
- [updateLayout](UI.md#updatelayout)
- [forceUpdate](UI.md#forceupdate)
- [forceRender](UI.md#forcerender)
- [\_\_extraUpdate](UI.md#__extraupdate)
- [\_\_updateWorldMatrix](UI.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](UI.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](UI.md#__updateworldbounds)
- [\_\_updateLocalBounds](UI.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](UI.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](UI.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](UI.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](UI.md#__updateboxbounds)
- [\_\_updateContentBounds](UI.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](UI.md#__updatestrokebounds)
- [\_\_updateRenderBounds](UI.md#__updaterenderbounds)
- [\_\_updateAutoLayout](UI.md#__updateautolayout)
- [\_\_updateFlowLayout](UI.md#__updateflowlayout)
- [\_\_updateNaturalSize](UI.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](UI.md#__updatestrokespread)
- [\_\_updateRenderSpread](UI.md#__updaterenderspread)
- [\_\_updateEraser](UI.md#__updateeraser)
- [\_\_renderEraser](UI.md#__rendereraser)
- [\_\_updateMask](UI.md#__updatemask)
- [\_\_renderMask](UI.md#__rendermask)
- [\_\_getNowWorld](UI.md#__getnowworld)
- [getTransform](UI.md#gettransform)
- [getBounds](UI.md#getbounds)
- [getLayoutBounds](UI.md#getlayoutbounds)
- [getLayoutPoints](UI.md#getlayoutpoints)
- [getWorldBounds](UI.md#getworldbounds)
- [worldToLocal](UI.md#worldtolocal)
- [localToWorld](UI.md#localtoworld)
- [worldToInner](UI.md#worldtoinner)
- [innerToWorld](UI.md#innertoworld)
- [getBoxPoint](UI.md#getboxpoint)
- [getBoxPointByInner](UI.md#getboxpointbyinner)
- [getInnerPoint](UI.md#getinnerpoint)
- [getInnerPointByBox](UI.md#getinnerpointbybox)
- [getInnerPointByLocal](UI.md#getinnerpointbylocal)
- [getLocalPoint](UI.md#getlocalpoint)
- [getLocalPointByInner](UI.md#getlocalpointbyinner)
- [getPagePoint](UI.md#getpagepoint)
- [getWorldPoint](UI.md#getworldpoint)
- [getWorldPointByBox](UI.md#getworldpointbybox)
- [getWorldPointByLocal](UI.md#getworldpointbylocal)
- [getWorldPointByPage](UI.md#getworldpointbypage)
- [setTransform](UI.md#settransform)
- [transform](UI.md#transform)
- [move](UI.md#move)
- [moveInner](UI.md#moveinner)
- [scaleOf](UI.md#scaleof)
- [rotateOf](UI.md#rotateof)
- [skewOf](UI.md#skewof)
- [transformWorld](UI.md#transformworld)
- [moveWorld](UI.md#moveworld)
- [scaleOfWorld](UI.md#scaleofworld)
- [rotateOfWorld](UI.md#rotateofworld)
- [skewOfWorld](UI.md#skewofworld)
- [flip](UI.md#flip)
- [scaleResize](UI.md#scaleresize)
- [\_\_scaleResize](UI.md#__scaleresize)
- [resizeWidth](UI.md#resizewidth)
- [resizeHeight](UI.md#resizeheight)
- [\_\_hitWorld](UI.md#__hitworld)
- [\_\_hit](UI.md#__hit)
- [\_\_hitFill](UI.md#__hitfill)
- [\_\_hitStroke](UI.md#__hitstroke)
- [\_\_hitPixel](UI.md#__hitpixel)
- [\_\_drawHitPath](UI.md#__drawhitpath)
- [\_\_updateHitCanvas](UI.md#__updatehitcanvas)
- [\_\_render](UI.md#__render)
- [\_\_drawFast](UI.md#__drawfast)
- [\_\_draw](UI.md#__draw)
- [\_\_clip](UI.md#__clip)
- [\_\_renderShape](UI.md#__rendershape)
- [\_\_updateWorldOpacity](UI.md#__updateworldopacity)
- [\_\_updateChange](UI.md#__updatechange)
- [\_\_updatePath](UI.md#__updatepath)
- [getMotionPathData](UI.md#getmotionpathdata)
- [getMotionPoint](UI.md#getmotionpoint)
- [getMotionTotal](UI.md#getmotiontotal)
- [\_\_updateMotionPath](UI.md#__updatemotionpath)
- [\_\_runAnimation](UI.md#__runanimation)
- [\_\_updateSortChildren](UI.md#__updatesortchildren)
- [add](UI.md#add)
- [remove](UI.md#remove)
- [dropTo](UI.md#dropto)
- [on](UI.md#on)
- [off](UI.md#off)
- [on\_](UI.md#on_)
- [off\_](UI.md#off_)
- [once](UI.md#once)
- [emit](UI.md#emit)
- [emitEvent](UI.md#emitevent)
- [hasEvent](UI.md#hasevent)
- [changeAttr](UI.md#changeattr)
- [addAttr](UI.md#addattr)
- [\_\_emitLifeEvent](UI.md#__emitlifeevent)
- [reset](UI.md#reset)
- [set](UI.md#set)
- [get](UI.md#get)
- [createProxyData](UI.md#createproxydata)
- [find](UI.md#find)
- [findTag](UI.md#findtag)
- [findOne](UI.md#findone)
- [findId](UI.md#findid)
- [getPath](UI.md#getpath)
- [getPathString](UI.md#getpathstring)
- [load](UI.md#load)
- [\_\_onUpdateSize](UI.md#__onupdatesize)
- [\_\_updateRenderPath](UI.md#__updaterenderpath)
- [\_\_drawRenderPath](UI.md#__drawrenderpath)
- [\_\_drawPath](UI.md#__drawpath)
- [\_\_drawPathByData](UI.md#__drawpathbydata)
- [\_\_drawPathByBox](UI.md#__drawpathbybox)
- [drawImagePlaceholder](UI.md#drawimageplaceholder)
- [animate](UI.md#animate)
- [killAnimate](UI.md#killanimate)
- [export](UI.md#export)
- [syncExport](UI.md#syncexport)
- [clone](UI.md#clone)
- [one](UI.md#one)
- [registerUI](UI.md#registerui)
- [registerData](UI.md#registerdata)
- [setEditConfig](UI.md#seteditconfig)
- [setEditOuter](UI.md#seteditouter)
- [setEditInner](UI.md#seteditinner)
- [destroy](UI.md#destroy)

## Constructors

### constructor

• **new UI**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Overrides

[Leaf](Leaf.md).[constructor](Leaf.md#constructor)

#### Defined in

[ui/packages/display/src/UI.ts:392](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L392)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[innerId](../interfaces/IUI.md#innerid)

#### Inherited from

[Leaf](Leaf.md).[innerId](Leaf.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[syncEventer](../interfaces/IUI.md#synceventer)

#### Inherited from

[Leaf](Leaf.md).[syncEventer](Leaf.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[lockNormalStyle](../interfaces/IUI.md#locknormalstyle)

#### Inherited from

[Leaf](Leaf.md).[lockNormalStyle](Leaf.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__layout](../interfaces/IUI.md#__layout)

#### Inherited from

[Leaf](Leaf.md).[__layout](Leaf.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__world](../interfaces/IUI.md#__world)

#### Inherited from

[Leaf](Leaf.md).[__world](Leaf.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__local](../interfaces/IUI.md#__local)

#### Inherited from

[Leaf](Leaf.md).[__local](Leaf.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__nowWorld](../interfaces/IUI.md#__nowworld)

#### Inherited from

[Leaf](Leaf.md).[__nowWorld](Leaf.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__cameraWorld](../interfaces/IUI.md#__cameraworld)

#### Inherited from

[Leaf](Leaf.md).[__cameraWorld](Leaf.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[__worldOpacity](../interfaces/IUI.md#__worldopacity)

#### Inherited from

[Leaf](Leaf.md).[__worldOpacity](Leaf.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[__level](../interfaces/IUI.md#__level)

#### Inherited from

[Leaf](Leaf.md).[__level](Leaf.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[__tempNumber](../interfaces/IUI.md#__tempnumber)

#### Inherited from

[Leaf](Leaf.md).[__tempNumber](Leaf.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__hasAutoLayout](../interfaces/IUI.md#__hasautolayout)

#### Inherited from

[Leaf](Leaf.md).[__hasAutoLayout](Leaf.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__hasMask](../interfaces/IUI.md#__hasmask)

#### Inherited from

[Leaf](Leaf.md).[__hasMask](Leaf.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__hasEraser](../interfaces/IUI.md#__haseraser)

#### Inherited from

[Leaf](Leaf.md).[__hasEraser](Leaf.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__hitCanvas](../interfaces/IUI.md#__hitcanvas)

#### Inherited from

[Leaf](Leaf.md).[__hitCanvas](Leaf.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__captureMap](../interfaces/IUI.md#__capturemap)

#### Inherited from

[Leaf](Leaf.md).[__captureMap](Leaf.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__bubbleMap](../interfaces/IUI.md#__bubblemap)

#### Inherited from

[Leaf](Leaf.md).[__bubbleMap](Leaf.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L97)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__hasLocalEvent](../interfaces/IUI.md#__haslocalevent)

#### Inherited from

[Leaf](Leaf.md).[__hasLocalEvent](Leaf.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L99)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__hasWorldEvent](../interfaces/IUI.md#__hasworldevent)

#### Inherited from

[Leaf](Leaf.md).[__hasWorldEvent](Leaf.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L100)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[destroyed](../interfaces/IUI.md#destroyed)

#### Inherited from

[Leaf](Leaf.md).[destroyed](Leaf.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IUIData`](../interfaces/IUIData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__](../interfaces/IUI.md#__)

#### Overrides

[Leaf](Leaf.md).[__](Leaf.md#__)

#### Defined in

[ui/packages/display/src/UI.ts:19](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L19)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[proxyData](../interfaces/IUI.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__proxyData](../interfaces/IUI.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[leafer](../interfaces/IUI.md#leafer)

#### Overrides

[Leaf](Leaf.md).[leafer](Leaf.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[parent](../interfaces/IUI.md#parent)

#### Overrides

[Leaf](Leaf.md).[parent](Leaf.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[zoomLayer](../interfaces/IUI.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[children](../interfaces/IUI.md#children)

#### Overrides

[Leaf](Leaf.md).[children](Leaf.md#children)

#### Defined in

[ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[id](../interfaces/IUI.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[name](../interfaces/IUI.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[className](../interfaces/IUI.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IUI](../interfaces/IUI.md).[blendMode](../interfaces/IUI.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[opacity](../interfaces/IUI.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IUI](../interfaces/IUI.md).[visible](../interfaces/IUI.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[locked](../interfaces/IUI.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[dim](../interfaces/IUI.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[dimskip](../interfaces/IUI.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[zIndex](../interfaces/IUI.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IUI](../interfaces/IUI.md).[mask](../interfaces/IUI.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IUI](../interfaces/IUI.md).[eraser](../interfaces/IUI.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[x](../interfaces/IUI.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[y](../interfaces/IUI.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L87)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[width](../interfaces/IUI.md#width)

#### Defined in

[ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L91)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[height](../interfaces/IUI.md#height)

#### Defined in

[ui/packages/display/src/UI.ts:94](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L94)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[scaleX](../interfaces/IUI.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[scaleY](../interfaces/IUI.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[rotation](../interfaces/IUI.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[skewX](../interfaces/IUI.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[skewY](../interfaces/IUI.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[offsetX](../interfaces/IUI.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[offsetY](../interfaces/IUI.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[scrollX](../interfaces/IUI.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[scrollY](../interfaces/IUI.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IUI](../interfaces/IUI.md).[origin](../interfaces/IUI.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IUI](../interfaces/IUI.md).[around](../interfaces/IUI.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[lazy](../interfaces/IUI.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[pixelRatio](../interfaces/IUI.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[path](../interfaces/IUI.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IUI](../interfaces/IUI.md).[windingRule](../interfaces/IUI.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[closed](../interfaces/IUI.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IUI](../interfaces/IUI.md).[flow](../interfaces/IUI.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IUI](../interfaces/IUI.md).[padding](../interfaces/IUI.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[gap](../interfaces/IUI.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IUI](../interfaces/IUI.md).[flowAlign](../interfaces/IUI.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IUI](../interfaces/IUI.md).[flowWrap](../interfaces/IUI.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IUI](../interfaces/IUI.md).[itemBox](../interfaces/IUI.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[inFlow](../interfaces/IUI.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IUI](../interfaces/IUI.md).[autoWidth](../interfaces/IUI.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IUI](../interfaces/IUI.md).[autoHeight](../interfaces/IUI.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[lockRatio](../interfaces/IUI.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[autoBox](../interfaces/IUI.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[widthRange](../interfaces/IUI.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[heightRange](../interfaces/IUI.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IUI](../interfaces/IUI.md).[draggable](../interfaces/IUI.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[dragBounds](../interfaces/IUI.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[editable](../interfaces/IUI.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[hittable](../interfaces/IUI.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IUI](../interfaces/IUI.md).[hitFill](../interfaces/IUI.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IUI](../interfaces/IUI.md).[hitStroke](../interfaces/IUI.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[hitBox](../interfaces/IUI.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[hitChildren](../interfaces/IUI.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[hitSelf](../interfaces/IUI.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[hitRadius](../interfaces/IUI.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[cursor](../interfaces/IUI.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IUI](../interfaces/IUI.md).[fill](../interfaces/IUI.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IUI](../interfaces/IUI.md).[stroke](../interfaces/IUI.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IUI](../interfaces/IUI.md).[strokeAlign](../interfaces/IUI.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IUI](../interfaces/IUI.md).[strokeWidth](../interfaces/IUI.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[strokeWidthFixed](../interfaces/IUI.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IUI](../interfaces/IUI.md).[strokeCap](../interfaces/IUI.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IUI](../interfaces/IUI.md).[strokeJoin](../interfaces/IUI.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IUI](../interfaces/IUI.md).[dashPattern](../interfaces/IUI.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[dashOffset](../interfaces/IUI.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[miterLimit](../interfaces/IUI.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IUI](../interfaces/IUI.md).[startArrow](../interfaces/IUI.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IUI](../interfaces/IUI.md).[endArrow](../interfaces/IUI.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IUI](../interfaces/IUI.md).[cornerRadius](../interfaces/IUI.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[cornerSmoothing](../interfaces/IUI.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[shadow](../interfaces/IUI.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[innerShadow](../interfaces/IUI.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[blur](../interfaces/IUI.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[backgroundBlur](../interfaces/IUI.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[grayscale](../interfaces/IUI.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[filter](../interfaces/IUI.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[animation](../interfaces/IUI.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IUI](../interfaces/IUI.md).[animationOut](../interfaces/IUI.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IUI](../interfaces/IUI.md).[transition](../interfaces/IUI.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IUI](../interfaces/IUI.md).[transitionOut](../interfaces/IUI.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[motionPath](../interfaces/IUI.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[motionPrecision](../interfaces/IUI.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[motion](../interfaces/IUI.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[motionRotation](../interfaces/IUI.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[states](../interfaces/IUI.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[state](../interfaces/IUI.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[selected](../interfaces/IUI.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[disabled](../interfaces/IUI.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[normalStyle](../interfaces/IUI.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[hoverStyle](../interfaces/IUI.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[pressStyle](../interfaces/IUI.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[focusStyle](../interfaces/IUI.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[selectedStyle](../interfaces/IUI.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[disabledStyle](../interfaces/IUI.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[placeholderStyle](../interfaces/IUI.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L350)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[placeholderColor](../interfaces/IUI.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L353)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IUI](../interfaces/IUI.md).[placeholderDelay](../interfaces/IUI.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L356)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[button](../interfaces/IUI.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L359)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[editConfig](../interfaces/IUI.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L364)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[editOuter](../interfaces/IUI.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L366)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IUI](../interfaces/IUI.md).[editInner](../interfaces/IUI.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L368)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[data](../interfaces/IUI.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L373)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[useFastShadow](../interfaces/IUI.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L379)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__box](../interfaces/IUI.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__animate](../interfaces/IUI.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L382)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IUI](../interfaces/IUI.md).[tag](../interfaces/IUI.md#tag)

#### Inherited from

Leaf.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[tag](../interfaces/IUI.md#tag)

#### Inherited from

Leaf.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L26)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IUI](../interfaces/IUI.md).[__tag](../interfaces/IUI.md#__tag)

#### Inherited from

Leaf.\_\_tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L28)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IUI](../interfaces/IUI.md).[innerName](../interfaces/IUI.md#innername)

#### Inherited from

Leaf.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__DataProcessor](../interfaces/IUI.md#__dataprocessor)

#### Inherited from

Leaf.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__LayoutProcessor](../interfaces/IUI.md#__layoutprocessor)

#### Inherited from

Leaf.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[leaferIsCreated](../interfaces/IUI.md#leaferiscreated)

#### Inherited from

Leaf.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[leaferIsReady](../interfaces/IUI.md#leaferisready)

#### Inherited from

Leaf.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[isLeafer](../interfaces/IUI.md#isleafer)

#### Inherited from

Leaf.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L42)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[isBranch](../interfaces/IUI.md#isbranch)

#### Inherited from

Leaf.isBranch

#### Defined in

[leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L43)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[isBranchLeaf](../interfaces/IUI.md#isbranchleaf)

#### Inherited from

Leaf.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__localMatrix](../interfaces/IUI.md#__localmatrix)

#### Inherited from

Leaf.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[__localBoxBounds](../interfaces/IUI.md#__localboxbounds)

#### Inherited from

Leaf.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[worldTransform](../interfaces/IUI.md#worldtransform)

#### Inherited from

Leaf.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[localTransform](../interfaces/IUI.md#localtransform)

#### Inherited from

Leaf.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[boxBounds](../interfaces/IUI.md#boxbounds)

#### Inherited from

Leaf.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[renderBounds](../interfaces/IUI.md#renderbounds)

#### Inherited from

Leaf.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[worldBoxBounds](../interfaces/IUI.md#worldboxbounds)

#### Inherited from

Leaf.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[worldStrokeBounds](../interfaces/IUI.md#worldstrokebounds)

#### Inherited from

Leaf.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[worldRenderBounds](../interfaces/IUI.md#worldrenderbounds)

#### Inherited from

Leaf.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IUI](../interfaces/IUI.md).[worldOpacity](../interfaces/IUI.md#worldopacity)

#### Inherited from

Leaf.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__worldFlipped](../interfaces/IUI.md#__worldflipped)

#### Inherited from

Leaf.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__onlyHitMask](../interfaces/IUI.md#__onlyhitmask)

#### Inherited from

Leaf.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__ignoreHitWorld](../interfaces/IUI.md#__ignorehitworld)

#### Inherited from

Leaf.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[__inLazyBounds](../interfaces/IUI.md#__inlazybounds)

#### Inherited from

Leaf.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[pathInputed](../interfaces/IUI.md#pathinputed)

#### Inherited from

Leaf.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L91)

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

[IUI](../interfaces/IUI.md).[event](../interfaces/IUI.md#event)

#### Inherited from

Leaf.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L94)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[app](../interfaces/IUI.md#app)

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IUI](../interfaces/IUI.md).[isFrame](../interfaces/IUI.md#isframe)

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[scale](../interfaces/IUI.md#scale)

#### Defined in

[ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L377)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[scale](../interfaces/IUI.md#scale)

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L376)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[pen](../interfaces/IUI.md#pen)

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L384)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[resetCustom](../interfaces/IUI.md#resetcustom)

#### Inherited from

[Leaf](Leaf.md).[resetCustom](Leaf.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:135](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L135)

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

[IUI](../interfaces/IUI.md).[waitParent](../interfaces/IUI.md#waitparent)

#### Inherited from

[Leaf](Leaf.md).[waitParent](Leaf.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L141)

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

[IUI](../interfaces/IUI.md).[waitLeafer](../interfaces/IUI.md#waitleafer)

#### Inherited from

[Leaf](Leaf.md).[waitLeafer](Leaf.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:146](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L146)

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

[IUI](../interfaces/IUI.md).[nextRender](../interfaces/IUI.md#nextrender)

#### Inherited from

[Leaf](Leaf.md).[nextRender](Leaf.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:151](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L151)

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

[IUI](../interfaces/IUI.md).[removeNextRender](../interfaces/IUI.md#removenextrender)

#### Inherited from

[Leaf](Leaf.md).[removeNextRender](Leaf.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:155](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L155)

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

[IUI](../interfaces/IUI.md).[__bindLeafer](../interfaces/IUI.md#__bindleafer)

#### Inherited from

[Leaf](Leaf.md).[__bindLeafer](Leaf.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:159](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L159)

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

[IUI](../interfaces/IUI.md).[setAttr](../interfaces/IUI.md#setattr)

#### Inherited from

[Leaf](Leaf.md).[setAttr](Leaf.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:188](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L188)

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

[IUI](../interfaces/IUI.md).[getAttr](../interfaces/IUI.md#getattr)

#### Inherited from

[Leaf](Leaf.md).[getAttr](Leaf.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:189](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L189)

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

[IUI](../interfaces/IUI.md).[getComputedAttr](../interfaces/IUI.md#getcomputedattr)

#### Inherited from

[Leaf](Leaf.md).[getComputedAttr](Leaf.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L191)

___

### toJSON

▸ **toJSON**(`options?`): [`IObject`](../interfaces/IObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](../interfaces/IJSONOptions.md) |

#### Returns

[`IObject`](../interfaces/IObject.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[toJSON](../interfaces/IUI.md#tojson)

#### Inherited from

[Leaf](Leaf.md).[toJSON](Leaf.md#tojson)

#### Defined in

[leafer/packages/display/src/Leaf.ts:193](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L193)

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

[IUI](../interfaces/IUI.md).[toString](../interfaces/IUI.md#tostring)

#### Inherited from

[Leaf](Leaf.md).[toString](Leaf.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L198)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IUI](../interfaces/IUI.md).[toSVG](../interfaces/IUI.md#tosvg)

#### Inherited from

[Leaf](Leaf.md).[toSVG](Leaf.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:202](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L202)

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

[IUI](../interfaces/IUI.md).[__SVG](../interfaces/IUI.md#__svg)

#### Inherited from

[Leaf](Leaf.md).[__SVG](Leaf.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L204)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IUI](../interfaces/IUI.md).[toHTML](../interfaces/IUI.md#tohtml)

#### Inherited from

[Leaf](Leaf.md).[toHTML](Leaf.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L206)

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

[IUI](../interfaces/IUI.md).[__setAttr](../interfaces/IUI.md#__setattr)

#### Inherited from

[Leaf](Leaf.md).[__setAttr](Leaf.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L210)

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

[IUI](../interfaces/IUI.md).[__getAttr](../interfaces/IUI.md#__getattr)

#### Inherited from

[Leaf](Leaf.md).[__getAttr](Leaf.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L212)

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

[IUI](../interfaces/IUI.md).[setProxyAttr](../interfaces/IUI.md#setproxyattr)

#### Inherited from

[Leaf](Leaf.md).[setProxyAttr](Leaf.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L214)

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

[IUI](../interfaces/IUI.md).[getProxyAttr](../interfaces/IUI.md#getproxyattr)

#### Inherited from

[Leaf](Leaf.md).[getProxyAttr](Leaf.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L216)

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

[IUI](../interfaces/IUI.md).[focus](../interfaces/IUI.md#focus)

#### Inherited from

[Leaf](Leaf.md).[focus](Leaf.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L236)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[updateState](../interfaces/IUI.md#updatestate)

#### Inherited from

[Leaf](Leaf.md).[updateState](Leaf.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L238)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[updateLayout](../interfaces/IUI.md#updatelayout)

#### Inherited from

[Leaf](Leaf.md).[updateLayout](Leaf.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:243](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L243)

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

[IUI](../interfaces/IUI.md).[forceUpdate](../interfaces/IUI.md#forceupdate)

#### Inherited from

[Leaf](Leaf.md).[forceUpdate](Leaf.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:247](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L247)

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

[IUI](../interfaces/IUI.md).[forceRender](../interfaces/IUI.md#forcerender)

#### Inherited from

[Leaf](Leaf.md).[forceRender](Leaf.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L255)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__extraUpdate](../interfaces/IUI.md#__extraupdate)

#### Inherited from

[Leaf](Leaf.md).[__extraUpdate](Leaf.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:259](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L259)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateWorldMatrix](../interfaces/IUI.md#__updateworldmatrix)

#### Inherited from

[Leaf](Leaf.md).[__updateWorldMatrix](Leaf.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L265)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateLocalMatrix](../interfaces/IUI.md#__updatelocalmatrix)

#### Inherited from

[Leaf](Leaf.md).[__updateLocalMatrix](Leaf.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L267)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateWorldBounds](../interfaces/IUI.md#__updateworldbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateWorldBounds](Leaf.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateLocalBounds](../interfaces/IUI.md#__updatelocalbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateLocalBounds](Leaf.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateLocalBoxBounds](../interfaces/IUI.md#__updatelocalboxbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateLocalBoxBounds](Leaf.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateLocalStrokeBounds](../interfaces/IUI.md#__updatelocalstrokebounds)

#### Inherited from

[Leaf](Leaf.md).[__updateLocalStrokeBounds](Leaf.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateLocalRenderBounds](../interfaces/IUI.md#__updatelocalrenderbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateLocalRenderBounds](Leaf.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L282)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateBoxBounds](../interfaces/IUI.md#__updateboxbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateBoxBounds](Leaf.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L286)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateContentBounds](../interfaces/IUI.md#__updatecontentbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateContentBounds](Leaf.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L288)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateStrokeBounds](../interfaces/IUI.md#__updatestrokebounds)

#### Inherited from

[Leaf](Leaf.md).[__updateStrokeBounds](Leaf.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L290)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateRenderBounds](../interfaces/IUI.md#__updaterenderbounds)

#### Inherited from

[Leaf](Leaf.md).[__updateRenderBounds](Leaf.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L292)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateAutoLayout](../interfaces/IUI.md#__updateautolayout)

#### Inherited from

[Leaf](Leaf.md).[__updateAutoLayout](Leaf.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L295)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateFlowLayout](../interfaces/IUI.md#__updateflowlayout)

#### Inherited from

[Leaf](Leaf.md).[__updateFlowLayout](Leaf.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L297)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateNaturalSize](../interfaces/IUI.md#__updatenaturalsize)

#### Inherited from

[Leaf](Leaf.md).[__updateNaturalSize](Leaf.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L299)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateStrokeSpread](../interfaces/IUI.md#__updatestrokespread)

#### Inherited from

[Leaf](Leaf.md).[__updateStrokeSpread](Leaf.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L302)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateRenderSpread](../interfaces/IUI.md#__updaterenderspread)

#### Inherited from

[Leaf](Leaf.md).[__updateRenderSpread](Leaf.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:304](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L304)

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

[IUI](../interfaces/IUI.md).[__updateEraser](../interfaces/IUI.md#__updateeraser)

#### Inherited from

[Leaf](Leaf.md).[__updateEraser](Leaf.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:311](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L311)

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

[IUI](../interfaces/IUI.md).[__renderEraser](../interfaces/IUI.md#__rendereraser)

#### Inherited from

[Leaf](Leaf.md).[__renderEraser](Leaf.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:315](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L315)

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

[IUI](../interfaces/IUI.md).[__updateMask](../interfaces/IUI.md#__updatemask)

#### Inherited from

[Leaf](Leaf.md).[__updateMask](Leaf.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:323](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L323)

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

[IUI](../interfaces/IUI.md).[__renderMask](../interfaces/IUI.md#__rendermask)

#### Inherited from

[Leaf](Leaf.md).[__renderMask](Leaf.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L329)

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

[IUI](../interfaces/IUI.md).[__getNowWorld](../interfaces/IUI.md#__getnowworld)

#### Inherited from

[Leaf](Leaf.md).[__getNowWorld](Leaf.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:337](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L337)

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

[IUI](../interfaces/IUI.md).[getTransform](../interfaces/IUI.md#gettransform)

#### Inherited from

[Leaf](Leaf.md).[getTransform](Leaf.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:350](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L350)

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

[IUI](../interfaces/IUI.md).[getBounds](../interfaces/IUI.md#getbounds)

#### Inherited from

[Leaf](Leaf.md).[getBounds](Leaf.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:355](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L355)

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

[IUI](../interfaces/IUI.md).[getLayoutBounds](../interfaces/IUI.md#getlayoutbounds)

#### Inherited from

[Leaf](Leaf.md).[getLayoutBounds](Leaf.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:359](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L359)

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

[IUI](../interfaces/IUI.md).[getLayoutPoints](../interfaces/IUI.md#getlayoutpoints)

#### Inherited from

[Leaf](Leaf.md).[getLayoutPoints](Leaf.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:363](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L363)

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

[IUI](../interfaces/IUI.md).[getWorldBounds](../interfaces/IUI.md#getworldbounds)

#### Inherited from

[Leaf](Leaf.md).[getWorldBounds](Leaf.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:368](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L368)

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

[IUI](../interfaces/IUI.md).[worldToLocal](../interfaces/IUI.md#worldtolocal)

#### Inherited from

[Leaf](Leaf.md).[worldToLocal](Leaf.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L376)

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

[IUI](../interfaces/IUI.md).[localToWorld](../interfaces/IUI.md#localtoworld)

#### Inherited from

[Leaf](Leaf.md).[localToWorld](Leaf.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L384)

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

[IUI](../interfaces/IUI.md).[worldToInner](../interfaces/IUI.md#worldtoinner)

#### Inherited from

[Leaf](Leaf.md).[worldToInner](Leaf.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:392](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L392)

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

[IUI](../interfaces/IUI.md).[innerToWorld](../interfaces/IUI.md#innertoworld)

#### Inherited from

[Leaf](Leaf.md).[innerToWorld](Leaf.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:400](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L400)

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

[IUI](../interfaces/IUI.md).[getBoxPoint](../interfaces/IUI.md#getboxpoint)

#### Inherited from

[Leaf](Leaf.md).[getBoxPoint](Leaf.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:407](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L407)

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

[IUI](../interfaces/IUI.md).[getBoxPointByInner](../interfaces/IUI.md#getboxpointbyinner)

#### Inherited from

[Leaf](Leaf.md).[getBoxPointByInner](Leaf.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:411](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L411)

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

[IUI](../interfaces/IUI.md).[getInnerPoint](../interfaces/IUI.md#getinnerpoint)

#### Inherited from

[Leaf](Leaf.md).[getInnerPoint](Leaf.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:417](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L417)

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

[IUI](../interfaces/IUI.md).[getInnerPointByBox](../interfaces/IUI.md#getinnerpointbybox)

#### Inherited from

[Leaf](Leaf.md).[getInnerPointByBox](Leaf.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:423](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L423)

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

[IUI](../interfaces/IUI.md).[getInnerPointByLocal](../interfaces/IUI.md#getinnerpointbylocal)

#### Inherited from

[Leaf](Leaf.md).[getInnerPointByLocal](Leaf.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:429](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L429)

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

[IUI](../interfaces/IUI.md).[getLocalPoint](../interfaces/IUI.md#getlocalpoint)

#### Inherited from

[Leaf](Leaf.md).[getLocalPoint](Leaf.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:433](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L433)

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

[IUI](../interfaces/IUI.md).[getLocalPointByInner](../interfaces/IUI.md#getlocalpointbyinner)

#### Inherited from

[Leaf](Leaf.md).[getLocalPointByInner](Leaf.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:439](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L439)

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

[IUI](../interfaces/IUI.md).[getPagePoint](../interfaces/IUI.md#getpagepoint)

#### Inherited from

[Leaf](Leaf.md).[getPagePoint](Leaf.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:443](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L443)

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

[IUI](../interfaces/IUI.md).[getWorldPoint](../interfaces/IUI.md#getworldpoint)

#### Inherited from

[Leaf](Leaf.md).[getWorldPoint](Leaf.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:448](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L448)

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

[IUI](../interfaces/IUI.md).[getWorldPointByBox](../interfaces/IUI.md#getworldpointbybox)

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByBox](Leaf.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L454)

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

[IUI](../interfaces/IUI.md).[getWorldPointByLocal](../interfaces/IUI.md#getworldpointbylocal)

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByLocal](Leaf.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:458](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L458)

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

[IUI](../interfaces/IUI.md).[getWorldPointByPage](../interfaces/IUI.md#getworldpointbypage)

#### Inherited from

[Leaf](Leaf.md).[getWorldPointByPage](Leaf.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L464)

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

[IUI](../interfaces/IUI.md).[setTransform](../interfaces/IUI.md#settransform)

#### Inherited from

[Leaf](Leaf.md).[setTransform](Leaf.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:472](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L472)

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

[IUI](../interfaces/IUI.md).[transform](../interfaces/IUI.md#transform)

#### Inherited from

[Leaf](Leaf.md).[transform](Leaf.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:476](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L476)

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

[IUI](../interfaces/IUI.md).[move](../interfaces/IUI.md#move)

#### Inherited from

[Leaf](Leaf.md).[move](Leaf.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:480](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L480)

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

[IUI](../interfaces/IUI.md).[moveInner](../interfaces/IUI.md#moveinner)

#### Inherited from

[Leaf](Leaf.md).[moveInner](Leaf.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L485)

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

[IUI](../interfaces/IUI.md).[scaleOf](../interfaces/IUI.md#scaleof)

#### Inherited from

[Leaf](Leaf.md).[scaleOf](Leaf.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:489](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L489)

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

[IUI](../interfaces/IUI.md).[rotateOf](../interfaces/IUI.md#rotateof)

#### Inherited from

[Leaf](Leaf.md).[rotateOf](Leaf.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L493)

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

[IUI](../interfaces/IUI.md).[skewOf](../interfaces/IUI.md#skewof)

#### Inherited from

[Leaf](Leaf.md).[skewOf](Leaf.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L497)

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

[IUI](../interfaces/IUI.md).[transformWorld](../interfaces/IUI.md#transformworld)

#### Inherited from

[Leaf](Leaf.md).[transformWorld](Leaf.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:502](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L502)

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

[IUI](../interfaces/IUI.md).[moveWorld](../interfaces/IUI.md#moveworld)

#### Inherited from

[Leaf](Leaf.md).[moveWorld](Leaf.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L506)

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

[IUI](../interfaces/IUI.md).[scaleOfWorld](../interfaces/IUI.md#scaleofworld)

#### Inherited from

[Leaf](Leaf.md).[scaleOfWorld](Leaf.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L510)

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

[IUI](../interfaces/IUI.md).[rotateOfWorld](../interfaces/IUI.md#rotateofworld)

#### Inherited from

[Leaf](Leaf.md).[rotateOfWorld](Leaf.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L514)

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

[IUI](../interfaces/IUI.md).[skewOfWorld](../interfaces/IUI.md#skewofworld)

#### Inherited from

[Leaf](Leaf.md).[skewOfWorld](Leaf.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L518)

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

[IUI](../interfaces/IUI.md).[flip](../interfaces/IUI.md#flip)

#### Inherited from

[Leaf](Leaf.md).[flip](Leaf.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:522](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L522)

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

[IUI](../interfaces/IUI.md).[scaleResize](../interfaces/IUI.md#scaleresize)

#### Inherited from

[Leaf](Leaf.md).[scaleResize](Leaf.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:529](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L529)

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

[IUI](../interfaces/IUI.md).[__scaleResize](../interfaces/IUI.md#__scaleresize)

#### Inherited from

[Leaf](Leaf.md).[__scaleResize](Leaf.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L534)

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

[IUI](../interfaces/IUI.md).[resizeWidth](../interfaces/IUI.md#resizewidth)

#### Inherited from

[Leaf](Leaf.md).[resizeWidth](Leaf.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:537](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L537)

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

[IUI](../interfaces/IUI.md).[resizeHeight](../interfaces/IUI.md#resizeheight)

#### Inherited from

[Leaf](Leaf.md).[resizeHeight](Leaf.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L539)

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

[IUI](../interfaces/IUI.md).[__hitWorld](../interfaces/IUI.md#__hitworld)

#### Inherited from

[Leaf](Leaf.md).[__hitWorld](Leaf.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:544](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L544)

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

[IUI](../interfaces/IUI.md).[__hit](../interfaces/IUI.md#__hit)

#### Inherited from

[Leaf](Leaf.md).[__hit](Leaf.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:546](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L546)

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

[IUI](../interfaces/IUI.md).[__hitFill](../interfaces/IUI.md#__hitfill)

#### Inherited from

[Leaf](Leaf.md).[__hitFill](Leaf.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:548](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L548)

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

[IUI](../interfaces/IUI.md).[__hitStroke](../interfaces/IUI.md#__hitstroke)

#### Inherited from

[Leaf](Leaf.md).[__hitStroke](Leaf.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L550)

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

[IUI](../interfaces/IUI.md).[__hitPixel](../interfaces/IUI.md#__hitpixel)

#### Inherited from

[Leaf](Leaf.md).[__hitPixel](Leaf.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:552](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L552)

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

[IUI](../interfaces/IUI.md).[__drawHitPath](../interfaces/IUI.md#__drawhitpath)

#### Inherited from

[Leaf](Leaf.md).[__drawHitPath](Leaf.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:554](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L554)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateHitCanvas](../interfaces/IUI.md#__updatehitcanvas)

#### Inherited from

[Leaf](Leaf.md).[__updateHitCanvas](Leaf.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:556](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L556)

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

[IUI](../interfaces/IUI.md).[__render](../interfaces/IUI.md#__render)

#### Inherited from

[Leaf](Leaf.md).[__render](Leaf.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:563](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L563)

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

[IUI](../interfaces/IUI.md).[__drawFast](../interfaces/IUI.md#__drawfast)

#### Inherited from

[Leaf](Leaf.md).[__drawFast](Leaf.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L565)

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

[IUI](../interfaces/IUI.md).[__draw](../interfaces/IUI.md#__draw)

#### Inherited from

[Leaf](Leaf.md).[__draw](Leaf.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L567)

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

[IUI](../interfaces/IUI.md).[__clip](../interfaces/IUI.md#__clip)

#### Inherited from

[Leaf](Leaf.md).[__clip](Leaf.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L570)

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

[IUI](../interfaces/IUI.md).[__renderShape](../interfaces/IUI.md#__rendershape)

#### Inherited from

[Leaf](Leaf.md).[__renderShape](Leaf.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L572)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateWorldOpacity](../interfaces/IUI.md#__updateworldopacity)

#### Inherited from

[Leaf](Leaf.md).[__updateWorldOpacity](Leaf.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L575)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateChange](../interfaces/IUI.md#__updatechange)

#### Inherited from

[Leaf](Leaf.md).[__updateChange](Leaf.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L577)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updatePath](../interfaces/IUI.md#__updatepath)

#### Inherited from

[Leaf](Leaf.md).[__updatePath](Leaf.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L588)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[getMotionPathData](../interfaces/IUI.md#getmotionpathdata)

#### Inherited from

[Leaf](Leaf.md).[getMotionPathData](Leaf.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L597)

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

[IUI](../interfaces/IUI.md).[getMotionPoint](../interfaces/IUI.md#getmotionpoint)

#### Inherited from

[Leaf](Leaf.md).[getMotionPoint](Leaf.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:601](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L601)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IUI](../interfaces/IUI.md).[getMotionTotal](../interfaces/IUI.md#getmotiontotal)

#### Inherited from

[Leaf](Leaf.md).[getMotionTotal](Leaf.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:605](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L605)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateMotionPath](../interfaces/IUI.md#__updatemotionpath)

#### Inherited from

[Leaf](Leaf.md).[__updateMotionPath](Leaf.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:609](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L609)

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

[IUI](../interfaces/IUI.md).[__runAnimation](../interfaces/IUI.md#__runanimation)

#### Inherited from

[Leaf](Leaf.md).[__runAnimation](Leaf.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L615)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateSortChildren](../interfaces/IUI.md#__updatesortchildren)

#### Inherited from

[Leaf](Leaf.md).[__updateSortChildren](Leaf.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:620](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L620)

___

### add

▸ **add**(`_child`, `_index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child` | [`ILeaf`](../interfaces/ILeaf.md) \| [`ILeafInputData`](../interfaces/ILeafInputData.md) \| [`ILeaf`](../interfaces/ILeaf.md)[] \| [`ILeafInputData`](../interfaces/ILeafInputData.md)[] |
| `_index?` | `number` |

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[add](../interfaces/IUI.md#add)

#### Inherited from

[Leaf](Leaf.md).[add](Leaf.md#add)

#### Defined in

[leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L622)

___

### remove

▸ **remove**(`_child?`, `destroy?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_child?` | `string` \| `number` \| [`ILeaf`](../interfaces/ILeaf.md) \| [`IFindMethod`](../interfaces/IFindMethod.md) |
| `destroy?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[remove](../interfaces/IUI.md#remove)

#### Inherited from

[Leaf](Leaf.md).[remove](Leaf.md#remove)

#### Defined in

[leafer/packages/display/src/Leaf.ts:624](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L624)

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

[IUI](../interfaces/IUI.md).[dropTo](../interfaces/IUI.md#dropto)

#### Inherited from

[Leaf](Leaf.md).[dropTo](Leaf.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L628)

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

[IUI](../interfaces/IUI.md).[on](../interfaces/IUI.md#on)

#### Inherited from

[Leaf](Leaf.md).[on](Leaf.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:637](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L637)

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

[IUI](../interfaces/IUI.md).[off](../interfaces/IUI.md#off)

#### Inherited from

[Leaf](Leaf.md).[off](Leaf.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:639](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L639)

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

[IUI](../interfaces/IUI.md).[on_](../interfaces/IUI.md#on_)

#### Inherited from

[Leaf](Leaf.md).[on_](Leaf.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:641](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L641)

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

[IUI](../interfaces/IUI.md).[off_](../interfaces/IUI.md#off_)

#### Inherited from

[Leaf](Leaf.md).[off_](Leaf.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:643](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L643)

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

[IUI](../interfaces/IUI.md).[once](../interfaces/IUI.md#once)

#### Inherited from

[Leaf](Leaf.md).[once](Leaf.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:645](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L645)

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

[IUI](../interfaces/IUI.md).[emit](../interfaces/IUI.md#emit)

#### Inherited from

[Leaf](Leaf.md).[emit](Leaf.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L647)

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

[IUI](../interfaces/IUI.md).[emitEvent](../interfaces/IUI.md#emitevent)

#### Inherited from

[Leaf](Leaf.md).[emitEvent](Leaf.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L649)

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

[IUI](../interfaces/IUI.md).[hasEvent](../interfaces/IUI.md#hasevent)

#### Inherited from

[Leaf](Leaf.md).[hasEvent](Leaf.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:651](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L651)

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

[Leaf](Leaf.md).[changeAttr](Leaf.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:655](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L655)

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

[Leaf](Leaf.md).[addAttr](Leaf.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:659](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L659)

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

[IUI](../interfaces/IUI.md).[__emitLifeEvent](../interfaces/IUI.md#__emitlifeevent)

#### Inherited from

[Leaf](Leaf.md).[__emitLifeEvent](Leaf.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:665](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L665)

___

### reset

▸ **reset**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[reset](../interfaces/IUI.md#reset)

#### Overrides

[Leaf](Leaf.md).[reset](Leaf.md#reset)

#### Defined in

[ui/packages/display/src/UI.ts:400](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L400)

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

[IUI](../interfaces/IUI.md).[set](../interfaces/IUI.md#set)

#### Overrides

[Leaf](Leaf.md).[set](Leaf.md#set)

#### Defined in

[ui/packages/display/src/UI.ts:403](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L403)

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

[IUI](../interfaces/IUI.md).[get](../interfaces/IUI.md#get)

#### Overrides

[Leaf](Leaf.md).[get](Leaf.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L415)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IUI](../interfaces/IUI.md).[createProxyData](../interfaces/IUI.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:419](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L419)

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

[IUI](../interfaces/IUI.md).[find](../interfaces/IUI.md#find)

#### Overrides

[Leaf](Leaf.md).[find](Leaf.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:424](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L424)

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

[IUI](../interfaces/IUI.md).[findTag](../interfaces/IUI.md#findtag)

#### Overrides

[Leaf](Leaf.md).[findTag](Leaf.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L426)

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

[IUI](../interfaces/IUI.md).[findOne](../interfaces/IUI.md#findone)

#### Overrides

[Leaf](Leaf.md).[findOne](Leaf.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:428](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L428)

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

[IUI](../interfaces/IUI.md).[findId](../interfaces/IUI.md#findid)

#### Overrides

[Leaf](Leaf.md).[findId](Leaf.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L430)

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

[IUI](../interfaces/IUI.md).[getPath](../interfaces/IUI.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:435](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L435)

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

[IUI](../interfaces/IUI.md).[getPathString](../interfaces/IUI.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L442)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[load](../interfaces/IUI.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:447](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L447)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__onUpdateSize](../interfaces/IUI.md#__onupdatesize)

#### Overrides

[Leaf](Leaf.md).[__onUpdateSize](Leaf.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:451](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L451)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[__updateRenderPath](../interfaces/IUI.md#__updaterenderpath)

#### Overrides

[Leaf](Leaf.md).[__updateRenderPath](Leaf.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L458)

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

[IUI](../interfaces/IUI.md).[__drawRenderPath](../interfaces/IUI.md#__drawrenderpath)

#### Overrides

[Leaf](Leaf.md).[__drawRenderPath](Leaf.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L466)

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

[IUI](../interfaces/IUI.md).[__drawPath](../interfaces/IUI.md#__drawpath)

#### Overrides

[Leaf](Leaf.md).[__drawPath](Leaf.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:471](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L471)

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

[IUI](../interfaces/IUI.md).[__drawPathByData](../interfaces/IUI.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:476](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L476)

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

[IUI](../interfaces/IUI.md).[__drawPathByBox](../interfaces/IUI.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:480](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L480)

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

[IUI](../interfaces/IUI.md).[drawImagePlaceholder](../interfaces/IUI.md#drawimageplaceholder)

#### Defined in

[ui/packages/display/src/UI.ts:488](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L488)

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

[IUI](../interfaces/IUI.md).[animate](../interfaces/IUI.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:494](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L494)

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

[IUI](../interfaces/IUI.md).[killAnimate](../interfaces/IUI.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:498](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L498)

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

[IUI](../interfaces/IUI.md).[export](../interfaces/IUI.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:504](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L504)

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

[IUI](../interfaces/IUI.md).[syncExport](../interfaces/IUI.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L508)

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

[IUI](../interfaces/IUI.md).[clone](../interfaces/IUI.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L512)

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

#### Defined in

[ui/packages/display/src/UI.ts:518](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L518)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/UI.ts:522](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L522)

___

### registerData

▸ `Static` **registerData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIData`](../interfaces/IUIData.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/UI.ts:526](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L526)

___

### setEditConfig

▸ `Static` **setEditConfig**(`_config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_config` | [`IEditorConfig`](../interfaces/IEditorConfig.md) \| [`IEditorConfigFunction`](../interfaces/IEditorConfigFunction.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/UI.ts:533](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L533)

___

### setEditOuter

▸ `Static` **setEditOuter**(`_toolName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_toolName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/UI.ts:535](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L535)

___

### setEditInner

▸ `Static` **setEditInner**(`_editorName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_editorName` | `string` \| [`IEditToolFunction`](../interfaces/IEditToolFunction.md) |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/UI.ts:537](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L537)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IUI](../interfaces/IUI.md).[destroy](../interfaces/IUI.md#destroy)

#### Overrides

[Leaf](Leaf.md).[destroy](Leaf.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L540)
