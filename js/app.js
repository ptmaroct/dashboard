Vue.use(VueMaterial)
var vm = new Vue({
	el: '#app',
	data: {
		message: 'Vue material is working!',
		username: '',
		password: ''
	},
	methods: {
		logLogin: function(){
			console.log(this.username+this.password)
		}
	}
}) 

