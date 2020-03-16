const vCopy = {
    bind (el, { value }) {
        console.log('el：', el, 'value：', value);
        el.$value = value;
        el.handler = () => {
            if (!el.$value) {
                throw new Error('must have value!');
            }
            const textarea = document.createElement('textarea');
            textarea.readOnly = 'readonly';
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            textarea.value = el.$value;
            document.body.appendChild(textarea);
            textarea.select(); // 进行全选
            const result = document.execCommand('Copy');
            console.log('result', result);
            if (result) {
                console.log('复制成功');
            }
            document.body.removeChild(textarea);
        }
        // 绑定点击事件，实现一键 copy。
        el.addEventListener('click', el.handler);
    },
    // 当传进来的值更新的时候触发
    componentUpdated (el, { value }) {
        console.log('v-copy value值更新：', value);
        el.$value = value;
    },
    unbind (el) {
        el.removeEventListener('click', el.handler);
    }
}

export default vCopy;