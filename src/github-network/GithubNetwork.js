// import React from 'react'

// fetch('https://swapi.co/api/people/1/')
//     .then((res) => {
//         return res.json();
//     })
//     then((body) => {
//         console.log(body);
//     });

// export default class GithubNetwork {

//     async getResource(url) {
//       const res = await fetch(url);
  
//       if (!res.ok) {
//         throw new Error(`Could not fetch ${url}` +
//           `, received ${res.status}`)
//       }
//       return await res.json();
//     }
  
//     async getAllPeople() {
//       const res = await this.getResource('https://raw.githubusercontent.com/Tapify/public-code-test/master/web-ui-test/tickets.json');
//       return res;
//     }
  
//   }





    // AppMain
 // GithubNetwork = new GithubNetwork();

    // componentDidMount() {
    //     this.updateProfile();
    // }
      
    // updateProfile() {
    //     this.GithubNetwork.getAllPeople()
    //     .then((date) => {
    //         this.setState((state) => {
    //            return { users: date }
    //         })
    //     })
    // }