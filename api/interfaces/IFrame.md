# Interface: IFrame

## Hierarchy

- [`IBox`](IBox.md)

  ↳ **`IFrame`**

## Implemented by

- [`Frame`](../classes/Frame.md)

## Table of contents

### Properties

- [id](IFrame.md#id)
- [name](IFrame.md#name)
- [className](IFrame.md#classname)
- [blendMode](IFrame.md#blendmode)
- [opacity](IFrame.md#opacity)
- [visible](IFrame.md#visible)
- [selected](IFrame.md#selected)
- [disabled](IFrame.md#disabled)
- [locked](IFrame.md#locked)
- [zIndex](IFrame.md#zindex)
- [dim](IFrame.md#dim)
- [dimskip](IFrame.md#dimskip)
- [mask](IFrame.md#mask)
- [eraser](IFrame.md#eraser)
- [filter](IFrame.md#filter)
- [x](IFrame.md#x)
- [y](IFrame.md#y)
- [width](IFrame.md#width)
- [height](IFrame.md#height)
- [scaleX](IFrame.md#scalex)
- [scaleY](IFrame.md#scaley)
- [rotation](IFrame.md#rotation)
- [skewX](IFrame.md#skewx)
- [skewY](IFrame.md#skewy)
- [scale](IFrame.md#scale)
- [offsetX](IFrame.md#offsetx)
- [offsetY](IFrame.md#offsety)
- [scrollX](IFrame.md#scrollx)
- [scrollY](IFrame.md#scrolly)
- [origin](IFrame.md#origin)
- [around](IFrame.md#around)
- [lazy](IFrame.md#lazy)
- [pixelRatio](IFrame.md#pixelratio)
- [path](IFrame.md#path)
- [windingRule](IFrame.md#windingrule)
- [closed](IFrame.md#closed)
- [flow](IFrame.md#flow)
- [padding](IFrame.md#padding)
- [gap](IFrame.md#gap)
- [flowAlign](IFrame.md#flowalign)
- [flowWrap](IFrame.md#flowwrap)
- [itemBox](IFrame.md#itembox)
- [inFlow](IFrame.md#inflow)
- [autoWidth](IFrame.md#autowidth)
- [autoHeight](IFrame.md#autoheight)
- [lockRatio](IFrame.md#lockratio)
- [autoBox](IFrame.md#autobox)
- [widthRange](IFrame.md#widthrange)
- [heightRange](IFrame.md#heightrange)
- [draggable](IFrame.md#draggable)
- [dragBounds](IFrame.md#dragbounds)
- [editable](IFrame.md#editable)
- [hittable](IFrame.md#hittable)
- [hitFill](IFrame.md#hitfill)
- [hitStroke](IFrame.md#hitstroke)
- [hitBox](IFrame.md#hitbox)
- [hitChildren](IFrame.md#hitchildren)
- [hitSelf](IFrame.md#hitself)
- [hitRadius](IFrame.md#hitradius)
- [button](IFrame.md#button)
- [cursor](IFrame.md#cursor)
- [motionPath](IFrame.md#motionpath)
- [motionPrecision](IFrame.md#motionprecision)
- [motion](IFrame.md#motion)
- [motionRotation](IFrame.md#motionrotation)
- [normalStyle](IFrame.md#normalstyle)
- [event](IFrame.md#event)
- [data](IFrame.md#data)
- [tag](IFrame.md#tag)
- [\_\_tag](IFrame.md#__tag)
- [innerName](IFrame.md#innername)
- [\_\_DataProcessor](IFrame.md#__dataprocessor)
- [\_\_LayoutProcessor](IFrame.md#__layoutprocessor)
- [leaferIsCreated](IFrame.md#leaferiscreated)
- [leaferIsReady](IFrame.md#leaferisready)
- [isApp](IFrame.md#isapp)
- [isLeafer](IFrame.md#isleafer)
- [isBranch](IFrame.md#isbranch)
- [isBranchLeaf](IFrame.md#isbranchleaf)
- [isOutside](IFrame.md#isoutside)
- [syncEventer](IFrame.md#synceventer)
- [lockNormalStyle](IFrame.md#locknormalstyle)
- [\_\_layout](IFrame.md#__layout)
- [\_\_world](IFrame.md#__world)
- [\_\_local](IFrame.md#__local)
- [\_\_nowWorld](IFrame.md#__nowworld)
- [\_\_cameraWorld](IFrame.md#__cameraworld)
- [\_\_localMatrix](IFrame.md#__localmatrix)
- [\_\_localBoxBounds](IFrame.md#__localboxbounds)
- [\_\_worldOpacity](IFrame.md#__worldopacity)
- [worldTransform](IFrame.md#worldtransform)
- [localTransform](IFrame.md#localtransform)
- [boxBounds](IFrame.md#boxbounds)
- [renderBounds](IFrame.md#renderbounds)
- [worldBoxBounds](IFrame.md#worldboxbounds)
- [worldStrokeBounds](IFrame.md#worldstrokebounds)
- [worldRenderBounds](IFrame.md#worldrenderbounds)
- [worldOpacity](IFrame.md#worldopacity)
- [\_\_level](IFrame.md#__level)
- [\_\_tempNumber](IFrame.md#__tempnumber)
- [\_\_worldFlipped](IFrame.md#__worldflipped)
- [\_\_hasAutoLayout](IFrame.md#__hasautolayout)
- [\_\_hasMotionPath](IFrame.md#__hasmotionpath)
- [\_\_hasMask](IFrame.md#__hasmask)
- [\_\_hasEraser](IFrame.md#__haseraser)
- [\_\_hitCanvas](IFrame.md#__hitcanvas)
- [\_\_flowBounds](IFrame.md#__flowbounds)
- [\_\_widthGrow](IFrame.md#__widthgrow)
- [\_\_heightGrow](IFrame.md#__heightgrow)
- [\_\_hasGrow](IFrame.md#__hasgrow)
- [\_\_onlyHitMask](IFrame.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IFrame.md#__ignorehitworld)
- [\_\_inLazyBounds](IFrame.md#__inlazybounds)
- [pathInputed](IFrame.md#pathinputed)
- [destroyed](IFrame.md#destroyed)
- [innerId](IFrame.md#innerid)
- [\_\_captureMap](IFrame.md#__capturemap)
- [\_\_bubbleMap](IFrame.md#__bubblemap)
- [cornerRadius](IFrame.md#cornerradius)
- [cornerSmoothing](IFrame.md#cornersmoothing)
- [fill](IFrame.md#fill)
- [stroke](IFrame.md#stroke)
- [strokeAlign](IFrame.md#strokealign)
- [strokeWidth](IFrame.md#strokewidth)
- [strokeWidthFixed](IFrame.md#strokewidthfixed)
- [strokeCap](IFrame.md#strokecap)
- [strokeJoin](IFrame.md#strokejoin)
- [dashPattern](IFrame.md#dashpattern)
- [dashOffset](IFrame.md#dashoffset)
- [miterLimit](IFrame.md#miterlimit)
- [startArrow](IFrame.md#startarrow)
- [endArrow](IFrame.md#endarrow)
- [shadow](IFrame.md#shadow)
- [innerShadow](IFrame.md#innershadow)
- [blur](IFrame.md#blur)
- [backgroundBlur](IFrame.md#backgroundblur)
- [grayscale](IFrame.md#grayscale)
- [\_\_](IFrame.md#__)
- [overflow](IFrame.md#overflow)
- [resizeChildren](IFrame.md#resizechildren)
- [textBox](IFrame.md#textbox)
- [children](IFrame.md#children)
- [app](IFrame.md#app)
- [leafer](IFrame.md#leafer)
- [parent](IFrame.md#parent)
- [zoomLayer](IFrame.md#zoomlayer)
- [isFrame](IFrame.md#isframe)
- [isOverflow](IFrame.md#isoverflow)
- [proxyData](IFrame.md#proxydata)
- [\_\_proxyData](IFrame.md#__proxydata)
- [animation](IFrame.md#animation)
- [animationOut](IFrame.md#animationout)
- [\_\_box](IFrame.md#__box)
- [\_\_animate](IFrame.md#__animate)
- [pen](IFrame.md#pen)
- [transition](IFrame.md#transition)
- [transitionOut](IFrame.md#transitionout)
- [states](IFrame.md#states)
- [state](IFrame.md#state)
- [hoverStyle](IFrame.md#hoverstyle)
- [pressStyle](IFrame.md#pressstyle)
- [focusStyle](IFrame.md#focusstyle)
- [selectedStyle](IFrame.md#selectedstyle)
- [disabledStyle](IFrame.md#disabledstyle)
- [placeholderStyle](IFrame.md#placeholderstyle)
- [placeholderColor](IFrame.md#placeholdercolor)
- [editConfig](IFrame.md#editconfig)
- [editOuter](IFrame.md#editouter)
- [editInner](IFrame.md#editinner)

### Methods

- [resetCustom](IFrame.md#resetcustom)
- [waitParent](IFrame.md#waitparent)
- [waitLeafer](IFrame.md#waitleafer)
- [nextRender](IFrame.md#nextrender)
- [removeNextRender](IFrame.md#removenextrender)
- [\_\_bindLeafer](IFrame.md#__bindleafer)
- [setAttr](IFrame.md#setattr)
- [getAttr](IFrame.md#getattr)
- [getComputedAttr](IFrame.md#getcomputedattr)
- [toString](IFrame.md#tostring)
- [toSVG](IFrame.md#tosvg)
- [\_\_SVG](IFrame.md#__svg)
- [toHTML](IFrame.md#tohtml)
- [\_\_setAttr](IFrame.md#__setattr)
- [\_\_getAttr](IFrame.md#__getattr)
- [setProxyAttr](IFrame.md#setproxyattr)
- [getProxyAttr](IFrame.md#getproxyattr)
- [focus](IFrame.md#focus)
- [updateState](IFrame.md#updatestate)
- [updateLayout](IFrame.md#updatelayout)
- [forceUpdate](IFrame.md#forceupdate)
- [forceRender](IFrame.md#forcerender)
- [\_\_extraUpdate](IFrame.md#__extraupdate)
- [\_\_updateWorldMatrix](IFrame.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IFrame.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IFrame.md#__updateworldbounds)
- [\_\_updateLocalBounds](IFrame.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IFrame.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IFrame.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IFrame.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IFrame.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IFrame.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IFrame.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IFrame.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IFrame.md#__updateautolayout)
- [\_\_updateFlowLayout](IFrame.md#__updateflowlayout)
- [\_\_updateNaturalSize](IFrame.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IFrame.md#__updatestrokespread)
- [\_\_updateRenderSpread](IFrame.md#__updaterenderspread)
- [\_\_onUpdateSize](IFrame.md#__onupdatesize)
- [\_\_updateEraser](IFrame.md#__updateeraser)
- [\_\_updateMask](IFrame.md#__updatemask)
- [\_\_renderMask](IFrame.md#__rendermask)
- [\_\_renderEraser](IFrame.md#__rendereraser)
- [\_\_getNowWorld](IFrame.md#__getnowworld)
- [getTransform](IFrame.md#gettransform)
- [getBounds](IFrame.md#getbounds)
- [getLayoutBounds](IFrame.md#getlayoutbounds)
- [getLayoutPoints](IFrame.md#getlayoutpoints)
- [getWorldBounds](IFrame.md#getworldbounds)
- [worldToLocal](IFrame.md#worldtolocal)
- [localToWorld](IFrame.md#localtoworld)
- [worldToInner](IFrame.md#worldtoinner)
- [innerToWorld](IFrame.md#innertoworld)
- [getBoxPoint](IFrame.md#getboxpoint)
- [getBoxPointByInner](IFrame.md#getboxpointbyinner)
- [getInnerPoint](IFrame.md#getinnerpoint)
- [getInnerPointByBox](IFrame.md#getinnerpointbybox)
- [getInnerPointByLocal](IFrame.md#getinnerpointbylocal)
- [getLocalPoint](IFrame.md#getlocalpoint)
- [getLocalPointByInner](IFrame.md#getlocalpointbyinner)
- [getPagePoint](IFrame.md#getpagepoint)
- [getWorldPoint](IFrame.md#getworldpoint)
- [getWorldPointByBox](IFrame.md#getworldpointbybox)
- [getWorldPointByLocal](IFrame.md#getworldpointbylocal)
- [getWorldPointByPage](IFrame.md#getworldpointbypage)
- [setTransform](IFrame.md#settransform)
- [transform](IFrame.md#transform)
- [move](IFrame.md#move)
- [moveInner](IFrame.md#moveinner)
- [scaleOf](IFrame.md#scaleof)
- [rotateOf](IFrame.md#rotateof)
- [skewOf](IFrame.md#skewof)
- [transformWorld](IFrame.md#transformworld)
- [moveWorld](IFrame.md#moveworld)
- [scaleOfWorld](IFrame.md#scaleofworld)
- [rotateOfWorld](IFrame.md#rotateofworld)
- [skewOfWorld](IFrame.md#skewofworld)
- [flip](IFrame.md#flip)
- [scaleResize](IFrame.md#scaleresize)
- [\_\_scaleResize](IFrame.md#__scaleresize)
- [resizeWidth](IFrame.md#resizewidth)
- [resizeHeight](IFrame.md#resizeheight)
- [\_\_hitWorld](IFrame.md#__hitworld)
- [\_\_hit](IFrame.md#__hit)
- [\_\_hitFill](IFrame.md#__hitfill)
- [\_\_hitStroke](IFrame.md#__hitstroke)
- [\_\_hitPixel](IFrame.md#__hitpixel)
- [\_\_drawHitPath](IFrame.md#__drawhitpath)
- [\_\_updateHitCanvas](IFrame.md#__updatehitcanvas)
- [\_\_render](IFrame.md#__render)
- [\_\_drawFast](IFrame.md#__drawfast)
- [\_\_draw](IFrame.md#__draw)
- [\_\_clip](IFrame.md#__clip)
- [\_\_renderShape](IFrame.md#__rendershape)
- [\_\_updateWorldOpacity](IFrame.md#__updateworldopacity)
- [\_\_updateChange](IFrame.md#__updatechange)
- [\_\_drawPath](IFrame.md#__drawpath)
- [\_\_drawRenderPath](IFrame.md#__drawrenderpath)
- [\_\_updatePath](IFrame.md#__updatepath)
- [\_\_updateRenderPath](IFrame.md#__updaterenderpath)
- [getMotionPathData](IFrame.md#getmotionpathdata)
- [getMotionPoint](IFrame.md#getmotionpoint)
- [getMotionTotal](IFrame.md#getmotiontotal)
- [\_\_updateMotionPath](IFrame.md#__updatemotionpath)
- [\_\_runAnimation](IFrame.md#__runanimation)
- [\_\_emitLifeEvent](IFrame.md#__emitlifeevent)
- [\_\_updateSortChildren](IFrame.md#__updatesortchildren)
- [dropTo](IFrame.md#dropto)
- [\_\_realSetAttr](IFrame.md#__realsetattr)
- [destroyEventer](IFrame.md#destroyeventer)
- [on](IFrame.md#on)
- [off](IFrame.md#off)
- [on\_](IFrame.md#on_)
- [off\_](IFrame.md#off_)
- [once](IFrame.md#once)
- [emit](IFrame.md#emit)
- [emitEvent](IFrame.md#emitevent)
- [hasEvent](IFrame.md#hasevent)
- [destroy](IFrame.md#destroy)
- [\_\_updateRectRenderBounds](IFrame.md#__updaterectrenderbounds)
- [\_\_renderGroup](IFrame.md#__rendergroup)
- [pick](IFrame.md#pick)
- [add](IFrame.md#add)
- [addAt](IFrame.md#addat)
- [addAfter](IFrame.md#addafter)
- [addBefore](IFrame.md#addbefore)
- [addMany](IFrame.md#addmany)
- [remove](IFrame.md#remove)
- [removeAll](IFrame.md#removeall)
- [clear](IFrame.md#clear)
- [reset](IFrame.md#reset)
- [set](IFrame.md#set)
- [toJSON](IFrame.md#tojson)
- [get](IFrame.md#get)
- [createProxyData](IFrame.md#createproxydata)
- [find](IFrame.md#find)
- [findTag](IFrame.md#findtag)
- [findOne](IFrame.md#findone)
- [findId](IFrame.md#findid)
- [getPath](IFrame.md#getpath)
- [getPathString](IFrame.md#getpathstring)
- [load](IFrame.md#load)
- [\_\_drawPathByData](IFrame.md#__drawpathbydata)
- [\_\_drawPathByBox](IFrame.md#__drawpathbybox)
- [\_\_drawAfterFill](IFrame.md#__drawafterfill)
- [\_\_drawContent](IFrame.md#__drawcontent)
- [drawImagePlaceholder](IFrame.md#drawimageplaceholder)
- [animate](IFrame.md#animate)
- [killAnimate](IFrame.md#killanimate)
- [export](IFrame.md#export)
- [syncExport](IFrame.md#syncexport)
- [clone](IFrame.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IBox](IBox.md).[id](IBox.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L217)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBox](IBox.md).[name](IBox.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L218)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBox](IBox.md).[className](IBox.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:219](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L219)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBox](IBox.md).[blendMode](IBox.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L221)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBox](IBox.md).[opacity](IBox.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L223)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBox](IBox.md).[visible](IBox.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L224)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBox](IBox.md).[selected](IBox.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L225)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBox](IBox.md).[disabled](IBox.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L226)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBox](IBox.md).[locked](IBox.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L227)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBox](IBox.md).[zIndex](IBox.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L228)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IBox](IBox.md).[dim](IBox.md#dim)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L230)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IBox](IBox.md).[dimskip](IBox.md#dimskip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L231)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBox](IBox.md).[mask](IBox.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L233)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBox](IBox.md).[eraser](IBox.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L234)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IBox](IBox.md).[filter](IBox.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L235)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBox](IBox.md).[x](IBox.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L238)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBox](IBox.md).[y](IBox.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L239)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBox](IBox.md).[width](IBox.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L240)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBox](IBox.md).[height](IBox.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L241)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBox](IBox.md).[scaleX](IBox.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:242](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L242)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBox](IBox.md).[scaleY](IBox.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L243)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBox](IBox.md).[rotation](IBox.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L244)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBox](IBox.md).[skewX](IBox.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L245)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBox](IBox.md).[skewY](IBox.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L246)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[scale](IBox.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L248)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBox](IBox.md).[offsetX](IBox.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L250)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBox](IBox.md).[offsetY](IBox.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L251)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBox](IBox.md).[scrollX](IBox.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L252)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBox](IBox.md).[scrollY](IBox.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L253)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBox](IBox.md).[origin](IBox.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:255](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L255)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBox](IBox.md).[around](IBox.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L256)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBox](IBox.md).[lazy](IBox.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L258)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBox](IBox.md).[pixelRatio](IBox.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L259)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IBox](IBox.md).[path](IBox.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L261)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBox](IBox.md).[windingRule](IBox.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L262)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBox](IBox.md).[closed](IBox.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L263)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBox](IBox.md).[flow](IBox.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L266)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[padding](IBox.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L267)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBox](IBox.md).[gap](IBox.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L268)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBox](IBox.md).[flowAlign](IBox.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L269)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBox](IBox.md).[flowWrap](IBox.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L270)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBox](IBox.md).[itemBox](IBox.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L271)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBox](IBox.md).[inFlow](IBox.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:273](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L273)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBox](IBox.md).[autoWidth](IBox.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L274)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBox](IBox.md).[autoHeight](IBox.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L275)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBox](IBox.md).[lockRatio](IBox.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L276)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBox](IBox.md).[autoBox](IBox.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L277)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBox](IBox.md).[widthRange](IBox.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L279)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBox](IBox.md).[heightRange](IBox.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:280](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L280)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBox](IBox.md).[draggable](IBox.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L283)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[dragBounds](IBox.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L284)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBox](IBox.md).[editable](IBox.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L286)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBox](IBox.md).[hittable](IBox.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L288)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBox](IBox.md).[hitFill](IBox.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L289)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBox](IBox.md).[hitStroke](IBox.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:290](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L290)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitBox](IBox.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L291)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitChildren](IBox.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L292)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitSelf](IBox.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L293)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBox](IBox.md).[hitRadius](IBox.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L294)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBox](IBox.md).[button](IBox.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:296](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L296)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBox](IBox.md).[cursor](IBox.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L297)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBox](IBox.md).[motionPath](IBox.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L299)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBox](IBox.md).[motionPrecision](IBox.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L300)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBox](IBox.md).[motion](IBox.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L302)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBox](IBox.md).[motionRotation](IBox.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L303)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[normalStyle](IBox.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L305)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IBox](IBox.md).[event](IBox.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:307](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L307)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[data](IBox.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:310](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L310)

___

### tag

• **tag**: `string`

#### Inherited from

[IBox](IBox.md).[tag](IBox.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L438)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IBox](IBox.md).[__tag](IBox.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:439](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L439)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IBox](IBox.md).[innerName](IBox.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:440](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L440)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[__DataProcessor](IBox.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:442](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L442)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[__LayoutProcessor](IBox.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:443](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L443)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IBox](IBox.md).[leaferIsCreated](IBox.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L450)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IBox](IBox.md).[leaferIsReady](IBox.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L451)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IBox](IBox.md).[isApp](IBox.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L453)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IBox](IBox.md).[isLeafer](IBox.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L454)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IBox](IBox.md).[isBranch](IBox.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:455](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L455)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IBox](IBox.md).[isBranchLeaf](IBox.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L456)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IBox](IBox.md).[isOutside](IBox.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L457)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IBox](IBox.md).[syncEventer](IBox.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L464)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IBox](IBox.md).[lockNormalStyle](IBox.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IBox](IBox.md).[__layout](IBox.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__world](IBox.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L469)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__local](IBox.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__nowWorld](IBox.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:472](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L472)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__cameraWorld](IBox.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L473)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IBox](IBox.md).[__localMatrix](IBox.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L475)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__localBoxBounds](IBox.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L476)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IBox](IBox.md).[__worldOpacity](IBox.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L478)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IBox](IBox.md).[worldTransform](IBox.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L480)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IBox](IBox.md).[localTransform](IBox.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L481)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[boxBounds](IBox.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L483)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[renderBounds](IBox.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L484)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldBoxBounds](IBox.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:485](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L485)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldStrokeBounds](IBox.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L486)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldRenderBounds](IBox.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L487)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IBox](IBox.md).[worldOpacity](IBox.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IBox](IBox.md).[__level](IBox.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:491](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L491)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IBox](IBox.md).[__tempNumber](IBox.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L492)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IBox](IBox.md).[__worldFlipped](IBox.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasAutoLayout](IBox.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasMotionPath](IBox.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L500)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasMask](IBox.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasEraser](IBox.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IBox](IBox.md).[__hitCanvas](IBox.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__flowBounds](IBox.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IBox](IBox.md).[__widthGrow](IBox.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IBox](IBox.md).[__heightGrow](IBox.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasGrow](IBox.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IBox](IBox.md).[__onlyHitMask](IBox.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IBox](IBox.md).[__ignoreHitWorld](IBox.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L512)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IBox](IBox.md).[__inLazyBounds](IBox.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:513](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L513)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IBox](IBox.md).[pathInputed](IBox.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L515)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IBox](IBox.md).[destroyed](IBox.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L517)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IBox](IBox.md).[innerId](IBox.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IBox](IBox.md).[__captureMap](IBox.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IBox](IBox.md).[__bubbleMap](IBox.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L41)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[cornerRadius](IBox.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBox](IBox.md).[cornerSmoothing](IBox.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IBox](IBox.md).[fill](IBox.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IBox](IBox.md).[stroke](IBox.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBox](IBox.md).[strokeAlign](IBox.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[strokeWidth](IBox.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IBox](IBox.md).[strokeWidthFixed](IBox.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBox](IBox.md).[strokeCap](IBox.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBox](IBox.md).[strokeJoin](IBox.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IBox](IBox.md).[dashPattern](IBox.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBox](IBox.md).[dashOffset](IBox.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBox](IBox.md).[miterLimit](IBox.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBox](IBox.md).[startArrow](IBox.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBox](IBox.md).[endArrow](IBox.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBox](IBox.md).[shadow](IBox.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBox](IBox.md).[innerShadow](IBox.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBox](IBox.md).[blur](IBox.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBox](IBox.md).[backgroundBlur](IBox.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IBox](IBox.md).[grayscale](IBox.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IFrameData`](IFrameData.md)

#### Overrides

[IBox](IBox.md).[__](IBox.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:329](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L329)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBox](IBox.md).[overflow](IBox.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:347](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L347)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBox](IBox.md).[resizeChildren](IBox.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:348](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L348)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBox](IBox.md).[textBox](IBox.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:349](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L349)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IBox](IBox.md).[children](IBox.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:358](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L358)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IBox](IBox.md).[app](IBox.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L376)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IBox](IBox.md).[leafer](IBox.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L377)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IBox](IBox.md).[parent](IBox.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:378](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L378)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IBox](IBox.md).[zoomLayer](IBox.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L379)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IBox](IBox.md).[isFrame](IBox.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L380)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IBox](IBox.md).[isOverflow](IBox.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L381)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[proxyData](IBox.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:383](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L383)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[__proxyData](IBox.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L384)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBox](IBox.md).[animation](IBox.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L386)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBox](IBox.md).[animationOut](IBox.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L387)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IBox](IBox.md).[__box](IBox.md#__box)

#### Defined in

[ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L391)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IBox](IBox.md).[__animate](IBox.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L392)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IBox](IBox.md).[pen](IBox.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L394)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBox](IBox.md).[transition](IBox.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L447)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBox](IBox.md).[transitionOut](IBox.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L448)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBox](IBox.md).[states](IBox.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:450](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L450)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBox](IBox.md).[state](IBox.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:451](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L451)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[hoverStyle](IBox.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:453](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L453)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[pressStyle](IBox.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:454](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L454)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[focusStyle](IBox.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L455)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[selectedStyle](IBox.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L456)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[disabledStyle](IBox.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:457](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L457)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[placeholderStyle](IBox.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L458)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IBox](IBox.md).[placeholderColor](IBox.md#placeholdercolor)

#### Defined in

[ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L459)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBox](IBox.md).[editConfig](IBox.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L461)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IBox](IBox.md).[editOuter](IBox.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L462)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IBox](IBox.md).[editInner](IBox.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L463)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[resetCustom](IBox.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L520)

___

### waitParent

▸ **waitParent**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[waitParent](IBox.md#waitparent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L522)

___

### waitLeafer

▸ **waitLeafer**(`item`, `bind?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[waitLeafer](IBox.md#waitleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L523)

___

### nextRender

▸ **nextRender**(`item`, `bind?`, `off?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `off?` | ``"off"`` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[nextRender](IBox.md#nextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L524)

___

### removeNextRender

▸ **removeNextRender**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[removeNextRender](IBox.md#removenextrender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L525)

___

### \_\_bindLeafer

▸ **__bindLeafer**(`leafer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `leafer` | [`ILeaferBase`](ILeaferBase.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__bindLeafer](IBox.md#__bindleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L527)

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

#### Inherited from

[IBox](IBox.md).[setAttr](IBox.md#setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L531)

___

### getAttr

▸ **getAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IBox](IBox.md).[getAttr](IBox.md#getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L532)

___

### getComputedAttr

▸ **getComputedAttr**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`any`

#### Inherited from

[IBox](IBox.md).[getComputedAttr](IBox.md#getcomputedattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L533)

___

### toString

▸ **toString**(`options?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[toString](IBox.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:536](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L536)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[toSVG](IBox.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L537)

___

### \_\_SVG

▸ **__SVG**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IObject`](IObject.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__SVG](IBox.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:538](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L538)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[toHTML](IBox.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:539](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L539)

___

### \_\_setAttr

▸ **__setAttr**(`attrName`, `newValue`, `checkFiniteNumber?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |
| `checkFiniteNumber?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__setAttr](IBox.md#__setattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L545)

___

### \_\_getAttr

▸ **__getAttr**(`attrName`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[IBox](IBox.md).[__getAttr](IBox.md#__getattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:546](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L546)

___

### setProxyAttr

▸ **setProxyAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[setProxyAttr](IBox.md#setproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L547)

___

### getProxyAttr

▸ **getProxyAttr**(`name`): [`IValue`](../modules.md#ivalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IValue`](../modules.md#ivalue)

#### Inherited from

[IBox](IBox.md).[getProxyAttr](IBox.md#getproxyattr)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:548](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L548)

___

### focus

▸ **focus**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[focus](IBox.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L556)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[updateState](IBox.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L558)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[updateLayout](IBox.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L559)

___

### forceUpdate

▸ **forceUpdate**(`attrName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attrName?` | `string` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[forceUpdate](IBox.md#forceupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:560](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L560)

___

### forceRender

▸ **forceRender**(`bounds?`, `sync?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |
| `sync?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[forceRender](IBox.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__extraUpdate](IBox.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:563](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L563)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldMatrix](IBox.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalMatrix](IBox.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L567)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldBounds](IBox.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalBounds](IBox.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:571](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L571)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalBoxBounds](IBox.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalStrokeBounds](IBox.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalRenderBounds](IBox.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateContentBounds](IBox.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondLayout?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateBoxBounds](IBox.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateStrokeBounds](IBox.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRenderBounds](IBox.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L580)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateAutoLayout](IBox.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateFlowLayout](IBox.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateNaturalSize](IBox.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L584)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[__updateStrokeSpread](IBox.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[__updateRenderSpread](IBox.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__onUpdateSize](IBox.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L589)

___

### \_\_updateEraser

▸ **__updateEraser**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateEraser](IBox.md#__updateeraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:592](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L592)

___

### \_\_updateMask

▸ **__updateMask**(`value?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateMask](IBox.md#__updatemask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L593)

___

### \_\_renderMask

▸ **__renderMask**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__renderMask](IBox.md#__rendermask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L594)

___

### \_\_renderEraser

▸ **__renderEraser**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__renderEraser](IBox.md#__rendereraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L595)

___

### \_\_getNowWorld

▸ **__getNowWorld**(`options`): [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

[`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__getNowWorld](IBox.md#__getnowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L598)

___

### getTransform

▸ **getTransform**(`relative?`): [`IMatrixData`](IMatrixData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IMatrixData`](IMatrixData.md)

#### Inherited from

[IBox](IBox.md).[getTransform](IBox.md#gettransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L600)

___

### getBounds

▸ **getBounds**(`type?`, `relative?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[getBounds](IBox.md#getbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L602)

___

### getLayoutBounds

▸ **getLayoutBounds**(`type?`, `relative?`, `unscale?`): [`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |
| `unscale?` | `boolean` |

#### Returns

[`ILayoutBoundsData`](ILayoutBoundsData.md)

#### Inherited from

[IBox](IBox.md).[getLayoutBounds](IBox.md#getlayoutbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L603)

___

### getLayoutPoints

▸ **getLayoutPoints**(`type?`, `relative?`): [`IPointData`](IPointData.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IBoundsType`](../modules.md#iboundstype) |
| `relative?` | [`ILeaf`](ILeaf.md) \| [`ILocationType`](../modules.md#ilocationtype) |

#### Returns

[`IPointData`](IPointData.md)[]

#### Inherited from

[IBox](IBox.md).[getLayoutPoints](IBox.md#getlayoutpoints)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L604)

___

### getWorldBounds

▸ **getWorldBounds**(`inner`, `relative?`, `change?`): [`IBoundsData`](IBoundsData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IBoundsData`](IBoundsData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `change?` | `boolean` |

#### Returns

[`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[getWorldBounds](IBox.md#getworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L606)

___

### worldToLocal

▸ **worldToLocal**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[worldToLocal](IBox.md#worldtolocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L608)

___

### localToWorld

▸ **localToWorld**(`local`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[localToWorld](IBox.md#localtoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L609)

___

### worldToInner

▸ **worldToInner**(`world`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[worldToInner](IBox.md#worldtoinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L610)

___

### innerToWorld

▸ **innerToWorld**(`inner`, `to?`, `distance?`, `relative?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `to?` | [`IPointData`](IPointData.md) |
| `distance?` | `boolean` |
| `relative?` | [`ILeaf`](ILeaf.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[innerToWorld](IBox.md#innertoworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L611)

___

### getBoxPoint

▸ **getBoxPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getBoxPoint](IBox.md#getboxpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L613)

___

### getBoxPointByInner

▸ **getBoxPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getBoxPointByInner](IBox.md#getboxpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L614)

___

### getInnerPoint

▸ **getInnerPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getInnerPoint](IBox.md#getinnerpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L615)

___

### getInnerPointByBox

▸ **getInnerPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getInnerPointByBox](IBox.md#getinnerpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L616)

___

### getInnerPointByLocal

▸ **getInnerPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getInnerPointByLocal](IBox.md#getinnerpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L617)

___

### getLocalPoint

▸ **getLocalPoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getLocalPoint](IBox.md#getlocalpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L618)

___

### getLocalPointByInner

▸ **getLocalPointByInner**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getLocalPointByInner](IBox.md#getlocalpointbyinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L619)

___

### getPagePoint

▸ **getPagePoint**(`world`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getPagePoint](IBox.md#getpagepoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L620)

___

### getWorldPoint

▸ **getWorldPoint**(`inner`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getWorldPoint](IBox.md#getworldpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:621](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L621)

___

### getWorldPointByBox

▸ **getWorldPointByBox**(`box`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `box` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getWorldPointByBox](IBox.md#getworldpointbybox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L622)

___

### getWorldPointByLocal

▸ **getWorldPointByLocal**(`local`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getWorldPointByLocal](IBox.md#getworldpointbylocal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L623)

___

### getWorldPointByPage

▸ **getWorldPointByPage**(`page`, `relative?`, `distance?`, `change?`): [`IPointData`](IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `page` | [`IPointData`](IPointData.md) |
| `relative?` | [`ILeaf`](ILeaf.md) |
| `distance?` | `boolean` |
| `change?` | `boolean` |

#### Returns

[`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[getWorldPointByPage](IBox.md#getworldpointbypage)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L624)

___

### setTransform

▸ **setTransform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[setTransform](IBox.md#settransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L627)

___

### transform

▸ **transform**(`transform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[transform](IBox.md#transform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L628)

___

### move

▸ **move**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[move](IBox.md#move)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L629)

___

### moveInner

▸ **moveInner**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[moveInner](IBox.md#moveinner)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L631)

___

### scaleOf

▸ **scaleOf**(`origin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[scaleOf](IBox.md#scaleof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L632)

___

### rotateOf

▸ **rotateOf**(`origin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[rotateOf](IBox.md#rotateof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L633)

___

### skewOf

▸ **skewOf**(`origin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `origin` | [`IPointData`](IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[skewOf](IBox.md#skewof)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L634)

___

### transformWorld

▸ **transformWorld**(`worldTransform?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldTransform?` | [`IMatrixData`](IMatrixData.md) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[transformWorld](IBox.md#transformworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L636)

___

### moveWorld

▸ **moveWorld**(`x`, `y?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` \| [`IPointData`](IPointData.md) |
| `y?` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[moveWorld](IBox.md#moveworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L637)

___

### scaleOfWorld

▸ **scaleOfWorld**(`worldOrigin`, `scaleX`, `scaleY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `scaleX` | `number` |
| `scaleY?` | [`ITransition`](../modules.md#itransition) |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[scaleOfWorld](IBox.md#scaleofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L638)

___

### rotateOfWorld

▸ **rotateOfWorld**(`worldOrigin`, `rotation`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `rotation` | `number` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[rotateOfWorld](IBox.md#rotateofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L639)

___

### skewOfWorld

▸ **skewOfWorld**(`worldOrigin`, `skewX`, `skewY?`, `resize?`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `worldOrigin` | [`IPointData`](IPointData.md) |
| `skewX` | `number` |
| `skewY?` | `number` |
| `resize?` | `boolean` |
| `transition?` | [`ITransition`](../modules.md#itransition) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[skewOfWorld](IBox.md#skewofworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L640)

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

#### Inherited from

[IBox](IBox.md).[flip](IBox.md#flip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L642)

___

### scaleResize

▸ **scaleResize**(`scaleX`, `scaleY`, `noResize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `noResize?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[scaleResize](IBox.md#scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L644)

___

### \_\_scaleResize

▸ **__scaleResize**(`scaleX`, `scaleY`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY` | `number` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__scaleResize](IBox.md#__scaleresize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L645)

___

### resizeWidth

▸ **resizeWidth**(`width`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[resizeWidth](IBox.md#resizewidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L647)

___

### resizeHeight

▸ **resizeHeight**(`height`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `height` | `number` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[resizeHeight](IBox.md#resizeheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L648)

___

### \_\_hitWorld

▸ **__hitWorld**(`point`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__hitWorld](IBox.md#__hitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_hit

▸ **__hit**(`local`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__hit](IBox.md#__hit)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L652)

___

### \_\_hitFill

▸ **__hitFill**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__hitFill](IBox.md#__hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L653)

___

### \_\_hitStroke

▸ **__hitStroke**(`inner`, `strokeWidth`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |
| `strokeWidth` | `number` |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__hitStroke](IBox.md#__hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L654)

___

### \_\_hitPixel

▸ **__hitPixel**(`inner`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `inner` | [`IRadiusPointData`](IRadiusPointData.md) |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[__hitPixel](IBox.md#__hitpixel)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L655)

___

### \_\_drawHitPath

▸ **__drawHitPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawHitPath](IBox.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L656)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateHitCanvas](IBox.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L657)

___

### \_\_render

▸ **__render**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__render](IBox.md#__render)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_drawFast

▸ **__drawFast**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawFast](IBox.md#__drawfast)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L661)

___

### \_\_draw

▸ **__draw**(`canvas`, `options`, `originCanvas?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `originCanvas?` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__draw](IBox.md#__draw)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_clip

▸ **__clip**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__clip](IBox.md#__clip)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L664)

___

### \_\_renderShape

▸ **__renderShape**(`canvas`, `options`, `ignoreFill?`, `ignoreStroke?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |
| `ignoreFill?` | `boolean` |
| `ignoreStroke?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__renderShape](IBox.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:665](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L665)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldOpacity](IBox.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateChange](IBox.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_drawPath

▸ **__drawPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawPath](IBox.md#__drawpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:671](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L671)

___

### \_\_drawRenderPath

▸ **__drawRenderPath**(`canvas`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawRenderPath](IBox.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L672)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updatePath](IBox.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L673)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRenderPath](IBox.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L674)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IBox](IBox.md).[getMotionPathData](IBox.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L677)

___

### getMotionPoint

▸ **getMotionPoint**(`motionDistance`): [`IRotationPointData`](IRotationPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `motionDistance` | `number` \| [`IUnitData`](IUnitData.md) |

#### Returns

[`IRotationPointData`](IRotationPointData.md)

#### Inherited from

[IBox](IBox.md).[getMotionPoint](IBox.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L678)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[getMotionTotal](IBox.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateMotionPath](IBox.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:681](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L681)

___

### \_\_runAnimation

▸ **__runAnimation**(`type`, `complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | ``"in"`` \| ``"out"`` |
| `complete?` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__runAnimation](IBox.md#__runanimation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L683)

___

### \_\_emitLifeEvent

▸ **__emitLifeEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__emitLifeEvent](IBox.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L685)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateSortChildren](IBox.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:690](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L690)

___

### dropTo

▸ **dropTo**(`parent`, `index?`, `resize?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`ILeaf`](ILeaf.md) |
| `index?` | `number` |
| `resize?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[dropTo](IBox.md#dropto)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:693](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/ILeaf.ts#L693)

___

### \_\_realSetAttr

▸ `Optional` **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__realSetAttr](IBox.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[destroyEventer](IBox.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventMap`](IEventMap.md) |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[on](IBox.md#on)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L45)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[off](IBox.md#off)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L46)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[IBox](IBox.md).[on_](IBox.md#on_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L47)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](IEventListenerId.md) \| [`IEventListenerId`](IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[off_](IBox.md#off_)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L48)

___

### once

▸ **once**(`type`, `listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](IFunction.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[once](IBox.md#once)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L49)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](IObject.md) \| [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[emit](IBox.md#emit)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L50)

___

### emitEvent

▸ **emitEvent**(`event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`IEvent`](IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[emitEvent](IBox.md#emitevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L51)

___

### hasEvent

▸ **hasEvent**(`type`, `capture?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `capture?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[IBox](IBox.md).[hasEvent](IBox.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[destroy](IBox.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/fd13609/packages/interface/src/event/IEventer.ts#L54)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRectRenderBounds](IBox.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/interface/src/IUI.ts:342](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L342)

___

### \_\_renderGroup

▸ **__renderGroup**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__renderGroup](IBox.md#__rendergroup)

#### Defined in

[ui/packages/interface/src/IUI.ts:343](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L343)

___

### pick

▸ **pick**(`hitPoint`, `options?`): [`IPickResult`](IPickResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `hitPoint` | [`IPointData`](IPointData.md) |
| `options?` | [`IPickOptions`](IPickOptions.md) |

#### Returns

[`IPickResult`](IPickResult.md)

#### Inherited from

[IBox](IBox.md).[pick](IBox.md#pick)

#### Defined in

[ui/packages/interface/src/IUI.ts:359](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L359)

___

### add

▸ **add**(`child`, `index?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `index?` | `number` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[add](IBox.md#add)

#### Defined in

[ui/packages/interface/src/IUI.ts:360](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L360)

___

### addAt

▸ **addAt**(`child`, `index`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `index` | `number` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[addAt](IBox.md#addat)

#### Defined in

[ui/packages/interface/src/IUI.ts:361](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L361)

___

### addAfter

▸ **addAfter**(`child`, `after`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `after` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[addAfter](IBox.md#addafter)

#### Defined in

[ui/packages/interface/src/IUI.ts:362](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L362)

___

### addBefore

▸ **addBefore**(`child`, `before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | [`IUIInputData`](IUIInputData.md) \| [`IUI`](IUI.md) \| [`IUI`](IUI.md)[] \| [`IUIInputData`](IUIInputData.md)[] |
| `before` | [`IUI`](IUI.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[addBefore](IBox.md#addbefore)

#### Defined in

[ui/packages/interface/src/IUI.ts:363](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L363)

___

### addMany

▸ **addMany**(`...children`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...children` | [`ILeaf`](ILeaf.md)[] \| [`IUIInputData`](IUIInputData.md)[] |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[addMany](IBox.md#addmany)

#### Defined in

[ui/packages/interface/src/IUI.ts:364](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L364)

___

### remove

▸ **remove**(`child?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `child?` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IUI`](IUI.md) \| [`IFindUIMethod`](IFindUIMethod.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[remove](IBox.md#remove)

#### Defined in

[ui/packages/interface/src/IUI.ts:365](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L365)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[removeAll](IBox.md#removeall)

#### Defined in

[ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L366)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[clear](IBox.md#clear)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L367)

___

### reset

▸ **reset**(`data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[reset](IBox.md#reset)

#### Defined in

[ui/packages/interface/src/IUI.ts:396](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L396)

___

### set

▸ **set**(`data`, `transition?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IUIInputData`](IUIInputData.md) |
| `transition?` | [`ITransition`](../modules.md#itransition) \| ``"temp"`` |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[set](IBox.md#set)

#### Defined in

[ui/packages/interface/src/IUI.ts:398](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L398)

___

### toJSON

▸ **toJSON**(`options?`): [`IUIJSONData`](IUIJSONData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IJSONOptions`](IJSONOptions.md) |

#### Returns

[`IUIJSONData`](IUIJSONData.md)

#### Inherited from

[IBox](IBox.md).[toJSON](IBox.md#tojson)

#### Defined in

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L399)

___

### get

▸ **get**(`name?`): [`IValue`](../modules.md#ivalue) \| [`IUIInputData`](IUIInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name?` | `string` \| `string`[] \| [`IUIInputData`](IUIInputData.md) |

#### Returns

[`IValue`](../modules.md#ivalue) \| [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[get](IBox.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:401](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L401)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[createProxyData](IBox.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L402)

___

### find

▸ **find**(`condition`, `options?`): [`IUI`](IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?` | `any` |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[IBox](IBox.md).[find](IBox.md#find)

#### Defined in

[ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L404)

___

### findTag

▸ **findTag**(`tag`): [`IUI`](IUI.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` \| `string`[] |

#### Returns

[`IUI`](IUI.md)[]

#### Inherited from

[IBox](IBox.md).[findTag](IBox.md#findtag)

#### Defined in

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L405)

___

### findOne

▸ **findOne**(`condition`, `options?`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | `string` \| `number` \| [`IFindCondition`](IFindCondition.md) \| [`IFindUIMethod`](IFindUIMethod.md) |
| `options?` | `any` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IBox](IBox.md).[findOne](IBox.md#findone)

#### Defined in

[ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L406)

___

### findId

▸ **findId**(`id`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` \| `number` |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IBox](IBox.md).[findId](IBox.md#findid)

#### Defined in

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L407)

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

#### Inherited from

[IBox](IBox.md).[getPath](IBox.md#getpath)

#### Defined in

[ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L409)

___

### getPathString

▸ **getPathString**(`curve?`, `pathForRender?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `curve?` | `boolean` |
| `pathForRender?` | `boolean` |

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[getPathString](IBox.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L410)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[load](IBox.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L412)

___

### \_\_drawPathByData

▸ **__drawPathByData**(`drawer`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](IPathDrawer.md) |
| `data` | [`IPathCommandData`](../modules.md#ipathcommanddata) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawPathByData](IBox.md#__drawpathbydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L414)

___

### \_\_drawPathByBox

▸ **__drawPathByBox**(`drawer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawer` | [`IPathDrawer`](IPathDrawer.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawPathByBox](IBox.md#__drawpathbybox)

#### Defined in

[ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L415)

___

### \_\_drawAfterFill

▸ `Optional` **__drawAfterFill**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawAfterFill](IBox.md#__drawafterfill)

#### Defined in

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L416)

___

### \_\_drawContent

▸ `Optional` **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__drawContent](IBox.md#__drawcontent)

#### Defined in

[ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L417)

___

### drawImagePlaceholder

▸ **drawImagePlaceholder**(`canvas`, `image`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `image` | [`ILeaferImage`](ILeaferImage.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[drawImagePlaceholder](IBox.md#drawimageplaceholder)

#### Defined in

[ui/packages/interface/src/IUI.ts:419](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L419)

___

### animate

▸ **animate**(`keyframe?`, `options?`, `type?`, `isTemp?`): [`IAnimate`](IAnimate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyframe?` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `options?` | [`ITransition`](../modules.md#itransition) |
| `type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `isTemp?` | `boolean` |

#### Returns

[`IAnimate`](IAnimate.md)

#### Inherited from

[IBox](IBox.md).[animate](IBox.md#animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:421](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L421)

___

### killAnimate

▸ **killAnimate**(`type?`, `nextStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | [`IAnimateType`](../modules.md#ianimatetype) |
| `nextStyle?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[killAnimate](IBox.md#killanimate)

#### Defined in

[ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L422)

___

### export

▸ **export**(`filename`, `options?`): `Promise`<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`<[`IExportResult`](IExportResult.md)\>

#### Inherited from

[IBox](IBox.md).[export](IBox.md#export)

#### Defined in

[ui/packages/interface/src/IUI.ts:424](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L424)

___

### syncExport

▸ **syncExport**(`filename`, `options?`): [`IExportResult`](IExportResult.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

[`IExportResult`](IExportResult.md)

#### Inherited from

[IBox](IBox.md).[syncExport](IBox.md#syncexport)

#### Defined in

[ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L425)

___

### clone

▸ **clone**(`data?`): [`IUI`](IUI.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IUIInputData`](IUIInputData.md) |

#### Returns

[`IUI`](IUI.md)

#### Inherited from

[IBox](IBox.md).[clone](IBox.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:426](https://github.com/leaferjs/leafer-ui/blob/311af1d/packages/interface/src/IUI.ts#L426)
