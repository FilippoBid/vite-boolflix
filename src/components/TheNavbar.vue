<script>
import{store,getExternalData,getExternalDataTvSeries} from "../store";

export default {

  data() {
    return {
        store,
     
    }
  },
  methods:{
    getExternalData,
    getExternalDataTvSeries,
    makeEmit(){
      this.$emit 

    },
  }
}
</script>


<template>
  
  <div class="d-flex flex-column justify-content-center align-items-center red-bg">

    <img src="https://www.pngmart.com/files/10/Netflix-Logo-PNG-Clipart.png" class="w-25" alt="logo netflix">
    <div class="d-flex align-items-center mb-4">

       <input v-model="store.textInput" type="search" placeholder="cerca film">
       <button @click="getExternalData(),getExternalDataTvSeries()" class="btn btn-danger rounded-5">Cerca</button>

    </div>

  </div>
</template>



<style>

</style>