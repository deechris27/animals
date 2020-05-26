import React, {useRef, useEffect} from 'react';
import {keyframes, css} from '@emotion/core';
import styled from '@emotion/styled';

const Spin = keyframes`
   from{
       transform: rotate(0deg)
   }

   to{
       transform: rotate(360deg)
   }
`


const rotateOne = keyframes`
0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
`

const rotateTwo = keyframes`
0% {
    transform: rotateX(50deg) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(0deg) rotateZ(360deg);
  }
`

const rotateThree = keyframes`
0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
`

const Spinner = styled("div")`
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 1;
    margin: -75px 0 0 -75px;
    border: 16px solid #f3f3f3;
    border-radius: 50%;
    border-top: 16px solid yellowgreen;
    width: 120px;
    height: 120px;
    display: none;
    animation: 0.5s ${rotateTwo} linear infinite;
`

// const loader = css`
//     position: absolute;
//     left: 50%;
//     top: 50%;
//     z-index: 1;
//     width: 150px;
//     height: 150px;
//     margin: -75px 0 0 -75px;
//     border: 16px solid #f3f3f3;
//     border-radius: 50%;
//     border-top: 16px solid #3498db;
//     width: 120px;
//     height: 120px;
// `

// const inner = css`
//     position: absolute;
//     box-sizing: border-box;
//     width: 100%;
//     height: 100%;
//     border-radius: 50%; 
// `
// const one = css`
//     left: 0%;
//     top: 0%;
//     animation: 1s ${rotateOne} linear infinite;
//     border-bottom: 3px solid #EFEFFA;
// `

// const two = css`
//   right: 0%;
//   top: 0%;
//   animation: 1s ${rotateTwo} linear infinite;
//   border-right: 3px solid #EFEFFA;
// `

// const three = css`
//     right: 0%;
//     bottom: 0%;
//     animation: 1s ${rotateThree} linear infinite;
//     border-top: 3px solid #EFEFFA;
// `


function Loader({loading}) {
    const loaderStyle = useRef();

    const displayLoader = () => {
        loaderStyle.current.style.display = loading ? "block" : "none"
    }

    useEffect(()=>{
       displayLoader()
    },[]);

    return (
        <React.Fragment>
            <Spinner ref={loaderStyle} />
        </React.Fragment>
    )
}

export default Loader;
