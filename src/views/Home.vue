<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" class="logo">
        <base-input
            v-model="value"
            placeholder="edit me"></base-input>
        <base-button
            :buttonVal="buttonVal"
            v-copy="value"></base-button>
<!--            :needCopyContent="value"></base-button>-->
    </div>
</template>

<script>

export default {
    name: 'Home',
    components: {

    },
    data () {
        return {
            value: '',
            buttonVal: '一键copy'
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo {
        width: 45px;
    }
    .base-input {
        margin-top: 15px;
    }
    .base-button {
        margin-top: 15px;
    }
}
</style>