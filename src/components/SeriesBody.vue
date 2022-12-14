<script>
import SingleCardLayout from './SingleCardLayout.vue';
import { store } from '../store';
export default {
  components: { SingleCardLayout },
  data() {
    return {
      store,
    }
  }
}
</script>


<template>
  <div class="row row-cols-2 g-3 mt-0">

    <div class="col" v-for="(film, index) in store.ExternalDataTvSeries" :key="index">

      <SingleCardLayout :film="film"></SingleCardLayout>

    </div>

  </div>

</template>



<style>

</style>