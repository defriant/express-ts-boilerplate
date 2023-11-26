import { JwtPayload, sign, verify } from 'jsonwebtoken'

const JWTSecret = 'yourjwtsecret'

export const createUserToken = <TData>(data: TData) => {
    const token = sign(data!, JWTSecret, {
        expiresIn: '30d',
    })

    return token
}

export const validateToken = (token: string) => {
    try {
        const validate = verify(token, JWTSecret) as JwtPayload
        return validate
    } catch (err) {
        return null
    }
}
