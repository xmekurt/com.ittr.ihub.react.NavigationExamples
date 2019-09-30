import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'

//ui import
import {Col, Row, Button, Card, CardHeader, CardBody} from 'reactstrap';
import {
    AppHeader,
  } from '@coreui/react';

//Page import
import ChildOfHome from './childofhome';
import Parent from './Navigation/Navigation2/parent'; // Default Export
import {Parent as Parent2} from './Navigation/Navigation3/parent';// Named Export 
import {Parent as Parent3} from './Navigation/Navigation4/parent';
import {Parent as Parent4} from './Navigation/Navigation5/parent';
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            home:true,
            parent:false,
            childofhome:false,
            parent2:false,
            parent3:false,
            parent4:false,
        }
        console.log(this.props);
    }
    render(){
    return(
        <div>
            <AppHeader fixed>
            <Col>
                <Button block color={this.state.home ? "primary": "secondary"} className="btn-square" onClick={()=>{this.Pressed()}}><i className="fa fa-home fa-lg "></i> Ertan</Button>
            </Col>
            </AppHeader>
            <div>
                <br/>
                <br/>
                <br/>
            {this.state.home && 
                <div>
                <Row>
                <Col md="3">
                    <Card style={{height: 200}}>
                    <CardHeader>
                        1.Parent Navigate To Child
                    </CardHeader>
                    <CardBody>
                        This Home page is parent and its navigate to ChildOfHome Page with button click.<br/>
                        <Button color="success" className="btn-square" onClick={()=>{this.childOfHomePressed()}}>Go to ChildOfHome</Button>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{height: 200 }} >
                    <CardHeader>
                        2.Go To Parent-Child 
                    </CardHeader>
                    <CardBody>
                        Simple Child-Parent app.<br/>
                        <Button color="success" className="btn-square" onClick={()=>{this.goToParent()}}>Go to App 2</Button>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{height: 200 }}>
                    <CardHeader>
                        3.Data send to Child
                    </CardHeader>
                    <CardBody>
                        Child-Parent app, parent sends data to their child.
                        <br/>
                        <Button color="success" className="btn-square" onClick={()=>{this.goToParent2()}}>Go to App 2</Button>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{height: 200 }}>
                    <CardHeader>
                        4.Data send to Parent
                    </CardHeader>
                    <CardBody>
                        Child-Parent app, Child sends data to their Parent.<br/>
                        <Button color="success" className="btn-square"  onClick={()=>{this.goToParent3()}}>Go to App 3</Button>
                    </CardBody>
                    </Card>
                </Col>
                <Col md="3">
                    <Card style={{height: 200 }}>
                    <CardHeader>
                        4.Data send Child to Child
                    </CardHeader>
                    <CardBody>
                        Child-Parent app, Child sends data to their siblings.<br/>
                        <Button color="success" className="btn-square"  onClick={()=>{this.goToParent4()}}>Go to App 4</Button>
                    </CardBody>
                    </Card>
                </Col>
                </Row>
                </div>
                }
            {this.state.childofhome && <ChildOfHome/>}
            {this.state.parent && <Parent/>}
            {this.state.parent2 && <Parent2 />}
            {this.state.parent3 && <Parent3 />}
            {this.state.parent4 && <Parent4 />}
            
            </div>
        </div>
    )
    }
    Pressed(){
        this.setState({home:true, parent:false, childofhome:false, parent2:false, parent3:false,parent4:false})
        //this.props.history.push('/home');
    }
    childOfHomePressed(){
        this.setState({home:false, childofhome:true})
    }
    goToParent(){
        this.setState({home:false, parent:true})
    }
    goToParent2(){
        this.setState({home:false, parent2:true})
    }
    goToParent3(){
        this.setState({home:false, parent3:true})
    }
    goToParent4(){
        this.setState({home:false, parent4:true})
    }
}
export default withRouter(Home);