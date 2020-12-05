<template>
  <div>
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap");

:root {
  --main-color: #8a3bc2;
}

html {
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1,
h3,
h4 {
  color: var(--main-color);
}

h3 {
  font-size: 1.8rem;
}

ul {
  list-style: none;
  font-size: 1.1rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: inherit;
}

main {
  padding: 1.5rem 2rem;
  min-height: 45.2rem;
}
</style>
