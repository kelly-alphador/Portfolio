<script setup>
    import { ref } from "vue";
    import ProjectSingle from "./ProjectSingle.vue";

    let projects = ref([
    {
        name: "Ecommerce",
        image: "tableau_bord.png;quantite.png;avis.png",
        tags: "ASPNET.MVC;Jquery;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Service Image",
        image: "End1.png;Ajout_img.png;database.png;modification.png;Register.png",
        tags: ".NET Core; C#",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "TaskMAster",
        image: "End2.png;todo.png;dt2.png",
        tags: ".NET Core;Vuejs;HTML;CSS",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "ArtistoSocial",
        image: "projet.png",
        tags: ".Net Core; C#",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Algorithme de DANTZIG",
        image: "projet.png",
        tags: "WPF",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    {
        name: "Le projet N°6",
        image: "projet.png",
        tags: "VueJS;PHP;HTML",
        description: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        tasks: "Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet.;Lorem ipsum lorem ipsum dolor sit amet."
    },
    ]);

</script>

<template>
    <section id="projects" class="section">
  
        <h2 class="text-highlight-1 section-title">Quelques projets</h2>
        <ProjectSingle v-for="(project, index) in projects" :key="project.name" :project="project" :reverse="index % 2 === 0 ? false : true" />
    </section>
</template>

<style scoped>
    #projects {
        display: inline-block;
        margin-top: 60px;
        padding: 20px;
    }
</style>