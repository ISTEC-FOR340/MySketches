window.onload = function () {
    const routes = {
        "btn-p1": "proyecto2/proyecto2.html",
        "btn-p2": "proyecto1/proyecto1.html"
    };

    Object.keys(routes).forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            element.onclick = () => {
                window.location.href = routes[id];
            };
        }
    });
};