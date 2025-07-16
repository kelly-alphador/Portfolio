<script setup>
    import { ref } from "vue";

    let activeBloc = ref(0)

    let experiences = ref([
    {
        title: "Développeur ASP.NET MVC",
        date: "Août 2024 - Nov 2024",
        line1: "Conception et realisation d'une plateforme de vente des produits TAMAOIL",
        line2: "Cette Application permet d’Offrir une expérience d’achat fluide aux clients et des outils de gestion performants aux administrateurs",
        line3: "Technologies : ASP.NET MVC (.NET Framework), Entity Framework (Database First), Identity, Razor Pages, jQuery, Bootstrap, intégration PayPal, SQL Server."
    },
    {
        title: "Développeur FullStack Vue.js & Symfony",
        date: "Août 2023 - Nov 2023",
        line1: "Stage chez WBS — Projet pour l’entreprise AINA Projet : Application de gestion de devis",
        line2: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        line3: "Stack technique :Frontend : Vue.js (composition API, Vue Router, Axios, UI moderne) Backend : Symfony (API RESTful, Doctrine ORM, sécurité, validation) Base de données : MySQL."
    },
    {
        title: "Développeur Web",
        date: "2016 - 2010",
        line1: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        line2: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        line3: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    ]);

    const ShowXp = (id) => {
        activeBloc.value = id;
    };

</script>

<template>
     <section id="xp" class="section">
    
        <h2 class="text-highlight-1 section-title"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
        >Expériences</h2>
        <div id="left" 
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
        >
            <p :class="activeBloc === 0 ? 'active' : ''" class="company fw600" @click="ShowXp(0)">Spray Info</p>
            <p :class="activeBloc === 1 ? 'active' : ''" class="company fw600" @click="ShowXp(1)">WBS</p>
        </div>
        <div id="right"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
        >
            <template v-for="(job,index) in experiences">
                <div class="job-details" :class="index === activeBloc ? '' : 'hide'" :id="'bloc_'+index">
                    <h3 class="fw600">{{ job.title }}</h3>
                    <span id="date">{{ job.date }}</span>
                    <br/>
                    <p class="fw600 mtb8" style="margin-top: 10px;"><span class="text-highlight-2">✓</span> {{ job.line1 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">✓</span> {{ job.line2 }}</p>
                    <p class="fw600 mtb8"><span class="text-highlight-2">✓</span> {{ job.line3 }}</p>
                </div>
            </template>
        </div>
    </section>
</template>

<style scoped>
    #xp {
        margin-top: 60px;
        padding: 20px;
    }
    #xp #left {
        float: left;
        width: 25%;
    }

    #xp #right {
        float: left;
        width: 75%;
    }

    #xp #right h3 {
        font-size: 20px;
    }

    .fw600 {
        font-weight: 600;
    }

    .mtb8 {
        margin: 8px 0px;
    }

    #date {
        font-style: italic;
        font-size: 14px;
        color:#81aaff;
    }

    .company {
        border-left: 4px solid white;
        line-height: 30px;
        padding-left: 10px;
    }

    .active {
        border-left: 4px solid #81aaff;
        color:#81aaff;
    }

    .company:hover {
        cursor: pointer;
        color: #81aaff;
    }

    .hide {
        display: none;
    }

    @media screen and (max-width: 600px) {
        #xp #right {
            width: 100%;
            margin-top: 20px;
        }
        #xp #left {
            width: 100%;
        }
        .company {
            border: none;
            padding-left: 0px;
            float: left;
            margin-right: 10px;
        }
    }
</style>