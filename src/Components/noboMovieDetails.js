import React from 'react';
import Header from './header';
import Footer from './footer';
import DefaultImage from '../Images/cinema-default.min.jpg';

import {
    StyledDetail,
    TitleDetail,
    Container,
    ContainerDetail,
    ImageMovie,
    ContainerSummary,
    TitleText,
    Summary,
    Link,
    Text,
    OfficialSite,
    ContainerButton,
    Button
} from './noboMovieDetail.style'

const NovoMovieDetails = ({ detail, activatOpenAndClose }) => {
    console.log('detail', detail);

    // le texte 'origine n'est pas propre, alors on le corrige.
const nettoyage = (clean) => {
    try {
        clean = clean.replace(/<\/b>/gi, "");
        clean = clean.replace(/<b>/gi, "");
        clean = clean.replace(/<p>/gi, "");
        clean = clean.replace(/<i>/gi, "");
        clean = clean.replace(/<\/i>/gi, "");
        clean = clean.replace(/<\/p>/gi, "");
    return clean;
} catch {
    return null
}
}

    return (
        <>
            <Header Title={detail.show.name} />
            <StyledDetail>
                <TitleDetail>🎥 Détail du film {detail.show.name} 🎥 </TitleDetail>
                <Container>
                    <ContainerDetail>
                        {detail.show.image !== null 
                        ?
                            <ImageMovie 
                                src= {detail.show.image.medium}
                                alt={`photo du film ${detail.show.name}`}
                            />
                        : 
                            <ImageMovie 
                                src= {DefaultImage}
                                alt={`photo du film ${detail.show.name}`}
                                style={{width: 210}}
                            />
                        }
                        <ContainerSummary>
                            <TitleText>Résumé</TitleText>
                            <Summary>{nettoyage(detail.show.summary)}</Summary>
                            <TitleText>Prochaine difusion</TitleText>
                            <Text>
                                Quand: {detail.show.schedule.days} 
                                <span>{detail.show.schedule.time 
                                ? `, heure: ${detail.show.schedule.time}`
                                : ''
                                }
                                </span>
                                </Text>
                            <Link
                                href={detail.show.officialSite}
                                target='_blank' 
                                style={{display: detail.show.officialSite ? null : 'none'}}
                            >
                                <OfficialSite>Site officiel</OfficialSite>
                            </Link>
                        </ContainerSummary>
                    </ContainerDetail>
                </Container>
                <ContainerButton>
                    <Button onClick={activatOpenAndClose}>Retour page Home</Button>
                </ContainerButton>
            </StyledDetail>
            <Footer />
        </>
    )
}

export default NovoMovieDetails