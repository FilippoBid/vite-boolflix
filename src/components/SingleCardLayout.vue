<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,

        }
    },
    methods: {
        pathImg(imgpath) {
            if (imgpath == null) {
                return "mia immagine"

            } else {
                return "http://image.tmdb.org/t/p/w300/" + imgpath
            }

        }
    }
}
</script>


<template>
    <div class="col" v-for="(film, index) in store.externalDataStorage" :key="index">
        <div class="card bg-dark text-white rounded-5 overflow-auto">
            <!-- chiamo una funzione per limg completa che mi controlla se ce o no -->
            <img :src="pathImg(film.poster_path)" class="card-img background-img" alt="img di ${film.title}">
            <div class="card-img-overlay text-black">
                <h3 class="card-title">{{ film.title }}</h3>
                <p class="card-text">Original Title :{{ film.original_title }}</p>
                <p class="card-text">Lenguage :{{ film.original_language }}</p>
                <p class="card-text">review numbers: {{ film.vote_count }} rating: {{ film.vote_average }}</p>
            </div>
        </div>
    </div>
</template>



<style>

</style>