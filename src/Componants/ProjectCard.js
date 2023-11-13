import React from 'react'
import { Link } from "react-router-dom";
export default function ProjectCard({ title, p_image, technology, description, link }) {
    return (
        <Link to={link} target='_blank'>
            <div className="card card-compact shadow-cyan-300/50 shadow-xl hover:shadow-orange-400">
                <figure className='h-36 w-full'>
                    <img src={p_image} alt={title} className='w-full h-full object-cover object-center' />
                </figure>

                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <div className="flex flex-wrap gap-2 ">
                        {technology.map((item) => (
                            <div className='border-dashed border-2 border-green-400 p-1 rounded-md'>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}
