import CountdownTimer from "../components/Countdown"
import iitpng from "../assets/iit.png"
import iitmadras from "../assets/iitmadras.png"
import resultwatch from "../assets/resultwatch.png"
function HomePage() {
  return (
    <div>
      <div>
        <CountdownTimer />
      </div>

      <div className = "md:flex gap-5 mb-5">

        <div className = "w-full md:w-[50%]">
          <div className = "border  text-xl w-50 p-2 font-semibold bg-amber-400">News & Events</div>
            <div className = "border h-100 overflow-scroll md:h-130">

            {/*1.news */}
              <div className = "flex p-2 items-center border-b-1 border-gray-400 ">
                <img src = {iitpng} className = "w-40 rounded-2xl"></img>
                <div className = "px-3 ">Exam Registeration Date Is Extended To Get Opportunity To Register Again Who Missed</div>
              </div>

            {/*1.news */}
              <div className = "flex p-2 items-center border-b-1 border-gray-400 ">
                <img src = {iitmadras} className = "w-40 rounded-2xl"></img>
                <div className = "px-3 ">IIT Madras Becomes Host To Organise NEET Exam for 2025</div>
              </div>

            {/*1.news */}
              <div className = "flex p-2 items-center border-b-1 border-gray-400 ">
                <img src = {resultwatch} className = "w-40 rounded-2xl"></img>
                <div className = "px-3">Neet 2024 Result Declared , Check It On 
                  <a href="/HASHMAP.pdf" target="_blank" rel="noopener noreferrer">sss </a>
                </div>
              </div>


            </div>
        

        
          </div>


          <div className = "w-full md:w-[50%] mt-5 md:mt-0">
          <div className = "border  text-xl w-50 p-2 font-semibold bg-amber-400">Introduction</div>
            <div className = "border h-100 overflow-scroll md:h-130 p-2">

              <p>The Ministry of Human Resource Development (MHRD), which is now known as the Ministry of Education (MoE), Government of India (GOI) has established the National Testing Agency (NTA) as an independent, autonomous and self-sustained premier testing organisation for conducting efficient, transparent and international standard tests in order to assess the competency of candidates for admission to premier higher education institutions.</p>
              <br/>
              <p><span className = "font-semibold">NATIONAL ELIGIBILITY CUM ENTRANCE TEST  NEET (UG) – 2025 </span> will be conducted by National Testing Agency (NTA), as a common and uniform National Eligibility-cum-Entrance Test [(NEET (UG)] for admission to undergraduate medical education in all medical institutions. Similarly, as per Section 14 of the National Commission for Indian System of Medicine Act, 2020, there shall be a uniform NEET (UG) for admission to undergraduate courses in each of the disciplines i.e. BAMS, BUMS, and BSMS courses of the Indian System of Medicine in all Medical Institutions governed under this Act. NEET (UG) shall also be applicable to admission to BHMS course as per National Commission for Homeopathy Act, 2020. The languages in which the NEET (UG) 2025 would be conducted are: English, Hindi, Assamese, Bengali, Gujarati, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, and Urdu. MNS (Military Nursing Service) aspirants seeking admission to BSc Nursing Course being conducted at Armed Forces Medical Service Hospitals for the year 2025 are required to qualify NEET. The NEET score will be used for shortlisting for selection to the four-year BSc Nursing course.</p>

            </div>
        

        
          </div>
        </div>
      
    </div>
  )
}

export default HomePage