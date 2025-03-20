

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(img, titulo){
        this.img = img
        this.titulo = titulo
    }
      
    static Start(arr){
        if(arr){
            console.log(carouselArr)
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
        
    }
};



carouselArr.push(new Carousel("img\\imagem_1.jpg","Esta é a nova Ranger Ford 2022. Verifique novidades.","lancamento.html"));
carouselArr.push(new Carousel("img\\imagem_2.jpg","Ford a nossa história","#"));
carouselArr.push(new Carousel("img\\imagem_3.jpg","Nova Ford Bronco Sport 2022","lancamento.html"));

console.log(carouselArr[0].img)

for(let i = 0; i < carouselArr.length; i++ ){
let teste = document.createElement("img")
teste.setAttribute("src", carouselArr[i].img);
 
document.getElementById("carousel").insertAdjacentElement("beforeEnd", teste)

}

Carousel.Start(carouselArr);


