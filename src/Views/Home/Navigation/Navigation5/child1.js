import React,{Component} from 'react';
import {Col,Row,InputGroup,Input,Button} from 'reactstrap';

export default class Child extends Component{
    constructor(props){
        super(props)
        this.state = {
            dataToParent:"",
        }
    }
    render(){
        var parentData=false;
        if (this.props.dataFromParent){
            parentData = true;
        }
        return(
            <div>
                <Col>
                    <Row>
                        <Col>
                            <h1>
                                This is Child1
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>
                                {parentData && "Child2 data is:" +this.props.dataFromParent}
                                {!parentData && "There are no Child2 data"}
                            </h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                            <Input type="text" placeholder="Enter Child Data" autoComplete="Enter Data" onChange={(e)=>{this.setState({dataToParent:e.target.value})}}/>
                            </InputGroup>  
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button color="success" className="btn-square"  onClick={()=>{this.goToParent()}}>Go to Parent</Button> 
                        </Col>
                    </Row>
                </Col>
            </div>
        )

    }
    goToParent(){
        this.props.parentCallback(this.state.dataToParent);
    }
}