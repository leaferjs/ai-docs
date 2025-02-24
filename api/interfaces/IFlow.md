# Interface: IFlow

## Hierarchy

- [`IBox`](IBox.md)

  ↳ **`IFlow`**

## Implemented by

- [`Flow`](../classes/Flow.md)

## Table of contents

### Properties

- [id](IFlow.md#id)
- [name](IFlow.md#name)
- [className](IFlow.md#classname)
- [blendMode](IFlow.md#blendmode)
- [opacity](IFlow.md#opacity)
- [visible](IFlow.md#visible)
- [selected](IFlow.md#selected)
- [disabled](IFlow.md#disabled)
- [locked](IFlow.md#locked)
- [zIndex](IFlow.md#zindex)
- [mask](IFlow.md#mask)
- [eraser](IFlow.md#eraser)
- [filter](IFlow.md#filter)
- [x](IFlow.md#x)
- [y](IFlow.md#y)
- [width](IFlow.md#width)
- [height](IFlow.md#height)
- [scaleX](IFlow.md#scalex)
- [scaleY](IFlow.md#scaley)
- [rotation](IFlow.md#rotation)
- [skewX](IFlow.md#skewx)
- [skewY](IFlow.md#skewy)
- [scale](IFlow.md#scale)
- [offsetX](IFlow.md#offsetx)
- [offsetY](IFlow.md#offsety)
- [scrollX](IFlow.md#scrollx)
- [scrollY](IFlow.md#scrolly)
- [origin](IFlow.md#origin)
- [around](IFlow.md#around)
- [lazy](IFlow.md#lazy)
- [pixelRatio](IFlow.md#pixelratio)
- [path](IFlow.md#path)
- [windingRule](IFlow.md#windingrule)
- [closed](IFlow.md#closed)
- [flow](IFlow.md#flow)
- [padding](IFlow.md#padding)
- [gap](IFlow.md#gap)
- [flowAlign](IFlow.md#flowalign)
- [flowWrap](IFlow.md#flowwrap)
- [itemBox](IFlow.md#itembox)
- [inFlow](IFlow.md#inflow)
- [autoWidth](IFlow.md#autowidth)
- [autoHeight](IFlow.md#autoheight)
- [lockRatio](IFlow.md#lockratio)
- [autoBox](IFlow.md#autobox)
- [widthRange](IFlow.md#widthrange)
- [heightRange](IFlow.md#heightrange)
- [draggable](IFlow.md#draggable)
- [dragBounds](IFlow.md#dragbounds)
- [editable](IFlow.md#editable)
- [hittable](IFlow.md#hittable)
- [hitFill](IFlow.md#hitfill)
- [hitStroke](IFlow.md#hitstroke)
- [hitBox](IFlow.md#hitbox)
- [hitChildren](IFlow.md#hitchildren)
- [hitSelf](IFlow.md#hitself)
- [hitRadius](IFlow.md#hitradius)
- [button](IFlow.md#button)
- [cursor](IFlow.md#cursor)
- [motionPath](IFlow.md#motionpath)
- [motionPrecision](IFlow.md#motionprecision)
- [motion](IFlow.md#motion)
- [motionRotation](IFlow.md#motionrotation)
- [normalStyle](IFlow.md#normalstyle)
- [event](IFlow.md#event)
- [data](IFlow.md#data)
- [noBounds](IFlow.md#nobounds)
- [tag](IFlow.md#tag)
- [\_\_tag](IFlow.md#__tag)
- [innerName](IFlow.md#innername)
- [\_\_DataProcessor](IFlow.md#__dataprocessor)
- [\_\_LayoutProcessor](IFlow.md#__layoutprocessor)
- [leaferIsCreated](IFlow.md#leaferiscreated)
- [leaferIsReady](IFlow.md#leaferisready)
- [isApp](IFlow.md#isapp)
- [isLeafer](IFlow.md#isleafer)
- [isBranch](IFlow.md#isbranch)
- [isBranchLeaf](IFlow.md#isbranchleaf)
- [isOutside](IFlow.md#isoutside)
- [syncEventer](IFlow.md#synceventer)
- [lockNormalStyle](IFlow.md#locknormalstyle)
- [\_\_layout](IFlow.md#__layout)
- [\_\_world](IFlow.md#__world)
- [\_\_local](IFlow.md#__local)
- [\_\_nowWorld](IFlow.md#__nowworld)
- [\_\_cameraWorld](IFlow.md#__cameraworld)
- [\_\_localMatrix](IFlow.md#__localmatrix)
- [\_\_localBoxBounds](IFlow.md#__localboxbounds)
- [\_\_worldOpacity](IFlow.md#__worldopacity)
- [worldTransform](IFlow.md#worldtransform)
- [localTransform](IFlow.md#localtransform)
- [boxBounds](IFlow.md#boxbounds)
- [renderBounds](IFlow.md#renderbounds)
- [worldBoxBounds](IFlow.md#worldboxbounds)
- [worldStrokeBounds](IFlow.md#worldstrokebounds)
- [worldRenderBounds](IFlow.md#worldrenderbounds)
- [worldOpacity](IFlow.md#worldopacity)
- [\_\_level](IFlow.md#__level)
- [\_\_tempNumber](IFlow.md#__tempnumber)
- [\_\_worldFlipped](IFlow.md#__worldflipped)
- [\_\_hasAutoLayout](IFlow.md#__hasautolayout)
- [\_\_hasMotionPath](IFlow.md#__hasmotionpath)
- [\_\_hasMask](IFlow.md#__hasmask)
- [\_\_hasEraser](IFlow.md#__haseraser)
- [\_\_hitCanvas](IFlow.md#__hitcanvas)
- [\_\_flowBounds](IFlow.md#__flowbounds)
- [\_\_widthGrow](IFlow.md#__widthgrow)
- [\_\_heightGrow](IFlow.md#__heightgrow)
- [\_\_hasGrow](IFlow.md#__hasgrow)
- [\_\_onlyHitMask](IFlow.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IFlow.md#__ignorehitworld)
- [\_\_inLazyBounds](IFlow.md#__inlazybounds)
- [pathInputed](IFlow.md#pathinputed)
- [destroyed](IFlow.md#destroyed)
- [innerId](IFlow.md#innerid)
- [\_\_captureMap](IFlow.md#__capturemap)
- [\_\_bubbleMap](IFlow.md#__bubblemap)
- [cornerRadius](IFlow.md#cornerradius)
- [cornerSmoothing](IFlow.md#cornersmoothing)
- [fill](IFlow.md#fill)
- [stroke](IFlow.md#stroke)
- [strokeAlign](IFlow.md#strokealign)
- [strokeWidth](IFlow.md#strokewidth)
- [strokeWidthFixed](IFlow.md#strokewidthfixed)
- [strokeCap](IFlow.md#strokecap)
- [strokeJoin](IFlow.md#strokejoin)
- [dashPattern](IFlow.md#dashpattern)
- [dashOffset](IFlow.md#dashoffset)
- [miterLimit](IFlow.md#miterlimit)
- [startArrow](IFlow.md#startarrow)
- [endArrow](IFlow.md#endarrow)
- [shadow](IFlow.md#shadow)
- [innerShadow](IFlow.md#innershadow)
- [blur](IFlow.md#blur)
- [backgroundBlur](IFlow.md#backgroundblur)
- [grayscale](IFlow.md#grayscale)
- [\_\_](IFlow.md#__)
- [overflow](IFlow.md#overflow)
- [resizeChildren](IFlow.md#resizechildren)
- [textBox](IFlow.md#textbox)
- [children](IFlow.md#children)
- [app](IFlow.md#app)
- [leafer](IFlow.md#leafer)
- [parent](IFlow.md#parent)
- [zoomLayer](IFlow.md#zoomlayer)
- [isFrame](IFlow.md#isframe)
- [isOverflow](IFlow.md#isoverflow)
- [proxyData](IFlow.md#proxydata)
- [\_\_proxyData](IFlow.md#__proxydata)
- [animation](IFlow.md#animation)
- [animationOut](IFlow.md#animationout)
- [editConfig](IFlow.md#editconfig)
- [editOuter](IFlow.md#editouter)
- [editInner](IFlow.md#editinner)
- [\_\_animate](IFlow.md#__animate)
- [pen](IFlow.md#pen)
- [transition](IFlow.md#transition)
- [transitionOut](IFlow.md#transitionout)
- [states](IFlow.md#states)
- [state](IFlow.md#state)
- [hoverStyle](IFlow.md#hoverstyle)
- [pressStyle](IFlow.md#pressstyle)
- [focusStyle](IFlow.md#focusstyle)
- [selectedStyle](IFlow.md#selectedstyle)
- [disabledStyle](IFlow.md#disabledstyle)
- [placeholderStyle](IFlow.md#placeholderstyle)

### Methods

- [resetCustom](IFlow.md#resetcustom)
- [waitParent](IFlow.md#waitparent)
- [waitLeafer](IFlow.md#waitleafer)
- [nextRender](IFlow.md#nextrender)
- [removeNextRender](IFlow.md#removenextrender)
- [\_\_bindLeafer](IFlow.md#__bindleafer)
- [setAttr](IFlow.md#setattr)
- [getAttr](IFlow.md#getattr)
- [getComputedAttr](IFlow.md#getcomputedattr)
- [toString](IFlow.md#tostring)
- [toSVG](IFlow.md#tosvg)
- [\_\_SVG](IFlow.md#__svg)
- [toHTML](IFlow.md#tohtml)
- [\_\_setAttr](IFlow.md#__setattr)
- [\_\_getAttr](IFlow.md#__getattr)
- [setProxyAttr](IFlow.md#setproxyattr)
- [getProxyAttr](IFlow.md#getproxyattr)
- [focus](IFlow.md#focus)
- [updateState](IFlow.md#updatestate)
- [updateLayout](IFlow.md#updatelayout)
- [forceUpdate](IFlow.md#forceupdate)
- [forceRender](IFlow.md#forcerender)
- [\_\_extraUpdate](IFlow.md#__extraupdate)
- [\_\_updateWorldMatrix](IFlow.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IFlow.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IFlow.md#__updateworldbounds)
- [\_\_updateLocalBounds](IFlow.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IFlow.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IFlow.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IFlow.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IFlow.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IFlow.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IFlow.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IFlow.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IFlow.md#__updateautolayout)
- [\_\_updateFlowLayout](IFlow.md#__updateflowlayout)
- [\_\_updateNaturalSize](IFlow.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IFlow.md#__updatestrokespread)
- [\_\_updateRenderSpread](IFlow.md#__updaterenderspread)
- [\_\_onUpdateSize](IFlow.md#__onupdatesize)
- [\_\_updateEraser](IFlow.md#__updateeraser)
- [\_\_updateMask](IFlow.md#__updatemask)
- [\_\_renderMask](IFlow.md#__rendermask)
- [\_\_renderEraser](IFlow.md#__rendereraser)
- [\_\_getNowWorld](IFlow.md#__getnowworld)
- [getTransform](IFlow.md#gettransform)
- [getBounds](IFlow.md#getbounds)
- [getLayoutBounds](IFlow.md#getlayoutbounds)
- [getLayoutPoints](IFlow.md#getlayoutpoints)
- [getWorldBounds](IFlow.md#getworldbounds)
- [worldToLocal](IFlow.md#worldtolocal)
- [localToWorld](IFlow.md#localtoworld)
- [worldToInner](IFlow.md#worldtoinner)
- [innerToWorld](IFlow.md#innertoworld)
- [getBoxPoint](IFlow.md#getboxpoint)
- [getBoxPointByInner](IFlow.md#getboxpointbyinner)
- [getInnerPoint](IFlow.md#getinnerpoint)
- [getInnerPointByBox](IFlow.md#getinnerpointbybox)
- [getInnerPointByLocal](IFlow.md#getinnerpointbylocal)
- [getLocalPoint](IFlow.md#getlocalpoint)
- [getLocalPointByInner](IFlow.md#getlocalpointbyinner)
- [getPagePoint](IFlow.md#getpagepoint)
- [getWorldPoint](IFlow.md#getworldpoint)
- [getWorldPointByBox](IFlow.md#getworldpointbybox)
- [getWorldPointByLocal](IFlow.md#getworldpointbylocal)
- [getWorldPointByPage](IFlow.md#getworldpointbypage)
- [setTransform](IFlow.md#settransform)
- [transform](IFlow.md#transform)
- [move](IFlow.md#move)
- [moveInner](IFlow.md#moveinner)
- [scaleOf](IFlow.md#scaleof)
- [rotateOf](IFlow.md#rotateof)
- [skewOf](IFlow.md#skewof)
- [transformWorld](IFlow.md#transformworld)
- [moveWorld](IFlow.md#moveworld)
- [scaleOfWorld](IFlow.md#scaleofworld)
- [rotateOfWorld](IFlow.md#rotateofworld)
- [skewOfWorld](IFlow.md#skewofworld)
- [flip](IFlow.md#flip)
- [scaleResize](IFlow.md#scaleresize)
- [\_\_scaleResize](IFlow.md#__scaleresize)
- [resizeWidth](IFlow.md#resizewidth)
- [resizeHeight](IFlow.md#resizeheight)
- [\_\_hitWorld](IFlow.md#__hitworld)
- [\_\_hit](IFlow.md#__hit)
- [\_\_hitFill](IFlow.md#__hitfill)
- [\_\_hitStroke](IFlow.md#__hitstroke)
- [\_\_hitPixel](IFlow.md#__hitpixel)
- [\_\_drawHitPath](IFlow.md#__drawhitpath)
- [\_\_updateHitCanvas](IFlow.md#__updatehitcanvas)
- [\_\_render](IFlow.md#__render)
- [\_\_drawFast](IFlow.md#__drawfast)
- [\_\_draw](IFlow.md#__draw)
- [\_\_clip](IFlow.md#__clip)
- [\_\_renderShape](IFlow.md#__rendershape)
- [\_\_updateWorldOpacity](IFlow.md#__updateworldopacity)
- [\_\_updateChange](IFlow.md#__updatechange)
- [\_\_drawPath](IFlow.md#__drawpath)
- [\_\_drawRenderPath](IFlow.md#__drawrenderpath)
- [\_\_updatePath](IFlow.md#__updatepath)
- [\_\_updateRenderPath](IFlow.md#__updaterenderpath)
- [getMotionPathData](IFlow.md#getmotionpathdata)
- [getMotionPoint](IFlow.md#getmotionpoint)
- [getMotionTotal](IFlow.md#getmotiontotal)
- [\_\_updateMotionPath](IFlow.md#__updatemotionpath)
- [\_\_runAnimation](IFlow.md#__runanimation)
- [\_\_emitLifeEvent](IFlow.md#__emitlifeevent)
- [\_\_updateSortChildren](IFlow.md#__updatesortchildren)
- [dropTo](IFlow.md#dropto)
- [\_\_realSetAttr](IFlow.md#__realsetattr)
- [destroyEventer](IFlow.md#destroyeventer)
- [on](IFlow.md#on)
- [off](IFlow.md#off)
- [on\_](IFlow.md#on_)
- [off\_](IFlow.md#off_)
- [once](IFlow.md#once)
- [emit](IFlow.md#emit)
- [emitEvent](IFlow.md#emitevent)
- [hasEvent](IFlow.md#hasevent)
- [destroy](IFlow.md#destroy)
- [\_\_updateRectRenderBounds](IFlow.md#__updaterectrenderbounds)
- [\_\_renderGroup](IFlow.md#__rendergroup)
- [pick](IFlow.md#pick)
- [add](IFlow.md#add)
- [addAt](IFlow.md#addat)
- [addAfter](IFlow.md#addafter)
- [addBefore](IFlow.md#addbefore)
- [addMany](IFlow.md#addmany)
- [remove](IFlow.md#remove)
- [removeAll](IFlow.md#removeall)
- [clear](IFlow.md#clear)
- [reset](IFlow.md#reset)
- [set](IFlow.md#set)
- [toJSON](IFlow.md#tojson)
- [get](IFlow.md#get)
- [createProxyData](IFlow.md#createproxydata)
- [find](IFlow.md#find)
- [findTag](IFlow.md#findtag)
- [findOne](IFlow.md#findone)
- [findId](IFlow.md#findid)
- [getPath](IFlow.md#getpath)
- [getPathString](IFlow.md#getpathstring)
- [load](IFlow.md#load)
- [\_\_drawPathByData](IFlow.md#__drawpathbydata)
- [\_\_drawPathByBox](IFlow.md#__drawpathbybox)
- [\_\_drawAfterFill](IFlow.md#__drawafterfill)
- [\_\_drawContent](IFlow.md#__drawcontent)
- [animate](IFlow.md#animate)
- [killAnimate](IFlow.md#killanimate)
- [export](IFlow.md#export)
- [clone](IFlow.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IBox](IBox.md).[id](IBox.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IBox](IBox.md).[name](IBox.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IBox](IBox.md).[className](IBox.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IBox](IBox.md).[blendMode](IBox.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IBox](IBox.md).[opacity](IBox.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IBox](IBox.md).[visible](IBox.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IBox](IBox.md).[selected](IBox.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IBox](IBox.md).[disabled](IBox.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IBox](IBox.md).[locked](IBox.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IBox](IBox.md).[zIndex](IBox.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IBox](IBox.md).[mask](IBox.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IBox](IBox.md).[eraser](IBox.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IBox](IBox.md).[filter](IBox.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IBox](IBox.md).[x](IBox.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IBox](IBox.md).[y](IBox.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IBox](IBox.md).[width](IBox.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IBox](IBox.md).[height](IBox.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IBox](IBox.md).[scaleX](IBox.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IBox](IBox.md).[scaleY](IBox.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IBox](IBox.md).[rotation](IBox.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IBox](IBox.md).[skewX](IBox.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IBox](IBox.md).[skewY](IBox.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IBox](IBox.md).[scale](IBox.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IBox](IBox.md).[offsetX](IBox.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IBox](IBox.md).[offsetY](IBox.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IBox](IBox.md).[scrollX](IBox.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IBox](IBox.md).[scrollY](IBox.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBox](IBox.md).[origin](IBox.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IBox](IBox.md).[around](IBox.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IBox](IBox.md).[lazy](IBox.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IBox](IBox.md).[pixelRatio](IBox.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IBox](IBox.md).[path](IBox.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IBox](IBox.md).[windingRule](IBox.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IBox](IBox.md).[closed](IBox.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IBox](IBox.md).[flow](IBox.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[padding](IBox.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IBox](IBox.md).[gap](IBox.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IBox](IBox.md).[flowAlign](IBox.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IBox](IBox.md).[flowWrap](IBox.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IBox](IBox.md).[itemBox](IBox.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IBox](IBox.md).[inFlow](IBox.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBox](IBox.md).[autoWidth](IBox.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IBox](IBox.md).[autoHeight](IBox.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IBox](IBox.md).[lockRatio](IBox.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IBox](IBox.md).[autoBox](IBox.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBox](IBox.md).[widthRange](IBox.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IBox](IBox.md).[heightRange](IBox.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IBox](IBox.md).[draggable](IBox.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[dragBounds](IBox.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IBox](IBox.md).[editable](IBox.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IBox](IBox.md).[hittable](IBox.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBox](IBox.md).[hitFill](IBox.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IBox](IBox.md).[hitStroke](IBox.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitBox](IBox.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitChildren](IBox.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IBox](IBox.md).[hitSelf](IBox.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IBox](IBox.md).[hitRadius](IBox.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IBox](IBox.md).[button](IBox.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IBox](IBox.md).[cursor](IBox.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IBox](IBox.md).[motionPath](IBox.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IBox](IBox.md).[motionPrecision](IBox.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IBox](IBox.md).[motion](IBox.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IBox](IBox.md).[motionRotation](IBox.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[normalStyle](IBox.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IBox](IBox.md).[event](IBox.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[data](IBox.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L305)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IBox](IBox.md).[noBounds](IBox.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L314)

___

### tag

• **tag**: `string`

#### Inherited from

[IBox](IBox.md).[tag](IBox.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IBox](IBox.md).[__tag](IBox.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L434)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IBox](IBox.md).[innerName](IBox.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[__DataProcessor](IBox.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IBox](IBox.md).[__LayoutProcessor](IBox.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L438)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IBox](IBox.md).[leaferIsCreated](IBox.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L445)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IBox](IBox.md).[leaferIsReady](IBox.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L446)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IBox](IBox.md).[isApp](IBox.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L448)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IBox](IBox.md).[isLeafer](IBox.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L449)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IBox](IBox.md).[isBranch](IBox.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L450)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IBox](IBox.md).[isBranchLeaf](IBox.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L451)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IBox](IBox.md).[isOutside](IBox.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L452)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IBox](IBox.md).[syncEventer](IBox.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L459)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IBox](IBox.md).[lockNormalStyle](IBox.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IBox](IBox.md).[__layout](IBox.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__world](IBox.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L464)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__local](IBox.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__nowWorld](IBox.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IBox](IBox.md).[__cameraWorld](IBox.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IBox](IBox.md).[__localMatrix](IBox.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__localBoxBounds](IBox.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IBox](IBox.md).[__worldOpacity](IBox.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L473)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IBox](IBox.md).[worldTransform](IBox.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L475)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IBox](IBox.md).[localTransform](IBox.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L476)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[boxBounds](IBox.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L478)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[renderBounds](IBox.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L479)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldBoxBounds](IBox.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L480)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldStrokeBounds](IBox.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L481)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[worldRenderBounds](IBox.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L482)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IBox](IBox.md).[worldOpacity](IBox.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IBox](IBox.md).[__level](IBox.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IBox](IBox.md).[__tempNumber](IBox.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IBox](IBox.md).[__worldFlipped](IBox.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasAutoLayout](IBox.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasMotionPath](IBox.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasMask](IBox.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasEraser](IBox.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IBox](IBox.md).[__hitCanvas](IBox.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IBox](IBox.md).[__flowBounds](IBox.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IBox](IBox.md).[__widthGrow](IBox.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IBox](IBox.md).[__heightGrow](IBox.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IBox](IBox.md).[__hasGrow](IBox.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IBox](IBox.md).[__onlyHitMask](IBox.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IBox](IBox.md).[__ignoreHitWorld](IBox.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IBox](IBox.md).[__inLazyBounds](IBox.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L508)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IBox](IBox.md).[pathInputed](IBox.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L510)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IBox](IBox.md).[destroyed](IBox.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L512)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IBox](IBox.md).[innerId](IBox.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IBox](IBox.md).[__captureMap](IBox.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IBox](IBox.md).[__bubbleMap](IBox.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L41)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[cornerRadius](IBox.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IBox](IBox.md).[cornerSmoothing](IBox.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IBox](IBox.md).[fill](IBox.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IBox](IBox.md).[stroke](IBox.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IBox](IBox.md).[strokeAlign](IBox.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IBox](IBox.md).[strokeWidth](IBox.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IBox](IBox.md).[strokeWidthFixed](IBox.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IBox](IBox.md).[strokeCap](IBox.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IBox](IBox.md).[strokeJoin](IBox.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IBox](IBox.md).[dashPattern](IBox.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IBox](IBox.md).[dashOffset](IBox.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IBox](IBox.md).[miterLimit](IBox.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBox](IBox.md).[startArrow](IBox.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IBox](IBox.md).[endArrow](IBox.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBox](IBox.md).[shadow](IBox.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IBox](IBox.md).[innerShadow](IBox.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBox](IBox.md).[blur](IBox.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IBox](IBox.md).[backgroundBlur](IBox.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IBox](IBox.md).[grayscale](IBox.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IFlowData`](IFlowData.md)

#### Overrides

[IBox](IBox.md).[__](IBox.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:43](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L43)

___

### overflow

• `Optional` **overflow**: [`IOverflow`](../modules.md#ioverflow)

#### Inherited from

[IBox](IBox.md).[overflow](IBox.md#overflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:337](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L337)

___

### resizeChildren

• `Optional` **resizeChildren**: `boolean`

#### Inherited from

[IBox](IBox.md).[resizeChildren](IBox.md#resizechildren)

#### Defined in

[ui/packages/interface/src/IUI.ts:338](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L338)

___

### textBox

• `Optional` **textBox**: `boolean`

#### Inherited from

[IBox](IBox.md).[textBox](IBox.md#textbox)

#### Defined in

[ui/packages/interface/src/IUI.ts:339](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L339)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IBox](IBox.md).[children](IBox.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:348](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L348)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IBox](IBox.md).[app](IBox.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L366)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IBox](IBox.md).[leafer](IBox.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L367)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IBox](IBox.md).[parent](IBox.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:368](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L368)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IBox](IBox.md).[zoomLayer](IBox.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:369](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L369)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IBox](IBox.md).[isFrame](IBox.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:370](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L370)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IBox](IBox.md).[isOverflow](IBox.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:371](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L371)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[proxyData](IBox.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:373](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L373)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[__proxyData](IBox.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:374](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L374)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBox](IBox.md).[animation](IBox.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L376)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IBox](IBox.md).[animationOut](IBox.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L377)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IBox](IBox.md).[editConfig](IBox.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L379)

___

### editOuter

• **editOuter**: `string`

#### Inherited from

[IBox](IBox.md).[editOuter](IBox.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L380)

___

### editInner

• **editInner**: `string`

#### Inherited from

[IBox](IBox.md).[editInner](IBox.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IBox](IBox.md).[__animate](IBox.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L385)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IBox](IBox.md).[pen](IBox.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L387)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBox](IBox.md).[transition](IBox.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L437)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IBox](IBox.md).[transitionOut](IBox.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L438)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IBox](IBox.md).[states](IBox.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L440)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IBox](IBox.md).[state](IBox.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L441)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[hoverStyle](IBox.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L443)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[pressStyle](IBox.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L444)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[focusStyle](IBox.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L445)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[selectedStyle](IBox.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L446)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[disabledStyle](IBox.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L447)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IBox](IBox.md).[placeholderStyle](IBox.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L448)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[resetCustom](IBox.md#resetcustom)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:515](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L515)

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

[leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L517)

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

[leafer/packages/interface/src/display/ILeaf.ts:518](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L518)

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

[leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L519)

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

[leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L520)

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

[leafer/packages/interface/src/display/ILeaf.ts:522](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L522)

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

[leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L526)

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

[leafer/packages/interface/src/display/ILeaf.ts:527](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L527)

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

[leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L528)

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

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L531)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[toSVG](IBox.md#tosvg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L532)

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

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L533)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IBox](IBox.md).[toHTML](IBox.md#tohtml)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L534)

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

[leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L540)

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

[leafer/packages/interface/src/display/ILeaf.ts:541](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L541)

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

[leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L542)

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

[leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L543)

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

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L551)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[updateState](IBox.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L553)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[updateLayout](IBox.md#updatelayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:554](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L554)

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

[leafer/packages/interface/src/display/ILeaf.ts:555](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L555)

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

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__extraUpdate](IBox.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L558)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldMatrix](IBox.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalMatrix](IBox.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldBounds](IBox.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalBounds](IBox.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalBoxBounds](IBox.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalStrokeBounds](IBox.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateLocalRenderBounds](IBox.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateContentBounds](IBox.md#__updatecontentbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:572](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L572)

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

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateStrokeBounds](IBox.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRenderBounds](IBox.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateAutoLayout](IBox.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateFlowLayout](IBox.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateNaturalSize](IBox.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[__updateStrokeSpread](IBox.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[__updateRenderSpread](IBox.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__onUpdateSize](IBox.md#__onupdatesize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:584](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L584)

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

[leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L587)

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

[leafer/packages/interface/src/display/ILeaf.ts:588](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L588)

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

[leafer/packages/interface/src/display/ILeaf.ts:589](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L589)

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

[leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L590)

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

[leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L593)

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

[leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L595)

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

[leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L597)

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

[leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L598)

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

[leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L599)

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

[leafer/packages/interface/src/display/ILeaf.ts:601](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L601)

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

[leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L603)

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

[leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L604)

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

[leafer/packages/interface/src/display/ILeaf.ts:605](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L605)

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

[leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L606)

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

[leafer/packages/interface/src/display/ILeaf.ts:608](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L608)

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

[leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L609)

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

[leafer/packages/interface/src/display/ILeaf.ts:610](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L610)

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

[leafer/packages/interface/src/display/ILeaf.ts:611](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L611)

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

[leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L612)

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

[leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L613)

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

[leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L614)

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

[leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L615)

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

[leafer/packages/interface/src/display/ILeaf.ts:616](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L616)

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

[leafer/packages/interface/src/display/ILeaf.ts:617](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L617)

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

[leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L618)

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

[leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L619)

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

[leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L622)

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

[leafer/packages/interface/src/display/ILeaf.ts:623](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L623)

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

[leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L624)

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

[leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L626)

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

[leafer/packages/interface/src/display/ILeaf.ts:627](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L627)

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

[leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L628)

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

[leafer/packages/interface/src/display/ILeaf.ts:629](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L629)

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

[leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L631)

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

[leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L632)

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

[leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L633)

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

[leafer/packages/interface/src/display/ILeaf.ts:634](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L634)

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

[leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L635)

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

[leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L637)

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

[leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L639)

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

[leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L640)

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

[leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L642)

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

[leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L643)

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

[leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L646)

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

[leafer/packages/interface/src/display/ILeaf.ts:647](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L647)

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

[leafer/packages/interface/src/display/ILeaf.ts:648](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L648)

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

[leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L649)

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

[leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L650)

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

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateHitCanvas](IBox.md#__updatehitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:652](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L652)

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

[leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L655)

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

[leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L656)

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

[leafer/packages/interface/src/display/ILeaf.ts:657](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L657)

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

[leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L659)

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

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateWorldOpacity](IBox.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateChange](IBox.md#__updatechange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:663](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L663)

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

[leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L666)

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

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updatePath](IBox.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRenderPath](IBox.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L669)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IBox](IBox.md).[getMotionPathData](IBox.md#getmotionpathdata)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:672](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L672)

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

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L673)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IBox](IBox.md).[getMotionTotal](IBox.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateMotionPath](IBox.md#__updatemotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L676)

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

[leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L678)

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

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L680)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateSortChildren](IBox.md#__updatesortchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L685)

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

[leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L688)

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

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[destroyEventer](IBox.md#destroyeventer)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/module/ILeafEventer.ts#L18)

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

[leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L45)

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

[leafer/packages/interface/src/event/IEventer.ts:46](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L46)

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

[leafer/packages/interface/src/event/IEventer.ts:47](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L47)

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

[leafer/packages/interface/src/event/IEventer.ts:48](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L48)

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

[leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L49)

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

[leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L50)

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

[leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L51)

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

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[destroy](IBox.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L54)

___

### \_\_updateRectRenderBounds

▸ **__updateRectRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[__updateRectRenderBounds](IBox.md#__updaterectrenderbounds)

#### Defined in

[ui/packages/interface/src/IUI.ts:332](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L332)

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

[ui/packages/interface/src/IUI.ts:333](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L333)

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

[ui/packages/interface/src/IUI.ts:349](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L349)

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

[ui/packages/interface/src/IUI.ts:350](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L350)

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

[ui/packages/interface/src/IUI.ts:351](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L351)

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

[ui/packages/interface/src/IUI.ts:352](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L352)

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

[ui/packages/interface/src/IUI.ts:353](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L353)

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

[ui/packages/interface/src/IUI.ts:354](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L354)

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

[ui/packages/interface/src/IUI.ts:355](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L355)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[removeAll](IBox.md#removeall)

#### Defined in

[ui/packages/interface/src/IUI.ts:356](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L356)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[clear](IBox.md#clear)

#### Defined in

[ui/packages/interface/src/IUI.ts:357](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L357)

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

[ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L389)

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

[ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L391)

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

[ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L392)

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

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L394)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IBox](IBox.md).[createProxyData](IBox.md#createproxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L395)

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

[ui/packages/interface/src/IUI.ts:397](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L397)

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

[ui/packages/interface/src/IUI.ts:398](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L398)

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

[ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L399)

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

[ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L400)

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

[ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L402)

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

[ui/packages/interface/src/IUI.ts:403](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L403)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IBox](IBox.md).[load](IBox.md#load)

#### Defined in

[ui/packages/interface/src/IUI.ts:405](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L405)

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

[ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L407)

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

[ui/packages/interface/src/IUI.ts:408](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L408)

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

[ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L409)

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

[ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L410)

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

[ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L412)

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

[ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L413)

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

[ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L415)

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

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L416)
