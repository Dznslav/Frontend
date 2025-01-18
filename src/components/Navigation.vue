<template>
  <nav class="navigation">
    <router-link to="/" class="nav-link-main">Moodscape</router-link>
    <div class="nav-links-container">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
        <router-link to="/addmood" class="nav-link">New record</router-link>
        <router-link to="/history" class="nav-link">History</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
};
</script>

<style scoped>
.navigation {
  display: flex;
  align-items: center; 
  padding: 15px 20px; 
  background-color: #cfe5ff;
  width: 100%;
  box-sizing: border-box;
    gap: 20px;
}

.nav-links-container {
    display: flex;
    gap: 10px;
}

.nav-link {
  text-decoration: none;
  font-size: 16px; 
  color: #4a6360;
  padding: 8px 12px; 
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease; 
}

.nav-link:hover {
  background-color: #b0d0ff;
  color: #2b423f;
}

.nav-link-main {
  text-decoration: none;
  color: #004c47;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
  font-size: 24px; 
  font-weight: 600;
}

.nav-link-main:hover {
  background-color: #b0d0ff;
  color: #1a1a1a;
}
</style>