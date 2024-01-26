import { useState } from 'react';
import "../styles/jobProfile.scss";
import Typewriter from 'typewriter-effect';

const JobProfile = () => {

    const jobTitles = ["Développeur Front-End", "Développeur Back-End", "Développeur Full-Stack"];
    const [currentJobIndex, setCurrentJobIndex] = useState(0);


    return (
        <div className="jobTitleBox">
            {jobTitles.map((title, index) => (
                <h2 key={index} className={`${index === currentJobIndex ? 'active' : 'is-hidden'}`}>
                    <Typewriter 
                        options={{
                            strings: jobTitles,
                            autoStart: true,
                            loop: true,
                            delay: 30,
                        }}
                    />
                </h2>
            ))}
        </div>   
    );
}

export default JobProfile;