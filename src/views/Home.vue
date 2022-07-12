<template>
 <section id="main-dashboard-content">
 <section id="top-section">
 <div class="input-box">
 <input placeholder="  Search..."/>
 </div>
 <i class="fas fa-search"></i>
 <div class="action-icons">
 <div class="action-icon-one"></div>
 <div class="action-icon-two"></div>
 </div>
 </section>
 <h1 id="welcome-title">Welcome Back, Cape Town!</h1>
 <section id="grid-container">
 <div class="grid-item one">Item 1</div>
 <div class="grid-item two">Item 2</div>
 <div class="grid-item three">Item 3</div>
 <div class="grid-item four">Item 4</div>
 </section>
 </section>

</template>

<script>
export default {

}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html,body {
  height: 100%;
}

#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}

.input-box {
  display: flex;
  justify-content: space-between;
  width: 400px;
  box-shadow: 0px 0px 10px 1px rgba(0,0,0,0.1);
  padding: 15px 25px;
  border-radius: 15px;
  background: var(--dark);
}

.input-box input {
  border: none;
  outline: none;
  width: 100%;
  height: 30px;
  border-radius: 5px;
}

.action-icon-one,
.action-icon-two {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: var(--dark);
  box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.2);
  margin-left: 8px;
}

.action-icon-two {
  background-color: #77beff;
}

.action-icons {
  display: flex;
}

#top-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#welcome-title {
  font-size: 24px;
  font-weight: lighter;
  margin: 20px 5px;
}

#grid-container {
  display: grid;
  grid-template-columns: 75% auto;
  grid-gap: 25px;
}

.grid-item {
  height: 350px;
  box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.1);
  border-radius: 25px;
  box-sizing: border-box;
  padding: 50px;
}

@media (max-width: 1400px) {
  #grid-container {
    grid-template-columns: 100%;
  }
}

@media (max-width: 950px) {
  .title-container h1 {
    display: none;
  }
  .links span {
    display: none;
  }
  #sidebar {
    width: 75px;
  }
  #main-dashboard-content {
    margin-left: 75px;
  }
  .title-container {
    padding: 20px;
  }
}



</style>
