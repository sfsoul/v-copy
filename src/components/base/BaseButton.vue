<template>
    <button class="base-button">
        {{buttonVal}}
    </button>
<!--    <button class="base-button" @click="copyFn(needCopyContent)">-->
<!--        {{buttonVal}}-->
<!--    </button>-->
</template>

<script>
import { copyContent } from "tools/util";

export default {
    name: "BaseButton",
    props: {
        buttonVal: {
            type: String
        }
        // needCopyContent: {
        //     required: true
        // }
    },
    methods: {
        copyFn (value) {
            copyContent(value);
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