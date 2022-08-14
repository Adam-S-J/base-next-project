import React from 'react'
import { ButtonTypes } from '../../types/Button'

export const Button = ({ label, action }: ButtonTypes): JSX.Element => {
    return (
        <button
            className="bg-purple-400 text-center rounded p-2 mt-4"
            onClick={action}
        >
            {label}
        </button>
    )
}
