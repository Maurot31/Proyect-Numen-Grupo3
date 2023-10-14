import React from 'react'
import ImgPromo from './ImgPromo'
import TextPromo from './TextPromo'

const SectionPromo = () => {
    return (
        <>
            <div className='contain'> 

                <ImgPromo />
                <TextPromo />
            </div>
            <style jsx>{`
                .contain{
                    height: 60vh;
                }

                @media screen and (min-width: 768px) {
                    .contain{
                        heigth: 60vh;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
               }
                
               
            `}</style>
        </>
    )
}

export default SectionPromo