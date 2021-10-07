    window.onload = function(){
        let canvas = document.getElementById("myCanvas")
        let ctx = canvas.getContext("2d")
        var tecla = 0
        var click = 0
        document.addEventListener("keydown", function(evento){
            tecla = evento.keyCode;
            mover()
        });

        var circulo = {
            x: 300,
            y: 300,
            r: 25,
            cor: "black"
        }

        var cores = ["Blue","Red","Green","Yellow"]
        function desenho() {
            ctx.fillStyle = cores[0]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 1.5*Math.PI, 0*Math.PI);
            ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(325,300)
            ctx.lineTo(300,275)
            ctx.fill()

            ctx.fillStyle = cores[1]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 2*Math.PI, 0.5*Math.PI);
            ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(300,325)
            ctx.lineTo(325,300)
            ctx.fill()

            ctx.fillStyle = cores[2]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 0.5*Math.PI, 1*Math.PI);
            ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(275,300)
            ctx.lineTo(300,325)
            ctx.fill()

            ctx.fillStyle = cores[3]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 1*Math.PI, 1.5*Math.PI);
            ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(275,300)
            ctx.lineTo(300,275)
            ctx.fill()

            
        }

        function mover() {
            if (tecla == 65){
                var armazem = []
                for (let i = 0; i < cores.length; i++) {
                    
                    armazem.push(cores[i])
                }
                cores[0] = armazem[1]
                cores[1] = armazem[2]
                cores[2] = armazem[3]
                cores[3] = armazem[0]
            }
            if (tecla == 68){
                var armazem = []
                for (let i = 0; i < cores.length; i++) {
                    
                    armazem.push(cores[i])
                }
                cores[0] = armazem[3]
                cores[1] = armazem[0]
                cores[2] = armazem[1]
                cores[3] = armazem[2]
            }
            
            
            requestAnimationFrame(desenho)
        }

        desenho()
    }
    

