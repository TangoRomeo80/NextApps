import React, { CSSProperties } from 'react'
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from '@react-email/components'

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard</Preview>
      <Tailwind>
        {/* <Body style={body}> */}
        <Body className='bg-white'>
          <Container>
            {/* <Text style={heading}>Hello {name}</Text> */}
            <Text className='font-bold text-3xl'>Hello {name}</Text>
            <Link href='https://www.google.com'>Google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

const body: CSSProperties = {
  background: 'white',
}

const heading: CSSProperties = {
  fontSize: '32px',
}

export default WelcomeTemplate
