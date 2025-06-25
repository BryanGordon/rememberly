<script lang="ts">
  import Close from './icons/Close.svelte';
  import Collage from './lib/Collage.svelte';

  let showModal = false
  let modalImage: string | null = null

  const openModal = (image: string) => {
    showModal = true
    modalImage = image
    
    return null
  }

  const closeModal = () => {
    showModal = false
    modalImage = null
  }

</script>

<main>
  <section>
    <div>
      <h1>Rememberly</h1>
      <h3>Vuelve a recordar todos tus buenos momentos</h3>
    </div>

    <Collage setBigImage={openModal}/>
</section>

{#if showModal}
  <div class="pop">
    <button class="close-modal" on:click={() => closeModal()}>
      <Close />
    </button>
      <img class="img-pop" src={modalImage} alt="imagen" />
    </div>
    
{/if}

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
    font-size: 40px;
  }

  h3 {
    width: 97%;
    margin: 0 auto;
    font-size: 20px;
  }

  .pop {
    height: 100dvh;
    width: 100dvw;
    position: fixed;
    background-color: #0000007f;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .img-pop {
    min-width: 76%;
    width: fit-content;
    max-width: 65%;
    min-height: 69%;
    height: fit-content;
    max-height: 50%;
    border-radius: 5px;
  }

  .close-modal {
    position: fixed;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    color: white;
  }

  .close-modal:hover {
    cursor: pointer;
  }
  
  footer {
    padding: 15px;
    background: #000;
    margin-top: auto;
  }
</style>
