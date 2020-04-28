export default { //指定修改数据方法
    increment(state, payload) {
        state.counter += payload.count;
    },
    decrement(state, load) {
        state.counter -= load;
    }
}

