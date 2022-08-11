<template>
  <div class="forum-control">
    <Button text="Support" link="/support"/>
    <Button text="Create" type="create" link="/forum/create"/>
    <!--TODO: Implement support window -->
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  name: "ForumControl",
  components: {Button}
}
</script>