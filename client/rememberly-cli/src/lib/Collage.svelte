<script lang="ts">
  import Image from '../assets/pepe.jpg'
  import Image1 from '../assets/profile.jpg'
</script>

<section>
  <article>
    <div>
      <img src={Image} alt="imagen">
    </div>

    <div>
      <img src={Image1} alt="imagen">
    </div>
  </article>
</section>

<style>
  section {
    width: 80%;
    padding: 10px;
  }

  article {
    max-width: 95dvh;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 5px;
  }
</style>