<template lang="html">
  <div id="browse">
    <button @click="click()">Click me</button>
    <button @click="clickList()">Change list</button>
    <h2 id="versus">VS.</h2>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '../eventBus.js';

export default {
  data () {
    return {
      catLeft: null,
      catRight: null,
    }
  },
  created: function () {
    this.getList ()
  },
  methods: {
    getList () {
      axios({
        methods: 'get',
        url: 'http://localhost:3001/two-cats'
      }).then((res) => {
        this.catLeft = res.data[0]
        this.catRight = res.data[1]
      }).catch((err) => {
        console.warn(err)
      })
    },
    click () {
      console.log("From browsing: left cat is "+this.catLeft.id)
      console.log("From browsing: right cat is "+this.catRight.id)
      EventBus.$emit('send-cat-left', this.catLeft);
      EventBus.$emit('send-cat-right', this.catRight);
    },
    clickList () {
      this.getList()
    }
  }
}
</script>

<style lang="scss" scoped>
/*
  #browse {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    width: 100vw;
    z-index: -20;
  }
*/
  
  #browse * {
    position: relative;
    z-index: 20;
    text-align: center;
  }
</style>
