<template>
    <input
        type="text"
        class="base-input"
        :value="value"
        v-bind="$attrs"
        ref="input"
        @input="$emit('input', $event.target.value)">
</template>

<script>
export default {
    name: "BaseInput",
    props: {
        value: {
            required: true
        }
    },
    mounted () {
        this.$refs.input.focus(); // input框聚焦
    }
}
</script>

<style scoped lang="less">
.base-input {
    outline: none;
    border: 1px solid #666;
    text-indent: 6px;
    padding: 6px;
    border-radius: 4px;
}
</style>