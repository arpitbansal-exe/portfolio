import React from 'react'
import image from '../images/profile_photo.jpg';
import ProjectCard from '../Componants/ProjectCard';
import TechCard from '../Componants/TechCard';
import EducationTimeline from '../Componants/EducationTimeline';
import Footer from '../Componants/Footer';
import ExperienceTimeline from '../Componants/ExperienceTimeline';
import { Link } from 'react-router-dom';
import bird_img from '../images/bird_img.png';
import expense_img from '../images/expense_img.png';
import gfg_web_img from '../images/gfg_web_img.png';
import fusion_img from '../images/fusion_img.png';
export default function home() {
    return (
        <div >
            {/* Contact and social media links */}
            <div className="max-w-full h-12">
                <div class="flex justify-between">
                    <div class="left-div">
                    <div className="grid grid-flow-col gap-4 my-3 mx-5">
                    <Link  to="https://www.linkedin.com/in/arpitbnsl" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/1200px-LinkedIn_icon.svg.png" width="24" height="24" alt='Linkedin'></img> </Link>
                    <Link to="https://github.com/arpitbansal-exe" target='_blank'><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/640px-Octicons-mark-github.svg.png" width="24" height="24" alt='@gfg_mitadt'></img> </Link>
                    
                </div>
                    </div>
                    <div class="right-div mr-5">
                        <Link className='p-0' to="https://bit.ly/arpitbansal" target="_blank">
                            <div className="btn btn-primary my-1">
                                <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 19">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4" />
                                </svg>
                                <div className='text-white'>
                                    Resume
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* {Profile Panel} */}
            <div className="h-48 md:h-56 max-w-full rounded-md bg-gray-200 m-2 flex items-center px-3 md:px-10">
                <img src={image} alt="" className='rounded-full h-24 w-24 md:h-40 md:w-40 border-solid border-2 border-black' />
                <div className='md:mx-auto ml-7'>
                    <div className="text-3xl md:text-6xl font-bold my-3 italic text-black">Arpit Bansal</div>
                    <div className='text-center text-gray-800'>Engineering student</div>
                </div>

            </div>

            {/* {Projects Panel} */}
            <div className='text-5xl font-bold mt-5 ml-3'>Projects</div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-5 mt-10 mx-2">
                <ProjectCard
                    title="GFG-MITADT SC Website"
                    p_image={gfg_web_img}
                    technology={["React Js","Node Js","MongoDB","Tailwind"]}
                    description="Webiste of the Student Chapter allowing officials to post question and students to answer them."
                    link=""
                />
                <ProjectCard
                    title="Bird Song Classification"
                    technology={["Siamese neural network","Python","Deep Learning"]}
                    p_image={bird_img}
                    description="A deep Learning model to classify bird songs using Siamese neural network based on Bioacoustic features."
                    link="https://github.com/arpitbansal-exe/Bird-Song-Classification/"
                />
                <ProjectCard
                    title="Expense Log App"
                    technology={["Java","Firebase","Android Studio"]}
                    p_image={expense_img}
                    description="The Expense App is a user-friendly application that allows users to track
                    and manage their expenses."
                    link="https://github.com/arpitbansal-exe/Expense-Log-App"
                />
                <ProjectCard
                    title="Image Fusion"
                    technology={["Numpy","Open CV","PyWavelets"]}
                    p_image={fusion_img}
                    description="Merge two images with different focus together to form a better quality fused image."
                    link="https://github.com/arpitbansal-exe/Image_Fusion"
                />

            </div>


            {/* {Tech Panel} */}
            <div className='text-5xl font-bold mt-10 mb-5 ml-3'>Tech Stack</div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-2">
                <TechCard
                    title="Programming Languages"
                    tech={[
                        'C++',
                        'Python',
                    ]}
                />
                <TechCard
                    title="Data Science"
                    tech={[
                        'Machine Learning',
                        'Data Analytics',
                    ]}
                />
                <TechCard
                    title="Frontend"
                    tech={[
                        'HTML',
                        'CSS',
                        'Tailwind',
                        'Javascript',
                        'React Js',
                    ]}
                />
                <TechCard
                    title="Backend"
                    tech={['Node Js', 'Express Js']}
                />
                <TechCard
                    title="Database"
                    tech={['MySql', 'MongoDB']}
                />
                <TechCard
                    title="Devops"
                    tech={[
                        'GIT'
                    ]}
                />
            </div>

            {/* {Experience Panel} */}
            <div className='text-5xl font-bold mt-5 my-3 ml-3'>Experience</div>
            <ExperienceTimeline />


            {/* {Education Panel} */}
            <div className='text-5xl font-bold mt-10 my-3 ml-3'>Education</div>
            <EducationTimeline />


            {/* {Footer} */}
            <Footer />
        </div>



    )
}
