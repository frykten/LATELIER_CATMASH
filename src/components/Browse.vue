/* eslint-disable */
<template lang="html">
  <div id="browse">
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
    this.getList()
    
    EventBus.$on('get-new-cats', (catWhoWon) => {
      let winnerCat = catWhoWon, loserCat;
      
      if (winnerCat == this.catLeft) {
        loserCat = this.catRight
      }
      else {
        loserCat = this.catLeft
      }

      this.updateCatsDatabase(winnerCat, loserCat)
      
      this.getList()
    });
  },
  methods: {
    getList () {
      axios({
        methods: 'get',
        url: 'http://localhost:3001/two-cats'
      }).then((res) => {
        this.storeCats(res)
      }).catch((err) => {
        console.warn(err)
      })
    },
    storeCats (res) {
      this.catLeft = res.data[0]
      this.catRight = res.data[1]
      
      this.emitCatsToPanels();
    },
    emitCatsToPanels () {
      EventBus.$emit('send-cat-left', this.catLeft);
      EventBus.$emit('send-cat-right', this.catRight);
    },
    updateCatsDatabase (winnerCat, loserCat) {
      // Processing the new ranking of the winner before sending to DB
      this.processCat(
        winnerCat.id,
        this.getNewPointsWinner(
          winnerCat.elo_points,
          this.calcProbability(
            loserCat.elo_points,
            winnerCat.elo_points
          )
        )
      )
      
      // Processing the new ranking of the loser before sending to DB
      this.processCat(
        loserCat.id,
        this.getNewPointsLoser(
          loserCat.elo_points,
          this.calcProbability(
            winnerCat.elo_points,
            loserCat.elo_points
          )
        )
      )
    },
    processCat(catId, catNewRanking) {
      axios.patch('http://localhost:3001/update-cat-points',
        {
          catEloPoints: catNewRanking,
          catId: catId
        }
      ).catch((err) => {
        console.warn(err)
      })
    },
    calcProbability(ratingA, ratingB) {
      return 1 * 1 / (1 + 1 * Math.pow(10, (ratingA - ratingB) / 400))
    },
    getNewPointsWinner(ratingWinner, pWinner) {
      return ratingWinner + 40 * (1 - pWinner)
    },
    getNewPointsLoser(ratingLoser, pLoser) {
      return ratingLoser + 40 * (0 - pLoser)
    }
  }
}
</script>

<style lang="scss" scoped>
  #versus, button {
    font-size: 4rem;
    left: calc(50vw - 52px);
    position: absolute;
    top: calc(50vh - 2rem);
    cursor: default;
    z-index: 2;
  }
</style>
