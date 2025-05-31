<script lang="ts">
  import Collage from './lib/Collage.svelte';
</script>

<main>
  <div>
    <h1>Rememberly</h1>
    <h3>Vuelve a recordar todos tus buenos recuerdos</h3>
  </div>
  <Collage />
</main>

<footer>Derechos reservados</footer>

<style>
  main {
    margin: 30px;
  }

  div {
    margin-bottom: 25px;
  }

  h1 {
    text-align: center;
    padding-bottom: 20px;
  }

  h3 {
    width: 97%;
    margin: 0 auto;
  }

  footer {
    padding: 15px;
    background: #000;
    margin-top: auto;
  }
</style>
