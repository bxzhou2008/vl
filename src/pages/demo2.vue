<script setup>
import Vanilla from 'vanilla-tilt'
onMounted(() => {
  Vanilla.init(document.querySelectorAll('.card'), {
    'max': 25,
    'speed': 400,
    'glare': true,
    'max-glare': 0.8,
  })
})
const on = ref(2)
const isOn = computed(() => {
  return (i) => {
    return i === on.value ? 'on' : ''
  }
})
const enter = (i) => {
  on.value = i
}
</script>

<template>
  <div class="page" w="100%" h="100%" bg-gray-5>
    <div class="panel" w="100%" h="100%" flex="~ gap-2 wrap" justify-center items-center overflow-auto>
      <div class="card" :class="isOn(1)" @mouseenter="enter(1)">
        <div class="content">
          <h1>Card One</h1>
          <h2>01</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, corrupti illo hic officia minus necessitatibus veniam voluptatibus magnam debitis sed!</p>
          <a>Read More</a>
        </div>
      </div>
      <div class="card" :class="isOn(2)" @mouseenter="enter(2)">
        <div class="content">
          <h1>Card Two</h1>
          <h2>02</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto recusandae praesentium placeat aliquid debitis hic et accusamus dolor repellendus. Soluta.</p>
          <a>Read More</a>
        </div>
      </div>
      <div class="card" :class="isOn(3)" @mouseenter="enter(3)">
        <div class="content">
          <h1>Card Three</h1>
          <h2>03</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequatur necessitatibus velit facere quidem sunt in illum quasi tempora minus.</p>
          <a>Read More</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page{
  position:relative;
  display: flex;
  flex-direction: column;
  &::before{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(45deg,red,blue);
    clip-path: circle(30% at 10% 20%);
  }

  &::after{
    content: "";
    position:absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background:linear-gradient(45deg,red,blue);
    clip-path: circle(20% at 90% 70%);
  }
}

.panel{
  position:relative;
  z-index: 1;
}
.card{
  width: 280px;
  height: 400px;
  background: rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 10px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  backdrop-filter: blur(5px);
  position:relative;
  opacity: 0;

  &:hover, &.on{
    opacity: 1;
    .content{
      transform: translateY(0);
    }
  }

  .content{
    position:relative;
    height: 100%;
    width: 100%;
    transform: translateY(60px);
    transition: 0.5s;
  }

  h1{
    margin-top: 80px;
    font-size:40px;
    font-weight: 900;
    line-height: 40px;
    height: 40px;
    white-space: nowrap;
  }
  p{
    font-size:16px;
    padding: 20px;
    height: calc(100% - 210px);
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 20px;
  }

  a{
    height: 60px;
    line-height: 60px;
    font-size: 20px;
    display: block;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50px;
    margin: 0 20px;
    cursor: pointer;
  }
  h2{
    position: absolute;
    right: 0;
    top: -20px;
    font-size: 70px;
    font-weight: 900;
    opacity: 0.3;
  }
}
</style>
