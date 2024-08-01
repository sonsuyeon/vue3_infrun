<template>
  <div>
    <button v-on:click="incrment">Click {{ state.count }}</button>
    <button v-on:click="incrment">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
/* 반응형 기초 */
import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      count: 0,
      deep: {
        count: 0
      }
    })
    const incrment = () => {
      state.count++
      state.deep.count++
    }

    return {
      state,
      incrment
    }
  }
}
</script>

<style lang="scss" scoped></style>
