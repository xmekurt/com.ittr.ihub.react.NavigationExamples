import React,{Component} from 'react';
import {Button} from 'reactstrap';
import Child1 from './child';
export default class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parent:true,
            child1:false,
        }
    }
    render(){
        return(
            <div >
            {this.state.parent &&
                <div>
                    <h1>
                        This is Parent 
                    </h1>
                    <Button color="success" className="btn-square" onClick={()=>{this.childPressed()}}>Go to Child</Button>
                </div>
            }
            {this.state.child1 && 
                <div>
                    <Button color="success" className="btn-square" onClick={()=>{this.goBackParent()}}>Go to Parent</Button>
                        <Child1/>
                </div> }
            </div>
                     )
    }
    childPressed(){

        this.setState({parent:false,child1:true});

    }
    goBackParent(){
        this.setState({parent:true,child1:false});
    }
}