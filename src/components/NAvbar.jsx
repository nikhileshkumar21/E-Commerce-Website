import React from 'react'
import { Link } from 'react-router-dom'

const NAvbar = () => {
  return (
    <div>
      <div classNAme="navbar_div">
        <div>
          <input type="text" placeholder='Search here'/>
        </div>
        <div>
          <div className='navbar_main'>
            <div>
              <div>
                {/* search icon*/}
              </div>
              <div>
                {/*MenuIcon...*/}
              </div>
              <div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
       <Link to="/">Home</Link>
       <Link to="/">Contacts</Link>
       <Link to="/">Login</Link>
       <Link to="/">Signup</Link>
    </div>
  )
}

export default NAvbar
