const { createApp } = Vue;

createApp({
    data() {
        return {
                apiUrl: './server.php',
                discElenc: []
        }
    },

    methods: {
        getItems() {
            axios.get(this.apiUrl, {
                params: {}
            })
                .then((response) => {
                    console.log(response);
                    this.discElenc = response.data;
                    console.log(this.discElenc)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    },
        created(){
            this.getItems();
        },


}).mount('#app');