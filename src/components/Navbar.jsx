import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg d-flex justify-content-center">
            <div class="">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="inicio">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">BOMBONES</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">TORTAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">REGALOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">PALETAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inicio">GOMITAS</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar