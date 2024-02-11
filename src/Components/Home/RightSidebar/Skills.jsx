import React from 'react'

const Skills = () => {

    const dataset = [
        {
            id:1,
            title:"Frontend",
            skills:['HTML','CSS','javascript','React.js','Bootstrap','Tailwindcss','ChakraUI'],
            border:'border-green-500'
        },
        {
            id:2,
            title:"Backend",
            skills:['Node.js','express.js','Codeigniter 4','MySQL','MongoDB'],
            border:'border-orange-500'
        },
        {
            id:3,
            title:"Programming",
            skills:['C','C++','Java','Python'],
            border:'border-blue-500'
        }
    ]



  return (
    <div className='p-1'>
         <h2 className='text-gray-200 text-lg md:text-xl lg:text-xl mb-3 ml-2'>Skills</h2>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-4">
          { dataset && dataset.map((item)=>(
          <div class={`p-4 border rounded-3xl shadow-xl bg-[#1A1D24] ${item.border} hover:border-[#1A1D24] cursor-pointer`}>
                <h4 className='text-lg text-gray-200'>{item.title}</h4>
                <div className='mt-2'>
                    {item.skills.map((skill)=>(
                    <button className='bg-[#33363d] text-gray-200 px-3 py-1 rounded-3xl border-none shadow-md mx-3 mt-3 text-sm'>{skill}</button>))}
                </div>
            </div>))}
         </div>
    </div>
  )
}

export default Skills