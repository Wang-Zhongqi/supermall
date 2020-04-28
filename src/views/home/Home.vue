<template>
  <div class="page">
    <h1>{{ this.$store.state.counter }}</h1>
    <h1>{{ this.$store.getters.powerCounter }}</h1>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="add(5)">+5</button>
    <button @click="miao">妙</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {};
  },
  methods: {
    addition() {
      console.log('add');
      this.$store.commit({
        type:'increment',
        count:1,
      });
    },
    subtraction() {
       console.log('add');
      this.$store.commit("decrement",1);
    },
    add(state){
      this.$store.commit({
        type:'increment',
        count:5,
      });
    },
    miao(){
      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(ojbk=>{console.log(ojbk)})
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
