<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <router-link to="/" > <a class="navbar-brand" href="#">Todo</a></router-link>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <router-link to="/">
           <a class="nav-link" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
          </router-link>
         
        </li>
        <li class="nav-item">
          <router-link to="/add-todo" ><a class="nav-link">Add Todo</a></router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
