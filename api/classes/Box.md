# Class: Box

## Hierarchy

- [`Group`](Group.md)

  ↳ **`Box`**

  ↳↳ [`Frame`](Frame.md)

  ↳↳ [`EditPoint`](EditPoint.md)

  ↳↳ [`Flow`](Flow.md)

## Implements

- [`IBox`](../interfaces/IBox.md)

## Table of contents

### Constructors

- [constructor](Box.md#constructor)

### Properties

- [innerId](Box.md#innerid)
- [syncEventer](Box.md#synceventer)
- [lockNormalStyle](Box.md#locknormalstyle)
- [\_\_layout](Box.md#__layout)
- [\_\_world](Box.md#__world)
- [\_\_local](Box.md#__local)
- [\_\_nowWorld](Box.md#__nowworld)
- [\_\_cameraWorld](Box.md#__cameraworld)
- [\_\_worldOpacity](Box.md#__worldopacity)
- [\_\_level](Box.md#__level)
- [\_\_tempNumber](Box.md#__tempnumber)
- [\_\_hasAutoLayout](Box.md#__hasautolayout)
- [\_\_hasMask](Box.md#__hasmask)
- [\_\_hasEraser](Box.md#__haseraser)
- [\_\_hitCanvas](Box.md#__hitcanvas)
- [\_\_captureMap](Box.md#__capturemap)
- [\_\_bubbleMap](Box.md#__bubblemap)
- [\_\_hasLocalEvent](Box.md#__haslocalevent)
- [\_\_hasWorldEvent](Box.md#__hasworldevent)
- [destroyed](Box.md#destroyed)
- [\_\_](Box.md#__)
- [width](Box.md#width)
- [height](Box.md#height)
- [resizeChildren](Box.md#resizechildren)
- [textBox](Box.md#textbox)
- [overflow](Box.md#overflow)
- [isOverflow](Box.md#isoverflow)
- [children](Box.md#children)
- [proxyData](Box.md#proxydata)
- [\_\_proxyData](Box.md#__proxydata)
- [leafer](Box.md#leafer)
- [parent](Box.md#parent)
- [zoomLayer](Box.md#zoomlayer)
- [id](Box.md#id)
- [name](Box.md#name)
- [className](Box.md#classname)
- [blendMode](Box.md#blendmode)
- [opacity](Box.md#opacity)
- [visible](Box.md#visible)
- [locked](Box.md#locked)
- [dim](Box.md#dim)
- [dimskip](Box.md#dimskip)
- [zIndex](Box.md#zindex)
- [mask](Box.md#mask)
- [eraser](Box.md#eraser)
- [x](Box.md#x)
- [y](Box.md#y)
- [scaleX](Box.md#scalex)
- [scaleY](Box.md#scaley)
- [rotation](Box.md#rotation)
- [skewX](Box.md#skewx)
- [skewY](Box.md#skewy)
- [offsetX](Box.md#offsetx)
- [offsetY](Box.md#offsety)
- [scrollX](Box.md#scrollx)
- [scrollY](Box.md#scrolly)
- [origin](Box.md#origin)
- [around](Box.md#around)
- [lazy](Box.md#lazy)
- [pixelRatio](Box.md#pixelratio)
- [path](Box.md#path)
- [windingRule](Box.md#windingrule)
- [closed](Box.md#closed)
- [flow](Box.md#flow)
- [padding](Box.md#padding)
- [gap](Box.md#gap)
- [flowAlign](Box.md#flowalign)
- [flowWrap](Box.md#flowwrap)
- [itemBox](Box.md#itembox)
- [inFlow](Box.md#inflow)
- [autoWidth](Box.md#autowidth)
- [autoHeight](Box.md#autoheight)
- [lockRatio](Box.md#lockratio)
- [autoBox](Box.md#autobox)
- [widthRange](Box.md#widthrange)
- [heightRange](Box.md#heightrange)
- [draggable](Box.md#draggable)
- [dragBounds](Box.md#dragbounds)
- [editable](Box.md#editable)
- [hittable](Box.md#hittable)
- [hitFill](Box.md#hitfill)
- [hitStroke](Box.md#hitstroke)
- [hitBox](Box.md#hitbox)
- [hitChildren](Box.md#hitchildren)
- [hitSelf](Box.md#hitself)
- [hitRadius](Box.md#hitradius)
- [cursor](Box.md#cursor)
- [fill](Box.md#fill)
- [stroke](Box.md#stroke)
- [strokeAlign](Box.md#strokealign)
- [strokeWidth](Box.md#strokewidth)
- [strokeWidthFixed](Box.md#strokewidthfixed)
- [strokeCap](Box.md#strokecap)
- [strokeJoin](Box.md#strokejoin)
- [dashPattern](Box.md#dashpattern)
- [dashOffset](Box.md#dashoffset)
- [miterLimit](Box.md#miterlimit)
- [startArrow](Box.md#startarrow)
- [endArrow](Box.md#endarrow)
- [cornerRadius](Box.md#cornerradius)
- [cornerSmoothing](Box.md#cornersmoothing)
- [shadow](Box.md#shadow)
- [innerShadow](Box.md#innershadow)
- [blur](Box.md#blur)
- [backgroundBlur](Box.md#backgroundblur)
- [grayscale](Box.md#grayscale)
- [filter](Box.md#filter)
- [animation](Box.md#animation)
- [animationOut](Box.md#animationout)
- [transition](Box.md#transition)
- [transitionOut](Box.md#transitionout)
- [motionPath](Box.md#motionpath)
- [motionPrecision](Box.md#motionprecision)
- [motion](Box.md#motion)
- [motionRotation](Box.md#motionrotation)
- [states](Box.md#states)
- [state](Box.md#state)
- [selected](Box.md#selected)
- [disabled](Box.md#disabled)
- [normalStyle](Box.md#normalstyle)
- [hoverStyle](Box.md#hoverstyle)
- [pressStyle](Box.md#pressstyle)
- [focusStyle](Box.md#focusstyle)
- [selectedStyle](Box.md#selectedstyle)
- [disabledStyle](Box.md#disabledstyle)
- [placeholderStyle](Box.md#placeholderstyle)
- [placeholderColor](Box.md#placeholdercolor)
- [placeholderDelay](Box.md#placeholderdelay)
- [button](Box.md#button)
- [editConfig](Box.md#editconfig)
- [editOuter](Box.md#editouter)
- [editInner](Box.md#editinner)
- [data](Box.md#data)
- [useFastShadow](Box.md#usefastshadow)
- [\_\_box](Box.md#__box)
- [\_\_animate](Box.md#__animate)

### Accessors

- [tag](Box.md#tag)
- [innerName](Box.md#innername)
- [\_\_DataProcessor](Box.md#__dataprocessor)
- [\_\_LayoutProcessor](Box.md#__layoutprocessor)
- [leaferIsCreated](Box.md#leaferiscreated)
- [leaferIsReady](Box.md#leaferisready)
- [isLeafer](Box.md#isleafer)
- [\_\_localMatrix](Box.md#__localmatrix)
- [\_\_localBoxBounds](Box.md#__localboxbounds)
- [worldTransform](Box.md#worldtransform)
- [localTransform](Box.md#localtransform)
- [boxBounds](Box.md#boxbounds)
- [renderBounds](Box.md#renderbounds)
- [worldBoxBounds](Box.md#worldboxbounds)
- [worldStrokeBounds](Box.md#worldstrokebounds)
- [worldRenderBounds](Box.md#worldrenderbounds)
- [worldOpacity](Box.md#worldopacity)
- [\_\_worldFlipped](Box.md#__worldflipped)
- [\_\_onlyHitMask](Box.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Box.md#__ignorehitworld)
- [\_\_inLazyBounds](Box.md#__inlazybounds)
- [pathInputed](Box.md#pathinputed)
- [event](Box.md#event)
- [\_\_tag](Box.md#__tag)
- [isBranchLeaf](Box.md#isbranchleaf)
- [isBranch](Box.md#isbranch)
- [app](Box.md#app)
- [isFrame](Box.md#isframe)
- [scale](Box.md#scale)
- [pen](Box.md#pen)

### Methods

- [resetCustom](Box.md#resetcustom)
- [waitParent](Box.md#waitparent)
- [waitLeafer](Box.md#waitleafer)
- [nextRender](Box.md#nextrender)
- [removeNextRender](Box.md#removenextrender)
- [\_\_bindLeafer](Box.md#__bindleafer)
- [setAttr](Box.md#setattr)
- [getAttr](Box.md#getattr)
- [getComputedAttr](Box.md#getcomputedattr)
- [toString](Box.md#tostring)
- [toSVG](Box.md#tosvg)
- [\_\_SVG](Box.md#__svg)
- [toHTML](Box.md#tohtml)
- [\_\_setAttr](Box.md#__setattr)
- [\_\_getAttr](Box.md#__getattr)
- [setProxyAttr](Box.md#setproxyattr)
- [getProxyAttr](Box.md#getproxyattr)
- [focus](Box.md#focus)
- [updateState](Box.md#updatestate)
- [updateLayout](Box.md#updatelayout)
- [forceUpdate](Box.md#forceupdate)
- [forceRender](Box.md#forcerender)
- [\_\_extraUpdate](Box.md#__extraupdate)
- [\_\_updateWorldMatrix](Box.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Box.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Box.md#__updateworldbounds)
- [\_\_updateLocalBounds](Box.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Box.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Box.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Box.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](Box.md#__updatecontentbounds)
- [\_\_updateAutoLayout](Box.md#__updateautolayout)
- [\_\_updateFlowLayout](Box.md#__updateflowlayout)
- [\_\_updateNaturalSize](Box.md#__updatenaturalsize)
- [\_\_updateEraser](Box.md#__updateeraser)
- [\_\_renderEraser](Box.md#__rendereraser)
- [\_\_updateMask](Box.md#__updatemask)
- [\_\_renderMask](Box.md#__rendermask)
- [\_\_getNowWorld](Box.md#__getnowworld)
- [getTransform](Box.md#gettransform)
- [getBounds](Box.md#getbounds)
- [getLayoutBounds](Box.md#getlayoutbounds)
- [getLayoutPoints](Box.md#getlayoutpoints)
- [getWorldBounds](Box.md#getworldbounds)
- [worldToLocal](Box.md#worldtolocal)
- [localToWorld](Box.md#localtoworld)
- [worldToInner](Box.md#worldtoinner)
- [innerToWorld](Box.md#innertoworld)
- [getBoxPoint](Box.md#getboxpoint)
- [getBoxPointByInner](Box.md#getboxpointbyinner)
- [getInnerPoint](Box.md#getinnerpoint)
- [getInnerPointByBox](Box.md#getinnerpointbybox)
- [getInnerPointByLocal](Box.md#getinnerpointbylocal)
- [getLocalPoint](Box.md#getlocalpoint)
- [getLocalPointByInner](Box.md#getlocalpointbyinner)
- [getPagePoint](Box.md#getpagepoint)
- [getWorldPoint](Box.md#getworldpoint)
- [getWorldPointByBox](Box.md#getworldpointbybox)
- [getWorldPointByLocal](Box.md#getworldpointbylocal)
- [getWorldPointByPage](Box.md#getworldpointbypage)
- [setTransform](Box.md#settransform)
- [transform](Box.md#transform)
- [move](Box.md#move)
- [moveInner](Box.md#moveinner)
- [scaleOf](Box.md#scaleof)
- [rotateOf](Box.md#rotateof)
- [skewOf](Box.md#skewof)
- [transformWorld](Box.md#transformworld)
- [moveWorld](Box.md#moveworld)
- [scaleOfWorld](Box.md#scaleofworld)
- [rotateOfWorld](Box.md#rotateofworld)
- [skewOfWorld](Box.md#skewofworld)
- [flip](Box.md#flip)
- [scaleResize](Box.md#scaleresize)
- [\_\_scaleResize](Box.md#__scaleresize)
- [resizeWidth](Box.md#resizewidth)
- [resizeHeight](Box.md#resizeheight)
- [\_\_hitWorld](Box.md#__hitworld)
- [\_\_hit](Box.md#__hit)
- [\_\_hitFill](Box.md#__hitfill)
- [\_\_hitStroke](Box.md#__hitstroke)
- [\_\_hitPixel](Box.md#__hitpixel)
- [\_\_drawHitPath](Box.md#__drawhitpath)
- [\_\_updateHitCanvas](Box.md#__updatehitcanvas)
- [\_\_drawFast](Box.md#__drawfast)
- [\_\_draw](Box.md#__draw)
- [\_\_clip](Box.md#__clip)
- [\_\_renderShape](Box.md#__rendershape)
- [\_\_drawShape](Box.md#__drawshape)
- [\_\_updateWorldOpacity](Box.md#__updateworldopacity)
- [\_\_updatePath](Box.md#__updatepath)
- [getMotionPathData](Box.md#getmotionpathdata)
- [getMotionPoint](Box.md#getmotionpoint)
- [getMotionTotal](Box.md#getmotiontotal)
- [\_\_updateMotionPath](Box.md#__updatemotionpath)
- [\_\_runAnimation](Box.md#__runanimation)
- [\_\_updateSortChildren](Box.md#__updatesortchildren)
- [dropTo](Box.md#dropto)
- [on](Box.md#on)
- [off](Box.md#off)
- [on\_](Box.md#on_)
- [off\_](Box.md#off_)
- [once](Box.md#once)
- [emit](Box.md#emit)
- [emitEvent](Box.md#emitevent)
- [hasEvent](Box.md#hasevent)
- [changeAttr](Box.md#changeattr)
- [addAttr](Box.md#addattr)
- [\_\_emitLifeEvent](Box.md#__emitlifeevent)
- [\_\_updateStrokeSpread](Box.md#__updatestrokespread)
- [\_\_updateRectRenderSpread](Box.md#__updaterectrenderspread)
- [\_\_updateRenderSpread](Box.md#__updaterenderspread)
- [\_\_updateRectBoxBounds](Box.md#__updaterectboxbounds)
- [\_\_updateBoxBounds](Box.md#__updateboxbounds)
- [\_\_updateStrokeBounds](Box.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Box.md#__updaterenderbounds)
- [\_\_updateRectRenderBounds](Box.md#__updaterectrenderbounds)
- [\_\_updateRectChange](Box.md#__updaterectchange)
- [\_\_updateChange](Box.md#__updatechange)
- [\_\_renderRect](Box.md#__renderrect)
- [\_\_renderGroup](Box.md#__rendergroup)
- [\_\_render](Box.md#__render)
- [\_\_drawContent](Box.md#__drawcontent)
- [reset](Box.md#reset)
- [\_\_setBranch](Box.md#__setbranch)
- [set](Box.md#set)
- [toJSON](Box.md#tojson)
- [pick](Box.md#pick)
- [addAt](Box.md#addat)
- [addAfter](Box.md#addafter)
- [addBefore](Box.md#addbefore)
- [add](Box.md#add)
- [addMany](Box.md#addmany)
- [remove](Box.md#remove)
- [removeAll](Box.md#removeall)
- [clear](Box.md#clear)
- [get](Box.md#get)
- [createProxyData](Box.md#createproxydata)
- [find](Box.md#find)
- [findTag](Box.md#findtag)
- [findOne](Box.md#findone)
- [findId](Box.md#findid)
- [getPath](Box.md#getpath)
- [getPathString](Box.md#getpathstring)
- [load](Box.md#load)
- [\_\_onUpdateSize](Box.md#__onupdatesize)
- [\_\_updateRenderPath](Box.md#__updaterenderpath)
- [\_\_drawRenderPath](Box.md#__drawrenderpath)
- [\_\_drawPath](Box.md#__drawpath)
- [\_\_drawPathByData](Box.md#__drawpathbydata)
- [\_\_drawPathByBox](Box.md#__drawpathbybox)
- [drawImagePlaceholder](Box.md#drawimageplaceholder)
- [animate](Box.md#animate)
- [killAnimate](Box.md#killanimate)
- [export](Box.md#export)
- [syncExport](Box.md#syncexport)
- [clone](Box.md#clone)
- [one](Box.md#one)
- [registerUI](Box.md#registerui)
- [registerData](Box.md#registerdata)
- [setEditConfig](Box.md#seteditconfig)
- [setEditOuter](Box.md#seteditouter)
- [setEditInner](Box.md#seteditinner)
- [destroy](Box.md#destroy)

## Constructors

### constructor

• **new Box**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IBoxInputData`](../interfaces/IBoxInputData.md) |

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[ui/packages/display/src/Box.ts:44](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L44)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[innerId](../interfaces/IBox.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[syncEventer](../interfaces/IBox.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[lockNormalStyle](../interfaces/IBox.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__layout](../interfaces/IBox.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__world](../interfaces/IBox.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__local](../interfaces/IBox.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__nowWorld](../interfaces/IBox.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__cameraWorld](../interfaces/IBox.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[__worldOpacity](../interfaces/IBox.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[__level](../interfaces/IBox.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[__tempNumber](../interfaces/IBox.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__hasAutoLayout](../interfaces/IBox.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__hasMask](../interfaces/IBox.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__hasEraser](../interfaces/IBox.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__hitCanvas](../interfaces/IBox.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__captureMap](../interfaces/IBox.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__bubbleMap](../interfaces/IBox.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L97)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__hasLocalEvent](../interfaces/IBox.md#__haslocalevent)

#### Inherited from

[Group](Group.md).[__hasLocalEvent](Group.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L99)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__hasWorldEvent](../interfaces/IBox.md#__hasworldevent)

#### Inherited from

[Group](Group.md).[__hasWorldEvent](Group.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L100)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[destroyed](../interfaces/IBox.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IBoxData`](../interfaces/IBoxData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__](../interfaces/IBox.md#__)

#### Overrides

[Group](Group.md).[__](Group.md#__)

#### Defined in

[ui/packages/display/src/Box.ts:24](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L24)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[width](../interfaces/IBox.md#width)

#### Overrides

[Group](Group.md).[width](Group.md#width)

#### Defined in

[ui/packages/display/src/Box.ts:28](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L28)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[height](../interfaces/IBox.md#height)

#### Overrides

[Group](Group.md).[height](Group.md#height)

#### Defined in

[ui/packages/display/src/Box.ts:31](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L31)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[resizeChildren](../interfaces/IBox.md#resizechildren)

#### Defined in

[ui/packages/display/src/Box.ts:34](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L34)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[textBox](../interfaces/IBox.md#textbox)

#### Defined in

[ui/packages/display/src/Box.ts:37](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L37)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Implementation of

[IBox](../interfaces/IBox.md).[overflow](../interfaces/IBox.md#overflow)

#### Defined in

[ui/packages/display/src/Box.ts:40](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L40)

___

### isOverflow

• **isOverflow**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[isOverflow](../interfaces/IBox.md#isoverflow)

#### Defined in

[ui/packages/display/src/Box.ts:42](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L42)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[children](../interfaces/IBox.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L28)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[proxyData](../interfaces/IBox.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__proxyData](../interfaces/IBox.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[leafer](../interfaces/IBox.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[parent](../interfaces/IBox.md#parent)

#### Inherited from

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[zoomLayer](../interfaces/IBox.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[id](../interfaces/IBox.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[name](../interfaces/IBox.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[className](../interfaces/IBox.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IBox](../interfaces/IBox.md).[blendMode](../interfaces/IBox.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[opacity](../interfaces/IBox.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IBox](../interfaces/IBox.md).[visible](../interfaces/IBox.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[locked](../interfaces/IBox.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[dim](../interfaces/IBox.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[dimskip](../interfaces/IBox.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[zIndex](../interfaces/IBox.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IBox](../interfaces/IBox.md).[mask](../interfaces/IBox.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IBox](../interfaces/IBox.md).[eraser](../interfaces/IBox.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[x](../interfaces/IBox.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[y](../interfaces/IBox.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[scaleX](../interfaces/IBox.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[scaleY](../interfaces/IBox.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[rotation](../interfaces/IBox.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[skewX](../interfaces/IBox.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[skewY](../interfaces/IBox.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[offsetX](../interfaces/IBox.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[offsetY](../interfaces/IBox.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[scrollX](../interfaces/IBox.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[scrollY](../interfaces/IBox.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IBox](../interfaces/IBox.md).[origin](../interfaces/IBox.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IBox](../interfaces/IBox.md).[around](../interfaces/IBox.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[lazy](../interfaces/IBox.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[pixelRatio](../interfaces/IBox.md#pixelratio)

#### Inherited from

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[path](../interfaces/IBox.md#path)

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IBox](../interfaces/IBox.md).[windingRule](../interfaces/IBox.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[closed](../interfaces/IBox.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IBox](../interfaces/IBox.md).[flow](../interfaces/IBox.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IBox](../interfaces/IBox.md).[padding](../interfaces/IBox.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[gap](../interfaces/IBox.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IBox](../interfaces/IBox.md).[flowAlign](../interfaces/IBox.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IBox](../interfaces/IBox.md).[flowWrap](../interfaces/IBox.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IBox](../interfaces/IBox.md).[itemBox](../interfaces/IBox.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[inFlow](../interfaces/IBox.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IBox](../interfaces/IBox.md).[autoWidth](../interfaces/IBox.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IBox](../interfaces/IBox.md).[autoHeight](../interfaces/IBox.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[lockRatio](../interfaces/IBox.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[autoBox](../interfaces/IBox.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[widthRange](../interfaces/IBox.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[heightRange](../interfaces/IBox.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IBox](../interfaces/IBox.md).[draggable](../interfaces/IBox.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[dragBounds](../interfaces/IBox.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[editable](../interfaces/IBox.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[hittable](../interfaces/IBox.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IBox](../interfaces/IBox.md).[hitFill](../interfaces/IBox.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IBox](../interfaces/IBox.md).[hitStroke](../interfaces/IBox.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[hitBox](../interfaces/IBox.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[hitChildren](../interfaces/IBox.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[hitSelf](../interfaces/IBox.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[hitRadius](../interfaces/IBox.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[cursor](../interfaces/IBox.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IBox](../interfaces/IBox.md).[fill](../interfaces/IBox.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IBox](../interfaces/IBox.md).[stroke](../interfaces/IBox.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IBox](../interfaces/IBox.md).[strokeAlign](../interfaces/IBox.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IBox](../interfaces/IBox.md).[strokeWidth](../interfaces/IBox.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[strokeWidthFixed](../interfaces/IBox.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IBox](../interfaces/IBox.md).[strokeCap](../interfaces/IBox.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IBox](../interfaces/IBox.md).[strokeJoin](../interfaces/IBox.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IBox](../interfaces/IBox.md).[dashPattern](../interfaces/IBox.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[dashOffset](../interfaces/IBox.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[miterLimit](../interfaces/IBox.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IBox](../interfaces/IBox.md).[startArrow](../interfaces/IBox.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IBox](../interfaces/IBox.md).[endArrow](../interfaces/IBox.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IBox](../interfaces/IBox.md).[cornerRadius](../interfaces/IBox.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[cornerSmoothing](../interfaces/IBox.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[shadow](../interfaces/IBox.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[innerShadow](../interfaces/IBox.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[blur](../interfaces/IBox.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[backgroundBlur](../interfaces/IBox.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[grayscale](../interfaces/IBox.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[filter](../interfaces/IBox.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[animation](../interfaces/IBox.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IBox](../interfaces/IBox.md).[animationOut](../interfaces/IBox.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IBox](../interfaces/IBox.md).[transition](../interfaces/IBox.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IBox](../interfaces/IBox.md).[transitionOut](../interfaces/IBox.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[motionPath](../interfaces/IBox.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[motionPrecision](../interfaces/IBox.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[motion](../interfaces/IBox.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[motionRotation](../interfaces/IBox.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[states](../interfaces/IBox.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[state](../interfaces/IBox.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[selected](../interfaces/IBox.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[disabled](../interfaces/IBox.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[normalStyle](../interfaces/IBox.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[hoverStyle](../interfaces/IBox.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[pressStyle](../interfaces/IBox.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[focusStyle](../interfaces/IBox.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[selectedStyle](../interfaces/IBox.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[disabledStyle](../interfaces/IBox.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[placeholderStyle](../interfaces/IBox.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L350)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[placeholderColor](../interfaces/IBox.md#placeholdercolor)

#### Inherited from

[Group](Group.md).[placeholderColor](Group.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L353)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IBox](../interfaces/IBox.md).[placeholderDelay](../interfaces/IBox.md#placeholderdelay)

#### Inherited from

[Group](Group.md).[placeholderDelay](Group.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L356)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[button](../interfaces/IBox.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L359)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[editConfig](../interfaces/IBox.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L364)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[editOuter](../interfaces/IBox.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L366)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IBox](../interfaces/IBox.md).[editInner](../interfaces/IBox.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L368)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[data](../interfaces/IBox.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L373)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[useFastShadow](../interfaces/IBox.md#usefastshadow)

#### Inherited from

[Group](Group.md).[useFastShadow](Group.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L379)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__box](../interfaces/IBox.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__animate](../interfaces/IBox.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L382)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IBox](../interfaces/IBox.md).[tag](../interfaces/IBox.md#tag)

#### Inherited from

Group.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:25](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L25)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[tag](../interfaces/IBox.md#tag)

#### Inherited from

Group.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IBox](../interfaces/IBox.md).[innerName](../interfaces/IBox.md#innername)

#### Inherited from

Group.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__DataProcessor](../interfaces/IBox.md#__dataprocessor)

#### Inherited from

Group.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__LayoutProcessor](../interfaces/IBox.md#__layoutprocessor)

#### Inherited from

Group.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[leaferIsCreated](../interfaces/IBox.md#leaferiscreated)

#### Inherited from

Group.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[leaferIsReady](../interfaces/IBox.md#leaferisready)

#### Inherited from

Group.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[isLeafer](../interfaces/IBox.md#isleafer)

#### Inherited from

Group.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L42)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__localMatrix](../interfaces/IBox.md#__localmatrix)

#### Inherited from

Group.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[__localBoxBounds](../interfaces/IBox.md#__localboxbounds)

#### Inherited from

Group.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[worldTransform](../interfaces/IBox.md#worldtransform)

#### Inherited from

Group.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[localTransform](../interfaces/IBox.md#localtransform)

#### Inherited from

Group.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[boxBounds](../interfaces/IBox.md#boxbounds)

#### Inherited from

Group.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[renderBounds](../interfaces/IBox.md#renderbounds)

#### Inherited from

Group.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[worldBoxBounds](../interfaces/IBox.md#worldboxbounds)

#### Inherited from

Group.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[worldStrokeBounds](../interfaces/IBox.md#worldstrokebounds)

#### Inherited from

Group.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[worldRenderBounds](../interfaces/IBox.md#worldrenderbounds)

#### Inherited from

Group.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IBox](../interfaces/IBox.md).[worldOpacity](../interfaces/IBox.md#worldopacity)

#### Inherited from

Group.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__worldFlipped](../interfaces/IBox.md#__worldflipped)

#### Inherited from

Group.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__onlyHitMask](../interfaces/IBox.md#__onlyhitmask)

#### Inherited from

Group.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__ignoreHitWorld](../interfaces/IBox.md#__ignorehitworld)

#### Inherited from

Group.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[__inLazyBounds](../interfaces/IBox.md#__inlazybounds)

#### Inherited from

Group.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[pathInputed](../interfaces/IBox.md#pathinputed)

#### Inherited from

Group.pathInputed

#### Defined in

[leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L91)

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

[IBox](../interfaces/IBox.md).[event](../interfaces/IBox.md#event)

#### Inherited from

Group.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IBox](../interfaces/IBox.md).[__tag](../interfaces/IBox.md#__tag)

#### Overrides

Group.\_\_tag

#### Defined in

[ui/packages/display/src/Box.ts:19](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L19)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[isBranchLeaf](../interfaces/IBox.md#isbranchleaf)

#### Overrides

Group.isBranchLeaf

#### Defined in

[ui/packages/display/src/Box.ts:21](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L21)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[isBranch](../interfaces/IBox.md#isbranch)

#### Inherited from

Group.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[app](../interfaces/IBox.md#app)

#### Inherited from

Group.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IBox](../interfaces/IBox.md).[isFrame](../interfaces/IBox.md#isframe)

#### Inherited from

Group.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[scale](../interfaces/IBox.md#scale)

#### Inherited from

Group.scale

#### Defined in

[ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L377)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[scale](../interfaces/IBox.md#scale)

#### Inherited from

Group.scale

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L376)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[pen](../interfaces/IBox.md#pen)

#### Inherited from

Group.pen

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L384)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[resetCustom](../interfaces/IBox.md#resetcustom)

#### Inherited from

[Group](Group.md).[resetCustom](Group.md#resetcustom)

#### Defined in

[leafer/packages/display/src/Leaf.ts:135](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L135)

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

[IBox](../interfaces/IBox.md).[waitParent](../interfaces/IBox.md#waitparent)

#### Inherited from

[Group](Group.md).[waitParent](Group.md#waitparent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:141](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L141)

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

[IBox](../interfaces/IBox.md).[waitLeafer](../interfaces/IBox.md#waitleafer)

#### Inherited from

[Group](Group.md).[waitLeafer](Group.md#waitleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:146](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L146)

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

[IBox](../interfaces/IBox.md).[nextRender](../interfaces/IBox.md#nextrender)

#### Inherited from

[Group](Group.md).[nextRender](Group.md#nextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:151](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L151)

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

[IBox](../interfaces/IBox.md).[removeNextRender](../interfaces/IBox.md#removenextrender)

#### Inherited from

[Group](Group.md).[removeNextRender](Group.md#removenextrender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:155](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L155)

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

[IBox](../interfaces/IBox.md).[__bindLeafer](../interfaces/IBox.md#__bindleafer)

#### Inherited from

[Group](Group.md).[__bindLeafer](Group.md#__bindleafer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:159](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L159)

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

[IBox](../interfaces/IBox.md).[setAttr](../interfaces/IBox.md#setattr)

#### Inherited from

[Group](Group.md).[setAttr](Group.md#setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:188](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L188)

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

[IBox](../interfaces/IBox.md).[getAttr](../interfaces/IBox.md#getattr)

#### Inherited from

[Group](Group.md).[getAttr](Group.md#getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:189](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L189)

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

[IBox](../interfaces/IBox.md).[getComputedAttr](../interfaces/IBox.md#getcomputedattr)

#### Inherited from

[Group](Group.md).[getComputedAttr](Group.md#getcomputedattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:191](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L191)

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

[IBox](../interfaces/IBox.md).[toString](../interfaces/IBox.md#tostring)

#### Inherited from

[Group](Group.md).[toString](Group.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L198)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IBox](../interfaces/IBox.md).[toSVG](../interfaces/IBox.md#tosvg)

#### Inherited from

[Group](Group.md).[toSVG](Group.md#tosvg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:202](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L202)

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

[IBox](../interfaces/IBox.md).[__SVG](../interfaces/IBox.md#__svg)

#### Inherited from

[Group](Group.md).[__SVG](Group.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L204)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IBox](../interfaces/IBox.md).[toHTML](../interfaces/IBox.md#tohtml)

#### Inherited from

[Group](Group.md).[toHTML](Group.md#tohtml)

#### Defined in

[leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L206)

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

[IBox](../interfaces/IBox.md).[__setAttr](../interfaces/IBox.md#__setattr)

#### Inherited from

[Group](Group.md).[__setAttr](Group.md#__setattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L210)

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

[IBox](../interfaces/IBox.md).[__getAttr](../interfaces/IBox.md#__getattr)

#### Inherited from

[Group](Group.md).[__getAttr](Group.md#__getattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L212)

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

[IBox](../interfaces/IBox.md).[setProxyAttr](../interfaces/IBox.md#setproxyattr)

#### Inherited from

[Group](Group.md).[setProxyAttr](Group.md#setproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L214)

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

[IBox](../interfaces/IBox.md).[getProxyAttr](../interfaces/IBox.md#getproxyattr)

#### Inherited from

[Group](Group.md).[getProxyAttr](Group.md#getproxyattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:216](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L216)

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

[IBox](../interfaces/IBox.md).[focus](../interfaces/IBox.md#focus)

#### Inherited from

[Group](Group.md).[focus](Group.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L236)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[updateState](../interfaces/IBox.md#updatestate)

#### Inherited from

[Group](Group.md).[updateState](Group.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L238)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[updateLayout](../interfaces/IBox.md#updatelayout)

#### Inherited from

[Group](Group.md).[updateLayout](Group.md#updatelayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:243](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L243)

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

[IBox](../interfaces/IBox.md).[forceUpdate](../interfaces/IBox.md#forceupdate)

#### Inherited from

[Group](Group.md).[forceUpdate](Group.md#forceupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:247](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L247)

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

[IBox](../interfaces/IBox.md).[forceRender](../interfaces/IBox.md#forcerender)

#### Inherited from

[Group](Group.md).[forceRender](Group.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L255)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__extraUpdate](../interfaces/IBox.md#__extraupdate)

#### Inherited from

[Group](Group.md).[__extraUpdate](Group.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:259](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L259)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateWorldMatrix](../interfaces/IBox.md#__updateworldmatrix)

#### Inherited from

[Group](Group.md).[__updateWorldMatrix](Group.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L265)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateLocalMatrix](../interfaces/IBox.md#__updatelocalmatrix)

#### Inherited from

[Group](Group.md).[__updateLocalMatrix](Group.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L267)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateWorldBounds](../interfaces/IBox.md#__updateworldbounds)

#### Inherited from

[Group](Group.md).[__updateWorldBounds](Group.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateLocalBounds](../interfaces/IBox.md#__updatelocalbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBounds](Group.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateLocalBoxBounds](../interfaces/IBox.md#__updatelocalboxbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBoxBounds](Group.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateLocalStrokeBounds](../interfaces/IBox.md#__updatelocalstrokebounds)

#### Inherited from

[Group](Group.md).[__updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateLocalRenderBounds](../interfaces/IBox.md#__updatelocalrenderbounds)

#### Inherited from

[Group](Group.md).[__updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L282)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateContentBounds](../interfaces/IBox.md#__updatecontentbounds)

#### Inherited from

[Group](Group.md).[__updateContentBounds](Group.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L288)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateAutoLayout](../interfaces/IBox.md#__updateautolayout)

#### Inherited from

[Group](Group.md).[__updateAutoLayout](Group.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L295)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateFlowLayout](../interfaces/IBox.md#__updateflowlayout)

#### Inherited from

[Group](Group.md).[__updateFlowLayout](Group.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L297)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateNaturalSize](../interfaces/IBox.md#__updatenaturalsize)

#### Inherited from

[Group](Group.md).[__updateNaturalSize](Group.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L299)

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

[IBox](../interfaces/IBox.md).[__updateEraser](../interfaces/IBox.md#__updateeraser)

#### Inherited from

[Group](Group.md).[__updateEraser](Group.md#__updateeraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:311](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L311)

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

[IBox](../interfaces/IBox.md).[__renderEraser](../interfaces/IBox.md#__rendereraser)

#### Inherited from

[Group](Group.md).[__renderEraser](Group.md#__rendereraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:315](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L315)

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

[IBox](../interfaces/IBox.md).[__updateMask](../interfaces/IBox.md#__updatemask)

#### Inherited from

[Group](Group.md).[__updateMask](Group.md#__updatemask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:323](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L323)

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

[IBox](../interfaces/IBox.md).[__renderMask](../interfaces/IBox.md#__rendermask)

#### Inherited from

[Group](Group.md).[__renderMask](Group.md#__rendermask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:329](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L329)

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

[IBox](../interfaces/IBox.md).[__getNowWorld](../interfaces/IBox.md#__getnowworld)

#### Inherited from

[Group](Group.md).[__getNowWorld](Group.md#__getnowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:337](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L337)

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

[IBox](../interfaces/IBox.md).[getTransform](../interfaces/IBox.md#gettransform)

#### Inherited from

[Group](Group.md).[getTransform](Group.md#gettransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:350](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L350)

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

[IBox](../interfaces/IBox.md).[getBounds](../interfaces/IBox.md#getbounds)

#### Inherited from

[Group](Group.md).[getBounds](Group.md#getbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:355](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L355)

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

[IBox](../interfaces/IBox.md).[getLayoutBounds](../interfaces/IBox.md#getlayoutbounds)

#### Inherited from

[Group](Group.md).[getLayoutBounds](Group.md#getlayoutbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:359](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L359)

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

[IBox](../interfaces/IBox.md).[getLayoutPoints](../interfaces/IBox.md#getlayoutpoints)

#### Inherited from

[Group](Group.md).[getLayoutPoints](Group.md#getlayoutpoints)

#### Defined in

[leafer/packages/display/src/Leaf.ts:363](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L363)

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

[IBox](../interfaces/IBox.md).[getWorldBounds](../interfaces/IBox.md#getworldbounds)

#### Inherited from

[Group](Group.md).[getWorldBounds](Group.md#getworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:368](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L368)

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

[IBox](../interfaces/IBox.md).[worldToLocal](../interfaces/IBox.md#worldtolocal)

#### Inherited from

[Group](Group.md).[worldToLocal](Group.md#worldtolocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:376](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L376)

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

[IBox](../interfaces/IBox.md).[localToWorld](../interfaces/IBox.md#localtoworld)

#### Inherited from

[Group](Group.md).[localToWorld](Group.md#localtoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:384](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L384)

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

[IBox](../interfaces/IBox.md).[worldToInner](../interfaces/IBox.md#worldtoinner)

#### Inherited from

[Group](Group.md).[worldToInner](Group.md#worldtoinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:392](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L392)

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

[IBox](../interfaces/IBox.md).[innerToWorld](../interfaces/IBox.md#innertoworld)

#### Inherited from

[Group](Group.md).[innerToWorld](Group.md#innertoworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:400](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L400)

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

[IBox](../interfaces/IBox.md).[getBoxPoint](../interfaces/IBox.md#getboxpoint)

#### Inherited from

[Group](Group.md).[getBoxPoint](Group.md#getboxpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:407](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L407)

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

[IBox](../interfaces/IBox.md).[getBoxPointByInner](../interfaces/IBox.md#getboxpointbyinner)

#### Inherited from

[Group](Group.md).[getBoxPointByInner](Group.md#getboxpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:411](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L411)

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

[IBox](../interfaces/IBox.md).[getInnerPoint](../interfaces/IBox.md#getinnerpoint)

#### Inherited from

[Group](Group.md).[getInnerPoint](Group.md#getinnerpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:417](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L417)

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

[IBox](../interfaces/IBox.md).[getInnerPointByBox](../interfaces/IBox.md#getinnerpointbybox)

#### Inherited from

[Group](Group.md).[getInnerPointByBox](Group.md#getinnerpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:423](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L423)

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

[IBox](../interfaces/IBox.md).[getInnerPointByLocal](../interfaces/IBox.md#getinnerpointbylocal)

#### Inherited from

[Group](Group.md).[getInnerPointByLocal](Group.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:429](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L429)

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

[IBox](../interfaces/IBox.md).[getLocalPoint](../interfaces/IBox.md#getlocalpoint)

#### Inherited from

[Group](Group.md).[getLocalPoint](Group.md#getlocalpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:433](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L433)

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

[IBox](../interfaces/IBox.md).[getLocalPointByInner](../interfaces/IBox.md#getlocalpointbyinner)

#### Inherited from

[Group](Group.md).[getLocalPointByInner](Group.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:439](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L439)

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

[IBox](../interfaces/IBox.md).[getPagePoint](../interfaces/IBox.md#getpagepoint)

#### Inherited from

[Group](Group.md).[getPagePoint](Group.md#getpagepoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:443](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L443)

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

[IBox](../interfaces/IBox.md).[getWorldPoint](../interfaces/IBox.md#getworldpoint)

#### Inherited from

[Group](Group.md).[getWorldPoint](Group.md#getworldpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:448](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L448)

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

[IBox](../interfaces/IBox.md).[getWorldPointByBox](../interfaces/IBox.md#getworldpointbybox)

#### Inherited from

[Group](Group.md).[getWorldPointByBox](Group.md#getworldpointbybox)

#### Defined in

[leafer/packages/display/src/Leaf.ts:454](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L454)

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

[IBox](../interfaces/IBox.md).[getWorldPointByLocal](../interfaces/IBox.md#getworldpointbylocal)

#### Inherited from

[Group](Group.md).[getWorldPointByLocal](Group.md#getworldpointbylocal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:458](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L458)

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

[IBox](../interfaces/IBox.md).[getWorldPointByPage](../interfaces/IBox.md#getworldpointbypage)

#### Inherited from

[Group](Group.md).[getWorldPointByPage](Group.md#getworldpointbypage)

#### Defined in

[leafer/packages/display/src/Leaf.ts:464](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L464)

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

[IBox](../interfaces/IBox.md).[setTransform](../interfaces/IBox.md#settransform)

#### Inherited from

[Group](Group.md).[setTransform](Group.md#settransform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:472](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L472)

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

[IBox](../interfaces/IBox.md).[transform](../interfaces/IBox.md#transform)

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:476](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L476)

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

[IBox](../interfaces/IBox.md).[move](../interfaces/IBox.md#move)

#### Inherited from

[Group](Group.md).[move](Group.md#move)

#### Defined in

[leafer/packages/display/src/Leaf.ts:480](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L480)

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

[IBox](../interfaces/IBox.md).[moveInner](../interfaces/IBox.md#moveinner)

#### Inherited from

[Group](Group.md).[moveInner](Group.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L485)

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

[IBox](../interfaces/IBox.md).[scaleOf](../interfaces/IBox.md#scaleof)

#### Inherited from

[Group](Group.md).[scaleOf](Group.md#scaleof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:489](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L489)

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

[IBox](../interfaces/IBox.md).[rotateOf](../interfaces/IBox.md#rotateof)

#### Inherited from

[Group](Group.md).[rotateOf](Group.md#rotateof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:493](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L493)

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

[IBox](../interfaces/IBox.md).[skewOf](../interfaces/IBox.md#skewof)

#### Inherited from

[Group](Group.md).[skewOf](Group.md#skewof)

#### Defined in

[leafer/packages/display/src/Leaf.ts:497](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L497)

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

[IBox](../interfaces/IBox.md).[transformWorld](../interfaces/IBox.md#transformworld)

#### Inherited from

[Group](Group.md).[transformWorld](Group.md#transformworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:502](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L502)

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

[IBox](../interfaces/IBox.md).[moveWorld](../interfaces/IBox.md#moveworld)

#### Inherited from

[Group](Group.md).[moveWorld](Group.md#moveworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:506](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L506)

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

[IBox](../interfaces/IBox.md).[scaleOfWorld](../interfaces/IBox.md#scaleofworld)

#### Inherited from

[Group](Group.md).[scaleOfWorld](Group.md#scaleofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:510](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L510)

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

[IBox](../interfaces/IBox.md).[rotateOfWorld](../interfaces/IBox.md#rotateofworld)

#### Inherited from

[Group](Group.md).[rotateOfWorld](Group.md#rotateofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:514](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L514)

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

[IBox](../interfaces/IBox.md).[skewOfWorld](../interfaces/IBox.md#skewofworld)

#### Inherited from

[Group](Group.md).[skewOfWorld](Group.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L518)

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

[IBox](../interfaces/IBox.md).[flip](../interfaces/IBox.md#flip)

#### Inherited from

[Group](Group.md).[flip](Group.md#flip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:522](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L522)

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

[IBox](../interfaces/IBox.md).[scaleResize](../interfaces/IBox.md#scaleresize)

#### Inherited from

[Group](Group.md).[scaleResize](Group.md#scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:529](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L529)

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

[IBox](../interfaces/IBox.md).[__scaleResize](../interfaces/IBox.md#__scaleresize)

#### Inherited from

[Group](Group.md).[__scaleResize](Group.md#__scaleresize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L534)

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

[IBox](../interfaces/IBox.md).[resizeWidth](../interfaces/IBox.md#resizewidth)

#### Inherited from

[Group](Group.md).[resizeWidth](Group.md#resizewidth)

#### Defined in

[leafer/packages/display/src/Leaf.ts:537](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L537)

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

[IBox](../interfaces/IBox.md).[resizeHeight](../interfaces/IBox.md#resizeheight)

#### Inherited from

[Group](Group.md).[resizeHeight](Group.md#resizeheight)

#### Defined in

[leafer/packages/display/src/Leaf.ts:539](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L539)

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

[IBox](../interfaces/IBox.md).[__hitWorld](../interfaces/IBox.md#__hitworld)

#### Inherited from

[Group](Group.md).[__hitWorld](Group.md#__hitworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:544](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L544)

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

[IBox](../interfaces/IBox.md).[__hit](../interfaces/IBox.md#__hit)

#### Inherited from

[Group](Group.md).[__hit](Group.md#__hit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:546](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L546)

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

[IBox](../interfaces/IBox.md).[__hitFill](../interfaces/IBox.md#__hitfill)

#### Inherited from

[Group](Group.md).[__hitFill](Group.md#__hitfill)

#### Defined in

[leafer/packages/display/src/Leaf.ts:548](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L548)

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

[IBox](../interfaces/IBox.md).[__hitStroke](../interfaces/IBox.md#__hitstroke)

#### Inherited from

[Group](Group.md).[__hitStroke](Group.md#__hitstroke)

#### Defined in

[leafer/packages/display/src/Leaf.ts:550](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L550)

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

[IBox](../interfaces/IBox.md).[__hitPixel](../interfaces/IBox.md#__hitpixel)

#### Inherited from

[Group](Group.md).[__hitPixel](Group.md#__hitpixel)

#### Defined in

[leafer/packages/display/src/Leaf.ts:552](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L552)

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

[IBox](../interfaces/IBox.md).[__drawHitPath](../interfaces/IBox.md#__drawhitpath)

#### Inherited from

[Group](Group.md).[__drawHitPath](Group.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:554](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L554)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateHitCanvas](../interfaces/IBox.md#__updatehitcanvas)

#### Inherited from

[Group](Group.md).[__updateHitCanvas](Group.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:556](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L556)

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

[IBox](../interfaces/IBox.md).[__drawFast](../interfaces/IBox.md#__drawfast)

#### Inherited from

[Group](Group.md).[__drawFast](Group.md#__drawfast)

#### Defined in

[leafer/packages/display/src/Leaf.ts:565](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L565)

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

[IBox](../interfaces/IBox.md).[__draw](../interfaces/IBox.md#__draw)

#### Inherited from

[Group](Group.md).[__draw](Group.md#__draw)

#### Defined in

[leafer/packages/display/src/Leaf.ts:567](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L567)

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

[IBox](../interfaces/IBox.md).[__clip](../interfaces/IBox.md#__clip)

#### Inherited from

[Group](Group.md).[__clip](Group.md#__clip)

#### Defined in

[leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L570)

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

[IBox](../interfaces/IBox.md).[__renderShape](../interfaces/IBox.md#__rendershape)

#### Inherited from

[Group](Group.md).[__renderShape](Group.md#__rendershape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L572)

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

[IBox](../interfaces/IBox.md).[__drawShape](../interfaces/IBox.md#__drawshape)

#### Inherited from

[Group](Group.md).[__drawShape](Group.md#__drawshape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L574)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateWorldOpacity](../interfaces/IBox.md#__updateworldopacity)

#### Inherited from

[Group](Group.md).[__updateWorldOpacity](Group.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L577)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updatePath](../interfaces/IBox.md#__updatepath)

#### Inherited from

[Group](Group.md).[__updatePath](Group.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L590)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[getMotionPathData](../interfaces/IBox.md#getmotionpathdata)

#### Inherited from

[Group](Group.md).[getMotionPathData](Group.md#getmotionpathdata)

#### Defined in

[leafer/packages/display/src/Leaf.ts:599](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L599)

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

[IBox](../interfaces/IBox.md).[getMotionPoint](../interfaces/IBox.md#getmotionpoint)

#### Inherited from

[Group](Group.md).[getMotionPoint](Group.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:603](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L603)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IBox](../interfaces/IBox.md).[getMotionTotal](../interfaces/IBox.md#getmotiontotal)

#### Inherited from

[Group](Group.md).[getMotionTotal](Group.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:607](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L607)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateMotionPath](../interfaces/IBox.md#__updatemotionpath)

#### Inherited from

[Group](Group.md).[__updateMotionPath](Group.md#__updatemotionpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:611](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L611)

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

[IBox](../interfaces/IBox.md).[__runAnimation](../interfaces/IBox.md#__runanimation)

#### Inherited from

[Group](Group.md).[__runAnimation](Group.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L617)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateSortChildren](../interfaces/IBox.md#__updatesortchildren)

#### Inherited from

[Group](Group.md).[__updateSortChildren](Group.md#__updatesortchildren)

#### Defined in

[leafer/packages/display/src/Leaf.ts:622](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L622)

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

[IBox](../interfaces/IBox.md).[dropTo](../interfaces/IBox.md#dropto)

#### Inherited from

[Group](Group.md).[dropTo](Group.md#dropto)

#### Defined in

[leafer/packages/display/src/Leaf.ts:630](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L630)

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

[IBox](../interfaces/IBox.md).[on](../interfaces/IBox.md#on)

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[leafer/packages/display/src/Leaf.ts:639](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L639)

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

[IBox](../interfaces/IBox.md).[off](../interfaces/IBox.md#off)

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[leafer/packages/display/src/Leaf.ts:641](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L641)

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

[IBox](../interfaces/IBox.md).[on_](../interfaces/IBox.md#on_)

#### Inherited from

[Group](Group.md).[on_](Group.md#on_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:643](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L643)

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

[IBox](../interfaces/IBox.md).[off_](../interfaces/IBox.md#off_)

#### Inherited from

[Group](Group.md).[off_](Group.md#off_)

#### Defined in

[leafer/packages/display/src/Leaf.ts:645](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L645)

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

[IBox](../interfaces/IBox.md).[once](../interfaces/IBox.md#once)

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[leafer/packages/display/src/Leaf.ts:647](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L647)

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

[IBox](../interfaces/IBox.md).[emit](../interfaces/IBox.md#emit)

#### Inherited from

[Group](Group.md).[emit](Group.md#emit)

#### Defined in

[leafer/packages/display/src/Leaf.ts:649](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L649)

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

[IBox](../interfaces/IBox.md).[emitEvent](../interfaces/IBox.md#emitevent)

#### Inherited from

[Group](Group.md).[emitEvent](Group.md#emitevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:651](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L651)

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

[IBox](../interfaces/IBox.md).[hasEvent](../interfaces/IBox.md#hasevent)

#### Inherited from

[Group](Group.md).[hasEvent](Group.md#hasevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:653](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L653)

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

[Group](Group.md).[changeAttr](Group.md#changeattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:657](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L657)

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

[Group](Group.md).[addAttr](Group.md#addattr)

#### Defined in

[leafer/packages/display/src/Leaf.ts:661](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L661)

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

[IBox](../interfaces/IBox.md).[__emitLifeEvent](../interfaces/IBox.md#__emitlifeevent)

#### Inherited from

[Group](Group.md).[__emitLifeEvent](Group.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:667](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L667)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateStrokeSpread](../interfaces/IBox.md#__updatestrokespread)

#### Overrides

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[ui/packages/display/src/Box.ts:50](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L50)

___

### \_\_updateRectRenderSpread

▸ **__updateRectRenderSpread**(): `number`

#### Returns

`number`

#### Defined in

[ui/packages/display/src/Box.ts:53](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L53)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateRenderSpread](../interfaces/IBox.md#__updaterenderspread)

#### Overrides

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

#### Defined in

[ui/packages/display/src/Box.ts:55](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L55)

___

### \_\_updateRectBoxBounds

▸ **__updateRectBoxBounds**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Box.ts:59](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L59)

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

[IBox](../interfaces/IBox.md).[__updateBoxBounds](../interfaces/IBox.md#__updateboxbounds)

#### Overrides

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[ui/packages/display/src/Box.ts:63](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L63)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateStrokeBounds](../interfaces/IBox.md#__updatestrokebounds)

#### Overrides

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[ui/packages/display/src/Box.ts:94](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L94)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateRenderBounds](../interfaces/IBox.md#__updaterenderbounds)

#### Overrides

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:96](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L96)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateRectRenderBounds](../interfaces/IBox.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/display/src/Box.ts:113](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L113)

___

### \_\_updateRectChange

▸ **__updateRectChange**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/display/src/Box.ts:116](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L116)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateChange](../interfaces/IBox.md#__updatechange)

#### Overrides

[Group](Group.md).[__updateChange](Group.md#__updatechange)

#### Defined in

[ui/packages/display/src/Box.ts:118](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L118)

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

#### Defined in

[ui/packages/display/src/Box.ts:125](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L125)

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

[IBox](../interfaces/IBox.md).[__renderGroup](../interfaces/IBox.md#__rendergroup)

#### Defined in

[ui/packages/display/src/Box.ts:128](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L128)

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

[IBox](../interfaces/IBox.md).[__render](../interfaces/IBox.md#__render)

#### Overrides

[Group](Group.md).[__render](Group.md#__render)

#### Defined in

[ui/packages/display/src/Box.ts:131](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L131)

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

[IBox](../interfaces/IBox.md).[__drawContent](../interfaces/IBox.md#__drawcontent)

#### Defined in

[ui/packages/display/src/Box.ts:141](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Box.ts#L141)

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

[IBox](../interfaces/IBox.md).[reset](../interfaces/IBox.md#reset)

#### Inherited from

[Group](Group.md).[reset](Group.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:34](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L34)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__setBranch](Group.md#__setbranch)

#### Defined in

[ui/packages/display/src/Group.ts:39](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L39)

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

[IBox](../interfaces/IBox.md).[set](../interfaces/IBox.md#set)

#### Inherited from

[Group](Group.md).[set](Group.md#set)

#### Defined in

[ui/packages/display/src/Group.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L46)

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

[IBox](../interfaces/IBox.md).[toJSON](../interfaces/IBox.md#tojson)

#### Inherited from

[Group](Group.md).[toJSON](Group.md#tojson)

#### Defined in

[ui/packages/display/src/Group.ts:63](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L63)

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

[IBox](../interfaces/IBox.md).[pick](../interfaces/IBox.md#pick)

#### Inherited from

[Group](Group.md).[pick](Group.md#pick)

#### Defined in

[ui/packages/display/src/Group.ts:72](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L72)

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

[IBox](../interfaces/IBox.md).[addAt](../interfaces/IBox.md#addat)

#### Inherited from

[Group](Group.md).[addAt](Group.md#addat)

#### Defined in

[ui/packages/display/src/Group.ts:77](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L77)

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

[IBox](../interfaces/IBox.md).[addAfter](../interfaces/IBox.md#addafter)

#### Inherited from

[Group](Group.md).[addAfter](Group.md#addafter)

#### Defined in

[ui/packages/display/src/Group.ts:81](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L81)

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

[IBox](../interfaces/IBox.md).[addBefore](../interfaces/IBox.md#addbefore)

#### Inherited from

[Group](Group.md).[addBefore](Group.md#addbefore)

#### Defined in

[ui/packages/display/src/Group.ts:85](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L85)

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

[IBox](../interfaces/IBox.md).[add](../interfaces/IBox.md#add)

#### Inherited from

[Group](Group.md).[add](Group.md#add)

#### Defined in

[ui/packages/display/src/Group.ts:91](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L91)

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

[IBox](../interfaces/IBox.md).[addMany](../interfaces/IBox.md#addmany)

#### Inherited from

[Group](Group.md).[addMany](Group.md#addmany)

#### Defined in

[ui/packages/display/src/Group.ts:93](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L93)

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

[IBox](../interfaces/IBox.md).[remove](../interfaces/IBox.md#remove)

#### Inherited from

[Group](Group.md).[remove](Group.md#remove)

#### Defined in

[ui/packages/display/src/Group.ts:95](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L95)

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

[IBox](../interfaces/IBox.md).[removeAll](../interfaces/IBox.md#removeall)

#### Inherited from

[Group](Group.md).[removeAll](Group.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L97)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[clear](../interfaces/IBox.md#clear)

#### Inherited from

[Group](Group.md).[clear](Group.md#clear)

#### Defined in

[ui/packages/display/src/Group.ts:99](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L99)

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

[IBox](../interfaces/IBox.md).[get](../interfaces/IBox.md#get)

#### Inherited from

[Group](Group.md).[get](Group.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L415)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IBox](../interfaces/IBox.md).[createProxyData](../interfaces/IBox.md#createproxydata)

#### Inherited from

[Group](Group.md).[createProxyData](Group.md#createproxydata)

#### Defined in

[ui/packages/display/src/UI.ts:419](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L419)

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

[IBox](../interfaces/IBox.md).[find](../interfaces/IBox.md#find)

#### Inherited from

[Group](Group.md).[find](Group.md#find)

#### Defined in

[ui/packages/display/src/UI.ts:424](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L424)

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

[IBox](../interfaces/IBox.md).[findTag](../interfaces/IBox.md#findtag)

#### Inherited from

[Group](Group.md).[findTag](Group.md#findtag)

#### Defined in

[ui/packages/display/src/UI.ts:426](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L426)

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

[IBox](../interfaces/IBox.md).[findOne](../interfaces/IBox.md#findone)

#### Inherited from

[Group](Group.md).[findOne](Group.md#findone)

#### Defined in

[ui/packages/display/src/UI.ts:428](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L428)

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

[IBox](../interfaces/IBox.md).[findId](../interfaces/IBox.md#findid)

#### Inherited from

[Group](Group.md).[findId](Group.md#findid)

#### Defined in

[ui/packages/display/src/UI.ts:430](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L430)

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

[IBox](../interfaces/IBox.md).[getPath](../interfaces/IBox.md#getpath)

#### Inherited from

[Group](Group.md).[getPath](Group.md#getpath)

#### Defined in

[ui/packages/display/src/UI.ts:435](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L435)

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

[IBox](../interfaces/IBox.md).[getPathString](../interfaces/IBox.md#getpathstring)

#### Inherited from

[Group](Group.md).[getPathString](Group.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L442)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[load](../interfaces/IBox.md#load)

#### Inherited from

[Group](Group.md).[load](Group.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:447](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L447)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__onUpdateSize](../interfaces/IBox.md#__onupdatesize)

#### Inherited from

[Group](Group.md).[__onUpdateSize](Group.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:451](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L451)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[__updateRenderPath](../interfaces/IBox.md#__updaterenderpath)

#### Inherited from

[Group](Group.md).[__updateRenderPath](Group.md#__updaterenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:458](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L458)

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

[IBox](../interfaces/IBox.md).[__drawRenderPath](../interfaces/IBox.md#__drawrenderpath)

#### Inherited from

[Group](Group.md).[__drawRenderPath](Group.md#__drawrenderpath)

#### Defined in

[ui/packages/display/src/UI.ts:466](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L466)

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

[IBox](../interfaces/IBox.md).[__drawPath](../interfaces/IBox.md#__drawpath)

#### Inherited from

[Group](Group.md).[__drawPath](Group.md#__drawpath)

#### Defined in

[ui/packages/display/src/UI.ts:471](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L471)

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

[IBox](../interfaces/IBox.md).[__drawPathByData](../interfaces/IBox.md#__drawpathbydata)

#### Inherited from

[Group](Group.md).[__drawPathByData](Group.md#__drawpathbydata)

#### Defined in

[ui/packages/display/src/UI.ts:476](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L476)

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

[IBox](../interfaces/IBox.md).[__drawPathByBox](../interfaces/IBox.md#__drawpathbybox)

#### Inherited from

[Group](Group.md).[__drawPathByBox](Group.md#__drawpathbybox)

#### Defined in

[ui/packages/display/src/UI.ts:480](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L480)

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

[IBox](../interfaces/IBox.md).[drawImagePlaceholder](../interfaces/IBox.md#drawimageplaceholder)

#### Inherited from

[Group](Group.md).[drawImagePlaceholder](Group.md#drawimageplaceholder)

#### Defined in

[ui/packages/display/src/UI.ts:488](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L488)

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

[IBox](../interfaces/IBox.md).[animate](../interfaces/IBox.md#animate)

#### Inherited from

[Group](Group.md).[animate](Group.md#animate)

#### Defined in

[ui/packages/display/src/UI.ts:494](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L494)

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

[IBox](../interfaces/IBox.md).[killAnimate](../interfaces/IBox.md#killanimate)

#### Inherited from

[Group](Group.md).[killAnimate](Group.md#killanimate)

#### Defined in

[ui/packages/display/src/UI.ts:498](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L498)

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

[IBox](../interfaces/IBox.md).[export](../interfaces/IBox.md#export)

#### Inherited from

[Group](Group.md).[export](Group.md#export)

#### Defined in

[ui/packages/display/src/UI.ts:504](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L504)

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

[IBox](../interfaces/IBox.md).[syncExport](../interfaces/IBox.md#syncexport)

#### Inherited from

[Group](Group.md).[syncExport](Group.md#syncexport)

#### Defined in

[ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L508)

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

[IBox](../interfaces/IBox.md).[clone](../interfaces/IBox.md#clone)

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L512)

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

[Group](Group.md).[one](Group.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:518](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L518)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerUI](Group.md#registerui)

#### Defined in

[ui/packages/display/src/UI.ts:522](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L522)

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

[Group](Group.md).[registerData](Group.md#registerdata)

#### Defined in

[ui/packages/display/src/UI.ts:526](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L526)

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

[Group](Group.md).[setEditConfig](Group.md#seteditconfig)

#### Defined in

[ui/packages/display/src/UI.ts:533](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L533)

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

[Group](Group.md).[setEditOuter](Group.md#seteditouter)

#### Defined in

[ui/packages/display/src/UI.ts:535](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L535)

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

[Group](Group.md).[setEditInner](Group.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:537](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L537)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IBox](../interfaces/IBox.md).[destroy](../interfaces/IBox.md#destroy)

#### Inherited from

[Group](Group.md).[destroy](Group.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L540)
