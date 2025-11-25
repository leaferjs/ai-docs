# Class: Pen\<TInputData\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IPenInputData`](../interfaces/IPenInputData.md) |

## Hierarchy

- [`Group`](Group.md)\<`TInputData`\>

  ↳ **`Pen`**

## Implements

- [`IPen`](../interfaces/IPen.md)

## Table of contents

### Constructors

- [constructor](Pen.md#constructor)

### Properties

- [innerId](Pen.md#innerid)
- [syncEventer](Pen.md#synceventer)
- [lockNormalStyle](Pen.md#locknormalstyle)
- [\_\_layout](Pen.md#__layout)
- [\_\_world](Pen.md#__world)
- [\_\_local](Pen.md#__local)
- [\_\_nowWorld](Pen.md#__nowworld)
- [\_\_cameraWorld](Pen.md#__cameraworld)
- [\_\_worldOpacity](Pen.md#__worldopacity)
- [\_\_scrollWorld](Pen.md#__scrollworld)
- [\_\_level](Pen.md#__level)
- [\_\_tempNumber](Pen.md#__tempnumber)
- [\_\_hasAutoLayout](Pen.md#__hasautolayout)
- [\_\_hasMask](Pen.md#__hasmask)
- [\_\_hasEraser](Pen.md#__haseraser)
- [\_\_hitCanvas](Pen.md#__hitcanvas)
- [\_\_captureMap](Pen.md#__capturemap)
- [\_\_bubbleMap](Pen.md#__bubblemap)
- [\_\_hasLocalEvent](Pen.md#__haslocalevent)
- [\_\_hasWorldEvent](Pen.md#__hasworldevent)
- [destroyed](Pen.md#destroyed)
- [width](Pen.md#width)
- [height](Pen.md#height)
- [children](Pen.md#children)
- [topChildren](Pen.md#topchildren)
- [childlessJSON](Pen.md#childlessjson)
- [\_\_](Pen.md#__)
- [pathElement](Pen.md#pathelement)
- [pathStyle](Pen.md#pathstyle)
- [path](Pen.md#path)
- [\_\_path](Pen.md#__path)
- [proxyData](Pen.md#proxydata)
- [\_\_proxyData](Pen.md#__proxydata)
- [leafer](Pen.md#leafer)
- [parent](Pen.md#parent)
- [zoomLayer](Pen.md#zoomlayer)
- [id](Pen.md#id)
- [name](Pen.md#name)
- [className](Pen.md#classname)
- [blendMode](Pen.md#blendmode)
- [opacity](Pen.md#opacity)
- [visible](Pen.md#visible)
- [locked](Pen.md#locked)
- [dim](Pen.md#dim)
- [dimskip](Pen.md#dimskip)
- [bright](Pen.md#bright)
- [zIndex](Pen.md#zindex)
- [mask](Pen.md#mask)
- [eraser](Pen.md#eraser)
- [x](Pen.md#x)
- [y](Pen.md#y)
- [scaleX](Pen.md#scalex)
- [scaleY](Pen.md#scaley)
- [rotation](Pen.md#rotation)
- [skewX](Pen.md#skewx)
- [skewY](Pen.md#skewy)
- [offsetX](Pen.md#offsetx)
- [offsetY](Pen.md#offsety)
- [scrollX](Pen.md#scrollx)
- [scrollY](Pen.md#scrolly)
- [origin](Pen.md#origin)
- [around](Pen.md#around)
- [lazy](Pen.md#lazy)
- [pixelRatio](Pen.md#pixelratio)
- [renderSpread](Pen.md#renderspread)
- [windingRule](Pen.md#windingrule)
- [closed](Pen.md#closed)
- [flow](Pen.md#flow)
- [padding](Pen.md#padding)
- [gap](Pen.md#gap)
- [flowAlign](Pen.md#flowalign)
- [flowWrap](Pen.md#flowwrap)
- [itemBox](Pen.md#itembox)
- [inFlow](Pen.md#inflow)
- [autoWidth](Pen.md#autowidth)
- [autoHeight](Pen.md#autoheight)
- [lockRatio](Pen.md#lockratio)
- [autoBox](Pen.md#autobox)
- [widthRange](Pen.md#widthrange)
- [heightRange](Pen.md#heightrange)
- [draggable](Pen.md#draggable)
- [dragBounds](Pen.md#dragbounds)
- [dragBoundsType](Pen.md#dragboundstype)
- [editable](Pen.md#editable)
- [hittable](Pen.md#hittable)
- [hitFill](Pen.md#hitfill)
- [hitStroke](Pen.md#hitstroke)
- [hitBox](Pen.md#hitbox)
- [hitChildren](Pen.md#hitchildren)
- [hitSelf](Pen.md#hitself)
- [hitRadius](Pen.md#hitradius)
- [cursor](Pen.md#cursor)
- [fill](Pen.md#fill)
- [stroke](Pen.md#stroke)
- [strokeAlign](Pen.md#strokealign)
- [strokeWidth](Pen.md#strokewidth)
- [strokeWidthFixed](Pen.md#strokewidthfixed)
- [strokeCap](Pen.md#strokecap)
- [strokeJoin](Pen.md#strokejoin)
- [dashPattern](Pen.md#dashpattern)
- [dashOffset](Pen.md#dashoffset)
- [miterLimit](Pen.md#miterlimit)
- [startArrow](Pen.md#startarrow)
- [endArrow](Pen.md#endarrow)
- [cornerRadius](Pen.md#cornerradius)
- [cornerSmoothing](Pen.md#cornersmoothing)
- [shadow](Pen.md#shadow)
- [innerShadow](Pen.md#innershadow)
- [blur](Pen.md#blur)
- [backgroundBlur](Pen.md#backgroundblur)
- [grayscale](Pen.md#grayscale)
- [filter](Pen.md#filter)
- [animation](Pen.md#animation)
- [animationOut](Pen.md#animationout)
- [transition](Pen.md#transition)
- [transitionOut](Pen.md#transitionout)
- [motionPath](Pen.md#motionpath)
- [motionPrecision](Pen.md#motionprecision)
- [motion](Pen.md#motion)
- [motionRotation](Pen.md#motionrotation)
- [states](Pen.md#states)
- [state](Pen.md#state)
- [selected](Pen.md#selected)
- [disabled](Pen.md#disabled)
- [normalStyle](Pen.md#normalstyle)
- [hoverStyle](Pen.md#hoverstyle)
- [pressStyle](Pen.md#pressstyle)
- [focusStyle](Pen.md#focusstyle)
- [selectedStyle](Pen.md#selectedstyle)
- [disabledStyle](Pen.md#disabledstyle)
- [placeholderStyle](Pen.md#placeholderstyle)
- [placeholderColor](Pen.md#placeholdercolor)
- [placeholderDelay](Pen.md#placeholderdelay)
- [button](Pen.md#button)
- [editConfig](Pen.md#editconfig)
- [editOuter](Pen.md#editouter)
- [editInner](Pen.md#editinner)
- [data](Pen.md#data)
- [useFastShadow](Pen.md#usefastshadow)
- [\_\_box](Pen.md#__box)
- [\_\_animate](Pen.md#__animate)

### Accessors

- [tag](Pen.md#tag)
- [innerName](Pen.md#innername)
- [\_\_DataProcessor](Pen.md#__dataprocessor)
- [\_\_LayoutProcessor](Pen.md#__layoutprocessor)
- [leaferIsCreated](Pen.md#leaferiscreated)
- [leaferIsReady](Pen.md#leaferisready)
- [isLeafer](Pen.md#isleafer)
- [isBranchLeaf](Pen.md#isbranchleaf)
- [\_\_localMatrix](Pen.md#__localmatrix)
- [\_\_localBoxBounds](Pen.md#__localboxbounds)
- [worldTransform](Pen.md#worldtransform)
- [localTransform](Pen.md#localtransform)
- [scrollWorldTransform](Pen.md#scrollworldtransform)
- [boxBounds](Pen.md#boxbounds)
- [renderBounds](Pen.md#renderbounds)
- [worldBoxBounds](Pen.md#worldboxbounds)
- [worldStrokeBounds](Pen.md#worldstrokebounds)
- [worldRenderBounds](Pen.md#worldrenderbounds)
- [worldOpacity](Pen.md#worldopacity)
- [\_\_worldFlipped](Pen.md#__worldflipped)
- [\_\_onlyHitMask](Pen.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Pen.md#__ignorehitworld)
- [\_\_inLazyBounds](Pen.md#__inlazybounds)
- [pathInputed](Pen.md#pathinputed)
- [event](Pen.md#event)
- [isBranch](Pen.md#isbranch)
- [\_\_tag](Pen.md#__tag)
- [app](Pen.md#app)
- [isFrame](Pen.md#isframe)
- [scale](Pen.md#scale)
- [isAutoWidth](Pen.md#isautowidth)
- [isAutoHeight](Pen.md#isautoheight)
- [pen](Pen.md#pen)

### Methods

- [resetCustom](Pen.md#resetcustom)
- [waitParent](Pen.md#waitparent)
- [waitLeafer](Pen.md#waitleafer)
- [nextRender](Pen.md#nextrender)
- [removeNextRender](Pen.md#removenextrender)
- [\_\_bindLeafer](Pen.md#__bindleafer)
- [setAttr](Pen.md#setattr)
- [getAttr](Pen.md#getattr)
- [getComputedAttr](Pen.md#getcomputedattr)
- [toString](Pen.md#tostring)
- [toSVG](Pen.md#tosvg)
- [\_\_SVG](Pen.md#__svg)
- [toHTML](Pen.md#tohtml)
- [\_\_setAttr](Pen.md#__setattr)
- [\_\_getAttr](Pen.md#__getattr)
- [setProxyAttr](Pen.md#setproxyattr)
- [getProxyAttr](Pen.md#getproxyattr)
- [focus](Pen.md#focus)
- [updateState](Pen.md#updatestate)
- [updateLayout](Pen.md#updatelayout)
- [forceUpdate](Pen.md#forceupdate)
- [forceRender](Pen.md#forcerender)
- [\_\_extraUpdate](Pen.md#__extraupdate)
- [\_\_updateWorldMatrix](Pen.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Pen.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Pen.md#__updateworldbounds)
- [\_\_updateLocalBounds](Pen.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Pen.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Pen.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Pen.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Pen.md#__updateboxbounds)
- [\_\_updateContentBounds](Pen.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Pen.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Pen.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Pen.md#__updateautolayout)
- [\_\_updateFlowLayout](Pen.md#__updateflowlayout)
- [\_\_updateNaturalSize](Pen.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Pen.md#__updatestrokespread)
- [\_\_updateRenderSpread](Pen.md#__updaterenderspread)
- [\_\_updateEraser](Pen.md#__updateeraser)
- [\_\_renderEraser](Pen.md#__rendereraser)
- [\_\_updateMask](Pen.md#__updatemask)
- [\_\_renderMask](Pen.md#__rendermask)
- [\_\_getNowWorld](Pen.md#__getnowworld)
- [getClampRenderScale](Pen.md#getclamprenderscale)
- [getRenderScaleData](Pen.md#getrenderscaledata)
- [getTransform](Pen.md#gettransform)
- [getBounds](Pen.md#getbounds)
- [getLayoutBounds](Pen.md#getlayoutbounds)
- [getLayoutPoints](Pen.md#getlayoutpoints)
- [getWorldBounds](Pen.md#getworldbounds)
- [worldToLocal](Pen.md#worldtolocal)
- [localToWorld](Pen.md#localtoworld)
- [worldToInner](Pen.md#worldtoinner)
- [innerToWorld](Pen.md#innertoworld)
- [getBoxPoint](Pen.md#getboxpoint)
- [getBoxPointByInner](Pen.md#getboxpointbyinner)
- [getInnerPoint](Pen.md#getinnerpoint)
- [getInnerPointByBox](Pen.md#getinnerpointbybox)
- [getInnerPointByLocal](Pen.md#getinnerpointbylocal)
- [getLocalPoint](Pen.md#getlocalpoint)
- [getLocalPointByInner](Pen.md#getlocalpointbyinner)
- [getPagePoint](Pen.md#getpagepoint)
- [getWorldPoint](Pen.md#getworldpoint)
- [getWorldPointByBox](Pen.md#getworldpointbybox)
- [getWorldPointByLocal](Pen.md#getworldpointbylocal)
- [getWorldPointByPage](Pen.md#getworldpointbypage)
- [setTransform](Pen.md#settransform)
- [transform](Pen.md#transform)
- [move](Pen.md#move)
- [moveInner](Pen.md#moveinner)
- [scaleOf](Pen.md#scaleof)
- [rotateOf](Pen.md#rotateof)
- [skewOf](Pen.md#skewof)
- [transformWorld](Pen.md#transformworld)
- [moveWorld](Pen.md#moveworld)
- [scaleOfWorld](Pen.md#scaleofworld)
- [rotateOfWorld](Pen.md#rotateofworld)
- [skewOfWorld](Pen.md#skewofworld)
- [flip](Pen.md#flip)
- [scaleResize](Pen.md#scaleresize)
- [\_\_scaleResize](Pen.md#__scaleresize)
- [resizeWidth](Pen.md#resizewidth)
- [resizeHeight](Pen.md#resizeheight)
- [hit](Pen.md#hit)
- [\_\_hitWorld](Pen.md#__hitworld)
- [\_\_hit](Pen.md#__hit)
- [\_\_hitFill](Pen.md#__hitfill)
- [\_\_hitStroke](Pen.md#__hitstroke)
- [\_\_hitPixel](Pen.md#__hitpixel)
- [\_\_drawHitPath](Pen.md#__drawhitpath)
- [\_\_updateHitCanvas](Pen.md#__updatehitcanvas)
- [\_\_render](Pen.md#__render)
- [\_\_drawFast](Pen.md#__drawfast)
- [\_\_draw](Pen.md#__draw)
- [\_\_clip](Pen.md#__clip)
- [\_\_renderShape](Pen.md#__rendershape)
- [\_\_drawShape](Pen.md#__drawshape)
- [\_\_updateWorldOpacity](Pen.md#__updateworldopacity)
- [\_\_updateChange](Pen.md#__updatechange)
- [\_\_updatePath](Pen.md#__updatepath)
- [getMotionPathData](Pen.md#getmotionpathdata)
- [getMotionPoint](Pen.md#getmotionpoint)
- [getMotionTotal](Pen.md#getmotiontotal)
- [\_\_updateMotionPath](Pen.md#__updatemotionpath)
- [\_\_runAnimation](Pen.md#__runanimation)
- [\_\_updateSortChildren](Pen.md#__updatesortchildren)
- [dropTo](Pen.md#dropto)
- [on](Pen.md#on)
- [off](Pen.md#off)
- [on\_](Pen.md#on_)
- [off\_](Pen.md#off_)
- [once](Pen.md#once)
- [emit](Pen.md#emit)
- [emitEvent](Pen.md#emitevent)
- [hasEvent](Pen.md#hasevent)
- [changeAttr](Pen.md#changeattr)
- [addAttr](Pen.md#addattr)
- [\_\_emitLifeEvent](Pen.md#__emitlifeevent)
- [reset](Pen.md#reset)
- [\_\_setBranch](Pen.md#__setbranch)
- [set](Pen.md#set)
- [toJSON](Pen.md#tojson)
- [pick](Pen.md#pick)
- [addAt](Pen.md#addat)
- [addAfter](Pen.md#addafter)
- [addBefore](Pen.md#addbefore)
- [add](Pen.md#add)
- [addMany](Pen.md#addmany)
- [remove](Pen.md#remove)
- [removeAll](Pen.md#removeall)
- [clear](Pen.md#clear)
- [setStyle](Pen.md#setstyle)
- [beginPath](Pen.md#beginpath)
- [moveTo](Pen.md#moveto)
- [lineTo](Pen.md#lineto)
- [bezierCurveTo](Pen.md#beziercurveto)
- [quadraticCurveTo](Pen.md#quadraticcurveto)
- [closePath](Pen.md#closepath)
- [rect](Pen.md#rect)
- [roundRect](Pen.md#roundrect)
- [ellipse](Pen.md#ellipse)
- [arc](Pen.md#arc)
- [arcTo](Pen.md#arcto)
- [drawEllipse](Pen.md#drawellipse)
- [drawArc](Pen.md#drawarc)
- [drawPoints](Pen.md#drawpoints)
- [clearPath](Pen.md#clearpath)
- [paint](Pen.md#paint)
- [get](Pen.md#get)
- [createProxyData](Pen.md#createproxydata)
- [find](Pen.md#find)
- [findTag](Pen.md#findtag)
- [findOne](Pen.md#findone)
- [findId](Pen.md#findid)
- [getPath](Pen.md#getpath)
- [getPathString](Pen.md#getpathstring)
- [load](Pen.md#load)
- [\_\_onUpdateSize](Pen.md#__onupdatesize)
- [\_\_updateRenderPath](Pen.md#__updaterenderpath)
- [\_\_drawRenderPath](Pen.md#__drawrenderpath)
- [\_\_drawPath](Pen.md#__drawpath)
- [\_\_drawPathByData](Pen.md#__drawpathbydata)
- [\_\_drawPathByBox](Pen.md#__drawpathbybox)
- [drawImagePlaceholder](Pen.md#drawimageplaceholder)
- [animate](Pen.md#animate)
- [killAnimate](Pen.md#killanimate)
- [export](Pen.md#export)
- [syncExport](Pen.md#syncexport)
- [clone](Pen.md#clone)
- [one](Pen.md#one)
- [registerUI](Pen.md#registerui)
- [registerData](Pen.md#registerdata)
- [setEditConfig](Pen.md#seteditconfig)
- [setEditOuter](Pen.md#seteditouter)
- [setEditInner](Pen.md#seteditinner)
- [destroy](Pen.md#destroy)

## Constructors

### constructor

• **new Pen**\<`TInputData`\>(`data?`): [`Pen`](Pen.md)\<`TInputData`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TInputData` | [`IPenInputData`](../interfaces/IPenInputData.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `TInputData` |

#### Returns

[`Pen`](Pen.md)\<`TInputData`\>

#### Inherited from

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:115](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L115)

## Properties

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[innerId](../interfaces/IPen.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:33](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L33)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[syncEventer](../interfaces/IPen.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:49](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L49)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[lockNormalStyle](../interfaces/IPen.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L50)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__layout](../interfaces/IPen.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L53)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__world](../interfaces/IPen.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L55)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__local](../interfaces/IPen.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L56)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__nowWorld](../interfaces/IPen.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:58](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L58)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__cameraWorld](../interfaces/IPen.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:59](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L59)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[__worldOpacity](../interfaces/IPen.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:64](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L64)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__scrollWorld](../interfaces/IPen.md#__scrollworld)

#### Inherited from

[Group](Group.md).[__scrollWorld](Group.md#__scrollworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:70](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L70)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[__level](../interfaces/IPen.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L83)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[__tempNumber](../interfaces/IPen.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L84)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__hasAutoLayout](../interfaces/IPen.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:88](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L88)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__hasMask](../interfaces/IPen.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:89](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L89)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__hasEraser](../interfaces/IPen.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:90](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L90)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__hitCanvas](../interfaces/IPen.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:91](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L91)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__captureMap](../interfaces/IPen.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:102](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L102)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__bubbleMap](../interfaces/IPen.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:103](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L103)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__hasLocalEvent](../interfaces/IPen.md#__haslocalevent)

#### Inherited from

[Group](Group.md).[__hasLocalEvent](Group.md#__haslocalevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L105)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__hasWorldEvent](../interfaces/IPen.md#__hasworldevent)

#### Inherited from

[Group](Group.md).[__hasWorldEvent](Group.md#__hasworldevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:106](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L106)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[destroyed](../interfaces/IPen.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:112](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L112)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[width](../interfaces/IPen.md#width)

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[src/ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[height](../interfaces/IPen.md#height)

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[src/ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[children](../interfaces/IPen.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[src/ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L28)

___

### topChildren

• `Optional` **topChildren**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[topChildren](../interfaces/IPen.md#topchildren)

#### Inherited from

[Group](Group.md).[topChildren](Group.md#topchildren)

#### Defined in

[src/ui/packages/display/src/Group.ts:30](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L30)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[childlessJSON](../interfaces/IPen.md#childlessjson)

#### Inherited from

[Group](Group.md).[childlessJSON](Group.md#childlessjson)

#### Defined in

[src/ui/packages/display/src/Group.ts:32](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L32)

___

### \_\_

• **\_\_**: [`IPenData`](../interfaces/IPenData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__](../interfaces/IPen.md#__)

#### Overrides

[Group](Group.md).[__](Group.md#__)

#### Defined in

[src/ui/packages/display/src/Pen.ts:16](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L16)

___

### pathElement

• **pathElement**: [`IPath`](../interfaces/IPath.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[pathElement](../interfaces/IPen.md#pathelement)

#### Defined in

[src/ui/packages/display/src/Pen.ts:18](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L18)

___

### pathStyle

• **pathStyle**: [`IPathInputData`](../interfaces/IPathInputData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[pathStyle](../interfaces/IPen.md#pathstyle)

#### Defined in

[src/ui/packages/display/src/Pen.ts:19](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L19)

___

### path

• **path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPen](../interfaces/IPen.md).[path](../interfaces/IPen.md#path)

#### Overrides

[Group](Group.md).[path](Group.md#path)

#### Defined in

[src/ui/packages/display/src/Pen.ts:22](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L22)

___

### \_\_path

• **\_\_path**: [`IPathCommandData`](../modules.md#ipathcommanddata)

#### Implementation of

[IPen](../interfaces/IPen.md).[__path](../interfaces/IPen.md#__path)

#### Defined in

[src/ui/packages/display/src/Pen.ts:24](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L24)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[proxyData](../interfaces/IPen.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__proxyData](../interfaces/IPen.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[leafer](../interfaces/IPen.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[src/ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[parent](../interfaces/IPen.md#parent)

#### Inherited from

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[src/ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[zoomLayer](../interfaces/IPen.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[src/ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[id](../interfaces/IPen.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[src/ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[name](../interfaces/IPen.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[src/ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[className](../interfaces/IPen.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[src/ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IPen](../interfaces/IPen.md).[blendMode](../interfaces/IPen.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[src/ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[opacity](../interfaces/IPen.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[src/ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IPen](../interfaces/IPen.md).[visible](../interfaces/IPen.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[src/ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[locked](../interfaces/IPen.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[src/ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[dim](../interfaces/IPen.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[src/ui/packages/display/src/UI.ts:67](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L67)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[dimskip](../interfaces/IPen.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[src/ui/packages/display/src/UI.ts:70](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L70)

___

### bright

• `Optional` **bright**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[bright](../interfaces/IPen.md#bright)

#### Inherited from

[Group](Group.md).[bright](Group.md#bright)

#### Defined in

[src/ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L72)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[zIndex](../interfaces/IPen.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[src/ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L76)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IPen](../interfaces/IPen.md).[mask](../interfaces/IPen.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[src/ui/packages/display/src/UI.ts:80](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L80)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IPen](../interfaces/IPen.md).[eraser](../interfaces/IPen.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[src/ui/packages/display/src/UI.ts:83](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L83)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[x](../interfaces/IPen.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[src/ui/packages/display/src/UI.ts:88](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L88)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[y](../interfaces/IPen.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[src/ui/packages/display/src/UI.ts:91](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L91)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[scaleX](../interfaces/IPen.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[src/ui/packages/display/src/UI.ts:102](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L102)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[scaleY](../interfaces/IPen.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[src/ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L105)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[rotation](../interfaces/IPen.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L109)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[skewX](../interfaces/IPen.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[src/ui/packages/display/src/UI.ts:113](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L113)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[skewY](../interfaces/IPen.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[src/ui/packages/display/src/UI.ts:116](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L116)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[offsetX](../interfaces/IPen.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[src/ui/packages/display/src/UI.ts:121](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L121)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[offsetY](../interfaces/IPen.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[src/ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L124)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[scrollX](../interfaces/IPen.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[src/ui/packages/display/src/UI.ts:128](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L128)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[scrollY](../interfaces/IPen.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[src/ui/packages/display/src/UI.ts:131](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L131)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPen](../interfaces/IPen.md).[origin](../interfaces/IPen.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[src/ui/packages/display/src/UI.ts:136](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L136)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IPen](../interfaces/IPen.md).[around](../interfaces/IPen.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[src/ui/packages/display/src/UI.ts:139](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L139)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[lazy](../interfaces/IPen.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[src/ui/packages/display/src/UI.ts:144](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L144)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[pixelRatio](../interfaces/IPen.md#pixelratio)

#### Inherited from

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:147](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L147)

___

### renderSpread

• `Optional` **renderSpread**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[renderSpread](../interfaces/IPen.md#renderspread)

#### Inherited from

[Group](Group.md).[renderSpread](Group.md#renderspread)

#### Defined in

[src/ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L151)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IPen](../interfaces/IPen.md).[windingRule](../interfaces/IPen.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[src/ui/packages/display/src/UI.ts:159](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L159)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[closed](../interfaces/IPen.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[src/ui/packages/display/src/UI.ts:162](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L162)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IPen](../interfaces/IPen.md).[flow](../interfaces/IPen.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[src/ui/packages/display/src/UI.ts:166](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L166)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[padding](../interfaces/IPen.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[src/ui/packages/display/src/UI.ts:169](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L169)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[gap](../interfaces/IPen.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[src/ui/packages/display/src/UI.ts:171](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L171)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IPen](../interfaces/IPen.md).[flowAlign](../interfaces/IPen.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[src/ui/packages/display/src/UI.ts:173](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L173)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IPen](../interfaces/IPen.md).[flowWrap](../interfaces/IPen.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[src/ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L175)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IPen](../interfaces/IPen.md).[itemBox](../interfaces/IPen.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[src/ui/packages/display/src/UI.ts:178](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L178)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[inFlow](../interfaces/IPen.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[src/ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L180)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPen](../interfaces/IPen.md).[autoWidth](../interfaces/IPen.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:183](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L183)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IPen](../interfaces/IPen.md).[autoHeight](../interfaces/IPen.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[src/ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L185)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[lockRatio](../interfaces/IPen.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[src/ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L188)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[autoBox](../interfaces/IPen.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[src/ui/packages/display/src/UI.ts:190](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L190)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[widthRange](../interfaces/IPen.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L193)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[heightRange](../interfaces/IPen.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[src/ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L196)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IPen](../interfaces/IPen.md).[draggable](../interfaces/IPen.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[src/ui/packages/display/src/UI.ts:201](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L201)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[dragBounds](../interfaces/IPen.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[src/ui/packages/display/src/UI.ts:204](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L204)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Implementation of

[IPen](../interfaces/IPen.md).[dragBoundsType](../interfaces/IPen.md#dragboundstype)

#### Inherited from

[Group](Group.md).[dragBoundsType](Group.md#dragboundstype)

#### Defined in

[src/ui/packages/display/src/UI.ts:207](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L207)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[editable](../interfaces/IPen.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[src/ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L211)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[hittable](../interfaces/IPen.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[src/ui/packages/display/src/UI.ts:216](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L216)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPen](../interfaces/IPen.md).[hitFill](../interfaces/IPen.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[src/ui/packages/display/src/UI.ts:219](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L219)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IPen](../interfaces/IPen.md).[hitStroke](../interfaces/IPen.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:222](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L222)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[hitBox](../interfaces/IPen.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[src/ui/packages/display/src/UI.ts:225](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L225)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[hitChildren](../interfaces/IPen.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[src/ui/packages/display/src/UI.ts:228](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L228)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[hitSelf](../interfaces/IPen.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[src/ui/packages/display/src/UI.ts:231](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L231)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[hitRadius](../interfaces/IPen.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L234)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[cursor](../interfaces/IPen.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[src/ui/packages/display/src/UI.ts:237](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L237)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IPen](../interfaces/IPen.md).[fill](../interfaces/IPen.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[src/ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L245)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IPen](../interfaces/IPen.md).[stroke](../interfaces/IPen.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[src/ui/packages/display/src/UI.ts:250](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L250)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IPen](../interfaces/IPen.md).[strokeAlign](../interfaces/IPen.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[src/ui/packages/display/src/UI.ts:253](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L253)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[strokeWidth](../interfaces/IPen.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[src/ui/packages/display/src/UI.ts:256](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L256)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Implementation of

[IPen](../interfaces/IPen.md).[strokeWidthFixed](../interfaces/IPen.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[src/ui/packages/display/src/UI.ts:259](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L259)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IPen](../interfaces/IPen.md).[strokeCap](../interfaces/IPen.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[src/ui/packages/display/src/UI.ts:262](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L262)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IPen](../interfaces/IPen.md).[strokeJoin](../interfaces/IPen.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[src/ui/packages/display/src/UI.ts:265](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L265)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IPen](../interfaces/IPen.md).[dashPattern](../interfaces/IPen.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[src/ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L268)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[dashOffset](../interfaces/IPen.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[src/ui/packages/display/src/UI.ts:271](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L271)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[miterLimit](../interfaces/IPen.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[src/ui/packages/display/src/UI.ts:274](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L274)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPen](../interfaces/IPen.md).[startArrow](../interfaces/IPen.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:279](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L279)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Implementation of

[IPen](../interfaces/IPen.md).[endArrow](../interfaces/IPen.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[src/ui/packages/display/src/UI.ts:281](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L281)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[cornerRadius](../interfaces/IPen.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[src/ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L286)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[cornerSmoothing](../interfaces/IPen.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[src/ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L289)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[shadow](../interfaces/IPen.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:294](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L294)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[innerShadow](../interfaces/IPen.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:297](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L297)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[blur](../interfaces/IPen.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[src/ui/packages/display/src/UI.ts:300](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L300)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[backgroundBlur](../interfaces/IPen.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[src/ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L303)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[grayscale](../interfaces/IPen.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[src/ui/packages/display/src/UI.ts:306](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L306)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[filter](../interfaces/IPen.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[src/ui/packages/display/src/UI.ts:309](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L309)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[animation](../interfaces/IPen.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[src/ui/packages/display/src/UI.ts:314](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L314)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IPen](../interfaces/IPen.md).[animationOut](../interfaces/IPen.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[src/ui/packages/display/src/UI.ts:316](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L316)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPen](../interfaces/IPen.md).[transition](../interfaces/IPen.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[src/ui/packages/display/src/UI.ts:319](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L319)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IPen](../interfaces/IPen.md).[transitionOut](../interfaces/IPen.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[src/ui/packages/display/src/UI.ts:321](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L321)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[motionPath](../interfaces/IPen.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:326](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L326)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[motionPrecision](../interfaces/IPen.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[src/ui/packages/display/src/UI.ts:328](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L328)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[motion](../interfaces/IPen.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[src/ui/packages/display/src/UI.ts:331](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L331)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[motionRotation](../interfaces/IPen.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[src/ui/packages/display/src/UI.ts:333](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L333)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[states](../interfaces/IPen.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[src/ui/packages/display/src/UI.ts:338](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L338)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[state](../interfaces/IPen.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[src/ui/packages/display/src/UI.ts:340](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L340)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[selected](../interfaces/IPen.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[src/ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L343)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[disabled](../interfaces/IPen.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[src/ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L345)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[normalStyle](../interfaces/IPen.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:348](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L348)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[hoverStyle](../interfaces/IPen.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L350)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[pressStyle](../interfaces/IPen.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:352](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L352)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[focusStyle](../interfaces/IPen.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:354](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L354)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[selectedStyle](../interfaces/IPen.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L356)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[disabledStyle](../interfaces/IPen.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:358](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L358)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[placeholderStyle](../interfaces/IPen.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[src/ui/packages/display/src/UI.ts:361](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L361)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[placeholderColor](../interfaces/IPen.md#placeholdercolor)

#### Inherited from

[Group](Group.md).[placeholderColor](Group.md#placeholdercolor)

#### Defined in

[src/ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L364)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IPen](../interfaces/IPen.md).[placeholderDelay](../interfaces/IPen.md#placeholderdelay)

#### Inherited from

[Group](Group.md).[placeholderDelay](Group.md#placeholderdelay)

#### Defined in

[src/ui/packages/display/src/UI.ts:367](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L367)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[button](../interfaces/IPen.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[src/ui/packages/display/src/UI.ts:370](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L370)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[editConfig](../interfaces/IPen.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:375](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L375)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[editOuter](../interfaces/IPen.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:377](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L377)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IPen](../interfaces/IPen.md).[editInner](../interfaces/IPen.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L379)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[data](../interfaces/IPen.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[src/ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L384)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[useFastShadow](../interfaces/IPen.md#usefastshadow)

#### Inherited from

[Group](Group.md).[useFastShadow](Group.md#usefastshadow)

#### Defined in

[src/ui/packages/display/src/UI.ts:393](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L393)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__box](../interfaces/IPen.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[src/ui/packages/display/src/UI.ts:395](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L395)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__animate](../interfaces/IPen.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:396](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L396)

## Accessors

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPen](../interfaces/IPen.md).[tag](../interfaces/IPen.md#tag)

#### Inherited from

Group.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:28](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L28)

• `set` **tag**(`_value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_value` | `string` |

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[tag](../interfaces/IPen.md#tag)

#### Inherited from

Group.tag

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:29](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L29)

___

### innerName

• `get` **innerName**(): `string`

#### Returns

`string`

#### Implementation of

[IPen](../interfaces/IPen.md).[innerName](../interfaces/IPen.md#innername)

#### Inherited from

Group.innerName

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:34](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L34)

___

### \_\_DataProcessor

• `get` **__DataProcessor**(): typeof [`LeafData`](LeafData.md)

#### Returns

typeof [`LeafData`](LeafData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__DataProcessor](../interfaces/IPen.md#__dataprocessor)

#### Inherited from

Group.\_\_DataProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:36](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L36)

___

### \_\_LayoutProcessor

• `get` **__LayoutProcessor**(): typeof [`LeafLayout`](LeafLayout.md)

#### Returns

typeof [`LeafLayout`](LeafLayout.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__LayoutProcessor](../interfaces/IPen.md#__layoutprocessor)

#### Inherited from

Group.\_\_LayoutProcessor

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:37](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L37)

___

### leaferIsCreated

• `get` **leaferIsCreated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[leaferIsCreated](../interfaces/IPen.md#leaferiscreated)

#### Inherited from

Group.leaferIsCreated

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L42)

___

### leaferIsReady

• `get` **leaferIsReady**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[leaferIsReady](../interfaces/IPen.md#leaferisready)

#### Inherited from

Group.leaferIsReady

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:43](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L43)

___

### isLeafer

• `get` **isLeafer**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isLeafer](../interfaces/IPen.md#isleafer)

#### Inherited from

Group.isLeafer

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:45](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L45)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isBranchLeaf](../interfaces/IPen.md#isbranchleaf)

#### Inherited from

Group.isBranchLeaf

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L47)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__localMatrix](../interfaces/IPen.md#__localmatrix)

#### Inherited from

Group.\_\_localMatrix

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L61)

___

### \_\_localBoxBounds

• `get` **__localBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[__localBoxBounds](../interfaces/IPen.md#__localboxbounds)

#### Inherited from

Group.\_\_localBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:62](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L62)

___

### worldTransform

• `get` **worldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[worldTransform](../interfaces/IPen.md#worldtransform)

#### Inherited from

Group.worldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:67](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L67)

___

### localTransform

• `get` **localTransform**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[localTransform](../interfaces/IPen.md#localtransform)

#### Inherited from

Group.localTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:68](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L68)

___

### scrollWorldTransform

• `get` **scrollWorldTransform**(): [`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Returns

[`IMatrixWithScaleData`](../interfaces/IMatrixWithScaleData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[scrollWorldTransform](../interfaces/IPen.md#scrollworldtransform)

#### Inherited from

Group.scrollWorldTransform

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:71](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L71)

___

### boxBounds

• `get` **boxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[boxBounds](../interfaces/IPen.md#boxbounds)

#### Inherited from

Group.boxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:74](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L74)

___

### renderBounds

• `get` **renderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[renderBounds](../interfaces/IPen.md#renderbounds)

#### Inherited from

Group.renderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:75](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L75)

___

### worldBoxBounds

• `get` **worldBoxBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[worldBoxBounds](../interfaces/IPen.md#worldboxbounds)

#### Inherited from

Group.worldBoxBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:76](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L76)

___

### worldStrokeBounds

• `get` **worldStrokeBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[worldStrokeBounds](../interfaces/IPen.md#worldstrokebounds)

#### Inherited from

Group.worldStrokeBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L77)

___

### worldRenderBounds

• `get` **worldRenderBounds**(): [`IBoundsData`](../interfaces/IBoundsData.md)

#### Returns

[`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[worldRenderBounds](../interfaces/IPen.md#worldrenderbounds)

#### Inherited from

Group.worldRenderBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L78)

___

### worldOpacity

• `get` **worldOpacity**(): `number`

#### Returns

`number`

#### Implementation of

[IPen](../interfaces/IPen.md).[worldOpacity](../interfaces/IPen.md#worldopacity)

#### Inherited from

Group.worldOpacity

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:81](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L81)

___

### \_\_worldFlipped

• `get` **__worldFlipped**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__worldFlipped](../interfaces/IPen.md#__worldflipped)

#### Inherited from

Group.\_\_worldFlipped

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:86](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L86)

___

### \_\_onlyHitMask

• `get` **__onlyHitMask**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__onlyHitMask](../interfaces/IPen.md#__onlyhitmask)

#### Inherited from

Group.\_\_onlyHitMask

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:93](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L93)

___

### \_\_ignoreHitWorld

• `get` **__ignoreHitWorld**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__ignoreHitWorld](../interfaces/IPen.md#__ignorehitworld)

#### Inherited from

Group.\_\_ignoreHitWorld

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:94](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L94)

___

### \_\_inLazyBounds

• `get` **__inLazyBounds**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[__inLazyBounds](../interfaces/IPen.md#__inlazybounds)

#### Inherited from

Group.\_\_inLazyBounds

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:95](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L95)

___

### pathInputed

• `get` **pathInputed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[pathInputed](../interfaces/IPen.md#pathinputed)

#### Inherited from

Group.pathInputed

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L97)

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

[IPen](../interfaces/IPen.md).[event](../interfaces/IPen.md#event)

#### Inherited from

Group.event

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L100)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isBranch](../interfaces/IPen.md#isbranch)

#### Inherited from

Group.isBranch

#### Defined in

[src/ui/packages/display/src/Group.ts:16](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L16)

___

### \_\_tag

• `get` **__tag**(): `string`

#### Returns

`string`

#### Implementation of

[IPen](../interfaces/IPen.md).[__tag](../interfaces/IPen.md#__tag)

#### Overrides

Group.\_\_tag

#### Defined in

[src/ui/packages/display/src/Pen.ts:13](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L13)

___

### app

• `get` **app**(): [`ILeafer`](../interfaces/ILeafer.md)

#### Returns

[`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[app](../interfaces/IPen.md#app)

#### Inherited from

Group.app

#### Defined in

[src/ui/packages/display/src/UI.ts:24](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L24)

___

### isFrame

• `get` **isFrame**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isFrame](../interfaces/IPen.md#isframe)

#### Inherited from

Group.isFrame

#### Defined in

[src/ui/packages/display/src/UI.ts:32](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L32)

___

### scale

• `get` **scale**(): `number` \| [`IPointData`](../interfaces/IPointData.md)

#### Returns

`number` \| [`IPointData`](../interfaces/IPointData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[scale](../interfaces/IPen.md#scale)

#### Inherited from

Group.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:388](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L388)

• `set` **scale**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` \| [`IPointData`](../interfaces/IPointData.md) |

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[scale](../interfaces/IPen.md#scale)

#### Inherited from

Group.scale

#### Defined in

[src/ui/packages/display/src/UI.ts:387](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L387)

___

### isAutoWidth

• `get` **isAutoWidth**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isAutoWidth](../interfaces/IPen.md#isautowidth)

#### Inherited from

Group.isAutoWidth

#### Defined in

[src/ui/packages/display/src/UI.ts:390](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L390)

___

### isAutoHeight

• `get` **isAutoHeight**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IPen](../interfaces/IPen.md).[isAutoHeight](../interfaces/IPen.md#isautoheight)

#### Inherited from

Group.isAutoHeight

#### Defined in

[src/ui/packages/display/src/UI.ts:391](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L391)

___

### pen

• `get` **pen**(): [`IPathCreator`](../interfaces/IPathCreator.md)

#### Returns

[`IPathCreator`](../interfaces/IPathCreator.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[pen](../interfaces/IPen.md#pen)

#### Inherited from

Group.pen

#### Defined in

[src/ui/packages/display/src/UI.ts:398](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L398)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[resetCustom](../interfaces/IPen.md#resetcustom)

#### Inherited from

[Group](Group.md).[resetCustom](Group.md#resetcustom)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:142](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L142)

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

[IPen](../interfaces/IPen.md).[waitParent](../interfaces/IPen.md#waitparent)

#### Inherited from

[Group](Group.md).[waitParent](Group.md#waitparent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:148](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L148)

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

[IPen](../interfaces/IPen.md).[waitLeafer](../interfaces/IPen.md#waitleafer)

#### Inherited from

[Group](Group.md).[waitLeafer](Group.md#waitleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:153](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L153)

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

[IPen](../interfaces/IPen.md).[nextRender](../interfaces/IPen.md#nextrender)

#### Inherited from

[Group](Group.md).[nextRender](Group.md#nextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:158](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L158)

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

[IPen](../interfaces/IPen.md).[removeNextRender](../interfaces/IPen.md#removenextrender)

#### Inherited from

[Group](Group.md).[removeNextRender](Group.md#removenextrender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:162](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L162)

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

[IPen](../interfaces/IPen.md).[__bindLeafer](../interfaces/IPen.md#__bindleafer)

#### Inherited from

[Group](Group.md).[__bindLeafer](Group.md#__bindleafer)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:166](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L166)

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

[IPen](../interfaces/IPen.md).[setAttr](../interfaces/IPen.md#setattr)

#### Inherited from

[Group](Group.md).[setAttr](Group.md#setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:196](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L196)

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

[IPen](../interfaces/IPen.md).[getAttr](../interfaces/IPen.md#getattr)

#### Inherited from

[Group](Group.md).[getAttr](Group.md#getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:197](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L197)

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

[IPen](../interfaces/IPen.md).[getComputedAttr](../interfaces/IPen.md#getcomputedattr)

#### Inherited from

[Group](Group.md).[getComputedAttr](Group.md#getcomputedattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:199](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L199)

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

[IPen](../interfaces/IPen.md).[toString](../interfaces/IPen.md#tostring)

#### Inherited from

[Group](Group.md).[toString](Group.md#tostring)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:206](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L206)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Implementation of

[IPen](../interfaces/IPen.md).[toSVG](../interfaces/IPen.md#tosvg)

#### Inherited from

[Group](Group.md).[toSVG](Group.md#tosvg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:210](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L210)

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

[IPen](../interfaces/IPen.md).[__SVG](../interfaces/IPen.md#__svg)

#### Inherited from

[Group](Group.md).[__SVG](Group.md#__svg)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:212](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L212)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Implementation of

[IPen](../interfaces/IPen.md).[toHTML](../interfaces/IPen.md#tohtml)

#### Inherited from

[Group](Group.md).[toHTML](Group.md#tohtml)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:214](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L214)

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

[IPen](../interfaces/IPen.md).[__setAttr](../interfaces/IPen.md#__setattr)

#### Inherited from

[Group](Group.md).[__setAttr](Group.md#__setattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:218](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L218)

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

[IPen](../interfaces/IPen.md).[__getAttr](../interfaces/IPen.md#__getattr)

#### Inherited from

[Group](Group.md).[__getAttr](Group.md#__getattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:220](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L220)

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

[IPen](../interfaces/IPen.md).[setProxyAttr](../interfaces/IPen.md#setproxyattr)

#### Inherited from

[Group](Group.md).[setProxyAttr](Group.md#setproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:222](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L222)

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

[IPen](../interfaces/IPen.md).[getProxyAttr](../interfaces/IPen.md#getproxyattr)

#### Inherited from

[Group](Group.md).[getProxyAttr](Group.md#getproxyattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:224](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L224)

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

[IPen](../interfaces/IPen.md).[focus](../interfaces/IPen.md#focus)

#### Inherited from

[Group](Group.md).[focus](Group.md#focus)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:244](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L244)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[updateState](../interfaces/IPen.md#updatestate)

#### Inherited from

[Group](Group.md).[updateState](Group.md#updatestate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:246](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L246)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[updateLayout](../interfaces/IPen.md#updatelayout)

#### Inherited from

[Group](Group.md).[updateLayout](Group.md#updatelayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:251](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L251)

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

[IPen](../interfaces/IPen.md).[forceUpdate](../interfaces/IPen.md#forceupdate)

#### Inherited from

[Group](Group.md).[forceUpdate](Group.md#forceupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:255](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L255)

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

[IPen](../interfaces/IPen.md).[forceRender](../interfaces/IPen.md#forcerender)

#### Inherited from

[Group](Group.md).[forceRender](Group.md#forcerender)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:263](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L263)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__extraUpdate](../interfaces/IPen.md#__extraupdate)

#### Inherited from

[Group](Group.md).[__extraUpdate](Group.md#__extraupdate)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:267](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L267)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateWorldMatrix](../interfaces/IPen.md#__updateworldmatrix)

#### Inherited from

[Group](Group.md).[__updateWorldMatrix](Group.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:273](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L273)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateLocalMatrix](../interfaces/IPen.md#__updatelocalmatrix)

#### Inherited from

[Group](Group.md).[__updateLocalMatrix](Group.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:275](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L275)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateWorldBounds](../interfaces/IPen.md#__updateworldbounds)

#### Inherited from

[Group](Group.md).[__updateWorldBounds](Group.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:281](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L281)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateLocalBounds](../interfaces/IPen.md#__updatelocalbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBounds](Group.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:283](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L283)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateLocalBoxBounds](../interfaces/IPen.md#__updatelocalboxbounds)

#### Inherited from

[Group](Group.md).[__updateLocalBoxBounds](Group.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L286)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateLocalStrokeBounds](../interfaces/IPen.md#__updatelocalstrokebounds)

#### Inherited from

[Group](Group.md).[__updateLocalStrokeBounds](Group.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L288)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateLocalRenderBounds](../interfaces/IPen.md#__updatelocalrenderbounds)

#### Inherited from

[Group](Group.md).[__updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L290)

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

[IPen](../interfaces/IPen.md).[__updateBoxBounds](../interfaces/IPen.md#__updateboxbounds)

#### Inherited from

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:294](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L294)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateContentBounds](../interfaces/IPen.md#__updatecontentbounds)

#### Inherited from

[Group](Group.md).[__updateContentBounds](Group.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:296](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L296)

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

[IPen](../interfaces/IPen.md).[__updateStrokeBounds](../interfaces/IPen.md#__updatestrokebounds)

#### Inherited from

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:298](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L298)

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

[IPen](../interfaces/IPen.md).[__updateRenderBounds](../interfaces/IPen.md#__updaterenderbounds)

#### Inherited from

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:300](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L300)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateAutoLayout](../interfaces/IPen.md#__updateautolayout)

#### Inherited from

[Group](Group.md).[__updateAutoLayout](Group.md#__updateautolayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:303](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L303)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateFlowLayout](../interfaces/IPen.md#__updateflowlayout)

#### Inherited from

[Group](Group.md).[__updateFlowLayout](Group.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:305](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L305)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateNaturalSize](../interfaces/IPen.md#__updatenaturalsize)

#### Inherited from

[Group](Group.md).[__updateNaturalSize](Group.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:307](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L307)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateStrokeSpread](../interfaces/IPen.md#__updatestrokespread)

#### Inherited from

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:310](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L310)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): [`IFourNumber`](../modules.md#ifournumber)

#### Returns

[`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateRenderSpread](../interfaces/IPen.md#__updaterenderspread)

#### Inherited from

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:312](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L312)

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

[IPen](../interfaces/IPen.md).[__updateEraser](../interfaces/IPen.md#__updateeraser)

#### Inherited from

[Group](Group.md).[__updateEraser](Group.md#__updateeraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:319](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L319)

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

[IPen](../interfaces/IPen.md).[__renderEraser](../interfaces/IPen.md#__rendereraser)

#### Inherited from

[Group](Group.md).[__renderEraser](Group.md#__rendereraser)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:323](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L323)

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

[IPen](../interfaces/IPen.md).[__updateMask](../interfaces/IPen.md#__updatemask)

#### Inherited from

[Group](Group.md).[__updateMask](Group.md#__updatemask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:331](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L331)

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

[IPen](../interfaces/IPen.md).[__renderMask](../interfaces/IPen.md#__rendermask)

#### Inherited from

[Group](Group.md).[__renderMask](Group.md#__rendermask)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:337](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L337)

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

[IPen](../interfaces/IPen.md).[__getNowWorld](../interfaces/IPen.md#__getnowworld)

#### Inherited from

[Group](Group.md).[__getNowWorld](Group.md#__getnowworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:345](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L345)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Implementation of

[IPen](../interfaces/IPen.md).[getClampRenderScale](../interfaces/IPen.md#getclamprenderscale)

#### Inherited from

[Group](Group.md).[getClampRenderScale](Group.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:359](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L359)

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

[IPen](../interfaces/IPen.md).[getRenderScaleData](../interfaces/IPen.md#getrenderscaledata)

#### Inherited from

[Group](Group.md).[getRenderScaleData](Group.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:365](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L365)

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

[IPen](../interfaces/IPen.md).[getTransform](../interfaces/IPen.md#gettransform)

#### Inherited from

[Group](Group.md).[getTransform](Group.md#gettransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:374](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L374)

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

[IPen](../interfaces/IPen.md).[getBounds](../interfaces/IPen.md#getbounds)

#### Inherited from

[Group](Group.md).[getBounds](Group.md#getbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:379](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L379)

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

[IPen](../interfaces/IPen.md).[getLayoutBounds](../interfaces/IPen.md#getlayoutbounds)

#### Inherited from

[Group](Group.md).[getLayoutBounds](Group.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:383](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L383)

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

[IPen](../interfaces/IPen.md).[getLayoutPoints](../interfaces/IPen.md#getlayoutpoints)

#### Inherited from

[Group](Group.md).[getLayoutPoints](Group.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:387](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L387)

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

[IPen](../interfaces/IPen.md).[getWorldBounds](../interfaces/IPen.md#getworldbounds)

#### Inherited from

[Group](Group.md).[getWorldBounds](Group.md#getworldbounds)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:392](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L392)

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

[IPen](../interfaces/IPen.md).[worldToLocal](../interfaces/IPen.md#worldtolocal)

#### Inherited from

[Group](Group.md).[worldToLocal](Group.md#worldtolocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:400](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L400)

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

[IPen](../interfaces/IPen.md).[localToWorld](../interfaces/IPen.md#localtoworld)

#### Inherited from

[Group](Group.md).[localToWorld](Group.md#localtoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:408](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L408)

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

[IPen](../interfaces/IPen.md).[worldToInner](../interfaces/IPen.md#worldtoinner)

#### Inherited from

[Group](Group.md).[worldToInner](Group.md#worldtoinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:416](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L416)

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

[IPen](../interfaces/IPen.md).[innerToWorld](../interfaces/IPen.md#innertoworld)

#### Inherited from

[Group](Group.md).[innerToWorld](Group.md#innertoworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:424](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L424)

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

[IPen](../interfaces/IPen.md).[getBoxPoint](../interfaces/IPen.md#getboxpoint)

#### Inherited from

[Group](Group.md).[getBoxPoint](Group.md#getboxpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:431](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L431)

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

[IPen](../interfaces/IPen.md).[getBoxPointByInner](../interfaces/IPen.md#getboxpointbyinner)

#### Inherited from

[Group](Group.md).[getBoxPointByInner](Group.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:435](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L435)

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

[IPen](../interfaces/IPen.md).[getInnerPoint](../interfaces/IPen.md#getinnerpoint)

#### Inherited from

[Group](Group.md).[getInnerPoint](Group.md#getinnerpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:441](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L441)

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

[IPen](../interfaces/IPen.md).[getInnerPointByBox](../interfaces/IPen.md#getinnerpointbybox)

#### Inherited from

[Group](Group.md).[getInnerPointByBox](Group.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:447](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L447)

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

[IPen](../interfaces/IPen.md).[getInnerPointByLocal](../interfaces/IPen.md#getinnerpointbylocal)

#### Inherited from

[Group](Group.md).[getInnerPointByLocal](Group.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:453](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L453)

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

[IPen](../interfaces/IPen.md).[getLocalPoint](../interfaces/IPen.md#getlocalpoint)

#### Inherited from

[Group](Group.md).[getLocalPoint](Group.md#getlocalpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:457](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L457)

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

[IPen](../interfaces/IPen.md).[getLocalPointByInner](../interfaces/IPen.md#getlocalpointbyinner)

#### Inherited from

[Group](Group.md).[getLocalPointByInner](Group.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:463](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L463)

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

[IPen](../interfaces/IPen.md).[getPagePoint](../interfaces/IPen.md#getpagepoint)

#### Inherited from

[Group](Group.md).[getPagePoint](Group.md#getpagepoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:467](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L467)

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

[IPen](../interfaces/IPen.md).[getWorldPoint](../interfaces/IPen.md#getworldpoint)

#### Inherited from

[Group](Group.md).[getWorldPoint](Group.md#getworldpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:472](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L472)

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

[IPen](../interfaces/IPen.md).[getWorldPointByBox](../interfaces/IPen.md#getworldpointbybox)

#### Inherited from

[Group](Group.md).[getWorldPointByBox](Group.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:478](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L478)

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

[IPen](../interfaces/IPen.md).[getWorldPointByLocal](../interfaces/IPen.md#getworldpointbylocal)

#### Inherited from

[Group](Group.md).[getWorldPointByLocal](Group.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:482](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L482)

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

[IPen](../interfaces/IPen.md).[getWorldPointByPage](../interfaces/IPen.md#getworldpointbypage)

#### Inherited from

[Group](Group.md).[getWorldPointByPage](Group.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:488](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L488)

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

[IPen](../interfaces/IPen.md).[setTransform](../interfaces/IPen.md#settransform)

#### Inherited from

[Group](Group.md).[setTransform](Group.md#settransform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:496](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L496)

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

[IPen](../interfaces/IPen.md).[transform](../interfaces/IPen.md#transform)

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:500](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L500)

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

[IPen](../interfaces/IPen.md).[move](../interfaces/IPen.md#move)

#### Inherited from

[Group](Group.md).[move](Group.md#move)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:504](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L504)

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

[IPen](../interfaces/IPen.md).[moveInner](../interfaces/IPen.md#moveinner)

#### Inherited from

[Group](Group.md).[moveInner](Group.md#moveinner)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:509](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L509)

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

[IPen](../interfaces/IPen.md).[scaleOf](../interfaces/IPen.md#scaleof)

#### Inherited from

[Group](Group.md).[scaleOf](Group.md#scaleof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:513](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L513)

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

[IPen](../interfaces/IPen.md).[rotateOf](../interfaces/IPen.md#rotateof)

#### Inherited from

[Group](Group.md).[rotateOf](Group.md#rotateof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:517](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L517)

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

[IPen](../interfaces/IPen.md).[skewOf](../interfaces/IPen.md#skewof)

#### Inherited from

[Group](Group.md).[skewOf](Group.md#skewof)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:521](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L521)

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

[IPen](../interfaces/IPen.md).[transformWorld](../interfaces/IPen.md#transformworld)

#### Inherited from

[Group](Group.md).[transformWorld](Group.md#transformworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:526](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L526)

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

[IPen](../interfaces/IPen.md).[moveWorld](../interfaces/IPen.md#moveworld)

#### Inherited from

[Group](Group.md).[moveWorld](Group.md#moveworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:530](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L530)

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

[IPen](../interfaces/IPen.md).[scaleOfWorld](../interfaces/IPen.md#scaleofworld)

#### Inherited from

[Group](Group.md).[scaleOfWorld](Group.md#scaleofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:534](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L534)

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

[IPen](../interfaces/IPen.md).[rotateOfWorld](../interfaces/IPen.md#rotateofworld)

#### Inherited from

[Group](Group.md).[rotateOfWorld](Group.md#rotateofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:538](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L538)

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

[IPen](../interfaces/IPen.md).[skewOfWorld](../interfaces/IPen.md#skewofworld)

#### Inherited from

[Group](Group.md).[skewOfWorld](Group.md#skewofworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:542](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L542)

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

[IPen](../interfaces/IPen.md).[flip](../interfaces/IPen.md#flip)

#### Inherited from

[Group](Group.md).[flip](Group.md#flip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:546](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L546)

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

[IPen](../interfaces/IPen.md).[scaleResize](../interfaces/IPen.md#scaleresize)

#### Inherited from

[Group](Group.md).[scaleResize](Group.md#scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:553](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L553)

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

[IPen](../interfaces/IPen.md).[__scaleResize](../interfaces/IPen.md#__scaleresize)

#### Inherited from

[Group](Group.md).[__scaleResize](Group.md#__scaleresize)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:558](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L558)

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

[IPen](../interfaces/IPen.md).[resizeWidth](../interfaces/IPen.md#resizewidth)

#### Inherited from

[Group](Group.md).[resizeWidth](Group.md#resizewidth)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:561](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L561)

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

[IPen](../interfaces/IPen.md).[resizeHeight](../interfaces/IPen.md#resizeheight)

#### Inherited from

[Group](Group.md).[resizeHeight](Group.md#resizeheight)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:563](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L563)

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

[IPen](../interfaces/IPen.md).[hit](../interfaces/IPen.md#hit)

#### Inherited from

[Group](Group.md).[hit](Group.md#hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:568](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L568)

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

[IPen](../interfaces/IPen.md).[__hitWorld](../interfaces/IPen.md#__hitworld)

#### Inherited from

[Group](Group.md).[__hitWorld](Group.md#__hitworld)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:570](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L570)

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

[IPen](../interfaces/IPen.md).[__hit](../interfaces/IPen.md#__hit)

#### Inherited from

[Group](Group.md).[__hit](Group.md#__hit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:572](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L572)

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

[IPen](../interfaces/IPen.md).[__hitFill](../interfaces/IPen.md#__hitfill)

#### Inherited from

[Group](Group.md).[__hitFill](Group.md#__hitfill)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:574](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L574)

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

[IPen](../interfaces/IPen.md).[__hitStroke](../interfaces/IPen.md#__hitstroke)

#### Inherited from

[Group](Group.md).[__hitStroke](Group.md#__hitstroke)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:576](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L576)

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

[IPen](../interfaces/IPen.md).[__hitPixel](../interfaces/IPen.md#__hitpixel)

#### Inherited from

[Group](Group.md).[__hitPixel](Group.md#__hitpixel)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:578](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L578)

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

[IPen](../interfaces/IPen.md).[__drawHitPath](../interfaces/IPen.md#__drawhitpath)

#### Inherited from

[Group](Group.md).[__drawHitPath](Group.md#__drawhitpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:580](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L580)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateHitCanvas](../interfaces/IPen.md#__updatehitcanvas)

#### Inherited from

[Group](Group.md).[__updateHitCanvas](Group.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:582](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L582)

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

[IPen](../interfaces/IPen.md).[__render](../interfaces/IPen.md#__render)

#### Inherited from

[Group](Group.md).[__render](Group.md#__render)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:589](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L589)

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

[IPen](../interfaces/IPen.md).[__drawFast](../interfaces/IPen.md#__drawfast)

#### Inherited from

[Group](Group.md).[__drawFast](Group.md#__drawfast)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:591](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L591)

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

[IPen](../interfaces/IPen.md).[__draw](../interfaces/IPen.md#__draw)

#### Inherited from

[Group](Group.md).[__draw](Group.md#__draw)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:593](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L593)

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

[IPen](../interfaces/IPen.md).[__clip](../interfaces/IPen.md#__clip)

#### Inherited from

[Group](Group.md).[__clip](Group.md#__clip)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:596](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L596)

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

[IPen](../interfaces/IPen.md).[__renderShape](../interfaces/IPen.md#__rendershape)

#### Inherited from

[Group](Group.md).[__renderShape](Group.md#__rendershape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:598](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L598)

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

[IPen](../interfaces/IPen.md).[__drawShape](../interfaces/IPen.md#__drawshape)

#### Inherited from

[Group](Group.md).[__drawShape](Group.md#__drawshape)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:600](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L600)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateWorldOpacity](../interfaces/IPen.md#__updateworldopacity)

#### Inherited from

[Group](Group.md).[__updateWorldOpacity](Group.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:603](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L603)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateChange](../interfaces/IPen.md#__updatechange)

#### Inherited from

[Group](Group.md).[__updateChange](Group.md#__updatechange)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:605](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L605)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updatePath](../interfaces/IPen.md#__updatepath)

#### Inherited from

[Group](Group.md).[__updatePath](Group.md#__updatepath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:616](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L616)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Returns

[`IMotionPathData`](../interfaces/IMotionPathData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[getMotionPathData](../interfaces/IPen.md#getmotionpathdata)

#### Inherited from

[Group](Group.md).[getMotionPathData](Group.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:625](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L625)

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

[IPen](../interfaces/IPen.md).[getMotionPoint](../interfaces/IPen.md#getmotionpoint)

#### Inherited from

[Group](Group.md).[getMotionPoint](Group.md#getmotionpoint)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:629](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L629)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Implementation of

[IPen](../interfaces/IPen.md).[getMotionTotal](../interfaces/IPen.md#getmotiontotal)

#### Inherited from

[Group](Group.md).[getMotionTotal](Group.md#getmotiontotal)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:633](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L633)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateMotionPath](../interfaces/IPen.md#__updatemotionpath)

#### Inherited from

[Group](Group.md).[__updateMotionPath](Group.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:637](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L637)

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

[IPen](../interfaces/IPen.md).[__runAnimation](../interfaces/IPen.md#__runanimation)

#### Inherited from

[Group](Group.md).[__runAnimation](Group.md#__runanimation)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:643](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L643)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateSortChildren](../interfaces/IPen.md#__updatesortchildren)

#### Inherited from

[Group](Group.md).[__updateSortChildren](Group.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:648](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L648)

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

[IPen](../interfaces/IPen.md).[dropTo](../interfaces/IPen.md#dropto)

#### Inherited from

[Group](Group.md).[dropTo](Group.md#dropto)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:656](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L656)

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

[IPen](../interfaces/IPen.md).[on](../interfaces/IPen.md#on)

#### Inherited from

[Group](Group.md).[on](Group.md#on)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:665](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L665)

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

[IPen](../interfaces/IPen.md).[off](../interfaces/IPen.md#off)

#### Inherited from

[Group](Group.md).[off](Group.md#off)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:667](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L667)

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

[IPen](../interfaces/IPen.md).[on_](../interfaces/IPen.md#on_)

#### Inherited from

[Group](Group.md).[on_](Group.md#on_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:669](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L669)

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

[IPen](../interfaces/IPen.md).[off_](../interfaces/IPen.md#off_)

#### Inherited from

[Group](Group.md).[off_](Group.md#off_)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:671](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L671)

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

[IPen](../interfaces/IPen.md).[once](../interfaces/IPen.md#once)

#### Inherited from

[Group](Group.md).[once](Group.md#once)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:673](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L673)

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

[IPen](../interfaces/IPen.md).[emit](../interfaces/IPen.md#emit)

#### Inherited from

[Group](Group.md).[emit](Group.md#emit)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:675](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L675)

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

[IPen](../interfaces/IPen.md).[emitEvent](../interfaces/IPen.md#emitevent)

#### Inherited from

[Group](Group.md).[emitEvent](Group.md#emitevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:677](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L677)

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

[IPen](../interfaces/IPen.md).[hasEvent](../interfaces/IPen.md#hasevent)

#### Inherited from

[Group](Group.md).[hasEvent](Group.md#hasevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:679](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L679)

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

[Group](Group.md).[changeAttr](Group.md#changeattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:683](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L683)

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

[Group](Group.md).[addAttr](Group.md#addattr)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:687](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L687)

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

[IPen](../interfaces/IPen.md).[__emitLifeEvent](../interfaces/IPen.md#__emitlifeevent)

#### Inherited from

[Group](Group.md).[__emitLifeEvent](Group.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/display/src/Leaf.ts:693](https://github.com/leaferjs/leafer/blob/1a69db7cc776a2ee0cebd0a53a728be7d8ec5467/packages/display/src/Leaf.ts#L693)

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

[IPen](../interfaces/IPen.md).[reset](../interfaces/IPen.md#reset)

#### Inherited from

[Group](Group.md).[reset](Group.md#reset)

#### Defined in

[src/ui/packages/display/src/Group.ts:35](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L35)

___

### \_\_setBranch

▸ **__setBranch**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[__setBranch](Group.md#__setbranch)

#### Defined in

[src/ui/packages/display/src/Group.ts:40](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L40)

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

[IPen](../interfaces/IPen.md).[set](../interfaces/IPen.md#set)

#### Inherited from

[Group](Group.md).[set](Group.md#set)

#### Defined in

[src/ui/packages/display/src/Group.ts:47](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L47)

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

[IPen](../interfaces/IPen.md).[toJSON](../interfaces/IPen.md#tojson)

#### Inherited from

[Group](Group.md).[toJSON](Group.md#tojson)

#### Defined in

[src/ui/packages/display/src/Group.ts:64](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L64)

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

[IPen](../interfaces/IPen.md).[pick](../interfaces/IPen.md#pick)

#### Inherited from

[Group](Group.md).[pick](Group.md#pick)

#### Defined in

[src/ui/packages/display/src/Group.ts:73](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L73)

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

[IPen](../interfaces/IPen.md).[addAt](../interfaces/IPen.md#addat)

#### Inherited from

[Group](Group.md).[addAt](Group.md#addat)

#### Defined in

[src/ui/packages/display/src/Group.ts:78](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L78)

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

[IPen](../interfaces/IPen.md).[addAfter](../interfaces/IPen.md#addafter)

#### Inherited from

[Group](Group.md).[addAfter](Group.md#addafter)

#### Defined in

[src/ui/packages/display/src/Group.ts:82](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L82)

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

[IPen](../interfaces/IPen.md).[addBefore](../interfaces/IPen.md#addbefore)

#### Inherited from

[Group](Group.md).[addBefore](Group.md#addbefore)

#### Defined in

[src/ui/packages/display/src/Group.ts:86](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L86)

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

[IPen](../interfaces/IPen.md).[add](../interfaces/IPen.md#add)

#### Inherited from

[Group](Group.md).[add](Group.md#add)

#### Defined in

[src/ui/packages/display/src/Group.ts:92](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L92)

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

[IPen](../interfaces/IPen.md).[addMany](../interfaces/IPen.md#addmany)

#### Inherited from

[Group](Group.md).[addMany](Group.md#addmany)

#### Defined in

[src/ui/packages/display/src/Group.ts:94](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L94)

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

[IPen](../interfaces/IPen.md).[remove](../interfaces/IPen.md#remove)

#### Inherited from

[Group](Group.md).[remove](Group.md#remove)

#### Defined in

[src/ui/packages/display/src/Group.ts:96](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L96)

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

[IPen](../interfaces/IPen.md).[removeAll](../interfaces/IPen.md#removeall)

#### Inherited from

[Group](Group.md).[removeAll](Group.md#removeall)

#### Defined in

[src/ui/packages/display/src/Group.ts:98](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L98)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[clear](../interfaces/IPen.md#clear)

#### Inherited from

[Group](Group.md).[clear](Group.md#clear)

#### Defined in

[src/ui/packages/display/src/Group.ts:100](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Group.ts#L100)

___

### setStyle

▸ **setStyle**(`data`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IPathInputData`](../interfaces/IPathInputData.md) |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Defined in

[src/ui/packages/display/src/Pen.ts:27](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L27)

___

### beginPath

▸ **beginPath**(): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[beginPath](../interfaces/IPen.md#beginpath)

#### Defined in

[src/ui/packages/display/src/Pen.ts:37](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L37)

___

### moveTo

▸ **moveTo**(`_x`, `_y`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[moveTo](../interfaces/IPen.md#moveto)

#### Defined in

[src/ui/packages/display/src/Pen.ts:39](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L39)

___

### lineTo

▸ **lineTo**(`_x`, `_y`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[lineTo](../interfaces/IPen.md#lineto)

#### Defined in

[src/ui/packages/display/src/Pen.ts:41](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L41)

___

### bezierCurveTo

▸ **bezierCurveTo**(`_x1`, `_y1`, `_x2`, `_y2`, `_x`, `_y`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x1` | `number` |
| `_y1` | `number` |
| `_x2` | `number` |
| `_y2` | `number` |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[bezierCurveTo](../interfaces/IPen.md#beziercurveto)

#### Defined in

[src/ui/packages/display/src/Pen.ts:43](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L43)

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`_x1`, `_y1`, `_x`, `_y`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x1` | `number` |
| `_y1` | `number` |
| `_x` | `number` |
| `_y` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[quadraticCurveTo](../interfaces/IPen.md#quadraticcurveto)

#### Defined in

[src/ui/packages/display/src/Pen.ts:45](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L45)

___

### closePath

▸ **closePath**(): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[closePath](../interfaces/IPen.md#closepath)

#### Defined in

[src/ui/packages/display/src/Pen.ts:47](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L47)

___

### rect

▸ **rect**(`_x`, `_y`, `_width`, `_height`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[rect](../interfaces/IPen.md#rect)

#### Defined in

[src/ui/packages/display/src/Pen.ts:52](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L52)

___

### roundRect

▸ **roundRect**(`_x`, `_y`, `_width`, `_height`, `_cornerRadius`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_width` | `number` |
| `_height` | `number` |
| `_cornerRadius` | `number` \| `number`[] |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[roundRect](../interfaces/IPen.md#roundrect)

#### Defined in

[src/ui/packages/display/src/Pen.ts:54](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L54)

___

### ellipse

▸ **ellipse**(`_x`, `_y`, `_radiusX`, `_radiusY`, `_rotation?`, `_startAngle?`, `_endAngle?`, `_anticlockwise?`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radiusX` | `number` |
| `_radiusY` | `number` |
| `_rotation?` | `number` |
| `_startAngle?` | `number` |
| `_endAngle?` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[ellipse](../interfaces/IPen.md#ellipse)

#### Defined in

[src/ui/packages/display/src/Pen.ts:56](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L56)

___

### arc

▸ **arc**(`_x`, `_y`, `_radius`, `_startAngle?`, `_endAngle?`, `_anticlockwise?`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radius` | `number` |
| `_startAngle?` | `number` |
| `_endAngle?` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[arc](../interfaces/IPen.md#arc)

#### Defined in

[src/ui/packages/display/src/Pen.ts:58](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L58)

___

### arcTo

▸ **arcTo**(`_x1`, `_y1`, `_x2`, `_y2`, `_radius`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x1` | `number` |
| `_y1` | `number` |
| `_x2` | `number` |
| `_y2` | `number` |
| `_radius` | `number` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[arcTo](../interfaces/IPen.md#arcto)

#### Defined in

[src/ui/packages/display/src/Pen.ts:60](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L60)

___

### drawEllipse

▸ **drawEllipse**(`_x`, `_y`, `_radiusX`, `_radiusY`, `_rotation?`, `_startAngle?`, `_endAngle?`, `_anticlockwise?`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radiusX` | `number` |
| `_radiusY` | `number` |
| `_rotation?` | `number` |
| `_startAngle?` | `number` |
| `_endAngle?` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[drawEllipse](../interfaces/IPen.md#drawellipse)

#### Defined in

[src/ui/packages/display/src/Pen.ts:65](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L65)

___

### drawArc

▸ **drawArc**(`_x`, `_y`, `_radius`, `_startAngle?`, `_endAngle?`, `_anticlockwise?`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_x` | `number` |
| `_y` | `number` |
| `_radius` | `number` |
| `_startAngle?` | `number` |
| `_endAngle?` | `number` |
| `_anticlockwise?` | `boolean` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[drawArc](../interfaces/IPen.md#drawarc)

#### Defined in

[src/ui/packages/display/src/Pen.ts:67](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L67)

___

### drawPoints

▸ **drawPoints**(`_points`, `_curve?`, `_close?`): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_points` | `number`[] \| [`IPointData`](../interfaces/IPointData.md)[] |
| `_curve?` | `number` \| `boolean` |
| `_close?` | `boolean` |

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[drawPoints](../interfaces/IPen.md#drawpoints)

#### Defined in

[src/ui/packages/display/src/Pen.ts:69](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L69)

___

### clearPath

▸ **clearPath**(): [`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Returns

[`Pen`](Pen.md)\<[`IPenInputData`](../interfaces/IPenInputData.md)\>

#### Implementation of

[IPen](../interfaces/IPen.md).[clearPath](../interfaces/IPen.md#clearpath)

#### Defined in

[src/ui/packages/display/src/Pen.ts:71](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L71)

___

### paint

▸ **paint**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[paint](../interfaces/IPen.md#paint)

#### Defined in

[src/ui/packages/display/src/Pen.ts:74](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/Pen.ts#L74)

___

### get

▸ **get**\<`K`\>(`name?`): [`IUIInputData`](../interfaces/IUIInputData.md) \| [`Pen`](Pen.md)\<`TInputData`\>[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`Pen`](Pen.md)\<`TInputData`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | [`IUIInputData`](../interfaces/IUIInputData.md) \| `K` \| `K`[] |

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md) \| [`Pen`](Pen.md)\<`TInputData`\>[`K`]

#### Implementation of

[IPen](../interfaces/IPen.md).[get](../interfaces/IPen.md#get)

#### Inherited from

[Group](Group.md).[get](Group.md#get)

#### Defined in

[src/ui/packages/display/src/UI.ts:418](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L418)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IPen](../interfaces/IPen.md).[createProxyData](../interfaces/IPen.md#createproxydata)

#### Inherited from

[Group](Group.md).[createProxyData](Group.md#createproxydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:422](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L422)

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

[IPen](../interfaces/IPen.md).[find](../interfaces/IPen.md#find)

#### Inherited from

[Group](Group.md).[find](Group.md#find)

#### Defined in

[src/ui/packages/display/src/UI.ts:427](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L427)

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

[IPen](../interfaces/IPen.md).[findTag](../interfaces/IPen.md#findtag)

#### Inherited from

[Group](Group.md).[findTag](Group.md#findtag)

#### Defined in

[src/ui/packages/display/src/UI.ts:429](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L429)

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

[IPen](../interfaces/IPen.md).[findOne](../interfaces/IPen.md#findone)

#### Inherited from

[Group](Group.md).[findOne](Group.md#findone)

#### Defined in

[src/ui/packages/display/src/UI.ts:431](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L431)

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

[IPen](../interfaces/IPen.md).[findId](../interfaces/IPen.md#findid)

#### Inherited from

[Group](Group.md).[findId](Group.md#findid)

#### Defined in

[src/ui/packages/display/src/UI.ts:433](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L433)

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

[IPen](../interfaces/IPen.md).[getPath](../interfaces/IPen.md#getpath)

#### Inherited from

[Group](Group.md).[getPath](Group.md#getpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:438](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L438)

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

[IPen](../interfaces/IPen.md).[getPathString](../interfaces/IPen.md#getpathstring)

#### Inherited from

[Group](Group.md).[getPathString](Group.md#getpathstring)

#### Defined in

[src/ui/packages/display/src/UI.ts:445](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L445)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[load](../interfaces/IPen.md#load)

#### Inherited from

[Group](Group.md).[load](Group.md#load)

#### Defined in

[src/ui/packages/display/src/UI.ts:450](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L450)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__onUpdateSize](../interfaces/IPen.md#__onupdatesize)

#### Inherited from

[Group](Group.md).[__onUpdateSize](Group.md#__onupdatesize)

#### Defined in

[src/ui/packages/display/src/UI.ts:454](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L454)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[__updateRenderPath](../interfaces/IPen.md#__updaterenderpath)

#### Inherited from

[Group](Group.md).[__updateRenderPath](Group.md#__updaterenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:461](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L461)

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

[IPen](../interfaces/IPen.md).[__drawRenderPath](../interfaces/IPen.md#__drawrenderpath)

#### Inherited from

[Group](Group.md).[__drawRenderPath](Group.md#__drawrenderpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:469](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L469)

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

[IPen](../interfaces/IPen.md).[__drawPath](../interfaces/IPen.md#__drawpath)

#### Inherited from

[Group](Group.md).[__drawPath](Group.md#__drawpath)

#### Defined in

[src/ui/packages/display/src/UI.ts:474](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L474)

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

[IPen](../interfaces/IPen.md).[__drawPathByData](../interfaces/IPen.md#__drawpathbydata)

#### Inherited from

[Group](Group.md).[__drawPathByData](Group.md#__drawpathbydata)

#### Defined in

[src/ui/packages/display/src/UI.ts:479](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L479)

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

[IPen](../interfaces/IPen.md).[__drawPathByBox](../interfaces/IPen.md#__drawpathbybox)

#### Inherited from

[Group](Group.md).[__drawPathByBox](Group.md#__drawpathbybox)

#### Defined in

[src/ui/packages/display/src/UI.ts:483](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L483)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`_paint`, `canvas`, `renderOptions`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_paint` | [`ILeafPaint`](../interfaces/ILeafPaint.md) |
| `canvas` | [`ILeaferCanvas`](../interfaces/ILeaferCanvas.md) |
| `renderOptions` | [`IRenderOptions`](../interfaces/IRenderOptions.md) |

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[drawImagePlaceholder](../interfaces/IPen.md#drawimageplaceholder)

#### Inherited from

[Group](Group.md).[drawImagePlaceholder](Group.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/display/src/UI.ts:491](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L491)

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

[IPen](../interfaces/IPen.md).[animate](../interfaces/IPen.md#animate)

#### Inherited from

[Group](Group.md).[animate](Group.md#animate)

#### Defined in

[src/ui/packages/display/src/UI.ts:497](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L497)

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

[IPen](../interfaces/IPen.md).[killAnimate](../interfaces/IPen.md#killanimate)

#### Inherited from

[Group](Group.md).[killAnimate](Group.md#killanimate)

#### Defined in

[src/ui/packages/display/src/UI.ts:502](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L502)

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

[IPen](../interfaces/IPen.md).[export](../interfaces/IPen.md#export)

#### Inherited from

[Group](Group.md).[export](Group.md#export)

#### Defined in

[src/ui/packages/display/src/UI.ts:508](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L508)

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

[IPen](../interfaces/IPen.md).[syncExport](../interfaces/IPen.md#syncexport)

#### Inherited from

[Group](Group.md).[syncExport](Group.md#syncexport)

#### Defined in

[src/ui/packages/display/src/UI.ts:512](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L512)

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

[IPen](../interfaces/IPen.md).[clone](../interfaces/IPen.md#clone)

#### Inherited from

[Group](Group.md).[clone](Group.md#clone)

#### Defined in

[src/ui/packages/display/src/UI.ts:516](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L516)

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

[Group](Group.md).[one](Group.md#one)

#### Defined in

[src/ui/packages/display/src/UI.ts:523](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L523)

___

### registerUI

▸ **registerUI**(): `void`

#### Returns

`void`

#### Inherited from

[Group](Group.md).[registerUI](Group.md#registerui)

#### Defined in

[src/ui/packages/display/src/UI.ts:527](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L527)

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

[Group](Group.md).[registerData](Group.md#registerdata)

#### Defined in

[src/ui/packages/display/src/UI.ts:531](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L531)

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

[Group](Group.md).[setEditConfig](Group.md#seteditconfig)

#### Defined in

[src/ui/packages/display/src/UI.ts:538](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L538)

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

[Group](Group.md).[setEditOuter](Group.md#seteditouter)

#### Defined in

[src/ui/packages/display/src/UI.ts:540](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L540)

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

[Group](Group.md).[setEditInner](Group.md#seteditinner)

#### Defined in

[src/ui/packages/display/src/UI.ts:542](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L542)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IPen](../interfaces/IPen.md).[destroy](../interfaces/IPen.md#destroy)

#### Inherited from

[Group](Group.md).[destroy](Group.md#destroy)

#### Defined in

[src/ui/packages/display/src/UI.ts:545](https://github.com/leaferjs/leafer-ui/blob/b5eb335acea683828e327fdd8e99d7a5a65f3c1d/packages/display/src/UI.ts#L545)
