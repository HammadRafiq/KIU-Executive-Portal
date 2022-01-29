import React from 'react';
import Layout from "../../layout/Index";
import Guy from "../../Assets/icons/profile.jpg";
import './Profile.scss'
import { Modal } from 'antd';
import { useState } from 'react';

const Profile = () => {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Layout>
        <div className='profile-main'>
            <h2>Profile</h2>
            <div className='primary-card-rounded profile-card'>
                <div className='profile-box'>
                    <div className='profile-img-container'>
                        <div className='profile-img-wrapper'>
                            <img src={Guy} className='profile-img' /><br />
                            <svg id="Component_115_1" data-name="Component 115 – 1" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
                            <circle id="Ellipse_103" data-name="Ellipse 103" cx="12.5" cy="12.5" r="12.5" fill="#2e8e1b"/>
                            <path id="Icon_material-add-a-photo" data-name="Icon material-add-a-photo" d="M1.452,2.952V1.5h.968V2.952H3.873v.968H2.421V5.373H1.452V3.921H0V2.952ZM2.9,5.857V4.4H4.357V2.952H7.746l.886.968h1.535a.971.971,0,0,1,.968.968V10.7a.971.971,0,0,1-.968.968H2.421a.971.971,0,0,1-.968-.968V5.857Zm3.389,4.357A2.421,2.421,0,1,0,3.873,7.794,2.421,2.421,0,0,0,6.294,10.214ZM4.744,7.794A1.549,1.549,0,1,0,6.294,6.244,1.548,1.548,0,0,0,4.744,7.794Z" transform="translate(6.895 5.973)" fill="#fff"/>
                            </svg>
                        </div>
                        <h3 className='f-16 fw-600 mt-3'>Profile Image</h3>
                    </div>
                    <div className='email'>
                        <p className='f-12 fw-500'>Email Address</p>
                        <h3 className='f-16 fw-600 mt-3'>Ziaullah007@gmail.com</h3>
                    </div>
                    <div className='change-password'>
                        <a onClick={() => setModalVisible(true)} className='p-2 f-11'>Change Password</a>
                    </div>
                </div>

                <Modal
                    centered
                    visible={modalVisible}
                    onOk={() => setModalVisible(false)} /* use in save button below */
                    onCancel={() => setModalVisible(false)} /* use in cancel button below */
                    footer={null}
                >
                    <div className='df34575'>
                        <div className='change-password-modal'>
                            <h3 className='f-18 fw-700 mb-4'>Change Password</h3>
                            <form className='change-password-form'>
                                <div>
                                    <label>Old Password</label><br></br>
                                    <input type="text" className='old-password-input' placeholder='Johndoe' />
                                    <svg id="Icon_material-lock" data-name="Icon material-lock" xmlns="http://www.w3.org/2000/svg" width="15.979" height="15.41" viewBox="0 0 10.979 14.41">
                                    <path id="Icon_material-lock-2" data-name="Icon material-lock" d="M15.607,6.3h-.686V4.931a3.431,3.431,0,0,0-6.862,0V6.3H7.372A1.376,1.376,0,0,0,6,7.676v6.862A1.376,1.376,0,0,0,7.372,15.91h8.235a1.376,1.376,0,0,0,1.372-1.372V7.676A1.376,1.376,0,0,0,15.607,6.3ZM11.49,12.479a1.372,1.372,0,1,1,1.372-1.372A1.376,1.376,0,0,1,11.49,12.479ZM13.617,6.3H9.362V4.931a2.127,2.127,0,0,1,4.254,0Z" transform="translate(-6 -1.5)" fill="#9f9f9f"/>
                                    </svg>
                                </div>
                                <div>
                                    <label>New Password</label><br></br>
                                    <input type="text" className='old-password-input' placeholder='Johndoe' />
                                    <svg id="Icon_material-lock" data-name="Icon material-lock" xmlns="http://www.w3.org/2000/svg" width="15.979" height="15.41" viewBox="0 0 10.979 14.41">
                                    <path id="Icon_material-lock-2" data-name="Icon material-lock" d="M15.607,6.3h-.686V4.931a3.431,3.431,0,0,0-6.862,0V6.3H7.372A1.376,1.376,0,0,0,6,7.676v6.862A1.376,1.376,0,0,0,7.372,15.91h8.235a1.376,1.376,0,0,0,1.372-1.372V7.676A1.376,1.376,0,0,0,15.607,6.3ZM11.49,12.479a1.372,1.372,0,1,1,1.372-1.372A1.376,1.376,0,0,1,11.49,12.479ZM13.617,6.3H9.362V4.931a2.127,2.127,0,0,1,4.254,0Z" transform="translate(-6 -1.5)" fill="#9f9f9f"/>
                                    </svg>                                    
                                </div>
                                <div>
                                    <label>Confirm Password</label><br></br>
                                    <input type="text" className='old-password-input' placeholder='Johndoe' />
                                    <svg id="Icon_material-lock" data-name="Icon material-lock" xmlns="http://www.w3.org/2000/svg" width="15.979" height="15.41" viewBox="0 0 10.979 14.41">
                                    <path id="Icon_material-lock-2" data-name="Icon material-lock" d="M15.607,6.3h-.686V4.931a3.431,3.431,0,0,0-6.862,0V6.3H7.372A1.376,1.376,0,0,0,6,7.676v6.862A1.376,1.376,0,0,0,7.372,15.91h8.235a1.376,1.376,0,0,0,1.372-1.372V7.676A1.376,1.376,0,0,0,15.607,6.3ZM11.49,12.479a1.372,1.372,0,1,1,1.372-1.372A1.376,1.376,0,0,1,11.49,12.479ZM13.617,6.3H9.362V4.931a2.127,2.127,0,0,1,4.254,0Z" transform="translate(-6 -1.5)" fill="#9f9f9f"/>
                                    </svg>                                    
                                </div>
                                <div className='buttons-wrapper'>
                                    <a className='secondary-button'>Cancel</a>
                                    <a className='primary-button'>Save</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </Modal>
            </div>
            </div>
        </Layout>
  )
};

export default Profile;
