//document.write("checked js");
/*
console.log("hello");

function my_sort(z) {
    var c;
    //a = [2,6,8,1,4,6,7,9,3];
    for(var j = 0; j < z.length; j++){
        for (var i = 0; i < z.length; i++) {
            if (z[i] > z[i+1]) {
                //array[i] > array[i+1];
                c = z[i];
                z[i] = z[i + 1];
                z[i + 1] = c;
            }
        }
    }
    return a;
}
var a;
a = [2,6,8,1,4,6,7,9,3];
console.log(my_sort(a));
*/
//
// console.log("hello2");
// document.write("checked js2");


/*function Merge(a,low,mid,high)    //Вспомогательная функция.
{
    var b = new Array(high+1-low), h, i, j = mid+1, k, h = low, i = 0;
    while (h <= mid && j <= high )
    { if (a[h] <= a[j]){ b[ i ]=a[h]; h++; }
    else             { b[ i ]=a[j]; j++; }
        i++;
    }
    if (h > mid){ for (k = j; k <= high; k++){ b[ i ]=a[k]; i++; } }
    else        { for (k = h; k <= mid; k++){  b[ i ]=a[k]; i++; } }
    for (k=0; k<=high-low; k++) a[k+low]=b[k];
    return a;
}

function MergeSort(A)      //Функция сортировки слиянияем.
{
    function merge_sort(a,low,high)
    { if (low < high)
    { var mid = Math.floor((low+high)/2);
        merge_sort(a, low, mid);
        merge_sort(a, mid+1, high);
        Merge(a, low, mid, high);
    }
    }
    var n = A.length;
    merge_sort(A, 0, n-1);
    return A;
}
var x;
x = [2,6,8,1,4,6,7,9,3];
console.log(MergeSort(x));
*/


/*
одна из мыслей по первому заданию

function plus(x) {
    x = Number("+x");
    return x;
};
function minus(y) {
    y = Namber("-y")
    return y;
};
//noinspection JSUnresolvedFunction
var a = (5).plus(3);//.minus(6);
//var a = 4;
console.log(a);
*/
/*
function helped (a,low,mid,high) {
    var b, h, i, k, j;
    b = new Array(high+1-low);
    j = mid+1;
    h = low;
    i = 0;
    while (h <= mid && j <= high) {
        if (a[h] <= a[j]) {
            b[i] = a[h];
            h++;
        }
        else{
            b[i] = a[j];
            j++;
        }
        i++;
    }
    if (h > mid) {
        for (k = j; k <= high; k++){
            b[i] = a[k];
            i++;
        }
    }
    else {
        for (k = h; k <= mid; k++){
            b[i] = a[k];
            i++;
        }
    }
    for (k = 0; k <= high-low; k++){
        a[k+low] = b[k];
    }
    return a;
}

function MergeSort(A) {
    function internal (a,low,high) {
        if (low < high){
            var mid;
            mid = Math.floor((low + high) / 2);
            internal (a,low,mid);
            internal (a,mid + 1, high);
            helped (a, low, mid, high);
        }

    }
    var n;
    n = A.length;
    internal(A, 0, n - 1);
    return A
}
var x;
x = [2,3,6,4,5,6,2,1,9];
console.log(MergeSort(x));

*/
// -------------- сортировка слиянием -------------
/*
function MergeSort(A) {
    function helped (a,low,mid,high) {
        var b, h, i, k, j;
        b = new Array(high+1-low);
        j = mid+1;
        h = low;
        i = 0;
        while (h <= mid && j <= high) {
            if (a[h] <= a[j]) {
                b[i] = a[h];
                h++;
            }
            else{
                b[i] = a[j];
                j++;
            }
            i++;
        }
        if (h > mid) {
            for (k = j; k <= high; k++){
                b[i] = a[k];
                i++;
            }
        }
        else {
            for (k = h; k <= mid; k++){
                b[i] = a[k];
                i++;
            }
        }
        for (k = 0; k <= high-low; k++){
            a[k+low] = b[k];
        }
        return a;
    }

    function internal (a,low,high) {
        if (low < high){
            var mid;
            mid = Math.floor((low + high) / 2);
            internal (a,low,mid);
            internal (a,mid + 1, high);
            helped (a, low, mid, high);
        }
    }
    var n;
    n = A.length;
    internal(A, 0, n - 1);
    return A
}
var x;
x = [2,1,9];
console.log(MergeSort(x));



Задание 1 наброски выполнения
 Namber.prototype.plus = function (x) {
 x = Number("+x");
 return x;
 };
 Namber.prototype.minus = function (y) {
 y = Namber("-y")
 return y;
 }
 var a = (5).plus(3).minus(6);
 //var a = 4;
 console.log(a);


*/
// // (1)
// // создаем экземпляр
// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
// // объявляем переменную экземпляра
// var xhr = new XHR();
//
// // (2) запрос на другой домен :)
//     xhr.open('GET', 'https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1', true);
//
//     xhr.onload = function() {
//         alert ( this.responseText );
//
// }
//
//     xhr.onerror = function() {
//     alert( 'Ошибка ' + this.status );
// }
//
//     xhr.send();
//-------------------------------------------------------------
// синхоронный вызов
// 1. Создаём новый объект XMLHttpRequest
// var xhr = new XMLHttpRequest();
//
// // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
// xhr.open('GET', 'https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1',false);
//
// // 3. Отсылаем запрос
// xhr.send();
//
// // 4. Если код ответа сервера не 200, то это ошибка
// if (xhr.status != 200) {
//     // обработать ошибку
//     alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
// } else {
//     // вывести результат
//     alert( xhr.responseText ); // responseText -- текст ответа.
//
// }
// document.write(xhr);
//
    //console.log(xhr);
//var weatherData;

$(function () {
    function weatherData() {
    fetch('https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1')
        .then(function(response) {
            return response.json();
        })
        .then(function(weather) {
            $(".testDeg").text(weather.main.temp + String.fromCharCode(176) + "C");
            $(".testTempPressure").text('Давление: ' + weather.main.pressure);
            $(".testTempWind").text('Скорость ветра: ' + weather.wind.speed);

            if (weather.main.temp > 0 && weather.main.temp < 5) {
                $(".test").css("background-color","#DCFFF6")
            }
                else if(weather.main.temp >= 5 && weather.main.temp < 10){
                $(".test").css("background-color","#FAFFA2")
            }
            else if(weather.main.temp >= 10 && weather.main.temp < 20){
                $(".test").css("background-color","#FFFACD")
            }
                else if (weather.main.temp > -10 && weather.main.temp <= 0) {
                $(".test").css("background-color","#93BFFF")
            }
                else {
                $(".test").css("background-color","white")
            }
            if(weather.clouds.all < 2){
                $(".testTempImg").css("background-position", "0px -42px")
            }
            else if (weather.clouds.all >= 2 && weather.clouds.all < 4){
                $(".testTempImg").css("background-position", "0px -126px")
            }
            else if (weather.clouds.all >= 4 && weather.clouds.all < 8){
                $(".testTempImg").css("background-position", "0px -85px")
            }
            else{
                $(".testTempImg").css("background-position", "0px -0px")
            }
            setTimeout(weatherData,10000);
        })
        .catch( alert );

    }
    weatherData();

});



//----------------------------------------------------
// асинхронный вызов
// //var xhr = new XMLHttpRequest();
// var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
// var xmlhttp = new XHR();
// xmlhttp.open('GET', 'https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1', true);
// // xmlhttp.onreadystatechange = function() {
// //     if (xmlhttp.readyState == 4) {
// //         if(xmlhttp.status == 200) {
// //             alert(xmlhttp.responseText);
// //         }
// //     }
// // };
// xmlhttp.send(null);
// console.log(xmlhttp);
// alert(xmlhttp.responseText);
//

// var o = JSON.stringify(xhr);
// document.write(o);

/*
 //-------------------------------------------------------------------

function get(url, callback) {// что такое callback???
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onreadystatechange = function () {
        if (request.readyState = 4 && request.status === 200) {
            var type = request.getResponseHeader("Content-Type");
            if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML); // obgect XML
            else if (type === "application/json")
                callback(JSON.parse(request.responseText)); // obgect JSON
            else
                callback(request.responseText); // obgect text
        }
    };
    request.send(null);
}
console.log(get("https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1", 0));
*/
//alert (get('https://openweathermap.org/data/2.5/weather?id=625144&units=metric&appid=b1b15e88fa797225412429c1c50c122a1', true));
/*
{"coord":{"lon":27.57,"lat":53.9},
    "weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],
    "base":"stations",
    "main":{"temp":8,"pressure":1009,"humidity":69,"temp_min":8,"temp_max":8},
    "visibility":10000,
    "wind":{"speed":3,"deg":260,"gust":7},
    "clouds":{"all":0},
    "dt":1490644800,
    "sys":{"type":1,
    "id":7378,
    "message":0.0023,
    "country":"BY",
    "sunrise":1490586764,
    "sunset":1490632675},
    "id":625144,
    "name":"Minsk",
    "cod":200}
*/

















