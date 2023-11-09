import React from 'react';
import styles from "./About.module.scss"
import Container from "../../UI/Container";
import BlockInfoText from "../../UI/BlockInfoText";

const About = () => {
    return (
        
        <div className={styles.body} id={"aboutUS"}>
            <Container>
                <div className={styles.bodyWrapper}>
                    <BlockInfoText title={"ABOUT US"} description={"                                Mosaic Film Festival is dedicated to discovering true talents in the film industry who, for various reasons, have not yet become internationally renowned. The screening of the winners takes place in a unique location in the city, namely at Casa da Juventude da Tapada das Meroês, a youth center surrounded by greenery in the picturesque district of Tapada das Meroês. This unique center not only serves as a venue for film screenings but also serves as a source of inspiration for the youth. It contributes to the development of creative potential by providing young people with opportunities for self-expression, skill development, and participation in social activities."}/>
                    <div className={styles.images}>
                        <img  src={"/images/Aboutt/logo.png"}/>
                    </div>
                </div>
                </Container>
        </div>
    );
};

export default About;