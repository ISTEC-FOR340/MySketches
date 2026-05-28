window.onload = function () {
    const routes = {
        "btn-p1": "proyecto1/proyecto1.html",
        "btn-p2": "proyecto2/proyecto2.html"
    };

    Object.keys(routes).forEach(id => {
        const element = document.getElementById(id);

        if (element) {
            const navigate = () => {
                window.location.href = routes[id];
            };

            element.onclick = navigate;

            element.onkeydown = (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate();
                }
            };
        }
    });
};
