import styled from 'styled-components';

export const ProjectsStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  width: 100%;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  color: rgb(0, 12, 29);
  width: 100%;
  font-size: 20px;
  line-height: 30px;
  transition: 1.2s;

  &:hover {
    color: white;
  }

  h2 {
    margin: 20px auto;
    font-size: 35px;
    font-weight: bolder;
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

export const ProjectLink = styled.a`
  margin: 30px;
  border: 1px solid white;
  display: block;
  padding: 10px;
  width: 90%;
  text-decoration: none;

  transition: 2s;

  &:visited {
    color: white;
  }

  &:link {
    color: white;
  }

  &:hover {
    color: white;
    background: rgba(0, 12, 29, 0.3);
  }
`;
