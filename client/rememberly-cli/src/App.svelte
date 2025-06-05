<script lang="ts">
  import Collage from './lib/Collage.svelte';

  import Image1 from './assets/profile.jpg'
    import Close from './icons/Close.svelte';

</script>

<main>
  <section>

  <div>
    <h1>Rememberly</h1>
    <h3>Vuelve a recordar todos tus buenos recuerdos</h3>
  </div>
  <Collage />

</section>
</main>

<footer>Derechos reservados</footer>

<style>
  section {
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
