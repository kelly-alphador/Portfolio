<script setup>
// Pas besoin de logique JavaScript pour cette version
</script>

<template>
    <section id="skills" class="section">
        <h2 class="text-highlight-1 section-title">Mes technos préférées</h2>
        
        <div class="carousel-container">
            <div class="carousel-track">
                <!-- Premier set d'icônes -->
                <div class="techno-container"><i class="techno-icon devicon-html5-plain"></i> <br/> <span>HTML</span></div>
                <div class="techno-container"><i class="techno-icon devicon-css3-plain"></i> <br/> <span>CSS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-javascript-plain"></i> <br/> <span>JS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-mysql-original"></i> <br/> <span>Mysql</span></div>
                <div class="techno-container"><i class="techno-icon devicon-dotnetcore-plain"></i> <br/> <span>.NET core</span></div>
                <div class="techno-container"><i class="techno-icon devicon-dot-net-plain-wordmark"></i> <br/> <span>.NET Framework</span></div>
                <div class="techno-container"><i class="techno-icon devicon-postman-plain"></i> <br/> <span>Postman</span></div>
                <div class="techno-container"><i class="techno-icon devicon-csharp-plain"></i> <br/> <span>C#</span></div>
                <div class="techno-container"><i class="techno-icon devicon-azuredevops-plain"></i> <br/> <span>Azure Devops</span></div>
                <div class="techno-container"><i class="techno-icon devicon-git-plain"></i> <br/> <span>Git</span></div>
                <div class="techno-container"><i class="techno-icon devicon-graphql-plain"></i> <br/> <span>GraphQL</span></div>
                <div class="techno-container"><i class="techno-icon devicon-bootstrap-plain"></i> <br/> <span>Bootstrap</span></div>
                <div class="techno-container"><i class="techno-icon devicon-tailwindcss-original"></i> <br/> <span>Tailwind</span></div>
                <div class="techno-container"><i class="techno-icon devicon-jquery-plain"></i> <br/> <span>jQuery</span></div>
                <div class="techno-container"><i class="techno-icon devicon-vuejs-plain"></i> <br/> <span>VueJS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-microsoftsqlserver-plain"></i> <br/> <span>SQL Server</span></div>
                
                <!-- Deuxième set d'icônes pour la continuité du défilement -->
                <div class="techno-container"><i class="techno-icon devicon-html5-plain"></i> <br/> <span>HTML</span></div>
                <div class="techno-container"><i class="techno-icon devicon-css3-plain"></i> <br/> <span>CSS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-javascript-plain"></i> <br/> <span>JS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-mysql-original"></i> <br/> <span>Mysql</span></div>
                <div class="techno-container"><i class="techno-icon devicon-dotnetcore-plain"></i> <br/> <span>.NET core</span></div>
                <div class="techno-container"><i class="techno-icon devicon-dot-net-plain-wordmark"></i> <br/> <span>.NET Framework</span></div>
                <div class="techno-container"><i class="techno-icon devicon-postman-plain"></i> <br/> <span>Postman</span></div>
                <div class="techno-container"><i class="techno-icon devicon-csharp-plain"></i> <br/> <span>C#</span></div>
                <div class="techno-container"><i class="techno-icon devicon-azuredevops-plain"></i> <br/> <span>Azure Devops</span></div>
                <div class="techno-container"><i class="techno-icon devicon-git-plain"></i> <br/> <span>Git</span></div>
                <div class="techno-container"><i class="techno-icon devicon-graphql-plain"></i> <br/> <span>GraphQL</span></div>
                <div class="techno-container"><i class="techno-icon devicon-bootstrap-plain"></i> <br/> <span>Bootstrap</span></div>
                <div class="techno-container"><i class="techno-icon devicon-tailwindcss-original"></i> <br/> <span>Tailwind</span></div>
                <div class="techno-container"><i class="techno-icon devicon-jquery-plain"></i> <br/> <span>jQuery</span></div>
                <div class="techno-container"><i class="techno-icon devicon-vuejs-plain"></i> <br/> <span>VueJS</span></div>
                <div class="techno-container"><i class="techno-icon devicon-microsoftsqlserver-plain"></i> <br/> <span>SQL Server</span></div>
                
            </div>
        </div>
    </section>
</template>

<style scoped>
    #skills {
        margin-top: 60px;
        padding: 15px;
    }
    .carousel-container {
        overflow: hidden;
        margin-top: 35px;
        position: relative;
    }

    .carousel-track {
        display: flex;
        animation: scroll 15s linear infinite;
        gap: 80px;
    }

    .techno-container {
        text-align: center;
        color: #81aaff; 
        transition: transform 0.5s;
        flex-shrink: 0;
        min-width: 120px;
    }

    .techno-container span {
        font-weight: bold;
        display: block;
        margin-top: 10px;
    }

    .techno-container:hover {
        transform: rotate(15deg);
        color: #81aaff;
    }
    
    .techno-icon {
        font-size: 80px;
        margin: 0 auto;
        color: #81aaff;
        transition: all 0.5s;
    }

    .techno-icon:hover {
        color: var(--vt-c-custom-text-2);
        transform: rotate(15deg);
    }

    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }

    /* Pause l'animation au survol */
    .carousel-container:hover .carousel-track {
        animation-play-state: paused;
    }

    @media screen and (max-width: 905px) {
        .techno-icon {
            font-size: 60px;
        }
        .carousel-track {
            gap: 60px;
        }
        .techno-container {
            min-width: 100px;
        }
    }

    @media screen and (max-width: 450px) {
        .techno-icon {
            font-size: 50px;
        }
        .carousel-track {
            gap: 40px;
        }
        .techno-container {
            min-width: 80px;
        }
    }
</style>