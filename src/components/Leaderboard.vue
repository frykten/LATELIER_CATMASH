<template lang="html">
  <div>
    blank component
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      tshirts: null,
      tshirtsFiltered: null,
      counter: 0
    }
  },
  created: function () {
    this.getList ()
    console.log(this.filters)
  },
  methods: {
    getList () {
      axios({
        methods: 'get',
        url: 'http://localhost:3001/list-of-cats'
      }).then((res) => {
        this.tshirts = res.data
      }).catch((err) => {
        console.warn(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
