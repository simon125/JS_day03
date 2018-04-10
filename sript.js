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




/////////////////////////////////////////////////////////////////////////


console.log("suma dwoch liczb: " + sumOfTwoNumbers(2,5))


function sumOfTwoNumbers(a,b){

return a + b


}

function myFunction() {
    var person = prompt("Please enter your name", 'example name');
    if (person != null) {
        document.getElementById("demo").innerHTML =
            "Hello " + person + "! How are you today?";
    }
}



myFunction()





var userName = sessionStorage.getItem('name')


if (userName) {

    alert('hello ' + userName)
}
else {

    sessionStorage.setItem('name', prompt('type your name'))

}








