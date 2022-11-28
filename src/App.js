import React, { useState } from 'react';
import Modal from './components/Modal';
import AddNFT from './components/nft/AddNFT';
import ApproveSpender from './components/nft/ApproveSpender';
import Transfer from './components/nft/Transfer';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import contract from './appContract/contract'

function App() {
  const [show, setShow] = useState(false)
  const [showT, setShowT] = useState(false)
  const [showA, setShowA] = useState(false)


  console.log();

  const { address, isConnected } = useAccount()
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  return (
    <div className="p-6 flex space-y-4 flex-col items-center justify-center">
      <Modal close={() => setShow(false)} show={show} title='MINT'>
        <AddNFT close={() => setShow(false)} />
      </Modal>
      <Modal close={() => setShowT(false)} show={showT} title='TRANSFER'>
        <Transfer close={() => setShowT(false)} />
      </Modal>
      <Modal close={() => setShowA(false)} show={showA} title='APPROVE SPENDER'>
        <ApproveSpender close={() => setShowA(false)} />
      </Modal>
      <div className='flex flex-col md:flex-row sm:space-y-2 md:space-x-2'>
        <button onClick={() => setShow(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>MINT</button>
        <button onClick={() => setShowT(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>TRANSFER</button>
        <button onClick={() => setShowA(true)} className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold'>APPROVE SPENDER</button>
        <ConnectButton />
      </div>
      <div className='flex items-center space-y-2 flex-col'>
        <div>
          Connected to {address}
          <button className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold' onClick={() => disconnect()}>Disconnect</button>
        </div>
        <div>
          <button className='bg-sky-500 p-2 px-4 rounded-full text-white font-semibold' onClick={() => connect()}>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}

export default App;
