<template>
  <div id="cv">
    <PageTitle
        title="Curriculum Vitae"
        paragraph="Where I come from"
        down_arrow_goal="#cv_"
        :background_image="background"
    />

    <ViewRow class="cv" id="cv_">
      <CVPersonal first_name="Andreas" last_name="Nicklaus" birthday="20.08.1999"/>

      <hr/>

      <CVTimeTopic topic-name="Education" :entries="[
          {'time': '2005 - 2009', 'activity': 'Liederbachschule, Liederbach, Germany'},
          {'time': '2009 - 2014', 'activity': 'Bischof-Neumann-Schule, Königstein, Gernmany'},
          {'time': '2014 - 2015', 'activity': 'Franz-Ludwig-Gymnasium, Bamberg, Germany'},
          {'time': '2015 - 2017', 'activity': 'Clavius Gymnasium, Bamberg, Germany'},
          {'time': 2017, 'activity': 'Abitur (Final grade: 1,4) at Clavius Gymnasium, Bamberg'},
          {'time': 'since 08/2018', 'activity': 'Bachelor Studies in Computer Science and Media'}
        ]"/>

      <hr/>

      <CVTimeTopic topic-name="Professional Work Experiences" :entries="[
          {'time': '2017 - 2018', 'activity': 'Voluntary Social Year at Brose Bamberg: Organization and Execution  of a' +
                ' Youth Sport program at Primary Schools and Camps'},
          {'time': '09/2020 - 02/2021', 'activity': 'Internship at IT-Designers GmbH: Development and Deployment of a Machine' +
                ' Learning Lifecycle using Kubernetes'}
        ]"/>

      <hr/>

      <CVTopicList topic-name="Special Accomplishments / Interests" :entries="[
          {'time': 'since 2015', 'activities': [
              'Professional Basketball Career at Brose Bamberg Youngsters (U19 National League)',
              'Baunach Young Pikes (2. National League Pro A), ',
              'Kirchheim Knights (2. National League Pro A)'
              ]}
          ]"/>
    </ViewRow>

    <ViewRow>
      <h1>My Skills</h1>
      <p>A (somewhat complete) list of frameworks and modules I have worked with so far:</p>
      <SkillsOverview/>
    </ViewRow>
  </div>
</template>

<script>
import PageTitle from "@/components/PageTitle";
import CVPersonal from "@/components/CV_View/CVPersonal";
import CVTimeTopic from "@/components/CV_View/CVTimeTopic";
import CVTopicList from "@/components/CV_View/CVTopicList";
import ViewRow from "@/components/ViewRow";
import fogIMG from "@/assets/img/unused/Nicklaus_Babyfoto.png";
import SkillsOverview from "@/components/About_View/SkillsOverview";

export default {
  name: "CV",
  components: {SkillsOverview, ViewRow, CVTopicList, CVTimeTopic, CVPersonal, PageTitle},
  metaInfo: {
    title: 'CV - '
  },
  data() {
    return {
      background: fogIMG
    }
  }
}
</script>
