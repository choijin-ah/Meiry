<script setup>

</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" id="navbar_2f">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">MEIRY</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <form class="d-flex" id="search_form" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

  <nav class="navbar navbar-expand-lg bg-body-tertiary" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar_1f">
        <li class="nav-item">
          <a class="nav-link" href="#">짧은 메모</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">긴 메모
          </a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<style scoped>

  .navbar{
    height: 2.5em;
    top:0;
    padding: 0 15%;
    background-color: #6b4b3e !important;
    color: #fff !important;
  }
  .navbar-nav {
    color: white !important;
  }

  #navbarSupportedContent{
    right: 15%;
    position: absolute;
  }
  #navbar_1f {
    color: white !important;
    margin: 0 auto;

  }
  #navbar_2f{

  }
  #search_form{
    height : 1.5em;
  }

  .btn {
    font-size: 0.5em;
  }
</style>