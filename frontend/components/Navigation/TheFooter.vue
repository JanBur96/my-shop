<template>
  <footer class="footer">
    <base-container class="footer__container">
      <div class="footer__row-1">
        <p class="footer__logo">Logo</p>
      </div>
      <div class="footer__row-2">
        <ul class="footer__list">
          <li class="footer__item">
            Terms of Service
          </li>
          <li class="footer__item">
            Privacy Policy
          </li>
          <li class="footer__item">
            Security
          </li>
          <li class="footer__item">
            Sitemap
          </li>
        </ul>
      </div>
      <div class="footer__row-3">
        <p>Copyright 2020 by Name</p>
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
        <p class="footer__icons">Icons by Font Awesome</p>
      </div>
    </base-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid rgba($color: #000000, $alpha: 0.2);

  &__container {
    padding: 0 2rem;
    width: 100%;
    height: 10rem;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    align-items: center;
  }

  &__row-1 {
    text-align: center;
  }

  &__row-3 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
    margin: 0 1rem;
  }

  &__icon {
    width: 24px;
    height: 24px;
    color: var(--main-color);
    cursor: pointer;

    &:hover {
      transform: scale(1.1) translateY(-2px);
      transition: all 0.5s;
    }
  }

  &__icons {
    text-align: right;
  }
}
</style>
