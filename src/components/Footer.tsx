import logoIcon from "../assets/logo.svg";
import { ImFacebook2, ImInstagram, ImYoutube } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";

export function Footer(){
  return (
    <footer className="bg-stone-900 h-96 pt-16 px-32 w-full">


      <div className="flex gap-48 text-lg text-gray-400">
          <img src={logoIcon} className="mb-20" alt="" />
        <div>
          <ul className="flex flex-col gap-2">
            <li>Seslendirme ve Alt Jazz</li>
            <li>Media Market</li>
            <li>Gillie</li>
            <li>Size Last</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Self Betimes</li>
            <li>Yatirimci Iliskileri</li>
            <li>Basal Himmler</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Yard Market</li>
            <li>Is Imkanları</li>
            <li>Car Tercihleri</li>
          </ul>
        </div>

        <div>
          <ul className="flex flex-col gap-2">
            <li>Hedge Karla</li>
            <li>Mullein Kosullari</li>
            <li>Autumnal Bulgier</li>
          </ul>
        </div>
      </div>


        <div className="flex justify-around  text-gray-400 pt-10">

          <div className="flex flex-col gap-3">
            <button className="border-2 border-gray-400 w-[7rem] p-2">
              Helmet KOD
            </button>
            <p>© 1997-2021 Netflix, Inc. i-062d573a0ee099242</p>
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