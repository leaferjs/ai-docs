# Interface: IEditBoxBase

## Hierarchy

- [`IGroup`](IGroup.md)

  ↳ **`IEditBoxBase`**

  ↳↳ [`IEditBox`](IEditBox.md)

## Table of contents

### Properties

- [id](IEditBoxBase.md#id)
- [name](IEditBoxBase.md#name)
- [className](IEditBoxBase.md#classname)
- [blendMode](IEditBoxBase.md#blendmode)
- [opacity](IEditBoxBase.md#opacity)
- [visible](IEditBoxBase.md#visible)
- [selected](IEditBoxBase.md#selected)
- [disabled](IEditBoxBase.md#disabled)
- [locked](IEditBoxBase.md#locked)
- [zIndex](IEditBoxBase.md#zindex)
- [dim](IEditBoxBase.md#dim)
- [dimskip](IEditBoxBase.md#dimskip)
- [mask](IEditBoxBase.md#mask)
- [eraser](IEditBoxBase.md#eraser)
- [filter](IEditBoxBase.md#filter)
- [x](IEditBoxBase.md#x)
- [y](IEditBoxBase.md#y)
- [width](IEditBoxBase.md#width)
- [height](IEditBoxBase.md#height)
- [scaleX](IEditBoxBase.md#scalex)
- [scaleY](IEditBoxBase.md#scaley)
- [rotation](IEditBoxBase.md#rotation)
- [skewX](IEditBoxBase.md#skewx)
- [skewY](IEditBoxBase.md#skewy)
- [scale](IEditBoxBase.md#scale)
- [offsetX](IEditBoxBase.md#offsetx)
- [offsetY](IEditBoxBase.md#offsety)
- [scrollX](IEditBoxBase.md#scrollx)
- [scrollY](IEditBoxBase.md#scrolly)
- [origin](IEditBoxBase.md#origin)
- [around](IEditBoxBase.md#around)
- [lazy](IEditBoxBase.md#lazy)
- [pixelRatio](IEditBoxBase.md#pixelratio)
- [renderSpread](IEditBoxBase.md#renderspread)
- [path](IEditBoxBase.md#path)
- [windingRule](IEditBoxBase.md#windingrule)
- [closed](IEditBoxBase.md#closed)
- [flow](IEditBoxBase.md#flow)
- [padding](IEditBoxBase.md#padding)
- [gap](IEditBoxBase.md#gap)
- [flowAlign](IEditBoxBase.md#flowalign)
- [flowWrap](IEditBoxBase.md#flowwrap)
- [itemBox](IEditBoxBase.md#itembox)
- [inFlow](IEditBoxBase.md#inflow)
- [autoWidth](IEditBoxBase.md#autowidth)
- [autoHeight](IEditBoxBase.md#autoheight)
- [lockRatio](IEditBoxBase.md#lockratio)
- [autoBox](IEditBoxBase.md#autobox)
- [widthRange](IEditBoxBase.md#widthrange)
- [heightRange](IEditBoxBase.md#heightrange)
- [draggable](IEditBoxBase.md#draggable)
- [dragBounds](IEditBoxBase.md#dragbounds)
- [dragBoundsType](IEditBoxBase.md#dragboundstype)
- [editable](IEditBoxBase.md#editable)
- [hittable](IEditBoxBase.md#hittable)
- [hitFill](IEditBoxBase.md#hitfill)
- [hitStroke](IEditBoxBase.md#hitstroke)
- [hitBox](IEditBoxBase.md#hitbox)
- [hitChildren](IEditBoxBase.md#hitchildren)
- [hitSelf](IEditBoxBase.md#hitself)
- [hitRadius](IEditBoxBase.md#hitradius)
- [button](IEditBoxBase.md#button)
- [cursor](IEditBoxBase.md#cursor)
- [motionPath](IEditBoxBase.md#motionpath)
- [motionPrecision](IEditBoxBase.md#motionprecision)
- [motion](IEditBoxBase.md#motion)
- [motionRotation](IEditBoxBase.md#motionrotation)
- [normalStyle](IEditBoxBase.md#normalstyle)
- [event](IEditBoxBase.md#event)
- [data](IEditBoxBase.md#data)
- [tag](IEditBoxBase.md#tag)
- [\_\_tag](IEditBoxBase.md#__tag)
- [innerName](IEditBoxBase.md#innername)
- [\_\_DataProcessor](IEditBoxBase.md#__dataprocessor)
- [\_\_LayoutProcessor](IEditBoxBase.md#__layoutprocessor)
- [leaferIsCreated](IEditBoxBase.md#leaferiscreated)
- [leaferIsReady](IEditBoxBase.md#leaferisready)
- [isApp](IEditBoxBase.md#isapp)
- [isLeafer](IEditBoxBase.md#isleafer)
- [isBranch](IEditBoxBase.md#isbranch)
- [isBranchLeaf](IEditBoxBase.md#isbranchleaf)
- [isOutside](IEditBoxBase.md#isoutside)
- [syncEventer](IEditBoxBase.md#synceventer)
- [lockNormalStyle](IEditBoxBase.md#locknormalstyle)
- [\_\_layout](IEditBoxBase.md#__layout)
- [\_\_world](IEditBoxBase.md#__world)
- [\_\_local](IEditBoxBase.md#__local)
- [\_\_nowWorld](IEditBoxBase.md#__nowworld)
- [\_\_cameraWorld](IEditBoxBase.md#__cameraworld)
- [\_\_localMatrix](IEditBoxBase.md#__localmatrix)
- [\_\_localBoxBounds](IEditBoxBase.md#__localboxbounds)
- [\_\_worldOpacity](IEditBoxBase.md#__worldopacity)
- [worldTransform](IEditBoxBase.md#worldtransform)
- [localTransform](IEditBoxBase.md#localtransform)
- [\_\_scrollWorld](IEditBoxBase.md#__scrollworld)
- [scrollWorldTransform](IEditBoxBase.md#scrollworldtransform)
- [boxBounds](IEditBoxBase.md#boxbounds)
- [renderBounds](IEditBoxBase.md#renderbounds)
- [worldBoxBounds](IEditBoxBase.md#worldboxbounds)
- [worldStrokeBounds](IEditBoxBase.md#worldstrokebounds)
- [worldRenderBounds](IEditBoxBase.md#worldrenderbounds)
- [worldOpacity](IEditBoxBase.md#worldopacity)
- [\_\_level](IEditBoxBase.md#__level)
- [\_\_tempNumber](IEditBoxBase.md#__tempnumber)
- [\_\_worldFlipped](IEditBoxBase.md#__worldflipped)
- [\_\_hasAutoLayout](IEditBoxBase.md#__hasautolayout)
- [\_\_hasMotionPath](IEditBoxBase.md#__hasmotionpath)
- [\_\_hasMask](IEditBoxBase.md#__hasmask)
- [\_\_hasEraser](IEditBoxBase.md#__haseraser)
- [\_\_hitCanvas](IEditBoxBase.md#__hitcanvas)
- [\_\_flowBounds](IEditBoxBase.md#__flowbounds)
- [\_\_widthGrow](IEditBoxBase.md#__widthgrow)
- [\_\_heightGrow](IEditBoxBase.md#__heightgrow)
- [\_\_hasGrow](IEditBoxBase.md#__hasgrow)
- [\_\_onlyHitMask](IEditBoxBase.md#__onlyhitmask)
- [\_\_ignoreHitWorld](IEditBoxBase.md#__ignorehitworld)
- [\_\_inLazyBounds](IEditBoxBase.md#__inlazybounds)
- [pathInputed](IEditBoxBase.md#pathinputed)
- [isAutoWidth](IEditBoxBase.md#isautowidth)
- [isAutoHeight](IEditBoxBase.md#isautoheight)
- [destroyed](IEditBoxBase.md#destroyed)
- [topChildren](IEditBoxBase.md#topchildren)
- [innerId](IEditBoxBase.md#innerid)
- [\_\_captureMap](IEditBoxBase.md#__capturemap)
- [\_\_bubbleMap](IEditBoxBase.md#__bubblemap)
- [\_\_hasLocalEvent](IEditBoxBase.md#__haslocalevent)
- [\_\_hasWorldEvent](IEditBoxBase.md#__hasworldevent)
- [cornerRadius](IEditBoxBase.md#cornerradius)
- [cornerSmoothing](IEditBoxBase.md#cornersmoothing)
- [fill](IEditBoxBase.md#fill)
- [stroke](IEditBoxBase.md#stroke)
- [startArrow](IEditBoxBase.md#startarrow)
- [endArrow](IEditBoxBase.md#endarrow)
- [strokeAlign](IEditBoxBase.md#strokealign)
- [strokeWidth](IEditBoxBase.md#strokewidth)
- [strokeWidthFixed](IEditBoxBase.md#strokewidthfixed)
- [strokeCap](IEditBoxBase.md#strokecap)
- [strokeJoin](IEditBoxBase.md#strokejoin)
- [dashPattern](IEditBoxBase.md#dashpattern)
- [dashOffset](IEditBoxBase.md#dashoffset)
- [miterLimit](IEditBoxBase.md#miterlimit)
- [shadow](IEditBoxBase.md#shadow)
- [innerShadow](IEditBoxBase.md#innershadow)
- [blur](IEditBoxBase.md#blur)
- [backgroundBlur](IEditBoxBase.md#backgroundblur)
- [grayscale](IEditBoxBase.md#grayscale)
- [\_\_](IEditBoxBase.md#__)
- [children](IEditBoxBase.md#children)
- [childlessJSON](IEditBoxBase.md#childlessjson)
- [app](IEditBoxBase.md#app)
- [leafer](IEditBoxBase.md#leafer)
- [parent](IEditBoxBase.md#parent)
- [zoomLayer](IEditBoxBase.md#zoomlayer)
- [isFrame](IEditBoxBase.md#isframe)
- [isOverflow](IEditBoxBase.md#isoverflow)
- [useFastShadow](IEditBoxBase.md#usefastshadow)
- [proxyData](IEditBoxBase.md#proxydata)
- [\_\_proxyData](IEditBoxBase.md#__proxydata)
- [animation](IEditBoxBase.md#animation)
- [animationOut](IEditBoxBase.md#animationout)
- [\_\_box](IEditBoxBase.md#__box)
- [\_\_animate](IEditBoxBase.md#__animate)
- [pen](IEditBoxBase.md#pen)
- [transition](IEditBoxBase.md#transition)
- [transitionOut](IEditBoxBase.md#transitionout)
- [states](IEditBoxBase.md#states)
- [state](IEditBoxBase.md#state)
- [hoverStyle](IEditBoxBase.md#hoverstyle)
- [pressStyle](IEditBoxBase.md#pressstyle)
- [focusStyle](IEditBoxBase.md#focusstyle)
- [selectedStyle](IEditBoxBase.md#selectedstyle)
- [disabledStyle](IEditBoxBase.md#disabledstyle)
- [placeholderStyle](IEditBoxBase.md#placeholderstyle)
- [placeholderColor](IEditBoxBase.md#placeholdercolor)
- [placeholderDelay](IEditBoxBase.md#placeholderdelay)
- [editConfig](IEditBoxBase.md#editconfig)
- [editOuter](IEditBoxBase.md#editouter)
- [editInner](IEditBoxBase.md#editinner)
- [editor](IEditBoxBase.md#editor)
- [dragging](IEditBoxBase.md#dragging)
- [gesturing](IEditBoxBase.md#gesturing)
- [moving](IEditBoxBase.md#moving)
- [resizing](IEditBoxBase.md#resizing)
- [rotating](IEditBoxBase.md#rotating)
- [skewing](IEditBoxBase.md#skewing)
- [view](IEditBoxBase.md#view)
- [circle](IEditBoxBase.md#circle)
- [rect](IEditBoxBase.md#rect)
- [buttons](IEditBoxBase.md#buttons)
- [resizePoints](IEditBoxBase.md#resizepoints)
- [rotatePoints](IEditBoxBase.md#rotatepoints)
- [resizeLines](IEditBoxBase.md#resizelines)
- [enterPoint](IEditBoxBase.md#enterpoint)
- [dragPoint](IEditBoxBase.md#dragpoint)
- [dragStartData](IEditBoxBase.md#dragstartdata)
- [config](IEditBoxBase.md#config)
- [mergeConfig](IEditBoxBase.md#mergeconfig)
- [mergedConfig](IEditBoxBase.md#mergedconfig)
- [target](IEditBoxBase.md#target)
- [single](IEditBoxBase.md#single)
- [transformTool](IEditBoxBase.md#transformtool)
- [flipped](IEditBoxBase.md#flipped)
- [flippedX](IEditBoxBase.md#flippedx)
- [flippedY](IEditBoxBase.md#flippedy)
- [flippedOne](IEditBoxBase.md#flippedone)
- [canUse](IEditBoxBase.md#canuse)
- [canGesture](IEditBoxBase.md#cangesture)

### Methods

- [resetCustom](IEditBoxBase.md#resetcustom)
- [waitParent](IEditBoxBase.md#waitparent)
- [waitLeafer](IEditBoxBase.md#waitleafer)
- [nextRender](IEditBoxBase.md#nextrender)
- [removeNextRender](IEditBoxBase.md#removenextrender)
- [\_\_bindLeafer](IEditBoxBase.md#__bindleafer)
- [setAttr](IEditBoxBase.md#setattr)
- [getAttr](IEditBoxBase.md#getattr)
- [getComputedAttr](IEditBoxBase.md#getcomputedattr)
- [toString](IEditBoxBase.md#tostring)
- [toSVG](IEditBoxBase.md#tosvg)
- [\_\_SVG](IEditBoxBase.md#__svg)
- [toHTML](IEditBoxBase.md#tohtml)
- [\_\_setAttr](IEditBoxBase.md#__setattr)
- [\_\_getAttr](IEditBoxBase.md#__getattr)
- [setProxyAttr](IEditBoxBase.md#setproxyattr)
- [getProxyAttr](IEditBoxBase.md#getproxyattr)
- [focus](IEditBoxBase.md#focus)
- [updateState](IEditBoxBase.md#updatestate)
- [updateLayout](IEditBoxBase.md#updatelayout)
- [forceUpdate](IEditBoxBase.md#forceupdate)
- [forceRender](IEditBoxBase.md#forcerender)
- [\_\_extraUpdate](IEditBoxBase.md#__extraupdate)
- [\_\_updateWorldMatrix](IEditBoxBase.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](IEditBoxBase.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](IEditBoxBase.md#__updateworldbounds)
- [\_\_updateLocalBounds](IEditBoxBase.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](IEditBoxBase.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](IEditBoxBase.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](IEditBoxBase.md#__updatelocalrenderbounds)
- [\_\_updateContentBounds](IEditBoxBase.md#__updatecontentbounds)
- [\_\_updateBoxBounds](IEditBoxBase.md#__updateboxbounds)
- [\_\_updateStrokeBounds](IEditBoxBase.md#__updatestrokebounds)
- [\_\_updateRenderBounds](IEditBoxBase.md#__updaterenderbounds)
- [\_\_updateAutoLayout](IEditBoxBase.md#__updateautolayout)
- [\_\_updateFlowLayout](IEditBoxBase.md#__updateflowlayout)
- [\_\_updateNaturalSize](IEditBoxBase.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](IEditBoxBase.md#__updatestrokespread)
- [\_\_updateRenderSpread](IEditBoxBase.md#__updaterenderspread)
- [\_\_onUpdateSize](IEditBoxBase.md#__onupdatesize)
- [\_\_updateEraser](IEditBoxBase.md#__updateeraser)
- [\_\_updateMask](IEditBoxBase.md#__updatemask)
- [\_\_renderMask](IEditBoxBase.md#__rendermask)
- [\_\_renderEraser](IEditBoxBase.md#__rendereraser)
- [\_\_getNowWorld](IEditBoxBase.md#__getnowworld)
- [getClampRenderScale](IEditBoxBase.md#getclamprenderscale)
- [getRenderScaleData](IEditBoxBase.md#getrenderscaledata)
- [getTransform](IEditBoxBase.md#gettransform)
- [getBounds](IEditBoxBase.md#getbounds)
- [getLayoutBounds](IEditBoxBase.md#getlayoutbounds)
- [getLayoutPoints](IEditBoxBase.md#getlayoutpoints)
- [getWorldBounds](IEditBoxBase.md#getworldbounds)
- [worldToLocal](IEditBoxBase.md#worldtolocal)
- [localToWorld](IEditBoxBase.md#localtoworld)
- [worldToInner](IEditBoxBase.md#worldtoinner)
- [innerToWorld](IEditBoxBase.md#innertoworld)
- [getBoxPoint](IEditBoxBase.md#getboxpoint)
- [getBoxPointByInner](IEditBoxBase.md#getboxpointbyinner)
- [getInnerPoint](IEditBoxBase.md#getinnerpoint)
- [getInnerPointByBox](IEditBoxBase.md#getinnerpointbybox)
- [getInnerPointByLocal](IEditBoxBase.md#getinnerpointbylocal)
- [getLocalPoint](IEditBoxBase.md#getlocalpoint)
- [getLocalPointByInner](IEditBoxBase.md#getlocalpointbyinner)
- [getPagePoint](IEditBoxBase.md#getpagepoint)
- [getWorldPoint](IEditBoxBase.md#getworldpoint)
- [getWorldPointByBox](IEditBoxBase.md#getworldpointbybox)
- [getWorldPointByLocal](IEditBoxBase.md#getworldpointbylocal)
- [getWorldPointByPage](IEditBoxBase.md#getworldpointbypage)
- [setTransform](IEditBoxBase.md#settransform)
- [transform](IEditBoxBase.md#transform)
- [move](IEditBoxBase.md#move)
- [moveInner](IEditBoxBase.md#moveinner)
- [scaleOf](IEditBoxBase.md#scaleof)
- [rotateOf](IEditBoxBase.md#rotateof)
- [skewOf](IEditBoxBase.md#skewof)
- [transformWorld](IEditBoxBase.md#transformworld)
- [moveWorld](IEditBoxBase.md#moveworld)
- [scaleOfWorld](IEditBoxBase.md#scaleofworld)
- [rotateOfWorld](IEditBoxBase.md#rotateofworld)
- [skewOfWorld](IEditBoxBase.md#skewofworld)
- [flip](IEditBoxBase.md#flip)
- [scaleResize](IEditBoxBase.md#scaleresize)
- [\_\_scaleResize](IEditBoxBase.md#__scaleresize)
- [resizeWidth](IEditBoxBase.md#resizewidth)
- [resizeHeight](IEditBoxBase.md#resizeheight)
- [hit](IEditBoxBase.md#hit)
- [\_\_hitWorld](IEditBoxBase.md#__hitworld)
- [\_\_hit](IEditBoxBase.md#__hit)
- [\_\_hitFill](IEditBoxBase.md#__hitfill)
- [\_\_hitStroke](IEditBoxBase.md#__hitstroke)
- [\_\_hitPixel](IEditBoxBase.md#__hitpixel)
- [\_\_drawHitPath](IEditBoxBase.md#__drawhitpath)
- [\_\_updateHitCanvas](IEditBoxBase.md#__updatehitcanvas)
- [\_\_render](IEditBoxBase.md#__render)
- [\_\_drawFast](IEditBoxBase.md#__drawfast)
- [\_\_draw](IEditBoxBase.md#__draw)
- [\_\_clip](IEditBoxBase.md#__clip)
- [\_\_renderShape](IEditBoxBase.md#__rendershape)
- [\_\_drawShape](IEditBoxBase.md#__drawshape)
- [\_\_updateWorldOpacity](IEditBoxBase.md#__updateworldopacity)
- [\_\_updateChange](IEditBoxBase.md#__updatechange)
- [\_\_drawPath](IEditBoxBase.md#__drawpath)
- [\_\_drawRenderPath](IEditBoxBase.md#__drawrenderpath)
- [\_\_updatePath](IEditBoxBase.md#__updatepath)
- [\_\_updateRenderPath](IEditBoxBase.md#__updaterenderpath)
- [getMotionPathData](IEditBoxBase.md#getmotionpathdata)
- [getMotionPoint](IEditBoxBase.md#getmotionpoint)
- [getMotionTotal](IEditBoxBase.md#getmotiontotal)
- [\_\_updateMotionPath](IEditBoxBase.md#__updatemotionpath)
- [\_\_runAnimation](IEditBoxBase.md#__runanimation)
- [\_\_emitLifeEvent](IEditBoxBase.md#__emitlifeevent)
- [\_\_updateSortChildren](IEditBoxBase.md#__updatesortchildren)
- [dropTo](IEditBoxBase.md#dropto)
- [\_\_realSetAttr](IEditBoxBase.md#__realsetattr)
- [emitPropertyEvent](IEditBoxBase.md#emitpropertyevent)
- [destroyEventer](IEditBoxBase.md#destroyeventer)
- [on](IEditBoxBase.md#on)
- [off](IEditBoxBase.md#off)
- [on\_](IEditBoxBase.md#on_)
- [off\_](IEditBoxBase.md#off_)
- [once](IEditBoxBase.md#once)
- [emit](IEditBoxBase.md#emit)
- [emitEvent](IEditBoxBase.md#emitevent)
- [hasEvent](IEditBoxBase.md#hasevent)
- [destroy](IEditBoxBase.md#destroy)
- [pick](IEditBoxBase.md#pick)
- [add](IEditBoxBase.md#add)
- [addAt](IEditBoxBase.md#addat)
- [addAfter](IEditBoxBase.md#addafter)
- [addBefore](IEditBoxBase.md#addbefore)
- [addMany](IEditBoxBase.md#addmany)
- [remove](IEditBoxBase.md#remove)
- [removeAll](IEditBoxBase.md#removeall)
- [clear](IEditBoxBase.md#clear)
- [reset](IEditBoxBase.md#reset)
- [set](IEditBoxBase.md#set)
- [toJSON](IEditBoxBase.md#tojson)
- [get](IEditBoxBase.md#get)
- [createProxyData](IEditBoxBase.md#createproxydata)
- [find](IEditBoxBase.md#find)
- [findTag](IEditBoxBase.md#findtag)
- [findOne](IEditBoxBase.md#findone)
- [findId](IEditBoxBase.md#findid)
- [getPath](IEditBoxBase.md#getpath)
- [getPathString](IEditBoxBase.md#getpathstring)
- [\_\_drawPathByData](IEditBoxBase.md#__drawpathbydata)
- [\_\_drawPathByBox](IEditBoxBase.md#__drawpathbybox)
- [\_\_drawAfterFill](IEditBoxBase.md#__drawafterfill)
- [\_\_drawContent](IEditBoxBase.md#__drawcontent)
- [drawImagePlaceholder](IEditBoxBase.md#drawimageplaceholder)
- [animate](IEditBoxBase.md#animate)
- [killAnimate](IEditBoxBase.md#killanimate)
- [export](IEditBoxBase.md#export)
- [syncExport](IEditBoxBase.md#syncexport)
- [clone](IEditBoxBase.md#clone)
- [getPointStyle](IEditBoxBase.md#getpointstyle)
- [getPointsStyle](IEditBoxBase.md#getpointsstyle)
- [getMiddlePointsStyle](IEditBoxBase.md#getmiddlepointsstyle)
- [load](IEditBoxBase.md#load)
- [update](IEditBoxBase.md#update)
- [unload](IEditBoxBase.md#unload)
- [onArrow](IEditBoxBase.md#onarrow)
- [isHoldRotateKey](IEditBoxBase.md#isholdrotatekey)

## Properties

### id

• `Optional` **id**: `string`

#### Inherited from

[IGroup](IGroup.md).[id](IGroup.md#id)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:223](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L223)

___

### name

• `Optional` **name**: `string`

#### Inherited from

[IGroup](IGroup.md).[name](IGroup.md#name)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:224](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L224)

___

### className

• `Optional` **className**: `string`

#### Inherited from

[IGroup](IGroup.md).[className](IGroup.md#classname)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:225](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L225)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Inherited from

[IGroup](IGroup.md).[blendMode](IGroup.md#blendmode)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:227](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L227)

___

### opacity

• `Optional` **opacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[opacity](IGroup.md#opacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:229](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L229)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Inherited from

[IGroup](IGroup.md).[visible](IGroup.md#visible)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:230](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L230)

___

### selected

• `Optional` **selected**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[selected](IGroup.md#selected)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:231](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L231)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[disabled](IGroup.md#disabled)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:232](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L232)

___

### locked

• `Optional` **locked**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[locked](IGroup.md#locked)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:233](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L233)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Inherited from

[IGroup](IGroup.md).[zIndex](IGroup.md#zindex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:234](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L234)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Inherited from

[IGroup](IGroup.md).[dim](IGroup.md#dim)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:236](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L236)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[dimskip](IGroup.md#dimskip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:237](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L237)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Inherited from

[IGroup](IGroup.md).[mask](IGroup.md#mask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:239](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L239)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Inherited from

[IGroup](IGroup.md).[eraser](IGroup.md#eraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:240](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L240)

___

### filter

• `Optional` **filter**: [`IFilter`](IFilter.md) \| [`IFilter`](IFilter.md)[]

#### Inherited from

[IGroup](IGroup.md).[filter](IGroup.md#filter)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:241](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L241)

___

### x

• `Optional` **x**: `number`

#### Inherited from

[IGroup](IGroup.md).[x](IGroup.md#x)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:244](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L244)

___

### y

• `Optional` **y**: `number`

#### Inherited from

[IGroup](IGroup.md).[y](IGroup.md#y)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:245](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L245)

___

### width

• `Optional` **width**: `number`

#### Inherited from

[IGroup](IGroup.md).[width](IGroup.md#width)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:246](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L246)

___

### height

• `Optional` **height**: `number`

#### Inherited from

[IGroup](IGroup.md).[height](IGroup.md#height)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:247](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L247)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleX](IGroup.md#scalex)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:248](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L248)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scaleY](IGroup.md#scaley)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:249](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L249)

___

### rotation

• `Optional` **rotation**: `number`

#### Inherited from

[IGroup](IGroup.md).[rotation](IGroup.md#rotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:250](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L250)

___

### skewX

• `Optional` **skewX**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewX](IGroup.md#skewx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:251](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L251)

___

### skewY

• `Optional` **skewY**: `number`

#### Inherited from

[IGroup](IGroup.md).[skewY](IGroup.md#skewy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:252](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L252)

___

### scale

• `Optional` **scale**: `number` \| [`IPointData`](IPointData.md)

#### Inherited from

[IGroup](IGroup.md).[scale](IGroup.md#scale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:254](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L254)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetX](IGroup.md#offsetx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:256](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L256)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Inherited from

[IGroup](IGroup.md).[offsetY](IGroup.md#offsety)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:257](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L257)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollX](IGroup.md#scrollx)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:258](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L258)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Inherited from

[IGroup](IGroup.md).[scrollY](IGroup.md#scrolly)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:259](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L259)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[origin](IGroup.md#origin)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:261](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L261)

___

### around

• `Optional` **around**: [`IUnitPointData`](IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Inherited from

[IGroup](IGroup.md).[around](IGroup.md#around)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:262](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L262)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lazy](IGroup.md#lazy)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:264](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L264)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Inherited from

[IGroup](IGroup.md).[pixelRatio](IGroup.md#pixelratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:265](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L265)

___

### renderSpread

• `Optional` **renderSpread**: `number`

#### Inherited from

[IGroup](IGroup.md).[renderSpread](IGroup.md#renderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:267](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L267)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Inherited from

[IGroup](IGroup.md).[path](IGroup.md#path)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:269](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L269)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Inherited from

[IGroup](IGroup.md).[windingRule](IGroup.md#windingrule)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:270](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L270)

___

### closed

• `Optional` **closed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[closed](IGroup.md#closed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:271](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L271)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Inherited from

[IGroup](IGroup.md).[flow](IGroup.md#flow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:274](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L274)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[padding](IGroup.md#padding)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:275](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L275)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](IPointGap.md)

#### Inherited from

[IGroup](IGroup.md).[gap](IGroup.md#gap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:276](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L276)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Inherited from

[IGroup](IGroup.md).[flowAlign](IGroup.md#flowalign)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:277](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L277)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Inherited from

[IGroup](IGroup.md).[flowWrap](IGroup.md#flowwrap)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:278](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L278)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Inherited from

[IGroup](IGroup.md).[itemBox](IGroup.md#itembox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:279](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L279)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[inFlow](IGroup.md#inflow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:281](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L281)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoWidth](IGroup.md#autowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:282](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L282)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Inherited from

[IGroup](IGroup.md).[autoHeight](IGroup.md#autoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:283](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L283)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockRatio](IGroup.md#lockratio)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:284](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L284)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](IAutoBoxData.md) \| [`IConstraint`](IConstraint.md)

#### Inherited from

[IGroup](IGroup.md).[autoBox](IGroup.md#autobox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:285](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L285)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[widthRange](IGroup.md#widthrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:287](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L287)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](IRangeSize.md)

#### Inherited from

[IGroup](IGroup.md).[heightRange](IGroup.md#heightrange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:288](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L288)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Inherited from

[IGroup](IGroup.md).[draggable](IGroup.md#draggable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:291](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L291)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[dragBounds](IGroup.md#dragbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:292](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L292)

___

### dragBoundsType

• `Optional` **dragBoundsType**: [`IDragBoundsType`](../modules.md#idragboundstype)

#### Inherited from

[IGroup](IGroup.md).[dragBoundsType](IGroup.md#dragboundstype)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:293](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L293)

___

### editable

• `Optional` **editable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[editable](IGroup.md#editable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:295](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L295)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hittable](IGroup.md#hittable)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:297](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L297)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitFill](IGroup.md#hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:298](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L298)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Inherited from

[IGroup](IGroup.md).[hitStroke](IGroup.md#hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:299](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L299)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitBox](IGroup.md#hitbox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:300](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L300)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitChildren](IGroup.md#hitchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:301](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L301)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[hitSelf](IGroup.md#hitself)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:302](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L302)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Inherited from

[IGroup](IGroup.md).[hitRadius](IGroup.md#hitradius)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:303](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L303)

___

### button

• `Optional` **button**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[button](IGroup.md#button)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:305](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L305)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Inherited from

[IGroup](IGroup.md).[cursor](IGroup.md#cursor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:306](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L306)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionPath](IGroup.md#motionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:308](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L308)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Inherited from

[IGroup](IGroup.md).[motionPrecision](IGroup.md#motionprecision)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:309](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L309)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](IUnitData.md)

#### Inherited from

[IGroup](IGroup.md).[motion](IGroup.md#motion)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:311](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L311)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Inherited from

[IGroup](IGroup.md).[motionRotation](IGroup.md#motionrotation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:312](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L312)

___

### normalStyle

• `Optional` **normalStyle**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[normalStyle](IGroup.md#normalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:314](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L314)

___

### event

• `Optional` **event**: [`IEventParamsMap`](IEventParamsMap.md)

#### Inherited from

[IGroup](IGroup.md).[event](IGroup.md#event)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:316](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L316)

___

### data

• `Optional` **data**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[data](IGroup.md#data)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:319](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L319)

___

### tag

• **tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[tag](IGroup.md#tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:452](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L452)

___

### \_\_tag

• `Readonly` **\_\_tag**: `string`

#### Inherited from

[IGroup](IGroup.md).[__tag](IGroup.md#__tag)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:453](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L453)

___

### innerName

• `Readonly` **innerName**: `string`

#### Inherited from

[IGroup](IGroup.md).[innerName](IGroup.md#innername)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:454](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L454)

___

### \_\_DataProcessor

• `Readonly` **\_\_DataProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__DataProcessor](IGroup.md#__dataprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:456](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L456)

___

### \_\_LayoutProcessor

• `Readonly` **\_\_LayoutProcessor**: [`IObject`](IObject.md)

#### Inherited from

[IGroup](IGroup.md).[__LayoutProcessor](IGroup.md#__layoutprocessor)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:457](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L457)

___

### leaferIsCreated

• `Readonly` **leaferIsCreated**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsCreated](IGroup.md#leaferiscreated)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:464](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L464)

___

### leaferIsReady

• `Readonly` **leaferIsReady**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[leaferIsReady](IGroup.md#leaferisready)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:465](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L465)

___

### isApp

• `Optional` `Readonly` **isApp**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isApp](IGroup.md#isapp)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:467](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L467)

___

### isLeafer

• `Optional` `Readonly` **isLeafer**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isLeafer](IGroup.md#isleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:468](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L468)

___

### isBranch

• `Optional` `Readonly` **isBranch**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranch](IGroup.md#isbranch)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:469](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L469)

___

### isBranchLeaf

• `Optional` `Readonly` **isBranchLeaf**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isBranchLeaf](IGroup.md#isbranchleaf)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:470](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L470)

___

### isOutside

• `Optional` `Readonly` **isOutside**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOutside](IGroup.md#isoutside)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:471](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L471)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](ILeaf.md)

#### Inherited from

[IGroup](IGroup.md).[syncEventer](IGroup.md#synceventer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:478](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L478)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[lockNormalStyle](IGroup.md#locknormalstyle)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:479](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L479)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](ILeafLayout.md)

#### Inherited from

[IGroup](IGroup.md).[__layout](IGroup.md#__layout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:481](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L481)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__world](IGroup.md#__world)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:483](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L483)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](IMatrixWithBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__local](IGroup.md#__local)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:484](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L484)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__nowWorld](IGroup.md#__nowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:486](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L486)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__cameraWorld](IGroup.md#__cameraworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:487](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L487)

___

### \_\_localMatrix

• `Readonly` **\_\_localMatrix**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[__localMatrix](IGroup.md#__localmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:489](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L489)

___

### \_\_localBoxBounds

• `Readonly` **\_\_localBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__localBoxBounds](IGroup.md#__localboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:490](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L490)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[__worldOpacity](IGroup.md#__worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:492](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L492)

___

### worldTransform

• `Readonly` **worldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[worldTransform](IGroup.md#worldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:494](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L494)

___

### localTransform

• `Readonly` **localTransform**: [`IMatrixData`](IMatrixData.md)

#### Inherited from

[IGroup](IGroup.md).[localTransform](IGroup.md#localtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:495](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L495)

___

### \_\_scrollWorld

• `Optional` **\_\_scrollWorld**: [`IMatrixWithBoundsScaleData`](IMatrixWithBoundsScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[__scrollWorld](IGroup.md#__scrollworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:497](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L497)

___

### scrollWorldTransform

• `Readonly` **scrollWorldTransform**: [`IMatrixWithScaleData`](IMatrixWithScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[scrollWorldTransform](IGroup.md#scrollworldtransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:498](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L498)

___

### boxBounds

• `Readonly` **boxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[boxBounds](IGroup.md#boxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:500](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L500)

___

### renderBounds

• `Readonly` **renderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[renderBounds](IGroup.md#renderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:501](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L501)

___

### worldBoxBounds

• `Readonly` **worldBoxBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldBoxBounds](IGroup.md#worldboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:502](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L502)

___

### worldStrokeBounds

• `Readonly` **worldStrokeBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldStrokeBounds](IGroup.md#worldstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:503](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L503)

___

### worldRenderBounds

• `Readonly` **worldRenderBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[worldRenderBounds](IGroup.md#worldrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:504](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L504)

___

### worldOpacity

• `Readonly` **worldOpacity**: `number`

#### Inherited from

[IGroup](IGroup.md).[worldOpacity](IGroup.md#worldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:506](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L506)

___

### \_\_level

• **\_\_level**: `number`

#### Inherited from

[IGroup](IGroup.md).[__level](IGroup.md#__level)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:508](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L508)

___

### \_\_tempNumber

• `Optional` **\_\_tempNumber**: `number`

#### Inherited from

[IGroup](IGroup.md).[__tempNumber](IGroup.md#__tempnumber)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:509](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L509)

___

### \_\_worldFlipped

• `Readonly` **\_\_worldFlipped**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__worldFlipped](IGroup.md#__worldflipped)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:511](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L511)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasAutoLayout](IGroup.md#__hasautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:516](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L516)

___

### \_\_hasMotionPath

• `Optional` **\_\_hasMotionPath**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMotionPath](IGroup.md#__hasmotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:517](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L517)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasMask](IGroup.md#__hasmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:519](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L519)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasEraser](IGroup.md#__haseraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:520](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L520)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](IHitCanvas.md)

#### Inherited from

[IGroup](IGroup.md).[__hitCanvas](IGroup.md#__hitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:521](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L521)

___

### \_\_flowBounds

• `Optional` **\_\_flowBounds**: [`IBoundsData`](IBoundsData.md)

#### Inherited from

[IGroup](IGroup.md).[__flowBounds](IGroup.md#__flowbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:523](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L523)

___

### \_\_widthGrow

• `Optional` **\_\_widthGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__widthGrow](IGroup.md#__widthgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:524](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L524)

___

### \_\_heightGrow

• `Optional` **\_\_heightGrow**: `number`

#### Inherited from

[IGroup](IGroup.md).[__heightGrow](IGroup.md#__heightgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:525](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L525)

___

### \_\_hasGrow

• `Optional` **\_\_hasGrow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasGrow](IGroup.md#__hasgrow)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:526](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L526)

___

### \_\_onlyHitMask

• `Readonly` **\_\_onlyHitMask**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__onlyHitMask](IGroup.md#__onlyhitmask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:528](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L528)

___

### \_\_ignoreHitWorld

• `Readonly` **\_\_ignoreHitWorld**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__ignoreHitWorld](IGroup.md#__ignorehitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:529](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L529)

___

### \_\_inLazyBounds

• `Readonly` **\_\_inLazyBounds**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__inLazyBounds](IGroup.md#__inlazybounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:530](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L530)

___

### pathInputed

• `Readonly` **pathInputed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[pathInputed](IGroup.md#pathinputed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:532](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L532)

___

### isAutoWidth

• `Optional` `Readonly` **isAutoWidth**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isAutoWidth](IGroup.md#isautowidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:534](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L534)

___

### isAutoHeight

• `Optional` `Readonly` **isAutoHeight**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isAutoHeight](IGroup.md#isautoheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:535](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L535)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[destroyed](IGroup.md#destroyed)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:537](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L537)

___

### topChildren

• `Optional` **topChildren**: [`ILeaf`](ILeaf.md)[]

#### Inherited from

[IGroup](IGroup.md).[topChildren](IGroup.md#topchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:713](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L713)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[IGroup](IGroup.md).[innerId](IGroup.md#innerid)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:41](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L41)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__captureMap](IGroup.md#__capturemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:42](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L42)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](IEventListenerMap.md)

#### Inherited from

[IGroup](IGroup.md).[__bubbleMap](IGroup.md#__bubblemap)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:43](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L43)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasLocalEvent](IGroup.md#__haslocalevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:44](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L44)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[__hasWorldEvent](IGroup.md#__hasworldevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:45](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L45)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[cornerRadius](IGroup.md#cornerradius)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:9](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L9)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Inherited from

[IGroup](IGroup.md).[cornerSmoothing](IGroup.md#cornersmoothing)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:10](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L10)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Inherited from

[IGroup](IGroup.md).[fill](IGroup.md#fill)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:23](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L23)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Inherited from

[IGroup](IGroup.md).[stroke](IGroup.md#stroke)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:40](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L40)

___

### startArrow

• `Optional` **startArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IGroup](IGroup.md).[startArrow](IGroup.md#startarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:42](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L42)

___

### endArrow

• `Optional` **endArrow**: [`IArrowStyle`](../modules.md#iarrowstyle)

#### Inherited from

[IGroup](IGroup.md).[endArrow](IGroup.md#endarrow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:43](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L43)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Inherited from

[IGroup](IGroup.md).[strokeAlign](IGroup.md#strokealign)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:54](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L54)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Inherited from

[IGroup](IGroup.md).[strokeWidth](IGroup.md#strokewidth)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:55](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L55)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: [`IScaleFixed`](../modules.md#iscalefixed)

#### Inherited from

[IGroup](IGroup.md).[strokeWidthFixed](IGroup.md#strokewidthfixed)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:56](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L56)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Inherited from

[IGroup](IGroup.md).[strokeCap](IGroup.md#strokecap)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:57](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L57)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Inherited from

[IGroup](IGroup.md).[strokeJoin](IGroup.md#strokejoin)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:58](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L58)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Inherited from

[IGroup](IGroup.md).[dashPattern](IGroup.md#dashpattern)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:59](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L59)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Inherited from

[IGroup](IGroup.md).[dashOffset](IGroup.md#dashoffset)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:60](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L60)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Inherited from

[IGroup](IGroup.md).[miterLimit](IGroup.md#miterlimit)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:61](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L61)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[shadow](IGroup.md#shadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:150](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L150)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](IShadowEffect.md) \| [`IShadowEffect`](IShadowEffect.md)[]

#### Inherited from

[IGroup](IGroup.md).[innerShadow](IGroup.md#innershadow)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:151](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L151)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[blur](IGroup.md#blur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:152](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L152)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](IBlurEffect.md)

#### Inherited from

[IGroup](IGroup.md).[backgroundBlur](IGroup.md#backgroundblur)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:153](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L153)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](IGrayscaleEffect.md)

#### Inherited from

[IGroup](IGroup.md).[grayscale](IGroup.md#grayscale)

#### Defined in

[src/ui/packages/interface/src/ICommonAttr.ts:154](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/ICommonAttr.ts#L154)

___

### \_\_

• **\_\_**: [`IGroupData`](IGroupData.md)

#### Inherited from

[IGroup](IGroup.md).[__](IGroup.md#__)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:363](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L363)

___

### children

• **children**: [`IUI`](IUI.md)[]

#### Inherited from

[IGroup](IGroup.md).[children](IGroup.md#children)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:364](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L364)

___

### childlessJSON

• `Optional` **childlessJSON**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[childlessJSON](IGroup.md#childlessjson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:365](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L365)

___

### app

• `Readonly` **app**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IGroup](IGroup.md).[app](IGroup.md#app)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:383](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L383)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](ILeafer.md)

#### Inherited from

[IGroup](IGroup.md).[leafer](IGroup.md#leafer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:384](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L384)

___

### parent

• `Optional` **parent**: [`IGroup`](IGroup.md)

#### Inherited from

[IGroup](IGroup.md).[parent](IGroup.md#parent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:385](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L385)

___

### zoomLayer

• `Optional` **zoomLayer**: [`IGroup`](IGroup.md)

#### Inherited from

[IGroup](IGroup.md).[zoomLayer](IGroup.md#zoomlayer)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:386](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L386)

___

### isFrame

• `Optional` `Readonly` **isFrame**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isFrame](IGroup.md#isframe)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:387](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L387)

___

### isOverflow

• `Optional` **isOverflow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[isOverflow](IGroup.md#isoverflow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:388](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L388)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Inherited from

[IGroup](IGroup.md).[useFastShadow](IGroup.md#usefastshadow)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:389](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L389)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[proxyData](IGroup.md#proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:391](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L391)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[__proxyData](IGroup.md#__proxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:392](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L392)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animation](IGroup.md#animation)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:394](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L394)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Inherited from

[IGroup](IGroup.md).[animationOut](IGroup.md#animationout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:395](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L395)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](IUI.md)

#### Inherited from

[IGroup](IGroup.md).[__box](IGroup.md#__box)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:399](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L399)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](IAnimate.md)

#### Inherited from

[IGroup](IGroup.md).[__animate](IGroup.md#__animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:400](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L400)

___

### pen

• `Readonly` **pen**: [`IPathCreator`](IPathCreator.md)

#### Inherited from

[IGroup](IGroup.md).[pen](IGroup.md#pen)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:402](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L402)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transition](IGroup.md#transition)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:455](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L455)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Inherited from

[IGroup](IGroup.md).[transitionOut](IGroup.md#transitionout)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:456](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L456)

___

### states

• `Optional` **states**: [`IStates`](IStates.md)

#### Inherited from

[IGroup](IGroup.md).[states](IGroup.md#states)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:458](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L458)

___

### state

• `Optional` **state**: `string`

#### Inherited from

[IGroup](IGroup.md).[state](IGroup.md#state)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:459](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L459)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[hoverStyle](IGroup.md#hoverstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:461](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L461)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[pressStyle](IGroup.md#pressstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:462](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L462)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[focusStyle](IGroup.md#focusstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:463](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L463)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[selectedStyle](IGroup.md#selectedstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:464](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L464)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[disabledStyle](IGroup.md#disabledstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:465](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L465)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](IStateStyle.md)

#### Inherited from

[IGroup](IGroup.md).[placeholderStyle](IGroup.md#placeholderstyle)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:466](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L466)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Inherited from

[IGroup](IGroup.md).[placeholderColor](IGroup.md#placeholdercolor)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:467](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L467)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Inherited from

[IGroup](IGroup.md).[placeholderDelay](IGroup.md#placeholderdelay)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:468](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L468)

___

### editConfig

• `Optional` **editConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Inherited from

[IGroup](IGroup.md).[editConfig](IGroup.md#editconfig)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:470](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L470)

___

### editOuter

• `Optional` **editOuter**: `string`

#### Inherited from

[IGroup](IGroup.md).[editOuter](IGroup.md#editouter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:471](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L471)

___

### editInner

• `Optional` **editInner**: `string`

#### Inherited from

[IGroup](IGroup.md).[editInner](IGroup.md#editinner)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:472](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L472)

___

### editor

• **editor**: [`IEditorBase`](IEditorBase.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:243](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L243)

___

### dragging

• **dragging**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:245](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L245)

___

### gesturing

• **gesturing**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:246](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L246)

___

### moving

• **moving**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:248](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L248)

___

### resizing

• **resizing**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:249](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L249)

___

### rotating

• **rotating**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:250](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L250)

___

### skewing

• **skewing**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:251](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L251)

___

### view

• **view**: [`IGroup`](IGroup.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:253](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L253)

___

### circle

• **circle**: [`IEditPoint`](IEditPoint.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:255](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L255)

___

### rect

• **rect**: [`IRect`](IRect.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:256](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L256)

___

### buttons

• **buttons**: [`IGroup`](IGroup.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:258](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L258)

___

### resizePoints

• **resizePoints**: [`IEditPoint`](IEditPoint.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:260](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L260)

___

### rotatePoints

• **rotatePoints**: [`IEditPoint`](IEditPoint.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:261](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L261)

___

### resizeLines

• **resizeLines**: [`IEditPoint`](IEditPoint.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:262](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L262)

___

### enterPoint

• **enterPoint**: [`IEditPoint`](IEditPoint.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:264](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L264)

___

### dragPoint

• **dragPoint**: [`IEditPoint`](IEditPoint.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:265](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L265)

___

### dragStartData

• **dragStartData**: [`IEditorDragStartData`](IEditorDragStartData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:267](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L267)

___

### config

• **config**: [`IEditorConfig`](IEditorConfig.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:269](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L269)

___

### mergeConfig

• `Readonly` **mergeConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:270](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L270)

___

### mergedConfig

• `Readonly` **mergedConfig**: [`IEditorConfig`](IEditorConfig.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:271](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L271)

___

### target

• **target**: [`IUI`](IUI.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:273](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L273)

___

### single

• **single**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:274](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L274)

___

### transformTool

• **transformTool**: [`ITransformTool`](ITransformTool.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:276](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L276)

___

### flipped

• `Readonly` **flipped**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:278](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L278)

___

### flippedX

• `Readonly` **flippedX**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:279](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L279)

___

### flippedY

• `Readonly` **flippedY**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:280](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L280)

___

### flippedOne

• `Readonly` **flippedOne**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:281](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L281)

___

### canUse

• `Readonly` **canUse**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:283](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L283)

___

### canGesture

• `Readonly` **canGesture**: `boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:284](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L284)

## Methods

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[resetCustom](IGroup.md#resetcustom)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:540](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L540)

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

[IGroup](IGroup.md).[waitParent](IGroup.md#waitparent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:542](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L542)

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

[IGroup](IGroup.md).[waitLeafer](IGroup.md#waitleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:543](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L543)

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

[IGroup](IGroup.md).[nextRender](IGroup.md#nextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:544](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L544)

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

[IGroup](IGroup.md).[removeNextRender](IGroup.md#removenextrender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:545](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L545)

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

[IGroup](IGroup.md).[__bindLeafer](IGroup.md#__bindleafer)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:547](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L547)

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

[IGroup](IGroup.md).[setAttr](IGroup.md#setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:551](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L551)

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

[IGroup](IGroup.md).[getAttr](IGroup.md#getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:552](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L552)

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

[IGroup](IGroup.md).[getComputedAttr](IGroup.md#getcomputedattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:553](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L553)

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

[IGroup](IGroup.md).[toString](IGroup.md#tostring)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:556](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L556)

___

### toSVG

▸ **toSVG**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toSVG](IGroup.md#tosvg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:557](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L557)

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

[IGroup](IGroup.md).[__SVG](IGroup.md#__svg)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:558](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L558)

___

### toHTML

▸ **toHTML**(): `string`

#### Returns

`string`

#### Inherited from

[IGroup](IGroup.md).[toHTML](IGroup.md#tohtml)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:559](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L559)

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

[IGroup](IGroup.md).[__setAttr](IGroup.md#__setattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:565](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L565)

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

[IGroup](IGroup.md).[__getAttr](IGroup.md#__getattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:566](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L566)

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

[IGroup](IGroup.md).[setProxyAttr](IGroup.md#setproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:567](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L567)

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

[IGroup](IGroup.md).[getProxyAttr](IGroup.md#getproxyattr)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:568](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L568)

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

[IGroup](IGroup.md).[focus](IGroup.md#focus)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:576](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L576)

___

### updateState

▸ **updateState**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateState](IGroup.md#updatestate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:578](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L578)

___

### updateLayout

▸ **updateLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[updateLayout](IGroup.md#updatelayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:579](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L579)

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

[IGroup](IGroup.md).[forceUpdate](IGroup.md#forceupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:580](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L580)

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

[IGroup](IGroup.md).[forceRender](IGroup.md#forcerender)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:581](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L581)

___

### \_\_extraUpdate

▸ **__extraUpdate**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__extraUpdate](IGroup.md#__extraupdate)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:583](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L583)

___

### \_\_updateWorldMatrix

▸ **__updateWorldMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldMatrix](IGroup.md#__updateworldmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:586](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L586)

___

### \_\_updateLocalMatrix

▸ **__updateLocalMatrix**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalMatrix](IGroup.md#__updatelocalmatrix)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:587](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L587)

___

### \_\_updateWorldBounds

▸ **__updateWorldBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldBounds](IGroup.md#__updateworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:590](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L590)

___

### \_\_updateLocalBounds

▸ **__updateLocalBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBounds](IGroup.md#__updatelocalbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:591](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L591)

___

### \_\_updateLocalBoxBounds

▸ **__updateLocalBoxBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalBoxBounds](IGroup.md#__updatelocalboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:593](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L593)

___

### \_\_updateLocalStrokeBounds

▸ **__updateLocalStrokeBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalStrokeBounds](IGroup.md#__updatelocalstrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:594](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L594)

___

### \_\_updateLocalRenderBounds

▸ **__updateLocalRenderBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateLocalRenderBounds](IGroup.md#__updatelocalrenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:595](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L595)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateContentBounds](IGroup.md#__updatecontentbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:597](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L597)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(`secondLayout?`, `bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `secondLayout?` | `boolean` |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateBoxBounds](IGroup.md#__updateboxbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:598](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L598)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeBounds](IGroup.md#__updatestrokebounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:599](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L599)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(`bounds?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bounds?` | [`IBoundsData`](IBoundsData.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderBounds](IGroup.md#__updaterenderbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:600](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L600)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateAutoLayout](IGroup.md#__updateautolayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:602](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L602)

___

### \_\_updateFlowLayout

▸ **__updateFlowLayout**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateFlowLayout](IGroup.md#__updateflowlayout)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:603](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L603)

___

### \_\_updateNaturalSize

▸ **__updateNaturalSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateNaturalSize](IGroup.md#__updatenaturalsize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:604](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L604)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateStrokeSpread](IGroup.md#__updatestrokespread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:606](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L606)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderSpread](IGroup.md#__updaterenderspread)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:607](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L607)

___

### \_\_onUpdateSize

▸ **__onUpdateSize**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__onUpdateSize](IGroup.md#__onupdatesize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:609](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L609)

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

[IGroup](IGroup.md).[__updateEraser](IGroup.md#__updateeraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:612](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L612)

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

[IGroup](IGroup.md).[__updateMask](IGroup.md#__updatemask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:613](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L613)

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

[IGroup](IGroup.md).[__renderMask](IGroup.md#__rendermask)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:614](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L614)

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

[IGroup](IGroup.md).[__renderEraser](IGroup.md#__rendereraser)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:615](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L615)

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

[IGroup](IGroup.md).[__getNowWorld](IGroup.md#__getnowworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:618](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L618)

___

### getClampRenderScale

▸ **getClampRenderScale**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[getClampRenderScale](IGroup.md#getclamprenderscale)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:619](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L619)

___

### getRenderScaleData

▸ **getRenderScaleData**(`abs?`, `scaleFixed?`): [`IScaleData`](IScaleData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `abs?` | `boolean` |
| `scaleFixed?` | [`IScaleFixed`](../modules.md#iscalefixed) |

#### Returns

[`IScaleData`](IScaleData.md)

#### Inherited from

[IGroup](IGroup.md).[getRenderScaleData](IGroup.md#getrenderscaledata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:620](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L620)

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

[IGroup](IGroup.md).[getTransform](IGroup.md#gettransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:622](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L622)

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

[IGroup](IGroup.md).[getBounds](IGroup.md#getbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:624](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L624)

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

[IGroup](IGroup.md).[getLayoutBounds](IGroup.md#getlayoutbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:625](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L625)

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

[IGroup](IGroup.md).[getLayoutPoints](IGroup.md#getlayoutpoints)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:626](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L626)

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

[IGroup](IGroup.md).[getWorldBounds](IGroup.md#getworldbounds)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:628](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L628)

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

[IGroup](IGroup.md).[worldToLocal](IGroup.md#worldtolocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:630](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L630)

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

[IGroup](IGroup.md).[localToWorld](IGroup.md#localtoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:631](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L631)

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

[IGroup](IGroup.md).[worldToInner](IGroup.md#worldtoinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:632](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L632)

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

[IGroup](IGroup.md).[innerToWorld](IGroup.md#innertoworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:633](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L633)

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

[IGroup](IGroup.md).[getBoxPoint](IGroup.md#getboxpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:635](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L635)

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

[IGroup](IGroup.md).[getBoxPointByInner](IGroup.md#getboxpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:636](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L636)

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

[IGroup](IGroup.md).[getInnerPoint](IGroup.md#getinnerpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:637](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L637)

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

[IGroup](IGroup.md).[getInnerPointByBox](IGroup.md#getinnerpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:638](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L638)

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

[IGroup](IGroup.md).[getInnerPointByLocal](IGroup.md#getinnerpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:639](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L639)

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

[IGroup](IGroup.md).[getLocalPoint](IGroup.md#getlocalpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:640](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L640)

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

[IGroup](IGroup.md).[getLocalPointByInner](IGroup.md#getlocalpointbyinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:641](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L641)

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

[IGroup](IGroup.md).[getPagePoint](IGroup.md#getpagepoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:642](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L642)

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

[IGroup](IGroup.md).[getWorldPoint](IGroup.md#getworldpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:643](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L643)

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

[IGroup](IGroup.md).[getWorldPointByBox](IGroup.md#getworldpointbybox)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:644](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L644)

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

[IGroup](IGroup.md).[getWorldPointByLocal](IGroup.md#getworldpointbylocal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:645](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L645)

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

[IGroup](IGroup.md).[getWorldPointByPage](IGroup.md#getworldpointbypage)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:646](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L646)

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

[IGroup](IGroup.md).[setTransform](IGroup.md#settransform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:649](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L649)

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

[IGroup](IGroup.md).[transform](IGroup.md#transform)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:650](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L650)

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

[IGroup](IGroup.md).[move](IGroup.md#move)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:651](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L651)

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

[IGroup](IGroup.md).[moveInner](IGroup.md#moveinner)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:653](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L653)

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

[IGroup](IGroup.md).[scaleOf](IGroup.md#scaleof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:654](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L654)

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

[IGroup](IGroup.md).[rotateOf](IGroup.md#rotateof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:655](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L655)

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

[IGroup](IGroup.md).[skewOf](IGroup.md#skewof)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:656](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L656)

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

[IGroup](IGroup.md).[transformWorld](IGroup.md#transformworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:658](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L658)

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

[IGroup](IGroup.md).[moveWorld](IGroup.md#moveworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:659](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L659)

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

[IGroup](IGroup.md).[scaleOfWorld](IGroup.md#scaleofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:660](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L660)

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

[IGroup](IGroup.md).[rotateOfWorld](IGroup.md#rotateofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:661](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L661)

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

[IGroup](IGroup.md).[skewOfWorld](IGroup.md#skewofworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:662](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L662)

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

[IGroup](IGroup.md).[flip](IGroup.md#flip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:664](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L664)

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

[IGroup](IGroup.md).[scaleResize](IGroup.md#scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:666](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L666)

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

[IGroup](IGroup.md).[__scaleResize](IGroup.md#__scaleresize)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:667](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L667)

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

[IGroup](IGroup.md).[resizeWidth](IGroup.md#resizewidth)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:669](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L669)

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

[IGroup](IGroup.md).[resizeHeight](IGroup.md#resizeheight)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:670](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L670)

___

### hit

▸ **hit**(`world`, `hitRadius?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`IPointData`](IPointData.md) |
| `hitRadius?` | `number` |

#### Returns

`boolean`

#### Inherited from

[IGroup](IGroup.md).[hit](IGroup.md#hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:673](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L673)

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

[IGroup](IGroup.md).[__hitWorld](IGroup.md#__hitworld)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:674](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L674)

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

[IGroup](IGroup.md).[__hit](IGroup.md#__hit)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:675](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L675)

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

[IGroup](IGroup.md).[__hitFill](IGroup.md#__hitfill)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:676](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L676)

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

[IGroup](IGroup.md).[__hitStroke](IGroup.md#__hitstroke)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:677](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L677)

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

[IGroup](IGroup.md).[__hitPixel](IGroup.md#__hitpixel)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:678](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L678)

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

[IGroup](IGroup.md).[__drawHitPath](IGroup.md#__drawhitpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:679](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L679)

___

### \_\_updateHitCanvas

▸ **__updateHitCanvas**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateHitCanvas](IGroup.md#__updatehitcanvas)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:680](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L680)

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

[IGroup](IGroup.md).[__render](IGroup.md#__render)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:683](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L683)

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

[IGroup](IGroup.md).[__drawFast](IGroup.md#__drawfast)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:684](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L684)

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

[IGroup](IGroup.md).[__draw](IGroup.md#__draw)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:685](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L685)

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

[IGroup](IGroup.md).[__clip](IGroup.md#__clip)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:687](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L687)

___

### \_\_renderShape

▸ **__renderShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__renderShape](IGroup.md#__rendershape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:688](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L688)

___

### \_\_drawShape

▸ **__drawShape**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__drawShape](IGroup.md#__drawshape)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:689](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L689)

___

### \_\_updateWorldOpacity

▸ **__updateWorldOpacity**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateWorldOpacity](IGroup.md#__updateworldopacity)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:691](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L691)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateChange](IGroup.md#__updatechange)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:692](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L692)

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

[IGroup](IGroup.md).[__drawPath](IGroup.md#__drawpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:695](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L695)

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

[IGroup](IGroup.md).[__drawRenderPath](IGroup.md#__drawrenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:696](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L696)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updatePath](IGroup.md#__updatepath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:697](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L697)

___

### \_\_updateRenderPath

▸ **__updateRenderPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateRenderPath](IGroup.md#__updaterenderpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:698](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L698)

___

### getMotionPathData

▸ **getMotionPathData**(): [`IMotionPathData`](IMotionPathData.md)

#### Returns

[`IMotionPathData`](IMotionPathData.md)

#### Inherited from

[IGroup](IGroup.md).[getMotionPathData](IGroup.md#getmotionpathdata)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:701](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L701)

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

[IGroup](IGroup.md).[getMotionPoint](IGroup.md#getmotionpoint)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:702](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L702)

___

### getMotionTotal

▸ **getMotionTotal**(): `number`

#### Returns

`number`

#### Inherited from

[IGroup](IGroup.md).[getMotionTotal](IGroup.md#getmotiontotal)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:703](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L703)

___

### \_\_updateMotionPath

▸ **__updateMotionPath**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateMotionPath](IGroup.md#__updatemotionpath)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:705](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L705)

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

[IGroup](IGroup.md).[__runAnimation](IGroup.md#__runanimation)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:707](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L707)

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

[IGroup](IGroup.md).[__emitLifeEvent](IGroup.md#__emitlifeevent)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:709](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L709)

___

### \_\_updateSortChildren

▸ **__updateSortChildren**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__updateSortChildren](IGroup.md#__updatesortchildren)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:715](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L715)

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

[IGroup](IGroup.md).[dropTo](IGroup.md#dropto)

#### Defined in

[src/leafer/packages/interface/src/display/ILeaf.ts:718](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/ILeaf.ts#L718)

___

### \_\_realSetAttr

▸ **__realSetAttr**(`name`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `newValue` | [`IValue`](../modules.md#ivalue) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__realSetAttr](IGroup.md#__realsetattr)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:9](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafDataProxy.ts#L9)

___

### emitPropertyEvent

▸ **emitPropertyEvent**(`type`, `attrName`, `oldValue`, `newValue`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `attrName` | `string` |
| `oldValue` | `unknown` |
| `newValue` | `unknown` |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[emitPropertyEvent](IGroup.md#emitpropertyevent)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafDataProxy.ts:10](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafDataProxy.ts#L10)

___

### destroyEventer

▸ **destroyEventer**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[destroyEventer](IGroup.md#destroyeventer)

#### Defined in

[src/leafer/packages/interface/src/display/module/ILeafEventer.ts:18](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/display/module/ILeafEventer.ts#L18)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[on](IGroup.md#on)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:49](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L49)

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

[IGroup](IGroup.md).[off](IGroup.md#off)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:50](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L50)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `bind?` | [`IObject`](IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](IEventListenerId.md)

#### Inherited from

[IGroup](IGroup.md).[on_](IGroup.md#on_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:51](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L51)

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

[IGroup](IGroup.md).[off_](IGroup.md#off_)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:52](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L52)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](IFunction.md) |
| `captureOrBind?` | `boolean` \| [`IObject`](IObject.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[once](IGroup.md#once)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:53](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L53)

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

[IGroup](IGroup.md).[emit](IGroup.md#emit)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:54](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L54)

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

[IGroup](IGroup.md).[emitEvent](IGroup.md#emitevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:55](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L55)

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

[IGroup](IGroup.md).[hasEvent](IGroup.md#hasevent)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:56](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L56)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[destroy](IGroup.md#destroy)

#### Defined in

[src/leafer/packages/interface/src/event/IEventer.ts:58](https://github.com/leaferjs/leafer/blob/ddf9650d989917c451947b101193d83f38b9fdcf/packages/interface/src/event/IEventer.ts#L58)

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

[IGroup](IGroup.md).[pick](IGroup.md#pick)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:366](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L366)

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

[IGroup](IGroup.md).[add](IGroup.md#add)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:367](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L367)

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

[IGroup](IGroup.md).[addAt](IGroup.md#addat)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:368](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L368)

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

[IGroup](IGroup.md).[addAfter](IGroup.md#addafter)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:369](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L369)

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

[IGroup](IGroup.md).[addBefore](IGroup.md#addbefore)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:370](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L370)

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

[IGroup](IGroup.md).[addMany](IGroup.md#addmany)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:371](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L371)

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

[IGroup](IGroup.md).[remove](IGroup.md#remove)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:372](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L372)

___

### removeAll

▸ **removeAll**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[removeAll](IGroup.md#removeall)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:373](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L373)

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[clear](IGroup.md#clear)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:374](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L374)

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

[IGroup](IGroup.md).[reset](IGroup.md#reset)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:404](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L404)

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

[IGroup](IGroup.md).[set](IGroup.md#set)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:406](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L406)

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

[IGroup](IGroup.md).[toJSON](IGroup.md#tojson)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:407](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L407)

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

[IGroup](IGroup.md).[get](IGroup.md#get)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:409](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L409)

___

### createProxyData

▸ **createProxyData**(): [`IUIInputData`](IUIInputData.md)

#### Returns

[`IUIInputData`](IUIInputData.md)

#### Inherited from

[IGroup](IGroup.md).[createProxyData](IGroup.md#createproxydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:410](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L410)

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

[IGroup](IGroup.md).[find](IGroup.md#find)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:412](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L412)

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

[IGroup](IGroup.md).[findTag](IGroup.md#findtag)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:413](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L413)

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

[IGroup](IGroup.md).[findOne](IGroup.md#findone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:414](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L414)

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

[IGroup](IGroup.md).[findId](IGroup.md#findid)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:415](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L415)

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

[IGroup](IGroup.md).[getPath](IGroup.md#getpath)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:417](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L417)

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

[IGroup](IGroup.md).[getPathString](IGroup.md#getpathstring)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:418](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L418)

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

[IGroup](IGroup.md).[__drawPathByData](IGroup.md#__drawpathbydata)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:422](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L422)

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

[IGroup](IGroup.md).[__drawPathByBox](IGroup.md#__drawpathbybox)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:423](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L423)

___

### \_\_drawAfterFill

▸ **__drawAfterFill**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__drawAfterFill](IGroup.md#__drawafterfill)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:424](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L424)

___

### \_\_drawContent

▸ **__drawContent**(`canvas`, `options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | [`ILeaferCanvas`](ILeaferCanvas.md) |
| `options` | [`IRenderOptions`](IRenderOptions.md) |

#### Returns

`void`

#### Inherited from

[IGroup](IGroup.md).[__drawContent](IGroup.md#__drawcontent)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:425](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L425)

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

[IGroup](IGroup.md).[drawImagePlaceholder](IGroup.md#drawimageplaceholder)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:427](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L427)

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

[IGroup](IGroup.md).[animate](IGroup.md#animate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:429](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L429)

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

[IGroup](IGroup.md).[killAnimate](IGroup.md#killanimate)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:430](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L430)

___

### export

▸ **export**(`filename`, `options?`): `Promise`\<[`IExportResult`](IExportResult.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | `string` |
| `options?` | `number` \| `boolean` \| [`IExportOptions`](IExportOptions.md) |

#### Returns

`Promise`\<[`IExportResult`](IExportResult.md)\>

#### Inherited from

[IGroup](IGroup.md).[export](IGroup.md#export)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:432](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L432)

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

[IGroup](IGroup.md).[syncExport](IGroup.md#syncexport)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:433](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L433)

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

[IGroup](IGroup.md).[clone](IGroup.md#clone)

#### Defined in

[src/ui/packages/interface/src/IUI.ts:434](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/IUI.ts#L434)

___

### getPointStyle

▸ **getPointStyle**(`userStyle?`): [`IBoxInputData`](IBoxInputData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userStyle?` | [`IBoxInputData`](IBoxInputData.md) |

#### Returns

[`IBoxInputData`](IBoxInputData.md)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:286](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L286)

___

### getPointsStyle

▸ **getPointsStyle**(): [`IBoxInputData`](IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](IBoxInputData.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:287](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L287)

___

### getMiddlePointsStyle

▸ **getMiddlePointsStyle**(): [`IBoxInputData`](IBoxInputData.md)[]

#### Returns

[`IBoxInputData`](IBoxInputData.md)[]

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:288](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L288)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Overrides

[IGroup](IGroup.md).[load](IGroup.md#load)

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:290](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L290)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:291](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L291)

___

### unload

▸ **unload**(): `void`

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:292](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L292)

___

### onArrow

▸ **onArrow**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IKeyEvent`](IKeyEvent.md) |

#### Returns

`void`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:294](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L294)

___

### isHoldRotateKey

▸ **isHoldRotateKey**(`e`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`IUIEvent`](IUIEvent.md) |

#### Returns

`boolean`

#### Defined in

[src/ui/packages/interface/src/editor/IEditor.ts:295](https://github.com/leaferjs/leafer-ui/blob/38558928fc1be6d4d216bb813fcdb043c6cbb533/packages/interface/src/editor/IEditor.ts#L295)
