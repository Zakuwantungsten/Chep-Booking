import React, { use, useState } from 'react'
import Title from '../../components/Title'

const AddRoom = () => {

const [images, setImages] = useState({
  1:null,
  2:null,
  3:null,
  4:null,

})

const [inputs, setInputs] = useState({
  roomType: '',
  pricePerMonth: 0,
  amenities: {
    'Free WiFi': false,

  }
})

  return (
    <form>
      <Title align='left' font='outfit' title='Add House' subTitle='Fill in the details carefully and accurate House details, pricing, and amenities, to enhance the user booking experience.' />

      {/*Upload area for images*/}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images.map((key)=>(
            <label htmlFor=''></label>
        ))}
      </div>

    </form>
  )
}

export default AddRoom