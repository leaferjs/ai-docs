# Class: Rect

## Hierarchy

- [`UI`](UI.md)

  ↳ **`Rect`**

  ↳↳ [`Image`](Image.md)

  ↳↳ [`Canvas`](Canvas.md)

## Implements

- [`IRect`](../interfaces/IRect.md)

## Table of contents

### Constructors

- [constructor](Rect.md#constructor)

### Properties

- [innerId](Rect.md#innerid)
- [syncEventer](Rect.md#synceventer)
- [lockNormalStyle](Rect.md#locknormalstyle)
- [\_\_layout](Rect.md#__layout)
- [\_\_world](Rect.md#__world)
- [\_\_local](Rect.md#__local)
- [\_\_nowWorld](Rect.md#__nowworld)
- [\_\_cameraWorld](Rect.md#__cameraworld)
- [\_\_worldOpacity](Rect.md#__worldopacity)
- [\_\_level](Rect.md#__level)
- [\_\_tempNumber](Rect.md#__tempnumber)
- [\_\_hasAutoLayout](Rect.md#__hasautolayout)
- [\_\_hasMask](Rect.md#__hasmask)
- [\_\_hasEraser](Rect.md#__haseraser)
- [\_\_hitCanvas](Rect.md#__hitcanvas)
- [\_\_captureMap](Rect.md#__capturemap)
- [\_\_bubbleMap](Rect.md#__bubblemap)
- [noBounds](Rect.md#nobounds)
- [destroyed](Rect.md#destroyed)
- [\_\_](Rect.md#__)
- [proxyData](Rect.md#proxydata)
- [\_\_proxyData](Rect.md#__proxydata)
- [leafer](Rect.md#leafer)
- [parent](Rect.md#parent)
- [zoomLayer](Rect.md#zoomlayer)
- [children](Rect.md#children)
- [id](Rect.md#id)
- [name](Rect.md#name)
- [className](Rect.md#classname)
- [blendMode](Rect.md#blendmode)
- [opacity](Rect.md#opacity)
- [visible](Rect.md#visible)
- [locked](Rect.md#locked)
- [zIndex](Rect.md#zindex)
- [mask](Rect.md#mask)
- [eraser](Rect.md#eraser)
- [x](Rect.md#x)
- [y](Rect.md#y)
- [width](Rect.md#width)
- [height](Rect.md#height)
- [scaleX](Rect.md#scalex)
- [scaleY](Rect.md#scaley)
- [rotation](Rect.md#rotation)
- [skewX](Rect.md#skewx)
- [skewY](Rect.md#skewy)
- [offsetX](Rect.md#offsetx)
- [offsetY](Rect.md#offsety)
- [scrollX](Rect.md#scrollx)
- [scrollY](Rect.md#scrolly)
- [origin](Rect.md#origin)
- [around](Rect.md#around)
- [lazy](Rect.md#lazy)
- [pixelRatio](Rect.md#pixelratio)
- [path](Rect.md#path)
- [windingRule](Rect.md#windingrule)
- [closed](Rect.md#closed)
- [flow](Rect.md#flow)
- [padding](Rect.md#padding)
- [gap](Rect.md#gap)
- [flowAlign](Rect.md#flowalign)
- [flowWrap](Rect.md#flowwrap)
- [itemBox](Rect.md#itembox)
- [inFlow](Rect.md#inflow)
- [autoWidth](Rect.md#autowidth)
- [autoHeight](Rect.md#autoheight)
- [lockRatio](Rect.md#lockratio)
- [autoBox](Rect.md#autobox)
- [widthRange](Rect.md#widthrange)
- [heightRange](Rect.md#heightrange)
- [draggable](Rect.md#draggable)
- [dragBounds](Rect.md#dragbounds)
- [editable](Rect.md#editable)
- [hittable](Rect.md#hittable)
- [hitFill](Rect.md#hitfill)
- [hitStroke](Rect.md#hitstroke)
- [hitBox](Rect.md#hitbox)
- [hitChildren](Rect.md#hitchildren)
- [hitSelf](Rect.md#hitself)
- [hitRadius](Rect.md#hitradius)
- [cursor](Rect.md#cursor)
- [fill](Rect.md#fill)
- [stroke](Rect.md#stroke)
- [strokeAlign](Rect.md#strokealign)
- [strokeWidth](Rect.md#strokewidth)
- [strokeWidthFixed](Rect.md#strokewidthfixed)
- [strokeCap](Rect.md#strokecap)
- [strokeJoin](Rect.md#strokejoin)
- [dashPattern](Rect.md#dashpattern)
- [dashOffset](Rect.md#dashoffset)
- [miterLimit](Rect.md#miterlimit)
- [startArrow](Rect.md#startarrow)
- [endArrow](Rect.md#endarrow)
- [cornerRadius](Rect.md#cornerradius)
- [cornerSmoothing](Rect.md#cornersmoothing)
- [shadow](Rect.md#shadow)
- [innerShadow](Rect.md#innershadow)
- [blur](Rect.md#blur)
- [backgroundBlur](Rect.md#backgroundblur)
- [grayscale](Rect.md#grayscale)
- [filter](Rect.md#filter)
- [animation](Rect.md#animation)
- [animationOut](Rect.md#animationout)
- [transition](Rect.md#transition)
- [transitionOut](Rect.md#transitionout)
- [motionPath](Rect.md#motionpath)
- [motionPrecision](Rect.md#motionprecision)
- [motion](Rect.md#motion)
- [motionRotation](Rect.md#motionrotation)
- [states](Rect.md#states)
- [state](Rect.md#state)
- [selected](Rect.md#selected)
- [disabled](Rect.md#disabled)
- [normalStyle](Rect.md#normalstyle)
- [hoverStyle](Rect.md#hoverstyle)
- [pressStyle](Rect.md#pressstyle)
- [focusStyle](Rect.md#focusstyle)
- [selectedStyle](Rect.md#selectedstyle)
- [disabledStyle](Rect.md#disabledstyle)
- [placeholderStyle](Rect.md#placeholderstyle)
- [button](Rect.md#button)
- [data](Rect.md#data)
- [\_\_animate](Rect.md#__animate)
- [editConfig](Rect.md#editconfig)
- [editOuter](Rect.md#editouter)
- [editInner](Rect.md#editinner)

### Accessors

- [tag](Rect.md#tag)
- [innerName](Rect.md#innername)
- [\_\_DataProcessor](Rect.md#__dataprocessor)
- [\_\_LayoutProcessor](Rect.md#__layoutprocessor)
- [leaferIsCreated](Rect.md#leaferiscreated)
- [leaferIsReady](Rect.md#leaferisready)
- [isLeafer](Rect.md#isleafer)
- [isBranch](Rect.md#isbranch)
- [isBranchLeaf](Rect.md#isbranchleaf)
- [\_\_localMatrix](Rect.md#__localmatrix)
- [\_\_localBoxBounds](Rect.md#__localboxbounds)
- [worldTransform](Rect.md#worldtransform)
- [localTransform](Rect.md#localtransform)
- [boxBounds](Rect.md#boxbounds)
- [renderBounds](Rect.md#renderbounds)
- [worldBoxBounds](Rect.md#worldboxbounds)
- [worldStrokeBounds](Rect.md#worldstrokebounds)
- [worldRenderBounds](Rect.md#worldrenderbounds)
- [worldOpacity](Rect.md#worldopacity)
- [\_\_worldFlipped](Rect.md#__worldflipped)
- [\_\_onlyHitMask](Rect.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Rect.md#__ignorehitworld)
- [\_\_inLazyBounds](Rect.md#__inlazybounds)
- [pathInputed](Rect.md#pathinputed)
- [event](Rect.md#event)
- [\_\_tag](Rect.md#__tag)
- [app](Rect.md#app)
- [isFrame](Rect.md#isframe)
- [scale](Rect.md#scale)
- [pen](Rect.md#pen)

### Methods

- [resetCustom](Rect.md#resetcustom)
- [waitParent](Rect.md#waitparent)
- [waitLeafer](Rect.md#waitleafer)
- [nextRender](Rect.md#nextrender)
- [removeNextRender](Rect.md#removenextrender)
- [\_\_bindLeafer](Rect.md#__bindleafer)
- [setAttr](Rect.md#setattr)
- [getAttr](Rect.md#getattr)
- [getComputedAttr](Rect.md#getcomputedattr)
- [toJSON](Rect.md#tojson)
- [toString](Rect.md#tostring)
- [toSVG](Rect.md#tosvg)
- [\_\_SVG](Rect.md#__svg)
- [toHTML](Rect.md#tohtml)
- [\_\_setAttr](Rect.md#__setattr)
- [\_\_getAttr](Rect.md#__getattr)
- [setProxyAttr](Rect.md#setproxyattr)
- [getProxyAttr](Rect.md#getproxyattr)
- [focus](Rect.md#focus)
- [updateState](Rect.md#updatestate)
- [updateLayout](Rect.md#updatelayout)
- [forceUpdate](Rect.md#forceupdate)
- [forceRender](Rect.md#forcerender)
- [\_\_extraUpdate](Rect.md#__extraupdate)
- [\_\_updateWorldMatrix](Rect.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Rect.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Rect.md#__updateworldbounds)
- [\_\_updateLocalBounds](Rect.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Rect.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Rect.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Rect.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Rect.md#__updateboxbounds)
- [\_\_updateContentBounds](Rect.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Rect.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Rect.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Rect.md#__updateautolayout)
- [\_\_updateFlowLayout](Rect.md#__updateflowlayout)
- [\_\_updateNaturalSize](Rect.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Rect.md#__updatestrokespread)
- [\_\_updateRenderSpread](Rect.md#__updaterenderspread)
- [\_\_updateEraser](Rect.md#__updateeraser)
- [\_\_renderEraser](Rect.md#__rendereraser)
- [\_\_updateMask](Rect.md#__updatemask)
- [\_\_renderMask](Rect.md#__rendermask)
- [\_\_getNowWorld](Rect.md#__getnowworld)
- [getTransform](Rect.md#gettransform)
- [getBounds](Rect.md#getbounds)
- [getLayoutBounds](Rect.md#getlayoutbounds)
- [getLayoutPoints](Rect.md#getlayoutpoints)
- [getWorldBounds](Rect.md#getworldbounds)
- [worldToLocal](Rect.md#worldtolocal)
- [localToWorld](Rect.md#localtoworld)
- [worldToInner](Rect.md#worldtoinner)
- [innerToWorld](Rect.md#innertoworld)
- [getBoxPoint](Rect.md#getboxpoint)
- [getBoxPointByInner](Rect.md#getboxpointbyinner)
- [getInnerPoint](Rect.md#getinnerpoint)
- [getInnerPointByBox](Rect.md#getinnerpointbybox)
- [getInnerPointByLocal](Rect.md#getinnerpointbylocal)
- [getLocalPoint](Rect.md#getlocalpoint)
- [getLocalPointByInner](Rect.md#getlocalpointbyinner)
- [getPagePoint](Rect.md#getpagepoint)
- [getWorldPoint](Rect.md#getworldpoint)
- [getWorldPointByBox](Rect.md#getworldpointbybox)
- [getWorldPointByLocal](Rect.md#getworldpointbylocal)
- [getWorldPointByPage](Rect.md#getworldpointbypage)
- [setTransform](Rect.md#settransform)
- [transform](Rect.md#transform)
- [move](Rect.md#move)
- [moveInner](Rect.md#moveinner)
- [scaleOf](Rect.md#scaleof)
- [rotateOf](Rect.md#rotateof)
- [skewOf](Rect.md#skewof)
- [transformWorld](Rect.md#transformworld)
- [moveWorld](Rect.md#moveworld)
- [scaleOfWorld](Rect.md#scaleofworld)
- [rotateOfWorld](Rect.md#rotateofworld)
- [skewOfWorld](Rect.md#skewofworld)
- [flip](Rect.md#flip)
- [scaleResize](Rect.md#scaleresize)
- [\_\_scaleResize](Rect.md#__scaleresize)
- [resizeWidth](Rect.md#resizewidth)
- [resizeHeight](Rect.md#resizeheight)
- [\_\_hitWorld](Rect.md#__hitworld)
- [\_\_hit](Rect.md#__hit)
- [\_\_hitFill](Rect.md#__hitfill)
- [\_\_hitStroke](Rect.md#__hitstroke)
- [\_\_hitPixel](Rect.md#__hitpixel)
- [\_\_drawHitPath](Rect.md#__drawhitpath)
- [\_\_updateHitCanvas](Rect.md#__updatehitcanvas)
- [\_\_render](Rect.md#__render)
- [\_\_drawFast](Rect.md#__drawfast)
- [\_\_draw](Rect.md#__draw)
- [\_\_clip](Rect.md#__clip)
- [\_\_renderShape](Rect.md#__rendershape)
- [\_\_updateWorldOpacity](Rect.md#__updateworldopacity)
- [\_\_updateChange](Rect.md#__updatechange)
- [\_\_updatePath](Rect.md#__updatepath)
- [getMotionPathData](Rect.md#getmotionpathdata)
- [getMotionPoint](Rect.md#getmotionpoint)
- [getMotionTotal](Rect.md#getmotiontotal)
- [\_\_updateMotionPath](Rect.md#__updatemotionpath)
- [\_\_runAnimation](Rect.md#__runanimation)
- [\_\_updateSortChildren](Rect.md#__updatesortchildren)
- [add](Rect.md#add)
- [remove](Rect.md#remove)
- [dropTo](Rect.md#dropto)
- [on](Rect.md#on)
- [off](Rect.md#off)
- [on\_](Rect.md#on_)
- [off\_](Rect.md#off_)
- [once](Rect.md#once)
- [emit](Rect.md#emit)
- [emitEvent](Rect.md#emitevent)
- [hasEvent](Rect.md#hasevent)
- [changeAttr](Rect.md#changeattr)
- [addAttr](Rect.md#addattr)
- [\_\_emitLifeEvent](Rect.md#__emitlifeevent)
- [reset](Rect.md#reset)
- [set](Rect.md#set)
- [get](Rect.md#get)
- [createProxyData](Rect.md#createproxydata)
- [find](Rect.md#find)
- [findTag](Rect.md#findtag)
- [findOne](Rect.md#findone)
- [findId](Rect.md#findid)
- [getPath](Rect.md#getpath)
- [getPathString](Rect.md#getpathstring)
- [load](Rect.md#load)
- [\_\_onUpdateSize](Rect.md#__onupdatesize)
- [\_\_updateRenderPath](Rect.md#__updaterenderpath)
- [\_\_drawRenderPath](Rect.md#__drawrenderpath)
- [\_\_drawPath](Rect.md#__drawpath)
- [\_\_drawPathByData](Rect.md#__drawpathbydata)
- [\_\_drawPathByBox](Rect.md#__drawpathbybox)
- [animate](Rect.md#animate)
- [killAnimate](Rect.md#killanimate)
- [export](Rect.md#export)
- [syncExport](Rect.md#syncexport)
- [clone](Rect.md#clone)
- [one](Rect.md#one)
- [registerUI](Rect.md#registerui)
- [registerData](Rect.md#registerdata)
- [setEditConfig](Rect.md#seteditconfig)
- [setEditOuter](Rect.md#seteditouter)
- [setEditInner](Rect.md#seteditinner)
- [destroy](Rect.md#destroy)

## Constructors

### constructor

• **new Rect**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IRectInputData`](../interfaces/IRectInputData.md) |

#### Overrides

[UI](UI.md).[constructor](UI.md#constructor)

#### Defined in

[ui/packages/display/src/Rect.ts:20](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/Rect.ts#L20)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[innerId](../interfaces/IRect.md#innerid)

#### Inherited from

[UI](UI.md).[innerId](UI.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[syncEventer](../interfaces/IRect.md#synceventer)

#### Inherited from

[UI](UI.md).[syncEventer](UI.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[lockNormalStyle](../interfaces/IRect.md#locknormalstyle)

#### Inherited from

[UI](UI.md).[lockNormalStyle](UI.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__layout](../interfaces/IRect.md#__layout)

#### Inherited from

[UI](UI.md).[__layout](UI.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__world](../interfaces/IRect.md#__world)

#### Inherited from

[UI](UI.md).[__world](UI.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__local](../interfaces/IRect.md#__local)

#### Inherited from

[UI](UI.md).[__local](UI.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__nowWorld](../interfaces/IRect.md#__nowworld)

#### Inherited from

[UI](UI.md).[__nowWorld](UI.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__cameraWorld](../interfaces/IRect.md#__cameraworld)

#### Inherited from

[UI](UI.md).[__cameraWorld](UI.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[__worldOpacity](../interfaces/IRect.md#__worldopacity)

#### Inherited from

[UI](UI.md).[__worldOpacity](UI.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[__level](../interfaces/IRect.md#__level)

#### Inherited from

[UI](UI.md).[__level](UI.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[__tempNumber](../interfaces/IRect.md#__tempnumber)

#### Inherited from

[UI](UI.md).[__tempNumber](UI.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__hasAutoLayout](../interfaces/IRect.md#__hasautolayout)

#### Inherited from

[UI](UI.md).[__hasAutoLayout](UI.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__hasMask](../interfaces/IRect.md#__hasmask)

#### Inherited from

[UI](UI.md).[__hasMask](UI.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__hasEraser](../interfaces/IRect.md#__haseraser)

#### Inherited from

[UI](UI.md).[__hasEraser](UI.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__hitCanvas](../interfaces/IRect.md#__hitcanvas)

#### Inherited from

[UI](UI.md).[__hitCanvas](UI.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__captureMap](../interfaces/IRect.md#__capturemap)

#### Inherited from

[UI](UI.md).[__captureMap](UI.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__bubbleMap](../interfaces/IRect.md#__bubblemap)

#### Inherited from

[UI](UI.md).[__bubbleMap](UI.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L97)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[noBounds](../interfaces/IRect.md#nobounds)

#### Inherited from

[UI](UI.md).[noBounds](UI.md#nobounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L103)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[destroyed](../interfaces/IRect.md#destroyed)

#### Inherited from

[UI](UI.md).[destroyed](UI.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IRectData`](../interfaces/IRectData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__](../interfaces/IRect.md#__)

#### Overrides

[UI](UI.md).[__](UI.md#__)

#### Defined in

[ui/packages/display/src/Rect.ts:18](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/Rect.ts#L18)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[proxyData](../interfaces/IRect.md#proxydata)

#### Inherited from

[UI](UI.md).[proxyData](UI.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__proxyData](../interfaces/IRect.md#__proxydata)

#### Inherited from

[UI](UI.md).[__proxyData](UI.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[leafer](../interfaces/IRect.md#leafer)

#### Inherited from

[UI](UI.md).[leafer](UI.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[parent](../interfaces/IRect.md#parent)

#### Inherited from

[UI](UI.md).[parent](UI.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[zoomLayer](../interfaces/IRect.md#zoomlayer)

#### Inherited from

[UI](UI.md).[zoomLayer](UI.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[children](../interfaces/IRect.md#children)

#### Inherited from

[UI](UI.md).[children](UI.md#children)

#### Defined in

[ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[id](../interfaces/IRect.md#id)

#### Inherited from

[UI](UI.md).[id](UI.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[name](../interfaces/IRect.md#name)

#### Inherited from

[UI](UI.md).[name](UI.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[className](../interfaces/IRect.md#classname)

#### Inherited from

[UI](UI.md).[className](UI.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IRect](../interfaces/IRect.md).[blendMode](../interfaces/IRect.md#blendmode)

#### Inherited from

[UI](UI.md).[blendMode](UI.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[opacity](../interfaces/IRect.md#opacity)

#### Inherited from

[UI](UI.md).[opacity](UI.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IRect](../interfaces/IRect.md).[visible](../interfaces/IRect.md#visible)

#### Inherited from

[UI](UI.md).[visible](UI.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[locked](../interfaces/IRect.md#locked)

#### Inherited from

[UI](UI.md).[locked](UI.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L61)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[zIndex](../interfaces/IRect.md#zindex)

#### Inherited from

[UI](UI.md).[zIndex](UI.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L65)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IRect](../interfaces/IRect.md).[mask](../interfaces/IRect.md#mask)

#### Inherited from

[UI](UI.md).[mask](UI.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:69](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L69)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IRect](../interfaces/IRect.md).[eraser](../interfaces/IRect.md#eraser)

#### Inherited from

[UI](UI.md).[eraser](UI.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L72)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[x](../interfaces/IRect.md#x)

#### Inherited from

[UI](UI.md).[x](UI.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:77](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L77)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[y](../interfaces/IRect.md#y)

#### Inherited from

[UI](UI.md).[y](UI.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L80)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[width](../interfaces/IRect.md#width)

#### Inherited from

[UI](UI.md).[width](UI.md#width)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L84)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[height](../interfaces/IRect.md#height)

#### Inherited from

[UI](UI.md).[height](UI.md#height)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[scaleX](../interfaces/IRect.md#scalex)

#### Inherited from

[UI](UI.md).[scaleX](UI.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L91)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[scaleY](../interfaces/IRect.md#scaley)

#### Inherited from

[UI](UI.md).[scaleY](UI.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:94](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L94)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[rotation](../interfaces/IRect.md#rotation)

#### Inherited from

[UI](UI.md).[rotation](UI.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L98)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[skewX](../interfaces/IRect.md#skewx)

#### Inherited from

[UI](UI.md).[skewX](UI.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L102)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[skewY](../interfaces/IRect.md#skewy)

#### Inherited from

[UI](UI.md).[skewY](UI.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L105)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[offsetX](../interfaces/IRect.md#offsetx)

#### Inherited from

[UI](UI.md).[offsetX](UI.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:110](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L110)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[offsetY](../interfaces/IRect.md#offsety)

#### Inherited from

[UI](UI.md).[offsetY](UI.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L113)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[scrollX](../interfaces/IRect.md#scrollx)

#### Inherited from

[UI](UI.md).[scrollX](UI.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L117)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[scrollY](../interfaces/IRect.md#scrolly)

#### Inherited from

[UI](UI.md).[scrollY](UI.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L120)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IRect](../interfaces/IRect.md).[origin](../interfaces/IRect.md#origin)

#### Inherited from

[UI](UI.md).[origin](UI.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:125](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L125)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IRect](../interfaces/IRect.md).[around](../interfaces/IRect.md#around)

#### Inherited from

[UI](UI.md).[around](UI.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L128)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[lazy](../interfaces/IRect.md#lazy)

#### Inherited from

[UI](UI.md).[lazy](UI.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:133](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L133)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[pixelRatio](../interfaces/IRect.md#pixelratio)

#### Inherited from

[UI](UI.md).[pixelRatio](UI.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:136](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L136)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[path](../interfaces/IRect.md#path)

#### Inherited from

[UI](UI.md).[path](UI.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:141](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L141)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IRect](../interfaces/IRect.md).[windingRule](../interfaces/IRect.md#windingrule)

#### Inherited from

[UI](UI.md).[windingRule](UI.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L144)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[closed](../interfaces/IRect.md#closed)

#### Inherited from

[UI](UI.md).[closed](UI.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L147)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IRect](../interfaces/IRect.md).[flow](../interfaces/IRect.md#flow)

#### Inherited from

[UI](UI.md).[flow](UI.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L151)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IRect](../interfaces/IRect.md).[padding](../interfaces/IRect.md#padding)

#### Inherited from

[UI](UI.md).[padding](UI.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L154)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[gap](../interfaces/IRect.md#gap)

#### Inherited from

[UI](UI.md).[gap](UI.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:156](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L156)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IRect](../interfaces/IRect.md).[flowAlign](../interfaces/IRect.md#flowalign)

#### Inherited from

[UI](UI.md).[flowAlign](UI.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L158)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IRect](../interfaces/IRect.md).[flowWrap](../interfaces/IRect.md#flowwrap)

#### Inherited from

[UI](UI.md).[flowWrap](UI.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:160](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L160)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IRect](../interfaces/IRect.md).[itemBox](../interfaces/IRect.md#itembox)

#### Inherited from

[UI](UI.md).[itemBox](UI.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L163)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[inFlow](../interfaces/IRect.md#inflow)

#### Inherited from

[UI](UI.md).[inFlow](UI.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L165)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IRect](../interfaces/IRect.md).[autoWidth](../interfaces/IRect.md#autowidth)

#### Inherited from

[UI](UI.md).[autoWidth](UI.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:168](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L168)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IRect](../interfaces/IRect.md).[autoHeight](../interfaces/IRect.md#autoheight)

#### Inherited from

[UI](UI.md).[autoHeight](UI.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L170)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[lockRatio](../interfaces/IRect.md#lockratio)

#### Inherited from

[UI](UI.md).[lockRatio](UI.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L173)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[autoBox](../interfaces/IRect.md#autobox)

#### Inherited from

[UI](UI.md).[autoBox](UI.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L175)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[widthRange](../interfaces/IRect.md#widthrange)

#### Inherited from

[UI](UI.md).[widthRange](UI.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L178)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[heightRange](../interfaces/IRect.md#heightrange)

#### Inherited from

[UI](UI.md).[heightRange](UI.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L181)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IRect](../interfaces/IRect.md).[draggable](../interfaces/IRect.md#draggable)

#### Inherited from

[UI](UI.md).[draggable](UI.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L186)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[dragBounds](../interfaces/IRect.md#dragbounds)

#### Inherited from

[UI](UI.md).[dragBounds](UI.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L189)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[editable](../interfaces/IRect.md#editable)

#### Inherited from

[UI](UI.md).[editable](UI.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L193)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[hittable](../interfaces/IRect.md#hittable)

#### Inherited from

[UI](UI.md).[hittable](UI.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:198](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L198)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IRect](../interfaces/IRect.md).[hitFill](../interfaces/IRect.md#hitfill)

#### Inherited from

[UI](UI.md).[hitFill](UI.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L201)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IRect](../interfaces/IRect.md).[hitStroke](../interfaces/IRect.md#hitstroke)

#### Inherited from

[UI](UI.md).[hitStroke](UI.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L204)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[hitBox](../interfaces/IRect.md#hitbox)

#### Inherited from

[UI](UI.md).[hitBox](UI.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L207)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[hitChildren](../interfaces/IRect.md#hitchildren)

#### Inherited from

[UI](UI.md).[hitChildren](UI.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:210](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L210)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[hitSelf](../interfaces/IRect.md#hitself)

#### Inherited from

[UI](UI.md).[hitSelf](UI.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:213](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L213)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[hitRadius](../interfaces/IRect.md#hitradius)

#### Inherited from

[UI](UI.md).[hitRadius](UI.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L216)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[cursor](../interfaces/IRect.md#cursor)

#### Inherited from

[UI](UI.md).[cursor](UI.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L219)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IRect](../interfaces/IRect.md).[fill](../interfaces/IRect.md#fill)

#### Inherited from

[UI](UI.md).[fill](UI.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L227)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IRect](../interfaces/IRect.md).[stroke](../interfaces/IRect.md#stroke)

#### Inherited from

[UI](UI.md).[stroke](UI.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:232](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L232)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IRect](../interfaces/IRect.md).[strokeAlign](../interfaces/IRect.md#strokealign)

#### Inherited from

[UI](UI.md).[strokeAlign](UI.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:235](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L235)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IRect](../interfaces/IRect.md).[strokeWidth](../interfaces/IRect.md#strokewidth)

#### Inherited from

[UI](UI.md).[strokeWidth](UI.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:238](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L238)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[strokeWidthFixed](../interfaces/IRect.md#strokewidthfixed)

#### Inherited from

[UI](UI.md).[strokeWidthFixed](UI.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L241)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IRect](../interfaces/IRect.md).[strokeCap](../interfaces/IRect.md#strokecap)

#### Inherited from

[UI](UI.md).[strokeCap](UI.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:244](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L244)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IRect](../interfaces/IRect.md).[strokeJoin](../interfaces/IRect.md#strokejoin)

#### Inherited from

[UI](UI.md).[strokeJoin](UI.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:247](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L247)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IRect](../interfaces/IRect.md).[dashPattern](../interfaces/IRect.md#dashpattern)

#### Inherited from

[UI](UI.md).[dashPattern](UI.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L250)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[dashOffset](../interfaces/IRect.md#dashoffset)

#### Inherited from

[UI](UI.md).[dashOffset](UI.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:253](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L253)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[miterLimit](../interfaces/IRect.md#miterlimit)

#### Inherited from

[UI](UI.md).[miterLimit](UI.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L256)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IRect](../interfaces/IRect.md).[startArrow](../interfaces/IRect.md#startarrow)

#### Inherited from

[UI](UI.md).[startArrow](UI.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L261)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IRect](../interfaces/IRect.md).[endArrow](../interfaces/IRect.md#endarrow)

#### Inherited from

[UI](UI.md).[endArrow](UI.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L263)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IRect](../interfaces/IRect.md).[cornerRadius](../interfaces/IRect.md#cornerradius)

#### Inherited from

[UI](UI.md).[cornerRadius](UI.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L268)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[cornerSmoothing](../interfaces/IRect.md#cornersmoothing)

#### Inherited from

[UI](UI.md).[cornerSmoothing](UI.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L271)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[shadow](../interfaces/IRect.md#shadow)

#### Inherited from

[UI](UI.md).[shadow](UI.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:276](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L276)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[innerShadow](../interfaces/IRect.md#innershadow)

#### Inherited from

[UI](UI.md).[innerShadow](UI.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L279)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[blur](../interfaces/IRect.md#blur)

#### Inherited from

[UI](UI.md).[blur](UI.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L282)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[backgroundBlur](../interfaces/IRect.md#backgroundblur)

#### Inherited from

[UI](UI.md).[backgroundBlur](UI.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L285)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[grayscale](../interfaces/IRect.md#grayscale)

#### Inherited from

[UI](UI.md).[grayscale](UI.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:288](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L288)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[filter](../interfaces/IRect.md#filter)

#### Inherited from

[UI](UI.md).[filter](UI.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:291](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L291)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[animation](../interfaces/IRect.md#animation)

#### Inherited from

[UI](UI.md).[animation](UI.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L296)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IRect](../interfaces/IRect.md).[animationOut](../interfaces/IRect.md#animationout)

#### Inherited from

[UI](UI.md).[animationOut](UI.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L298)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IRect](../interfaces/IRect.md).[transition](../interfaces/IRect.md#transition)

#### Inherited from

[UI](UI.md).[transition](UI.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:301](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L301)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IRect](../interfaces/IRect.md).[transitionOut](../interfaces/IRect.md#transitionout)

#### Inherited from

[UI](UI.md).[transitionOut](UI.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L303)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[motionPath](../interfaces/IRect.md#motionpath)

#### Inherited from

[UI](UI.md).[motionPath](UI.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L308)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IRect](../interfaces/IRect.md).[motionPrecision](../interfaces/IRect.md#motionprecision)

#### Inherited from

[UI](UI.md).[motionPrecision](UI.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L310)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[motion](../interfaces/IRect.md#motion)

#### Inherited from

[UI](UI.md).[motion](UI.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:313](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L313)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[motionRotation](../interfaces/IRect.md#motionrotation)

#### Inherited from

[UI](UI.md).[motionRotation](UI.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L315)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[states](../interfaces/IRect.md#states)

#### Inherited from

[UI](UI.md).[states](UI.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L320)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[state](../interfaces/IRect.md#state)

#### Inherited from

[UI](UI.md).[state](UI.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L322)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[selected](../interfaces/IRect.md#selected)

#### Inherited from

[UI](UI.md).[selected](UI.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:325](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L325)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[disabled](../interfaces/IRect.md#disabled)

#### Inherited from

[UI](UI.md).[disabled](UI.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L327)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[normalStyle](../interfaces/IRect.md#normalstyle)

#### Inherited from

[UI](UI.md).[normalStyle](UI.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:330](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L330)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[hoverStyle](../interfaces/IRect.md#hoverstyle)

#### Inherited from

[UI](UI.md).[hoverStyle](UI.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L332)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[pressStyle](../interfaces/IRect.md#pressstyle)

#### Inherited from

[UI](UI.md).[pressStyle](UI.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L334)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[focusStyle](../interfaces/IRect.md#focusstyle)

#### Inherited from

[UI](UI.md).[focusStyle](UI.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L336)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[selectedStyle](../interfaces/IRect.md#selectedstyle)

#### Inherited from

[UI](UI.md).[selectedStyle](UI.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L338)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[disabledStyle](../interfaces/IRect.md#disabledstyle)

#### Inherited from

[UI](UI.md).[disabledStyle](UI.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:340](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L340)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[placeholderStyle](../interfaces/IRect.md#placeholderstyle)

#### Inherited from

[UI](UI.md).[placeholderStyle](UI.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:342](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L342)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[button](../interfaces/IRect.md#button)

#### Inherited from

[UI](UI.md).[button](UI.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L345)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[data](../interfaces/IRect.md#data)

#### Inherited from

[UI](UI.md).[data](UI.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L350)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__animate](../interfaces/IRect.md#__animate)

#### Inherited from

[UI](UI.md).[__animate](UI.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L356)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[editConfig](../interfaces/IRect.md#editconfig)

#### Inherited from

[UI](UI.md).[editConfig](UI.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L368)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[editOuter](../interfaces/IRect.md#editouter)

#### Inherited from

[UI](UI.md).[editOuter](UI.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L370)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IRect](../interfaces/IRect.md).[editInner](../interfaces/IRect.md#editinner)

#### Inherited from

[UI](UI.md).[editInner](UI.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L372)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IRect](../interfaces/IRect.md).[tag](../interfaces/IRect.md#tag)

#### Inherited from

UI.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[tag](../interfaces/IRect.md#tag)

#### Inherited from

UI.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IRect](../interfaces/IRect.md).[innerName](../interfaces/IRect.md#innername)

#### Inherited from

UI.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__DataProcessor](../interfaces/IRect.md#__dataprocessor)

#### Inherited from

UI.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__LayoutProcessor](../interfaces/IRect.md#__layoutprocessor)

#### Inherited from

UI.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[leaferIsCreated](../interfaces/IRect.md#leaferiscreated)

#### Inherited from

UI.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[leaferIsReady](../interfaces/IRect.md#leaferisready)

#### Inherited from

UI.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[isLeafer](../interfaces/IRect.md#isleafer)

#### Inherited from

UI.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L42)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[isBranch](../interfaces/IRect.md#isbranch)

#### Inherited from

UI.isBranch

#### Defined in

[leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L43)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[isBranchLeaf](../interfaces/IRect.md#isbranchleaf)

#### Inherited from

UI.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__localMatrix](../interfaces/IRect.md#__localmatrix)

#### Inherited from

UI.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[__localBoxBounds](../interfaces/IRect.md#__localboxbounds)

#### Inherited from

UI.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[worldTransform](../interfaces/IRect.md#worldtransform)

#### Inherited from

UI.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[localTransform](../interfaces/IRect.md#localtransform)

#### Inherited from

UI.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[boxBounds](../interfaces/IRect.md#boxbounds)

#### Inherited from

UI.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[renderBounds](../interfaces/IRect.md#renderbounds)

#### Inherited from

UI.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[worldBoxBounds](../interfaces/IRect.md#worldboxbounds)

#### Inherited from

UI.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[worldStrokeBounds](../interfaces/IRect.md#worldstrokebounds)

#### Inherited from

UI.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[worldRenderBounds](../interfaces/IRect.md#worldrenderbounds)

#### Inherited from

UI.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IRect](../interfaces/IRect.md).[worldOpacity](../interfaces/IRect.md#worldopacity)

#### Inherited from

UI.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__worldFlipped](../interfaces/IRect.md#__worldflipped)

#### Inherited from

UI.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__onlyHitMask](../interfaces/IRect.md#__onlyhitmask)

#### Inherited from

UI.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__ignoreHitWorld](../interfaces/IRect.md#__ignorehitworld)

#### Inherited from

UI.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[__inLazyBounds](../interfaces/IRect.md#__inlazybounds)

#### Inherited from

UI.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[pathInputed](../interfaces/IRect.md#pathinputed)

#### Inherited from

UI.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L91)

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

[IRect](../interfaces/IRect.md).[event](../interfaces/IRect.md#event)

#### Inherited from

UI.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IRect](../interfaces/IRect.md).[__tag](../interfaces/IRect.md#__tag)

#### Overrides

UI.\_\_tag

#### Defined in

[ui/packages/display/src/Rect.ts:15](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/Rect.ts#L15)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[app](../interfaces/IRect.md#app)

#### Inherited from

UI.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IRect](../interfaces/IRect.md).[isFrame](../interfaces/IRect.md#isframe)

#### Inherited from

UI.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[scale](../interfaces/IRect.md#scale)

#### Inherited from

UI.scale

#### Defined in

[ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L354)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[scale](../interfaces/IRect.md#scale)

#### Inherited from

UI.scale

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L353)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[pen](../interfaces/IRect.md#pen)

#### Inherited from

UI.pen

#### Defined in

[ui/packages/display/src/UI.ts:358](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L358)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[resetCustom](../interfaces/IRect.md#resetcustom)

#### Inherited from

[UI](UI.md).[resetCustom](UI.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:133](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L133)

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

[IRect](../interfaces/IRect.md).[waitParent](../interfaces/IRect.md#waitparent)

#### Inherited from

[UI](UI.md).[waitParent](UI.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:139](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L139)

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

[IRect](../interfaces/IRect.md).[waitLeafer](../interfaces/IRect.md#waitleafer)

#### Inherited from

[UI](UI.md).[waitLeafer](UI.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:144](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L144)

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

[IRect](../interfaces/IRect.md).[nextRender](../interfaces/IRect.md#nextrender)

#### Inherited from

[UI](UI.md).[nextRender](UI.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:149](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L149)

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

[IRect](../interfaces/IRect.md).[removeNextRender](../interfaces/IRect.md#removenextrender)

#### Inherited from

[UI](UI.md).[removeNextRender](UI.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L153)

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

[IRect](../interfaces/IRect.md).[__bindLeafer](../interfaces/IRect.md#__bindleafer)

#### Inherited from

[UI](UI.md).[__bindLeafer](UI.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L157)

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

[IRect](../interfaces/IRect.md).[setAttr](../interfaces/IRect.md#setattr)

#### Inherited from

[UI](UI.md).[setAttr](UI.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:186](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L186)

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

[IRect](../interfaces/IRect.md).[getAttr](../interfaces/IRect.md#getattr)

#### Inherited from

[UI](UI.md).[getAttr](UI.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:187](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L187)

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

[IRect](../interfaces/IRect.md).[getComputedAttr](../interfaces/IRect.md#getcomputedattr)

#### Inherited from

[UI](UI.md).[getComputedAttr](UI.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:189](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L189)

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

[IRect](../interfaces/IRect.md).[toJSON](../interfaces/IRect.md#tojson)

#### Inherited from

[UI](UI.md).[toJSON](UI.md#tojson)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L191)

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

[IRect](../interfaces/IRect.md).[toString](../interfaces/IRect.md#tostring)

#### Inherited from

[UI](UI.md).[toString](UI.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L196)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IRect](../interfaces/IRect.md).[toSVG](../interfaces/IRect.md#tosvg)

#### Inherited from

[UI](UI.md).[toSVG](UI.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L200)

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

[IRect](../interfaces/IRect.md).[__SVG](../interfaces/IRect.md#__svg)

#### Inherited from

[UI](UI.md).[__SVG](UI.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:202](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L202)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IRect](../interfaces/IRect.md).[toHTML](../interfaces/IRect.md#tohtml)

#### Inherited from

[UI](UI.md).[toHTML](UI.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L204)

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

[IRect](../interfaces/IRect.md).[__setAttr](../interfaces/IRect.md#__setattr)

#### Inherited from

[UI](UI.md).[__setAttr](UI.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L208)

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

[IRect](../interfaces/IRect.md).[__getAttr](../interfaces/IRect.md#__getattr)

#### Inherited from

[UI](UI.md).[__getAttr](UI.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L210)

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

[IRect](../interfaces/IRect.md).[setProxyAttr](../interfaces/IRect.md#setproxyattr)

#### Inherited from

[UI](UI.md).[setProxyAttr](UI.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L212)

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

[IRect](../interfaces/IRect.md).[getProxyAttr](../interfaces/IRect.md#getproxyattr)

#### Inherited from

[UI](UI.md).[getProxyAttr](UI.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L214)

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

[IRect](../interfaces/IRect.md).[focus](../interfaces/IRect.md#focus)

#### Inherited from

[UI](UI.md).[focus](UI.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:234](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L234)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[updateState](../interfaces/IRect.md#updatestate)

#### Inherited from

[UI](UI.md).[updateState](UI.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L236)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[updateLayout](../interfaces/IRect.md#updatelayout)

#### Inherited from

[UI](UI.md).[updateLayout](UI.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:241](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L241)

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

[IRect](../interfaces/IRect.md).[forceUpdate](../interfaces/IRect.md#forceupdate)

#### Inherited from

[UI](UI.md).[forceUpdate](UI.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L245)

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

[IRect](../interfaces/IRect.md).[forceRender](../interfaces/IRect.md#forcerender)

#### Inherited from

[UI](UI.md).[forceRender](UI.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L253)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__extraUpdate](../interfaces/IRect.md#__extraupdate)

#### Inherited from

[UI](UI.md).[__extraUpdate](UI.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L257)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateWorldMatrix](../interfaces/IRect.md#__updateworldmatrix)

#### Inherited from

[UI](UI.md).[__updateWorldMatrix](UI.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:263](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L263)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateLocalMatrix](../interfaces/IRect.md#__updatelocalmatrix)

#### Inherited from

[UI](UI.md).[__updateLocalMatrix](UI.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateWorldBounds](../interfaces/IRect.md#__updateworldbounds)

#### Inherited from

[UI](UI.md).[__updateWorldBounds](UI.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateLocalBounds](../interfaces/IRect.md#__updatelocalbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBounds](UI.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateLocalBoxBounds](../interfaces/IRect.md#__updatelocalboxbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBoxBounds](UI.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:276](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L276)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateLocalStrokeBounds](../interfaces/IRect.md#__updatelocalstrokebounds)

#### Inherited from

[UI](UI.md).[__updateLocalStrokeBounds](UI.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateLocalRenderBounds](../interfaces/IRect.md#__updatelocalrenderbounds)

#### Inherited from

[UI](UI.md).[__updateLocalRenderBounds](UI.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L280)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateBoxBounds](../interfaces/IRect.md#__updateboxbounds)

#### Inherited from

[UI](UI.md).[__updateBoxBounds](UI.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L284)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateContentBounds](../interfaces/IRect.md#__updatecontentbounds)

#### Inherited from

[UI](UI.md).[__updateContentBounds](UI.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L286)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateStrokeBounds](../interfaces/IRect.md#__updatestrokebounds)

#### Inherited from

[UI](UI.md).[__updateStrokeBounds](UI.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L288)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateRenderBounds](../interfaces/IRect.md#__updaterenderbounds)

#### Inherited from

[UI](UI.md).[__updateRenderBounds](UI.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L290)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateAutoLayout](../interfaces/IRect.md#__updateautolayout)

#### Inherited from

[UI](UI.md).[__updateAutoLayout](UI.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:293](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L293)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateFlowLayout](../interfaces/IRect.md#__updateflowlayout)

#### Inherited from

[UI](UI.md).[__updateFlowLayout](UI.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L295)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateNaturalSize](../interfaces/IRect.md#__updatenaturalsize)

#### Inherited from

[UI](UI.md).[__updateNaturalSize](UI.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L297)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateStrokeSpread](../interfaces/IRect.md#__updatestrokespread)

#### Inherited from

[UI](UI.md).[__updateStrokeSpread](UI.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L300)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateRenderSpread](../interfaces/IRect.md#__updaterenderspread)

#### Inherited from

[UI](UI.md).[__updateRenderSpread](UI.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L302)

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

[IRect](../interfaces/IRect.md).[__updateEraser](../interfaces/IRect.md#__updateeraser)

#### Inherited from

[UI](UI.md).[__updateEraser](UI.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L309)

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

[IRect](../interfaces/IRect.md).[__renderEraser](../interfaces/IRect.md#__rendereraser)

#### Inherited from

[UI](UI.md).[__renderEraser](UI.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:313](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L313)

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

[IRect](../interfaces/IRect.md).[__updateMask](../interfaces/IRect.md#__updatemask)

#### Inherited from

[UI](UI.md).[__updateMask](UI.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L321)

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

[IRect](../interfaces/IRect.md).[__renderMask](../interfaces/IRect.md#__rendermask)

#### Inherited from

[UI](UI.md).[__renderMask](UI.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:327](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L327)

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

[IRect](../interfaces/IRect.md).[__getNowWorld](../interfaces/IRect.md#__getnowworld)

#### Inherited from

[UI](UI.md).[__getNowWorld](UI.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L335)

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

[IRect](../interfaces/IRect.md).[getTransform](../interfaces/IRect.md#gettransform)

#### Inherited from

[UI](UI.md).[getTransform](UI.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L347)

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

[IRect](../interfaces/IRect.md).[getBounds](../interfaces/IRect.md#getbounds)

#### Inherited from

[UI](UI.md).[getBounds](UI.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L352)

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

[IRect](../interfaces/IRect.md).[getLayoutBounds](../interfaces/IRect.md#getlayoutbounds)

#### Inherited from

[UI](UI.md).[getLayoutBounds](UI.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L356)

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

[IRect](../interfaces/IRect.md).[getLayoutPoints](../interfaces/IRect.md#getlayoutpoints)

#### Inherited from

[UI](UI.md).[getLayoutPoints](UI.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:360](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L360)

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

[IRect](../interfaces/IRect.md).[getWorldBounds](../interfaces/IRect.md#getworldbounds)

#### Inherited from

[UI](UI.md).[getWorldBounds](UI.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L365)

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

[IRect](../interfaces/IRect.md).[worldToLocal](../interfaces/IRect.md#worldtolocal)

#### Inherited from

[UI](UI.md).[worldToLocal](UI.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L373)

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

[IRect](../interfaces/IRect.md).[localToWorld](../interfaces/IRect.md#localtoworld)

#### Inherited from

[UI](UI.md).[localToWorld](UI.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:381](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L381)

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

[IRect](../interfaces/IRect.md).[worldToInner](../interfaces/IRect.md#worldtoinner)

#### Inherited from

[UI](UI.md).[worldToInner](UI.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L389)

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

[IRect](../interfaces/IRect.md).[innerToWorld](../interfaces/IRect.md#innertoworld)

#### Inherited from

[UI](UI.md).[innerToWorld](UI.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L397)

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

[IRect](../interfaces/IRect.md).[getBoxPoint](../interfaces/IRect.md#getboxpoint)

#### Inherited from

[UI](UI.md).[getBoxPoint](UI.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:404](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L404)

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

[IRect](../interfaces/IRect.md).[getBoxPointByInner](../interfaces/IRect.md#getboxpointbyinner)

#### Inherited from

[UI](UI.md).[getBoxPointByInner](UI.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L408)

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

[IRect](../interfaces/IRect.md).[getInnerPoint](../interfaces/IRect.md#getinnerpoint)

#### Inherited from

[UI](UI.md).[getInnerPoint](UI.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:414](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L414)

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

[IRect](../interfaces/IRect.md).[getInnerPointByBox](../interfaces/IRect.md#getinnerpointbybox)

#### Inherited from

[UI](UI.md).[getInnerPointByBox](UI.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:420](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L420)

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

[IRect](../interfaces/IRect.md).[getInnerPointByLocal](../interfaces/IRect.md#getinnerpointbylocal)

#### Inherited from

[UI](UI.md).[getInnerPointByLocal](UI.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:426](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L426)

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

[IRect](../interfaces/IRect.md).[getLocalPoint](../interfaces/IRect.md#getlocalpoint)

#### Inherited from

[UI](UI.md).[getLocalPoint](UI.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L430)

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

[IRect](../interfaces/IRect.md).[getLocalPointByInner](../interfaces/IRect.md#getlocalpointbyinner)

#### Inherited from

[UI](UI.md).[getLocalPointByInner](UI.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:436](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L436)

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

[IRect](../interfaces/IRect.md).[getPagePoint](../interfaces/IRect.md#getpagepoint)

#### Inherited from

[UI](UI.md).[getPagePoint](UI.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L440)

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

[IRect](../interfaces/IRect.md).[getWorldPoint](../interfaces/IRect.md#getworldpoint)

#### Inherited from

[UI](UI.md).[getWorldPoint](UI.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L445)

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

[IRect](../interfaces/IRect.md).[getWorldPointByBox](../interfaces/IRect.md#getworldpointbybox)

#### Inherited from

[UI](UI.md).[getWorldPointByBox](UI.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:451](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L451)

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

[IRect](../interfaces/IRect.md).[getWorldPointByLocal](../interfaces/IRect.md#getworldpointbylocal)

#### Inherited from

[UI](UI.md).[getWorldPointByLocal](UI.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L455)

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

[IRect](../interfaces/IRect.md).[getWorldPointByPage](../interfaces/IRect.md#getworldpointbypage)

#### Inherited from

[UI](UI.md).[getWorldPointByPage](UI.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:461](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L461)

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

[IRect](../interfaces/IRect.md).[setTransform](../interfaces/IRect.md#settransform)

#### Inherited from

[UI](UI.md).[setTransform](UI.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L469)

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

[IRect](../interfaces/IRect.md).[transform](../interfaces/IRect.md#transform)

#### Inherited from

[UI](UI.md).[transform](UI.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:473](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L473)

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

[IRect](../interfaces/IRect.md).[move](../interfaces/IRect.md#move)

#### Inherited from

[UI](UI.md).[move](UI.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L477)

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

[IRect](../interfaces/IRect.md).[moveInner](../interfaces/IRect.md#moveinner)

#### Inherited from

[UI](UI.md).[moveInner](UI.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L482)

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

[IRect](../interfaces/IRect.md).[scaleOf](../interfaces/IRect.md#scaleof)

#### Inherited from

[UI](UI.md).[scaleOf](UI.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:486](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L486)

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

[IRect](../interfaces/IRect.md).[rotateOf](../interfaces/IRect.md#rotateof)

#### Inherited from

[UI](UI.md).[rotateOf](UI.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:490](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L490)

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

[IRect](../interfaces/IRect.md).[skewOf](../interfaces/IRect.md#skewof)

#### Inherited from

[UI](UI.md).[skewOf](UI.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:494](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L494)

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

[IRect](../interfaces/IRect.md).[transformWorld](../interfaces/IRect.md#transformworld)

#### Inherited from

[UI](UI.md).[transformWorld](UI.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L499)

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

[IRect](../interfaces/IRect.md).[moveWorld](../interfaces/IRect.md#moveworld)

#### Inherited from

[UI](UI.md).[moveWorld](UI.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L503)

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

[IRect](../interfaces/IRect.md).[scaleOfWorld](../interfaces/IRect.md#scaleofworld)

#### Inherited from

[UI](UI.md).[scaleOfWorld](UI.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:507](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L507)

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

[IRect](../interfaces/IRect.md).[rotateOfWorld](../interfaces/IRect.md#rotateofworld)

#### Inherited from

[UI](UI.md).[rotateOfWorld](UI.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:511](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L511)

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

[IRect](../interfaces/IRect.md).[skewOfWorld](../interfaces/IRect.md#skewofworld)

#### Inherited from

[UI](UI.md).[skewOfWorld](UI.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:515](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L515)

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

[IRect](../interfaces/IRect.md).[flip](../interfaces/IRect.md#flip)

#### Inherited from

[UI](UI.md).[flip](UI.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L519)

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

[IRect](../interfaces/IRect.md).[scaleResize](../interfaces/IRect.md#scaleresize)

#### Inherited from

[UI](UI.md).[scaleResize](UI.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L526)

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

[IRect](../interfaces/IRect.md).[__scaleResize](../interfaces/IRect.md#__scaleresize)

#### Inherited from

[UI](UI.md).[__scaleResize](UI.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L531)

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

[IRect](../interfaces/IRect.md).[resizeWidth](../interfaces/IRect.md#resizewidth)

#### Inherited from

[UI](UI.md).[resizeWidth](UI.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L534)

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

[IRect](../interfaces/IRect.md).[resizeHeight](../interfaces/IRect.md#resizeheight)

#### Inherited from

[UI](UI.md).[resizeHeight](UI.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:536](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L536)

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

[IRect](../interfaces/IRect.md).[__hitWorld](../interfaces/IRect.md#__hitworld)

#### Inherited from

[UI](UI.md).[__hitWorld](UI.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L541)

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

[IRect](../interfaces/IRect.md).[__hit](../interfaces/IRect.md#__hit)

#### Inherited from

[UI](UI.md).[__hit](UI.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L543)

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

[IRect](../interfaces/IRect.md).[__hitFill](../interfaces/IRect.md#__hitfill)

#### Inherited from

[UI](UI.md).[__hitFill](UI.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L545)

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

[IRect](../interfaces/IRect.md).[__hitStroke](../interfaces/IRect.md#__hitstroke)

#### Inherited from

[UI](UI.md).[__hitStroke](UI.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:547](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L547)

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

[IRect](../interfaces/IRect.md).[__hitPixel](../interfaces/IRect.md#__hitpixel)

#### Inherited from

[UI](UI.md).[__hitPixel](UI.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:549](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L549)

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

[IRect](../interfaces/IRect.md).[__drawHitPath](../interfaces/IRect.md#__drawhitpath)

#### Inherited from

[UI](UI.md).[__drawHitPath](UI.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L551)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateHitCanvas](../interfaces/IRect.md#__updatehitcanvas)

#### Inherited from

[UI](UI.md).[__updateHitCanvas](UI.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L553)

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

[IRect](../interfaces/IRect.md).[__render](../interfaces/IRect.md#__render)

#### Inherited from

[UI](UI.md).[__render](UI.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L560)

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

[IRect](../interfaces/IRect.md).[__drawFast](../interfaces/IRect.md#__drawfast)

#### Inherited from

[UI](UI.md).[__drawFast](UI.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L562)

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

[IRect](../interfaces/IRect.md).[__draw](../interfaces/IRect.md#__draw)

#### Inherited from

[UI](UI.md).[__draw](UI.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L564)

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

[IRect](../interfaces/IRect.md).[__clip](../interfaces/IRect.md#__clip)

#### Inherited from

[UI](UI.md).[__clip](UI.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L567)

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

[IRect](../interfaces/IRect.md).[__renderShape](../interfaces/IRect.md#__rendershape)

#### Inherited from

[UI](UI.md).[__renderShape](UI.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L569)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateWorldOpacity](../interfaces/IRect.md#__updateworldopacity)

#### Inherited from

[UI](UI.md).[__updateWorldOpacity](UI.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L572)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateChange](../interfaces/IRect.md#__updatechange)

#### Inherited from

[UI](UI.md).[__updateChange](UI.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L574)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updatePath](../interfaces/IRect.md#__updatepath)

#### Inherited from

[UI](UI.md).[__updatePath](UI.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:585](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L585)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[getMotionPathData](../interfaces/IRect.md#getmotionpathdata)

#### Inherited from

[UI](UI.md).[getMotionPathData](UI.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:594](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L594)

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

[IRect](../interfaces/IRect.md).[getMotionPoint](../interfaces/IRect.md#getmotionpoint)

#### Inherited from

[UI](UI.md).[getMotionPoint](UI.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L598)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IRect](../interfaces/IRect.md).[getMotionTotal](../interfaces/IRect.md#getmotiontotal)

#### Inherited from

[UI](UI.md).[getMotionTotal](UI.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L602)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateMotionPath](../interfaces/IRect.md#__updatemotionpath)

#### Inherited from

[UI](UI.md).[__updateMotionPath](UI.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L606)

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

[IRect](../interfaces/IRect.md).[__runAnimation](../interfaces/IRect.md#__runanimation)

#### Inherited from

[UI](UI.md).[__runAnimation](UI.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:612](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L612)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateSortChildren](../interfaces/IRect.md#__updatesortchildren)

#### Inherited from

[UI](UI.md).[__updateSortChildren](UI.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L617)

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

[IRect](../interfaces/IRect.md).[add](../interfaces/IRect.md#add)

#### Inherited from

[UI](UI.md).[add](UI.md#add)

#### Defined in

[leafer/packages/display/src/Leaf.ts:619](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L619)

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

[IRect](../interfaces/IRect.md).[remove](../interfaces/IRect.md#remove)

#### Inherited from

[UI](UI.md).[remove](UI.md#remove)

#### Defined in

[leafer/packages/display/src/Leaf.ts:621](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L621)

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

[IRect](../interfaces/IRect.md).[dropTo](../interfaces/IRect.md#dropto)

#### Inherited from

[UI](UI.md).[dropTo](UI.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L625)

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

[IRect](../interfaces/IRect.md).[on](../interfaces/IRect.md#on)

#### Inherited from

[UI](UI.md).[on](UI.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L634)

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

[IRect](../interfaces/IRect.md).[off](../interfaces/IRect.md#off)

#### Inherited from

[UI](UI.md).[off](UI.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L636)

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

[IRect](../interfaces/IRect.md).[on_](../interfaces/IRect.md#on_)

#### Inherited from

[UI](UI.md).[on_](UI.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L638)

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

[IRect](../interfaces/IRect.md).[off_](../interfaces/IRect.md#off_)

#### Inherited from

[UI](UI.md).[off_](UI.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L640)

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

[IRect](../interfaces/IRect.md).[once](../interfaces/IRect.md#once)

#### Inherited from

[UI](UI.md).[once](UI.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L642)

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

[IRect](../interfaces/IRect.md).[emit](../interfaces/IRect.md#emit)

#### Inherited from

[UI](UI.md).[emit](UI.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:644](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L644)

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

[IRect](../interfaces/IRect.md).[emitEvent](../interfaces/IRect.md#emitevent)

#### Inherited from

[UI](UI.md).[emitEvent](UI.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L646)

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

[IRect](../interfaces/IRect.md).[hasEvent](../interfaces/IRect.md#hasevent)

#### Inherited from

[UI](UI.md).[hasEvent](UI.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L648)

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

[UI](UI.md).[changeAttr](UI.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:652](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L652)

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

[UI](UI.md).[addAttr](UI.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L656)

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

[IRect](../interfaces/IRect.md).[__emitLifeEvent](../interfaces/IRect.md#__emitlifeevent)

#### Inherited from

[UI](UI.md).[__emitLifeEvent](UI.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/8d161c2/packages/display/src/Leaf.ts#L662)

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

[IRect](../interfaces/IRect.md).[reset](../interfaces/IRect.md#reset)

#### Inherited from

[UI](UI.md).[reset](UI.md#reset)

#### Defined in

[ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L383)

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

[IRect](../interfaces/IRect.md).[set](../interfaces/IRect.md#set)

#### Inherited from

[UI](UI.md).[set](UI.md#set)

#### Defined in

[ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L386)

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

[IRect](../interfaces/IRect.md).[get](../interfaces/IRect.md#get)

#### Inherited from

[UI](UI.md).[get](UI.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:398](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L398)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IRect](../interfaces/IRect.md).[createProxyData](../interfaces/IRect.md#createproxydata)

#### Inherited from

[UI](UI.md).[createProxyData](UI.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:402](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L402)

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

[IRect](../interfaces/IRect.md).[find](../interfaces/IRect.md#find)

#### Inherited from

[UI](UI.md).[find](UI.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:407](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L407)

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

[IRect](../interfaces/IRect.md).[findTag](../interfaces/IRect.md#findtag)

#### Inherited from

[UI](UI.md).[findTag](UI.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L409)

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

[IRect](../interfaces/IRect.md).[findOne](../interfaces/IRect.md#findone)

#### Inherited from

[UI](UI.md).[findOne](UI.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:411](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L411)

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

[IRect](../interfaces/IRect.md).[findId](../interfaces/IRect.md#findid)

#### Inherited from

[UI](UI.md).[findId](UI.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:413](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L413)

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

[IRect](../interfaces/IRect.md).[getPath](../interfaces/IRect.md#getpath)

#### Inherited from

[UI](UI.md).[getPath](UI.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L418)

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

[IRect](../interfaces/IRect.md).[getPathString](../interfaces/IRect.md#getpathstring)

#### Inherited from

[UI](UI.md).[getPathString](UI.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L425)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[load](../interfaces/IRect.md#load)

#### Inherited from

[UI](UI.md).[load](UI.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L430)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__onUpdateSize](../interfaces/IRect.md#__onupdatesize)

#### Inherited from

[UI](UI.md).[__onUpdateSize](UI.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L434)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[__updateRenderPath](../interfaces/IRect.md#__updaterenderpath)

#### Inherited from

[UI](UI.md).[__updateRenderPath](UI.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:441](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L441)

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

[IRect](../interfaces/IRect.md).[__drawRenderPath](../interfaces/IRect.md#__drawrenderpath)

#### Inherited from

[UI](UI.md).[__drawRenderPath](UI.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L449)

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

[IRect](../interfaces/IRect.md).[__drawPath](../interfaces/IRect.md#__drawpath)

#### Inherited from

[UI](UI.md).[__drawPath](UI.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L454)

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

[IRect](../interfaces/IRect.md).[__drawPathByData](../interfaces/IRect.md#__drawpathbydata)

#### Inherited from

[UI](UI.md).[__drawPathByData](UI.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:459](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L459)

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

[IRect](../interfaces/IRect.md).[__drawPathByBox](../interfaces/IRect.md#__drawpathbybox)

#### Inherited from

[UI](UI.md).[__drawPathByBox](UI.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:463](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L463)

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

[IRect](../interfaces/IRect.md).[animate](../interfaces/IRect.md#animate)

#### Inherited from

[UI](UI.md).[animate](UI.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:473](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L473)

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

[IRect](../interfaces/IRect.md).[killAnimate](../interfaces/IRect.md#killanimate)

#### Inherited from

[UI](UI.md).[killAnimate](UI.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:477](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L477)

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

[IRect](../interfaces/IRect.md).[export](../interfaces/IRect.md#export)

#### Inherited from

[UI](UI.md).[export](UI.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L483)

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

[IRect](../interfaces/IRect.md).[syncExport](../interfaces/IRect.md#syncexport)

#### Inherited from

[UI](UI.md).[syncExport](UI.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:487](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L487)

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

[IRect](../interfaces/IRect.md).[clone](../interfaces/IRect.md#clone)

#### Inherited from

[UI](UI.md).[clone](UI.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L491)

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

[UI](UI.md).[one](UI.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:497](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L497)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[UI](UI.md).[registerUI](UI.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:501](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L501)

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

[UI](UI.md).[registerData](UI.md#registerdata)

#### Defined in

[ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L505)

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

[UI](UI.md).[setEditConfig](UI.md#seteditconfig)

#### Defined in

[ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L512)

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

[UI](UI.md).[setEditOuter](UI.md#seteditouter)

#### Defined in

[ui/packages/display/src/UI.ts:514](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L514)

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

[UI](UI.md).[setEditInner](UI.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:516](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L516)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IRect](../interfaces/IRect.md).[destroy](../interfaces/IRect.md#destroy)

#### Inherited from

[UI](UI.md).[destroy](UI.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:519](https://github.com/leaferjs/leafer-ui/blob/6deed4d/packages/display/src/UI.ts#L519)
