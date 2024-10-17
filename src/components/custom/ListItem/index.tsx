import React from 'react'

const index = () => {
  return (
    <div>
      <ul id="todo-list" className="list-none p-0">
    <li className="flex items-center p-3 mb-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <span className="flex-grow ml-3 text-base">Plan a weekend getaway</span>
    </li>
    <li className="flex items-center p-3 mb-4 bg-gray-100 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <span className="flex-grow ml-3 text-base">Learn a new recipe</span>
    </li>
</ul>

    </div>
  )
}

export default index
