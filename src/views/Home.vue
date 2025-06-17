<!-- src/views/Home.vue -->
<template>
  <div class="home">
    <h1>Welcome to HexaNest</h1>
    <p>Begin your custom home design experience.</p>
    <router-link to="/customize">
      <button>Start Designing</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

button {
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
}
</style>
