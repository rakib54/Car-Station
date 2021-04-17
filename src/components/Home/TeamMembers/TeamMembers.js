import React from 'react';
import john from '../../../images/car-man.jpg'
import Alex from '../../../images/car-man-2.jpg'
import Rakib from '../../../images/Car-man-3.jpg'
import TeamMember from '../TeamMember/TeamMember';


const AllTeamMembers =[
    {
        id:1,
        name:'John Wick',
        img:john
    },
    {
        id:2,
        name:'Alex Hales',
        img:Alex
    },
    {
        id:3,
        name:'Rakibur Rahman',
        img:Rakib
    }
]

const TeamMembers = () => {
    return (
        <div className="font-link">
            <div className="container">
                <h2 className="text-color text-center mb-5"><b>OUR TEAM MEMBER'S</b></h2>
                <div className="row">
                    {
                        AllTeamMembers.map(member =><TeamMember member={member}key={member.id}></TeamMember>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;