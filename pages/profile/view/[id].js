import { useRouter } from 'next/router'

// halaman main suit
const ProfileView = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Profile ID: {id}</p>
}

export default ProfileView