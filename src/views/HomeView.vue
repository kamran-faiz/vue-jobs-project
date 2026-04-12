

<script setup> 
import Hero from '@/components/Hero.vue' 
import HomeCards from '@/components/HomeCards.vue' 
import JobListings from '@/components/JobListings.vue'; 

  
</script>


<template>
       
       <Hero title='Kamran Faiz Vue Js Intern'  subtitle="Come along and find the job that suits you"/>
       <HomeCards />
       <JobListings :limit="3" :show-button="true"/>
</template>



