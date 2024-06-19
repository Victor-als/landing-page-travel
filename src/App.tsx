import { Categories } from "./components/Categories";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { OfferCards } from "./components/OfferCards";
import Iphone from "./assets/images/iphone.png";
import appStore from "./assets/images/appStore.png";
import android from "./assets/images/android.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { Footer } from "./components/Footer";
import hotelsPicture from "./assets/images/hotels.jpg";
import resortPicture from "./assets/images/resort.jpg";
import apartmentPicture from "./assets/images/apartment.jpg";
import campingPicture from "./assets/images/camping.jpg";
import villasPicture from "./assets/images/villas.jpg";
import housesPicture from "./assets/images/houses.jpg";
import indiaPicture from "./assets/images/india.jpg";
import travelTalkPicture from "./assets/images/travel-talk.jpg";
import mountainsPicture from "./assets/images/mountains.jpg";
import sunBeachPicture from "./assets/images/sun-beach.jpg";


export function App() {

  return (
    <>
       <section className="relative bg-background bg-no-repeat bg-cover
        flex flex-col min-h-[840px]">
          <div className="bg-background-black absolute min-h-[840px] sm:max-h-[840px] w-full">
          <Header />
          <main className="min-w-full px-28 py-24">
            <h1 
               className="2xl:text-7xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl text-white font-bold">
                The whole world <br />awaits.
            </h1>

            <section className="pt-12">
              <Search />
            </section>

            <section className="pt-12">
              <Categories />
            </section>

          </main>
          </div>
       </section>
          <Gallery/>
          <OfferCards />   


       <section className="pl-28 pt-20">
          <h1 className="text-3xl text-black font-bold pb-10">
            Browse by property type
          </h1>

            <ScrollContainer className="flex gap-6">
                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={hotelsPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Hotels
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={apartmentPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Apartments
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={resortPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Resorts
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={campingPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Camping
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={villasPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Villas
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src={housesPicture}
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      Camping
                    </p>
                </div>
            </ScrollContainer>
          </section>

          
          <section className="pl-28 pr-12 pt-20">
               <div className="rounded-3xl p-20 h-[30rem] w-full bg-backgroundTrip bg-cover bg-no-repeat">
                  <p className="text-white sm:text-4xl lg:text-5xl xl:text-7xl 2xl:text-7xl font-bold">
                    Plan your trip with travel <br />expert
                  </p>

                  <p className="text-white sm:text-[1.5rem] 2xl:text-[2.1rem] pt-10">
                    Our professional advisors can craft your perfect itinerary
                  </p>
                
              </div>
          </section>

          

          <section className="pl-28 pt-20">
             <h2 className="font-bold text-3xl">
                Connect with other travelers in our community
              </h2>

            <ScrollContainer className="flex items-center gap-12 h-[28rem]">
                <div className=" flex flex-col flex-shrink-0 rounded-[1rem] h-[22rem] shadow-md p-4">
                  <div className="flex min-w-[240px] min-h-[100px]">
                        <img 
                          className="rounded-lg h-42 w-[22rem]"
                          src={indiaPicture}
                          alt="" />
                    </div>

                    <div className="pt-2">
                      <p className="text-2xl">
                        India
                      </p>
                      <div className="pt-3">
                        <p className="text-gray-400">Travel community</p>
                        <p className="text-gray-400">155,073 travelers</p>
                      </div>
                    </div>
                  
                </div>

                <div className=" flex flex-col flex-shrink-0 rounded-[1rem] h-[22rem] shadow-md p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src={travelTalkPicture}
                        alt="" />
                  </div>

                  <div className="pt-2">
                    <p className="text-2xl">
                      Travel Talk
                    </p>
                    <div className="pt-3">
                      <p className="text-gray-400">Travel community</p>
                      <p className="text-gray-400">155,073 travelers</p>
                    </div>
                  </div>
                  
                </div>

                <div className=" flex flex-col flex-shrink-0 rounded-[1rem] h-[22rem] shadow-md p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src={sunBeachPicture}
                        alt="" />
                  </div>

                  <div className="pt-2">
                    <p className="text-2xl">
                      Beach
                    </p>
                    <div className="pt-3">
                      <p className="text-gray-400">Travel community</p>
                      <p className="text-gray-400">155,073 travelers</p>
                    </div>
                  </div>
                  
                </div>

                <div className=" flex flex-col flex-shrink-0 rounded-[1rem] h-[22rem] shadow-md p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src={mountainsPicture}
                        alt="" />
                  </div>

                  <div className="pt-2">
                    <p className="text-2xl">
                      Mountains
                    </p>
                    <div className="pt-3">
                      <p className="text-gray-400">Travel community</p>
                      <p className="text-gray-400">155,073 travelers</p>
                    </div>
                  </div>
                  
                </div>
           </ScrollContainer>
          </section>

          
         <section className="pt-20">
              <div className="flex 2xl:pl-36 sm:pl-16 2xl:gap-28 lg:gap-28 sm:gap-4 pb-20 
              bg-backgroundFooter bg-no-repeat bg-cover min-h-[640px] w-full">

                  <img src={Iphone} 
                  className="pt-28 sm:h-[26rem] md:h-[32rem] lg:h-[38rem] xl:h-[40rem]
                  2xl:h-[44rem]" alt="" />
                

                <div className="flex flex-col gap-7 pt-20">
                  <p 
                   className="text-white font-bold 
                   2xl:text-6xl
                   xl:text-5xl
                   lg:text-4xl
                   md:text-2xl
                   sm:text-2xl
                   ">
                    Your all-in-one travel app.
                  </p>
                  <div className="
                  2xl:w-[60rem] xl:w-[42rem] lg:w-[32rem] md:w-[32rem] sm:w-[22rem]">
                    <p 
                     className="text-white 2xl:text-3xl xl:text-xl">
                      Book flights, hotels, 
                      trains & rental cars anywhere in the world in just seconds.
                      Get real-time flight updates, travel info, exclusive deals, 
                      and 30% more Trip Coins only on the app!
                    </p>
                  </div>

                  <div className="flex flex-col gap-5">
                    <div className="flex gap-6">
                      <button className="bg-background-search p-1 text-lg text-white rounded-[2rem] w-[6rem]">
                        Mobile
                      </button>

                      <button className="bg-background-search p-1 text-lg text-white rounded-[2rem] w-[6rem]">
                        Email
                      </button>
                    </div>

          <div className="flex 2xl:flex-row sm:flex-col sm:gap-16 2xl:gap-36 2xl:items-center">
                <div>
                  <p className="text-white pb-4">Enter your phone number to receive a text with 
                    a link to download the app.
                  </p>
                  <div className="bg-background-search justify-between flex 
                  items-center rounded-2xl sm:w-[20rem] 2xl:w-[33rem]
                  xl:w-[30rem] lg:w-[30rem] md:w-[30rem] p-2">

                    <p className="text-white pl-4">+91 Mobile number</p>
                    <button className='
                      flex items-center justify-center bg-white rounded-[32px] 
                       sm:w-24 2xl:w-36 xl:w-36 lg:w-36
                       md:w-36  h-10 text-[#2659C3] font-bold'>
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex md:flex-row lg:flex-row 2xl:flex-col gap-4">
                  <img
                  className="2xl:w-[12rem] sm:w-[8rem]" 
                  src={android} alt="" />
                  <img  
                  className="2xl:w-[12rem] sm:w-[8rem]"
                  src={appStore} alt="" />
                </div>
                
            </div>
         </div>
       </div>
     </div>
       <Footer />
      </section>
    </>
  )
}

