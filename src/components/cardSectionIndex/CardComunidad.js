

const CardComunidad = ({infoComunidad}) => {

    const{title, text, icon} = infoComunidad
  
    return (
      <>
        <div className="card-container">
          <div className="card">
            <div className="front-content">
              <div>{icon}</div>
              <h3>{title}</h3>
            </div>
            <div className="content">
              <h3 className="heading">{title}</h3>
              <div>
              <p>
                {text}
              </p>
              </div>
            </div>
          </div>
        </div>
  
        <style jsx>{`
          .card-container {
            width: 300px;
            height: 300px;
            position: relative;
            border-radius: 10px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            margin-top: 20px;
            margin-bottom: 20px;
          }
          
          .card {
            width: 100%;
            height: 100%;
            border-radius: inherit;
            margin: 5px 0 5px 0;
          }
          
          .card .front-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-evenly;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
          }
          
          .card .front-content h3 {
            font-size: 30px;
            font-weight: 700;
            opacity: 1;
            background: linear-gradient(-45deg, #091835 0%, #172556 100% );
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1)
          }
          
          .card .content {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 10px;
            background: linear-gradient(-45deg, #6b6868 0%, #252629 100% );
            color: #e8e8e8;
            padding: 5px;
            line-height: 1.5;
            border-radius: 5px;
            pointer-events: none;
            transform: translateX(-96%);
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
          }
  
          div > p{
            margin-right: 10px;
            paddig-top: 10px;
          }
          
          .card .content .heading {
            font-size: 32px;
            font-weight: 700;
          }
          
          .card:hover .content {
            transform: translateY(0);
          }
          
          .card:hover .front-content {
            transform: translateX(-30%);
          }
          
          .card:hover .front-content p {
            opacity: 0;
          }
          
          
        `}</style>
      </>
    )
  }
  
  export default CardComunidad