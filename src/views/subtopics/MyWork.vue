<template>
  <div id="my-work">
    <PageTitle
        title="My Gallery"
        paragraph="My time as a working member of society has been short, and the list of presentable work even shorter.
      Nonetheless you are here..."
        down_arrow_goal="#firstviewrow"
        :background_video="brightWaterVideo"/>

    <ViewRow id="firstviewrow">
      <h1>My projects in CGI</h1>
      <img-vid-viewer id="cg-viewer" :imgVids="cgWork"/>
    </ViewRow>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import ViewRow from "@/components/ViewRow";
import ImgVidViewer from "@/components/ImgVidViewer";
import brightWaterVideo from "@/assets/video/water_sundown_bright.mp4";
import neonLoopVideo from "@/assets/video/neon-loop.mp4";
import darkWaterVideo from "@/assets/video/water_sundown_dark.mp4";
import donutVideo from "@/assets/video/Donut.mp4";

import donutImage from "@/assets/img/selbsterstellt/Donut.png";
import CGNebelNacht from "@/assets/img/unused/CG_Nebel_Nacht.jpg";

export default {
  name: "MyWork",
  components: {ImgVidViewer, ViewRow, PageTitle},
  data() {
    return {
      brightWaterVideo,
      cgWork: [CGNebelNacht, neonLoopVideo, donutVideo, darkWaterVideo, donutImage, brightWaterVideo]
    }
  }
}
</script>
