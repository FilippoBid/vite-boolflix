<script>
import{store} from "./store";
import TheNavbarVue from './components/TheNavbar.vue';
import TvBodyVue from './components/TvBody.vue';
export default {
  components:{TheNavbarVue,TvBodyVue},
  data() {
    return {
    store ,
    }
  }
}
</script>


<template>
  <TheNavbarVue></TheNavbarVue>
</template>



<style lang="scss">
@use "../src/style/general.scss"
</style>
