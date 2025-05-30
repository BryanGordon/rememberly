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

    <div>
      <img src={Image1} alt="imagen">
    </div>

    <div>
      <img src={Image1} alt="imagen">
    </div>
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
    gap: 10px;
  }

  img {
    width: 350px;
    min-width: 100%;
    max-width: 25%;
    height: 280px;
  }
</style>