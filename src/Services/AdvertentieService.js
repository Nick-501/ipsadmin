import axios from "axios";

const ADVERTENTIE_API_BASE_URL = "http://localhost:8081/api/v1/advertenties";

class AdvertentieService{

    getAdvertenties(){
        return axios.get(ADVERTENTIE_API_BASE_URL);

    }

    getAdvertentieById(advertentieId){
        return axios.get("http://localhost:8081/api/v1/advertentie/" + advertentieId)
    }

    deleteAdvertentie(advertentieId){
        return axios.delete(ADVERTENTIE_API_BASE_URL + '/' + advertentieId)
    }

}

export default new AdvertentieService()