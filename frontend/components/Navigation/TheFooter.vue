<template>
  <footer class="footer">
    <base-container class="footer__container">
      <div class="footer__row-2">
        <ul class="footer__list">
          <li class="footer__item">
            <fa class="footer__icon" :icon="['fab', 'facebook']" />
          </li>
          <li class="footer__item">
            <fa class="footer__icon" :icon="['fab', 'twitter']" />
          </li>
          <li class="footer__item">
            <fa class="footer__icon" :icon="['fab', 'instagram']" />
          </li>
        </ul>
      </div>
      <div class="footer__row-3">
        <p>&copy; 2020 by LocalShop</p>
        <ul class="footer__list">
          <li class="footer__item">
            Terms
          </li>
          <li class="footer__item">
            Privacy
          </li>
          <li class="footer__item">
            Security
          </li>
          <li class="footer__item">
            Sitemap
          </li>
        </ul>
        <p class="footer__fontawesome">Icons by Font Awesome</p>
      </div>
    </base-container>
  </footer>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba($color: #000000, $alpha: 0.2);

  &__container {
    padding: 0 2rem;
    width: 100%;
    height: 5rem;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    align-items: center;
  }

  &__row-2 {
    margin-top: 0.5rem;
  }

  &__row-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }

  &__logo {
    font-size: 2rem;
    color: var(--main-color);
  }

  &__list {
    display: flex;
    justify-content: center;
  }

  &__item {
    margin: 0 0.75rem;
  }

  &__icon {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--main-color);
    cursor: pointer;

    &:hover {
      transform: scale(1.1) translateY(-2px);
      transition: all 0.35s;
    }
  }

  &__fontawesome {
    text-align: right;
  }
}

@media (max-width: 768px) {
  .footer {
  }
}
</style>
