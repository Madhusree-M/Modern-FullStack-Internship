// function f1()
// {
//     var b=20;
//     function f2()
//     {
//         var a =100;
//         function f3()
//         {
//             console.log(a,b);
//         }
//         f3()
//     }
//     f2()
// }
// f1()




// function f1()
// {
//     var a=50;
//     function f2()
//     {
//         return a;
//     }
//     return f2();
// }

// const output = f1();
// console.log(output);






// function f1()
// {
//     var a=50;
//     function f2()
//     {
//         return a;
//     }
//     return f2; // -> output ?
// }

// const output = f1();
// console.log(output);







// function f1()
// {
//     var a=50;
//     function f2()
//     {
//         return a;
//     }
//     return f2;
// }

// const output = f1();

// const res = output(); // Note this line -> output variable stores f2 -> calling output function will call f2()

// console.log(res);




// function outer(a)
// {
//     var b=99;
//     function inner()
//     {
//         var a = 100;
//         var b= 11;
//         console.log(a,b);
//     }
//     return inner;
// }

// const output = outer(9999)();
// console.log(output)




// function outer(a)
// {
//     function inner()
//     {
//         console.log(a,b);
//     }
//     let b = 100;
//     return inner;
// }

// outer(888)();




// function timer(i)
// {
//     setTimeout(() => {
//         console.log(i)
//     }, (i+(i-1))*1000);
// }
    

// for(var i=1;i<=5;i++)
// {
//     timer(i);
// }



for(let i=1;i<=5;i++)
{
    setTimeout(() => {
        console.log(i);
    },i*1000)
}