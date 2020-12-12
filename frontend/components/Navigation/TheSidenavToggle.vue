<template>
  <div class="drawer-toggle" role="button" @click="$emit('toggle')">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script>
export default {
  name: "TheSidenavToggle"
};
</script>

<style scoped>
.drawer-toggle {
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 35px;
  cursor: pointer;
}

.drawer-toggle {
  display: none;
}

@media (max-width: 768px) {
  .drawer-toggle {
    display: flex;
  }
}

.drawer-toggle .bar {
  width: 2rem;
  height: 2px;
  background-color: black;
}
</style>
