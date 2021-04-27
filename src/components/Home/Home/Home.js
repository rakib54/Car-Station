import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import Animation from '../Animation/Animation';
import BookingSystem from '../BookingSystem/BookingSystem';
import HeaderMain from '../HeaderMain/HeaderMain';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import TeamMembers from '../TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderMain></HeaderMain>
            <BookingSystem></BookingSystem>
            <Services></Services>
            <Reviews></Reviews>
            <TeamMembers></TeamMembers>
            <Footer></Footer>
           
        </div>
    );
};

export default Home;