import { ChatEngine } from "react-chat-engine";


import ChatFeed from './components/ChatFeed';
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
            height="100vh"
            projectID="0c5ce4fd-6236-48dd-8a22-e29c32b46f31"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;