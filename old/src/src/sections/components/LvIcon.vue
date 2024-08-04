<template>
    <div class="lv-icon-container">
        <span class="lv" :class="'level-' + level" @mouseover="showDescription = true"
            @mouseleave="showDescription = false">Lv.{{ level }}</span>
        <div v-if="showDescription" class="description">{{ descriptions[level] }}</div>
    </div>
</template>

<script>
export default {
    name: "LvIcon",
    props: {
        level: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            descriptions: {
                0: "少し触ったことのある程度",
                1: "勉強中であり、まだ上手く扱えない",
                2: "調べたりAIを使ったりすることで、任意の処理やタスクを遂行できる",
                3: "その言語やツールの特性を理解し、適切な方法で活用できる",
                4: "その言語やツールから派生して、フレームワークやライブラリを作れる",
            },
            showDescription: false,
        };
    },
};
</script>

<style scoped>
.lv-icon-container {
    display: flex;
    justify-content: center;
    position: relative;
}

.description {
    margin-top: 2rem;
    position: absolute;
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 5px;
    z-index: 1;
}

.lv {
    height: 1.6rem;
    border-radius: 0.2rem;
    color: white;
    padding: 0 0.4rem;
}

.level-0 {
    background-image: linear-gradient(135deg, #B0BEC5 0%, #90A4AE 100%);
}

.level-1 {
    background-image: linear-gradient(135deg, #81C784 0%, #66BB6A 100%);
}

.level-2 {
    background-image: linear-gradient(135deg, #FFB74D 0%, #FFA726 100%);
}

.level-3 {
    background-image: linear-gradient(135deg, #BA68C8 0%, #AB47BC 100%);
}

.level-4 {
    background-image: linear-gradient(135deg, #EF5350 0%, #F44336 100%);
}
</style>
