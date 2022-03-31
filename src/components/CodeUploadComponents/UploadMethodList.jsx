import React, { Component } from 'react';
import UploadMethodCard from './UploadMethodCard';
import '../../style/Home.css'

class UploadMethodList extends Component {

    render() { 
        return ( 
            <div className='container'>
                <p class='title'>Select a method to upload your code.</p>

                <div className='card-container'>
                    <UploadMethodCard title='Folder' text='Upload a local folder.' link='upload/folder'/>
                    <UploadMethodCard title='Github' text='Use an existing Github repository.' link='upload/github'/>
                    <UploadMethodCard title='Gitlab' text='use a Gitlab repo' link='upload/gitlab'/>
                </div>
            </div>
         );
    }
}
 
export default UploadMethodList;