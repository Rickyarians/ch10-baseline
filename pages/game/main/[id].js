import { useRouter } from 'next/router'

// halaman main suit
const GameMain = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Game ID: {id}</p>
}

export default GameMain