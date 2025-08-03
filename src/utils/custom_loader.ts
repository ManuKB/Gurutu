
const custom_loader = (() => {
    let loaderElement = document.getElementById('loader');

    if (!loaderElement) {
        console.error('Loader element not found');
    }

    const showLoader = () => {
        if (!loaderElement) {
            loaderElement = document.getElementById('loader');
        }
        loaderElement.hidden = false;
    };

    const hideLoader = () => {
        if (!loaderElement) {
            loaderElement = document.getElementById('loader');
        }
        loaderElement.hidden = true;
    };
    return {
        show: showLoader,
        hide: hideLoader,
        showLoader: showLoader,
        hideLoader: hideLoader
    };
})();


export default custom_loader;