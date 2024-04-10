import { Search } from "./components/Search";


export function App() {

  return (
    <>
      <div className="">
       <section className="h-screen bg-background bg-no-repeat bg-cover 
        min-h-[800px] max-h-[1366px]">
        <header className="flex justify-between px-12 py-8">
          <div className="">
              <img src="./src/assets/logo.svg" alt=""/>
          </div>
          <nav className="flex gap-8 text-zinc-500 ">
            <ul>
              <a href="">
                <li>Home</li>
              </a>
            </ul>
            <ul>

              <a href="">
                <li>Stays</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Flights</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Packages</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li>Sign Up</li>
              </a>
            </ul>
          </nav>
        </header>

          <main className="min-w-[1100px] px-28 py-16">
            <h1 className="text-7xl text-white">The whole world awaits.</h1>

            <Search />
          </main>
       </section>
      </div>
    </>
  )
}

