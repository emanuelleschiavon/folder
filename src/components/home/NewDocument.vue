<template>
	<form class="new-content">
		<label for="title" >Title:</label>
		<br>
		<input type="text" id="title" name="title" v-model="title">
		<br>
		<label for="content">Content:</label>
		<br>
		<textarea name="content" id="content" cols="30" rows="10" v-model="content"></textarea>
		<br>
		<button @click.prevent="submitted">Save</button>
	</form>
</template>

<script>	

	import axios from 'axios'

	export default{
		data (){
			return{
				title:'',
				content:'',
				isSubmitted:false
			}
		},
		methods:{
			submitted(){
				if(this.title!=='' && this.content!==''){
					axios.post('',{
						title: this.title,
						content: this.content
					})
					.then(res=>console.log(res))
					.catch(error => console.log(error))
				}else{
					alert('All fields are required');
				}	

			}
		}
	}
	
</script>

<style lang="scss" scoped>
	.new-content{
		width: 100%;
		max-width: 500px;
		margin:0 auto 30px auto;
		label,input,textarea,button{
			display: block;
			width: 100%;
		}
		input{
			height: 20px;
			margin-bottom:10px;
		}
		textarea{
			height: 150px;
		}
		label{
			text-align:left;
			font-weight: bold;
			line-height: 0;
			margin-bottom:-7px;
		}
		button{
			padding:10px;	
			border:none;
			cursor:pointer;
			font-weight: bold;
			font-size:16px;
		}
	}
</style>