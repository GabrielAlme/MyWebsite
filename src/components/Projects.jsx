import './Projects.css'

function Projects() {
    return(
        <div className="projects">
            <h1>These are my Projects:</h1>
            <div >
                <ul className="projects-list">
                    <li><p>
                        <a href="https://github.com/GabrielAlme/SudokuSolver" target="_blank">
                        Sudoku Solver</a>
                        &nbsp;- This program takes a 4x4 or a 9x9 puzzle using coordinates to denote the known numbers 
                        used to solve the puzzle and solves it.</p>
                    </li>

                    <li><p>
                        <a href="https://github.com/GabrielAlme/Flight-Database" target="_blank">
                        Flight Database</a>
                        &nbsp;- This was a project for one of my classes where I designed a custom database and put it 
                        into a template app made by my professor.</p>
                    </li>

                    <li><p>
                    <a href="https://github.com/GabrielAlme/Shadow-Array-Benchmark" target="_blank">
                        Shadow Array Benchmark</a>
                        &nbsp;- This one is a bit confusing, it's a program that when given an
                        array can tell you if that given array is a shadow array or not... a very uncommon type of 
                        array. But it does!</p>
                    </li>

                    <li><p>
                    <a href="https://github.com/GabrielAlme/MyWebsite" target="_blank">
                        My Website</a>
                        &nbsp;- This is all of the source code for the site you are on right now!
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Projects