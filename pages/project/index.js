import styles from '../../styles/style.css'

export default function index() {
    return (
        <div>
             <header>
                <a href="#" class="logo">Huang's Work</a>
                <ul>
                    <li class="nav__item"><a href="#">Home</a></li>
                    <li class="nav__item dropdown"><a href="#" class="nav__link dropdown__link">About
                        <i class='bx bx-chevron-down dropdown__icon'></i></a>
                
                        <ul class="dropdown__menu">
                            <li class="dropdown__item"><a href="./p3/profile_xx.html" class="nav__link">About me</a></li>
                            <li class="dropdown__item"><a href="#" class="nav__link">Location</a></li>
                            <li class="dropdown__item"><a href="#" class="nav__link">Studies</a></li>
                        </ul>
                    </li>
                    <li class="nav__item dropdown">
                        <a href="#" class="nav__link dropdown__link">TKU Lesson<i class='bx bx-chevron-down dropdown__icon'></i></a></li>
            
                    <li class="nav__item"><a href="#"class="nav__link">Contact</a></li>
                </ul>
            </header>
            <section class="banner"></section>
        </div>
    )
}
