# Class: Editor

## Hierarchy

- [`Group`](Group.md)

  ↳ **`Editor`**

## Implements

- [`IEditor`](../interfaces/IEditor.md)

## Table of contents

### Constructors

- [constructor](Editor.md#constructor)

### Properties

- [config](Editor.md#config)
- [mergeConfig](Editor.md#mergeconfig)
- [mergedConfig](Editor.md#mergedconfig)
- [hoverTarget](Editor.md#hovertarget)
- [target](Editor.md#target)
- [leafList](Editor.md#leaflist)
- [openedGroupList](Editor.md#openedgrouplist)
- [innerEditing](Editor.md#innerediting)
- [resizeDirection](Editor.md#resizedirection)
- [simulateTarget](Editor.md#simulatetarget)
- [editBox](Editor.md#editbox)
- [editTool](Editor.md#edittool)
- [innerEditor](Editor.md#innereditor)
- [editToolList](Editor.md#edittoollist)
- [selector](Editor.md#selector)
- [editMask](Editor.md#editmask)
- [targetChanged](Editor.md#targetchanged)
- [targetEventIds](Editor.md#targeteventids)
- [innerId](Editor.md#innerid)
- [syncEventer](Editor.md#synceventer)
- [lockNormalStyle](Editor.md#locknormalstyle)
- [\_\_layout](Editor.md#__layout)
- [\_\_world](Editor.md#__world)
- [\_\_local](Editor.md#__local)
- [\_\_nowWorld](Editor.md#__nowworld)
- [\_\_cameraWorld](Editor.md#__cameraworld)
- [\_\_worldOpacity](Editor.md#__worldopacity)
- [\_\_level](Editor.md#__level)
- [\_\_tempNumber](Editor.md#__tempnumber)
- [\_\_hasAutoLayout](Editor.md#__hasautolayout)
- [\_\_hasMask](Editor.md#__hasmask)
- [\_\_hasEraser](Editor.md#__haseraser)
- [\_\_hitCanvas](Editor.md#__hitcanvas)
- [\_\_captureMap](Editor.md#__capturemap)
- [\_\_bubbleMap](Editor.md#__bubblemap)
- [\_\_hasLocalEvent](Editor.md#__haslocalevent)
- [\_\_hasWorldEvent](Editor.md#__hasworldevent)
- [destroyed](Editor.md#destroyed)
- [\_\_](Editor.md#__)
- [width](Editor.md#width)
- [height](Editor.md#height)
- [children](Editor.md#children)
- [proxyData](Editor.md#proxydata)
- [\_\_proxyData](Editor.md#__proxydata)
- [leafer](Editor.md#leafer)
- [parent](Editor.md#parent)
- [zoomLayer](Editor.md#zoomlayer)
- [id](Editor.md#id)
- [name](Editor.md#name)
- [className](Editor.md#classname)
- [blendMode](Editor.md#blendmode)
- [opacity](Editor.md#opacity)
- [visible](Editor.md#visible)
- [locked](Editor.md#locked)
- [dim](Editor.md#dim)
- [dimskip](Editor.md#dimskip)
- [zIndex](Editor.md#zindex)
- [mask](Editor.md#mask)
- [eraser](Editor.md#eraser)
- [x](Editor.md#x)
- [y](Editor.md#y)
- [scaleX](Editor.md#scalex)
- [scaleY](Editor.md#scaley)
- [rotation](Editor.md#rotation)
- [skewX](Editor.md#skewx)
- [skewY](Editor.md#skewy)
- [offsetX](Editor.md#offsetx)
- [offsetY](Editor.md#offsety)
- [scrollX](Editor.md#scrollx)
- [scrollY](Editor.md#scrolly)
- [origin](Editor.md#origin)
- [around](Editor.md#around)
- [lazy](Editor.md#lazy)
- [pixelRatio](Editor.md#pixelratio)
- [path](Editor.md#path)
- [windingRule](Editor.md#windingrule)
- [closed](Editor.md#closed)
- [flow](Editor.md#flow)
- [padding](Editor.md#padding)
- [gap](Editor.md#gap)
- [flowAlign](Editor.md#flowalign)
- [flowWrap](Editor.md#flowwrap)
- [itemBox](Editor.md#itembox)
- [inFlow](Editor.md#inflow)
- [autoWidth](Editor.md#autowidth)
- [autoHeight](Editor.md#autoheight)
- [lockRatio](Editor.md#lockratio)
- [autoBox](Editor.md#autobox)
- [widthRange](Editor.md#widthrange)
- [heightRange](Editor.md#heightrange)
- [draggable](Editor.md#draggable)
- [dragBounds](Editor.md#dragbounds)
- [editable](Editor.md#editable)
- [hittable](Editor.md#hittable)
- [hitFill](Editor.md#hitfill)
- [hitStroke](Editor.md#hitstroke)
- [hitBox](Editor.md#hitbox)
- [hitChildren](Editor.md#hitchildren)
- [hitSelf](Editor.md#hitself)
- [hitRadius](Editor.md#hitradius)
- [cursor](Editor.md#cursor)
- [fill](Editor.md#fill)
- [stroke](Editor.md#stroke)
- [strokeAlign](Editor.md#strokealign)
- [strokeWidth](Editor.md#strokewidth)
- [strokeWidthFixed](Editor.md#strokewidthfixed)
- [strokeCap](Editor.md#strokecap)
- [strokeJoin](Editor.md#strokejoin)
- [dashPattern](Editor.md#dashpattern)
- [dashOffset](Editor.md#dashoffset)
- [miterLimit](Editor.md#miterlimit)
- [startArrow](Editor.md#startarrow)
- [endArrow](Editor.md#endarrow)
- [cornerRadius](Editor.md#cornerradius)
- [cornerSmoothing](Editor.md#cornersmoothing)
- [shadow](Editor.md#shadow)
- [innerShadow](Editor.md#innershadow)
- [blur](Editor.md#blur)
- [backgroundBlur](Editor.md#backgroundblur)
- [grayscale](Editor.md#grayscale)
- [filter](Editor.md#filter)
- [animation](Editor.md#animation)
- [animationOut](Editor.md#animationout)
- [transition](Editor.md#transition)
- [transitionOut](Editor.md#transitionout)
- [motionPath](Editor.md#motionpath)
- [motionPrecision](Editor.md#motionprecision)
- [motion](Editor.md#motion)
- [motionRotation](Editor.md#motionrotation)
- [states](Editor.md#states)
- [state](Editor.md#state)
- [selected](Editor.md#selected)
- [disabled](Editor.md#disabled)
- [normalStyle](Editor.md#normalstyle)
- [hoverStyle](Editor.md#hoverstyle)
- [pressStyle](Editor.md#pressstyle)
- [focusStyle](Editor.md#focusstyle)
- [selectedStyle](Editor.md#selectedstyle)
- [disabledStyle](Editor.md#disabledstyle)
- [placeholderStyle](Editor.md#placeholderstyle)
- [placeholderColor](Editor.md#placeholdercolor)
- [placeholderDelay](Editor.md#placeholderdelay)
- [button](Editor.md#button)
- [editConfig](Editor.md#editconfig)
- [editOuter](Editor.md#editouter)
- [editInner](Editor.md#editinner)
- [data](Editor.md#data)
- [useFastShadow](Editor.md#usefastshadow)
- [\_\_box](Editor.md#__box)
- [\_\_animate](Editor.md#__animate)

### Accessors

- [list](Editor.md#list)
- [dragHoverExclude](Editor.md#draghoverexclude)
- [editing](Editor.md#editing)
- [groupOpening](Editor.md#groupopening)
- [multiple](Editor.md#multiple)
- [single](Editor.md#single)
- [dragging](Editor.md#dragging)
- [moving](Editor.md#moving)
- [dragPoint](Editor.md#dragpoint)
- [element](Editor.md#element)
- [buttons](Editor.md#buttons)
- [tag](Editor.md#tag)
- [innerName](Editor.md#innername)
- [\_\_DataProcessor](Editor.md#__dataprocessor)
- [\_\_LayoutProcessor](Editor.md#__layoutprocessor)
- [leaferIsCreated](Editor.md#leaferiscreated)
- [leaferIsReady](Editor.md#leaferisready)
- [isLeafer](Editor.md#isleafer)
- [isBranchLeaf](Editor.md#isbranchleaf)
- [\_\_localMatrix](Editor.md#__localmatrix)
- [\_\_localBoxBounds](Editor.md#__localboxbounds)
- [worldTransform](Editor.md#worldtransform)
- [localTransform](Editor.md#localtransform)
- [boxBounds](Editor.md#boxbounds)
- [renderBounds](Editor.md#renderbounds)
- [worldBoxBounds](Editor.md#worldboxbounds)
- [worldStrokeBounds](Editor.md#worldstrokebounds)
- [worldRenderBounds](Editor.md#worldrenderbounds)
- [worldOpacity](Editor.md#worldopacity)
- [\_\_worldFlipped](Editor.md#__worldflipped)
- [\_\_onlyHitMask](Editor.md#__onlyhitmask)
- [\_\_ignoreHitWorld](Editor.md#__ignorehitworld)
- [\_\_inLazyBounds](Editor.md#__inlazybounds)
- [pathInputed](Editor.md#pathinputed)
- [event](Editor.md#event)
- [\_\_tag](Editor.md#__tag)
- [isBranch](Editor.md#isbranch)
- [app](Editor.md#app)
- [isFrame](Editor.md#isframe)
- [scale](Editor.md#scale)
- [pen](Editor.md#pen)

### Methods

- [select](Editor.md#select)
- [cancel](Editor.md#cancel)
- [hasItem](Editor.md#hasitem)
- [addItem](Editor.md#additem)
- [removeItem](Editor.md#removeitem)
- [shiftItem](Editor.md#shiftitem)
- [update](Editor.md#update)
- [updateEditBox](Editor.md#updateeditbox)
- [updateEditTool](Editor.md#updateedittool)
- [getEditSize](Editor.md#geteditsize)
- [onMove](Editor.md#onmove)
- [onScale](Editor.md#onscale)
- [onRotate](Editor.md#onrotate)
- [onSkew](Editor.md#onskew)
- [move](Editor.md#move)
- [scaleWithDrag](Editor.md#scalewithdrag)
- [scaleOf](Editor.md#scaleof)
- [flip](Editor.md#flip)
- [rotateOf](Editor.md#rotateof)
- [skewOf](Editor.md#skewof)
- [checkTransform](Editor.md#checktransform)
- [getWorldOrigin](Editor.md#getworldorigin)
- [getChangedTransform](Editor.md#getchangedtransform)
- [group](Editor.md#group)
- [ungroup](Editor.md#ungroup)
- [openGroup](Editor.md#opengroup)
- [closeGroup](Editor.md#closegroup)
- [checkOpenedGroups](Editor.md#checkopenedgroups)
- [checkDeepSelect](Editor.md#checkdeepselect)
- [emitGroupEvent](Editor.md#emitgroupevent)
- [openInnerEditor](Editor.md#openinnereditor)
- [closeInnerEditor](Editor.md#closeinnereditor)
- [emitInnerEvent](Editor.md#emitinnerevent)
- [lock](Editor.md#lock)
- [unlock](Editor.md#unlock)
- [toTop](Editor.md#totop)
- [toBottom](Editor.md#tobottom)
- [onAppRenderStart](Editor.md#onapprenderstart)
- [onRenderStart](Editor.md#onrenderstart)
- [listenTargetEvents](Editor.md#listentargetevents)
- [removeTargetEvents](Editor.md#removetargetevents)
- [destroy](Editor.md#destroy)
- [resetCustom](Editor.md#resetcustom)
- [waitParent](Editor.md#waitparent)
- [waitLeafer](Editor.md#waitleafer)
- [nextRender](Editor.md#nextrender)
- [removeNextRender](Editor.md#removenextrender)
- [\_\_bindLeafer](Editor.md#__bindleafer)
- [setAttr](Editor.md#setattr)
- [getAttr](Editor.md#getattr)
- [getComputedAttr](Editor.md#getcomputedattr)
- [toString](Editor.md#tostring)
- [toSVG](Editor.md#tosvg)
- [\_\_SVG](Editor.md#__svg)
- [toHTML](Editor.md#tohtml)
- [\_\_setAttr](Editor.md#__setattr)
- [\_\_getAttr](Editor.md#__getattr)
- [setProxyAttr](Editor.md#setproxyattr)
- [getProxyAttr](Editor.md#getproxyattr)
- [focus](Editor.md#focus)
- [updateState](Editor.md#updatestate)
- [updateLayout](Editor.md#updatelayout)
- [forceUpdate](Editor.md#forceupdate)
- [forceRender](Editor.md#forcerender)
- [\_\_extraUpdate](Editor.md#__extraupdate)
- [\_\_updateWorldMatrix](Editor.md#__updateworldmatrix)
- [\_\_updateLocalMatrix](Editor.md#__updatelocalmatrix)
- [\_\_updateWorldBounds](Editor.md#__updateworldbounds)
- [\_\_updateLocalBounds](Editor.md#__updatelocalbounds)
- [\_\_updateLocalBoxBounds](Editor.md#__updatelocalboxbounds)
- [\_\_updateLocalStrokeBounds](Editor.md#__updatelocalstrokebounds)
- [\_\_updateLocalRenderBounds](Editor.md#__updatelocalrenderbounds)
- [\_\_updateBoxBounds](Editor.md#__updateboxbounds)
- [\_\_updateContentBounds](Editor.md#__updatecontentbounds)
- [\_\_updateStrokeBounds](Editor.md#__updatestrokebounds)
- [\_\_updateRenderBounds](Editor.md#__updaterenderbounds)
- [\_\_updateAutoLayout](Editor.md#__updateautolayout)
- [\_\_updateFlowLayout](Editor.md#__updateflowlayout)
- [\_\_updateNaturalSize](Editor.md#__updatenaturalsize)
- [\_\_updateStrokeSpread](Editor.md#__updatestrokespread)
- [\_\_updateRenderSpread](Editor.md#__updaterenderspread)
- [\_\_updateEraser](Editor.md#__updateeraser)
- [\_\_renderEraser](Editor.md#__rendereraser)
- [\_\_updateMask](Editor.md#__updatemask)
- [\_\_renderMask](Editor.md#__rendermask)
- [\_\_getNowWorld](Editor.md#__getnowworld)
- [getTransform](Editor.md#gettransform)
- [getBounds](Editor.md#getbounds)
- [getLayoutBounds](Editor.md#getlayoutbounds)
- [getLayoutPoints](Editor.md#getlayoutpoints)
- [getWorldBounds](Editor.md#getworldbounds)
- [worldToLocal](Editor.md#worldtolocal)
- [localToWorld](Editor.md#localtoworld)
- [worldToInner](Editor.md#worldtoinner)
- [innerToWorld](Editor.md#innertoworld)
- [getBoxPoint](Editor.md#getboxpoint)
- [getBoxPointByInner](Editor.md#getboxpointbyinner)
- [getInnerPoint](Editor.md#getinnerpoint)
- [getInnerPointByBox](Editor.md#getinnerpointbybox)
- [getInnerPointByLocal](Editor.md#getinnerpointbylocal)
- [getLocalPoint](Editor.md#getlocalpoint)
- [getLocalPointByInner](Editor.md#getlocalpointbyinner)
- [getPagePoint](Editor.md#getpagepoint)
- [getWorldPoint](Editor.md#getworldpoint)
- [getWorldPointByBox](Editor.md#getworldpointbybox)
- [getWorldPointByLocal](Editor.md#getworldpointbylocal)
- [getWorldPointByPage](Editor.md#getworldpointbypage)
- [setTransform](Editor.md#settransform)
- [transform](Editor.md#transform)
- [moveInner](Editor.md#moveinner)
- [transformWorld](Editor.md#transformworld)
- [moveWorld](Editor.md#moveworld)
- [scaleOfWorld](Editor.md#scaleofworld)
- [rotateOfWorld](Editor.md#rotateofworld)
- [skewOfWorld](Editor.md#skewofworld)
- [scaleResize](Editor.md#scaleresize)
- [\_\_scaleResize](Editor.md#__scaleresize)
- [resizeWidth](Editor.md#resizewidth)
- [resizeHeight](Editor.md#resizeheight)
- [\_\_hitWorld](Editor.md#__hitworld)
- [\_\_hit](Editor.md#__hit)
- [\_\_hitFill](Editor.md#__hitfill)
- [\_\_hitStroke](Editor.md#__hitstroke)
- [\_\_hitPixel](Editor.md#__hitpixel)
- [\_\_drawHitPath](Editor.md#__drawhitpath)
- [\_\_updateHitCanvas](Editor.md#__updatehitcanvas)
- [\_\_render](Editor.md#__render)
- [\_\_drawFast](Editor.md#__drawfast)
- [\_\_draw](Editor.md#__draw)
- [\_\_clip](Editor.md#__clip)
- [\_\_renderShape](Editor.md#__rendershape)
- [\_\_drawShape](Editor.md#__drawshape)
- [\_\_updateWorldOpacity](Editor.md#__updateworldopacity)
- [\_\_updateChange](Editor.md#__updatechange)
- [\_\_updatePath](Editor.md#__updatepath)
- [getMotionPathData](Editor.md#getmotionpathdata)
- [getMotionPoint](Editor.md#getmotionpoint)
- [getMotionTotal](Editor.md#getmotiontotal)
- [\_\_updateMotionPath](Editor.md#__updatemotionpath)
- [\_\_runAnimation](Editor.md#__runanimation)
- [\_\_updateSortChildren](Editor.md#__updatesortchildren)
- [dropTo](Editor.md#dropto)
- [on](Editor.md#on)
- [off](Editor.md#off)
- [on\_](Editor.md#on_)
- [off\_](Editor.md#off_)
- [once](Editor.md#once)
- [emit](Editor.md#emit)
- [emitEvent](Editor.md#emitevent)
- [hasEvent](Editor.md#hasevent)
- [changeAttr](Editor.md#changeattr)
- [addAttr](Editor.md#addattr)
- [\_\_emitLifeEvent](Editor.md#__emitlifeevent)
- [reset](Editor.md#reset)
- [\_\_setBranch](Editor.md#__setbranch)
- [set](Editor.md#set)
- [toJSON](Editor.md#tojson)
- [pick](Editor.md#pick)
- [addAt](Editor.md#addat)
- [addAfter](Editor.md#addafter)
- [addBefore](Editor.md#addbefore)
- [add](Editor.md#add)
- [addMany](Editor.md#addmany)
- [remove](Editor.md#remove)
- [removeAll](Editor.md#removeall)
- [clear](Editor.md#clear)
- [get](Editor.md#get)
- [createProxyData](Editor.md#createproxydata)
- [find](Editor.md#find)
- [findTag](Editor.md#findtag)
- [findOne](Editor.md#findone)
- [findId](Editor.md#findid)
- [getPath](Editor.md#getpath)
- [getPathString](Editor.md#getpathstring)
- [load](Editor.md#load)
- [\_\_onUpdateSize](Editor.md#__onupdatesize)
- [\_\_updateRenderPath](Editor.md#__updaterenderpath)
- [\_\_drawRenderPath](Editor.md#__drawrenderpath)
- [\_\_drawPath](Editor.md#__drawpath)
- [\_\_drawPathByData](Editor.md#__drawpathbydata)
- [\_\_drawPathByBox](Editor.md#__drawpathbybox)
- [drawImagePlaceholder](Editor.md#drawimageplaceholder)
- [animate](Editor.md#animate)
- [killAnimate](Editor.md#killanimate)
- [export](Editor.md#export)
- [syncExport](Editor.md#syncexport)
- [clone](Editor.md#clone)
- [one](Editor.md#one)
- [registerUI](Editor.md#registerui)
- [registerData](Editor.md#registerdata)
- [setEditConfig](Editor.md#seteditconfig)
- [setEditOuter](Editor.md#seteditouter)
- [setEditInner](Editor.md#seteditinner)

## Constructors

### constructor

• **new Editor**(`userConfig?`, `data?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userConfig?` | [`IEditorConfig`](../interfaces/IEditorConfig.md) |
| `data?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) |

#### Overrides

[Group](Group.md).[constructor](Group.md#constructor)

#### Defined in

[in/packages/editor/src/Editor.ts:79](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L79)

## Properties

### config

• **config**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[config](../interfaces/IEditor.md#config)

#### Defined in

[in/packages/editor/src/Editor.ts:26](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L26)

___

### mergeConfig

• `Readonly` **mergeConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[mergeConfig](../interfaces/IEditor.md#mergeconfig)

#### Defined in

[in/packages/editor/src/Editor.ts:29](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L29)

___

### mergedConfig

• `Readonly` **mergedConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[mergedConfig](../interfaces/IEditor.md#mergedconfig)

#### Defined in

[in/packages/editor/src/Editor.ts:30](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L30)

___

### hoverTarget

• `Optional` **hoverTarget**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hoverTarget](../interfaces/IEditor.md#hovertarget)

#### Defined in

[in/packages/editor/src/Editor.ts:33](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L33)

___

### target

• `Optional` **target**: [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[target](../interfaces/IEditor.md#target)

#### Defined in

[in/packages/editor/src/Editor.ts:36](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L36)

___

### leafList

• **leafList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[leafList](../interfaces/IEditor.md#leaflist)

#### Defined in

[in/packages/editor/src/Editor.ts:40](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L40)

___

### openedGroupList

• **openedGroupList**: [`ILeafList`](../interfaces/ILeafList.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[openedGroupList](../interfaces/IEditor.md#openedgrouplist)

#### Defined in

[in/packages/editor/src/Editor.ts:43](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L43)

___

### innerEditing

• **innerEditing**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[innerEditing](../interfaces/IEditor.md#innerediting)

#### Defined in

[in/packages/editor/src/Editor.ts:48](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L48)

___

### resizeDirection

• `Optional` **resizeDirection**: [`Direction9`](../enums/Direction9.md)

#### Defined in

[in/packages/editor/src/Editor.ts:50](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L50)

___

### simulateTarget

• **simulateTarget**: [`ISimulateElement`](../interfaces/ISimulateElement.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[simulateTarget](../interfaces/IEditor.md#simulatetarget)

#### Defined in

[in/packages/editor/src/Editor.ts:62](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L62)

___

### editBox

• **editBox**: [`IEditBox`](../interfaces/IEditBox.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editBox](../interfaces/IEditor.md#editbox)

#### Defined in

[in/packages/editor/src/Editor.ts:64](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L64)

___

### editTool

• `Optional` **editTool**: [`IEditTool`](../interfaces/IEditTool.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editTool](../interfaces/IEditor.md#edittool)

#### Defined in

[in/packages/editor/src/Editor.ts:67](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L67)

___

### innerEditor

• `Optional` **innerEditor**: [`IInnerEditor`](../interfaces/IInnerEditor.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[innerEditor](../interfaces/IEditor.md#innereditor)

#### Defined in

[in/packages/editor/src/Editor.ts:69](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L69)

___

### editToolList

• **editToolList**: [`IObject`](../interfaces/IObject.md) = `{}`

#### Defined in

[in/packages/editor/src/Editor.ts:70](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L70)

___

### selector

• **selector**: [`EditSelect`](EditSelect.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[selector](../interfaces/IEditor.md#selector)

#### Defined in

[in/packages/editor/src/Editor.ts:72](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L72)

___

### editMask

• **editMask**: `EditMask`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editMask](../interfaces/IEditor.md#editmask)

#### Defined in

[in/packages/editor/src/Editor.ts:73](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L73)

___

### targetChanged

• **targetChanged**: `boolean`

#### Defined in

[in/packages/editor/src/Editor.ts:75](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L75)

___

### targetEventIds

• **targetEventIds**: [`IEventListenerId`](../interfaces/IEventListenerId.md)[] = `[]`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[targetEventIds](../interfaces/IEditor.md#targeteventids)

#### Defined in

[in/packages/editor/src/Editor.ts:76](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L76)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[innerId](../interfaces/IEditor.md#innerid)

#### Inherited from

[Group](Group.md).[innerId](Group.md#innerid)

#### Defined in

[leafer/packages/display/src/Leaf.ts:30](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L30)

___

### syncEventer

• `Optional` **syncEventer**: [`ILeaf`](../interfaces/ILeaf.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[syncEventer](../interfaces/IEditor.md#synceventer)

#### Inherited from

[Group](Group.md).[syncEventer](Group.md#synceventer)

#### Defined in

[leafer/packages/display/src/Leaf.ts:46](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L46)

___

### lockNormalStyle

• `Optional` **lockNormalStyle**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[lockNormalStyle](../interfaces/IEditor.md#locknormalstyle)

#### Inherited from

[Group](Group.md).[lockNormalStyle](Group.md#locknormalstyle)

#### Defined in

[leafer/packages/display/src/Leaf.ts:47](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L47)

___

### \_\_layout

• **\_\_layout**: [`ILeafLayout`](../interfaces/ILeafLayout.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__layout](../interfaces/IEditor.md#__layout)

#### Inherited from

[Group](Group.md).[__layout](Group.md#__layout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:50](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L50)

___

### \_\_world

• **\_\_world**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__world](../interfaces/IEditor.md#__world)

#### Inherited from

[Group](Group.md).[__world](Group.md#__world)

#### Defined in

[leafer/packages/display/src/Leaf.ts:52](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L52)

___

### \_\_local

• `Optional` **\_\_local**: [`IMatrixWithBoundsData`](../interfaces/IMatrixWithBoundsData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__local](../interfaces/IEditor.md#__local)

#### Inherited from

[Group](Group.md).[__local](Group.md#__local)

#### Defined in

[leafer/packages/display/src/Leaf.ts:53](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L53)

___

### \_\_nowWorld

• `Optional` **\_\_nowWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__nowWorld](../interfaces/IEditor.md#__nowworld)

#### Inherited from

[Group](Group.md).[__nowWorld](Group.md#__nowworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:55](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L55)

___

### \_\_cameraWorld

• `Optional` **\_\_cameraWorld**: [`IMatrixWithBoundsScaleData`](../interfaces/IMatrixWithBoundsScaleData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__cameraWorld](../interfaces/IEditor.md#__cameraworld)

#### Inherited from

[Group](Group.md).[__cameraWorld](Group.md#__cameraworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:56](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L56)

___

### \_\_worldOpacity

• **\_\_worldOpacity**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__worldOpacity](../interfaces/IEditor.md#__worldopacity)

#### Inherited from

[Group](Group.md).[__worldOpacity](Group.md#__worldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:61](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L61)

___

### \_\_level

• **\_\_level**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__level](../interfaces/IEditor.md#__level)

#### Inherited from

[Group](Group.md).[__level](Group.md#__level)

#### Defined in

[leafer/packages/display/src/Leaf.ts:77](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L77)

___

### \_\_tempNumber

• **\_\_tempNumber**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__tempNumber](../interfaces/IEditor.md#__tempnumber)

#### Inherited from

[Group](Group.md).[__tempNumber](Group.md#__tempnumber)

#### Defined in

[leafer/packages/display/src/Leaf.ts:78](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L78)

___

### \_\_hasAutoLayout

• `Optional` **\_\_hasAutoLayout**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hasAutoLayout](../interfaces/IEditor.md#__hasautolayout)

#### Inherited from

[Group](Group.md).[__hasAutoLayout](Group.md#__hasautolayout)

#### Defined in

[leafer/packages/display/src/Leaf.ts:82](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L82)

___

### \_\_hasMask

• `Optional` **\_\_hasMask**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hasMask](../interfaces/IEditor.md#__hasmask)

#### Inherited from

[Group](Group.md).[__hasMask](Group.md#__hasmask)

#### Defined in

[leafer/packages/display/src/Leaf.ts:83](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L83)

___

### \_\_hasEraser

• `Optional` **\_\_hasEraser**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hasEraser](../interfaces/IEditor.md#__haseraser)

#### Inherited from

[Group](Group.md).[__hasEraser](Group.md#__haseraser)

#### Defined in

[leafer/packages/display/src/Leaf.ts:84](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L84)

___

### \_\_hitCanvas

• `Optional` **\_\_hitCanvas**: [`IHitCanvas`](../interfaces/IHitCanvas.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hitCanvas](../interfaces/IEditor.md#__hitcanvas)

#### Inherited from

[Group](Group.md).[__hitCanvas](Group.md#__hitcanvas)

#### Defined in

[leafer/packages/display/src/Leaf.ts:85](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L85)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__captureMap](../interfaces/IEditor.md#__capturemap)

#### Inherited from

[Group](Group.md).[__captureMap](Group.md#__capturemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:96](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L96)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__bubbleMap](../interfaces/IEditor.md#__bubblemap)

#### Inherited from

[Group](Group.md).[__bubbleMap](Group.md#__bubblemap)

#### Defined in

[leafer/packages/display/src/Leaf.ts:97](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L97)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hasLocalEvent](../interfaces/IEditor.md#__haslocalevent)

#### Inherited from

[Group](Group.md).[__hasLocalEvent](Group.md#__haslocalevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:99](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L99)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__hasWorldEvent](../interfaces/IEditor.md#__hasworldevent)

#### Inherited from

[Group](Group.md).[__hasWorldEvent](Group.md#__hasworldevent)

#### Defined in

[leafer/packages/display/src/Leaf.ts:100](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L100)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[destroyed](../interfaces/IEditor.md#destroyed)

#### Inherited from

[Group](Group.md).[destroyed](Group.md#destroyed)

#### Defined in

[leafer/packages/display/src/Leaf.ts:105](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L105)

___

### \_\_

• **\_\_**: [`IGroupData`](../interfaces/IGroupData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__](../interfaces/IEditor.md#__)

#### Inherited from

[Group](Group.md).[__](Group.md#__)

#### Defined in

[ui/packages/display/src/Group.ts:19](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L19)

___

### width

• `Optional` **width**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[width](../interfaces/IEditor.md#width)

#### Inherited from

[Group](Group.md).[width](Group.md#width)

#### Defined in

[ui/packages/display/src/Group.ts:23](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L23)

___

### height

• `Optional` **height**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[height](../interfaces/IEditor.md#height)

#### Inherited from

[Group](Group.md).[height](Group.md#height)

#### Defined in

[ui/packages/display/src/Group.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L26)

___

### children

• **children**: [`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[children](../interfaces/IEditor.md#children)

#### Inherited from

[Group](Group.md).[children](Group.md#children)

#### Defined in

[ui/packages/display/src/Group.ts:28](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L28)

___

### proxyData

• `Optional` **proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[proxyData](../interfaces/IEditor.md#proxydata)

#### Inherited from

[Group](Group.md).[proxyData](Group.md#proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:21](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L21)

___

### \_\_proxyData

• `Optional` **\_\_proxyData**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__proxyData](../interfaces/IEditor.md#__proxydata)

#### Inherited from

[Group](Group.md).[__proxyData](Group.md#__proxydata)

#### Defined in

[ui/packages/display/src/UI.ts:22](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L22)

___

### leafer

• `Optional` **leafer**: [`ILeafer`](../interfaces/ILeafer.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[leafer](../interfaces/IEditor.md#leafer)

#### Inherited from

[Group](Group.md).[leafer](Group.md#leafer)

#### Defined in

[ui/packages/display/src/UI.ts:26](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L26)

___

### parent

• `Optional` **parent**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[parent](../interfaces/IEditor.md#parent)

#### Inherited from

[Group](Group.md).[parent](Group.md#parent)

#### Defined in

[ui/packages/display/src/UI.ts:27](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L27)

___

### zoomLayer

• **zoomLayer**: [`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[zoomLayer](../interfaces/IEditor.md#zoomlayer)

#### Inherited from

[Group](Group.md).[zoomLayer](Group.md#zoomlayer)

#### Defined in

[ui/packages/display/src/UI.ts:30](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L30)

___

### id

• `Optional` **id**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[id](../interfaces/IEditor.md#id)

#### Inherited from

[Group](Group.md).[id](Group.md#id)

#### Defined in

[ui/packages/display/src/UI.ts:40](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L40)

___

### name

• `Optional` **name**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[name](../interfaces/IEditor.md#name)

#### Inherited from

[Group](Group.md).[name](Group.md#name)

#### Defined in

[ui/packages/display/src/UI.ts:43](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L43)

___

### className

• `Optional` **className**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[className](../interfaces/IEditor.md#classname)

#### Inherited from

[Group](Group.md).[className](Group.md#classname)

#### Defined in

[ui/packages/display/src/UI.ts:46](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L46)

___

### blendMode

• `Optional` **blendMode**: [`IBlendMode`](../modules.md#iblendmode)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[blendMode](../interfaces/IEditor.md#blendmode)

#### Inherited from

[Group](Group.md).[blendMode](Group.md#blendmode)

#### Defined in

[ui/packages/display/src/UI.ts:51](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L51)

___

### opacity

• `Optional` **opacity**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[opacity](../interfaces/IEditor.md#opacity)

#### Inherited from

[Group](Group.md).[opacity](Group.md#opacity)

#### Defined in

[ui/packages/display/src/UI.ts:54](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L54)

___

### visible

• `Optional` **visible**: `boolean` \| ``0``

#### Implementation of

[IEditor](../interfaces/IEditor.md).[visible](../interfaces/IEditor.md#visible)

#### Inherited from

[Group](Group.md).[visible](Group.md#visible)

#### Defined in

[ui/packages/display/src/UI.ts:57](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L57)

___

### locked

• `Optional` **locked**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[locked](../interfaces/IEditor.md#locked)

#### Inherited from

[Group](Group.md).[locked](Group.md#locked)

#### Defined in

[ui/packages/display/src/UI.ts:61](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L61)

___

### dim

• `Optional` **dim**: `number` \| `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dim](../interfaces/IEditor.md#dim)

#### Inherited from

[Group](Group.md).[dim](Group.md#dim)

#### Defined in

[ui/packages/display/src/UI.ts:65](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L65)

___

### dimskip

• `Optional` **dimskip**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dimskip](../interfaces/IEditor.md#dimskip)

#### Inherited from

[Group](Group.md).[dimskip](Group.md#dimskip)

#### Defined in

[ui/packages/display/src/UI.ts:68](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L68)

___

### zIndex

• `Optional` **zIndex**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[zIndex](../interfaces/IEditor.md#zindex)

#### Inherited from

[Group](Group.md).[zIndex](Group.md#zindex)

#### Defined in

[ui/packages/display/src/UI.ts:72](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L72)

___

### mask

• `Optional` **mask**: `boolean` \| [`IMaskType`](../modules.md#imasktype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[mask](../interfaces/IEditor.md#mask)

#### Inherited from

[Group](Group.md).[mask](Group.md#mask)

#### Defined in

[ui/packages/display/src/UI.ts:76](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L76)

___

### eraser

• `Optional` **eraser**: `boolean` \| [`IEraserType`](../modules.md#ierasertype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[eraser](../interfaces/IEditor.md#eraser)

#### Inherited from

[Group](Group.md).[eraser](Group.md#eraser)

#### Defined in

[ui/packages/display/src/UI.ts:79](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L79)

___

### x

• `Optional` **x**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[x](../interfaces/IEditor.md#x)

#### Inherited from

[Group](Group.md).[x](Group.md#x)

#### Defined in

[ui/packages/display/src/UI.ts:84](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L84)

___

### y

• `Optional` **y**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[y](../interfaces/IEditor.md#y)

#### Inherited from

[Group](Group.md).[y](Group.md#y)

#### Defined in

[ui/packages/display/src/UI.ts:87](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L87)

___

### scaleX

• `Optional` **scaleX**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[scaleX](../interfaces/IEditor.md#scalex)

#### Inherited from

[Group](Group.md).[scaleX](Group.md#scalex)

#### Defined in

[ui/packages/display/src/UI.ts:98](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L98)

___

### scaleY

• `Optional` **scaleY**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[scaleY](../interfaces/IEditor.md#scaley)

#### Inherited from

[Group](Group.md).[scaleY](Group.md#scaley)

#### Defined in

[ui/packages/display/src/UI.ts:101](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L101)

___

### rotation

• `Optional` **rotation**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[rotation](../interfaces/IEditor.md#rotation)

#### Inherited from

[Group](Group.md).[rotation](Group.md#rotation)

#### Defined in

[ui/packages/display/src/UI.ts:105](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L105)

___

### skewX

• `Optional` **skewX**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[skewX](../interfaces/IEditor.md#skewx)

#### Inherited from

[Group](Group.md).[skewX](Group.md#skewx)

#### Defined in

[ui/packages/display/src/UI.ts:109](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L109)

___

### skewY

• `Optional` **skewY**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[skewY](../interfaces/IEditor.md#skewy)

#### Inherited from

[Group](Group.md).[skewY](Group.md#skewy)

#### Defined in

[ui/packages/display/src/UI.ts:112](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L112)

___

### offsetX

• `Optional` **offsetX**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[offsetX](../interfaces/IEditor.md#offsetx)

#### Inherited from

[Group](Group.md).[offsetX](Group.md#offsetx)

#### Defined in

[ui/packages/display/src/UI.ts:117](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L117)

___

### offsetY

• `Optional` **offsetY**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[offsetY](../interfaces/IEditor.md#offsety)

#### Inherited from

[Group](Group.md).[offsetY](Group.md#offsety)

#### Defined in

[ui/packages/display/src/UI.ts:120](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L120)

___

### scrollX

• `Optional` **scrollX**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[scrollX](../interfaces/IEditor.md#scrollx)

#### Inherited from

[Group](Group.md).[scrollX](Group.md#scrollx)

#### Defined in

[ui/packages/display/src/UI.ts:124](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L124)

___

### scrollY

• `Optional` **scrollY**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[scrollY](../interfaces/IEditor.md#scrolly)

#### Inherited from

[Group](Group.md).[scrollY](Group.md#scrolly)

#### Defined in

[ui/packages/display/src/UI.ts:127](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L127)

___

### origin

• `Optional` **origin**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[origin](../interfaces/IEditor.md#origin)

#### Inherited from

[Group](Group.md).[origin](Group.md#origin)

#### Defined in

[ui/packages/display/src/UI.ts:132](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L132)

___

### around

• `Optional` **around**: [`IUnitPointData`](../interfaces/IUnitPointData.md) \| [`IDirection`](../modules.md#idirection)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[around](../interfaces/IEditor.md#around)

#### Inherited from

[Group](Group.md).[around](Group.md#around)

#### Defined in

[ui/packages/display/src/UI.ts:135](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L135)

___

### lazy

• `Optional` **lazy**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[lazy](../interfaces/IEditor.md#lazy)

#### Inherited from

[Group](Group.md).[lazy](Group.md#lazy)

#### Defined in

[ui/packages/display/src/UI.ts:140](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L140)

___

### pixelRatio

• `Optional` **pixelRatio**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[pixelRatio](../interfaces/IEditor.md#pixelratio)

#### Inherited from

[Group](Group.md).[pixelRatio](Group.md#pixelratio)

#### Defined in

[ui/packages/display/src/UI.ts:143](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L143)

___

### path

• `Optional` **path**: `string` \| [`IPathCommandData`](../modules.md#ipathcommanddata) \| [`IPathCommandObject`](../modules.md#ipathcommandobject)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[path](../interfaces/IEditor.md#path)

#### Inherited from

[Group](Group.md).[path](Group.md#path)

#### Defined in

[ui/packages/display/src/UI.ts:148](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L148)

___

### windingRule

• `Optional` **windingRule**: [`IWindingRule`](../modules.md#iwindingrule)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[windingRule](../interfaces/IEditor.md#windingrule)

#### Inherited from

[Group](Group.md).[windingRule](Group.md#windingrule)

#### Defined in

[ui/packages/display/src/UI.ts:151](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L151)

___

### closed

• `Optional` **closed**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[closed](../interfaces/IEditor.md#closed)

#### Inherited from

[Group](Group.md).[closed](Group.md#closed)

#### Defined in

[ui/packages/display/src/UI.ts:154](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L154)

___

### flow

• `Optional` **flow**: [`IFlowType`](../modules.md#iflowtype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[flow](../interfaces/IEditor.md#flow)

#### Inherited from

[Group](Group.md).[flow](Group.md#flow)

#### Defined in

[ui/packages/display/src/UI.ts:158](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L158)

___

### padding

• `Optional` **padding**: [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[padding](../interfaces/IEditor.md#padding)

#### Inherited from

[Group](Group.md).[padding](Group.md#padding)

#### Defined in

[ui/packages/display/src/UI.ts:161](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L161)

___

### gap

• `Optional` **gap**: [`IGap`](../modules.md#igap) \| [`IPointGap`](../interfaces/IPointGap.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[gap](../interfaces/IEditor.md#gap)

#### Inherited from

[Group](Group.md).[gap](Group.md#gap)

#### Defined in

[ui/packages/display/src/UI.ts:163](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L163)

___

### flowAlign

• `Optional` **flowAlign**: [`IFlowAxisAlign`](../interfaces/IFlowAxisAlign.md) \| [`IFlowAlign`](../modules.md#iflowalign)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[flowAlign](../interfaces/IEditor.md#flowalign)

#### Inherited from

[Group](Group.md).[flowAlign](Group.md#flowalign)

#### Defined in

[ui/packages/display/src/UI.ts:165](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L165)

___

### flowWrap

• `Optional` **flowWrap**: [`IFlowWrap`](../modules.md#iflowwrap)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[flowWrap](../interfaces/IEditor.md#flowwrap)

#### Inherited from

[Group](Group.md).[flowWrap](Group.md#flowwrap)

#### Defined in

[ui/packages/display/src/UI.ts:167](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L167)

___

### itemBox

• `Optional` **itemBox**: [`IFlowBoxType`](../modules.md#iflowboxtype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[itemBox](../interfaces/IEditor.md#itembox)

#### Inherited from

[Group](Group.md).[itemBox](Group.md#itembox)

#### Defined in

[ui/packages/display/src/UI.ts:170](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L170)

___

### inFlow

• `Optional` **inFlow**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[inFlow](../interfaces/IEditor.md#inflow)

#### Inherited from

[Group](Group.md).[inFlow](Group.md#inflow)

#### Defined in

[ui/packages/display/src/UI.ts:172](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L172)

___

### autoWidth

• `Optional` **autoWidth**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[autoWidth](../interfaces/IEditor.md#autowidth)

#### Inherited from

[Group](Group.md).[autoWidth](Group.md#autowidth)

#### Defined in

[ui/packages/display/src/UI.ts:175](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L175)

___

### autoHeight

• `Optional` **autoHeight**: [`IAutoSize`](../modules.md#iautosize)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[autoHeight](../interfaces/IEditor.md#autoheight)

#### Inherited from

[Group](Group.md).[autoHeight](Group.md#autoheight)

#### Defined in

[ui/packages/display/src/UI.ts:177](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L177)

___

### lockRatio

• `Optional` **lockRatio**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[lockRatio](../interfaces/IEditor.md#lockratio)

#### Inherited from

[Group](Group.md).[lockRatio](Group.md#lockratio)

#### Defined in

[ui/packages/display/src/UI.ts:180](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L180)

___

### autoBox

• `Optional` **autoBox**: [`IAutoBoxData`](../interfaces/IAutoBoxData.md) \| [`IConstraint`](../interfaces/IConstraint.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[autoBox](../interfaces/IEditor.md#autobox)

#### Inherited from

[Group](Group.md).[autoBox](Group.md#autobox)

#### Defined in

[ui/packages/display/src/UI.ts:182](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L182)

___

### widthRange

• `Optional` **widthRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[widthRange](../interfaces/IEditor.md#widthrange)

#### Inherited from

[Group](Group.md).[widthRange](Group.md#widthrange)

#### Defined in

[ui/packages/display/src/UI.ts:185](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L185)

___

### heightRange

• `Optional` **heightRange**: [`IRangeSize`](../interfaces/IRangeSize.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[heightRange](../interfaces/IEditor.md#heightrange)

#### Inherited from

[Group](Group.md).[heightRange](Group.md#heightrange)

#### Defined in

[ui/packages/display/src/UI.ts:188](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L188)

___

### draggable

• `Optional` **draggable**: `boolean` \| [`IAxis`](../modules.md#iaxis)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[draggable](../interfaces/IEditor.md#draggable)

#### Inherited from

[Group](Group.md).[draggable](Group.md#draggable)

#### Defined in

[ui/packages/display/src/UI.ts:193](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L193)

___

### dragBounds

• `Optional` **dragBounds**: ``"parent"`` \| [`IBoundsData`](../interfaces/IBoundsData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dragBounds](../interfaces/IEditor.md#dragbounds)

#### Inherited from

[Group](Group.md).[dragBounds](Group.md#dragbounds)

#### Defined in

[ui/packages/display/src/UI.ts:196](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L196)

___

### editable

• `Optional` **editable**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editable](../interfaces/IEditor.md#editable)

#### Inherited from

[Group](Group.md).[editable](Group.md#editable)

#### Defined in

[ui/packages/display/src/UI.ts:200](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L200)

___

### hittable

• `Optional` **hittable**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hittable](../interfaces/IEditor.md#hittable)

#### Inherited from

[Group](Group.md).[hittable](Group.md#hittable)

#### Defined in

[ui/packages/display/src/UI.ts:205](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L205)

___

### hitFill

• `Optional` **hitFill**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitFill](../interfaces/IEditor.md#hitfill)

#### Inherited from

[Group](Group.md).[hitFill](Group.md#hitfill)

#### Defined in

[ui/packages/display/src/UI.ts:208](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L208)

___

### hitStroke

• `Optional` **hitStroke**: [`IHitType`](../modules.md#ihittype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitStroke](../interfaces/IEditor.md#hitstroke)

#### Inherited from

[Group](Group.md).[hitStroke](Group.md#hitstroke)

#### Defined in

[ui/packages/display/src/UI.ts:211](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L211)

___

### hitBox

• `Optional` **hitBox**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitBox](../interfaces/IEditor.md#hitbox)

#### Inherited from

[Group](Group.md).[hitBox](Group.md#hitbox)

#### Defined in

[ui/packages/display/src/UI.ts:214](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L214)

___

### hitChildren

• `Optional` **hitChildren**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitChildren](../interfaces/IEditor.md#hitchildren)

#### Inherited from

[Group](Group.md).[hitChildren](Group.md#hitchildren)

#### Defined in

[ui/packages/display/src/UI.ts:217](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L217)

___

### hitSelf

• `Optional` **hitSelf**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitSelf](../interfaces/IEditor.md#hitself)

#### Inherited from

[Group](Group.md).[hitSelf](Group.md#hitself)

#### Defined in

[ui/packages/display/src/UI.ts:220](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L220)

___

### hitRadius

• `Optional` **hitRadius**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hitRadius](../interfaces/IEditor.md#hitradius)

#### Inherited from

[Group](Group.md).[hitRadius](Group.md#hitradius)

#### Defined in

[ui/packages/display/src/UI.ts:223](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L223)

___

### cursor

• `Optional` **cursor**: [`ICursorType`](../modules.md#icursortype) \| [`ICursorType`](../modules.md#icursortype)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[cursor](../interfaces/IEditor.md#cursor)

#### Inherited from

[Group](Group.md).[cursor](Group.md#cursor)

#### Defined in

[ui/packages/display/src/UI.ts:226](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L226)

___

### fill

• `Optional` **fill**: [`IFill`](../modules.md#ifill)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[fill](../interfaces/IEditor.md#fill)

#### Inherited from

[Group](Group.md).[fill](Group.md#fill)

#### Defined in

[ui/packages/display/src/UI.ts:234](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L234)

___

### stroke

• `Optional` **stroke**: [`IStroke`](../modules.md#istroke)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[stroke](../interfaces/IEditor.md#stroke)

#### Inherited from

[Group](Group.md).[stroke](Group.md#stroke)

#### Defined in

[ui/packages/display/src/UI.ts:239](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L239)

___

### strokeAlign

• `Optional` **strokeAlign**: [`IStrokeAlign`](../modules.md#istrokealign)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[strokeAlign](../interfaces/IEditor.md#strokealign)

#### Inherited from

[Group](Group.md).[strokeAlign](Group.md#strokealign)

#### Defined in

[ui/packages/display/src/UI.ts:242](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L242)

___

### strokeWidth

• `Optional` **strokeWidth**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[strokeWidth](../interfaces/IEditor.md#strokewidth)

#### Inherited from

[Group](Group.md).[strokeWidth](Group.md#strokewidth)

#### Defined in

[ui/packages/display/src/UI.ts:245](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L245)

___

### strokeWidthFixed

• `Optional` **strokeWidthFixed**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[strokeWidthFixed](../interfaces/IEditor.md#strokewidthfixed)

#### Inherited from

[Group](Group.md).[strokeWidthFixed](Group.md#strokewidthfixed)

#### Defined in

[ui/packages/display/src/UI.ts:248](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L248)

___

### strokeCap

• `Optional` **strokeCap**: [`IStrokeCap`](../modules.md#istrokecap)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[strokeCap](../interfaces/IEditor.md#strokecap)

#### Inherited from

[Group](Group.md).[strokeCap](Group.md#strokecap)

#### Defined in

[ui/packages/display/src/UI.ts:251](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L251)

___

### strokeJoin

• `Optional` **strokeJoin**: [`IStrokeJoin`](../modules.md#istrokejoin)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[strokeJoin](../interfaces/IEditor.md#strokejoin)

#### Inherited from

[Group](Group.md).[strokeJoin](Group.md#strokejoin)

#### Defined in

[ui/packages/display/src/UI.ts:254](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L254)

___

### dashPattern

• `Optional` **dashPattern**: `string` \| `number`[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dashPattern](../interfaces/IEditor.md#dashpattern)

#### Inherited from

[Group](Group.md).[dashPattern](Group.md#dashpattern)

#### Defined in

[ui/packages/display/src/UI.ts:257](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L257)

___

### dashOffset

• `Optional` **dashOffset**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dashOffset](../interfaces/IEditor.md#dashoffset)

#### Inherited from

[Group](Group.md).[dashOffset](Group.md#dashoffset)

#### Defined in

[ui/packages/display/src/UI.ts:260](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L260)

___

### miterLimit

• `Optional` **miterLimit**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[miterLimit](../interfaces/IEditor.md#miterlimit)

#### Inherited from

[Group](Group.md).[miterLimit](Group.md#miterlimit)

#### Defined in

[ui/packages/display/src/UI.ts:263](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L263)

___

### startArrow

• `Optional` **startArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[startArrow](../interfaces/IEditor.md#startarrow)

#### Inherited from

[Group](Group.md).[startArrow](Group.md#startarrow)

#### Defined in

[ui/packages/display/src/UI.ts:268](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L268)

___

### endArrow

• `Optional` **endArrow**: [`IArrowType`](../modules.md#iarrowtype)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[endArrow](../interfaces/IEditor.md#endarrow)

#### Inherited from

[Group](Group.md).[endArrow](Group.md#endarrow)

#### Defined in

[ui/packages/display/src/UI.ts:270](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L270)

___

### cornerRadius

• `Optional` **cornerRadius**: `string` \| [`IFourNumber`](../modules.md#ifournumber)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[cornerRadius](../interfaces/IEditor.md#cornerradius)

#### Inherited from

[Group](Group.md).[cornerRadius](Group.md#cornerradius)

#### Defined in

[ui/packages/display/src/UI.ts:275](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L275)

___

### cornerSmoothing

• `Optional` **cornerSmoothing**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[cornerSmoothing](../interfaces/IEditor.md#cornersmoothing)

#### Inherited from

[Group](Group.md).[cornerSmoothing](Group.md#cornersmoothing)

#### Defined in

[ui/packages/display/src/UI.ts:278](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L278)

___

### shadow

• `Optional` **shadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[shadow](../interfaces/IEditor.md#shadow)

#### Inherited from

[Group](Group.md).[shadow](Group.md#shadow)

#### Defined in

[ui/packages/display/src/UI.ts:283](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L283)

___

### innerShadow

• `Optional` **innerShadow**: `string` \| [`IShadowEffect`](../interfaces/IShadowEffect.md) \| [`IShadowEffect`](../interfaces/IShadowEffect.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[innerShadow](../interfaces/IEditor.md#innershadow)

#### Inherited from

[Group](Group.md).[innerShadow](Group.md#innershadow)

#### Defined in

[ui/packages/display/src/UI.ts:286](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L286)

___

### blur

• `Optional` **blur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[blur](../interfaces/IEditor.md#blur)

#### Inherited from

[Group](Group.md).[blur](Group.md#blur)

#### Defined in

[ui/packages/display/src/UI.ts:289](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L289)

___

### backgroundBlur

• `Optional` **backgroundBlur**: `number` \| [`IBlurEffect`](../interfaces/IBlurEffect.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[backgroundBlur](../interfaces/IEditor.md#backgroundblur)

#### Inherited from

[Group](Group.md).[backgroundBlur](Group.md#backgroundblur)

#### Defined in

[ui/packages/display/src/UI.ts:292](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L292)

___

### grayscale

• `Optional` **grayscale**: `number` \| [`IGrayscaleEffect`](../interfaces/IGrayscaleEffect.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[grayscale](../interfaces/IEditor.md#grayscale)

#### Inherited from

[Group](Group.md).[grayscale](Group.md#grayscale)

#### Defined in

[ui/packages/display/src/UI.ts:295](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L295)

___

### filter

• `Optional` **filter**: [`IFilter`](../interfaces/IFilter.md) \| [`IFilter`](../interfaces/IFilter.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[filter](../interfaces/IEditor.md#filter)

#### Inherited from

[Group](Group.md).[filter](Group.md#filter)

#### Defined in

[ui/packages/display/src/UI.ts:298](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L298)

___

### animation

• `Optional` **animation**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[animation](../interfaces/IEditor.md#animation)

#### Inherited from

[Group](Group.md).[animation](Group.md#animation)

#### Defined in

[ui/packages/display/src/UI.ts:303](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L303)

___

### animationOut

• `Optional` **animationOut**: [`IAnimation`](../modules.md#ianimation) \| [`IAnimation`](../modules.md#ianimation)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[animationOut](../interfaces/IEditor.md#animationout)

#### Inherited from

[Group](Group.md).[animationOut](Group.md#animationout)

#### Defined in

[ui/packages/display/src/UI.ts:305](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L305)

___

### transition

• `Optional` **transition**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[transition](../interfaces/IEditor.md#transition)

#### Inherited from

[Group](Group.md).[transition](Group.md#transition)

#### Defined in

[ui/packages/display/src/UI.ts:308](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L308)

___

### transitionOut

• `Optional` **transitionOut**: [`ITransition`](../modules.md#itransition)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[transitionOut](../interfaces/IEditor.md#transitionout)

#### Inherited from

[Group](Group.md).[transitionOut](Group.md#transitionout)

#### Defined in

[ui/packages/display/src/UI.ts:310](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L310)

___

### motionPath

• `Optional` **motionPath**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[motionPath](../interfaces/IEditor.md#motionpath)

#### Inherited from

[Group](Group.md).[motionPath](Group.md#motionpath)

#### Defined in

[ui/packages/display/src/UI.ts:315](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L315)

___

### motionPrecision

• `Optional` **motionPrecision**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[motionPrecision](../interfaces/IEditor.md#motionprecision)

#### Inherited from

[Group](Group.md).[motionPrecision](Group.md#motionprecision)

#### Defined in

[ui/packages/display/src/UI.ts:317](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L317)

___

### motion

• `Optional` **motion**: `number` \| [`IUnitData`](../interfaces/IUnitData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[motion](../interfaces/IEditor.md#motion)

#### Inherited from

[Group](Group.md).[motion](Group.md#motion)

#### Defined in

[ui/packages/display/src/UI.ts:320](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L320)

___

### motionRotation

• `Optional` **motionRotation**: `number` \| `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[motionRotation](../interfaces/IEditor.md#motionrotation)

#### Inherited from

[Group](Group.md).[motionRotation](Group.md#motionrotation)

#### Defined in

[ui/packages/display/src/UI.ts:322](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L322)

___

### states

• `Optional` **states**: [`IStates`](../interfaces/IStates.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[states](../interfaces/IEditor.md#states)

#### Inherited from

[Group](Group.md).[states](Group.md#states)

#### Defined in

[ui/packages/display/src/UI.ts:327](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L327)

___

### state

• `Optional` **state**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[state](../interfaces/IEditor.md#state)

#### Inherited from

[Group](Group.md).[state](Group.md#state)

#### Defined in

[ui/packages/display/src/UI.ts:329](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L329)

___

### selected

• `Optional` **selected**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[selected](../interfaces/IEditor.md#selected)

#### Inherited from

[Group](Group.md).[selected](Group.md#selected)

#### Defined in

[ui/packages/display/src/UI.ts:332](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L332)

___

### disabled

• `Optional` **disabled**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[disabled](../interfaces/IEditor.md#disabled)

#### Inherited from

[Group](Group.md).[disabled](Group.md#disabled)

#### Defined in

[ui/packages/display/src/UI.ts:334](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L334)

___

### normalStyle

• `Optional` **normalStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[normalStyle](../interfaces/IEditor.md#normalstyle)

#### Inherited from

[Group](Group.md).[normalStyle](Group.md#normalstyle)

#### Defined in

[ui/packages/display/src/UI.ts:337](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L337)

___

### hoverStyle

• `Optional` **hoverStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hoverStyle](../interfaces/IEditor.md#hoverstyle)

#### Inherited from

[Group](Group.md).[hoverStyle](Group.md#hoverstyle)

#### Defined in

[ui/packages/display/src/UI.ts:339](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L339)

___

### pressStyle

• `Optional` **pressStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[pressStyle](../interfaces/IEditor.md#pressstyle)

#### Inherited from

[Group](Group.md).[pressStyle](Group.md#pressstyle)

#### Defined in

[ui/packages/display/src/UI.ts:341](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L341)

___

### focusStyle

• `Optional` **focusStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[focusStyle](../interfaces/IEditor.md#focusstyle)

#### Inherited from

[Group](Group.md).[focusStyle](Group.md#focusstyle)

#### Defined in

[ui/packages/display/src/UI.ts:343](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L343)

___

### selectedStyle

• `Optional` **selectedStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[selectedStyle](../interfaces/IEditor.md#selectedstyle)

#### Inherited from

[Group](Group.md).[selectedStyle](Group.md#selectedstyle)

#### Defined in

[ui/packages/display/src/UI.ts:345](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L345)

___

### disabledStyle

• `Optional` **disabledStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[disabledStyle](../interfaces/IEditor.md#disabledstyle)

#### Inherited from

[Group](Group.md).[disabledStyle](Group.md#disabledstyle)

#### Defined in

[ui/packages/display/src/UI.ts:347](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L347)

___

### placeholderStyle

• `Optional` **placeholderStyle**: [`IStateStyle`](../interfaces/IStateStyle.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[placeholderStyle](../interfaces/IEditor.md#placeholderstyle)

#### Inherited from

[Group](Group.md).[placeholderStyle](Group.md#placeholderstyle)

#### Defined in

[ui/packages/display/src/UI.ts:350](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L350)

___

### placeholderColor

• `Optional` **placeholderColor**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[placeholderColor](../interfaces/IEditor.md#placeholdercolor)

#### Inherited from

[Group](Group.md).[placeholderColor](Group.md#placeholdercolor)

#### Defined in

[ui/packages/display/src/UI.ts:353](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L353)

___

### placeholderDelay

• `Optional` **placeholderDelay**: `number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[placeholderDelay](../interfaces/IEditor.md#placeholderdelay)

#### Inherited from

[Group](Group.md).[placeholderDelay](Group.md#placeholderdelay)

#### Defined in

[ui/packages/display/src/UI.ts:356](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L356)

___

### button

• `Optional` **button**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[button](../interfaces/IEditor.md#button)

#### Inherited from

[Group](Group.md).[button](Group.md#button)

#### Defined in

[ui/packages/display/src/UI.ts:359](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L359)

___

### editConfig

• **editConfig**: [`IEditorConfig`](../interfaces/IEditorConfig.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editConfig](../interfaces/IEditor.md#editconfig)

#### Inherited from

[Group](Group.md).[editConfig](Group.md#editconfig)

#### Defined in

[ui/packages/display/src/UI.ts:364](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L364)

___

### editOuter

• **editOuter**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editOuter](../interfaces/IEditor.md#editouter)

#### Inherited from

[Group](Group.md).[editOuter](Group.md#editouter)

#### Defined in

[ui/packages/display/src/UI.ts:366](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L366)

___

### editInner

• **editInner**: `string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editInner](../interfaces/IEditor.md#editinner)

#### Inherited from

[Group](Group.md).[editInner](Group.md#editinner)

#### Defined in

[ui/packages/display/src/UI.ts:368](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L368)

___

### data

• **data**: [`IObject`](../interfaces/IObject.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[data](../interfaces/IEditor.md#data)

#### Inherited from

[Group](Group.md).[data](Group.md#data)

#### Defined in

[ui/packages/display/src/UI.ts:373](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L373)

___

### useFastShadow

• `Optional` **useFastShadow**: `boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[useFastShadow](../interfaces/IEditor.md#usefastshadow)

#### Inherited from

[Group](Group.md).[useFastShadow](Group.md#usefastshadow)

#### Defined in

[ui/packages/display/src/UI.ts:379](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L379)

___

### \_\_box

• `Optional` **\_\_box**: [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__box](../interfaces/IEditor.md#__box)

#### Inherited from

[Group](Group.md).[__box](Group.md#__box)

#### Defined in

[ui/packages/display/src/UI.ts:381](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L381)

___

### \_\_animate

• `Optional` **\_\_animate**: [`IAnimate`](../interfaces/IAnimate.md) \| [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__animate](../interfaces/IEditor.md#__animate)

#### Inherited from

[Group](Group.md).[__animate](Group.md#__animate)

#### Defined in

[ui/packages/display/src/UI.ts:382](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L382)

## Accessors

### list

• `get` **list**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[list](../interfaces/IEditor.md#list)

#### Defined in

[in/packages/editor/src/Editor.ts:41](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L41)

___

### dragHoverExclude

• `get` **dragHoverExclude**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dragHoverExclude](../interfaces/IEditor.md#draghoverexclude)

#### Defined in

[in/packages/editor/src/Editor.ts:42](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L42)

___

### editing

• `get` **editing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[editing](../interfaces/IEditor.md#editing)

#### Defined in

[in/packages/editor/src/Editor.ts:47](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L47)

___

### groupOpening

• `get` **groupOpening**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[groupOpening](../interfaces/IEditor.md#groupopening)

#### Defined in

[in/packages/editor/src/Editor.ts:49](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L49)

___

### multiple

• `get` **multiple**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[multiple](../interfaces/IEditor.md#multiple)

#### Defined in

[in/packages/editor/src/Editor.ts:52](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L52)

___

### single

• `get` **single**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[single](../interfaces/IEditor.md#single)

#### Defined in

[in/packages/editor/src/Editor.ts:53](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L53)

___

### dragging

• `get` **dragging**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dragging](../interfaces/IEditor.md#dragging)

#### Defined in

[in/packages/editor/src/Editor.ts:55](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L55)

___

### moving

• `get` **moving**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[moving](../interfaces/IEditor.md#moving)

#### Defined in

[in/packages/editor/src/Editor.ts:56](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L56)

___

### dragPoint

• `get` **dragPoint**(): [`IEditPoint`](../interfaces/IEditPoint.md)

#### Returns

[`IEditPoint`](../interfaces/IEditPoint.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[dragPoint](../interfaces/IEditor.md#dragpoint)

#### Defined in

[in/packages/editor/src/Editor.ts:57](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L57)

___

### element

• `get` **element**(): [`ISimulateElement`](../interfaces/ISimulateElement.md)

#### Returns

[`ISimulateElement`](../interfaces/ISimulateElement.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[element](../interfaces/IEditor.md#element)

#### Defined in

[in/packages/editor/src/Editor.ts:61](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L61)

___

### buttons

• `get` **buttons**(): [`IGroup`](../interfaces/IGroup.md)

#### Returns

[`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[buttons](../interfaces/IEditor.md#buttons)

#### Defined in

[in/packages/editor/src/Editor.ts:65](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L65)

___

### tag

• `get` **tag**(): `string`

#### Returns

`string`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[tag](../interfaces/IEditor.md#tag)

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

[IEditor](../interfaces/IEditor.md).[tag](../interfaces/IEditor.md#tag)

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

[IEditor](../interfaces/IEditor.md).[innerName](../interfaces/IEditor.md#innername)

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

[IEditor](../interfaces/IEditor.md).[__DataProcessor](../interfaces/IEditor.md#__dataprocessor)

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

[IEditor](../interfaces/IEditor.md).[__LayoutProcessor](../interfaces/IEditor.md#__layoutprocessor)

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

[IEditor](../interfaces/IEditor.md).[leaferIsCreated](../interfaces/IEditor.md#leaferiscreated)

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

[IEditor](../interfaces/IEditor.md).[leaferIsReady](../interfaces/IEditor.md#leaferisready)

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

[IEditor](../interfaces/IEditor.md).[isLeafer](../interfaces/IEditor.md#isleafer)

#### Inherited from

Group.isLeafer

#### Defined in

[leafer/packages/display/src/Leaf.ts:42](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L42)

___

### isBranchLeaf

• `get` **isBranchLeaf**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[isBranchLeaf](../interfaces/IEditor.md#isbranchleaf)

#### Inherited from

Group.isBranchLeaf

#### Defined in

[leafer/packages/display/src/Leaf.ts:44](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L44)

___

### \_\_localMatrix

• `get` **__localMatrix**(): [`IMatrixData`](../interfaces/IMatrixData.md)

#### Returns

[`IMatrixData`](../interfaces/IMatrixData.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__localMatrix](../interfaces/IEditor.md#__localmatrix)

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

[IEditor](../interfaces/IEditor.md).[__localBoxBounds](../interfaces/IEditor.md#__localboxbounds)

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

[IEditor](../interfaces/IEditor.md).[worldTransform](../interfaces/IEditor.md#worldtransform)

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

[IEditor](../interfaces/IEditor.md).[localTransform](../interfaces/IEditor.md#localtransform)

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

[IEditor](../interfaces/IEditor.md).[boxBounds](../interfaces/IEditor.md#boxbounds)

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

[IEditor](../interfaces/IEditor.md).[renderBounds](../interfaces/IEditor.md#renderbounds)

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

[IEditor](../interfaces/IEditor.md).[worldBoxBounds](../interfaces/IEditor.md#worldboxbounds)

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

[IEditor](../interfaces/IEditor.md).[worldStrokeBounds](../interfaces/IEditor.md#worldstrokebounds)

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

[IEditor](../interfaces/IEditor.md).[worldRenderBounds](../interfaces/IEditor.md#worldrenderbounds)

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

[IEditor](../interfaces/IEditor.md).[worldOpacity](../interfaces/IEditor.md#worldopacity)

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

[IEditor](../interfaces/IEditor.md).[__worldFlipped](../interfaces/IEditor.md#__worldflipped)

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

[IEditor](../interfaces/IEditor.md).[__onlyHitMask](../interfaces/IEditor.md#__onlyhitmask)

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

[IEditor](../interfaces/IEditor.md).[__ignoreHitWorld](../interfaces/IEditor.md#__ignorehitworld)

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

[IEditor](../interfaces/IEditor.md).[__inLazyBounds](../interfaces/IEditor.md#__inlazybounds)

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

[IEditor](../interfaces/IEditor.md).[pathInputed](../interfaces/IEditor.md#pathinputed)

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

[IEditor](../interfaces/IEditor.md).[event](../interfaces/IEditor.md#event)

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

[IEditor](../interfaces/IEditor.md).[__tag](../interfaces/IEditor.md#__tag)

#### Inherited from

Group.\_\_tag

#### Defined in

[ui/packages/display/src/Group.ts:14](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/Group.ts#L14)

___

### isBranch

• `get` **isBranch**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[isBranch](../interfaces/IEditor.md#isbranch)

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

[IEditor](../interfaces/IEditor.md).[app](../interfaces/IEditor.md#app)

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

[IEditor](../interfaces/IEditor.md).[isFrame](../interfaces/IEditor.md#isframe)

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

[IEditor](../interfaces/IEditor.md).[scale](../interfaces/IEditor.md#scale)

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

[IEditor](../interfaces/IEditor.md).[scale](../interfaces/IEditor.md#scale)

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

[IEditor](../interfaces/IEditor.md).[pen](../interfaces/IEditor.md#pen)

#### Inherited from

Group.pen

#### Defined in

[ui/packages/display/src/UI.ts:384](https://github.com/leaferjs/leafer-ui/blob/66bfac2/packages/display/src/UI.ts#L384)

## Methods

### select

▸ **select**(`target`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`IUI`](../interfaces/IUI.md) \| [`IUI`](../interfaces/IUI.md)[] |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[select](../interfaces/IEditor.md#select)

#### Defined in

[in/packages/editor/src/Editor.ts:91](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L91)

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[cancel](../interfaces/IEditor.md#cancel)

#### Defined in

[in/packages/editor/src/Editor.ts:95](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L95)

___

### hasItem

▸ **hasItem**(`item`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`boolean`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[hasItem](../interfaces/IEditor.md#hasitem)

#### Defined in

[in/packages/editor/src/Editor.ts:101](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L101)

___

### addItem

▸ **addItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[addItem](../interfaces/IEditor.md#additem)

#### Defined in

[in/packages/editor/src/Editor.ts:105](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L105)

___

### removeItem

▸ **removeItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[removeItem](../interfaces/IEditor.md#removeitem)

#### Defined in

[in/packages/editor/src/Editor.ts:109](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L109)

___

### shiftItem

▸ **shiftItem**(`item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IUI`](../interfaces/IUI.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[shiftItem](../interfaces/IEditor.md#shiftitem)

#### Defined in

[in/packages/editor/src/Editor.ts:113](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L113)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[update](../interfaces/IEditor.md#update)

#### Defined in

[in/packages/editor/src/Editor.ts:119](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L119)

___

### updateEditBox

▸ **updateEditBox**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[updateEditBox](../interfaces/IEditor.md#updateeditbox)

#### Defined in

[in/packages/editor/src/Editor.ts:128](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L128)

___

### updateEditTool

▸ **updateEditTool**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[updateEditTool](../interfaces/IEditor.md#updateedittool)

#### Defined in

[in/packages/editor/src/Editor.ts:133](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L133)

___

### getEditSize

▸ **getEditSize**(`_ui`): [`IEditSize`](../modules.md#ieditsize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_ui` | [`IUI`](../interfaces/IUI.md) |

#### Returns

[`IEditSize`](../modules.md#ieditsize)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[getEditSize](../interfaces/IEditor.md#geteditsize)

#### Defined in

[in/packages/editor/src/Editor.ts:153](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L153)

___

### onMove

▸ **onMove**(`_e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`DragEvent`](DragEvent.md) \| [`MoveEvent`](MoveEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[onMove](../interfaces/IEditor.md#onmove)

#### Defined in

[in/packages/editor/src/Editor.ts:162](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L162)

___

### onScale

▸ **onScale**(`_e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`DragEvent`](DragEvent.md) \| [`ZoomEvent`](ZoomEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[onScale](../interfaces/IEditor.md#onscale)

#### Defined in

[in/packages/editor/src/Editor.ts:164](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L164)

___

### onRotate

▸ **onRotate**(`_e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`DragEvent`](DragEvent.md) \| [`RotateEvent`](RotateEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[onRotate](../interfaces/IEditor.md#onrotate)

#### Defined in

[in/packages/editor/src/Editor.ts:166](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L166)

___

### onSkew

▸ **onSkew**(`_e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_e` | [`DragEvent`](DragEvent.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[onSkew](../interfaces/IEditor.md#onskew)

#### Defined in

[in/packages/editor/src/Editor.ts:168](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L168)

___

### move

▸ **move**(`_x`, `_y?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_x` | `number` \| [`IPointData`](../interfaces/IPointData.md) | `undefined` |
| `_y` | `number` | `0` |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[move](../interfaces/IEditor.md#move)

#### Overrides

[Group](Group.md).[move](Group.md#move)

#### Defined in

[in/packages/editor/src/Editor.ts:173](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L173)

___

### scaleWithDrag

▸ **scaleWithDrag**(`_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data` | [`IEditorScaleEvent`](../interfaces/IEditorScaleEvent.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:175](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L175)

___

### scaleOf

▸ **scaleOf**(`_origin`, `scaleX`, `_scaleY?`, `_resize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) | `undefined` |
| `scaleX` | `number` | `undefined` |
| `_scaleY` | `number` | `scaleX` |
| `_resize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[scaleOf](../interfaces/IEditor.md#scaleof)

#### Overrides

[Group](Group.md).[scaleOf](Group.md#scaleof)

#### Defined in

[in/packages/editor/src/Editor.ts:177](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L177)

___

### flip

▸ **flip**(`_axis`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_axis` | [`IAxis`](../modules.md#iaxis) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[flip](../interfaces/IEditor.md#flip)

#### Overrides

[Group](Group.md).[flip](Group.md#flip)

#### Defined in

[in/packages/editor/src/Editor.ts:179](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L179)

___

### rotateOf

▸ **rotateOf**(`_origin`, `_rotation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |
| `_rotation` | `number` |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[rotateOf](../interfaces/IEditor.md#rotateof)

#### Overrides

[Group](Group.md).[rotateOf](Group.md#rotateof)

#### Defined in

[in/packages/editor/src/Editor.ts:181](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L181)

___

### skewOf

▸ **skewOf**(`_origin`, `_skewX`, `_skewY?`, `_resize?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `_origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) | `undefined` |
| `_skewX` | `number` | `undefined` |
| `_skewY` | `number` | `0` |
| `_resize?` | `boolean` | `undefined` |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[skewOf](../interfaces/IEditor.md#skewof)

#### Overrides

[Group](Group.md).[skewOf](Group.md#skewof)

#### Defined in

[in/packages/editor/src/Editor.ts:183](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L183)

___

### checkTransform

▸ **checkTransform**(`_type`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_type` | ``"moveable"`` \| ``"resizeable"`` \| ``"rotateable"`` \| ``"skewable"`` |

#### Returns

`boolean`

#### Defined in

[in/packages/editor/src/Editor.ts:185](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L185)

___

### getWorldOrigin

▸ `Protected` **getWorldOrigin**(`_origin`): [`IPointData`](../interfaces/IPointData.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_origin` | [`IPointData`](../interfaces/IPointData.md) \| [`IDirection`](../modules.md#idirection) |

#### Returns

[`IPointData`](../interfaces/IPointData.md)

#### Defined in

[in/packages/editor/src/Editor.ts:187](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L187)

___

### getChangedTransform

▸ `Protected` **getChangedTransform**(`_func`): [`IMatrix`](../interfaces/IMatrix.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `_func` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

[`IMatrix`](../interfaces/IMatrix.md)

#### Defined in

[in/packages/editor/src/Editor.ts:189](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L189)

___

### group

▸ **group**(`userGroup?`): [`IGroup`](../interfaces/IGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `userGroup?` | [`IGroupInputData`](../interfaces/IGroupInputData.md) \| [`IGroup`](../interfaces/IGroup.md) |

#### Returns

[`IGroup`](../interfaces/IGroup.md)

#### Implementation of

[IEditor](../interfaces/IEditor.md).[group](../interfaces/IEditor.md#group)

#### Defined in

[in/packages/editor/src/Editor.ts:196](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L196)

___

### ungroup

▸ **ungroup**(): [`IUI`](../interfaces/IUI.md)[]

#### Returns

[`IUI`](../interfaces/IUI.md)[]

#### Implementation of

[IEditor](../interfaces/IEditor.md).[ungroup](../interfaces/IEditor.md#ungroup)

#### Defined in

[in/packages/editor/src/Editor.ts:205](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L205)

___

### openGroup

▸ **openGroup**(`group`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`IGroup`](../interfaces/IGroup.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[openGroup](../interfaces/IEditor.md#opengroup)

#### Defined in

[in/packages/editor/src/Editor.ts:215](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L215)

___

### closeGroup

▸ **closeGroup**(`group`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `group` | [`IGroup`](../interfaces/IGroup.md) |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[closeGroup](../interfaces/IEditor.md#closegroup)

#### Defined in

[in/packages/editor/src/Editor.ts:222](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L222)

___

### checkOpenedGroups

▸ **checkOpenedGroups**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[checkOpenedGroups](../interfaces/IEditor.md#checkopenedgroups)

#### Defined in

[in/packages/editor/src/Editor.ts:229](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L229)

___

### checkDeepSelect

▸ **checkDeepSelect**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:239](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L239)

___

### emitGroupEvent

▸ **emitGroupEvent**(`type`, `group?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `group?` | [`IGroup`](../interfaces/IGroup.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:250](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L250)

___

### openInnerEditor

▸ **openInnerEditor**(`target?`, `select?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target?` | [`IUI`](../interfaces/IUI.md) |
| `select?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[openInnerEditor](../interfaces/IEditor.md#openinnereditor)

#### Defined in

[in/packages/editor/src/Editor.ts:258](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L258)

___

### closeInnerEditor

▸ **closeInnerEditor**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[closeInnerEditor](../interfaces/IEditor.md#closeinnereditor)

#### Defined in

[in/packages/editor/src/Editor.ts:276](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L276)

___

### emitInnerEvent

▸ **emitInnerEvent**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:289](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L289)

___

### lock

▸ **lock**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[lock](../interfaces/IEditor.md#lock)

#### Defined in

[in/packages/editor/src/Editor.ts:298](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L298)

___

### unlock

▸ **unlock**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[unlock](../interfaces/IEditor.md#unlock)

#### Defined in

[in/packages/editor/src/Editor.ts:303](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L303)

___

### toTop

▸ **toTop**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[toTop](../interfaces/IEditor.md#totop)

#### Defined in

[in/packages/editor/src/Editor.ts:310](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L310)

___

### toBottom

▸ **toBottom**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[toBottom](../interfaces/IEditor.md#tobottom)

#### Defined in

[in/packages/editor/src/Editor.ts:317](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L317)

___

### onAppRenderStart

▸ `Protected` **onAppRenderStart**(`app`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `app` | [`IApp`](../interfaces/IApp.md) |

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:324](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L324)

___

### onRenderStart

▸ `Protected` **onRenderStart**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/editor/src/Editor.ts:328](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L328)

___

### listenTargetEvents

▸ **listenTargetEvents**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[listenTargetEvents](../interfaces/IEditor.md#listentargetevents)

#### Defined in

[in/packages/editor/src/Editor.ts:335](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L335)

___

### removeTargetEvents

▸ **removeTargetEvents**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[removeTargetEvents](../interfaces/IEditor.md#removetargetevents)

#### Defined in

[in/packages/editor/src/Editor.ts:353](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L353)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[destroy](../interfaces/IEditor.md#destroy)

#### Overrides

[Group](Group.md).[destroy](Group.md#destroy)

#### Defined in

[in/packages/editor/src/Editor.ts:361](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/editor/src/Editor.ts#L361)

___

### resetCustom

▸ **resetCustom**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[resetCustom](../interfaces/IEditor.md#resetcustom)

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

[IEditor](../interfaces/IEditor.md).[waitParent](../interfaces/IEditor.md#waitparent)

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

[IEditor](../interfaces/IEditor.md).[waitLeafer](../interfaces/IEditor.md#waitleafer)

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

[IEditor](../interfaces/IEditor.md).[nextRender](../interfaces/IEditor.md#nextrender)

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

[IEditor](../interfaces/IEditor.md).[removeNextRender](../interfaces/IEditor.md#removenextrender)

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

[IEditor](../interfaces/IEditor.md).[__bindLeafer](../interfaces/IEditor.md#__bindleafer)

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

[IEditor](../interfaces/IEditor.md).[setAttr](../interfaces/IEditor.md#setattr)

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

[IEditor](../interfaces/IEditor.md).[getAttr](../interfaces/IEditor.md#getattr)

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

[IEditor](../interfaces/IEditor.md).[getComputedAttr](../interfaces/IEditor.md#getcomputedattr)

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

[IEditor](../interfaces/IEditor.md).[toString](../interfaces/IEditor.md#tostring)

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

[IEditor](../interfaces/IEditor.md).[toSVG](../interfaces/IEditor.md#tosvg)

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

[IEditor](../interfaces/IEditor.md).[__SVG](../interfaces/IEditor.md#__svg)

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

[IEditor](../interfaces/IEditor.md).[toHTML](../interfaces/IEditor.md#tohtml)

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

[IEditor](../interfaces/IEditor.md).[__setAttr](../interfaces/IEditor.md#__setattr)

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

[IEditor](../interfaces/IEditor.md).[__getAttr](../interfaces/IEditor.md#__getattr)

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

[IEditor](../interfaces/IEditor.md).[setProxyAttr](../interfaces/IEditor.md#setproxyattr)

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

[IEditor](../interfaces/IEditor.md).[getProxyAttr](../interfaces/IEditor.md#getproxyattr)

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

[IEditor](../interfaces/IEditor.md).[focus](../interfaces/IEditor.md#focus)

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

[IEditor](../interfaces/IEditor.md).[updateState](../interfaces/IEditor.md#updatestate)

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

[IEditor](../interfaces/IEditor.md).[updateLayout](../interfaces/IEditor.md#updatelayout)

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

[IEditor](../interfaces/IEditor.md).[forceUpdate](../interfaces/IEditor.md#forceupdate)

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

[IEditor](../interfaces/IEditor.md).[forceRender](../interfaces/IEditor.md#forcerender)

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

[IEditor](../interfaces/IEditor.md).[__extraUpdate](../interfaces/IEditor.md#__extraupdate)

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

[IEditor](../interfaces/IEditor.md).[__updateWorldMatrix](../interfaces/IEditor.md#__updateworldmatrix)

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

[IEditor](../interfaces/IEditor.md).[__updateLocalMatrix](../interfaces/IEditor.md#__updatelocalmatrix)

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

[IEditor](../interfaces/IEditor.md).[__updateWorldBounds](../interfaces/IEditor.md#__updateworldbounds)

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

[IEditor](../interfaces/IEditor.md).[__updateLocalBounds](../interfaces/IEditor.md#__updatelocalbounds)

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

[IEditor](../interfaces/IEditor.md).[__updateLocalBoxBounds](../interfaces/IEditor.md#__updatelocalboxbounds)

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

[IEditor](../interfaces/IEditor.md).[__updateLocalStrokeBounds](../interfaces/IEditor.md#__updatelocalstrokebounds)

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

[IEditor](../interfaces/IEditor.md).[__updateLocalRenderBounds](../interfaces/IEditor.md#__updatelocalrenderbounds)

#### Inherited from

[Group](Group.md).[__updateLocalRenderBounds](Group.md#__updatelocalrenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:282](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L282)

___

### \_\_updateBoxBounds

▸ **__updateBoxBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateBoxBounds](../interfaces/IEditor.md#__updateboxbounds)

#### Inherited from

[Group](Group.md).[__updateBoxBounds](Group.md#__updateboxbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:286](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L286)

___

### \_\_updateContentBounds

▸ **__updateContentBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateContentBounds](../interfaces/IEditor.md#__updatecontentbounds)

#### Inherited from

[Group](Group.md).[__updateContentBounds](Group.md#__updatecontentbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:288](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L288)

___

### \_\_updateStrokeBounds

▸ **__updateStrokeBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateStrokeBounds](../interfaces/IEditor.md#__updatestrokebounds)

#### Inherited from

[Group](Group.md).[__updateStrokeBounds](Group.md#__updatestrokebounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:290](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L290)

___

### \_\_updateRenderBounds

▸ **__updateRenderBounds**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateRenderBounds](../interfaces/IEditor.md#__updaterenderbounds)

#### Inherited from

[Group](Group.md).[__updateRenderBounds](Group.md#__updaterenderbounds)

#### Defined in

[leafer/packages/display/src/Leaf.ts:292](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L292)

___

### \_\_updateAutoLayout

▸ **__updateAutoLayout**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateAutoLayout](../interfaces/IEditor.md#__updateautolayout)

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

[IEditor](../interfaces/IEditor.md).[__updateFlowLayout](../interfaces/IEditor.md#__updateflowlayout)

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

[IEditor](../interfaces/IEditor.md).[__updateNaturalSize](../interfaces/IEditor.md#__updatenaturalsize)

#### Inherited from

[Group](Group.md).[__updateNaturalSize](Group.md#__updatenaturalsize)

#### Defined in

[leafer/packages/display/src/Leaf.ts:299](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L299)

___

### \_\_updateStrokeSpread

▸ **__updateStrokeSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateStrokeSpread](../interfaces/IEditor.md#__updatestrokespread)

#### Inherited from

[Group](Group.md).[__updateStrokeSpread](Group.md#__updatestrokespread)

#### Defined in

[leafer/packages/display/src/Leaf.ts:302](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L302)

___

### \_\_updateRenderSpread

▸ **__updateRenderSpread**(): `number`

#### Returns

`number`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateRenderSpread](../interfaces/IEditor.md#__updaterenderspread)

#### Inherited from

[Group](Group.md).[__updateRenderSpread](Group.md#__updaterenderspread)

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

[IEditor](../interfaces/IEditor.md).[__updateEraser](../interfaces/IEditor.md#__updateeraser)

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

[IEditor](../interfaces/IEditor.md).[__renderEraser](../interfaces/IEditor.md#__rendereraser)

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

[IEditor](../interfaces/IEditor.md).[__updateMask](../interfaces/IEditor.md#__updatemask)

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

[IEditor](../interfaces/IEditor.md).[__renderMask](../interfaces/IEditor.md#__rendermask)

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

[IEditor](../interfaces/IEditor.md).[__getNowWorld](../interfaces/IEditor.md#__getnowworld)

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

[IEditor](../interfaces/IEditor.md).[getTransform](../interfaces/IEditor.md#gettransform)

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

[IEditor](../interfaces/IEditor.md).[getBounds](../interfaces/IEditor.md#getbounds)

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

[IEditor](../interfaces/IEditor.md).[getLayoutBounds](../interfaces/IEditor.md#getlayoutbounds)

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

[IEditor](../interfaces/IEditor.md).[getLayoutPoints](../interfaces/IEditor.md#getlayoutpoints)

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

[IEditor](../interfaces/IEditor.md).[getWorldBounds](../interfaces/IEditor.md#getworldbounds)

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

[IEditor](../interfaces/IEditor.md).[worldToLocal](../interfaces/IEditor.md#worldtolocal)

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

[IEditor](../interfaces/IEditor.md).[localToWorld](../interfaces/IEditor.md#localtoworld)

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

[IEditor](../interfaces/IEditor.md).[worldToInner](../interfaces/IEditor.md#worldtoinner)

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

[IEditor](../interfaces/IEditor.md).[innerToWorld](../interfaces/IEditor.md#innertoworld)

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

[IEditor](../interfaces/IEditor.md).[getBoxPoint](../interfaces/IEditor.md#getboxpoint)

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

[IEditor](../interfaces/IEditor.md).[getBoxPointByInner](../interfaces/IEditor.md#getboxpointbyinner)

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

[IEditor](../interfaces/IEditor.md).[getInnerPoint](../interfaces/IEditor.md#getinnerpoint)

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

[IEditor](../interfaces/IEditor.md).[getInnerPointByBox](../interfaces/IEditor.md#getinnerpointbybox)

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

[IEditor](../interfaces/IEditor.md).[getInnerPointByLocal](../interfaces/IEditor.md#getinnerpointbylocal)

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

[IEditor](../interfaces/IEditor.md).[getLocalPoint](../interfaces/IEditor.md#getlocalpoint)

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

[IEditor](../interfaces/IEditor.md).[getLocalPointByInner](../interfaces/IEditor.md#getlocalpointbyinner)

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

[IEditor](../interfaces/IEditor.md).[getPagePoint](../interfaces/IEditor.md#getpagepoint)

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

[IEditor](../interfaces/IEditor.md).[getWorldPoint](../interfaces/IEditor.md#getworldpoint)

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

[IEditor](../interfaces/IEditor.md).[getWorldPointByBox](../interfaces/IEditor.md#getworldpointbybox)

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

[IEditor](../interfaces/IEditor.md).[getWorldPointByLocal](../interfaces/IEditor.md#getworldpointbylocal)

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

[IEditor](../interfaces/IEditor.md).[getWorldPointByPage](../interfaces/IEditor.md#getworldpointbypage)

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

[IEditor](../interfaces/IEditor.md).[setTransform](../interfaces/IEditor.md#settransform)

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

[IEditor](../interfaces/IEditor.md).[transform](../interfaces/IEditor.md#transform)

#### Inherited from

[Group](Group.md).[transform](Group.md#transform)

#### Defined in

[leafer/packages/display/src/Leaf.ts:476](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L476)

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

[IEditor](../interfaces/IEditor.md).[moveInner](../interfaces/IEditor.md#moveinner)

#### Inherited from

[Group](Group.md).[moveInner](Group.md#moveinner)

#### Defined in

[leafer/packages/display/src/Leaf.ts:485](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L485)

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

[IEditor](../interfaces/IEditor.md).[transformWorld](../interfaces/IEditor.md#transformworld)

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

[IEditor](../interfaces/IEditor.md).[moveWorld](../interfaces/IEditor.md#moveworld)

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

[IEditor](../interfaces/IEditor.md).[scaleOfWorld](../interfaces/IEditor.md#scaleofworld)

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

[IEditor](../interfaces/IEditor.md).[rotateOfWorld](../interfaces/IEditor.md#rotateofworld)

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

[IEditor](../interfaces/IEditor.md).[skewOfWorld](../interfaces/IEditor.md#skewofworld)

#### Inherited from

[Group](Group.md).[skewOfWorld](Group.md#skewofworld)

#### Defined in

[leafer/packages/display/src/Leaf.ts:518](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L518)

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

[IEditor](../interfaces/IEditor.md).[scaleResize](../interfaces/IEditor.md#scaleresize)

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

[IEditor](../interfaces/IEditor.md).[__scaleResize](../interfaces/IEditor.md#__scaleresize)

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

[IEditor](../interfaces/IEditor.md).[resizeWidth](../interfaces/IEditor.md#resizewidth)

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

[IEditor](../interfaces/IEditor.md).[resizeHeight](../interfaces/IEditor.md#resizeheight)

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

[IEditor](../interfaces/IEditor.md).[__hitWorld](../interfaces/IEditor.md#__hitworld)

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

[IEditor](../interfaces/IEditor.md).[__hit](../interfaces/IEditor.md#__hit)

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

[IEditor](../interfaces/IEditor.md).[__hitFill](../interfaces/IEditor.md#__hitfill)

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

[IEditor](../interfaces/IEditor.md).[__hitStroke](../interfaces/IEditor.md#__hitstroke)

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

[IEditor](../interfaces/IEditor.md).[__hitPixel](../interfaces/IEditor.md#__hitpixel)

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

[IEditor](../interfaces/IEditor.md).[__drawHitPath](../interfaces/IEditor.md#__drawhitpath)

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

[IEditor](../interfaces/IEditor.md).[__updateHitCanvas](../interfaces/IEditor.md#__updatehitcanvas)

#### Inherited from

[Group](Group.md).[__updateHitCanvas](Group.md#__updatehitcanvas)

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

[IEditor](../interfaces/IEditor.md).[__render](../interfaces/IEditor.md#__render)

#### Inherited from

[Group](Group.md).[__render](Group.md#__render)

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

[IEditor](../interfaces/IEditor.md).[__drawFast](../interfaces/IEditor.md#__drawfast)

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

[IEditor](../interfaces/IEditor.md).[__draw](../interfaces/IEditor.md#__draw)

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

[IEditor](../interfaces/IEditor.md).[__clip](../interfaces/IEditor.md#__clip)

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

[IEditor](../interfaces/IEditor.md).[__renderShape](../interfaces/IEditor.md#__rendershape)

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

[IEditor](../interfaces/IEditor.md).[__drawShape](../interfaces/IEditor.md#__drawshape)

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

[IEditor](../interfaces/IEditor.md).[__updateWorldOpacity](../interfaces/IEditor.md#__updateworldopacity)

#### Inherited from

[Group](Group.md).[__updateWorldOpacity](Group.md#__updateworldopacity)

#### Defined in

[leafer/packages/display/src/Leaf.ts:577](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L577)

___

### \_\_updateChange

▸ **__updateChange**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updateChange](../interfaces/IEditor.md#__updatechange)

#### Inherited from

[Group](Group.md).[__updateChange](Group.md#__updatechange)

#### Defined in

[leafer/packages/display/src/Leaf.ts:579](https://github.com/leaferjs/leafer/blob/4821e21/packages/display/src/Leaf.ts#L579)

___

### \_\_updatePath

▸ **__updatePath**(): `void`

#### Returns

`void`

#### Implementation of

[IEditor](../interfaces/IEditor.md).[__updatePath](../interfaces/IEditor.md#__updatepath)

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

[IEditor](../interfaces/IEditor.md).[getMotionPathData](../interfaces/IEditor.md#getmotionpathdata)

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

[IEditor](../interfaces/IEditor.md).[getMotionPoint](../interfaces/IEditor.md#getmotionpoint)

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

[IEditor](../interfaces/IEditor.md).[getMotionTotal](../interfaces/IEditor.md#getmotiontotal)

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

[IEditor](../interfaces/IEditor.md).[__updateMotionPath](../interfaces/IEditor.md#__updatemotionpath)

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

[IEditor](../interfaces/IEditor.md).[__runAnimation](../interfaces/IEditor.md#__runanimation)

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

[IEditor](../interfaces/IEditor.md).[__updateSortChildren](../interfaces/IEditor.md#__updatesortchildren)

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

[IEditor](../interfaces/IEditor.md).[dropTo](../interfaces/IEditor.md#dropto)

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

[IEditor](../interfaces/IEditor.md).[on](../interfaces/IEditor.md#on)

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

[IEditor](../interfaces/IEditor.md).[off](../interfaces/IEditor.md#off)

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

[IEditor](../interfaces/IEditor.md).[on_](../interfaces/IEditor.md#on_)

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

[IEditor](../interfaces/IEditor.md).[off_](../interfaces/IEditor.md#off_)

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

[IEditor](../interfaces/IEditor.md).[once](../interfaces/IEditor.md#once)

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

[IEditor](../interfaces/IEditor.md).[emit](../interfaces/IEditor.md#emit)

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

[IEditor](../interfaces/IEditor.md).[emitEvent](../interfaces/IEditor.md#emitevent)

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

[IEditor](../interfaces/IEditor.md).[hasEvent](../interfaces/IEditor.md#hasevent)

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

[IEditor](../interfaces/IEditor.md).[__emitLifeEvent](../interfaces/IEditor.md#__emitlifeevent)

#### Inherited from

[Group](Group.md).[__emitLifeEvent](Group.md#__emitlifeevent)

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

[IEditor](../interfaces/IEditor.md).[reset](../interfaces/IEditor.md#reset)

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

[IEditor](../interfaces/IEditor.md).[set](../interfaces/IEditor.md#set)

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

[IEditor](../interfaces/IEditor.md).[toJSON](../interfaces/IEditor.md#tojson)

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

[IEditor](../interfaces/IEditor.md).[pick](../interfaces/IEditor.md#pick)

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

[IEditor](../interfaces/IEditor.md).[addAt](../interfaces/IEditor.md#addat)

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

[IEditor](../interfaces/IEditor.md).[addAfter](../interfaces/IEditor.md#addafter)

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

[IEditor](../interfaces/IEditor.md).[addBefore](../interfaces/IEditor.md#addbefore)

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

[IEditor](../interfaces/IEditor.md).[add](../interfaces/IEditor.md#add)

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

[IEditor](../interfaces/IEditor.md).[addMany](../interfaces/IEditor.md#addmany)

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

[IEditor](../interfaces/IEditor.md).[remove](../interfaces/IEditor.md#remove)

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

[IEditor](../interfaces/IEditor.md).[removeAll](../interfaces/IEditor.md#removeall)

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

[IEditor](../interfaces/IEditor.md).[clear](../interfaces/IEditor.md#clear)

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

[IEditor](../interfaces/IEditor.md).[get](../interfaces/IEditor.md#get)

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

[IEditor](../interfaces/IEditor.md).[createProxyData](../interfaces/IEditor.md#createproxydata)

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

[IEditor](../interfaces/IEditor.md).[find](../interfaces/IEditor.md#find)

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

[IEditor](../interfaces/IEditor.md).[findTag](../interfaces/IEditor.md#findtag)

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

[IEditor](../interfaces/IEditor.md).[findOne](../interfaces/IEditor.md#findone)

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

[IEditor](../interfaces/IEditor.md).[findId](../interfaces/IEditor.md#findid)

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

[IEditor](../interfaces/IEditor.md).[getPath](../interfaces/IEditor.md#getpath)

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

[IEditor](../interfaces/IEditor.md).[getPathString](../interfaces/IEditor.md#getpathstring)

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

[IEditor](../interfaces/IEditor.md).[load](../interfaces/IEditor.md#load)

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

[IEditor](../interfaces/IEditor.md).[__onUpdateSize](../interfaces/IEditor.md#__onupdatesize)

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

[IEditor](../interfaces/IEditor.md).[__updateRenderPath](../interfaces/IEditor.md#__updaterenderpath)

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

[IEditor](../interfaces/IEditor.md).[__drawRenderPath](../interfaces/IEditor.md#__drawrenderpath)

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

[IEditor](../interfaces/IEditor.md).[__drawPath](../interfaces/IEditor.md#__drawpath)

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

[IEditor](../interfaces/IEditor.md).[__drawPathByData](../interfaces/IEditor.md#__drawpathbydata)

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

[IEditor](../interfaces/IEditor.md).[__drawPathByBox](../interfaces/IEditor.md#__drawpathbybox)

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

[IEditor](../interfaces/IEditor.md).[drawImagePlaceholder](../interfaces/IEditor.md#drawimageplaceholder)

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

[IEditor](../interfaces/IEditor.md).[animate](../interfaces/IEditor.md#animate)

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

[IEditor](../interfaces/IEditor.md).[killAnimate](../interfaces/IEditor.md#killanimate)

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

[IEditor](../interfaces/IEditor.md).[export](../interfaces/IEditor.md#export)

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

[IEditor](../interfaces/IEditor.md).[syncExport](../interfaces/IEditor.md#syncexport)

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

[IEditor](../interfaces/IEditor.md).[clone](../interfaces/IEditor.md#clone)

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
