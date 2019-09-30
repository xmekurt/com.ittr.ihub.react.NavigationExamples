import React, {Component} from 'react';

import {Row,Col,Button} from 'reactstrap';

import Child from './child';

export class Parent extends Component{
    constructor(props){
        super(props);
        this.state={
            parent:true,
            child:false,
            datafromchild:"",
        }


    }
    callbackfunction = (childData) => {
        this.setState({datafromchild:childData,parent:true,child:false});
    }
    render(){
        var dataChild = false
        if(this.state.datafromchild){
            dataChild = true
        }
        return(
            <div>
                {this.state.parent && 
                <div>
                <Col>
                <Row>
                    <Col>
                        <h1>
                            This is Parent
                        </h1>
                    </Col>
                </Row>
                <Row >
                    <Col>
                    {
                        dataChild &&
                        <h4>
                            Child Data is : {this.state.datafromchild}
                        </h4>
                    }
                    {
                        !dataChild && 
                        <h4>
                            No data from Child
                        </h4>
                    }
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button color="success" className="btn-square"  onClick={()=>{this.goToChild()}}>Go to Child</Button>
                    </Col>
                </Row>
                </Col>
                </div>
            }
            {this.state.child && 
                <div>
                    <Child parentCallback = {this.callbackfunction}/>
                </div>
            }
            </div>
        )

    }
    goToChild(){
        
        this.setState({parent:false,child:true});
    }

}