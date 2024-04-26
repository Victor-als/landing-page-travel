import logoIcon from "../assets/logo.svg";
import { ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

export function Footer(){
  return (
    <footer className="bg-stone-900 pb-20 pt-16 2xl:px-32 sm:px-24 w-full">
      <div className="flex flex-shrink-0 sm:gap-10 2xl:gap-32 xl:gap-28
      text-lg text-gray-400">
          <img src={logoIcon} className="mb-20" alt="" />

      <div className="flex 2xl:gap-44 xl:gap-24 lg:gap-14 sm:items-center sm:justify-start md:gap-10 sm:gap-10 flex-wrap">

        <div className="w-30 flex justify-start flex-col gap-2">
            <p>Seslendirme ve Alt Jazz</p>
            <p>Media Market</p>
            <p>Gilpe</p>
            <p>Size Last</p>
        </div>

        <div className="w-30 flex justify-start flex-col gap-2">
         
            <p>Self Betimes</p>
            <p>Yatirimci Ipskileri</p>
            <p>Basal Himmler</p>

        </div>

        <div className="w-30 flex justify-start flex-col gap-2">
            <p>Yard Market</p>
            <p>Is Imkanları</p>
            <p>Car Tercihleri</p> 
        </div>

        <div className="w-30 flex justify-start flex-col gap-2">
            <p>Hedge Karla</p>
            <p>Mullein Kosullari</p>
            <p>Autumnal Bulgier</p>
        </div>
      </div>
      </div>


        <div className="flex justify-around  text-gray-400 pt-10">

          <div className="flex flex-col gap-3">
            <button className="border-2 border-gray-400 w-[7rem] p-2">
              Helmet KOD
            </button>
            <p>© 1997-2021 Netfpx, Inc. i-062d573a0ee099242</p>
          </div>

          <div className="flex gap-4"> 
            <ImFacebook2 size={34} />
            <ImInstagram size={34} />
            <BsTwitter size={34} />
            <ImYoutube size={34} />
          </div>
      </div>
  </footer>
  )
}