import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth';


import "../styles/auth.scss"

export function NewRoom() {

    const { user } = useAuth()

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="illustration showing examples of Q&amp;A " />
                <strong>Create live Q&amp;A room</strong>
                <p>Free from your doubts in real-time</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk Logo " />
                    <h1>Create a new room</h1>

                    <form>
                        <input
                            type="text"
                            placeholder="Room name"
                        />
                        <Button type="submit">
                            Create room
                        </Button>
                    </form>

                    <p>
                        Do you wanna join in an existing room? <Link to="/">Click here</Link>
                    </p>

                </div>
            </main>
        </div>
    )
}