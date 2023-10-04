import CardListComunidad from "./CardListComunidad"


const CardSectionComunidad = () => {
    return (
        <>
            <div>
                <CardListComunidad />
            </div>

            <style jsx>{`
            div{
                
                object-fit: contain;
                height: 320px;
                display: grid;
                width: 100%; 
            }    
            `}</style>
        </>

    )
}

export default CardSectionComunidad