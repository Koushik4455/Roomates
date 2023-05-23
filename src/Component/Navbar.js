import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' class="navbar-brand" >
          Room Mates
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to='/home' class="nav-link" >
                Home <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/muntly" class="nav-link" >
                Mountly Bill
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/adduser' class="nav-link" href="#">
                Add User
              </Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

     
    </div>
  )
}

export default Navbar
