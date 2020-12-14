import React from 'react';
import {
  PersonalInfoStyled,
  ProfileContainer,
  ContactsLink,
  ProfileImageBox,
  ProfileContacts,
} from './styled/PersonalInfoStyled';

const profImg = require('../images/ibybyk.png');

const PersonalInfo = () => {
  return (
    <PersonalInfoStyled>
      <ProfileImageBox src={profImg.default} />
      <ProfileContainer>
        <h2>Iryna Bybyk</h2>
        <p>
          I'am 33 and I'am a junior front-end developer from Ukraine, Kyiv. At
          the moment I am finishing my training on a frontend developer course
          in UCODE IT Academy. And in the same time I'am a beta tester of
          education programm in UCODE.
        </p>
      </ProfileContainer>
      <ProfileContainer>
        <h3>Expirience</h3>
        <p>
          During my studies, I learned the C language and how to program cool
          things in it. After the C language course, I studied the frontend for
          four and a half months. During this time, I have made serious progress
          in this specialization. I mastered the adaptive layout of sites and
          vanilla javascript, and also got the knowledge of the basics of the
          React library/framework. Also, throughout this time, I did a quality
          check of tasks.
        </p>
      </ProfileContainer>
      <ProfileContainer>
        <h3>Skills</h3>
        {/* <p> */}
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS/SCSS</li>
          <li>ECMAScript/JS</li>
          <li>React.js</li>
          <li>Styled-component library</li>
          <li>React-Router-Dom library</li>
          <li>Adaptive layout/Responsive markup</li>
        </ul>
        {/* </p> */}
      </ProfileContainer>

      <ProfileContainer>
        <h3>Contacts</h3>
      </ProfileContainer>
      <ProfileContacts>
        <ContactsLink href='https://github.com/IrynaBybyk'>
          Github
        </ContactsLink>
        <ContactsLink href='https://www.linkedin.com/in/iryna-bybyk-2b83961b7/'>
          Linkedin
        </ContactsLink>
        <ContactsLink href='https://t.me/irinabybyk'>Telegram</ContactsLink>
        <ContactsLink
          title='irinabybyk@gmail.com'
          href='irinabybyk@gmail.com'
        >
          Email
        </ContactsLink>
      </ProfileContacts>
    </PersonalInfoStyled>
  );
};

export default PersonalInfo;
