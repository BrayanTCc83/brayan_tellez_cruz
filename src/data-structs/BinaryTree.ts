import { NodesErrors, BinaryNode } from "./Node";

export default class BinaryTree<T,C> {
    private nodos = new Array<BinaryNode<T,C>>();

    public setRoot(keyNode:T, valueNode:C){
        if( this.nodos.length > 0 )
            this.nodos = new Array<BinaryNode<T,C>>();

        this.nodos.push(new BinaryNode<T,C>(keyNode, valueNode));
    }

    public appendLeftNode(originKey: T, keyNode: T, valueNode: C):void {
        const index = this.findNode(originKey);
        if( index != -1 ){
            if( this.findNode(keyNode)==-1 ){
                let node = new BinaryNode<T,C>(keyNode,valueNode);
                this.nodos.push(node);
                let currenNode = this.nodos[index];
                if(currenNode.getLeftNode()!=null  ){
                    let remove:T|undefined|null = currenNode.getLeftNode()?.getKey();
                    if(remove)
                        this.removeNode(remove);
                }
                currenNode.setLeftNode(node);
            }else
                console.error(NodesErrors.KeyDuplicate)
        }else
            console.error(NodesErrors.NotFound)
    }

    public removeNode(key:T): void{
        this.nodos = this.nodos.filter( (nodo) => nodo.getKey()!=key )
    }
    
    public appendRightNode(originKey: T, keyNode: T, valueNode: C):void {
        const index = this.findNode(originKey);
        if( index != -1 ){
            if( this.findNode(keyNode)==-1 ){
                let node = new BinaryNode<T,C>(keyNode,valueNode);
                this.nodos.push(node);
                let currenNode = this.nodos[index];
                if(currenNode.getRightNode()!=null  ){
                    let remove:T|undefined|null = currenNode.getRightNode()?.getKey();
                    if(remove)
                        this.removeNode(remove);
                }
                currenNode.setRightNode(node);
            }else
                console.error(NodesErrors.KeyDuplicate)
        }else
            console.error(NodesErrors.NotFound)
    }

    public getNode(key: T): BinaryNode<T,C> | null{
        const index = this.findNode(key);
        if(index!=-1)
            return this.nodos[index];
        return null;
    }

    public showNodes(): void{
        if(this.nodos.length>0){
            console.log("ROOT: "+this.nodos[0].getKey())
            for(let i = 0; i < this.nodos.length; i++){
                console.log(
                    this.nodos[i].getKey(),
                    "{ Left: "+this.nodos[i].getLeftNode()?.getKey(),"Right: "+this.nodos[i].getRightNode()?.getKey()+" }"
                )
            }
        }else
            console.error(NodesErrors.NotRoot);
    }

    private findNode(key: T):number{
        for(let i = 0; i < this.nodos.length; i++)
            if(this.nodos[i].getKey() == key)
                return i;
        return -1;
    }
};