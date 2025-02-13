# Class: Canvas

## Hierarchy

- [`Rect`](Rect.md)

  ↳ **`Canvas`**

## Implements

- [`ICanvas`](../interfaces/ICanvas.md)

## Table of contents

### Constructors

- [constructor](Canvas.md#constructor)

### Properties

- [innerId](Canvas.md#innerid)
- [syncEventer](Canvas.md#synceventer)
- [lockNormalStyle](Canvas.md#locknormalstyle)
- [\_\_layout](Canvas.md#__layout)
- [\_\_world](Canvas.md#__world)
- [\_\_local](Canvas.md#__local)
- [\_\_nowWorld](Canvas.md#__nowworld)
- [\_\_cameraWorld](Canvas.md#__cameraworld)
- [\_\_worldOpacity](Canvas.md#__worldopacity)
- [\_\_level](Canvas.md#__level)
- [\_\_tempNumber](Canvas.md#__tempnumber)
- [\_\_hasAutoLayout](Canvas.md#__hasautolayout)
- [\_\_hasMask](Canvas.md#__hasmask)
- [\_\_hasEraser](Canvas.md#__haseraser)
- [\_\_hitCanvas](Canvas.md#__hitcanvas)
- [\_\_captureMap](Canvas.md#__capturemap)
- [\_\_bubbleMap](Canvas.md#__bubblemap)
- [noBounds](Canvas.md#nobounds)
- [destroyed](Canvas.md#destroyed)
- [\_\_](Canvas.md#__)
- [width](Canvas.md#width)
- [height](Canvas.md#height)
- [pixelRatio](Canvas.md#pixelratio)
- [smooth](Canvas.md#smooth)
- [safeResize](Canvas.md#saferesize)
- [contextSettings](Canvas.md#contextsettings)
- [canvas](Canvas.md#canvas)
- [context](Canvas.md#context)
- [url](Canvas.md#url)
- [proxyData](Canvas.md#proxydata)
- [\_\_proxyData](Canvas.md#__proxydata)
- [leafer](Canvas.md#leafer)
- [parent](Canvas.md#parent)
- [zoomLayer](Canvas.md#zoomlayer)
- [children](Canvas.md#children)
- [id](Canvas.md#id)
- [name](Canvas.md#name)
- [className](Canvas.md#classname)
- [blendMode](Canvas.md#blendmode)
- [opacity](Canvas.md#opacity)
- [visible](Canvas.md#visible)
- [locked](Canvas.md#locked)
- [zIndex](Canvas.md#zindex)
- [mask](Canvas.md#mask)
- [eraser](Canvas.md#eraser)
- [x](Canvas.md#x)
- [y](Canvas.md#y)
- [scaleX](Canvas.md#scalex)
- [scaleY](Canvas.md#scaley)
- [rotation](Canvas.md#rotation)
- [skewX](Canvas.md#skewx)
- [skewY](Canvas.md#skewy)
- [offsetX](Canvas.md#offsetx)
- [offsetY](Canvas.md#offsety)
- [scrollX](Canvas.md#scrollx)
- [scrollY](Canvas.md#scrolly)
- [origin](Canvas.md#origin)
- [around](Canvas.md#around)
- [lazy](Canvas.md#lazy)
- [path](Canvas.md#path)
- [windingRule](Canvas.md#windingrule)
- [closed](Canvas.md#closed)
- [flow](Canvas.md#flow)
- [padding](Canvas.md#padding)
- [gap](Canvas.md#gap)
- [flowAlign](Canvas.md#flowalign)
- [flowWrap](Canvas.md#flowwrap)
- [itemBox](Canvas.md#itembox)
- [inFlow](Canvas.md#inflow)
- [autoWidth](Canvas.md#autowidth)
- [autoHeight](Canvas.md#autoheight)
- [lockRatio](Canvas.md#lockratio)
- [autoBox](Canvas.md#autobox)
- [widthRange](Canvas.md#widthrange)
- [heightRange](Canvas.md#heightrange)
- [draggable](Canvas.md#draggable)
- [dragBounds](Canvas.md#dragbounds)
- [editable](Canvas.md#editable)
- [hittable](Canvas.md#hittable)
- [hitFill](Canvas.md#hitfill)
- [hitStroke](Canvas.md#hitstroke)
- [hitBox](Canvas.md#hitbox)
- [hitChildren](Canvas.md#hitchildren)
- [hitSelf](Canvas.md#hitself)
- [hitRadius](Canvas.md#hitradius)
- [cursor](Canvas.md#cursor)
- [fill](Canvas.md#fill)
- [stroke](Canvas.md#stroke)
- [strokeAlign](Canvas.md#strokealign)
- [strokeWidth](Canvas.md#strokewidth)
- [strokeWidthFixed](Canvas.md#strokewidthfixed)
- [strokeCap](Canvas.md#strokecap)
- [strokeJoin](Canvas.md#strokejoin)
- [dashPattern](Canvas.md#dashpattern)
- [dashOffset](Canvas.md#dashoffset)
- [miterLimit](Canvas.md#miterlimit)
- [startArrow](Canvas.md#startarrow)
- [endArrow](Canvas.md#endarrow)
- [cornerRadius](Canvas.md#cornerradius)
- [cornerSmoothing](Canvas.md#cornersmoothing)
- [shadow](Canvas.md#shadow)
- [innerShadow](Canvas.md#innershadow)
- [blur](Canvas.md#blur)
- [backgroundBlur](Canvas.md#backgroundblur)
- [grayscale](Canvas.md#grayscale)
- [filter](Canvas.md#filter)
- [animation](Canvas.md#animation)
- [animationOut](Canvas.md#animationout)
- [transition](Canvas.md#transition)
- [transitionOut](Canvas.md#transitionout)
- [motionPath](Canvas.md#motionpath)
- [motionPrecision](Canvas.md#motionprecision)
- [motion](Canvas.md#motion)
- [motionRotation](Canvas.md#motionrotation)
- [states](Canvas.md#states)
- [state](Canvas.md#state)
- [selected](Canvas.md#selected)
- [disabled](Canvas.md#disabled)
- [normalStyle](Canvas.md#normalstyle)
- [hoverStyle](Canvas.md#hoverstyle)
- [pressStyle](Canvas.md#pressstyle)
- [focusStyle](Canvas.md#focusstyle)
- [selectedStyle](Canvas.md#selectedstyle)
- [disabledStyle](Canvas.md#disabledstyle)
- [placeholderStyle](Canvas.md#placeholderstyle)
- [button](Canvas.md#button)
- [data](Canvas.md#data)
- [\_\_animate](Canvas.md#__animate)

### Accessors

- [tag](Canvas.md#tag)
- [innerName](Canvas.md#innername)
- [\_\_DataProcessor](Canvas.md#__dataprocessor)
- [\_\_LayoutProcessor](Canvas.md#__layoutprocessor)
- [leaferIsCreated](Canvas.md#leaferiscreated)
- [leaferIsReady](Canvas.md#leaferisready)
- [isLeafer](Canvas.md#isleafer)
- [isBranch](Canvas.md#isbranch)
- [isBranchLeaf](Canvas.md#isbranchleaf)
- [\_\_localMatrix](Canvas.md#__localmatrix)
- [\_\_localBoxBounds](Canvas.md#__localboxbounds)
- [worldTransform](Canvas.md#worldtransform)
- [localTransform](Canvas.md#localtransform)
- [boxBounds](Canvas.md#boxbounds)
- [renderBounds](Canvas.md#renderbounds)
- [worldBoxBounds](Canvas.md#worldboxbounds)
- [worldStrokeBounds](Canvas.md#worldstrokebounds)
- [worldRenderBounds](Canvas.md#worldrenderbounds)
- [worldOpacity](Canvas.md#worldopacity)
- [\_\_worldFlipped](Canvas.md#__worldflipped)
- [\_\_onlyHitMask](Canvas.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Canvas.md#__ignorehitworld)
- [\_\_inLazyBounds](Canvas.md#__inlazybounds)
- [pathInputed](Canvas.md#pathinputed)
- [event](Canvas.md#event)
- [\_\_tag](Canvas.md#__tag)
- [ready](Canvas.md#ready)
- [app](Canvas.md#app)
- [isFrame](Canvas.md#isframe)
- [scale](Canvas.md#scale)
- [pen](Canvas.md#pen)
- [editConfig](Canvas.md#editconfig)
- [editOuter](Canvas.md#editouter)
- [editInner](Canvas.md#editinner)

### Methods

- [resetCustom](Canvas.md#resetcustom)
- [waitParent](Canvas.md#waitparent)
- [waitLeafer](Canvas.md#waitleafer)
- [nextRender](Canvas.md#nextrender)
- [removeNextRender](Canvas.md#removenextrender)
- [\_\_bindLeafer](Canvas.md#__bindleafer)
- [setAttr](Canvas.md#setattr)
- [getAttr](Canvas.md#getattr)
- [getComputedAttr](Canvas.md#getcomputedattr)
- [toJSON](Canvas.md#tojson)
- [toString](Canvas.md#tostring)
- [toSVG](Canvas.md#tosvg)
- [\_\_SVG](Canvas.md#__svg)
- [toHTML](Canvas.md#tohtml)
- [\_\_setAttr](Canvas.md#__setattr)
- [\_\_getAttr](Canvas.md#__getattr)
- [setProxyAttr](Canvas.md#setproxyattr)
- [getProxyAttr](Canvas.md#getproxyattr)
- [focus](Canvas.md#focus)
- [updateState](Canvas.md#updatestate)
- [updateLayout](Canvas.md#updatelayout)
- [forceUpdate](Canvas.md#forceupdate)
- [forceRender](Canvas.md#forcerender)
- [\_\_extraUpdate](Canvas.md#__extraupdate)
- [\_\_updateWorldMatrix](Canvas.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Canvas.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Canvas.md#__updateworldbounds)
- [\_\_updateLocalBounds](Canvas.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Canvas.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Canvas.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Canvas.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Canvas.md#__updateboxbounds)
- [\_\_updateContentBounds](Canvas.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Canvas.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Canvas.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Canvas.md#__updateautolayout)
- [\_\_updateFlowLayout](Canvas.md#__updateflowlayout)
- [\_\_updateNaturalSize](Canvas.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Canvas.md#__updatestrokespread)
- [\_\_updateRenderSpread](Canvas.md#__updaterenderspread)
- [\_\_updateEraser](Canvas.md#__updateeraser)
- [\_\_renderEraser](Canvas.md#__rendereraser)
- [\_\_updateMask](Canvas.md#__updatemask)
- [\_\_renderMask](Canvas.md#__rendermask)
- [\_\_getNowWorld](Canvas.md#__getnowworld)
- [getTransform](Canvas.md#gettransform)
- [getBounds](Canvas.md#getbounds)
- [getLayoutBounds](Canvas.md#getlayoutbounds)
- [getLayoutPoints](Canvas.md#getlayoutpoints)
- [getWorldBounds](Canvas.md#getworldbounds)
- [worldToLocal](Canvas.md#worldtolocal)
- [localToWorld](Canvas.md#localtoworld)
- [worldToInner](Canvas.md#worldtoinner)
- [innerToWorld](Canvas.md#innertoworld)
- [getBoxPoint](Canvas.md#getboxpoint)
- [getBoxPointByInner](Canvas.md#getboxpointbyinner)
- [getInnerPoint](Canvas.md#getinnerpoint)
- [getInnerPointByBox](Canvas.md#getinnerpointbybox)
- [getInnerPointByLocal](Canvas.md#getinnerpointbylocal)
- [getLocalPoint](Canvas.md#getlocalpoint)
- [getLocalPointByInner](Canvas.md#getlocalpointbyinner)
- [getPagePoint](Canvas.md#getpagepoint)
- [getWorldPoint](Canvas.md#getworldpoint)
- [getWorldPointByBox](Canvas.md#getworldpointbybox)
- [getWorldPointByLocal](Canvas.md#getworldpointbylocal)
- [getWorldPointByPage](Canvas.md#getworldpointbypage)
- [setTransform](Canvas.md#settransform)
- [transform](Canvas.md#transform)
- [move](Canvas.md#move)
- [moveInner](Canvas.md#moveinner)
- [scaleOf](Canvas.md#scaleof)
- [rotateOf](Canvas.md#rotateof)
- [skewOf](Canvas.md#skewof)
- [transformWorld](Canvas.md#transformworld)
- [moveWorld](Canvas.md#moveworld)
- [scaleOfWorld](Canvas.md#scaleofworld)
- [rotateOfWorld](Canvas.md#rotateofworld)
- [skewOfWorld](Canvas.md#skewofworld)
- [flip](Canvas.md#flip)
- [scaleResize](Canvas.md#scaleresize)
- [\_\_scaleResize](Canvas.md#__scaleresize)
- [resizeWidth](Canvas.md#resizewidth)
- [resizeHeight](Canvas.md#resizeheight)
- [\_\_hitWorld](Canvas.md#__hitworld)
- [\_\_hit](Canvas.md#__hit)
- [\_\_hitFill](Canvas.md#__hitfill)
- [\_\_hitStroke](Canvas.md#__hitstroke)
- [\_\_hitPixel](Canvas.md#__hitpixel)
- [\_\_drawHitPath](Canvas.md#__drawhitpath)
- [\_\_updateHitCanvas](Canvas.md#__updatehitcanvas)
- [\_\_render](Canvas.md#__render)
- [\_\_drawFast](Canvas.md#__drawfast)
- [\_\_draw](Canvas.md#__draw)
- [\_\_clip](Canvas.md#__clip)
- [\_\_renderShape](Canvas.md#__rendershape)
- [\_\_updateWorldOpacity](Canvas.md#__updateworldopacity)
- [\_\_updateChange](Canvas.md#__updatechange)
- [\_\_updatePath](Canvas.md#__updatepath)
- [getMotionPathData](Canvas.md#getmotionpathdata)
- [getMotionPoint](Canvas.md#getmotionpoint)
- [getMotionTotal](Canvas.md#getmotiontotal)
- [\_\_updateMotionPath](Canvas.md#__updatemotionpath)
- [\_\_runAnimation](Canvas.md#__runanimation)
- [\_\_updateSortChildren](Canvas.md#__updatesortchildren)
- [add](Canvas.md#add)
- [remove](Canvas.md#remove)
- [dropTo](Canvas.md#dropto)
- [on](Canvas.md#on)
- [off](Canvas.md#off)
- [on\_](Canvas.md#on_)
- [off\_](Canvas.md#off_)
- [once](Canvas.md#once)
- [emit](Canvas.md#emit)
- [emitEvent](Canvas.md#emitevent)
- [hasEvent](Canvas.md#hasevent)
- [changeAttr](Canvas.md#changeattr)
- [addAttr](Canvas.md#addattr)
- [\_\_emitLifeEvent](Canvas.md#__emitlifeevent)
- [drawImage](Canvas.md#drawimage)
- [draw](Canvas.md#draw)
- [paint](Canvas.md#paint)
- [\_\_drawContent](Canvas.md#__drawcontent)
- [\_\_updateSize](Canvas.md#__updatesize)
- [destroy](Canvas.md#destroy)
- [reset](Canvas.md#reset)
- [set](Canvas.md#set)
- [get](Canvas.md#get)
- [createProxyData](Canvas.md#createproxydata)
- [find](Canvas.md#find)
- [findTag](Canvas.md#findtag)
- [findOne](Canvas.md#findone)
- [findId](Canvas.md#findid)
- [getPath](Canvas.md#getpath)
- [getPathString](Canvas.md#getpathstring)
- [load](Canvas.md#load)
- [\_\_onUpdateSize](Canvas.md#__onupdatesize)
- [\_\_updateRenderPath](Canvas.md#__updaterenderpath)
- [\_\_drawRenderPath](Canvas.md#__drawrenderpath)
- [\_\_drawPath](Canvas.md#__drawpath)
- [\_\_drawPathByData](Canvas.md#__drawpathbydata)
- [\_\_drawPathByBox](Canvas.md#__drawpathbybox)
- [animate](Canvas.md#animate)
- [killAnimate](Canvas.md#killanimate)
- [export](Canvas.md#export)
- [clone](Canvas.md#clone)
- [one](Canvas.md#one)
- [registerUI](Canvas.md#registerui)
- [registerData](Canvas.md#registerdata)
- [setEditConfig](Canvas.md#seteditconfig)
- [setEditOuter](Canvas.md#seteditouter)
- [setEditInner](Canvas.md#seteditinner)

## Constructors

### constructor

• **new Canvas**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ICanvasInputData`](../interfaces/ICanvasInputData.md) |

#### Overrides

[Rect](Rect.md).[constructor](Rect.md#constructor)

#### Defined in

[ui/packages/display/src/Canvas.ts:45](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L45)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[innerId](../interfaces/ICanvas.md#innerid)

#### Inherited from

[Rect](Rect.md).[innerId](Rect.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[syncEventer](../interfaces/ICanvas.md#synceventer)

#### Inherited from

[Rect](Rect.md).[syncEventer](Rect.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[lockNormalStyle](../interfaces/ICanvas.md#locknormalstyle)

#### Inherited from

[Rect](Rect.md).[lockNormalStyle](Rect.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__layout](../interfaces/ICanvas.md#__layout)

#### Inherited from

[Rect](Rect.md).[__layout](Rect.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__world](../interfaces/ICanvas.md#__world)

#### Inherited from

[Rect](Rect.md).[__world](Rect.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__local](../interfaces/ICanvas.md#__local)

#### Inherited from

[Rect](Rect.md).[__local](Rect.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__nowWorld](../interfaces/ICanvas.md#__nowworld)

#### Inherited from

[Rect](Rect.md).[__nowWorld](Rect.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__cameraWorld](../interfaces/ICanvas.md#__cameraworld)

#### Inherited from

[Rect](Rect.md).[__cameraWorld](Rect.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__worldOpacity](../interfaces/ICanvas.md#__worldopacity)

#### Inherited from

[Rect](Rect.md).[__worldOpacity](Rect.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__level](../interfaces/ICanvas.md#__level)

#### Inherited from

[Rect](Rect.md).[__level](Rect.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__tempNumber](../interfaces/ICanvas.md#__tempnumber)

#### Inherited from

[Rect](Rect.md).[__tempNumber](Rect.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__hasAutoLayout](../interfaces/ICanvas.md#__hasautolayout)

#### Inherited from

[Rect](Rect.md).[__hasAutoLayout](Rect.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__hasMask](../interfaces/ICanvas.md#__hasmask)

#### Inherited from

[Rect](Rect.md).[__hasMask](Rect.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__hasEraser](../interfaces/ICanvas.md#__haseraser)

#### Inherited from

[Rect](Rect.md).[__hasEraser](Rect.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__hitCanvas](../interfaces/ICanvas.md#__hitcanvas)

#### Inherited from

[Rect](Rect.md).[__hitCanvas](Rect.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__captureMap](../interfaces/ICanvas.md#__capturemap)

#### Inherited from

[Rect](Rect.md).[__captureMap](Rect.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__bubbleMap](../interfaces/ICanvas.md#__bubblemap)

#### Inherited from

[Rect](Rect.md).[__bubbleMap](Rect.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L97)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[noBounds](../interfaces/ICanvas.md#nobounds)

#### Inherited from

[Rect](Rect.md).[noBounds](Rect.md#nobounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L103)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[destroyed](../interfaces/ICanvas.md#destroyed)

#### Inherited from

[Rect](Rect.md).[destroyed](Rect.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`ICanvasData`](../interfaces/ICanvasData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__](../interfaces/ICanvas.md#__)

#### Overrides

[Rect](Rect.md).[__](Rect.md#__)

#### Defined in

[ui/packages/display/src/Canvas.ts:17](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L17)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[width](../interfaces/ICanvas.md#width)

#### Overrides

[Rect](Rect.md).[width](Rect.md#width)

#### Defined in

[ui/packages/display/src/Canvas.ts:20](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L20)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[height](../interfaces/ICanvas.md#height)

#### Overrides

[Rect](Rect.md).[height](Rect.md#height)

#### Defined in

[ui/packages/display/src/Canvas.ts:23](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L23)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[pixelRatio](../interfaces/ICanvas.md#pixelratio)

#### Overrides

[Rect](Rect.md).[pixelRatio](Rect.md#pixelratio)

#### Defined in

[ui/packages/display/src/Canvas.ts:26](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L26)

___

### smooth

• `Optional` **smooth**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[smooth](../interfaces/ICanvas.md#smooth)

#### Defined in

[ui/packages/display/src/Canvas.ts:29](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L29)

___

### safeResize

• `Optional` **safeResize**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[safeResize](../interfaces/ICanvas.md#saferesize)

#### Defined in

[ui/packages/display/src/Canvas.ts:32](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L32)

___

### contextSettings

• `Optional` **contextSettings**: `ICanvasRenderingContext2DSettings`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[contextSettings](../interfaces/ICanvas.md#contextsettings)

#### Defined in

[ui/packages/display/src/Canvas.ts:35](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L35)

___

### canvas

• `Optional` **canvas**: [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[canvas](../interfaces/ICanvas.md#canvas)

#### Defined in

[ui/packages/display/src/Canvas.ts:37](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L37)

___

### context

• `Optional` **context**: [`ICanvasContext2D`](../interfaces/ICanvasContext2D.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[context](../interfaces/ICanvas.md#context)

#### Defined in

[ui/packages/display/src/Canvas.ts:39](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L39)

___

### url

• `Optional` **url**: `string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[url](../interfaces/ICanvas.md#url)

#### Defined in

[ui/packages/display/src/Canvas.ts:43](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L43)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[proxyData](../interfaces/ICanvas.md#proxydata)

#### Inherited from

[Rect](Rect.md).[proxyData](Rect.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__proxyData](../interfaces/ICanvas.md#__proxydata)

#### Inherited from

[Rect](Rect.md).[__proxyData](Rect.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[leafer](../interfaces/ICanvas.md#leafer)

#### Inherited from

[Rect](Rect.md).[leafer](Rect.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[parent](../interfaces/ICanvas.md#parent)

#### Inherited from

[Rect](Rect.md).[parent](Rect.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[zoomLayer](../interfaces/ICanvas.md#zoomlayer)

#### Inherited from

[Rect](Rect.md).[zoomLayer](Rect.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[children](../interfaces/ICanvas.md#children)

#### Inherited from

[Rect](Rect.md).[children](Rect.md#children)

#### Defined in

[ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[id](../interfaces/ICanvas.md#id)

#### Inherited from

[Rect](Rect.md).[id](Rect.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[name](../interfaces/ICanvas.md#name)

#### Inherited from

[Rect](Rect.md).[name](Rect.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[className](../interfaces/ICanvas.md#classname)

#### Inherited from

[Rect](Rect.md).[className](Rect.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[blendMode](../interfaces/ICanvas.md#blendmode)

#### Inherited from

[Rect](Rect.md).[blendMode](Rect.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[opacity](../interfaces/ICanvas.md#opacity)

#### Inherited from

[Rect](Rect.md).[opacity](Rect.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[visible](../interfaces/ICanvas.md#visible)

#### Inherited from

[Rect](Rect.md).[visible](Rect.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[locked](../interfaces/ICanvas.md#locked)

#### Inherited from

[Rect](Rect.md).[locked](Rect.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L61)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[zIndex](../interfaces/ICanvas.md#zindex)

#### Inherited from

[Rect](Rect.md).[zIndex](Rect.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L65)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[mask](../interfaces/ICanvas.md#mask)

#### Inherited from

[Rect](Rect.md).[mask](Rect.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:69](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L69)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[eraser](../interfaces/ICanvas.md#eraser)

#### Inherited from

[Rect](Rect.md).[eraser](Rect.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L72)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[x](../interfaces/ICanvas.md#x)

#### Inherited from

[Rect](Rect.md).[x](Rect.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:77](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L77)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[y](../interfaces/ICanvas.md#y)

#### Inherited from

[Rect](Rect.md).[y](Rect.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L80)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scaleX](../interfaces/ICanvas.md#scalex)

#### Inherited from

[Rect](Rect.md).[scaleX](Rect.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L91)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scaleY](../interfaces/ICanvas.md#scaley)

#### Inherited from

[Rect](Rect.md).[scaleY](Rect.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:94](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L94)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[rotation](../interfaces/ICanvas.md#rotation)

#### Inherited from

[Rect](Rect.md).[rotation](Rect.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L98)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[skewX](../interfaces/ICanvas.md#skewx)

#### Inherited from

[Rect](Rect.md).[skewX](Rect.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L102)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[skewY](../interfaces/ICanvas.md#skewy)

#### Inherited from

[Rect](Rect.md).[skewY](Rect.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L105)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[offsetX](../interfaces/ICanvas.md#offsetx)

#### Inherited from

[Rect](Rect.md).[offsetX](Rect.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:110](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L110)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[offsetY](../interfaces/ICanvas.md#offsety)

#### Inherited from

[Rect](Rect.md).[offsetY](Rect.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L113)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scrollX](../interfaces/ICanvas.md#scrollx)

#### Inherited from

[Rect](Rect.md).[scrollX](Rect.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L117)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scrollY](../interfaces/ICanvas.md#scrolly)

#### Inherited from

[Rect](Rect.md).[scrollY](Rect.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L120)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[origin](../interfaces/ICanvas.md#origin)

#### Inherited from

[Rect](Rect.md).[origin](Rect.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:125](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L125)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[around](../interfaces/ICanvas.md#around)

#### Inherited from

[Rect](Rect.md).[around](Rect.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L128)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[lazy](../interfaces/ICanvas.md#lazy)

#### Inherited from

[Rect](Rect.md).[lazy](Rect.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:133](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L133)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[path](../interfaces/ICanvas.md#path)

#### Inherited from

[Rect](Rect.md).[path](Rect.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:141](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L141)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[windingRule](../interfaces/ICanvas.md#windingrule)

#### Inherited from

[Rect](Rect.md).[windingRule](Rect.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L144)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[closed](../interfaces/ICanvas.md#closed)

#### Inherited from

[Rect](Rect.md).[closed](Rect.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L147)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[flow](../interfaces/ICanvas.md#flow)

#### Inherited from

[Rect](Rect.md).[flow](Rect.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L151)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[padding](../interfaces/ICanvas.md#padding)

#### Inherited from

[Rect](Rect.md).[padding](Rect.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L154)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[gap](../interfaces/ICanvas.md#gap)

#### Inherited from

[Rect](Rect.md).[gap](Rect.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:156](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L156)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[flowAlign](../interfaces/ICanvas.md#flowalign)

#### Inherited from

[Rect](Rect.md).[flowAlign](Rect.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L158)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[flowWrap](../interfaces/ICanvas.md#flowwrap)

#### Inherited from

[Rect](Rect.md).[flowWrap](Rect.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:160](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L160)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[itemBox](../interfaces/ICanvas.md#itembox)

#### Inherited from

[Rect](Rect.md).[itemBox](Rect.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L163)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[inFlow](../interfaces/ICanvas.md#inflow)

#### Inherited from

[Rect](Rect.md).[inFlow](Rect.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L165)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[autoWidth](../interfaces/ICanvas.md#autowidth)

#### Inherited from

[Rect](Rect.md).[autoWidth](Rect.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:168](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L168)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[autoHeight](../interfaces/ICanvas.md#autoheight)

#### Inherited from

[Rect](Rect.md).[autoHeight](Rect.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L170)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[lockRatio](../interfaces/ICanvas.md#lockratio)

#### Inherited from

[Rect](Rect.md).[lockRatio](Rect.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L173)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[autoBox](../interfaces/ICanvas.md#autobox)

#### Inherited from

[Rect](Rect.md).[autoBox](Rect.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L175)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[widthRange](../interfaces/ICanvas.md#widthrange)

#### Inherited from

[Rect](Rect.md).[widthRange](Rect.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L178)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[heightRange](../interfaces/ICanvas.md#heightrange)

#### Inherited from

[Rect](Rect.md).[heightRange](Rect.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L181)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[draggable](../interfaces/ICanvas.md#draggable)

#### Inherited from

[Rect](Rect.md).[draggable](Rect.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L186)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[dragBounds](../interfaces/ICanvas.md#dragbounds)

#### Inherited from

[Rect](Rect.md).[dragBounds](Rect.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L189)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[editable](../interfaces/ICanvas.md#editable)

#### Inherited from

[Rect](Rect.md).[editable](Rect.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L193)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hittable](../interfaces/ICanvas.md#hittable)

#### Inherited from

[Rect](Rect.md).[hittable](Rect.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:198](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L198)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitFill](../interfaces/ICanvas.md#hitfill)

#### Inherited from

[Rect](Rect.md).[hitFill](Rect.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L201)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitStroke](../interfaces/ICanvas.md#hitstroke)

#### Inherited from

[Rect](Rect.md).[hitStroke](Rect.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L204)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitBox](../interfaces/ICanvas.md#hitbox)

#### Inherited from

[Rect](Rect.md).[hitBox](Rect.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L207)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitChildren](../interfaces/ICanvas.md#hitchildren)

#### Inherited from

[Rect](Rect.md).[hitChildren](Rect.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:210](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L210)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitSelf](../interfaces/ICanvas.md#hitself)

#### Inherited from

[Rect](Rect.md).[hitSelf](Rect.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:213](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L213)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hitRadius](../interfaces/ICanvas.md#hitradius)

#### Inherited from

[Rect](Rect.md).[hitRadius](Rect.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L216)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[cursor](../interfaces/ICanvas.md#cursor)

#### Inherited from

[Rect](Rect.md).[cursor](Rect.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L219)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[fill](../interfaces/ICanvas.md#fill)

#### Inherited from

[Rect](Rect.md).[fill](Rect.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L227)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[stroke](../interfaces/ICanvas.md#stroke)

#### Inherited from

[Rect](Rect.md).[stroke](Rect.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L232)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[strokeAlign](../interfaces/ICanvas.md#strokealign)

#### Inherited from

[Rect](Rect.md).[strokeAlign](Rect.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L235)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[strokeWidth](../interfaces/ICanvas.md#strokewidth)

#### Inherited from

[Rect](Rect.md).[strokeWidth](Rect.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L238)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[strokeWidthFixed](../interfaces/ICanvas.md#strokewidthfixed)

#### Inherited from

[Rect](Rect.md).[strokeWidthFixed](Rect.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L241)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[strokeCap](../interfaces/ICanvas.md#strokecap)

#### Inherited from

[Rect](Rect.md).[strokeCap](Rect.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L244)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[strokeJoin](../interfaces/ICanvas.md#strokejoin)

#### Inherited from

[Rect](Rect.md).[strokeJoin](Rect.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:247](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L247)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[dashPattern](../interfaces/ICanvas.md#dashpattern)

#### Inherited from

[Rect](Rect.md).[dashPattern](Rect.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L250)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[dashOffset](../interfaces/ICanvas.md#dashoffset)

#### Inherited from

[Rect](Rect.md).[dashOffset](Rect.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:253](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L253)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[miterLimit](../interfaces/ICanvas.md#miterlimit)

#### Inherited from

[Rect](Rect.md).[miterLimit](Rect.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L256)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[startArrow](../interfaces/ICanvas.md#startarrow)

#### Inherited from

[Rect](Rect.md).[startArrow](Rect.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L261)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[endArrow](../interfaces/ICanvas.md#endarrow)

#### Inherited from

[Rect](Rect.md).[endArrow](Rect.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L263)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[cornerRadius](../interfaces/ICanvas.md#cornerradius)

#### Inherited from

[Rect](Rect.md).[cornerRadius](Rect.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L268)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[cornerSmoothing](../interfaces/ICanvas.md#cornersmoothing)

#### Inherited from

[Rect](Rect.md).[cornerSmoothing](Rect.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L271)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[shadow](../interfaces/ICanvas.md#shadow)

#### Inherited from

[Rect](Rect.md).[shadow](Rect.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L276)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[innerShadow](../interfaces/ICanvas.md#innershadow)

#### Inherited from

[Rect](Rect.md).[innerShadow](Rect.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L279)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[blur](../interfaces/ICanvas.md#blur)

#### Inherited from

[Rect](Rect.md).[blur](Rect.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L282)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[backgroundBlur](../interfaces/ICanvas.md#backgroundblur)

#### Inherited from

[Rect](Rect.md).[backgroundBlur](Rect.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L285)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[grayscale](../interfaces/ICanvas.md#grayscale)

#### Inherited from

[Rect](Rect.md).[grayscale](Rect.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:288](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L288)

___

### filter

• `Optional` **filter**: [`IObject`](../interfaces/IObject.md) \| [`IObject`](../interfaces/IObject.md)[]

#### Inherited from

[Rect](Rect.md).[filter](Rect.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L290)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[animation](../interfaces/ICanvas.md#animation)

#### Inherited from

[Rect](Rect.md).[animation](Rect.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L295)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[animationOut](../interfaces/ICanvas.md#animationout)

#### Inherited from

[Rect](Rect.md).[animationOut](Rect.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L297)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[transition](../interfaces/ICanvas.md#transition)

#### Inherited from

[Rect](Rect.md).[transition](Rect.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L300)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[transitionOut](../interfaces/ICanvas.md#transitionout)

#### Inherited from

[Rect](Rect.md).[transitionOut](Rect.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L302)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[motionPath](../interfaces/ICanvas.md#motionpath)

#### Inherited from

[Rect](Rect.md).[motionPath](Rect.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:307](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L307)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[motionPrecision](../interfaces/ICanvas.md#motionprecision)

#### Inherited from

[Rect](Rect.md).[motionPrecision](Rect.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L309)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[motion](../interfaces/ICanvas.md#motion)

#### Inherited from

[Rect](Rect.md).[motion](Rect.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L312)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[motionRotation](../interfaces/ICanvas.md#motionrotation)

#### Inherited from

[Rect](Rect.md).[motionRotation](Rect.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L314)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[states](../interfaces/ICanvas.md#states)

#### Inherited from

[Rect](Rect.md).[states](Rect.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L319)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[state](../interfaces/ICanvas.md#state)

#### Inherited from

[Rect](Rect.md).[state](Rect.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L321)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[selected](../interfaces/ICanvas.md#selected)

#### Inherited from

[Rect](Rect.md).[selected](Rect.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L324)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[disabled](../interfaces/ICanvas.md#disabled)

#### Inherited from

[Rect](Rect.md).[disabled](Rect.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L326)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[normalStyle](../interfaces/ICanvas.md#normalstyle)

#### Inherited from

[Rect](Rect.md).[normalStyle](Rect.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L329)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[hoverStyle](../interfaces/ICanvas.md#hoverstyle)

#### Inherited from

[Rect](Rect.md).[hoverStyle](Rect.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L331)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[pressStyle](../interfaces/ICanvas.md#pressstyle)

#### Inherited from

[Rect](Rect.md).[pressStyle](Rect.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L333)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[focusStyle](../interfaces/ICanvas.md#focusstyle)

#### Inherited from

[Rect](Rect.md).[focusStyle](Rect.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:335](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L335)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[selectedStyle](../interfaces/ICanvas.md#selectedstyle)

#### Inherited from

[Rect](Rect.md).[selectedStyle](Rect.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L337)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[disabledStyle](../interfaces/ICanvas.md#disabledstyle)

#### Inherited from

[Rect](Rect.md).[disabledStyle](Rect.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L339)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[placeholderStyle](../interfaces/ICanvas.md#placeholderstyle)

#### Inherited from

[Rect](Rect.md).[placeholderStyle](Rect.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L341)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[button](../interfaces/ICanvas.md#button)

#### Inherited from

[Rect](Rect.md).[button](Rect.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L344)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[data](../interfaces/ICanvas.md#data)

#### Inherited from

[Rect](Rect.md).[data](Rect.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L349)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__animate](../interfaces/ICanvas.md#__animate)

#### Inherited from

[Rect](Rect.md).[__animate](Rect.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:355](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L355)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[tag](../interfaces/ICanvas.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[tag](../interfaces/ICanvas.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[innerName](../interfaces/ICanvas.md#innername)

#### Inherited from

Rect.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__DataProcessor](../interfaces/ICanvas.md#__dataprocessor)

#### Inherited from

Rect.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__LayoutProcessor](../interfaces/ICanvas.md#__layoutprocessor)

#### Inherited from

Rect.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[leaferIsCreated](../interfaces/ICanvas.md#leaferiscreated)

#### Inherited from

Rect.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[leaferIsReady](../interfaces/ICanvas.md#leaferisready)

#### Inherited from

Rect.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[isLeafer](../interfaces/ICanvas.md#isleafer)

#### Inherited from

Rect.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L42)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[isBranch](../interfaces/ICanvas.md#isbranch)

#### Inherited from

Rect.isBranch

#### Defined in

[leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L43)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[isBranchLeaf](../interfaces/ICanvas.md#isbranchleaf)

#### Inherited from

Rect.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__localMatrix](../interfaces/ICanvas.md#__localmatrix)

#### Inherited from

Rect.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__localBoxBounds](../interfaces/ICanvas.md#__localboxbounds)

#### Inherited from

Rect.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[worldTransform](../interfaces/ICanvas.md#worldtransform)

#### Inherited from

Rect.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[localTransform](../interfaces/ICanvas.md#localtransform)

#### Inherited from

Rect.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[boxBounds](../interfaces/ICanvas.md#boxbounds)

#### Inherited from

Rect.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[renderBounds](../interfaces/ICanvas.md#renderbounds)

#### Inherited from

Rect.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[worldBoxBounds](../interfaces/ICanvas.md#worldboxbounds)

#### Inherited from

Rect.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[worldStrokeBounds](../interfaces/ICanvas.md#worldstrokebounds)

#### Inherited from

Rect.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[worldRenderBounds](../interfaces/ICanvas.md#worldrenderbounds)

#### Inherited from

Rect.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[worldOpacity](../interfaces/ICanvas.md#worldopacity)

#### Inherited from

Rect.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__worldFlipped](../interfaces/ICanvas.md#__worldflipped)

#### Inherited from

Rect.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__onlyHitMask](../interfaces/ICanvas.md#__onlyhitmask)

#### Inherited from

Rect.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__ignoreHitWorld](../interfaces/ICanvas.md#__ignorehitworld)

#### Inherited from

Rect.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__inLazyBounds](../interfaces/ICanvas.md#__inlazybounds)

#### Inherited from

Rect.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[pathInputed](../interfaces/ICanvas.md#pathinputed)

#### Inherited from

Rect.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L91)

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

[ICanvas](../interfaces/ICanvas.md).[event](../interfaces/ICanvas.md#event)

#### Inherited from

Rect.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__tag](../interfaces/ICanvas.md#__tag)

#### Overrides

Rect.\_\_tag

#### Defined in

[ui/packages/display/src/Canvas.ts:14](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L14)

___

### ready

• `get` **ready**(): `boolean`

#### Returns

`boolean`

#### Defined in

[ui/packages/display/src/Canvas.ts:41](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L41)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[app](../interfaces/ICanvas.md#app)

#### Inherited from

Rect.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[isFrame](../interfaces/ICanvas.md#isframe)

#### Inherited from

Rect.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scale](../interfaces/ICanvas.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L353)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[scale](../interfaces/ICanvas.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L352)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[pen](../interfaces/ICanvas.md#pen)

#### Inherited from

Rect.pen

#### Defined in

[ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L357)

___

### editConfig

• `get` **editConfig**(): [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Returns

[`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[editConfig](../interfaces/ICanvas.md#editconfig)

#### Inherited from

Rect.editConfig

#### Defined in

[ui/packages/display/src/UI.ts:367](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L367)

___

### editOuter

• `get` **editOuter**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[editOuter](../interfaces/ICanvas.md#editouter)

#### Inherited from

Rect.editOuter

#### Defined in

[ui/packages/display/src/UI.ts:369](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L369)

___

### editInner

• `get` **editInner**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[editInner](../interfaces/ICanvas.md#editinner)

#### Inherited from

Rect.editInner

#### Defined in

[ui/packages/display/src/UI.ts:371](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L371)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[resetCustom](../interfaces/ICanvas.md#resetcustom)

#### Inherited from

[Rect](Rect.md).[resetCustom](Rect.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:133](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L133)

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

[ICanvas](../interfaces/ICanvas.md).[waitParent](../interfaces/ICanvas.md#waitparent)

#### Inherited from

[Rect](Rect.md).[waitParent](Rect.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:139](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L139)

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

[ICanvas](../interfaces/ICanvas.md).[waitLeafer](../interfaces/ICanvas.md#waitleafer)

#### Inherited from

[Rect](Rect.md).[waitLeafer](Rect.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:144](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L144)

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

[ICanvas](../interfaces/ICanvas.md).[nextRender](../interfaces/ICanvas.md#nextrender)

#### Inherited from

[Rect](Rect.md).[nextRender](Rect.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:149](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L149)

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

[ICanvas](../interfaces/ICanvas.md).[removeNextRender](../interfaces/ICanvas.md#removenextrender)

#### Inherited from

[Rect](Rect.md).[removeNextRender](Rect.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L153)

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

[ICanvas](../interfaces/ICanvas.md).[__bindLeafer](../interfaces/ICanvas.md#__bindleafer)

#### Inherited from

[Rect](Rect.md).[__bindLeafer](Rect.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L157)

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

[ICanvas](../interfaces/ICanvas.md).[setAttr](../interfaces/ICanvas.md#setattr)

#### Inherited from

[Rect](Rect.md).[setAttr](Rect.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:186](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L186)

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

[ICanvas](../interfaces/ICanvas.md).[getAttr](../interfaces/ICanvas.md#getattr)

#### Inherited from

[Rect](Rect.md).[getAttr](Rect.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:187](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L187)

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

[ICanvas](../interfaces/ICanvas.md).[getComputedAttr](../interfaces/ICanvas.md#getcomputedattr)

#### Inherited from

[Rect](Rect.md).[getComputedAttr](Rect.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:189](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L189)

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

[ICanvas](../interfaces/ICanvas.md).[toJSON](../interfaces/ICanvas.md#tojson)

#### Inherited from

[Rect](Rect.md).[toJSON](Rect.md#tojson)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L191)

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

[ICanvas](../interfaces/ICanvas.md).[toString](../interfaces/ICanvas.md#tostring)

#### Inherited from

[Rect](Rect.md).[toString](Rect.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L196)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[toSVG](../interfaces/ICanvas.md#tosvg)

#### Inherited from

[Rect](Rect.md).[toSVG](Rect.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L200)

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

[ICanvas](../interfaces/ICanvas.md).[__SVG](../interfaces/ICanvas.md#__svg)

#### Inherited from

[Rect](Rect.md).[__SVG](Rect.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:202](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L202)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[toHTML](../interfaces/ICanvas.md#tohtml)

#### Inherited from

[Rect](Rect.md).[toHTML](Rect.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L204)

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

[ICanvas](../interfaces/ICanvas.md).[__setAttr](../interfaces/ICanvas.md#__setattr)

#### Inherited from

[Rect](Rect.md).[__setAttr](Rect.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L208)

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

[ICanvas](../interfaces/ICanvas.md).[__getAttr](../interfaces/ICanvas.md#__getattr)

#### Inherited from

[Rect](Rect.md).[__getAttr](Rect.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L210)

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

[ICanvas](../interfaces/ICanvas.md).[setProxyAttr](../interfaces/ICanvas.md#setproxyattr)

#### Inherited from

[Rect](Rect.md).[setProxyAttr](Rect.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L212)

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

[ICanvas](../interfaces/ICanvas.md).[getProxyAttr](../interfaces/ICanvas.md#getproxyattr)

#### Inherited from

[Rect](Rect.md).[getProxyAttr](Rect.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L214)

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

[ICanvas](../interfaces/ICanvas.md).[focus](../interfaces/ICanvas.md#focus)

#### Inherited from

[Rect](Rect.md).[focus](Rect.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:234](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L234)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[updateState](../interfaces/ICanvas.md#updatestate)

#### Inherited from

[Rect](Rect.md).[updateState](Rect.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L236)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[updateLayout](../interfaces/ICanvas.md#updatelayout)

#### Inherited from

[Rect](Rect.md).[updateLayout](Rect.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:241](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L241)

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

[ICanvas](../interfaces/ICanvas.md).[forceUpdate](../interfaces/ICanvas.md#forceupdate)

#### Inherited from

[Rect](Rect.md).[forceUpdate](Rect.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L245)

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

[ICanvas](../interfaces/ICanvas.md).[forceRender](../interfaces/ICanvas.md#forcerender)

#### Inherited from

[Rect](Rect.md).[forceRender](Rect.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L253)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__extraUpdate](../interfaces/ICanvas.md#__extraupdate)

#### Inherited from

[Rect](Rect.md).[__extraUpdate](Rect.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L257)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateWorldMatrix](../interfaces/ICanvas.md#__updateworldmatrix)

#### Inherited from

[Rect](Rect.md).[__updateWorldMatrix](Rect.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:263](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L263)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateLocalMatrix](../interfaces/ICanvas.md#__updatelocalmatrix)

#### Inherited from

[Rect](Rect.md).[__updateLocalMatrix](Rect.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateWorldBounds](../interfaces/ICanvas.md#__updateworldbounds)

#### Inherited from

[Rect](Rect.md).[__updateWorldBounds](Rect.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateLocalBounds](../interfaces/ICanvas.md#__updatelocalbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBounds](Rect.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateLocalBoxBounds](../interfaces/ICanvas.md#__updatelocalboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBoxBounds](Rect.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:276](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L276)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateLocalStrokeBounds](../interfaces/ICanvas.md#__updatelocalstrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalStrokeBounds](Rect.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateLocalRenderBounds](../interfaces/ICanvas.md#__updatelocalrenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalRenderBounds](Rect.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L280)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateBoxBounds](../interfaces/ICanvas.md#__updateboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateBoxBounds](Rect.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L284)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateContentBounds](../interfaces/ICanvas.md#__updatecontentbounds)

#### Inherited from

[Rect](Rect.md).[__updateContentBounds](Rect.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L286)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateStrokeBounds](../interfaces/ICanvas.md#__updatestrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateStrokeBounds](Rect.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L288)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateRenderBounds](../interfaces/ICanvas.md#__updaterenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateRenderBounds](Rect.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L290)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateAutoLayout](../interfaces/ICanvas.md#__updateautolayout)

#### Inherited from

[Rect](Rect.md).[__updateAutoLayout](Rect.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:293](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L293)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateFlowLayout](../interfaces/ICanvas.md#__updateflowlayout)

#### Inherited from

[Rect](Rect.md).[__updateFlowLayout](Rect.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L295)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateNaturalSize](../interfaces/ICanvas.md#__updatenaturalsize)

#### Inherited from

[Rect](Rect.md).[__updateNaturalSize](Rect.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L297)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateStrokeSpread](../interfaces/ICanvas.md#__updatestrokespread)

#### Inherited from

[Rect](Rect.md).[__updateStrokeSpread](Rect.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L300)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateRenderSpread](../interfaces/ICanvas.md#__updaterenderspread)

#### Inherited from

[Rect](Rect.md).[__updateRenderSpread](Rect.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L302)

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

[ICanvas](../interfaces/ICanvas.md).[__updateEraser](../interfaces/ICanvas.md#__updateeraser)

#### Inherited from

[Rect](Rect.md).[__updateEraser](Rect.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L309)

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

[ICanvas](../interfaces/ICanvas.md).[__renderEraser](../interfaces/ICanvas.md#__rendereraser)

#### Inherited from

[Rect](Rect.md).[__renderEraser](Rect.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:313](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L313)

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

[ICanvas](../interfaces/ICanvas.md).[__updateMask](../interfaces/ICanvas.md#__updatemask)

#### Inherited from

[Rect](Rect.md).[__updateMask](Rect.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L321)

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

[ICanvas](../interfaces/ICanvas.md).[__renderMask](../interfaces/ICanvas.md#__rendermask)

#### Inherited from

[Rect](Rect.md).[__renderMask](Rect.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:327](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L327)

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

[ICanvas](../interfaces/ICanvas.md).[__getNowWorld](../interfaces/ICanvas.md#__getnowworld)

#### Inherited from

[Rect](Rect.md).[__getNowWorld](Rect.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L335)

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

[ICanvas](../interfaces/ICanvas.md).[getTransform](../interfaces/ICanvas.md#gettransform)

#### Inherited from

[Rect](Rect.md).[getTransform](Rect.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L347)

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

[ICanvas](../interfaces/ICanvas.md).[getBounds](../interfaces/ICanvas.md#getbounds)

#### Inherited from

[Rect](Rect.md).[getBounds](Rect.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L352)

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

[ICanvas](../interfaces/ICanvas.md).[getLayoutBounds](../interfaces/ICanvas.md#getlayoutbounds)

#### Inherited from

[Rect](Rect.md).[getLayoutBounds](Rect.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L356)

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

[ICanvas](../interfaces/ICanvas.md).[getLayoutPoints](../interfaces/ICanvas.md#getlayoutpoints)

#### Inherited from

[Rect](Rect.md).[getLayoutPoints](Rect.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:360](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L360)

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

[ICanvas](../interfaces/ICanvas.md).[getWorldBounds](../interfaces/ICanvas.md#getworldbounds)

#### Inherited from

[Rect](Rect.md).[getWorldBounds](Rect.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L365)

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

[ICanvas](../interfaces/ICanvas.md).[worldToLocal](../interfaces/ICanvas.md#worldtolocal)

#### Inherited from

[Rect](Rect.md).[worldToLocal](Rect.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L373)

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

[ICanvas](../interfaces/ICanvas.md).[localToWorld](../interfaces/ICanvas.md#localtoworld)

#### Inherited from

[Rect](Rect.md).[localToWorld](Rect.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:381](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L381)

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

[ICanvas](../interfaces/ICanvas.md).[worldToInner](../interfaces/ICanvas.md#worldtoinner)

#### Inherited from

[Rect](Rect.md).[worldToInner](Rect.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L389)

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

[ICanvas](../interfaces/ICanvas.md).[innerToWorld](../interfaces/ICanvas.md#innertoworld)

#### Inherited from

[Rect](Rect.md).[innerToWorld](Rect.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L397)

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

[ICanvas](../interfaces/ICanvas.md).[getBoxPoint](../interfaces/ICanvas.md#getboxpoint)

#### Inherited from

[Rect](Rect.md).[getBoxPoint](Rect.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:404](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L404)

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

[ICanvas](../interfaces/ICanvas.md).[getBoxPointByInner](../interfaces/ICanvas.md#getboxpointbyinner)

#### Inherited from

[Rect](Rect.md).[getBoxPointByInner](Rect.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L408)

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

[ICanvas](../interfaces/ICanvas.md).[getInnerPoint](../interfaces/ICanvas.md#getinnerpoint)

#### Inherited from

[Rect](Rect.md).[getInnerPoint](Rect.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:414](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L414)

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

[ICanvas](../interfaces/ICanvas.md).[getInnerPointByBox](../interfaces/ICanvas.md#getinnerpointbybox)

#### Inherited from

[Rect](Rect.md).[getInnerPointByBox](Rect.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:420](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L420)

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

[ICanvas](../interfaces/ICanvas.md).[getInnerPointByLocal](../interfaces/ICanvas.md#getinnerpointbylocal)

#### Inherited from

[Rect](Rect.md).[getInnerPointByLocal](Rect.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:426](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L426)

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

[ICanvas](../interfaces/ICanvas.md).[getLocalPoint](../interfaces/ICanvas.md#getlocalpoint)

#### Inherited from

[Rect](Rect.md).[getLocalPoint](Rect.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L430)

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

[ICanvas](../interfaces/ICanvas.md).[getLocalPointByInner](../interfaces/ICanvas.md#getlocalpointbyinner)

#### Inherited from

[Rect](Rect.md).[getLocalPointByInner](Rect.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:436](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L436)

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

[ICanvas](../interfaces/ICanvas.md).[getPagePoint](../interfaces/ICanvas.md#getpagepoint)

#### Inherited from

[Rect](Rect.md).[getPagePoint](Rect.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L440)

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

[ICanvas](../interfaces/ICanvas.md).[getWorldPoint](../interfaces/ICanvas.md#getworldpoint)

#### Inherited from

[Rect](Rect.md).[getWorldPoint](Rect.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L445)

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

[ICanvas](../interfaces/ICanvas.md).[getWorldPointByBox](../interfaces/ICanvas.md#getworldpointbybox)

#### Inherited from

[Rect](Rect.md).[getWorldPointByBox](Rect.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:451](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L451)

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

[ICanvas](../interfaces/ICanvas.md).[getWorldPointByLocal](../interfaces/ICanvas.md#getworldpointbylocal)

#### Inherited from

[Rect](Rect.md).[getWorldPointByLocal](Rect.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L455)

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

[ICanvas](../interfaces/ICanvas.md).[getWorldPointByPage](../interfaces/ICanvas.md#getworldpointbypage)

#### Inherited from

[Rect](Rect.md).[getWorldPointByPage](Rect.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:461](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L461)

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

[ICanvas](../interfaces/ICanvas.md).[setTransform](../interfaces/ICanvas.md#settransform)

#### Inherited from

[Rect](Rect.md).[setTransform](Rect.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L469)

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

[ICanvas](../interfaces/ICanvas.md).[transform](../interfaces/ICanvas.md#transform)

#### Inherited from

[Rect](Rect.md).[transform](Rect.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:473](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L473)

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

[ICanvas](../interfaces/ICanvas.md).[move](../interfaces/ICanvas.md#move)

#### Inherited from

[Rect](Rect.md).[move](Rect.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L477)

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

[ICanvas](../interfaces/ICanvas.md).[moveInner](../interfaces/ICanvas.md#moveinner)

#### Inherited from

[Rect](Rect.md).[moveInner](Rect.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L482)

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

[ICanvas](../interfaces/ICanvas.md).[scaleOf](../interfaces/ICanvas.md#scaleof)

#### Inherited from

[Rect](Rect.md).[scaleOf](Rect.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:486](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L486)

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

[ICanvas](../interfaces/ICanvas.md).[rotateOf](../interfaces/ICanvas.md#rotateof)

#### Inherited from

[Rect](Rect.md).[rotateOf](Rect.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:490](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L490)

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

[ICanvas](../interfaces/ICanvas.md).[skewOf](../interfaces/ICanvas.md#skewof)

#### Inherited from

[Rect](Rect.md).[skewOf](Rect.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:494](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L494)

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

[ICanvas](../interfaces/ICanvas.md).[transformWorld](../interfaces/ICanvas.md#transformworld)

#### Inherited from

[Rect](Rect.md).[transformWorld](Rect.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L499)

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

[ICanvas](../interfaces/ICanvas.md).[moveWorld](../interfaces/ICanvas.md#moveworld)

#### Inherited from

[Rect](Rect.md).[moveWorld](Rect.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L503)

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

[ICanvas](../interfaces/ICanvas.md).[scaleOfWorld](../interfaces/ICanvas.md#scaleofworld)

#### Inherited from

[Rect](Rect.md).[scaleOfWorld](Rect.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:507](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L507)

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

[ICanvas](../interfaces/ICanvas.md).[rotateOfWorld](../interfaces/ICanvas.md#rotateofworld)

#### Inherited from

[Rect](Rect.md).[rotateOfWorld](Rect.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:511](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L511)

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

[ICanvas](../interfaces/ICanvas.md).[skewOfWorld](../interfaces/ICanvas.md#skewofworld)

#### Inherited from

[Rect](Rect.md).[skewOfWorld](Rect.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:515](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L515)

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

[ICanvas](../interfaces/ICanvas.md).[flip](../interfaces/ICanvas.md#flip)

#### Inherited from

[Rect](Rect.md).[flip](Rect.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L519)

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

[ICanvas](../interfaces/ICanvas.md).[scaleResize](../interfaces/ICanvas.md#scaleresize)

#### Inherited from

[Rect](Rect.md).[scaleResize](Rect.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L526)

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

[ICanvas](../interfaces/ICanvas.md).[__scaleResize](../interfaces/ICanvas.md#__scaleresize)

#### Inherited from

[Rect](Rect.md).[__scaleResize](Rect.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L531)

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

[ICanvas](../interfaces/ICanvas.md).[resizeWidth](../interfaces/ICanvas.md#resizewidth)

#### Inherited from

[Rect](Rect.md).[resizeWidth](Rect.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L534)

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

[ICanvas](../interfaces/ICanvas.md).[resizeHeight](../interfaces/ICanvas.md#resizeheight)

#### Inherited from

[Rect](Rect.md).[resizeHeight](Rect.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:536](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L536)

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

[ICanvas](../interfaces/ICanvas.md).[__hitWorld](../interfaces/ICanvas.md#__hitworld)

#### Inherited from

[Rect](Rect.md).[__hitWorld](Rect.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L541)

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

[ICanvas](../interfaces/ICanvas.md).[__hit](../interfaces/ICanvas.md#__hit)

#### Inherited from

[Rect](Rect.md).[__hit](Rect.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L543)

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

[ICanvas](../interfaces/ICanvas.md).[__hitFill](../interfaces/ICanvas.md#__hitfill)

#### Inherited from

[Rect](Rect.md).[__hitFill](Rect.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L545)

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

[ICanvas](../interfaces/ICanvas.md).[__hitStroke](../interfaces/ICanvas.md#__hitstroke)

#### Inherited from

[Rect](Rect.md).[__hitStroke](Rect.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:547](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L547)

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

[ICanvas](../interfaces/ICanvas.md).[__hitPixel](../interfaces/ICanvas.md#__hitpixel)

#### Inherited from

[Rect](Rect.md).[__hitPixel](Rect.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:549](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L549)

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

[ICanvas](../interfaces/ICanvas.md).[__drawHitPath](../interfaces/ICanvas.md#__drawhitpath)

#### Inherited from

[Rect](Rect.md).[__drawHitPath](Rect.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L551)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateHitCanvas](../interfaces/ICanvas.md#__updatehitcanvas)

#### Inherited from

[Rect](Rect.md).[__updateHitCanvas](Rect.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L553)

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

[ICanvas](../interfaces/ICanvas.md).[__render](../interfaces/ICanvas.md#__render)

#### Inherited from

[Rect](Rect.md).[__render](Rect.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L560)

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

[ICanvas](../interfaces/ICanvas.md).[__drawFast](../interfaces/ICanvas.md#__drawfast)

#### Inherited from

[Rect](Rect.md).[__drawFast](Rect.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L562)

___

### \_\_draw

▸ **__draw**(`_canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__draw](../interfaces/ICanvas.md#__draw)

#### Inherited from

[Rect](Rect.md).[__draw](Rect.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L564)

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

[ICanvas](../interfaces/ICanvas.md).[__clip](../interfaces/ICanvas.md#__clip)

#### Inherited from

[Rect](Rect.md).[__clip](Rect.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L567)

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

[ICanvas](../interfaces/ICanvas.md).[__renderShape](../interfaces/ICanvas.md#__rendershape)

#### Inherited from

[Rect](Rect.md).[__renderShape](Rect.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L569)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateWorldOpacity](../interfaces/ICanvas.md#__updateworldopacity)

#### Inherited from

[Rect](Rect.md).[__updateWorldOpacity](Rect.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L572)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateChange](../interfaces/ICanvas.md#__updatechange)

#### Inherited from

[Rect](Rect.md).[__updateChange](Rect.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L574)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updatePath](../interfaces/ICanvas.md#__updatepath)

#### Inherited from

[Rect](Rect.md).[__updatePath](Rect.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:585](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L585)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[getMotionPathData](../interfaces/ICanvas.md#getmotionpathdata)

#### Inherited from

[Rect](Rect.md).[getMotionPathData](Rect.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:594](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L594)

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

[ICanvas](../interfaces/ICanvas.md).[getMotionPoint](../interfaces/ICanvas.md#getmotionpoint)

#### Inherited from

[Rect](Rect.md).[getMotionPoint](Rect.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L598)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[getMotionTotal](../interfaces/ICanvas.md#getmotiontotal)

#### Inherited from

[Rect](Rect.md).[getMotionTotal](Rect.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L602)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateMotionPath](../interfaces/ICanvas.md#__updatemotionpath)

#### Inherited from

[Rect](Rect.md).[__updateMotionPath](Rect.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L606)

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

[ICanvas](../interfaces/ICanvas.md).[__runAnimation](../interfaces/ICanvas.md#__runanimation)

#### Inherited from

[Rect](Rect.md).[__runAnimation](Rect.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:612](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L612)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateSortChildren](../interfaces/ICanvas.md#__updatesortchildren)

#### Inherited from

[Rect](Rect.md).[__updateSortChildren](Rect.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L617)

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

[ICanvas](../interfaces/ICanvas.md).[add](../interfaces/ICanvas.md#add)

#### Inherited from

[Rect](Rect.md).[add](Rect.md#add)

#### Defined in

[leafer/packages/display/src/Leaf.ts:619](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L619)

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

[ICanvas](../interfaces/ICanvas.md).[remove](../interfaces/ICanvas.md#remove)

#### Inherited from

[Rect](Rect.md).[remove](Rect.md#remove)

#### Defined in

[leafer/packages/display/src/Leaf.ts:621](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L621)

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

[ICanvas](../interfaces/ICanvas.md).[dropTo](../interfaces/ICanvas.md#dropto)

#### Inherited from

[Rect](Rect.md).[dropTo](Rect.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L625)

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

[ICanvas](../interfaces/ICanvas.md).[on](../interfaces/ICanvas.md#on)

#### Inherited from

[Rect](Rect.md).[on](Rect.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L634)

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

[ICanvas](../interfaces/ICanvas.md).[off](../interfaces/ICanvas.md#off)

#### Inherited from

[Rect](Rect.md).[off](Rect.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L636)

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

[ICanvas](../interfaces/ICanvas.md).[on_](../interfaces/ICanvas.md#on_)

#### Inherited from

[Rect](Rect.md).[on_](Rect.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L638)

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

[ICanvas](../interfaces/ICanvas.md).[off_](../interfaces/ICanvas.md#off_)

#### Inherited from

[Rect](Rect.md).[off_](Rect.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L640)

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

[ICanvas](../interfaces/ICanvas.md).[once](../interfaces/ICanvas.md#once)

#### Inherited from

[Rect](Rect.md).[once](Rect.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L642)

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

[ICanvas](../interfaces/ICanvas.md).[emit](../interfaces/ICanvas.md#emit)

#### Inherited from

[Rect](Rect.md).[emit](Rect.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:644](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L644)

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

[ICanvas](../interfaces/ICanvas.md).[emitEvent](../interfaces/ICanvas.md#emitevent)

#### Inherited from

[Rect](Rect.md).[emitEvent](Rect.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L646)

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

[ICanvas](../interfaces/ICanvas.md).[hasEvent](../interfaces/ICanvas.md#hasevent)

#### Inherited from

[Rect](Rect.md).[hasEvent](Rect.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L648)

___

### changeAttr

▸ `Static` **changeAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[changeAttr](Rect.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:652](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L652)

___

### addAttr

▸ `Static` **addAttr**(`attrName`, `defaultValue`, `fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `defaultValue` | [`IValue`](../modules.md#ivalue) |
| `fn?` | [`IAttrDecorator`](../interfaces/IAttrDecorator.md) |

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[addAttr](Rect.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L656)

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

[ICanvas](../interfaces/ICanvas.md).[__emitLifeEvent](../interfaces/ICanvas.md#__emitlifeevent)

#### Inherited from

[Rect](Rect.md).[__emitLifeEvent](Rect.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/a596007/packages/display/src/Leaf.ts#L662)

___

### drawImage

▸ **drawImage**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Canvas.ts:52](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L52)

___

### draw

▸ **draw**(`ui`, `offset?`, `scale?`, `rotation?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ui` | [`IUI`](../interfaces/IUI.md) |
| `offset?` | [`IPointData`](../interfaces/IPointData.md) |
| `scale?` | `number` \| [`IPointData`](../interfaces/IPointData.md) |
| `rotation?` | `number` |

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Canvas.ts:61](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L61)

___

### paint

▸ **paint**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Canvas.ts:74](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L74)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `_options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `_options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__drawContent](../interfaces/ICanvas.md#__drawcontent)

#### Defined in

[ui/packages/display/src/Canvas.ts:79](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L79)

___

### \_\_updateSize

▸ **__updateSize**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateSize](../interfaces/ICanvas.md#__updatesize)

#### Defined in

[ui/packages/display/src/Canvas.ts:84](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L84)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[destroy](../interfaces/ICanvas.md#destroy)

#### Overrides

[Rect](Rect.md).[destroy](Rect.md#destroy)

#### Defined in

[ui/packages/display/src/Canvas.ts:93](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/Canvas.ts#L93)

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

[ICanvas](../interfaces/ICanvas.md).[reset](../interfaces/ICanvas.md#reset)

#### Inherited from

[Rect](Rect.md).[reset](Rect.md#reset)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L382)

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

[ICanvas](../interfaces/ICanvas.md).[set](../interfaces/ICanvas.md#set)

#### Inherited from

[Rect](Rect.md).[set](Rect.md#set)

#### Defined in

[ui/packages/display/src/UI.ts:385](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L385)

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

[ICanvas](../interfaces/ICanvas.md).[get](../interfaces/ICanvas.md#get)

#### Inherited from

[Rect](Rect.md).[get](Rect.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:397](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L397)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[createProxyData](../interfaces/ICanvas.md#createproxydata)

#### Inherited from

[Rect](Rect.md).[createProxyData](Rect.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:401](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L401)

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

[ICanvas](../interfaces/ICanvas.md).[find](../interfaces/ICanvas.md#find)

#### Inherited from

[Rect](Rect.md).[find](Rect.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L406)

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

[ICanvas](../interfaces/ICanvas.md).[findTag](../interfaces/ICanvas.md#findtag)

#### Inherited from

[Rect](Rect.md).[findTag](Rect.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:408](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L408)

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

[ICanvas](../interfaces/ICanvas.md).[findOne](../interfaces/ICanvas.md#findone)

#### Inherited from

[Rect](Rect.md).[findOne](Rect.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:410](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L410)

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

[ICanvas](../interfaces/ICanvas.md).[findId](../interfaces/ICanvas.md#findid)

#### Inherited from

[Rect](Rect.md).[findId](Rect.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:412](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L412)

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

[ICanvas](../interfaces/ICanvas.md).[getPath](../interfaces/ICanvas.md#getpath)

#### Inherited from

[Rect](Rect.md).[getPath](Rect.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:417](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L417)

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

[ICanvas](../interfaces/ICanvas.md).[getPathString](../interfaces/ICanvas.md#getpathstring)

#### Inherited from

[Rect](Rect.md).[getPathString](Rect.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:424](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L424)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[load](../interfaces/ICanvas.md#load)

#### Inherited from

[Rect](Rect.md).[load](Rect.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L429)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__onUpdateSize](../interfaces/ICanvas.md#__onupdatesize)

#### Inherited from

[Rect](Rect.md).[__onUpdateSize](Rect.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L433)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[ICanvas](../interfaces/ICanvas.md).[__updateRenderPath](../interfaces/ICanvas.md#__updaterenderpath)

#### Inherited from

[Rect](Rect.md).[__updateRenderPath](Rect.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:440](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L440)

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

[ICanvas](../interfaces/ICanvas.md).[__drawRenderPath](../interfaces/ICanvas.md#__drawrenderpath)

#### Inherited from

[Rect](Rect.md).[__drawRenderPath](Rect.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:448](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L448)

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

[ICanvas](../interfaces/ICanvas.md).[__drawPath](../interfaces/ICanvas.md#__drawpath)

#### Inherited from

[Rect](Rect.md).[__drawPath](Rect.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:453](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L453)

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

[ICanvas](../interfaces/ICanvas.md).[__drawPathByData](../interfaces/ICanvas.md#__drawpathbydata)

#### Inherited from

[Rect](Rect.md).[__drawPathByData](Rect.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L458)

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

[ICanvas](../interfaces/ICanvas.md).[__drawPathByBox](../interfaces/ICanvas.md#__drawpathbybox)

#### Inherited from

[Rect](Rect.md).[__drawPathByBox](Rect.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:462](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L462)

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

[ICanvas](../interfaces/ICanvas.md).[animate](../interfaces/ICanvas.md#animate)

#### Inherited from

[Rect](Rect.md).[animate](Rect.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:472](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L472)

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

[ICanvas](../interfaces/ICanvas.md).[killAnimate](../interfaces/ICanvas.md#killanimate)

#### Inherited from

[Rect](Rect.md).[killAnimate](Rect.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:476](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L476)

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

[ICanvas](../interfaces/ICanvas.md).[export](../interfaces/ICanvas.md#export)

#### Inherited from

[Rect](Rect.md).[export](Rect.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:482](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L482)

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

[ICanvas](../interfaces/ICanvas.md).[clone](../interfaces/ICanvas.md#clone)

#### Inherited from

[Rect](Rect.md).[clone](Rect.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:486](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L486)

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

[Rect](Rect.md).[one](Rect.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:492](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L492)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[registerUI](Rect.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:496](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L496)

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

[Rect](Rect.md).[registerData](Rect.md#registerdata)

#### Defined in

[ui/packages/display/src/UI.ts:500](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L500)

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

[Rect](Rect.md).[setEditConfig](Rect.md#seteditconfig)

#### Defined in

[ui/packages/display/src/UI.ts:507](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L507)

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

[Rect](Rect.md).[setEditOuter](Rect.md#seteditouter)

#### Defined in

[ui/packages/display/src/UI.ts:509](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L509)

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

[Rect](Rect.md).[setEditInner](Rect.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:511](https://github.com/leaferjs/leafer-ui/blob/d1253e2/packages/display/src/UI.ts#L511)
