<template>
    <div id="section-parent">
        <div id="section-child">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "sectionContainer",
};
</script>

<style scoped>
#section-parent {
    width: 100%;
}

#section-parent:nth-of-type(odd) {
    background-color: #f8f8f8;
}

#section-parent:nth-of-type(even) {
    background-color: #ffffff;
}

#section-child {
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}
</style>