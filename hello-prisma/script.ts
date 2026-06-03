import { prisma } from "./lib/prisma.js";


async function main()
{
    // const user = await prisma.user.create({
    //     data:{
    //         name: "Madhu",
    //         email: "madhu@gmail.com"
    //     }
    // })

    const users = await prisma.user.createMany({
        data:[
            {
                name:"Madhu",
                email: "madhu@gmail.com"
            },
            {
                name: "Harshini",
                email: "harshini@gail.com"
            }
        ]
    });

    console.log("Created user : ",users);

    const data = await prisma.user.findMany();
    console.log("data = ",data);
}

main();