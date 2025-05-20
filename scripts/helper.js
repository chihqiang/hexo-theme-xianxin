// 获取配置项
hexo.extend.helper.register("conf", cfg => {
    let conf = hexo.theme.config[cfg]
    if (hexo.config[cfg]) {
        conf = hexo.config[cfg]
    }
    return conf
})

hexo.extend.generator.register('404', function (locals) {
    return {
        path: '404.html',
        data: {},
        layout: ['404', 'layout']
    };
});
hexo.extend.generator.register('tags', function (locals) {
    return {
        path: 'tags.html',
        data: {},
        layout: ['tags', 'layout']
    };
});

hexo.extend.generator.register('categories', function (locals) {
    return {
        path: 'categories.html',
        data: {},
        layout: ['categories', 'layout']
    };
});