"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Paket() {
  return (
    <div className="flex flex-col items-center  justify-center  mt-20 mb-32 p-5">
      <div className="w-full lg:w-[50%]">
        <h3 className="text-2xl lg:text-4xl text-center font-bold">
          Paket Bimbingan Skripsi, Tesis, Disertasi
        </h3>
        <h3 className="text-sm lg:text-2xl text-center font-normal mt-3">
          Paket bimbingan spesial untuk kamu
        </h3>
      </div>
      <div className="w-[100%] flex flex-col lg:flex-row items-center  justify-center mt-14">
        <Card className="lg:me-6 w-full lg:w-[350px] mb-6 lg:mb-0 p-8 shadow-black dark:shadow-white shadow-md rounded-md h-[450px]">
          <CardContent>
            <Image
              src="/code-review.png"
              width="100"
              height="100"
              alt="Logo"
              className="mx-auto"
            />
            <h4 className="mt-6 text-center text-lg font-bold">
              Paket Bantuan Lengkap
            </h4>
            <p className="mt-4 font-medium text-center">
              Ini paket bimbingan sakti mandraguna, di paket lengkap ini kamu
              dibantu lengkap dari pencarian judul, tempat riset, proposal, full
              bab skripsi, aplikasi dan unlimited revisi.
            </p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
        <Card className="lg:me-6 w-[350px] p-8 mb-6 lg:mb-0 shadow-black dark:shadow-white shadow-md rounded-md h-[450px]">
          <CardContent>
            <Image
              src="/book.png"
              width="100"
              height="100"
              alt="Logo"
              className="mx-auto"
            />
            <h4 className="mt-6 text-center text-lg font-bold">
              Paket Penulisan Skripsi
            </h4>
            <p className="mt-4 font-medium text-center">
              Ini paket bimbingan sakti mandraguna, di paket lengkap ini kamu
              dibantu lengkap dari pencarian judul, tempat riset, proposal, full
              bab skripsi.
            </p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
        <Card className=" w-[350px] p-8 mb-6 lg:mb-0 shadow-black dark:shadow-white shadow-md rounded-md h-[450px]">
          <CardContent>
            <Image
              src="/coding.png"
              width="100"
              height="100"
              alt="Logo"
              className="mx-auto"
            />
            <h4 className="mt-6 text-center text-lg font-bold">
              Paket Aplikasi
            </h4>
            <p className="mt-4 font-medium text-center">
              Didalam paket ini kamu akan mendapatkan satu aplikasi yang full
              revisi sampai acc dosen ya.
            </p>
          </CardContent>
          {/* <CardFooter>
            <p>Card Footer</p>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
}
