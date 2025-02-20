<template>
  <main>
    <h1>Цей магазин належить програмісту на фрілансі.</h1>
    <ul>
      <h4>Тому:</h4>
      <li>* Mагазин працює швидко;</li>
      <li>* Товари надсилає коли хоче;</li>
      <li>* На запитання відповідає коли проспиться ;</li>
    </ul>
  </main>
</template>
<script setup></script>
<style lang="scss" scoped>
main {
  padding: 20px 0;
}
h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-align: left;
  color: purple;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
}
h4 {
  font-size: 21px;
  font-weight: 600;
  line-height: 1.4;
  text-align: left;
  color: purple;
}
li {
  list-style-type: none;
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  padding-left: 15px;
}
</style>
