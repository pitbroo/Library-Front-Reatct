import React from 'react';
import { Component } from 'react';
import './About.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import building from './img/building.jpg';
import Avatar from 'react-avatar';


class About extends Component {

    render() {
        return (
            <div className="AboutMain">
                <br></br>
                <h1>O naszej bibliotece</h1>
                
            <img src={building} width="100%" height="50%"></img>
                <br></br><br></br><br></br>
                Nasza biblioteka została wybudowana w 2019 roku na potrzeb projektu wielkiej uczelni Akademia Finansów i Biznesu Vistula. Prekurosrami teog pomyłu byli 5 wielkich studentów: Piotr Brodziak, Tomasz Floriańcyzyk, Marek Udziela, Michał Redek oraz Robert Żyła, zwany również w tamtych czasach jako Tyran Wielki, bowiem obejmował on władzę wszędzie, gdzie się pojawiał.<br></br>
                <h3>Porterty bohaterów:</h3>
                
                <Avatar round={true} src="https://scontent-frt3-1.xx.fbcdn.net/v/t31.0-8/14589596_1216828498384633_8754268973520778486_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_oc=AQnkOtHUWf27BbN4lP--1xeJtg7OBbJdDshyvYMZyGfGcX10c3pg2XYGf2xfvPC5xhU&_nc_ht=scontent-frt3-1.xx&oh=1ea3c1d591a52adffeadddac39e91b2b&oe=5F0828EB"></Avatar>
                  <Avatar round={true} src="https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/294121_524494620950992_2144443527_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_oc=AQmGDSrN8qlJI4pguTVjdOzIy1yjLnS6r910AnmRUfLtPch0Vr_aROH32Zqauc6yX3A&_nc_ht=scontent-frt3-2.xx&oh=4d7a59faf99f5e88290f3fd1d812681f&oe=5F0883D0"></Avatar>
                  <Avatar round={true} src="https://scontent-frt3-1.xx.fbcdn.net/v/t1.0-9/20638020_1193628804075838_3385494219587563998_n.jpg?_nc_cat=104&_nc_sid=09cbfe&_nc_oc=AQk8_OPXENPtqFCZ5eXAe1t2oz_mW70V6hUry-NvNI1Evc10XUydksZQfZofdKOVXfk&_nc_ht=scontent-frt3-1.xx&oh=4d8739d272425886edd7650d8bb440c9&oe=5F095702" round={true}></Avatar>
                  <Avatar round={true} src="https://media-exp1.licdn.com/dms/image/C4D03AQEquB8jAwGufg/profile-displayphoto-shrink_800_800/0?e=1597276800&v=beta&t=fpeZaomB-6q9VK4gMamavueT3xWkkYUwRi__a9t4tCk"></Avatar>
                  <Avatar round={true} src="https://media-exp1.licdn.com/dms/image/C4D03AQGT88vclOWdOA/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=ZwCWHvhZ3HQgU55o0Lu3uTtKoXadjNsZXhmWoPKkU7c"></Avatar><br></br>


                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"

1914 translation by H. Rackham
"But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
            </div>
        )
    }
}
export default About