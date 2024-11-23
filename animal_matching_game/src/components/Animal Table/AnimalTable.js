import { animals } from "../db/AnimalsDb";
import '../Animal Table/AnimalTable.css';

export default function AnimalTable(props){
    return(
        <div className='gameContainer'>
            <table className='game-table'>
                <tr>
                    <th colspan="3">
                        <h1>Animal Matching Game</h1>
                    </th>
                </tr>
                <tr>
                    <th>
                        <h3>Result</h3>
                    </th>
                    <th>
                        <h3>Animal Name</h3>
                    </th>
                    <th>
                        <h3>Select the Animal</h3>
                    </th>
                </tr>
            </table>

        </div>
    );
}