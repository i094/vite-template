import { createStore } from "vuex";
 
const Store = createStore({
  modules: {
    home: {
      namespaced: true,
      state: {
        count: 1
      },
      mutations: {
        add(state) {
          state.count++;
        }
      }
    }
  }
})
 
export default Store;