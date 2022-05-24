<script setup>
import { toDisplayString as ts } from 'vue'

const log = window.console.log
const mouse = useMouse()

const total = computed(() => {
  return mouse.x.value + mouse.y.value
})

const totals = computed(() => {
  return (base) => {
    return mouse.x.value + mouse.y.value + base
  }
})
const son = defineComponent({
  name: 'Son',
  props: {
    name: {
      type: String,
      default: 'bunsen',
    },
    age: {
      type: Number,
      default: 33,
    },
  },
  emits: ['emi'],
  setup(props, ctx) {
    return () => {
      // composition api style
      const onClick = () => {
        log('it clicked')
      }
      return h('h1',
        {
          style: {
            background: 'green',
            margin: '10px',
            padding: '10px',
          },
          onClick,
        }, [
      `x: ${ts(mouse.x)}, y: ${ts(mouse.y)}`,
      `, sum:${ts(totals.value(10000))}`,
      h('h2', `${props.name}:${props.age}`),
        ])
    }
  },
  mounted() {
    log('custom component mounted')
  },
  methods: {
    // options api style code
    show() {
      log('show')
    },
  },
})

const bind = {
  age: 44,
  name: 'test',
}
</script>

<template>
  <h1>mouse point x:{{ mouse.x }}, y:{{ mouse.y }}</h1>
  <son :age="22" name="bunnnn" />
  <component :is="son" :age="30" name="component" />
  <component :is="son" v-bind="bind" />
  <h2>{{ total }}</h2>
  <h3>{{ totals(10000) }}</h3>
</template>
