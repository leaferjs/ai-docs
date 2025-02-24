# Class: Image

## Hierarchy

- [`Rect`](Rect.md)

  ↳ **`Image`**

  ↳↳ [`HTMLText`](HTMLText.md)

## Implements

- [`IImage`](../interfaces/IImage.md)

## Table of contents

### Constructors

- [constructor](Image.md#constructor)

### Properties

- [innerId](Image.md#innerid)
- [syncEventer](Image.md#synceventer)
- [lockNormalStyle](Image.md#locknormalstyle)
- [\_\_layout](Image.md#__layout)
- [\_\_world](Image.md#__world)
- [\_\_local](Image.md#__local)
- [\_\_nowWorld](Image.md#__nowworld)
- [\_\_cameraWorld](Image.md#__cameraworld)
- [\_\_worldOpacity](Image.md#__worldopacity)
- [\_\_level](Image.md#__level)
- [\_\_tempNumber](Image.md#__tempnumber)
- [\_\_hasAutoLayout](Image.md#__hasautolayout)
- [\_\_hasMask](Image.md#__hasmask)
- [\_\_hasEraser](Image.md#__haseraser)
- [\_\_hitCanvas](Image.md#__hitcanvas)
- [\_\_captureMap](Image.md#__capturemap)
- [\_\_bubbleMap](Image.md#__bubblemap)
- [noBounds](Image.md#nobounds)
- [destroyed](Image.md#destroyed)
- [\_\_](Image.md#__)
- [url](Image.md#url)
- [image](Image.md#image)
- [proxyData](Image.md#proxydata)
- [\_\_proxyData](Image.md#__proxydata)
- [leafer](Image.md#leafer)
- [parent](Image.md#parent)
- [zoomLayer](Image.md#zoomlayer)
- [children](Image.md#children)
- [id](Image.md#id)
- [name](Image.md#name)
- [className](Image.md#classname)
- [blendMode](Image.md#blendmode)
- [opacity](Image.md#opacity)
- [visible](Image.md#visible)
- [locked](Image.md#locked)
- [zIndex](Image.md#zindex)
- [mask](Image.md#mask)
- [eraser](Image.md#eraser)
- [x](Image.md#x)
- [y](Image.md#y)
- [width](Image.md#width)
- [height](Image.md#height)
- [scaleX](Image.md#scalex)
- [scaleY](Image.md#scaley)
- [rotation](Image.md#rotation)
- [skewX](Image.md#skewx)
- [skewY](Image.md#skewy)
- [offsetX](Image.md#offsetx)
- [offsetY](Image.md#offsety)
- [scrollX](Image.md#scrollx)
- [scrollY](Image.md#scrolly)
- [origin](Image.md#origin)
- [around](Image.md#around)
- [lazy](Image.md#lazy)
- [pixelRatio](Image.md#pixelratio)
- [path](Image.md#path)
- [windingRule](Image.md#windingrule)
- [closed](Image.md#closed)
- [flow](Image.md#flow)
- [padding](Image.md#padding)
- [gap](Image.md#gap)
- [flowAlign](Image.md#flowalign)
- [flowWrap](Image.md#flowwrap)
- [itemBox](Image.md#itembox)
- [inFlow](Image.md#inflow)
- [autoWidth](Image.md#autowidth)
- [autoHeight](Image.md#autoheight)
- [lockRatio](Image.md#lockratio)
- [autoBox](Image.md#autobox)
- [widthRange](Image.md#widthrange)
- [heightRange](Image.md#heightrange)
- [draggable](Image.md#draggable)
- [dragBounds](Image.md#dragbounds)
- [editable](Image.md#editable)
- [hittable](Image.md#hittable)
- [hitFill](Image.md#hitfill)
- [hitStroke](Image.md#hitstroke)
- [hitBox](Image.md#hitbox)
- [hitChildren](Image.md#hitchildren)
- [hitSelf](Image.md#hitself)
- [hitRadius](Image.md#hitradius)
- [cursor](Image.md#cursor)
- [fill](Image.md#fill)
- [stroke](Image.md#stroke)
- [strokeAlign](Image.md#strokealign)
- [strokeWidth](Image.md#strokewidth)
- [strokeWidthFixed](Image.md#strokewidthfixed)
- [strokeCap](Image.md#strokecap)
- [strokeJoin](Image.md#strokejoin)
- [dashPattern](Image.md#dashpattern)
- [dashOffset](Image.md#dashoffset)
- [miterLimit](Image.md#miterlimit)
- [startArrow](Image.md#startarrow)
- [endArrow](Image.md#endarrow)
- [cornerRadius](Image.md#cornerradius)
- [cornerSmoothing](Image.md#cornersmoothing)
- [shadow](Image.md#shadow)
- [innerShadow](Image.md#innershadow)
- [blur](Image.md#blur)
- [backgroundBlur](Image.md#backgroundblur)
- [grayscale](Image.md#grayscale)
- [filter](Image.md#filter)
- [animation](Image.md#animation)
- [animationOut](Image.md#animationout)
- [transition](Image.md#transition)
- [transitionOut](Image.md#transitionout)
- [motionPath](Image.md#motionpath)
- [motionPrecision](Image.md#motionprecision)
- [motion](Image.md#motion)
- [motionRotation](Image.md#motionrotation)
- [states](Image.md#states)
- [state](Image.md#state)
- [selected](Image.md#selected)
- [disabled](Image.md#disabled)
- [normalStyle](Image.md#normalstyle)
- [hoverStyle](Image.md#hoverstyle)
- [pressStyle](Image.md#pressstyle)
- [focusStyle](Image.md#focusstyle)
- [selectedStyle](Image.md#selectedstyle)
- [disabledStyle](Image.md#disabledstyle)
- [placeholderStyle](Image.md#placeholderstyle)
- [button](Image.md#button)
- [data](Image.md#data)
- [\_\_animate](Image.md#__animate)

### Accessors

- [tag](Image.md#tag)
- [innerName](Image.md#innername)
- [\_\_DataProcessor](Image.md#__dataprocessor)
- [\_\_LayoutProcessor](Image.md#__layoutprocessor)
- [leaferIsCreated](Image.md#leaferiscreated)
- [leaferIsReady](Image.md#leaferisready)
- [isLeafer](Image.md#isleafer)
- [isBranch](Image.md#isbranch)
- [isBranchLeaf](Image.md#isbranchleaf)
- [\_\_localMatrix](Image.md#__localmatrix)
- [\_\_localBoxBounds](Image.md#__localboxbounds)
- [worldTransform](Image.md#worldtransform)
- [localTransform](Image.md#localtransform)
- [boxBounds](Image.md#boxbounds)
- [renderBounds](Image.md#renderbounds)
- [worldBoxBounds](Image.md#worldboxbounds)
- [worldStrokeBounds](Image.md#worldstrokebounds)
- [worldRenderBounds](Image.md#worldrenderbounds)
- [worldOpacity](Image.md#worldopacity)
- [\_\_worldFlipped](Image.md#__worldflipped)
- [\_\_onlyHitMask](Image.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Image.md#__ignorehitworld)
- [\_\_inLazyBounds](Image.md#__inlazybounds)
- [pathInputed](Image.md#pathinputed)
- [event](Image.md#event)
- [\_\_tag](Image.md#__tag)
- [ready](Image.md#ready)
- [app](Image.md#app)
- [isFrame](Image.md#isframe)
- [scale](Image.md#scale)
- [pen](Image.md#pen)
- [editConfig](Image.md#editconfig)
- [editOuter](Image.md#editouter)
- [editInner](Image.md#editinner)

### Methods

- [resetCustom](Image.md#resetcustom)
- [waitParent](Image.md#waitparent)
- [waitLeafer](Image.md#waitleafer)
- [nextRender](Image.md#nextrender)
- [removeNextRender](Image.md#removenextrender)
- [\_\_bindLeafer](Image.md#__bindleafer)
- [setAttr](Image.md#setattr)
- [getAttr](Image.md#getattr)
- [getComputedAttr](Image.md#getcomputedattr)
- [toJSON](Image.md#tojson)
- [toString](Image.md#tostring)
- [toSVG](Image.md#tosvg)
- [\_\_SVG](Image.md#__svg)
- [toHTML](Image.md#tohtml)
- [\_\_setAttr](Image.md#__setattr)
- [\_\_getAttr](Image.md#__getattr)
- [setProxyAttr](Image.md#setproxyattr)
- [getProxyAttr](Image.md#getproxyattr)
- [focus](Image.md#focus)
- [updateState](Image.md#updatestate)
- [updateLayout](Image.md#updatelayout)
- [forceUpdate](Image.md#forceupdate)
- [forceRender](Image.md#forcerender)
- [\_\_extraUpdate](Image.md#__extraupdate)
- [\_\_updateWorldMatrix](Image.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Image.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Image.md#__updateworldbounds)
- [\_\_updateLocalBounds](Image.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Image.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Image.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Image.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Image.md#__updateboxbounds)
- [\_\_updateContentBounds](Image.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Image.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Image.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Image.md#__updateautolayout)
- [\_\_updateFlowLayout](Image.md#__updateflowlayout)
- [\_\_updateNaturalSize](Image.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Image.md#__updatestrokespread)
- [\_\_updateRenderSpread](Image.md#__updaterenderspread)
- [\_\_updateEraser](Image.md#__updateeraser)
- [\_\_renderEraser](Image.md#__rendereraser)
- [\_\_updateMask](Image.md#__updatemask)
- [\_\_renderMask](Image.md#__rendermask)
- [\_\_getNowWorld](Image.md#__getnowworld)
- [getTransform](Image.md#gettransform)
- [getBounds](Image.md#getbounds)
- [getLayoutBounds](Image.md#getlayoutbounds)
- [getLayoutPoints](Image.md#getlayoutpoints)
- [getWorldBounds](Image.md#getworldbounds)
- [worldToLocal](Image.md#worldtolocal)
- [localToWorld](Image.md#localtoworld)
- [worldToInner](Image.md#worldtoinner)
- [innerToWorld](Image.md#innertoworld)
- [getBoxPoint](Image.md#getboxpoint)
- [getBoxPointByInner](Image.md#getboxpointbyinner)
- [getInnerPoint](Image.md#getinnerpoint)
- [getInnerPointByBox](Image.md#getinnerpointbybox)
- [getInnerPointByLocal](Image.md#getinnerpointbylocal)
- [getLocalPoint](Image.md#getlocalpoint)
- [getLocalPointByInner](Image.md#getlocalpointbyinner)
- [getPagePoint](Image.md#getpagepoint)
- [getWorldPoint](Image.md#getworldpoint)
- [getWorldPointByBox](Image.md#getworldpointbybox)
- [getWorldPointByLocal](Image.md#getworldpointbylocal)
- [getWorldPointByPage](Image.md#getworldpointbypage)
- [setTransform](Image.md#settransform)
- [transform](Image.md#transform)
- [move](Image.md#move)
- [moveInner](Image.md#moveinner)
- [scaleOf](Image.md#scaleof)
- [rotateOf](Image.md#rotateof)
- [skewOf](Image.md#skewof)
- [transformWorld](Image.md#transformworld)
- [moveWorld](Image.md#moveworld)
- [scaleOfWorld](Image.md#scaleofworld)
- [rotateOfWorld](Image.md#rotateofworld)
- [skewOfWorld](Image.md#skewofworld)
- [flip](Image.md#flip)
- [scaleResize](Image.md#scaleresize)
- [\_\_scaleResize](Image.md#__scaleresize)
- [resizeWidth](Image.md#resizewidth)
- [resizeHeight](Image.md#resizeheight)
- [\_\_hitWorld](Image.md#__hitworld)
- [\_\_hit](Image.md#__hit)
- [\_\_hitFill](Image.md#__hitfill)
- [\_\_hitStroke](Image.md#__hitstroke)
- [\_\_hitPixel](Image.md#__hitpixel)
- [\_\_drawHitPath](Image.md#__drawhitpath)
- [\_\_updateHitCanvas](Image.md#__updatehitcanvas)
- [\_\_render](Image.md#__render)
- [\_\_drawFast](Image.md#__drawfast)
- [\_\_draw](Image.md#__draw)
- [\_\_clip](Image.md#__clip)
- [\_\_renderShape](Image.md#__rendershape)
- [\_\_updateWorldOpacity](Image.md#__updateworldopacity)
- [\_\_updateChange](Image.md#__updatechange)
- [\_\_updatePath](Image.md#__updatepath)
- [getMotionPathData](Image.md#getmotionpathdata)
- [getMotionPoint](Image.md#getmotionpoint)
- [getMotionTotal](Image.md#getmotiontotal)
- [\_\_updateMotionPath](Image.md#__updatemotionpath)
- [\_\_runAnimation](Image.md#__runanimation)
- [\_\_updateSortChildren](Image.md#__updatesortchildren)
- [add](Image.md#add)
- [remove](Image.md#remove)
- [dropTo](Image.md#dropto)
- [on](Image.md#on)
- [off](Image.md#off)
- [on\_](Image.md#on_)
- [off\_](Image.md#off_)
- [once](Image.md#once)
- [emit](Image.md#emit)
- [emitEvent](Image.md#emitevent)
- [hasEvent](Image.md#hasevent)
- [changeAttr](Image.md#changeattr)
- [addAttr](Image.md#addattr)
- [\_\_emitLifeEvent](Image.md#__emitlifeevent)
- [destroy](Image.md#destroy)
- [reset](Image.md#reset)
- [set](Image.md#set)
- [get](Image.md#get)
- [createProxyData](Image.md#createproxydata)
- [find](Image.md#find)
- [findTag](Image.md#findtag)
- [findOne](Image.md#findone)
- [findId](Image.md#findid)
- [getPath](Image.md#getpath)
- [getPathString](Image.md#getpathstring)
- [load](Image.md#load)
- [\_\_onUpdateSize](Image.md#__onupdatesize)
- [\_\_updateRenderPath](Image.md#__updaterenderpath)
- [\_\_drawRenderPath](Image.md#__drawrenderpath)
- [\_\_drawPath](Image.md#__drawpath)
- [\_\_drawPathByData](Image.md#__drawpathbydata)
- [\_\_drawPathByBox](Image.md#__drawpathbybox)
- [animate](Image.md#animate)
- [killAnimate](Image.md#killanimate)
- [export](Image.md#export)
- [clone](Image.md#clone)
- [one](Image.md#one)
- [registerUI](Image.md#registerui)
- [registerData](Image.md#registerdata)
- [setEditConfig](Image.md#seteditconfig)
- [setEditOuter](Image.md#seteditouter)
- [setEditInner](Image.md#seteditinner)

## Constructors

### constructor

• **new Image**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IImageInputData`](../interfaces/IImageInputData.md) |

#### Overrides

[Rect](Rect.md).[constructor](Rect.md#constructor)

#### Defined in

[ui/packages/display/src/Image.ts:25](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L25)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerId](../interfaces/IImage.md#innerid)

#### Inherited from

[Rect](Rect.md).[innerId](Rect.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[syncEventer](../interfaces/IImage.md#synceventer)

#### Inherited from

[Rect](Rect.md).[syncEventer](Rect.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockNormalStyle](../interfaces/IImage.md#locknormalstyle)

#### Inherited from

[Rect](Rect.md).[lockNormalStyle](Rect.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__layout](../interfaces/IImage.md#__layout)

#### Inherited from

[Rect](Rect.md).[__layout](Rect.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__world](../interfaces/IImage.md#__world)

#### Inherited from

[Rect](Rect.md).[__world](Rect.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__local](../interfaces/IImage.md#__local)

#### Inherited from

[Rect](Rect.md).[__local](Rect.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__nowWorld](../interfaces/IImage.md#__nowworld)

#### Inherited from

[Rect](Rect.md).[__nowWorld](Rect.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__cameraWorld](../interfaces/IImage.md#__cameraworld)

#### Inherited from

[Rect](Rect.md).[__cameraWorld](Rect.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldOpacity](../interfaces/IImage.md#__worldopacity)

#### Inherited from

[Rect](Rect.md).[__worldOpacity](Rect.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__level](../interfaces/IImage.md#__level)

#### Inherited from

[Rect](Rect.md).[__level](Rect.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tempNumber](../interfaces/IImage.md#__tempnumber)

#### Inherited from

[Rect](Rect.md).[__tempNumber](Rect.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasAutoLayout](../interfaces/IImage.md#__hasautolayout)

#### Inherited from

[Rect](Rect.md).[__hasAutoLayout](Rect.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasMask](../interfaces/IImage.md#__hasmask)

#### Inherited from

[Rect](Rect.md).[__hasMask](Rect.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasEraser](../interfaces/IImage.md#__haseraser)

#### Inherited from

[Rect](Rect.md).[__hasEraser](Rect.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitCanvas](../interfaces/IImage.md#__hitcanvas)

#### Inherited from

[Rect](Rect.md).[__hitCanvas](Rect.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__captureMap](../interfaces/IImage.md#__capturemap)

#### Inherited from

[Rect](Rect.md).[__captureMap](Rect.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__bubbleMap](../interfaces/IImage.md#__bubblemap)

#### Inherited from

[Rect](Rect.md).[__bubbleMap](Rect.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L97)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[noBounds](../interfaces/IImage.md#nobounds)

#### Inherited from

[Rect](Rect.md).[noBounds](Rect.md#nobounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L103)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroyed](../interfaces/IImage.md#destroyed)

#### Inherited from

[Rect](Rect.md).[destroyed](Rect.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IImageData`](../interfaces/IImageData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__](../interfaces/IImage.md#__)

#### Overrides

[Rect](Rect.md).[__](Rect.md#__)

#### Defined in

[ui/packages/display/src/Image.ts:16](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L16)

___

### url

• **url**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[url](../interfaces/IImage.md#url)

#### Defined in

[ui/packages/display/src/Image.ts:19](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L19)

___

### image

• `Optional` **image**: [`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[image](../interfaces/IImage.md#image)

#### Defined in

[ui/packages/display/src/Image.ts:23](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L23)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[proxyData](../interfaces/IImage.md#proxydata)

#### Inherited from

[Rect](Rect.md).[proxyData](Rect.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__proxyData](../interfaces/IImage.md#__proxydata)

#### Inherited from

[Rect](Rect.md).[__proxyData](Rect.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[leafer](../interfaces/IImage.md#leafer)

#### Inherited from

[Rect](Rect.md).[leafer](Rect.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[parent](../interfaces/IImage.md#parent)

#### Inherited from

[Rect](Rect.md).[parent](Rect.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[zoomLayer](../interfaces/IImage.md#zoomlayer)

#### Inherited from

[Rect](Rect.md).[zoomLayer](Rect.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[children](../interfaces/IImage.md#children)

#### Inherited from

[Rect](Rect.md).[children](Rect.md#children)

#### Defined in

[ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[id](../interfaces/IImage.md#id)

#### Inherited from

[Rect](Rect.md).[id](Rect.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[name](../interfaces/IImage.md#name)

#### Inherited from

[Rect](Rect.md).[name](Rect.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[className](../interfaces/IImage.md#classname)

#### Inherited from

[Rect](Rect.md).[className](Rect.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IImage](../interfaces/IImage.md).[blendMode](../interfaces/IImage.md#blendmode)

#### Inherited from

[Rect](Rect.md).[blendMode](Rect.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[opacity](../interfaces/IImage.md#opacity)

#### Inherited from

[Rect](Rect.md).[opacity](Rect.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IImage](../interfaces/IImage.md).[visible](../interfaces/IImage.md#visible)

#### Inherited from

[Rect](Rect.md).[visible](Rect.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[locked](../interfaces/IImage.md#locked)

#### Inherited from

[Rect](Rect.md).[locked](Rect.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L61)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[zIndex](../interfaces/IImage.md#zindex)

#### Inherited from

[Rect](Rect.md).[zIndex](Rect.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L65)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IImage](../interfaces/IImage.md).[mask](../interfaces/IImage.md#mask)

#### Inherited from

[Rect](Rect.md).[mask](Rect.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:69](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L69)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IImage](../interfaces/IImage.md).[eraser](../interfaces/IImage.md#eraser)

#### Inherited from

[Rect](Rect.md).[eraser](Rect.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L72)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[x](../interfaces/IImage.md#x)

#### Inherited from

[Rect](Rect.md).[x](Rect.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:77](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L77)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[y](../interfaces/IImage.md#y)

#### Inherited from

[Rect](Rect.md).[y](Rect.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L80)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[width](../interfaces/IImage.md#width)

#### Inherited from

[Rect](Rect.md).[width](Rect.md#width)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L84)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[height](../interfaces/IImage.md#height)

#### Inherited from

[Rect](Rect.md).[height](Rect.md#height)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleX](../interfaces/IImage.md#scalex)

#### Inherited from

[Rect](Rect.md).[scaleX](Rect.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L91)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleY](../interfaces/IImage.md#scaley)

#### Inherited from

[Rect](Rect.md).[scaleY](Rect.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:94](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L94)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[rotation](../interfaces/IImage.md#rotation)

#### Inherited from

[Rect](Rect.md).[rotation](Rect.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L98)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewX](../interfaces/IImage.md#skewx)

#### Inherited from

[Rect](Rect.md).[skewX](Rect.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L102)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewY](../interfaces/IImage.md#skewy)

#### Inherited from

[Rect](Rect.md).[skewY](Rect.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L105)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetX](../interfaces/IImage.md#offsetx)

#### Inherited from

[Rect](Rect.md).[offsetX](Rect.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:110](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L110)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetY](../interfaces/IImage.md#offsety)

#### Inherited from

[Rect](Rect.md).[offsetY](Rect.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L113)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollX](../interfaces/IImage.md#scrollx)

#### Inherited from

[Rect](Rect.md).[scrollX](Rect.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L117)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollY](../interfaces/IImage.md#scrolly)

#### Inherited from

[Rect](Rect.md).[scrollY](Rect.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L120)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[origin](../interfaces/IImage.md#origin)

#### Inherited from

[Rect](Rect.md).[origin](Rect.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:125](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L125)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[around](../interfaces/IImage.md#around)

#### Inherited from

[Rect](Rect.md).[around](Rect.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L128)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lazy](../interfaces/IImage.md#lazy)

#### Inherited from

[Rect](Rect.md).[lazy](Rect.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:133](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L133)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[pixelRatio](../interfaces/IImage.md#pixelratio)

#### Inherited from

[Rect](Rect.md).[pixelRatio](Rect.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:136](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L136)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[path](../interfaces/IImage.md#path)

#### Inherited from

[Rect](Rect.md).[path](Rect.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:141](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L141)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IImage](../interfaces/IImage.md).[windingRule](../interfaces/IImage.md#windingrule)

#### Inherited from

[Rect](Rect.md).[windingRule](Rect.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L144)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[closed](../interfaces/IImage.md#closed)

#### Inherited from

[Rect](Rect.md).[closed](Rect.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L147)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[flow](../interfaces/IImage.md#flow)

#### Inherited from

[Rect](Rect.md).[flow](Rect.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L151)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[padding](../interfaces/IImage.md#padding)

#### Inherited from

[Rect](Rect.md).[padding](Rect.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L154)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[gap](../interfaces/IImage.md#gap)

#### Inherited from

[Rect](Rect.md).[gap](Rect.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:156](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L156)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowAlign](../interfaces/IImage.md#flowalign)

#### Inherited from

[Rect](Rect.md).[flowAlign](Rect.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L158)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowWrap](../interfaces/IImage.md#flowwrap)

#### Inherited from

[Rect](Rect.md).[flowWrap](Rect.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:160](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L160)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[itemBox](../interfaces/IImage.md#itembox)

#### Inherited from

[Rect](Rect.md).[itemBox](Rect.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L163)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[inFlow](../interfaces/IImage.md#inflow)

#### Inherited from

[Rect](Rect.md).[inFlow](Rect.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L165)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoWidth](../interfaces/IImage.md#autowidth)

#### Inherited from

[Rect](Rect.md).[autoWidth](Rect.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:168](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L168)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoHeight](../interfaces/IImage.md#autoheight)

#### Inherited from

[Rect](Rect.md).[autoHeight](Rect.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L170)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockRatio](../interfaces/IImage.md#lockratio)

#### Inherited from

[Rect](Rect.md).[lockRatio](Rect.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L173)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoBox](../interfaces/IImage.md#autobox)

#### Inherited from

[Rect](Rect.md).[autoBox](Rect.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L175)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[widthRange](../interfaces/IImage.md#widthrange)

#### Inherited from

[Rect](Rect.md).[widthRange](Rect.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L178)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[heightRange](../interfaces/IImage.md#heightrange)

#### Inherited from

[Rect](Rect.md).[heightRange](Rect.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L181)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IImage](../interfaces/IImage.md).[draggable](../interfaces/IImage.md#draggable)

#### Inherited from

[Rect](Rect.md).[draggable](Rect.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L186)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[dragBounds](../interfaces/IImage.md#dragbounds)

#### Inherited from

[Rect](Rect.md).[dragBounds](Rect.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L189)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[editable](../interfaces/IImage.md#editable)

#### Inherited from

[Rect](Rect.md).[editable](Rect.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L193)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hittable](../interfaces/IImage.md#hittable)

#### Inherited from

[Rect](Rect.md).[hittable](Rect.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:198](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L198)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitFill](../interfaces/IImage.md#hitfill)

#### Inherited from

[Rect](Rect.md).[hitFill](Rect.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L201)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitStroke](../interfaces/IImage.md#hitstroke)

#### Inherited from

[Rect](Rect.md).[hitStroke](Rect.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L204)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitBox](../interfaces/IImage.md#hitbox)

#### Inherited from

[Rect](Rect.md).[hitBox](Rect.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L207)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitChildren](../interfaces/IImage.md#hitchildren)

#### Inherited from

[Rect](Rect.md).[hitChildren](Rect.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:210](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L210)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitSelf](../interfaces/IImage.md#hitself)

#### Inherited from

[Rect](Rect.md).[hitSelf](Rect.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:213](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L213)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitRadius](../interfaces/IImage.md#hitradius)

#### Inherited from

[Rect](Rect.md).[hitRadius](Rect.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L216)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[cursor](../interfaces/IImage.md#cursor)

#### Inherited from

[Rect](Rect.md).[cursor](Rect.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L219)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IImage](../interfaces/IImage.md).[fill](../interfaces/IImage.md#fill)

#### Inherited from

[Rect](Rect.md).[fill](Rect.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L227)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IImage](../interfaces/IImage.md).[stroke](../interfaces/IImage.md#stroke)

#### Inherited from

[Rect](Rect.md).[stroke](Rect.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L232)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeAlign](../interfaces/IImage.md#strokealign)

#### Inherited from

[Rect](Rect.md).[strokeAlign](Rect.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L235)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeWidth](../interfaces/IImage.md#strokewidth)

#### Inherited from

[Rect](Rect.md).[strokeWidth](Rect.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L238)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeWidthFixed](../interfaces/IImage.md#strokewidthfixed)

#### Inherited from

[Rect](Rect.md).[strokeWidthFixed](Rect.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L241)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeCap](../interfaces/IImage.md#strokecap)

#### Inherited from

[Rect](Rect.md).[strokeCap](Rect.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L244)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeJoin](../interfaces/IImage.md#strokejoin)

#### Inherited from

[Rect](Rect.md).[strokeJoin](Rect.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:247](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L247)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IImage](../interfaces/IImage.md).[dashPattern](../interfaces/IImage.md#dashpattern)

#### Inherited from

[Rect](Rect.md).[dashPattern](Rect.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L250)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[dashOffset](../interfaces/IImage.md#dashoffset)

#### Inherited from

[Rect](Rect.md).[dashOffset](Rect.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:253](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L253)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[miterLimit](../interfaces/IImage.md#miterlimit)

#### Inherited from

[Rect](Rect.md).[miterLimit](Rect.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L256)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[startArrow](../interfaces/IImage.md#startarrow)

#### Inherited from

[Rect](Rect.md).[startArrow](Rect.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L261)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[endArrow](../interfaces/IImage.md#endarrow)

#### Inherited from

[Rect](Rect.md).[endArrow](Rect.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L263)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerRadius](../interfaces/IImage.md#cornerradius)

#### Inherited from

[Rect](Rect.md).[cornerRadius](Rect.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L268)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerSmoothing](../interfaces/IImage.md#cornersmoothing)

#### Inherited from

[Rect](Rect.md).[cornerSmoothing](Rect.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L271)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[shadow](../interfaces/IImage.md#shadow)

#### Inherited from

[Rect](Rect.md).[shadow](Rect.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L276)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[innerShadow](../interfaces/IImage.md#innershadow)

#### Inherited from

[Rect](Rect.md).[innerShadow](Rect.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L279)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[blur](../interfaces/IImage.md#blur)

#### Inherited from

[Rect](Rect.md).[blur](Rect.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L282)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[backgroundBlur](../interfaces/IImage.md#backgroundblur)

#### Inherited from

[Rect](Rect.md).[backgroundBlur](Rect.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L285)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[grayscale](../interfaces/IImage.md#grayscale)

#### Inherited from

[Rect](Rect.md).[grayscale](Rect.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:288](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L288)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[filter](../interfaces/IImage.md#filter)

#### Inherited from

[Rect](Rect.md).[filter](Rect.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:291](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L291)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animation](../interfaces/IImage.md#animation)

#### Inherited from

[Rect](Rect.md).[animation](Rect.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L296)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animationOut](../interfaces/IImage.md#animationout)

#### Inherited from

[Rect](Rect.md).[animationOut](Rect.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L298)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transition](../interfaces/IImage.md#transition)

#### Inherited from

[Rect](Rect.md).[transition](Rect.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:301](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L301)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transitionOut](../interfaces/IImage.md#transitionout)

#### Inherited from

[Rect](Rect.md).[transitionOut](Rect.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L303)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPath](../interfaces/IImage.md#motionpath)

#### Inherited from

[Rect](Rect.md).[motionPath](Rect.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L308)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPrecision](../interfaces/IImage.md#motionprecision)

#### Inherited from

[Rect](Rect.md).[motionPrecision](Rect.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[motion](../interfaces/IImage.md#motion)

#### Inherited from

[Rect](Rect.md).[motion](Rect.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:313](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L313)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionRotation](../interfaces/IImage.md#motionrotation)

#### Inherited from

[Rect](Rect.md).[motionRotation](Rect.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L315)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[states](../interfaces/IImage.md#states)

#### Inherited from

[Rect](Rect.md).[states](Rect.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L320)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[state](../interfaces/IImage.md#state)

#### Inherited from

[Rect](Rect.md).[state](Rect.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L322)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[selected](../interfaces/IImage.md#selected)

#### Inherited from

[Rect](Rect.md).[selected](Rect.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L325)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[disabled](../interfaces/IImage.md#disabled)

#### Inherited from

[Rect](Rect.md).[disabled](Rect.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L327)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[normalStyle](../interfaces/IImage.md#normalstyle)

#### Inherited from

[Rect](Rect.md).[normalStyle](Rect.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L330)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[hoverStyle](../interfaces/IImage.md#hoverstyle)

#### Inherited from

[Rect](Rect.md).[hoverStyle](Rect.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L332)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pressStyle](../interfaces/IImage.md#pressstyle)

#### Inherited from

[Rect](Rect.md).[pressStyle](Rect.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L334)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[focusStyle](../interfaces/IImage.md#focusstyle)

#### Inherited from

[Rect](Rect.md).[focusStyle](Rect.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L336)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[selectedStyle](../interfaces/IImage.md#selectedstyle)

#### Inherited from

[Rect](Rect.md).[selectedStyle](Rect.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L338)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[disabledStyle](../interfaces/IImage.md#disabledstyle)

#### Inherited from

[Rect](Rect.md).[disabledStyle](Rect.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:340](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L340)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderStyle](../interfaces/IImage.md#placeholderstyle)

#### Inherited from

[Rect](Rect.md).[placeholderStyle](Rect.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L342)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[button](../interfaces/IImage.md#button)

#### Inherited from

[Rect](Rect.md).[button](Rect.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L345)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[data](../interfaces/IImage.md#data)

#### Inherited from

[Rect](Rect.md).[data](Rect.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L350)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__animate](../interfaces/IImage.md#__animate)

#### Inherited from

[Rect](Rect.md).[__animate](Rect.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L356)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[tag](../interfaces/IImage.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[tag](../interfaces/IImage.md#tag)

#### Inherited from

Rect.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerName](../interfaces/IImage.md#innername)

#### Inherited from

Rect.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__DataProcessor](../interfaces/IImage.md#__dataprocessor)

#### Inherited from

Rect.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__LayoutProcessor](../interfaces/IImage.md#__layoutprocessor)

#### Inherited from

Rect.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsCreated](../interfaces/IImage.md#leaferiscreated)

#### Inherited from

Rect.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsReady](../interfaces/IImage.md#leaferisready)

#### Inherited from

Rect.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isLeafer](../interfaces/IImage.md#isleafer)

#### Inherited from

Rect.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L42)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranch](../interfaces/IImage.md#isbranch)

#### Inherited from

Rect.isBranch

#### Defined in

[leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L43)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranchLeaf](../interfaces/IImage.md#isbranchleaf)

#### Inherited from

Rect.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localMatrix](../interfaces/IImage.md#__localmatrix)

#### Inherited from

Rect.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localBoxBounds](../interfaces/IImage.md#__localboxbounds)

#### Inherited from

Rect.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldTransform](../interfaces/IImage.md#worldtransform)

#### Inherited from

Rect.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[localTransform](../interfaces/IImage.md#localtransform)

#### Inherited from

Rect.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[boxBounds](../interfaces/IImage.md#boxbounds)

#### Inherited from

Rect.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[renderBounds](../interfaces/IImage.md#renderbounds)

#### Inherited from

Rect.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldBoxBounds](../interfaces/IImage.md#worldboxbounds)

#### Inherited from

Rect.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldStrokeBounds](../interfaces/IImage.md#worldstrokebounds)

#### Inherited from

Rect.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldRenderBounds](../interfaces/IImage.md#worldrenderbounds)

#### Inherited from

Rect.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[worldOpacity](../interfaces/IImage.md#worldopacity)

#### Inherited from

Rect.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldFlipped](../interfaces/IImage.md#__worldflipped)

#### Inherited from

Rect.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onlyHitMask](../interfaces/IImage.md#__onlyhitmask)

#### Inherited from

Rect.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__ignoreHitWorld](../interfaces/IImage.md#__ignorehitworld)

#### Inherited from

Rect.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__inLazyBounds](../interfaces/IImage.md#__inlazybounds)

#### Inherited from

Rect.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[pathInputed](../interfaces/IImage.md#pathinputed)

#### Inherited from

Rect.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L91)

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

[IImage](../interfaces/IImage.md).[event](../interfaces/IImage.md#event)

#### Inherited from

Rect.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tag](../interfaces/IImage.md#__tag)

#### Overrides

Rect.\_\_tag

#### Defined in

[ui/packages/display/src/Image.ts:13](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L13)

___

### ready

• `get` **ready**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[ready](../interfaces/IImage.md#ready)

#### Defined in

[ui/packages/display/src/Image.ts:21](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L21)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[app](../interfaces/IImage.md#app)

#### Inherited from

Rect.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isFrame](../interfaces/IImage.md#isframe)

#### Inherited from

Rect.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[scale](../interfaces/IImage.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L354)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[scale](../interfaces/IImage.md#scale)

#### Inherited from

Rect.scale

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L353)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pen](../interfaces/IImage.md#pen)

#### Inherited from

Rect.pen

#### Defined in

[ui/packages/display/src/UI.ts:358](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L358)

___

### editConfig

• `get` **editConfig**(): [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Returns

[`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[editConfig](../interfaces/IImage.md#editconfig)

#### Inherited from

Rect.editConfig

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L368)

___

### editOuter

• `get` **editOuter**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editOuter](../interfaces/IImage.md#editouter)

#### Inherited from

Rect.editOuter

#### Defined in

[ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L370)

___

### editInner

• `get` **editInner**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editInner](../interfaces/IImage.md#editinner)

#### Inherited from

Rect.editInner

#### Defined in

[ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L372)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[resetCustom](../interfaces/IImage.md#resetcustom)

#### Inherited from

[Rect](Rect.md).[resetCustom](Rect.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:133](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L133)

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

[IImage](../interfaces/IImage.md).[waitParent](../interfaces/IImage.md#waitparent)

#### Inherited from

[Rect](Rect.md).[waitParent](Rect.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:139](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L139)

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

[IImage](../interfaces/IImage.md).[waitLeafer](../interfaces/IImage.md#waitleafer)

#### Inherited from

[Rect](Rect.md).[waitLeafer](Rect.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:144](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L144)

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

[IImage](../interfaces/IImage.md).[nextRender](../interfaces/IImage.md#nextrender)

#### Inherited from

[Rect](Rect.md).[nextRender](Rect.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:149](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L149)

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

[IImage](../interfaces/IImage.md).[removeNextRender](../interfaces/IImage.md#removenextrender)

#### Inherited from

[Rect](Rect.md).[removeNextRender](Rect.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L153)

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

[IImage](../interfaces/IImage.md).[__bindLeafer](../interfaces/IImage.md#__bindleafer)

#### Inherited from

[Rect](Rect.md).[__bindLeafer](Rect.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L157)

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

[IImage](../interfaces/IImage.md).[setAttr](../interfaces/IImage.md#setattr)

#### Inherited from

[Rect](Rect.md).[setAttr](Rect.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:186](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L186)

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

[IImage](../interfaces/IImage.md).[getAttr](../interfaces/IImage.md#getattr)

#### Inherited from

[Rect](Rect.md).[getAttr](Rect.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:187](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L187)

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

[IImage](../interfaces/IImage.md).[getComputedAttr](../interfaces/IImage.md#getcomputedattr)

#### Inherited from

[Rect](Rect.md).[getComputedAttr](Rect.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:189](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L189)

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

[IImage](../interfaces/IImage.md).[toJSON](../interfaces/IImage.md#tojson)

#### Inherited from

[Rect](Rect.md).[toJSON](Rect.md#tojson)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L191)

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

[IImage](../interfaces/IImage.md).[toString](../interfaces/IImage.md#tostring)

#### Inherited from

[Rect](Rect.md).[toString](Rect.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L196)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toSVG](../interfaces/IImage.md#tosvg)

#### Inherited from

[Rect](Rect.md).[toSVG](Rect.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L200)

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

[IImage](../interfaces/IImage.md).[__SVG](../interfaces/IImage.md#__svg)

#### Inherited from

[Rect](Rect.md).[__SVG](Rect.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:202](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L202)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toHTML](../interfaces/IImage.md#tohtml)

#### Inherited from

[Rect](Rect.md).[toHTML](Rect.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L204)

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

[IImage](../interfaces/IImage.md).[__setAttr](../interfaces/IImage.md#__setattr)

#### Inherited from

[Rect](Rect.md).[__setAttr](Rect.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L208)

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

[IImage](../interfaces/IImage.md).[__getAttr](../interfaces/IImage.md#__getattr)

#### Inherited from

[Rect](Rect.md).[__getAttr](Rect.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L210)

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

[IImage](../interfaces/IImage.md).[setProxyAttr](../interfaces/IImage.md#setproxyattr)

#### Inherited from

[Rect](Rect.md).[setProxyAttr](Rect.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L212)

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

[IImage](../interfaces/IImage.md).[getProxyAttr](../interfaces/IImage.md#getproxyattr)

#### Inherited from

[Rect](Rect.md).[getProxyAttr](Rect.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L214)

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

[IImage](../interfaces/IImage.md).[focus](../interfaces/IImage.md#focus)

#### Inherited from

[Rect](Rect.md).[focus](Rect.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:234](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L234)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateState](../interfaces/IImage.md#updatestate)

#### Inherited from

[Rect](Rect.md).[updateState](Rect.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L236)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateLayout](../interfaces/IImage.md#updatelayout)

#### Inherited from

[Rect](Rect.md).[updateLayout](Rect.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:241](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L241)

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

[IImage](../interfaces/IImage.md).[forceUpdate](../interfaces/IImage.md#forceupdate)

#### Inherited from

[Rect](Rect.md).[forceUpdate](Rect.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L245)

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

[IImage](../interfaces/IImage.md).[forceRender](../interfaces/IImage.md#forcerender)

#### Inherited from

[Rect](Rect.md).[forceRender](Rect.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L253)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__extraUpdate](../interfaces/IImage.md#__extraupdate)

#### Inherited from

[Rect](Rect.md).[__extraUpdate](Rect.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L257)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldMatrix](../interfaces/IImage.md#__updateworldmatrix)

#### Inherited from

[Rect](Rect.md).[__updateWorldMatrix](Rect.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:263](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L263)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalMatrix](../interfaces/IImage.md#__updatelocalmatrix)

#### Inherited from

[Rect](Rect.md).[__updateLocalMatrix](Rect.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldBounds](../interfaces/IImage.md#__updateworldbounds)

#### Inherited from

[Rect](Rect.md).[__updateWorldBounds](Rect.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBounds](../interfaces/IImage.md#__updatelocalbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBounds](Rect.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBoxBounds](../interfaces/IImage.md#__updatelocalboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalBoxBounds](Rect.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:276](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L276)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalStrokeBounds](../interfaces/IImage.md#__updatelocalstrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalStrokeBounds](Rect.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalRenderBounds](../interfaces/IImage.md#__updatelocalrenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateLocalRenderBounds](Rect.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L280)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateBoxBounds](../interfaces/IImage.md#__updateboxbounds)

#### Inherited from

[Rect](Rect.md).[__updateBoxBounds](Rect.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L284)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateContentBounds](../interfaces/IImage.md#__updatecontentbounds)

#### Inherited from

[Rect](Rect.md).[__updateContentBounds](Rect.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L286)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateStrokeBounds](../interfaces/IImage.md#__updatestrokebounds)

#### Inherited from

[Rect](Rect.md).[__updateStrokeBounds](Rect.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L288)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderBounds](../interfaces/IImage.md#__updaterenderbounds)

#### Inherited from

[Rect](Rect.md).[__updateRenderBounds](Rect.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L290)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateAutoLayout](../interfaces/IImage.md#__updateautolayout)

#### Inherited from

[Rect](Rect.md).[__updateAutoLayout](Rect.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:293](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L293)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateFlowLayout](../interfaces/IImage.md#__updateflowlayout)

#### Inherited from

[Rect](Rect.md).[__updateFlowLayout](Rect.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L295)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateNaturalSize](../interfaces/IImage.md#__updatenaturalsize)

#### Inherited from

[Rect](Rect.md).[__updateNaturalSize](Rect.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L297)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateStrokeSpread](../interfaces/IImage.md#__updatestrokespread)

#### Inherited from

[Rect](Rect.md).[__updateStrokeSpread](Rect.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L300)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderSpread](../interfaces/IImage.md#__updaterenderspread)

#### Inherited from

[Rect](Rect.md).[__updateRenderSpread](Rect.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L302)

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

[IImage](../interfaces/IImage.md).[__updateEraser](../interfaces/IImage.md#__updateeraser)

#### Inherited from

[Rect](Rect.md).[__updateEraser](Rect.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L309)

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

[IImage](../interfaces/IImage.md).[__renderEraser](../interfaces/IImage.md#__rendereraser)

#### Inherited from

[Rect](Rect.md).[__renderEraser](Rect.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:313](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L313)

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

[IImage](../interfaces/IImage.md).[__updateMask](../interfaces/IImage.md#__updatemask)

#### Inherited from

[Rect](Rect.md).[__updateMask](Rect.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L321)

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

[IImage](../interfaces/IImage.md).[__renderMask](../interfaces/IImage.md#__rendermask)

#### Inherited from

[Rect](Rect.md).[__renderMask](Rect.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:327](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L327)

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

[IImage](../interfaces/IImage.md).[__getNowWorld](../interfaces/IImage.md#__getnowworld)

#### Inherited from

[Rect](Rect.md).[__getNowWorld](Rect.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L335)

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

[IImage](../interfaces/IImage.md).[getTransform](../interfaces/IImage.md#gettransform)

#### Inherited from

[Rect](Rect.md).[getTransform](Rect.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L347)

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

[IImage](../interfaces/IImage.md).[getBounds](../interfaces/IImage.md#getbounds)

#### Inherited from

[Rect](Rect.md).[getBounds](Rect.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L352)

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

[IImage](../interfaces/IImage.md).[getLayoutBounds](../interfaces/IImage.md#getlayoutbounds)

#### Inherited from

[Rect](Rect.md).[getLayoutBounds](Rect.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L356)

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

[IImage](../interfaces/IImage.md).[getLayoutPoints](../interfaces/IImage.md#getlayoutpoints)

#### Inherited from

[Rect](Rect.md).[getLayoutPoints](Rect.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:360](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L360)

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

[IImage](../interfaces/IImage.md).[getWorldBounds](../interfaces/IImage.md#getworldbounds)

#### Inherited from

[Rect](Rect.md).[getWorldBounds](Rect.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L365)

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

[IImage](../interfaces/IImage.md).[worldToLocal](../interfaces/IImage.md#worldtolocal)

#### Inherited from

[Rect](Rect.md).[worldToLocal](Rect.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L373)

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

[IImage](../interfaces/IImage.md).[localToWorld](../interfaces/IImage.md#localtoworld)

#### Inherited from

[Rect](Rect.md).[localToWorld](Rect.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:381](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L381)

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

[IImage](../interfaces/IImage.md).[worldToInner](../interfaces/IImage.md#worldtoinner)

#### Inherited from

[Rect](Rect.md).[worldToInner](Rect.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L389)

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

[IImage](../interfaces/IImage.md).[innerToWorld](../interfaces/IImage.md#innertoworld)

#### Inherited from

[Rect](Rect.md).[innerToWorld](Rect.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L397)

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

[IImage](../interfaces/IImage.md).[getBoxPoint](../interfaces/IImage.md#getboxpoint)

#### Inherited from

[Rect](Rect.md).[getBoxPoint](Rect.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:404](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L404)

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

[IImage](../interfaces/IImage.md).[getBoxPointByInner](../interfaces/IImage.md#getboxpointbyinner)

#### Inherited from

[Rect](Rect.md).[getBoxPointByInner](Rect.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L408)

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

[IImage](../interfaces/IImage.md).[getInnerPoint](../interfaces/IImage.md#getinnerpoint)

#### Inherited from

[Rect](Rect.md).[getInnerPoint](Rect.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:414](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L414)

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

[IImage](../interfaces/IImage.md).[getInnerPointByBox](../interfaces/IImage.md#getinnerpointbybox)

#### Inherited from

[Rect](Rect.md).[getInnerPointByBox](Rect.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:420](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L420)

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

[IImage](../interfaces/IImage.md).[getInnerPointByLocal](../interfaces/IImage.md#getinnerpointbylocal)

#### Inherited from

[Rect](Rect.md).[getInnerPointByLocal](Rect.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:426](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L426)

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

[IImage](../interfaces/IImage.md).[getLocalPoint](../interfaces/IImage.md#getlocalpoint)

#### Inherited from

[Rect](Rect.md).[getLocalPoint](Rect.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L430)

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

[IImage](../interfaces/IImage.md).[getLocalPointByInner](../interfaces/IImage.md#getlocalpointbyinner)

#### Inherited from

[Rect](Rect.md).[getLocalPointByInner](Rect.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:436](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L436)

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

[IImage](../interfaces/IImage.md).[getPagePoint](../interfaces/IImage.md#getpagepoint)

#### Inherited from

[Rect](Rect.md).[getPagePoint](Rect.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L440)

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

[IImage](../interfaces/IImage.md).[getWorldPoint](../interfaces/IImage.md#getworldpoint)

#### Inherited from

[Rect](Rect.md).[getWorldPoint](Rect.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L445)

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

[IImage](../interfaces/IImage.md).[getWorldPointByBox](../interfaces/IImage.md#getworldpointbybox)

#### Inherited from

[Rect](Rect.md).[getWorldPointByBox](Rect.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:451](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L451)

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

[IImage](../interfaces/IImage.md).[getWorldPointByLocal](../interfaces/IImage.md#getworldpointbylocal)

#### Inherited from

[Rect](Rect.md).[getWorldPointByLocal](Rect.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L455)

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

[IImage](../interfaces/IImage.md).[getWorldPointByPage](../interfaces/IImage.md#getworldpointbypage)

#### Inherited from

[Rect](Rect.md).[getWorldPointByPage](Rect.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:461](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L461)

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

[IImage](../interfaces/IImage.md).[setTransform](../interfaces/IImage.md#settransform)

#### Inherited from

[Rect](Rect.md).[setTransform](Rect.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L469)

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

[IImage](../interfaces/IImage.md).[transform](../interfaces/IImage.md#transform)

#### Inherited from

[Rect](Rect.md).[transform](Rect.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:473](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L473)

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

[IImage](../interfaces/IImage.md).[move](../interfaces/IImage.md#move)

#### Inherited from

[Rect](Rect.md).[move](Rect.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L477)

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

[IImage](../interfaces/IImage.md).[moveInner](../interfaces/IImage.md#moveinner)

#### Inherited from

[Rect](Rect.md).[moveInner](Rect.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L482)

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

[IImage](../interfaces/IImage.md).[scaleOf](../interfaces/IImage.md#scaleof)

#### Inherited from

[Rect](Rect.md).[scaleOf](Rect.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:486](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L486)

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

[IImage](../interfaces/IImage.md).[rotateOf](../interfaces/IImage.md#rotateof)

#### Inherited from

[Rect](Rect.md).[rotateOf](Rect.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:490](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L490)

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

[IImage](../interfaces/IImage.md).[skewOf](../interfaces/IImage.md#skewof)

#### Inherited from

[Rect](Rect.md).[skewOf](Rect.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:494](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L494)

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

[IImage](../interfaces/IImage.md).[transformWorld](../interfaces/IImage.md#transformworld)

#### Inherited from

[Rect](Rect.md).[transformWorld](Rect.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L499)

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

[IImage](../interfaces/IImage.md).[moveWorld](../interfaces/IImage.md#moveworld)

#### Inherited from

[Rect](Rect.md).[moveWorld](Rect.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L503)

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

[IImage](../interfaces/IImage.md).[scaleOfWorld](../interfaces/IImage.md#scaleofworld)

#### Inherited from

[Rect](Rect.md).[scaleOfWorld](Rect.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:507](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L507)

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

[IImage](../interfaces/IImage.md).[rotateOfWorld](../interfaces/IImage.md#rotateofworld)

#### Inherited from

[Rect](Rect.md).[rotateOfWorld](Rect.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:511](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L511)

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

[IImage](../interfaces/IImage.md).[skewOfWorld](../interfaces/IImage.md#skewofworld)

#### Inherited from

[Rect](Rect.md).[skewOfWorld](Rect.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:515](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L515)

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

[IImage](../interfaces/IImage.md).[flip](../interfaces/IImage.md#flip)

#### Inherited from

[Rect](Rect.md).[flip](Rect.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L519)

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

[IImage](../interfaces/IImage.md).[scaleResize](../interfaces/IImage.md#scaleresize)

#### Inherited from

[Rect](Rect.md).[scaleResize](Rect.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L526)

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

[IImage](../interfaces/IImage.md).[__scaleResize](../interfaces/IImage.md#__scaleresize)

#### Inherited from

[Rect](Rect.md).[__scaleResize](Rect.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L531)

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

[IImage](../interfaces/IImage.md).[resizeWidth](../interfaces/IImage.md#resizewidth)

#### Inherited from

[Rect](Rect.md).[resizeWidth](Rect.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L534)

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

[IImage](../interfaces/IImage.md).[resizeHeight](../interfaces/IImage.md#resizeheight)

#### Inherited from

[Rect](Rect.md).[resizeHeight](Rect.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:536](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L536)

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

[IImage](../interfaces/IImage.md).[__hitWorld](../interfaces/IImage.md#__hitworld)

#### Inherited from

[Rect](Rect.md).[__hitWorld](Rect.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L541)

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

[IImage](../interfaces/IImage.md).[__hit](../interfaces/IImage.md#__hit)

#### Inherited from

[Rect](Rect.md).[__hit](Rect.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L543)

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

[IImage](../interfaces/IImage.md).[__hitFill](../interfaces/IImage.md#__hitfill)

#### Inherited from

[Rect](Rect.md).[__hitFill](Rect.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L545)

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

[IImage](../interfaces/IImage.md).[__hitStroke](../interfaces/IImage.md#__hitstroke)

#### Inherited from

[Rect](Rect.md).[__hitStroke](Rect.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:547](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L547)

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

[IImage](../interfaces/IImage.md).[__hitPixel](../interfaces/IImage.md#__hitpixel)

#### Inherited from

[Rect](Rect.md).[__hitPixel](Rect.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:549](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L549)

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

[IImage](../interfaces/IImage.md).[__drawHitPath](../interfaces/IImage.md#__drawhitpath)

#### Inherited from

[Rect](Rect.md).[__drawHitPath](Rect.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L551)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateHitCanvas](../interfaces/IImage.md#__updatehitcanvas)

#### Inherited from

[Rect](Rect.md).[__updateHitCanvas](Rect.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L553)

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

[IImage](../interfaces/IImage.md).[__render](../interfaces/IImage.md#__render)

#### Inherited from

[Rect](Rect.md).[__render](Rect.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L560)

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

[IImage](../interfaces/IImage.md).[__drawFast](../interfaces/IImage.md#__drawfast)

#### Inherited from

[Rect](Rect.md).[__drawFast](Rect.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L562)

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

[IImage](../interfaces/IImage.md).[__draw](../interfaces/IImage.md#__draw)

#### Inherited from

[Rect](Rect.md).[__draw](Rect.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L564)

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

[IImage](../interfaces/IImage.md).[__clip](../interfaces/IImage.md#__clip)

#### Inherited from

[Rect](Rect.md).[__clip](Rect.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L567)

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

[IImage](../interfaces/IImage.md).[__renderShape](../interfaces/IImage.md#__rendershape)

#### Inherited from

[Rect](Rect.md).[__renderShape](Rect.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L569)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldOpacity](../interfaces/IImage.md#__updateworldopacity)

#### Inherited from

[Rect](Rect.md).[__updateWorldOpacity](Rect.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L572)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateChange](../interfaces/IImage.md#__updatechange)

#### Inherited from

[Rect](Rect.md).[__updateChange](Rect.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L574)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updatePath](../interfaces/IImage.md#__updatepath)

#### Inherited from

[Rect](Rect.md).[__updatePath](Rect.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:585](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L585)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionPathData](../interfaces/IImage.md#getmotionpathdata)

#### Inherited from

[Rect](Rect.md).[getMotionPathData](Rect.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:594](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L594)

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

[IImage](../interfaces/IImage.md).[getMotionPoint](../interfaces/IImage.md#getmotionpoint)

#### Inherited from

[Rect](Rect.md).[getMotionPoint](Rect.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L598)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionTotal](../interfaces/IImage.md#getmotiontotal)

#### Inherited from

[Rect](Rect.md).[getMotionTotal](Rect.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L602)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateMotionPath](../interfaces/IImage.md#__updatemotionpath)

#### Inherited from

[Rect](Rect.md).[__updateMotionPath](Rect.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L606)

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

[IImage](../interfaces/IImage.md).[__runAnimation](../interfaces/IImage.md#__runanimation)

#### Inherited from

[Rect](Rect.md).[__runAnimation](Rect.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:612](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L612)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateSortChildren](../interfaces/IImage.md#__updatesortchildren)

#### Inherited from

[Rect](Rect.md).[__updateSortChildren](Rect.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L617)

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

[IImage](../interfaces/IImage.md).[add](../interfaces/IImage.md#add)

#### Inherited from

[Rect](Rect.md).[add](Rect.md#add)

#### Defined in

[leafer/packages/display/src/Leaf.ts:619](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L619)

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

[IImage](../interfaces/IImage.md).[remove](../interfaces/IImage.md#remove)

#### Inherited from

[Rect](Rect.md).[remove](Rect.md#remove)

#### Defined in

[leafer/packages/display/src/Leaf.ts:621](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L621)

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

[IImage](../interfaces/IImage.md).[dropTo](../interfaces/IImage.md#dropto)

#### Inherited from

[Rect](Rect.md).[dropTo](Rect.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L625)

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

[IImage](../interfaces/IImage.md).[on](../interfaces/IImage.md#on)

#### Inherited from

[Rect](Rect.md).[on](Rect.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L634)

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

[IImage](../interfaces/IImage.md).[off](../interfaces/IImage.md#off)

#### Inherited from

[Rect](Rect.md).[off](Rect.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L636)

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

[IImage](../interfaces/IImage.md).[on_](../interfaces/IImage.md#on_)

#### Inherited from

[Rect](Rect.md).[on_](Rect.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L638)

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

[IImage](../interfaces/IImage.md).[off_](../interfaces/IImage.md#off_)

#### Inherited from

[Rect](Rect.md).[off_](Rect.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L640)

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

[IImage](../interfaces/IImage.md).[once](../interfaces/IImage.md#once)

#### Inherited from

[Rect](Rect.md).[once](Rect.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L642)

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

[IImage](../interfaces/IImage.md).[emit](../interfaces/IImage.md#emit)

#### Inherited from

[Rect](Rect.md).[emit](Rect.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:644](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L644)

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

[IImage](../interfaces/IImage.md).[emitEvent](../interfaces/IImage.md#emitevent)

#### Inherited from

[Rect](Rect.md).[emitEvent](Rect.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L646)

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

[IImage](../interfaces/IImage.md).[hasEvent](../interfaces/IImage.md#hasevent)

#### Inherited from

[Rect](Rect.md).[hasEvent](Rect.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L648)

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

[leafer/packages/display/src/Leaf.ts:652](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L652)

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

[leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L656)

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

[IImage](../interfaces/IImage.md).[__emitLifeEvent](../interfaces/IImage.md#__emitlifeevent)

#### Inherited from

[Rect](Rect.md).[__emitLifeEvent](Rect.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/display/src/Leaf.ts#L662)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroy](../interfaces/IImage.md#destroy)

#### Overrides

[Rect](Rect.md).[destroy](Rect.md#destroy)

#### Defined in

[ui/packages/display/src/Image.ts:32](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/Image.ts#L32)

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

[IImage](../interfaces/IImage.md).[reset](../interfaces/IImage.md#reset)

#### Inherited from

[Rect](Rect.md).[reset](Rect.md#reset)

#### Defined in

[ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L383)

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

[IImage](../interfaces/IImage.md).[set](../interfaces/IImage.md#set)

#### Inherited from

[Rect](Rect.md).[set](Rect.md#set)

#### Defined in

[ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L386)

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

[IImage](../interfaces/IImage.md).[get](../interfaces/IImage.md#get)

#### Inherited from

[Rect](Rect.md).[get](Rect.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:398](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L398)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[createProxyData](../interfaces/IImage.md#createproxydata)

#### Inherited from

[Rect](Rect.md).[createProxyData](Rect.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:402](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L402)

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

[IImage](../interfaces/IImage.md).[find](../interfaces/IImage.md#find)

#### Inherited from

[Rect](Rect.md).[find](Rect.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L407)

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

[IImage](../interfaces/IImage.md).[findTag](../interfaces/IImage.md#findtag)

#### Inherited from

[Rect](Rect.md).[findTag](Rect.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L409)

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

[IImage](../interfaces/IImage.md).[findOne](../interfaces/IImage.md#findone)

#### Inherited from

[Rect](Rect.md).[findOne](Rect.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L411)

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

[IImage](../interfaces/IImage.md).[findId](../interfaces/IImage.md#findid)

#### Inherited from

[Rect](Rect.md).[findId](Rect.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:413](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L413)

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

[IImage](../interfaces/IImage.md).[getPath](../interfaces/IImage.md#getpath)

#### Inherited from

[Rect](Rect.md).[getPath](Rect.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L418)

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

[IImage](../interfaces/IImage.md).[getPathString](../interfaces/IImage.md#getpathstring)

#### Inherited from

[Rect](Rect.md).[getPathString](Rect.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L425)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[load](../interfaces/IImage.md#load)

#### Inherited from

[Rect](Rect.md).[load](Rect.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L430)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onUpdateSize](../interfaces/IImage.md#__onupdatesize)

#### Inherited from

[Rect](Rect.md).[__onUpdateSize](Rect.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L434)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderPath](../interfaces/IImage.md#__updaterenderpath)

#### Inherited from

[Rect](Rect.md).[__updateRenderPath](Rect.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:441](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L441)

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

[IImage](../interfaces/IImage.md).[__drawRenderPath](../interfaces/IImage.md#__drawrenderpath)

#### Inherited from

[Rect](Rect.md).[__drawRenderPath](Rect.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L449)

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

[IImage](../interfaces/IImage.md).[__drawPath](../interfaces/IImage.md#__drawpath)

#### Inherited from

[Rect](Rect.md).[__drawPath](Rect.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L454)

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

[IImage](../interfaces/IImage.md).[__drawPathByData](../interfaces/IImage.md#__drawpathbydata)

#### Inherited from

[Rect](Rect.md).[__drawPathByData](Rect.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:459](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L459)

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

[IImage](../interfaces/IImage.md).[__drawPathByBox](../interfaces/IImage.md#__drawpathbybox)

#### Inherited from

[Rect](Rect.md).[__drawPathByBox](Rect.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:463](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L463)

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

[IImage](../interfaces/IImage.md).[animate](../interfaces/IImage.md#animate)

#### Inherited from

[Rect](Rect.md).[animate](Rect.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:473](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L473)

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

[IImage](../interfaces/IImage.md).[killAnimate](../interfaces/IImage.md#killanimate)

#### Inherited from

[Rect](Rect.md).[killAnimate](Rect.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:477](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L477)

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

[IImage](../interfaces/IImage.md).[export](../interfaces/IImage.md#export)

#### Inherited from

[Rect](Rect.md).[export](Rect.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L483)

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

[IImage](../interfaces/IImage.md).[clone](../interfaces/IImage.md#clone)

#### Inherited from

[Rect](Rect.md).[clone](Rect.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:487](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L487)

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

[ui/packages/display/src/UI.ts:493](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L493)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Rect](Rect.md).[registerUI](Rect.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:497](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L497)

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

[ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L501)

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

[ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L508)

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

[ui/packages/display/src/UI.ts:510](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L510)

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

[ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/display/src/UI.ts#L512)
