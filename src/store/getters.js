export default { //相当于计算属性
    powerCounter(state) {
        return state.counter * state.counter;
    }
}