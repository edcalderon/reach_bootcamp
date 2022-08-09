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
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      2: [ctc0],
      3: [ctc0, ctc0],
      4: [ctc0]
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
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v91 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:20:46:application',
    fs: ['at ./index.rsh:18:13:application call to [unknown function] (defined at: ./index.rsh:18:17:function exp)'],
    msg: 'getFingers',
    who: 'Alice'
    });
  const v92 = stdlib.protect(ctc0, await interact.getGuess(v91), {
    at: './index.rsh:21:43:application',
    fs: ['at ./index.rsh:18:13:application call to [unknown function] (defined at: ./index.rsh:18:17:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v91],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:29:9:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:29:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v93, v92],
    evt_cnt: 1,
    funcNum: 1,
    lct: v95,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:32:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
      
      ;
      const v101 = stdlib.addressEq(v93, v97);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
  ;
  const v101 = stdlib.addressEq(v93, v97);
  stdlib.assert(v101, {
    at: './index.rsh:32:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
  ;
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
  ;
  const v114 = stdlib.addressEq(v106, v110);
  stdlib.assert(v114, {
    at: './index.rsh:51:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v117 = stdlib.add(v94, v107);
  stdlib.protect(ctc1, await interact.seeWinning(v117), {
    at: './index.rsh:56:28:application',
    fs: ['at ./index.rsh:54:13:application call to [unknown function] (defined at: ./index.rsh:54:17:function exp)'],
    msg: 'seeWinning',
    who: 'Alice'
    });
  
  const txn5 = await (ctc.sendrecv({
    args: [v93, v117],
    evt_cnt: 1,
    funcNum: 4,
    lct: v112,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:59:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
      
      ;
      const v122 = stdlib.addressEq(v93, v118);
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
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
  ;
  const v122 = stdlib.addressEq(v93, v118);
  stdlib.assert(v122, {
    at: './index.rsh:59:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  let v127;
  const v128 = stdlib.eq(v98, v111);
  if (v128) {
    v127 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    }
  else {
    const v130 = stdlib.eq(v117, v98);
    if (v130) {
      v127 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
      }
    else {
      const v132 = stdlib.eq(v117, v111);
      if (v132) {
        v127 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      else {
        v127 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v127), {
    at: './index.rsh:89:28:application',
    fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v94], secs: v96, time: v95, didSend: v28, from: v93 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v34, from: v97 } = txn2;
  ;
  const v101 = stdlib.addressEq(v93, v97);
  stdlib.assert(v101, {
    at: './index.rsh:32:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v104 = stdlib.protect(ctc0, await interact.getFingers(), {
    at: './index.rsh:39:46:application',
    fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'getFingers',
    who: 'Bob'
    });
  const v105 = stdlib.protect(ctc0, await interact.getGuess(v104), {
    at: './index.rsh:40:42:application',
    fs: ['at ./index.rsh:36:13:application call to [unknown function] (defined at: ./index.rsh:36:17:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v93, v104],
    evt_cnt: 1,
    funcNum: 2,
    lct: v99,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v107], secs: v109, time: v108, didSend: v44, from: v106 } = txn3;
  ;
  const txn4 = await (ctc.sendrecv({
    args: [v93, v106, v105],
    evt_cnt: 1,
    funcNum: 3,
    lct: v108,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:9:decimal', stdlib.UInt_max, 0), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
      
      ;
      const v114 = stdlib.addressEq(v106, v110);
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v111], secs: v113, time: v112, didSend: v50, from: v110 } = txn4;
  ;
  const v114 = stdlib.addressEq(v106, v110);
  stdlib.assert(v114, {
    at: './index.rsh:51:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const txn5 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 4,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v119], secs: v121, time: v120, didSend: v60, from: v118 } = txn5;
  ;
  const v122 = stdlib.addressEq(v93, v118);
  stdlib.assert(v122, {
    at: './index.rsh:59:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  let v135;
  const v136 = stdlib.eq(v98, v111);
  if (v136) {
    v135 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    }
  else {
    const v137 = stdlib.add(v94, v107);
    const v138 = stdlib.eq(v137, v98);
    if (v138) {
      v135 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 2);
      }
    else {
      const v140 = stdlib.eq(v137, v111);
      if (v140) {
        v135 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 0);
        }
      else {
        v135 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
        }
      }
    }
  stdlib.protect(ctc1, await interact.seeOutcome(v135), {
    at: './index.rsh:89:28:application',
    fs: ['at ./index.rsh:87:11:application call to [unknown function] (defined at: ./index.rsh:87:23:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAFAAEEAgMmAgEAACI1ADEYQQHNKWRJIls1AYEIWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0klDEAAyUkhBAxAAIFJJAxAADEkEkQkNAESRDQESSISTDQCEhFEKGQ1A0k1BRc1/4AE+YuveDT/FlCwNAMxABJEQgERSCEENAESRDQESSISTDQCEhFEKGRJNQNXACA1/0k1BRc1/oAE1Axs1jT+FlCwNANXICAxABJENP8oSwFXACBnSCQ1ATIGNQJCAONIJTQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQUXNf6ABJdO9xc0/hZQsDT/MQBQKEsBVwBAZ0ghBDUBMgY1AkIAokkjDEAAQ0gjNAESRDQESSISTDQCEhFEKGRJNQM1/0k1BRc1/oAE1RUZFDT+FlCwNP8xABJENP8oSwFXACBnSCU1ATIGNQJCAFlIIjQBEkQ0BEkiEkw0AhIRREk1BRc1/4AEgsRh/jT/FlCwgaCNBogAbTEAKEsBVwAgZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iNQEiNQJC/8M0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 64,
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
                "name": "v94",
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
                "name": "v94",
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
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
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
                "internalType": "uint256",
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
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
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T3",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
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
                "name": "v107",
                "type": "uint256"
              }
            ],
            "internalType": "struct T6",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "v111",
                "type": "uint256"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
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
                "internalType": "uint256",
                "name": "v119",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000cd238038062000cd283398101604081905262000026916200019b565b6000805543600355604080518251815260208084015151908201527fd2fa1fac07e66d08cb46271d2f3a2585d9761d2d591a51cc30a2056942bc38db910160405180910390a16200007a34156007620000cb565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000c2929190620000f5565b5050506200027a565b81620000f15760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000103906200023d565b90600052602060002090601f01602090048101928262000127576000855562000172565b82601f106200014257805160ff191683800117855562000172565b8280016001018555821562000172579182015b828111156200017257825182559160200191906001019062000155565b506200018092915062000184565b5090565b5b8082111562000180576000815560010162000185565b6000818303604080821215620001b057600080fd5b80518082016001600160401b038082118383101715620001e057634e487b7160e01b600052604160045260246000fd5b818452865183526020601f1986011215620001fa57600080fd5b8351945060208501915084821081831117156200022757634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200025257607f821691505b602082108114156200027457634e487b7160e01b600052602260045260246000fd5b50919050565b610a48806200028a6000396000f3fe60806040526004361061006e5760003560e01c8063873779a11161004b578063873779a1146100c3578063a209ad4e146100d6578063ab53f2c6146100e9578063f4cedab01461010c57005b80631e93b0f11461007757806345f703961461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610880565b61011f565b3480156100ba57600080fd5b50600154610088565b6100756100d1366004610880565b6102b0565b6100756100e4366004610880565b610419565b3480156100f557600080fd5b506100fe610564565b6040516100929291906108a3565b61007561011a366004610880565b610601565b61012f600260005414600d61076d565b6101498135158061014257506001548235145b600e61076d565b60008080556002805461015b90610900565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610900565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610951565b6040805184358152602080860135908201529192507fa8de7fa57e96b1b344028051973cc20a5275cd64ccacf1c4ebc1e38bc2945cb6910160405180910390a16102383415600c61076d565b604080518082019091526000808252602082015281516001600160a01b0390811680835233602080850191825260036000554360015560408051918201939093529051909216908201526060015b604051602081830303815290604052600290805190602001906102aa929190610792565b50505050565b6102c0600160005414600a61076d565b6102da813515806102d357506001548235145b600b61076d565b6000808055600280546102ec90610900565b80601f016020809104026020016040519081016040528092919081815260200182805461031890610900565b80156103655780601f1061033a57610100808354040283529160200191610365565b820191906000526020600020905b81548152906001019060200180831161034857829003601f168201915b505050505080602001905181019061037d9190610951565b6040805184358152602080860135908201529192507f7df13b968ce0c210e3dcbfe64599eb5a3348cfa173e4eb2d8ee13c767a060b02910160405180910390a16103c93415600861076d565b80516103e1906001600160a01b03163314600961076d565b60408051602081019091526000815281516001600160a01b031680825260026000554360015560408051602081019290925201610286565b610429600460005414601561076d565b6104438135158061043c57506001548235145b601661076d565b60008080556002805461045590610900565b80601f016020809104026020016040519081016040528092919081815260200182805461048190610900565b80156104ce5780601f106104a3576101008083540402835291602001916104ce565b820191906000526020600020905b8154815290600101906020018083116104b157829003601f168201915b50505050508060200190518101906104e69190610951565b6040805184358152602080860135908201529192507f7d7741a24b17d1850d95beda5136388f520bc575ba9499f2f40fdfa7647ad82f910160405180910390a16105323415601361076d565b805161054a906001600160a01b03163314601461076d565b6000808055600181905561056090600290610816565b5050565b60006060600054600280805461057990610900565b80601f01602080910402602001604051908101604052809291908181526020018280546105a590610900565b80156105f25780601f106105c7576101008083540402835291602001916105f2565b820191906000526020600020905b8154815290600101906020018083116105d557829003601f168201915b50505050509050915091509091565b610611600360005414601161076d565b61062b8135158061062457506001548235145b601261076d565b60008080556002805461063d90610900565b80601f016020809104026020016040519081016040528092919081815260200182805461066990610900565b80156106b65780601f1061068b576101008083540402835291602001916106b6565b820191906000526020600020905b81548152906001019060200180831161069957829003601f168201915b50505050508060200190518101906106ce91906109a9565b6040805184358152602080860135908201529192507fb586755d90ded52ac0645858b09d27f42fbe59c32320b3b1d760dd0397cb5714910160405180910390a161071a3415600f61076d565b6020810151610735906001600160a01b03163314601061076d565b60408051602081019091526000815281516001600160a01b031680825260046000554360015560408051602081019290925201610286565b816105605760405163100960cb60e01b81526004810182905260240160405180910390fd5b82805461079e90610900565b90600052602060002090601f0160209004810192826107c05760008555610806565b82601f106107d957805160ff1916838001178555610806565b82800160010185558215610806579182015b828111156108065782518255916020019190600101906107eb565b50610812929150610853565b5090565b50805461082290610900565b6000825580601f10610832575050565b601f0160209004906000526020600020908101906108509190610853565b50565b5b808211156108125760008155600101610854565b60006040828403121561087a57600080fd5b50919050565b60006040828403121561089257600080fd5b61089c8383610868565b9392505050565b82815260006020604081840152835180604085015260005b818110156108d7578581018301518582016060015282016108bb565b818111156108e9576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061091457607f821691505b6020821081141561087a57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461094c57600080fd5b919050565b60006020828403121561096357600080fd5b6040516020810181811067ffffffffffffffff8211171561099457634e487b7160e01b600052604160045260246000fd5b6040526109a083610935565b81529392505050565b6000604082840312156109bb57600080fd5b6040516040810181811067ffffffffffffffff821117156109ec57634e487b7160e01b600052604160045260246000fd5b6040526109f883610935565b8152610a0660208401610935565b6020820152939250505056fea2646970667358221220bae1490bd08ac9ee763ef0392f2c00e9b3daa8fa4d23cf229847e3218ac2590164736f6c634300080c0033`,
  BytecodeLen: 3282,
  Which: `oD`,
  version: 6,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:30:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:50:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:53:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:60:15:after expr stmt semicolon',
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
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
