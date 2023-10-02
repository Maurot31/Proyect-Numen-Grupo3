import Link from "next/link"



const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <h2>Heroe <span>Wear</span></h2>

        <nav>
            <Link href="/" className="link">Inicio</Link>
            <Link href="/tienda" className="link">Tienda</Link>
            <Link href="/contacto" className="link">Contacto</Link>
        </nav>
      </div>

      <style jsx>{`
            .nav-container{
              padding: .5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
              position: fixed;
              width: 100%;
              background-color: #35363A;
            }

            h2{
                font-family: Bangers-Regular;
                color: whitesmoke;
                letter-spacing: 0.05rem;
            }

            nav{
              display: flex;
              column-gap: 1rem;
              
            }

        `}</style>
    </>
  )
}

export default NavBar