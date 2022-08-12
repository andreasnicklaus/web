<template>
  <div id="imprint">
    <PageTitle
        title="Imprint"
        paragraph="I don't have any money!"
        down_arrow_goal="#start"
        :background_image="books_img"
        background_image_alt="Some beautiful books"
    />

    <ViewRow id="start">
      <h1>Director of Content</h1>
      <span class="block">Andreas Nicklaus</span>
      <EmailContact mail="info@andreasnicklaus.de" :plaintext="true"/>

      <hr>

      <h1>Deployment Manager</h1>
      <span class="block">Andreas Nicklaus</span>
      <EmailContact mail="info@andreasnicklaus.de" :plaintext="true"/>

      <hr>

      <h1>Legal Director</h1>
      <span class="block">Andreas Nicklaus</span>
      <EmailContact mail="info@andreasnicklaus.de" :plaintext="true"/>
    </ViewRow>

    <ViewRow id="dataProtectionNotice">
      <h1>Data protection notice</h1>
      <p>When using this website, usage data is collected, but no user data. This usage data is anonymised and used for
        training purposes only. If you have any further questions, please contact the creators of the site
        <router-link class="underline" to="/about#creator_overview">here</router-link>
        .
      </p>

      <p>The following data points are currently being collected for analysis:</p>
      <ul>
        <li>Your clicks and navigation path on this site</li>
        <li>The time and type off your interactions</li>
      </ul>

      <p>The following data points are currently being collected for user management and features that are only
        available when logged in:</p>
      <ul>
        <li>Username</li>
        <li>Password</li>
        <li>Forum Posts</li>
      </ul>

      <p>The following data points are optionally being collected in addition to the above:</p>
      <ul>
        <li>Your IP-address(es)</li>
      </ul>
    </ViewRow>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import ViewRow from "@/components/ViewRow";
import Books_Image from "@/assets/img/stock/unsplash-books.jpg";
import EmailContact from "@/components/About_View/EmailContact";

export default {
  name: "Imprint",
  components: {EmailContact, ViewRow, PageTitle},
  metaInfo: {
    title: 'Imprint - '
  },
  data() {
    return {
      books_img: Books_Image
    }
  }
}
</script>
