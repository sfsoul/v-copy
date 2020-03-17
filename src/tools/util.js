// 抽象出copy功能函数，使它不仅能在Vue中使用
export const copyContent = value => {
    console.log('copyContent value：', value);
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', value);
    input.select();
    if (document.execCommand('copy')) {
        document.execCommand('copy');
        console.log('复制成功');
    }
    document.body.removeChild(input);
}

