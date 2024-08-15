<template>
  <div>
    <div id="modifiers">
      <div @click="clickDiv">
        Div 영역
        <p @click="clickP">
          p 영역
          <span @click.stop="clickSpan"> SPAN 영역</span>
        </p>
        <a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
      </div>
    </div>
    <button @click.once="clickDiv">once</button>
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv')
      // location.href = 'https://naver.com'
    }
    const clickP = () => {
      console.log('clickP')
    }
    const clickSpan = () => {
      console.log('clickSpan')
      //e.stopPropagation()
      alert('좋아요')
    }
    const clickA = () => {
      // e.preventDefault()
      alert('어떤 기능~')
    }
    return { clickDiv, clickP, clickSpan, clickA }
  }
}
</script>

<style lang="scss" scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;
}
#modifiers div {
  background-color: #ccc;
}
#modifiers p {
  background-color: #999;
}
#modifiers span {
  background-color: #666;
  display: block;
}
</style>
