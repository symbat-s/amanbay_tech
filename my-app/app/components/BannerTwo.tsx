function BannerTwo (){
   return (
    <div className="ml-17 tracking-wider flex md:text-2xl" style={{ fontFamily: "Poppins" }}>
     <div>
      <img src="image/ofice.png" alt="ofice"  className="w-[386px] h-[257px] mt-[120px]"/>      
     <img src="image/videogame.png" alt="videogame"  className="w-[386px] h-[257px] mt-[20px]"/> 
      <div className="w-[385px] h-[52px] bg-[#C01F26] mt-[20px]"></div>
     </div>
     
       <div>
         <img src="image/social.png" alt="social"  className=" hidden md:block w-[405px] h-[605px]  mt-[120px] ml-[20px]"/>
       </div>

         <div className="ml-[40px] mt-[120px]">
            <div className="text-[#D91C1C] text-sm">About Amanbay Tech</div>
              <div className="mt-[20px]">
                   <div className="text-2xl">Full-Service Software</div>
                   <div className="text-3xl font-bold">Development Company</div>
                 <div className="w-[420px] h-[390px] text-2xl mt-[20px] font-medium">Amanbay Tech is a software development team that specializes
                   in website and mobile app development, as well as process automation.
                    Our custom solutions are designed to help businesses improve their
                     digital presence, streamline operations, and increase profitability.
                      With a team of experienced developers, Amanbay Tech is committed to
                       delivering top-quality software solutions that meet the unique needs
                        of each client.
                  </div>
                    <button className="bg-[#C01F26] hover:bg-[#c01f2796] text-[white] text-2xl w-[215px] h-[50px] rounded-[30px] mt-[35px]">Read more</button>
              </div>
         </div>
    </div>
   )
   
}

export default BannerTwo