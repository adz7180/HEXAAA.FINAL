<template>
  <div class="customization-panel">
    <h2>Customize Your Home</h2>
    <div class="section" v-for="(category, index) in categories" :key="index">
      <h3>{{ category.title }}</h3>
      <div class="options">
        <div
          v-for="(option, i) in category.options"
          :key="i"
          class="option"
          @click="applyOption(category.key, option)"
        >
          <img v-if="option.image" :src="option.image" :alt="option.name" />
          <span>{{ option.name }}</span>
        </div>
      </div>
    </div>
    <button class="save-button" @click="saveCustomization">Save Design</button>
  </div>
</template>

<script>
export default {
  name: 'CustomizationPanel',
  data() {
    return {
      categories: [
        {
          title: 'Exterior Style',
          key: 'exterior',
          options: [
            { name: 'Modern', value: 'modern', image: '/images/exterior/modern.jpg' },
            { name: 'French', value: 'french', image: '/images/exterior/french.jpg' },
            { name: 'Elegant', value: 'elegant', image: '/images/exterior/elegant.jpg' }
          ]
        },
        {
          title: 'Flooring',
          key: 'flooring',
          options: [
            { name: 'Marble', value: 'marble', image: '/images/flooring/marble.jpg' },
            { name: 'Wood', value: 'wood', image: '/images/flooring/wood.jpg' },
            { name: 'Tile', value: 'tile', image: '/images/flooring/tile.jpg' }
          ]
        },
        {
          title: 'Lighting',
          key: 'lighting',
          options: [
            { name: 'Chandeliers', value: 'chandeliers', image: '/images/lighting/chandelier.jpg' },
            { name: 'Modern LEDs', value: 'leds', image: '/images/lighting/led.jpg' }
          ]
        }
      ]
    };
  },
  methods: {
    applyOption(categoryKey, option) {
      this.$emit('apply-customization', { categoryKey, option });
    },
    saveCustomization() {
      this.$emit('save-customization');
    }
  }
};
</script>

<style scoped>
.customization-panel {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  max-width: 900px;
  margin: 0 auto;
}
.section {
  margin-bottom: 32px;
}
.section h3 {
  font-size: 20px;
  margin-bottom: 12px;
}
.options {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.option {
  cursor: pointer;
  text-align: center;
  padding: 12px;
  border: 1px solid #eee;
  border-radius: 12px;
  transition: transform 0.2s ease;
  width: 160px;
}
.option:hover {
  transform: scale(1.05);
}
.option img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 8px;
}
.save-button {
  background-color: #222;
  color: #fff;
  padding: 14px 28px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.save-button:hover {
  background-color: #444;
}
</style>
