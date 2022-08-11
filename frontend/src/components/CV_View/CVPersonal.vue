<template>
  <div id="cv-personal" class="cv-part">
    <h1>Personal Data</h1>
    <div id="cv-personal-data">
      <span>Last Name</span><span>{{ last_name }}</span>
      <span>First Name(s)</span><span>{{ first_name }}</span>
      <span>Birthday</span><span>{{ birthday }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CVPersonal",
  props: ['last_name', 'first_name', 'birthday']
}
</script>