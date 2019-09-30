import React, {Component} from 'react';

export default class Child1 extends Component{

    render(){
        var parentData=false;
        if (this.props.dataFromParent){
            parentData = true;
        }
    return(
        <div>
            <p>
            This is Child
            </p>
            {parentData && <p>
                This is data from parent: {this.props.dataFromParent}
            </p>}
            {!parentData && <p>
                No data from parent
            </p>}
        </div>
    )
    }




}