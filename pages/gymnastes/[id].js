import { useRouter} from "next/router";

const Gymnaste = () => {
    const router = useRouter()
    const { id } = router.query

    return <p>Gymnaste: {id}</p>
}

export default Gymnaste