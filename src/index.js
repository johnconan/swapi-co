// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {

//     return (
//         <p>Hello</p>
//     );
// }


// ReactDOM.render(<App />, document.getElementById('root'));

const getResourse = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResourse('https://swapi.co/api/people/1/')
    .then((body) => {
        console.log(body);
    });

// fetch ('https://swapi.co/api/people/1/')
//     .then((res) => {
//         return res.json();
//     })
//     .then((body) => {
//         console.log(body);
//     })