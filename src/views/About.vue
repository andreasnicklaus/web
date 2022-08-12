<template>
  <div id="about">
    <PageTitle
        title="About"
        paragraph="Learn more about this page"
        :background_image="backgroundIMG"
        background_image_alt="Beautiful sundown"
        down_arrow_goal="#creator_overview"
    />

    <ViewRow id="creator_overview">
      <CreatorOverview
          name="Andreas Nicklaus"
          :image="img_andreas"
          mail="me@andreasnicklaus.de"
          instagramHandle="andreasnicklaus"
          linkedInHandle="andreasnicklaus"
          gitHubHandle="andreasnicklaus"
          stackOverflowLink="15760205/andi-lrainingsbuckets"
          birthday="1999-08-20">

        <p>Andreas is a Computer Science and Media student 💻 at the University of Applied Science for Media in Stuttgart, Germany.</p>
        <p>In his free time he likes to watch very confusing comedy movies 📽 and play Basketball 🏀.</p>
        <p>This is my website and I'd like for you to explore it! <em title="Adventure!">冒険!</em></p>
      </CreatorOverview>
    </ViewRow>

    <ViewRow>
      <Assets/>
    </ViewRow>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import Assets from "@/components/About_View/Assets";
import CreatorOverview from "@/components/About_View/CreatorOverview";
import AN_image from"@/assets/img/AndreasNicklaus.jpeg"
import skyImage from "@/assets/img/unused/AN_Anni_Walberla.jpg"
import ViewRow from "@/components/ViewRow";

export default {
  name: 'About',
  components: {ViewRow, CreatorOverview, Assets, PageTitle},
  metaInfo: {
    title: 'About - '
  },
  data() {
    return {
      img_andreas: AN_image,
      backgroundIMG: skyImage
    }
  }
}
</script>
