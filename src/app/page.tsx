import SentMessage from './sentMessage'
import ReceivedMessage from './receivedMessage'

export default function Home() {
  const handleMessageRequest = () => {
    console.log("")
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className='w-full cellphone-dimensions'> 
        <div className="flex w-full whatsapp-background-color h-auto px-5 py-3 align-middle justify-items-center">
          <img src="eliza-pfp.png" className='w-10 h-10 rounded-full'/>
          <a className='font-sans font-medium text-white text-center flex items-center justify-center pl-4 text-base'>Eliza Chatbot</a>
        </div>
        
        <div className='flex flex-col whatsapp-bg bg-slate-100 h-4/5 pb-6'>
          <div className='flex-grow overflow-y-scroll	px-7 pt-1'>
            
              <SentMessage message="DIASJDIASJD"/>
              <ReceivedMessage message="1111111111"/>

          </div>
          
          <div className='flex w-full px-7 pt-5 items-center'>
              <input type="text" placeholder='Chat with Eliza' className='bg-white rounded-full px-6 py-3 font-normal text-gray-600 w-full bg-transparent outline-none'/>
              <button className='flex h-10 w-12 whatsapp-background-color ml-3 rounded-full' >
              </button>
          </div>
        </div>
      </div>
    </main>
  )
}
