import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import kenobi from '../../public/assets/hello-there-general-kenobi.gif'
// import { useThemeStore } from '../../store/theme'

const Home: NextPage = (): JSX.Element => {
    const router = useRouter()

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Image src={kenobi} alt="General Kenobi" />
            <button
                className="bg-purple-400 text-center rounded p-2 mt-4"
                onClick={() => router.push('/grogu')}
            >
                Click me!
            </button>
        </div>
    )
}

export default Home
