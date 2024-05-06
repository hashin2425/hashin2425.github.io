<template>
  <div id="main">
    <h1>About me</h1>
    <div class="about">
      <div class="about-icon">
        <img :src="myIcon" alt="icon" height="150" />
      </div>
      <div class="about-desc">
        <p>経済学部2年生のHashin2425です。</p>
        <p>個人開発とか競プロとかをやっています。</p>
      </div>
      <div class="about-sns">
        <a v-for="s in sns" :key="s.name" :href="s.url" target="_blank" rel="noopener noreferrer"
          class="shadow-box link-icon">
          > {{ s.name }}
        </a>
      </div>
    </div>

    <div class="vert-space"></div>

    <h1>Projects</h1>
    <CreativeCard />
  </div>
</template>

<script>
import CreativeCard from "./components/CreativeCard.vue";
import myIcon from "./assets/icon.png";

export default {
  name: "Main-section",
  components: {
    CreativeCard,
  },
  data() {
    return {
      myIcon,
      sns: [
        { name: "Twitter", url: "https://twitter.com/HashIn2425" },
        { name: "GitHub", url: "https://github.com/hashin2425" },
        { name: "Qiita", url: "https://qiita.com/hashin2425" },
        { name: "AtCoder", url: "https://atcoder.jp/users/HashIn2425" },
      ],
    };
  },
};
</script>

<style>
h1 {
  font-size: 1.6rem;
  padding: 0 0 0 0.5rem;
  margin: 1rem 0 1rem 0 ;
  border-left: #1eaa35 solid 0.4rem;
}

p {
  margin: 0.5rem;
}

#main {
  margin: 1rem 2rem 2rem 2rem;
}

.link-icon {
  display: inline-block;
  white-space: nowrap;
  border-radius: 0.4rem;
  font-size: 1rem;
  background: linear-gradient(45deg, rgb(10, 30, 190), rgb(60, 10, 200));
  color: white;
  padding: 0.2rem 0.4rem;
  margin: 0.2rem;
  text-decoration: none;
}

.shadow-box:hover {
  box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.3);
}

.vert-space {
  height: 3rem;
}
</style>
