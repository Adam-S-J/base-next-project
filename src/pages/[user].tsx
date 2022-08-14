import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import grogu from '../../public/assets/hello-there-baby-yoda.gif'
import { Button } from '../components/Button/Button'

const User = (): JSX.Element => {
    const router = useRouter()
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Image src={grogu} alt="Baby Yoda" />
            <Button label={'Click Me!'} action={() => router.push('/')} />
        </div>
    )
}

export default User
