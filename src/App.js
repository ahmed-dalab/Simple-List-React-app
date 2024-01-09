import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [lists,setLists] = useState([
    {
      "id": 1,
      "title": "New Programming Language Unveiled: Paradigm Shift in Coding",
      "description": "Explore the latest programming language that promises to revolutionize the coding landscape. Discover its unique features and advantages for developers."
    },
    {
      "id": 2,
      "title": "Developer Conference 2023: Highlights and Key Takeaways",
      "description": "Catch up on the highlights from the annual Developer Conference. Learn about new tools, frameworks, and best practices shared by industry experts."
    },
    {
      "id": 3,
      "title": "Web Development Trends: What's Shaping the Future of the Web?",
      "description": "Stay ahead in the dynamic world of web development. Dive into the trends shaping the future of the web, from progressive web apps to serverless architecture."
    },
    {
      "id": 4,
      "title": "Open Source Projects: Contributions That Made a Difference",
      "description": "Explore notable contributions to open source projects. Learn about developers who made a significant impact, and discover how you can get involved in the open source community."
    },
    {
      "id": 5,
      "title": "Code Optimization Techniques: Boosting Performance in Your Projects",
      "description": "Master the art of code optimization. Discover techniques to improve the performance of your applications, from efficient algorithms to best practices in coding."
    }
  ])

 
  const handleRemove = (id) => {
    setLists(prevEvents => {
      return prevEvents.filter(event => id !== event.id)
     
    })

  }


  return (
    <div className="container">
      {lists.map(list => (
        <div className='w-100 items-center justify-center ml-20 mt-8 p-6 
        border-solid border-2 border-gray-300 rounded-xl shadow' key={list.id}>
          <h2 className='font-bold text-black-300 uppercase'>{list.title}</h2>
          <p className='text-gray-500 mt-6'>{list.description}</p>
         {/* <button >Delete</button> */}
          <svg onClick={()=>handleRemove(list.id)} className='w-10 h-8 mt-5 cursor-pointer shadow rounded' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
           <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
         </svg>

       
        </div>
      ))}
    </div>
  );
}

export default App;
