import React from 'react';
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';
import {keyframes} from '@emotion/core';
import colors from '../style/colors';

const Container = styled("header")`
 background-color: ${colors.dark};
 position: sticky;
 top:0;
 z-index:2;
`

const Flash = keyframes`
   0%{
       color: green
   }
   30%{
       color: red
   }
   50%{
       color: yellow
   }
   70%{
       color: blue
   }
   100%{
       color: orange
   }
`

const Bounce = keyframes`
  from, 20%, 50%, 80%, to{
      transform: translate3d(0,0,0)
  }

  40%{
      transform: translate3d(0, -20px, 0)
  }

  70%{
      transform: translate3d(0, -12px, 0)
  }

  90%{
      transform: translate3d(0, -2px, 0)
  }
`

const NavLink = styled(Link)`
  display: inline-block;
  animation: 1s ${Flash} infinite;
  &:hover{
      text-decoration: underline;
      animation: 1s ${Bounce} infinite;
  }
`

const SearchIcon = styled("span")`
  display: inline-block;
  animation: 1.5s ${Bounce} ease infinite;
`

function Navbar() {
    return (
        <div>
            <Container>
                <NavLink to="/">Mytidbit</NavLink>
                <NavLink to="/search">
                    <SearchIcon aria-label="search" role="img">
                        🔍
                    </SearchIcon>
                </NavLink>
            </Container>
        </div>
    )
}

export default Navbar
