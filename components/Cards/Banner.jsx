"use client"

export default function Banner(){
  return <section className="container mx-auto mb-6 flex flex-col md:flex-row md:items-center md:justify-between rounded-3xl bg-slate-900 px-8 py-12  lg:px-8 text-white font-bold text-4xl">
    <span>Get your <span className="text-primary-one">free consultation</span></span>
    <button onClick={()=>{
      window.open("https://cal.com/wleness/evaluate-your-wellbeing-w-wleness","_blank")
    }} className="btn-one mt-6 md:mt-0 text-nowrap">Book now</button>
  </section>
}