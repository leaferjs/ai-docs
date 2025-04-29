# Class: EditPoint

## Hierarchy

- [`Box`](Box.md)

  ↳ **`EditPoint`**

## Implements

- [`IEditPoint`](../interfaces/IEditPoint.md)

## Table of contents

### Constructors

- [constructor](EditPoint.md#constructor)

### Properties

- [direction](EditPoint.md#direction)
- [pointType](EditPoint.md#pointtype)
- [innerId](EditPoint.md#innerid)
- [syncEventer](EditPoint.md#synceventer)
- [lockNormalStyle](EditPoint.md#locknormalstyle)
- [\_\_layout](EditPoint.md#__layout)
- [\_\_world](EditPoint.md#__world)
- [\_\_local](EditPoint.md#__local)
- [\_\_nowWorld](EditPoint.md#__nowworld)
- [\_\_cameraWorld](EditPoint.md#__cameraworld)
- [\_\_worldOpacity](EditPoint.md#__worldopacity)
- [\_\_level](EditPoint.md#__level)
- [\_\_tempNumber](EditPoint.md#__tempnumber)
- [\_\_hasAutoLayout](EditPoint.md#__hasautolayout)
- [\_\_hasMask](EditPoint.md#__hasmask)
- [\_\_hasEraser](EditPoint.md#__haseraser)
- [\_\_hitCanvas](EditPoint.md#__hitcanvas)
- [\_\_captureMap](EditPoint.md#__capturemap)
- [\_\_bubbleMap](EditPoint.md#__bubblemap)
- [destroyed](EditPoint.md#destroyed)
- [\_\_](EditPoint.md#__)
- [width](EditPoint.md#width)
- [height](EditPoint.md#height)
- [resizeChildren](EditPoint.md#resizechildren)
- [textBox](EditPoint.md#textbox)
- [overflow](EditPoint.md#overflow)
- [isOverflow](EditPoint.md#isoverflow)
- [children](EditPoint.md#children)
- [proxyData](EditPoint.md#proxydata)
- [\_\_proxyData](EditPoint.md#__proxydata)
- [leafer](EditPoint.md#leafer)
- [parent](EditPoint.md#parent)
- [zoomLayer](EditPoint.md#zoomlayer)
- [id](EditPoint.md#id)
- [name](EditPoint.md#name)
- [className](EditPoint.md#classname)
- [blendMode](EditPoint.md#blendmode)
- [opacity](EditPoint.md#opacity)
- [visible](EditPoint.md#visible)
- [locked](EditPoint.md#locked)
- [dim](EditPoint.md#dim)
- [dimskip](EditPoint.md#dimskip)
- [zIndex](EditPoint.md#zindex)
- [mask](EditPoint.md#mask)
- [eraser](EditPoint.md#eraser)
- [x](EditPoint.md#x)
- [y](EditPoint.md#y)
- [scaleX](EditPoint.md#scalex)
- [scaleY](EditPoint.md#scaley)
- [rotation](EditPoint.md#rotation)
- [skewX](EditPoint.md#skewx)
- [skewY](EditPoint.md#skewy)
- [offsetX](EditPoint.md#offsetx)
- [offsetY](EditPoint.md#offsety)
- [scrollX](EditPoint.md#scrollx)
- [scrollY](EditPoint.md#scrolly)
- [origin](EditPoint.md#origin)
- [around](EditPoint.md#around)
- [lazy](EditPoint.md#lazy)
- [pixelRatio](EditPoint.md#pixelratio)
- [path](EditPoint.md#path)
- [windingRule](EditPoint.md#windingrule)
- [closed](EditPoint.md#closed)
- [flow](EditPoint.md#flow)
- [padding](EditPoint.md#padding)
- [gap](EditPoint.md#gap)
- [flowAlign](EditPoint.md#flowalign)
- [flowWrap](EditPoint.md#flowwrap)
- [itemBox](EditPoint.md#itembox)
- [inFlow](EditPoint.md#inflow)
- [autoWidth](EditPoint.md#autowidth)
- [autoHeight](EditPoint.md#autoheight)
- [lockRatio](EditPoint.md#lockratio)
- [autoBox](EditPoint.md#autobox)
- [widthRange](EditPoint.md#widthrange)
- [heightRange](EditPoint.md#heightrange)
- [draggable](EditPoint.md#draggable)
- [dragBounds](EditPoint.md#dragbounds)
- [editable](EditPoint.md#editable)
- [hittable](EditPoint.md#hittable)
- [hitFill](EditPoint.md#hitfill)
- [hitStroke](EditPoint.md#hitstroke)
- [hitBox](EditPoint.md#hitbox)
- [hitChildren](EditPoint.md#hitchildren)
- [hitSelf](EditPoint.md#hitself)
- [hitRadius](EditPoint.md#hitradius)
- [cursor](EditPoint.md#cursor)
- [fill](EditPoint.md#fill)
- [stroke](EditPoint.md#stroke)
- [strokeAlign](EditPoint.md#strokealign)
- [strokeWidth](EditPoint.md#strokewidth)
- [strokeWidthFixed](EditPoint.md#strokewidthfixed)
- [strokeCap](EditPoint.md#strokecap)
- [strokeJoin](EditPoint.md#strokejoin)
- [dashPattern](EditPoint.md#dashpattern)
- [dashOffset](EditPoint.md#dashoffset)
- [miterLimit](EditPoint.md#miterlimit)
- [startArrow](EditPoint.md#startarrow)
- [endArrow](EditPoint.md#endarrow)
- [cornerRadius](EditPoint.md#cornerradius)
- [cornerSmoothing](EditPoint.md#cornersmoothing)
- [shadow](EditPoint.md#shadow)
- [innerShadow](EditPoint.md#innershadow)
- [blur](EditPoint.md#blur)
- [backgroundBlur](EditPoint.md#backgroundblur)
- [grayscale](EditPoint.md#grayscale)
- [filter](EditPoint.md#filter)
- [animation](EditPoint.md#animation)
- [animationOut](EditPoint.md#animationout)
- [transition](EditPoint.md#transition)
- [transitionOut](EditPoint.md#transitionout)
- [motionPath](EditPoint.md#motionpath)
- [motionPrecision](EditPoint.md#motionprecision)
- [motion](EditPoint.md#motion)
- [motionRotation](EditPoint.md#motionrotation)
- [states](EditPoint.md#states)
- [state](EditPoint.md#state)
- [selected](EditPoint.md#selected)
- [disabled](EditPoint.md#disabled)
- [normalStyle](EditPoint.md#normalstyle)
- [hoverStyle](EditPoint.md#hoverstyle)
- [pressStyle](EditPoint.md#pressstyle)
- [focusStyle](EditPoint.md#focusstyle)
- [selectedStyle](EditPoint.md#selectedstyle)
- [disabledStyle](EditPoint.md#disabledstyle)
- [placeholderStyle](EditPoint.md#placeholderstyle)
- [button](EditPoint.md#button)
- [data](EditPoint.md#data)
- [\_\_box](EditPoint.md#__box)
- [\_\_animate](EditPoint.md#__animate)
- [editConfig](EditPoint.md#editconfig)
- [editOuter](EditPoint.md#editouter)
- [editInner](EditPoint.md#editinner)

### Accessors

- [tag](EditPoint.md#tag)
- [innerName](EditPoint.md#innername)
- [\_\_DataProcessor](EditPoint.md#__dataprocessor)
- [\_\_LayoutProcessor](EditPoint.md#__layoutprocessor)
- [leaferIsCreated](EditPoint.md#leaferiscreated)
- [leaferIsReady](EditPoint.md#leaferisready)
- [isLeafer](EditPoint.md#isleafer)
- [\_\_localMatrix](EditPoint.md#__localmatrix)
- [\_\_localBoxBounds](EditPoint.md#__localboxbounds)
- [worldTransform](EditPoint.md#worldtransform)
- [localTransform](EditPoint.md#localtransform)
- [boxBounds](EditPoint.md#boxbounds)
- [renderBounds](EditPoint.md#renderbounds)
- [worldBoxBounds](EditPoint.md#worldboxbounds)
- [worldStrokeBounds](EditPoint.md#worldstrokebounds)
- [worldRenderBounds](EditPoint.md#worldrenderbounds)
- [worldOpacity](EditPoint.md#worldopacity)
- [\_\_worldFlipped](EditPoint.md#__worldflipped)
- [\_\_onlyHitMask](EditPoint.md#__onlyhitmask)
- [\_\_ignoreHitWorld](EditPoint.md#__ignorehitworld)
- [\_\_inLazyBounds](EditPoint.md#__inlazybounds)
- [pathInputed](EditPoint.md#pathinputed)
- [event](EditPoint.md#event)
- [\_\_tag](EditPoint.md#__tag)
- [isBranchLeaf](EditPoint.md#isbranchleaf)
- [isBranch](EditPoint.md#isbranch)
- [app](EditPoint.md#app)
- [isFrame](EditPoint.md#isframe)
- [scale](EditPoint.md#scale)
- [pen](EditPoint.md#pen)

### Methods

- [resetCustom](EditPoint.md#resetcustom)
- [waitParent](EditPoint.md#waitparent)
- [waitLeafer](EditPoint.md#waitleafer)
- [nextRender](EditPoint.md#nextrender)
- [removeNextRender](EditPoint.md#removenextrender)
- [\_\_bindLeafer](EditPoint.md#__bindleafer)
- [setAttr](EditPoint.md#setattr)
- [getAttr](EditPoint.md#getattr)
- [getComputedAttr](EditPoint.md#getcomputedattr)
- [toString](EditPoint.md#tostring)
- [toSVG](EditPoint.md#tosvg)
- [\_\_SVG](EditPoint.md#__svg)
- [toHTML](EditPoint.md#tohtml)
- [\_\_setAttr](EditPoint.md#__setattr)
- [\_\_getAttr](EditPoint.md#__getattr)
- [setProxyAttr](EditPoint.md#setproxyattr)
- [getProxyAttr](EditPoint.md#getproxyattr)
- [focus](EditPoint.md#focus)
- [updateState](EditPoint.md#updatestate)
- [updateLayout](EditPoint.md#updatelayout)
- [forceUpdate](EditPoint.md#forceupdate)
- [forceRender](EditPoint.md#forcerender)
- [\_\_extraUpdate](EditPoint.md#__extraupdate)
- [\_\_updateWorldMatrix](EditPoint.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](EditPoint.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](EditPoint.md#__updateworldbounds)
- [\_\_updateLocalBounds](EditPoint.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](EditPoint.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](EditPoint.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](EditPoint.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](EditPoint.md#__updatecontentbounds)
- [\_\_updateAutoLayout](EditPoint.md#__updateautolayout)
- [\_\_updateFlowLayout](EditPoint.md#__updateflowlayout)
- [\_\_updateNaturalSize](EditPoint.md#__updatenaturalsize)
- [\_\_updateEraser](EditPoint.md#__updateeraser)
- [\_\_renderEraser](EditPoint.md#__rendereraser)
- [\_\_updateMask](EditPoint.md#__updatemask)
- [\_\_renderMask](EditPoint.md#__rendermask)
- [\_\_getNowWorld](EditPoint.md#__getnowworld)
- [getTransform](EditPoint.md#gettransform)
- [getBounds](EditPoint.md#getbounds)
- [getLayoutBounds](EditPoint.md#getlayoutbounds)
- [getLayoutPoints](EditPoint.md#getlayoutpoints)
- [getWorldBounds](EditPoint.md#getworldbounds)
- [worldToLocal](EditPoint.md#worldtolocal)
- [localToWorld](EditPoint.md#localtoworld)
- [worldToInner](EditPoint.md#worldtoinner)
- [innerToWorld](EditPoint.md#innertoworld)
- [getBoxPoint](EditPoint.md#getboxpoint)
- [getBoxPointByInner](EditPoint.md#getboxpointbyinner)
- [getInnerPoint](EditPoint.md#getinnerpoint)
- [getInnerPointByBox](EditPoint.md#getinnerpointbybox)
- [getInnerPointByLocal](EditPoint.md#getinnerpointbylocal)
- [getLocalPoint](EditPoint.md#getlocalpoint)
- [getLocalPointByInner](EditPoint.md#getlocalpointbyinner)
- [getPagePoint](EditPoint.md#getpagepoint)
- [getWorldPoint](EditPoint.md#getworldpoint)
- [getWorldPointByBox](EditPoint.md#getworldpointbybox)
- [getWorldPointByLocal](EditPoint.md#getworldpointbylocal)
- [getWorldPointByPage](EditPoint.md#getworldpointbypage)
- [setTransform](EditPoint.md#settransform)
- [transform](EditPoint.md#transform)
- [move](EditPoint.md#move)
- [moveInner](EditPoint.md#moveinner)
- [scaleOf](EditPoint.md#scaleof)
- [rotateOf](EditPoint.md#rotateof)
- [skewOf](EditPoint.md#skewof)
- [transformWorld](EditPoint.md#transformworld)
- [moveWorld](EditPoint.md#moveworld)
- [scaleOfWorld](EditPoint.md#scaleofworld)
- [rotateOfWorld](EditPoint.md#rotateofworld)
- [skewOfWorld](EditPoint.md#skewofworld)
- [flip](EditPoint.md#flip)
- [scaleResize](EditPoint.md#scaleresize)
- [\_\_scaleResize](EditPoint.md#__scaleresize)
- [resizeWidth](EditPoint.md#resizewidth)
- [resizeHeight](EditPoint.md#resizeheight)
- [\_\_hitWorld](EditPoint.md#__hitworld)
- [\_\_hit](EditPoint.md#__hit)
- [\_\_hitFill](EditPoint.md#__hitfill)
- [\_\_hitStroke](EditPoint.md#__hitstroke)
- [\_\_hitPixel](EditPoint.md#__hitpixel)
- [\_\_drawHitPath](EditPoint.md#__drawhitpath)
- [\_\_updateHitCanvas](EditPoint.md#__updatehitcanvas)
- [\_\_drawFast](EditPoint.md#__drawfast)
- [\_\_draw](EditPoint.md#__draw)
- [\_\_clip](EditPoint.md#__clip)
- [\_\_renderShape](EditPoint.md#__rendershape)
- [\_\_updateWorldOpacity](EditPoint.md#__updateworldopacity)
- [\_\_updatePath](EditPoint.md#__updatepath)
- [getMotionPathData](EditPoint.md#getmotionpathdata)
- [getMotionPoint](EditPoint.md#getmotionpoint)
- [getMotionTotal](EditPoint.md#getmotiontotal)
- [\_\_updateMotionPath](EditPoint.md#__updatemotionpath)
- [\_\_runAnimation](EditPoint.md#__runanimation)
- [\_\_updateSortChildren](EditPoint.md#__updatesortchildren)
- [dropTo](EditPoint.md#dropto)
- [on](EditPoint.md#on)
- [off](EditPoint.md#off)
- [on\_](EditPoint.md#on_)
- [off\_](EditPoint.md#off_)
- [once](EditPoint.md#once)
- [emit](EditPoint.md#emit)
- [emitEvent](EditPoint.md#emitevent)
- [hasEvent](EditPoint.md#hasevent)
- [changeAttr](EditPoint.md#changeattr)
- [addAttr](EditPoint.md#addattr)
- [\_\_emitLifeEvent](EditPoint.md#__emitlifeevent)
- [\_\_updateStrokeSpread](EditPoint.md#__updatestrokespread)
- [\_\_updateRectRenderSpread](EditPoint.md#__updaterectrenderspread)
- [\_\_updateRenderSpread](EditPoint.md#__updaterenderspread)
- [\_\_updateRectBoxBounds](EditPoint.md#__updaterectboxbounds)
- [\_\_updateBoxBounds](EditPoint.md#__updateboxbounds)
- [\_\_updateStrokeBounds](EditPoint.md#__updatestrokebounds)
- [\_\_updateRenderBounds](EditPoint.md#__updaterenderbounds)
- [\_\_updateRectRenderBounds](EditPoint.md#__updaterectrenderbounds)
- [\_\_updateRectChange](EditPoint.md#__updaterectchange)
- [\_\_updateChange](EditPoint.md#__updatechange)
- [\_\_renderRect](EditPoint.md#__renderrect)
- [\_\_renderGroup](EditPoint.md#__rendergroup)
- [\_\_render](EditPoint.md#__render)
- [\_\_drawContent](EditPoint.md#__drawcontent)
- [reset](EditPoint.md#reset)
- [\_\_setBranch](EditPoint.md#__setbranch)
- [set](EditPoint.md#set)
- [toJSON](EditPoint.md#tojson)
- [pick](EditPoint.md#pick)
- [addAt](EditPoint.md#addat)
- [addAfter](EditPoint.md#addafter)
- [addBefore](EditPoint.md#addbefore)
- [add](EditPoint.md#add)
- [addMany](EditPoint.md#addmany)
- [remove](EditPoint.md#remove)
- [removeAll](EditPoint.md#removeall)
- [clear](EditPoint.md#clear)
- [get](EditPoint.md#get)
- [createProxyData](EditPoint.md#createproxydata)
- [find](EditPoint.md#find)
- [findTag](EditPoint.md#findtag)
- [findOne](EditPoint.md#findone)
- [findId](EditPoint.md#findid)
- [getPath](EditPoint.md#getpath)
- [getPathString](EditPoint.md#getpathstring)
- [load](EditPoint.md#load)
- [\_\_onUpdateSize](EditPoint.md#__onupdatesize)
- [\_\_updateRenderPath](EditPoint.md#__updaterenderpath)
- [\_\_drawRenderPath](EditPoint.md#__drawrenderpath)
- [\_\_drawPath](EditPoint.md#__drawpath)
- [\_\_drawPathByData](EditPoint.md#__drawpathbydata)
- [\_\_drawPathByBox](EditPoint.md#__drawpathbybox)
- [animate](EditPoint.md#animate)
- [killAnimate](EditPoint.md#killanimate)
- [export](EditPoint.md#export)
- [syncExport](EditPoint.md#syncexport)
- [clone](EditPoint.md#clone)
- [one](EditPoint.md#one)
- [registerUI](EditPoint.md#registerui)
- [registerData](EditPoint.md#registerdata)
- [setEditConfig](EditPoint.md#seteditconfig)
- [setEditOuter](EditPoint.md#seteditouter)
- [setEditInner](EditPoint.md#seteditinner)
- [destroy](EditPoint.md#destroy)

## Constructors

### constructor

• **new EditPoint**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBoxInputData`](../interfaces/IBoxInputData.md) |

#### Inherited from

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L44)

## Properties

### direction

• **direction**: [`Direction9`](../enums/Direction9.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[direction](../interfaces/IEditPoint.md#direction)

#### Defined in

[in/packages/editor/src/display/EditPoint.ts:7](https://github.com/leaferjs/leafer-in/blob/21ad900/packages/editor/src/display/EditPoint.ts#L7)

___

### pointType

• **pointType**: [`IEditPointType`](../modules.md#ieditpointtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pointType](../interfaces/IEditPoint.md#pointtype)

#### Defined in

[in/packages/editor/src/display/EditPoint.ts:8](https://github.com/leaferjs/leafer-in/blob/21ad900/packages/editor/src/display/EditPoint.ts#L8)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[innerId](../interfaces/IEditPoint.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[syncEventer](../interfaces/IEditPoint.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lockNormalStyle](../interfaces/IEditPoint.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__layout](../interfaces/IEditPoint.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__world](../interfaces/IEditPoint.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__local](../interfaces/IEditPoint.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__nowWorld](../interfaces/IEditPoint.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__cameraWorld](../interfaces/IEditPoint.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__worldOpacity](../interfaces/IEditPoint.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__level](../interfaces/IEditPoint.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__tempNumber](../interfaces/IEditPoint.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasAutoLayout](../interfaces/IEditPoint.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasMask](../interfaces/IEditPoint.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasEraser](../interfaces/IEditPoint.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hitCanvas](../interfaces/IEditPoint.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__captureMap](../interfaces/IEditPoint.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__bubbleMap](../interfaces/IEditPoint.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L97)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[destroyed](../interfaces/IEditPoint.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L102)

___

### \_\_

• **\_\_**: [`IBoxData`](../interfaces/IBoxData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__](../interfaces/IEditPoint.md#__)

#### Inherited from

[Box](Box.md).[__](Box.md#__)

#### Defined in

[ui/packages/display/src/Box.ts:24](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L24)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[width](../interfaces/IEditPoint.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[ui/packages/display/src/Box.ts:28](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L28)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[height](../interfaces/IEditPoint.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[ui/packages/display/src/Box.ts:31](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L31)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[resizeChildren](../interfaces/IEditPoint.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[ui/packages/display/src/Box.ts:34](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L34)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[textBox](../interfaces/IEditPoint.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[ui/packages/display/src/Box.ts:37](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L37)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[overflow](../interfaces/IEditPoint.md#overflow)

#### Inherited from

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[ui/packages/display/src/Box.ts:40](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L40)

___

### isOverflow

• **isOverflow**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isOverflow](../interfaces/IEditPoint.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[ui/packages/display/src/Box.ts:42](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L42)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[children](../interfaces/IEditPoint.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L28)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[proxyData](../interfaces/IEditPoint.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__proxyData](../interfaces/IEditPoint.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[leafer](../interfaces/IEditPoint.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[parent](../interfaces/IEditPoint.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[zoomLayer](../interfaces/IEditPoint.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[id](../interfaces/IEditPoint.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[name](../interfaces/IEditPoint.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[className](../interfaces/IEditPoint.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[blendMode](../interfaces/IEditPoint.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[opacity](../interfaces/IEditPoint.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[visible](../interfaces/IEditPoint.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[locked](../interfaces/IEditPoint.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dim](../interfaces/IEditPoint.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dimskip](../interfaces/IEditPoint.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[zIndex](../interfaces/IEditPoint.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[mask](../interfaces/IEditPoint.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[eraser](../interfaces/IEditPoint.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[x](../interfaces/IEditPoint.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[y](../interfaces/IEditPoint.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scaleX](../interfaces/IEditPoint.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scaleY](../interfaces/IEditPoint.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[rotation](../interfaces/IEditPoint.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[skewX](../interfaces/IEditPoint.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[skewY](../interfaces/IEditPoint.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[offsetX](../interfaces/IEditPoint.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[offsetY](../interfaces/IEditPoint.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollX](../interfaces/IEditPoint.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollY](../interfaces/IEditPoint.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[origin](../interfaces/IEditPoint.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[around](../interfaces/IEditPoint.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lazy](../interfaces/IEditPoint.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pixelRatio](../interfaces/IEditPoint.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[path](../interfaces/IEditPoint.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[windingRule](../interfaces/IEditPoint.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[closed](../interfaces/IEditPoint.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flow](../interfaces/IEditPoint.md#flow)

#### Inherited from

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[padding](../interfaces/IEditPoint.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[gap](../interfaces/IEditPoint.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flowAlign](../interfaces/IEditPoint.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flowWrap](../interfaces/IEditPoint.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[itemBox](../interfaces/IEditPoint.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[inFlow](../interfaces/IEditPoint.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoWidth](../interfaces/IEditPoint.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoHeight](../interfaces/IEditPoint.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lockRatio](../interfaces/IEditPoint.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoBox](../interfaces/IEditPoint.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[widthRange](../interfaces/IEditPoint.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[heightRange](../interfaces/IEditPoint.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[draggable](../interfaces/IEditPoint.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dragBounds](../interfaces/IEditPoint.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editable](../interfaces/IEditPoint.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hittable](../interfaces/IEditPoint.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitFill](../interfaces/IEditPoint.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitStroke](../interfaces/IEditPoint.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitBox](../interfaces/IEditPoint.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitChildren](../interfaces/IEditPoint.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitSelf](../interfaces/IEditPoint.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitRadius](../interfaces/IEditPoint.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cursor](../interfaces/IEditPoint.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[fill](../interfaces/IEditPoint.md#fill)

#### Inherited from

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[stroke](../interfaces/IEditPoint.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeAlign](../interfaces/IEditPoint.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeWidth](../interfaces/IEditPoint.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeWidthFixed](../interfaces/IEditPoint.md#strokewidthfixed)

#### Inherited from

[Box](Box.md).[strokeWidthFixed](Box.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeCap](../interfaces/IEditPoint.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeJoin](../interfaces/IEditPoint.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dashPattern](../interfaces/IEditPoint.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dashOffset](../interfaces/IEditPoint.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[miterLimit](../interfaces/IEditPoint.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[startArrow](../interfaces/IEditPoint.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[endArrow](../interfaces/IEditPoint.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cornerRadius](../interfaces/IEditPoint.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cornerSmoothing](../interfaces/IEditPoint.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[shadow](../interfaces/IEditPoint.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[innerShadow](../interfaces/IEditPoint.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[blur](../interfaces/IEditPoint.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[backgroundBlur](../interfaces/IEditPoint.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[grayscale](../interfaces/IEditPoint.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[filter](../interfaces/IEditPoint.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[animation](../interfaces/IEditPoint.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[animationOut](../interfaces/IEditPoint.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[transition](../interfaces/IEditPoint.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[transitionOut](../interfaces/IEditPoint.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionPath](../interfaces/IEditPoint.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionPrecision](../interfaces/IEditPoint.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motion](../interfaces/IEditPoint.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionRotation](../interfaces/IEditPoint.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[states](../interfaces/IEditPoint.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[state](../interfaces/IEditPoint.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[selected](../interfaces/IEditPoint.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[disabled](../interfaces/IEditPoint.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[normalStyle](../interfaces/IEditPoint.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hoverStyle](../interfaces/IEditPoint.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pressStyle](../interfaces/IEditPoint.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[focusStyle](../interfaces/IEditPoint.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[selectedStyle](../interfaces/IEditPoint.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[disabledStyle](../interfaces/IEditPoint.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[placeholderStyle](../interfaces/IEditPoint.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L349)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[button](../interfaces/IEditPoint.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L352)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[data](../interfaces/IEditPoint.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L357)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__box](../interfaces/IEditPoint.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L363)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__animate](../interfaces/IEditPoint.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L364)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editConfig](../interfaces/IEditPoint.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L376)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editOuter](../interfaces/IEditPoint.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:378](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L378)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editInner](../interfaces/IEditPoint.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L380)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[tag](../interfaces/IEditPoint.md#tag)

#### Inherited from

Box.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[tag](../interfaces/IEditPoint.md#tag)

#### Inherited from

Box.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[innerName](../interfaces/IEditPoint.md#innername)

#### Inherited from

Box.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__DataProcessor](../interfaces/IEditPoint.md#__dataprocessor)

#### Inherited from

Box.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__LayoutProcessor](../interfaces/IEditPoint.md#__layoutprocessor)

#### Inherited from

Box.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[leaferIsCreated](../interfaces/IEditPoint.md#leaferiscreated)

#### Inherited from

Box.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[leaferIsReady](../interfaces/IEditPoint.md#leaferisready)

#### Inherited from

Box.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isLeafer](../interfaces/IEditPoint.md#isleafer)

#### Inherited from

Box.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L42)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__localMatrix](../interfaces/IEditPoint.md#__localmatrix)

#### Inherited from

Box.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__localBoxBounds](../interfaces/IEditPoint.md#__localboxbounds)

#### Inherited from

Box.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[worldTransform](../interfaces/IEditPoint.md#worldtransform)

#### Inherited from

Box.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[localTransform](../interfaces/IEditPoint.md#localtransform)

#### Inherited from

Box.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[boxBounds](../interfaces/IEditPoint.md#boxbounds)

#### Inherited from

Box.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[renderBounds](../interfaces/IEditPoint.md#renderbounds)

#### Inherited from

Box.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[worldBoxBounds](../interfaces/IEditPoint.md#worldboxbounds)

#### Inherited from

Box.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[worldStrokeBounds](../interfaces/IEditPoint.md#worldstrokebounds)

#### Inherited from

Box.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[worldRenderBounds](../interfaces/IEditPoint.md#worldrenderbounds)

#### Inherited from

Box.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[worldOpacity](../interfaces/IEditPoint.md#worldopacity)

#### Inherited from

Box.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__worldFlipped](../interfaces/IEditPoint.md#__worldflipped)

#### Inherited from

Box.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__onlyHitMask](../interfaces/IEditPoint.md#__onlyhitmask)

#### Inherited from

Box.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__ignoreHitWorld](../interfaces/IEditPoint.md#__ignorehitworld)

#### Inherited from

Box.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__inLazyBounds](../interfaces/IEditPoint.md#__inlazybounds)

#### Inherited from

Box.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pathInputed](../interfaces/IEditPoint.md#pathinputed)

#### Inherited from

Box.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L91)

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

[IEditPoint](../interfaces/IEditPoint.md).[event](../interfaces/IEditPoint.md#event)

#### Inherited from

Box.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__tag](../interfaces/IEditPoint.md#__tag)

#### Inherited from

Box.\_\_tag

#### Defined in

[ui/packages/display/src/Box.ts:19](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L19)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isBranchLeaf](../interfaces/IEditPoint.md#isbranchleaf)

#### Inherited from

Box.isBranchLeaf

#### Defined in

[ui/packages/display/src/Box.ts:21](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L21)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isBranch](../interfaces/IEditPoint.md#isbranch)

#### Inherited from

Box.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[app](../interfaces/IEditPoint.md#app)

#### Inherited from

Box.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isFrame](../interfaces/IEditPoint.md#isframe)

#### Inherited from

Box.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scale](../interfaces/IEditPoint.md#scale)

#### Inherited from

Box.scale

#### Defined in

[ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L361)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scale](../interfaces/IEditPoint.md#scale)

#### Inherited from

Box.scale

#### Defined in

[ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L360)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pen](../interfaces/IEditPoint.md#pen)

#### Inherited from

Box.pen

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L366)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[resetCustom](../interfaces/IEditPoint.md#resetcustom)

#### Inherited from

[Box](Box.md).[resetCustom](Box.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:132](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L132)

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

[IEditPoint](../interfaces/IEditPoint.md).[waitParent](../interfaces/IEditPoint.md#waitparent)

#### Inherited from

[Box](Box.md).[waitParent](Box.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:138](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L138)

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

[IEditPoint](../interfaces/IEditPoint.md).[waitLeafer](../interfaces/IEditPoint.md#waitleafer)

#### Inherited from

[Box](Box.md).[waitLeafer](Box.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:143](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L143)

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

[IEditPoint](../interfaces/IEditPoint.md).[nextRender](../interfaces/IEditPoint.md#nextrender)

#### Inherited from

[Box](Box.md).[nextRender](Box.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L148)

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

[IEditPoint](../interfaces/IEditPoint.md).[removeNextRender](../interfaces/IEditPoint.md#removenextrender)

#### Inherited from

[Box](Box.md).[removeNextRender](Box.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L152)

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

[IEditPoint](../interfaces/IEditPoint.md).[__bindLeafer](../interfaces/IEditPoint.md#__bindleafer)

#### Inherited from

[Box](Box.md).[__bindLeafer](Box.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:156](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L156)

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

[IEditPoint](../interfaces/IEditPoint.md).[setAttr](../interfaces/IEditPoint.md#setattr)

#### Inherited from

[Box](Box.md).[setAttr](Box.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:185](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L185)

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

[IEditPoint](../interfaces/IEditPoint.md).[getAttr](../interfaces/IEditPoint.md#getattr)

#### Inherited from

[Box](Box.md).[getAttr](Box.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:186](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L186)

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

[IEditPoint](../interfaces/IEditPoint.md).[getComputedAttr](../interfaces/IEditPoint.md#getcomputedattr)

#### Inherited from

[Box](Box.md).[getComputedAttr](Box.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:188](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L188)

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

[IEditPoint](../interfaces/IEditPoint.md).[toString](../interfaces/IEditPoint.md#tostring)

#### Inherited from

[Box](Box.md).[toString](Box.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L195)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[toSVG](../interfaces/IEditPoint.md#tosvg)

#### Inherited from

[Box](Box.md).[toSVG](Box.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L199)

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

[IEditPoint](../interfaces/IEditPoint.md).[__SVG](../interfaces/IEditPoint.md#__svg)

#### Inherited from

[Box](Box.md).[__SVG](Box.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:201](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L201)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[toHTML](../interfaces/IEditPoint.md#tohtml)

#### Inherited from

[Box](Box.md).[toHTML](Box.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:203](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L203)

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

[IEditPoint](../interfaces/IEditPoint.md).[__setAttr](../interfaces/IEditPoint.md#__setattr)

#### Inherited from

[Box](Box.md).[__setAttr](Box.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:207](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L207)

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

[IEditPoint](../interfaces/IEditPoint.md).[__getAttr](../interfaces/IEditPoint.md#__getattr)

#### Inherited from

[Box](Box.md).[__getAttr](Box.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:209](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L209)

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

[IEditPoint](../interfaces/IEditPoint.md).[setProxyAttr](../interfaces/IEditPoint.md#setproxyattr)

#### Inherited from

[Box](Box.md).[setProxyAttr](Box.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:211](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L211)

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

[IEditPoint](../interfaces/IEditPoint.md).[getProxyAttr](../interfaces/IEditPoint.md#getproxyattr)

#### Inherited from

[Box](Box.md).[getProxyAttr](Box.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:213](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L213)

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

[IEditPoint](../interfaces/IEditPoint.md).[focus](../interfaces/IEditPoint.md#focus)

#### Inherited from

[Box](Box.md).[focus](Box.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:233](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L233)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[updateState](../interfaces/IEditPoint.md#updatestate)

#### Inherited from

[Box](Box.md).[updateState](Box.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:235](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L235)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[updateLayout](../interfaces/IEditPoint.md#updatelayout)

#### Inherited from

[Box](Box.md).[updateLayout](Box.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L240)

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

[IEditPoint](../interfaces/IEditPoint.md).[forceUpdate](../interfaces/IEditPoint.md#forceupdate)

#### Inherited from

[Box](Box.md).[forceUpdate](Box.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L244)

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

[IEditPoint](../interfaces/IEditPoint.md).[forceRender](../interfaces/IEditPoint.md#forcerender)

#### Inherited from

[Box](Box.md).[forceRender](Box.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:252](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L252)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__extraUpdate](../interfaces/IEditPoint.md#__extraupdate)

#### Inherited from

[Box](Box.md).[__extraUpdate](Box.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:256](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L256)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateWorldMatrix](../interfaces/IEditPoint.md#__updateworldmatrix)

#### Inherited from

[Box](Box.md).[__updateWorldMatrix](Box.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:262](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L262)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateLocalMatrix](../interfaces/IEditPoint.md#__updatelocalmatrix)

#### Inherited from

[Box](Box.md).[__updateLocalMatrix](Box.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:264](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L264)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateWorldBounds](../interfaces/IEditPoint.md#__updateworldbounds)

#### Inherited from

[Box](Box.md).[__updateWorldBounds](Box.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:270](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L270)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateLocalBounds](../interfaces/IEditPoint.md#__updatelocalbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBounds](Box.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:272](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L272)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateLocalBoxBounds](../interfaces/IEditPoint.md#__updatelocalboxbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBoxBounds](Box.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateLocalStrokeBounds](../interfaces/IEditPoint.md#__updatelocalstrokebounds)

#### Inherited from

[Box](Box.md).[__updateLocalStrokeBounds](Box.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L277)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateLocalRenderBounds](../interfaces/IEditPoint.md#__updatelocalrenderbounds)

#### Inherited from

[Box](Box.md).[__updateLocalRenderBounds](Box.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:279](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L279)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateContentBounds](../interfaces/IEditPoint.md#__updatecontentbounds)

#### Inherited from

[Box](Box.md).[__updateContentBounds](Box.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:285](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L285)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateAutoLayout](../interfaces/IEditPoint.md#__updateautolayout)

#### Inherited from

[Box](Box.md).[__updateAutoLayout](Box.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L292)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateFlowLayout](../interfaces/IEditPoint.md#__updateflowlayout)

#### Inherited from

[Box](Box.md).[__updateFlowLayout](Box.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L294)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateNaturalSize](../interfaces/IEditPoint.md#__updatenaturalsize)

#### Inherited from

[Box](Box.md).[__updateNaturalSize](Box.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L296)

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

[IEditPoint](../interfaces/IEditPoint.md).[__updateEraser](../interfaces/IEditPoint.md#__updateeraser)

#### Inherited from

[Box](Box.md).[__updateEraser](Box.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:308](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L308)

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

[IEditPoint](../interfaces/IEditPoint.md).[__renderEraser](../interfaces/IEditPoint.md#__rendereraser)

#### Inherited from

[Box](Box.md).[__renderEraser](Box.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L312)

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

[IEditPoint](../interfaces/IEditPoint.md).[__updateMask](../interfaces/IEditPoint.md#__updatemask)

#### Inherited from

[Box](Box.md).[__updateMask](Box.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:320](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L320)

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

[IEditPoint](../interfaces/IEditPoint.md).[__renderMask](../interfaces/IEditPoint.md#__rendermask)

#### Inherited from

[Box](Box.md).[__renderMask](Box.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:326](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L326)

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

[IEditPoint](../interfaces/IEditPoint.md).[__getNowWorld](../interfaces/IEditPoint.md#__getnowworld)

#### Inherited from

[Box](Box.md).[__getNowWorld](Box.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:334](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L334)

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

[IEditPoint](../interfaces/IEditPoint.md).[getTransform](../interfaces/IEditPoint.md#gettransform)

#### Inherited from

[Box](Box.md).[getTransform](Box.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:347](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L347)

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

[IEditPoint](../interfaces/IEditPoint.md).[getBounds](../interfaces/IEditPoint.md#getbounds)

#### Inherited from

[Box](Box.md).[getBounds](Box.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:352](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L352)

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

[IEditPoint](../interfaces/IEditPoint.md).[getLayoutBounds](../interfaces/IEditPoint.md#getlayoutbounds)

#### Inherited from

[Box](Box.md).[getLayoutBounds](Box.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L356)

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

[IEditPoint](../interfaces/IEditPoint.md).[getLayoutPoints](../interfaces/IEditPoint.md#getlayoutpoints)

#### Inherited from

[Box](Box.md).[getLayoutPoints](Box.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:360](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L360)

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

[IEditPoint](../interfaces/IEditPoint.md).[getWorldBounds](../interfaces/IEditPoint.md#getworldbounds)

#### Inherited from

[Box](Box.md).[getWorldBounds](Box.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L365)

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

[IEditPoint](../interfaces/IEditPoint.md).[worldToLocal](../interfaces/IEditPoint.md#worldtolocal)

#### Inherited from

[Box](Box.md).[worldToLocal](Box.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:373](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L373)

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

[IEditPoint](../interfaces/IEditPoint.md).[localToWorld](../interfaces/IEditPoint.md#localtoworld)

#### Inherited from

[Box](Box.md).[localToWorld](Box.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:381](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L381)

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

[IEditPoint](../interfaces/IEditPoint.md).[worldToInner](../interfaces/IEditPoint.md#worldtoinner)

#### Inherited from

[Box](Box.md).[worldToInner](Box.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L389)

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

[IEditPoint](../interfaces/IEditPoint.md).[innerToWorld](../interfaces/IEditPoint.md#innertoworld)

#### Inherited from

[Box](Box.md).[innerToWorld](Box.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L397)

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

[IEditPoint](../interfaces/IEditPoint.md).[getBoxPoint](../interfaces/IEditPoint.md#getboxpoint)

#### Inherited from

[Box](Box.md).[getBoxPoint](Box.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:404](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L404)

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

[IEditPoint](../interfaces/IEditPoint.md).[getBoxPointByInner](../interfaces/IEditPoint.md#getboxpointbyinner)

#### Inherited from

[Box](Box.md).[getBoxPointByInner](Box.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L408)

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

[IEditPoint](../interfaces/IEditPoint.md).[getInnerPoint](../interfaces/IEditPoint.md#getinnerpoint)

#### Inherited from

[Box](Box.md).[getInnerPoint](Box.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:414](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L414)

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

[IEditPoint](../interfaces/IEditPoint.md).[getInnerPointByBox](../interfaces/IEditPoint.md#getinnerpointbybox)

#### Inherited from

[Box](Box.md).[getInnerPointByBox](Box.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:420](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L420)

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

[IEditPoint](../interfaces/IEditPoint.md).[getInnerPointByLocal](../interfaces/IEditPoint.md#getinnerpointbylocal)

#### Inherited from

[Box](Box.md).[getInnerPointByLocal](Box.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:426](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L426)

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

[IEditPoint](../interfaces/IEditPoint.md).[getLocalPoint](../interfaces/IEditPoint.md#getlocalpoint)

#### Inherited from

[Box](Box.md).[getLocalPoint](Box.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:430](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L430)

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

[IEditPoint](../interfaces/IEditPoint.md).[getLocalPointByInner](../interfaces/IEditPoint.md#getlocalpointbyinner)

#### Inherited from

[Box](Box.md).[getLocalPointByInner](Box.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:436](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L436)

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

[IEditPoint](../interfaces/IEditPoint.md).[getPagePoint](../interfaces/IEditPoint.md#getpagepoint)

#### Inherited from

[Box](Box.md).[getPagePoint](Box.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:440](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L440)

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

[IEditPoint](../interfaces/IEditPoint.md).[getWorldPoint](../interfaces/IEditPoint.md#getworldpoint)

#### Inherited from

[Box](Box.md).[getWorldPoint](Box.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:445](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L445)

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

[IEditPoint](../interfaces/IEditPoint.md).[getWorldPointByBox](../interfaces/IEditPoint.md#getworldpointbybox)

#### Inherited from

[Box](Box.md).[getWorldPointByBox](Box.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:451](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L451)

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

[IEditPoint](../interfaces/IEditPoint.md).[getWorldPointByLocal](../interfaces/IEditPoint.md#getworldpointbylocal)

#### Inherited from

[Box](Box.md).[getWorldPointByLocal](Box.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:455](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L455)

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

[IEditPoint](../interfaces/IEditPoint.md).[getWorldPointByPage](../interfaces/IEditPoint.md#getworldpointbypage)

#### Inherited from

[Box](Box.md).[getWorldPointByPage](Box.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:461](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L461)

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

[IEditPoint](../interfaces/IEditPoint.md).[setTransform](../interfaces/IEditPoint.md#settransform)

#### Inherited from

[Box](Box.md).[setTransform](Box.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L469)

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

[IEditPoint](../interfaces/IEditPoint.md).[transform](../interfaces/IEditPoint.md#transform)

#### Inherited from

[Box](Box.md).[transform](Box.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:473](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L473)

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

[IEditPoint](../interfaces/IEditPoint.md).[move](../interfaces/IEditPoint.md#move)

#### Inherited from

[Box](Box.md).[move](Box.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:477](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L477)

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

[IEditPoint](../interfaces/IEditPoint.md).[moveInner](../interfaces/IEditPoint.md#moveinner)

#### Inherited from

[Box](Box.md).[moveInner](Box.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L482)

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

[IEditPoint](../interfaces/IEditPoint.md).[scaleOf](../interfaces/IEditPoint.md#scaleof)

#### Inherited from

[Box](Box.md).[scaleOf](Box.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:486](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L486)

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

[IEditPoint](../interfaces/IEditPoint.md).[rotateOf](../interfaces/IEditPoint.md#rotateof)

#### Inherited from

[Box](Box.md).[rotateOf](Box.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:490](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L490)

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

[IEditPoint](../interfaces/IEditPoint.md).[skewOf](../interfaces/IEditPoint.md#skewof)

#### Inherited from

[Box](Box.md).[skewOf](Box.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:494](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L494)

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

[IEditPoint](../interfaces/IEditPoint.md).[transformWorld](../interfaces/IEditPoint.md#transformworld)

#### Inherited from

[Box](Box.md).[transformWorld](Box.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:499](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L499)

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

[IEditPoint](../interfaces/IEditPoint.md).[moveWorld](../interfaces/IEditPoint.md#moveworld)

#### Inherited from

[Box](Box.md).[moveWorld](Box.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:503](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L503)

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

[IEditPoint](../interfaces/IEditPoint.md).[scaleOfWorld](../interfaces/IEditPoint.md#scaleofworld)

#### Inherited from

[Box](Box.md).[scaleOfWorld](Box.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:507](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L507)

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

[IEditPoint](../interfaces/IEditPoint.md).[rotateOfWorld](../interfaces/IEditPoint.md#rotateofworld)

#### Inherited from

[Box](Box.md).[rotateOfWorld](Box.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:511](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L511)

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

[IEditPoint](../interfaces/IEditPoint.md).[skewOfWorld](../interfaces/IEditPoint.md#skewofworld)

#### Inherited from

[Box](Box.md).[skewOfWorld](Box.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:515](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L515)

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

[IEditPoint](../interfaces/IEditPoint.md).[flip](../interfaces/IEditPoint.md#flip)

#### Inherited from

[Box](Box.md).[flip](Box.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:519](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L519)

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

[IEditPoint](../interfaces/IEditPoint.md).[scaleResize](../interfaces/IEditPoint.md#scaleresize)

#### Inherited from

[Box](Box.md).[scaleResize](Box.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L526)

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

[IEditPoint](../interfaces/IEditPoint.md).[__scaleResize](../interfaces/IEditPoint.md#__scaleresize)

#### Inherited from

[Box](Box.md).[__scaleResize](Box.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L531)

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

[IEditPoint](../interfaces/IEditPoint.md).[resizeWidth](../interfaces/IEditPoint.md#resizewidth)

#### Inherited from

[Box](Box.md).[resizeWidth](Box.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L534)

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

[IEditPoint](../interfaces/IEditPoint.md).[resizeHeight](../interfaces/IEditPoint.md#resizeheight)

#### Inherited from

[Box](Box.md).[resizeHeight](Box.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:536](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L536)

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

[IEditPoint](../interfaces/IEditPoint.md).[__hitWorld](../interfaces/IEditPoint.md#__hitworld)

#### Inherited from

[Box](Box.md).[__hitWorld](Box.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:541](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L541)

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

[IEditPoint](../interfaces/IEditPoint.md).[__hit](../interfaces/IEditPoint.md#__hit)

#### Inherited from

[Box](Box.md).[__hit](Box.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L543)

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

[IEditPoint](../interfaces/IEditPoint.md).[__hitFill](../interfaces/IEditPoint.md#__hitfill)

#### Inherited from

[Box](Box.md).[__hitFill](Box.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:545](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L545)

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

[IEditPoint](../interfaces/IEditPoint.md).[__hitStroke](../interfaces/IEditPoint.md#__hitstroke)

#### Inherited from

[Box](Box.md).[__hitStroke](Box.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:547](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L547)

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

[IEditPoint](../interfaces/IEditPoint.md).[__hitPixel](../interfaces/IEditPoint.md#__hitpixel)

#### Inherited from

[Box](Box.md).[__hitPixel](Box.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:549](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L549)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawHitPath](../interfaces/IEditPoint.md#__drawhitpath)

#### Inherited from

[Box](Box.md).[__drawHitPath](Box.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:551](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L551)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateHitCanvas](../interfaces/IEditPoint.md#__updatehitcanvas)

#### Inherited from

[Box](Box.md).[__updateHitCanvas](Box.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L553)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawFast](../interfaces/IEditPoint.md#__drawfast)

#### Inherited from

[Box](Box.md).[__drawFast](Box.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:562](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L562)

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

[IEditPoint](../interfaces/IEditPoint.md).[__draw](../interfaces/IEditPoint.md#__draw)

#### Inherited from

[Box](Box.md).[__draw](Box.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:564](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L564)

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

[IEditPoint](../interfaces/IEditPoint.md).[__clip](../interfaces/IEditPoint.md#__clip)

#### Inherited from

[Box](Box.md).[__clip](Box.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L567)

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

[IEditPoint](../interfaces/IEditPoint.md).[__renderShape](../interfaces/IEditPoint.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L569)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateWorldOpacity](../interfaces/IEditPoint.md#__updateworldopacity)

#### Inherited from

[Box](Box.md).[__updateWorldOpacity](Box.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L572)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updatePath](../interfaces/IEditPoint.md#__updatepath)

#### Inherited from

[Box](Box.md).[__updatePath](Box.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:585](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L585)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[getMotionPathData](../interfaces/IEditPoint.md#getmotionpathdata)

#### Inherited from

[Box](Box.md).[getMotionPathData](Box.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:594](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L594)

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

[IEditPoint](../interfaces/IEditPoint.md).[getMotionPoint](../interfaces/IEditPoint.md#getmotionpoint)

#### Inherited from

[Box](Box.md).[getMotionPoint](Box.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L598)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[getMotionTotal](../interfaces/IEditPoint.md#getmotiontotal)

#### Inherited from

[Box](Box.md).[getMotionTotal](Box.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L602)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateMotionPath](../interfaces/IEditPoint.md#__updatemotionpath)

#### Inherited from

[Box](Box.md).[__updateMotionPath](Box.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:606](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L606)

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

[IEditPoint](../interfaces/IEditPoint.md).[__runAnimation](../interfaces/IEditPoint.md#__runanimation)

#### Inherited from

[Box](Box.md).[__runAnimation](Box.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:612](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L612)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateSortChildren](../interfaces/IEditPoint.md#__updatesortchildren)

#### Inherited from

[Box](Box.md).[__updateSortChildren](Box.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L617)

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

[IEditPoint](../interfaces/IEditPoint.md).[dropTo](../interfaces/IEditPoint.md#dropto)

#### Inherited from

[Box](Box.md).[dropTo](Box.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L625)

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

[IEditPoint](../interfaces/IEditPoint.md).[on](../interfaces/IEditPoint.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L634)

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

[IEditPoint](../interfaces/IEditPoint.md).[off](../interfaces/IEditPoint.md#off)

#### Inherited from

[Box](Box.md).[off](Box.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L636)

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

[IEditPoint](../interfaces/IEditPoint.md).[on_](../interfaces/IEditPoint.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:638](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L638)

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

[IEditPoint](../interfaces/IEditPoint.md).[off_](../interfaces/IEditPoint.md#off_)

#### Inherited from

[Box](Box.md).[off_](Box.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L640)

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

[IEditPoint](../interfaces/IEditPoint.md).[once](../interfaces/IEditPoint.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:642](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L642)

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

[IEditPoint](../interfaces/IEditPoint.md).[emit](../interfaces/IEditPoint.md#emit)

#### Inherited from

[Box](Box.md).[emit](Box.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:644](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L644)

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

[IEditPoint](../interfaces/IEditPoint.md).[emitEvent](../interfaces/IEditPoint.md#emitevent)

#### Inherited from

[Box](Box.md).[emitEvent](Box.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:646](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L646)

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

[IEditPoint](../interfaces/IEditPoint.md).[hasEvent](../interfaces/IEditPoint.md#hasevent)

#### Inherited from

[Box](Box.md).[hasEvent](Box.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L648)

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

[leafer/packages/display/src/Leaf.ts:652](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L652)

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

[leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L656)

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

[IEditPoint](../interfaces/IEditPoint.md).[__emitLifeEvent](../interfaces/IEditPoint.md#__emitlifeevent)

#### Inherited from

[Box](Box.md).[__emitLifeEvent](Box.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/27a24ec/packages/display/src/Leaf.ts#L662)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateStrokeSpread](../interfaces/IEditPoint.md#__updatestrokespread)

#### Inherited from

[Box](Box.md).[__updateStrokeSpread](Box.md#__updatestrokespread)

#### Defined in

[ui/packages/display/src/Box.ts:50](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L50)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:53](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L53)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateRenderSpread](../interfaces/IEditPoint.md#__updaterenderspread)

#### Inherited from

[Box](Box.md).[__updateRenderSpread](Box.md#__updaterenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L55)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:59](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L59)

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

[IEditPoint](../interfaces/IEditPoint.md).[__updateBoxBounds](../interfaces/IEditPoint.md#__updateboxbounds)

#### Inherited from

[Box](Box.md).[__updateBoxBounds](Box.md#__updateboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:63](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L63)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateStrokeBounds](../interfaces/IEditPoint.md#__updatestrokebounds)

#### Inherited from

[Box](Box.md).[__updateStrokeBounds](Box.md#__updatestrokebounds)

#### Defined in

[ui/packages/display/src/Box.ts:94](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L94)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateRenderBounds](../interfaces/IEditPoint.md#__updaterenderbounds)

#### Inherited from

[Box](Box.md).[__updateRenderBounds](Box.md#__updaterenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:96](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L96)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateRectRenderBounds](../interfaces/IEditPoint.md#__updaterectrenderbounds)

#### Inherited from

[Box](Box.md).[__updateRectRenderBounds](Box.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:113](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L113)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[ui/packages/display/src/Box.ts:116](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L116)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateChange](../interfaces/IEditPoint.md#__updatechange)

#### Inherited from

[Box](Box.md).[__updateChange](Box.md#__updatechange)

#### Defined in

[ui/packages/display/src/Box.ts:118](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L118)

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

[ui/packages/display/src/Box.ts:125](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L125)

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

[IEditPoint](../interfaces/IEditPoint.md).[__renderGroup](../interfaces/IEditPoint.md#__rendergroup)

#### Inherited from

[Box](Box.md).[__renderGroup](Box.md#__rendergroup)

#### Defined in

[ui/packages/display/src/Box.ts:128](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L128)

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

[IEditPoint](../interfaces/IEditPoint.md).[__render](../interfaces/IEditPoint.md#__render)

#### Inherited from

[Box](Box.md).[__render](Box.md#__render)

#### Defined in

[ui/packages/display/src/Box.ts:131](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L131)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawContent](../interfaces/IEditPoint.md#__drawcontent)

#### Inherited from

[Box](Box.md).[__drawContent](Box.md#__drawcontent)

#### Defined in

[ui/packages/display/src/Box.ts:141](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Box.ts#L141)

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

[IEditPoint](../interfaces/IEditPoint.md).[reset](../interfaces/IEditPoint.md#reset)

#### Inherited from

[Box](Box.md).[reset](Box.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:34](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L34)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:39](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L39)

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

[IEditPoint](../interfaces/IEditPoint.md).[set](../interfaces/IEditPoint.md#set)

#### Inherited from

[Box](Box.md).[set](Box.md#set)

#### Defined in

[ui/packages/display/src/Group.ts:46](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L46)

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

[IEditPoint](../interfaces/IEditPoint.md).[toJSON](../interfaces/IEditPoint.md#tojson)

#### Inherited from

[Box](Box.md).[toJSON](Box.md#tojson)

#### Defined in

[ui/packages/display/src/Group.ts:63](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L63)

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

[IEditPoint](../interfaces/IEditPoint.md).[pick](../interfaces/IEditPoint.md#pick)

#### Inherited from

[Box](Box.md).[pick](Box.md#pick)

#### Defined in

[ui/packages/display/src/Group.ts:72](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L72)

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

[IEditPoint](../interfaces/IEditPoint.md).[addAt](../interfaces/IEditPoint.md#addat)

#### Inherited from

[Box](Box.md).[addAt](Box.md#addat)

#### Defined in

[ui/packages/display/src/Group.ts:77](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L77)

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

[IEditPoint](../interfaces/IEditPoint.md).[addAfter](../interfaces/IEditPoint.md#addafter)

#### Inherited from

[Box](Box.md).[addAfter](Box.md#addafter)

#### Defined in

[ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L81)

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

[IEditPoint](../interfaces/IEditPoint.md).[addBefore](../interfaces/IEditPoint.md#addbefore)

#### Inherited from

[Box](Box.md).[addBefore](Box.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L85)

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

[IEditPoint](../interfaces/IEditPoint.md).[add](../interfaces/IEditPoint.md#add)

#### Inherited from

[Box](Box.md).[add](Box.md#add)

#### Defined in

[ui/packages/display/src/Group.ts:91](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L91)

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

[IEditPoint](../interfaces/IEditPoint.md).[addMany](../interfaces/IEditPoint.md#addmany)

#### Inherited from

[Box](Box.md).[addMany](Box.md#addmany)

#### Defined in

[ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L93)

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

[IEditPoint](../interfaces/IEditPoint.md).[remove](../interfaces/IEditPoint.md#remove)

#### Inherited from

[Box](Box.md).[remove](Box.md#remove)

#### Defined in

[ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L95)

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

[IEditPoint](../interfaces/IEditPoint.md).[removeAll](../interfaces/IEditPoint.md#removeall)

#### Inherited from

[Box](Box.md).[removeAll](Box.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L97)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[clear](../interfaces/IEditPoint.md#clear)

#### Inherited from

[Box](Box.md).[clear](Box.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/Group.ts#L99)

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

[IEditPoint](../interfaces/IEditPoint.md).[get](../interfaces/IEditPoint.md#get)

#### Inherited from

[Box](Box.md).[get](Box.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:406](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L406)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[createProxyData](../interfaces/IEditPoint.md#createproxydata)

#### Inherited from

[Box](Box.md).[createProxyData](Box.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:410](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L410)

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

[IEditPoint](../interfaces/IEditPoint.md).[find](../interfaces/IEditPoint.md#find)

#### Inherited from

[Box](Box.md).[find](Box.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L415)

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

[IEditPoint](../interfaces/IEditPoint.md).[findTag](../interfaces/IEditPoint.md#findtag)

#### Inherited from

[Box](Box.md).[findTag](Box.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:417](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L417)

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

[IEditPoint](../interfaces/IEditPoint.md).[findOne](../interfaces/IEditPoint.md#findone)

#### Inherited from

[Box](Box.md).[findOne](Box.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:419](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L419)

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

[IEditPoint](../interfaces/IEditPoint.md).[findId](../interfaces/IEditPoint.md#findid)

#### Inherited from

[Box](Box.md).[findId](Box.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:421](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L421)

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

[IEditPoint](../interfaces/IEditPoint.md).[getPath](../interfaces/IEditPoint.md#getpath)

#### Inherited from

[Box](Box.md).[getPath](Box.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L426)

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

[IEditPoint](../interfaces/IEditPoint.md).[getPathString](../interfaces/IEditPoint.md#getpathstring)

#### Inherited from

[Box](Box.md).[getPathString](Box.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L433)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[load](../interfaces/IEditPoint.md#load)

#### Inherited from

[Box](Box.md).[load](Box.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L438)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__onUpdateSize](../interfaces/IEditPoint.md#__onupdatesize)

#### Inherited from

[Box](Box.md).[__onUpdateSize](Box.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L442)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateRenderPath](../interfaces/IEditPoint.md#__updaterenderpath)

#### Inherited from

[Box](Box.md).[__updateRenderPath](Box.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L449)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawRenderPath](../interfaces/IEditPoint.md#__drawrenderpath)

#### Inherited from

[Box](Box.md).[__drawRenderPath](Box.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:457](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L457)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawPath](../interfaces/IEditPoint.md#__drawpath)

#### Inherited from

[Box](Box.md).[__drawPath](Box.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:462](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L462)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawPathByData](../interfaces/IEditPoint.md#__drawpathbydata)

#### Inherited from

[Box](Box.md).[__drawPathByData](Box.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:467](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L467)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawPathByBox](../interfaces/IEditPoint.md#__drawpathbybox)

#### Inherited from

[Box](Box.md).[__drawPathByBox](Box.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:471](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L471)

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

[IEditPoint](../interfaces/IEditPoint.md).[animate](../interfaces/IEditPoint.md#animate)

#### Inherited from

[Box](Box.md).[animate](Box.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:481](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L481)

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

[IEditPoint](../interfaces/IEditPoint.md).[killAnimate](../interfaces/IEditPoint.md#killanimate)

#### Inherited from

[Box](Box.md).[killAnimate](Box.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:485](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L485)

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

[IEditPoint](../interfaces/IEditPoint.md).[export](../interfaces/IEditPoint.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L491)

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

[IEditPoint](../interfaces/IEditPoint.md).[syncExport](../interfaces/IEditPoint.md#syncexport)

#### Inherited from

[Box](Box.md).[syncExport](Box.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:495](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L495)

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

[IEditPoint](../interfaces/IEditPoint.md).[clone](../interfaces/IEditPoint.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:499](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L499)

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

[ui/packages/display/src/UI.ts:505](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L505)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:509](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L509)

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

[ui/packages/display/src/UI.ts:513](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L513)

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

[ui/packages/display/src/UI.ts:520](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L520)

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

[ui/packages/display/src/UI.ts:522](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L522)

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

[ui/packages/display/src/UI.ts:524](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L524)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[destroy](../interfaces/IEditPoint.md#destroy)

#### Inherited from

[Box](Box.md).[destroy](Box.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:527](https://github.com/leaferjs/leafer-ui/blob/4b7f368/packages/display/src/UI.ts#L527)
