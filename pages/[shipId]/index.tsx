import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Ship = ({ data }) => {
  const router = useRouter()
  const element = data.filter(element => element.id === router.query.shipId)[0]
  console.log(
    Object.values(element).map(element => typeof element === 'string')
  )
  return (
    <>
      {Object.values(element).map((el, index) => {
        if (typeof el === 'string') {
          return <h1>{el}</h1>
        }
      })}
    </>
  )
}

export async function getServerSideProps () {
  let data = await fetch('https://api.spacexdata.com/v4/dragons')
  let data1 = await fetch('https://api.spacexdata.com/v4/rockets')
  let data2 = await fetch('https://api.spacexdata.com/v4/ships')
  let dataParsed = await data.json()
  let data1Parsed = await data1.json()
  let data2Parsed = await data2.json()
  return {
    props: {
      data: [...dataParsed, ...data1Parsed, ...data2Parsed]
    }
  }
}

export default Ship
