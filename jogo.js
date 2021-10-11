
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

        var cores = ["blue","red","green","yellow"]
        function desenho() {
            ctx.fillStyle = cores[0]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 1.5*Math.PI, 0*Math.PI);
            // ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(325,300)
            ctx.lineTo(300,275)
            ctx.fill()

            ctx.fillStyle = cores[1]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 2*Math.PI, 0.5*Math.PI);
            // ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(300,325)
            ctx.lineTo(325,300)
            ctx.fill()

            ctx.fillStyle = cores[2]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 0.5*Math.PI, 1*Math.PI);
            // ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(275,300)
            ctx.lineTo(300,325)
            ctx.fill()

            ctx.fillStyle = cores[3]
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(circulo.x, circulo.y, circulo.r, 1*Math.PI, 1.5*Math.PI);
            // ctx.stroke();
            ctx.moveTo(300,300)
            ctx.lineTo(275,300)
            ctx.lineTo(300,275)
            ctx.fill()

            
        }
            
            var P_TL = 0
            var P_BR = 600

            var P_TR = 0
            var P_BL = 0
            
            var cor_TL = "yellow"
            var cor_BR = "red"

            var jogo = 0
            var c = 0
        function jogar() {    
            // Objeto TOP LEFT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_TL-2,P_TL-2, circulo.r, 0.96*Math.PI, 1.53*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_TL
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_TL,P_TL, circulo.r, 1*Math.PI, 1.5*Math.PI);
            ctx.moveTo(P_TL,P_TL)
            ctx.lineTo(P_TL - 25,P_TL)
            ctx.lineTo(P_TL,P_TL - 25)
            ctx.fill()
            P_TL += 1
            
            // Objeto BOT RIGHT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_BR+2,P_BR+2, circulo.r, 1.95*Math.PI, 0.54*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_BR
            ctx.beginPath();
            ctx.arc(P_BR,P_BR, circulo.r, 2*Math.PI, 0.5*Math.PI);
            ctx.moveTo(P_BR,P_BR)
            ctx.lineTo(P_BR + 25,P_BR)
            ctx.lineTo(P_BR,P_BR + 25)
            ctx.fill()
            P_BR -= 1

            // Se objetos estiverem no centro
                if (P_BR == 300){
                    if (cor_BR == cores[1]){
                        P_BR = 600
                        requestAnimationFrame(desenho)
                        jogo = 1
                    }
                    else{
                        P_BR = 300
                        c = 1
                        requestAnimationFrame(desenho)
                    }
                }
                if (P_TL == 300){
                    if (cor_TL == cores[3]){
                        P_TL = 0
                        requestAnimationFrame(desenho)
                        jogo = 1
                    }
                    else{
                        P_TL = 300
                        c = 1
                        requestAnimationFrame(desenho)
                    }
                }
                
                // Se o player acertar
                // aumentar a velocidade//randomizar cores
                if (jogo == 1){
                    jogo = 0
                    requestAnimationFrame(jogar)
                    requestAnimationFrame(jogar)
                }
                else if(jogo == 0 && c == 0){
                    requestAnimationFrame(jogar)
                }
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
