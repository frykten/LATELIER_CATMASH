/* eslint-disable */
<template lang="html">
  <div id="leaderboard">

    <h3 id="leaderboard-title">Leaderboard</h3>

    <section id="leaderboard-list">

      <div class="leaderboard-line" id="leaderboard-headers">
        <p class="header-rank cat-rank grid-case">Ranking</p>
        <p class="header-name cat-name grid-case">Name or Id</p>
        <p class="header-img cat-img grid-case">Picture</p>
        <p class="header-points cat-points grid-case">Points</p>
      </div>

      <div class="leaderboard-line" v-for="(cat, index) in catList">
        <p class="cat-rank grid-case">{{index + 1}}</p>
        <p class="cat-name grid-case">{{cat.id}}</p>
        <div class="cat-img-container grid-case">
          <img :src="cat.url" alt="" class="cat-img-container grid-case">
        </div>
        <p class="cat-points grid-case">
          <span>{{cat.elo_points}}</span>
        </p>
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
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 15.5rem;
    padding-bottom: 12.5rem;
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
  }

  .leaderboard-line {
    box-shadow: 1px 2px 5px rgba(20, 20, 20, .5);
    display: grid;
    grid-column: 1fr;
    grid-template-columns: 15% 45% 20% 20%;
    grid-template-rows: 4rem;
    width: 50vw;
  }

  .leaderboard-line:nth-child(even) {
    background: hsl(36, 29%, 86%);
  }

  .leaderboard-line:nth-child(odd) {
    background: hsl(84, 20%, 92%);
  }

  .leaderboard-line:first-child {
    background: hsl(187, 20%, 92%);
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
  
  .cat-img-container {
    max-height: 100%;
  }
  
  .cat-points {
    font-style: italic;
  }
</style>
