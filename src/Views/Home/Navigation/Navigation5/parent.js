import React, {Component} from 'react';
import {Row,Col,Button} from 'reactstrap';

import Child1 from './child1';
import Child2 from './child2';

export class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            parent:true,
            child1:false,
            child2:false,
            data1:"",
            data2:"hiii",
        }
    }
    render(){
        var data1Back = false, data2Back = false;
        if(this.state.data1){
                data1Back = true;
        }
        if(this.state.data2){
            data2Back = true;
    }
        return(
            <div>
                <Col>
                {this.state.parent && 
                    <div>
                            <Row>
                                <Col>
                                    <h3>This is Parent</h3>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col>
                                        {data1Back && 
                                            <h3>Child1 data is: {this.state.data1}</h3>
                                        }
                                        {!data1Back && 
                                            <h3>Child1 does not returned data</h3>
                                        }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                        {data2Back && 
                                            <h3>Child2 data is: {this.state.data2}</h3>
                                        }
                                        {!data2Back && 
                                            <h3>Child2 does not returned data</h3>
                                        }
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button color="success" className="btn-square" onClick={()=>{this.child1Pressed()}}>Go to Child1</Button>  
                                </Col>
                                <Col>
                                    <Button color="success" className="btn-square" onClick={()=>{this.child2Pressed()}}>Go to Child2</Button>
                                </Col>
                            </Row>
                    </div>
                }
                {this.state.child1 && <Child1 parentCallback={this.parentCallback1} dataFromParent={this.state.data2}/>}   
                {this.state.child2 && <Child2 parentCallback={this.parentCallback2} dataFromParent={this.state.data1}/>}
                </Col>
            </div>
        )
    }
    child1Pressed(){
        this.setState({parent:false,child1:true});
    }
    child2Pressed(){
        this.setState({parent:false,child2:true});
    }
    parentCallback1 = (message) => {
        this.setState({data1:message,parent:true,child1:false})
    }
    parentCallback2 = (message) => {
        this.setState({data2:message,parent:true,child2:false})
    }
}