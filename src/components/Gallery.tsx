import ScrollContainer from "react-indiana-drag-scroll";
import romaPicture from "../assets/images/roma.jpg";
import parisPicture from "../assets/images/paris.jpg";
import beachPicture from "../assets/images/beach.jpg";
import italiaPicture from "../assets/images/italia.jpg";
import greciaPicture from "../assets/images/grecia.jpg";
import californiaPicture from "../assets/images/california.jpg";
import newYorkPictures from "../assets/images/new-york.jpg";

export function Gallery () {
  return (
    <>
    <section className="pl-28 pt-12">
          <h1 className="text-3xl text-black font-bold pb-10">
            Top Vacation Destination
          </h1>

      <ScrollContainer className="flex gap-6">
          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={romaPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                Roma
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={parisPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                Paris
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={beachPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                Brazil
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={italiaPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                Italia
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={greciaPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                Grécia
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={californiaPicture}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                California
              </p>
          </div>

          <div className="relative min-w-[300px] min-h-300px">
            <img 
              className="rounded-lg h-48 w-80"
              src={newYorkPictures}
              alt="" />
              <p 
               className="absolute font-bold text-xl mx-auto bottom-6 pl-5 text-white">
                New York
              </p>
          </div>
       </ScrollContainer>
    </section>
    </>
  )
}