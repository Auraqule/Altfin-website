const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const seven = document.getElementById("seven")
const eight = document.getElementById("eight")
const nine = document.getElementById("nine")
const ten = document.getElementById("ten")
const eleven = document.getElementById("eleven")
const twelve = document.getElementById("twelve")
const features = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve ]
features.map((feature, index)=>{
    feature.addEventListener("click", () =>{
        
    if(index === 0){
         window.open("./features-pages/inner-page.html")
         return
        }
    if(index === 1){
         window.open("./features-pages/__inner__page__2.html")
         return
        }
    if(index === 2){
         window.open("./features-pages/__inner__page__3.html")
         return
        }
    if(index === 3){
         window.open("./features-pages/__inner__page__4.html")
         return
        }
    if(index === 4){
         window.open("./features-pages/__inner__page__5.html")
         return
        }
    if(index === 5){
         window.open("./features-pages/__inner__page__6.html")
         return
        }
    if(index === 6){
         window.open("./features-pages/__inner__page__7.html")
         return
        }
    if(index === 7){
         window.open("./features-pages/__inner__page__8.html")
         return
        }
    if(index === 8){
         window.open("./features-pages/__inner__page__9.html")
         return
        }
    if(index === 9){
         window.open("./features-pages/__inner__page__10.html")
         return
        }
    if(index === 10){
         window.open("./features-pages/__inner__page__11.html")
         return
        }
    if(index === 11){
         window.open("./features-pages/__inner__page__12.html")
         return
        }
    })
})

