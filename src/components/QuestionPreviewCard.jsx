import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function QuestionPreviewCard({difficulty,skill, maxScore, successRate}) {
  return (
    <div className='px-10 py-5 bg-gray-900 inline-block w-full rounded-lg flex item-center justify-between flex-wrap'>
      <div className='text-white'>
        <h2 className='text-2xl'>Playing with Characters</h2>
        <div className='flex gap-2 mt-2'>
          <span className='text-green-900 capitalize'>{difficulty}</span>
          <span className='capitalize'>{skill}</span>
          <span className='capitalize'>max score: {maxScore}</span>
          <span className='capitalize'>success rate: {successRate}</span>
        </div>
      </div>
      <div className=''>
        <FontAwesomeIcon icon={faStar} className='text-gray-500'/>
        <button className='py-1 px-3 mt-3 ml-5 border border-gray-500 inline-block rounded text-white '>Solve challange</button>
      </div>
    </div>
  )
}

export default QuestionPreviewCard
