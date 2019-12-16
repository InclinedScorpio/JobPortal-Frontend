import React, { Component } from 'react'
import { Card,
Button,
} from 'antd';
import { connect } from 'react-redux';
import {recruiterDelete,allRecruiters} from "../redux/actions/recruiters";


class RecruiterList extends Component {

    state = {
        list: [],
        isApplied:false,
    }

componentDidMount() {
    this.props.allRecruiters().then(response=>{
        this.setState({//check what coming inside list
            list:response.results
        })
    })
}
   
deleteRecruiter=(e,recruiterUuid)=>{//uuid kahan se ayegi jispe click hoga
    e.preventDefault();
    let recruiterDetails=this.props.recruiterDelete(recruiterUuid).then(data=>{
        const updatedRecruiters = this.state.list.map(recruiter=>{
            return recruiter.uuid===recruiterUuid ?
            {
                ...recruiter,isApplied:true //only isApplied replace rest same.
            }:
            recruiter
        });
        this.setState({
            list:updatedRecruiters
        })
    })
}


    render(){
        const {list}=this.state //got list form inside current state
        return(
            list.map(recruiter=>{
                return(
                    <Card style={{ width: 300 }}>
                    <p>{recruiter.name}</p>
                    <p>{recruiter.username}</p>
                    <p>{recruiter.uuid}</p>
                    <Button type="danger" onClick={(e) => this.deleteRecruiter(e,recruiter.uuid)} disabled={recruiter.isApplied}>Delete</Button>
                    {/* <Button type="primary" onClick={(e) => this.jobsByRecruiter(e,recruiter.uuid)} disabled={recruiter.isApplied}>Yet to Come</Button> */}
                    </Card>
                )

            })
        )
    }  
}

const mapStateToProps=(state)=>{//Dont need it !!
    return ({
        userData:state
    })
}

export default connect(mapStateToProps,{allRecruiters,recruiterDelete})(RecruiterList);
