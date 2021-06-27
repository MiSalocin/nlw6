import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button'

import "../styles/auth.scss"
import { useAuth } from '../hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom() {
        if (!user)
            await signInWithGoogle()

        history.push('/rooms/new')
    }

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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Google Logo " />
                        Create your own room
                    </button>
                    <div className="separator">or enter in a room</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Enter room code"
                        />
                        <Button type="submit">
                            Enter in the room
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}