import React from 'react'

const Pagination = ({ pageData, stateLength,paginate }) => {
    let setPage = []
    let totalPage = Math.ceil(stateLength / pageData)
    // console.log(pageData,stateLength)
    for (let i = 1; i <= totalPage; i++){
        setPage.push(i)
    }
    console.log(setPage);
  return (
      <div>
          {setPage.map((page, id) => {
              return (
                  <button className='bg-red-600 text-yellow-400 mx-2 p-1' key={id} onClick={() => paginate(page)}>
                      page{page}
                  </button>
              )
          })}
    </div>
  )
}

export default Pagination