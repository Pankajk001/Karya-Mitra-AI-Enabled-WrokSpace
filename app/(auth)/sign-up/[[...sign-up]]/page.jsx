import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6 ">
      <img
        alt=""
        src="https://images.pexels.com/photos/5324856/pexels-photo-5324856.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="absolute inset-0 h-full w-full object-cover blur-[2px] md:ml-7 "
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <SignUp/>
    </main>
  </div>
</section>
  )
}