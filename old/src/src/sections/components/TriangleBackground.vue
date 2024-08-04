<template>
    <div class="background-gradient"></div>
    <canvas id="background-triangles"></canvas>
</template>
<script>
export default {
    name: "TriangleBackground",
    setup() {
        window.addEventListener("load", function () {
            const canvas = document.getElementById("background-triangles");
            const ctx = canvas.getContext("2d");
            let triangles = [];

            function Triangle(x, y, size, color, speed, rotationSpeed) {
                this.x = x;
                this.y = y;
                this.size = size;
                this.color = color;
                this.speed = speed;
                this.angle = 0;
                this.rotationSpeed = rotationSpeed;
            }

            Triangle.prototype.draw = function () {
                ctx.fillStyle = this.color;
                ctx.save();
                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.size, this.y);
                ctx.lineTo(this.x + this.size / 2, this.y - this.size);
                ctx.rotate(this.angle);
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            };

            Triangle.prototype.update = function () {
                this.y += 1;
                if (this.y > canvas.height + this.size) {
                    this.y = -this.size;
                }
                this.draw();
            };

            function randomInt(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            function randomColor() {
                const r = Math.floor((Math.random() * 55) + 200);
                const g = Math.floor((Math.random() * 55) + 200);
                const b = Math.floor((Math.random() * 55) + 200);
                return `rgb(${r}, ${g}, ${b})`;
            }

            function canvasInitialize() {
                for (let i = 0; i < 150; i++) {
                    const size = randomInt(5, 25);
                    const x = randomInt(0, canvas.width);
                    const y = randomInt(0, canvas.height);
                    const color = randomColor();
                    const speed = randomInt(0.25, 0.5);
                    const rotationSpeed = Math.random() * 0.05 - 0.025;
                    triangles.push(new Triangle(x, y, size, color, speed, rotationSpeed));
                }
            }

            function triangleAnimation() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                triangles.forEach(triangle => {
                    triangle.angle += triangle.rotationSpeed;
                    triangle.y += triangle.speed;
                    triangle.update();
                });
                requestAnimationFrame(triangleAnimation);
            }

            function handleResize() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }
            window.addEventListener("resize", handleResize);

            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvasInitialize();
            triangleAnimation();
        });
    }
}
</script>

<style scoped>
.background-gradient,
#background-triangles {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.background-gradient {
    background-image: linear-gradient(45deg, rgb(227, 200, 243), rgb(173, 208, 224));
    z-index: -2;
}

#background-triangles {
    z-index: -1;
}
</style>