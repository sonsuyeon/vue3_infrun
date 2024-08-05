<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음O' : '없음 x' }}</p> -->
    <p>{{ hasLectur }}</p>
    <p>{{ existLectuer() }}</p>
    <!-- 메서드이기 때문에 ()를 넣어주어야함 -->
    <button v-on:click="counter++">Counter : {{ counter }}</button>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
export default {
  setup() {
    const teacher = reactive({
      name: '손수연',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3']
    })
    const hasLectur = computed(() => {
      console.log('computed')
      return teacher.lectures.length > 0 ? '있음O' : '없음 x'
    })
    const existLectuer = () => {
      console.log('method')
      return teacher.lectures.length > 0 ? '있음O' : '없음 X'
    }
    const counter = ref(0)

    const firstName = ref('홍')
    const lastName = ref('길동')
    // const fullName = computed(() => firstName.value + ' ' + lastName.value)
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        ;[firstName.value, lastName.value] = value.split(' ')
      }
    })

    console.log('Console 출력: ' + fullName.value)
    fullName.value = '손 수연'
    return {
      teacher,
      hasLectur,
      existLectuer,
      counter,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped></style>
