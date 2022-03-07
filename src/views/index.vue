<script setup>
import { ref, reactive, onMounted } from "vue";
import common from "@/api/common/index";

import * as echarts from 'echarts';

const state = reactive({ count: 0 })

const getUrls = async() =>{
    const res = await common.area()
    console.log(res)
}

const styleObject = reactive({
  width: '300px',
  height: '100px'
})
onMounted(() => { 
    getUrls()

    // echarts使用
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
})

const books = reactive([ref('Vue 3 Guide')])
// 这里需要 .value
console.log(books[0].value)

const map = reactive(new Map([['count', ref(0)]]))
// 这里需要 .value
console.log(map.get('count').value)


import TodoItem from '@/components/TodoItem.vue'
  
const newTodoText = ref('')
const todos = ref([
  {
    id: 1,
    title: 'Do the dishes'
  },
  {
    id: 2,
    title: 'Take out the trash'
  },
  {
    id: 3,
    title: 'Mow the lawn'
  }
])

let nextTodoId = 4

function addNewTodo() {
  todos.value.push({
    id: nextTodoId++,
    title: newTodoText.value
  })
  newTodoText.value = ''
}

</script>

<template>
  {{state.count}}


  <form v-on:submit.prevent="addNewTodo">
    <label for="new-todo">Add a todo</label>
    <input
      v-model="newTodoText"
      id="new-todo"
      placeholder="E.g. Feed the cat"
    />
    <button>Add</button>
  </form>
  <ul>
    <TodoItem
      v-for="(todo, index) in todos"
      :key="todo.id"
      :id="todo.id"
      :title="todo.title"
      @remove="todos.splice(index, 1)">
    </TodoItem>
  </ul>

  <div id="main" :style="styleObject"></div>
</template>

<style scoped>

</style>
