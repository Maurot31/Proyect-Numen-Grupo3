const Button = () => {
    return (
        <>
            <button>Comprar</button>


            <style jsx>{`
                button{
                    background-color: green;
                    color:white;
                    border:none;
                    border-radius: .3rem;
                    padding: 5px 10px;
                    text-transform: uppercase;
                    box-shadow: 0px 2px 2px -1 px black;
                    transition: .3s;
                    width: 95%;
                    
                }

                button:hover {
                    box-shadow: 0px 2px 2px 0px black;
                }
                `}</style>

        </>
    )
}

export default Button