<template>
  <div class="white">
     <v-content class="white"> 
        <v-container
          fluid
          fill-height
        >
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              xs12
              sm8
              md4
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="form">
                    <v-text-field
                      id="name"
                      v-model="name"
                      name="name"
                      label="Name"
                      v-on:submit.prevent="submit"
                      required
                      prepend-icon="mdi-lock"
                      type="text"
                    ></v-text-field>

                    <v-text-field
                      id="number"
                      v-model="number"
                      name="number"
                      :rules="nameRules"
                      label="Contact number"
                      required
                      prepend-icon="mdi-lock"
                      type="number"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    :disabled= false
                    color="success"
                    class="mr-4"
                    @click="submit"
                  >
                    Validate
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    <!-- <v-row align="center">
      
      <v-form
        ref="form"
      >
        <v-text-field
          v-model="name"
          label="Name"
          v-on:submit.prevent="submit"
          required
        ></v-text-field>

        <v-text-field
          v-model="number"
          :rules="nameRules"
          label="Contact number"
          required
        ></v-text-field>

        <v-btn
          :disabled= false
          color="success"
          class="mr-4"
          @click="submit"
        >
          Validate
        </v-btn>
      </v-form>
    </v-row> -->
  </div>
</template>

<script>
import firebase from '../plugins/firebase'

  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      number: '',
      contactrules: [
        v => !!v || 'Number is required',
        v => (v && v.length === 10) || 'Number must be equal to 10 digits only',
      ],
      // select: null,
      // checkbox: false,
      // lazy: false,
    }),
    methods: {
      submit(){
        if(this.$refs.form.validate()){
          const project = {
            name:this.name,
            contactnumber:this.number
          }
          firebase.collection('Contact-Book').add(project).then(() => {
            alert("Form submitted.");
            this.$refs.form.reset();
          console.log("Chant and be happy");
        })
        }
        
      }
    },
  }
</script>
