export function Header (){
  return (
    <header className="flex justify-between px-12 py-8">
          <div className="">
              <img src="./src/assets/logo.svg" alt=""/>
          </div>
          <nav className="flex gap-6 text-white ">
            <ul>
              <a href="">
                <li className="hover:border-b-2">Home</li>
              </a> 
            </ul>
            <ul>

              <a href="">
                <li className="hover:border-b-2">Stays</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li className="hover:border-b-2">Flights</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li className="hover:border-b-2">Packages</li>
              </a>
            </ul>

            <ul>
              <a href="">
                <li className="hover:border-b-2">Sign Up</li>
              </a>
            </ul>
          </nav>
        </header>
  )
}