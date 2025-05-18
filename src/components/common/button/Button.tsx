'use client'

import React from 'react'

type ButtonProps = {
    text: string
    padding?: string
    backgroundColor?: string
    border?: string
    textColor?: string
    height?: string
    width?: string
    onClick?: () => void
}

export default function Button({
    text,
    padding,
    backgroundColor,
    border,
    width,
    height,
    textColor,
    onClick
}: ButtonProps) {
    return (
        <div 
            onClick={onClick}
            className='p-[1px] rounded-lg bg-gradient-to-r from-[#1F7FFF] to-[#8F72FF]'
        >
            <div
                className={`flex text-center items-center ${padding} ${backgroundColor} ${border} rounded-lg ${height} ${width} cursor-pointer`}
            >
                <p className={`text-sm ${textColor}`}>{text}</p>
            </div>
        </div>
    )
}