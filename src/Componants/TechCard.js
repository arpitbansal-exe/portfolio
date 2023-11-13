import React from 'react'

export default function TechCard({title, tech}) {
    return (
        <div className="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg  ">
            <div className="text-primary font-medium text-lg tracking-wider">
                {title}
            </div>
            <div className="flex flex-wrap gap-2 ">
                {tech.map((item, i) => (
                    <div className='border-solid border-2 border-[#4f91f2] p-1.5 rounded-md'>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    )
}
