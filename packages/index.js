import Popup from './popup';

const components = {
    Popup,
};

const version = '1.0.0';

const rexui = {
    ...components,
};
const install = function (Vue) {
    if (install.installed) return;

    Object.keys(rexui).forEach((key) => {
        Vue.component(key, rexui[key]);
    });

    // Vue.prototype.$Loading = LoadingBar;
    // Vue.prototype.$Message = Message;
    // Vue.prototype.$Modal = Modal;
    // Vue.prototype.$Notice = Notice;
    // Vue.prototype.$Spin = Spin;
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export {
    Popup,
};

export default {
    install,
    version,
};

