import axios from "axios"

export default {
    state: {
        data: [],
        valor: 0,
    },
    mutations: {
        USER_GIT(state, git) {
            state.data = git
        }
    },
    actions: {
        userGit(context) {        
        let url = 'https://jsonplaceholder.typicode.com/users';        
        axios
            .get(url)
            .then(response => context.commit('USER_GIT', response.data))
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                / always executed/
            });
    },
    }
}