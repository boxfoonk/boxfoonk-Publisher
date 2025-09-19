particlesJS('particles-js', {
    "particles": {
        "number": {
            "value": 80, // 粒子数量
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#585fbd" // 粒子颜色，使用您网站的主题色
        },
        "shape": {
            "type": "circle"
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#555", // 连接线的颜色
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2, // 移动速度
            "direction": "none",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab" // 鼠标悬停时抓取连线
            },
            "onclick": {
                "enable": true,
                "mode": "push" // 鼠标点击时推出粒子
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 140,
                "line_linked": {
                    "opacity": 1
                }
            },
            "push": {
                "particles_nb": 4
            }
        }
    },
    "retina_detect": true
});