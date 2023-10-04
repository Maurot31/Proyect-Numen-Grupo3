import CardComunidad from "./CardComunidad"

const infoComunidad = [
    {
        id: 1,
        title: "Nuestra calidad",
        text: "Contamos con la mejor calidad en productos, nuestras remeras están confeccionadas en 100% algodón"
    },
    {
        id: 2,
        title: "Formas de entrega",
        text: "Podés retirar sin cargo en cualquiera de nuestras tiendas, u optar por envío a domicilio con un costo"
    },
    {
        id: 3,
        title: "Comunidad Heroe",
        text: "Suscribite a nuestro newsletter y obtené los mejores descuentos en nuestra tienda online, Te estamos esperando"
    },
    {
        id: 4,
        title: "Formas de pago",
        text: "Aboná con todos los medios de pago de Mercado Pago o pagá en eftvo al momento de retirar en cualquiera de nuestras sucursales"
    }
]

const CardListComunidad = () => {
    return (
        <>
            <div>
                {
                    infoComunidad.map(infoComunidad => <CardComunidad key={infoComunidad.id} infoComunidad={infoComunidad} />)
                }
            </div>

            <style jsx>{`
                div{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
            `}</style>
        </>
    )
}

export default CardListComunidad