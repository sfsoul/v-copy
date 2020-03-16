<template>
    <button class="base-button">
        {{buttonVal}}
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        buttonVal: {
            type: String
        }
    }
}
</script>

<style scoped lang="less">
.base-button {
    outline: none;
    border: 1px solid #666;
    border-radius: 4px;
    padding: 6px 16px;
    cursor: pointer;
    color: #000;
}
</style>