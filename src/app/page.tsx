import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className='w-full cellphone-dimensions'> 
        <div className="flex w-full whatsapp-background-color h-auto p-5 align-middle justify-items-center">
          <img src="eliza-pfp.png" className='w-12 h-12 rounded-full'/>
          <a className='font-sans font-medium text-white text-center flex items-center justify-center pl-4 text-lg'>Eliza Chatbot</a>
        </div>
        
        <div className='flex flex-col whatsapp-bg bg-slate-100 h-4/5 p-5'>

          <div className='flex-grow '>
            asdadasdadasdasdadasdadasd
          </div>
          
          <div className='flex w-full'>
              <input type="text" placeholder='Chat with Eliza' className='bg-white rounded-full px-6 py-3 font-normal text-gray-600 w-full bg-transparent outline-none'/>
          </div>
      
        </div>
      </div>
    </main>
  )
}
