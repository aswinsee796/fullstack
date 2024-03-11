import React from 'react'
// import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const nav = useNavigate();
    
  return (
    <div>
      <div class="container my-12 mx-auto px-4 md:px-12">
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

                <a onClick={() => nav('/user/description')}>
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/565671669214664.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Lifetime Repertoires: Giri's Najdorf Sicilian
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by GM Anish Giri
                        </p>
                    </a>
                    {/* <a class="no-underline text-grey-darker hover:text-red-dark" href="#"> */}
                        <span class="hidden">
                        {/* <Button variant="contained">Get Started</Button> */}
                        </span>
                        <i class="fa fa-heart"></i>
                    {/* </a> */}
                </footer>

            </article>
      

        </div>
      
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

       
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/1475801681203296.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        The GothamChess 1. e4 Repertoire
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by IM GothamChess
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>


        </div>
   

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/1021071649074769.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        The Beginner's 1. e4 Repertoire
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by IM Andras Toth
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
       

        </div>
  


        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/927931668531835.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Keep It Simple for Black
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by IM Christof Sielecki

                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>


        </div>


        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">


            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/288601669213190.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Lifetime Repertoires: Jan Gustafsson's 1.e4 e5
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by GM Jan Gustafsson
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
           

        </div>
    
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

          
            <article class="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <img alt="Placeholder" class="block h-auto w-full" src="https://www.chessable.com/img/books/1028041669213586.png"/>
                </a>

                <header class="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 class="text-lg">
                        <a class="no-underline hover:underline text-black" href="#">
                        Lifetime Repertoires: Jobava London
                        </a>
                    </h1>
                    <p class="text-grey-darker text-sm">
                        11/1/19
                    </p>
                </header>

                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                    <a class="flex items-center no-underline hover:underline text-black" href="#">
                        {/* <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random"/> */}
                        <p class="ml-2 text-sm">
                        by GM Hans Niemann
                        </p>
                    </a>
                    <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span class="hidden">Like</span>
                        <i class="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
        

        </div>
       

    </div>
</div>
    </div>
  )
}

export default Courses
