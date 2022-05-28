<script setup>
const modules = import.meta.globEager('../imgs/**/*.jpg')
const gallery = ref([])
const mainImg = ref(null)
for (const v in modules) {
  const url = new URL(v, import.meta.url)
  if (mainImg.value === null)
    mainImg.value = url.href

  gallery.value.push(url)
}
const loopLen = 10
const colddown = ref(loopLen)
const on = ref(0)
const select = (i) => {
  mainImg.value = gallery.value[i].href
  on.value = i
  colddown.value = loopLen
}
const isOn = computed(() => {
  return (i) => {
    return i === on.value ? 'on' : ''
  }
})
const length = gallery.value.length
const previous = () => {
  select((on.value + length - 1) % length)
}
const next = () => {
  select((on.value + length + 1) % length)
}
const { ArrowLeft, ArrowRight, Space } = useMagicKeys()
watchEffect(() => {
  if (ArrowLeft.value)
    previous()

  if (ArrowRight.value || Space.value)
    next()
})
const { pause, resume, isActive } = useIntervalFn(() => {
  colddown.value = (colddown.value + loopLen - 1) % loopLen
  if (colddown.value === 0)
    next()
}, 1000)
</script>

<template>
  <section>
    <div class="main">
      <img :src="mainImg" alt="">
    </div>
    <div class="colddown">
      {{ colddown }}
    </div>
    <div class="control">
      <button :class="{ on: !isActive }" @click="pause()">
        pause
      </button>
      <button :class="{ on: isActive }" @click="resume()">
        resume
      </button>
    </div>
    <ul class="list">
      <li v-for="(g, i) in gallery" :key="g.pathname" :class="isOn(i)">
        <img :src="g.href" alt="" @click="select(i)">
      </li>
    </ul>
  </section>
</template>

<style scoped>
.main{
  padding: 50px;
    height: 600px;
    display: flex;
    justify-content: center;

  }
  .main > img {
    height: 100%;
    box-shadow: 0 0 0 10px #32e0c4,
    0 0 0 30px white,
    -40px -40px #ff9595,
    40px 40px #ff9595;
  }
  .list{
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ul.list > li, ul.list > li > img{
    height: 200px;
  }
  ul.list > li{
    margin: 5px;
  }

  ul.list > li:active,ul.list > li.on{
    box-shadow: 0 0 0 6px #32e0c4;
  }

  .colddown{
    text-align: center;
    font-size: 120px;
    font-weight: 900;
    color: #ff9595;
  }

  .control{
    display: flex;
    justify-content: center;
  }

  .control > button{
    display: block;
    margin: 10px 20px;
    padding: 10px;
    background: #32e0c4;
    border-radius: 10px;
    color: white;
  }

  .control > button:active, .control > button.on{
    box-shadow:0 0 0 4px #4bfadc;
  }
</style>
