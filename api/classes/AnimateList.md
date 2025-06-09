# Class: AnimateList

## Hierarchy

- [`Animate`](Animate.md)

  ↳ **`AnimateList`**

## Implements

- [`IAnimateList`](../interfaces/IAnimateList.md)

## Table of contents

### Constructors

- [constructor](AnimateList.md#constructor)

### Properties

- [target](AnimateList.md#target)
- [parent](AnimateList.md#parent)
- [keyframes](AnimateList.md#keyframes)
- [config](AnimateList.md#config)
- [style](AnimateList.md#style)
- [fromStyle](AnimateList.md#fromstyle)
- [toStyle](AnimateList.md#tostyle)
- [running](AnimateList.md#running)
- [destroyed](AnimateList.md#destroyed)
- [time](AnimateList.md#time)
- [looped](AnimateList.md#looped)
- [easing](AnimateList.md#easing)
- [delay](AnimateList.md#delay)
- [duration](AnimateList.md#duration)
- [ending](AnimateList.md#ending)
- [reverse](AnimateList.md#reverse)
- [swing](AnimateList.md#swing)
- [loop](AnimateList.md#loop)
- [loopDelay](AnimateList.md#loopdelay)
- [speed](AnimateList.md#speed)
- [autoplay](AnimateList.md#autoplay)
- [join](AnimateList.md#join)
- [attrs](AnimateList.md#attrs)
- [killStyle](AnimateList.md#killstyle)
- [isTemp](AnimateList.md#istemp)
- [frames](AnimateList.md#frames)
- [nowIndex](AnimateList.md#nowindex)
- [frameLooped](AnimateList.md#framelooped)
- [frameReverse](AnimateList.md#framereverse)
- [easingFn](AnimateList.md#easingfn)
- [requestAnimateTime](AnimateList.md#requestanimatetime)
- [playedTotalTime](AnimateList.md#playedtotaltime)
- [mainReverse](AnimateList.md#mainreverse)
- [timer](AnimateList.md#timer)
- [attrsMap](AnimateList.md#attrsmap)
- [list](AnimateList.md#list)
- [\_endingStyle](AnimateList.md#_endingstyle)
- [innerId](AnimateList.md#innerid)
- [\_\_captureMap](AnimateList.md#__capturemap)
- [\_\_bubbleMap](AnimateList.md#__bubblemap)
- [\_\_hasLocalEvent](AnimateList.md#__haslocalevent)
- [\_\_hasWorldEvent](AnimateList.md#__hasworldevent)
- [syncEventer](AnimateList.md#synceventer)

### Accessors

- [started](AnimateList.md#started)
- [frame](AnimateList.md#frame)
- [frameTotalTime](AnimateList.md#frametotaltime)
- [nowReverse](AnimateList.md#nowreverse)
- [realEnding](AnimateList.md#realending)
- [completed](AnimateList.md#completed)
- [endingStyle](AnimateList.md#endingstyle)
- [event](AnimateList.md#event)

### Methods

- [init](AnimateList.md#init)
- [emitType](AnimateList.md#emittype)
- [create](AnimateList.md#create)
- [changeDuration](AnimateList.md#changeduration)
- [setBefore](AnimateList.md#setbefore)
- [allocateTime](AnimateList.md#allocatetime)
- [requestAnimate](AnimateList.md#requestanimate)
- [animate](AnimateList.md#animate)
- [start](AnimateList.md#start)
- [begin](AnimateList.md#begin)
- [end](AnimateList.md#end)
- [complete](AnimateList.md#complete)
- [setFrom](AnimateList.md#setfrom)
- [setTo](AnimateList.md#setto)
- [nextFrame](AnimateList.md#nextframe)
- [reverseNextFrame](AnimateList.md#reversenextframe)
- [transition](AnimateList.md#transition)
- [setStyle](AnimateList.md#setstyle)
- [increaseTime](AnimateList.md#increasetime)
- [needLoop](AnimateList.md#needloop)
- [needStopLoop](AnimateList.md#needstoploop)
- [needLoopFrame](AnimateList.md#needloopframe)
- [clearTimer](AnimateList.md#cleartimer)
- [updateList](AnimateList.md#updatelist)
- [play](AnimateList.md#play)
- [pause](AnimateList.md#pause)
- [stop](AnimateList.md#stop)
- [seek](AnimateList.md#seek)
- [kill](AnimateList.md#kill)
- [onChildEvent](AnimateList.md#onchildevent)
- [each](AnimateList.md#each)
- [destroy](AnimateList.md#destroy)
- [on](AnimateList.md#on)
- [off](AnimateList.md#off)
- [on\_](AnimateList.md#on_)
- [off\_](AnimateList.md#off_)
- [once](AnimateList.md#once)
- [emit](AnimateList.md#emit)
- [emitEvent](AnimateList.md#emitevent)
- [hasEvent](AnimateList.md#hasevent)

## Constructors

### constructor

• **new AnimateList**(`target`, `animation?`, `isTemp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md) |
| `animation?` | [`IAnimate`](../interfaces/IAnimate.md)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `isTemp?` | `boolean` |

#### Overrides

[Animate](Animate.md).[constructor](Animate.md#constructor)

#### Defined in

[in/packages/animate/src/AnimateList.ts:19](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L19)

## Properties

### target

• **target**: [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[target](../interfaces/IAnimateList.md#target)

#### Inherited from

[Animate](Animate.md).[target](Animate.md#target)

#### Defined in

[in/packages/animate/src/Animate.ts:14](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L14)

___

### parent

• `Optional` **parent**: [`IAnimateList`](../interfaces/IAnimateList.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[parent](../interfaces/IAnimateList.md#parent)

#### Inherited from

[Animate](Animate.md).[parent](Animate.md#parent)

#### Defined in

[in/packages/animate/src/Animate.ts:15](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L15)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[keyframes](../interfaces/IAnimateList.md#keyframes)

#### Inherited from

[Animate](Animate.md).[keyframes](Animate.md#keyframes)

#### Defined in

[in/packages/animate/src/Animate.ts:17](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L17)

___

### config

• `Optional` **config**: [`IAnimateOptions`](../interfaces/IAnimateOptions.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[config](../interfaces/IAnimateList.md#config)

#### Inherited from

[Animate](Animate.md).[config](Animate.md#config)

#### Defined in

[in/packages/animate/src/Animate.ts:18](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L18)

___

### style

• **style**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[style](../interfaces/IAnimateList.md#style)

#### Inherited from

[Animate](Animate.md).[style](Animate.md#style)

#### Defined in

[in/packages/animate/src/Animate.ts:20](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L20)

___

### fromStyle

• **fromStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[fromStyle](../interfaces/IAnimateList.md#fromstyle)

#### Inherited from

[Animate](Animate.md).[fromStyle](Animate.md#fromstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:21](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L21)

___

### toStyle

• **toStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[toStyle](../interfaces/IAnimateList.md#tostyle)

#### Inherited from

[Animate](Animate.md).[toStyle](Animate.md#tostyle)

#### Defined in

[in/packages/animate/src/Animate.ts:22](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L22)

___

### running

• **running**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[running](../interfaces/IAnimateList.md#running)

#### Inherited from

[Animate](Animate.md).[running](Animate.md#running)

#### Defined in

[in/packages/animate/src/Animate.ts:26](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L26)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[destroyed](../interfaces/IAnimateList.md#destroyed)

#### Inherited from

[Animate](Animate.md).[destroyed](Animate.md#destroyed)

#### Defined in

[in/packages/animate/src/Animate.ts:28](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L28)

___

### time

• **time**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[time](../interfaces/IAnimateList.md#time)

#### Inherited from

[Animate](Animate.md).[time](Animate.md#time)

#### Defined in

[in/packages/animate/src/Animate.ts:30](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L30)

___

### looped

• **looped**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[looped](../interfaces/IAnimateList.md#looped)

#### Inherited from

[Animate](Animate.md).[looped](Animate.md#looped)

#### Defined in

[in/packages/animate/src/Animate.ts:31](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L31)

___

### easing

• **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[easing](../interfaces/IAnimateList.md#easing)

#### Inherited from

[Animate](Animate.md).[easing](Animate.md#easing)

#### Defined in

[in/packages/animate/src/Animate.ts:35](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L35)

___

### delay

• **delay**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[delay](../interfaces/IAnimateList.md#delay)

#### Inherited from

[Animate](Animate.md).[delay](Animate.md#delay)

#### Defined in

[in/packages/animate/src/Animate.ts:39](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L39)

___

### duration

• **duration**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[duration](../interfaces/IAnimateList.md#duration)

#### Inherited from

[Animate](Animate.md).[duration](Animate.md#duration)

#### Defined in

[in/packages/animate/src/Animate.ts:42](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L42)

___

### ending

• **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[ending](../interfaces/IAnimateList.md#ending)

#### Inherited from

[Animate](Animate.md).[ending](Animate.md#ending)

#### Defined in

[in/packages/animate/src/Animate.ts:45](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L45)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[reverse](../interfaces/IAnimateList.md#reverse)

#### Inherited from

[Animate](Animate.md).[reverse](Animate.md#reverse)

#### Defined in

[in/packages/animate/src/Animate.ts:49](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L49)

___

### swing

• `Optional` **swing**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[swing](../interfaces/IAnimateList.md#swing)

#### Inherited from

[Animate](Animate.md).[swing](Animate.md#swing)

#### Defined in

[in/packages/animate/src/Animate.ts:52](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L52)

___

### loop

• **loop**: `number` \| `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[loop](../interfaces/IAnimateList.md#loop)

#### Inherited from

[Animate](Animate.md).[loop](Animate.md#loop)

#### Defined in

[in/packages/animate/src/Animate.ts:55](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L55)

___

### loopDelay

• **loopDelay**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[loopDelay](../interfaces/IAnimateList.md#loopdelay)

#### Inherited from

[Animate](Animate.md).[loopDelay](Animate.md#loopdelay)

#### Defined in

[in/packages/animate/src/Animate.ts:58](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L58)

___

### speed

• **speed**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[speed](../interfaces/IAnimateList.md#speed)

#### Inherited from

[Animate](Animate.md).[speed](Animate.md#speed)

#### Defined in

[in/packages/animate/src/Animate.ts:62](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L62)

___

### autoplay

• **autoplay**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[autoplay](../interfaces/IAnimateList.md#autoplay)

#### Inherited from

[Animate](Animate.md).[autoplay](Animate.md#autoplay)

#### Defined in

[in/packages/animate/src/Animate.ts:65](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L65)

___

### join

• **join**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[join](../interfaces/IAnimateList.md#join)

#### Inherited from

[Animate](Animate.md).[join](Animate.md#join)

#### Defined in

[in/packages/animate/src/Animate.ts:68](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L68)

___

### attrs

• **attrs**: `string`[]

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[attrs](../interfaces/IAnimateList.md#attrs)

#### Inherited from

[Animate](Animate.md).[attrs](Animate.md#attrs)

#### Defined in

[in/packages/animate/src/Animate.ts:71](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L71)

___

### killStyle

• `Protected` **killStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Inherited from

[Animate](Animate.md).[killStyle](Animate.md#killstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:73](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L73)

___

### isTemp

• **isTemp**: `boolean`

#### Inherited from

[Animate](Animate.md).[isTemp](Animate.md#istemp)

#### Defined in

[in/packages/animate/src/Animate.ts:75](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L75)

___

### frames

• **frames**: [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)[]

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[frames](../interfaces/IAnimateList.md#frames)

#### Inherited from

[Animate](Animate.md).[frames](Animate.md#frames)

#### Defined in

[in/packages/animate/src/Animate.ts:77](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L77)

___

### nowIndex

• `Protected` **nowIndex**: `number`

#### Inherited from

[Animate](Animate.md).[nowIndex](Animate.md#nowindex)

#### Defined in

[in/packages/animate/src/Animate.ts:79](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L79)

___

### frameLooped

• `Protected` **frameLooped**: `number`

#### Inherited from

[Animate](Animate.md).[frameLooped](Animate.md#framelooped)

#### Defined in

[in/packages/animate/src/Animate.ts:82](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L82)

___

### frameReverse

• `Protected` **frameReverse**: `boolean`

#### Inherited from

[Animate](Animate.md).[frameReverse](Animate.md#framereverse)

#### Defined in

[in/packages/animate/src/Animate.ts:83](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L83)

___

### easingFn

• `Protected` **easingFn**: [`IFunction`](../interfaces/IFunction.md)

#### Inherited from

[Animate](Animate.md).[easingFn](Animate.md#easingfn)

#### Defined in

[in/packages/animate/src/Animate.ts:85](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L85)

___

### requestAnimateTime

• `Protected` **requestAnimateTime**: `number`

#### Inherited from

[Animate](Animate.md).[requestAnimateTime](Animate.md#requestanimatetime)

#### Defined in

[in/packages/animate/src/Animate.ts:87](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L87)

___

### playedTotalTime

• `Protected` **playedTotalTime**: `number`

#### Inherited from

[Animate](Animate.md).[playedTotalTime](Animate.md#playedtotaltime)

#### Defined in

[in/packages/animate/src/Animate.ts:88](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L88)

___

### mainReverse

• `Protected` **mainReverse**: `boolean`

#### Inherited from

[Animate](Animate.md).[mainReverse](Animate.md#mainreverse)

#### Defined in

[in/packages/animate/src/Animate.ts:91](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L91)

___

### timer

• `Protected` **timer**: `any`

#### Inherited from

[Animate](Animate.md).[timer](Animate.md#timer)

#### Defined in

[in/packages/animate/src/Animate.ts:92](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L92)

___

### attrsMap

• `Protected` **attrsMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md)

#### Inherited from

[Animate](Animate.md).[attrsMap](Animate.md#attrsmap)

#### Defined in

[in/packages/animate/src/Animate.ts:93](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L93)

___

### list

• **list**: [`IAnimate`](../interfaces/IAnimate.md)[] = `[]`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[list](../interfaces/IAnimateList.md#list)

#### Defined in

[in/packages/animate/src/AnimateList.ts:11](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L11)

___

### \_endingStyle

• `Protected` **\_endingStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Defined in

[in/packages/animate/src/AnimateList.ts:16](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L16)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[innerId](../interfaces/IAnimateList.md#innerid)

#### Inherited from

[Animate](Animate.md).[innerId](Animate.md#innerid)

#### Defined in

[leafer/packages/event/src/Eventer.ts:12](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L12)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[__captureMap](../interfaces/IAnimateList.md#__capturemap)

#### Inherited from

[Animate](Animate.md).[__captureMap](Animate.md#__capturemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:14](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L14)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[__bubbleMap](../interfaces/IAnimateList.md#__bubblemap)

#### Inherited from

[Animate](Animate.md).[__bubbleMap](Animate.md#__bubblemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:16](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L16)

___

### \_\_hasLocalEvent

• `Optional` **\_\_hasLocalEvent**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[__hasLocalEvent](../interfaces/IAnimateList.md#__haslocalevent)

#### Inherited from

[Animate](Animate.md).[__hasLocalEvent](Animate.md#__haslocalevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:18](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L18)

___

### \_\_hasWorldEvent

• `Optional` **\_\_hasWorldEvent**: `boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[__hasWorldEvent](../interfaces/IAnimateList.md#__hasworldevent)

#### Inherited from

[Animate](Animate.md).[__hasWorldEvent](Animate.md#__hasworldevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:19](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L19)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[syncEventer](../interfaces/IAnimateList.md#synceventer)

#### Inherited from

[Animate](Animate.md).[syncEventer](Animate.md#synceventer)

#### Defined in

[leafer/packages/event/src/Eventer.ts:21](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L21)

## Accessors

### started

• `get` **started**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[started](../interfaces/IAnimateList.md#started)

#### Inherited from

Animate.started

#### Defined in

[in/packages/animate/src/Animate.ts:25](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L25)

___

### frame

• `Protected` `get` **frame**(): [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Returns

[`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Inherited from

Animate.frame

#### Defined in

[in/packages/animate/src/Animate.ts:80](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L80)

___

### frameTotalTime

• `Protected` `get` **frameTotalTime**(): `number`

#### Returns

`number`

#### Inherited from

Animate.frameTotalTime

#### Defined in

[in/packages/animate/src/Animate.ts:81](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L81)

___

### nowReverse

• `get` **nowReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Animate.nowReverse

#### Defined in

[in/packages/animate/src/Animate.ts:90](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L90)

___

### realEnding

• `get` **realEnding**(): [`IAnimateEnding`](../modules.md#ianimateending)

#### Returns

[`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[realEnding](../interfaces/IAnimateList.md#realending)

#### Inherited from

Animate.realEnding

#### Defined in

[in/packages/animate/src/Animate.ts:95](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L95)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[completed](../interfaces/IAnimateList.md#completed)

#### Overrides

Animate.completed

#### Defined in

[in/packages/animate/src/AnimateList.ts:13](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L13)

___

### endingStyle

• `get` **endingStyle**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[endingStyle](../interfaces/IAnimateList.md#endingstyle)

#### Overrides

Animate.endingStyle

#### Defined in

[in/packages/animate/src/AnimateList.ts:15](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L15)

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

[IAnimateList](../interfaces/IAnimateList.md).[event](../interfaces/IAnimateList.md#event)

#### Inherited from

Animate.event

#### Defined in

[leafer/packages/event/src/Eventer.ts:23](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L23)

## Methods

### init

▸ **init**(`target`, `keyframe`, `options?`, `isTemp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md) |
| `keyframe` | [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] |
| `options?` | [`ITransition`](../modules.md#itransition) |
| `isTemp?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[init](../interfaces/IAnimateList.md#init)

#### Inherited from

[Animate](Animate.md).[init](Animate.md#init)

#### Defined in

[in/packages/animate/src/Animate.ts:117](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L117)

___

### emitType

▸ **emitType**(`type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[emitType](Animate.md#emittype)

#### Defined in

[in/packages/animate/src/Animate.ts:141](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L141)

___

### create

▸ `Protected` **create**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[create](Animate.md#create)

#### Defined in

[in/packages/animate/src/Animate.ts:190](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L190)

___

### changeDuration

▸ **changeDuration**(`duration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[changeDuration](Animate.md#changeduration)

#### Defined in

[in/packages/animate/src/Animate.ts:254](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L254)

___

### setBefore

▸ **setBefore**(`item`, `data`, `before`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `item` | [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md) |
| `data` | [`IObject`](../interfaces/IObject.md) |
| `before` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setBefore](Animate.md#setbefore)

#### Defined in

[in/packages/animate/src/Animate.ts:259](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L259)

___

### allocateTime

▸ **allocateTime**(`partTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `partTime` | `number` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[allocateTime](Animate.md#allocatetime)

#### Defined in

[in/packages/animate/src/Animate.ts:268](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L268)

___

### requestAnimate

▸ `Protected` **requestAnimate**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[requestAnimate](Animate.md#requestanimate)

#### Defined in

[in/packages/animate/src/Animate.ts:281](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L281)

___

### animate

▸ `Protected` **animate**(`_runtime?`, `seek?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_runtime?` | `number` |
| `seek?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[animate](Animate.md#animate)

#### Defined in

[in/packages/animate/src/Animate.ts:286](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L286)

___

### start

▸ `Protected` **start**(`seek?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seek?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[start](Animate.md#start)

#### Defined in

[in/packages/animate/src/Animate.ts:347](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L347)

___

### begin

▸ `Protected` **begin**(`seek?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seek?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[begin](Animate.md#begin)

#### Defined in

[in/packages/animate/src/Animate.ts:365](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L365)

___

### end

▸ `Protected` **end**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[end](Animate.md#end)

#### Defined in

[in/packages/animate/src/Animate.ts:371](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L371)

___

### complete

▸ `Protected` **complete**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[complete](Animate.md#complete)

#### Defined in

[in/packages/animate/src/Animate.ts:375](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L375)

___

### setFrom

▸ `Protected` **setFrom**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setFrom](Animate.md#setfrom)

#### Defined in

[in/packages/animate/src/Animate.ts:389](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L389)

___

### setTo

▸ `Protected` **setTo**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setTo](Animate.md#setto)

#### Defined in

[in/packages/animate/src/Animate.ts:394](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L394)

___

### nextFrame

▸ `Protected` **nextFrame**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[nextFrame](Animate.md#nextframe)

#### Defined in

[in/packages/animate/src/Animate.ts:400](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L400)

___

### reverseNextFrame

▸ `Protected` **reverseNextFrame**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[reverseNextFrame](Animate.md#reversenextframe)

#### Defined in

[in/packages/animate/src/Animate.ts:407](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L407)

___

### transition

▸ `Protected` **transition**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[transition](Animate.md#transition)

#### Defined in

[in/packages/animate/src/Animate.ts:414](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L414)

___

### setStyle

▸ **setStyle**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setStyle](Animate.md#setstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:438](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L438)

___

### increaseTime

▸ `Protected` **increaseTime**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[increaseTime](Animate.md#increasetime)

#### Defined in

[in/packages/animate/src/Animate.ts:447](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L447)

___

### needLoop

▸ `Protected` **needLoop**(`looped`, `loop`, `swing`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `looped` | `number` |
| `loop` | `number` \| `boolean` |
| `swing` | `number` \| `boolean` |

#### Returns

`boolean`

#### Inherited from

[Animate](Animate.md).[needLoop](Animate.md#needloop)

#### Defined in

[in/packages/animate/src/Animate.ts:451](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L451)

___

### needStopLoop

▸ `Protected` **needStopLoop**(`looped`, `times`, `swing?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `looped` | `number` |
| `times` | `number` \| `boolean` |
| `swing?` | `boolean` |

#### Returns

`boolean`

#### Inherited from

[Animate](Animate.md).[needStopLoop](Animate.md#needstoploop)

#### Defined in

[in/packages/animate/src/Animate.ts:455](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L455)

___

### needLoopFrame

▸ `Protected` **needLoopFrame**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Animate](Animate.md).[needLoopFrame](Animate.md#needloopframe)

#### Defined in

[in/packages/animate/src/Animate.ts:459](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L459)

___

### clearTimer

▸ `Protected` **clearTimer**(`fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[clearTimer](Animate.md#cleartimer)

#### Defined in

[in/packages/animate/src/Animate.ts:471](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/Animate.ts#L471)

___

### updateList

▸ **updateList**(`animation?`, `isTemp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `animation?` | [`IAnimate`](../interfaces/IAnimate.md)[] \| [`IAnimation`](../modules.md#ianimation)[] |
| `isTemp?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[updateList](../interfaces/IAnimateList.md#updatelist)

#### Defined in

[in/packages/animate/src/AnimateList.ts:25](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L25)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[play](../interfaces/IAnimateList.md#play)

#### Overrides

[Animate](Animate.md).[play](Animate.md#play)

#### Defined in

[in/packages/animate/src/AnimateList.ts:46](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L46)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[pause](../interfaces/IAnimateList.md#pause)

#### Overrides

[Animate](Animate.md).[pause](Animate.md#pause)

#### Defined in

[in/packages/animate/src/AnimateList.ts:51](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L51)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[stop](../interfaces/IAnimateList.md#stop)

#### Overrides

[Animate](Animate.md).[stop](Animate.md#stop)

#### Defined in

[in/packages/animate/src/AnimateList.ts:56](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L56)

___

### seek

▸ **seek**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| [`IPercentData`](../interfaces/IPercentData.md) |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[seek](../interfaces/IAnimateList.md#seek)

#### Overrides

[Animate](Animate.md).[seek](Animate.md#seek)

#### Defined in

[in/packages/animate/src/AnimateList.ts:61](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L61)

___

### kill

▸ **kill**(`complete?`, `killStyle?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `complete?` | `boolean` |
| `killStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[kill](../interfaces/IAnimateList.md#kill)

#### Overrides

[Animate](Animate.md).[kill](Animate.md#kill)

#### Defined in

[in/packages/animate/src/AnimateList.ts:66](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L66)

___

### onChildEvent

▸ **onChildEvent**(`type`, `_animate`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `_animate` | [`IAnimate`](../interfaces/IAnimate.md) |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[onChildEvent](../interfaces/IAnimateList.md#onchildevent)

#### Defined in

[in/packages/animate/src/AnimateList.ts:71](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L71)

___

### each

▸ `Protected` **each**(`func`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/AnimateList.ts:81](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L81)

___

### destroy

▸ **destroy**(`complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `complete?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[destroy](../interfaces/IAnimateList.md#destroy)

#### Overrides

[Animate](Animate.md).[destroy](Animate.md#destroy)

#### Defined in

[in/packages/animate/src/AnimateList.ts:85](https://github.com/leaferjs/leafer-in/blob/f18a102/packages/animate/src/AnimateList.ts#L85)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParamsMap`](../interfaces/IEventParamsMap.md) \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[on](../interfaces/IAnimateList.md#on)

#### Inherited from

[Animate](Animate.md).[on](Animate.md#on)

#### Defined in

[leafer/packages/event/src/Eventer.ts:26](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L26)

___

### off

▸ **off**(`type?`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type?` | `string` \| `string`[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[off](../interfaces/IAnimateList.md#off)

#### Inherited from

[Animate](Animate.md).[off](Animate.md#off)

#### Defined in

[leafer/packages/event/src/Eventer.ts:66](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L66)

___

### on\_

▸ **on_**(`type`, `listener?`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[on_](../interfaces/IAnimateList.md#on_)

#### Inherited from

[Animate](Animate.md).[on_](Animate.md#on_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:110](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L110)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[off_](../interfaces/IAnimateList.md#off_)

#### Inherited from

[Animate](Animate.md).[off_](Animate.md#off_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:116](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L116)

___

### once

▸ **once**(`type`, `listener?`, `captureOrBind?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventParams`](../modules.md#ieventparams)[] |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `captureOrBind?` | `boolean` \| [`IObject`](../interfaces/IObject.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[once](../interfaces/IAnimateList.md#once)

#### Inherited from

[Animate](Animate.md).[once](Animate.md#once)

#### Defined in

[leafer/packages/event/src/Eventer.ts:126](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L126)

___

### emit

▸ **emit**(`type`, `event?`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `event?` | [`IObject`](../interfaces/IObject.md) \| [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[emit](../interfaces/IAnimateList.md#emit)

#### Inherited from

[Animate](Animate.md).[emit](Animate.md#emit)

#### Defined in

[leafer/packages/event/src/Eventer.ts:133](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L133)

___

### emitEvent

▸ **emitEvent**(`event`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IEvent`](../interfaces/IEvent.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[emitEvent](../interfaces/IAnimateList.md#emitevent)

#### Inherited from

[Animate](Animate.md).[emitEvent](Animate.md#emitevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:155](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L155)

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

#### Implementation of

[IAnimateList](../interfaces/IAnimateList.md).[hasEvent](../interfaces/IAnimateList.md#hasevent)

#### Inherited from

[Animate](Animate.md).[hasEvent](Animate.md#hasevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:160](https://github.com/leaferjs/leafer/blob/4821e21/packages/event/src/Eventer.ts#L160)
