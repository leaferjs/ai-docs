# Class: Line\<TInputData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`ILineInputData`](../interfaces/ILineInputData.md) |

## Hierarchy

- [`UI`](UI.md)\<`TInputData`\>

  ↳ **`Line`**

  ↳↳ [`Arrow`](Arrow.md)

## Implements

- [`ILine`](../interfaces/ILine.md)

## Table of contents

### Constructors

- [constructor](Line.md#constructor)

### Properties

- [innerId](Line.md#innerid)
- [syncEventer](Line.md#synceventer)
- [lockNormalStyle](Line.md#locknormalstyle)
- [\_\_layout](Line.md#__layout)
- [\_\_world](Line.md#__world)
- [\_\_local](Line.md#__local)
- [\_\_nowWorld](Line.md#__nowworld)
- [\_\_cameraWorld](Line.md#__cameraworld)
- [\_\_worldOpacity](Line.md#__worldopacity)
- [\_\_scrollWorld](Line.md#__scrollworld)
- [\_\_level](Line.md#__level)
- [\_\_tempNumber](Line.md#__tempnumber)
- [\_\_hasAutoLayout](Line.md#__hasautolayout)
- [\_\_hasMask](Line.md#__hasmask)
- [\_\_hasEraser](Line.md#__haseraser)
- [\_\_hitCanvas](Line.md#__hitcanvas)
- [\_\_captureMap](Line.md#__capturemap)
- [\_\_bubbleMap](Line.md#__bubblemap)
- [\_\_hasLocalEvent](Line.md#__haslocalevent)
- [\_\_hasWorldEvent](Line.md#__hasworldevent)
- [topChildren](Line.md#topchildren)
- [destroyed](Line.md#destroyed)
- [\_\_](Line.md#__)
- [strokeAlign](Line.md#strokealign)
- [height](Line.md#height)
- [points](Line.md#points)
- [curve](Line.md#curve)
- [closed](Line.md#closed)
- [proxyData](Line.md#proxydata)
- [\_\_proxyData](Line.md#__proxydata)
- [leafer](Line.md#leafer)
- [parent](Line.md#parent)
- [zoomLayer](Line.md#zoomlayer)
- [children](Line.md#children)
- [id](Line.md#id)
- [name](Line.md#name)
- [className](Line.md#classname)
- [blendMode](Line.md#blendmode)
- [opacity](Line.md#opacity)
- [visible](Line.md#visible)
- [locked](Line.md#locked)
- [dim](Line.md#dim)
- [dimskip](Line.md#dimskip)
- [bright](Line.md#bright)
- [zIndex](Line.md#zindex)
- [mask](Line.md#mask)
- [eraser](Line.md#eraser)
- [x](Line.md#x)
- [y](Line.md#y)
- [width](Line.md#width)
- [scaleX](Line.md#scalex)
- [scaleY](Line.md#scaley)
- [rotation](Line.md#rotation)
- [skewX](Line.md#skewx)
- [skewY](Line.md#skewy)
- [offsetX](Line.md#offsetx)
- [offsetY](Line.md#offsety)
- [scrollX](Line.md#scrollx)
- [scrollY](Line.md#scrolly)
- [origin](Line.md#origin)
- [around](Line.md#around)
- [lazy](Line.md#lazy)
- [pixelRatio](Line.md#pixelratio)
- [renderSpread](Line.md#renderspread)
- [path](Line.md#path)
- [windingRule](Line.md#windingrule)
- [flow](Line.md#flow)
- [padding](Line.md#padding)
- [gap](Line.md#gap)
- [flowAlign](Line.md#flowalign)
- [flowWrap](Line.md#flowwrap)
- [itemBox](Line.md#itembox)
- [inFlow](Line.md#inflow)
- [autoWidth](Line.md#autowidth)
- [autoHeight](Line.md#autoheight)
- [lockRatio](Line.md#lockratio)
- [autoBox](Line.md#autobox)
- [widthRange](Line.md#widthrange)
- [heightRange](Line.md#heightrange)
- [draggable](Line.md#draggable)
- [dragBounds](Line.md#dragbounds)
- [dragBoundsType](Line.md#dragboundstype)
- [editable](Line.md#editable)
- [hittable](Line.md#hittable)
- [hitFill](Line.md#hitfill)
- [hitStroke](Line.md#hitstroke)
- [hitBox](Line.md#hitbox)
- [hitChildren](Line.md#hitchildren)
- [hitSelf](Line.md#hitself)
- [hitRadius](Line.md#hitradius)
- [cursor](Line.md#cursor)
- [fill](Line.md#fill)
- [stroke](Line.md#stroke)
- [strokeWidth](Line.md#strokewidth)
- [strokeWidthFixed](Line.md#strokewidthfixed)
- [strokeCap](Line.md#strokecap)
- [strokeJoin](Line.md#strokejoin)
- [dashPattern](Line.md#dashpattern)
- [dashOffset](Line.md#dashoffset)
- [miterLimit](Line.md#miterlimit)
- [startArrow](Line.md#startarrow)
- [endArrow](Line.md#endarrow)
- [cornerRadius](Line.md#cornerradius)
- [cornerSmoothing](Line.md#cornersmoothing)
- [shadow](Line.md#shadow)
- [innerShadow](Line.md#innershadow)
- [blur](Line.md#blur)
- [backgroundBlur](Line.md#backgroundblur)
- [grayscale](Line.md#grayscale)
- [filter](Line.md#filter)
- [animation](Line.md#animation)
- [animationOut](Line.md#animationout)
- [transition](Line.md#transition)
- [transitionOut](Line.md#transitionout)
- [motionPath](Line.md#motionpath)
- [motionPrecision](Line.md#motionprecision)
- [motion](Line.md#motion)
- [motionRotation](Line.md#motionrotation)
- [states](Line.md#states)
- [state](Line.md#state)
- [selected](Line.md#selected)
- [disabled](Line.md#disabled)
- [normalStyle](Line.md#normalstyle)
- [hoverStyle](Line.md#hoverstyle)
- [pressStyle](Line.md#pressstyle)
- [focusStyle](Line.md#focusstyle)
- [selectedStyle](Line.md#selectedstyle)
- [disabledStyle](Line.md#disabledstyle)
- [placeholderStyle](Line.md#placeholderstyle)
- [placeholderColor](Line.md#placeholdercolor)
- [placeholderDelay](Line.md#placeholderdelay)
- [button](Line.md#button)
- [editConfig](Line.md#editconfig)
- [editOuter](Line.md#editouter)
- [editInner](Line.md#editinner)
- [data](Line.md#data)
- [useFastShadow](Line.md#usefastshadow)
- [\_\_box](Line.md#__box)
- [\_\_animate](Line.md#__animate)

### Accessors

- [tag](Line.md#tag)
- [innerName](Line.md#innername)
- [\_\_DataProcessor](Line.md#__dataprocessor)
- [\_\_LayoutProcessor](Line.md#__layoutprocessor)
- [leaferIsCreated](Line.md#leaferiscreated)
- [leaferIsReady](Line.md#leaferisready)
- [isLeafer](Line.md#isleafer)
- [isBranch](Line.md#isbranch)
- [isBranchLeaf](Line.md#isbranchleaf)
- [\_\_localMatrix](Line.md#__localmatrix)
- [\_\_localBoxBounds](Line.md#__localboxbounds)
- [worldTransform](Line.md#worldtransform)
- [localTransform](Line.md#localtransform)
- [scrollWorldTransform](Line.md#scrollworldtransform)
- [boxBounds](Line.md#boxbounds)
- [renderBounds](Line.md#renderbounds)
- [worldBoxBounds](Line.md#worldboxbounds)
- [worldStrokeBounds](Line.md#worldstrokebounds)
- [worldRenderBounds](Line.md#worldrenderbounds)
- [worldOpacity](Line.md#worldopacity)
- [\_\_worldFlipped](Line.md#__worldflipped)
- [\_\_onlyHitMask](Line.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Line.md#__ignorehitworld)
- [\_\_inLazyBounds](Line.md#__inlazybounds)
- [pathInputed](Line.md#pathinputed)
- [event](Line.md#event)
- [\_\_tag](Line.md#__tag)
- [toPoint](Line.md#topoint)
- [app](Line.md#app)
- [isFrame](Line.md#isframe)
- [scale](Line.md#scale)
- [isAutoWidth](Line.md#isautowidth)
- [isAutoHeight](Line.md#isautoheight)
- [pen](Line.md#pen)

### Methods

- [resetCustom](Line.md#resetcustom)
- [waitParent](Line.md#waitparent)
- [waitLeafer](Line.md#waitleafer)
- [nextRender](Line.md#nextrender)
- [removeNextRender](Line.md#removenextrender)
- [\_\_bindLeafer](Line.md#__bindleafer)
- [setAttr](Line.md#setattr)
- [getAttr](Line.md#getattr)
- [getComputedAttr](Line.md#getcomputedattr)
- [toJSON](Line.md#tojson)
- [toString](Line.md#tostring)
- [toSVG](Line.md#tosvg)
- [\_\_SVG](Line.md#__svg)
- [toHTML](Line.md#tohtml)
- [\_\_setAttr](Line.md#__setattr)
- [\_\_getAttr](Line.md#__getattr)
- [setProxyAttr](Line.md#setproxyattr)
- [getProxyAttr](Line.md#getproxyattr)
- [focus](Line.md#focus)
- [updateState](Line.md#updatestate)
- [updateLayout](Line.md#updatelayout)
- [forceUpdate](Line.md#forceupdate)
- [forceRender](Line.md#forcerender)
- [\_\_extraUpdate](Line.md#__extraupdate)
- [\_\_updateWorldMatrix](Line.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Line.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Line.md#__updateworldbounds)
- [\_\_updateLocalBounds](Line.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Line.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Line.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Line.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Line.md#__updateboxbounds)
- [\_\_updateContentBounds](Line.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Line.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Line.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Line.md#__updateautolayout)
- [\_\_updateFlowLayout](Line.md#__updateflowlayout)
- [\_\_updateNaturalSize](Line.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Line.md#__updatestrokespread)
- [\_\_updateRenderSpread](Line.md#__updaterenderspread)
- [\_\_updateEraser](Line.md#__updateeraser)
- [\_\_renderEraser](Line.md#__rendereraser)
- [\_\_updateMask](Line.md#__updatemask)
- [\_\_renderMask](Line.md#__rendermask)
- [\_\_getNowWorld](Line.md#__getnowworld)
- [getClampRenderScale](Line.md#getclamprenderscale)
- [getRenderScaleData](Line.md#getrenderscaledata)
- [getTransform](Line.md#gettransform)
- [getBounds](Line.md#getbounds)
- [getLayoutBounds](Line.md#getlayoutbounds)
- [getLayoutPoints](Line.md#getlayoutpoints)
- [getWorldBounds](Line.md#getworldbounds)
- [worldToLocal](Line.md#worldtolocal)
- [localToWorld](Line.md#localtoworld)
- [worldToInner](Line.md#worldtoinner)
- [innerToWorld](Line.md#innertoworld)
- [getBoxPoint](Line.md#getboxpoint)
- [getBoxPointByInner](Line.md#getboxpointbyinner)
- [getInnerPoint](Line.md#getinnerpoint)
- [getInnerPointByBox](Line.md#getinnerpointbybox)
- [getInnerPointByLocal](Line.md#getinnerpointbylocal)
- [getLocalPoint](Line.md#getlocalpoint)
- [getLocalPointByInner](Line.md#getlocalpointbyinner)
- [getPagePoint](Line.md#getpagepoint)
- [getWorldPoint](Line.md#getworldpoint)
- [getWorldPointByBox](Line.md#getworldpointbybox)
- [getWorldPointByLocal](Line.md#getworldpointbylocal)
- [getWorldPointByPage](Line.md#getworldpointbypage)
- [setTransform](Line.md#settransform)
- [transform](Line.md#transform)
- [move](Line.md#move)
- [moveInner](Line.md#moveinner)
- [scaleOf](Line.md#scaleof)
- [rotateOf](Line.md#rotateof)
- [skewOf](Line.md#skewof)
- [transformWorld](Line.md#transformworld)
- [moveWorld](Line.md#moveworld)
- [scaleOfWorld](Line.md#scaleofworld)
- [rotateOfWorld](Line.md#rotateofworld)
- [skewOfWorld](Line.md#skewofworld)
- [flip](Line.md#flip)
- [scaleResize](Line.md#scaleresize)
- [\_\_scaleResize](Line.md#__scaleresize)
- [resizeWidth](Line.md#resizewidth)
- [resizeHeight](Line.md#resizeheight)
- [hit](Line.md#hit)
- [\_\_hitWorld](Line.md#__hitworld)
- [\_\_hit](Line.md#__hit)
- [\_\_hitFill](Line.md#__hitfill)
- [\_\_hitStroke](Line.md#__hitstroke)
- [\_\_hitPixel](Line.md#__hitpixel)
- [\_\_drawHitPath](Line.md#__drawhitpath)
- [\_\_updateHitCanvas](Line.md#__updatehitcanvas)
- [\_\_render](Line.md#__render)
- [\_\_drawFast](Line.md#__drawfast)
- [\_\_draw](Line.md#__draw)
- [\_\_clip](Line.md#__clip)
- [\_\_renderShape](Line.md#__rendershape)
- [\_\_drawShape](Line.md#__drawshape)
- [\_\_updateWorldOpacity](Line.md#__updateworldopacity)
- [\_\_updateChange](Line.md#__updatechange)
- [getMotionPathData](Line.md#getmotionpathdata)
- [getMotionPoint](Line.md#getmotionpoint)
- [getMotionTotal](Line.md#getmotiontotal)
- [\_\_updateMotionPath](Line.md#__updatemotionpath)
- [\_\_runAnimation](Line.md#__runanimation)
- [\_\_updateSortChildren](Line.md#__updatesortchildren)
- [add](Line.md#add)
- [remove](Line.md#remove)
- [dropTo](Line.md#dropto)
- [on](Line.md#on)
- [off](Line.md#off)
- [on\_](Line.md#on_)
- [off\_](Line.md#off_)
- [once](Line.md#once)
- [emit](Line.md#emit)
- [emitEvent](Line.md#emitevent)
- [hasEvent](Line.md#hasevent)
- [changeAttr](Line.md#changeattr)
- [addAttr](Line.md#addattr)
- [\_\_emitLifeEvent](Line.md#__emitlifeevent)
- [\_\_updatePath](Line.md#__updatepath)
- [reset](Line.md#reset)
- [set](Line.md#set)
- [get](Line.md#get)
- [createProxyData](Line.md#createproxydata)
- [find](Line.md#find)
- [findTag](Line.md#findtag)
- [findOne](Line.md#findone)
- [findId](Line.md#findid)
- [getPath](Line.md#getpath)
- [getPathString](Line.md#getpathstring)
- [load](Line.md#load)
- [\_\_onUpdateSize](Line.md#__onupdatesize)
- [\_\_updateRenderPath](Line.md#__updaterenderpath)
- [\_\_drawRenderPath](Line.md#__drawrenderpath)
- [\_\_drawPath](Line.md#__drawpath)
- [\_\_drawPathByData](Line.md#__drawpathbydata)
- [\_\_drawPathByBox](Line.md#__drawpathbybox)
- [drawImagePlaceholder](Line.md#drawimageplaceholder)
- [animate](Line.md#animate)
- [killAnimate](Line.md#killanimate)
- [export](Line.md#export)
- [syncExport](Line.md#syncexport)
- [clone](Line.md#clone)
- [one](Line.md#one)
- [registerUI](Line.md#registerui)
- [registerData](Line.md#registerdata)
- [setEditConfig](Line.md#seteditconfig)
- [setEditOuter](Line.md#seteditouter)
- [setEditInner](Line.md#seteditinner)
- [destroy](Line.md#destroy)

## Constructors

### constructor

• **new Line**\<`TInputData`\>(`data?`): [`Line`](Line.md)\<`TInputData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`ILineInputData`](../interfaces/ILineInputData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TInputData` |

#### Returns

[`Line`](Line.md)\<`TInputData`\>

#### Inherited from

[UI](UI.md).[constructor](UI.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:115](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L115)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[innerId](../interfaces/ILine.md#innerid)

#### Inherited from

[UI](UI.md).[innerId](UI.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L33)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[syncEventer](../interfaces/ILine.md#synceventer)

#### Inherited from

[UI](UI.md).[syncEventer](UI.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L49)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[lockNormalStyle](../interfaces/ILine.md#locknormalstyle)

#### Inherited from

[UI](UI.md).[lockNormalStyle](UI.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L50)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__layout](../interfaces/ILine.md#__layout)

#### Inherited from

[UI](UI.md).[__layout](UI.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L53)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__world](../interfaces/ILine.md#__world)

#### Inherited from

[UI](UI.md).[__world](UI.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L55)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__local](../interfaces/ILine.md#__local)

#### Inherited from

[UI](UI.md).[__local](UI.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L56)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__nowWorld](../interfaces/ILine.md#__nowworld)

#### Inherited from

[UI](UI.md).[__nowWorld](UI.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L58)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__cameraWorld](../interfaces/ILine.md#__cameraworld)

#### Inherited from

[UI](UI.md).[__cameraWorld](UI.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L59)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[__worldOpacity](../interfaces/ILine.md#__worldopacity)

#### Inherited from

[UI](UI.md).[__worldOpacity](UI.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L64)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__scrollWorld](../interfaces/ILine.md#__scrollworld)

#### Inherited from

[UI](UI.md).[__scrollWorld](UI.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L70)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[__level](../interfaces/ILine.md#__level)

#### Inherited from

[UI](UI.md).[__level](UI.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L83)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[__tempNumber](../interfaces/ILine.md#__tempnumber)

#### Inherited from

[UI](UI.md).[__tempNumber](UI.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L84)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__hasAutoLayout](../interfaces/ILine.md#__hasautolayout)

#### Inherited from

[UI](UI.md).[__hasAutoLayout](UI.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L88)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__hasMask](../interfaces/ILine.md#__hasmask)

#### Inherited from

[UI](UI.md).[__hasMask](UI.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L89)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__hasEraser](../interfaces/ILine.md#__haseraser)

#### Inherited from

[UI](UI.md).[__hasEraser](UI.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L90)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__hitCanvas](../interfaces/ILine.md#__hitcanvas)

#### Inherited from

[UI](UI.md).[__hitCanvas](UI.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L91)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__captureMap](../interfaces/ILine.md#__capturemap)

#### Inherited from

[UI](UI.md).[__captureMap](UI.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L102)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__bubbleMap](../interfaces/ILine.md#__bubblemap)

#### Inherited from

[UI](UI.md).[__bubbleMap](UI.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L103)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__hasLocalEvent](../interfaces/ILine.md#__haslocalevent)

#### Inherited from

[UI](UI.md).[__hasLocalEvent](UI.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L105)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__hasWorldEvent](../interfaces/ILine.md#__hasworldevent)

#### Inherited from

[UI](UI.md).[__hasWorldEvent](UI.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L106)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[topChildren](../interfaces/ILine.md#topchildren)

#### Inherited from

[UI](UI.md).[topChildren](UI.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:110](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L110)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[destroyed](../interfaces/ILine.md#destroyed)

#### Inherited from

[UI](UI.md).[destroyed](UI.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:112](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L112)

___

### \_\_

• **\_\_**: [`ILineData`](../interfaces/ILineData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__](../interfaces/ILine.md#__)

#### Overrides

[UI](UI.md).[__](UI.md#__)

#### Defined in

[src/ui/packages/display/src/Line.ts:20](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L20)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[ILine](../interfaces/ILine.md).[strokeAlign](../interfaces/ILine.md#strokealign)

#### Overrides

[UI](UI.md).[strokeAlign](UI.md#strokealign)

#### Defined in

[src/ui/packages/display/src/Line.ts:23](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[height](../interfaces/ILine.md#height)

#### Overrides

[UI](UI.md).[height](UI.md#height)

#### Defined in

[src/ui/packages/display/src/Line.ts:26](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L26)

___

### points

• `Optional` **points**: `number`[] \| [`IPointData`](../interfaces/IPointData.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[points](../interfaces/ILine.md#points)

#### Defined in

[src/ui/packages/display/src/Line.ts:29](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L29)

___

### curve

• `Optional` **curve**: `number` \| `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[curve](../interfaces/ILine.md#curve)

#### Defined in

[src/ui/packages/display/src/Line.ts:32](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L32)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[closed](../interfaces/ILine.md#closed)

#### Overrides

[UI](UI.md).[closed](UI.md#closed)

#### Defined in

[src/ui/packages/display/src/Line.ts:35](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L35)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[proxyData](../interfaces/ILine.md#proxydata)

#### Inherited from

[UI](UI.md).[proxyData](UI.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__proxyData](../interfaces/ILine.md#__proxydata)

#### Inherited from

[UI](UI.md).[__proxyData](UI.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[leafer](../interfaces/ILine.md#leafer)

#### Inherited from

[UI](UI.md).[leafer](UI.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[parent](../interfaces/ILine.md#parent)

#### Inherited from

[UI](UI.md).[parent](UI.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[zoomLayer](../interfaces/ILine.md#zoomlayer)

#### Inherited from

[UI](UI.md).[zoomLayer](UI.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[children](../interfaces/ILine.md#children)

#### Inherited from

[UI](UI.md).[children](UI.md#children)

#### Defined in

[src/ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[id](../interfaces/ILine.md#id)

#### Inherited from

[UI](UI.md).[id](UI.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[name](../interfaces/ILine.md#name)

#### Inherited from

[UI](UI.md).[name](UI.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[className](../interfaces/ILine.md#classname)

#### Inherited from

[UI](UI.md).[className](UI.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[ILine](../interfaces/ILine.md).[blendMode](../interfaces/ILine.md#blendmode)

#### Inherited from

[UI](UI.md).[blendMode](UI.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[opacity](../interfaces/ILine.md#opacity)

#### Inherited from

[UI](UI.md).[opacity](UI.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[ILine](../interfaces/ILine.md).[visible](../interfaces/ILine.md#visible)

#### Inherited from

[UI](UI.md).[visible](UI.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[locked](../interfaces/ILine.md#locked)

#### Inherited from

[UI](UI.md).[locked](UI.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[dim](../interfaces/ILine.md#dim)

#### Inherited from

[UI](UI.md).[dim](UI.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:67](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L67)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[dimskip](../interfaces/ILine.md#dimskip)

#### Inherited from

[UI](UI.md).[dimskip](UI.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:70](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L70)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[bright](../interfaces/ILine.md#bright)

#### Inherited from

[UI](UI.md).[bright](UI.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L72)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[zIndex](../interfaces/ILine.md#zindex)

#### Inherited from

[UI](UI.md).[zIndex](UI.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L76)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[ILine](../interfaces/ILine.md).[mask](../interfaces/ILine.md#mask)

#### Inherited from

[UI](UI.md).[mask](UI.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L80)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[ILine](../interfaces/ILine.md).[eraser](../interfaces/ILine.md#eraser)

#### Inherited from

[UI](UI.md).[eraser](UI.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:83](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L83)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[x](../interfaces/ILine.md#x)

#### Inherited from

[UI](UI.md).[x](UI.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:88](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L88)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[y](../interfaces/ILine.md#y)

#### Inherited from

[UI](UI.md).[y](UI.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L91)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[width](../interfaces/ILine.md#width)

#### Inherited from

[UI](UI.md).[width](UI.md#width)

#### Defined in

[src/ui/packages/display/src/UI.ts:95](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L95)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[scaleX](../interfaces/ILine.md#scalex)

#### Inherited from

[UI](UI.md).[scaleX](UI.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L102)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[scaleY](../interfaces/ILine.md#scaley)

#### Inherited from

[UI](UI.md).[scaleY](UI.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L105)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[rotation](../interfaces/ILine.md#rotation)

#### Inherited from

[UI](UI.md).[rotation](UI.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L109)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[skewX](../interfaces/ILine.md#skewx)

#### Inherited from

[UI](UI.md).[skewX](UI.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L113)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[skewY](../interfaces/ILine.md#skewy)

#### Inherited from

[UI](UI.md).[skewY](UI.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L116)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[offsetX](../interfaces/ILine.md#offsetx)

#### Inherited from

[UI](UI.md).[offsetX](UI.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:121](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L121)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[offsetY](../interfaces/ILine.md#offsety)

#### Inherited from

[UI](UI.md).[offsetY](UI.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L124)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[scrollX](../interfaces/ILine.md#scrollx)

#### Inherited from

[UI](UI.md).[scrollX](UI.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L128)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[scrollY](../interfaces/ILine.md#scrolly)

#### Inherited from

[UI](UI.md).[scrollY](UI.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L131)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILine](../interfaces/ILine.md).[origin](../interfaces/ILine.md#origin)

#### Inherited from

[UI](UI.md).[origin](UI.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:136](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L136)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[ILine](../interfaces/ILine.md).[around](../interfaces/ILine.md#around)

#### Inherited from

[UI](UI.md).[around](UI.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:139](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L139)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[lazy](../interfaces/ILine.md#lazy)

#### Inherited from

[UI](UI.md).[lazy](UI.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L144)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[pixelRatio](../interfaces/ILine.md#pixelratio)

#### Inherited from

[UI](UI.md).[pixelRatio](UI.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L147)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[renderSpread](../interfaces/ILine.md#renderspread)

#### Inherited from

[UI](UI.md).[renderSpread](UI.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L151)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[path](../interfaces/ILine.md#path)

#### Inherited from

[UI](UI.md).[path](UI.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:156](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L156)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[ILine](../interfaces/ILine.md).[windingRule](../interfaces/ILine.md#windingrule)

#### Inherited from

[UI](UI.md).[windingRule](UI.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:159](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L159)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[ILine](../interfaces/ILine.md).[flow](../interfaces/ILine.md#flow)

#### Inherited from

[UI](UI.md).[flow](UI.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L166)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[padding](../interfaces/ILine.md#padding)

#### Inherited from

[UI](UI.md).[padding](UI.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L169)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[gap](../interfaces/ILine.md#gap)

#### Inherited from

[UI](UI.md).[gap](UI.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L171)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[ILine](../interfaces/ILine.md).[flowAlign](../interfaces/ILine.md#flowalign)

#### Inherited from

[UI](UI.md).[flowAlign](UI.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L173)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[ILine](../interfaces/ILine.md).[flowWrap](../interfaces/ILine.md#flowwrap)

#### Inherited from

[UI](UI.md).[flowWrap](UI.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L175)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[ILine](../interfaces/ILine.md).[itemBox](../interfaces/ILine.md#itembox)

#### Inherited from

[UI](UI.md).[itemBox](UI.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L178)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[inFlow](../interfaces/ILine.md#inflow)

#### Inherited from

[UI](UI.md).[inFlow](UI.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L180)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILine](../interfaces/ILine.md).[autoWidth](../interfaces/ILine.md#autowidth)

#### Inherited from

[UI](UI.md).[autoWidth](UI.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:183](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L183)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[ILine](../interfaces/ILine.md).[autoHeight](../interfaces/ILine.md#autoheight)

#### Inherited from

[UI](UI.md).[autoHeight](UI.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L185)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[lockRatio](../interfaces/ILine.md#lockratio)

#### Inherited from

[UI](UI.md).[lockRatio](UI.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L188)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[autoBox](../interfaces/ILine.md#autobox)

#### Inherited from

[UI](UI.md).[autoBox](UI.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L190)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[widthRange](../interfaces/ILine.md#widthrange)

#### Inherited from

[UI](UI.md).[widthRange](UI.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L193)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[heightRange](../interfaces/ILine.md#heightrange)

#### Inherited from

[UI](UI.md).[heightRange](UI.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L196)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[ILine](../interfaces/ILine.md).[draggable](../interfaces/ILine.md#draggable)

#### Inherited from

[UI](UI.md).[draggable](UI.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L201)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[dragBounds](../interfaces/ILine.md#dragbounds)

#### Inherited from

[UI](UI.md).[dragBounds](UI.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L204)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[ILine](../interfaces/ILine.md).[dragBoundsType](../interfaces/ILine.md#dragboundstype)

#### Inherited from

[UI](UI.md).[dragBoundsType](UI.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L207)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[editable](../interfaces/ILine.md#editable)

#### Inherited from

[UI](UI.md).[editable](UI.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L211)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[hittable](../interfaces/ILine.md#hittable)

#### Inherited from

[UI](UI.md).[hittable](UI.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L216)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILine](../interfaces/ILine.md).[hitFill](../interfaces/ILine.md#hitfill)

#### Inherited from

[UI](UI.md).[hitFill](UI.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L219)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[ILine](../interfaces/ILine.md).[hitStroke](../interfaces/ILine.md#hitstroke)

#### Inherited from

[UI](UI.md).[hitStroke](UI.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:222](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L222)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[hitBox](../interfaces/ILine.md#hitbox)

#### Inherited from

[UI](UI.md).[hitBox](UI.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:225](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L225)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[hitChildren](../interfaces/ILine.md#hitchildren)

#### Inherited from

[UI](UI.md).[hitChildren](UI.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:228](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L228)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[hitSelf](../interfaces/ILine.md#hitself)

#### Inherited from

[UI](UI.md).[hitSelf](UI.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:231](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L231)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[hitRadius](../interfaces/ILine.md#hitradius)

#### Inherited from

[UI](UI.md).[hitRadius](UI.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L234)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[cursor](../interfaces/ILine.md#cursor)

#### Inherited from

[UI](UI.md).[cursor](UI.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:237](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L237)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[ILine](../interfaces/ILine.md).[fill](../interfaces/ILine.md#fill)

#### Inherited from

[UI](UI.md).[fill](UI.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L245)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[ILine](../interfaces/ILine.md).[stroke](../interfaces/ILine.md#stroke)

#### Inherited from

[UI](UI.md).[stroke](UI.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L250)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[strokeWidth](../interfaces/ILine.md#strokewidth)

#### Inherited from

[UI](UI.md).[strokeWidth](UI.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L256)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[ILine](../interfaces/ILine.md).[strokeWidthFixed](../interfaces/ILine.md#strokewidthfixed)

#### Inherited from

[UI](UI.md).[strokeWidthFixed](UI.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:259](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L259)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[ILine](../interfaces/ILine.md).[strokeCap](../interfaces/ILine.md#strokecap)

#### Inherited from

[UI](UI.md).[strokeCap](UI.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:262](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L262)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[ILine](../interfaces/ILine.md).[strokeJoin](../interfaces/ILine.md#strokejoin)

#### Inherited from

[UI](UI.md).[strokeJoin](UI.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:265](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L265)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[ILine](../interfaces/ILine.md).[dashPattern](../interfaces/ILine.md#dashpattern)

#### Inherited from

[UI](UI.md).[dashPattern](UI.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L268)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[dashOffset](../interfaces/ILine.md#dashoffset)

#### Inherited from

[UI](UI.md).[dashOffset](UI.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L271)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[miterLimit](../interfaces/ILine.md#miterlimit)

#### Inherited from

[UI](UI.md).[miterLimit](UI.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L274)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[ILine](../interfaces/ILine.md).[startArrow](../interfaces/ILine.md#startarrow)

#### Inherited from

[UI](UI.md).[startArrow](UI.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L279)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[ILine](../interfaces/ILine.md).[endArrow](../interfaces/ILine.md#endarrow)

#### Inherited from

[UI](UI.md).[endArrow](UI.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:281](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L281)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[cornerRadius](../interfaces/ILine.md#cornerradius)

#### Inherited from

[UI](UI.md).[cornerRadius](UI.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L286)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[cornerSmoothing](../interfaces/ILine.md#cornersmoothing)

#### Inherited from

[UI](UI.md).[cornerSmoothing](UI.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L289)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[shadow](../interfaces/ILine.md#shadow)

#### Inherited from

[UI](UI.md).[shadow](UI.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:294](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L294)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[innerShadow](../interfaces/ILine.md#innershadow)

#### Inherited from

[UI](UI.md).[innerShadow](UI.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L297)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[blur](../interfaces/ILine.md#blur)

#### Inherited from

[UI](UI.md).[blur](UI.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L300)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[backgroundBlur](../interfaces/ILine.md#backgroundblur)

#### Inherited from

[UI](UI.md).[backgroundBlur](UI.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L303)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[grayscale](../interfaces/ILine.md#grayscale)

#### Inherited from

[UI](UI.md).[grayscale](UI.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:306](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L306)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[filter](../interfaces/ILine.md#filter)

#### Inherited from

[UI](UI.md).[filter](UI.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L309)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[animation](../interfaces/ILine.md#animation)

#### Inherited from

[UI](UI.md).[animation](UI.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L314)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[ILine](../interfaces/ILine.md).[animationOut](../interfaces/ILine.md#animationout)

#### Inherited from

[UI](UI.md).[animationOut](UI.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:316](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L316)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILine](../interfaces/ILine.md).[transition](../interfaces/ILine.md#transition)

#### Inherited from

[UI](UI.md).[transition](UI.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L319)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[ILine](../interfaces/ILine.md).[transitionOut](../interfaces/ILine.md#transitionout)

#### Inherited from

[UI](UI.md).[transitionOut](UI.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L321)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[motionPath](../interfaces/ILine.md#motionpath)

#### Inherited from

[UI](UI.md).[motionPath](UI.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L326)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[motionPrecision](../interfaces/ILine.md#motionprecision)

#### Inherited from

[UI](UI.md).[motionPrecision](UI.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:328](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L328)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[motion](../interfaces/ILine.md#motion)

#### Inherited from

[UI](UI.md).[motion](UI.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L331)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[motionRotation](../interfaces/ILine.md#motionrotation)

#### Inherited from

[UI](UI.md).[motionRotation](UI.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L333)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[states](../interfaces/ILine.md#states)

#### Inherited from

[UI](UI.md).[states](UI.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L338)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[state](../interfaces/ILine.md#state)

#### Inherited from

[UI](UI.md).[state](UI.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:340](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L340)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[selected](../interfaces/ILine.md#selected)

#### Inherited from

[UI](UI.md).[selected](UI.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L343)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[disabled](../interfaces/ILine.md#disabled)

#### Inherited from

[UI](UI.md).[disabled](UI.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L345)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[normalStyle](../interfaces/ILine.md#normalstyle)

#### Inherited from

[UI](UI.md).[normalStyle](UI.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:348](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L348)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[hoverStyle](../interfaces/ILine.md#hoverstyle)

#### Inherited from

[UI](UI.md).[hoverStyle](UI.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L350)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[pressStyle](../interfaces/ILine.md#pressstyle)

#### Inherited from

[UI](UI.md).[pressStyle](UI.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L352)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[focusStyle](../interfaces/ILine.md#focusstyle)

#### Inherited from

[UI](UI.md).[focusStyle](UI.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L354)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[selectedStyle](../interfaces/ILine.md#selectedstyle)

#### Inherited from

[UI](UI.md).[selectedStyle](UI.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L356)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[disabledStyle](../interfaces/ILine.md#disabledstyle)

#### Inherited from

[UI](UI.md).[disabledStyle](UI.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:358](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L358)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[placeholderStyle](../interfaces/ILine.md#placeholderstyle)

#### Inherited from

[UI](UI.md).[placeholderStyle](UI.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L361)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[placeholderColor](../interfaces/ILine.md#placeholdercolor)

#### Inherited from

[UI](UI.md).[placeholderColor](UI.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L364)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[ILine](../interfaces/ILine.md).[placeholderDelay](../interfaces/ILine.md#placeholderdelay)

#### Inherited from

[UI](UI.md).[placeholderDelay](UI.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:367](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L367)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[button](../interfaces/ILine.md#button)

#### Inherited from

[UI](UI.md).[button](UI.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L370)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[editConfig](../interfaces/ILine.md#editconfig)

#### Inherited from

[UI](UI.md).[editConfig](UI.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:375](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L375)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[editOuter](../interfaces/ILine.md#editouter)

#### Inherited from

[UI](UI.md).[editOuter](UI.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L377)

___

### editInner

• **editInner**: `string`

#### Implementation of

[ILine](../interfaces/ILine.md).[editInner](../interfaces/ILine.md#editinner)

#### Inherited from

[UI](UI.md).[editInner](UI.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L379)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[data](../interfaces/ILine.md#data)

#### Inherited from

[UI](UI.md).[data](UI.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L384)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[useFastShadow](../interfaces/ILine.md#usefastshadow)

#### Inherited from

[UI](UI.md).[useFastShadow](UI.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L393)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__box](../interfaces/ILine.md#__box)

#### Inherited from

[UI](UI.md).[__box](UI.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L395)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__animate](../interfaces/ILine.md#__animate)

#### Inherited from

[UI](UI.md).[__animate](UI.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:396](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L396)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILine](../interfaces/ILine.md).[tag](../interfaces/ILine.md#tag)

#### Inherited from

UI.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L28)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[tag](../interfaces/ILine.md#tag)

#### Inherited from

UI.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[ILine](../interfaces/ILine.md).[innerName](../interfaces/ILine.md#innername)

#### Inherited from

UI.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__DataProcessor](../interfaces/ILine.md#__dataprocessor)

#### Inherited from

UI.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__LayoutProcessor](../interfaces/ILine.md#__layoutprocessor)

#### Inherited from

UI.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[leaferIsCreated](../interfaces/ILine.md#leaferiscreated)

#### Inherited from

UI.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[leaferIsReady](../interfaces/ILine.md#leaferisready)

#### Inherited from

UI.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L43)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isLeafer](../interfaces/ILine.md#isleafer)

#### Inherited from

UI.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L45)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isBranch](../interfaces/ILine.md#isbranch)

#### Inherited from

UI.isBranch

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L46)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isBranchLeaf](../interfaces/ILine.md#isbranchleaf)

#### Inherited from

UI.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L47)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__localMatrix](../interfaces/ILine.md#__localmatrix)

#### Inherited from

UI.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L61)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[__localBoxBounds](../interfaces/ILine.md#__localboxbounds)

#### Inherited from

UI.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L62)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[worldTransform](../interfaces/ILine.md#worldtransform)

#### Inherited from

UI.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L67)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[localTransform](../interfaces/ILine.md#localtransform)

#### Inherited from

UI.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L68)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[scrollWorldTransform](../interfaces/ILine.md#scrollworldtransform)

#### Inherited from

UI.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L71)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[boxBounds](../interfaces/ILine.md#boxbounds)

#### Inherited from

UI.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L74)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[renderBounds](../interfaces/ILine.md#renderbounds)

#### Inherited from

UI.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L75)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[worldBoxBounds](../interfaces/ILine.md#worldboxbounds)

#### Inherited from

UI.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L76)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[worldStrokeBounds](../interfaces/ILine.md#worldstrokebounds)

#### Inherited from

UI.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L77)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[worldRenderBounds](../interfaces/ILine.md#worldrenderbounds)

#### Inherited from

UI.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L78)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[worldOpacity](../interfaces/ILine.md#worldopacity)

#### Inherited from

UI.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:81](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L81)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__worldFlipped](../interfaces/ILine.md#__worldflipped)

#### Inherited from

UI.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L86)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__onlyHitMask](../interfaces/ILine.md#__onlyhitmask)

#### Inherited from

UI.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L93)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__ignoreHitWorld](../interfaces/ILine.md#__ignorehitworld)

#### Inherited from

UI.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L94)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[__inLazyBounds](../interfaces/ILine.md#__inlazybounds)

#### Inherited from

UI.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L95)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[pathInputed](../interfaces/ILine.md#pathinputed)

#### Inherited from

UI.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L97)

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

[ILine](../interfaces/ILine.md).[event](../interfaces/ILine.md#event)

#### Inherited from

UI.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L100)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[ILine](../interfaces/ILine.md).[__tag](../interfaces/ILine.md#__tag)

#### Overrides

UI.\_\_tag

#### Defined in

[src/ui/packages/display/src/Line.ts:17](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L17)

___

### toPoint

• `get` **toPoint**(): [`IPointData`](../interfaces/IPointData.md)

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[toPoint](../interfaces/ILine.md#topoint)

#### Defined in

[src/ui/packages/display/src/Line.ts:37](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L37)

• `set` **toPoint**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[toPoint](../interfaces/ILine.md#topoint)

#### Defined in

[src/ui/packages/display/src/Line.ts:47](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L47)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[app](../interfaces/ILine.md#app)

#### Inherited from

UI.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isFrame](../interfaces/ILine.md#isframe)

#### Inherited from

UI.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[scale](../interfaces/ILine.md#scale)

#### Inherited from

UI.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L388)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[scale](../interfaces/ILine.md#scale)

#### Inherited from

UI.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:387](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L387)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isAutoWidth](../interfaces/ILine.md#isautowidth)

#### Inherited from

UI.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:390](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L390)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[ILine](../interfaces/ILine.md).[isAutoHeight](../interfaces/ILine.md#isautoheight)

#### Inherited from

UI.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L391)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[pen](../interfaces/ILine.md#pen)

#### Inherited from

UI.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:398](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L398)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[resetCustom](../interfaces/ILine.md#resetcustom)

#### Inherited from

[UI](UI.md).[resetCustom](UI.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:142](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L142)

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

[ILine](../interfaces/ILine.md).[waitParent](../interfaces/ILine.md#waitparent)

#### Inherited from

[UI](UI.md).[waitParent](UI.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L148)

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

[ILine](../interfaces/ILine.md).[waitLeafer](../interfaces/ILine.md#waitleafer)

#### Inherited from

[UI](UI.md).[waitLeafer](UI.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L153)

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

[ILine](../interfaces/ILine.md).[nextRender](../interfaces/ILine.md#nextrender)

#### Inherited from

[UI](UI.md).[nextRender](UI.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:158](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L158)

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

[ILine](../interfaces/ILine.md).[removeNextRender](../interfaces/ILine.md#removenextrender)

#### Inherited from

[UI](UI.md).[removeNextRender](UI.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:162](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L162)

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

[ILine](../interfaces/ILine.md).[__bindLeafer](../interfaces/ILine.md#__bindleafer)

#### Inherited from

[UI](UI.md).[__bindLeafer](UI.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:166](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L166)

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

[ILine](../interfaces/ILine.md).[setAttr](../interfaces/ILine.md#setattr)

#### Inherited from

[UI](UI.md).[setAttr](UI.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L195)

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

[ILine](../interfaces/ILine.md).[getAttr](../interfaces/ILine.md#getattr)

#### Inherited from

[UI](UI.md).[getAttr](UI.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L196)

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

[ILine](../interfaces/ILine.md).[getComputedAttr](../interfaces/ILine.md#getcomputedattr)

#### Inherited from

[UI](UI.md).[getComputedAttr](UI.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L198)

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

[ILine](../interfaces/ILine.md).[toJSON](../interfaces/ILine.md#tojson)

#### Inherited from

[UI](UI.md).[toJSON](UI.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L200)

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

[ILine](../interfaces/ILine.md).[toString](../interfaces/ILine.md#tostring)

#### Inherited from

[UI](UI.md).[toString](UI.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:205](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L205)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[ILine](../interfaces/ILine.md).[toSVG](../interfaces/ILine.md#tosvg)

#### Inherited from

[UI](UI.md).[toSVG](UI.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:209](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L209)

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

[ILine](../interfaces/ILine.md).[__SVG](../interfaces/ILine.md#__svg)

#### Inherited from

[UI](UI.md).[__SVG](UI.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:211](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L211)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[ILine](../interfaces/ILine.md).[toHTML](../interfaces/ILine.md#tohtml)

#### Inherited from

[UI](UI.md).[toHTML](UI.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:213](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L213)

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

[ILine](../interfaces/ILine.md).[__setAttr](../interfaces/ILine.md#__setattr)

#### Inherited from

[UI](UI.md).[__setAttr](UI.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:217](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L217)

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

[ILine](../interfaces/ILine.md).[__getAttr](../interfaces/ILine.md#__getattr)

#### Inherited from

[UI](UI.md).[__getAttr](UI.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:219](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L219)

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

[ILine](../interfaces/ILine.md).[setProxyAttr](../interfaces/ILine.md#setproxyattr)

#### Inherited from

[UI](UI.md).[setProxyAttr](UI.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:221](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L221)

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

[ILine](../interfaces/ILine.md).[getProxyAttr](../interfaces/ILine.md#getproxyattr)

#### Inherited from

[UI](UI.md).[getProxyAttr](UI.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:223](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L223)

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

[ILine](../interfaces/ILine.md).[focus](../interfaces/ILine.md#focus)

#### Inherited from

[UI](UI.md).[focus](UI.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:243](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L243)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[updateState](../interfaces/ILine.md#updatestate)

#### Inherited from

[UI](UI.md).[updateState](UI.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:245](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L245)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[updateLayout](../interfaces/ILine.md#updatelayout)

#### Inherited from

[UI](UI.md).[updateLayout](UI.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:250](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L250)

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

[ILine](../interfaces/ILine.md).[forceUpdate](../interfaces/ILine.md#forceupdate)

#### Inherited from

[UI](UI.md).[forceUpdate](UI.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:254](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L254)

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

[ILine](../interfaces/ILine.md).[forceRender](../interfaces/ILine.md#forcerender)

#### Inherited from

[UI](UI.md).[forceRender](UI.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:262](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L262)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__extraUpdate](../interfaces/ILine.md#__extraupdate)

#### Inherited from

[UI](UI.md).[__extraUpdate](UI.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:266](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L266)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateWorldMatrix](../interfaces/ILine.md#__updateworldmatrix)

#### Inherited from

[UI](UI.md).[__updateWorldMatrix](UI.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:272](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L272)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateLocalMatrix](../interfaces/ILine.md#__updatelocalmatrix)

#### Inherited from

[UI](UI.md).[__updateLocalMatrix](UI.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:274](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L274)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateWorldBounds](../interfaces/ILine.md#__updateworldbounds)

#### Inherited from

[UI](UI.md).[__updateWorldBounds](UI.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateLocalBounds](../interfaces/ILine.md#__updatelocalbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBounds](UI.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L282)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateLocalBoxBounds](../interfaces/ILine.md#__updatelocalboxbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBoxBounds](UI.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L285)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateLocalStrokeBounds](../interfaces/ILine.md#__updatelocalstrokebounds)

#### Inherited from

[UI](UI.md).[__updateLocalStrokeBounds](UI.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:287](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L287)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateLocalRenderBounds](../interfaces/ILine.md#__updatelocalrenderbounds)

#### Inherited from

[UI](UI.md).[__updateLocalRenderBounds](UI.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:289](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L289)

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

[ILine](../interfaces/ILine.md).[__updateBoxBounds](../interfaces/ILine.md#__updateboxbounds)

#### Inherited from

[UI](UI.md).[__updateBoxBounds](UI.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:293](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L293)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateContentBounds](../interfaces/ILine.md#__updatecontentbounds)

#### Inherited from

[UI](UI.md).[__updateContentBounds](UI.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L295)

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

[ILine](../interfaces/ILine.md).[__updateStrokeBounds](../interfaces/ILine.md#__updatestrokebounds)

#### Inherited from

[UI](UI.md).[__updateStrokeBounds](UI.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L297)

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

[ILine](../interfaces/ILine.md).[__updateRenderBounds](../interfaces/ILine.md#__updaterenderbounds)

#### Inherited from

[UI](UI.md).[__updateRenderBounds](UI.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L299)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateAutoLayout](../interfaces/ILine.md#__updateautolayout)

#### Inherited from

[UI](UI.md).[__updateAutoLayout](UI.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L302)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateFlowLayout](../interfaces/ILine.md#__updateflowlayout)

#### Inherited from

[UI](UI.md).[__updateFlowLayout](UI.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:304](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L304)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateNaturalSize](../interfaces/ILine.md#__updatenaturalsize)

#### Inherited from

[UI](UI.md).[__updateNaturalSize](UI.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:306](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L306)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateStrokeSpread](../interfaces/ILine.md#__updatestrokespread)

#### Inherited from

[UI](UI.md).[__updateStrokeSpread](UI.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:309](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L309)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateRenderSpread](../interfaces/ILine.md#__updaterenderspread)

#### Inherited from

[UI](UI.md).[__updateRenderSpread](UI.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:311](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L311)

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

[ILine](../interfaces/ILine.md).[__updateEraser](../interfaces/ILine.md#__updateeraser)

#### Inherited from

[UI](UI.md).[__updateEraser](UI.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:318](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L318)

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

[ILine](../interfaces/ILine.md).[__renderEraser](../interfaces/ILine.md#__rendereraser)

#### Inherited from

[UI](UI.md).[__renderEraser](UI.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:322](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L322)

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

[ILine](../interfaces/ILine.md).[__updateMask](../interfaces/ILine.md#__updatemask)

#### Inherited from

[UI](UI.md).[__updateMask](UI.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:330](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L330)

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

[ILine](../interfaces/ILine.md).[__renderMask](../interfaces/ILine.md#__rendermask)

#### Inherited from

[UI](UI.md).[__renderMask](UI.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:336](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L336)

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

[ILine](../interfaces/ILine.md).[__getNowWorld](../interfaces/ILine.md#__getnowworld)

#### Inherited from

[UI](UI.md).[__getNowWorld](UI.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:344](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L344)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getClampRenderScale](../interfaces/ILine.md#getclamprenderscale)

#### Inherited from

[UI](UI.md).[getClampRenderScale](UI.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:358](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L358)

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

[ILine](../interfaces/ILine.md).[getRenderScaleData](../interfaces/ILine.md#getrenderscaledata)

#### Inherited from

[UI](UI.md).[getRenderScaleData](UI.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:364](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L364)

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

[ILine](../interfaces/ILine.md).[getTransform](../interfaces/ILine.md#gettransform)

#### Inherited from

[UI](UI.md).[getTransform](UI.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L373)

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

[ILine](../interfaces/ILine.md).[getBounds](../interfaces/ILine.md#getbounds)

#### Inherited from

[UI](UI.md).[getBounds](UI.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:378](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L378)

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

[ILine](../interfaces/ILine.md).[getLayoutBounds](../interfaces/ILine.md#getlayoutbounds)

#### Inherited from

[UI](UI.md).[getLayoutBounds](UI.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:382](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L382)

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

[ILine](../interfaces/ILine.md).[getLayoutPoints](../interfaces/ILine.md#getlayoutpoints)

#### Inherited from

[UI](UI.md).[getLayoutPoints](UI.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:386](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L386)

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

[ILine](../interfaces/ILine.md).[getWorldBounds](../interfaces/ILine.md#getworldbounds)

#### Inherited from

[UI](UI.md).[getWorldBounds](UI.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:391](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L391)

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

[ILine](../interfaces/ILine.md).[worldToLocal](../interfaces/ILine.md#worldtolocal)

#### Inherited from

[UI](UI.md).[worldToLocal](UI.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:399](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L399)

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

[ILine](../interfaces/ILine.md).[localToWorld](../interfaces/ILine.md#localtoworld)

#### Inherited from

[UI](UI.md).[localToWorld](UI.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:407](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L407)

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

[ILine](../interfaces/ILine.md).[worldToInner](../interfaces/ILine.md#worldtoinner)

#### Inherited from

[UI](UI.md).[worldToInner](UI.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:415](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L415)

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

[ILine](../interfaces/ILine.md).[innerToWorld](../interfaces/ILine.md#innertoworld)

#### Inherited from

[UI](UI.md).[innerToWorld](UI.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:423](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L423)

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

[ILine](../interfaces/ILine.md).[getBoxPoint](../interfaces/ILine.md#getboxpoint)

#### Inherited from

[UI](UI.md).[getBoxPoint](UI.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L430)

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

[ILine](../interfaces/ILine.md).[getBoxPointByInner](../interfaces/ILine.md#getboxpointbyinner)

#### Inherited from

[UI](UI.md).[getBoxPointByInner](UI.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:434](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L434)

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

[ILine](../interfaces/ILine.md).[getInnerPoint](../interfaces/ILine.md#getinnerpoint)

#### Inherited from

[UI](UI.md).[getInnerPoint](UI.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L440)

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

[ILine](../interfaces/ILine.md).[getInnerPointByBox](../interfaces/ILine.md#getinnerpointbybox)

#### Inherited from

[UI](UI.md).[getInnerPointByBox](UI.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:446](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L446)

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

[ILine](../interfaces/ILine.md).[getInnerPointByLocal](../interfaces/ILine.md#getinnerpointbylocal)

#### Inherited from

[UI](UI.md).[getInnerPointByLocal](UI.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:452](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L452)

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

[ILine](../interfaces/ILine.md).[getLocalPoint](../interfaces/ILine.md#getlocalpoint)

#### Inherited from

[UI](UI.md).[getLocalPoint](UI.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:456](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L456)

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

[ILine](../interfaces/ILine.md).[getLocalPointByInner](../interfaces/ILine.md#getlocalpointbyinner)

#### Inherited from

[UI](UI.md).[getLocalPointByInner](UI.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:462](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L462)

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

[ILine](../interfaces/ILine.md).[getPagePoint](../interfaces/ILine.md#getpagepoint)

#### Inherited from

[UI](UI.md).[getPagePoint](UI.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:466](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L466)

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

[ILine](../interfaces/ILine.md).[getWorldPoint](../interfaces/ILine.md#getworldpoint)

#### Inherited from

[UI](UI.md).[getWorldPoint](UI.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:471](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L471)

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

[ILine](../interfaces/ILine.md).[getWorldPointByBox](../interfaces/ILine.md#getworldpointbybox)

#### Inherited from

[UI](UI.md).[getWorldPointByBox](UI.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L477)

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

[ILine](../interfaces/ILine.md).[getWorldPointByLocal](../interfaces/ILine.md#getworldpointbylocal)

#### Inherited from

[UI](UI.md).[getWorldPointByLocal](UI.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:481](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L481)

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

[ILine](../interfaces/ILine.md).[getWorldPointByPage](../interfaces/ILine.md#getworldpointbypage)

#### Inherited from

[UI](UI.md).[getWorldPointByPage](UI.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:487](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L487)

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

[ILine](../interfaces/ILine.md).[setTransform](../interfaces/ILine.md#settransform)

#### Inherited from

[UI](UI.md).[setTransform](UI.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:495](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L495)

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

[ILine](../interfaces/ILine.md).[transform](../interfaces/ILine.md#transform)

#### Inherited from

[UI](UI.md).[transform](UI.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L499)

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

[ILine](../interfaces/ILine.md).[move](../interfaces/ILine.md#move)

#### Inherited from

[UI](UI.md).[move](UI.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L503)

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

[ILine](../interfaces/ILine.md).[moveInner](../interfaces/ILine.md#moveinner)

#### Inherited from

[UI](UI.md).[moveInner](UI.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:508](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L508)

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

[ILine](../interfaces/ILine.md).[scaleOf](../interfaces/ILine.md#scaleof)

#### Inherited from

[UI](UI.md).[scaleOf](UI.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:512](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L512)

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

[ILine](../interfaces/ILine.md).[rotateOf](../interfaces/ILine.md#rotateof)

#### Inherited from

[UI](UI.md).[rotateOf](UI.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:516](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L516)

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

[ILine](../interfaces/ILine.md).[skewOf](../interfaces/ILine.md#skewof)

#### Inherited from

[UI](UI.md).[skewOf](UI.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:520](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L520)

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

[ILine](../interfaces/ILine.md).[transformWorld](../interfaces/ILine.md#transformworld)

#### Inherited from

[UI](UI.md).[transformWorld](UI.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:525](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L525)

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

[ILine](../interfaces/ILine.md).[moveWorld](../interfaces/ILine.md#moveworld)

#### Inherited from

[UI](UI.md).[moveWorld](UI.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:529](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L529)

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

[ILine](../interfaces/ILine.md).[scaleOfWorld](../interfaces/ILine.md#scaleofworld)

#### Inherited from

[UI](UI.md).[scaleOfWorld](UI.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:533](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L533)

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

[ILine](../interfaces/ILine.md).[rotateOfWorld](../interfaces/ILine.md#rotateofworld)

#### Inherited from

[UI](UI.md).[rotateOfWorld](UI.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:537](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L537)

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

[ILine](../interfaces/ILine.md).[skewOfWorld](../interfaces/ILine.md#skewofworld)

#### Inherited from

[UI](UI.md).[skewOfWorld](UI.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L541)

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

[ILine](../interfaces/ILine.md).[flip](../interfaces/ILine.md#flip)

#### Inherited from

[UI](UI.md).[flip](UI.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L545)

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

[ILine](../interfaces/ILine.md).[scaleResize](../interfaces/ILine.md#scaleresize)

#### Inherited from

[UI](UI.md).[scaleResize](UI.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:552](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L552)

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

[ILine](../interfaces/ILine.md).[__scaleResize](../interfaces/ILine.md#__scaleresize)

#### Inherited from

[UI](UI.md).[__scaleResize](UI.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:557](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L557)

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

[ILine](../interfaces/ILine.md).[resizeWidth](../interfaces/ILine.md#resizewidth)

#### Inherited from

[UI](UI.md).[resizeWidth](UI.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L560)

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

[ILine](../interfaces/ILine.md).[resizeHeight](../interfaces/ILine.md#resizeheight)

#### Inherited from

[UI](UI.md).[resizeHeight](UI.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L562)

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

[ILine](../interfaces/ILine.md).[hit](../interfaces/ILine.md#hit)

#### Inherited from

[UI](UI.md).[hit](UI.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L567)

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

[ILine](../interfaces/ILine.md).[__hitWorld](../interfaces/ILine.md#__hitworld)

#### Inherited from

[UI](UI.md).[__hitWorld](UI.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L569)

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

[ILine](../interfaces/ILine.md).[__hit](../interfaces/ILine.md#__hit)

#### Inherited from

[UI](UI.md).[__hit](UI.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L571)

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

[ILine](../interfaces/ILine.md).[__hitFill](../interfaces/ILine.md#__hitfill)

#### Inherited from

[UI](UI.md).[__hitFill](UI.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L573)

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

[ILine](../interfaces/ILine.md).[__hitStroke](../interfaces/ILine.md#__hitstroke)

#### Inherited from

[UI](UI.md).[__hitStroke](UI.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L575)

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

[ILine](../interfaces/ILine.md).[__hitPixel](../interfaces/ILine.md#__hitpixel)

#### Inherited from

[UI](UI.md).[__hitPixel](UI.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L577)

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

[ILine](../interfaces/ILine.md).[__drawHitPath](../interfaces/ILine.md#__drawhitpath)

#### Inherited from

[UI](UI.md).[__drawHitPath](UI.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L579)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateHitCanvas](../interfaces/ILine.md#__updatehitcanvas)

#### Inherited from

[UI](UI.md).[__updateHitCanvas](UI.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:581](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L581)

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

[ILine](../interfaces/ILine.md).[__render](../interfaces/ILine.md#__render)

#### Inherited from

[UI](UI.md).[__render](UI.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L588)

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

[ILine](../interfaces/ILine.md).[__drawFast](../interfaces/ILine.md#__drawfast)

#### Inherited from

[UI](UI.md).[__drawFast](UI.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L590)

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

[ILine](../interfaces/ILine.md).[__draw](../interfaces/ILine.md#__draw)

#### Inherited from

[UI](UI.md).[__draw](UI.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:592](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L592)

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

[ILine](../interfaces/ILine.md).[__clip](../interfaces/ILine.md#__clip)

#### Inherited from

[UI](UI.md).[__clip](UI.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L595)

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

[ILine](../interfaces/ILine.md).[__renderShape](../interfaces/ILine.md#__rendershape)

#### Inherited from

[UI](UI.md).[__renderShape](UI.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L597)

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

[ILine](../interfaces/ILine.md).[__drawShape](../interfaces/ILine.md#__drawshape)

#### Inherited from

[UI](UI.md).[__drawShape](UI.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L599)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateWorldOpacity](../interfaces/ILine.md#__updateworldopacity)

#### Inherited from

[UI](UI.md).[__updateWorldOpacity](UI.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L602)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateChange](../interfaces/ILine.md#__updatechange)

#### Inherited from

[UI](UI.md).[__updateChange](UI.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:604](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L604)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[getMotionPathData](../interfaces/ILine.md#getmotionpathdata)

#### Inherited from

[UI](UI.md).[getMotionPathData](UI.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:624](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L624)

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

[ILine](../interfaces/ILine.md).[getMotionPoint](../interfaces/ILine.md#getmotionpoint)

#### Inherited from

[UI](UI.md).[getMotionPoint](UI.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:628](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L628)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[ILine](../interfaces/ILine.md).[getMotionTotal](../interfaces/ILine.md#getmotiontotal)

#### Inherited from

[UI](UI.md).[getMotionTotal](UI.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:632](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L632)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateMotionPath](../interfaces/ILine.md#__updatemotionpath)

#### Inherited from

[UI](UI.md).[__updateMotionPath](UI.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L636)

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

[ILine](../interfaces/ILine.md).[__runAnimation](../interfaces/ILine.md#__runanimation)

#### Inherited from

[UI](UI.md).[__runAnimation](UI.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L642)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateSortChildren](../interfaces/ILine.md#__updatesortchildren)

#### Inherited from

[UI](UI.md).[__updateSortChildren](UI.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L647)

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

[ILine](../interfaces/ILine.md).[add](../interfaces/ILine.md#add)

#### Inherited from

[UI](UI.md).[add](UI.md#add)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L649)

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

[ILine](../interfaces/ILine.md).[remove](../interfaces/ILine.md#remove)

#### Inherited from

[UI](UI.md).[remove](UI.md#remove)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:651](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L651)

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

[ILine](../interfaces/ILine.md).[dropTo](../interfaces/ILine.md#dropto)

#### Inherited from

[UI](UI.md).[dropTo](UI.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:655](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L655)

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

[ILine](../interfaces/ILine.md).[on](../interfaces/ILine.md#on)

#### Inherited from

[UI](UI.md).[on](UI.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L664)

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

[ILine](../interfaces/ILine.md).[off](../interfaces/ILine.md#off)

#### Inherited from

[UI](UI.md).[off](UI.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L666)

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

[ILine](../interfaces/ILine.md).[on_](../interfaces/ILine.md#on_)

#### Inherited from

[UI](UI.md).[on_](UI.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L668)

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

[ILine](../interfaces/ILine.md).[off_](../interfaces/ILine.md#off_)

#### Inherited from

[UI](UI.md).[off_](UI.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L670)

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

[ILine](../interfaces/ILine.md).[once](../interfaces/ILine.md#once)

#### Inherited from

[UI](UI.md).[once](UI.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L672)

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

[ILine](../interfaces/ILine.md).[emit](../interfaces/ILine.md#emit)

#### Inherited from

[UI](UI.md).[emit](UI.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L674)

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

[ILine](../interfaces/ILine.md).[emitEvent](../interfaces/ILine.md#emitevent)

#### Inherited from

[UI](UI.md).[emitEvent](UI.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L676)

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

[ILine](../interfaces/ILine.md).[hasEvent](../interfaces/ILine.md#hasevent)

#### Inherited from

[UI](UI.md).[hasEvent](UI.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:678](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L678)

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

[UI](UI.md).[changeAttr](UI.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:682](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L682)

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

[UI](UI.md).[addAttr](UI.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:686](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L686)

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

[ILine](../interfaces/ILine.md).[__emitLifeEvent](../interfaces/ILine.md#__emitlifeevent)

#### Inherited from

[UI](UI.md).[__emitLifeEvent](UI.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:692](https://github.com/leaferjs/leafer/blob/95ff07e0d4def3c18ac6ce3fa51ec0d271dffaae/packages/display/src/Leaf.ts#L692)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updatePath](../interfaces/ILine.md#__updatepath)

#### Overrides

[UI](UI.md).[__updatePath](UI.md#__updatepath)

#### Defined in

[src/ui/packages/display/src/Line.ts:54](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/Line.ts#L54)

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

[ILine](../interfaces/ILine.md).[reset](../interfaces/ILine.md#reset)

#### Inherited from

[UI](UI.md).[reset](UI.md#reset)

#### Defined in

[src/ui/packages/display/src/UI.ts:409](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L409)

___

### set

▸ **set**(`data`, `_transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](../interfaces/IUIInputData.md) |
| `_transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[set](../interfaces/ILine.md#set)

#### Inherited from

[UI](UI.md).[set](UI.md#set)

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L414)

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

[ILine](../interfaces/ILine.md).[get](../interfaces/ILine.md#get)

#### Inherited from

[UI](UI.md).[get](UI.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L418)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[ILine](../interfaces/ILine.md).[createProxyData](../interfaces/ILine.md#createproxydata)

#### Inherited from

[UI](UI.md).[createProxyData](UI.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L422)

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

[ILine](../interfaces/ILine.md).[find](../interfaces/ILine.md#find)

#### Inherited from

[UI](UI.md).[find](UI.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:427](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L427)

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

[ILine](../interfaces/ILine.md).[findTag](../interfaces/ILine.md#findtag)

#### Inherited from

[UI](UI.md).[findTag](UI.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L429)

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

[ILine](../interfaces/ILine.md).[findOne](../interfaces/ILine.md#findone)

#### Inherited from

[UI](UI.md).[findOne](UI.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:431](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L431)

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

[ILine](../interfaces/ILine.md).[findId](../interfaces/ILine.md#findid)

#### Inherited from

[UI](UI.md).[findId](UI.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L433)

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

[ILine](../interfaces/ILine.md).[getPath](../interfaces/ILine.md#getpath)

#### Inherited from

[UI](UI.md).[getPath](UI.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L438)

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

[ILine](../interfaces/ILine.md).[getPathString](../interfaces/ILine.md#getpathstring)

#### Inherited from

[UI](UI.md).[getPathString](UI.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:445](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L445)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[load](../interfaces/ILine.md#load)

#### Inherited from

[UI](UI.md).[load](UI.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L450)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__onUpdateSize](../interfaces/ILine.md#__onupdatesize)

#### Inherited from

[UI](UI.md).[__onUpdateSize](UI.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L454)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[__updateRenderPath](../interfaces/ILine.md#__updaterenderpath)

#### Inherited from

[UI](UI.md).[__updateRenderPath](UI.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:461](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L461)

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

[ILine](../interfaces/ILine.md).[__drawRenderPath](../interfaces/ILine.md#__drawrenderpath)

#### Inherited from

[UI](UI.md).[__drawRenderPath](UI.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:469](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L469)

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

[ILine](../interfaces/ILine.md).[__drawPath](../interfaces/ILine.md#__drawpath)

#### Inherited from

[UI](UI.md).[__drawPath](UI.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:474](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L474)

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

[ILine](../interfaces/ILine.md).[__drawPathByData](../interfaces/ILine.md#__drawpathbydata)

#### Inherited from

[UI](UI.md).[__drawPathByData](UI.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:479](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L479)

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

[ILine](../interfaces/ILine.md).[__drawPathByBox](../interfaces/ILine.md#__drawpathbybox)

#### Inherited from

[UI](UI.md).[__drawPathByBox](UI.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L483)

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

[ILine](../interfaces/ILine.md).[drawImagePlaceholder](../interfaces/ILine.md#drawimageplaceholder)

#### Inherited from

[UI](UI.md).[drawImagePlaceholder](UI.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L491)

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

[ILine](../interfaces/ILine.md).[animate](../interfaces/ILine.md#animate)

#### Inherited from

[UI](UI.md).[animate](UI.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:497](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L497)

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

[ILine](../interfaces/ILine.md).[killAnimate](../interfaces/ILine.md#killanimate)

#### Inherited from

[UI](UI.md).[killAnimate](UI.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:502](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L502)

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

[ILine](../interfaces/ILine.md).[export](../interfaces/ILine.md#export)

#### Inherited from

[UI](UI.md).[export](UI.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L508)

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

[ILine](../interfaces/ILine.md).[syncExport](../interfaces/ILine.md#syncexport)

#### Inherited from

[UI](UI.md).[syncExport](UI.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L512)

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

[ILine](../interfaces/ILine.md).[clone](../interfaces/ILine.md#clone)

#### Inherited from

[UI](UI.md).[clone](UI.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:516](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L516)

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

[UI](UI.md).[one](UI.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:523](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L523)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[UI](UI.md).[registerUI](UI.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:527](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L527)

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

[UI](UI.md).[registerData](UI.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:531](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L531)

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

[UI](UI.md).[setEditConfig](UI.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:538](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L538)

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

[UI](UI.md).[setEditOuter](UI.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L540)

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

[UI](UI.md).[setEditInner](UI.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:542](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L542)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[ILine](../interfaces/ILine.md).[destroy](../interfaces/ILine.md#destroy)

#### Inherited from

[UI](UI.md).[destroy](UI.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:545](https://github.com/leaferjs/leafer-ui/blob/4f34682d75d50ed9144f891fb4da145a8d369069/packages/display/src/UI.ts#L545)
