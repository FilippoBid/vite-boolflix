import { reactive } from 'vue';
import axios from 'axios';
export const store = reactive({

    externalDataStorage : [],
    textInput: ""
    

});

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
    

};
