
<script>


export default {
  data () {
    return{
            Name : 'Kamran Faiz',
            Status : "pending",
            Tasks : ['Task one','Task two','Task three'],
            Links : "https://google.com",
          };
  },
  methods : {
    toggleStatus(){
      if (this.Status === 'active'){
        this.Status = 'pending';
      } else if (this.Status === 'pending'){
        this.Status = 'inactive';
      } else {this.Status = 'active'}

  }
}
};
</script>


<template>
  <h1>{{ Name }}</h1>
  <h2 v-if="Status === 'active'">User is active</h2>
  <h2 v-else-if="Status === 'pending'">User is pending</h2>
  <h2 v-else="Status">User is inactive</h2>

  <h1>Tasks</h1>
 <ul>
  <li v-for="Task in Tasks" :key ="Task"> {{ Task }}</li>
 </ul>

 <!--<a v-bind:href="Links">Click for google</a>-->
 <a :href="Links">Click for google</a>
<br/>
 <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>


