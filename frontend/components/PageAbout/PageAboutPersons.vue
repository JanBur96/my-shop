<template>
  <div class="persons">
    <div class="persons__person">
      <img
        class="persons__image"
        src="~assets/images/about/about-person1.jpg"
        alt="Picture of John Doe"
      />
      <h4 class="persons__name">John Doe</h4>
      <h5 class="persons__position">CEO</h5>
      <p class="persons__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        animi incidunt a blanditiis dolor sunt impedit, ipsam maxime voluptatem
        reiciendis.
      </p>
    </div>
    <div class="persons__person">
      <img
        class="persons__image"
        src="~assets/images/about/about-person2.jpg"
        alt="Picture of Jane Doe"
      />
      <h4 class="persons__name">Jane Doe</h4>
      <h5 class="persons__position">HR Lead</h5>
      <p class="persons__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        animi incidunt a blanditiis dolor sunt impedit, ipsam maxime voluptatem
        reiciendis.
      </p>
    </div>
    <div class="persons__person">
      <img
        class="persons__image"
        src="~assets/images/about/about-person3.jpg"
        alt="Picture of Marc Smith"
      />
      <h4 class="persons__name">Marc Smith</h4>
      <h5 class="persons__position">Tech Lead</h5>
      <p class="persons__description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        animi incidunt a blanditiis dolor sunt impedit, ipsam maxime voluptatem
        reiciendis.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.persons {
  margin-top: 1.75rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));

  &__person {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  &__image {
    box-shadow: 0px 0px 4px 1px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    width: 10rem;
    height: 9rem;
    object-fit: cover;
  }

  &__name {
    margin-top: 0.75rem;
    font-size: 1.2rem;
  }

  &__position {
    margin-top: 0.25rem;
  }

  &__description {
    margin-top: 0.5rem;
  }
}
</style>
