import Card from "./Card"

function App() { 
  
  const jobOpenings = [
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.Jtg0oKBXBr3STtqb5qKDdAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.t1UbVWH7KdS2B6scs1NorgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "Frontend Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "Pokhara, Nepal",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.wB35zrz_CU_N1STyq7uAzAHaEo?w=1000&h=625&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Microsoft",
    datePosted: "10 days ago",
    post: "Cloud Architect",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$130/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.taqskN7A1aRhR7xh1Z1hPQHaEn?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Part-Time",
    tag2: "Mid Level",
    pay: "$95/hr",
    location: "Pyuthan, Nepal",
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.0qep9X-Xm_nWJPU0OC91FgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "Product Designer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.CF7qap7sND3P9CTr7lDfhAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Netflix",
    datePosted: "4 days ago",
    post: " Graphics Designer",
    tag1: "Contract",
    tag2: "Mid Level",
    pay: "$105/hr",
    location: "Pokhara, Nepal",
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.VXuyrZvkfJCwb6keHCQCbwHaF7?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full-Time",
    tag2: "Junior Level",
    pay: "$85/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.jLPffTSsUcA2xcsJk48OUgHaFf?rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "OpenAI",
    datePosted: "8 days ago",
    post: "AI Research Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Pokhara, Nepal",
  },
  {
    brandLogo: "https://th.bing.com/th?id=OIF.d4tTtgnhDvPMvWyR%2fP2E2Q&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "Intel",
    datePosted: "5 days ago",
    post: "Hardware Engineer",
    tag1: "Full-Time",
    tag2: "Mid Level",
    pay: "$100/hr",
    location: "Kathmandu, Nepal",
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.DMYKlgmSiIyR90DDyxPNTQHaE8?w=768&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
    companyName: "IBM",
    datePosted: "1 week ago",
    post: "DevOps Engineer",
    tag1: "Full-Time",
    tag2: "Senior Level",
    pay: "$115/hr",
    location: "Pyuthan, Nepal",
  },
  {
  brandLogo: "https://i.pinimg.com/736x/3e/e3/af/3ee3af2ae164bf631c5ebc13d40e95b1.jpg",
  companyName: "Adobe",
  datePosted: "3 days ago",
  post: "UX Researcher",
  tag1: "Part-Time",
  tag2: "Junior Level",
  pay: "$90/hr",
  location: "Lalitpur, Nepal",
},
{
  brandLogo: "https://beebom.com/wp-content/uploads/2018/01/Samsung-stock.jpg?w=750&quality=75",
  companyName: "Samsung",
  datePosted: "6 days ago",
  post: "Mobile App Developer",
  tag1: "Contract",
  tag2: "Mid Level",
  pay: "$95/hr",
  location: "Bhaktapur, Nepal",
}

];
  return (
    <>
      
    <link
      href="https://cdn.jsdelivr.net/npm/remixicon@4.8.0/fonts/remixicon.css"
      rel="stylesheet"
    />  

 <div className="bg-cyan-300 flex flex-wrap gap-2  h-full w-full p-7 ml-87 mt-6"> 
  {jobOpenings.map ((elem, index) =>{    
    return <Card 
      key= {index}
      company = {elem.companyName} 
      post = {elem.post} 
      time = {elem.tag1} 
      date = {elem.datePosted} 
      level= {elem.tag2} 
      payment={elem.pay} 
      location = {elem.location}
      logo = {elem.brandLogo}
    />
  })} 
  </div>   

    </>
  )
}

export default App
