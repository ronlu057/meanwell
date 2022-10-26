<script setup>
  import TwHeader from './components/tw_header.vue'
  import TwFooter from './components/tw_footer.vue'
</script>

<template>
  <div class="page_main">
    <TwHeader />
    <RouterView />
    <TwFooter />
  </div>
</template>

<style>

</style>