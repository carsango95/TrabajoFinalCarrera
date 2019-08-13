//canvas BIEN
var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

//variables BIEN
var frames = 0
var background = "images/background.jpeg"
var oblak = "images/oblak.png"
var ball = "images/pelota.png"
var balls = []
var contador = 0 //variable que lleva la cuenta de balones parados
var vidas = 3 //variable que cuenta las vidas que le quedan al jugador

//CONSTRUCTORS 

//BIEN
function Background(){
    this.x = 0
    this.y = 0
    this.width = canvas.width
    this.height = canvas.height
    this.imagen = new Image()
    this.imagen.src = background
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
}

//
function Oblak(){
   this.x = canvas.width - 540
    this.y = canvas.height - 308
    this.width = 80
    this.height = 80
    this.imagen = new Image()
    this.imagen.src = oblak
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
    if(this.x < 0) this.x = 0
    if(this.x > canvas.width) this.x = canvas.width - 8
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height)
    }
    
    this.checkIfTouch = function(ball){
    return (this.x < ball.x + ball.width) &&
            (this.x + this.width > ball.x) &&
            (this.y < ball.y + ball.height) &&
            (this.y + this.height > ball.y);
    }
  
}

//
function Ball(x){
    this.x = x
    this.y = 600
    this.width = 30
    this.height = 30
    this.imagen = new Image()
    this.imagen.src = ball
    this.imagen.onload = function(){
        this.draw()
    }.bind(this)
    
    this.draw = function(){
        this.y = this.y - 2 //velocidad desplazamiento pelota
        ctx.drawImage(this.imagen, this.x, this.y, this.width, this.height) }
    
}


//instancias BIEN
var bg = new Background()
var gk = new Oblak()


//main functions
function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    frames++
    bg.draw()
    gk.draw()
    generateBalls()
    drawBalls()
    checkBall()
    removeBall()

}

//BIEN
function start(){
    interval = setInterval(update,1000/60)
}

//BIEN
function gameOver(){
    clearInterval(interval)
    ctx.font = "50px Avenir"  //para la version 3.0, marcador final
    ctx.fillStyle = "white"
    ctx.fillText('GAME OVER',350,100)
    ctx.fillText(contador, 488,150)
}
//aux functions

//BIEN
function generateBalls(){
    if(frames % 32 === 0){ //velocidad aparicion pelota
        const x = Math.floor((Math.random()*(371)+280) ) //pelotas solo entre los palos
        balls.push(new Ball(x))
    }
}

//BIEN
function drawBalls(){
    balls.forEach(function(ball){
        ball.draw()
    })
}


//BIEN
function checkBall(){
    balls.forEach(ball=>{
        if(ball.y < 340 && ball.y > 0){ //si la pelota llega a la linea de fondo, pierdes una vida
            if(vidas == 0){
                gameOver()
            }
            vidas--
            ball.y = -50
        }
    })
}

//BIEN
function removeBall(){
    balls.forEach(ball=>{
        if(gk.checkIfTouch(ball)){
        ball.y = -50 //si el portero toca la pelota, esta desaparece
        contador++
        }
    })
}


//listeners BIEN

addEventListener('keydown', function(e){
    if(e.keyCode === 37){
        if(gk.x <= 0) return
        gk.x -= 40;
    }
    if(e.keyCode === 39){
        if(gk.x >= canvas.width - 40) return
        gk.x += 40;
    }
    
})


//the beginnig
start()