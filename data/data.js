const { v4:uuid } = require('uuid');
const { db } = require('../models/petModel');


module.exports = [
    {  
      _id : uuid(),
      type: "Lost",
      date: "1/3/2023",
      breed: "DLH Black & White Cat",
      address: "the Bradley Woods/Hingham Shipyard area, Hingham, MA.",
      gender: 'Female',
      age: 'not specified',
      color: 'black&white',
      weight:"not specified",
      hair:"Long",
      collar:"wearing a pink collar with name tag",
      addition:'name tag is Oomi, If you think you have seen this pet, please call or text 339-236-0131 or email: mjbickford@comcast.net',
      image: "/images/1.jpg"
    },

    {  
        _id : uuid(),
        type: "Found",
        date: "1/29/2023",
        breed: "Weimaraner Mixed Breed Dog	",
        address: "Hammond Pond Parkway/Newton St., Brookline, MA.",
        gender: 'Female',
        age: 'not specified',
        color: 'Brown',
        weight:"not specified",
        hair:"Short",
        collar:"not specified",
        addition:'call Officer Cheung at Brookline Police Dept., 617-730-2730 or email dcheung@brooklinema.gov',
        image: "/images/2.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "2/24/2023",
        breed: "Labrador Retriever Dog	",
        address: "Worcester Rd. at Stagecoach Rd., Princeton, MA.",
        gender: 'Male',
        age: '5 years old',
        color: 'Black',
        weight:"Over 90 Ibs",
        hair:"Short",
        collar:"He was wearing a blue collar with his name on it. Microchip #985112007831354.",
        addition:'If you think you have seen this pet, please call HomeAgain at 888-466-3242',
        image: "/images/3.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "2/2/2023",
        breed: "Calico Cat",
        address: "Plum Hollow Rd., Falmouth, MA.",
        gender: 'Female',
        age: '3 years old',
        color: 'white with a black patch above one eye and a golden patch above the other eye,Has a golden tail with a little patch of black.',
        weight:"not specified",
        hair:"Long",
        collar:"Microchipped",
        addition:'If you think you have seen this pet, please email marita397@yahoo.com',
        image: "/images/4.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "3/11/23",
        breed: "Schnauzer Poodle Mix Dog",
        address: "Stow and Acton, in the Nagog Hill Conservation Area.",
        gender: 'Male',
        age: '4 years old',
        color: 'white with a black patch above one eye and a golden patch above the other eye,Has a golden tail with a little patch of black.',
        weight:"20-30 Ibs",
        hair:"Long",
        collar:"not specified",
        addition:' He also has medical needs and requires daily medication for his eyes so his vision could be deteriorating. He is very shy and will run away so please do not approach',
        image: "/images/5.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "3/12/23",
        breed: "parakeet",
        address: "3 Prospect St., Woburn, having fled from 35 Prospect St.",
        gender: 'not specified',
        age: 'not specified',
        color: 'a blue parakeet',
        weight:"2not specified",
        hair:"not specified",
        collar:"not specified",
        addition:'Frostyk is a blue parakeet  who responds to "Frostyk", "kikiki" and "fir fir fir". Reward offered. If you think you have seen this pet, please  call 781-468-8624 or 917-831-2969 or email aisha.gii@gmail.com',
        image: "/images/6.jpg"
      },
      
      {  
        _id : uuid(),
        type: "Lost",
        date: "3/12/23",
        breed: "Fawn Pug",
        address: "Westminster Ave./Lowell St., Arlington, MA.",
        gender: 'Male',
        age: '9 month',
        color: 'light brown',
        weight:"Over 50 Ibs",
        hair:"Short",
        collar:"not specified",
        addition:'If you think you have seen this pet, please call 609-577-6791 or email Patrick.Johnson@nationalgrid.com',
        image: "/images/7.jpg"
      },


      {  
        _id : uuid(),
        type: "Lost",
        date: "3/31/23",
        breed: "Apricot Tabby Cat",
        address: "Elm Brook Lane, Concord, MA",
        gender: 'Male',
        age: '7 years old',
        color: 'grey and apricot',
        weight:"10-20 Ibs",
        hair:"Long",
        collar:"not specified",
        addition:'Shy and scared.Reward for safe return. If you think you have seen this pet, please call 978-394-2326 or email coowri@yahoo.com',
        image: "/images/8.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "4/1/23",
        breed: "Maine Coon Cat ",
        address: "37 Linden Street Newton Upper Falls, MA.",
        gender: 'Male',
        age: '7 years old',
        color: 'black & brown',
        weight:"30-40 Ibs",
        hair:"Long",
        collar:" Wearing a brown flea/tick collar. Microchip #0A137A295D.",
        addition:'If you think you have seen this pet, please  call 781-930-9286 or email aldosferra9@gmail.com',
        image: "/images/9.jpg"
      },


      {  
        _id : uuid(),
        type: "Lost",
        date: "4/26/23",
        breed: "Black Labrador Retriever ",
        address: "Harriette Rd./Locustfield Rd., MA.",
        gender: 'Female',
        age: 'not specified',
        color: 'black',
        weight:"30-40 Ibs",
        hair:"Short",
        collar:"not specified",
        addition:'If you think you have seen this pet, please call 508-209-4166 or  email mypeanutjoshnick@yahoo.com',
        image: "/images/10.jpg"
      },


      {  
        _id : uuid(),
        type: "Lost",
        date: "4/26/23",
        breed: "White Maltese",
        address: "Surrey Lane/Grandview Ave./Kenmore Way, Lincoln, RI.",
        gender: 'Female',
        age: ' 9-year-old',
        color: 'white',
        weight:"30-40 Ibs",
        hair:"Long",
        collar:"She has a herniated belly button and a pink nose. Spayed and microchipped.",
        addition:'If you think you have seen this pet, please call the Lincoln Police at 401-333-1111 or email dave.vermette@gmail.com',
        image: "/images/11.jpg"
      },

      {  
        _id : uuid(),
        type: "Lost",
        date: "5/1/23",
        breed: "American Cat",
        address: "North Grove St. Foxboro, MA.",
        gender: 'Male',
        age: ' not specified',
        color: ' black with brown and golden coloring and has yellow eyes',
        weight:"20-30 Ibs",
        hair:"Short",
        collar:"He has two very thin golden streaks down his back. He was wearing a pink collar with a bell as well as a tick and flea collar. No microchip.",
        addition:'If you think you have seen this pet, please call 508-543-0555 or 508-404-7095 or email HNASRI@partners.org',
        image: "/images/12.jpg"
      },

      {  

        type: "Found",
        date: "5/24/23",
        breed: "Tzu/Papillon mixed breed",
        address: "Beechwood Ave./Crystal Lake Rd., Sudbury, MA.",
        gender: 'Male',
        age: ' an 8-month-old',
        color: 'black, white and brown',
        weight:"20-30 Ibs",
        hair:"Long",
        collar:" He was wearing a blue collar.",
        addition:'If you think you have seen this pet, please call 978-895-8123',
        image: "/images/13.jpg"
      },
      
      {  
      
        type: "Found",
        date: "5/22/23",
        breed: "Brown Rabbit",
        address: "20 Easthampton Rd., Holyoke, MA.",
        gender: 'Male',
        age: 'not specified',
        color: 'light brown',
        weight:"20-30 Ibs",
        hair:"Long",
        collar:"not specified ",
        addition:'If you think you have seen this pet, please email lclarke3711@gmail.com',
        image: "/images/14.jpg"
      },
      
      {  
      
        type: "Found",
        date: "5/22/23",
        breed: "Small Brown Dog",
        address: "Kent St. & Aspinwall Ave., Brookline, MA.",
        gender: 'Male',
        age: 'not specified',
        color: 'brown',
        weight:"20-30 Ibs",
        hair:"Long",
        collar:"not specified ",
        addition:'If you think you have seen this pet, please  call Brookline Animal Control at 617-730-2730 or email dcheung@brooklinema.gov',
        image: "/images/15.jpg"
      },

]
