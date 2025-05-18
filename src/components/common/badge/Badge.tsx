'use client'

import React from 'react'

type BadgeProps = {
    text: string
}

export default function Badge({
    text,
}: BadgeProps) {
    return (
        <div className='flex items-center w-fit px-3 py-[6px] rounded-full border border-[#1F7FFF] bg-[#EAF3FFFC]'>
            <p className="text-xs text-center text-[#1F7FFF]">{text}</p>
        </div>
    )
}