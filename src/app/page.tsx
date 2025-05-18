'use client'

import React from "react";
import Image from "next/image";

import Badge from "@/components/common/badge/Badge";
import Button from "@/components/common/button/Button";

export default function Home() {
  return (
    <div className="py-[60px]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-x-4">
          <div className="flex flex-col justify-end h-full">
            <div className="flex flex-col gap-[30px]">
              <div className="flex flex-col gap-y-3">
                <Badge
                  text="Tagline"
                />
                <p className="font-medium text-5xl leading-[58px]"><span className="text-[#1F7FFF]">Celo</span><span className="text-[#8F72FF]">pix</span> : Fotobox Digital<span className="block">di Ujung Jari Kamu.</span></p>
                <div className="flex flex-col text-[#777777]">
                  <p className="leading-[26px]">Rasakan pengalaman fotobox tanpa harus antri atau keluar rumah.</p>
                  <p className="leading-[26px]">Pilih frame, ambil foto, dan simpan hasilnya — semuanya online.</p>
                </div>
              </div>
              <div className="flex">
                <Button
                    text='Cobain Sekarang'
                    padding='py-[15px] px-4'
                    height='h-12'
                    width='w-[145px]'
                    backgroundColor='bg-gradient-to-r from-[#1F7FFF] to-[#8F72FF]'
                    textColor='text-white'
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex justify-center items-center">
              <Image className="w-full h-auto object-contain" src="/images/general/home-img01.svg" alt="img01" height={595} width={429} loading="lazy"/>
            </div>
            <div className="flex gap-x-3 items-center">
              <Image className="w-full h-auto object-contain" src="/images/general/home-img02.svg" alt="img02" height={208} width={189} loading="lazy"/>
              <Image className="w-full h-auto object-contain" src="/images/general/home-img03.svg" alt="img03" height={208} width={189} loading="lazy"/>
              <Image className="w-full h-auto object-contain" src="/images/general/home-img04.svg" alt="img04" height={208} width={189} loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
