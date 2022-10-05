Vue.createApp({
    data() {
        return {
            word: null,
            howMany: null,
            result:""
        }
    },
    methods: {
        doIt(word) {
            this.result = "";
            if (this.howMany > 0){
               
               for(i=0;i<this.howMany;i++){
                this.result += word;
               }
            } else{
                this.result = "must be non negative number: " + this.howMany;
            }
            
        }
    }
}).mount("#app")