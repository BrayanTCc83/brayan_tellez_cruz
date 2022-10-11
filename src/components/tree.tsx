import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BinaryNode } from '../data-structs/Node';
import BinaryTree from '../data-structs/BinaryTree';
import ContentContainer from './contentContainer';
import Tree, { MatrixTNode, ArrayTNode, TreeNode } from '../data-structs/Tree';

export type VideoData = {
    title : string,
    videoId : string
};

type TreeViewerProps = {
    content : Tree<number, VideoData>
};

type BinaryTreeViewerProps = {
    content : BinaryTree<number, VideoData>
};

type StageMarker = {subStage:number, nextStages:Array<number>};

type NodeProps = React.PropsWithChildren & { key: string, selectedColor: string, node: TreeNode<number, VideoData> };

type LineProps = {lineType:'in'|'out', lineIndex: number} & NodeProps;

const NodePoint = styled.a.attrs( (props: {text:string, selectedColor:string}) => props )`
    position: relative;
    width: 30px;
    height: 30px;
    top: 0;
    left: 0;
    background-color: ${ props => props.selectedColor ? props.selectedColor : '#35D9B8' };
    border-radius: 100%;
    color: white;
    cursor: pointer;
    z-index: 1;
    &::after{
        content: ${ props => props.text ? ''+props.text : 'No hay titulo' };
        position: absolute;
    }
`

const MiniatureViewer = styled.iframe`
    display: block;
    position: absolute;
    top: 140%;
    left: 0;
    border-radius: 10px;
    border: none;
    background-color: black;
    z-index: 2;
`;

const Text = styled.span`
    display: block;
    margin: 5px;
    font-size: 15px;
    max-height: 60px;
    display: flex;
`;

const LineDesign = styled.line`
    stroke: white;
    stroke-width:6; 
    stroke-linecap: round;
`;

const NodeContainer = styled.div.attrs( (props:{selectedColor:string}) => {
    return {...props};
} )`
    color: white;
    width: 180px;
    height: 90px;
    position: relative;
    overflow: visible;
    display: flex;
    grid-gap: 0px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    .miniature {
        display:none;
    }
    :hover{
        .miniature{
            position: absolute;
            top: 120px;
            display: block;
        }
    }
    span{
        height: 40px;
        z-index: 1;
    }
    svg{
        position: absolute;
        top: 40px;
        left:0;
        width: 100%;
        height: 50px;
        z-index: 0;
        overflow: visible;
        line{
            z-index: 0;
        }
    }
    
    :hover > svg > line {
        stroke:${props => props.selectedColor} !important;
    }
`;

const StageStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 200px;
`;

const NodeMiniature = ( props: {videoId:string } ) => {
    return ( 
        <MiniatureViewer className='miniature'
            width="200"
            height="170"
            src={`https://www.youtube.com/embed/${props.videoId}` }
        ></MiniatureViewer>
    )
};
const LineViewer = ( props: LineProps ) : JSX.Element => {
    const getOut = () : JSX.Element => {
        const min = 90;
        let y2 : number = 0; 
        const value = props.node.getValue()
        const countNodes = props.node.getChildrenCount()
        const factor = props.node.getFactor()
        if( countNodes > 1 ){
            let lineItem = 0
            if( countNodes % 2 == 0 ){
                console.log( 2*(props.lineIndex < countNodes/2 ? factor : -factor))
                lineItem = 2*(props.lineIndex < countNodes/2 ? factor : -factor)  
            }else{
                console.log(2*(factor - props.lineIndex))
                lineItem = 2*(factor - props.lineIndex)
            }
            y2 -= (lineItem)*min;
        }else{
            console.log(0)
        }
        return <LineDesign x1="50%" y1="50%" x2="200px" y2={(25+y2)+"px"}/>;
    }; 

    return(
        <svg>
            {
                props.lineType == 'in' ?
                    <LineDesign x1="0" y1="50%" x2="50%" y2="50%"/>
                :
                    getOut()
            }
        </svg>
    );
};

const NodeViewer = ( props: NodeProps ) : JSX.Element => {
    const [value, setValue] = useState(props.node.getValue())

    const getOutLines = () : JSX.Element => {
        let Lines : Array<JSX.Element> = [];
        for(let i=0; i<props.node.getChildrenCount(); i++)
            Lines.push(<LineViewer lineType='out' lineIndex={i} {...props}/>);
        return <>
            {Lines.map( line => line )}
        </>;
    };

    return (
        <NodeContainer selectedColor={props.selectedColor}>
            <LineViewer lineType='in' lineIndex={0} {...props}/>
            <Text>{value.title}</Text>
            <NodePoint href={`https://www.youtube.com/watch?v=${value.videoId}`} title={value.title} selectedColor={props.selectedColor} >{props.key}</NodePoint>
            <NodeMiniature videoId={value.videoId} />
            { getOutLines() }
        </NodeContainer>
    );
};

const colors = ['#35D9B8', '#59b4ff', '#8295ff', '#a283ff', '#be82ff', '#e283ff', '#ff82f5', '#ff83d8', '#ff8299', 
    '#ff8383', '#ffbe82', '#ffd883', '#fffb82', '#d2ff83', '#9bff82', '#87ff83', '#82ffa8', '#83ffa2'];

type StageProps =  { nodes : Array<BinaryNode<number, VideoData>>, stageNumber: number, nextStage: Array<number>, currentStage:Array<number>, lastStage:Array<number> };
/*
const Stage = ( props : StageProps ) : JSX.Element => {
    let indice = 0;

    return (
        <StageStyle>
            {
                props.currentStage.map( (a, index) => {
                    const curArray = new Array(a !== 0 ? a : 1)
                    curArray.fill(1)
                    return curArray.flatMap( (b, j) => {
                        if( a === 0 )
                            return <NodeContainer/>
                        else{
                            const node = props.nodes[indice];
                            indice+=1
                            if(node !== undefined && node.getValue()?.title !== '')
                                return <NodeViewer title='' videoId='' countNodes={node.getConectedNodes()} subStage={index} nextStages={props.nextStage}
                                    {...node.getValue()} selectedColor={colors[props.stageNumber%colors.length] } index={j} factor={0}/> 
                            else
                                return <NodeContainer/>
                        }
                    })
                } )
            }
        </StageStyle>
    )
}

const BinaryTreeViewer = ( props : BinaryTreeViewerProps ) : JSX.Element => {
    const [ Stages, setStages ] = useState<Array<StageProps>>([]);

    const buildStages = ( originNodes : Array< BinaryNode<number, VideoData> >, voids: Array<number> = [] ) => {
        const nextStage = originNodes.map( node => {
            let left = node.getLeftNode();
            let right = node.getRightNode();

            return left && right ? [left,right] : left ? [left] : right ? [right] : [];
        } );

        voids.forEach( index => {
            nextStage.splice( index, 0, [new BinaryNode<number, VideoData>(0, {videoId:'', title:''})] );
        } );

        setStages( old => [...old, {
            nodes:originNodes ,
            stageNumber:old.length,
            nextStage: nextStage.map( arr => arr.length ), 
            lastStage: old[old.length-1]? old[old.length-1].currentStage : [0],
            currentStage: old[old.length-1]? old[old.length-1].nextStage : [1],
        }]); 

        const filtereds = originNodes.filter( a => a.getConectedNodes() === 0  );
        if( nextStage.length > 0 && filtereds.length != originNodes.length ){
            buildStages(nextStage.flat(), filtereds.map( filt => originNodes.indexOf(filt)) );
        }
    };

    useEffect( () => {
        setStages( old => [] )
        let originalNode = props.content.getNode(1);
        buildStages( originalNode ? [originalNode] : [] ) 
    }, [ props ] ); 

    return (
        <ContentContainer pxVerticalMargin={220} >
            {
                Stages.map( ThisStage => <Stage {...ThisStage}/> )
            }
        </ContentContainer>
    );
};*/

const Cnt = styled.div`
    width: 300px;
    background-color: white;
`

const Sqr = styled.div`
    margin: 10px;
    width: 100px;
    height: 100px;
    background-color: red;
`
/*
const CreateFillNodes = (levels : ArrayTNode<number, VideoData>, arraySize : number, index:Array<number>, stageIndex:number) : JSX.Element => {
    const nodesToFill = (new Array(arraySize)).fill('');
    return <>{
        nodesToFill.flatMap( (v) => {
            const node = levels[0][index[0]++];
            const a = (new Array(Math.floor(node.getChildrenCount()))).fill('');
            a[(Math.floor(a.length/2))] = node;
            return a.map( (newNode) => newNode != '' ?
                <NodeContainer>
                    <NodeViewer countNodes={newNode.getChildrenCount()} subStage={stageIndex} nextStages={[]}
                        {...newNode.getValue()} selectedColor={colors[stageIndex%colors.length] } id={newNode.getId()} index={index} factor={newNode.getFactor()} />
                </NodeContainer>
                : <NodeContainer/>
            )
        } )
    }</>
}*/

const GetLevelNodes = (levels : MatrixTNode<number, VideoData>, stageIndex: number) : ArrayTNode<number, VideoData> => {
    return levels[stageIndex];
}

const AddChildrenNodes = (node : TreeNode<number, VideoData>|null, nodeIndex:number, stageIndex: number) => {
    let nodeCount = node ? node.getChildrenCount(): 0;
    let parent = node ? node.getParent(): null;
    let parentCount = parent ? parent.getChildrenCount() : 0;
    let toCreate = (new Array( parentCount%2 === 0 && nodeIndex%2 === 0 ? 
        parentCount : nodeCount%2 != 0 ? nodeCount : nodeCount+1)
    ).fill(null);
    toCreate[!nodeIndex ? 0 : nodeIndex == parentCount-1? toCreate.length-1 : Math.floor(nodeCount/2)] = node;
    console.log(toCreate) 
    return toCreate;
}

const BuildStage = ( levels : MatrixTNode<number, VideoData>, stageForms:Array<JSX.Element>=[], currentStage:ArrayTNode<number,VideoData>=[], stageIndex:number=0) : JSX.Element => {
    if( stageIndex < levels.length ){
        const thisStage = currentStage.length > 0 ? currentStage : GetLevelNodes(levels, stageIndex);
        const nextStage = thisStage.flatMap(
            node => node ? 
            node.getChildren().flatMap( (child, index) => AddChildrenNodes(child, index, stageIndex)) : []
        );
        console.log(thisStage.map( node => node ? node.getChildrenCount() : 0 )) 

        stageForms.push(
            <StageStyle>
                {
                    thisStage.flatMap( (node, index) => node == null ? <NodeContainer/>:
                        <NodeContainer>
                            <NodeViewer key={''+node.getId()} node={node} selectedColor={colors[stageIndex%colors.length]} />
                        </NodeContainer>
                    )
                }
            </StageStyle>
        )
        BuildStage(levels, stageForms, nextStage, stageIndex+1);
    }
    return (<>{stageForms.map( stage => stage )}</>);
}

const TreeViewer = ( props : TreeViewerProps ) : JSX.Element => {
    let max = 0;
    console.log(props.content.getLevels()) 
    return (
        <ContentContainer pxVerticalMargin={220} >
            {
                BuildStage(props.content.getLevels())
            }
        </ContentContainer>
    )
}

export default TreeViewer;