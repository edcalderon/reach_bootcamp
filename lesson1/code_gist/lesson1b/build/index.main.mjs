// Automatically generated with Reach 0.1.9 (c449a2f7)
/* eslint-disable */
export const _version = '0.1.9';
export const _versionHash = '0.1.9 (c449a2f7)';
export const _backendVersion = 11;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  
  return {
    infos: {
      },
    views: {
      1: []
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Bidder(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const v49 = stdlib.protect(ctc0, await interact.seePrice(), {
    at: './index.rsh:23:47:application',
    fs: ['at ./index.rsh:22:14:application call to [unknown function] (defined at: ./index.rsh:22:18:function exp)'],
    msg: 'seePrice',
    who: 'Bidder'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v49],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:10:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:10:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Buyer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Buyer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Buyer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
  ;
  const v56 = stdlib.protect(ctc1, await interact.getDescription(), {
    at: './index.rsh:30:59:application',
    fs: ['at ./index.rsh:29:13:application call to [unknown function] (defined at: ./index.rsh:29:16:function exp)'],
    msg: 'getDescription',
    who: 'Buyer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v56],
    evt_cnt: 1,
    funcNum: 1,
    lct: v52,
    onlyIf: true,
    out_tys: [ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
      
      ;
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
export async function Creator(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Creator expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Creator expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, 1));
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v51], secs: v53, time: v52, didSend: v27, from: v50 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v58], secs: v60, time: v59, didSend: v36, from: v57 } = txn2;
  ;
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiACAAEmAQAiNQAxGEEA1ihkSSJbNQGBCFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAACUjEkQjNAESRDQESSISTDQCEhFESTUFNf+ABO52Pis0/1CwQgAzSCI0ARJENARJIhJMNAISEURJNQUXNf+ABILEYf40/xZQsIGgjQaIAGMjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 0,
  stateSize: 0,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v51",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes1",
                    "name": "elem0",
                    "type": "bytes1"
                  }
                ],
                "internalType": "struct T3",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes1",
                    "name": "elem0",
                    "type": "bytes1"
                  }
                ],
                "internalType": "struct T3",
                "name": "v58",
                "type": "tuple"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405161069338038061069383398101604081905261002291610174565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a1610074341560076100b2565b600160008181554390915560408051602080820184905282518083038201815291830190925280516100aa9260029201906100db565b50505061024d565b816100d75760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546100e790610212565b90600052602060002090601f016020900481019282610109576000855561014f565b82601f1061012257805160ff191683800117855561014f565b8280016001018555821561014f579182015b8281111561014f578251825591602001919060010190610134565b5061015b92915061015f565b5090565b5b8082111561015b5760008155600101610160565b600081830360408082121561018857600080fd5b80518082016001600160401b0380821183831017156101b757634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101d057600080fd5b8351945060208501915084821081831117156101fc57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061022657607f821691505b6020821081141561024757634e487b7160e01b600052602260045260246000fd5b50919050565b6104378061025c6000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063ab53f2c614610082578063ce7a5797146100a557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b34801561008e57600080fd5b506100976100b8565b6040516100649291906102fc565b6100476100b3366004610359565b610155565b6000606060005460028080546100cd90610371565b80601f01602080910402602001604051908101604052809291908181526020018280546100f990610371565b80156101465780601f1061011b57610100808354040283529160200191610146565b820191906000526020600020905b81548152906001019060200180831161012957829003601f168201915b50505050509050915091509091565b6101656001600054146009610281565b61017f8135158061017857506001548235145b600a610281565b60008080556002805461019190610371565b80601f01602080910402602001604051908101604052809291908181526020018280546101bd90610371565b801561020a5780601f106101df5761010080835404028352916020019161020a565b820191906000526020600020905b8154815290600101906020018083116101ed57829003601f168201915b505050505080602001905181019061022291906103a6565b90507fccaaba27869328d91026dfecaa19c464a9474cdfcf7c64915bc050e00edaa4d48260405161025391906103cf565b60405180910390a161026734156008610281565b6000808055600181905561027d906002906102a6565b5050565b8161027d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5080546102b290610371565b6000825580601f106102c2575050565b601f0160209004906000526020600020908101906102e091906102e3565b50565b5b808211156102f857600081556001016102e4565b5090565b82815260006020604081840152835180604085015260005b8181101561033057858101830151858201606001528201610314565b81811115610342576000606083870101525b50601f01601f191692909201606001949350505050565b60006040828403121561036b57600080fd5b50919050565b600181811c9082168061038557607f821691505b6020821081141561036b57634e487b7160e01b600052602260045260246000fd5b6000602082840312156103b857600080fd5b815180151581146103c857600080fd5b9392505050565b813581526040810160208301356001600160f81b031981168082146103f357600080fd5b80602085015250509291505056fea26469706673582212206532012c425296bb6be498baa9794192a63be1ac3f516e24fc0ad95bab3a2bb164736f6c634300080c0033`,
  BytecodeLen: 1683,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:27:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Bidder": Bidder,
  "Buyer": Buyer,
  "Creator": Creator
  };
export const _APIs = {
  };
