import copy from './v-copy';

const directives = {
    copy
};

export default {
    install (Vue) {
        Object.keys(directives).forEach(key => {
            Vue.directive(key, directives[key]);
        })
    }
}