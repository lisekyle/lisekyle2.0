import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export const SubPage = () => {
  return (
    <div>
      <div> Hello from subpage!</div>
      <Link to={'/'}>Go back!</Link>
    </div>
  )
}

export default SubPage;
