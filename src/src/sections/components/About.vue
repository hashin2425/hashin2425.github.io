<template>
    <div id="about-div" @mouseover="isAboutBoxHover = true" @mouseleave="isAboutBoxHover = false">
        <p v-if="true">
            学部
            {{ myGrade }}
            年生のHashin2425です。
        </p>
        <p v-if="false">
            <!-- いったん無効にする -->
            <span>学部</span>
            <span style="background-color: rgb(32, 32, 32); padding: 0 0.2rem; margin: 0 0.2rem; font-size: 0.9rem;">
                <span style="color: rgb(156, 220, 254);">Math</span>
                <span style="color: rgb(255, 255, 255);">.</span>
                <span style="color: rgb(220,220,170);">floor</span>
                <span style="color: rgb(220,100,170);">(</span>
                <span style="color: rgb(90,160,200);">(</span>
                <span style="color: rgb(90,160,200);"> new </span>
                <span style="color: rgb(80,190,140);"> Date</span>
                <span style="color: rgb(255,190,45);"> ()</span>
                <span style="color: rgb(255, 255, 255);"> - </span>
                <span style="color: rgb(90,160,200);"> new</span>
                <span style="color: rgb(80,190,140);"> Date</span>
                <span style="color: rgb(255,190,45);"> (</span>
                <span style="color: rgb(180, 210, 145);"> 2023</span>
                <span style="color: rgb(255, 255, 255);"> ,</span>
                <span style="color: rgb(180, 210, 145);"> 4</span>
                <span style="color: rgb(255, 255, 255);"> ,</span>
                <span style="color: rgb(180, 210, 145);"> 1</span>
                <span style="color: rgb(255,190,45);"> )</span>
                <span style="color: rgb(90,160,200);"> ) </span>
                <span style="color: rgb(255, 255, 255);"> / </span>
                <span style="color: rgb(90,160,200);"> (</span>
                <span style="color: rgb(180, 210, 145);"> 1000 </span>
                <span style="color: rgb(255, 255, 255);"> *</span>
                <span style="color: rgb(180, 210, 145);"> 60 </span>
                <span style="color: rgb(255, 255, 255);"> *</span>
                <span style="color: rgb(180, 210, 145);"> 60 </span>
                <span style="color: rgb(255, 255, 255);"> *</span>
                <span style="color: rgb(180, 210, 145);"> 24 </span>
                <span style="color: rgb(255, 255, 255);"> * </span>
                <span style="color: rgb(180, 210, 145);"> 365</span>
                <span style="color: rgb(90,160,200);"> )</span>
                <span style="color: rgb(220,100,170);"> ) </span>
                <span style="color: rgb(255, 255, 255);"> +</span>
                <span style="color: rgb(180, 210, 145);"> 1</span>
            </span>
            <span>年生のHashin2425です。</span>
        </p>
        <p>趣味や大学のプロジェクトで色々な開発を行っております。</p>
        <p>
            リンク：
            <a v-for="s in sns" :key="s.name" :href="s.url" target="_blank" rel="noopener noreferrer"
                class="shadow-box link-icon">
                > {{ s.name }}
            </a>
        </p>
    </div>
</template>

<script>
export default {
    name: "About-section",
    props: {
        sns: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            myGrade: Math.floor((new Date() - new Date(2023, 4, 1)) / (1000 * 60 * 60 * 24 * 365)) + 1,
            isAboutBoxHover: false
        }
    }
}
</script>

<style scoped>
p {
    margin: 0.2rem;
}

#about-div {
    background-color: white;
    border-radius: 1rem;
    padding: 0.2rem;
    margin: 0.2rem 0;
}

a {
    margin: 0.2rem;
    padding: 0 0.4rem;
    color: white;
    border-radius: 0.4rem;
    font-size: 1rem;
    background: linear-gradient(45deg, rgb(10, 30, 190), rgb(60, 10, 200));
}

.link-icon {
    display: inline-block;
    white-space: nowrap;
}
</style>