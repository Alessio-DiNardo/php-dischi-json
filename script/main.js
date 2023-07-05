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
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });

        }
    },
        created(){
            this.getItems();
        },


}).mount('#app');