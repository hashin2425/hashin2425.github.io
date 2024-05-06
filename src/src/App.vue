<template>
  <Header></Header>
  <Main></Main>
  <Footer></Footer>
</template>

<script>
import Header from './sections/Header.vue'
import Main from './sections/Main.vue'
import Footer from './sections/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
html {
  margin: 0;
  padding: 0;
  width: 100%;
  background-color: #f5f5f5;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;

  font-family: 'Noto Sans JP', sans-serif;
  color: #404040;
}
</style>
