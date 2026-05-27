import React from 'react'

// 구조 분해할당
const UserCard = ({name, age}) => {
  return (
    <div>
        <h2>{name}</h2>
        <p>{age}살</p>
    </div>
  )
}

export default UserCard