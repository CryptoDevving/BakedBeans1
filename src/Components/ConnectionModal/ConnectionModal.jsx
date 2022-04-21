import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Web3 from 'web3'
import Metamask from './metamask.svg'
import WalletConnect from './walletconnect.svg'
import { getRpc } from '../../utils/getRpc';
import { WalletConnectConnector, URI_AVAILABLE  } from '@web3-react/walletconnect-connector'


const Container = styled.div`
    height : 400px;
    width : 500px;
    background-color : white;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 999;
    border-radius: 12px;
    
    flex-direction: column;
    justify-content : space-around;
    align-items: center;
    padding : 5px;
    cursor : pointer;
    opacity : 1;
`

const Background = styled.div`
    position : fixed;
    width : 100%;
    height : 100%;
    background-color : black;
    z-index:    998;
    opacity : 0.6;
    overflow : hidden;
`;

const ProviderContainer = styled.div`
    height : 48%;
    width : 98%;
    border-radius: 12px;
    &:hover {
        background-color : #EEEEEE;
    }

    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const ProviderIcon = styled.img`
    width : 45px;
    padding : 10px 0px 10px 0px;
`

const ProviderBrand = styled.span`
    color : black;
    font-weight: 600;
    font-size : 24px;
`

const ProviderBrandDesc = styled.span`
    color : gray;
    font-weight : 400;
    font-size : 18px;
`


const ConnectionModal = (props) => {
    const { showModal, toggleModal, connectAccount } = props;
    const { connector, activate, active, account } = useWeb3React();
    const connectProvider = async (provider) => {
        const rpcUri = getRpc();
        if(provider === 'metamask') {
            if(window.ethereum) {
                console.log('metamask requested')
                const accounts = await window.ethereum.request({method:'eth_requestAccounts'})
                connectAccount(accounts[0])
                toggleModal()
            } else {
                console.error('metamask not found')
            }
        } else if(provider ==='walletconnect') {
            console.log('wallet connect')

            const walletconnect = new WalletConnectConnector({ rpc: { 56: rpcUri } })
                walletconnect.on(URI_AVAILABLE, uri => {
                  console.log(uri)
                })

            toggleModal()
        } else {
            console.error('provider not found')
        }
    }
    return (
        <>
        <Background style={showModal ? {display : 'flex'} : {display : 'none'}} onClick={toggleModal}/>


        <Container style={showModal ? {display : 'flex'} : {display : 'none'}}>
            <ProviderContainer onClick={async () => await connectProvider('metamask')}>
                <ProviderIcon src={Metamask} />
                <ProviderBrand>
                    MetaMask
                </ProviderBrand>
                <ProviderBrandDesc>
                    Connect to your MetaMask wallet
                </ProviderBrandDesc>
            </ProviderContainer>
            <ProviderContainer onClick={() => connectProvider('walletconnect')}>
                <ProviderIcon src={WalletConnect} />
                <ProviderBrand>
                    WalletConnect
                </ProviderBrand>
                <ProviderBrandDesc>
                    Scan with WalletConnect to connect
                </ProviderBrandDesc>
            </ProviderContainer>
        </Container>
        </>
    )
}

export default ConnectionModal;