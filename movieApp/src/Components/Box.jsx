

const Box = (props) => {

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    
      <div className="shadow-xl rounded-lg shadow-black min-h-[300px] text-white hover:scale-105 cursor-pointer duration-150 hover:bg-gray-900 bg-black md:w-[290px] mx-auto lg:mx-0 lg:w-[300px] mt-10 border">
      <img src={IMGPATH + props.image} alt="" />
      <div className="font-bold text-xl p-4">{props.title}</div>
      <div className="justify-around flex pb-7">
        <span>{props.release}</span>
        <span className="text-yellow-700 font-bold">{props.vote}</span>
      </div>
      </div>
    
  )
}

export default Box
