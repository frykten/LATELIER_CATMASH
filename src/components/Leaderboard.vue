<template lang="html">
  <div id="leaderboard">

    <h3 id="leaderboard-title">Leaderboard</h3>

    <section id="leaderboard-list">

      <div class="leaderboard-line" id="leaderboard-headers">
        <p class="header-rank cat-rank grid-case">Ranking</p>
        <p class="header-name cat-name grid-case">Name or Id</p>
        <p class="header-points cat-points grid-case">Points</p>
      </div>

      <div class="leaderboard-line" v-for="(cat, index) in catList">
        <p class="cat-rank grid-case">{{index + 1}}</p>
        <p class="cat-name grid-case">{{cat.id}}</p>
        <p class="cat-points grid-case"><span>{{cat.elo_points}}</span></p>
      </div>

    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      catList: null,
    }
  },
  created: function () {
    this.getList ()
  },
  methods: {
    getList () {
      axios({
        methods: 'get',
        url: 'http://localhost:3001/list-of-cats'
      }).then((res) => {
        this.catList = res.data.sort(function(a, b){return a - b})
      }).catch((err) => {
        console.warn(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #leaderboard {
/*    background: red;*/
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 17.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100vw;
  }

  #leaderboard-title {
    margin-bottom: 2.5rem;
  }

  #leaderboard-list {
    display: grid;
    grid-template-columns: 1fr;
    width: 60vw;
  }

  .leaderboard-line {
    background: hsl(84, 20%, 92%);
    box-shadow: 1px 2px 5px rgba(20, 20, 20, .5);
    display: grid;
    grid-column: 1fr;
    grid-template-columns: 20% 50% 30%;
    grid-template-rows: 2rem;
  }

  .leaderboard-line:nth-child(2n) {
    background: hsl(36, 29%, 86%);
  }

  .grid-case {
    align-items: center;
    display: flex;
    grid-column: 1fr;
    justify-content: center;
    margin: 0;
  }
  
  .cat-rank {
    font-weight: bold;
  }
  
  .cat-points {
    font-style: italic;
  }
</style>
