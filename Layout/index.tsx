import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { FC, ReactNode } from 'react'

const Layout: FC<{ children: ReactNode | ReactNode[] }> = ({ children }) => {
  return (
    <>
      <header>
        <Flex alignItems={'center'} paddingX={20} height={20} bgColor='#000'>
          <Link href='/'>
            <a>
              <Text variant='p' fontWeight='bold' color={'#fff'}>
                Home
              </Text>
            </a>
          </Link>
        </Flex>
      </header>
      {children}
      <footer>
        <Flex
          justifyContent={'center'}
          fontWeight={'bold'}
          paddingBlock={10}
          bgColor='#000'
          color='#fff'
        >
          A little practice
        </Flex>
      </footer>
    </>
  )
}

export default Layout
