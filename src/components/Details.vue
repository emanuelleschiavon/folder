<template>
	<div class="details">
		<h3>{{title}}</h3>
		<p>{{content}}</p>
		<br>
		<router-link to='/'>Home</router-link>
	</div>	
</template>

<script>
	import axios from 'axios'

	export default{
		data (){
			return{
				id: this.$route.params.id,
				title:'',
				content:''
			}
		},
		created(){
		   	axios.get('/'+this.id)
		   		.then(res => {
		   			this.title = res.data.data.title;
		   			this.content = res.data.data.content;
		   		})
		   		.catch(error => console.log(error))
		}
	}
	
</script>

<style scoped>
	a{
		border:1px solid black;
		padding:5px;
		margin-left: 5px;
		text-decoration: none;
		color:white;
		background-color: black;
	}
</style>