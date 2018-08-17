<template lang="html">
  <div id="main">
  	<nav-bar></nav-bar>
  	<bot-bar></bot-bar>
  	<left-panel></left-panel>
  	<right-panel></right-panel>
  </div>
</template>

<script>
import NavBar from '@/components/Main_Components/NavBar'
import BotBar from '@/components/Main_Components/BottomBar'
import LeftPanel from '@/components/Main_Components/LeftPanel'
import RightPanel from '@/components/Main_Components/RightPanel'

export default {
  components: {
    NavBar,
    BotBar,
    LeftPanel,
    RightPanel
  }
}
</script>

<style lang="scss" scoped>
</style>
