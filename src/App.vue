<script>
import{store,getExternalData} from "./store";
import TheNavbarVue from './components/TheNavbar.vue';
import TvBodyVue from './components/TvBody.vue';
import SingleCardLayout from "./components/SingleCardLayout.vue";
export default {
  components:{TheNavbarVue,TvBodyVue,SingleCardLayout},
  data() {
    return {
    store ,
    }
  },
  methods:{
    getExternalData,

    eseguiRicerca(){
      getExternalData()

    }
  }
}
</script>


<template>
  <!-- @makeEmit="eseguiRicerca()" -->
  <TheNavbarVue></TheNavbarVue>
  <div class="row">
    <TvBodyVue class="col col-6"></TvBodyVue>

  </div>
</template>



<style lang="scss">
@use "../src/style/general.scss"
</style>
