<template>
  <div>
    <div :style="styleObject">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. A incidunt doloremque commodi porro,
      qui quo deserunt mollitia earum ipsam temporibus! Consequuntur ut laboriosam possimus id
      officiis suscipit odit ex libero?
    </div>
    <button v-on:click="fontSize--">-</button>
    <button v-on:click="fontSize++">+</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px'
    // })
    const fontSize = ref(13)
    const styleObject = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px'
      }
    })
    return { styleObject, fontSize }
  }
}
</script>

<style lang="scss" scoped></style>
