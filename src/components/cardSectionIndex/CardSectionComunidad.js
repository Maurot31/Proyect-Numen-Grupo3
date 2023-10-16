import CardListComunidad from "./CardListComunidad"


const CardSectionComunidad = () => {
    return (
        <>
            <div>
                <CardListComunidad />
            </div>

            <style jsx>{`
            div{
                background: whitesmoke;
                object-fit: contain;
                height: 1500px;
                display: grid;
                width: 100%; 
            }
            
            @media screen and (min-width: 768px){
                div{
                    height: 700px;
                }
            }

            @media screen and (min-width: 1300px){
                div{
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;
                }
            }
            `}</style>
        </>

    )
}

export default CardSectionComunidad