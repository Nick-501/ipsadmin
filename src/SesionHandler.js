class SesionHandler {

    setAddId(id){
        sessionStorage.setItem("advertentieid", id);
    }

    getAddId(){
        return sessionStorage.getItem("advertentieid");
    }

    clearAddId(){
        return sessionStorage.clear("advertentieid")
    }

}

export default new SesionHandler;