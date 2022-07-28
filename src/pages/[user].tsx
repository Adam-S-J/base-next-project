import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import grogu from '../../public/assets/hello-there-baby-yoda.gif'

const User = (): JSX.Element => {
    const router = useRouter()
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <Image src={grogu} alt="Baby Yoda" />
            <button
                className="bg-purple-400 text-center rounded p-2 mt-4"
                onClick={() => router.push('/')}
            >
                Click Me!
            </button>
        </div>
    )
}

export default User
