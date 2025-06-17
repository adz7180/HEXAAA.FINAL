<!-- src/views/Customization.vue -->
<template>
  <div class="customization">
    <h2>Customize Your Home</h2>
    <!-- Customization Panel Placeholder -->
    <CustomizationPanel />
  </div>
</template>

<script>
import CustomizationPanel from "@/components/CustomizationPanel.vue";

export default {
  name: "CustomizationView",
  components: {
    CustomizationPanel
  }
};
</script>

<style scoped>
.customization {
  padding: 20px;
}
</style>
