import { NavBar,  NoteUICollection} from './ui-components'
import { useState } from 'react'
function App() {
    const [showCreateModal, setShowCreateModal] = useState(false)
  const [showUpdateModal, setShowUpdateModal] = useState(false)
  const [updateNote, setUpdateNote] = useState()
  return (
    <>
    <NavBar width="100%" marginBottom='20px' />
     <div className='container'>
      <NoteUICollection />
      </div>
        
    </>
  );
}
export default App;
