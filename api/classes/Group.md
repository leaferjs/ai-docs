# Class: Group

## Hierarchy

- [`UI`](UI.md)

  ↳ **`Group`**

  ↳↳ [`Leafer`](Leafer.md)

  ↳↳ [`Box`](Box.md)

  ↳↳ [`Pen`](Pen.md)

  ↳↳ [`Editor`](Editor.md)

  ↳↳ [`EditBox`](EditBox.md)

  ↳↳ [`EditSelect`](EditSelect.md)

  ↳↳ [`SelectArea`](SelectArea.md)

  ↳↳ [`ScrollBar`](ScrollBar.md)

## Implements

- [`IGroup`](../interfaces/IGroup.md)

## Table of contents

### Constructors

- [constructor](Group.md#constructor)

### Properties

- [innerId](Group.md#innerid)
- [syncEventer](Group.md#synceventer)
- [lockNormalStyle](Group.md#locknormalstyle)
- [\_\_layout](Group.md#__layout)
- [\_\_world](Group.md#__world)
- [\_\_local](Group.md#__local)
- [\_\_nowWorld](Group.md#__nowworld)
- [\_\_cameraWorld](Group.md#__cameraworld)
- [\_\_worldOpacity](Group.md#__worldopacity)
- [\_\_level](Group.md#__level)
- [\_\_tempNumber](Group.md#__tempnumber)
- [\_\_hasAutoLayout](Group.md#__hasautolayout)
- [\_\_hasMask](Group.md#__hasmask)
- [\_\_hasEraser](Group.md#__haseraser)
- [\_\_hitCanvas](Group.md#__hitcanvas)
- [\_\_captureMap](Group.md#__capturemap)
- [\_\_bubbleMap](Group.md#__bubblemap)
- [\_\_hasLocalEvent](Group.md#__haslocalevent)
- [\_\_hasWorldEvent](Group.md#__hasworldevent)
- [destroyed](Group.md#destroyed)
- [\_\_](Group.md#__)
- [width](Group.md#width)
- [height](Group.md#height)
- [children](Group.md#children)
- [proxyData](Group.md#proxydata)
- [\_\_proxyData](Group.md#__proxydata)
- [leafer](Group.md#leafer)
- [parent](Group.md#parent)
- [zoomLayer](Group.md#zoomlayer)
- [id](Group.md#id)
- [name](Group.md#name)
- [className](Group.md#classname)
- [blendMode](Group.md#blendmode)
- [opacity](Group.md#opacity)
- [visible](Group.md#visible)
- [locked](Group.md#locked)
- [dim](Group.md#dim)
- [dimskip](Group.md#dimskip)
- [zIndex](Group.md#zindex)
- [mask](Group.md#mask)
- [eraser](Group.md#eraser)
- [x](Group.md#x)
- [y](Group.md#y)
- [scaleX](Group.md#scalex)
- [scaleY](Group.md#scaley)
- [rotation](Group.md#rotation)
- [skewX](Group.md#skewx)
- [skewY](Group.md#skewy)
- [offsetX](Group.md#offsetx)
- [offsetY](Group.md#offsety)
- [scrollX](Group.md#scrollx)
- [scrollY](Group.md#scrolly)
- [origin](Group.md#origin)
- [around](Group.md#around)
- [lazy](Group.md#lazy)
- [pixelRatio](Group.md#pixelratio)
- [path](Group.md#path)
- [windingRule](Group.md#windingrule)
- [closed](Group.md#closed)
- [flow](Group.md#flow)
- [padding](Group.md#padding)
- [gap](Group.md#gap)
- [flowAlign](Group.md#flowalign)
- [flowWrap](Group.md#flowwrap)
- [itemBox](Group.md#itembox)
- [inFlow](Group.md#inflow)
- [autoWidth](Group.md#autowidth)
- [autoHeight](Group.md#autoheight)
- [lockRatio](Group.md#lockratio)
- [autoBox](Group.md#autobox)
- [widthRange](Group.md#widthrange)
- [heightRange](Group.md#heightrange)
- [draggable](Group.md#draggable)
- [dragBounds](Group.md#dragbounds)
- [editable](Group.md#editable)
- [hittable](Group.md#hittable)
- [hitFill](Group.md#hitfill)
- [hitStroke](Group.md#hitstroke)
- [hitBox](Group.md#hitbox)
- [hitChildren](Group.md#hitchildren)
- [hitSelf](Group.md#hitself)
- [hitRadius](Group.md#hitradius)
- [cursor](Group.md#cursor)
- [fill](Group.md#fill)
- [stroke](Group.md#stroke)
- [strokeAlign](Group.md#strokealign)
- [strokeWidth](Group.md#strokewidth)
- [strokeWidthFixed](Group.md#strokewidthfixed)
- [strokeCap](Group.md#strokecap)
- [strokeJoin](Group.md#strokejoin)
- [dashPattern](Group.md#dashpattern)
- [dashOffset](Group.md#dashoffset)
- [miterLimit](Group.md#miterlimit)
- [startArrow](Group.md#startarrow)
- [endArrow](Group.md#endarrow)
- [cornerRadius](Group.md#cornerradius)
- [cornerSmoothing](Group.md#cornersmoothing)
- [shadow](Group.md#shadow)
- [innerShadow](Group.md#innershadow)
- [blur](Group.md#blur)
- [backgroundBlur](Group.md#backgroundblur)
- [grayscale](Group.md#grayscale)
- [filter](Group.md#filter)
- [animation](Group.md#animation)
- [animationOut](Group.md#animationout)
- [transition](Group.md#transition)
- [transitionOut](Group.md#transitionout)
- [motionPath](Group.md#motionpath)
- [motionPrecision](Group.md#motionprecision)
- [motion](Group.md#motion)
- [motionRotation](Group.md#motionrotation)
- [states](Group.md#states)
- [state](Group.md#state)
- [selected](Group.md#selected)
- [disabled](Group.md#disabled)
- [normalStyle](Group.md#normalstyle)
- [hoverStyle](Group.md#hoverstyle)
- [pressStyle](Group.md#pressstyle)
- [focusStyle](Group.md#focusstyle)
- [selectedStyle](Group.md#selectedstyle)
- [disabledStyle](Group.md#disabledstyle)
- [placeholderStyle](Group.md#placeholderstyle)
- [placeholderColor](Group.md#placeholdercolor)
- [placeholderDelay](Group.md#placeholderdelay)
- [button](Group.md#button)
- [editConfig](Group.md#editconfig)
- [editOuter](Group.md#editouter)
- [editInner](Group.md#editinner)
- [data](Group.md#data)
- [useFastShadow](Group.md#usefastshadow)
- [\_\_box](Group.md#__box)
- [\_\_animate](Group.md#__animate)

### Accessors

- [tag](Group.md#tag)
- [innerName](Group.md#innername)
- [\_\_DataProcessor](Group.md#__dataprocessor)
- [\_\_LayoutProcessor](Group.md#__layoutprocessor)
- [leaferIsCreated](Group.md#leaferiscreated)
- [leaferIsReady](Group.md#leaferisready)
- [isLeafer](Group.md#isleafer)
- [isBranchLeaf](Group.md#isbranchleaf)
- [\_\_localMatrix](Group.md#__localmatrix)
- [\_\_localBoxBounds](Group.md#__localboxbounds)
- [worldTransform](Group.md#worldtransform)
- [localTransform](Group.md#localtransform)
- [boxBounds](Group.md#boxbounds)
- [renderBounds](Group.md#renderbounds)
- [worldBoxBounds](Group.md#worldboxbounds)
- [worldStrokeBounds](Group.md#worldstrokebounds)
- [worldRenderBounds](Group.md#worldrenderbounds)
- [worldOpacity](Group.md#worldopacity)
- [\_\_worldFlipped](Group.md#__worldflipped)
- [\_\_onlyHitMask](Group.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Group.md#__ignorehitworld)
- [\_\_inLazyBounds](Group.md#__inlazybounds)
- [pathInputed](Group.md#pathinputed)
- [event](Group.md#event)
- [\_\_tag](Group.md#__tag)
- [isBranch](Group.md#isbranch)
- [app](Group.md#app)
- [isFrame](Group.md#isframe)
- [scale](Group.md#scale)
- [pen](Group.md#pen)

### Methods

- [resetCustom](Group.md#resetcustom)
- [waitParent](Group.md#waitparent)
- [waitLeafer](Group.md#waitleafer)
- [nextRender](Group.md#nextrender)
- [removeNextRender](Group.md#removenextrender)
- [\_\_bindLeafer](Group.md#__bindleafer)
- [setAttr](Group.md#setattr)
- [getAttr](Group.md#getattr)
- [getComputedAttr](Group.md#getcomputedattr)
- [toString](Group.md#tostring)
- [toSVG](Group.md#tosvg)
- [\_\_SVG](Group.md#__svg)
- [toHTML](Group.md#tohtml)
- [\_\_setAttr](Group.md#__setattr)
- [\_\_getAttr](Group.md#__getattr)
- [setProxyAttr](Group.md#setproxyattr)
- [getProxyAttr](Group.md#getproxyattr)
- [focus](Group.md#focus)
- [updateState](Group.md#updatestate)
- [updateLayout](Group.md#updatelayout)
- [forceUpdate](Group.md#forceupdate)
- [forceRender](Group.md#forcerender)
- [\_\_extraUpdate](Group.md#__extraupdate)
- [\_\_updateWorldMatrix](Group.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Group.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Group.md#__updateworldbounds)
- [\_\_updateLocalBounds](Group.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Group.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Group.md#__updateboxbounds)
- [\_\_updateContentBounds](Group.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Group.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Group.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Group.md#__updateautolayout)
- [\_\_updateFlowLayout](Group.md#__updateflowlayout)
- [\_\_updateNaturalSize](Group.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Group.md#__updatestrokespread)
- [\_\_updateRenderSpread](Group.md#__updaterenderspread)
- [\_\_updateEraser](Group.md#__updateeraser)
- [\_\_renderEraser](Group.md#__rendereraser)
- [\_\_updateMask](Group.md#__updatemask)
- [\_\_renderMask](Group.md#__rendermask)
- [\_\_getNowWorld](Group.md#__getnowworld)
- [getTransform](Group.md#gettransform)
- [getBounds](Group.md#getbounds)
- [getLayoutBounds](Group.md#getlayoutbounds)
- [getLayoutPoints](Group.md#getlayoutpoints)
- [getWorldBounds](Group.md#getworldbounds)
- [worldToLocal](Group.md#worldtolocal)
- [localToWorld](Group.md#localtoworld)
- [worldToInner](Group.md#worldtoinner)
- [innerToWorld](Group.md#innertoworld)
- [getBoxPoint](Group.md#getboxpoint)
- [getBoxPointByInner](Group.md#getboxpointbyinner)
- [getInnerPoint](Group.md#getinnerpoint)
- [getInnerPointByBox](Group.md#getinnerpointbybox)
- [getInnerPointByLocal](Group.md#getinnerpointbylocal)
- [getLocalPoint](Group.md#getlocalpoint)
- [getLocalPointByInner](Group.md#getlocalpointbyinner)
- [getPagePoint](Group.md#getpagepoint)
- [getWorldPoint](Group.md#getworldpoint)
- [getWorldPointByBox](Group.md#getworldpointbybox)
- [getWorldPointByLocal](Group.md#getworldpointbylocal)
- [getWorldPointByPage](Group.md#getworldpointbypage)
- [setTransform](Group.md#settransform)
- [transform](Group.md#transform)
- [move](Group.md#move)
- [moveInner](Group.md#moveinner)
- [scaleOf](Group.md#scaleof)
- [rotateOf](Group.md#rotateof)
- [skewOf](Group.md#skewof)
- [transformWorld](Group.md#transformworld)
- [moveWorld](Group.md#moveworld)
- [scaleOfWorld](Group.md#scaleofworld)
- [rotateOfWorld](Group.md#rotateofworld)
- [skewOfWorld](Group.md#skewofworld)
- [flip](Group.md#flip)
- [scaleResize](Group.md#scaleresize)
- [\_\_scaleResize](Group.md#__scaleresize)
- [resizeWidth](Group.md#resizewidth)
- [resizeHeight](Group.md#resizeheight)
- [\_\_hitWorld](Group.md#__hitworld)
- [\_\_hit](Group.md#__hit)
- [\_\_hitFill](Group.md#__hitfill)
- [\_\_hitStroke](Group.md#__hitstroke)
- [\_\_hitPixel](Group.md#__hitpixel)
- [\_\_drawHitPath](Group.md#__drawhitpath)
- [\_\_updateHitCanvas](Group.md#__updatehitcanvas)
- [\_\_render](Group.md#__render)
- [\_\_drawFast](Group.md#__drawfast)
- [\_\_draw](Group.md#__draw)
- [\_\_clip](Group.md#__clip)
- [\_\_renderShape](Group.md#__rendershape)
- [\_\_drawShape](Group.md#__drawshape)
- [\_\_updateWorldOpacity](Group.md#__updateworldopacity)
- [\_\_updateChange](Group.md#__updatechange)
- [\_\_updatePath](Group.md#__updatepath)
- [getMotionPathData](Group.md#getmotionpathdata)
- [getMotionPoint](Group.md#getmotionpoint)
- [getMotionTotal](Group.md#getmotiontotal)
- [\_\_updateMotionPath](Group.md#__updatemotionpath)
- [\_\_runAnimation](Group.md#__runanimation)
- [\_\_updateSortChildren](Group.md#__updatesortchildren)
- [dropTo](Group.md#dropto)
- [on](Group.md#on)
- [off](Group.md#off)
- [on\_](Group.md#on_)
- [off\_](Group.md#off_)
- [once](Group.md#once)
- [emit](Group.md#emit)
- [emitEvent](Group.md#emitevent)
- [hasEvent](Group.md#hasevent)
- [changeAttr](Group.md#changeattr)
- [addAttr](Group.md#addattr)
- [\_\_emitLifeEvent](Group.md#__emitlifeevent)
- [reset](Group.md#reset)
- [\_\_setBranch](Group.md#__setbranch)
- [set](Group.md#set)
- [toJSON](Group.md#tojson)
- [pick](Group.md#pick)
- [addAt](Group.md#addat)
- [addAfter](Group.md#addafter)
- [addBefore](Group.md#addbefore)
- [add](Group.md#add)
- [addMany](Group.md#addmany)
- [remove](Group.md#remove)
- [removeAll](Group.md#removeall)
- [clear](Group.md#clear)
- [get](Group.md#get)
- [createProxyData](Group.md#createproxydata)
- [find](Group.md#find)
- [findTag](Group.md#findtag)
- [findOne](Group.md#findone)
- [findId](Group.md#findid)
- [getPath](Group.md#getpath)
- [getPathString](Group.md#getpathstring)
- [load](Group.md#load)
- [\_\_onUpdateSize](Group.md#__onupdatesize)
- [\_\_updateRenderPath](Group.md#__updaterenderpath)
- [\_\_drawRenderPath](Group.md#__drawrenderpath)
- [\_\_drawPath](Group.md#__drawpath)
- [\_\_drawPathByData](Group.md#__drawpathbydata)
- [\_\_drawPathByBox](Group.md#__drawpathbybox)
- [drawImagePlaceholder](Group.md#drawimageplaceholder)
- [animate](Group.md#animate)
- [killAnimate](Group.md#killanimate)
- [export](Group.md#export)
- [syncExport](Group.md#syncexport)
- [clone](Group.md#clone)
- [one](Group.md#one)
- [registerUI](Group.md#registerui)
- [registerData](Group.md#registerdata)
- [setEditConfig](Group.md#seteditconfig)
- [setEditOuter](Group.md#seteditouter)
- [setEditInner](Group.md#seteditinner)
- [destroy](Group.md#destroy)

## Constructors

### constructor

• **new Group**(`data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Overrides

[UI](UI.md).[constructor](UI.md#constructor)

#### Defined in

[ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L30)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[innerId](../interfaces/IGroup.md#innerid)

#### Inherited from

[UI](UI.md).[innerId](UI.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[syncEventer](../interfaces/IGroup.md#synceventer)

#### Inherited from

[UI](UI.md).[syncEventer](UI.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lockNormalStyle](../interfaces/IGroup.md#locknormalstyle)

#### Inherited from

[UI](UI.md).[lockNormalStyle](UI.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__layout](../interfaces/IGroup.md#__layout)

#### Inherited from

[UI](UI.md).[__layout](UI.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__world](../interfaces/IGroup.md#__world)

#### Inherited from

[UI](UI.md).[__world](UI.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__local](../interfaces/IGroup.md#__local)

#### Inherited from

[UI](UI.md).[__local](UI.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__nowWorld](../interfaces/IGroup.md#__nowworld)

#### Inherited from

[UI](UI.md).[__nowWorld](UI.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__cameraWorld](../interfaces/IGroup.md#__cameraworld)

#### Inherited from

[UI](UI.md).[__cameraWorld](UI.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__worldOpacity](../interfaces/IGroup.md#__worldopacity)

#### Inherited from

[UI](UI.md).[__worldOpacity](UI.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__level](../interfaces/IGroup.md#__level)

#### Inherited from

[UI](UI.md).[__level](UI.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__tempNumber](../interfaces/IGroup.md#__tempnumber)

#### Inherited from

[UI](UI.md).[__tempNumber](UI.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasAutoLayout](../interfaces/IGroup.md#__hasautolayout)

#### Inherited from

[UI](UI.md).[__hasAutoLayout](UI.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasMask](../interfaces/IGroup.md#__hasmask)

#### Inherited from

[UI](UI.md).[__hasMask](UI.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasEraser](../interfaces/IGroup.md#__haseraser)

#### Inherited from

[UI](UI.md).[__hasEraser](UI.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hitCanvas](../interfaces/IGroup.md#__hitcanvas)

#### Inherited from

[UI](UI.md).[__hitCanvas](UI.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__captureMap](../interfaces/IGroup.md#__capturemap)

#### Inherited from

[UI](UI.md).[__captureMap](UI.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__bubbleMap](../interfaces/IGroup.md#__bubblemap)

#### Inherited from

[UI](UI.md).[__bubbleMap](UI.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L97)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasLocalEvent](../interfaces/IGroup.md#__haslocalevent)

#### Inherited from

[UI](UI.md).[__hasLocalEvent](UI.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L99)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__hasWorldEvent](../interfaces/IGroup.md#__hasworldevent)

#### Inherited from

[UI](UI.md).[__hasWorldEvent](UI.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L100)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[destroyed](../interfaces/IGroup.md#destroyed)

#### Inherited from

[UI](UI.md).[destroyed](UI.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IGroupData`](../interfaces/IGroupData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__](../interfaces/IGroup.md#__)

#### Overrides

[UI](UI.md).[__](UI.md#__)

#### Defined in

[ui/packages/display/src/Group.ts:19](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L19)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[width](../interfaces/IGroup.md#width)

#### Overrides

[UI](UI.md).[width](UI.md#width)

#### Defined in

[ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[height](../interfaces/IGroup.md#height)

#### Overrides

[UI](UI.md).[height](UI.md#height)

#### Defined in

[ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[children](../interfaces/IGroup.md#children)

#### Overrides

[UI](UI.md).[children](UI.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L28)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[proxyData](../interfaces/IGroup.md#proxydata)

#### Inherited from

[UI](UI.md).[proxyData](UI.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__proxyData](../interfaces/IGroup.md#__proxydata)

#### Inherited from

[UI](UI.md).[__proxyData](UI.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[leafer](../interfaces/IGroup.md#leafer)

#### Inherited from

[UI](UI.md).[leafer](UI.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[parent](../interfaces/IGroup.md#parent)

#### Inherited from

[UI](UI.md).[parent](UI.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[zoomLayer](../interfaces/IGroup.md#zoomlayer)

#### Inherited from

[UI](UI.md).[zoomLayer](UI.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[id](../interfaces/IGroup.md#id)

#### Inherited from

[UI](UI.md).[id](UI.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[name](../interfaces/IGroup.md#name)

#### Inherited from

[UI](UI.md).[name](UI.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[className](../interfaces/IGroup.md#classname)

#### Inherited from

[UI](UI.md).[className](UI.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[blendMode](../interfaces/IGroup.md#blendmode)

#### Inherited from

[UI](UI.md).[blendMode](UI.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[opacity](../interfaces/IGroup.md#opacity)

#### Inherited from

[UI](UI.md).[opacity](UI.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IGroup](../interfaces/IGroup.md).[visible](../interfaces/IGroup.md#visible)

#### Inherited from

[UI](UI.md).[visible](UI.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[locked](../interfaces/IGroup.md#locked)

#### Inherited from

[UI](UI.md).[locked](UI.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dim](../interfaces/IGroup.md#dim)

#### Inherited from

[UI](UI.md).[dim](UI.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dimskip](../interfaces/IGroup.md#dimskip)

#### Inherited from

[UI](UI.md).[dimskip](UI.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[zIndex](../interfaces/IGroup.md#zindex)

#### Inherited from

[UI](UI.md).[zIndex](UI.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[mask](../interfaces/IGroup.md#mask)

#### Inherited from

[UI](UI.md).[mask](UI.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[eraser](../interfaces/IGroup.md#eraser)

#### Inherited from

[UI](UI.md).[eraser](UI.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[x](../interfaces/IGroup.md#x)

#### Inherited from

[UI](UI.md).[x](UI.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[y](../interfaces/IGroup.md#y)

#### Inherited from

[UI](UI.md).[y](UI.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scaleX](../interfaces/IGroup.md#scalex)

#### Inherited from

[UI](UI.md).[scaleX](UI.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scaleY](../interfaces/IGroup.md#scaley)

#### Inherited from

[UI](UI.md).[scaleY](UI.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[rotation](../interfaces/IGroup.md#rotation)

#### Inherited from

[UI](UI.md).[rotation](UI.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[skewX](../interfaces/IGroup.md#skewx)

#### Inherited from

[UI](UI.md).[skewX](UI.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[skewY](../interfaces/IGroup.md#skewy)

#### Inherited from

[UI](UI.md).[skewY](UI.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[offsetX](../interfaces/IGroup.md#offsetx)

#### Inherited from

[UI](UI.md).[offsetX](UI.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[offsetY](../interfaces/IGroup.md#offsety)

#### Inherited from

[UI](UI.md).[offsetY](UI.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scrollX](../interfaces/IGroup.md#scrollx)

#### Inherited from

[UI](UI.md).[scrollX](UI.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scrollY](../interfaces/IGroup.md#scrolly)

#### Inherited from

[UI](UI.md).[scrollY](UI.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[origin](../interfaces/IGroup.md#origin)

#### Inherited from

[UI](UI.md).[origin](UI.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[around](../interfaces/IGroup.md#around)

#### Inherited from

[UI](UI.md).[around](UI.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lazy](../interfaces/IGroup.md#lazy)

#### Inherited from

[UI](UI.md).[lazy](UI.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pixelRatio](../interfaces/IGroup.md#pixelratio)

#### Inherited from

[UI](UI.md).[pixelRatio](UI.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[path](../interfaces/IGroup.md#path)

#### Inherited from

[UI](UI.md).[path](UI.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[windingRule](../interfaces/IGroup.md#windingrule)

#### Inherited from

[UI](UI.md).[windingRule](UI.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[closed](../interfaces/IGroup.md#closed)

#### Inherited from

[UI](UI.md).[closed](UI.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flow](../interfaces/IGroup.md#flow)

#### Inherited from

[UI](UI.md).[flow](UI.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[padding](../interfaces/IGroup.md#padding)

#### Inherited from

[UI](UI.md).[padding](UI.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[gap](../interfaces/IGroup.md#gap)

#### Inherited from

[UI](UI.md).[gap](UI.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flowAlign](../interfaces/IGroup.md#flowalign)

#### Inherited from

[UI](UI.md).[flowAlign](UI.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[flowWrap](../interfaces/IGroup.md#flowwrap)

#### Inherited from

[UI](UI.md).[flowWrap](UI.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[itemBox](../interfaces/IGroup.md#itembox)

#### Inherited from

[UI](UI.md).[itemBox](UI.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[inFlow](../interfaces/IGroup.md#inflow)

#### Inherited from

[UI](UI.md).[inFlow](UI.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoWidth](../interfaces/IGroup.md#autowidth)

#### Inherited from

[UI](UI.md).[autoWidth](UI.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoHeight](../interfaces/IGroup.md#autoheight)

#### Inherited from

[UI](UI.md).[autoHeight](UI.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[lockRatio](../interfaces/IGroup.md#lockratio)

#### Inherited from

[UI](UI.md).[lockRatio](UI.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[autoBox](../interfaces/IGroup.md#autobox)

#### Inherited from

[UI](UI.md).[autoBox](UI.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[widthRange](../interfaces/IGroup.md#widthrange)

#### Inherited from

[UI](UI.md).[widthRange](UI.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[heightRange](../interfaces/IGroup.md#heightrange)

#### Inherited from

[UI](UI.md).[heightRange](UI.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[draggable](../interfaces/IGroup.md#draggable)

#### Inherited from

[UI](UI.md).[draggable](UI.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dragBounds](../interfaces/IGroup.md#dragbounds)

#### Inherited from

[UI](UI.md).[dragBounds](UI.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editable](../interfaces/IGroup.md#editable)

#### Inherited from

[UI](UI.md).[editable](UI.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hittable](../interfaces/IGroup.md#hittable)

#### Inherited from

[UI](UI.md).[hittable](UI.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitFill](../interfaces/IGroup.md#hitfill)

#### Inherited from

[UI](UI.md).[hitFill](UI.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitStroke](../interfaces/IGroup.md#hitstroke)

#### Inherited from

[UI](UI.md).[hitStroke](UI.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitBox](../interfaces/IGroup.md#hitbox)

#### Inherited from

[UI](UI.md).[hitBox](UI.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitChildren](../interfaces/IGroup.md#hitchildren)

#### Inherited from

[UI](UI.md).[hitChildren](UI.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitSelf](../interfaces/IGroup.md#hitself)

#### Inherited from

[UI](UI.md).[hitSelf](UI.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hitRadius](../interfaces/IGroup.md#hitradius)

#### Inherited from

[UI](UI.md).[hitRadius](UI.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cursor](../interfaces/IGroup.md#cursor)

#### Inherited from

[UI](UI.md).[cursor](UI.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[fill](../interfaces/IGroup.md#fill)

#### Inherited from

[UI](UI.md).[fill](UI.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[stroke](../interfaces/IGroup.md#stroke)

#### Inherited from

[UI](UI.md).[stroke](UI.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeAlign](../interfaces/IGroup.md#strokealign)

#### Inherited from

[UI](UI.md).[strokeAlign](UI.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeWidth](../interfaces/IGroup.md#strokewidth)

#### Inherited from

[UI](UI.md).[strokeWidth](UI.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeWidthFixed](../interfaces/IGroup.md#strokewidthfixed)

#### Inherited from

[UI](UI.md).[strokeWidthFixed](UI.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeCap](../interfaces/IGroup.md#strokecap)

#### Inherited from

[UI](UI.md).[strokeCap](UI.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[strokeJoin](../interfaces/IGroup.md#strokejoin)

#### Inherited from

[UI](UI.md).[strokeJoin](UI.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dashPattern](../interfaces/IGroup.md#dashpattern)

#### Inherited from

[UI](UI.md).[dashPattern](UI.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[dashOffset](../interfaces/IGroup.md#dashoffset)

#### Inherited from

[UI](UI.md).[dashOffset](UI.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[miterLimit](../interfaces/IGroup.md#miterlimit)

#### Inherited from

[UI](UI.md).[miterLimit](UI.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[startArrow](../interfaces/IGroup.md#startarrow)

#### Inherited from

[UI](UI.md).[startArrow](UI.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[endArrow](../interfaces/IGroup.md#endarrow)

#### Inherited from

[UI](UI.md).[endArrow](UI.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cornerRadius](../interfaces/IGroup.md#cornerradius)

#### Inherited from

[UI](UI.md).[cornerRadius](UI.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[cornerSmoothing](../interfaces/IGroup.md#cornersmoothing)

#### Inherited from

[UI](UI.md).[cornerSmoothing](UI.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[shadow](../interfaces/IGroup.md#shadow)

#### Inherited from

[UI](UI.md).[shadow](UI.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[innerShadow](../interfaces/IGroup.md#innershadow)

#### Inherited from

[UI](UI.md).[innerShadow](UI.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[blur](../interfaces/IGroup.md#blur)

#### Inherited from

[UI](UI.md).[blur](UI.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[backgroundBlur](../interfaces/IGroup.md#backgroundblur)

#### Inherited from

[UI](UI.md).[backgroundBlur](UI.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[grayscale](../interfaces/IGroup.md#grayscale)

#### Inherited from

[UI](UI.md).[grayscale](UI.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[filter](../interfaces/IGroup.md#filter)

#### Inherited from

[UI](UI.md).[filter](UI.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[animation](../interfaces/IGroup.md#animation)

#### Inherited from

[UI](UI.md).[animation](UI.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IGroup](../interfaces/IGroup.md).[animationOut](../interfaces/IGroup.md#animationout)

#### Inherited from

[UI](UI.md).[animationOut](UI.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[transition](../interfaces/IGroup.md#transition)

#### Inherited from

[UI](UI.md).[transition](UI.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[transitionOut](../interfaces/IGroup.md#transitionout)

#### Inherited from

[UI](UI.md).[transitionOut](UI.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionPath](../interfaces/IGroup.md#motionpath)

#### Inherited from

[UI](UI.md).[motionPath](UI.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionPrecision](../interfaces/IGroup.md#motionprecision)

#### Inherited from

[UI](UI.md).[motionPrecision](UI.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motion](../interfaces/IGroup.md#motion)

#### Inherited from

[UI](UI.md).[motion](UI.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[motionRotation](../interfaces/IGroup.md#motionrotation)

#### Inherited from

[UI](UI.md).[motionRotation](UI.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[states](../interfaces/IGroup.md#states)

#### Inherited from

[UI](UI.md).[states](UI.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[state](../interfaces/IGroup.md#state)

#### Inherited from

[UI](UI.md).[state](UI.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[selected](../interfaces/IGroup.md#selected)

#### Inherited from

[UI](UI.md).[selected](UI.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[disabled](../interfaces/IGroup.md#disabled)

#### Inherited from

[UI](UI.md).[disabled](UI.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[normalStyle](../interfaces/IGroup.md#normalstyle)

#### Inherited from

[UI](UI.md).[normalStyle](UI.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[hoverStyle](../interfaces/IGroup.md#hoverstyle)

#### Inherited from

[UI](UI.md).[hoverStyle](UI.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pressStyle](../interfaces/IGroup.md#pressstyle)

#### Inherited from

[UI](UI.md).[pressStyle](UI.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[focusStyle](../interfaces/IGroup.md#focusstyle)

#### Inherited from

[UI](UI.md).[focusStyle](UI.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[selectedStyle](../interfaces/IGroup.md#selectedstyle)

#### Inherited from

[UI](UI.md).[selectedStyle](UI.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[disabledStyle](../interfaces/IGroup.md#disabledstyle)

#### Inherited from

[UI](UI.md).[disabledStyle](UI.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderStyle](../interfaces/IGroup.md#placeholderstyle)

#### Inherited from

[UI](UI.md).[placeholderStyle](UI.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L350)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderColor](../interfaces/IGroup.md#placeholdercolor)

#### Inherited from

[UI](UI.md).[placeholderColor](UI.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L353)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[placeholderDelay](../interfaces/IGroup.md#placeholderdelay)

#### Inherited from

[UI](UI.md).[placeholderDelay](UI.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L356)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[button](../interfaces/IGroup.md#button)

#### Inherited from

[UI](UI.md).[button](UI.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L359)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editConfig](../interfaces/IGroup.md#editconfig)

#### Inherited from

[UI](UI.md).[editConfig](UI.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L364)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editOuter](../interfaces/IGroup.md#editouter)

#### Inherited from

[UI](UI.md).[editOuter](UI.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L366)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[editInner](../interfaces/IGroup.md#editinner)

#### Inherited from

[UI](UI.md).[editInner](UI.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L368)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[data](../interfaces/IGroup.md#data)

#### Inherited from

[UI](UI.md).[data](UI.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L373)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[useFastShadow](../interfaces/IGroup.md#usefastshadow)

#### Inherited from

[UI](UI.md).[useFastShadow](UI.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L379)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__box](../interfaces/IGroup.md#__box)

#### Inherited from

[UI](UI.md).[__box](UI.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__animate](../interfaces/IGroup.md#__animate)

#### Inherited from

[UI](UI.md).[__animate](UI.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L382)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[tag](../interfaces/IGroup.md#tag)

#### Inherited from

UI.tag

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

[IGroup](../interfaces/IGroup.md).[tag](../interfaces/IGroup.md#tag)

#### Inherited from

UI.tag

#### Defined in

[leafer/packages/display/src/Leaf.ts:26](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L26)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[innerName](../interfaces/IGroup.md#innername)

#### Inherited from

UI.innerName

#### Defined in

[leafer/packages/display/src/Leaf.ts:31](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L31)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__DataProcessor](../interfaces/IGroup.md#__dataprocessor)

#### Inherited from

UI.\_\_DataProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L33)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__LayoutProcessor](../interfaces/IGroup.md#__layoutprocessor)

#### Inherited from

UI.\_\_LayoutProcessor

#### Defined in

[leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L34)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[leaferIsCreated](../interfaces/IGroup.md#leaferiscreated)

#### Inherited from

UI.leaferIsCreated

#### Defined in

[leafer/packages/display/src/Leaf.ts:39](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L39)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[leaferIsReady](../interfaces/IGroup.md#leaferisready)

#### Inherited from

UI.leaferIsReady

#### Defined in

[leafer/packages/display/src/Leaf.ts:40](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L40)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isLeafer](../interfaces/IGroup.md#isleafer)

#### Inherited from

UI.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L42)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isBranchLeaf](../interfaces/IGroup.md#isbranchleaf)

#### Inherited from

UI.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__localMatrix](../interfaces/IGroup.md#__localmatrix)

#### Inherited from

UI.\_\_localMatrix

#### Defined in

[leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L58)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__localBoxBounds](../interfaces/IGroup.md#__localboxbounds)

#### Inherited from

UI.\_\_localBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L59)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[worldTransform](../interfaces/IGroup.md#worldtransform)

#### Inherited from

UI.worldTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L64)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[localTransform](../interfaces/IGroup.md#localtransform)

#### Inherited from

UI.localTransform

#### Defined in

[leafer/packages/display/src/Leaf.ts:65](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L65)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[boxBounds](../interfaces/IGroup.md#boxbounds)

#### Inherited from

UI.boxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L68)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[renderBounds](../interfaces/IGroup.md#renderbounds)

#### Inherited from

UI.renderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:69](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L69)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[worldBoxBounds](../interfaces/IGroup.md#worldboxbounds)

#### Inherited from

UI.worldBoxBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L70)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[worldStrokeBounds](../interfaces/IGroup.md#worldstrokebounds)

#### Inherited from

UI.worldStrokeBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L71)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[worldRenderBounds](../interfaces/IGroup.md#worldrenderbounds)

#### Inherited from

UI.worldRenderBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:72](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L72)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[worldOpacity](../interfaces/IGroup.md#worldopacity)

#### Inherited from

UI.worldOpacity

#### Defined in

[leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L75)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__worldFlipped](../interfaces/IGroup.md#__worldflipped)

#### Inherited from

UI.\_\_worldFlipped

#### Defined in

[leafer/packages/display/src/Leaf.ts:80](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L80)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__onlyHitMask](../interfaces/IGroup.md#__onlyhitmask)

#### Inherited from

UI.\_\_onlyHitMask

#### Defined in

[leafer/packages/display/src/Leaf.ts:87](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L87)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__ignoreHitWorld](../interfaces/IGroup.md#__ignorehitworld)

#### Inherited from

UI.\_\_ignoreHitWorld

#### Defined in

[leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L88)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__inLazyBounds](../interfaces/IGroup.md#__inlazybounds)

#### Inherited from

UI.\_\_inLazyBounds

#### Defined in

[leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L89)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pathInputed](../interfaces/IGroup.md#pathinputed)

#### Inherited from

UI.pathInputed

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

[IGroup](../interfaces/IGroup.md).[event](../interfaces/IGroup.md#event)

#### Inherited from

UI.event

#### Defined in

[leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L94)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__tag](../interfaces/IGroup.md#__tag)

#### Overrides

UI.\_\_tag

#### Defined in

[ui/packages/display/src/Group.ts:14](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isBranch](../interfaces/IGroup.md#isbranch)

#### Overrides

UI.isBranch

#### Defined in

[ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L16)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[app](../interfaces/IGroup.md#app)

#### Inherited from

UI.app

#### Defined in

[ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[isFrame](../interfaces/IGroup.md#isframe)

#### Inherited from

UI.isFrame

#### Defined in

[ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[scale](../interfaces/IGroup.md#scale)

#### Inherited from

UI.scale

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

[IGroup](../interfaces/IGroup.md).[scale](../interfaces/IGroup.md#scale)

#### Inherited from

UI.scale

#### Defined in

[ui/packages/display/src/UI.ts:376](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L376)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[pen](../interfaces/IGroup.md#pen)

#### Inherited from

UI.pen

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L384)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[resetCustom](../interfaces/IGroup.md#resetcustom)

#### Inherited from

[UI](UI.md).[resetCustom](UI.md#resetcustom)

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

[IGroup](../interfaces/IGroup.md).[waitParent](../interfaces/IGroup.md#waitparent)

#### Inherited from

[UI](UI.md).[waitParent](UI.md#waitparent)

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

[IGroup](../interfaces/IGroup.md).[waitLeafer](../interfaces/IGroup.md#waitleafer)

#### Inherited from

[UI](UI.md).[waitLeafer](UI.md#waitleafer)

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

[IGroup](../interfaces/IGroup.md).[nextRender](../interfaces/IGroup.md#nextrender)

#### Inherited from

[UI](UI.md).[nextRender](UI.md#nextrender)

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

[IGroup](../interfaces/IGroup.md).[removeNextRender](../interfaces/IGroup.md#removenextrender)

#### Inherited from

[UI](UI.md).[removeNextRender](UI.md#removenextrender)

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

[IGroup](../interfaces/IGroup.md).[__bindLeafer](../interfaces/IGroup.md#__bindleafer)

#### Inherited from

[UI](UI.md).[__bindLeafer](UI.md#__bindleafer)

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

[IGroup](../interfaces/IGroup.md).[setAttr](../interfaces/IGroup.md#setattr)

#### Inherited from

[UI](UI.md).[setAttr](UI.md#setattr)

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

[IGroup](../interfaces/IGroup.md).[getAttr](../interfaces/IGroup.md#getattr)

#### Inherited from

[UI](UI.md).[getAttr](UI.md#getattr)

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

[IGroup](../interfaces/IGroup.md).[getComputedAttr](../interfaces/IGroup.md#getcomputedattr)

#### Inherited from

[UI](UI.md).[getComputedAttr](UI.md#getcomputedattr)

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

[IGroup](../interfaces/IGroup.md).[toString](../interfaces/IGroup.md#tostring)

#### Inherited from

[UI](UI.md).[toString](UI.md#tostring)

#### Defined in

[leafer/packages/display/src/Leaf.ts:198](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L198)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[toSVG](../interfaces/IGroup.md#tosvg)

#### Inherited from

[UI](UI.md).[toSVG](UI.md#tosvg)

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

[IGroup](../interfaces/IGroup.md).[__SVG](../interfaces/IGroup.md#__svg)

#### Inherited from

[UI](UI.md).[__SVG](UI.md#__svg)

#### Defined in

[leafer/packages/display/src/Leaf.ts:204](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L204)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[toHTML](../interfaces/IGroup.md#tohtml)

#### Inherited from

[UI](UI.md).[toHTML](UI.md#tohtml)

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

[IGroup](../interfaces/IGroup.md).[__setAttr](../interfaces/IGroup.md#__setattr)

#### Inherited from

[UI](UI.md).[__setAttr](UI.md#__setattr)

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

[IGroup](../interfaces/IGroup.md).[__getAttr](../interfaces/IGroup.md#__getattr)

#### Inherited from

[UI](UI.md).[__getAttr](UI.md#__getattr)

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

[IGroup](../interfaces/IGroup.md).[setProxyAttr](../interfaces/IGroup.md#setproxyattr)

#### Inherited from

[UI](UI.md).[setProxyAttr](UI.md#setproxyattr)

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

[IGroup](../interfaces/IGroup.md).[getProxyAttr](../interfaces/IGroup.md#getproxyattr)

#### Inherited from

[UI](UI.md).[getProxyAttr](UI.md#getproxyattr)

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

[IGroup](../interfaces/IGroup.md).[focus](../interfaces/IGroup.md#focus)

#### Inherited from

[UI](UI.md).[focus](UI.md#focus)

#### Defined in

[leafer/packages/display/src/Leaf.ts:236](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L236)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[updateState](../interfaces/IGroup.md#updatestate)

#### Inherited from

[UI](UI.md).[updateState](UI.md#updatestate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:238](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L238)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[updateLayout](../interfaces/IGroup.md#updatelayout)

#### Inherited from

[UI](UI.md).[updateLayout](UI.md#updatelayout)

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

[IGroup](../interfaces/IGroup.md).[forceUpdate](../interfaces/IGroup.md#forceupdate)

#### Inherited from

[UI](UI.md).[forceUpdate](UI.md#forceupdate)

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

[IGroup](../interfaces/IGroup.md).[forceRender](../interfaces/IGroup.md#forcerender)

#### Inherited from

[UI](UI.md).[forceRender](UI.md#forcerender)

#### Defined in

[leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L255)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__extraUpdate](../interfaces/IGroup.md#__extraupdate)

#### Inherited from

[UI](UI.md).[__extraUpdate](UI.md#__extraupdate)

#### Defined in

[leafer/packages/display/src/Leaf.ts:259](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L259)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateWorldMatrix](../interfaces/IGroup.md#__updateworldmatrix)

#### Inherited from

[UI](UI.md).[__updateWorldMatrix](UI.md#__updateworldmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:265](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L265)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateLocalMatrix](../interfaces/IGroup.md#__updatelocalmatrix)

#### Inherited from

[UI](UI.md).[__updateLocalMatrix](UI.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L267)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateWorldBounds](../interfaces/IGroup.md#__updateworldbounds)

#### Inherited from

[UI](UI.md).[__updateWorldBounds](UI.md#__updateworldbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateLocalBounds](../interfaces/IGroup.md#__updatelocalbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBounds](UI.md#__updatelocalbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L275)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateLocalBoxBounds](../interfaces/IGroup.md#__updatelocalboxbounds)

#### Inherited from

[UI](UI.md).[__updateLocalBoxBounds](UI.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:278](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L278)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateLocalStrokeBounds](../interfaces/IGroup.md#__updatelocalstrokebounds)

#### Inherited from

[UI](UI.md).[__updateLocalStrokeBounds](UI.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:280](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L280)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateLocalRenderBounds](../interfaces/IGroup.md#__updatelocalrenderbounds)

#### Inherited from

[UI](UI.md).[__updateLocalRenderBounds](UI.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L282)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateBoxBounds](../interfaces/IGroup.md#__updateboxbounds)

#### Inherited from

[UI](UI.md).[__updateBoxBounds](UI.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L286)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateContentBounds](../interfaces/IGroup.md#__updatecontentbounds)

#### Inherited from

[UI](UI.md).[__updateContentBounds](UI.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L288)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateStrokeBounds](../interfaces/IGroup.md#__updatestrokebounds)

#### Inherited from

[UI](UI.md).[__updateStrokeBounds](UI.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L290)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateRenderBounds](../interfaces/IGroup.md#__updaterenderbounds)

#### Inherited from

[UI](UI.md).[__updateRenderBounds](UI.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L292)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateAutoLayout](../interfaces/IGroup.md#__updateautolayout)

#### Inherited from

[UI](UI.md).[__updateAutoLayout](UI.md#__updateautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:295](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L295)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateFlowLayout](../interfaces/IGroup.md#__updateflowlayout)

#### Inherited from

[UI](UI.md).[__updateFlowLayout](UI.md#__updateflowlayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:297](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L297)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateNaturalSize](../interfaces/IGroup.md#__updatenaturalsize)

#### Inherited from

[UI](UI.md).[__updateNaturalSize](UI.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L299)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateStrokeSpread](../interfaces/IGroup.md#__updatestrokespread)

#### Inherited from

[UI](UI.md).[__updateStrokeSpread](UI.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L302)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateRenderSpread](../interfaces/IGroup.md#__updaterenderspread)

#### Inherited from

[UI](UI.md).[__updateRenderSpread](UI.md#__updaterenderspread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:304](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L304)

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

[IGroup](../interfaces/IGroup.md).[__updateEraser](../interfaces/IGroup.md#__updateeraser)

#### Inherited from

[UI](UI.md).[__updateEraser](UI.md#__updateeraser)

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

[IGroup](../interfaces/IGroup.md).[__renderEraser](../interfaces/IGroup.md#__rendereraser)

#### Inherited from

[UI](UI.md).[__renderEraser](UI.md#__rendereraser)

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

[IGroup](../interfaces/IGroup.md).[__updateMask](../interfaces/IGroup.md#__updatemask)

#### Inherited from

[UI](UI.md).[__updateMask](UI.md#__updatemask)

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

[IGroup](../interfaces/IGroup.md).[__renderMask](../interfaces/IGroup.md#__rendermask)

#### Inherited from

[UI](UI.md).[__renderMask](UI.md#__rendermask)

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

[IGroup](../interfaces/IGroup.md).[__getNowWorld](../interfaces/IGroup.md#__getnowworld)

#### Inherited from

[UI](UI.md).[__getNowWorld](UI.md#__getnowworld)

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

[IGroup](../interfaces/IGroup.md).[getTransform](../interfaces/IGroup.md#gettransform)

#### Inherited from

[UI](UI.md).[getTransform](UI.md#gettransform)

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

[IGroup](../interfaces/IGroup.md).[getBounds](../interfaces/IGroup.md#getbounds)

#### Inherited from

[UI](UI.md).[getBounds](UI.md#getbounds)

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

[IGroup](../interfaces/IGroup.md).[getLayoutBounds](../interfaces/IGroup.md#getlayoutbounds)

#### Inherited from

[UI](UI.md).[getLayoutBounds](UI.md#getlayoutbounds)

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

[IGroup](../interfaces/IGroup.md).[getLayoutPoints](../interfaces/IGroup.md#getlayoutpoints)

#### Inherited from

[UI](UI.md).[getLayoutPoints](UI.md#getlayoutpoints)

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

[IGroup](../interfaces/IGroup.md).[getWorldBounds](../interfaces/IGroup.md#getworldbounds)

#### Inherited from

[UI](UI.md).[getWorldBounds](UI.md#getworldbounds)

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

[IGroup](../interfaces/IGroup.md).[worldToLocal](../interfaces/IGroup.md#worldtolocal)

#### Inherited from

[UI](UI.md).[worldToLocal](UI.md#worldtolocal)

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

[IGroup](../interfaces/IGroup.md).[localToWorld](../interfaces/IGroup.md#localtoworld)

#### Inherited from

[UI](UI.md).[localToWorld](UI.md#localtoworld)

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

[IGroup](../interfaces/IGroup.md).[worldToInner](../interfaces/IGroup.md#worldtoinner)

#### Inherited from

[UI](UI.md).[worldToInner](UI.md#worldtoinner)

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

[IGroup](../interfaces/IGroup.md).[innerToWorld](../interfaces/IGroup.md#innertoworld)

#### Inherited from

[UI](UI.md).[innerToWorld](UI.md#innertoworld)

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

[IGroup](../interfaces/IGroup.md).[getBoxPoint](../interfaces/IGroup.md#getboxpoint)

#### Inherited from

[UI](UI.md).[getBoxPoint](UI.md#getboxpoint)

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

[IGroup](../interfaces/IGroup.md).[getBoxPointByInner](../interfaces/IGroup.md#getboxpointbyinner)

#### Inherited from

[UI](UI.md).[getBoxPointByInner](UI.md#getboxpointbyinner)

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

[IGroup](../interfaces/IGroup.md).[getInnerPoint](../interfaces/IGroup.md#getinnerpoint)

#### Inherited from

[UI](UI.md).[getInnerPoint](UI.md#getinnerpoint)

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

[IGroup](../interfaces/IGroup.md).[getInnerPointByBox](../interfaces/IGroup.md#getinnerpointbybox)

#### Inherited from

[UI](UI.md).[getInnerPointByBox](UI.md#getinnerpointbybox)

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

[IGroup](../interfaces/IGroup.md).[getInnerPointByLocal](../interfaces/IGroup.md#getinnerpointbylocal)

#### Inherited from

[UI](UI.md).[getInnerPointByLocal](UI.md#getinnerpointbylocal)

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

[IGroup](../interfaces/IGroup.md).[getLocalPoint](../interfaces/IGroup.md#getlocalpoint)

#### Inherited from

[UI](UI.md).[getLocalPoint](UI.md#getlocalpoint)

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

[IGroup](../interfaces/IGroup.md).[getLocalPointByInner](../interfaces/IGroup.md#getlocalpointbyinner)

#### Inherited from

[UI](UI.md).[getLocalPointByInner](UI.md#getlocalpointbyinner)

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

[IGroup](../interfaces/IGroup.md).[getPagePoint](../interfaces/IGroup.md#getpagepoint)

#### Inherited from

[UI](UI.md).[getPagePoint](UI.md#getpagepoint)

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

[IGroup](../interfaces/IGroup.md).[getWorldPoint](../interfaces/IGroup.md#getworldpoint)

#### Inherited from

[UI](UI.md).[getWorldPoint](UI.md#getworldpoint)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByBox](../interfaces/IGroup.md#getworldpointbybox)

#### Inherited from

[UI](UI.md).[getWorldPointByBox](UI.md#getworldpointbybox)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByLocal](../interfaces/IGroup.md#getworldpointbylocal)

#### Inherited from

[UI](UI.md).[getWorldPointByLocal](UI.md#getworldpointbylocal)

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

[IGroup](../interfaces/IGroup.md).[getWorldPointByPage](../interfaces/IGroup.md#getworldpointbypage)

#### Inherited from

[UI](UI.md).[getWorldPointByPage](UI.md#getworldpointbypage)

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

[IGroup](../interfaces/IGroup.md).[setTransform](../interfaces/IGroup.md#settransform)

#### Inherited from

[UI](UI.md).[setTransform](UI.md#settransform)

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

[IGroup](../interfaces/IGroup.md).[transform](../interfaces/IGroup.md#transform)

#### Inherited from

[UI](UI.md).[transform](UI.md#transform)

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

[IGroup](../interfaces/IGroup.md).[move](../interfaces/IGroup.md#move)

#### Inherited from

[UI](UI.md).[move](UI.md#move)

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

[IGroup](../interfaces/IGroup.md).[moveInner](../interfaces/IGroup.md#moveinner)

#### Inherited from

[UI](UI.md).[moveInner](UI.md#moveinner)

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

[IGroup](../interfaces/IGroup.md).[scaleOf](../interfaces/IGroup.md#scaleof)

#### Inherited from

[UI](UI.md).[scaleOf](UI.md#scaleof)

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

[IGroup](../interfaces/IGroup.md).[rotateOf](../interfaces/IGroup.md#rotateof)

#### Inherited from

[UI](UI.md).[rotateOf](UI.md#rotateof)

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

[IGroup](../interfaces/IGroup.md).[skewOf](../interfaces/IGroup.md#skewof)

#### Inherited from

[UI](UI.md).[skewOf](UI.md#skewof)

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

[IGroup](../interfaces/IGroup.md).[transformWorld](../interfaces/IGroup.md#transformworld)

#### Inherited from

[UI](UI.md).[transformWorld](UI.md#transformworld)

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

[IGroup](../interfaces/IGroup.md).[moveWorld](../interfaces/IGroup.md#moveworld)

#### Inherited from

[UI](UI.md).[moveWorld](UI.md#moveworld)

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

[IGroup](../interfaces/IGroup.md).[scaleOfWorld](../interfaces/IGroup.md#scaleofworld)

#### Inherited from

[UI](UI.md).[scaleOfWorld](UI.md#scaleofworld)

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

[IGroup](../interfaces/IGroup.md).[rotateOfWorld](../interfaces/IGroup.md#rotateofworld)

#### Inherited from

[UI](UI.md).[rotateOfWorld](UI.md#rotateofworld)

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

[IGroup](../interfaces/IGroup.md).[skewOfWorld](../interfaces/IGroup.md#skewofworld)

#### Inherited from

[UI](UI.md).[skewOfWorld](UI.md#skewofworld)

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

[IGroup](../interfaces/IGroup.md).[flip](../interfaces/IGroup.md#flip)

#### Inherited from

[UI](UI.md).[flip](UI.md#flip)

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

[IGroup](../interfaces/IGroup.md).[scaleResize](../interfaces/IGroup.md#scaleresize)

#### Inherited from

[UI](UI.md).[scaleResize](UI.md#scaleresize)

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

[IGroup](../interfaces/IGroup.md).[__scaleResize](../interfaces/IGroup.md#__scaleresize)

#### Inherited from

[UI](UI.md).[__scaleResize](UI.md#__scaleresize)

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

[IGroup](../interfaces/IGroup.md).[resizeWidth](../interfaces/IGroup.md#resizewidth)

#### Inherited from

[UI](UI.md).[resizeWidth](UI.md#resizewidth)

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

[IGroup](../interfaces/IGroup.md).[resizeHeight](../interfaces/IGroup.md#resizeheight)

#### Inherited from

[UI](UI.md).[resizeHeight](UI.md#resizeheight)

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

[IGroup](../interfaces/IGroup.md).[__hitWorld](../interfaces/IGroup.md#__hitworld)

#### Inherited from

[UI](UI.md).[__hitWorld](UI.md#__hitworld)

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

[IGroup](../interfaces/IGroup.md).[__hit](../interfaces/IGroup.md#__hit)

#### Inherited from

[UI](UI.md).[__hit](UI.md#__hit)

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

[IGroup](../interfaces/IGroup.md).[__hitFill](../interfaces/IGroup.md#__hitfill)

#### Inherited from

[UI](UI.md).[__hitFill](UI.md#__hitfill)

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

[IGroup](../interfaces/IGroup.md).[__hitStroke](../interfaces/IGroup.md#__hitstroke)

#### Inherited from

[UI](UI.md).[__hitStroke](UI.md#__hitstroke)

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

[IGroup](../interfaces/IGroup.md).[__hitPixel](../interfaces/IGroup.md#__hitpixel)

#### Inherited from

[UI](UI.md).[__hitPixel](UI.md#__hitpixel)

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

[IGroup](../interfaces/IGroup.md).[__drawHitPath](../interfaces/IGroup.md#__drawhitpath)

#### Inherited from

[UI](UI.md).[__drawHitPath](UI.md#__drawhitpath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:554](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L554)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateHitCanvas](../interfaces/IGroup.md#__updatehitcanvas)

#### Inherited from

[UI](UI.md).[__updateHitCanvas](UI.md#__updatehitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:556](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L556)

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

[IGroup](../interfaces/IGroup.md).[__render](../interfaces/IGroup.md#__render)

#### Inherited from

[UI](UI.md).[__render](UI.md#__render)

#### Defined in

[leafer/packages/display/src/Leaf.ts:563](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L563)

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

[IGroup](../interfaces/IGroup.md).[__drawFast](../interfaces/IGroup.md#__drawfast)

#### Inherited from

[UI](UI.md).[__drawFast](UI.md#__drawfast)

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

[IGroup](../interfaces/IGroup.md).[__draw](../interfaces/IGroup.md#__draw)

#### Inherited from

[UI](UI.md).[__draw](UI.md#__draw)

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

[IGroup](../interfaces/IGroup.md).[__clip](../interfaces/IGroup.md#__clip)

#### Inherited from

[UI](UI.md).[__clip](UI.md#__clip)

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

[IGroup](../interfaces/IGroup.md).[__renderShape](../interfaces/IGroup.md#__rendershape)

#### Inherited from

[UI](UI.md).[__renderShape](UI.md#__rendershape)

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

[IGroup](../interfaces/IGroup.md).[__drawShape](../interfaces/IGroup.md#__drawshape)

#### Inherited from

[UI](UI.md).[__drawShape](UI.md#__drawshape)

#### Defined in

[leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L574)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateWorldOpacity](../interfaces/IGroup.md#__updateworldopacity)

#### Inherited from

[UI](UI.md).[__updateWorldOpacity](UI.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L577)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateChange](../interfaces/IGroup.md#__updatechange)

#### Inherited from

[UI](UI.md).[__updateChange](UI.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L579)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updatePath](../interfaces/IGroup.md#__updatepath)

#### Inherited from

[UI](UI.md).[__updatePath](UI.md#__updatepath)

#### Defined in

[leafer/packages/display/src/Leaf.ts:590](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L590)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[getMotionPathData](../interfaces/IGroup.md#getmotionpathdata)

#### Inherited from

[UI](UI.md).[getMotionPathData](UI.md#getmotionpathdata)

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

[IGroup](../interfaces/IGroup.md).[getMotionPoint](../interfaces/IGroup.md#getmotionpoint)

#### Inherited from

[UI](UI.md).[getMotionPoint](UI.md#getmotionpoint)

#### Defined in

[leafer/packages/display/src/Leaf.ts:603](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L603)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[getMotionTotal](../interfaces/IGroup.md#getmotiontotal)

#### Inherited from

[UI](UI.md).[getMotionTotal](UI.md#getmotiontotal)

#### Defined in

[leafer/packages/display/src/Leaf.ts:607](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L607)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateMotionPath](../interfaces/IGroup.md#__updatemotionpath)

#### Inherited from

[UI](UI.md).[__updateMotionPath](UI.md#__updatemotionpath)

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

[IGroup](../interfaces/IGroup.md).[__runAnimation](../interfaces/IGroup.md#__runanimation)

#### Inherited from

[UI](UI.md).[__runAnimation](UI.md#__runanimation)

#### Defined in

[leafer/packages/display/src/Leaf.ts:617](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L617)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateSortChildren](../interfaces/IGroup.md#__updatesortchildren)

#### Inherited from

[UI](UI.md).[__updateSortChildren](UI.md#__updatesortchildren)

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

[IGroup](../interfaces/IGroup.md).[dropTo](../interfaces/IGroup.md#dropto)

#### Inherited from

[UI](UI.md).[dropTo](UI.md#dropto)

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

[IGroup](../interfaces/IGroup.md).[on](../interfaces/IGroup.md#on)

#### Inherited from

[UI](UI.md).[on](UI.md#on)

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

[IGroup](../interfaces/IGroup.md).[off](../interfaces/IGroup.md#off)

#### Inherited from

[UI](UI.md).[off](UI.md#off)

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

[IGroup](../interfaces/IGroup.md).[on_](../interfaces/IGroup.md#on_)

#### Inherited from

[UI](UI.md).[on_](UI.md#on_)

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

[IGroup](../interfaces/IGroup.md).[off_](../interfaces/IGroup.md#off_)

#### Inherited from

[UI](UI.md).[off_](UI.md#off_)

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

[IGroup](../interfaces/IGroup.md).[once](../interfaces/IGroup.md#once)

#### Inherited from

[UI](UI.md).[once](UI.md#once)

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

[IGroup](../interfaces/IGroup.md).[emit](../interfaces/IGroup.md#emit)

#### Inherited from

[UI](UI.md).[emit](UI.md#emit)

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

[IGroup](../interfaces/IGroup.md).[emitEvent](../interfaces/IGroup.md#emitevent)

#### Inherited from

[UI](UI.md).[emitEvent](UI.md#emitevent)

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

[IGroup](../interfaces/IGroup.md).[hasEvent](../interfaces/IGroup.md#hasevent)

#### Inherited from

[UI](UI.md).[hasEvent](UI.md#hasevent)

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

[UI](UI.md).[changeAttr](UI.md#changeattr)

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

[UI](UI.md).[addAttr](UI.md#addattr)

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

[IGroup](../interfaces/IGroup.md).[__emitLifeEvent](../interfaces/IGroup.md#__emitlifeevent)

#### Inherited from

[UI](UI.md).[__emitLifeEvent](UI.md#__emitlifeevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:667](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L667)

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

[IGroup](../interfaces/IGroup.md).[reset](../interfaces/IGroup.md#reset)

#### Overrides

[UI](UI.md).[reset](UI.md#reset)

#### Defined in

[ui/packages/display/src/Group.ts:34](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L34)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

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

[IGroup](../interfaces/IGroup.md).[set](../interfaces/IGroup.md#set)

#### Overrides

[UI](UI.md).[set](UI.md#set)

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

[IGroup](../interfaces/IGroup.md).[toJSON](../interfaces/IGroup.md#tojson)

#### Overrides

[UI](UI.md).[toJSON](UI.md#tojson)

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

[IGroup](../interfaces/IGroup.md).[pick](../interfaces/IGroup.md#pick)

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

[IGroup](../interfaces/IGroup.md).[addAt](../interfaces/IGroup.md#addat)

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

[IGroup](../interfaces/IGroup.md).[addAfter](../interfaces/IGroup.md#addafter)

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

[IGroup](../interfaces/IGroup.md).[addBefore](../interfaces/IGroup.md#addbefore)

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

[IGroup](../interfaces/IGroup.md).[add](../interfaces/IGroup.md#add)

#### Overrides

[UI](UI.md).[add](UI.md#add)

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

[IGroup](../interfaces/IGroup.md).[addMany](../interfaces/IGroup.md#addmany)

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

[IGroup](../interfaces/IGroup.md).[remove](../interfaces/IGroup.md#remove)

#### Overrides

[UI](UI.md).[remove](UI.md#remove)

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

[IGroup](../interfaces/IGroup.md).[removeAll](../interfaces/IGroup.md#removeall)

#### Defined in

[ui/packages/display/src/Group.ts:97](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L97)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[clear](../interfaces/IGroup.md#clear)

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

[IGroup](../interfaces/IGroup.md).[get](../interfaces/IGroup.md#get)

#### Inherited from

[UI](UI.md).[get](UI.md#get)

#### Defined in

[ui/packages/display/src/UI.ts:415](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L415)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IGroup](../interfaces/IGroup.md).[createProxyData](../interfaces/IGroup.md#createproxydata)

#### Inherited from

[UI](UI.md).[createProxyData](UI.md#createproxydata)

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

[IGroup](../interfaces/IGroup.md).[find](../interfaces/IGroup.md#find)

#### Inherited from

[UI](UI.md).[find](UI.md#find)

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

[IGroup](../interfaces/IGroup.md).[findTag](../interfaces/IGroup.md#findtag)

#### Inherited from

[UI](UI.md).[findTag](UI.md#findtag)

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

[IGroup](../interfaces/IGroup.md).[findOne](../interfaces/IGroup.md#findone)

#### Inherited from

[UI](UI.md).[findOne](UI.md#findone)

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

[IGroup](../interfaces/IGroup.md).[findId](../interfaces/IGroup.md#findid)

#### Inherited from

[UI](UI.md).[findId](UI.md#findid)

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

[IGroup](../interfaces/IGroup.md).[getPath](../interfaces/IGroup.md#getpath)

#### Inherited from

[UI](UI.md).[getPath](UI.md#getpath)

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

[IGroup](../interfaces/IGroup.md).[getPathString](../interfaces/IGroup.md#getpathstring)

#### Inherited from

[UI](UI.md).[getPathString](UI.md#getpathstring)

#### Defined in

[ui/packages/display/src/UI.ts:442](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L442)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[load](../interfaces/IGroup.md#load)

#### Inherited from

[UI](UI.md).[load](UI.md#load)

#### Defined in

[ui/packages/display/src/UI.ts:447](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L447)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__onUpdateSize](../interfaces/IGroup.md#__onupdatesize)

#### Inherited from

[UI](UI.md).[__onUpdateSize](UI.md#__onupdatesize)

#### Defined in

[ui/packages/display/src/UI.ts:451](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L451)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[__updateRenderPath](../interfaces/IGroup.md#__updaterenderpath)

#### Inherited from

[UI](UI.md).[__updateRenderPath](UI.md#__updaterenderpath)

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

[IGroup](../interfaces/IGroup.md).[__drawRenderPath](../interfaces/IGroup.md#__drawrenderpath)

#### Inherited from

[UI](UI.md).[__drawRenderPath](UI.md#__drawrenderpath)

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

[IGroup](../interfaces/IGroup.md).[__drawPath](../interfaces/IGroup.md#__drawpath)

#### Inherited from

[UI](UI.md).[__drawPath](UI.md#__drawpath)

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

[IGroup](../interfaces/IGroup.md).[__drawPathByData](../interfaces/IGroup.md#__drawpathbydata)

#### Inherited from

[UI](UI.md).[__drawPathByData](UI.md#__drawpathbydata)

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

[IGroup](../interfaces/IGroup.md).[__drawPathByBox](../interfaces/IGroup.md#__drawpathbybox)

#### Inherited from

[UI](UI.md).[__drawPathByBox](UI.md#__drawpathbybox)

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

[IGroup](../interfaces/IGroup.md).[drawImagePlaceholder](../interfaces/IGroup.md#drawimageplaceholder)

#### Inherited from

[UI](UI.md).[drawImagePlaceholder](UI.md#drawimageplaceholder)

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

[IGroup](../interfaces/IGroup.md).[animate](../interfaces/IGroup.md#animate)

#### Inherited from

[UI](UI.md).[animate](UI.md#animate)

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

[IGroup](../interfaces/IGroup.md).[killAnimate](../interfaces/IGroup.md#killanimate)

#### Inherited from

[UI](UI.md).[killAnimate](UI.md#killanimate)

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

[IGroup](../interfaces/IGroup.md).[export](../interfaces/IGroup.md#export)

#### Inherited from

[UI](UI.md).[export](UI.md#export)

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

[IGroup](../interfaces/IGroup.md).[syncExport](../interfaces/IGroup.md#syncexport)

#### Inherited from

[UI](UI.md).[syncExport](UI.md#syncexport)

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

[IGroup](../interfaces/IGroup.md).[clone](../interfaces/IGroup.md#clone)

#### Inherited from

[UI](UI.md).[clone](UI.md#clone)

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

[UI](UI.md).[one](UI.md#one)

#### Defined in

[ui/packages/display/src/UI.ts:518](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L518)

___

### registerUI

▸ `Static` **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[UI](UI.md).[registerUI](UI.md#registerui)

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

[UI](UI.md).[registerData](UI.md#registerdata)

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

[UI](UI.md).[setEditConfig](UI.md#seteditconfig)

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

[UI](UI.md).[setEditOuter](UI.md#seteditouter)

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

[UI](UI.md).[setEditInner](UI.md#seteditinner)

#### Defined in

[ui/packages/display/src/UI.ts:537](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L537)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IGroup](../interfaces/IGroup.md).[destroy](../interfaces/IGroup.md#destroy)

#### Inherited from

[UI](UI.md).[destroy](UI.md#destroy)

#### Defined in

[ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L540)
