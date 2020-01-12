<template>  
   <div class="projects">
       <v-card class="mx-auto mt-1" max-width="344">
            <v-card-text>
            <p class="display-1 text--primary">
               Contact-Details
            </p>
            </v-card-text>
        </v-card>
        <div id="cafelist">
            <v-card v-for="project in projects" :key="project.id" class="mx-auto mt-1" max-width="344" :id="project.id">
                <v-card-text class="parent">
                <v-btn class="outlined child" v-on:click="Delete(project.id)">x</v-btn>
                <div>Name:- </div>
                <div class="display-1 text--primary">
                    {{project.name}}
                </div>
                <div>Contact Number:-</div>
                <div class="text--primary title">
                    {{project.contactnumber}}
                </div>    
                </v-card-text>
            </v-card>
        </div>
   </div>
</template>
 
<script>
import firebase from '../plugins/firebase'
// const cafelist = document.querySelector('projects');
export default {
  data() {
    return {
      projects: []
    }
  },
  created() {
    firebase.collection('Contact-Book').onSnapshot(res => {
      const changes = res.docChanges();
      
      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }  
        // console.log(change.doc.id);
      })
    });
  },

  methods: {
    Delete(id){
          // const cafelist = document.querySelector('#cafe-list');
          console.log(id);
          if(confirm('Are you sure? ')){
            firebase.collection('Contact-Book').doc(id).delete().then(() => {
              var parent = document.getElementById('cafelist');
              var child = document.getElementById(id);
              parent.removeChild(child);
              console.log("Documents Succesfully Deleted");
             }).catch(function(error){
               console.error("Error Removing Documents: ",error);
             });
          }else{
          }
      }
  }
}

</script>
<style scoped>
.parent {
	position: relative;
}

.child {
	position: absolute;
	width: 30px;
	height: 30px;

	top: 0;
	right: 0;
}
</style>