import React, { StrictMode, useEffect, useState } from 'react';
import AdjustableImage from '../components/adjustableImage';
import AdjustableSubtitle from '../components/adjustableSubtitle';
import AdjustableTitle, {Title} from '../components/adjustableTitle';
import Header from '../components/header';
import CommonButton from '../components/commonButton';
import AdjustableNavBar from '../components/adjustableNavBar';
import FloatingButton from '../components/floatingButton'; 
import TreeViewer, { VideoData } from '../components/tree';
import BinaryTree from '../data-structs/BinaryTree';
import Subtitle2 from '../components/subtitle2';
import SectionView from '../components/sectionView';
import { Computer, PageDesign } from '../icons/icon';
import Paragraph from '../components/paragraph';
import Projects from '../data/projects.json';
import About from '../data/about.json';
import ProjectView from '../subpages/Project';
import Card, { CardsContainer } from '../components/card';
import Tree from '../data-structs/Tree';
import CenterDiv from '../components/centerDiv';
import IconLink from '../components/iconlink';

type LANGS = 'es' | 'en' | 'ch';

const Landing = () : JSX.Element => {
    const [expand, setExpand] = useState<boolean>(false);
    const [arbol, setState] = useState(new Tree<number, VideoData>());
    const [selectedView, setView] = useState<number>(1);
    const [lang, setLang] = useState<LANGS>('es');

    const changeView = (index:number) => {
        setView(index);
        console.log(index)
    }

    useEffect( () => {
        setExpand(false);
        setTimeout(() => {
            setExpand(true);
        }, 100);
    }, [] );

    /*
    useEffect(() => {
        const onScroll = (e:Event) => {
            resetTimeout(null);
            setScrollTop((e.target as Document).documentElement.scrollTop);
        
            if (!isScrolling) {
                setScrolling(true);
            }
        
            resetTimeout( setTimeout(() => { setScrolling(false); }, 5) );
        };
        window.addEventListener("scroll", onScroll);
    }, [])

    useEffect(() => {
        var counterToExpand = setTimeout(() => {
            if (prepare && isScrolling && window.scrollY == 0) {
                setExpand(true);
                setPrepare(false);
            }
            resetTimeout(counterToExpand);
        }, 2);
        
        if(scrollTop==0 && isScrolling) {
            window.scrollTo(0,1);
            setPrepare(true);
        }
        //return () => window.removeEventListener("scroll", onScroll);
    }, [scrollTop]);

    useEffect( () => {
        /*arbol.setRoot(1, { title : '¿Qué es la programación?', videoId : 'lR9BbMQExeI' });
        // Segmento 1
        arbol.appendNode(1, 2, { title : '¿Cuáles son las áreas de la programación?', videoId : 'WREhrNCQuMM' });
        arbol.appendNode(1, 3, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(1, 4, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        // Segmento 2
        arbol.appendNode(2, 5, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(2, 6, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(3, 7, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(4, 8, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(4, 9, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(4, 10, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        // Segmento 3
        arbol.appendNode(5, 11, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(7, 12, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(7, 13, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(7, 14, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
        arbol.appendNode(10, 15, { title : '¿Por qué aprender a programar?', videoId : 'vkbsYZ2hF9g' });
    }, [] ) */

    return (
        <>
            <Header id='header-id' isExpanded={expand} >
                <AdjustableImage id='image-id' src={"profileImage.png"} isExpanded={expand} maxWidth={'100vh'} />
                <AdjustableTitle id='title-id' isExpanded={expand} >Brayan Téllez Cruz</AdjustableTitle>
                <AdjustableSubtitle id='title-id' isExpanded={expand} >Desarrollador web</AdjustableSubtitle>
                <Computer id='icon-id' isExpanded={expand} />
                <AdjustableNavBar id='navBar-id' isExpanded={expand} selectedView={selectedView} onChange={ changeView } >
                    <CommonButton>Proyectos</CommonButton>
                    <CommonButton>Servicios</CommonButton>
                    <CommonButton>Sobre mi</CommonButton>
                    <CommonButton>Contacto</CommonButton>
                </AdjustableNavBar>
            </Header>
            {
                expand ? <FloatingButton id='icon-id' isExpanded={expand} onClick={ () => {setExpand(!expand); window.scrollTo(0,20)} } >Click me</FloatingButton> : null
            }
            {!expand?
                <>
                    <>
                        <button onClick={()=>setLang('es')} >es</button>
                        <button onClick={()=>setLang('en')} >en</button>
                        <button onClick={()=>setLang('ch')} >ch</button>
                    </>
                    {
                        Projects[lang].stages.map( (stage, index) => <SectionView id="1" side={index%2==0?'right':'left'} >
                            {
                                stage.title ? 
                                    <Title>{stage.title}</Title>
                                    :null
                            }
                            <PageDesign id='icon-id' isExpanded={true} maxWidth={'300px'} />
                            <Subtitle2>{stage.subtitle}</Subtitle2>
                            <Paragraph text={stage.content}/>
                            {/*
                                stage.type.includes('tree') ? 
                                    <TreeViewer content={arbol} />
                                    :null*/
                            }
                        </SectionView> )
                    }
                    <ProjectView/>
                    <SectionView id="2" side='left'>
                        <Title>Servicios</Title>
                        <Computer id='icon-id' isExpanded={true} maxWidth={'300px'} />
                        <CardsContainer>
                            <Card/>
                            <Card/>
                            <Card/>
                        </CardsContainer>
                    </SectionView>
                    {
                        About[lang].stages.map( (stage, index) => <SectionView id="3" side='right' >
                            {
                                stage.title ? 
                                    <Title>{stage.title}</Title>
                                    :null
                            }
                            <PageDesign id='icon-id' isExpanded={true} maxWidth={'300px'} />
                            <Subtitle2>{stage.subtitle}</Subtitle2>
                            <Paragraph text={stage.content}/>
                        </SectionView> )
                    }
                    <SectionView id="4" side='left'>
                        <Title>Contactame</Title>
                        <Computer id='icon-id' isExpanded={true} maxWidth={'300px'} />
                    </SectionView>
                </>
            : null}
            <CenterDiv>
                <IconLink icon='linkedin' href='https://www.linkedin.com/in/brayan-t%C3%A9llez-cruz-mx/' />
                <IconLink icon='youtube' href='https://www.youtube.com/@brayan_tellez_programacion_mx' />
                <IconLink icon='github' href='https://github.com/BrayanTCc83' />
            </CenterDiv>
        </>
    )
}

export default Landing;