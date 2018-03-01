import React, {Component} from 'react';
import {connect} from 'react-redux';

class ConnectViewer extends Component {
    constructor(props) {
        super()
        this.state = {
            isFave: false
        }
        this.toggleFave = this.toggleFave.bind(this)
    }

    toggleFave(props) {
        if (this.state.isFave) {
            axios.delete(`/fave/${this.row}`)
            .then(res=>{
                this.setState({isFave: false})
            })
            .catch(err=>{console.log(err)})
        } else {
            axios.post('/fave', {fuid: this.props.user.uid, feid: this.props.row.eid})
            .then(res=>{
                this.setState({isFave: true})
            })
            .catch(err=>{console.log(err)})
        }
    }

    render(props){
        return (this.props.row.type === "photo" ?
                                
            <div className="entry-holder">
            <span className={`fave-${this.state.isFave}`} onClick={e=>this.toggleFave()}></span>
                <div className="entry-body">
                    <img src={this.props.row.image} alt={this.props.row.title}/> 
                </div>
                <div><b>{this.props.row.title}</b><br/></div>
                <div id="user-deets"><div className="prof-pic-small"><img src={this.props.row.pic} alt="owner"/></div>{this.props.row.firstname} {this.props.row.lastname}></div>
            </div>
            :
            <div className="entry-holder">
            <span className={`fave-${this.state.isFave}`} onClick={e=>this.toggleFave()}></span>
                <div className="entry-body">
                    {this.props.row.journal.substr(0,400)}
                </div>
                <div><b>{this.props.row.title}</b><br/></div>
                <div id="user-deets"><div className="prof-pic-small"><img src={this.props.row.pic} alt="owner"/></div>{this.props.row.firstname} {this.props.row.lastname}</div>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
      user: state.user
    }
}

export default connect(mapStateToProps)(Dashboard);