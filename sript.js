var array = [1,2,3,4,5,6]





function checkArray(arr, index){



    document.write("element: " + arr[index] + '<br>')






    if((arr.length - 1) === index) {
        return null
    }


    checkArray(arr,index + 1)


}



checkArray(array,0)



var myCar = {

    name: "Opel",
    color: "white",
    changeColor: function (color) {

        this.color = color;


    }


}


function changingColorAnotherWay(car,color){

    car.colorInny = color;

}



console.log(myCar)

console.log("aktualny kolor to: " + myCar.color)

myCar.changeColor('red')


console.log("kolor po przemalowaniu: " + myCar.color)

changingColorAnotherWay(myCar,'green')

console.log("kolor po przemalowaniu inny: " + myCar.colorInny)