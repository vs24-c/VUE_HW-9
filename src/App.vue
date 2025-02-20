<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink :to="{ name: 'home' }">Головна </RouterLink>
        <RouterLink :to="{ name: 'store' }">Магазин</RouterLink>
        <RouterLink :to="{ name: 'home' }">Правила оплати</RouterLink>
        <RouterLink :to="{ name: 'contact' }">Контакти</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  padding: 15px 25px;
  background-color: #f0f3f6;

  & nav {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-wrap: wrap;
    gap: 15px;
    a {
      font-size: 18px;
      font-weight: 700;
      color: black;
      text-decoration: none;
      transition: color 0.3s ease;
      &:hover {
        color: #999;
      }
    }
  }
}
</style>
