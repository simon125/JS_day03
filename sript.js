var array = [1,2,3,4,5,6]





function checkArray(arr, index){



    document.write("element: " + arr[index] + '<br>')






    if((arr.length - 1) === index) {
        return null
    }


    checkArray(arr,index + 1)


}



checkArray(array,0)
document.write("<br>" + 'suma elementow to: ' + tableSum)



