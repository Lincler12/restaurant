const basehtml = (() => {
    const body = document.getElementsByTagName('body')[0];
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);
})();

export {basehtml};