<template>
  <div class="assets">
    <h1>Assets</h1>

    <p>The following shows all the assets, frameworks and modules used to create this website.</p>

    <hr/>

    <AssetPresentation
        :image="vueJSlogo"
        description="Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications."
        link="https://vuejs.org/"
        name="Vue JS"/>

    <hr/>

    <AssetPresentation
        :image="materiallogo"
        description="Material icons are delightful, beautifully crafted symbols for common actions and items. Download on desktop to use them in your digital products for Android, iOS, and web."
        link="https://material.io"
        name="Material Icons"/>

    <hr/>

    <AssetPresentation
        :image="fontAwesomeLogo"
        description="Font Awesome is a font and icon toolkit based on CSS and Less. As of 2020, Font Awesome was used by 38% of sites that use third-party font scripts, placing Font Awesome in second place after Google Fonts."
        link="https://fontawesome.com/"
        name="Font Awesome"/>

    <hr/>

    <AssetPresentation
        :image="flaskLogo"
        class="needs-background"
        description="Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications. It began as a simple wrapper around Werkzeug and Jinja and has become one of the most popular Python web application frameworks."
        link="https://palletsprojects.com/p/flask/"
        name="Flask"/>

    <hr/>

    <AssetPresentation
        :image="dockerComposeLogo"
        description="Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration."
        link="https://docs.docker.com/compose/"
        name="Docker Compose"/>

    <hr/>

    <AssetPresentation
        :image="postgresLogo"
        description="PostgreSQL is a powerful, open source object-relational database system with over 30 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance."
        link="https://www.postgresql.org/"
        name="Postgres"/>

    <!-- TODO: add Google Auth  -->
  </div>
</template>

<script>
import AssetPresentation from "@/components/About_View/AssetPresentation";
import vueJSimg from "@/assets/img/Logos/VUEJS-logo.png";
import MaterialIMG from "@/assets/img/Logos/Material-Design-Logo.png";
import fontAwesomeLogo from "@/assets/img/Logos/font_awesome_logo.png";
import dockerComposeLogo from "@/assets/img/Logos/docker-compose-logo.png";
import flaskLogo from "@/assets/img/Logos/flask-logo.png";
import postgresLogo from "@/assets/img/Logos/postgres-logo.png";

export default {
  name: "Assets",
  components: {AssetPresentation},
  data() {
    return {
      vueJSlogo: vueJSimg,
      materiallogo: MaterialIMG,
      fontAwesomeLogo: fontAwesomeLogo,
      dockerComposeLogo: dockerComposeLogo,
      flaskLogo: flaskLogo,
      postgresLogo: postgresLogo
    }
  }
}
</script>
