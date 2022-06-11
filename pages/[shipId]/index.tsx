import { FC, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Box } from '@chakra-ui/react'
import Image from 'next/image'

interface iElement {
  id: string
  name: string
  flickr_images?: string[]
  image?: string
  type: string
  diameter: {
    feet: number
    meters: number
  }
  heat_shield?: {
    material: string
  }
}

const Ship: FC<{ ship: iElement }> = ({ ship }) => {
  const router = useRouter()
  console.log(ship)
  return (
    <section>
      <Box
        minHeight='100vh'
        display={'flex'}
        flexDirection='column'
        alignItems={'center'}
        textAlign={'center'}
      >
        {Object.values(ship).map((el, index) => {
          if (typeof el === 'string') {
            return (
              <Box marginBlock={'10px'}>
                <h1 key={el}>{el}</h1>
              </Box>
            )
          }
        })}
      </Box>
    </section>
  )
}

export async function getStaticPaths () {
  let data = await fetch('https://api.spacexdata.com/v4/dragons')
  let data1 = await fetch('https://api.spacexdata.com/v4/rockets')
  let data2 = await fetch('https://api.spacexdata.com/v4/ships')

  let dataParsed = await data.json()
  let data1Parsed = await data1.json()
  let data2Parsed = await data2.json()

  const paths = [...dataParsed, ...data1Parsed, ...data2Parsed].map(ship => ({
    params: { shipId: ship.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps ({
  params
}: {
  params: {
    shipId: string
  }
}) {
  let data = await fetch('https://api.spacexdata.com/v4/dragons')
  let data1 = await fetch('https://api.spacexdata.com/v4/rockets')
  let data2 = await fetch('https://api.spacexdata.com/v4/ships')
  let dataParsed = await data.json()
  let data1Parsed = await data1.json()
  let data2Parsed = await data2.json()

  const ship = [...dataParsed, ...data1Parsed, ...data2Parsed].filter(
    ship => ship.id === params.shipId
  )[0]

  return { props: { ship } }
}

export default Ship
