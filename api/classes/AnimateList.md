# Class: AnimateList

## Hierarchy

- [`Animate`](Animate.md)

  ↳ **`AnimateList`**

## Table of contents

### Constructors

- [constructor](AnimateList.md#constructor)

### Properties

- [target](AnimateList.md#target)
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

[in/packages/animate/src/AnimateList.ts:18](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L18)

## Properties

### target

• **target**: [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md)

#### Inherited from

[Animate](Animate.md).[target](Animate.md#target)

#### Defined in

[in/packages/animate/src/Animate.ts:14](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L14)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Inherited from

[Animate](Animate.md).[keyframes](Animate.md#keyframes)

#### Defined in

[in/packages/animate/src/Animate.ts:16](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L16)

___

### config

• `Optional` **config**: [`IAnimateOptions`](../interfaces/IAnimateOptions.md)

#### Inherited from

[Animate](Animate.md).[config](Animate.md#config)

#### Defined in

[in/packages/animate/src/Animate.ts:17](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L17)

___

### style

• **style**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Inherited from

[Animate](Animate.md).[style](Animate.md#style)

#### Defined in

[in/packages/animate/src/Animate.ts:19](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L19)

___

### fromStyle

• **fromStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Inherited from

[Animate](Animate.md).[fromStyle](Animate.md#fromstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:20](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L20)

___

### toStyle

• **toStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Inherited from

[Animate](Animate.md).[toStyle](Animate.md#tostyle)

#### Defined in

[in/packages/animate/src/Animate.ts:21](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L21)

___

### running

• **running**: `boolean`

#### Inherited from

[Animate](Animate.md).[running](Animate.md#running)

#### Defined in

[in/packages/animate/src/Animate.ts:25](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L25)

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

[Animate](Animate.md).[destroyed](Animate.md#destroyed)

#### Defined in

[in/packages/animate/src/Animate.ts:27](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L27)

___

### time

• **time**: `number`

#### Inherited from

[Animate](Animate.md).[time](Animate.md#time)

#### Defined in

[in/packages/animate/src/Animate.ts:29](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L29)

___

### looped

• **looped**: `number`

#### Inherited from

[Animate](Animate.md).[looped](Animate.md#looped)

#### Defined in

[in/packages/animate/src/Animate.ts:30](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L30)

___

### easing

• **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Inherited from

[Animate](Animate.md).[easing](Animate.md#easing)

#### Defined in

[in/packages/animate/src/Animate.ts:34](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L34)

___

### delay

• **delay**: `number`

#### Inherited from

[Animate](Animate.md).[delay](Animate.md#delay)

#### Defined in

[in/packages/animate/src/Animate.ts:38](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L38)

___

### duration

• **duration**: `number`

#### Inherited from

[Animate](Animate.md).[duration](Animate.md#duration)

#### Defined in

[in/packages/animate/src/Animate.ts:41](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L41)

___

### ending

• **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Inherited from

[Animate](Animate.md).[ending](Animate.md#ending)

#### Defined in

[in/packages/animate/src/Animate.ts:44](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L44)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Inherited from

[Animate](Animate.md).[reverse](Animate.md#reverse)

#### Defined in

[in/packages/animate/src/Animate.ts:48](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L48)

___

### swing

• `Optional` **swing**: `boolean`

#### Inherited from

[Animate](Animate.md).[swing](Animate.md#swing)

#### Defined in

[in/packages/animate/src/Animate.ts:51](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L51)

___

### loop

• **loop**: `number` \| `boolean`

#### Inherited from

[Animate](Animate.md).[loop](Animate.md#loop)

#### Defined in

[in/packages/animate/src/Animate.ts:54](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L54)

___

### loopDelay

• **loopDelay**: `number`

#### Inherited from

[Animate](Animate.md).[loopDelay](Animate.md#loopdelay)

#### Defined in

[in/packages/animate/src/Animate.ts:57](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L57)

___

### speed

• **speed**: `number`

#### Inherited from

[Animate](Animate.md).[speed](Animate.md#speed)

#### Defined in

[in/packages/animate/src/Animate.ts:61](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L61)

___

### autoplay

• **autoplay**: `boolean`

#### Inherited from

[Animate](Animate.md).[autoplay](Animate.md#autoplay)

#### Defined in

[in/packages/animate/src/Animate.ts:64](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L64)

___

### join

• **join**: `boolean`

#### Inherited from

[Animate](Animate.md).[join](Animate.md#join)

#### Defined in

[in/packages/animate/src/Animate.ts:67](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L67)

___

### attrs

• **attrs**: `string`[]

#### Inherited from

[Animate](Animate.md).[attrs](Animate.md#attrs)

#### Defined in

[in/packages/animate/src/Animate.ts:70](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L70)

___

### killStyle

• `Protected` **killStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Inherited from

[Animate](Animate.md).[killStyle](Animate.md#killstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:72](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L72)

___

### isTemp

• **isTemp**: `boolean`

#### Inherited from

[Animate](Animate.md).[isTemp](Animate.md#istemp)

#### Defined in

[in/packages/animate/src/Animate.ts:74](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L74)

___

### frames

• **frames**: [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)[]

#### Inherited from

[Animate](Animate.md).[frames](Animate.md#frames)

#### Defined in

[in/packages/animate/src/Animate.ts:76](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L76)

___

### nowIndex

• `Protected` **nowIndex**: `number`

#### Inherited from

[Animate](Animate.md).[nowIndex](Animate.md#nowindex)

#### Defined in

[in/packages/animate/src/Animate.ts:78](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L78)

___

### frameLooped

• `Protected` **frameLooped**: `number`

#### Inherited from

[Animate](Animate.md).[frameLooped](Animate.md#framelooped)

#### Defined in

[in/packages/animate/src/Animate.ts:81](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L81)

___

### frameReverse

• `Protected` **frameReverse**: `boolean`

#### Inherited from

[Animate](Animate.md).[frameReverse](Animate.md#framereverse)

#### Defined in

[in/packages/animate/src/Animate.ts:82](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L82)

___

### easingFn

• `Protected` **easingFn**: [`IFunction`](../interfaces/IFunction.md)

#### Inherited from

[Animate](Animate.md).[easingFn](Animate.md#easingfn)

#### Defined in

[in/packages/animate/src/Animate.ts:84](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L84)

___

### requestAnimateTime

• `Protected` **requestAnimateTime**: `number`

#### Inherited from

[Animate](Animate.md).[requestAnimateTime](Animate.md#requestanimatetime)

#### Defined in

[in/packages/animate/src/Animate.ts:86](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L86)

___

### playedTotalTime

• `Protected` **playedTotalTime**: `number`

#### Inherited from

[Animate](Animate.md).[playedTotalTime](Animate.md#playedtotaltime)

#### Defined in

[in/packages/animate/src/Animate.ts:87](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L87)

___

### mainReverse

• `Protected` **mainReverse**: `boolean`

#### Inherited from

[Animate](Animate.md).[mainReverse](Animate.md#mainreverse)

#### Defined in

[in/packages/animate/src/Animate.ts:90](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L90)

___

### timer

• `Protected` **timer**: `any`

#### Inherited from

[Animate](Animate.md).[timer](Animate.md#timer)

#### Defined in

[in/packages/animate/src/Animate.ts:91](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L91)

___

### attrsMap

• `Protected` **attrsMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md)

#### Inherited from

[Animate](Animate.md).[attrsMap](Animate.md#attrsmap)

#### Defined in

[in/packages/animate/src/Animate.ts:92](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L92)

___

### list

• **list**: [`IAnimate`](../interfaces/IAnimate.md)[] = `[]`

#### Defined in

[in/packages/animate/src/AnimateList.ts:10](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L10)

___

### \_endingStyle

• `Protected` **\_endingStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Defined in

[in/packages/animate/src/AnimateList.ts:15](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L15)

___

### innerId

• `Readonly` **innerId**: `number`

#### Inherited from

[Animate](Animate.md).[innerId](Animate.md#innerid)

#### Defined in

[leafer/packages/event/src/Eventer.ts:9](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L9)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Inherited from

[Animate](Animate.md).[__captureMap](Animate.md#__capturemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:11](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L11)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Inherited from

[Animate](Animate.md).[__bubbleMap](Animate.md#__bubblemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:13](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L13)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Inherited from

[Animate](Animate.md).[syncEventer](Animate.md#synceventer)

#### Defined in

[leafer/packages/event/src/Eventer.ts:15](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L15)

## Accessors

### started

• `get` **started**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Animate.started

#### Defined in

[in/packages/animate/src/Animate.ts:24](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L24)

___

### frame

• `Protected` `get` **frame**(): [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Returns

[`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Inherited from

Animate.frame

#### Defined in

[in/packages/animate/src/Animate.ts:79](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L79)

___

### frameTotalTime

• `Protected` `get` **frameTotalTime**(): `number`

#### Returns

`number`

#### Inherited from

Animate.frameTotalTime

#### Defined in

[in/packages/animate/src/Animate.ts:80](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L80)

___

### nowReverse

• `get` **nowReverse**(): `boolean`

#### Returns

`boolean`

#### Inherited from

Animate.nowReverse

#### Defined in

[in/packages/animate/src/Animate.ts:89](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L89)

___

### realEnding

• `get` **realEnding**(): [`IAnimateEnding`](../modules.md#ianimateending)

#### Returns

[`IAnimateEnding`](../modules.md#ianimateending)

#### Inherited from

Animate.realEnding

#### Defined in

[in/packages/animate/src/Animate.ts:94](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L94)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Overrides

Animate.completed

#### Defined in

[in/packages/animate/src/AnimateList.ts:12](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L12)

___

### endingStyle

• `get` **endingStyle**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Overrides

Animate.endingStyle

#### Defined in

[in/packages/animate/src/AnimateList.ts:14](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L14)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventMap`](../interfaces/IEventMap.md) |

#### Returns

`void`

#### Inherited from

Animate.event

#### Defined in

[leafer/packages/event/src/Eventer.ts:17](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L17)

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

#### Inherited from

[Animate](Animate.md).[init](Animate.md#init)

#### Defined in

[in/packages/animate/src/Animate.ts:116](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L116)

___

### create

▸ `Protected` **create**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[create](Animate.md#create)

#### Defined in

[in/packages/animate/src/Animate.ts:184](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L184)

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

[in/packages/animate/src/Animate.ts:248](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L248)

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

[in/packages/animate/src/Animate.ts:253](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L253)

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

[in/packages/animate/src/Animate.ts:262](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L262)

___

### requestAnimate

▸ `Protected` **requestAnimate**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[requestAnimate](Animate.md#requestanimate)

#### Defined in

[in/packages/animate/src/Animate.ts:275](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L275)

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

[in/packages/animate/src/Animate.ts:280](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L280)

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

[in/packages/animate/src/Animate.ts:341](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L341)

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

[in/packages/animate/src/Animate.ts:359](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L359)

___

### end

▸ `Protected` **end**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[end](Animate.md#end)

#### Defined in

[in/packages/animate/src/Animate.ts:365](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L365)

___

### complete

▸ `Protected` **complete**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[complete](Animate.md#complete)

#### Defined in

[in/packages/animate/src/Animate.ts:369](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L369)

___

### setFrom

▸ `Protected` **setFrom**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setFrom](Animate.md#setfrom)

#### Defined in

[in/packages/animate/src/Animate.ts:383](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L383)

___

### setTo

▸ `Protected` **setTo**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[setTo](Animate.md#setto)

#### Defined in

[in/packages/animate/src/Animate.ts:388](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L388)

___

### nextFrame

▸ `Protected` **nextFrame**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[nextFrame](Animate.md#nextframe)

#### Defined in

[in/packages/animate/src/Animate.ts:394](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L394)

___

### reverseNextFrame

▸ `Protected` **reverseNextFrame**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[reverseNextFrame](Animate.md#reversenextframe)

#### Defined in

[in/packages/animate/src/Animate.ts:401](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L401)

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

[in/packages/animate/src/Animate.ts:408](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L408)

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

[in/packages/animate/src/Animate.ts:432](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L432)

___

### increaseTime

▸ `Protected` **increaseTime**(): `void`

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[increaseTime](Animate.md#increasetime)

#### Defined in

[in/packages/animate/src/Animate.ts:441](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L441)

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

[in/packages/animate/src/Animate.ts:445](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L445)

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

[in/packages/animate/src/Animate.ts:449](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L449)

___

### needLoopFrame

▸ `Protected` **needLoopFrame**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Animate](Animate.md).[needLoopFrame](Animate.md#needloopframe)

#### Defined in

[in/packages/animate/src/Animate.ts:453](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L453)

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

[in/packages/animate/src/Animate.ts:465](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/Animate.ts#L465)

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

#### Defined in

[in/packages/animate/src/AnimateList.ts:24](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L24)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Overrides

[Animate](Animate.md).[play](Animate.md#play)

#### Defined in

[in/packages/animate/src/AnimateList.ts:44](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L44)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Overrides

[Animate](Animate.md).[pause](Animate.md#pause)

#### Defined in

[in/packages/animate/src/AnimateList.ts:48](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L48)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Overrides

[Animate](Animate.md).[stop](Animate.md#stop)

#### Defined in

[in/packages/animate/src/AnimateList.ts:52](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L52)

___

### seek

▸ **seek**(`time`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `time` | `number` \| [`IPercentData`](../interfaces/IPercentData.md) |

#### Returns

`void`

#### Overrides

[Animate](Animate.md).[seek](Animate.md#seek)

#### Defined in

[in/packages/animate/src/AnimateList.ts:56](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L56)

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

#### Overrides

[Animate](Animate.md).[kill](Animate.md#kill)

#### Defined in

[in/packages/animate/src/AnimateList.ts:60](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L60)

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

[in/packages/animate/src/AnimateList.ts:65](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L65)

___

### destroy

▸ **destroy**(`complete?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `complete?` | `boolean` |

#### Returns

`void`

#### Overrides

[Animate](Animate.md).[destroy](Animate.md#destroy)

#### Defined in

[in/packages/animate/src/AnimateList.ts:69](https://github.com/leaferjs/leafer-in/blob/fa455ee/packages/animate/src/AnimateList.ts#L69)

___

### on

▸ **on**(`type`, `listener?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] \| [`IEventMap`](../interfaces/IEventMap.md) |
| `listener?` | [`IFunction`](../interfaces/IFunction.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[on](Animate.md#on)

#### Defined in

[leafer/packages/event/src/Eventer.ts:20](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L20)

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

#### Inherited from

[Animate](Animate.md).[off](Animate.md#off)

#### Defined in

[leafer/packages/event/src/Eventer.ts:57](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L57)

___

### on\_

▸ **on_**(`type`, `listener`, `bind?`, `options?`): [`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](../interfaces/IFunction.md) |
| `bind?` | [`IObject`](../interfaces/IObject.md) |
| `options?` | [`IEventOption`](../modules.md#ieventoption) |

#### Returns

[`IEventListenerId`](../interfaces/IEventListenerId.md)

#### Inherited from

[Animate](Animate.md).[on_](Animate.md#on_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:100](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L100)

___

### off\_

▸ **off_**(`id`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | [`IEventListenerId`](../interfaces/IEventListenerId.md) \| [`IEventListenerId`](../interfaces/IEventListenerId.md)[] |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[off_](Animate.md#off_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:106](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L106)

___

### once

▸ **once**(`type`, `listener`, `capture?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` \| `string`[] |
| `listener` | [`IFunction`](../interfaces/IFunction.md) |
| `capture?` | `boolean` |

#### Returns

`void`

#### Inherited from

[Animate](Animate.md).[once](Animate.md#once)

#### Defined in

[leafer/packages/event/src/Eventer.ts:113](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L113)

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

#### Inherited from

[Animate](Animate.md).[emit](Animate.md#emit)

#### Defined in

[leafer/packages/event/src/Eventer.ts:117](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L117)

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

#### Inherited from

[Animate](Animate.md).[emitEvent](Animate.md#emitevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:139](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L139)

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

[Animate](Animate.md).[hasEvent](Animate.md#hasevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:144](https://github.com/leaferjs/leafer/blob/27e942d/packages/event/src/Eventer.ts#L144)
