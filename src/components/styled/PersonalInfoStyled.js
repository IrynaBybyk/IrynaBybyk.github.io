import styled from 'styled-components';

export const PersonalInfoStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;
  width: 100%;
  padding: 20px;

  @media (max-width: 1400px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }

  @media (min-width: 1800px) {
    padding: 50px 50px;
    
  }
`;

export const ProfileImageBox = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
  border: 3px solid rgb(255, 166, 0);
  box-shadow: 0 0 10px rgb(255, 166, 0);

  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 400px) {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  
  color: rgb(255, 166, 0);
  width: 60%;
  font-size: 20px;
  line-height: 30px;

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 760px) {
    width: 100%;
    margin: 30px 0;
    padding: 0;
  }

  @media (max-width: 400px) {
    margin: 10px 0
  }

  @media (min-width: 1800px) {
    width: 70%;
  }

  h2 {
    margin-bottom: 10px;
    font-size: 35px;
    font-wight: bolder;
  }

  h3 {
    margin: 10px 0;
    font-size: 30px;
    font-wight: bolder;
  }

  ul {
    list-style: inside;

    li {
      margin-left: 10px;
    }
  }
`;

export const ProfileContacts = styled(PersonalInfoStyled)`
  flex-wrap: no-wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 30px 0;
  width: 100%;
  padding: 0 0 0 14px;

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 0;
  }

  @media (max-width: 1400px) {
    flex-direction: row;
    justify-content: center;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ContactsLink = styled.a`
  border: 1px solid white;
  display: block;
  padding: 10px;
  margin: 10px 20px 10px 0;
  
  @media (max-width: 750px) {
    width: 100%;
    margin: 10px 0;
  }

  transition: 2s;

  &:visited {
    color: rgb(255, 166, 0);
  }

  &:link {
    color: rgb(255, 166, 0);
  }

  &:hover {
    color: white;
    background: rgba(255, 255, 255, 0.3);
  }

`;
