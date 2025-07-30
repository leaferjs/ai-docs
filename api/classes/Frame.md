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
- [scrollBar](Frame.md#scrollbar)
- [\_\_](Frame.md#__)
- [fill](Frame.md#fill)
- [overflow](Frame.md#overflow)
- [children](Frame.md#children)
- [childlessJSON](Frame.md#childlessjson)
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
- [renderSpread](Frame.md#renderspread)
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
- [isAutoWidth](Frame.md#isautowidth)
- [isAutoHeight](Frame.md#isautoheight)
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
- [getClampRenderScale](Frame.md#getclamprenderscale)
- [getRenderScaleData](Frame.md#getrenderscaledata)
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
- [hit](Frame.md#hit)
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
- [\_\_drawShape](Frame.md#__drawshape)
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
- [\_\_updateScrollBar](Frame.md#__updatescrollbar)
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

• **new Frame**(`data?`): [`Frame`](Frame.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IFrameInputData`](../interfaces/IFrameInputData.md) |

#### Returns

[`Frame`](Frame.md)

#### Overrides

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[src/ui/packages/display/src/Frame.ts:25](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L25)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[innerId](../interfaces/IFrame.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[syncEventer](../interfaces/IFrame.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lockNormalStyle](../interfaces/IFrame.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__layout](../interfaces/IFrame.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__world](../interfaces/IFrame.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__local](../interfaces/IFrame.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__nowWorld](../interfaces/IFrame.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__cameraWorld](../interfaces/IFrame.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__worldOpacity](../interfaces/IFrame.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L63)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__level](../interfaces/IFrame.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:79](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L79)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__tempNumber](../interfaces/IFrame.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L80)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasAutoLayout](../interfaces/IFrame.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L84)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasMask](../interfaces/IFrame.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L85)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasEraser](../interfaces/IFrame.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L86)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hitCanvas](../interfaces/IFrame.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L87)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__captureMap](../interfaces/IFrame.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:98](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L98)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__bubbleMap](../interfaces/IFrame.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L99)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasLocalEvent](../interfaces/IFrame.md#__haslocalevent)

#### Inherited from

[Box](Box.md).[__hasLocalEvent](Box.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L101)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__hasWorldEvent](../interfaces/IFrame.md#__hasworldevent)

#### Inherited from

[Box](Box.md).[__hasWorldEvent](Box.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L102)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[destroyed](../interfaces/IFrame.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:107](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L107)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[width](../interfaces/IFrame.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[src/ui/packages/display/src/Box.ts:28](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L28)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[height](../interfaces/IFrame.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[src/ui/packages/display/src/Box.ts:31](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L31)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[resizeChildren](../interfaces/IFrame.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[src/ui/packages/display/src/Box.ts:34](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L34)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[textBox](../interfaces/IFrame.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[src/ui/packages/display/src/Box.ts:37](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L37)

___

### isOverflow

• **isOverflow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isOverflow](../interfaces/IFrame.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[src/ui/packages/display/src/Box.ts:42](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L42)

___

### scrollBar

• `Optional` **scrollBar**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scrollBar](../interfaces/IFrame.md#scrollbar)

#### Inherited from

[Box](Box.md).[scrollBar](Box.md#scrollbar)

#### Defined in

[src/ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L44)

___

### \_\_

• **\_\_**: [`IFrameData`](../interfaces/IFrameData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__](../interfaces/IFrame.md#__)

#### Overrides

[Box](Box.md).[__](Box.md#__)

#### Defined in

[src/ui/packages/display/src/Frame.ts:17](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L17)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[fill](../interfaces/IFrame.md#fill)

#### Overrides

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[src/ui/packages/display/src/Frame.ts:20](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L20)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[overflow](../interfaces/IFrame.md#overflow)

#### Overrides

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[src/ui/packages/display/src/Frame.ts:23](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L23)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[children](../interfaces/IFrame.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L28)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[childlessJSON](../interfaces/IFrame.md#childlessjson)

#### Inherited from

[Box](Box.md).[childlessJSON](Box.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L30)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[proxyData](../interfaces/IFrame.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__proxyData](../interfaces/IFrame.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[leafer](../interfaces/IFrame.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[parent](../interfaces/IFrame.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[zoomLayer](../interfaces/IFrame.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[id](../interfaces/IFrame.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[name](../interfaces/IFrame.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[className](../interfaces/IFrame.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[blendMode](../interfaces/IFrame.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[opacity](../interfaces/IFrame.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IFrame](../interfaces/IFrame.md).[visible](../interfaces/IFrame.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[locked](../interfaces/IFrame.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dim](../interfaces/IFrame.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dimskip](../interfaces/IFrame.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[zIndex](../interfaces/IFrame.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[mask](../interfaces/IFrame.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[eraser](../interfaces/IFrame.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[x](../interfaces/IFrame.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[y](../interfaces/IFrame.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scaleX](../interfaces/IFrame.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scaleY](../interfaces/IFrame.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[rotation](../interfaces/IFrame.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[skewX](../interfaces/IFrame.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[skewY](../interfaces/IFrame.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[offsetX](../interfaces/IFrame.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[offsetY](../interfaces/IFrame.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scrollX](../interfaces/IFrame.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[scrollY](../interfaces/IFrame.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[origin](../interfaces/IFrame.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[around](../interfaces/IFrame.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lazy](../interfaces/IFrame.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pixelRatio](../interfaces/IFrame.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L143)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[renderSpread](../interfaces/IFrame.md#renderspread)

#### Inherited from

[Box](Box.md).[renderSpread](Box.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[path](../interfaces/IFrame.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[windingRule](../interfaces/IFrame.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[closed](../interfaces/IFrame.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L158)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flow](../interfaces/IFrame.md#flow)

#### Inherited from

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L162)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[padding](../interfaces/IFrame.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[gap](../interfaces/IFrame.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flowAlign](../interfaces/IFrame.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[flowWrap](../interfaces/IFrame.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[itemBox](../interfaces/IFrame.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[inFlow](../interfaces/IFrame.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoWidth](../interfaces/IFrame.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoHeight](../interfaces/IFrame.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[lockRatio](../interfaces/IFrame.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[autoBox](../interfaces/IFrame.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[widthRange](../interfaces/IFrame.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[heightRange](../interfaces/IFrame.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[draggable](../interfaces/IFrame.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dragBounds](../interfaces/IFrame.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L200)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editable](../interfaces/IFrame.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L204)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hittable](../interfaces/IFrame.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:209](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L209)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitFill](../interfaces/IFrame.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L212)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitStroke](../interfaces/IFrame.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L215)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitBox](../interfaces/IFrame.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L218)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitChildren](../interfaces/IFrame.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L221)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitSelf](../interfaces/IFrame.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L224)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hitRadius](../interfaces/IFrame.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L227)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cursor](../interfaces/IFrame.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L230)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[stroke](../interfaces/IFrame.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:243](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L243)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeAlign](../interfaces/IFrame.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L246)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeWidth](../interfaces/IFrame.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L249)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeWidthFixed](../interfaces/IFrame.md#strokewidthfixed)

#### Inherited from

[Box](Box.md).[strokeWidthFixed](Box.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L252)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeCap](../interfaces/IFrame.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L255)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[strokeJoin](../interfaces/IFrame.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L258)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dashPattern](../interfaces/IFrame.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L261)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[dashOffset](../interfaces/IFrame.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L264)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[miterLimit](../interfaces/IFrame.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L267)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[startArrow](../interfaces/IFrame.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:272](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L272)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[endArrow](../interfaces/IFrame.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L274)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cornerRadius](../interfaces/IFrame.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L279)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[cornerSmoothing](../interfaces/IFrame.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L282)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[shadow](../interfaces/IFrame.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:287](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L287)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[innerShadow](../interfaces/IFrame.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L290)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[blur](../interfaces/IFrame.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L293)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[backgroundBlur](../interfaces/IFrame.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L296)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[grayscale](../interfaces/IFrame.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L299)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[filter](../interfaces/IFrame.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L302)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[animation](../interfaces/IFrame.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:307](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L307)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IFrame](../interfaces/IFrame.md).[animationOut](../interfaces/IFrame.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L309)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[transition](../interfaces/IFrame.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L312)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[transitionOut](../interfaces/IFrame.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L314)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionPath](../interfaces/IFrame.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L319)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionPrecision](../interfaces/IFrame.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L321)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motion](../interfaces/IFrame.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L324)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[motionRotation](../interfaces/IFrame.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L326)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[states](../interfaces/IFrame.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L331)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[state](../interfaces/IFrame.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L333)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[selected](../interfaces/IFrame.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L336)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[disabled](../interfaces/IFrame.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L338)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[normalStyle](../interfaces/IFrame.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L341)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[hoverStyle](../interfaces/IFrame.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L343)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[pressStyle](../interfaces/IFrame.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L345)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[focusStyle](../interfaces/IFrame.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L347)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[selectedStyle](../interfaces/IFrame.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:349](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L349)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[disabledStyle](../interfaces/IFrame.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:351](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L351)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderStyle](../interfaces/IFrame.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L354)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderColor](../interfaces/IFrame.md#placeholdercolor)

#### Inherited from

[Box](Box.md).[placeholderColor](Box.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L357)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[placeholderDelay](../interfaces/IFrame.md#placeholderdelay)

#### Inherited from

[Box](Box.md).[placeholderDelay](Box.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L360)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[button](../interfaces/IFrame.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L363)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editConfig](../interfaces/IFrame.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L368)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editOuter](../interfaces/IFrame.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L370)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[editInner](../interfaces/IFrame.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:372](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L372)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[data](../interfaces/IFrame.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L377)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[useFastShadow](../interfaces/IFrame.md#usefastshadow)

#### Inherited from

[Box](Box.md).[useFastShadow](Box.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L386)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__box](../interfaces/IFrame.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L388)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__animate](../interfaces/IFrame.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L389)

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

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L27)

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

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L28)

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

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L33)

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

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L35)

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

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L36)

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

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L41)

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

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L42)

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

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L44)

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

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L60)

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

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L61)

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

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L66)

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

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L67)

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

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L70)

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

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L71)

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

[src/leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L72)

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

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L73)

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

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L74)

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

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L77)

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

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L82)

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

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L89)

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

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L90)

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

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L91)

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

[IFrame](../interfaces/IFrame.md).[event](../interfaces/IFrame.md#event)

#### Inherited from

Box.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L96)

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

[src/ui/packages/display/src/Box.ts:21](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L21)

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

[src/ui/packages/display/src/Frame.ts:12](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L12)

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

[src/ui/packages/display/src/Frame.ts:14](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Frame.ts#L14)

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

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L16)

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

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L24)

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

[src/ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L381)

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

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L380)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isAutoWidth](../interfaces/IFrame.md#isautowidth)

#### Inherited from

Box.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L383)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[isAutoHeight](../interfaces/IFrame.md#isautoheight)

#### Inherited from

Box.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L384)

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

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L391)

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

[IFrame](../interfaces/IFrame.md).[waitParent](../interfaces/IFrame.md#waitparent)

#### Inherited from

[Box](Box.md).[waitParent](Box.md#waitparent)

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

[IFrame](../interfaces/IFrame.md).[waitLeafer](../interfaces/IFrame.md#waitleafer)

#### Inherited from

[Box](Box.md).[waitLeafer](Box.md#waitleafer)

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

[IFrame](../interfaces/IFrame.md).[nextRender](../interfaces/IFrame.md#nextrender)

#### Inherited from

[Box](Box.md).[nextRender](Box.md#nextrender)

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

[IFrame](../interfaces/IFrame.md).[removeNextRender](../interfaces/IFrame.md#removenextrender)

#### Inherited from

[Box](Box.md).[removeNextRender](Box.md#removenextrender)

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

[IFrame](../interfaces/IFrame.md).[__bindLeafer](../interfaces/IFrame.md#__bindleafer)

#### Inherited from

[Box](Box.md).[__bindLeafer](Box.md#__bindleafer)

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

[IFrame](../interfaces/IFrame.md).[setAttr](../interfaces/IFrame.md#setattr)

#### Inherited from

[Box](Box.md).[setAttr](Box.md#setattr)

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

[IFrame](../interfaces/IFrame.md).[getAttr](../interfaces/IFrame.md#getattr)

#### Inherited from

[Box](Box.md).[getAttr](Box.md#getattr)

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

[IFrame](../interfaces/IFrame.md).[getComputedAttr](../interfaces/IFrame.md#getcomputedattr)

#### Inherited from

[Box](Box.md).[getComputedAttr](Box.md#getcomputedattr)

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

[IFrame](../interfaces/IFrame.md).[toString](../interfaces/IFrame.md#tostring)

#### Inherited from

[Box](Box.md).[toString](Box.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:200](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L200)

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

[IFrame](../interfaces/IFrame.md).[__SVG](../interfaces/IFrame.md#__svg)

#### Inherited from

[Box](Box.md).[__SVG](Box.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L206)

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

[IFrame](../interfaces/IFrame.md).[__setAttr](../interfaces/IFrame.md#__setattr)

#### Inherited from

[Box](Box.md).[__setAttr](Box.md#__setattr)

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

[IFrame](../interfaces/IFrame.md).[__getAttr](../interfaces/IFrame.md#__getattr)

#### Inherited from

[Box](Box.md).[__getAttr](Box.md#__getattr)

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

[IFrame](../interfaces/IFrame.md).[setProxyAttr](../interfaces/IFrame.md#setproxyattr)

#### Inherited from

[Box](Box.md).[setProxyAttr](Box.md#setproxyattr)

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

[IFrame](../interfaces/IFrame.md).[getProxyAttr](../interfaces/IFrame.md#getproxyattr)

#### Inherited from

[Box](Box.md).[getProxyAttr](Box.md#getproxyattr)

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

[IFrame](../interfaces/IFrame.md).[focus](../interfaces/IFrame.md#focus)

#### Inherited from

[Box](Box.md).[focus](Box.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L238)

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

[src/leafer/packages/display/src/Leaf.ts:240](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L240)

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

[IFrame](../interfaces/IFrame.md).[forceUpdate](../interfaces/IFrame.md#forceupdate)

#### Inherited from

[Box](Box.md).[forceUpdate](Box.md#forceupdate)

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

[IFrame](../interfaces/IFrame.md).[forceRender](../interfaces/IFrame.md#forcerender)

#### Inherited from

[Box](Box.md).[forceRender](Box.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:257](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L257)

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

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L261)

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

[src/leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L267)

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

[src/leafer/packages/display/src/Leaf.ts:269](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L269)

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

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L275)

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

[src/leafer/packages/display/src/Leaf.ts:277](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L277)

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

[src/leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L280)

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

[src/leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L282)

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

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L284)

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

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L290)

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

[src/leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L297)

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

[src/leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L299)

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

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L301)

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

[IFrame](../interfaces/IFrame.md).[__renderEraser](../interfaces/IFrame.md#__rendereraser)

#### Inherited from

[Box](Box.md).[__renderEraser](Box.md#__rendereraser)

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

[IFrame](../interfaces/IFrame.md).[__updateMask](../interfaces/IFrame.md#__updatemask)

#### Inherited from

[Box](Box.md).[__updateMask](Box.md#__updatemask)

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

[IFrame](../interfaces/IFrame.md).[__renderMask](../interfaces/IFrame.md#__rendermask)

#### Inherited from

[Box](Box.md).[__renderMask](Box.md#__rendermask)

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

[IFrame](../interfaces/IFrame.md).[__getNowWorld](../interfaces/IFrame.md#__getnowworld)

#### Inherited from

[Box](Box.md).[__getNowWorld](Box.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:339](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L339)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[getClampRenderScale](../interfaces/IFrame.md#getclamprenderscale)

#### Inherited from

[Box](Box.md).[getClampRenderScale](Box.md#getclamprenderscale)

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

[IFrame](../interfaces/IFrame.md).[getRenderScaleData](../interfaces/IFrame.md#getrenderscaledata)

#### Inherited from

[Box](Box.md).[getRenderScaleData](Box.md#getrenderscaledata)

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

[IFrame](../interfaces/IFrame.md).[getTransform](../interfaces/IFrame.md#gettransform)

#### Inherited from

[Box](Box.md).[getTransform](Box.md#gettransform)

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

[IFrame](../interfaces/IFrame.md).[getBounds](../interfaces/IFrame.md#getbounds)

#### Inherited from

[Box](Box.md).[getBounds](Box.md#getbounds)

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

[IFrame](../interfaces/IFrame.md).[getLayoutBounds](../interfaces/IFrame.md#getlayoutbounds)

#### Inherited from

[Box](Box.md).[getLayoutBounds](Box.md#getlayoutbounds)

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

[IFrame](../interfaces/IFrame.md).[getLayoutPoints](../interfaces/IFrame.md#getlayoutpoints)

#### Inherited from

[Box](Box.md).[getLayoutPoints](Box.md#getlayoutpoints)

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

[IFrame](../interfaces/IFrame.md).[getWorldBounds](../interfaces/IFrame.md#getworldbounds)

#### Inherited from

[Box](Box.md).[getWorldBounds](Box.md#getworldbounds)

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

[IFrame](../interfaces/IFrame.md).[worldToLocal](../interfaces/IFrame.md#worldtolocal)

#### Inherited from

[Box](Box.md).[worldToLocal](Box.md#worldtolocal)

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

[IFrame](../interfaces/IFrame.md).[localToWorld](../interfaces/IFrame.md#localtoworld)

#### Inherited from

[Box](Box.md).[localToWorld](Box.md#localtoworld)

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

[IFrame](../interfaces/IFrame.md).[worldToInner](../interfaces/IFrame.md#worldtoinner)

#### Inherited from

[Box](Box.md).[worldToInner](Box.md#worldtoinner)

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

[IFrame](../interfaces/IFrame.md).[innerToWorld](../interfaces/IFrame.md#innertoworld)

#### Inherited from

[Box](Box.md).[innerToWorld](Box.md#innertoworld)

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

[IFrame](../interfaces/IFrame.md).[getBoxPoint](../interfaces/IFrame.md#getboxpoint)

#### Inherited from

[Box](Box.md).[getBoxPoint](Box.md#getboxpoint)

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

[IFrame](../interfaces/IFrame.md).[getBoxPointByInner](../interfaces/IFrame.md#getboxpointbyinner)

#### Inherited from

[Box](Box.md).[getBoxPointByInner](Box.md#getboxpointbyinner)

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

[IFrame](../interfaces/IFrame.md).[getInnerPoint](../interfaces/IFrame.md#getinnerpoint)

#### Inherited from

[Box](Box.md).[getInnerPoint](Box.md#getinnerpoint)

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

[IFrame](../interfaces/IFrame.md).[getInnerPointByBox](../interfaces/IFrame.md#getinnerpointbybox)

#### Inherited from

[Box](Box.md).[getInnerPointByBox](Box.md#getinnerpointbybox)

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

[IFrame](../interfaces/IFrame.md).[getInnerPointByLocal](../interfaces/IFrame.md#getinnerpointbylocal)

#### Inherited from

[Box](Box.md).[getInnerPointByLocal](Box.md#getinnerpointbylocal)

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

[IFrame](../interfaces/IFrame.md).[getLocalPoint](../interfaces/IFrame.md#getlocalpoint)

#### Inherited from

[Box](Box.md).[getLocalPoint](Box.md#getlocalpoint)

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

[IFrame](../interfaces/IFrame.md).[getLocalPointByInner](../interfaces/IFrame.md#getlocalpointbyinner)

#### Inherited from

[Box](Box.md).[getLocalPointByInner](Box.md#getlocalpointbyinner)

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

[IFrame](../interfaces/IFrame.md).[getPagePoint](../interfaces/IFrame.md#getpagepoint)

#### Inherited from

[Box](Box.md).[getPagePoint](Box.md#getpagepoint)

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

[IFrame](../interfaces/IFrame.md).[getWorldPoint](../interfaces/IFrame.md#getworldpoint)

#### Inherited from

[Box](Box.md).[getWorldPoint](Box.md#getworldpoint)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByBox](../interfaces/IFrame.md#getworldpointbybox)

#### Inherited from

[Box](Box.md).[getWorldPointByBox](Box.md#getworldpointbybox)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByLocal](../interfaces/IFrame.md#getworldpointbylocal)

#### Inherited from

[Box](Box.md).[getWorldPointByLocal](Box.md#getworldpointbylocal)

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

[IFrame](../interfaces/IFrame.md).[getWorldPointByPage](../interfaces/IFrame.md#getworldpointbypage)

#### Inherited from

[Box](Box.md).[getWorldPointByPage](Box.md#getworldpointbypage)

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

[IFrame](../interfaces/IFrame.md).[setTransform](../interfaces/IFrame.md#settransform)

#### Inherited from

[Box](Box.md).[setTransform](Box.md#settransform)

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

[IFrame](../interfaces/IFrame.md).[transform](../interfaces/IFrame.md#transform)

#### Inherited from

[Box](Box.md).[transform](Box.md#transform)

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

[IFrame](../interfaces/IFrame.md).[move](../interfaces/IFrame.md#move)

#### Inherited from

[Box](Box.md).[move](Box.md#move)

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

[IFrame](../interfaces/IFrame.md).[moveInner](../interfaces/IFrame.md#moveinner)

#### Inherited from

[Box](Box.md).[moveInner](Box.md#moveinner)

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

[IFrame](../interfaces/IFrame.md).[scaleOf](../interfaces/IFrame.md#scaleof)

#### Inherited from

[Box](Box.md).[scaleOf](Box.md#scaleof)

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

[IFrame](../interfaces/IFrame.md).[rotateOf](../interfaces/IFrame.md#rotateof)

#### Inherited from

[Box](Box.md).[rotateOf](Box.md#rotateof)

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

[IFrame](../interfaces/IFrame.md).[skewOf](../interfaces/IFrame.md#skewof)

#### Inherited from

[Box](Box.md).[skewOf](Box.md#skewof)

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

[IFrame](../interfaces/IFrame.md).[transformWorld](../interfaces/IFrame.md#transformworld)

#### Inherited from

[Box](Box.md).[transformWorld](Box.md#transformworld)

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

[IFrame](../interfaces/IFrame.md).[moveWorld](../interfaces/IFrame.md#moveworld)

#### Inherited from

[Box](Box.md).[moveWorld](Box.md#moveworld)

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

[IFrame](../interfaces/IFrame.md).[scaleOfWorld](../interfaces/IFrame.md#scaleofworld)

#### Inherited from

[Box](Box.md).[scaleOfWorld](Box.md#scaleofworld)

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

[IFrame](../interfaces/IFrame.md).[rotateOfWorld](../interfaces/IFrame.md#rotateofworld)

#### Inherited from

[Box](Box.md).[rotateOfWorld](Box.md#rotateofworld)

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

[IFrame](../interfaces/IFrame.md).[skewOfWorld](../interfaces/IFrame.md#skewofworld)

#### Inherited from

[Box](Box.md).[skewOfWorld](Box.md#skewofworld)

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

[IFrame](../interfaces/IFrame.md).[flip](../interfaces/IFrame.md#flip)

#### Inherited from

[Box](Box.md).[flip](Box.md#flip)

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

[IFrame](../interfaces/IFrame.md).[scaleResize](../interfaces/IFrame.md#scaleresize)

#### Inherited from

[Box](Box.md).[scaleResize](Box.md#scaleresize)

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

[IFrame](../interfaces/IFrame.md).[__scaleResize](../interfaces/IFrame.md#__scaleresize)

#### Inherited from

[Box](Box.md).[__scaleResize](Box.md#__scaleresize)

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

[IFrame](../interfaces/IFrame.md).[resizeWidth](../interfaces/IFrame.md#resizewidth)

#### Inherited from

[Box](Box.md).[resizeWidth](Box.md#resizewidth)

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

[IFrame](../interfaces/IFrame.md).[resizeHeight](../interfaces/IFrame.md#resizeheight)

#### Inherited from

[Box](Box.md).[resizeHeight](Box.md#resizeheight)

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

[IFrame](../interfaces/IFrame.md).[hit](../interfaces/IFrame.md#hit)

#### Inherited from

[Box](Box.md).[hit](Box.md#hit)

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

[IFrame](../interfaces/IFrame.md).[__hitWorld](../interfaces/IFrame.md#__hitworld)

#### Inherited from

[Box](Box.md).[__hitWorld](Box.md#__hitworld)

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

[IFrame](../interfaces/IFrame.md).[__hit](../interfaces/IFrame.md#__hit)

#### Inherited from

[Box](Box.md).[__hit](Box.md#__hit)

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

[IFrame](../interfaces/IFrame.md).[__hitFill](../interfaces/IFrame.md#__hitfill)

#### Inherited from

[Box](Box.md).[__hitFill](Box.md#__hitfill)

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

[IFrame](../interfaces/IFrame.md).[__hitStroke](../interfaces/IFrame.md#__hitstroke)

#### Inherited from

[Box](Box.md).[__hitStroke](Box.md#__hitstroke)

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

[IFrame](../interfaces/IFrame.md).[__hitPixel](../interfaces/IFrame.md#__hitpixel)

#### Inherited from

[Box](Box.md).[__hitPixel](Box.md#__hitpixel)

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

[IFrame](../interfaces/IFrame.md).[__drawHitPath](../interfaces/IFrame.md#__drawhitpath)

#### Inherited from

[Box](Box.md).[__drawHitPath](Box.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L573)

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

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L575)

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

[IFrame](../interfaces/IFrame.md).[__draw](../interfaces/IFrame.md#__draw)

#### Inherited from

[Box](Box.md).[__draw](Box.md#__draw)

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

[IFrame](../interfaces/IFrame.md).[__clip](../interfaces/IFrame.md#__clip)

#### Inherited from

[Box](Box.md).[__clip](Box.md#__clip)

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

[IFrame](../interfaces/IFrame.md).[__renderShape](../interfaces/IFrame.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

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

[IFrame](../interfaces/IFrame.md).[__drawShape](../interfaces/IFrame.md#__drawshape)

#### Inherited from

[Box](Box.md).[__drawShape](Box.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L593)

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

[src/leafer/packages/display/src/Leaf.ts:596](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L596)

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

[src/leafer/packages/display/src/Leaf.ts:609](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L609)

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

[IFrame](../interfaces/IFrame.md).[getMotionPoint](../interfaces/IFrame.md#getmotionpoint)

#### Inherited from

[Box](Box.md).[getMotionPoint](Box.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L622)

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

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L626)

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

[IFrame](../interfaces/IFrame.md).[__runAnimation](../interfaces/IFrame.md#__runanimation)

#### Inherited from

[Box](Box.md).[__runAnimation](Box.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:636](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L636)

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

[IFrame](../interfaces/IFrame.md).[dropTo](../interfaces/IFrame.md#dropto)

#### Inherited from

[Box](Box.md).[dropTo](Box.md#dropto)

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

[IFrame](../interfaces/IFrame.md).[on](../interfaces/IFrame.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

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

[IFrame](../interfaces/IFrame.md).[off](../interfaces/IFrame.md#off)

#### Inherited from

[Box](Box.md).[off](Box.md#off)

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

[IFrame](../interfaces/IFrame.md).[on_](../interfaces/IFrame.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

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

[IFrame](../interfaces/IFrame.md).[off_](../interfaces/IFrame.md#off_)

#### Inherited from

[Box](Box.md).[off_](Box.md#off_)

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

[IFrame](../interfaces/IFrame.md).[once](../interfaces/IFrame.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

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

[IFrame](../interfaces/IFrame.md).[emit](../interfaces/IFrame.md#emit)

#### Inherited from

[Box](Box.md).[emit](Box.md#emit)

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

[IFrame](../interfaces/IFrame.md).[emitEvent](../interfaces/IFrame.md#emitevent)

#### Inherited from

[Box](Box.md).[emitEvent](Box.md#emitevent)

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

[IFrame](../interfaces/IFrame.md).[hasEvent](../interfaces/IFrame.md#hasevent)

#### Inherited from

[Box](Box.md).[hasEvent](Box.md#hasevent)

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

[Box](Box.md).[changeAttr](Box.md#changeattr)

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

[Box](Box.md).[addAttr](Box.md#addattr)

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

[IFrame](../interfaces/IFrame.md).[__emitLifeEvent](../interfaces/IFrame.md#__emitlifeevent)

#### Inherited from

[Box](Box.md).[__emitLifeEvent](Box.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:686](https://github.com/leaferjs/leafer/blob/d3ec2c9bd49557a0d74aae684f8e3d3d557af194/packages/display/src/Leaf.ts#L686)

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

[src/ui/packages/display/src/Box.ts:52](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L52)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[src/ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L55)

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

[src/ui/packages/display/src/Box.ts:57](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L57)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:61](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L61)

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

[src/ui/packages/display/src/Box.ts:65](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L65)

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

[src/ui/packages/display/src/Box.ts:96](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L96)

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

[src/ui/packages/display/src/Box.ts:98](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L98)

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

[src/ui/packages/display/src/Box.ts:124](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L124)

___

### \_\_updateScrollBar

▸ **__updateScrollBar**(): `void`

#### Returns

`void`

#### Implementation of

[IFrame](../interfaces/IFrame.md).[__updateScrollBar](../interfaces/IFrame.md#__updatescrollbar)

#### Inherited from

[Box](Box.md).[__updateScrollBar](Box.md#__updatescrollbar)

#### Defined in

[src/ui/packages/display/src/Box.ts:127](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L127)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[src/ui/packages/display/src/Box.ts:131](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L131)

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

[src/ui/packages/display/src/Box.ts:133](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L133)

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

[src/ui/packages/display/src/Box.ts:140](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L140)

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

[src/ui/packages/display/src/Box.ts:143](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L143)

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

[src/ui/packages/display/src/Box.ts:146](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L146)

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

[src/ui/packages/display/src/Box.ts:157](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Box.ts#L157)

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

[src/ui/packages/display/src/Group.ts:36](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L36)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

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

[IFrame](../interfaces/IFrame.md).[set](../interfaces/IFrame.md#set)

#### Inherited from

[Box](Box.md).[set](Box.md#set)

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

[IFrame](../interfaces/IFrame.md).[toJSON](../interfaces/IFrame.md#tojson)

#### Inherited from

[Box](Box.md).[toJSON](Box.md#tojson)

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

[IFrame](../interfaces/IFrame.md).[pick](../interfaces/IFrame.md#pick)

#### Inherited from

[Box](Box.md).[pick](Box.md#pick)

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

[IFrame](../interfaces/IFrame.md).[addAt](../interfaces/IFrame.md#addat)

#### Inherited from

[Box](Box.md).[addAt](Box.md#addat)

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

[IFrame](../interfaces/IFrame.md).[addAfter](../interfaces/IFrame.md#addafter)

#### Inherited from

[Box](Box.md).[addAfter](Box.md#addafter)

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

[IFrame](../interfaces/IFrame.md).[addBefore](../interfaces/IFrame.md#addbefore)

#### Inherited from

[Box](Box.md).[addBefore](Box.md#addbefore)

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

[IFrame](../interfaces/IFrame.md).[add](../interfaces/IFrame.md#add)

#### Inherited from

[Box](Box.md).[add](Box.md#add)

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

[IFrame](../interfaces/IFrame.md).[addMany](../interfaces/IFrame.md#addmany)

#### Inherited from

[Box](Box.md).[addMany](Box.md#addmany)

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

[IFrame](../interfaces/IFrame.md).[remove](../interfaces/IFrame.md#remove)

#### Inherited from

[Box](Box.md).[remove](Box.md#remove)

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

[IFrame](../interfaces/IFrame.md).[removeAll](../interfaces/IFrame.md#removeall)

#### Inherited from

[Box](Box.md).[removeAll](Box.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/Group.ts#L99)

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

[IFrame](../interfaces/IFrame.md).[get](../interfaces/IFrame.md#get)

#### Inherited from

[Box](Box.md).[get](Box.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L422)

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

[IFrame](../interfaces/IFrame.md).[find](../interfaces/IFrame.md#find)

#### Inherited from

[Box](Box.md).[find](Box.md#find)

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

[IFrame](../interfaces/IFrame.md).[findTag](../interfaces/IFrame.md#findtag)

#### Inherited from

[Box](Box.md).[findTag](Box.md#findtag)

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

[IFrame](../interfaces/IFrame.md).[findOne](../interfaces/IFrame.md#findone)

#### Inherited from

[Box](Box.md).[findOne](Box.md#findone)

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

[IFrame](../interfaces/IFrame.md).[findId](../interfaces/IFrame.md#findid)

#### Inherited from

[Box](Box.md).[findId](Box.md#findid)

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

[IFrame](../interfaces/IFrame.md).[getPath](../interfaces/IFrame.md#getpath)

#### Inherited from

[Box](Box.md).[getPath](Box.md#getpath)

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

[IFrame](../interfaces/IFrame.md).[getPathString](../interfaces/IFrame.md#getpathstring)

#### Inherited from

[Box](Box.md).[getPathString](Box.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:449](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L449)

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

[src/ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L454)

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

[src/ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L458)

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

[IFrame](../interfaces/IFrame.md).[__drawRenderPath](../interfaces/IFrame.md#__drawrenderpath)

#### Inherited from

[Box](Box.md).[__drawRenderPath](Box.md#__drawrenderpath)

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

[IFrame](../interfaces/IFrame.md).[__drawPath](../interfaces/IFrame.md#__drawpath)

#### Inherited from

[Box](Box.md).[__drawPath](Box.md#__drawpath)

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

[IFrame](../interfaces/IFrame.md).[__drawPathByData](../interfaces/IFrame.md#__drawpathbydata)

#### Inherited from

[Box](Box.md).[__drawPathByData](Box.md#__drawpathbydata)

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

[IFrame](../interfaces/IFrame.md).[__drawPathByBox](../interfaces/IFrame.md#__drawpathbybox)

#### Inherited from

[Box](Box.md).[__drawPathByBox](Box.md#__drawpathbybox)

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

[IFrame](../interfaces/IFrame.md).[drawImagePlaceholder](../interfaces/IFrame.md#drawimageplaceholder)

#### Inherited from

[Box](Box.md).[drawImagePlaceholder](Box.md#drawimageplaceholder)

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

[IFrame](../interfaces/IFrame.md).[animate](../interfaces/IFrame.md#animate)

#### Inherited from

[Box](Box.md).[animate](Box.md#animate)

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

[IFrame](../interfaces/IFrame.md).[killAnimate](../interfaces/IFrame.md#killanimate)

#### Inherited from

[Box](Box.md).[killAnimate](Box.md#killanimate)

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

[IFrame](../interfaces/IFrame.md).[export](../interfaces/IFrame.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

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

[IFrame](../interfaces/IFrame.md).[syncExport](../interfaces/IFrame.md#syncexport)

#### Inherited from

[Box](Box.md).[syncExport](Box.md#syncexport)

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

[IFrame](../interfaces/IFrame.md).[clone](../interfaces/IFrame.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

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

[Box](Box.md).[one](Box.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:525](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L525)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

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

[Box](Box.md).[registerData](Box.md#registerdata)

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

[Box](Box.md).[setEditConfig](Box.md#seteditconfig)

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

[Box](Box.md).[setEditOuter](Box.md#seteditouter)

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

[Box](Box.md).[setEditInner](Box.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:544](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L544)

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

[src/ui/packages/display/src/UI.ts:547](https://github.com/leaferjs/leafer-ui/blob/a20ecb9bdfba27311c7c73d6d251875f5dedca2b/packages/display/src/UI.ts#L547)
