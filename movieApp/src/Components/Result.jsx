import Box from "./Box"


const Result = (props) => {

    const boxes = props.movies.map(
        (item)=>{
            return (
                <Box key={item.id} image={item.poster_path} title={item.title} release={item.release_date}  vote={item.vote_average} />
            )
        }
    )
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
       {boxes}

      </div>
    </div>
  )
}

export default Result
