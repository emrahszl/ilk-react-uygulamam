import Head from "next/head";
import Image from "next/image";
import stiller from "@/styles/Home.module.css";
import Baslik from "@/pages/baslik";
import OzluSoz from "./OzluSoz";
import { useState } from "react";

export default function Home() {
  const [isEnglish, setEnglish] = useState(false);

  const insan = {
    ad: "Ahmet",
    soyad: "Yılmaz"
  };

  const degisti = function(e) {
    //alert("yeni değer: " + e.target.checked);
    setEnglish(e.target.checked);
  };

  return (
    <>
    <Head>
      <title>İlk Next.js Uygulamam</title>
    </Head>
      <div>
        <Baslik /> 
        <p className={stiller.vurgulu}>İlk React Uygulamam</p>
        <p>{6 * 7}</p>
        <p>Saat: {new Date().toLocaleTimeString()}</p>
        <Image className={stiller.sagResim} src="/people.jpg" alt="Resim" width={518} height={345} />
        <h2>İnsan</h2>
        <p>Adı : {insan.ad}</p>
        <p>Adı : {insan.soyad}</p>
        
        <input type="checkbox" onChange={degisti}/> İngilizce mi?
        <OzluSoz ingilizceMi={isEnglish} />
      </div>
      </>
  );
}
