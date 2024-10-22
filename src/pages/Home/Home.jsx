import './Home.css'
function Home() {
    return (<div className="home-container">
        <div className="profile-card">
            <img
                src="https://studentscms.spu.ac.th/stdempimg.cfm?empstdtype=STD&vdata=0AD1CDEDD58AF7A50528CED6DD06C8D682E51A06D6FBD6DF"
                alt=""
                className="profile-image"
            />
            <br /><h3>Katawut Muangprom (Moss) </h3><br />
            <p className="profile-description">
                Currently studying: School of Information Technology (SIT) <br />
                Major: Computer Science and Software Innovation Development (CSI)   <br />

                Sripatum University (SPU)
            </p>
        </div>

        <div className="course-details">
            <h2>Personal Record</h2><br /><br />
            <ul>

                Name: Mr. Katawut Muangprom <br />
                Age: 20 <br />
                Nationality: Thai <br />
                Contact:&nbsp; <a href="https://www.instagram.com/m_oszx/">Instagram</a>&nbsp;&nbsp;
                <a href="https://www.facebook.com/profile.php?id=100015606374556">facebook</a><br /><br />


                <strong>Objective</strong> A highly motivated and detail-oriented individual pursuing a degree in Computer
                Science and Software Innovation Development. Seeking opportunities to apply my programming and software development
                skills to real-world projects and gain practical experience in the field. <br /><br />


                <strong>Skills</strong> programming languages: HTML, CSS, JavaScript
                Experience with React for building dynamic and responsive user interfaces <br /><br />



            </ul>
            <p style={{ textAlign: 'center' }}><strong>"Learning never stops; every challenge is an opportunity to grow."</strong></p>
        </div>
    </div>);
}

export default Home;