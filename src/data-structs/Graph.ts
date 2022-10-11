import { NodesErrors, GraphNode } from "./Node";
import Stack from "./Stack";

type Way<K,V> = { route: Array<GraphNode<K,V>>, totalCost: number };
type Edge<K,V> = {node:GraphNode<K,V>,cost:number};

export default class Graph<K,V> {
    private matrix : number[][] = [];
    protected nodes : Array<GraphNode<K,V>> = [];

    protected constructor(){}

    public static buildWithMatrix<K,V>( matrix : number[][] ) : Graph<K,V> {
        let graph = new Graph<K,V>();
        graph.setMatrix( matrix );
        return graph;
    }

    private setMatrix( matrix : number[][] ) : void {
        this.matrix = matrix;
    }

    private buildMatrix() : void {
        const LENGTH = this.nodes.length;
        if( this.matrix.length !== LENGTH ){
            this.matrix = new Array(LENGTH);
            this.nodes.forEach( (node, i) => {
                this.matrix[i] = new Array(LENGTH).fill(0);
                node.getEdges().forEach( edge => {
                    this.matrix[i][this.nodes.indexOf(edge.node)] = edge.cost;
                } )
            } )
        }
    }

    public getMatrix() : Array<Array<number>> {
        this.buildMatrix();
        return this.matrix;
    }

    public static build<K,V>() : Graph<K,V> {
        return new Graph<K,V>();
    }

    public addNode( key : K, value : V ) : void {
        this.nodes.push( new GraphNode<K,V>(key, value) );
    }

    public setNodesKeys( keys : Array<K> ) : void {
        this.buildNodes(keys);
    }
    
    private buildNodes( keys : Array<K> ) : void {
        const LENGTH = this.matrix.length;
        if( this.nodes.length !== LENGTH  ){
            this.nodes = [];
            for(let i =0; i < LENGTH; i++){
                const newNode = new GraphNode<K,V>(keys[i], null);
                this.nodes.push(newNode);
            }
            this.matrix.forEach( ( nodeEdges, origin )=>{
                nodeEdges.forEach( ( cost, destiny ) => {
                    if(cost != 0){
                        this.addEdge( 
                            this.nodes[origin].getKey(), 
                            this.nodes[destiny].getKey(), 
                            cost
                        );
                    }
                } )
            } )
        }
    }

    public getNodes() : Array<GraphNode<K,V>> {
        if( this.matrix.length != 0 && this.nodes.length < this.matrix.length )
            this.buildNodes([]);
        return this.nodes;
    }

    public addEdge( originKey : K, destinyKey : K, cost : number ) : void {
        for(let i = 0; i < this.nodes.length; i++ ){
            const currentNode = this.nodes[i];
            if(currentNode.getKey() == originKey ){
                const destiny : GraphNode<K,V> | undefined = this.nodes.find( node => node.getKey() == destinyKey );
                if( destiny )
                    this.setEdges( currentNode, destiny, cost );
                else
                    console.error(destinyKey,": ",NodesErrors.NotFound);
                return;
            }
        }
        console.error(originKey,": ",NodesErrors.NotFound);
    }

    protected setEdges( aNode : GraphNode<K,V>, bNode : GraphNode<K,V>, cost : number ){
        aNode.addEdge(bNode, cost);
    }
    
    private getWays( firstNodeKey:K, lastNodeKey:K, route : Array<Way<K,V>> ) : Array<Way<K,V>>{


        return [];
    }

    public getPosibleWays( firstNodeKey:K, lastNodeKey:K ) : Array<Way<K,V>>{
        return this.getWays( firstNodeKey, lastNodeKey, [] );
    }

    public getBestWay( firstNodeKey:K, lastNodeKey:K ) : Way<K,V> | null{
        let totalCost = 0;
        let currentNode = this.nodes.find( node => node.getKey() == firstNodeKey );
        let lastNode = this.nodes.find( node => node.getKey() == lastNodeKey );
        let route :Array<GraphNode<K,V>> = [];

        if( currentNode !== undefined && lastNode !== undefined ){
            route.push(currentNode )
            while( currentNode !== undefined && route.indexOf(lastNode) === -1 ){
                console.log("Posibilities", currentNode?.getEdges()) 
                const result : Edge<K,V> | undefined = currentNode?.getEdges().reduce( ( previus, current) => { 
                    
                    if( current.cost < previus.cost || !previus || (current.node == lastNode && current.cost == previus.cost) )
                        return current
                    else if(!route.includes(current.node) && current.cost <= previus.cost )
                        return current
                    
                    return previus
                })
                console.log("Result", result) 
                if( result && !route.includes(result.node) ){
                    route.push( result?.node )
                    totalCost += result ? result.cost : 0
                    console.log( route, totalCost );
                    currentNode = result?.node; 
                }else
                    currentNode = undefined;
            }
        }

        return {route, totalCost};
    }
} 

export class GraphNoDirect<K,V> extends Graph<K,V> {
    protected override setEdges( aNode : GraphNode<K,V>, bNode : GraphNode<K,V>, cost : number ){
        aNode.addEdge( bNode, cost );
        bNode.addEdge( aNode, cost );
    }
}