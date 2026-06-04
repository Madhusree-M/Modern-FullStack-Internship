'use server'

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function handleLogout()
{
    const cookieStore = await cookies();
    cookieStore.delete("token");

    redirect('/login')
}

export default handleLogout;