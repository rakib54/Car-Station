import React from 'react';

const TeamMember = ({member}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
            <img style={{height:'150px'}} src={member.img} className="img-fluid" alt=""/>
            <br/><br/>
            <h5 style={{color:'#455362'}} className=""><b>{member.name}</b></h5>
        </div>
    );
};

export default TeamMember;