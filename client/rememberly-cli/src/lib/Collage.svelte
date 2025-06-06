<script lang="ts">
  import Image from '../assets/pepe.jpg'
  import Image1 from '../assets/profile.jpg'

  const data = fetch('http://localhost:3000/images')
    .then(res => res.json())
  
  export let setBigImage: (image: string) => null
</script>

<section>
  <h1 class="middle-api">Datos desde la api</h1>

  <article>
    {#await data}
      <p>Cargando....</p>
    {:then images} 
      {#each images as image}
        <button on:click={() => setBigImage(image.image)}>
          <img src={image.image} alt="imagen" >
        </button>
      {/each}
    {/await}
  </article>

</section>

<style>
  section {
    width: 90%;
    padding: 10px;
  }

  article {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    gap: 15px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    transform: scale(1.02);
  }

  img {
    width: 350px;
    min-width: 100%;
    max-width: 25%;
    height: 280px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px #181818;
    transition: transform 0.2s ease-in;
  }

  .middle-api {
    text-align: center;
    color: yellowgreen;
    margin-block: 30px;
  }

</style>