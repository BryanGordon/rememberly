<script lang="ts">
  import type { Image } from '../types/types'

  const data: Promise<Image[]> = fetch('http://localhost:3000/images')
    .then(res => res.json())
  
  export let setBigImage: (image: string) => null
</script>

<section>
  <article>
    {#await data}
      <p>Cargando....</p>
    {:then images} 
      {#each images as image}
        <button on:click={() => setBigImage(image.image_link)}>
          <img src={image.image_link} alt={image.alt} >
        </button>
      {/each}
    {:catch error}
        <p>Error al mostrar las imagenes, intentelo mas tarde.</p>
    {/await}
  </article>

</section>

<style>
  section {
    width: 90%;
    margin: 0 auto;
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
  }

  img:hover {
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
</style>