<template>
  <div id="loading">please wait...</div>
</template>

<script>
export default {
  name: "Loading",
};
</script>

<style scoped>
#loading {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(110, 101, 101, 0.8);
  z-index: 10;
  color: white;
  font-size: 1.4rem;
}
</style>
