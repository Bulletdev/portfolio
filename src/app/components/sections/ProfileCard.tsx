"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { BackgroundGradient } from "../ui/background-gradient";

export default function ProfileCard() {
  return (
    <div
      className="relative col-span-2 row-span-6 bg-spotify-light-dark rounded-xl p-6 max-md:p-6"
      id="#profile"
    >
      <div className="flex flex-col gap-7 max-md:gap-5">
        <BackgroundGradient containerClassName="rounded-[40px] place-self-center">
          <Image
            src="/Michael.jpeg"
            alt="Picture of the author"
            width={400}
            height={400}
            objectFit="none"
            className="rounded-[25px]"
          />
        </BackgroundGradient>

        <PersonalStatement />
        <Location />
        <Booking />
      </div>
    </div>
  );
}

function Location() {
  return (
    <div className="text-lg px-4">
      <div className="flex items-center gap-2 font-semibold">
        <IoLocationOutline className="text-spotify-green text-2xl" />
        Feira de Santana - BAHIA
      </div>
    </div>
  );
}

function Booking() {
  const email = "contato@michaelbullet.com"; // Replace with the email you want to copy
  const phoneNum = "75983360359";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleCopyNumber = () => {
    navigator.clipboard
      .writeText(phoneNum)
      .then(() => {
        alert("Phone bumber copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex px-4 gap-3">
       <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyNumber}
      >
        <FaRegCopy /> 
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold bg-spotify-green hover:bg-spotify-dark-green hover:scale-105  px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyNumber}
      >
        <FaRegCopy /> copiar número
      </button>
      <button
        type="button"
        className="flex items-center justify-center text-sm font-bold border border-[#727272] hover:border-white hover:scale-105 text-white px-4 py-2.5 rounded-full gap-2 transition-all duration-200"
        onClick={handleCopyEmail}
      >
        <FaRegCopy /> Copiar E-mail
      </button>
    </div>
  );
}

function PersonalStatement() {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="space-y-1.5">
        <h1 className="text-2xl font-semibold">Michael "Bullet" Douglas</h1>
        <p className="text-spotify-gray text-sm">
          Desenvolvedor Backend • Infraestrutura • Cloud
        </p>
      </div>
      <h4 className="text-md max-md:text-sm text-spotify-light-gray font-semibold">
        Sou um desenvolvedor <span className="text-spotify-white"> autodidata</span>{" "}
        estudando <span className="text-spotify-white"> Analise e desenvolvimento de sistemas💻</span>{" "}
        na
        <span className="text-spotify-white"> UNIFAN </span>
        . apaixonado por{" "}
        <span className="text-spotify-white">Backend e</span> &{" "}
        <span className="text-spotify-white">APPS Cloud native</span>
      </h4>
    </div>
  );
}
