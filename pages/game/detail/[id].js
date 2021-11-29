import { useRouter } from 'next/router'


// halaman detail game
const GameDetail = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Game ID: {id}</p>
}

export default GameDetail