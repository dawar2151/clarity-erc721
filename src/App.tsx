import { Component } from "react";
import "./App.css";
import { displayName, userSession } from "./auth";
import ConnectWalletButton from "./components/connect-wallet-button";
import MintToken from "./components/mint-erc721-token";
import SignOutButton from "./components/sign-out-button";
import TopCounter from "./components/top-counter";

export default class App extends Component {
  componentDidMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData: any) => {
        window.history.replaceState({}, document.title, "/");
        this.setState({ userData: userData });
      });
    } else if (userSession.isUserSignedIn()) {
      this.setState({ userData: userSession.loadUserData() });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>ERC721 Minter</h1>
        </header>

        {userSession.isUserSignedIn() && (
          <div>
            Signed in as {displayName()} <SignOutButton />
          </div>
        )}
        {/*
        <h2>Top counter(Counter contract)</h2>
        <TopCounter />
        */}

        <h2>Mint(NFT Token)</h2>
        {!userSession.isUserSignedIn() ? (
          <ConnectWalletButton />
        ) : (
          <MintToken />
        )}
      </div>
    );
  }
}
