import { Plugin } from 'vue'
import { Flip } from 'gsap/Flip'

const _stateByIds: { [id: string]: Flip.FlipState } = {}

export default {
  install: (app) => {
    /**
     * v-gsap-flip-id="共通のID" という属性で指定したオブジェクト同士が Flip するようになる。
     */
    app.directive('gsap-flip-id', {
      /**
       * アイテムが消えた場合に状態を覚えておく。
       */
      beforeUnmount: function (el, binding) {
        const id: string = binding.value
        _stateByIds[id] = Flip.getState(el)
        console.log('Flip beforeUnmount', el.id)
      },
      /**
       * アイテムがマウントされる前に data-flip-id という gsap/Flip 標準でオブジェクト同士が同一であることを示す属性を追加しておく。
       */
      beforeMount: function (el, binding) {
        console.log('Flip beforeMount', el.id)
        el.setAttribute('data-flip-id', binding.value)
      },
      /**
       * マウントされたらFlipを実行。
       */
      mounted: function (el, binding) {
        const id = binding.value
        // 前回の状態を取得
        const oldState = _stateByIds[id]
        // console.log('mount new=', el.id, 'old=', oldState ? oldState.targets[0].id : null)
        if (oldState) {
          // Flip
          Flip.from(oldState, {
            targets: el,
            duration: 1,
            ease: 'power4.inOut',
            scale: true,
          })
        }
      },
    })
  }
} as Plugin
