
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
        var pontos = -1
        var pontos_novo = 0
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

            if (pontos != pontos_novo || pontos == -1){
                ctx.clearRect ( 0 , 0 ,canvas.height , canvas.width/10 )
                pontos = pontos_novo
                ctx.fillStyle = "black"
                ctx.font = "30px Arial"
                ctx.fillText("Pontos: "+ pontos.toString(),230, 30)
            }
        }

        
            
            var P_TL = 0
            var P_BR = 600

            var TRX = 600
            var TRY = 0

            var BLX = 0
            var BLY = 600
            
            var cor_TL = "yellow"
            var cor_BR = "red"
            var cor_TR = "blue"
            var cor_BL = "green"

            var jogo = 0
            var c = 0

            function getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }

            function aleatorizar_cores() {
                lista = []
                let numero = getRandomInt(0, 4)
                while (true) {
                    if (numero > 3){
                        numero = 0
                    }

                    if (lista.length == 4){
                        break
                    }

                    lista.push(numero)
                    numero++
                }
                    
                    
                
                cor_TR = cores[lista[0]]
                cor_BR = cores[lista[1]]
                cor_BL = cores[lista[2]]
                cor_TL = cores[lista[3]]
            }

        var velocidade = 1

        function jogar() {    
            // Objeto TOP LEFT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_TL-velocidade*2,P_TL-velocidade*2, circulo.r, 0.96*Math.PI, 1.53*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_TL
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_TL,P_TL, circulo.r, 1*Math.PI, 1.5*Math.PI);
            ctx.moveTo(P_TL,P_TL)
            ctx.lineTo(P_TL - 25,P_TL)
            ctx.lineTo(P_TL,P_TL - 25)
            ctx.fill()
            P_TL += velocidade
            
            // Objeto BOT RIGHT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(P_BR+velocidade*2,P_BR+velocidade*2, circulo.r, 1.95*Math.PI, 0.54*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_BR
            ctx.beginPath();
            ctx.arc(P_BR,P_BR, circulo.r, 2*Math.PI, 0.5*Math.PI);
            ctx.moveTo(P_BR,P_BR)
            ctx.lineTo(P_BR + 25,P_BR)
            ctx.lineTo(P_BR,P_BR + 25)
            ctx.fill()
            P_BR -= velocidade

            // Objeto TOP RIGHT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(TRX+velocidade*2,TRY-velocidade*2, circulo.r, 1.45*Math.PI, 0.04*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_TR
            ctx.beginPath();
            ctx.arc(TRX,TRY, circulo.r, 1.5*Math.PI, 0*Math.PI);
            ctx.moveTo(TRX,TRY)
            ctx.lineTo(TRX + 25,TRY)
            ctx.lineTo(TRX,TRY - 25)
            ctx.fill()
            TRX -= velocidade
            TRY += velocidade

            // Objeto TOP RIGHT
            ctx.fillStyle = "white"
            ctx.strokeStyle = circulo.cor
            ctx.beginPath();
            ctx.arc(BLX-velocidade*2,BLY+velocidade*2, circulo.r, 0.45*Math.PI, 1.04*Math.PI);
            ctx.fill()

            ctx.fillStyle = cor_BL
            ctx.beginPath();
            ctx.arc(BLX,BLY, circulo.r, 0.5*Math.PI, 1*Math.PI);
            ctx.moveTo(BLX,BLY)
            ctx.lineTo(BLX - 25,BLY)
            ctx.lineTo(BLX,BLY + 25)
            ctx.fill()
            BLX += velocidade
            BLY -= velocidade

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
                if (TRX == 300 && TRY == 300){
                    if (cor_TR == cores[0]){
                        TRX = 600
                        TRY = 0
                        requestAnimationFrame(desenho)
                        jogo = 1
                    }
                    else{
                        TRX = 300
                        TRY = 300
                        c = 1
                        requestAnimationFrame(desenho)
                    }
                }
                if (BLX == 300 && BLY == 300){
                    if (cor_BL == cores[2]){
                        BLX = 0
                        BLY = 600
                        requestAnimationFrame(desenho)
                        jogo = 1
                    }
                    else{
                        BLX = 300
                        BLY = 300
                        c = 1
                        requestAnimationFrame(desenho)
                    }
                }

                // Se o player acertar
                // aumentar a velocidade//randomizar cores
                if (jogo == 1){
                    jogo = 0
                    aleatorizar_cores()
                    requestAnimationFrame(jogar)
                    requestAnimationFrame(jogar)
                    pontos_novo += 1
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

        // execute essa função para atualizar a página
        function recarregarPagina() {
            sessionStorage.setItem("recarregou", "true"); // antes de atualizar, você seta uma variável no sessionStorage como true
            window.location.reload(); // atualiza a página
        }

        // aqui você recupera a variável que você setou (ou não) na sessionStorage
        var recarregou = sessionStorage.getItem("recarregou");

        function iniciar() {
            recarregarPagina()
        }

        // verifica que a página foi atualizada
        if (recarregou) {
            sessionStorage.removeItem("recarregou"); // remove a variável
            jogar(); // executa sua função
        }


        desenho()
        pontos = 0
