<script>
import { isCancel } from 'axios';
import { getExternalDataTvSeries, store } from '../store';
export default {
    props: {
        film: Object
    },
    computed: {
        /* creo una fuonione che in base al testo della lingue fel film mi assegna una classe ad uno span dopo aver importato la libreria flag */
        getFlag() {
            let toReturn = { icon: `fi fi-${this.film.original_language}` };
            if (this.film.original_language == "en") {
                toReturn = { icon: "fi fi-gb" };
            }
            if (this.film.original_language == "ja") {
                toReturn = { icon: "fi fi-jp" };
            }
            ;
            return toReturn;
        },
        getStar() {
            /* array di valore booleani */
            let ratingstars = [];
            /* valore corrispodende al decimale  */
            let prova = ((this.film.vote_average / 2) % 1) * 10
        
            
            let counterStars = Math.floor((this.film.vote_average / 2));
            
            for (let i = 0; i < 5; i++) {




                if (i < counterStars) {
                    
                    if((i==4 )&& (prova <= 5)){
                        ratingstars.push(3);
                        }else{ratingstars.push(1);}
                
                }
                else {
                    if((i==4) && (prova <= 5)){
                        ratingstars.push(3);
                        }else{ratingstars.push(2)};
                };

                /* se i è minore del valore delle stelle diviso 2 (vote_avrege) stelle dammi un false come valore  */
            }
            ;
            return ratingstars;
        }
    },
    data() {
        return {
            store,

        };
    },
    methods: {
        pathImg(imgpath) {
            if (imgpath == null) {
                return "data:image/jpeg;base64,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";
            }
            else {
                return "http://image.tmdb.org/t/p/w300/" + imgpath;
            }
        }
    },
    components: { isCancel }
}
</script>


<template>

    <div class="card text-white rounded-5">
        <!-- chiamo una funzione per limg completa che mi controlla se ce o no -->
        <img :src="pathImg(film.poster_path)" class="card-img background-img" alt="img di ${film.title}">
        <div class="card-img-overlay text-black transparent-text-bg overflow-auto card-text-opacity">
            <h3 class="card-title">{{ film.title ?? film.name }}</h3>
            <p class="card-text">Original Title : {{ film.original_title ?? film.original_name }}</p>
            <p class="card-text">
                Lenguage : {{ film.original_language }}
                <span :class="getFlag.icon"></span>
            </p>
            <p class="card-text">
                review numbers: {{ film.vote_count }} rating: {{ film.vote_average }}
                <!--  <i v-for="star in getStar" :class="star == 1 ? 'fa-solid' : 'fa-regular'" class="fa-star text-warning"></i> -->
                <!-- uso il v binding con la condizione veritiera  -->
                <i v-for="star in getStar"
                    :class="{'fa-solid fa-star': star == 1, 'fa-regular fa-star': star == 2, 'fa-solid fa-star-half-stroke': star == 3 }"
                    class="text-warning"></i>

            </p>
        </div>
    </div>
</template>



<style lang="scss">
@use "../src/style/general.scss";

.card-text-opacity {
    opacity: 0;

}

;

.card-text-opacity:hover {
    opacity: 1;

}

;
</style>