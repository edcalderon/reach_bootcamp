import React from 'react';
import AppViews from './views/AppViews.js';
import DeployerViews from './views/DeployerViews.js';
import AttacherViews from './views/AttacherViews.js';
import { renderDOM, renderView } from './views/render.js';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib, ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env.REACH_CONNECTOR_MODE);
reach.setWalletFallback(reach.walletFallback({ providerEnv: 'TestNet', MyAlgoConnect }));
const fingers = [0, 1, 2, 3, 4, 5];
const guess = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const { standardUnit } = reach;
const defaults = { defaultFundAmt: '10', defaultWager: '1', standardUnit };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: 'ConnectAccount', ...defaults };
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({ acc, bal });
    if (await reach.canFundFromFaucet()) {
      this.setState({ view: 'FundAccount' });
    } else {
      this.setState({ view: 'DeployerOrAttacher' });
    }
  }
  async fundAccount(fundAmount) {
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({ view: 'DeployerOrAttacher' });
  }
  async skipFundAccount() { this.setState({ view: 'DeployerOrAttacher' }); }
  selectAttacher() { this.setState({ view: 'Wrapper', ContentView: Attacher }); }
  selectDeployer() { this.setState({ view: 'Wrapper', ContentView: Deployer }); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  random() { return reach.hasRandom.random(); }
  async getFingers() {
    const playedFingers = await new Promise(resolveFingers => {
      this.setState({ view: 'GetFingers', playable: true, resolveFingers });
    });
    this.setState({ view: 'WaitingForResults', playedFingers });
    return fingers[playedFingers];
  }
  async getGuess() {
    const selectedguess = await new Promise(resolveGuess => {
      this.setState({ view: 'GetGuess', playable: true, resolveGuess });
    });
    this.setState({ view: 'WaitingForResults', selectedguess });
    return guess[selectedguess];
  }
  seeOutcome(i) { this.setState({ view: 'Done', outcome: intToOutcome[i] }); }
  informTimeout() { this.setState({ view: 'Timeout' }); }
  selectFingers(fingers) { this.state.resolveFingers(fingers); }
  makeGuess(guess) { this.state.resolveGuess(guess); }
}

class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'SetWager' };
  }
  setWager(wager) { this.setState({ view: 'Deploy', wager }); }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({ view: 'Deploying', ctc });
    this.wager = reach.parseCurrency(this.state.wager); // UInt
    this.deadline = { ETH: 10, ALGO: 100, CFX: 1000 }[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({ view: 'WaitingForAttacher', ctcInfoStr });
  }
  render() { return renderView(this, DeployerViews); }
}
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = { view: 'Attach' };
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({ view: 'Attaching' });
    backend.Bob(ctc, this);
  }
  async acceptWager(wagerAtomic) { // Fun([UInt], Null)
    const wager = reach.formatCurrency(wagerAtomic, 4);
    return new Promise(resolveAcceptedP => {
      this.setState({ view: 'AcceptTerms', wager, resolveAcceptedP });
    });
  }
  termsAccepted() {
    this.state.resolveAcceptedP();
    this.setState({ view: 'WaitingForTurn' });
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);
