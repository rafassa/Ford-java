


let carouselArr = [];


class Carousel {

   

    constructor(img, titulo, url){
        this.img = img
        this.titulo = titulo
        this.url = url
    }
      
    static Start(arr){
        this.titulos = document.querySelectorAll("main div a")
        this.imagens = document.querySelectorAll("main div img")
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
       
     for(let i = 0; i < this.imagens.length; i++){
        this.imagens[i].style.display ="none";
        this.imagens[this._sequence].style.display = "block";
        this.titulos[i].style.display = "none"
        this.titulos[this._sequence].style.display = "block";

        console.log(this._sequence)
        
        
     }
     this._sequence++
     if(this._sequence == this._size){
        this._sequence = 0;
    }
    }
};



carouselArr.push(new Carousel("img\\imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
carouselArr.push(new Carousel("img\\imagem_2.jpg","Ford a nossa história","https://www.ford.pt/experiencia-ford/ford-blog/o-nosso-legado#"));
carouselArr.push(new Carousel("img\\imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));



for(let i = 0; i < carouselArr.length; i++ ){
let img = document.createElement("img")
img.setAttribute("src", carouselArr[i].img);
document.getElementById("carousel").insertAdjacentElement("beforeEnd", img)

let texto = document.createElement("a")
texto.innerText = carouselArr[i].titulo
texto.setAttribute("href",carouselArr[i].url)

document.getElementById("carousel-title").insertAdjacentElement("beforeEnd", texto)


}



Carousel.Start(carouselArr);


