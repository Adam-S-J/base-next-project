import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import kenobi from '../../public/assets/hello-there-general-kenobi.gif'
import { Button } from '../components/Button/Button'
// import { useThemeStore } from '../../store/theme'

const Home: NextPage = (): JSX.Element => {
    const router = useRouter()

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Image src={kenobi} alt="General Kenobi" />
            <Button label={'Click Me!'} action={() => router.push('/grogu')} />
        </div>
    )
}

export default Home
