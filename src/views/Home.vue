<template>
  <div class="home">
    <PageTitle
        :background_image="page_img"
        background_image_alt="Andreas Nicklaus giving fans a high-five holding a little cheerleader in his arms"
        down_arrow_goal="#first"
        title="Welcome"
        :no_back_arrow="no_back_arrow">
      <p>Hi, I'm Andi 👋</p>
      <p>I'm a Software-Engineer, Data Scientist and Web Developer.</p>
    </PageTitle>

    <ViewRow id="first">
      <h1>ROADWORKS AHEAD</h1>
      <p>This page is still being developed. 👷 So don't judge me!</p>
      <div style="width: 50%; margin: 10% auto;">
        <img alt="Roadworks sign" src="@/assets/img/Roadsign.svg"/>
      </div>
    </ViewRow>

    <ViewRow>
      <h1>I'm looking for a job!</h1>
      <p>If you like what you see here and want to hire me, then please don't hesitate to invite me to an interview! 🥂
        <br/>
      Send me an email:
        <EmailContact :plaintext="true" mail="me@andreasnicklaus.de"/>
      </p>

      <h2>What I would like to become:</h2>
      <ul>
        <li>Full-stack Developer 🌐, preferably using at least one of..
          <ul>
            <li>Vue JS</li>
            <li>Angular</li>
            <li>React JS</li>
            <li>Flask</li>
            <li>Kubernetes or Docker-compose</li>
          </ul>
        </li>
        <li>UI/UX Designer</li>
        <li>AI engineer 🤖</li>
        <li>Correspondent on AI or human-machine interaction</li>
      </ul>

      <h2>My Skills 🤸</h2>
      <SkillsOverview/>

      <Button :link="{name: 'CV'}" text="My CV and other info" type="inline"/>
    </ViewRow>

    <ViewRow>
      <h1>What is this site? 🤔</h1>
      <p>When you don't find any information here that you need or gives you a good clue of why I have a website, then
        this is the text for you!</p>
      <p>I am an IT student 💻 and I like to think that I am quite good at what I do.
        So in order to keep my ego up I need the challenge and the result of creating and hosting my own website with all
        the problems and hiccups this come with. If you are reading this, thank you for the boost of self-esteem!
        I appreciate you! 🙏</p>
      <p>But this is only one side of the story. I would like this to be the result of my time in quarantine in 2020
        and 2021, so I can use this a convincing item of recommendation when I'm in a job interview.</p>
      <p>Actually, I would like any recruiter who is really doing his work thoroughly to ask me what I did when I
        worked at M.I.X. when I was 15. I didn't actually work there, but I like Easter eggs 🤫. Maybe I have some on
        this page...</p>
      <p>All of this is an elaborate way to say "Thank you!" to all of you for visiting and reading.
        I hope you like it here and let me know through one of my contact options
        <router-link class="underline" :to="{name: 'About'}">here</router-link>👈.
      </p>
      <p>Have a great day, Andi 👋</p>
      <small>(17.08.2021)</small>
    </ViewRow>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import AndiBasketball from "@/assets/img/Andi_Basketball.jpg";
import ViewRow from "@/components/ViewRow";
import EmailContact from "@/components/About_View/EmailContact";
import SkillsOverview from "@/components/About_View/SkillsOverview";
import Button from "@/components/Button";

export default {
  name: 'Home',
  components: {Button, SkillsOverview, EmailContact, ViewRow, PageTitle},
  metaInfo: {
    title: 'Home - '
  },
  data() {
    return {
      page_img: AndiBasketball,
      no_back_arrow: window.previousUrl === undefined || window.previousUrl === '/'
    }
  },
}
</script>
