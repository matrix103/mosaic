import React from 'react';
import styles from "./Features.module.scss"
import Container from "../../UI/Container";
import BlockInfoText from "../../UI/BlockInfoText";

const Features = () => {
    return (
        
        <div className={styles.body} id={"aboutUS"}>
            <Container>
                <div className={styles.bodyWrapper}>
                    <div className={styles.images}>
                        <img  src={"/images/Features/people.png"}/>
                    </div>
                    <BlockInfoText title={"FEATURES"} description={"The Mosaic Film Festival is a place where a knowledgeable jury evaluates not only the financial aspect of your film but, on the contrary, emphasizes the search and recognition of new authors with undeniable talent and taste. At our festival, you can explore a multitude of genres and styles, as well as witness the art of cinema in all its glory. We strive to support diversity and innovation in the world of cinematic arts, providing the audience with access to and experimental film genres. Our festival represents art that inspires, provokes thought, and supports the creative development of young filmmakers."}/>

                </div>
                </Container>
        </div>
    );
};

export default Features;