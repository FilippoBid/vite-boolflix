<script>
import{store,getExternalData} from "./store";
import TheNavbarVue from './components/TheNavbar.vue';
import TvBodyVue from './components/TvBody.vue';
import SingleCardLayout from "./components/SingleCardLayout.vue";
import SeriesBody from "./components/SeriesBody.vue";
export default {
  components:{TheNavbarVue,TvBodyVue,SingleCardLayout,SeriesBody},
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
  <div class="row ">
    <TvBodyVue class="col col-6 movie-bg-color p-4"></TvBodyVue>
    <SeriesBody class="col col-6 series-bg-color p-4"></SeriesBody>

  </div>
</template>



<style lang="scss">
@use "../src/style/general.scss"
</style>
