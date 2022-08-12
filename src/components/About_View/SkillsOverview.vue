<template>
  <div class="skills-overview row between">
    <a :id="name" class="col-6" v-for="{name, logo, url} in skills" :key="name" :href="url">
      <img :title="name" :src="logo" :alt="name + ' Logo'"/>
    </a>
  </div>
</template>

<script>
import VueLogo from '@/assets/img/selbsterstellt/vue.png';
import AngularLogo from '@/assets/img/Logos/Angular.png';
import ReactLogo from '@/assets/img/Logos/React.png';
import BootstrapLogo from '@/assets/img/Logos/Bootstrap.png';
import JWTLogo from '@/assets/img/Logos/JWT.png';
import HTML5Logo from '@/assets/img/Logos/HTML5.png';
import SassLogo from '@/assets/img/Logos/Sass.png';
import CssLogo from '@/assets/img/Logos/CSS.png';
import SpringLogo from '@/assets/img/Logos/SpringBoot.png';
import NodeLogo from '@/assets/img/Logos/NodeJS.png';
import NpmLogo from '@/assets/img/Logos/NPM.png';
import FlaskLogo from '@/assets/img/Logos/flask-logo.png';
import AWSLogo from '@/assets/img/Logos/AWS.png';
import KubernetesLogo from '@/assets/img/Logos/Kubernetes.png';
import DockerComposeLogo from '@/assets/img/Logos/docker-compose-logo.png';
import DockerLogo from '@/assets/img/selbsterstellt/docker.png';
import GitlabLogo from '@/assets/img/Logos/Gitlab.png';
import PostgresLogo from '@/assets/img/Logos/postgres-logo.png';
import MySQLLogo from '@/assets/img/Logos/MySQL.png';
import mongoDBLogo from '@/assets/img/Logos/mongoDB.png';
import SKLLogo from '@/assets/img/Logos/SkLearn.png';
import TFLogo from '@/assets/img/Logos/TF.png';
import PythonLogo from '@/assets/img/Logos/Python.png';
import JSLogo from '@/assets/img/Logos/JS.png';
import JavaLogo from '@/assets/img/Logos/Java.png';
import CPPLogo from '@/assets/img/Logos/CPP.png';
import BashLogo from '@/assets/img/Logos/Bash.png';
import vsCodeLogo from '@/assets/img/Logos/VScode.png';
import JetBrainsLogo from '@/assets/img/Logos/JetBrains.png';
import YamlLogo from '@/assets/img/Logos/YAML.png';

export default {
  name: "SkillsOverview",
  data() {
    return {
      skills: [
        {name: 'Vue JS', logo: VueLogo, url: 'https://vuejs.org/'},
        {name: 'Angular JS', logo: AngularLogo, url: 'https://angular.io/'},
        {name: 'React', logo: ReactLogo, url: 'https://reactjs.org/'},
        {name: 'Bootstrap', logo: BootstrapLogo, url: 'https://getbootstrap.com/'},
        {name: 'JWT', logo: JWTLogo, url: 'https://jwt.io/'},
        {name: 'Spring Boot', logo: SpringLogo, url: 'https://spring.io/projects/spring-boot'},
        {name: 'Flask', logo: FlaskLogo, url: 'https://flask.palletsprojects.com/en/2.0.x/'},
        {name: 'Node JS', logo: NodeLogo, url: 'https://nodejs.org/en/'},
        {name: 'NPM', logo: NpmLogo, url: 'https://www.npmjs.com/'},
        {name: 'Postgres', logo: PostgresLogo, url: 'https://www.postgresql.org/'},
        {name: 'MySQL', logo: MySQLLogo, url: 'https://www.mysql.com/'},
        {name: 'mongoDB', logo: mongoDBLogo, url: 'https://www.mongodb.com/'},
        {name: 'AWS', logo: AWSLogo, url: 'https://aws.amazon.com/'},
        {name: 'Kubernetes', logo: KubernetesLogo, url: 'https://kubernetes.io/'},
        {name: 'Docker-compose', logo: DockerComposeLogo, url: 'https://docs.docker.com/compose/'},
        {name: 'Docker', logo: DockerLogo, url: 'https://www.docker.com/'},
        {name: 'Gitlab', logo: GitlabLogo, url: 'https://about.gitlab.com/'},
        {name: 'scikit-learn', logo: SKLLogo, url: 'https://scikit-learn.org/'},
        {name: 'TensorFlow', logo: TFLogo, url: 'https://www.tensorflow.org/'},
        {name: 'Python', logo: PythonLogo, url: 'https://www.python.org/'},
        {name: 'HTML 5', logo: HTML5Logo, url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'},
        {name: 'CSS', logo: CssLogo, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
        {name: 'SASS', logo: SassLogo, url: 'https://sass-lang.com/'},
        {name: 'JavaScript', logo: JSLogo, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
        {name: 'Java', logo: JavaLogo, url: 'https://www.java.com/en/'},
        {name: 'CPP', logo: CPPLogo, url: 'https://www.cplusplus.com/'},
        {name: 'GNU Bash', logo: BashLogo, url: 'https://www.gnu.org/software/bash/'},
        {name: 'YAML', logo: YamlLogo, url: 'https://yaml.org/'},
        {name: 'VS Code', logo: vsCodeLogo, url: 'https://code.visualstudio.com/'},
        {name: 'Jetbrains Products', logo: JetBrainsLogo, url: 'https://www.jetbrains.com/'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
