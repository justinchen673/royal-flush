var socket = io();

const App = new Vue({
    el: '#app',
    data: {
        inputCode: "",
        username: "",
        userId: ""
    },
    methods: {
        join() {
			window.location.href = "in_game.html?room=" + this.inputCode;
        },
        gameui() {
			window.location.href = "App.html";
        }
    }
});
