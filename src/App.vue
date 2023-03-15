<template>
  <div id="nav">
    <!-- <router-link to="/">Productos</router-link> | -->
    <!-- <router-link to="/categorias">Categorias</router-link> -->
    <nav
      class="navbar navbar-expand-lg"
      style="background-color: #e3f2fd"
    >
      <div class="container-fluid">
        <a class="navbar-brand nav-link" href="/">HOME</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
            >
              <a class="nav-link" aria-current="page" href="/productos">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/categorias">
                Categorias
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
