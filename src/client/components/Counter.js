import React from 'react';
import {connect} from 'react-redux';
import * as actionList from '../action/action';
import {bindActionCreators} from 'redux';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        let count = this.props.counterReducer.count;
        if(event.target.name == "plus"){
            count++;
        }else
        if(event.target.name == "minus"){
            count --;
        }else{
            count = 0;
        }
        this.props.actionList.performChangeAsyn(count);
    }

    render(){
        return (
            <div>
                <b>Counter</b><br/>
                <button name = "plus" onClick = {this.handleChange}>Plus</button>
                <button name = "minus" onClick = {this.handleChange}>Minus</button>
                <button name = "clear" onClick = {this.handleChange}>Clear</button>
                <div>
                    <span>Result: {this.props.counterReducer.count}</span>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => state;
let mapDispatchToProps = (dispatch)=>({
    actionList: bindActionCreators(actionList,dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

