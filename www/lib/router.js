var router = (function () {
    "use strict";

    var routes = [];

    function addRoute(route, handler) {
        routes.push({parts: route.split('/'), handler: handler});
    }

    function load(route) {
        window.location.hash = route;
    }

    function start() {
        var path = window.location.hash.substr(1); // 获取url hash，即从#开始的字符串

        for (var i = 0; i < routes.length; i++) {
            var route = routes[i];
            for (var j = 0; j < route.parts.length; j++) {
                if (route.parts[j]) {
                    // hash: ' '    route: /index
                    if (!path) {
                        path = route.parts[j] = 'index';
                    }

                    // hash: #index、#shake、#about、    route: /index、/shake、/about
                    if (path.indexOf('/') === -1 && path === route.parts[j]) {
                        route.handler.apply(null);
                    }

                    // hash: #emoji/id    route: /emoji/:id
                    if (path.indexOf('/') > -1 && path.split('/')[0] === route.parts[j]) {
                        var params = [];
                        params.push(path.split('/')[1]); // id值
                        route.handler.apply(null, params);
                    }
                } else {
                    continue;
                }
            }
        }
    }

    $(window).on('hashchange', start);

    return {
        addRoute: addRoute,
        load: load,
        start: start
    };

}());