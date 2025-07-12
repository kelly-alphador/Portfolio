<script setup>
import profilImage from '@/assets/images/profil.png'
// Vous pouvez ajouter des variables réactives ici si nécessaire
const notedWith = [
  { name: 'ClickUp', checked: false },
  { name: 'Dropbox', checked: true },
  { name: 'PAYCHEX', checked: false },
  { name: 'elastic', checked: false },
  { name: 'stripe', checked: false }
]
</script>

<template>
  <div class="portfolio-container">
    <!-- Navigation -->
    <nav class="navigation">
      <a href="#" class="nav-item">Home</a>
      <a href="#" class="nav-item">Competences</a>
      <a href="#" class="nav-item">Project</a>
      <a href="#" class="nav-item">Experience</a>
      <a href="#" class="nav-item">Contact</a>
      <span class="language-switcher">in B6</span>
    </nav>

    <!-- Main Content -->
    <div class="home">
      <div class="text-content">
        <h1>Kelly ALphador</h1>
        <p class="intro-text">
            Developpeur Backend .NET
        </p>
        <button class="cta-button">Telecharger CV</button>
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
    <div class="noted-with">
      <h3>Noted with</h3>
      <div class="checkbox-list">
        <label v-for="(item, index) in notedWith" :key="index" class="checkbox-item">
          <input type="checkbox" :checked="item.checked" disabled>
          <span>{{ item.name }}</span>
        </label>
      </div>
    </div>

    <!-- Contact Me Section -->
    <div class="contact-me">
      <!-- Vous pouvez ajouter un formulaire de contact ici plus tard -->
    </div>
  </div>
</template>

<style scoped>
.portfolio-container {
  max-width: none;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', sans-serif;
}

.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaeaea;
}
.gradient-frame {
  padding: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at top center, #6e4fb700 0%, #180f2f 100%);
  box-shadow: -1px -7px 16px 19px rgb(124 97 203 / 44%);
  display: inline-block;
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
  gap: 90px;
  align-items: center;
  margin-bottom: 60px;
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
  background-color: #646cff;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #535bf2;
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
</style>