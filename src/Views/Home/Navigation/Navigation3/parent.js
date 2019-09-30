import React,{Component} from 'react';
import {Button,Row,Col,InputGroup,Input} from 'reactstrap';
import Child1 from './child';
export class Parent extends Component{
    constructor(props){
        super(props)
        this.state = {
            parent:true,
            child1:false,
            dataFromParent:"",
        }
    }
    render(){
        return(
            <div >
            {this.state.parent &&
                <div>
                        <h1>
                            This is Parent2
                        </h1>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <Input type="text" placeholder="Enter Child Data" autoComplete="Enter Data" onChange={(e)=>{this.setState({dataFromParent:e.target.value})}}/>
                            </InputGroup>   
                        </Col>
                        <Col>
                            <Button color="success" className="btn-square" onClick={()=>{this.childPressed()}}>Send Data to Child</Button>
                        </Col>
                    </Row>
                </div>
            }
            {this.state.child1 && 
                <div>
                    <Button color="success" className="btn-square" onClick={()=>{this.goBackParent()}}>Go to Parent</Button>
                        <Child1 dataFromParent={this.state.dataFromParent}/>
                </div> }
            </div>
                     )
    }
    childPressed(){
        this.setState({parent:false,child1:true});

    }
    goBackParent(){
        this.setState({parent:true,child1:false,dataFromParent:""});
    }
}