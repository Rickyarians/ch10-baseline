import { useRouter } from 'next/router'

// halaman main suit
const ProfileEdit = () => {
  const router = useRouter()
  const { id } = router.query

  return <p>Profile ID: {id}</p>
}

export default ProfileEdit