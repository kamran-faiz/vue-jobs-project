import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobView from "@/views/JobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
         {
            path: "/jobs",
            name: "Jobs",
            component: JobsView,
        },
        {
            path: '/jobs/add',
            name: "AddJob",
            component: AddJobView,
        },
        {
            path: "/jobs/edit/:id",
            name: "EditJob",
            component: EditJobView,
            props: true,
        },
        {
            path: "/jobs/:id",
            name: "Job",
            component: JobView,
            props: true,
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFoundView,
        },
        
        
    ],
});

export default router;