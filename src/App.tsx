import { Categories } from "./components/Categories";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { Gallery } from "./components/Gallery";
import { OfferCards } from "./components/OfferCards";
import Iphone from "./assets/iphone.png";
import appStore from "./assets/appStore.png";
import android from "./assets/android.png";
import ScrollContainer from "react-indiana-drag-scroll";
import { Footer } from "./components/Footer";

export function App() {

  return (
    <>
       <section className="relative bg-background bg-no-repeat bg-cover
        flex flex-col min-h-[840px]">
          <div className="bg-background-black absolute min-h-[840px] w-full">
          <Header />
          <main className="min-w-[1100px] px-28 py-24">
            <h1 
               className="text-7xl text-white font-bold">
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
            Top Vacation Destinations
          </h1>

            <ScrollContainer className="flex gap-6">
                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?hotels" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?apartments" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?resorts" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?villas" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?desert" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>

                <div className="relative min-w-[300px] min-h-300px">
                  <img 
                    className="rounded-lg h-48 w-80"
                    src="https://source.unsplash.com/random/landscape/?beach" 
                    alt="" />
                    <p 
                    className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                      lorem Ipsun
                    </p>
                </div>
            </ScrollContainer>
          </section>

          
          <section className="pl-28 pr-12 pt-20">
               <div className="rounded-3xl p-20 h-[30rem] w-full bg-backgroundTrip bg-cover bg-no-repeat">
                  <p className="text-white text-7xl font-bold">
                    Plan your trip with travel <br />expert
                  </p>

                  <p className="text-white text-[2.1rem] pt-10">
                    Our professional advisors can craft your perfect itinerary
                  </p>
                
              </div>
          </section>

          

          <section className="pl-28 pt-20">
             <h2 className="font-bold text-3xl pb-10">
                Connect with other travelers in our community
              </h2>

            <div className="flex gap-10">
                <div className=" flex flex-col rounded-[1rem] h-[24rem] w-[24rem] shadow-2xl p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                        <img 
                          className="rounded-lg h-42 w-[22rem]"
                          src="https://source.unsplash.com/random/landscape/?landscape" 
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

                <div className=" flex flex-col rounded-[1rem] h-[24rem] w-[24rem] shadow-2xl p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src="https://source.unsplash.com/random/landscape/?landscape" 
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

                <div className=" flex flex-col rounded-[1rem] h-[24rem] w-[24rem] shadow-2xl p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src="https://source.unsplash.com/random/landscape/?landscape" 
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

                <div className=" flex flex-col rounded-[1rem] h-[24rem] w-[24rem] shadow-2xl p-4">
                  <div className="flex flex-nowrap min-w-[240px] min-h-[100px]">
                      <img 
                        className="rounded-lg h-42 w-[22rem]"
                        src="https://source.unsplash.com/random/landscape/?landscape" 
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
           </div>
          </section>

          
         <section className="pt-20">
              <div className="flex pl-36 gap-28 pb-20 bg-backgroundFooter bg-no-repeat bg-cover
              min-h-[640px] w-full"
              >
                <div className="pt-28">
                  <img 
                  className="h-[32rem] w-[19rem]"
                  src={Iphone} alt="" />
                </div>

                <div className="flex flex-col gap-7 pt-20">
                  <p className="text-white font-bold text-6xl">Your all-in-one travel app.</p>
                  <div className="w-[60rem]">
                    <p className="text-white text-3xl">Book flights, hotels, 
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

          <div className="flex gap-36 items-center">
                <div>
                  <p className="text-white pb-4">Enter your phone number to receive a text with 
                    a link to download the app.
                  </p>
                  <div className="bg-background-search justify-between flex items-center rounded-2xl w-[33rem] p-2">
                    <p className="text-white pl-4">+91 Mobile number</p>
                    <button className='
                      flex items-center justify-center bg-white rounded-[32px] w-36 h-10 text-[#2659C3] font-bold'>
                      Search
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <img
                  className="w-[12rem]" 
                  src={android} alt="" />
                  <img  
                  className="w-[12rem]"
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

