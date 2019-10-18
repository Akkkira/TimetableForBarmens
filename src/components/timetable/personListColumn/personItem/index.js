import React, {Component} from 'react'
import Portrait from '../../../../carbon/src/components/portrait'
import './style.css'
import {connect} from "react-redux";
import {setWorkDay} from "../../../../actions";


class peopleItem extends Component {

     change = () => {
        this.props.setWorkDay(this.props.id, this.props.index);
    };

    render() {
        const {name} = this.props;
        const style = this.props.isWork ? "isWork" : "isChill";
        return (
            <div className={style} onClick={this.change}>
                <Portrait shape="circle" initials={name} /*src={picture} alt={name}*/ darkBackground={false}/>
            </div>
        );
    };
}

export default connect(state => ({state: state.workers}),
    dispatch => ({
        setWorkDay: (id, index) => dispatch(setWorkDay(id, index))
}))(peopleItem);