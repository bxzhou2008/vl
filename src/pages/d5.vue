<script setup>
const n = ref(0)
const n1 = ref('A')
const n2 = ref('a')
const isEnd = ref(true)
const { Space, Enter } = useMagicKeys()
const speakNum = ref(true)
const step = ref(1)
onMounted(() => {
  window.speechSynthesis.cancel()
  const u = new window.SpeechSynthesisUtterance(speakNum.value ? n.value : n2.value)
  window.speechSynthesis.speak(u)
})

watchEffect(() => {
  if (Space.value && isEnd.value) {
    isEnd.value = false
    const nValue = n.value + step.value
    const offset = (26 + nValue) % 26
    n1.value = String.fromCharCode(65 + offset)
    n2.value = String.fromCharCode(97 + offset)
    const u = new window.SpeechSynthesisUtterance(speakNum.value ? nValue : n2.value)
    u.volume = 1
    u.rate = 1
    u.onend = () => {
      isEnd.value = true
    }
    window.speechSynthesis.speak(u)
    n.value = nValue
  }
})

const word = ref('')
const translate = () => {
  const u = new window.SpeechSynthesisUtterance(word.value)
  window.speechSynthesis.speak(u)
}

watchEffect(() => {
  if (Enter.value)
    translate()
})
</script>

<template>
  <h1 w="100%" h="100%" text-9xl flex flex-col justify-center items-center color-red font-black>
    <div flex>
      <input v-model="word" border-1 color-green placeholder="word" type="text">
      <button i-mdi-vuejs w-40 h-40 @click="translate" />
    </div>
    <div>
      <div>
        {{ n }}
      </div>
      <div p-4>
        <span>{{ n1 }}</span>
        <span text-6xl>{{ n2 }}</span>
      </div>
    </div>
    <div flex flex-row justify-center items-center>
      <div m-4 b-2 border-green p-10 rounded-3xl @click="step--">
        -
      </div>
      <div text-blue m-4>
        {{ step }}
      </div>
      <div m-4 b-2 border-green p-10 rounded-3xl @click="step++">
        +
      </div>
      <div m-4 b-2 border-green p-10 rounded-3xl @click="speakNum = !speakNum">
        {{ speakNum ? 'Number' : 'Letter' }}
      </div>
    </div>
  </h1>
</template>

<style scoped>
*{
  user-select: none;
}
</style>
