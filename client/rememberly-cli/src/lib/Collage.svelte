<script lang="ts">
  import Error from './Error.svelte'
  import Loading from './Loading.svelte'
  import { getFunctions } from '../utils/data'

  export let setBigImage: (image: string) => null
  
  const { data } = getFunctions()
</script>

<section>
  {#await data}
    <Loading />
    {:then images}
    <article>
      {#each images as image}
        <button onclick={() => setBigImage(image.image_link)}>
          <img src={image.image_link} alt={image.alt} >
        </button>
      {/each}
    </article>
    {:catch error}
      <Error />
  {/await}

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
    object-fit: cover;
  }
</style>