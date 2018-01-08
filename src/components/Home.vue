<template>
	<div class="home">
		<new-document></new-document>
		<documents-list></documents-list>		
	</div>
</template>

<script>
	import DocumentsList from './home/DocumentsList'
	import NewDocument from './home/NewDocument'

	export default {
		components:{
	      DocumentsList,
	      NewDocument
	    }
	  }
</script>