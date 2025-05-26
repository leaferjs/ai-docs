# Class: Frame

## Hierarchy

- [`Box`](Box.md)

  ↳ **`Frame`**

## Implements

- [`IFrame`](../interfaces/IFrame.md)

## Table of contents

### Constructors

- [constructor](Frame.md#constructor)

### Properties

- [innerId](Frame.md#innerid)
- [syncEventer](Frame.md#synceventer)
- [lockNormalStyle](Frame.md#locknormalstyle)
- [\_\_layout](Frame.md#__layout)
- [\_\_world](Frame.md#__world)
- [\_\_local](Frame.md#__local)
- [\_\_nowWorld](Frame.md#__nowworld)
- [\_\_cameraWorld](Frame.md#__cameraworld)
- [\_\_worldOpacity](Frame.md#__worldopacity)
- [\_\_level](Frame.md#__level)
- [\_\_tempNumber](Frame.md#__tempnumber)
- [\_\_hasAutoLayout](Frame.md#__hasautolayout)
- [\_\_hasMask](Frame.md#__hasmask)
- [\_\_hasEraser](Frame.md#__haseraser)
- [\_\_hitCanvas](Frame.md#__hitcanvas)
- [\_\_captureMap](Frame.md#__capturemap)
- [\_\_bubbleMap](Frame.md#__bubblemap)
- [\_\_hasLocalEvent](Frame.md#__haslocalevent)
- [\_\_hasWorldEvent](Frame.md#__hasworldevent)
- [destroyed](Frame.md#destroyed)
- [width](Frame.md#width)
- [height](Frame.md#height)
- [resizeChildren](Frame.md#resizechildren)
- [textBox](Frame.md#textbox)
- [isOverflow](Frame.md#isoverflow)
- [\_\_](Frame.md#__)
- [fill](Frame.md#fill)
- [overflow](Frame.md#overflow)
- [children](Frame.md#children)
- [proxyData](Frame.md#proxydata)
- [\_\_proxyData](Frame.md#__proxydata)
- [leafer](Frame.md#leafer)
- [parent](Frame.md#parent)
- [zoomLayer](Frame.md#zoomlayer)
- [id](Frame.md#id)
- [name](Frame.md#name)
- [className](Frame.md#classname)
- [blendMode](Frame.md#blendmode)
- [opacity](Frame.md#opacity)
- [visible](Frame.md#visible)
- [locked](Frame.md#locked)
- [dim](Frame.md#dim)
- [dimskip](Frame.md#dimskip)
- [zIndex](Frame.md#zindex)
- [mask](Frame.md#mask)
- [eraser](Frame.md#eraser)
- [x](Frame.md#x)
- [y](Frame.md#y)
- [scaleX](Frame.md#scalex)
- [scaleY](Frame.md#scaley)
- [rotation](Frame.md#rotation)
- [skewX](Frame.md#skewx)
- [skewY](Frame.md#skewy)
- [offsetX](Frame.md#offsetx)
- [offsetY](Frame.md#offsety)
- [scrollX](Frame.md#scrollx)
- [scrollY](Frame.md#scrolly)
- [origin](Frame.md#origin)
- [around](Frame.md#around)
- [lazy](Frame.md#lazy)
- [pixelRatio](Frame.md#pixelratio)
- [path](Frame.md#path)
- [windingRule](Frame.md#windingrule)
- [closed](Frame.md#closed)
- [flow](Frame.md#flow)
- [padding](Frame.md#padding)
- [gap](Frame.md#gap)
- [flowAlign](Frame.md#flowalign)
- [flowWrap](Frame.md#flowwrap)
- [itemBox](Frame.md#itembox)
- [inFlow](Frame.md#inflow)
- [autoWidth](Frame.md#autowidth)
- [autoHeight](Frame.md#autoheight)
- [lockRatio](Frame.md#lockratio)
- [autoBox](Frame.md#autobox)
- [widthRange](Frame.md#widthrange)
- [heightRange](Frame.md#heightrange)
- [draggable](Frame.md#draggable)
- [dragBounds](Frame.md#dragbounds)
- [editable](Frame.md#editable)
- [hittable](Frame.md#hittable)
- [hitFill](Frame.md#hitfill)
- [hitStroke](Frame.md#hitstroke)
- [hitBox](Frame.md#hitbox)
- [hitChildren](Frame.md#hitchildren)
- [hitSelf](Frame.md#hitself)
- [hitRadius](Frame.md#hitradius)
- [cursor](Frame.md#cursor)
- [stroke](Frame.md#stroke)
- [strokeAlign](Frame.md#strokealign)
- [strokeWidth](Frame.md#strokewidth)
- [strokeWidthFixed](Frame.md#strokewidthfixed)
- [strokeCap](Frame.md#strokecap)
- [strokeJoin](Frame.md#strokejoin)
- [dashPattern](Frame.md#dashpattern)
- [dashOffset](Frame.md#dashoffset)
- [miterLimit](Frame.md#miterlimit)
- [startArrow](Frame.md#startarrow)
- [endArrow](Frame.md#endarrow)
- [cornerRadius](Frame.md#cornerradius)
- [cornerSmoothing](Frame.md#cornersmoothing)
- [shadow](Frame.md#shadow)
- [innerShadow](Frame.md#innershadow)
- [blur](Frame.md#blur)
- [backgroundBlur](Frame.md#backgroundblur)
- [grayscale](Frame.md#grayscale)
- [filter](Frame.md#filter)
- [animation](Frame.md#animation)
- [animationOut](Frame.md#animationout)
- [transition](Frame.md#transition)
- [transitionOut](Frame.md#transitionout)
- [motionPath](Frame.md#motionpath)
- [motionPrecision](Frame.md#motionprecision)
- [motion](Frame.md#motion)
- [motionRotation](Frame.md#motionrotation)
- [states](Frame.md#states)
- [state](Frame.md#state)
- [selected](Frame.md#selected)
- [disabled](Frame.md#disabled)
- [normalStyle](Frame.md#normalstyle)
- [hoverStyle](Frame.md#hoverstyle)
- [pressStyle](Frame.md#pressstyle)
- [focusStyle](Frame.md#focusstyle)
- [selectedStyle](Frame.md#selectedstyle)
- [disabledStyle](Frame.md#disabledstyle)
- [placeholderStyle](Frame.md#placeholderstyle)
- [placeholderColor](Frame.md#placeholdercolor)
- [placeholderDelay](Frame.md#placeholderdelay)
- [button](Frame.md#button)
- [editConfig](Frame.md#editconfig)
- [editOuter](Frame.md#editouter)
- [editInner](Frame.md#editinner)
- [data](Frame.md#data)
- [useFastShadow](Frame.md#usefastshadow)
- [\_\_box](Frame.md#__box)
- [\_\_animate](Frame.md#__animate)

### Accessors

- [tag](Frame.md#tag)
- [innerName](Frame.md#innername)
- [\_\_DataProcessor](Frame.md#__dataprocessor)
- [\_\_LayoutProcessor](Frame.md#__layoutprocessor)
- [leaferIsCreated](Frame.md#leaferiscreated)
- [leaferIsReady](Frame.md#leaferisready)
- [isLeafer](Frame.md#isleafer)
- [\_\_localMatrix](Frame.md#__localmatrix)
- [\_\_localBoxBounds](Frame.md#__localboxbounds)
- [worldTransform](Frame.md#worldtransform)
- [localTransform](Frame.md#localtransform)
- [boxBounds](Frame.md#boxbounds)
- [renderBounds](Frame.md#renderbounds)
- [worldBoxBounds](Frame.md#worldboxbounds)
- [worldStrokeBounds](Frame.md#worldstrokebounds)
- [worldRenderBounds](Frame.md#worldrenderbounds)
- [worldOpacity](Frame.md#worldopacity)
- [\_\_worldFlipped](Frame.md#__worldflipped)
- [\_\_onlyHitMask](Frame.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Frame.md#__ignorehitworld)
- [\_\_inLazyBounds](Frame.md#__inlazybounds)
- [pathInputed](Frame.md#pathinputed)
- [event](Frame.md#event)
- [isBranchLeaf](Frame.md#isbranchleaf)
- [\_\_tag](Frame.md#__tag)
- [isFrame](Frame.md#isframe)
- [isBranch](Frame.md#isbranch)
- [app](Frame.md#app)
- [scale](Frame.md#scale)
- [pen](Frame.md#pen)

### Methods

- [resetCustom](Frame.md#resetcustom)
- [waitParent](Frame.md#waitparent)
- [waitLeafer](Frame.md#waitleafer)
- [nextRender](Frame.md#nextrender)
- [removeNextRender](Frame.md#removenextrender)
- [\_\_bindLeafer](Frame.md#__bindleafer)
- [setAttr](Frame.md#setattr)
- [getAttr](Frame.md#getattr)
- [getComputedAttr](Frame.md#getcomputedattr)
- [toString](Frame.md#tostring)
- [toSVG](Frame.md#tosvg)
- [\_\_SVG](Frame.md#__svg)
- [toHTML](Frame.md#tohtml)
- [\_\_setAttr](Frame.md#__setattr)
- [\_\_getAttr](Frame.md#__getattr)
- [setProxyAttr](Frame.md#setproxyattr)
- [getProxyAttr](Frame.md#getproxyattr)
- [focus](Frame.md#focus)
- [updateState](Frame.md#updatestate)
- [updateLayout](Frame.md#updatelayout)
- [forceUpdate](Frame.md#forceupdate)
- [forceRender](Frame.md#forcerender)
- [\_\_extraUpdate](Frame.md#__extraupdate)
- [\_\_updateWorldMatrix](Frame.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Frame.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Frame.md#__updateworldbounds)
- [\_\_updateLocalBounds](Frame.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Frame.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Frame.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Frame.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](Frame.md#__updatecontentbounds)
- [\_\_updateAutoLayout](Frame.md#__updateautolayout)
- [\_\_updateFlowLayout](Frame.md#__updateflowlayout)
- [\_\_updateNaturalSize](Frame.md#__updatenaturalsize)
- [\_\_updateEraser](Frame.md#__updateeraser)
- [\_\_renderEraser](Frame.md#__rendereraser)
- [\_\_updateMask](Frame.md#__updatemask)
- [\_\_renderMask](Frame.md#__rendermask)
- [\_\_getNowWorld](Frame.md#__getnowworld)
- [getTransform](Frame.md#gettransform)
- [getBounds](Frame.md#getbounds)
- [getLayoutBounds](Frame.md#getlayoutbounds)
- [getLayoutPoints](Frame.md#getlayoutpoints)
- [getWorldBounds](Frame.md#getworldbounds)
- [worldToLocal](Frame.md#worldtolocal)
- [localToWorld](Frame.md#localtoworld)
- [worldToInner](Frame.md#worldtoinner)
- [innerToWorld](Frame.md#innertoworld)
- [getBoxPoint](Frame.md#getboxpoint)
- [getBoxPointByInner](Frame.md#getboxpointbyinner)
- [getInnerPoint](Frame.md#getinnerpoint)
- [getInnerPointByBox](Frame.md#getinnerpointbybox)
- [getInnerPointByLocal](Frame.md#getinnerpointbylocal)
- [getLocalPoint](Frame.md#getlocalpoint)
- [getLocalPointByInner](Frame.md#getlocalpointbyinner)
- [getPagePoint](Frame.md#getpagepoint)
- [getWorldPoint](Frame.md#getworldpoint)
- [getWorldPointByBox](Frame.md#getworldpointbybox)
- [getWorldPointByLocal](Frame.md#getworldpointbylocal)
- [getWorldPointByPage](Frame.md#getworldpointbypage)
- [setTransform](Frame.md#settransform)
- [transform](Frame.md#transform)
- [move](Frame.md#move)
- [moveInner](Frame.md#moveinner)
- [scaleOf](Frame.md#scaleof)
- [rotateOf](Frame.md#rotateof)
- [skewOf](Frame.md#skewof)
- [transformWorld](Frame.md#transformworld)
- [moveWorld](Frame.md#moveworld)
- [scaleOfWorld](Frame.md#scaleofworld)
- [rotateOfWorld](Frame.md#rotateofworld)
- [skewOfWorld](Frame.md#skewofworld)
- [flip](Frame.md#flip)
- [scaleResize](Frame.md#scaleresize)
- [\_\_scaleResize](Frame.md#__scaleresize)
- [resizeWidth](Frame.md#resizewidth)
- [resizeHeight](Frame.md#resizeheight)
- [\_\_hitWorld](Frame.md#__hitworld)
- [\_\_hit](Frame.md#__hit)
- [\_\_hitFill](Frame.md#__hitfill)
- [\_\_hitStroke](Frame.md#__hitstroke)
- [\_\_hitPixel](Frame.md#__hitpixel)
- [\_\_drawHitPath](Frame.md#__drawhitpath)
- [\_\_updateHitCanvas](Frame.md#__updatehitcanvas)
- [\_\_drawFast](Frame.md#__drawfast)
- [\_\_draw](Frame.md#__draw)
- [\_\_clip](Frame.md#__clip)
- [\_\_renderShape](Frame.md#__rendershape)
- [\_\_updateWorldOpacity](Frame.md#__updateworldopacity)
- [\_\_updatePath](Frame.md#__updatepath)
- [getMotionPathData](Frame.md#getmotionpathdata)
- [getMotionPoint](Frame.md#getmotionpoint)
- [getMotionTotal](Frame.md#getmotiontotal)
- [\_\_updateMotionPath](Frame.md#__updatemotionpath)
- [\_\_runAnimation](Frame.md#__runanimation)
- [\_\_updateSortChildren](Frame.md#__updatesortchildren)
- [dropTo](Frame.md#dropto)
- [on](Frame.md#on)
- [off](Frame.md#off)
- [on\_](Frame.md#on_)
- [off\_](Frame.md#off_)
- [once](Frame.md#once)
- [emit](Frame.md#emit)
- [emitEvent](Frame.md#emitevent)
- [hasEvent](Frame.md#hasevent)
- [changeAttr](Frame.md#changeattr)
- [addAttr](Frame.md#addattr)
- [\_\_emitLifeEvent](Frame.md#__emitlifeevent)
- [\_\_updateStrokeSpread](Frame.md#__updatestrokespread)
- [\_\_updateRectRenderSpread](Frame.md#__updaterectrenderspread)
- [\_\_updateRenderSpread](Frame.md#__updaterenderspread)
- [\_\_updateRectBoxBounds](Frame.md#__updaterectboxbounds)
- [\_\_updateBoxBounds](Frame.md#__updateboxbounds)
- [\_\_updateStrokeBounds](Frame.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Frame.md#__updaterenderbounds)
- [\_\_updateRectRenderBounds](Frame.md#__updaterectrenderbounds)
- [\_\_updateRectChange](Frame.md#__updaterectchange)
- [\_\_updateChange](Frame.md#__updatechange)
- [\_\_renderRect](Frame.md#__renderrect)
- [\_\_renderGroup](Frame.md#__rendergroup)
- [\_\_render](Frame.md#__render)
- [\_\_drawContent](Frame.md#__drawcontent)
- [reset](Frame.md#reset)
- [\_\_setBranch](Frame.md#__setbranch)
- [set](Frame.md#set)
- [toJSON](Frame.md#tojson)
- [pick](Frame.md#pick)
- [addAt](Frame.md#addat)
- [addAfter](Frame.md#addafter)
- [addBefore](Frame.md#addbefore)
- [add](Frame.md#add)
- [addMany](Frame.md#addmany)
- [remove](Frame.md#remove)
- [removeAll](Frame.md#removeall)
- [clear](Frame.md#clear)
- [get](Frame.md#get)
- [createProxyData](Frame.md#createproxydata)
- [find](Frame.md#find)
- [findTag](Frame.md#findtag)
- [findOne](Frame.md#findone)
- [findId](Frame.md#findid)
- [getPath](Frame.md#getpath)
- [getPathString](Frame.md#getpathstring)
- [load](Frame.md#load)
- [\_\_onUpdateSize](Frame.md#__onupdatesize)
- [\_\_updateRenderPath](Frame.md#__updaterenderpath)
- [\_\_drawRenderPath](Frame.md#__drawrenderpath)
- [\_\_drawPath](Frame.md#__drawpath)
- [\_\_drawPathByData](Frame.md#__drawpathbydata)
- [\_\_drawPathByBox](Frame.md#__drawpathbybox)
- [drawImagePlaceholder](Frame.md#drawimageplaceholder)
- [animate](Frame.md#animate)
- [killAnimate](Frame.md#killanimate)
- [export](Frame.md#export)
- [syncExport](Frame.md#syncexport)
- [clone](Frame.md#clone)
- [one](Frame.md#one)
- [registerUI](Frame.md#registerui)
- [registerData](Frame.md#registerdata)
- [setEditConfig](Frame.md#seteditconfig)
- [setEditOuter](Frame.md#seteditouter)
- [setEditInner](Frame.md#seteditinner)
- [destroy](Frame.md#destroy)

## Constructors

### constructor

• **new Frame**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFrameInputData`](../interfaces/IFrameInputData.md) |

#### Overrides

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[ui/packages/display/src/Frame.ts:25](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L25)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[innerId](../interfaces/IFrame.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[syncEventer](../interfaces/IFrame.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lockNormalStyle](../interfaces/IFrame.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__layout](../interfaces/IFrame.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__world](../interfaces/IFrame.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__local](../interfaces/IFrame.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__nowWorld](../interfaces/IFrame.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__cameraWorld](../interfaces/IFrame.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__worldOpacity](../interfaces/IFrame.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__level](../interfaces/IFrame.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__tempNumber](../interfaces/IFrame.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasAutoLayout](../interfaces/IFrame.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasMask](../interfaces/IFrame.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasEraser](../interfaces/IFrame.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hitCanvas](../interfaces/IFrame.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__captureMap](../interfaces/IFrame.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__bubbleMap](../interfaces/IFrame.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L97)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasLocalEvent](../interfaces/IFrame.md#__haslocalevent)

#### Inherited from

[Box](Box.md).[__hasLocalEvent](Box.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L99)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasWorldEvent](../interfaces/IFrame.md#__hasworldevent)

#### Inherited from

[Box](Box.md).[__hasWorldEvent](Box.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L100)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[destroyed](../interfaces/IFrame.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L105)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[width](../interfaces/IFrame.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[ui/packages/display/src/Box.ts:28](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L28)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[height](../interfaces/IFrame.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[ui/packages/display/src/Box.ts:31](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L31)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[resizeChildren](../interfaces/IFrame.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[ui/packages/display/src/Box.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L34)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[textBox](../interfaces/IFrame.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[ui/packages/display/src/Box.ts:37](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L37)

___

### isOverflow

• **isOverflow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isOverflow](../interfaces/IFrame.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[ui/packages/display/src/Box.ts:42](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L42)

___

### \_\_

• **\_\_**: [`IFrameData`](../interfaces/IFrameData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__](../interfaces/IFrame.md#__)

#### Overrides

[Box](Box.md).[__](Box.md#__)

#### Defined in

[ui/packages/display/src/Frame.ts:17](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L17)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[fill](../interfaces/IFrame.md#fill)

#### Overrides

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[ui/packages/display/src/Frame.ts:20](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L20)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[overflow](../interfaces/IFrame.md#overflow)

#### Overrides

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[ui/packages/display/src/Frame.ts:23](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L23)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[children](../interfaces/IFrame.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L28)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[proxyData](../interfaces/IFrame.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__proxyData](../interfaces/IFrame.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[leafer](../interfaces/IFrame.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[parent](../interfaces/IFrame.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[zoomLayer](../interfaces/IFrame.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[id](../interfaces/IFrame.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[name](../interfaces/IFrame.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[className](../interfaces/IFrame.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[blendMode](../interfaces/IFrame.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[opacity](../interfaces/IFrame.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IFrame](../interfaces/IFrame.md).[visible](../interfaces/IFrame.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[locked](../interfaces/IFrame.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dim](../interfaces/IFrame.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dimskip](../interfaces/IFrame.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[zIndex](../interfaces/IFrame.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[mask](../interfaces/IFrame.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[eraser](../interfaces/IFrame.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[x](../interfaces/IFrame.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[y](../interfaces/IFrame.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scaleX](../interfaces/IFrame.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scaleY](../interfaces/IFrame.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[rotation](../interfaces/IFrame.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[skewX](../interfaces/IFrame.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[skewY](../interfaces/IFrame.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[offsetX](../interfaces/IFrame.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[offsetY](../interfaces/IFrame.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scrollX](../interfaces/IFrame.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scrollY](../interfaces/IFrame.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[origin](../interfaces/IFrame.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[around](../interfaces/IFrame.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lazy](../interfaces/IFrame.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pixelRatio](../interfaces/IFrame.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[path](../interfaces/IFrame.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[windingRule](../interfaces/IFrame.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[closed](../interfaces/IFrame.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flow](../interfaces/IFrame.md#flow)

#### Inherited from

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[padding](../interfaces/IFrame.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[gap](../interfaces/IFrame.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flowAlign](../interfaces/IFrame.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flowWrap](../interfaces/IFrame.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[itemBox](../interfaces/IFrame.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[inFlow](../interfaces/IFrame.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoWidth](../interfaces/IFrame.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoHeight](../interfaces/IFrame.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lockRatio](../interfaces/IFrame.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoBox](../interfaces/IFrame.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[widthRange](../interfaces/IFrame.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[heightRange](../interfaces/IFrame.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[draggable](../interfaces/IFrame.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dragBounds](../interfaces/IFrame.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editable](../interfaces/IFrame.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hittable](../interfaces/IFrame.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitFill](../interfaces/IFrame.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitStroke](../interfaces/IFrame.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitBox](../interfaces/IFrame.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitChildren](../interfaces/IFrame.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitSelf](../interfaces/IFrame.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitRadius](../interfaces/IFrame.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cursor](../interfaces/IFrame.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L226)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[stroke](../interfaces/IFrame.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeAlign](../interfaces/IFrame.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeWidth](../interfaces/IFrame.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeWidthFixed](../interfaces/IFrame.md#strokewidthfixed)

#### Inherited from

[Box](Box.md).[strokeWidthFixed](Box.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeCap](../interfaces/IFrame.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeJoin](../interfaces/IFrame.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dashPattern](../interfaces/IFrame.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dashOffset](../interfaces/IFrame.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[miterLimit](../interfaces/IFrame.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[startArrow](../interfaces/IFrame.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[endArrow](../interfaces/IFrame.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cornerRadius](../interfaces/IFrame.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cornerSmoothing](../interfaces/IFrame.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[shadow](../interfaces/IFrame.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[innerShadow](../interfaces/IFrame.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[blur](../interfaces/IFrame.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[backgroundBlur](../interfaces/IFrame.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[grayscale](../interfaces/IFrame.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[filter](../interfaces/IFrame.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[animation](../interfaces/IFrame.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[animationOut](../interfaces/IFrame.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[transition](../interfaces/IFrame.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[transitionOut](../interfaces/IFrame.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionPath](../interfaces/IFrame.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionPrecision](../interfaces/IFrame.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motion](../interfaces/IFrame.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionRotation](../interfaces/IFrame.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[states](../interfaces/IFrame.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[state](../interfaces/IFrame.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[selected](../interfaces/IFrame.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[disabled](../interfaces/IFrame.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[normalStyle](../interfaces/IFrame.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hoverStyle](../interfaces/IFrame.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pressStyle](../interfaces/IFrame.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[focusStyle](../interfaces/IFrame.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[selectedStyle](../interfaces/IFrame.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[disabledStyle](../interfaces/IFrame.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderStyle](../interfaces/IFrame.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L350)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderColor](../interfaces/IFrame.md#placeholdercolor)

#### Inherited from

[Box](Box.md).[placeholderColor](Box.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L353)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderDelay](../interfaces/IFrame.md#placeholderdelay)

#### Inherited from

[Box](Box.md).[placeholderDelay](Box.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L356)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[button](../interfaces/IFrame.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L359)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editConfig](../interfaces/IFrame.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L364)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editOuter](../interfaces/IFrame.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L366)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editInner](../interfaces/IFrame.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L368)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[data](../interfaces/IFrame.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L373)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[useFastShadow](../interfaces/IFrame.md#usefastshadow)

#### Inherited from

[Box](Box.md).[useFastShadow](Box.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L379)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__box](../interfaces/IFrame.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__animate](../interfaces/IFrame.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L382)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[tag](../interfaces/IFrame.md#tag)

#### Inherited from

Box.tag

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

[IFrame](../interfaces/IFrame.md).[tag](../interfaces/IFrame.md#tag)

#### Inherited from

Box.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[innerName](../interfaces/IFrame.md#innername)

#### Inherited from

Box.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__DataProcessor](../interfaces/IFrame.md#__dataprocessor)

#### Inherited from

Box.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__LayoutProcessor](../interfaces/IFrame.md#__layoutprocessor)

#### Inherited from

Box.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[leaferIsCreated](../interfaces/IFrame.md#leaferiscreated)

#### Inherited from

Box.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[leaferIsReady](../interfaces/IFrame.md#leaferisready)

#### Inherited from

Box.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isLeafer](../interfaces/IFrame.md#isleafer)

#### Inherited from

Box.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L42)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__localMatrix](../interfaces/IFrame.md#__localmatrix)

#### Inherited from

Box.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__localBoxBounds](../interfaces/IFrame.md#__localboxbounds)

#### Inherited from

Box.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[worldTransform](../interfaces/IFrame.md#worldtransform)

#### Inherited from

Box.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[localTransform](../interfaces/IFrame.md#localtransform)

#### Inherited from

Box.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[boxBounds](../interfaces/IFrame.md#boxbounds)

#### Inherited from

Box.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[renderBounds](../interfaces/IFrame.md#renderbounds)

#### Inherited from

Box.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[worldBoxBounds](../interfaces/IFrame.md#worldboxbounds)

#### Inherited from

Box.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[worldStrokeBounds](../interfaces/IFrame.md#worldstrokebounds)

#### Inherited from

Box.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[worldRenderBounds](../interfaces/IFrame.md#worldrenderbounds)

#### Inherited from

Box.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[worldOpacity](../interfaces/IFrame.md#worldopacity)

#### Inherited from

Box.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__worldFlipped](../interfaces/IFrame.md#__worldflipped)

#### Inherited from

Box.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__onlyHitMask](../interfaces/IFrame.md#__onlyhitmask)

#### Inherited from

Box.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__ignoreHitWorld](../interfaces/IFrame.md#__ignorehitworld)

#### Inherited from

Box.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__inLazyBounds](../interfaces/IFrame.md#__inlazybounds)

#### Inherited from

Box.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pathInputed](../interfaces/IFrame.md#pathinputed)

#### Inherited from

Box.pathInputed

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

[IFrame](../interfaces/IFrame.md).[event](../interfaces/IFrame.md#event)

#### Inherited from

Box.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L94)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isBranchLeaf](../interfaces/IFrame.md#isbranchleaf)

#### Inherited from

Box.isBranchLeaf

#### Defined in

[ui/packages/display/src/Box.ts:21](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L21)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__tag](../interfaces/IFrame.md#__tag)

#### Overrides

Box.\_\_tag

#### Defined in

[ui/packages/display/src/Frame.ts:12](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L12)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isFrame](../interfaces/IFrame.md#isframe)

#### Overrides

Box.isFrame

#### Defined in

[ui/packages/display/src/Frame.ts:14](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Frame.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isBranch](../interfaces/IFrame.md#isbranch)

#### Inherited from

Box.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[app](../interfaces/IFrame.md#app)

#### Inherited from

Box.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L24)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scale](../interfaces/IFrame.md#scale)

#### Inherited from

Box.scale

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

[IFrame](../interfaces/IFrame.md).[scale](../interfaces/IFrame.md#scale)

#### Inherited from

Box.scale

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L376)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pen](../interfaces/IFrame.md#pen)

#### Inherited from

Box.pen

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L384)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[resetCustom](../interfaces/IFrame.md#resetcustom)

#### Inherited from

[Box](Box.md).[resetCustom](Box.md#resetcustom)

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

[IFrame](../interfaces/IFrame.md).[waitParent](../interfaces/IFrame.md#waitparent)

#### Inherited from

[Box](Box.md).[waitParent](Box.md#waitparent)

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

[IFrame](../interfaces/IFrame.md).[waitLeafer](../interfaces/IFrame.md#waitleafer)

#### Inherited from

[Box](Box.md).[waitLeafer](Box.md#waitleafer)

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

[IFrame](../interfaces/IFrame.md).[nextRender](../interfaces/IFrame.md#nextrender)

#### Inherited from

[Box](Box.md).[nextRender](Box.md#nextrender)

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

[IFrame](../interfaces/IFrame.md).[removeNextRender](../interfaces/IFrame.md#removenextrender)

#### Inherited from

[Box](Box.md).[removeNextRender](Box.md#removenextrender)

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

[IFrame](../interfaces/IFrame.md).[__bindLeafer](../interfaces/IFrame.md#__bindleafer)

#### Inherited from

[Box](Box.md).[__bindLeafer](Box.md#__bindleafer)

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

[IFrame](../interfaces/IFrame.md).[setAttr](../interfaces/IFrame.md#setattr)

#### Inherited from

[Box](Box.md).[setAttr](Box.md#setattr)

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

[IFrame](../interfaces/IFrame.md).[getAttr](../interfaces/IFrame.md#getattr)

#### Inherited from

[Box](Box.md).[getAttr](Box.md#getattr)

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

[IFrame](../interfaces/IFrame.md).[getComputedAttr](../interfaces/IFrame.md#getcomputedattr)

#### Inherited from

[Box](Box.md).[getComputedAttr](Box.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L191)

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

[IFrame](../interfaces/IFrame.md).[toString](../interfaces/IFrame.md#tostring)

#### Inherited from

[Box](Box.md).[toString](Box.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L198)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[toSVG](../interfaces/IFrame.md#tosvg)

#### Inherited from

[Box](Box.md).[toSVG](Box.md#tosvg)

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

[IFrame](../interfaces/IFrame.md).[__SVG](../interfaces/IFrame.md#__svg)

#### Inherited from

[Box](Box.md).[__SVG](Box.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L204)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[toHTML](../interfaces/IFrame.md#tohtml)

#### Inherited from

[Box](Box.md).[toHTML](Box.md#tohtml)

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

[IFrame](../interfaces/IFrame.md).[__setAttr](../interfaces/IFrame.md#__setattr)

#### Inherited from

[Box](Box.md).[__setAttr](Box.md#__setattr)

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

[IFrame](../interfaces/IFrame.md).[__getAttr](../interfaces/IFrame.md#__getattr)

#### Inherited from

[Box](Box.md).[__getAttr](Box.md#__getattr)

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

[IFrame](../interfaces/IFrame.md).[setProxyAttr](../interfaces/IFrame.md#setproxyattr)

#### Inherited from

[Box](Box.md).[setProxyAttr](Box.md#setproxyattr)

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

[IFrame](../interfaces/IFrame.md).[getProxyAttr](../interfaces/IFrame.md#getproxyattr)

#### Inherited from

[Box](Box.md).[getProxyAttr](Box.md#getproxyattr)

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

[IFrame](../interfaces/IFrame.md).[focus](../interfaces/IFrame.md#focus)

#### Inherited from

[Box](Box.md).[focus](Box.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L236)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[updateState](../interfaces/IFrame.md#updatestate)

#### Inherited from

[Box](Box.md).[updateState](Box.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L238)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[updateLayout](../interfaces/IFrame.md#updatelayout)

#### Inherited from

[Box](Box.md).[updateLayout](Box.md#updatelayout)

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

[IFrame](../interfaces/IFrame.md).[forceUpdate](../interfaces/IFrame.md#forceupdate)

#### Inherited from

[Box](Box.md).[forceUpdate](Box.md#forceupdate)

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

[IFrame](../interfaces/IFrame.md).[forceRender](../interfaces/IFrame.md#forcerender)

#### Inherited from

[Box](Box.md).[forceRender](Box.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L255)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__extraUpdate](../interfaces/IFrame.md#__extraupdate)

#### Inherited from

[Box](Box.md).[__extraUpdate](Box.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:259](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L259)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateWorldMatrix](../interfaces/IFrame.md#__updateworldmatrix)

#### Inherited from

[Box](Box.md).[__updateWorldMatrix](Box.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L265)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateLocalMatrix](../interfaces/IFrame.md#__updatelocalmatrix)

#### Inherited from

[Box](Box.md).[__updateLocalMatrix](Box.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L267)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateWorldBounds](../interfaces/IFrame.md#__updateworldbounds)

#### Inherited from

[Box](Box.md).[__updateWorldBounds](Box.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateLocalBounds](../interfaces/IFrame.md#__updatelocalbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBounds](Box.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateLocalBoxBounds](../interfaces/IFrame.md#__updatelocalboxbounds)

#### Inherited from

[Box](Box.md).[__updateLocalBoxBounds](Box.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateLocalStrokeBounds](../interfaces/IFrame.md#__updatelocalstrokebounds)

#### Inherited from

[Box](Box.md).[__updateLocalStrokeBounds](Box.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateLocalRenderBounds](../interfaces/IFrame.md#__updatelocalrenderbounds)

#### Inherited from

[Box](Box.md).[__updateLocalRenderBounds](Box.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L282)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateContentBounds](../interfaces/IFrame.md#__updatecontentbounds)

#### Inherited from

[Box](Box.md).[__updateContentBounds](Box.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L288)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateAutoLayout](../interfaces/IFrame.md#__updateautolayout)

#### Inherited from

[Box](Box.md).[__updateAutoLayout](Box.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L295)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateFlowLayout](../interfaces/IFrame.md#__updateflowlayout)

#### Inherited from

[Box](Box.md).[__updateFlowLayout](Box.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L297)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateNaturalSize](../interfaces/IFrame.md#__updatenaturalsize)

#### Inherited from

[Box](Box.md).[__updateNaturalSize](Box.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L299)

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

[IFrame](../interfaces/IFrame.md).[__updateEraser](../interfaces/IFrame.md#__updateeraser)

#### Inherited from

[Box](Box.md).[__updateEraser](Box.md#__updateeraser)

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

[IFrame](../interfaces/IFrame.md).[__renderEraser](../interfaces/IFrame.md#__rendereraser)

#### Inherited from

[Box](Box.md).[__renderEraser](Box.md#__rendereraser)

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

[IFrame](../interfaces/IFrame.md).[__updateMask](../interfaces/IFrame.md#__updatemask)

#### Inherited from

[Box](Box.md).[__updateMask](Box.md#__updatemask)

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

[IFrame](../interfaces/IFrame.md).[__renderMask](../interfaces/IFrame.md#__rendermask)

#### Inherited from

[Box](Box.md).[__renderMask](Box.md#__rendermask)

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

[IFrame](../interfaces/IFrame.md).[__getNowWorld](../interfaces/IFrame.md#__getnowworld)

#### Inherited from

[Box](Box.md).[__getNowWorld](Box.md#__getnowworld)

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

[IFrame](../interfaces/IFrame.md).[getTransform](../interfaces/IFrame.md#gettransform)

#### Inherited from

[Box](Box.md).[getTransform](Box.md#gettransform)

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

[IFrame](../interfaces/IFrame.md).[getBounds](../interfaces/IFrame.md#getbounds)

#### Inherited from

[Box](Box.md).[getBounds](Box.md#getbounds)

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

[IFrame](../interfaces/IFrame.md).[getLayoutBounds](../interfaces/IFrame.md#getlayoutbounds)

#### Inherited from

[Box](Box.md).[getLayoutBounds](Box.md#getlayoutbounds)

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

[IFrame](../interfaces/IFrame.md).[getLayoutPoints](../interfaces/IFrame.md#getlayoutpoints)

#### Inherited from

[Box](Box.md).[getLayoutPoints](Box.md#getlayoutpoints)

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

[IFrame](../interfaces/IFrame.md).[getWorldBounds](../interfaces/IFrame.md#getworldbounds)

#### Inherited from

[Box](Box.md).[getWorldBounds](Box.md#getworldbounds)

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

[IFrame](../interfaces/IFrame.md).[worldToLocal](../interfaces/IFrame.md#worldtolocal)

#### Inherited from

[Box](Box.md).[worldToLocal](Box.md#worldtolocal)

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

[IFrame](../interfaces/IFrame.md).[localToWorld](../interfaces/IFrame.md#localtoworld)

#### Inherited from

[Box](Box.md).[localToWorld](Box.md#localtoworld)

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

[IFrame](../interfaces/IFrame.md).[worldToInner](../interfaces/IFrame.md#worldtoinner)

#### Inherited from

[Box](Box.md).[worldToInner](Box.md#worldtoinner)

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

[IFrame](../interfaces/IFrame.md).[innerToWorld](../interfaces/IFrame.md#innertoworld)

#### Inherited from

[Box](Box.md).[innerToWorld](Box.md#innertoworld)

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

[IFrame](../interfaces/IFrame.md).[getBoxPoint](../interfaces/IFrame.md#getboxpoint)

#### Inherited from

[Box](Box.md).[getBoxPoint](Box.md#getboxpoint)

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

[IFrame](../interfaces/IFrame.md).[getBoxPointByInner](../interfaces/IFrame.md#getboxpointbyinner)

#### Inherited from

[Box](Box.md).[getBoxPointByInner](Box.md#getboxpointbyinner)

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

[IFrame](../interfaces/IFrame.md).[getInnerPoint](../interfaces/IFrame.md#getinnerpoint)

#### Inherited from

[Box](Box.md).[getInnerPoint](Box.md#getinnerpoint)

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

[IFrame](../interfaces/IFrame.md).[getInnerPointByBox](../interfaces/IFrame.md#getinnerpointbybox)

#### Inherited from

[Box](Box.md).[getInnerPointByBox](Box.md#getinnerpointbybox)

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

[IFrame](../interfaces/IFrame.md).[getInnerPointByLocal](../interfaces/IFrame.md#getinnerpointbylocal)

#### Inherited from

[Box](Box.md).[getInnerPointByLocal](Box.md#getinnerpointbylocal)

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

[IFrame](../interfaces/IFrame.md).[getLocalPoint](../interfaces/IFrame.md#getlocalpoint)

#### Inherited from

[Box](Box.md).[getLocalPoint](Box.md#getlocalpoint)

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

[IFrame](../interfaces/IFrame.md).[getLocalPointByInner](../interfaces/IFrame.md#getlocalpointbyinner)

#### Inherited from

[Box](Box.md).[getLocalPointByInner](Box.md#getlocalpointbyinner)

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

[IFrame](../interfaces/IFrame.md).[getPagePoint](../interfaces/IFrame.md#getpagepoint)

#### Inherited from

[Box](Box.md).[getPagePoint](Box.md#getpagepoint)

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

[IFrame](../interfaces/IFrame.md).[getWorldPoint](../interfaces/IFrame.md#getworldpoint)

#### Inherited from

[Box](Box.md).[getWorldPoint](Box.md#getworldpoint)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByBox](../interfaces/IFrame.md#getworldpointbybox)

#### Inherited from

[Box](Box.md).[getWorldPointByBox](Box.md#getworldpointbybox)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByLocal](../interfaces/IFrame.md#getworldpointbylocal)

#### Inherited from

[Box](Box.md).[getWorldPointByLocal](Box.md#getworldpointbylocal)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByPage](../interfaces/IFrame.md#getworldpointbypage)

#### Inherited from

[Box](Box.md).[getWorldPointByPage](Box.md#getworldpointbypage)

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

[IFrame](../interfaces/IFrame.md).[setTransform](../interfaces/IFrame.md#settransform)

#### Inherited from

[Box](Box.md).[setTransform](Box.md#settransform)

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

[IFrame](../interfaces/IFrame.md).[transform](../interfaces/IFrame.md#transform)

#### Inherited from

[Box](Box.md).[transform](Box.md#transform)

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

[IFrame](../interfaces/IFrame.md).[move](../interfaces/IFrame.md#move)

#### Inherited from

[Box](Box.md).[move](Box.md#move)

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

[IFrame](../interfaces/IFrame.md).[moveInner](../interfaces/IFrame.md#moveinner)

#### Inherited from

[Box](Box.md).[moveInner](Box.md#moveinner)

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

[IFrame](../interfaces/IFrame.md).[scaleOf](../interfaces/IFrame.md#scaleof)

#### Inherited from

[Box](Box.md).[scaleOf](Box.md#scaleof)

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

[IFrame](../interfaces/IFrame.md).[rotateOf](../interfaces/IFrame.md#rotateof)

#### Inherited from

[Box](Box.md).[rotateOf](Box.md#rotateof)

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

[IFrame](../interfaces/IFrame.md).[skewOf](../interfaces/IFrame.md#skewof)

#### Inherited from

[Box](Box.md).[skewOf](Box.md#skewof)

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

[IFrame](../interfaces/IFrame.md).[transformWorld](../interfaces/IFrame.md#transformworld)

#### Inherited from

[Box](Box.md).[transformWorld](Box.md#transformworld)

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

[IFrame](../interfaces/IFrame.md).[moveWorld](../interfaces/IFrame.md#moveworld)

#### Inherited from

[Box](Box.md).[moveWorld](Box.md#moveworld)

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

[IFrame](../interfaces/IFrame.md).[scaleOfWorld](../interfaces/IFrame.md#scaleofworld)

#### Inherited from

[Box](Box.md).[scaleOfWorld](Box.md#scaleofworld)

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

[IFrame](../interfaces/IFrame.md).[rotateOfWorld](../interfaces/IFrame.md#rotateofworld)

#### Inherited from

[Box](Box.md).[rotateOfWorld](Box.md#rotateofworld)

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

[IFrame](../interfaces/IFrame.md).[skewOfWorld](../interfaces/IFrame.md#skewofworld)

#### Inherited from

[Box](Box.md).[skewOfWorld](Box.md#skewofworld)

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

[IFrame](../interfaces/IFrame.md).[flip](../interfaces/IFrame.md#flip)

#### Inherited from

[Box](Box.md).[flip](Box.md#flip)

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

[IFrame](../interfaces/IFrame.md).[scaleResize](../interfaces/IFrame.md#scaleresize)

#### Inherited from

[Box](Box.md).[scaleResize](Box.md#scaleresize)

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

[IFrame](../interfaces/IFrame.md).[__scaleResize](../interfaces/IFrame.md#__scaleresize)

#### Inherited from

[Box](Box.md).[__scaleResize](Box.md#__scaleresize)

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

[IFrame](../interfaces/IFrame.md).[resizeWidth](../interfaces/IFrame.md#resizewidth)

#### Inherited from

[Box](Box.md).[resizeWidth](Box.md#resizewidth)

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

[IFrame](../interfaces/IFrame.md).[resizeHeight](../interfaces/IFrame.md#resizeheight)

#### Inherited from

[Box](Box.md).[resizeHeight](Box.md#resizeheight)

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

[IFrame](../interfaces/IFrame.md).[__hitWorld](../interfaces/IFrame.md#__hitworld)

#### Inherited from

[Box](Box.md).[__hitWorld](Box.md#__hitworld)

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

[IFrame](../interfaces/IFrame.md).[__hit](../interfaces/IFrame.md#__hit)

#### Inherited from

[Box](Box.md).[__hit](Box.md#__hit)

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

[IFrame](../interfaces/IFrame.md).[__hitFill](../interfaces/IFrame.md#__hitfill)

#### Inherited from

[Box](Box.md).[__hitFill](Box.md#__hitfill)

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

[IFrame](../interfaces/IFrame.md).[__hitStroke](../interfaces/IFrame.md#__hitstroke)

#### Inherited from

[Box](Box.md).[__hitStroke](Box.md#__hitstroke)

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

[IFrame](../interfaces/IFrame.md).[__hitPixel](../interfaces/IFrame.md#__hitpixel)

#### Inherited from

[Box](Box.md).[__hitPixel](Box.md#__hitpixel)

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

[IFrame](../interfaces/IFrame.md).[__drawHitPath](../interfaces/IFrame.md#__drawhitpath)

#### Inherited from

[Box](Box.md).[__drawHitPath](Box.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:554](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L554)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateHitCanvas](../interfaces/IFrame.md#__updatehitcanvas)

#### Inherited from

[Box](Box.md).[__updateHitCanvas](Box.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:556](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L556)

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

[IFrame](../interfaces/IFrame.md).[__drawFast](../interfaces/IFrame.md#__drawfast)

#### Inherited from

[Box](Box.md).[__drawFast](Box.md#__drawfast)

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

[IFrame](../interfaces/IFrame.md).[__draw](../interfaces/IFrame.md#__draw)

#### Inherited from

[Box](Box.md).[__draw](Box.md#__draw)

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

[IFrame](../interfaces/IFrame.md).[__clip](../interfaces/IFrame.md#__clip)

#### Inherited from

[Box](Box.md).[__clip](Box.md#__clip)

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

[IFrame](../interfaces/IFrame.md).[__renderShape](../interfaces/IFrame.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L572)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateWorldOpacity](../interfaces/IFrame.md#__updateworldopacity)

#### Inherited from

[Box](Box.md).[__updateWorldOpacity](Box.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L575)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updatePath](../interfaces/IFrame.md#__updatepath)

#### Inherited from

[Box](Box.md).[__updatePath](Box.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L588)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[getMotionPathData](../interfaces/IFrame.md#getmotionpathdata)

#### Inherited from

[Box](Box.md).[getMotionPathData](Box.md#getmotionpathdata)

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

[IFrame](../interfaces/IFrame.md).[getMotionPoint](../interfaces/IFrame.md#getmotionpoint)

#### Inherited from

[Box](Box.md).[getMotionPoint](Box.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:601](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L601)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[getMotionTotal](../interfaces/IFrame.md#getmotiontotal)

#### Inherited from

[Box](Box.md).[getMotionTotal](Box.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:605](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L605)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateMotionPath](../interfaces/IFrame.md#__updatemotionpath)

#### Inherited from

[Box](Box.md).[__updateMotionPath](Box.md#__updatemotionpath)

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

[IFrame](../interfaces/IFrame.md).[__runAnimation](../interfaces/IFrame.md#__runanimation)

#### Inherited from

[Box](Box.md).[__runAnimation](Box.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:615](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L615)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateSortChildren](../interfaces/IFrame.md#__updatesortchildren)

#### Inherited from

[Box](Box.md).[__updateSortChildren](Box.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:620](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L620)

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

[IFrame](../interfaces/IFrame.md).[dropTo](../interfaces/IFrame.md#dropto)

#### Inherited from

[Box](Box.md).[dropTo](Box.md#dropto)

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

[IFrame](../interfaces/IFrame.md).[on](../interfaces/IFrame.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

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

[IFrame](../interfaces/IFrame.md).[off](../interfaces/IFrame.md#off)

#### Inherited from

[Box](Box.md).[off](Box.md#off)

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

[IFrame](../interfaces/IFrame.md).[on_](../interfaces/IFrame.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

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

[IFrame](../interfaces/IFrame.md).[off_](../interfaces/IFrame.md#off_)

#### Inherited from

[Box](Box.md).[off_](Box.md#off_)

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

[IFrame](../interfaces/IFrame.md).[once](../interfaces/IFrame.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

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

[IFrame](../interfaces/IFrame.md).[emit](../interfaces/IFrame.md#emit)

#### Inherited from

[Box](Box.md).[emit](Box.md#emit)

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

[IFrame](../interfaces/IFrame.md).[emitEvent](../interfaces/IFrame.md#emitevent)

#### Inherited from

[Box](Box.md).[emitEvent](Box.md#emitevent)

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

[IFrame](../interfaces/IFrame.md).[hasEvent](../interfaces/IFrame.md#hasevent)

#### Inherited from

[Box](Box.md).[hasEvent](Box.md#hasevent)

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

[Box](Box.md).[changeAttr](Box.md#changeattr)

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

[Box](Box.md).[addAttr](Box.md#addattr)

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

[IFrame](../interfaces/IFrame.md).[__emitLifeEvent](../interfaces/IFrame.md#__emitlifeevent)

#### Inherited from

[Box](Box.md).[__emitLifeEvent](Box.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:665](https://github.com/leaferjs/leafer/blob/985f85e/packages/display/src/Leaf.ts#L665)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateStrokeSpread](../interfaces/IFrame.md#__updatestrokespread)

#### Inherited from

[Box](Box.md).[__updateStrokeSpread](Box.md#__updatestrokespread)

#### Defined in

[ui/packages/display/src/Box.ts:50](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L50)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:53](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L53)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateRenderSpread](../interfaces/IFrame.md#__updaterenderspread)

#### Inherited from

[Box](Box.md).[__updateRenderSpread](Box.md#__updaterenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L55)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:59](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L59)

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

[IFrame](../interfaces/IFrame.md).[__updateBoxBounds](../interfaces/IFrame.md#__updateboxbounds)

#### Inherited from

[Box](Box.md).[__updateBoxBounds](Box.md#__updateboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L63)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateStrokeBounds](../interfaces/IFrame.md#__updatestrokebounds)

#### Inherited from

[Box](Box.md).[__updateStrokeBounds](Box.md#__updatestrokebounds)

#### Defined in

[ui/packages/display/src/Box.ts:94](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L94)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateRenderBounds](../interfaces/IFrame.md#__updaterenderbounds)

#### Inherited from

[Box](Box.md).[__updateRenderBounds](Box.md#__updaterenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:96](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L96)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateRectRenderBounds](../interfaces/IFrame.md#__updaterectrenderbounds)

#### Inherited from

[Box](Box.md).[__updateRectRenderBounds](Box.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:113](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L113)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[ui/packages/display/src/Box.ts:116](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L116)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateChange](../interfaces/IFrame.md#__updatechange)

#### Inherited from

[Box](Box.md).[__updateChange](Box.md#__updatechange)

#### Defined in

[ui/packages/display/src/Box.ts:118](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L118)

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

[ui/packages/display/src/Box.ts:125](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L125)

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

[IFrame](../interfaces/IFrame.md).[__renderGroup](../interfaces/IFrame.md#__rendergroup)

#### Inherited from

[Box](Box.md).[__renderGroup](Box.md#__rendergroup)

#### Defined in

[ui/packages/display/src/Box.ts:128](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L128)

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

[IFrame](../interfaces/IFrame.md).[__render](../interfaces/IFrame.md#__render)

#### Inherited from

[Box](Box.md).[__render](Box.md#__render)

#### Defined in

[ui/packages/display/src/Box.ts:131](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L131)

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

[IFrame](../interfaces/IFrame.md).[__drawContent](../interfaces/IFrame.md#__drawcontent)

#### Inherited from

[Box](Box.md).[__drawContent](Box.md#__drawcontent)

#### Defined in

[ui/packages/display/src/Box.ts:141](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Box.ts#L141)

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

[IFrame](../interfaces/IFrame.md).[reset](../interfaces/IFrame.md#reset)

#### Inherited from

[Box](Box.md).[reset](Box.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:34](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L34)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:39](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L39)

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

[IFrame](../interfaces/IFrame.md).[set](../interfaces/IFrame.md#set)

#### Inherited from

[Box](Box.md).[set](Box.md#set)

#### Defined in

[ui/packages/display/src/Group.ts:46](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L46)

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

[IFrame](../interfaces/IFrame.md).[toJSON](../interfaces/IFrame.md#tojson)

#### Inherited from

[Box](Box.md).[toJSON](Box.md#tojson)

#### Defined in

[ui/packages/display/src/Group.ts:63](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L63)

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

[IFrame](../interfaces/IFrame.md).[pick](../interfaces/IFrame.md#pick)

#### Inherited from

[Box](Box.md).[pick](Box.md#pick)

#### Defined in

[ui/packages/display/src/Group.ts:72](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L72)

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

[IFrame](../interfaces/IFrame.md).[addAt](../interfaces/IFrame.md#addat)

#### Inherited from

[Box](Box.md).[addAt](Box.md#addat)

#### Defined in

[ui/packages/display/src/Group.ts:77](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L77)

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

[IFrame](../interfaces/IFrame.md).[addAfter](../interfaces/IFrame.md#addafter)

#### Inherited from

[Box](Box.md).[addAfter](Box.md#addafter)

#### Defined in

[ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L81)

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

[IFrame](../interfaces/IFrame.md).[addBefore](../interfaces/IFrame.md#addbefore)

#### Inherited from

[Box](Box.md).[addBefore](Box.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L85)

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

[IFrame](../interfaces/IFrame.md).[add](../interfaces/IFrame.md#add)

#### Inherited from

[Box](Box.md).[add](Box.md#add)

#### Defined in

[ui/packages/display/src/Group.ts:91](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L91)

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

[IFrame](../interfaces/IFrame.md).[addMany](../interfaces/IFrame.md#addmany)

#### Inherited from

[Box](Box.md).[addMany](Box.md#addmany)

#### Defined in

[ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L93)

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

[IFrame](../interfaces/IFrame.md).[remove](../interfaces/IFrame.md#remove)

#### Inherited from

[Box](Box.md).[remove](Box.md#remove)

#### Defined in

[ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L95)

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

[IFrame](../interfaces/IFrame.md).[removeAll](../interfaces/IFrame.md#removeall)

#### Inherited from

[Box](Box.md).[removeAll](Box.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L97)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[clear](../interfaces/IFrame.md#clear)

#### Inherited from

[Box](Box.md).[clear](Box.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/Group.ts#L99)

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

[IFrame](../interfaces/IFrame.md).[get](../interfaces/IFrame.md#get)

#### Inherited from

[Box](Box.md).[get](Box.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L415)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[createProxyData](../interfaces/IFrame.md#createproxydata)

#### Inherited from

[Box](Box.md).[createProxyData](Box.md#createproxydata)

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

[IFrame](../interfaces/IFrame.md).[find](../interfaces/IFrame.md#find)

#### Inherited from

[Box](Box.md).[find](Box.md#find)

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

[IFrame](../interfaces/IFrame.md).[findTag](../interfaces/IFrame.md#findtag)

#### Inherited from

[Box](Box.md).[findTag](Box.md#findtag)

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

[IFrame](../interfaces/IFrame.md).[findOne](../interfaces/IFrame.md#findone)

#### Inherited from

[Box](Box.md).[findOne](Box.md#findone)

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

[IFrame](../interfaces/IFrame.md).[findId](../interfaces/IFrame.md#findid)

#### Inherited from

[Box](Box.md).[findId](Box.md#findid)

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

[IFrame](../interfaces/IFrame.md).[getPath](../interfaces/IFrame.md#getpath)

#### Inherited from

[Box](Box.md).[getPath](Box.md#getpath)

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

[IFrame](../interfaces/IFrame.md).[getPathString](../interfaces/IFrame.md#getpathstring)

#### Inherited from

[Box](Box.md).[getPathString](Box.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L442)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[load](../interfaces/IFrame.md#load)

#### Inherited from

[Box](Box.md).[load](Box.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:447](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L447)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__onUpdateSize](../interfaces/IFrame.md#__onupdatesize)

#### Inherited from

[Box](Box.md).[__onUpdateSize](Box.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:451](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L451)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateRenderPath](../interfaces/IFrame.md#__updaterenderpath)

#### Inherited from

[Box](Box.md).[__updateRenderPath](Box.md#__updaterenderpath)

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

[IFrame](../interfaces/IFrame.md).[__drawRenderPath](../interfaces/IFrame.md#__drawrenderpath)

#### Inherited from

[Box](Box.md).[__drawRenderPath](Box.md#__drawrenderpath)

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

[IFrame](../interfaces/IFrame.md).[__drawPath](../interfaces/IFrame.md#__drawpath)

#### Inherited from

[Box](Box.md).[__drawPath](Box.md#__drawpath)

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

[IFrame](../interfaces/IFrame.md).[__drawPathByData](../interfaces/IFrame.md#__drawpathbydata)

#### Inherited from

[Box](Box.md).[__drawPathByData](Box.md#__drawpathbydata)

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

[IFrame](../interfaces/IFrame.md).[__drawPathByBox](../interfaces/IFrame.md#__drawpathbybox)

#### Inherited from

[Box](Box.md).[__drawPathByBox](Box.md#__drawpathbybox)

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

[IFrame](../interfaces/IFrame.md).[drawImagePlaceholder](../interfaces/IFrame.md#drawimageplaceholder)

#### Inherited from

[Box](Box.md).[drawImagePlaceholder](Box.md#drawimageplaceholder)

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

[IFrame](../interfaces/IFrame.md).[animate](../interfaces/IFrame.md#animate)

#### Inherited from

[Box](Box.md).[animate](Box.md#animate)

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

[IFrame](../interfaces/IFrame.md).[killAnimate](../interfaces/IFrame.md#killanimate)

#### Inherited from

[Box](Box.md).[killAnimate](Box.md#killanimate)

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

[IFrame](../interfaces/IFrame.md).[export](../interfaces/IFrame.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

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

[IFrame](../interfaces/IFrame.md).[syncExport](../interfaces/IFrame.md#syncexport)

#### Inherited from

[Box](Box.md).[syncExport](Box.md#syncexport)

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

[IFrame](../interfaces/IFrame.md).[clone](../interfaces/IFrame.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

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

#### Inherited from

[Box](Box.md).[one](Box.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:518](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L518)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

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

#### Inherited from

[Box](Box.md).[registerData](Box.md#registerdata)

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

#### Inherited from

[Box](Box.md).[setEditConfig](Box.md#seteditconfig)

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

#### Inherited from

[Box](Box.md).[setEditOuter](Box.md#seteditouter)

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

#### Inherited from

[Box](Box.md).[setEditInner](Box.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:537](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L537)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[destroy](../interfaces/IFrame.md#destroy)

#### Inherited from

[Box](Box.md).[destroy](Box.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/5313537/packages/display/src/UI.ts#L540)
