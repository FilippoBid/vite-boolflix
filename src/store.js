import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive({

    externalDataStorage : [],
    ExternalDataTvSeries : [],
    
    textInput: ""
    

});
/* codice chiamata film */ 
export function getExternalData() {
    const staticUrl = "https://api.themoviedb.org/3/search/movie";
    axios.get(staticUrl, {
        params: {
            api_key: "31c019f783227cac35f2e04fe6b48d80",
            query: store.textInput,
        }
    })
        .then((resp) => {
            store.externalDataStorage = resp.data.results

        })
        .catch((error) => {
            console.log("Codice errore: ", error.message + ' ' + error.name);
          })
    

};
/* codice chimata tv serie  */
export function getExternalDataTvSeries() {
    const staticUrl = "https://api.themoviedb.org/3/search/tv";
    axios.get(staticUrl, {
        params: {
            api_key: "31c019f783227cac35f2e04fe6b48d80",
            query: store.textInput,
        }
    })
        .then((resp) => {
            console.log(resp);
            store.ExternalDataTvSeries = resp.data.results

        })
        .catch((error) => {
            console.log("Codice errore: ", error.message + ' ' + error.name);
        
          })
    

};
