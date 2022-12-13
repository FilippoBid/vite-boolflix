<script>
import SingleCardLayout from './SingleCardLayout.vue';
import { store } from '../store';
export default {
    components:{SingleCardLayout},
  data() {
    return {
     store,
    }
  }
}
</script>


<template>
    <div class="row row-cols-sm-1 row-col-m-3 row-col-lg-5">
        <SingleCardLayout></SingleCardLayout>

    </div>
   
</template>



<style>

</style>