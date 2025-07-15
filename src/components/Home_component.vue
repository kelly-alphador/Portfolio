<script setup>
import profilImage from '@/assets/images/portf1.png'
import SocialIcon from './SocialIcon.vue';
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  const handleScroll = () => {
    const nav = document.querySelector('.navigation')
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  }
  
  window.addEventListener('scroll', handleScroll)
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})

// Vous pouvez ajouter des variables réactives ici si nécessaire

</script>

<template>
  <div class="portfolio-container">
    <!-- Navigation -->
      <nav class="navigation">
        <a href="#" class="nav-item nav-brand">Kelly-Alphador</a>
        <div class="nav-right">
            <a href="#" class="nav-item">Home</a>
            <a href="#skills" class="nav-item">Competences</a>
            <a href="#projects" class="nav-item">Project</a>
            <a href="#xp" class="nav-item">Experience</a>
            <a href="#" class="nav-item">Contact</a>
        </div>
      </nav>

    <!-- Main Content -->
    <div class="home">
      <div class="text-content">
       
        <div class="intro-text">
            <h2 class="text-highlight-1 section-title">Qui suis-je ?</h2>
            <p class="default-text">
                Je suis <span class="text-highlight-2">Kelly Alphador</span>, 
                <span class="text-highlight-2">développeur .NET</span> passionné, spécialisé dans le 
                <span class="text-highlight-2">Back-End .NET Core</span>. <br/>
                J'aime créer des applications robustes, performantes et évolutives, en utilisant 
                <span class="text-highlight-2">C#</span> et le framework <span class="text-highlight-2">ASP.NET Core</span>. <br/>
                Mon objectif ? Créer des solutions innovantes, fiables et adaptées aux besoins des utilisateurs.
            </p>
        </div>
        <button class="cta-button">Telecharger CV</button>
              <div id="social">
                <SocialIcon img="linkedin" alt="youtube" link="https://www.youtube.com/@F0rmati0nFacile" />
                <SocialIcon img="message" alt="linkedin" link="https://www.linkedin.com/in/anthony-cardinale-%F0%9F%91%A8%F0%9F%8F%BB%E2%80%8D%F0%9F%92%BB-39474243/" />
                <SocialIcon img="twitter" alt="udemy" link="https://www.udemy.com/user/cardinale-anthony/" />
              </div>
      </div>
      <div class="image-content">
        <!-- Placeholder pour une image -->
        <div class="placeholder-image">
            <div class="gradient-frame">
                <img :src="profilImage" alt="Photo de profil" style="width: 300px;height: 300px;"/>
            </div>
        </div>
      </div>
    </div>

    <!-- Noted With Section -->
    
  </div>
</template>

<style scoped>
.navigation {
    display: flex;
    justify-content: space-between; /* Espace entre les éléments */
    align-items: center;
    margin-bottom: 40px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eaeaea;
    border: 1px white solid;
    padding: 10px 40px 10px 40px;
    background: rgba(129, 170, 255, 0.9); /* Transparence ajoutée */
    border: none;
    position: fixed; /* Position fixe */
    top: 0; /* Collé en haut */
    left: 0; /* Aligné à gauche */
    right: 0; /* Aligné à droite */
    z-index: 1000; /* Au-dessus des autres éléments */
    backdrop-filter: blur(10px); /* Effet de flou en arrière-plan */
    -webkit-backdrop-filter: blur(10px); /* Compatibilité Safari */
    transition: all 0.3s ease; /* Transition douce */
}

/* Conteneur pour les liens de navigation à droite */
.nav-right {
    display: flex;
    gap: 20px;
}

/* Style spécial pour le nom (à gauche) */
.nav-brand {
    font-weight: 600;
    font-size: 1.1rem;
}

/* Ajustement du conteneur principal pour compenser la nav fixe */
.portfolio-container {
    max-width: none;
    margin: 0 auto;
    padding: 80px 20px 20px 20px; /* Padding-top augmenté pour compenser la nav fixe */
    font-family: 'Inter', sans-serif;
}

/* Style pour quand la navigation est scrollée (optionnel) */
.navigation.scrolled {
    background: rgba(129, 170, 255, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}
.gradient-frame {
  padding: 12px;
  border-radius: 50%;
  background: #81aaff;
  /*box-shadow: -1px -7px 16px 19px rgb(124 97 203 / 44%);*/
  display: inline-block;
  transition: box-shadow 0.6s;
}
.gradient-frame:hover{
  box-shadow: -1px -7px 16px 19px rgb(124 97 203 / 44%);
}

.nav-item {
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding: 8px 12px;
}

.nav-item:hover {
  color: #646cff;
}

.language-switcher {
  color: white;
  font-size: 0.9em;
}

.home {
  display: flex;
  gap: 60px;
  align-items: center;
  margin-bottom: 60px;
  padding: 20px;
}

.text-content {
  flex: 1;
  margin-right: 20px;
}

.image-content {
  flex: 1;
  display: flex;
  justify-content: center;
}

.placeholder-image {
  width: 300px;
  height: 300px;
  background-color: #2f1c5a;
  border-radius: 50%;
  border: none;
  margin-left: 20px;
}
#social
 {
  margin-top: 15px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.6;
  color: white;
  margin-bottom: 30px;
  max-width: 500px;
}

.cta-button {
  margin-top: 15px;
  background-color: #81aaff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 0.6s;
}

.cta-button:hover {
  /* background-color: #535bf2; */
  box-shadow: 1px 1px 19px 8px rgb(124 97 203 / 44%);
}


.noted-with {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eaeaea;
}

.noted-with h3 {
  margin-bottom: 20px;
  color: white;
}

.checkbox-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
}

.checkbox-item input {
  margin-right: 5px;
}

.contact-me {
  margin-top: 60px;
  padding: 40px 0;
  border-top: 1px solid #eaeaea;
}

@media (max-width: 768px) {
  .navigation {
    flex-wrap: wrap;
    gap: 10px;
  }
  
  .home {
    flex-direction: column;
  }
  
  .image-content {
    order: -1;
    margin-bottom: 30px;
  }
  
  .text-content {
    text-align: center;
  }
  
  .intro-text {
    max-width: 100%;
  }
}
/* Pour ton titre */
.text-highlight-1 {
    color: White; /* une couleur violette ou celle que tu veux pour le titre */
    font-weight: bold;
}

/* Pour tes textes "highlightés" dans le paragraphe */
.text-highlight-2 {
    color:#81aaff; /* exemple orange, tu peux choisir une autre couleur */
    font-weight: 600;
}

/* Style général du paragraphe */
.default-text {
    font-size: 1.1rem;
    line-height: 1.6;
    color: white;
}

/* Titre de section */
.section-title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

</style>