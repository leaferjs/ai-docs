# Interface: IGroup

## Hierarchy

- [`IUI`](IUI.md)

  ↳ **`IGroup`**

  ↳↳ [`ILeafer`](ILeafer.md)

  ↳↳ [`IPen`](IPen.md)

  ↳↳ [`IBox`](IBox.md)

  ↳↳ [`IEditorBase`](IEditorBase.md)

  ↳↳ [`IEditBoxBase`](IEditBoxBase.md)

  ↳↳ [`ISelectArea`](ISelectArea.md)

  ↳↳ [`IEditSelect`](IEditSelect.md)

  ↳↳ [`IScrollBar`](IScrollBar.md)

## Implemented by

- [`Group`](../classes/Group.md)

## Table of contents

### Properties

- [id](IGroup.md#id)
- [name](IGroup.md#name)
- [className](IGroup.md#classname)
- [blendMode](IGroup.md#blendmode)
- [opacity](IGroup.md#opacity)
- [visible](IGroup.md#visible)
- [selected](IGroup.md#selected)
- [disabled](IGroup.md#disabled)
- [locked](IGroup.md#locked)
- [zIndex](IGroup.md#zindex)
- [mask](IGroup.md#mask)
- [eraser](IGroup.md#eraser)
- [filter](IGroup.md#filter)
- [x](IGroup.md#x)
- [y](IGroup.md#y)
- [width](IGroup.md#width)
- [height](IGroup.md#height)
- [scaleX](IGroup.md#scalex)
- [scaleY](IGroup.md#scaley)
- [rotation](IGroup.md#rotation)
- [skewX](IGroup.md#skewx)
- [skewY](IGroup.md#skewy)
- [scale](IGroup.md#scale)
- [offsetX](IGroup.md#offsetx)
- [offsetY](IGroup.md#offsety)
- [scrollX](IGroup.md#scrollx)
- [scrollY](IGroup.md#scrolly)
- [origin](IGroup.md#origin)
- [around](IGroup.md#around)
- [lazy](IGroup.md#lazy)
- [pixelRatio](IGroup.md#pixelratio)
- [path](IGroup.md#path)
- [windingRule](IGroup.md#windingrule)
- [closed](IGroup.md#closed)
- [flow](IGroup.md#flow)
- [padding](IGroup.md#padding)
- [gap](IGroup.md#gap)
- [flowAlign](IGroup.md#flowalign)
- [flowWrap](IGroup.md#flowwrap)
- [itemBox](IGroup.md#itembox)
- [inFlow](IGroup.md#inflow)
- [autoWidth](IGroup.md#autowidth)
- [autoHeight](IGroup.md#autoheight)
- [lockRatio](IGroup.md#lockratio)
- [autoBox](IGroup.md#autobox)
- [widthRange](IGroup.md#widthrange)
- [heightRange](IGroup.md#heightrange)
- [draggable](IGroup.md#draggable)
- [dragBounds](IGroup.md#dragbounds)
- [editable](IGroup.md#editable)
- [hittable](IGroup.md#hittable)
- [hitFill](IGroup.md#hitfill)
- [hitStroke](IGroup.md#hitstroke)
- [hitBox](IGroup.md#hitbox)
- [hitChildren](IGroup.md#hitchildren)
- [hitSelf](IGroup.md#hitself)
- [hitRadius](IGroup.md#hitradius)
- [button](IGroup.md#button)
- [cursor](IGroup.md#cursor)
- [motionPath](IGroup.md#motionpath)
- [motionPrecision](IGroup.md#motionprecision)
- [motion](IGroup.md#motion)
- [motionRotation](IGroup.md#motionrotation)
- [normalStyle](IGroup.md#normalstyle)
- [event](IGroup.md#event)
- [data](IGroup.md#data)
- [noBounds](IGroup.md#nobounds)
- [tag](IGroup.md#tag)
- [\_\_tag](IGroup.md#__tag)
- [innerName](IGroup.md#innername)
- [\_\_DataProcessor](IGroup.md#__dataprocessor)
- [\_\_LayoutProcessor](IGroup.md#__layoutprocessor)
- [leaferIsCreated](IGroup.md#leaferiscreated)
- [leaferIsReady](IGroup.md#leaferisready)
- [isApp](IGroup.md#isapp)
- [isLeafer](IGroup.md#isleafer)
- [isBranch](IGroup.md#isbranch)
- [isBranchLeaf](IGroup.md#isbranchleaf)
- [isOutside](IGroup.md#isoutside)
- [syncEventer](IGroup.md#synceventer)
- [lockNormalStyle](IGroup.md#locknormalstyle)
- [\_\_layout](IGroup.md#__layout)
- [\_\_world](IGroup.md#__world)
- [\_\_local](IGroup.md#__local)
- [\_\_nowWorld](IGroup.md#__nowworld)
- [\_\_cameraWorld](IGroup.md#__cameraworld)
- [\_\_localMatrix](IGroup.md#__localmatrix)
- [\_\_localBoxBounds](IGroup.md#__localboxbounds)
- [\_\_worldOpacity](IGroup.md#__worldopacity)
- [worldTransform](IGroup.md#worldtransform)
- [localTransform](IGroup.md#localtransform)
- [boxBounds](IGroup.md#boxbounds)
- [renderBounds](IGroup.md#renderbounds)
- [worldBoxBounds](IGroup.md#worldboxbounds)
- [worldStrokeBounds](IGroup.md#worldstrokebounds)
- [worldRenderBounds](IGroup.md#worldrenderbounds)
- [worldOpacity](IGroup.md#worldopacity)
- [\_\_level](IGroup.md#__level)
- [\_\_tempNumber](IGroup.md#__tempnumber)
- [\_\_worldFlipped](IGroup.md#__worldflipped)
- [\_\_hasAutoLayout](IGroup.md#__hasautolayout)
- [\_\_hasMotionPath](IGroup.md#__hasmotionpath)
- [\_\_hasMask](IGroup.md#__hasmask)
- [\_\_hasEraser](IGroup.md#__haseraser)
- [\_\_hitCanvas](IGroup.md#__hitcanvas)
- [\_\_flowBounds](IGroup.md#__flowbounds)
- [\_\_widthGrow](IGroup.md#__widthgrow)
- [\_\_heightGrow](IGroup.md#__heightgrow)
- [\_\_hasGrow](IGroup.md#__hasgrow)
- [\_\_onlyHitMask](IGroup.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IGroup.md#__ignorehitworld)
- [\_\_inLazyBounds](IGroup.md#__inlazybounds)
- [pathInputed](IGroup.md#pathinputed)
- [destroyed](IGroup.md#destroyed)
- [innerId](IGroup.md#innerid)
- [\_\_captureMap](IGroup.md#__capturemap)
- [\_\_bubbleMap](IGroup.md#__bubblemap)
- [cornerRadius](IGroup.md#cornerradius)
- [cornerSmoothing](IGroup.md#cornersmoothing)
- [fill](IGroup.md#fill)
- [stroke](IGroup.md#stroke)
- [strokeAlign](IGroup.md#strokealign)
- [strokeWidth](IGroup.md#strokewidth)
- [strokeWidthFixed](IGroup.md#strokewidthfixed)
- [strokeCap](IGroup.md#strokecap)
- [strokeJoin](IGroup.md#strokejoin)
- [dashPattern](IGroup.md#dashpattern)
- [dashOffset](IGroup.md#dashoffset)
- [miterLimit](IGroup.md#miterlimit)
- [startArrow](IGroup.md#startarrow)
- [endArrow](IGroup.md#endarrow)
- [shadow](IGroup.md#shadow)
- [innerShadow](IGroup.md#innershadow)
- [blur](IGroup.md#blur)
- [backgroundBlur](IGroup.md#backgroundblur)
- [grayscale](IGroup.md#grayscale)
- [\_\_](IGroup.md#__)
- [children](IGroup.md#children)
- [app](IGroup.md#app)
- [leafer](IGroup.md#leafer)
- [parent](IGroup.md#parent)
- [zoomLayer](IGroup.md#zoomlayer)
- [isFrame](IGroup.md#isframe)
- [isOverflow](IGroup.md#isoverflow)
- [proxyData](IGroup.md#proxydata)
- [\_\_proxyData](IGroup.md#__proxydata)
- [animation](IGroup.md#animation)
- [animationOut](IGroup.md#animationout)
- [editConfig](IGroup.md#editconfig)
- [editOuter](IGroup.md#editouter)
- [editInner](IGroup.md#editinner)
- [\_\_animate](IGroup.md#__animate)
- [pen](IGroup.md#pen)
- [transition](IGroup.md#transition)
- [transitionOut](IGroup.md#transitionout)
- [states](IGroup.md#states)
- [state](IGroup.md#state)
- [hoverStyle](IGroup.md#hoverstyle)
- [pressStyle](IGroup.md#pressstyle)
- [focusStyle](IGroup.md#focusstyle)
- [selectedStyle](IGroup.md#selectedstyle)
- [disabledStyle](IGroup.md#disabledstyle)
- [placeholderStyle](IGroup.md#placeholderstyle)

### Methods

- [resetCustom](IGroup.md#resetcustom)
- [waitParent](IGroup.md#waitparent)
- [waitLeafer](IGroup.md#waitleafer)
- [nextRender](IGroup.md#nextrender)
- [removeNextRender](IGroup.md#removenextrender)
- [\_\_bindLeafer](IGroup.md#__bindleafer)
- [setAttr](IGroup.md#setattr)
- [getAttr](IGroup.md#getattr)
- [getComputedAttr](IGroup.md#getcomputedattr)
- [toString](IGroup.md#tostring)
- [toSVG](IGroup.md#tosvg)
- [\_\_SVG](IGroup.md#__svg)
- [toHTML](IGroup.md#tohtml)
- [\_\_setAttr](IGroup.md#__setattr)
- [\_\_getAttr](IGroup.md#__getattr)
- [setProxyAttr](IGroup.md#setproxyattr)
- [getProxyAttr](IGroup.md#getproxyattr)
- [focus](IGroup.md#focus)
- [updateState](IGroup.md#updatestate)
- [updateLayout](IGroup.md#updatelayout)
- [forceUpdate](IGroup.md#forceupdate)
- [forceRender](IGroup.md#forcerender)
- [\_\_extraUpdate](IGroup.md#__extraupdate)
- [\_\_updateWorldMatrix](IGroup.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IGroup.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IGroup.md#__updateworldbounds)
- [\_\_updateLocalBounds](IGroup.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IGroup.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IGroup.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IGroup.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IGroup.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IGroup.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IGroup.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IGroup.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IGroup.md#__updateautolayout)
- [\_\_updateFlowLayout](IGroup.md#__updateflowlayout)
- [\_\_updateNaturalSize](IGroup.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IGroup.md#__updatestrokespread)
- [\_\_updateRenderSpread](IGroup.md#__updaterenderspread)
- [\_\_onUpdateSize](IGroup.md#__onupdatesize)
- [\_\_updateEraser](IGroup.md#__updateeraser)
- [\_\_updateMask](IGroup.md#__updatemask)
- [\_\_renderMask](IGroup.md#__rendermask)
- [\_\_renderEraser](IGroup.md#__rendereraser)
- [\_\_getNowWorld](IGroup.md#__getnowworld)
- [getTransform](IGroup.md#gettransform)
- [getBounds](IGroup.md#getbounds)
- [getLayoutBounds](IGroup.md#getlayoutbounds)
- [getLayoutPoints](IGroup.md#getlayoutpoints)
- [getWorldBounds](IGroup.md#getworldbounds)
- [worldToLocal](IGroup.md#worldtolocal)
- [localToWorld](IGroup.md#localtoworld)
- [worldToInner](IGroup.md#worldtoinner)
- [innerToWorld](IGroup.md#innertoworld)
- [getBoxPoint](IGroup.md#getboxpoint)
- [getBoxPointByInner](IGroup.md#getboxpointbyinner)
- [getInnerPoint](IGroup.md#getinnerpoint)
- [getInnerPointByBox](IGroup.md#getinnerpointbybox)
- [getInnerPointByLocal](IGroup.md#getinnerpointbylocal)
- [getLocalPoint](IGroup.md#getlocalpoint)
- [getLocalPointByInner](IGroup.md#getlocalpointbyinner)
- [getPagePoint](IGroup.md#getpagepoint)
- [getWorldPoint](IGroup.md#getworldpoint)
- [getWorldPointByBox](IGroup.md#getworldpointbybox)
- [getWorldPointByLocal](IGroup.md#getworldpointbylocal)
- [getWorldPointByPage](IGroup.md#getworldpointbypage)
- [setTransform](IGroup.md#settransform)
- [transform](IGroup.md#transform)
- [move](IGroup.md#move)
- [moveInner](IGroup.md#moveinner)
- [scaleOf](IGroup.md#scaleof)
- [rotateOf](IGroup.md#rotateof)
- [skewOf](IGroup.md#skewof)
- [transformWorld](IGroup.md#transformworld)
- [moveWorld](IGroup.md#moveworld)
- [scaleOfWorld](IGroup.md#scaleofworld)
- [rotateOfWorld](IGroup.md#rotateofworld)
- [skewOfWorld](IGroup.md#skewofworld)
- [flip](IGroup.md#flip)
- [scaleResize](IGroup.md#scaleresize)
- [\_\_scaleResize](IGroup.md#__scaleresize)
- [resizeWidth](IGroup.md#resizewidth)
- [resizeHeight](IGroup.md#resizeheight)
- [\_\_hitWorld](IGroup.md#__hitworld)
- [\_\_hit](IGroup.md#__hit)
- [\_\_hitFill](IGroup.md#__hitfill)
- [\_\_hitStroke](IGroup.md#__hitstroke)
- [\_\_hitPixel](IGroup.md#__hitpixel)
- [\_\_drawHitPath](IGroup.md#__drawhitpath)
- [\_\_updateHitCanvas](IGroup.md#__updatehitcanvas)
- [\_\_render](IGroup.md#__render)
- [\_\_drawFast](IGroup.md#__drawfast)
- [\_\_draw](IGroup.md#__draw)
- [\_\_clip](IGroup.md#__clip)
- [\_\_renderShape](IGroup.md#__rendershape)
- [\_\_updateWorldOpacity](IGroup.md#__updateworldopacity)
- [\_\_updateChange](IGroup.md#__updatechange)
- [\_\_drawPath](IGroup.md#__drawpath)
- [\_\_drawRenderPath](IGroup.md#__drawrenderpath)
- [\_\_updatePath](IGroup.md#__updatepath)
- [\_\_updateRenderPath](IGroup.md#__updaterenderpath)
- [getMotionPathData](IGroup.md#getmotionpathdata)
- [getMotionPoint](IGroup.md#getmotionpoint)
- [getMotionTotal](IGroup.md#getmotiontotal)
- [\_\_updateMotionPath](IGroup.md#__updatemotionpath)
- [\_\_runAnimation](IGroup.md#__runanimation)
- [\_\_emitLifeEvent](IGroup.md#__emitlifeevent)
- [\_\_updateSortChildren](IGroup.md#__updatesortchildren)
- [dropTo](IGroup.md#dropto)
- [\_\_realSetAttr](IGroup.md#__realsetattr)
- [destroyEventer](IGroup.md#destroyeventer)
- [on](IGroup.md#on)
- [off](IGroup.md#off)
- [on\_](IGroup.md#on_)
- [off\_](IGroup.md#off_)
- [once](IGroup.md#once)
- [emit](IGroup.md#emit)
- [emitEvent](IGroup.md#emitevent)
- [hasEvent](IGroup.md#hasevent)
- [destroy](IGroup.md#destroy)
- [pick](IGroup.md#pick)
- [add](IGroup.md#add)
- [addAt](IGroup.md#addat)
- [addAfter](IGroup.md#addafter)
- [addBefore](IGroup.md#addbefore)
- [addMany](IGroup.md#addmany)
- [remove](IGroup.md#remove)
- [removeAll](IGroup.md#removeall)
- [clear](IGroup.md#clear)
- [reset](IGroup.md#reset)
- [set](IGroup.md#set)
- [toJSON](IGroup.md#tojson)
- [get](IGroup.md#get)
- [createProxyData](IGroup.md#createproxydata)
- [find](IGroup.md#find)
- [findTag](IGroup.md#findtag)
- [findOne](IGroup.md#findone)
- [findId](IGroup.md#findid)
- [getPath](IGroup.md#getpath)
- [getPathString](IGroup.md#getpathstring)
- [load](IGroup.md#load)
- [\_\_drawPathByData](IGroup.md#__drawpathbydata)
- [\_\_drawPathByBox](IGroup.md#__drawpathbybox)
- [\_\_drawAfterFill](IGroup.md#__drawafterfill)
- [\_\_drawContent](IGroup.md#__drawcontent)
- [animate](IGroup.md#animate)
- [killAnimate](IGroup.md#killanimate)
- [export](IGroup.md#export)
- [clone](IGroup.md#clone)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IUI](IUI.md).[id](IUI.md#id)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:216](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L216)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IUI](IUI.md).[name](IUI.md#name)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:217](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L217)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IUI](IUI.md).[className](IUI.md#classname)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:218](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L218)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IUI](IUI.md).[blendMode](IUI.md#blendmode)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:220](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L220)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IUI](IUI.md).[opacity](IUI.md#opacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:221](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L221)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IUI](IUI.md).[visible](IUI.md#visible)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:222](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L222)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IUI](IUI.md).[selected](IUI.md#selected)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L223)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IUI](IUI.md).[disabled](IUI.md#disabled)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L224)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IUI](IUI.md).[locked](IUI.md#locked)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L225)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IUI](IUI.md).[zIndex](IUI.md#zindex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:226](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L226)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IUI](IUI.md).[mask](IUI.md#mask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:228](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L228)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IUI](IUI.md).[eraser](IUI.md#eraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L229)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IUI](IUI.md).[filter](IUI.md#filter)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L230)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IUI](IUI.md).[x](IUI.md#x)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L233)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IUI](IUI.md).[y](IUI.md#y)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L234)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IUI](IUI.md).[width](IUI.md#width)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:235](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L235)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IUI](IUI.md).[height](IUI.md#height)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L236)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IUI](IUI.md).[scaleX](IUI.md#scalex)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L237)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IUI](IUI.md).[scaleY](IUI.md#scaley)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:238](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L238)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IUI](IUI.md).[rotation](IUI.md#rotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L239)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IUI](IUI.md).[skewX](IUI.md#skewx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L240)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IUI](IUI.md).[skewY](IUI.md#skewy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L241)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IUI](IUI.md).[scale](IUI.md#scale)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:243](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L243)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IUI](IUI.md).[offsetX](IUI.md#offsetx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L245)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IUI](IUI.md).[offsetY](IUI.md#offsety)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L246)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IUI](IUI.md).[scrollX](IUI.md#scrollx)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L247)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IUI](IUI.md).[scrollY](IUI.md#scrolly)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L248)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUI](IUI.md).[origin](IUI.md#origin)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L250)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IUI](IUI.md).[around](IUI.md#around)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L251)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IUI](IUI.md).[lazy](IUI.md#lazy)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:253](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L253)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IUI](IUI.md).[pixelRatio](IUI.md#pixelratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L254)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IUI](IUI.md).[path](IUI.md#path)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L256)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IUI](IUI.md).[windingRule](IUI.md#windingrule)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L257)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IUI](IUI.md).[closed](IUI.md#closed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L258)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IUI](IUI.md).[flow](IUI.md#flow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L261)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[padding](IUI.md#padding)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L262)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IUI](IUI.md).[gap](IUI.md#gap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:263](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L263)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IUI](IUI.md).[flowAlign](IUI.md#flowalign)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L264)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IUI](IUI.md).[flowWrap](IUI.md#flowwrap)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L265)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IUI](IUI.md).[itemBox](IUI.md#itembox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:266](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L266)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IUI](IUI.md).[inFlow](IUI.md#inflow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:268](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L268)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUI](IUI.md).[autoWidth](IUI.md#autowidth)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L269)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IUI](IUI.md).[autoHeight](IUI.md#autoheight)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L270)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IUI](IUI.md).[lockRatio](IUI.md#lockratio)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L271)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IUI](IUI.md).[autoBox](IUI.md#autobox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:272](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L272)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUI](IUI.md).[widthRange](IUI.md#widthrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L274)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IUI](IUI.md).[heightRange](IUI.md#heightrange)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L275)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IUI](IUI.md).[draggable](IUI.md#draggable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L278)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[dragBounds](IUI.md#dragbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L279)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IUI](IUI.md).[editable](IUI.md#editable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L281)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IUI](IUI.md).[hittable](IUI.md#hittable)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L283)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUI](IUI.md).[hitFill](IUI.md#hitfill)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L284)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IUI](IUI.md).[hitStroke](IUI.md#hitstroke)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L285)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitBox](IUI.md#hitbox)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:286](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L286)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitChildren](IUI.md#hitchildren)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L287)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IUI](IUI.md).[hitSelf](IUI.md#hitself)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L288)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IUI](IUI.md).[hitRadius](IUI.md#hitradius)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:289](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L289)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IUI](IUI.md).[button](IUI.md#button)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L291)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IUI](IUI.md).[cursor](IUI.md#cursor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L292)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IUI](IUI.md).[motionPath](IUI.md#motionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:294](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L294)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IUI](IUI.md).[motionPrecision](IUI.md#motionprecision)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L295)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IUI](IUI.md).[motion](IUI.md#motion)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L297)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IUI](IUI.md).[motionRotation](IUI.md#motionrotation)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L298)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[normalStyle](IUI.md#normalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L300)

___

### event

• `Optional` **event**: [`IEventMap`](IEventMap.md)

#### Inherited from

[IUI](IUI.md).[event](IUI.md#event)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L302)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[data](IUI.md#data)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L305)

___

### noBounds

• `Optional` **noBounds**: `boolean`

#### Inherited from

[IUI](IUI.md).[noBounds](IUI.md#nobounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L314)

___

### tag

• **tag**: `string`

#### Inherited from

[IUI](IUI.md).[tag](IUI.md#tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:433](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L433)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IUI](IUI.md).[__tag](IUI.md#__tag)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:434](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L434)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IUI](IUI.md).[innerName](IUI.md#innername)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:435](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L435)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[__DataProcessor](IUI.md#__dataprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:437](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L437)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IUI](IUI.md).[__LayoutProcessor](IUI.md#__layoutprocessor)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:438](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L438)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IUI](IUI.md).[leaferIsCreated](IUI.md#leaferiscreated)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:445](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L445)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IUI](IUI.md).[leaferIsReady](IUI.md#leaferisready)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:446](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L446)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IUI](IUI.md).[isApp](IUI.md#isapp)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:448](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L448)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IUI](IUI.md).[isLeafer](IUI.md#isleafer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:449](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L449)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IUI](IUI.md).[isBranch](IUI.md#isbranch)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:450](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L450)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IUI](IUI.md).[isBranchLeaf](IUI.md#isbranchleaf)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:451](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L451)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IUI](IUI.md).[isOutside](IUI.md#isoutside)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L452)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IUI](IUI.md).[syncEventer](IUI.md#synceventer)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:459](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L459)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IUI](IUI.md).[lockNormalStyle](IUI.md#locknormalstyle)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:460](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L460)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IUI](IUI.md).[__layout](IUI.md#__layout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:462](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L462)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__world](IUI.md#__world)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L464)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__local](IUI.md#__local)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L465)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__nowWorld](IUI.md#__nowworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L467)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IUI](IUI.md).[__cameraWorld](IUI.md#__cameraworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L468)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IUI](IUI.md).[__localMatrix](IUI.md#__localmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L470)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__localBoxBounds](IUI.md#__localboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L471)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IUI](IUI.md).[__worldOpacity](IUI.md#__worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:473](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L473)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IUI](IUI.md).[worldTransform](IUI.md#worldtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:475](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L475)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IUI](IUI.md).[localTransform](IUI.md#localtransform)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:476](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L476)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[boxBounds](IUI.md#boxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L478)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[renderBounds](IUI.md#renderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L479)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldBoxBounds](IUI.md#worldboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:480](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L480)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldStrokeBounds](IUI.md#worldstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L481)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[worldRenderBounds](IUI.md#worldrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:482](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L482)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IUI](IUI.md).[worldOpacity](IUI.md#worldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IUI](IUI.md).[__level](IUI.md#__level)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IUI](IUI.md).[__tempNumber](IUI.md#__tempnumber)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IUI](IUI.md).[__worldFlipped](IUI.md#__worldflipped)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasAutoLayout](IUI.md#__hasautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L494)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasMotionPath](IUI.md#__hasmotionpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasMask](IUI.md#__hasmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L497)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasEraser](IUI.md#__haseraser)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L498)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IUI](IUI.md).[__hitCanvas](IUI.md#__hitcanvas)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:499](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L499)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IUI](IUI.md).[__flowBounds](IUI.md#__flowbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L501)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IUI](IUI.md).[__widthGrow](IUI.md#__widthgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L502)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IUI](IUI.md).[__heightGrow](IUI.md#__heightgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L503)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IUI](IUI.md).[__hasGrow](IUI.md#__hasgrow)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L504)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IUI](IUI.md).[__onlyHitMask](IUI.md#__onlyhitmask)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IUI](IUI.md).[__ignoreHitWorld](IUI.md#__ignorehitworld)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:507](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L507)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IUI](IUI.md).[__inLazyBounds](IUI.md#__inlazybounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L508)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IUI](IUI.md).[pathInputed](IUI.md#pathinputed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:510](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L510)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IUI](IUI.md).[destroyed](IUI.md#destroyed)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:512](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L512)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IUI](IUI.md).[innerId](IUI.md#innerid)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:39](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L39)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IUI](IUI.md).[__captureMap](IUI.md#__capturemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:40](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L40)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IUI](IUI.md).[__bubbleMap](IUI.md#__bubblemap)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L41)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[cornerRadius](IUI.md#cornerradius)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IUI](IUI.md).[cornerSmoothing](IUI.md#cornersmoothing)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IUI](IUI.md).[fill](IUI.md#fill)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IUI](IUI.md).[stroke](IUI.md#stroke)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L40)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IUI](IUI.md).[strokeAlign](IUI.md#strokealign)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L42)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IUI](IUI.md).[strokeWidth](IUI.md#strokewidth)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Inherited from

[IUI](IUI.md).[strokeWidthFixed](IUI.md#strokewidthfixed)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:44](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L44)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IUI](IUI.md).[strokeCap](IUI.md#strokecap)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:45](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L45)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IUI](IUI.md).[strokeJoin](IUI.md#strokejoin)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:46](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L46)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IUI](IUI.md).[dashPattern](IUI.md#dashpattern)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:47](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L47)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IUI](IUI.md).[dashOffset](IUI.md#dashoffset)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:48](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L48)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IUI](IUI.md).[miterLimit](IUI.md#miterlimit)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:49](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L49)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUI](IUI.md).[startArrow](IUI.md#startarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:51](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L51)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Inherited from

[IUI](IUI.md).[endArrow](IUI.md#endarrow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:52](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L52)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUI](IUI.md).[shadow](IUI.md#shadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L153)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IUI](IUI.md).[innerShadow](IUI.md#innershadow)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L154)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUI](IUI.md).[blur](IUI.md#blur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:155](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L155)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IUI](IUI.md).[backgroundBlur](IUI.md#backgroundblur)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:156](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L156)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IUI](IUI.md).[grayscale](IUI.md#grayscale)

#### Defined in

[ui/packages/interface/src/ICommonAttr.ts:157](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/ICommonAttr.ts#L157)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Overrides

[IUI](IUI.md).[__](IUI.md#__)

#### Defined in

[ui/packages/interface/src/IUI.ts:347](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L347)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Overrides

[IUI](IUI.md).[children](IUI.md#children)

#### Defined in

[ui/packages/interface/src/IUI.ts:348](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L348)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IUI](IUI.md).[app](IUI.md#app)

#### Defined in

[ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L366)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IUI](IUI.md).[leafer](IUI.md#leafer)

#### Defined in

[ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L367)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IUI](IUI.md).[parent](IUI.md#parent)

#### Defined in

[ui/packages/interface/src/IUI.ts:368](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L368)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IUI](IUI.md).[zoomLayer](IUI.md#zoomlayer)

#### Defined in

[ui/packages/interface/src/IUI.ts:369](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L369)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IUI](IUI.md).[isFrame](IUI.md#isframe)

#### Defined in

[ui/packages/interface/src/IUI.ts:370](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L370)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IUI](IUI.md).[isOverflow](IUI.md#isoverflow)

#### Defined in

[ui/packages/interface/src/IUI.ts:371](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L371)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[proxyData](IUI.md#proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:373](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L373)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[__proxyData](IUI.md#__proxydata)

#### Defined in

[ui/packages/interface/src/IUI.ts:374](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L374)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUI](IUI.md).[animation](IUI.md#animation)

#### Defined in

[ui/packages/interface/src/IUI.ts:376](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L376)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IUI](IUI.md).[animationOut](IUI.md#animationout)

#### Defined in

[ui/packages/interface/src/IUI.ts:377](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L377)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IUI](IUI.md).[editConfig](IUI.md#editconfig)

#### Defined in

[ui/packages/interface/src/IUI.ts:379](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L379)

___

### editOuter

• **editOuter**: `string`

#### Inherited from

[IUI](IUI.md).[editOuter](IUI.md#editouter)

#### Defined in

[ui/packages/interface/src/IUI.ts:380](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L380)

___

### editInner

• **editInner**: `string`

#### Inherited from

[IUI](IUI.md).[editInner](IUI.md#editinner)

#### Defined in

[ui/packages/interface/src/IUI.ts:381](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IUI](IUI.md).[__animate](IUI.md#__animate)

#### Defined in

[ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L385)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IUI](IUI.md).[pen](IUI.md#pen)

#### Defined in

[ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L387)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUI](IUI.md).[transition](IUI.md#transition)

#### Defined in

[ui/packages/interface/src/IUI.ts:437](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L437)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IUI](IUI.md).[transitionOut](IUI.md#transitionout)

#### Defined in

[ui/packages/interface/src/IUI.ts:438](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L438)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IUI](IUI.md).[states](IUI.md#states)

#### Defined in

[ui/packages/interface/src/IUI.ts:440](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L440)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IUI](IUI.md).[state](IUI.md#state)

#### Defined in

[ui/packages/interface/src/IUI.ts:441](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L441)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[hoverStyle](IUI.md#hoverstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:443](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L443)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[pressStyle](IUI.md#pressstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:444](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L444)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[focusStyle](IUI.md#focusstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:445](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L445)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[selectedStyle](IUI.md#selectedstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:446](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L446)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[disabledStyle](IUI.md#disabledstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:447](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L447)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IUI](IUI.md).[placeholderStyle](IUI.md#placeholderstyle)

#### Defined in

[ui/packages/interface/src/IUI.ts:448](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L448)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[resetCustom](IUI.md#resetcustom)

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

[IUI](IUI.md).[waitParent](IUI.md#waitparent)

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

[IUI](IUI.md).[waitLeafer](IUI.md#waitleafer)

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

[IUI](IUI.md).[nextRender](IUI.md#nextrender)

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

[IUI](IUI.md).[removeNextRender](IUI.md#removenextrender)

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

[IUI](IUI.md).[__bindLeafer](IUI.md#__bindleafer)

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

[IUI](IUI.md).[setAttr](IUI.md#setattr)

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

[IUI](IUI.md).[getAttr](IUI.md#getattr)

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

[IUI](IUI.md).[getComputedAttr](IUI.md#getcomputedattr)

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

[IUI](IUI.md).[toString](IUI.md#tostring)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:531](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L531)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IUI](IUI.md).[toSVG](IUI.md#tosvg)

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

[IUI](IUI.md).[__SVG](IUI.md#__svg)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:533](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L533)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IUI](IUI.md).[toHTML](IUI.md#tohtml)

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

[IUI](IUI.md).[__setAttr](IUI.md#__setattr)

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

[IUI](IUI.md).[__getAttr](IUI.md#__getattr)

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

[IUI](IUI.md).[setProxyAttr](IUI.md#setproxyattr)

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

[IUI](IUI.md).[getProxyAttr](IUI.md#getproxyattr)

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

[IUI](IUI.md).[focus](IUI.md#focus)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L551)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[updateState](IUI.md#updatestate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L553)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[updateLayout](IUI.md#updatelayout)

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

[IUI](IUI.md).[forceUpdate](IUI.md#forceupdate)

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

[IUI](IUI.md).[forceRender](IUI.md#forcerender)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L556)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__extraUpdate](IUI.md#__extraupdate)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L558)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldMatrix](IUI.md#__updateworldmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:561](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L561)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalMatrix](IUI.md#__updatelocalmatrix)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:562](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L562)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldBounds](IUI.md#__updateworldbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L565)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalBounds](IUI.md#__updatelocalbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L566)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalBoxBounds](IUI.md#__updatelocalboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L568)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalStrokeBounds](IUI.md#__updatelocalstrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:569](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L569)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateLocalRenderBounds](IUI.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:570](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L570)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateContentBounds](IUI.md#__updatecontentbounds)

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

[IUI](IUI.md).[__updateBoxBounds](IUI.md#__updateboxbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:573](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L573)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateStrokeBounds](IUI.md#__updatestrokebounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:574](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L574)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateRenderBounds](IUI.md#__updaterenderbounds)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:575](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L575)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateAutoLayout](IUI.md#__updateautolayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:577](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L577)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateFlowLayout](IUI.md#__updateflowlayout)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L578)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateNaturalSize](IUI.md#__updatenaturalsize)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L579)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[__updateStrokeSpread](IUI.md#__updatestrokespread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[__updateRenderSpread](IUI.md#__updaterenderspread)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:582](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L582)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__onUpdateSize](IUI.md#__onupdatesize)

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

[IUI](IUI.md).[__updateEraser](IUI.md#__updateeraser)

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

[IUI](IUI.md).[__updateMask](IUI.md#__updatemask)

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

[IUI](IUI.md).[__renderMask](IUI.md#__rendermask)

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

[IUI](IUI.md).[__renderEraser](IUI.md#__rendereraser)

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

[IUI](IUI.md).[__getNowWorld](IUI.md#__getnowworld)

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

[IUI](IUI.md).[getTransform](IUI.md#gettransform)

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

[IUI](IUI.md).[getBounds](IUI.md#getbounds)

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

[IUI](IUI.md).[getLayoutBounds](IUI.md#getlayoutbounds)

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

[IUI](IUI.md).[getLayoutPoints](IUI.md#getlayoutpoints)

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

[IUI](IUI.md).[getWorldBounds](IUI.md#getworldbounds)

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

[IUI](IUI.md).[worldToLocal](IUI.md#worldtolocal)

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

[IUI](IUI.md).[localToWorld](IUI.md#localtoworld)

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

[IUI](IUI.md).[worldToInner](IUI.md#worldtoinner)

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

[IUI](IUI.md).[innerToWorld](IUI.md#innertoworld)

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

[IUI](IUI.md).[getBoxPoint](IUI.md#getboxpoint)

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

[IUI](IUI.md).[getBoxPointByInner](IUI.md#getboxpointbyinner)

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

[IUI](IUI.md).[getInnerPoint](IUI.md#getinnerpoint)

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

[IUI](IUI.md).[getInnerPointByBox](IUI.md#getinnerpointbybox)

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

[IUI](IUI.md).[getInnerPointByLocal](IUI.md#getinnerpointbylocal)

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

[IUI](IUI.md).[getLocalPoint](IUI.md#getlocalpoint)

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

[IUI](IUI.md).[getLocalPointByInner](IUI.md#getlocalpointbyinner)

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

[IUI](IUI.md).[getPagePoint](IUI.md#getpagepoint)

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

[IUI](IUI.md).[getWorldPoint](IUI.md#getworldpoint)

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

[IUI](IUI.md).[getWorldPointByBox](IUI.md#getworldpointbybox)

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

[IUI](IUI.md).[getWorldPointByLocal](IUI.md#getworldpointbylocal)

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

[IUI](IUI.md).[getWorldPointByPage](IUI.md#getworldpointbypage)

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

[IUI](IUI.md).[setTransform](IUI.md#settransform)

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

[IUI](IUI.md).[transform](IUI.md#transform)

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

[IUI](IUI.md).[move](IUI.md#move)

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

[IUI](IUI.md).[moveInner](IUI.md#moveinner)

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

[IUI](IUI.md).[scaleOf](IUI.md#scaleof)

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

[IUI](IUI.md).[rotateOf](IUI.md#rotateof)

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

[IUI](IUI.md).[skewOf](IUI.md#skewof)

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

[IUI](IUI.md).[transformWorld](IUI.md#transformworld)

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

[IUI](IUI.md).[moveWorld](IUI.md#moveworld)

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

[IUI](IUI.md).[scaleOfWorld](IUI.md#scaleofworld)

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

[IUI](IUI.md).[rotateOfWorld](IUI.md#rotateofworld)

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

[IUI](IUI.md).[skewOfWorld](IUI.md#skewofworld)

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

[IUI](IUI.md).[flip](IUI.md#flip)

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

[IUI](IUI.md).[scaleResize](IUI.md#scaleresize)

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

[IUI](IUI.md).[__scaleResize](IUI.md#__scaleresize)

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

[IUI](IUI.md).[resizeWidth](IUI.md#resizewidth)

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

[IUI](IUI.md).[resizeHeight](IUI.md#resizeheight)

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

[IUI](IUI.md).[__hitWorld](IUI.md#__hitworld)

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

[IUI](IUI.md).[__hit](IUI.md#__hit)

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

[IUI](IUI.md).[__hitFill](IUI.md#__hitfill)

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

[IUI](IUI.md).[__hitStroke](IUI.md#__hitstroke)

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

[IUI](IUI.md).[__hitPixel](IUI.md#__hitpixel)

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

[IUI](IUI.md).[__drawHitPath](IUI.md#__drawhitpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L651)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateHitCanvas](IUI.md#__updatehitcanvas)

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

[IUI](IUI.md).[__render](IUI.md#__render)

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

[IUI](IUI.md).[__drawFast](IUI.md#__drawfast)

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

[IUI](IUI.md).[__draw](IUI.md#__draw)

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

[IUI](IUI.md).[__clip](IUI.md#__clip)

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

[IUI](IUI.md).[__renderShape](IUI.md#__rendershape)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L660)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateWorldOpacity](IUI.md#__updateworldopacity)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L662)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateChange](IUI.md#__updatechange)

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

[IUI](IUI.md).[__drawPath](IUI.md#__drawpath)

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

[IUI](IUI.md).[__drawRenderPath](IUI.md#__drawrenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L667)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updatePath](IUI.md#__updatepath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:668](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L668)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateRenderPath](IUI.md#__updaterenderpath)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L669)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IUI](IUI.md).[getMotionPathData](IUI.md#getmotionpathdata)

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

[IUI](IUI.md).[getMotionPoint](IUI.md#getmotionpoint)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L673)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IUI](IUI.md).[getMotionTotal](IUI.md#getmotiontotal)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L674)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateMotionPath](IUI.md#__updatemotionpath)

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

[IUI](IUI.md).[__runAnimation](IUI.md#__runanimation)

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

[IUI](IUI.md).[__emitLifeEvent](IUI.md#__emitlifeevent)

#### Defined in

[leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/ILeaf.ts#L680)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[__updateSortChildren](IUI.md#__updatesortchildren)

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

[IUI](IUI.md).[dropTo](IUI.md#dropto)

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

[IUI](IUI.md).[__realSetAttr](IUI.md#__realsetattr)

#### Defined in

[leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### destroyEventer

▸ `Optional` **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[destroyEventer](IUI.md#destroyeventer)

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

[IUI](IUI.md).[on](IUI.md#on)

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

[IUI](IUI.md).[off](IUI.md#off)

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

[IUI](IUI.md).[on_](IUI.md#on_)

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

[IUI](IUI.md).[off_](IUI.md#off_)

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

[IUI](IUI.md).[once](IUI.md#once)

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

[IUI](IUI.md).[emit](IUI.md#emit)

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

[IUI](IUI.md).[emitEvent](IUI.md#emitevent)

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

[IUI](IUI.md).[hasEvent](IUI.md#hasevent)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L52)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[destroy](IUI.md#destroy)

#### Defined in

[leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/0c6b9de/packages/interface/src/event/IEventer.ts#L54)

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

#### Overrides

[IUI](IUI.md).[add](IUI.md#add)

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

#### Overrides

[IUI](IUI.md).[remove](IUI.md#remove)

#### Defined in

[ui/packages/interface/src/IUI.ts:355](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L355)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Defined in

[ui/packages/interface/src/IUI.ts:356](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L356)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

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

[IUI](IUI.md).[reset](IUI.md#reset)

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

[IUI](IUI.md).[set](IUI.md#set)

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

[IUI](IUI.md).[toJSON](IUI.md#tojson)

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

[IUI](IUI.md).[get](IUI.md#get)

#### Defined in

[ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L394)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IUI](IUI.md).[createProxyData](IUI.md#createproxydata)

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

[IUI](IUI.md).[find](IUI.md#find)

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

[IUI](IUI.md).[findTag](IUI.md#findtag)

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

[IUI](IUI.md).[findOne](IUI.md#findone)

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

[IUI](IUI.md).[findId](IUI.md#findid)

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

[IUI](IUI.md).[getPath](IUI.md#getpath)

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

[IUI](IUI.md).[getPathString](IUI.md#getpathstring)

#### Defined in

[ui/packages/interface/src/IUI.ts:403](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L403)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[IUI](IUI.md).[load](IUI.md#load)

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

[IUI](IUI.md).[__drawPathByData](IUI.md#__drawpathbydata)

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

[IUI](IUI.md).[__drawPathByBox](IUI.md#__drawpathbybox)

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

[IUI](IUI.md).[__drawAfterFill](IUI.md#__drawafterfill)

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

[IUI](IUI.md).[__drawContent](IUI.md#__drawcontent)

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

[IUI](IUI.md).[animate](IUI.md#animate)

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

[IUI](IUI.md).[killAnimate](IUI.md#killanimate)

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

[IUI](IUI.md).[export](IUI.md#export)

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

[IUI](IUI.md).[clone](IUI.md#clone)

#### Defined in

[ui/packages/interface/src/IUI.ts:416](https://github.com/leaferjs/leafer-ui/blob/a39c489/packages/interface/src/IUI.ts#L416)
