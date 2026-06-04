'use server'

import { cookies } from "next/headers";
import { prisma } from "../lib/prisma";
import { redirect } from "next/navigation";
import bcrypt from  "bcrypt"
import createToken from "../lib/jwt";

async function handleLogin(formData: FormData)
{
    const email = String(formData.get("email") ?? "")
    const password = String(formData.get("password") ?? "")

    const userdata = await prisma.user.findFirst(
        {
            where:{
                email
            }
        }
    );

    if(!userdata)
    {
        throw new Error("User does not exits")
    }

    const token = createToken(userdata)
    const isValid = await bcrypt.compare(password, userdata.password);

    if(isValid)
    {
        const cookieStore = await cookies();

        // cookieStore.set("userId",userdata.id.toString())
        // cookieStore.set("userEmail", userdata.email)
        // cookieStore.set("userName",userdata.name)

        cookieStore.set("token", token)
        redirect('/products')
    }
    // console.log(userdata);
}

export default handleLogin;
