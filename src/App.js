import React, { useState } from 'react';
import Modal from './components/Modal';
import AddNFT from './components/nft/AddNFT';
import ApproveSpender from './components/nft/ApproveSpender';
import Transfer from './components/nft/Transfer';

function App() {
  const [show, setShow] = useState(false)
  const [showT, setShowT] = useState(false)
  const [showA, setShowA] = useState(false)
  return (
    <div className="p-6 flex justify-center">
      <Modal close={() => setShow(false)} show={show} title='MINT'>
        <AddNFT close={() => setShow(false)} />
      </Modal>
      <Modal close={() => setShowT(false)} show={showT} title='TRANSFER'>
        <Transfer close={() => setShowT(false)}/>
      </Modal>
      <Modal close={() => setShowA(false)} show={showA} title='APPROVE SPENDER'>
        <ApproveSpender close={() => setShowA(false)}/>
      </Modal>
      <div className='flex space-x-2'>
        <button onClick={() => setShow(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>MINT</button>
        <button onClick={() => setShowT(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>TRANSFER</button>
        <button onClick={() => setShowA(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>APPROVE SPENDER</button>
      </div>
    </div>
  );
}

export default App;
