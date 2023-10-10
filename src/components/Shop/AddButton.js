const AddButton = () => {
    return (
        <>
            <button>Agregar al Carrito</button>


            <style jsx>{`
                button{
                    background-color: #172556;
                    color:white;
                    border:none;
                    border-radius: .3rem;
                    padding: 5px 10px;
                    text-transform: uppercase;
                    box-shadow: 0px 2px 2px -1px black;
                    transition: 0.3s;
                    width: 95%;
                    
                }

                button:hover {
                    box-shadow: 0px 2px 2px 0.1px black;
                    
                }
                `}</style>

        </>
    )
}

export default AddButton