import { GiMountainCave, GiPisaTower, GiForestCamp, GiCampingTent, GiPalmTree } from 'react-icons/gi'
import { TbBeach, TbBuildingCastle } from 'react-icons/tb'
import { RiCactusLine } from "react-icons/ri";
import { MdOutlineHouseboat } from "react-icons/md";
import { FaSkiing } from "react-icons/fa";
import ScrollContainer from 'react-indiana-drag-scroll';



export function Categories () {
  return(
<>
      <h2 className="text-white font-bold text-4xl">Top categories</h2>
      <ScrollContainer className="flex gap-11 justify-between bg-background-categories p-3 rounded-xl">
          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:text-white hover:fill-white hover:border-b-2'>
            <a href="">
              <TbBeach size={32} />
            </a>
            <span>Beaches</span>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:text-white hover:fill-white hover:border-b-2'>
            <a href="">
              <RiCactusLine size={32} />
            </a>
            <p>Deserts</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <GiMountainCave size={32} />
            </a>
            <p>Mountains</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <GiPisaTower size={32} />
            </a>
            <p>Ionic Cities</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:stroke-white hover:text-white hover:border-b-2'>
            <a href="">
              <MdOutlineHouseboat size={32} />
            </a>
            <p>Houseboats</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <GiForestCamp size={32} />
            </a>
            <p>CountrySide</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400 
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <GiCampingTent size={32} />
            </a>
            <p>Camping</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <TbBuildingCastle size={32} />
            </a>
            <p>Castles</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <FaSkiing size={32} />
            </a>
            <p>Skiing</p>
          </div>

          <div className='flex flex-col gap-3 cursor-pointer items-center text-gray-400
          hover:fill-white hover:text-white hover:border-b-2'>
            <a href="">
              <GiPalmTree size={32} />
            </a>
            <p>Tropical</p>
          </div>
      </ScrollContainer>
</>

  )
}