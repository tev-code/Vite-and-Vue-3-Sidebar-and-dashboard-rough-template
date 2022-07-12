<script setup>
import Sidebar from './components/Sidebar.vue';




</script>

<template>
<div class="app">
<Sidebar/>
<RouterView/>
</div>
</template>

<style lang="scss">
:root {
  --primary: #0f172a;
  --grey:#1e293b;
  --dark:#334155;
  --dark-alt:#475569 ;
  --light: #bdc3ca;
  --sidebar-width: 300px;
  --text-color: #fdfdfd;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width) {
      padding-left: 6rem;
    }
  }
}


</style>
