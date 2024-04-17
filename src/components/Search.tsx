import searchIcon from '../assets/icon-search.svg';
import calendarIcon from '../assets/calendar.svg';
import personIcon from '../assets/person.svg';

export function Search(){
  return(
    <div className="flex gap-8 justify-between items-center bg-background-search 
    w-full rounded-2xl h-16 px-7 text-white text-base backdrop-blur-md">

      <div className="flex gap-1">
        <img src={searchIcon} alt="" />
        <input 
          className='border-none bg-transparent outline-none placeholder-white
          w-96 text-white'
          type="search" 
          name="" id="" 
          placeholder="Search destinations, hotels" />
      </div>

     <div className='flex gap-5'>
        <div className='flex gap-1'>
          <img src={calendarIcon} alt="" />
          <input 
           className='border-none bg-transparent outline-none'
           type="date" name="check-in" id="" />
        </div>
        <div className='flex gap-1'>
          <img src={calendarIcon} alt="" />
          <input 
           className='border-none bg-transparent outline-none'
           type="date" name="check-out" id="" />
        </div>
     </div>

     <div className='flex gap-1'>
        <img src={personIcon} alt="" />
        <div className='flex'>
          <p>1 rom</p>
          <p>, 2 adults</p>
        </div>
     </div>
    
      <button className='bg-white rounded-[32px] w-36 h-8 text-[#2659C3] font-bold'>
        <p>Search</p>
      </button>
    </div>
  )
}