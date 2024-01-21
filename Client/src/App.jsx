import { useEffect, useState } from 'react'
import logo from './assets/setting1.png'
import jobIcon from './assets/job-icon.png'
import rightArrow from './assets/right-arrow.png'
import notification from "./assets/notification.png"
import Manish from './assets/Manish.jpg'
import search from './assets/search1.png'
import price from './assets/price.png'
import experienceIcon from './assets/experience.png'
import locationIcon from './assets/location.png'
import group from './assets/group.png'

function App() {
  const [isCreating, setIsCreating] = useState(false);
  const [isJobApplication, setIsJobApplication] = useState(false);
  const [isJobDescription, setIsJobDescription] = useState(false);
  const [isJobRound, setIsJobRound] = useState(false);

  const [position, setPosition] = useState('Software Developer');
  const [location, setLocation] = useState('Bengaluru');
  const [minSalary, setMinSalary] = useState('15000');
  const [maxSalary, setMaxSalary] = useState('30000');
  const [experience, setExperience] = useState('0 Years');

  const [jobs, setJobs] = useState([]);

  const toggleIsCreating = () => {
    setIsCreating(isCreating => !isCreating);
  }

  const handleCreateJob = () => {
    toggleIsCreating();
    setIsJobApplication(isJobApplication => !isJobApplication);
  }

  const handleJobDescription = () => {
    setIsJobApplication(isJobApplication => !isJobApplication);
    setIsJobDescription(isJobDescription => !isJobDescription);
  }

  const handleJobRound = () => {
    setIsJobDescription(isJobDescription => !isJobDescription);
    setIsJobRound(isJobRound => !isJobRound);
  }

  const handleSubmit = () => {
    // console.log("position: ", position);
    // console.log("location: " + location);
    // console.log("minSalary: " + minSalary);
    // console.log("maxSalary: " + maxSalary);
    // console.log("experience: " + experience);

    const data = {
      position: position,
      location: location,
      minSalary: minSalary,
      maxSalary: maxSalary,
      experience: experience
    };

    console.log(import.meta.env.BaseUrl);

    fetch('http://localhost:5000/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setIsJobRound(false);
        setIsJobApplication(false);
        setIsJobDescription(false);
        setIsCreating(false);
      })
      .catch(error => {
        console.log('Error:', error);
      });
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [handleSubmit]);

  return (
    <>
      <div className='flex flex-row w-full h-full'>
        <div className='flex flex-col bg-[#1C212D] w-[306px] max-h-[100000px] p-5 gap-5'>
          <div className='flex flex-row gap-2'>
            <img src={logo} alt="" srcset="" />
            <p className='text-white text-2xl font-bold'>Logo</p>
          </div>
          <div className='flex flex-row bg-[#FFD831] p-3 rounded-lg justify-between'>
            <div className='flex flex-row gap-4 font-semibold'>
              <img src={jobIcon} alt="" srcset="" />
              <p>Jobs</p>
            </div>
            <div>
              <img src={rightArrow} alt="" />
            </div>
          </div>
        </div>
        <div className='flex flex-col bg-[#F3F6F9] w-full'>
          <div className='p-4 rounded-lg'>
            <div className='bg-[#FFF] flex flex-row justify-between p-4 w-full rounded-lg'>
              <div className='bg-[#FFF] flex flex-row gap-3 rounded-lg'>
                <div>
                  <div className='flex flex-col bg-[#F5F8FE] h-[35px] p-3 rounded-lg'>
                    <p className='font-semibold text-gray-400'>Your Organization</p>
                    <p className='font-bold'>Skill genic</p>
                  </div>
                  <div className='w-[216px] h-[38px] bg-[#F5F8FE mt-2]' >
                    <div></div>
                  </div>
                </div>

                <div className='flex flex-row w-[216px] h-[38px] bg-[#F5F8FE] p-2 rounded-lg gap-3'>
                  <img src={search} alt="" />
                  <p className='text-gray-500'>Search</p>
                </div>
              </div>

              <div className='flex flex-row gap-4'>
                <div className='flex flex-col w-[48px] h-[48px] bg-[#f7f9e2]'>
                  <img src={notification} alt="" srcset="" />
                </div>
                <div className='w-[48px] h-[48px] bg-[#F5F8FE] rounded-lg' >
                  <img className='rounded-lg' src={Manish} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className='flex flex-row justify-between px-5'>
              <div className='text-3xl font-semibold'>
                <p>Active Jobs</p>
              </div>
              <div>
                <button onClick={toggleIsCreating} class="bg-black text-white p-4 px-11 rounded-lg">Create Job</button>
              </div>
            </div>
          </div>
          <div className=' grid grid-flow-rows grid-cols-2 terasotees:grid-cols-3 three:grid-cols-4 gap-10 p-5 lg:px-20'>
            {jobs && jobs.map(job => (
              <div className='w-[286px] h-[300px] bg-[#FFF] rounded-lg p-4 gap-4'>
                <div className='flex flex-row justify-between my-3'>
                  <div className='flex flex-row w-[60px] h-[55px] bg-[#F6F9FE] rounded-full justify-between'>
                    <div>
                      <img src="https://shorturl.at/rGHMZ" alt="" />
                    </div>
                  </div>
                  <div className='p-4'>
                    <img className='w-[5px] h-[15px]' src={group} alt="" srcset="" />
                  </div>
                </div>
                <div className='mb-[20px]'>
                  <p className='font-semibold'>{job.position}</p>
                </div>

                <div className='flex flex-col gap-4 mt-2'>
                  <div className='flex flex-row gap-4'>
                    <img src={locationIcon} alt="" />
                    <p>{job.location}</p>
                  </div>

                  <div className='flex flex-row gap-4'>
                    <img src={price} alt="" />
                    <p>{job.minSalary} - {job.maxSalary}</p>
                  </div>

                  <div className='flex flex-row gap-4'>
                    <img src={experienceIcon} alt="" />
                    <p>{job.experience}</p>
                  </div>
                </div>

                <div className='flex flex-row gap-2 mt-4'>
                  <button class="bg-[#5956E9] text-white w-[79px] h-[24px] rounded-lg text-sm">Application</button>
                  <button class="bg-[#FF8600] text-white w-[79px] h-[24px]  rounded-lg text-sm">In Process</button>
                  <button class="bg-[#3CD856] text-white w-[79px] h-[24px]  rounded-lg text-sm">Selected</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {isCreating && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50">
          <div class="relative flex h-[425px] w-[981px] flex-col items-center gap-5 rounded-3xl bg-white p-[30px] shadow-xl ring-1 ring-gray-900/5">
            <div class="flex w-full flex-row items-center text-2xl font-bold">
              <div class="grid w-full grid-cols-3">
                <div></div>
                <div class="flex items-center justify-center">
                  <p>Create a Job</p>
                </div>
                <div class="flex flex-row-reverse">
                  <div class="" onClick={() => {
                    setIsJobDescription(false);
                    setIsJobApplication(false);
                    setIsJobRound(false);
                    setIsCreating(false);
                  }}>
                    <img src="https://res.cloudinary.com/dvxwjcwcm/image/upload/v1705755425/dipympb4ztszzwtt9jxd.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex h-[252px] w-[916px] flex-col items-center justify-center rounded-3xl bg-[#F6F9FE]" onClick={handleCreateJob}>
              <div class="flex h-[190px] w-[234px] flex-col items-center justify-center gap-2 rounded-xl border border-[#5956E9] bg-white">
                <img src="https://res.cloudinary.com/dvxwjcwcm/image/upload/v1705754282/maxcjl10iag0beh5ig4q.png" alt="" srcset="" />
                <p class="text-lg font-bold text-[#5956E9]">Post Job With AI</p>
              </div>
            </div>

          </div>
        </div>
      )}


      {isJobApplication && (
        <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 p-8">
          <div class="relative flex h-full w-[981px] flex-col items-center gap-5 rounded-3xl bg-white p-[30px] shadow-xl ring-1 ring-gray-900/5 m-10 overflow-y-scroll h-32 scrollbar scrollbar-thumb-[#00FFFFFF]-900 scrollbar-track-[##00FFFFFF]-100">
            <div class="flex w-full flex-row items-center text-2xl font-bold">
              <div class="grid w-full grid-cols-3">
                <div></div>
                <div class="flex items-center justify-center">
                  <p>Create a Job</p>
                </div>
                <div class="flex flex-row-reverse">
                  <div class="" onClick={() => {
                    setIsJobDescription(false);
                    setIsJobApplication(false);
                    setIsJobRound(false);
                    setIsCreating(false);
                  }}>
                    <img src="https://res.cloudinary.com/dvxwjcwcm/image/upload/v1705755425/dipympb4ztszzwtt9jxd.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4">
              <div class="flex flex-row gap-1 ">
                <div class="border border-dashed border-gray-500 rounded-full px-2">1</div>
                <p>Job Application</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">2</div>
                <p>Job Description</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">3</div>
                <p>Interview Process</p>
              </div>
            </div>
            <div class="flex h-[105px] w-[787px] flex-col items-center justify-center rounded-3xl bg-[#F6F9FE]">
              <div class="flex flex-col items-center justify-center p-10 m-8 text-wrap ">
                <p class="text-center text-[#7E7E7E] text-lg font-semibold">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
              </div>
            </div>

            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Position Name</label>
                <input type="text" placeholder="Enter Position Name..." class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" onChange={(e) => setPosition(e.target.value)} />
              </div>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Company Name</label>
                <select name="company-name" id="cars" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4 text-gray-400">
                  <option value="Amazon">Amazon</option>
                  <option value="FlipKart">FlipKart</option>
                  <option value="Shopify">Shopify</option>
                  <option value="Google">Google</option>
                </select>
              </div>
            </div>
            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Experience</label>
                <input type="text" placeholder="Enter your Experience..." class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" onChange={(e) => setExperience(e.target.value)} />
              </div>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Add Location</label>
                <select name="company-name" id="cars" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4 text-gray-400" onChange={(e) => setLocation(e.target.value)}>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Pune">Pune</option>
                  <option value="Noida">Noida</option>
                  <option value="Indore">Indore</option>
                </select>
              </div>
            </div>
            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Contract Details</label>
                <select name="company-name" id="cars" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4 text-gray-400">
                  <option value="Full-Time">Full-Time</option>
                  <option value="Part-Time">Part-Time</option>
                </select>
              </div>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Add Minimum Salary</label>
                <select name="company-name" id="cars" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4 text-gray-400" onChange={(e) => setMinSalary(e.target.value)}>
                  <option value="15000">15000</option>
                  <option value="20000">20000</option>
                  <option value="25000">25000</option>
                  <option value="30000">30000</option>
                </select>
              </div>
            </div>
            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Add Maximum Salary</label>
                <input type="text" placeholder="Enter Maxium Salary..." class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" onChange={(e) => setMaxSalary(e.target.value)} />
              </div>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">currency</label>
                <input type="text" placeholder="Enter currency..." class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
            </div>

            <button class="bg-black text-white p-4 px-11 rounded-lg" onClick={handleJobDescription}>Save & Next</button>
          </div>
        </div>
      )}


      {isJobDescription && (
        <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 p-11">
          <div class="relative flex h-full w-[981px] flex-col items-center gap-5 rounded-3xl bg-white p-[30px] shadow-xl ring-1 ring-gray-900/5 m-10 overflow-y-scroll h-32 scrollbar scrollbar-thumb-[#00FFFFFF]-900 scrollbar-track-[##00FFFFFF]-100">
            <div class="flex w-full flex-row items-center text-2xl font-bold">
              <div class="grid w-full grid-cols-3">
                <div></div>
                <div class="flex items-center justify-center">
                  <p>Create a Job</p>
                </div>
                <div class="flex flex-row-reverse">
                  <div class="" onClick={() => {
                    setIsJobDescription(false);
                    setIsJobApplication(false);
                    setIsJobRound(false);
                    setIsCreating(false);
                  }}>
                    <img src="https://res.cloudinary.com/dvxwjcwcm/image/upload/v1705755425/dipympb4ztszzwtt9jxd.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4">
              <div class="flex flex-row gap-1 ">
                <div class="border border-dashed border-gray-500 rounded-full px-2">1</div>
                <p>Job Application</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">2</div>
                <p>Job Description</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">3</div>
                <p>Interview Process</p>
              </div>
            </div>
            <div class="flex h-[105px] w-[787px] flex-col items-center justify-center rounded-3xl bg-[#F6F9FE]">
              <div class="flex flex-col items-center justify-center p-10 m-8 text-wrap ">
                <p class="text-center text-[#7E7E7E] text-lg font-semibold">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
              </div>
            </div>

            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Skill Required</label>
                <input type="text" placeholder="Enter skills..." class="w-[731px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
            </div>

            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Intern's Responsibilities</label>
                <input type="text" class="w-[731px] h-[171px] bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
            </div>

            <button class="bg-black text-white p-4 px-11 rounded-lg mt-11" onClick={handleJobRound}>Save & Next</button>
          </div>
        </div>
      )}

      {isJobRound && (
        <div class="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 p-11">
          <div class="relative flex h-full w-[981px] flex-col items-center gap-5 rounded-3xl bg-white p-[30px] shadow-xl ring-1 ring-gray-900/5 m-10 overflow-y-scroll h-32 scrollbar scrollbar-thumb-[#00FFFFFF]-900 scrollbar-track-[##00FFFFFF]-100">
            <div class="flex w-full flex-row items-center text-2xl font-bold">
              <div class="grid w-full grid-cols-3">
                <div></div>
                <div class="flex items-center justify-center">
                  <p>Create a Job</p>
                </div>
                <div class="flex flex-row-reverse">
                  <div class="" onClick={() => {
                    setIsJobDescription(false);
                    setIsJobApplication(false);
                    setIsJobRound(false);
                    setIsCreating(false);
                  }}>
                    <img src="https://res.cloudinary.com/dvxwjcwcm/image/upload/v1705755425/dipympb4ztszzwtt9jxd.png" alt="" srcset="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-row gap-4">
              <div class="flex flex-row gap-1 ">
                <div class="border border-dashed border-gray-500 rounded-full px-2">1</div>
                <p>Job Application</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">2</div>
                <p>Job Description</p>
              </div>
              <div class="flex flex-row gap-1 rounded-full">
                <div class="border border-dashed border-gray-500 rounded-full px-2">3</div>
                <p>Interview Process</p>
              </div>
            </div>
            <div class="flex h-[105px] w-[787px] flex-col items-center justify-center rounded-3xl bg-[#F6F9FE]">
              <div class="flex flex-col items-center justify-center p-10 m-8 text-wrap ">
                <p class="text-center text-[#7E7E7E] text-lg font-semibold">A job represents a new opening, an open position or a vacancy listing. Creating a job will allow you to add candidates to that job and advertise it on your career page and job boards.</p>
              </div>
            </div>


            <div class="flex flex-row gap-6">
              <div class="border border-black rounded-lg p-4 text-xl font-semibold text-gray-400">Round 1</div>
              <div class="flex flex-row border border-[#5956E9] rounded-lg font-semibold ">
                <select name="company-name" id="cars" class="w-[260px] h-[52px] rounded-xl p-4 text-[#5956E9] font-semibold">
                  <option value="Skill Assesment">Skill Assesment</option>
                  <option value="Technical Interview">Technical Interview</option>
                  <option value="AI Based Video">AI Based Video</option>
                  <option value="Off line - Online Interview">Off line - Online Interview</option>
                </select>
              </div>
            </div>

            <div class="flex flex-row gap-6">
              <div class="border border-black rounded-lg p-4 text-xl font-semibold text-gray-400">Round 2</div>
              <div class="flex flex-row border border-[#5956E9] rounded-lg font-semibold ">
                <select name="company-name" id="cars" class="w-[260px] h-[52px] rounded-xl p-4 text-[#5956E9] font-semibold">
                  <option value="Technical Interview">Technical Interview</option>
                  <option value="Skill Assesment">Skill Assesment</option>
                  <option value="AI Based Video">AI Based Video</option>
                  <option value="Off line - Online Interview">Off line - Online Interview</option>
                </select>
              </div>
            </div>

            <button class="bg-black text-white p-4 px-11 rounded-lg">Add Round</button>


            <div class='flex flex-row gap-[100px] mt-3'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Kindly Check the Skills</label>
                <input type="text" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="Qualification" class="font-bold">Any Plateform or Qualification</label>
                <select name="-name" id="cars" class="w-[350px] h-[52px] bg-[#F5F4F8]  rounded-xl p-4 text-gray-400">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div class='flex flex-row gap-[100px]'>
              <div class="flex flex-col gap-2">
                <label for="position-name" class="font-bold">Finalise Questioner</label>
                <input type="text" class="w-[350px] h-full bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
              <div class="flex flex-col gap-2">
                <label for="Qualification" class="font-bold">Share Availiblity</label>
                <input type="text" class="w-[350px] h-full bg-[#F5F4F8]  rounded-xl p-4" />
              </div>
            </div>

            <button class="bg-black text-white p-4 px-11 rounded-lg" onClick={handleSubmit}>Submit</button>

          </div>
        </div>
      )}
    </>
  )
}

export default App
