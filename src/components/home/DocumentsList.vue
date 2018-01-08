<template>
	<div class="document-list">
		<input type="text" placeholder="Filter by document name" v-model="filter">
		<table>
			<tr v-for="document in filteredDocuments">
				<td>{{document.title}}</td>
				<td class="show-document"><router-link :to="{ name: 'document', params: {id: document.id } }">Show</router-link></td>
			</tr>
		</table>
	</div>	
</template>

<script>
	import axios from 'axios'

	export default {
		data (){
			return{
				documents:null,
				filter:''
			}			
		},
		computed: {
	        filteredDocuments() {
	        	if(this.filter!==''){
	        		var self = this
	        		return this.documents.filter(function(document) {
	        		    return document.title.indexOf(self.filter) > -1
	        		})
	        	}else{
	        		return this.documents;
	        	}
	            
	        }
	    },
		created(){
		   	axios.get('')
		   		.then(res => {
		   			this.documents = res.data.data;
		   		})
		   		.catch(error => console.log(error))
		}
	}
</script>

<style lang="scss" scoped>
	.document-list{
		table{
			margin:0 auto;
		}
		td{
			padding:8px 0;
		}
		input{
			margin:10px auto;
			height: 20px;
			padding: 0 5px;
			width: 300px;
		}
		.show-document a{
			border:1px solid black;
			padding:2px;
			margin-left: 5px;
			text-decoration: none;
			color:white;
			background-color: black;
		}
	}
	
</style>

