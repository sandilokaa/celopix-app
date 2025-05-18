'use client'

import React from 'react'
import Image from "next/image"

import Button from '../common/button/Button'

export default function Navbar() {
    return(
        <div className="flex justify-between py-[22px]">
            <div className="flex items-center">
                <Image src="/images/icon/celopix-logo.svg" alt="celopix-logo" width={89} height={36}/>
            </div>
            <div className="flex justify-center items-center gap-[25px] text-[#888888]">
                <p className="cursor-pointer">Home</p>
                <p className="cursor-pointer">About</p>
                <p className="cursor-pointer">Layanan</p>
            </div>
            <div className="flex justify-center items-center">
                <Button
                    text='Take a Picture'
                    padding='py-3 px-4'
                    height='h-10'
                    width='w-[126px]'
                    backgroundColor='bg-gradient-to-r from-[#1F7FFF] to-[#8F72FF]'
                    textColor='text-white'
                />
            </div>
        </div>
    )
}
