import Image from 'next/image'
import Slack from '/public/slack.png'
import Docs from '/public/docs.webp'
import Z from '/public/z.png'
import Reddit from '/public/reddit.png'
import Gmail from '/public/gmail.png'
import Docs1 from '/public/doc.png'


const Integration = () => {
  return (
    <div className='absolute flex flex-col justify-center items-center overflow-hidden'>
     <div className="text-center sm:w-[90%]">
    <p className="mb-4 text-2xl lg:text-5xl font-bold lg:w-[60%] mx-auto mt-40">Integrated With 100+ Tools You Already Know & Love.</p>
    <p className="mb-4 lg:w-[60%] mx-auto text-xl">Connect Slick to Google drive, Slack, Dropbox and over 100+ other tools that help you manage your Saas. No more juggling between apps to look for information.</p>
    <button className="bg-[#714dff] text-white px-8 py-4 rounded-full mt-5">View All Integration</button>
    <Image src={Slack} alt='img' className='w-6 lg:w-16 relative bottom-96 left-22  left-96 invisible lg:visible'/>
    <Image src={Docs} alt='img' className='w-6 lg:w-16 rounded-full relative bottom-10  left-[500px] invisible lg:visible'/>
    <Image src={Gmail} alt='img' className='w-6 lg:w-16 rounded-full relative  md:bottom-80 left-40 invisible lg:visible'/>
    <Image src={Z} alt='img' className='w-6 lg:w-16 rounded-full relative  bottom-48 left-56 invisible lg:visible'/>
    <Image src={Reddit} alt='img' className='lg:w-16 rounded-full relative bottom-[640px] left-[1000px] invisible lg:visible'/>
    <Image src={Docs} alt='img' className='lg:w-16 rounded-full relative bottom-[530px] left-[1200px] invisible lg:visible'/>
    <Image src={Slack} alt='img' className='lg:w-16 relative bottom-[400px] left-[1000px] invisible lg:visible'/>
    <Image src={Docs1} alt='img' className='lg:w-16  relative bottom-[400px] left-[800px] invisible lg:visible'/>
  </div>
    </div>
  )
}

export default Integration