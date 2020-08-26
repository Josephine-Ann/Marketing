import React from 'react';
import Actions from './Actions';
import Feature from './Feature';
import InformativeParagraph from './InformativeParagraph';
import TriangleNarrowsLeft from './TriangleNarrowsLeft';
import TriangleNarrowsRight from './TriangleNarrowsRight';
import LandingImageTitle from './LandingImageTitle';
import Header from './Header';

const LandingPage = () => {
    return (
        <div>
            <div id="page-wrapper">
                <Header />
                <LandingImageTitle />
                <section id="wrapper">
                    <TriangleNarrowsLeft />
                    <TriangleNarrowsRight />
                    <TriangleNarrowsLeft />
                    <section id="four" className="wrapper alt style1">
                        <div className="inner">
                            <InformativeParagraph />
                            <section className="features">
                                <Feature />
                                <Feature />
                                <Feature />
                                <Feature />
                            </section>
                            <Actions />
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )
}



export default LandingPage;
