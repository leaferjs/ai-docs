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
- [\_\_scrollWorld](EditPoint.md#__scrollworld)
- [\_\_level](EditPoint.md#__level)
- [\_\_tempNumber](EditPoint.md#__tempnumber)
- [\_\_hasAutoLayout](EditPoint.md#__hasautolayout)
- [\_\_hasMask](EditPoint.md#__hasmask)
- [\_\_hasEraser](EditPoint.md#__haseraser)
- [\_\_hitCanvas](EditPoint.md#__hitcanvas)
- [\_\_captureMap](EditPoint.md#__capturemap)
- [\_\_bubbleMap](EditPoint.md#__bubblemap)
- [\_\_hasLocalEvent](EditPoint.md#__haslocalevent)
- [\_\_hasWorldEvent](EditPoint.md#__hasworldevent)
- [destroyed](EditPoint.md#destroyed)
- [\_\_](EditPoint.md#__)
- [width](EditPoint.md#width)
- [height](EditPoint.md#height)
- [resizeChildren](EditPoint.md#resizechildren)
- [textBox](EditPoint.md#textbox)
- [overflow](EditPoint.md#overflow)
- [isOverflow](EditPoint.md#isoverflow)
- [scrollConfig](EditPoint.md#scrollconfig)
- [scroller](EditPoint.md#scroller)
- [hasScroller](EditPoint.md#hasscroller)
- [children](EditPoint.md#children)
- [topChildren](EditPoint.md#topchildren)
- [childlessJSON](EditPoint.md#childlessjson)
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
- [renderSpread](EditPoint.md#renderspread)
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
- [dragBoundsType](EditPoint.md#dragboundstype)
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
- [placeholderColor](EditPoint.md#placeholdercolor)
- [placeholderDelay](EditPoint.md#placeholderdelay)
- [button](EditPoint.md#button)
- [editConfig](EditPoint.md#editconfig)
- [editOuter](EditPoint.md#editouter)
- [editInner](EditPoint.md#editinner)
- [data](EditPoint.md#data)
- [useFastShadow](EditPoint.md#usefastshadow)
- [\_\_box](EditPoint.md#__box)
- [\_\_animate](EditPoint.md#__animate)

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
- [scrollWorldTransform](EditPoint.md#scrollworldtransform)
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
- [isAutoWidth](EditPoint.md#isautowidth)
- [isAutoHeight](EditPoint.md#isautoheight)
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
- [getClampRenderScale](EditPoint.md#getclamprenderscale)
- [getRenderScaleData](EditPoint.md#getrenderscaledata)
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
- [hit](EditPoint.md#hit)
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
- [\_\_drawShape](EditPoint.md#__drawshape)
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
- [\_\_updateWorldBounds](EditPoint.md#__updateworldbounds)
- [\_\_checkScroll](EditPoint.md#__checkscroll)
- [\_\_updateScroll](EditPoint.md#__updatescroll)
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
- [drawImagePlaceholder](EditPoint.md#drawimageplaceholder)
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

• **new EditPoint**(`data`): [`EditPoint`](EditPoint.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IEditPointInputData`](../interfaces/IEditPointInputData.md) |

#### Returns

[`EditPoint`](EditPoint.md)

#### Overrides

[Box](Box.md).[constructor](Box.md#constructor)

#### Defined in

[src/in/packages/editor/src/display/EditPoint.ts:11](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/display/EditPoint.ts#L11)

## Properties

### direction

• **direction**: [`Direction9`](../enums/Direction9.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[direction](../interfaces/IEditPoint.md#direction)

#### Defined in

[src/in/packages/editor/src/display/EditPoint.ts:8](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/display/EditPoint.ts#L8)

___

### pointType

• **pointType**: [`IEditPointType`](../modules.md#ieditpointtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pointType](../interfaces/IEditPoint.md#pointtype)

#### Defined in

[src/in/packages/editor/src/display/EditPoint.ts:9](https://github.com/leaferjs/leafer-in/blob/7c98c72b66f072cdb2c03c00af3f54939d5b6887/packages/editor/src/display/EditPoint.ts#L9)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[innerId](../interfaces/IEditPoint.md#innerid)

#### Inherited from

[Box](Box.md).[innerId](Box.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[syncEventer](../interfaces/IEditPoint.md#synceventer)

#### Inherited from

[Box](Box.md).[syncEventer](Box.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lockNormalStyle](../interfaces/IEditPoint.md#locknormalstyle)

#### Inherited from

[Box](Box.md).[lockNormalStyle](Box.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__layout](../interfaces/IEditPoint.md#__layout)

#### Inherited from

[Box](Box.md).[__layout](Box.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__world](../interfaces/IEditPoint.md#__world)

#### Inherited from

[Box](Box.md).[__world](Box.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__local](../interfaces/IEditPoint.md#__local)

#### Inherited from

[Box](Box.md).[__local](Box.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__nowWorld](../interfaces/IEditPoint.md#__nowworld)

#### Inherited from

[Box](Box.md).[__nowWorld](Box.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__cameraWorld](../interfaces/IEditPoint.md#__cameraworld)

#### Inherited from

[Box](Box.md).[__cameraWorld](Box.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__worldOpacity](../interfaces/IEditPoint.md#__worldopacity)

#### Inherited from

[Box](Box.md).[__worldOpacity](Box.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L63)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__scrollWorld](../interfaces/IEditPoint.md#__scrollworld)

#### Inherited from

[Box](Box.md).[__scrollWorld](Box.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L69)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__level](../interfaces/IEditPoint.md#__level)

#### Inherited from

[Box](Box.md).[__level](Box.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L82)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__tempNumber](../interfaces/IEditPoint.md#__tempnumber)

#### Inherited from

[Box](Box.md).[__tempNumber](Box.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L83)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasAutoLayout](../interfaces/IEditPoint.md#__hasautolayout)

#### Inherited from

[Box](Box.md).[__hasAutoLayout](Box.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L87)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasMask](../interfaces/IEditPoint.md#__hasmask)

#### Inherited from

[Box](Box.md).[__hasMask](Box.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L88)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasEraser](../interfaces/IEditPoint.md#__haseraser)

#### Inherited from

[Box](Box.md).[__hasEraser](Box.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L89)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hitCanvas](../interfaces/IEditPoint.md#__hitcanvas)

#### Inherited from

[Box](Box.md).[__hitCanvas](Box.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L90)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__captureMap](../interfaces/IEditPoint.md#__capturemap)

#### Inherited from

[Box](Box.md).[__captureMap](Box.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L101)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__bubbleMap](../interfaces/IEditPoint.md#__bubblemap)

#### Inherited from

[Box](Box.md).[__bubbleMap](Box.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L102)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasLocalEvent](../interfaces/IEditPoint.md#__haslocalevent)

#### Inherited from

[Box](Box.md).[__hasLocalEvent](Box.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L104)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__hasWorldEvent](../interfaces/IEditPoint.md#__hasworldevent)

#### Inherited from

[Box](Box.md).[__hasWorldEvent](Box.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L105)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[destroyed](../interfaces/IEditPoint.md#destroyed)

#### Inherited from

[Box](Box.md).[destroyed](Box.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L111)

___

### \_\_

• **\_\_**: [`IBoxData`](../interfaces/IBoxData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__](../interfaces/IEditPoint.md#__)

#### Inherited from

[Box](Box.md).[__](Box.md#__)

#### Defined in

[src/ui/packages/display/src/Box.ts:23](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L23)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[width](../interfaces/IEditPoint.md#width)

#### Inherited from

[Box](Box.md).[width](Box.md#width)

#### Defined in

[src/ui/packages/display/src/Box.ts:27](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L27)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[height](../interfaces/IEditPoint.md#height)

#### Inherited from

[Box](Box.md).[height](Box.md#height)

#### Defined in

[src/ui/packages/display/src/Box.ts:30](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L30)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[resizeChildren](../interfaces/IEditPoint.md#resizechildren)

#### Inherited from

[Box](Box.md).[resizeChildren](Box.md#resizechildren)

#### Defined in

[src/ui/packages/display/src/Box.ts:33](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L33)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[textBox](../interfaces/IEditPoint.md#textbox)

#### Inherited from

[Box](Box.md).[textBox](Box.md#textbox)

#### Defined in

[src/ui/packages/display/src/Box.ts:36](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L36)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[overflow](../interfaces/IEditPoint.md#overflow)

#### Inherited from

[Box](Box.md).[overflow](Box.md#overflow)

#### Defined in

[src/ui/packages/display/src/Box.ts:39](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L39)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isOverflow](../interfaces/IEditPoint.md#isoverflow)

#### Inherited from

[Box](Box.md).[isOverflow](Box.md#isoverflow)

#### Defined in

[src/ui/packages/display/src/Box.ts:41](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L41)

___

### scrollConfig

• `Optional` **scrollConfig**: [`IScrollConfig`](../interfaces/IScrollConfig.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollConfig](../interfaces/IEditPoint.md#scrollconfig)

#### Inherited from

[Box](Box.md).[scrollConfig](Box.md#scrollconfig)

#### Defined in

[src/ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L44)

___

### scroller

• `Optional` **scroller**: [`IScroller`](../interfaces/IScroller.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scroller](../interfaces/IEditPoint.md#scroller)

#### Inherited from

[Box](Box.md).[scroller](Box.md#scroller)

#### Defined in

[src/ui/packages/display/src/Box.ts:46](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L46)

___

### hasScroller

• `Optional` **hasScroller**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hasScroller](../interfaces/IEditPoint.md#hasscroller)

#### Inherited from

[Box](Box.md).[hasScroller](Box.md#hasscroller)

#### Defined in

[src/ui/packages/display/src/Box.ts:47](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L47)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[children](../interfaces/IEditPoint.md#children)

#### Inherited from

[Box](Box.md).[children](Box.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L28)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[topChildren](../interfaces/IEditPoint.md#topchildren)

#### Inherited from

[Box](Box.md).[topChildren](Box.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[childlessJSON](../interfaces/IEditPoint.md#childlessjson)

#### Inherited from

[Box](Box.md).[childlessJSON](Box.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L32)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[proxyData](../interfaces/IEditPoint.md#proxydata)

#### Inherited from

[Box](Box.md).[proxyData](Box.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__proxyData](../interfaces/IEditPoint.md#__proxydata)

#### Inherited from

[Box](Box.md).[__proxyData](Box.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[leafer](../interfaces/IEditPoint.md#leafer)

#### Inherited from

[Box](Box.md).[leafer](Box.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[parent](../interfaces/IEditPoint.md#parent)

#### Inherited from

[Box](Box.md).[parent](Box.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[zoomLayer](../interfaces/IEditPoint.md#zoomlayer)

#### Inherited from

[Box](Box.md).[zoomLayer](Box.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[id](../interfaces/IEditPoint.md#id)

#### Inherited from

[Box](Box.md).[id](Box.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[name](../interfaces/IEditPoint.md#name)

#### Inherited from

[Box](Box.md).[name](Box.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[className](../interfaces/IEditPoint.md#classname)

#### Inherited from

[Box](Box.md).[className](Box.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[blendMode](../interfaces/IEditPoint.md#blendmode)

#### Inherited from

[Box](Box.md).[blendMode](Box.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[opacity](../interfaces/IEditPoint.md#opacity)

#### Inherited from

[Box](Box.md).[opacity](Box.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[visible](../interfaces/IEditPoint.md#visible)

#### Inherited from

[Box](Box.md).[visible](Box.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[locked](../interfaces/IEditPoint.md#locked)

#### Inherited from

[Box](Box.md).[locked](Box.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dim](../interfaces/IEditPoint.md#dim)

#### Inherited from

[Box](Box.md).[dim](Box.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dimskip](../interfaces/IEditPoint.md#dimskip)

#### Inherited from

[Box](Box.md).[dimskip](Box.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[zIndex](../interfaces/IEditPoint.md#zindex)

#### Inherited from

[Box](Box.md).[zIndex](Box.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[mask](../interfaces/IEditPoint.md#mask)

#### Inherited from

[Box](Box.md).[mask](Box.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[eraser](../interfaces/IEditPoint.md#eraser)

#### Inherited from

[Box](Box.md).[eraser](Box.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[x](../interfaces/IEditPoint.md#x)

#### Inherited from

[Box](Box.md).[x](Box.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[y](../interfaces/IEditPoint.md#y)

#### Inherited from

[Box](Box.md).[y](Box.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scaleX](../interfaces/IEditPoint.md#scalex)

#### Inherited from

[Box](Box.md).[scaleX](Box.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scaleY](../interfaces/IEditPoint.md#scaley)

#### Inherited from

[Box](Box.md).[scaleY](Box.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[rotation](../interfaces/IEditPoint.md#rotation)

#### Inherited from

[Box](Box.md).[rotation](Box.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[skewX](../interfaces/IEditPoint.md#skewx)

#### Inherited from

[Box](Box.md).[skewX](Box.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[skewY](../interfaces/IEditPoint.md#skewy)

#### Inherited from

[Box](Box.md).[skewY](Box.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[offsetX](../interfaces/IEditPoint.md#offsetx)

#### Inherited from

[Box](Box.md).[offsetX](Box.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[offsetY](../interfaces/IEditPoint.md#offsety)

#### Inherited from

[Box](Box.md).[offsetY](Box.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollX](../interfaces/IEditPoint.md#scrollx)

#### Inherited from

[Box](Box.md).[scrollX](Box.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollY](../interfaces/IEditPoint.md#scrolly)

#### Inherited from

[Box](Box.md).[scrollY](Box.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[origin](../interfaces/IEditPoint.md#origin)

#### Inherited from

[Box](Box.md).[origin](Box.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[around](../interfaces/IEditPoint.md#around)

#### Inherited from

[Box](Box.md).[around](Box.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lazy](../interfaces/IEditPoint.md#lazy)

#### Inherited from

[Box](Box.md).[lazy](Box.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pixelRatio](../interfaces/IEditPoint.md#pixelratio)

#### Inherited from

[Box](Box.md).[pixelRatio](Box.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L143)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[renderSpread](../interfaces/IEditPoint.md#renderspread)

#### Inherited from

[Box](Box.md).[renderSpread](Box.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[path](../interfaces/IEditPoint.md#path)

#### Inherited from

[Box](Box.md).[path](Box.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[windingRule](../interfaces/IEditPoint.md#windingrule)

#### Inherited from

[Box](Box.md).[windingRule](Box.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[closed](../interfaces/IEditPoint.md#closed)

#### Inherited from

[Box](Box.md).[closed](Box.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L158)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flow](../interfaces/IEditPoint.md#flow)

#### Inherited from

[Box](Box.md).[flow](Box.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L162)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[padding](../interfaces/IEditPoint.md#padding)

#### Inherited from

[Box](Box.md).[padding](Box.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[gap](../interfaces/IEditPoint.md#gap)

#### Inherited from

[Box](Box.md).[gap](Box.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flowAlign](../interfaces/IEditPoint.md#flowalign)

#### Inherited from

[Box](Box.md).[flowAlign](Box.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[flowWrap](../interfaces/IEditPoint.md#flowwrap)

#### Inherited from

[Box](Box.md).[flowWrap](Box.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[itemBox](../interfaces/IEditPoint.md#itembox)

#### Inherited from

[Box](Box.md).[itemBox](Box.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[inFlow](../interfaces/IEditPoint.md#inflow)

#### Inherited from

[Box](Box.md).[inFlow](Box.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoWidth](../interfaces/IEditPoint.md#autowidth)

#### Inherited from

[Box](Box.md).[autoWidth](Box.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoHeight](../interfaces/IEditPoint.md#autoheight)

#### Inherited from

[Box](Box.md).[autoHeight](Box.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[lockRatio](../interfaces/IEditPoint.md#lockratio)

#### Inherited from

[Box](Box.md).[lockRatio](Box.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[autoBox](../interfaces/IEditPoint.md#autobox)

#### Inherited from

[Box](Box.md).[autoBox](Box.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[widthRange](../interfaces/IEditPoint.md#widthrange)

#### Inherited from

[Box](Box.md).[widthRange](Box.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[heightRange](../interfaces/IEditPoint.md#heightrange)

#### Inherited from

[Box](Box.md).[heightRange](Box.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[draggable](../interfaces/IEditPoint.md#draggable)

#### Inherited from

[Box](Box.md).[draggable](Box.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dragBounds](../interfaces/IEditPoint.md#dragbounds)

#### Inherited from

[Box](Box.md).[dragBounds](Box.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L200)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dragBoundsType](../interfaces/IEditPoint.md#dragboundstype)

#### Inherited from

[Box](Box.md).[dragBoundsType](Box.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L203)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editable](../interfaces/IEditPoint.md#editable)

#### Inherited from

[Box](Box.md).[editable](Box.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L207)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hittable](../interfaces/IEditPoint.md#hittable)

#### Inherited from

[Box](Box.md).[hittable](Box.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L212)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitFill](../interfaces/IEditPoint.md#hitfill)

#### Inherited from

[Box](Box.md).[hitFill](Box.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L215)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitStroke](../interfaces/IEditPoint.md#hitstroke)

#### Inherited from

[Box](Box.md).[hitStroke](Box.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L218)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitBox](../interfaces/IEditPoint.md#hitbox)

#### Inherited from

[Box](Box.md).[hitBox](Box.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L221)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitChildren](../interfaces/IEditPoint.md#hitchildren)

#### Inherited from

[Box](Box.md).[hitChildren](Box.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L224)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitSelf](../interfaces/IEditPoint.md#hitself)

#### Inherited from

[Box](Box.md).[hitSelf](Box.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L227)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hitRadius](../interfaces/IEditPoint.md#hitradius)

#### Inherited from

[Box](Box.md).[hitRadius](Box.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L230)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cursor](../interfaces/IEditPoint.md#cursor)

#### Inherited from

[Box](Box.md).[cursor](Box.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:233](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L233)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[fill](../interfaces/IEditPoint.md#fill)

#### Inherited from

[Box](Box.md).[fill](Box.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L241)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[stroke](../interfaces/IEditPoint.md#stroke)

#### Inherited from

[Box](Box.md).[stroke](Box.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L246)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeAlign](../interfaces/IEditPoint.md#strokealign)

#### Inherited from

[Box](Box.md).[strokeAlign](Box.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L249)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeWidth](../interfaces/IEditPoint.md#strokewidth)

#### Inherited from

[Box](Box.md).[strokeWidth](Box.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L252)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeWidthFixed](../interfaces/IEditPoint.md#strokewidthfixed)

#### Inherited from

[Box](Box.md).[strokeWidthFixed](Box.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L255)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeCap](../interfaces/IEditPoint.md#strokecap)

#### Inherited from

[Box](Box.md).[strokeCap](Box.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L258)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[strokeJoin](../interfaces/IEditPoint.md#strokejoin)

#### Inherited from

[Box](Box.md).[strokeJoin](Box.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L261)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dashPattern](../interfaces/IEditPoint.md#dashpattern)

#### Inherited from

[Box](Box.md).[dashPattern](Box.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L264)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[dashOffset](../interfaces/IEditPoint.md#dashoffset)

#### Inherited from

[Box](Box.md).[dashOffset](Box.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L267)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[miterLimit](../interfaces/IEditPoint.md#miterlimit)

#### Inherited from

[Box](Box.md).[miterLimit](Box.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L270)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[startArrow](../interfaces/IEditPoint.md#startarrow)

#### Inherited from

[Box](Box.md).[startArrow](Box.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L275)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[endArrow](../interfaces/IEditPoint.md#endarrow)

#### Inherited from

[Box](Box.md).[endArrow](Box.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:277](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L277)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cornerRadius](../interfaces/IEditPoint.md#cornerradius)

#### Inherited from

[Box](Box.md).[cornerRadius](Box.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L282)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[cornerSmoothing](../interfaces/IEditPoint.md#cornersmoothing)

#### Inherited from

[Box](Box.md).[cornerSmoothing](Box.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L285)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[shadow](../interfaces/IEditPoint.md#shadow)

#### Inherited from

[Box](Box.md).[shadow](Box.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L290)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[innerShadow](../interfaces/IEditPoint.md#innershadow)

#### Inherited from

[Box](Box.md).[innerShadow](Box.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L293)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[blur](../interfaces/IEditPoint.md#blur)

#### Inherited from

[Box](Box.md).[blur](Box.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L296)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[backgroundBlur](../interfaces/IEditPoint.md#backgroundblur)

#### Inherited from

[Box](Box.md).[backgroundBlur](Box.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L299)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[grayscale](../interfaces/IEditPoint.md#grayscale)

#### Inherited from

[Box](Box.md).[grayscale](Box.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L302)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[filter](../interfaces/IEditPoint.md#filter)

#### Inherited from

[Box](Box.md).[filter](Box.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L305)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[animation](../interfaces/IEditPoint.md#animation)

#### Inherited from

[Box](Box.md).[animation](Box.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L310)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[animationOut](../interfaces/IEditPoint.md#animationout)

#### Inherited from

[Box](Box.md).[animationOut](Box.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L312)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[transition](../interfaces/IEditPoint.md#transition)

#### Inherited from

[Box](Box.md).[transition](Box.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L315)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[transitionOut](../interfaces/IEditPoint.md#transitionout)

#### Inherited from

[Box](Box.md).[transitionOut](Box.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L317)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionPath](../interfaces/IEditPoint.md#motionpath)

#### Inherited from

[Box](Box.md).[motionPath](Box.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L322)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionPrecision](../interfaces/IEditPoint.md#motionprecision)

#### Inherited from

[Box](Box.md).[motionPrecision](Box.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L324)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motion](../interfaces/IEditPoint.md#motion)

#### Inherited from

[Box](Box.md).[motion](Box.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L327)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[motionRotation](../interfaces/IEditPoint.md#motionrotation)

#### Inherited from

[Box](Box.md).[motionRotation](Box.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L329)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[states](../interfaces/IEditPoint.md#states)

#### Inherited from

[Box](Box.md).[states](Box.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L334)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[state](../interfaces/IEditPoint.md#state)

#### Inherited from

[Box](Box.md).[state](Box.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L336)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[selected](../interfaces/IEditPoint.md#selected)

#### Inherited from

[Box](Box.md).[selected](Box.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L339)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[disabled](../interfaces/IEditPoint.md#disabled)

#### Inherited from

[Box](Box.md).[disabled](Box.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L341)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[normalStyle](../interfaces/IEditPoint.md#normalstyle)

#### Inherited from

[Box](Box.md).[normalStyle](Box.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L344)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[hoverStyle](../interfaces/IEditPoint.md#hoverstyle)

#### Inherited from

[Box](Box.md).[hoverStyle](Box.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:346](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L346)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[pressStyle](../interfaces/IEditPoint.md#pressstyle)

#### Inherited from

[Box](Box.md).[pressStyle](Box.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:348](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L348)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[focusStyle](../interfaces/IEditPoint.md#focusstyle)

#### Inherited from

[Box](Box.md).[focusStyle](Box.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L350)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[selectedStyle](../interfaces/IEditPoint.md#selectedstyle)

#### Inherited from

[Box](Box.md).[selectedStyle](Box.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L352)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[disabledStyle](../interfaces/IEditPoint.md#disabledstyle)

#### Inherited from

[Box](Box.md).[disabledStyle](Box.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L354)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[placeholderStyle](../interfaces/IEditPoint.md#placeholderstyle)

#### Inherited from

[Box](Box.md).[placeholderStyle](Box.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L357)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[placeholderColor](../interfaces/IEditPoint.md#placeholdercolor)

#### Inherited from

[Box](Box.md).[placeholderColor](Box.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L360)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[placeholderDelay](../interfaces/IEditPoint.md#placeholderdelay)

#### Inherited from

[Box](Box.md).[placeholderDelay](Box.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L363)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[button](../interfaces/IEditPoint.md#button)

#### Inherited from

[Box](Box.md).[button](Box.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L366)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editConfig](../interfaces/IEditPoint.md#editconfig)

#### Inherited from

[Box](Box.md).[editConfig](Box.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:371](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L371)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editOuter](../interfaces/IEditPoint.md#editouter)

#### Inherited from

[Box](Box.md).[editOuter](Box.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L373)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[editInner](../interfaces/IEditPoint.md#editinner)

#### Inherited from

[Box](Box.md).[editInner](Box.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:375](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L375)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[data](../interfaces/IEditPoint.md#data)

#### Inherited from

[Box](Box.md).[data](Box.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L380)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[useFastShadow](../interfaces/IEditPoint.md#usefastshadow)

#### Inherited from

[Box](Box.md).[useFastShadow](Box.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L389)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__box](../interfaces/IEditPoint.md#__box)

#### Inherited from

[Box](Box.md).[__box](Box.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L391)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__animate](../interfaces/IEditPoint.md#__animate)

#### Inherited from

[Box](Box.md).[__animate](Box.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:392](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L392)

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

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L27)

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

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L28)

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

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L33)

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

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L35)

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

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L36)

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

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L41)

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

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L42)

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

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L44)

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

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L60)

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

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L61)

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

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L66)

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

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L67)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[scrollWorldTransform](../interfaces/IEditPoint.md#scrollworldtransform)

#### Inherited from

Box.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L70)

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

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L73)

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

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L74)

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

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L75)

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

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L76)

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

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L77)

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

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L80)

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

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L85)

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

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L92)

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

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L93)

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

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L94)

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

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L96)

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

[IEditPoint](../interfaces/IEditPoint.md).[event](../interfaces/IEditPoint.md#event)

#### Inherited from

Box.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L99)

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

[src/ui/packages/display/src/Box.ts:18](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L18)

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

[src/ui/packages/display/src/Box.ts:20](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L20)

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

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L16)

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

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L24)

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

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L32)

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

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L384)

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

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L383)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isAutoWidth](../interfaces/IEditPoint.md#isautowidth)

#### Inherited from

Box.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L386)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[isAutoHeight](../interfaces/IEditPoint.md#isautoheight)

#### Inherited from

Box.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:387](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L387)

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

[src/ui/packages/display/src/UI.ts:394](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L394)

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

[src/leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L141)

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

[src/leafer/packages/display/src/Leaf.ts:147](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L147)

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

[src/leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L152)

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

[src/leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L157)

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

[src/leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L161)

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

[src/leafer/packages/display/src/Leaf.ts:165](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L165)

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

[src/leafer/packages/display/src/Leaf.ts:194](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L194)

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

[src/leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L195)

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

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L197)

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

[src/leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L204)

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

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L208)

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

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L210)

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

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L212)

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

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L216)

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

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L218)

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

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L220)

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

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L222)

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

[src/leafer/packages/display/src/Leaf.ts:242](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L242)

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

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L244)

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

[src/leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L249)

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

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L253)

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

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L261)

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

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L265)

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

[src/leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L271)

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

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L273)

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

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L281)

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

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L284)

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

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L286)

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

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L288)

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

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L294)

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

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L301)

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

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L303)

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

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L305)

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

[src/leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L317)

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

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L321)

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

[src/leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L329)

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

[src/leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L335)

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

[src/leafer/packages/display/src/Leaf.ts:343](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L343)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[getClampRenderScale](../interfaces/IEditPoint.md#getclamprenderscale)

#### Inherited from

[Box](Box.md).[getClampRenderScale](Box.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L356)

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

[IEditPoint](../interfaces/IEditPoint.md).[getRenderScaleData](../interfaces/IEditPoint.md#getrenderscaledata)

#### Inherited from

[Box](Box.md).[getRenderScaleData](Box.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:362](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L362)

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

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L371)

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

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L376)

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

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L380)

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

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L384)

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

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L389)

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

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L397)

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

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L405)

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

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L413)

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

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L421)

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

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L428)

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

[src/leafer/packages/display/src/Leaf.ts:432](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L432)

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

[src/leafer/packages/display/src/Leaf.ts:438](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L438)

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

[src/leafer/packages/display/src/Leaf.ts:444](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L444)

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

[src/leafer/packages/display/src/Leaf.ts:450](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L450)

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

[src/leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L454)

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

[src/leafer/packages/display/src/Leaf.ts:460](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L460)

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

[src/leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L464)

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

[src/leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L469)

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

[src/leafer/packages/display/src/Leaf.ts:475](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L475)

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

[src/leafer/packages/display/src/Leaf.ts:479](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L479)

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

[src/leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L485)

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

[src/leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L493)

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

[src/leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L497)

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

[src/leafer/packages/display/src/Leaf.ts:501](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L501)

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

[src/leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L506)

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

[src/leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L510)

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

[src/leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L514)

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

[src/leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L518)

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

[src/leafer/packages/display/src/Leaf.ts:523](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L523)

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

[src/leafer/packages/display/src/Leaf.ts:527](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L527)

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

[src/leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L531)

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

[src/leafer/packages/display/src/Leaf.ts:535](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L535)

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

[src/leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L539)

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

[src/leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L543)

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

[src/leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L550)

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

[src/leafer/packages/display/src/Leaf.ts:555](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L555)

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

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L558)

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

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L560)

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

[IEditPoint](../interfaces/IEditPoint.md).[hit](../interfaces/IEditPoint.md#hit)

#### Inherited from

[Box](Box.md).[hit](Box.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L565)

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

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L567)

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

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L569)

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

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L571)

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

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L573)

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

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L575)

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

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L577)

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

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L579)

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

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L588)

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

[src/leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L590)

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

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L593)

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

[IEditPoint](../interfaces/IEditPoint.md).[__renderShape](../interfaces/IEditPoint.md#__rendershape)

#### Inherited from

[Box](Box.md).[__renderShape](Box.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L595)

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

[IEditPoint](../interfaces/IEditPoint.md).[__drawShape](../interfaces/IEditPoint.md#__drawshape)

#### Inherited from

[Box](Box.md).[__drawShape](Box.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L597)

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

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L600)

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

[src/leafer/packages/display/src/Leaf.ts:613](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L613)

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

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L622)

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

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L626)

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

[src/leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L630)

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

[src/leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L634)

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

[src/leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L640)

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

[src/leafer/packages/display/src/Leaf.ts:645](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L645)

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

[src/leafer/packages/display/src/Leaf.ts:653](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L653)

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

[IEditPoint](../interfaces/IEditPoint.md).[on](../interfaces/IEditPoint.md#on)

#### Inherited from

[Box](Box.md).[on](Box.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L662)

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

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L664)

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

[IEditPoint](../interfaces/IEditPoint.md).[on_](../interfaces/IEditPoint.md#on_)

#### Inherited from

[Box](Box.md).[on_](Box.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L666)

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

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L668)

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

[IEditPoint](../interfaces/IEditPoint.md).[once](../interfaces/IEditPoint.md#once)

#### Inherited from

[Box](Box.md).[once](Box.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L670)

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

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L672)

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

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L674)

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

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L676)

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

[src/leafer/packages/display/src/Leaf.ts:680](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L680)

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

[src/leafer/packages/display/src/Leaf.ts:684](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L684)

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

[src/leafer/packages/display/src/Leaf.ts:690](https://github.com/leaferjs/leafer/blob/ce388543b1c91bc943ac7537f94ff47adf234c5d/packages/display/src/Leaf.ts#L690)

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

[src/ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L55)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[Box](Box.md).[__updateRectRenderSpread](Box.md#__updaterectrenderspread)

#### Defined in

[src/ui/packages/display/src/Box.ts:58](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L58)

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

[src/ui/packages/display/src/Box.ts:60](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L60)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectBoxBounds](Box.md#__updaterectboxbounds)

#### Defined in

[src/ui/packages/display/src/Box.ts:64](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L64)

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

[src/ui/packages/display/src/Box.ts:68](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L68)

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

[src/ui/packages/display/src/Box.ts:99](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L99)

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

[src/ui/packages/display/src/Box.ts:101](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L101)

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

[src/ui/packages/display/src/Box.ts:123](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L123)

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

[src/ui/packages/display/src/Box.ts:125](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L125)

___

### \_\_checkScroll

▸ **__checkScroll**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__checkScroll](../interfaces/IEditPoint.md#__checkscroll)

#### Inherited from

[Box](Box.md).[__checkScroll](Box.md#__checkscroll)

#### Defined in

[src/ui/packages/display/src/Box.ts:132](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L132)

___

### \_\_updateScroll

▸ **__updateScroll**(): `void`

#### Returns

`void`

#### Implementation of

[IEditPoint](../interfaces/IEditPoint.md).[__updateScroll](../interfaces/IEditPoint.md#__updatescroll)

#### Inherited from

[Box](Box.md).[__updateScroll](Box.md#__updatescroll)

#### Defined in

[src/ui/packages/display/src/Box.ts:134](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L134)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__updateRectChange](Box.md#__updaterectchange)

#### Defined in

[src/ui/packages/display/src/Box.ts:138](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L138)

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

[src/ui/packages/display/src/Box.ts:140](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L140)

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

[src/ui/packages/display/src/Box.ts:147](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L147)

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

[src/ui/packages/display/src/Box.ts:150](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L150)

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

[src/ui/packages/display/src/Box.ts:153](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L153)

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

[src/ui/packages/display/src/Box.ts:164](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Box.ts#L164)

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

[src/ui/packages/display/src/Group.ts:38](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L38)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[__setBranch](Box.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:43](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L43)

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

[src/ui/packages/display/src/Group.ts:50](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L50)

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

[src/ui/packages/display/src/Group.ts:67](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L67)

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

[src/ui/packages/display/src/Group.ts:76](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L76)

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

[src/ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L81)

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

[src/ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L85)

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

[src/ui/packages/display/src/Group.ts:89](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L89)

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

[src/ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L95)

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

[src/ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L97)

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

[src/ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L99)

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

[src/ui/packages/display/src/Group.ts:101](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L101)

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

[src/ui/packages/display/src/Group.ts:103](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/Group.ts#L103)

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

[src/ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L425)

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

[src/ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L429)

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

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L434)

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

[src/ui/packages/display/src/UI.ts:436](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L436)

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

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L438)

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

[src/ui/packages/display/src/UI.ts:440](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L440)

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

[src/ui/packages/display/src/UI.ts:445](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L445)

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

[src/ui/packages/display/src/UI.ts:452](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L452)

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

[src/ui/packages/display/src/UI.ts:457](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L457)

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

[src/ui/packages/display/src/UI.ts:461](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L461)

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

[src/ui/packages/display/src/UI.ts:468](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L468)

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

[src/ui/packages/display/src/UI.ts:476](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L476)

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

[src/ui/packages/display/src/UI.ts:481](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L481)

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

[src/ui/packages/display/src/UI.ts:486](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L486)

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

[src/ui/packages/display/src/UI.ts:490](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L490)

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

[IEditPoint](../interfaces/IEditPoint.md).[drawImagePlaceholder](../interfaces/IEditPoint.md#drawimageplaceholder)

#### Inherited from

[Box](Box.md).[drawImagePlaceholder](Box.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:498](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L498)

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

[src/ui/packages/display/src/UI.ts:504](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L504)

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

[src/ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L508)

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

[IEditPoint](../interfaces/IEditPoint.md).[export](../interfaces/IEditPoint.md#export)

#### Inherited from

[Box](Box.md).[export](Box.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:514](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L514)

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

[src/ui/packages/display/src/UI.ts:518](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L518)

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

[IEditPoint](../interfaces/IEditPoint.md).[clone](../interfaces/IEditPoint.md#clone)

#### Inherited from

[Box](Box.md).[clone](Box.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:522](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L522)

___

### one

▸ **one**\<`T`\>(`this`, `data`, `x?`, `y?`, `width?`, `height?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`UI`](UI.md) |

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

[Box](Box.md).[one](Box.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:529](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L529)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Box](Box.md).[registerUI](Box.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:533](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L533)

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

[src/ui/packages/display/src/UI.ts:537](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L537)

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

[src/ui/packages/display/src/UI.ts:544](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L544)

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

[src/ui/packages/display/src/UI.ts:546](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L546)

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

[src/ui/packages/display/src/UI.ts:548](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L548)

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

[src/ui/packages/display/src/UI.ts:551](https://github.com/leaferjs/leafer-ui/blob/4d73938da11e4e94a0fd5c4fb30002be37f139ac/packages/display/src/UI.ts#L551)
