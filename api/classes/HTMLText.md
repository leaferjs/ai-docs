# Class: HTMLText

## Hierarchy

- [`Image`](Image.md)

  ↳ **`HTMLText`**

## Implements

- [`IImage`](../interfaces/IImage.md)

## Table of contents

### Constructors

- [constructor](HTMLText.md#constructor)

### Properties

- [\_\_](HTMLText.md#__)
- [text](HTMLText.md#text)
- [editInner](HTMLText.md#editinner)
- [textEditing](HTMLText.md#textediting)
- [innerId](HTMLText.md#innerid)
- [syncEventer](HTMLText.md#synceventer)
- [lockNormalStyle](HTMLText.md#locknormalstyle)
- [\_\_layout](HTMLText.md#__layout)
- [\_\_world](HTMLText.md#__world)
- [\_\_local](HTMLText.md#__local)
- [\_\_nowWorld](HTMLText.md#__nowworld)
- [\_\_cameraWorld](HTMLText.md#__cameraworld)
- [\_\_worldOpacity](HTMLText.md#__worldopacity)
- [\_\_scrollWorld](HTMLText.md#__scrollworld)
- [\_\_level](HTMLText.md#__level)
- [\_\_tempNumber](HTMLText.md#__tempnumber)
- [\_\_hasAutoLayout](HTMLText.md#__hasautolayout)
- [\_\_hasMask](HTMLText.md#__hasmask)
- [\_\_hasEraser](HTMLText.md#__haseraser)
- [\_\_hitCanvas](HTMLText.md#__hitcanvas)
- [\_\_captureMap](HTMLText.md#__capturemap)
- [\_\_bubbleMap](HTMLText.md#__bubblemap)
- [\_\_hasLocalEvent](HTMLText.md#__haslocalevent)
- [\_\_hasWorldEvent](HTMLText.md#__hasworldevent)
- [topChildren](HTMLText.md#topchildren)
- [destroyed](HTMLText.md#destroyed)
- [url](HTMLText.md#url)
- [proxyData](HTMLText.md#proxydata)
- [\_\_proxyData](HTMLText.md#__proxydata)
- [leafer](HTMLText.md#leafer)
- [parent](HTMLText.md#parent)
- [zoomLayer](HTMLText.md#zoomlayer)
- [children](HTMLText.md#children)
- [id](HTMLText.md#id)
- [name](HTMLText.md#name)
- [className](HTMLText.md#classname)
- [blendMode](HTMLText.md#blendmode)
- [opacity](HTMLText.md#opacity)
- [visible](HTMLText.md#visible)
- [locked](HTMLText.md#locked)
- [dim](HTMLText.md#dim)
- [dimskip](HTMLText.md#dimskip)
- [zIndex](HTMLText.md#zindex)
- [mask](HTMLText.md#mask)
- [eraser](HTMLText.md#eraser)
- [x](HTMLText.md#x)
- [y](HTMLText.md#y)
- [width](HTMLText.md#width)
- [height](HTMLText.md#height)
- [scaleX](HTMLText.md#scalex)
- [scaleY](HTMLText.md#scaley)
- [rotation](HTMLText.md#rotation)
- [skewX](HTMLText.md#skewx)
- [skewY](HTMLText.md#skewy)
- [offsetX](HTMLText.md#offsetx)
- [offsetY](HTMLText.md#offsety)
- [scrollX](HTMLText.md#scrollx)
- [scrollY](HTMLText.md#scrolly)
- [origin](HTMLText.md#origin)
- [around](HTMLText.md#around)
- [lazy](HTMLText.md#lazy)
- [pixelRatio](HTMLText.md#pixelratio)
- [renderSpread](HTMLText.md#renderspread)
- [path](HTMLText.md#path)
- [windingRule](HTMLText.md#windingrule)
- [closed](HTMLText.md#closed)
- [flow](HTMLText.md#flow)
- [padding](HTMLText.md#padding)
- [gap](HTMLText.md#gap)
- [flowAlign](HTMLText.md#flowalign)
- [flowWrap](HTMLText.md#flowwrap)
- [itemBox](HTMLText.md#itembox)
- [inFlow](HTMLText.md#inflow)
- [autoWidth](HTMLText.md#autowidth)
- [autoHeight](HTMLText.md#autoheight)
- [lockRatio](HTMLText.md#lockratio)
- [autoBox](HTMLText.md#autobox)
- [widthRange](HTMLText.md#widthrange)
- [heightRange](HTMLText.md#heightrange)
- [draggable](HTMLText.md#draggable)
- [dragBounds](HTMLText.md#dragbounds)
- [dragBoundsType](HTMLText.md#dragboundstype)
- [editable](HTMLText.md#editable)
- [hittable](HTMLText.md#hittable)
- [hitFill](HTMLText.md#hitfill)
- [hitStroke](HTMLText.md#hitstroke)
- [hitBox](HTMLText.md#hitbox)
- [hitChildren](HTMLText.md#hitchildren)
- [hitSelf](HTMLText.md#hitself)
- [hitRadius](HTMLText.md#hitradius)
- [cursor](HTMLText.md#cursor)
- [fill](HTMLText.md#fill)
- [stroke](HTMLText.md#stroke)
- [strokeAlign](HTMLText.md#strokealign)
- [strokeWidth](HTMLText.md#strokewidth)
- [strokeWidthFixed](HTMLText.md#strokewidthfixed)
- [strokeCap](HTMLText.md#strokecap)
- [strokeJoin](HTMLText.md#strokejoin)
- [dashPattern](HTMLText.md#dashpattern)
- [dashOffset](HTMLText.md#dashoffset)
- [miterLimit](HTMLText.md#miterlimit)
- [startArrow](HTMLText.md#startarrow)
- [endArrow](HTMLText.md#endarrow)
- [cornerRadius](HTMLText.md#cornerradius)
- [cornerSmoothing](HTMLText.md#cornersmoothing)
- [shadow](HTMLText.md#shadow)
- [innerShadow](HTMLText.md#innershadow)
- [blur](HTMLText.md#blur)
- [backgroundBlur](HTMLText.md#backgroundblur)
- [grayscale](HTMLText.md#grayscale)
- [filter](HTMLText.md#filter)
- [animation](HTMLText.md#animation)
- [animationOut](HTMLText.md#animationout)
- [transition](HTMLText.md#transition)
- [transitionOut](HTMLText.md#transitionout)
- [motionPath](HTMLText.md#motionpath)
- [motionPrecision](HTMLText.md#motionprecision)
- [motion](HTMLText.md#motion)
- [motionRotation](HTMLText.md#motionrotation)
- [states](HTMLText.md#states)
- [state](HTMLText.md#state)
- [selected](HTMLText.md#selected)
- [disabled](HTMLText.md#disabled)
- [normalStyle](HTMLText.md#normalstyle)
- [hoverStyle](HTMLText.md#hoverstyle)
- [pressStyle](HTMLText.md#pressstyle)
- [focusStyle](HTMLText.md#focusstyle)
- [selectedStyle](HTMLText.md#selectedstyle)
- [disabledStyle](HTMLText.md#disabledstyle)
- [placeholderStyle](HTMLText.md#placeholderstyle)
- [placeholderColor](HTMLText.md#placeholdercolor)
- [placeholderDelay](HTMLText.md#placeholderdelay)
- [button](HTMLText.md#button)
- [editConfig](HTMLText.md#editconfig)
- [editOuter](HTMLText.md#editouter)
- [data](HTMLText.md#data)
- [useFastShadow](HTMLText.md#usefastshadow)
- [\_\_box](HTMLText.md#__box)
- [\_\_animate](HTMLText.md#__animate)

### Accessors

- [\_\_tag](HTMLText.md#__tag)
- [tag](HTMLText.md#tag)
- [innerName](HTMLText.md#innername)
- [\_\_DataProcessor](HTMLText.md#__dataprocessor)
- [\_\_LayoutProcessor](HTMLText.md#__layoutprocessor)
- [leaferIsCreated](HTMLText.md#leaferiscreated)
- [leaferIsReady](HTMLText.md#leaferisready)
- [isLeafer](HTMLText.md#isleafer)
- [isBranch](HTMLText.md#isbranch)
- [isBranchLeaf](HTMLText.md#isbranchleaf)
- [\_\_localMatrix](HTMLText.md#__localmatrix)
- [\_\_localBoxBounds](HTMLText.md#__localboxbounds)
- [worldTransform](HTMLText.md#worldtransform)
- [localTransform](HTMLText.md#localtransform)
- [scrollWorldTransform](HTMLText.md#scrollworldtransform)
- [boxBounds](HTMLText.md#boxbounds)
- [renderBounds](HTMLText.md#renderbounds)
- [worldBoxBounds](HTMLText.md#worldboxbounds)
- [worldStrokeBounds](HTMLText.md#worldstrokebounds)
- [worldRenderBounds](HTMLText.md#worldrenderbounds)
- [worldOpacity](HTMLText.md#worldopacity)
- [\_\_worldFlipped](HTMLText.md#__worldflipped)
- [\_\_onlyHitMask](HTMLText.md#__onlyhitmask)
- [\_\_ignoreHitWorld](HTMLText.md#__ignorehitworld)
- [\_\_inLazyBounds](HTMLText.md#__inlazybounds)
- [pathInputed](HTMLText.md#pathinputed)
- [event](HTMLText.md#event)
- [ready](HTMLText.md#ready)
- [image](HTMLText.md#image)
- [app](HTMLText.md#app)
- [isFrame](HTMLText.md#isframe)
- [scale](HTMLText.md#scale)
- [isAutoWidth](HTMLText.md#isautowidth)
- [isAutoHeight](HTMLText.md#isautoheight)
- [pen](HTMLText.md#pen)

### Methods

- [\_\_updateBoxBounds](HTMLText.md#__updateboxbounds)
- [\_\_draw](HTMLText.md#__draw)
- [resetCustom](HTMLText.md#resetcustom)
- [waitParent](HTMLText.md#waitparent)
- [waitLeafer](HTMLText.md#waitleafer)
- [nextRender](HTMLText.md#nextrender)
- [removeNextRender](HTMLText.md#removenextrender)
- [\_\_bindLeafer](HTMLText.md#__bindleafer)
- [setAttr](HTMLText.md#setattr)
- [getAttr](HTMLText.md#getattr)
- [getComputedAttr](HTMLText.md#getcomputedattr)
- [toJSON](HTMLText.md#tojson)
- [toString](HTMLText.md#tostring)
- [toSVG](HTMLText.md#tosvg)
- [\_\_SVG](HTMLText.md#__svg)
- [toHTML](HTMLText.md#tohtml)
- [\_\_setAttr](HTMLText.md#__setattr)
- [\_\_getAttr](HTMLText.md#__getattr)
- [setProxyAttr](HTMLText.md#setproxyattr)
- [getProxyAttr](HTMLText.md#getproxyattr)
- [focus](HTMLText.md#focus)
- [updateState](HTMLText.md#updatestate)
- [updateLayout](HTMLText.md#updatelayout)
- [forceUpdate](HTMLText.md#forceupdate)
- [forceRender](HTMLText.md#forcerender)
- [\_\_extraUpdate](HTMLText.md#__extraupdate)
- [\_\_updateWorldMatrix](HTMLText.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](HTMLText.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](HTMLText.md#__updateworldbounds)
- [\_\_updateLocalBounds](HTMLText.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](HTMLText.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](HTMLText.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](HTMLText.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](HTMLText.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](HTMLText.md#__updatestrokebounds)
- [\_\_updateRenderBounds](HTMLText.md#__updaterenderbounds)
- [\_\_updateAutoLayout](HTMLText.md#__updateautolayout)
- [\_\_updateFlowLayout](HTMLText.md#__updateflowlayout)
- [\_\_updateNaturalSize](HTMLText.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](HTMLText.md#__updatestrokespread)
- [\_\_updateRenderSpread](HTMLText.md#__updaterenderspread)
- [\_\_updateEraser](HTMLText.md#__updateeraser)
- [\_\_renderEraser](HTMLText.md#__rendereraser)
- [\_\_updateMask](HTMLText.md#__updatemask)
- [\_\_renderMask](HTMLText.md#__rendermask)
- [\_\_getNowWorld](HTMLText.md#__getnowworld)
- [getClampRenderScale](HTMLText.md#getclamprenderscale)
- [getRenderScaleData](HTMLText.md#getrenderscaledata)
- [getTransform](HTMLText.md#gettransform)
- [getBounds](HTMLText.md#getbounds)
- [getLayoutBounds](HTMLText.md#getlayoutbounds)
- [getLayoutPoints](HTMLText.md#getlayoutpoints)
- [getWorldBounds](HTMLText.md#getworldbounds)
- [worldToLocal](HTMLText.md#worldtolocal)
- [localToWorld](HTMLText.md#localtoworld)
- [worldToInner](HTMLText.md#worldtoinner)
- [innerToWorld](HTMLText.md#innertoworld)
- [getBoxPoint](HTMLText.md#getboxpoint)
- [getBoxPointByInner](HTMLText.md#getboxpointbyinner)
- [getInnerPoint](HTMLText.md#getinnerpoint)
- [getInnerPointByBox](HTMLText.md#getinnerpointbybox)
- [getInnerPointByLocal](HTMLText.md#getinnerpointbylocal)
- [getLocalPoint](HTMLText.md#getlocalpoint)
- [getLocalPointByInner](HTMLText.md#getlocalpointbyinner)
- [getPagePoint](HTMLText.md#getpagepoint)
- [getWorldPoint](HTMLText.md#getworldpoint)
- [getWorldPointByBox](HTMLText.md#getworldpointbybox)
- [getWorldPointByLocal](HTMLText.md#getworldpointbylocal)
- [getWorldPointByPage](HTMLText.md#getworldpointbypage)
- [setTransform](HTMLText.md#settransform)
- [transform](HTMLText.md#transform)
- [move](HTMLText.md#move)
- [moveInner](HTMLText.md#moveinner)
- [scaleOf](HTMLText.md#scaleof)
- [rotateOf](HTMLText.md#rotateof)
- [skewOf](HTMLText.md#skewof)
- [transformWorld](HTMLText.md#transformworld)
- [moveWorld](HTMLText.md#moveworld)
- [scaleOfWorld](HTMLText.md#scaleofworld)
- [rotateOfWorld](HTMLText.md#rotateofworld)
- [skewOfWorld](HTMLText.md#skewofworld)
- [flip](HTMLText.md#flip)
- [scaleResize](HTMLText.md#scaleresize)
- [\_\_scaleResize](HTMLText.md#__scaleresize)
- [resizeWidth](HTMLText.md#resizewidth)
- [resizeHeight](HTMLText.md#resizeheight)
- [hit](HTMLText.md#hit)
- [\_\_hitWorld](HTMLText.md#__hitworld)
- [\_\_hit](HTMLText.md#__hit)
- [\_\_hitFill](HTMLText.md#__hitfill)
- [\_\_hitStroke](HTMLText.md#__hitstroke)
- [\_\_hitPixel](HTMLText.md#__hitpixel)
- [\_\_drawHitPath](HTMLText.md#__drawhitpath)
- [\_\_updateHitCanvas](HTMLText.md#__updatehitcanvas)
- [\_\_render](HTMLText.md#__render)
- [\_\_drawFast](HTMLText.md#__drawfast)
- [\_\_clip](HTMLText.md#__clip)
- [\_\_renderShape](HTMLText.md#__rendershape)
- [\_\_drawShape](HTMLText.md#__drawshape)
- [\_\_updateWorldOpacity](HTMLText.md#__updateworldopacity)
- [\_\_updateChange](HTMLText.md#__updatechange)
- [\_\_updatePath](HTMLText.md#__updatepath)
- [getMotionPathData](HTMLText.md#getmotionpathdata)
- [getMotionPoint](HTMLText.md#getmotionpoint)
- [getMotionTotal](HTMLText.md#getmotiontotal)
- [\_\_updateMotionPath](HTMLText.md#__updatemotionpath)
- [\_\_runAnimation](HTMLText.md#__runanimation)
- [\_\_updateSortChildren](HTMLText.md#__updatesortchildren)
- [add](HTMLText.md#add)
- [remove](HTMLText.md#remove)
- [dropTo](HTMLText.md#dropto)
- [on](HTMLText.md#on)
- [off](HTMLText.md#off)
- [on\_](HTMLText.md#on_)
- [off\_](HTMLText.md#off_)
- [once](HTMLText.md#once)
- [emit](HTMLText.md#emit)
- [emitEvent](HTMLText.md#emitevent)
- [hasEvent](HTMLText.md#hasevent)
- [changeAttr](HTMLText.md#changeattr)
- [addAttr](HTMLText.md#addattr)
- [\_\_emitLifeEvent](HTMLText.md#__emitlifeevent)
- [reset](HTMLText.md#reset)
- [set](HTMLText.md#set)
- [get](HTMLText.md#get)
- [createProxyData](HTMLText.md#createproxydata)
- [find](HTMLText.md#find)
- [findTag](HTMLText.md#findtag)
- [findOne](HTMLText.md#findone)
- [findId](HTMLText.md#findid)
- [getPath](HTMLText.md#getpath)
- [getPathString](HTMLText.md#getpathstring)
- [load](HTMLText.md#load)
- [\_\_onUpdateSize](HTMLText.md#__onupdatesize)
- [\_\_updateRenderPath](HTMLText.md#__updaterenderpath)
- [\_\_drawRenderPath](HTMLText.md#__drawrenderpath)
- [\_\_drawPath](HTMLText.md#__drawpath)
- [\_\_drawPathByData](HTMLText.md#__drawpathbydata)
- [\_\_drawPathByBox](HTMLText.md#__drawpathbybox)
- [drawImagePlaceholder](HTMLText.md#drawimageplaceholder)
- [animate](HTMLText.md#animate)
- [killAnimate](HTMLText.md#killanimate)
- [export](HTMLText.md#export)
- [syncExport](HTMLText.md#syncexport)
- [clone](HTMLText.md#clone)
- [one](HTMLText.md#one)
- [registerUI](HTMLText.md#registerui)
- [registerData](HTMLText.md#registerdata)
- [setEditConfig](HTMLText.md#seteditconfig)
- [setEditOuter](HTMLText.md#seteditouter)
- [setEditInner](HTMLText.md#seteditinner)
- [destroy](HTMLText.md#destroy)

## Constructors

### constructor

• **new HTMLText**(`data?`): [`HTMLText`](HTMLText.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHTMLTextInputData`](../interfaces/IHTMLTextInputData.md) |

#### Returns

[`HTMLText`](HTMLText.md)

#### Overrides

[Image](Image.md).[constructor](Image.md#constructor)

#### Defined in

[src/in/packages/html/src/HTMLText.ts:26](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L26)

## Properties

### \_\_

• **\_\_**: [`IHTMLTextData`](../interfaces/IHTMLTextData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__](../interfaces/IImage.md#__)

#### Overrides

[Image](Image.md).[__](Image.md#__)

#### Defined in

[src/in/packages/html/src/HTMLText.ts:15](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L15)

___

### text

• `Optional` **text**: `string`

#### Defined in

[src/in/packages/html/src/HTMLText.ts:18](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L18)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editInner](../interfaces/IImage.md#editinner)

#### Overrides

[Image](Image.md).[editInner](Image.md#editinner)

#### Defined in

[src/in/packages/html/src/HTMLText.ts:21](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L21)

___

### textEditing

• **textEditing**: `boolean`

#### Defined in

[src/in/packages/html/src/HTMLText.ts:24](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L24)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerId](../interfaces/IImage.md#innerid)

#### Inherited from

[Image](Image.md).[innerId](Image.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:32](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L32)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[syncEventer](../interfaces/IImage.md#synceventer)

#### Inherited from

[Image](Image.md).[syncEventer](Image.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:48](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L48)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockNormalStyle](../interfaces/IImage.md#locknormalstyle)

#### Inherited from

[Image](Image.md).[lockNormalStyle](Image.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L49)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__layout](../interfaces/IImage.md#__layout)

#### Inherited from

[Image](Image.md).[__layout](Image.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L52)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__world](../interfaces/IImage.md#__world)

#### Inherited from

[Image](Image.md).[__world](Image.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:54](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L54)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__local](../interfaces/IImage.md#__local)

#### Inherited from

[Image](Image.md).[__local](Image.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L55)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__nowWorld](../interfaces/IImage.md#__nowworld)

#### Inherited from

[Image](Image.md).[__nowWorld](Image.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:57](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L57)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__cameraWorld](../interfaces/IImage.md#__cameraworld)

#### Inherited from

[Image](Image.md).[__cameraWorld](Image.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L58)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldOpacity](../interfaces/IImage.md#__worldopacity)

#### Inherited from

[Image](Image.md).[__worldOpacity](Image.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:63](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L63)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__scrollWorld](../interfaces/IImage.md#__scrollworld)

#### Inherited from

[Image](Image.md).[__scrollWorld](Image.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L69)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__level](../interfaces/IImage.md#__level)

#### Inherited from

[Image](Image.md).[__level](Image.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L82)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tempNumber](../interfaces/IImage.md#__tempnumber)

#### Inherited from

[Image](Image.md).[__tempNumber](Image.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L83)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasAutoLayout](../interfaces/IImage.md#__hasautolayout)

#### Inherited from

[Image](Image.md).[__hasAutoLayout](Image.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L87)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasMask](../interfaces/IImage.md#__hasmask)

#### Inherited from

[Image](Image.md).[__hasMask](Image.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L88)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasEraser](../interfaces/IImage.md#__haseraser)

#### Inherited from

[Image](Image.md).[__hasEraser](Image.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L89)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__hitCanvas](../interfaces/IImage.md#__hitcanvas)

#### Inherited from

[Image](Image.md).[__hitCanvas](Image.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L90)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__captureMap](../interfaces/IImage.md#__capturemap)

#### Inherited from

[Image](Image.md).[__captureMap](Image.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:101](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L101)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__bubbleMap](../interfaces/IImage.md#__bubblemap)

#### Inherited from

[Image](Image.md).[__bubbleMap](Image.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L102)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasLocalEvent](../interfaces/IImage.md#__haslocalevent)

#### Inherited from

[Image](Image.md).[__hasLocalEvent](Image.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:104](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L104)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__hasWorldEvent](../interfaces/IImage.md#__hasworldevent)

#### Inherited from

[Image](Image.md).[__hasWorldEvent](Image.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L105)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](../interfaces/ILeaf.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[topChildren](../interfaces/IImage.md#topchildren)

#### Inherited from

[Image](Image.md).[topChildren](Image.md#topchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:109](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L109)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroyed](../interfaces/IImage.md#destroyed)

#### Inherited from

[Image](Image.md).[destroyed](Image.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:111](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L111)

___

### url

• **url**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[url](../interfaces/IImage.md#url)

#### Inherited from

[Image](Image.md).[url](Image.md#url)

#### Defined in

[src/ui/packages/display/src/Image.ts:19](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/Image.ts#L19)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[proxyData](../interfaces/IImage.md#proxydata)

#### Inherited from

[Image](Image.md).[proxyData](Image.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__proxyData](../interfaces/IImage.md#__proxydata)

#### Inherited from

[Image](Image.md).[__proxyData](Image.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[leafer](../interfaces/IImage.md#leafer)

#### Inherited from

[Image](Image.md).[leafer](Image.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[parent](../interfaces/IImage.md#parent)

#### Inherited from

[Image](Image.md).[parent](Image.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[zoomLayer](../interfaces/IImage.md#zoomlayer)

#### Inherited from

[Image](Image.md).[zoomLayer](Image.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L30)

___

### children

• `Optional` **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[children](../interfaces/IImage.md#children)

#### Inherited from

[Image](Image.md).[children](Image.md#children)

#### Defined in

[src/ui/packages/display/src/UI.ts:34](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L34)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[id](../interfaces/IImage.md#id)

#### Inherited from

[Image](Image.md).[id](Image.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[name](../interfaces/IImage.md#name)

#### Inherited from

[Image](Image.md).[name](Image.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[className](../interfaces/IImage.md#classname)

#### Inherited from

[Image](Image.md).[className](Image.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IImage](../interfaces/IImage.md).[blendMode](../interfaces/IImage.md#blendmode)

#### Inherited from

[Image](Image.md).[blendMode](Image.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[opacity](../interfaces/IImage.md#opacity)

#### Inherited from

[Image](Image.md).[opacity](Image.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IImage](../interfaces/IImage.md).[visible](../interfaces/IImage.md#visible)

#### Inherited from

[Image](Image.md).[visible](Image.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[locked](../interfaces/IImage.md#locked)

#### Inherited from

[Image](Image.md).[locked](Image.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[dim](../interfaces/IImage.md#dim)

#### Inherited from

[Image](Image.md).[dim](Image.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[dimskip](../interfaces/IImage.md#dimskip)

#### Inherited from

[Image](Image.md).[dimskip](Image.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[zIndex](../interfaces/IImage.md#zindex)

#### Inherited from

[Image](Image.md).[zIndex](Image.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IImage](../interfaces/IImage.md).[mask](../interfaces/IImage.md#mask)

#### Inherited from

[Image](Image.md).[mask](Image.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IImage](../interfaces/IImage.md).[eraser](../interfaces/IImage.md#eraser)

#### Inherited from

[Image](Image.md).[eraser](Image.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[x](../interfaces/IImage.md#x)

#### Inherited from

[Image](Image.md).[x](Image.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[y](../interfaces/IImage.md#y)

#### Inherited from

[Image](Image.md).[y](Image.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L87)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[width](../interfaces/IImage.md#width)

#### Inherited from

[Image](Image.md).[width](Image.md#width)

#### Defined in

[src/ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L91)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[height](../interfaces/IImage.md#height)

#### Inherited from

[Image](Image.md).[height](Image.md#height)

#### Defined in

[src/ui/packages/display/src/UI.ts:94](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L94)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleX](../interfaces/IImage.md#scalex)

#### Inherited from

[Image](Image.md).[scaleX](Image.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scaleY](../interfaces/IImage.md#scaley)

#### Inherited from

[Image](Image.md).[scaleY](Image.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[rotation](../interfaces/IImage.md#rotation)

#### Inherited from

[Image](Image.md).[rotation](Image.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewX](../interfaces/IImage.md#skewx)

#### Inherited from

[Image](Image.md).[skewX](Image.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[skewY](../interfaces/IImage.md#skewy)

#### Inherited from

[Image](Image.md).[skewY](Image.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetX](../interfaces/IImage.md#offsetx)

#### Inherited from

[Image](Image.md).[offsetX](Image.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[offsetY](../interfaces/IImage.md#offsety)

#### Inherited from

[Image](Image.md).[offsetY](Image.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollX](../interfaces/IImage.md#scrollx)

#### Inherited from

[Image](Image.md).[scrollX](Image.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollY](../interfaces/IImage.md#scrolly)

#### Inherited from

[Image](Image.md).[scrollY](Image.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[origin](../interfaces/IImage.md#origin)

#### Inherited from

[Image](Image.md).[origin](Image.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IImage](../interfaces/IImage.md).[around](../interfaces/IImage.md#around)

#### Inherited from

[Image](Image.md).[around](Image.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lazy](../interfaces/IImage.md#lazy)

#### Inherited from

[Image](Image.md).[lazy](Image.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[pixelRatio](../interfaces/IImage.md#pixelratio)

#### Inherited from

[Image](Image.md).[pixelRatio](Image.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L143)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[renderSpread](../interfaces/IImage.md#renderspread)

#### Inherited from

[Image](Image.md).[renderSpread](Image.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L147)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[path](../interfaces/IImage.md#path)

#### Inherited from

[Image](Image.md).[path](Image.md#path)

#### Defined in

[src/ui/packages/display/src/UI.ts:152](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L152)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IImage](../interfaces/IImage.md).[windingRule](../interfaces/IImage.md#windingrule)

#### Inherited from

[Image](Image.md).[windingRule](Image.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:155](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L155)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[closed](../interfaces/IImage.md#closed)

#### Inherited from

[Image](Image.md).[closed](Image.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L158)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[flow](../interfaces/IImage.md#flow)

#### Inherited from

[Image](Image.md).[flow](Image.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L162)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[padding](../interfaces/IImage.md#padding)

#### Inherited from

[Image](Image.md).[padding](Image.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L165)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[gap](../interfaces/IImage.md#gap)

#### Inherited from

[Image](Image.md).[gap](Image.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L167)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowAlign](../interfaces/IImage.md#flowalign)

#### Inherited from

[Image](Image.md).[flowAlign](Image.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L169)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IImage](../interfaces/IImage.md).[flowWrap](../interfaces/IImage.md#flowwrap)

#### Inherited from

[Image](Image.md).[flowWrap](Image.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L171)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IImage](../interfaces/IImage.md).[itemBox](../interfaces/IImage.md#itembox)

#### Inherited from

[Image](Image.md).[itemBox](Image.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:174](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L174)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[inFlow](../interfaces/IImage.md#inflow)

#### Inherited from

[Image](Image.md).[inFlow](Image.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:176](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L176)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoWidth](../interfaces/IImage.md#autowidth)

#### Inherited from

[Image](Image.md).[autoWidth](Image.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:179](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L179)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoHeight](../interfaces/IImage.md#autoheight)

#### Inherited from

[Image](Image.md).[autoHeight](Image.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:181](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L181)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[lockRatio](../interfaces/IImage.md#lockratio)

#### Inherited from

[Image](Image.md).[lockRatio](Image.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:184](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L184)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[autoBox](../interfaces/IImage.md#autobox)

#### Inherited from

[Image](Image.md).[autoBox](Image.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:186](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L186)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[widthRange](../interfaces/IImage.md#widthrange)

#### Inherited from

[Image](Image.md).[widthRange](Image.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:189](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L189)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[heightRange](../interfaces/IImage.md#heightrange)

#### Inherited from

[Image](Image.md).[heightRange](Image.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:192](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L192)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IImage](../interfaces/IImage.md).[draggable](../interfaces/IImage.md#draggable)

#### Inherited from

[Image](Image.md).[draggable](Image.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:197](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L197)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[dragBounds](../interfaces/IImage.md#dragbounds)

#### Inherited from

[Image](Image.md).[dragBounds](Image.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L200)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IImage](../interfaces/IImage.md).[dragBoundsType](../interfaces/IImage.md#dragboundstype)

#### Inherited from

[Image](Image.md).[dragBoundsType](Image.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:203](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L203)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[editable](../interfaces/IImage.md#editable)

#### Inherited from

[Image](Image.md).[editable](Image.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L207)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hittable](../interfaces/IImage.md#hittable)

#### Inherited from

[Image](Image.md).[hittable](Image.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:212](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L212)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitFill](../interfaces/IImage.md#hitfill)

#### Inherited from

[Image](Image.md).[hitFill](Image.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:215](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L215)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IImage](../interfaces/IImage.md).[hitStroke](../interfaces/IImage.md#hitstroke)

#### Inherited from

[Image](Image.md).[hitStroke](Image.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:218](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L218)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitBox](../interfaces/IImage.md#hitbox)

#### Inherited from

[Image](Image.md).[hitBox](Image.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:221](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L221)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitChildren](../interfaces/IImage.md#hitchildren)

#### Inherited from

[Image](Image.md).[hitChildren](Image.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:224](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L224)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitSelf](../interfaces/IImage.md#hitself)

#### Inherited from

[Image](Image.md).[hitSelf](Image.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:227](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L227)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[hitRadius](../interfaces/IImage.md#hitradius)

#### Inherited from

[Image](Image.md).[hitRadius](Image.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:230](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L230)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[cursor](../interfaces/IImage.md#cursor)

#### Inherited from

[Image](Image.md).[cursor](Image.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:233](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L233)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IImage](../interfaces/IImage.md).[fill](../interfaces/IImage.md#fill)

#### Inherited from

[Image](Image.md).[fill](Image.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:241](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L241)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IImage](../interfaces/IImage.md).[stroke](../interfaces/IImage.md#stroke)

#### Inherited from

[Image](Image.md).[stroke](Image.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:246](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L246)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeAlign](../interfaces/IImage.md#strokealign)

#### Inherited from

[Image](Image.md).[strokeAlign](Image.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:249](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L249)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeWidth](../interfaces/IImage.md#strokewidth)

#### Inherited from

[Image](Image.md).[strokeWidth](Image.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:252](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L252)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeWidthFixed](../interfaces/IImage.md#strokewidthfixed)

#### Inherited from

[Image](Image.md).[strokeWidthFixed](Image.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:255](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L255)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeCap](../interfaces/IImage.md#strokecap)

#### Inherited from

[Image](Image.md).[strokeCap](Image.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:258](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L258)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IImage](../interfaces/IImage.md).[strokeJoin](../interfaces/IImage.md#strokejoin)

#### Inherited from

[Image](Image.md).[strokeJoin](Image.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:261](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L261)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IImage](../interfaces/IImage.md).[dashPattern](../interfaces/IImage.md#dashpattern)

#### Inherited from

[Image](Image.md).[dashPattern](Image.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:264](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L264)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[dashOffset](../interfaces/IImage.md#dashoffset)

#### Inherited from

[Image](Image.md).[dashOffset](Image.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:267](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L267)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[miterLimit](../interfaces/IImage.md#miterlimit)

#### Inherited from

[Image](Image.md).[miterLimit](Image.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L270)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IImage](../interfaces/IImage.md).[startArrow](../interfaces/IImage.md#startarrow)

#### Inherited from

[Image](Image.md).[startArrow](Image.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L275)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IImage](../interfaces/IImage.md).[endArrow](../interfaces/IImage.md#endarrow)

#### Inherited from

[Image](Image.md).[endArrow](Image.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:277](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L277)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerRadius](../interfaces/IImage.md#cornerradius)

#### Inherited from

[Image](Image.md).[cornerRadius](Image.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:282](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L282)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[cornerSmoothing](../interfaces/IImage.md#cornersmoothing)

#### Inherited from

[Image](Image.md).[cornerSmoothing](Image.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:285](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L285)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[shadow](../interfaces/IImage.md#shadow)

#### Inherited from

[Image](Image.md).[shadow](Image.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:290](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L290)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[innerShadow](../interfaces/IImage.md#innershadow)

#### Inherited from

[Image](Image.md).[innerShadow](Image.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:293](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L293)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[blur](../interfaces/IImage.md#blur)

#### Inherited from

[Image](Image.md).[blur](Image.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:296](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L296)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[backgroundBlur](../interfaces/IImage.md#backgroundblur)

#### Inherited from

[Image](Image.md).[backgroundBlur](Image.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:299](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L299)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[grayscale](../interfaces/IImage.md#grayscale)

#### Inherited from

[Image](Image.md).[grayscale](Image.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:302](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L302)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[filter](../interfaces/IImage.md#filter)

#### Inherited from

[Image](Image.md).[filter](Image.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L305)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animation](../interfaces/IImage.md#animation)

#### Inherited from

[Image](Image.md).[animation](Image.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L310)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IImage](../interfaces/IImage.md).[animationOut](../interfaces/IImage.md#animationout)

#### Inherited from

[Image](Image.md).[animationOut](Image.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:312](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L312)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transition](../interfaces/IImage.md#transition)

#### Inherited from

[Image](Image.md).[transition](Image.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L315)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IImage](../interfaces/IImage.md).[transitionOut](../interfaces/IImage.md#transitionout)

#### Inherited from

[Image](Image.md).[transitionOut](Image.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L317)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPath](../interfaces/IImage.md#motionpath)

#### Inherited from

[Image](Image.md).[motionPath](Image.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L322)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionPrecision](../interfaces/IImage.md#motionprecision)

#### Inherited from

[Image](Image.md).[motionPrecision](Image.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:324](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L324)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[motion](../interfaces/IImage.md#motion)

#### Inherited from

[Image](Image.md).[motion](Image.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L327)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[motionRotation](../interfaces/IImage.md#motionrotation)

#### Inherited from

[Image](Image.md).[motionRotation](Image.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L329)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[states](../interfaces/IImage.md#states)

#### Inherited from

[Image](Image.md).[states](Image.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L334)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[state](../interfaces/IImage.md#state)

#### Inherited from

[Image](Image.md).[state](Image.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:336](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L336)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[selected](../interfaces/IImage.md#selected)

#### Inherited from

[Image](Image.md).[selected](Image.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L339)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[disabled](../interfaces/IImage.md#disabled)

#### Inherited from

[Image](Image.md).[disabled](Image.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L341)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[normalStyle](../interfaces/IImage.md#normalstyle)

#### Inherited from

[Image](Image.md).[normalStyle](Image.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:344](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L344)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[hoverStyle](../interfaces/IImage.md#hoverstyle)

#### Inherited from

[Image](Image.md).[hoverStyle](Image.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:346](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L346)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pressStyle](../interfaces/IImage.md#pressstyle)

#### Inherited from

[Image](Image.md).[pressStyle](Image.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:348](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L348)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[focusStyle](../interfaces/IImage.md#focusstyle)

#### Inherited from

[Image](Image.md).[focusStyle](Image.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L350)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[selectedStyle](../interfaces/IImage.md#selectedstyle)

#### Inherited from

[Image](Image.md).[selectedStyle](Image.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L352)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[disabledStyle](../interfaces/IImage.md#disabledstyle)

#### Inherited from

[Image](Image.md).[disabledStyle](Image.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L354)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderStyle](../interfaces/IImage.md#placeholderstyle)

#### Inherited from

[Image](Image.md).[placeholderStyle](Image.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:357](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L357)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderColor](../interfaces/IImage.md#placeholdercolor)

#### Inherited from

[Image](Image.md).[placeholderColor](Image.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:360](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L360)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IImage](../interfaces/IImage.md).[placeholderDelay](../interfaces/IImage.md#placeholderdelay)

#### Inherited from

[Image](Image.md).[placeholderDelay](Image.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:363](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L363)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[button](../interfaces/IImage.md#button)

#### Inherited from

[Image](Image.md).[button](Image.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L366)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[editConfig](../interfaces/IImage.md#editconfig)

#### Inherited from

[Image](Image.md).[editConfig](Image.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:371](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L371)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IImage](../interfaces/IImage.md).[editOuter](../interfaces/IImage.md#editouter)

#### Inherited from

[Image](Image.md).[editOuter](Image.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L373)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[data](../interfaces/IImage.md#data)

#### Inherited from

[Image](Image.md).[data](Image.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:380](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L380)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[useFastShadow](../interfaces/IImage.md#usefastshadow)

#### Inherited from

[Image](Image.md).[useFastShadow](Image.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:389](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L389)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__box](../interfaces/IImage.md#__box)

#### Inherited from

[Image](Image.md).[__box](Image.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L391)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__animate](../interfaces/IImage.md#__animate)

#### Inherited from

[Image](Image.md).[__animate](Image.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:392](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L392)

## Accessors

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[__tag](../interfaces/IImage.md#__tag)

#### Overrides

Image.\_\_tag

#### Defined in

[src/in/packages/html/src/HTMLText.ts:12](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L12)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[tag](../interfaces/IImage.md#tag)

#### Inherited from

Image.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:27](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L27)

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

Image.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L28)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[innerName](../interfaces/IImage.md#innername)

#### Inherited from

Image.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L33)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__DataProcessor](../interfaces/IImage.md#__dataprocessor)

#### Inherited from

Image.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:35](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L35)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__LayoutProcessor](../interfaces/IImage.md#__layoutprocessor)

#### Inherited from

Image.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L36)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsCreated](../interfaces/IImage.md#leaferiscreated)

#### Inherited from

Image.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:41](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L41)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[leaferIsReady](../interfaces/IImage.md#leaferisready)

#### Inherited from

Image.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L42)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isLeafer](../interfaces/IImage.md#isleafer)

#### Inherited from

Image.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L44)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranch](../interfaces/IImage.md#isbranch)

#### Inherited from

Image.isBranch

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L45)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isBranchLeaf](../interfaces/IImage.md#isbranchleaf)

#### Inherited from

Image.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L46)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localMatrix](../interfaces/IImage.md#__localmatrix)

#### Inherited from

Image.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:60](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L60)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[__localBoxBounds](../interfaces/IImage.md#__localboxbounds)

#### Inherited from

Image.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L61)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldTransform](../interfaces/IImage.md#worldtransform)

#### Inherited from

Image.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:66](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L66)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[localTransform](../interfaces/IImage.md#localtransform)

#### Inherited from

Image.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L67)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[scrollWorldTransform](../interfaces/IImage.md#scrollworldtransform)

#### Inherited from

Image.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L70)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[boxBounds](../interfaces/IImage.md#boxbounds)

#### Inherited from

Image.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:73](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L73)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[renderBounds](../interfaces/IImage.md#renderbounds)

#### Inherited from

Image.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L74)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldBoxBounds](../interfaces/IImage.md#worldboxbounds)

#### Inherited from

Image.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L75)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldStrokeBounds](../interfaces/IImage.md#worldstrokebounds)

#### Inherited from

Image.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L76)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[worldRenderBounds](../interfaces/IImage.md#worldrenderbounds)

#### Inherited from

Image.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L77)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[worldOpacity](../interfaces/IImage.md#worldopacity)

#### Inherited from

Image.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L80)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__worldFlipped](../interfaces/IImage.md#__worldflipped)

#### Inherited from

Image.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L85)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onlyHitMask](../interfaces/IImage.md#__onlyhitmask)

#### Inherited from

Image.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:92](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L92)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__ignoreHitWorld](../interfaces/IImage.md#__ignorehitworld)

#### Inherited from

Image.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L93)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[__inLazyBounds](../interfaces/IImage.md#__inlazybounds)

#### Inherited from

Image.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L94)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[pathInputed](../interfaces/IImage.md#pathinputed)

#### Inherited from

Image.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L96)

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

[IImage](../interfaces/IImage.md).[event](../interfaces/IImage.md#event)

#### Inherited from

Image.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L99)

___

### ready

• `get` **ready**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[ready](../interfaces/IImage.md#ready)

#### Inherited from

Image.ready

#### Defined in

[src/ui/packages/display/src/Image.ts:21](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/Image.ts#L21)

___

### image

• `get` **image**(): [`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Returns

[`ILeaferImage`](../interfaces/ILeaferImage.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[image](../interfaces/IImage.md#image)

#### Inherited from

Image.image

#### Defined in

[src/ui/packages/display/src/Image.ts:23](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/Image.ts#L23)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[app](../interfaces/IImage.md#app)

#### Inherited from

Image.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isFrame](../interfaces/IImage.md#isframe)

#### Inherited from

Image.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[scale](../interfaces/IImage.md#scale)

#### Inherited from

Image.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L384)

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

Image.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:383](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L383)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isAutoWidth](../interfaces/IImage.md#isautowidth)

#### Inherited from

Image.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:386](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L386)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IImage](../interfaces/IImage.md).[isAutoHeight](../interfaces/IImage.md#isautoheight)

#### Inherited from

Image.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:387](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L387)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[pen](../interfaces/IImage.md#pen)

#### Inherited from

Image.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:394](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L394)

## Methods

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateBoxBounds](../interfaces/IImage.md#__updateboxbounds)

#### Overrides

[Image](Image.md).[__updateBoxBounds](Image.md#__updateboxbounds)

#### Defined in

[src/in/packages/html/src/HTMLText.ts:30](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L30)

___

### \_\_draw

▸ **__draw**(`canvas`, `options`, `originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |
| `originCanvas?` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__draw](../interfaces/IImage.md#__draw)

#### Overrides

[Image](Image.md).[__draw](Image.md#__draw)

#### Defined in

[src/in/packages/html/src/HTMLText.ts:76](https://github.com/leaferjs/leafer-in/blob/3826eee814363b0fdcec982cd36acf4211841a67/packages/html/src/HTMLText.ts#L76)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[resetCustom](../interfaces/IImage.md#resetcustom)

#### Inherited from

[Image](Image.md).[resetCustom](Image.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L141)

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

[Image](Image.md).[waitParent](Image.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:147](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L147)

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

[Image](Image.md).[waitLeafer](Image.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:152](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L152)

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

[Image](Image.md).[nextRender](Image.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:157](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L157)

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

[Image](Image.md).[removeNextRender](Image.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:161](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L161)

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

[Image](Image.md).[__bindLeafer](Image.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:165](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L165)

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

[Image](Image.md).[setAttr](Image.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:194](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L194)

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

[Image](Image.md).[getAttr](Image.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:195](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L195)

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

[Image](Image.md).[getComputedAttr](Image.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L197)

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

[Image](Image.md).[toJSON](Image.md#tojson)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L199)

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

[Image](Image.md).[toString](Image.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L204)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toSVG](../interfaces/IImage.md#tosvg)

#### Inherited from

[Image](Image.md).[toSVG](Image.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:208](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L208)

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

[Image](Image.md).[__SVG](Image.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L210)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IImage](../interfaces/IImage.md).[toHTML](../interfaces/IImage.md#tohtml)

#### Inherited from

[Image](Image.md).[toHTML](Image.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L212)

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

[Image](Image.md).[__setAttr](Image.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L216)

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

[Image](Image.md).[__getAttr](Image.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L218)

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

[Image](Image.md).[setProxyAttr](Image.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L220)

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

[Image](Image.md).[getProxyAttr](Image.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L222)

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

[Image](Image.md).[focus](Image.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:242](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L242)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateState](../interfaces/IImage.md#updatestate)

#### Inherited from

[Image](Image.md).[updateState](Image.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L244)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[updateLayout](../interfaces/IImage.md#updatelayout)

#### Inherited from

[Image](Image.md).[updateLayout](Image.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:249](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L249)

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

[Image](Image.md).[forceUpdate](Image.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:253](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L253)

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

[Image](Image.md).[forceRender](Image.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:261](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L261)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__extraUpdate](../interfaces/IImage.md#__extraupdate)

#### Inherited from

[Image](Image.md).[__extraUpdate](Image.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L265)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldMatrix](../interfaces/IImage.md#__updateworldmatrix)

#### Inherited from

[Image](Image.md).[__updateWorldMatrix](Image.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:271](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L271)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalMatrix](../interfaces/IImage.md#__updatelocalmatrix)

#### Inherited from

[Image](Image.md).[__updateLocalMatrix](Image.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L273)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldBounds](../interfaces/IImage.md#__updateworldbounds)

#### Inherited from

[Image](Image.md).[__updateWorldBounds](Image.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:279](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L279)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBounds](../interfaces/IImage.md#__updatelocalbounds)

#### Inherited from

[Image](Image.md).[__updateLocalBounds](Image.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L281)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalBoxBounds](../interfaces/IImage.md#__updatelocalboxbounds)

#### Inherited from

[Image](Image.md).[__updateLocalBoxBounds](Image.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:284](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L284)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalStrokeBounds](../interfaces/IImage.md#__updatelocalstrokebounds)

#### Inherited from

[Image](Image.md).[__updateLocalStrokeBounds](Image.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L286)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateLocalRenderBounds](../interfaces/IImage.md#__updatelocalrenderbounds)

#### Inherited from

[Image](Image.md).[__updateLocalRenderBounds](Image.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L288)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateContentBounds](../interfaces/IImage.md#__updatecontentbounds)

#### Inherited from

[Image](Image.md).[__updateContentBounds](Image.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L294)

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

[IImage](../interfaces/IImage.md).[__updateStrokeBounds](../interfaces/IImage.md#__updatestrokebounds)

#### Inherited from

[Image](Image.md).[__updateStrokeBounds](Image.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L296)

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

[IImage](../interfaces/IImage.md).[__updateRenderBounds](../interfaces/IImage.md#__updaterenderbounds)

#### Inherited from

[Image](Image.md).[__updateRenderBounds](Image.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L298)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateAutoLayout](../interfaces/IImage.md#__updateautolayout)

#### Inherited from

[Image](Image.md).[__updateAutoLayout](Image.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:301](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L301)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateFlowLayout](../interfaces/IImage.md#__updateflowlayout)

#### Inherited from

[Image](Image.md).[__updateFlowLayout](Image.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L303)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateNaturalSize](../interfaces/IImage.md#__updatenaturalsize)

#### Inherited from

[Image](Image.md).[__updateNaturalSize](Image.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L305)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateStrokeSpread](../interfaces/IImage.md#__updatestrokespread)

#### Inherited from

[Image](Image.md).[__updateStrokeSpread](Image.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:308](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L308)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderSpread](../interfaces/IImage.md#__updaterenderspread)

#### Inherited from

[Image](Image.md).[__updateRenderSpread](Image.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:310](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L310)

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

[Image](Image.md).[__updateEraser](Image.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:317](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L317)

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

[Image](Image.md).[__renderEraser](Image.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:321](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L321)

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

[Image](Image.md).[__updateMask](Image.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L329)

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

[Image](Image.md).[__renderMask](Image.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:335](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L335)

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

[Image](Image.md).[__getNowWorld](Image.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:343](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L343)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[getClampRenderScale](../interfaces/IImage.md#getclamprenderscale)

#### Inherited from

[Image](Image.md).[getClampRenderScale](Image.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:356](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L356)

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

[IImage](../interfaces/IImage.md).[getRenderScaleData](../interfaces/IImage.md#getrenderscaledata)

#### Inherited from

[Image](Image.md).[getRenderScaleData](Image.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:362](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L362)

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

[Image](Image.md).[getTransform](Image.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:371](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L371)

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

[Image](Image.md).[getBounds](Image.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L376)

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

[Image](Image.md).[getLayoutBounds](Image.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:380](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L380)

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

[Image](Image.md).[getLayoutPoints](Image.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L384)

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

[Image](Image.md).[getWorldBounds](Image.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:389](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L389)

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

[Image](Image.md).[worldToLocal](Image.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:397](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L397)

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

[Image](Image.md).[localToWorld](Image.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:405](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L405)

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

[Image](Image.md).[worldToInner](Image.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:413](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L413)

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

[Image](Image.md).[innerToWorld](Image.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:421](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L421)

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

[Image](Image.md).[getBoxPoint](Image.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:428](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L428)

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

[Image](Image.md).[getBoxPointByInner](Image.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:432](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L432)

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

[Image](Image.md).[getInnerPoint](Image.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:438](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L438)

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

[Image](Image.md).[getInnerPointByBox](Image.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:444](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L444)

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

[Image](Image.md).[getInnerPointByLocal](Image.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:450](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L450)

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

[Image](Image.md).[getLocalPoint](Image.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L454)

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

[Image](Image.md).[getLocalPointByInner](Image.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:460](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L460)

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

[Image](Image.md).[getPagePoint](Image.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L464)

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

[Image](Image.md).[getWorldPoint](Image.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:469](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L469)

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

[Image](Image.md).[getWorldPointByBox](Image.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:475](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L475)

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

[Image](Image.md).[getWorldPointByLocal](Image.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:479](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L479)

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

[Image](Image.md).[getWorldPointByPage](Image.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L485)

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

[Image](Image.md).[setTransform](Image.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L493)

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

[Image](Image.md).[transform](Image.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L497)

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

[Image](Image.md).[move](Image.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:501](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L501)

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

[Image](Image.md).[moveInner](Image.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L506)

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

[Image](Image.md).[scaleOf](Image.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L510)

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

[Image](Image.md).[rotateOf](Image.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L514)

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

[Image](Image.md).[skewOf](Image.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L518)

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

[Image](Image.md).[transformWorld](Image.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:523](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L523)

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

[Image](Image.md).[moveWorld](Image.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:527](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L527)

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

[Image](Image.md).[scaleOfWorld](Image.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:531](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L531)

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

[Image](Image.md).[rotateOfWorld](Image.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:535](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L535)

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

[Image](Image.md).[skewOfWorld](Image.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L539)

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

[Image](Image.md).[flip](Image.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:543](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L543)

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

[Image](Image.md).[scaleResize](Image.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L550)

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

[Image](Image.md).[__scaleResize](Image.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:555](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L555)

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

[Image](Image.md).[resizeWidth](Image.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L558)

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

[Image](Image.md).[resizeHeight](Image.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:560](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L560)

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

[IImage](../interfaces/IImage.md).[hit](../interfaces/IImage.md#hit)

#### Inherited from

[Image](Image.md).[hit](Image.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L565)

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

[Image](Image.md).[__hitWorld](Image.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L567)

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

[Image](Image.md).[__hit](Image.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:569](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L569)

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

[Image](Image.md).[__hitFill](Image.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:571](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L571)

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

[Image](Image.md).[__hitStroke](Image.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:573](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L573)

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

[Image](Image.md).[__hitPixel](Image.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:575](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L575)

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

[Image](Image.md).[__drawHitPath](Image.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L577)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateHitCanvas](../interfaces/IImage.md#__updatehitcanvas)

#### Inherited from

[Image](Image.md).[__updateHitCanvas](Image.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L579)

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

[Image](Image.md).[__render](Image.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:586](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L586)

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

[Image](Image.md).[__drawFast](Image.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:588](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L588)

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

[Image](Image.md).[__clip](Image.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L593)

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

[IImage](../interfaces/IImage.md).[__renderShape](../interfaces/IImage.md#__rendershape)

#### Inherited from

[Image](Image.md).[__renderShape](Image.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:595](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L595)

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

[IImage](../interfaces/IImage.md).[__drawShape](../interfaces/IImage.md#__drawshape)

#### Inherited from

[Image](Image.md).[__drawShape](Image.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:597](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L597)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateWorldOpacity](../interfaces/IImage.md#__updateworldopacity)

#### Inherited from

[Image](Image.md).[__updateWorldOpacity](Image.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L600)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateChange](../interfaces/IImage.md#__updatechange)

#### Inherited from

[Image](Image.md).[__updateChange](Image.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:602](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L602)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updatePath](../interfaces/IImage.md#__updatepath)

#### Inherited from

[Image](Image.md).[__updatePath](Image.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:613](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L613)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionPathData](../interfaces/IImage.md#getmotionpathdata)

#### Inherited from

[Image](Image.md).[getMotionPathData](Image.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L622)

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

[Image](Image.md).[getMotionPoint](Image.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:626](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L626)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IImage](../interfaces/IImage.md).[getMotionTotal](../interfaces/IImage.md#getmotiontotal)

#### Inherited from

[Image](Image.md).[getMotionTotal](Image.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L630)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateMotionPath](../interfaces/IImage.md#__updatemotionpath)

#### Inherited from

[Image](Image.md).[__updateMotionPath](Image.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:634](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L634)

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

[Image](Image.md).[__runAnimation](Image.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:640](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L640)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateSortChildren](../interfaces/IImage.md#__updatesortchildren)

#### Inherited from

[Image](Image.md).[__updateSortChildren](Image.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:645](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L645)

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

[Image](Image.md).[add](Image.md#add)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L647)

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

[Image](Image.md).[remove](Image.md#remove)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L649)

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

[Image](Image.md).[dropTo](Image.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:653](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L653)

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

[IImage](../interfaces/IImage.md).[on](../interfaces/IImage.md#on)

#### Inherited from

[Image](Image.md).[on](Image.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:662](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L662)

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

[Image](Image.md).[off](Image.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:664](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L664)

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

[IImage](../interfaces/IImage.md).[on_](../interfaces/IImage.md#on_)

#### Inherited from

[Image](Image.md).[on_](Image.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:666](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L666)

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

[Image](Image.md).[off_](Image.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:668](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L668)

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

[IImage](../interfaces/IImage.md).[once](../interfaces/IImage.md#once)

#### Inherited from

[Image](Image.md).[once](Image.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:670](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L670)

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

[Image](Image.md).[emit](Image.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:672](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L672)

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

[Image](Image.md).[emitEvent](Image.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:674](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L674)

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

[Image](Image.md).[hasEvent](Image.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:676](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L676)

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

[Image](Image.md).[changeAttr](Image.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:680](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L680)

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

[Image](Image.md).[addAttr](Image.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:684](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L684)

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

[Image](Image.md).[__emitLifeEvent](Image.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:690](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/display/src/Leaf.ts#L690)

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

[Image](Image.md).[reset](Image.md#reset)

#### Defined in

[src/ui/packages/display/src/UI.ts:405](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L405)

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

[IImage](../interfaces/IImage.md).[set](../interfaces/IImage.md#set)

#### Inherited from

[Image](Image.md).[set](Image.md#set)

#### Defined in

[src/ui/packages/display/src/UI.ts:410](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L410)

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

[Image](Image.md).[get](Image.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:414](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L414)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IImage](../interfaces/IImage.md).[createProxyData](../interfaces/IImage.md#createproxydata)

#### Inherited from

[Image](Image.md).[createProxyData](Image.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L418)

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

[Image](Image.md).[find](Image.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:423](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L423)

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

[Image](Image.md).[findTag](Image.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:425](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L425)

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

[Image](Image.md).[findOne](Image.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:427](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L427)

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

[Image](Image.md).[findId](Image.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L429)

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

[Image](Image.md).[getPath](Image.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:434](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L434)

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

[Image](Image.md).[getPathString](Image.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:441](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L441)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[load](../interfaces/IImage.md#load)

#### Inherited from

[Image](Image.md).[load](Image.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:446](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L446)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__onUpdateSize](../interfaces/IImage.md#__onupdatesize)

#### Inherited from

[Image](Image.md).[__onUpdateSize](Image.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L450)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[__updateRenderPath](../interfaces/IImage.md#__updaterenderpath)

#### Inherited from

[Image](Image.md).[__updateRenderPath](Image.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:457](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L457)

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

[Image](Image.md).[__drawRenderPath](Image.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:465](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L465)

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

[Image](Image.md).[__drawPath](Image.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:470](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L470)

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

[Image](Image.md).[__drawPathByData](Image.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:475](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L475)

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

[Image](Image.md).[__drawPathByBox](Image.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:479](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L479)

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

[IImage](../interfaces/IImage.md).[drawImagePlaceholder](../interfaces/IImage.md#drawimageplaceholder)

#### Inherited from

[Image](Image.md).[drawImagePlaceholder](Image.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:487](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L487)

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

[IImage](../interfaces/IImage.md).[animate](../interfaces/IImage.md#animate)

#### Inherited from

[Image](Image.md).[animate](Image.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:493](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L493)

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

[Image](Image.md).[killAnimate](Image.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:498](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L498)

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

[IImage](../interfaces/IImage.md).[export](../interfaces/IImage.md#export)

#### Inherited from

[Image](Image.md).[export](Image.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:504](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L504)

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

[IImage](../interfaces/IImage.md).[syncExport](../interfaces/IImage.md#syncexport)

#### Inherited from

[Image](Image.md).[syncExport](Image.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L508)

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

[IImage](../interfaces/IImage.md).[clone](../interfaces/IImage.md#clone)

#### Inherited from

[Image](Image.md).[clone](Image.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L512)

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

[Image](Image.md).[one](Image.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:519](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L519)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Image](Image.md).[registerUI](Image.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:523](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L523)

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

[Image](Image.md).[registerData](Image.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:527](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L527)

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

[Image](Image.md).[setEditConfig](Image.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:534](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L534)

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

[Image](Image.md).[setEditOuter](Image.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:536](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L536)

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

[Image](Image.md).[setEditInner](Image.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:538](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L538)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IImage](../interfaces/IImage.md).[destroy](../interfaces/IImage.md#destroy)

#### Inherited from

[Image](Image.md).[destroy](Image.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:541](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/display/src/UI.ts#L541)
