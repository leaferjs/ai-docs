# Class: Animate

## Hierarchy

- [`Eventer`](Eventer.md)

  ↳ **`Animate`**

  ↳↳ [`AnimateList`](AnimateList.md)

## Implements

- [`IAnimate`](../interfaces/IAnimate.md)

## Table of contents

### Constructors

- [constructor](Animate.md#constructor)

### Properties

- [target](Animate.md#target)
- [keyframes](Animate.md#keyframes)
- [config](Animate.md#config)
- [style](Animate.md#style)
- [fromStyle](Animate.md#fromstyle)
- [toStyle](Animate.md#tostyle)
- [running](Animate.md#running)
- [destroyed](Animate.md#destroyed)
- [time](Animate.md#time)
- [looped](Animate.md#looped)
- [easing](Animate.md#easing)
- [delay](Animate.md#delay)
- [duration](Animate.md#duration)
- [ending](Animate.md#ending)
- [reverse](Animate.md#reverse)
- [swing](Animate.md#swing)
- [loop](Animate.md#loop)
- [loopDelay](Animate.md#loopdelay)
- [speed](Animate.md#speed)
- [autoplay](Animate.md#autoplay)
- [join](Animate.md#join)
- [attrs](Animate.md#attrs)
- [killStyle](Animate.md#killstyle)
- [isTemp](Animate.md#istemp)
- [frames](Animate.md#frames)
- [nowIndex](Animate.md#nowindex)
- [frameLooped](Animate.md#framelooped)
- [frameReverse](Animate.md#framereverse)
- [easingFn](Animate.md#easingfn)
- [requestAnimateTime](Animate.md#requestanimatetime)
- [playedTotalTime](Animate.md#playedtotaltime)
- [mainReverse](Animate.md#mainreverse)
- [timer](Animate.md#timer)
- [attrsMap](Animate.md#attrsmap)
- [innerId](Animate.md#innerid)
- [\_\_captureMap](Animate.md#__capturemap)
- [\_\_bubbleMap](Animate.md#__bubblemap)
- [syncEventer](Animate.md#synceventer)

### Accessors

- [endingStyle](Animate.md#endingstyle)
- [started](Animate.md#started)
- [completed](Animate.md#completed)
- [frame](Animate.md#frame)
- [frameTotalTime](Animate.md#frametotaltime)
- [nowReverse](Animate.md#nowreverse)
- [realEnding](Animate.md#realending)
- [event](Animate.md#event)

### Methods

- [init](Animate.md#init)
- [play](Animate.md#play)
- [pause](Animate.md#pause)
- [stop](Animate.md#stop)
- [seek](Animate.md#seek)
- [kill](Animate.md#kill)
- [create](Animate.md#create)
- [changeDuration](Animate.md#changeduration)
- [setBefore](Animate.md#setbefore)
- [allocateTime](Animate.md#allocatetime)
- [requestAnimate](Animate.md#requestanimate)
- [animate](Animate.md#animate)
- [start](Animate.md#start)
- [begin](Animate.md#begin)
- [end](Animate.md#end)
- [complete](Animate.md#complete)
- [setFrom](Animate.md#setfrom)
- [setTo](Animate.md#setto)
- [nextFrame](Animate.md#nextframe)
- [reverseNextFrame](Animate.md#reversenextframe)
- [transition](Animate.md#transition)
- [setStyle](Animate.md#setstyle)
- [increaseTime](Animate.md#increasetime)
- [needLoop](Animate.md#needloop)
- [needStopLoop](Animate.md#needstoploop)
- [needLoopFrame](Animate.md#needloopframe)
- [clearTimer](Animate.md#cleartimer)
- [destroy](Animate.md#destroy)
- [on](Animate.md#on)
- [off](Animate.md#off)
- [on\_](Animate.md#on_)
- [off\_](Animate.md#off_)
- [once](Animate.md#once)
- [emit](Animate.md#emit)
- [emitEvent](Animate.md#emitevent)
- [hasEvent](Animate.md#hasevent)

## Constructors

### constructor

• **new Animate**(`target`, `keyframe`, `options?`, `isTemp?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md) |
| `keyframe` | [`IAnimation`](../modules.md#ianimation) \| [`IUIInputData`](../interfaces/IUIInputData.md) \| [`IKeyframe`](../modules.md#ikeyframe)[] |
| `options?` | [`ITransition`](../modules.md#itransition) |
| `isTemp?` | `boolean` |

#### Overrides

[Eventer](Eventer.md).[constructor](Eventer.md#constructor)

#### Defined in

[in/packages/animate/src/Animate.ts:107](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L107)

## Properties

### target

• **target**: [`IObject`](../interfaces/IObject.md) \| [`IUI`](../interfaces/IUI.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[target](../interfaces/IAnimate.md#target)

#### Defined in

[in/packages/animate/src/Animate.ts:14](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L14)

___

### keyframes

• **keyframes**: [`IKeyframe`](../modules.md#ikeyframe)[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[keyframes](../interfaces/IAnimate.md#keyframes)

#### Defined in

[in/packages/animate/src/Animate.ts:16](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L16)

___

### config

• `Optional` **config**: [`IAnimateOptions`](../interfaces/IAnimateOptions.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[config](../interfaces/IAnimate.md#config)

#### Defined in

[in/packages/animate/src/Animate.ts:17](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L17)

___

### style

• **style**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[style](../interfaces/IAnimate.md#style)

#### Defined in

[in/packages/animate/src/Animate.ts:19](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L19)

___

### fromStyle

• **fromStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[fromStyle](../interfaces/IAnimate.md#fromstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:20](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L20)

___

### toStyle

• **toStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[toStyle](../interfaces/IAnimate.md#tostyle)

#### Defined in

[in/packages/animate/src/Animate.ts:21](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L21)

___

### running

• **running**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[running](../interfaces/IAnimate.md#running)

#### Defined in

[in/packages/animate/src/Animate.ts:25](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L25)

___

### destroyed

• **destroyed**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[destroyed](../interfaces/IAnimate.md#destroyed)

#### Defined in

[in/packages/animate/src/Animate.ts:27](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L27)

___

### time

• **time**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[time](../interfaces/IAnimate.md#time)

#### Defined in

[in/packages/animate/src/Animate.ts:29](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L29)

___

### looped

• **looped**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[looped](../interfaces/IAnimate.md#looped)

#### Defined in

[in/packages/animate/src/Animate.ts:30](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L30)

___

### easing

• **easing**: [`IAnimateEasing`](../modules.md#ianimateeasing)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[easing](../interfaces/IAnimate.md#easing)

#### Defined in

[in/packages/animate/src/Animate.ts:34](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L34)

___

### delay

• **delay**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[delay](../interfaces/IAnimate.md#delay)

#### Defined in

[in/packages/animate/src/Animate.ts:38](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L38)

___

### duration

• **duration**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[duration](../interfaces/IAnimate.md#duration)

#### Defined in

[in/packages/animate/src/Animate.ts:41](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L41)

___

### ending

• **ending**: [`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[ending](../interfaces/IAnimate.md#ending)

#### Defined in

[in/packages/animate/src/Animate.ts:44](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L44)

___

### reverse

• `Optional` **reverse**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[reverse](../interfaces/IAnimate.md#reverse)

#### Defined in

[in/packages/animate/src/Animate.ts:48](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L48)

___

### swing

• `Optional` **swing**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[swing](../interfaces/IAnimate.md#swing)

#### Defined in

[in/packages/animate/src/Animate.ts:51](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L51)

___

### loop

• **loop**: `number` \| `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[loop](../interfaces/IAnimate.md#loop)

#### Defined in

[in/packages/animate/src/Animate.ts:54](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L54)

___

### loopDelay

• **loopDelay**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[loopDelay](../interfaces/IAnimate.md#loopdelay)

#### Defined in

[in/packages/animate/src/Animate.ts:57](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L57)

___

### speed

• **speed**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[speed](../interfaces/IAnimate.md#speed)

#### Defined in

[in/packages/animate/src/Animate.ts:61](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L61)

___

### autoplay

• **autoplay**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[autoplay](../interfaces/IAnimate.md#autoplay)

#### Defined in

[in/packages/animate/src/Animate.ts:64](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L64)

___

### join

• **join**: `boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[join](../interfaces/IAnimate.md#join)

#### Defined in

[in/packages/animate/src/Animate.ts:67](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L67)

___

### attrs

• **attrs**: `string`[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[attrs](../interfaces/IAnimate.md#attrs)

#### Defined in

[in/packages/animate/src/Animate.ts:70](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L70)

___

### killStyle

• `Protected` **killStyle**: [`IUIInputData`](../interfaces/IUIInputData.md)

#### Defined in

[in/packages/animate/src/Animate.ts:72](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L72)

___

### isTemp

• **isTemp**: `boolean`

#### Defined in

[in/packages/animate/src/Animate.ts:74](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L74)

___

### frames

• **frames**: [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)[]

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[frames](../interfaces/IAnimate.md#frames)

#### Defined in

[in/packages/animate/src/Animate.ts:76](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L76)

___

### nowIndex

• `Protected` **nowIndex**: `number`

#### Defined in

[in/packages/animate/src/Animate.ts:78](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L78)

___

### frameLooped

• `Protected` **frameLooped**: `number`

#### Defined in

[in/packages/animate/src/Animate.ts:81](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L81)

___

### frameReverse

• `Protected` **frameReverse**: `boolean`

#### Defined in

[in/packages/animate/src/Animate.ts:82](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L82)

___

### easingFn

• `Protected` **easingFn**: [`IFunction`](../interfaces/IFunction.md)

#### Defined in

[in/packages/animate/src/Animate.ts:84](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L84)

___

### requestAnimateTime

• `Protected` **requestAnimateTime**: `number`

#### Defined in

[in/packages/animate/src/Animate.ts:86](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L86)

___

### playedTotalTime

• `Protected` **playedTotalTime**: `number`

#### Defined in

[in/packages/animate/src/Animate.ts:87](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L87)

___

### mainReverse

• `Protected` **mainReverse**: `boolean`

#### Defined in

[in/packages/animate/src/Animate.ts:90](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L90)

___

### timer

• `Protected` **timer**: `any`

#### Defined in

[in/packages/animate/src/Animate.ts:91](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L91)

___

### attrsMap

• `Protected` **attrsMap**: [`IBooleanMap`](../interfaces/IBooleanMap.md)

#### Defined in

[in/packages/animate/src/Animate.ts:92](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L92)

___

### innerId

• `Readonly` **innerId**: `number`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[innerId](../interfaces/IAnimate.md#innerid)

#### Inherited from

[Eventer](Eventer.md).[innerId](Eventer.md#innerid)

#### Defined in

[leafer/packages/event/src/Eventer.ts:9](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L9)

___

### \_\_captureMap

• `Optional` **\_\_captureMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__captureMap](../interfaces/IAnimate.md#__capturemap)

#### Inherited from

[Eventer](Eventer.md).[__captureMap](Eventer.md#__capturemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:11](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L11)

___

### \_\_bubbleMap

• `Optional` **\_\_bubbleMap**: [`IEventListenerMap`](../interfaces/IEventListenerMap.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[__bubbleMap](../interfaces/IAnimate.md#__bubblemap)

#### Inherited from

[Eventer](Eventer.md).[__bubbleMap](Eventer.md#__bubblemap)

#### Defined in

[leafer/packages/event/src/Eventer.ts:13](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L13)

___

### syncEventer

• `Optional` **syncEventer**: [`IEventer`](../interfaces/IEventer.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[syncEventer](../interfaces/IAnimate.md#synceventer)

#### Inherited from

[Eventer](Eventer.md).[syncEventer](Eventer.md#synceventer)

#### Defined in

[leafer/packages/event/src/Eventer.ts:15](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L15)

## Accessors

### endingStyle

• `get` **endingStyle**(): [`IUIInputData`](../interfaces/IUIInputData.md)

#### Returns

[`IUIInputData`](../interfaces/IUIInputData.md)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[endingStyle](../interfaces/IAnimate.md#endingstyle)

#### Defined in

[in/packages/animate/src/Animate.ts:22](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L22)

___

### started

• `get` **started**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[started](../interfaces/IAnimate.md#started)

#### Defined in

[in/packages/animate/src/Animate.ts:24](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L24)

___

### completed

• `get` **completed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[completed](../interfaces/IAnimate.md#completed)

#### Defined in

[in/packages/animate/src/Animate.ts:26](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L26)

___

### frame

• `Protected` `get` **frame**(): [`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Returns

[`IComputedKeyframe`](../interfaces/IComputedKeyframe.md)

#### Defined in

[in/packages/animate/src/Animate.ts:79](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L79)

___

### frameTotalTime

• `Protected` `get` **frameTotalTime**(): `number`

#### Returns

`number`

#### Defined in

[in/packages/animate/src/Animate.ts:80](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L80)

___

### nowReverse

• `get` **nowReverse**(): `boolean`

#### Returns

`boolean`

#### Defined in

[in/packages/animate/src/Animate.ts:89](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L89)

___

### realEnding

• `get` **realEnding**(): [`IAnimateEnding`](../modules.md#ianimateending)

#### Returns

[`IAnimateEnding`](../modules.md#ianimateending)

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[realEnding](../interfaces/IAnimate.md#realending)

#### Defined in

[in/packages/animate/src/Animate.ts:94](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L94)

___

### event

• `set` **event**(`map`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `map` | [`IEventMap`](../interfaces/IEventMap.md) |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[event](../interfaces/IAnimate.md#event)

#### Inherited from

Eventer.event

#### Defined in

[leafer/packages/event/src/Eventer.ts:17](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L17)

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

[IAnimate](../interfaces/IAnimate.md).[init](../interfaces/IAnimate.md#init)

#### Defined in

[in/packages/animate/src/Animate.ts:116](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L116)

___

### play

▸ **play**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[play](../interfaces/IAnimate.md#play)

#### Defined in

[in/packages/animate/src/Animate.ts:140](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L140)

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[pause](../interfaces/IAnimate.md#pause)

#### Defined in

[in/packages/animate/src/Animate.ts:149](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L149)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[stop](../interfaces/IAnimate.md#stop)

#### Defined in

[in/packages/animate/src/Animate.ts:157](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L157)

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

[IAnimate](../interfaces/IAnimate.md).[seek](../interfaces/IAnimate.md#seek)

#### Defined in

[in/packages/animate/src/Animate.ts:164](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L164)

___

### kill

▸ **kill**(`complete?`, `killStyle?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `complete` | `boolean` | `true` |
| `killStyle?` | [`IUIInputData`](../interfaces/IUIInputData.md) | `undefined` |

#### Returns

`void`

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[kill](../interfaces/IAnimate.md#kill)

#### Defined in

[in/packages/animate/src/Animate.ts:178](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L178)

___

### create

▸ `Protected` **create**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:184](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L184)

___

### changeDuration

▸ **changeDuration**(`duration`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration` | `number` |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:248](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L248)

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

#### Defined in

[in/packages/animate/src/Animate.ts:253](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L253)

___

### allocateTime

▸ **allocateTime**(`partTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `partTime` | `number` |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:262](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L262)

___

### requestAnimate

▸ `Protected` **requestAnimate**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:275](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L275)

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

#### Defined in

[in/packages/animate/src/Animate.ts:280](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L280)

___

### start

▸ `Protected` **start**(`seek?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seek?` | `boolean` |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:341](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L341)

___

### begin

▸ `Protected` **begin**(`seek?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seek?` | `boolean` |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:359](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L359)

___

### end

▸ `Protected` **end**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:365](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L365)

___

### complete

▸ `Protected` **complete**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:369](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L369)

___

### setFrom

▸ `Protected` **setFrom**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:383](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L383)

___

### setTo

▸ `Protected` **setTo**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:388](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L388)

___

### nextFrame

▸ `Protected` **nextFrame**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:394](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L394)

___

### reverseNextFrame

▸ `Protected` **reverseNextFrame**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:401](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L401)

___

### transition

▸ `Protected` **transition**(`t`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `t` | `number` |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:408](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L408)

___

### setStyle

▸ **setStyle**(`style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `style` | [`IObject`](../interfaces/IObject.md) |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:437](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L437)

___

### increaseTime

▸ `Protected` **increaseTime**(): `void`

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:446](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L446)

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

#### Defined in

[in/packages/animate/src/Animate.ts:450](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L450)

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

#### Defined in

[in/packages/animate/src/Animate.ts:454](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L454)

___

### needLoopFrame

▸ `Protected` **needLoopFrame**(): `boolean`

#### Returns

`boolean`

#### Defined in

[in/packages/animate/src/Animate.ts:458](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L458)

___

### clearTimer

▸ `Protected` **clearTimer**(`fn?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn?` | [`IFunction`](../interfaces/IFunction.md) |

#### Returns

`void`

#### Defined in

[in/packages/animate/src/Animate.ts:470](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L470)

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

[IAnimate](../interfaces/IAnimate.md).[destroy](../interfaces/IAnimate.md#destroy)

#### Overrides

[Eventer](Eventer.md).[destroy](Eventer.md#destroy)

#### Defined in

[in/packages/animate/src/Animate.ts:478](https://github.com/leaferjs/leafer-in/blob/daed4bb/packages/animate/src/Animate.ts#L478)

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

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[on](../interfaces/IAnimate.md#on)

#### Inherited from

[Eventer](Eventer.md).[on](Eventer.md#on)

#### Defined in

[leafer/packages/event/src/Eventer.ts:20](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L20)

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

[IAnimate](../interfaces/IAnimate.md).[off](../interfaces/IAnimate.md#off)

#### Inherited from

[Eventer](Eventer.md).[off](Eventer.md#off)

#### Defined in

[leafer/packages/event/src/Eventer.ts:57](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L57)

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

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[on_](../interfaces/IAnimate.md#on_)

#### Inherited from

[Eventer](Eventer.md).[on_](Eventer.md#on_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:100](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L100)

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

[IAnimate](../interfaces/IAnimate.md).[off_](../interfaces/IAnimate.md#off_)

#### Inherited from

[Eventer](Eventer.md).[off_](Eventer.md#off_)

#### Defined in

[leafer/packages/event/src/Eventer.ts:106](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L106)

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

#### Implementation of

[IAnimate](../interfaces/IAnimate.md).[once](../interfaces/IAnimate.md#once)

#### Inherited from

[Eventer](Eventer.md).[once](Eventer.md#once)

#### Defined in

[leafer/packages/event/src/Eventer.ts:113](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L113)

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

[IAnimate](../interfaces/IAnimate.md).[emit](../interfaces/IAnimate.md#emit)

#### Inherited from

[Eventer](Eventer.md).[emit](Eventer.md#emit)

#### Defined in

[leafer/packages/event/src/Eventer.ts:117](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L117)

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

[IAnimate](../interfaces/IAnimate.md).[emitEvent](../interfaces/IAnimate.md#emitevent)

#### Inherited from

[Eventer](Eventer.md).[emitEvent](Eventer.md#emitevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:139](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L139)

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

[IAnimate](../interfaces/IAnimate.md).[hasEvent](../interfaces/IAnimate.md#hasevent)

#### Inherited from

[Eventer](Eventer.md).[hasEvent](Eventer.md#hasevent)

#### Defined in

[leafer/packages/event/src/Eventer.ts:144](https://github.com/leaferjs/leafer/blob/a596007/packages/event/src/Eventer.ts#L144)
