import jwt from 'jsonwebtoken'

type User = {
    id: number,
    name: string,
    email: string
}

const secret = process.env.SECRET_KEY!;

export default function createToken(user: User)
{
    // we get the payload or userdata
    // we need to sign it with secret key

    return jwt.sign(
        {user},
        secret,
        {expiresIn: "1 hr"}
    )
}

export function verifyToken(token: string)
{
    // jwt has inbuilt function -- jwt verify()
    // it verifies the signature or the secret key and returns a payload

    return jwt.verify(token,secret)
}