<template>
  <div id="app">
<!--    <img src="./assets/cat_logo.png">-->
    <router-view/>
    <nav-bar></nav-bar>
  	<bot-bar></bot-bar>
  	<left-panel></left-panel>
  	<div id="middle-bar"></div>
  	<right-panel></right-panel>
  </div>
</template>

<script>
import NavBar from '@/components/Main_Components/NavBar'
import BotBar from '@/components/Main_Components/BottomBar'
import LeftPanel from '@/components/Main_Components/LeftPanel'
import RightPanel from '@/components/Main_Components/RightPanel'

export default {
  name: 'App',
  components: {
    NavBar,
    BotBar,
    LeftPanel,
    RightPanel
  }
}
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    color: #446974;
    font-family: 'Roboto', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 1.25rem;
    margin-top: 60px;
    text-align: center;
    width: 100vw;
  }

  a {
    color: #446974;
    text-decoration: none;
    outline: none;
  }
  
  #middle-bar {
    background: rgba(20, 20, 20, 0.05);
    position: fixed;
    top: 0;
    left: calc(50% - .5rem);
    height: 100vh;
    width: 1rem;
    z-index:: -9;
  }
</style>
