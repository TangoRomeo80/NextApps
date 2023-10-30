
import middleware from 'next-auth/middleware'

export default middleware

export const config = {
    // * means zero or more parameters
    // + means one or more parameters
    // ? means zero or one parameters
  matcher: ['/users/:id*'],
}
