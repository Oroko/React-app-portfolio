import React, { Component } from 'react';
import Widecard from '../components/Widecard'
class Education extends Component {
    
    render() { 
        return ( 
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelors of Science,Computer Science " where="Africa Nazarene University" from="January 2013" to="May 2016" />

            </div>
         );
    }
}
 
export default Education;