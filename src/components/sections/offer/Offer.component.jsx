import React from 'react'

import { StaticImage } from "gatsby-plugin-image"
import Fade from 'react-reveal/Fade'

import elementaryIcon from '../../../images/icon_elementary.svg'
import contestIcon from '../../../images/icon_contest.svg'
import finalsIcon from '../../../images/icon_finals.svg'
import currentIcon from '../../../images/icon_current.svg'
import Blob from '../../blob/Blob.component'

import './offer.scss'

const Offer = ({scrSize}) => {
    console.log(scrSize)
    return (
        <section id="offer" className="offer">
            <Fade top duration={1000}>
                <h1 className="offer__header txt_purple">Oferuję korepetycje z matematyki, pod kątem:</h1>
            </Fade>
            
            <div className="offer__list">
                <div className="offer__list_column">
                    <div className="offer__list_element">
                        <img className="element_icon" src={elementaryIcon} alt="elementary icon"></img>
                        <h2 className="offer__list_element_text txt_purple txt_purple--point">Egzaminu <br/> 8-klasisty</h2>
                    </div>
                    <div className="offer__list_element">
                        <img className="element_icon" src={contestIcon} alt="contest icon"></img>
                        <h2 className="offer__list_element_text txt_purple txt_purple--point">Egzaminu <br/> Maturalnego</h2>
                    </div>
                </div>
                <div className="offer__list_column">
                    <div  className="offer__list_element">
                        <img className="element_icon" src={finalsIcon} alt="finals icon"></img>
                        <h2 className="offer__list_element_text txt_purple txt_purple--point">Przygotowania <br/> do konkursów</h2>
                    </div>
                    <div className="offer__list_element">
                        <img className="element_icon" src={currentIcon} alt="current icon"></img>
                        <h2 className="offer__list_element_text txt_purple txt_purple--point">Bierzącego <br/> Materiału</h2>
                    </div>
                </div>
            </div>
            {(scrSize === 'large') ? <Blob position={"blob_position-finals_tablet"} color={"blob_fill-light_green"}/>: null}
            

            <StaticImage 
                className="offer__a_square_l" 
                src="../../../images/a_square.svg"
                alt=""
                placeholder="none"
                quality="100"
            />
            <StaticImage 
                className="offer__a_square_r" 
                src="../../../images/a_square.svg"
                alt="" 
                placeholder="none"
                quality="100"
            />                

        </section>
    )
}

export default Offer