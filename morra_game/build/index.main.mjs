// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Null;
  
  
  const v313 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v314 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v314, v313],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:57:5:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v314, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v318, v319], secs: v321, time: v320, didSend: v77, from: v317 } = txn1;
      
      sim_r.txns.push({
        amt: v318,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v330 = stdlib.safeAdd(v320, v319);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v318, v319], secs: v321, time: v320, didSend: v77, from: v317 } = txn1;
  ;
  const v330 = stdlib.safeAdd(v320, v319);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v330],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v317, v318, v319, v330],
      evt_cnt: 0,
      funcNum: 2,
      lct: v320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v470, time: v469, didSend: v256, from: v468 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v317,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v470, time: v469, didSend: v256, from: v468 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:47:29:application',
      fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:62:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v336, time: v335, didSend: v86, from: v334 } = txn2;
    const v338 = stdlib.add(v318, v318);
    ;
    let v339 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v340 = v335;
    let v347 = v338;
    
    while (await (async () => {
      const v355 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v355;})()) {
      const v362 = stdlib.safeAdd(v340, v319);
      const v366 = stdlib.protect(ctc0, await interact.getFingers(), {
        at: './index.rsh:70:44:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'getFingers',
        who: 'Alice'
        });
      const v367 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:71:40:application',
        fs: ['at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v368 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:72:62:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v369 = stdlib.digest([ctc0, ctc0], [v368, v366]);
      const v371 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:73:58:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:69:11:application call to [unknown function] (defined at: ./index.rsh:69:15:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v372 = stdlib.digest([ctc0, ctc0], [v371, v367]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v317, v318, v319, v334, v347, v362, v369, v372],
        evt_cnt: 2,
        funcNum: 4,
        lct: v340,
        onlyIf: true,
        out_tys: [ctc1, ctc1],
        pay: [stdlib.checkedBigNumberify('./index.rsh:77:7:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v375, v376], secs: v378, time: v377, didSend: v118, from: v374 } = txn3;
          
          ;
          const v386 = stdlib.safeAdd(v377, v319);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v362],
        tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v317, v318, v319, v334, v347, v362],
          evt_cnt: 0,
          funcNum: 5,
          lct: v340,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v439, time: v438, didSend: v210, from: v437 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v334,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v439, time: v438, didSend: v210, from: v437 } = txn4;
        ;
        const v440 = stdlib.addressEq(v317, v437);
        const v441 = stdlib.addressEq(v334, v437);
        const v442 = v440 ? true : v441;
        stdlib.assert(v442, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:90:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:47:29:application',
          fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:77:90:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v375, v376], secs: v378, time: v377, didSend: v118, from: v374 } = txn3;
        ;
        const v379 = stdlib.addressEq(v317, v374);
        stdlib.assert(v379, {
          at: './index.rsh:77:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v386 = stdlib.safeAdd(v377, v319);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v386],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v317, v318, v319, v334, v347, v375, v376, v386],
            evt_cnt: 0,
            funcNum: 7,
            lct: v377,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v421, time: v420, didSend: v176, from: v419 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v317,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc1, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v421, time: v420, didSend: v176, from: v419 } = txn5;
          ;
          const v422 = stdlib.addressEq(v317, v419);
          const v423 = stdlib.addressEq(v334, v419);
          const v424 = v422 ? true : v423;
          stdlib.assert(v424, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:88:78:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:47:29:application',
            fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:88:78:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v393, v394], secs: v396, time: v395, didSend: v130, from: v392 } = txn4;
          ;
          const v397 = stdlib.addressEq(v334, v392);
          stdlib.assert(v397, {
            at: './index.rsh:88:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const txn5 = await (ctc.sendrecv({
            args: [v317, v318, v319, v334, v347, v375, v376, v393, v394, v368, v371, v366, v367],
            evt_cnt: 4,
            funcNum: 8,
            lct: v395,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:98:7:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v142, from: v400 } = txn5;
              
              ;
              const v412 = stdlib.safeAdd(v403, v393);
              const v413 = stdlib.eq(v412, v404);
              const v414 = stdlib.eq(v412, v394);
              const v415 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
              const v417 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
              const v418 = v413 ? v415 : v417;
              const cv339 = v418;
              const cv340 = v405;
              const cv347 = v347;
              
              await (async () => {
                const v339 = cv339;
                const v340 = cv340;
                const v347 = cv347;
                
                if (await (async () => {
                  const v355 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                  
                  return v355;})()) {
                  const v362 = stdlib.safeAdd(v340, v319);
                  sim_r.isHalt = false;
                  }
                else {
                  const v455 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:12:decimal', stdlib.UInt_max, '2'), v318);
                  const v456 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                  const v457 = v456 ? v317 : v334;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v457,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: undefined /* mto */,
            tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc1, ctc1, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v142, from: v400 } = txn5;
          ;
          const v407 = stdlib.addressEq(v317, v400);
          stdlib.assert(v407, {
            at: './index.rsh:98:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v408 = stdlib.digest([ctc0, ctc0], [v401, v403]);
          const v409 = stdlib.digestEq(v375, v408);
          stdlib.assert(v409, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v410 = stdlib.digest([ctc0, ctc0], [v402, v404]);
          const v411 = stdlib.digestEq(v376, v410);
          stdlib.assert(v411, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Alice'
            });
          const v412 = stdlib.safeAdd(v403, v393);
          const v413 = stdlib.eq(v412, v404);
          const v414 = stdlib.eq(v412, v394);
          const v415 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v417 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v418 = v413 ? v415 : v417;
          const cv339 = v418;
          const cv340 = v405;
          const cv347 = v347;
          
          v339 = cv339;
          v340 = cv340;
          v347 = cv347;
          
          continue;
          
          }
        
        }
      
      }
    const v455 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:12:decimal', stdlib.UInt_max, '2'), v318);
    const v456 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v457 = v456 ? v317 : v334;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v339), {
      at: './index.rsh:111:24:application',
      fs: ['at ./index.rsh:110:7:application call to [unknown function] (defined at: ./index.rsh:110:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v318, v319], secs: v321, time: v320, didSend: v77, from: v317 } = txn1;
  ;
  const v330 = stdlib.safeAdd(v320, v319);
  stdlib.protect(ctc1, await interact.acceptWager(v318), {
    at: './index.rsh:60:25:application',
    fs: ['at ./index.rsh:59:9:application call to [unknown function] (defined at: ./index.rsh:59:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v317, v318, v319, v330],
    evt_cnt: 0,
    funcNum: 1,
    lct: v320,
    onlyIf: true,
    out_tys: [],
    pay: [v318, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v336, time: v335, didSend: v86, from: v334 } = txn2;
      
      const v338 = stdlib.add(v318, v318);
      sim_r.txns.push({
        amt: v318,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v339 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v340 = v335;
      const v347 = v338;
      
      if (await (async () => {
        const v355 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v355;})()) {
        const v362 = stdlib.safeAdd(v340, v319);
        sim_r.isHalt = false;
        }
      else {
        const v455 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:12:decimal', stdlib.UInt_max, '2'), v318);
        const v456 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v457 = v456 ? v317 : v334;
        sim_r.txns.push({
          kind: 'from',
          to: v457,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v330],
    tys: [ctc3, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v317, v318, v319, v330],
      evt_cnt: 0,
      funcNum: 2,
      lct: v320,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v470, time: v469, didSend: v256, from: v468 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v317,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc3, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v470, time: v469, didSend: v256, from: v468 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:47:29:application',
      fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:62:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v336, time: v335, didSend: v86, from: v334 } = txn2;
    const v338 = stdlib.add(v318, v318);
    ;
    let v339 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v340 = v335;
    let v347 = v338;
    
    while (await (async () => {
      const v355 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v355;})()) {
      const v362 = stdlib.safeAdd(v340, v319);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v362],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v317, v318, v319, v334, v347, v362],
          evt_cnt: 0,
          funcNum: 5,
          lct: v340,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v439, time: v438, didSend: v210, from: v437 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v334,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v439, time: v438, didSend: v210, from: v437 } = txn4;
        ;
        const v440 = stdlib.addressEq(v317, v437);
        const v441 = stdlib.addressEq(v334, v437);
        const v442 = v440 ? true : v441;
        stdlib.assert(v442, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:77:90:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:47:29:application',
          fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:77:90:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v375, v376], secs: v378, time: v377, didSend: v118, from: v374 } = txn3;
        ;
        const v379 = stdlib.addressEq(v317, v374);
        stdlib.assert(v379, {
          at: './index.rsh:77:7:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v386 = stdlib.safeAdd(v377, v319);
        const v390 = stdlib.protect(ctc0, await interact.getFingers(), {
          at: './index.rsh:85:54:application',
          fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
          msg: 'getFingers',
          who: 'Bob'
          });
        const v391 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:86:50:application',
          fs: ['at ./index.rsh:84:11:application call to [unknown function] (defined at: ./index.rsh:84:15:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v317, v318, v319, v334, v347, v375, v376, v386, v390, v391],
          evt_cnt: 2,
          funcNum: 6,
          lct: v377,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:88:7:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v393, v394], secs: v396, time: v395, didSend: v130, from: v392 } = txn4;
            
            ;
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v386],
          tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v317, v318, v319, v334, v347, v375, v376, v386],
            evt_cnt: 0,
            funcNum: 7,
            lct: v377,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v421, time: v420, didSend: v176, from: v419 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v317,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc3, ctc0, ctc0, ctc3, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v421, time: v420, didSend: v176, from: v419 } = txn5;
          ;
          const v422 = stdlib.addressEq(v317, v419);
          const v423 = stdlib.addressEq(v334, v419);
          const v424 = v422 ? true : v423;
          stdlib.assert(v424, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:88:78:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:47:29:application',
            fs: ['at ./index.rsh:46:9:application call to [unknown function] (defined at: ./index.rsh:46:21:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:45:28:function exp)', 'at ./index.rsh:88:78:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v393, v394], secs: v396, time: v395, didSend: v130, from: v392 } = txn4;
          ;
          const v397 = stdlib.addressEq(v334, v392);
          stdlib.assert(v397, {
            at: './index.rsh:88:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: undefined /* mto */,
            waitIfNotPresent: false
            }));
          const {data: [v401, v402, v403, v404], secs: v406, time: v405, didSend: v142, from: v400 } = txn5;
          ;
          const v407 = stdlib.addressEq(v317, v400);
          stdlib.assert(v407, {
            at: './index.rsh:98:7:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v408 = stdlib.digest([ctc0, ctc0], [v401, v403]);
          const v409 = stdlib.digestEq(v375, v408);
          stdlib.assert(v409, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:99:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v410 = stdlib.digest([ctc0, ctc0], [v402, v404]);
          const v411 = stdlib.digestEq(v376, v410);
          stdlib.assert(v411, {
            at: 'reach standard library:69:17:application',
            fs: ['at ./index.rsh:100:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
            msg: null,
            who: 'Bob'
            });
          const v412 = stdlib.safeAdd(v403, v393);
          const v413 = stdlib.eq(v412, v404);
          const v414 = stdlib.eq(v412, v394);
          const v415 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v417 = v414 ? stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0') : stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
          const v418 = v413 ? v415 : v417;
          const cv339 = v418;
          const cv340 = v405;
          const cv347 = v347;
          
          v339 = cv339;
          v340 = cv340;
          v347 = cv347;
          
          continue;
          
          }
        
        }
      
      }
    const v455 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:105:12:decimal', stdlib.UInt_max, '2'), v318);
    const v456 = stdlib.eq(v339, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v457 = v456 ? v317 : v334;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v339), {
      at: './index.rsh:111:24:application',
      fs: ['at ./index.rsh:110:7:application call to [unknown function] (defined at: ./index.rsh:110:19:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiANAAEIBSACUAcomAEJWDAmAwEAAQEAIjUAMRhBBIAqZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJJQxAAg9JIQcMQAENSSQMQACzJBJEIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/STUFSUoiWzX+JFs1/YEQWzX8gRhbNfuABH+iO1I0/hZQNP0WUDT8FlA0+xZQsDT/MQASRDQDV1ggNP4WNPwWUAESRDQDV3ggNP0WNPsWUAESRDT8NAMhCVsISTX6NAOBoAFbEjX5NP80AyEEWzQDIQhbNANXMCAjIjT5TSEFIzT5TTT6NPsSTTIGNAMhBltCAuNIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhCVsPRDT/MQASNANXMCAxABIRRLEisgE0AyEGW7III7IQNP+yB7NCAvBJgQYMQACkSCEHNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSkpJVwAgNf8hBFs1/iEIWzX9VzAgNfwhBls1+1dYIDX6V3ggNflJNQVJIls1+CRbNfeABEohy/w0+BZQNPcWULAyBjQDIQlbDEQ0/DEAEkQ0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlA09xZQKEsBVwB/ZylLAVd/KWdIIQo1ATIGNQJCAmBIJTQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDIQZbsggjshA0/7IHs0IB9UkhBQxAAOBJgQQMQACYSCU0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQRbNf4hCFs1/VcwIDX8IQZbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQtbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQc1ATIGNQJCAWohBRJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyEMWw9EsSKyATQDIQRbsggjshA0A1cAILIHs0IBDkkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBFs1/4AEmouRdLAyBjQDIQxbDEQ0/4gBRTQDVwAgNP80AyEIWzEAIzIGNP9JCEIAX0iBoI0GiAElIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAD1MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB8Nf81/jX9Nfw1+zX6Nfk0/SMSQQAuNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIJTUBMgY1AkIAObEisgEhBTT6C7III7IQNPw0+TT9IQUSTbIHs0IAADEZJRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 168,
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
                "name": "v318",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v319",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v318",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v319",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v376",
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
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v393",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
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
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
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
                "name": "v375",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v376",
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
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
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
                "name": "v393",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v394",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
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
                "name": "v401",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v402",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v403",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v404",
                "type": "uint256"
              }
            ],
            "internalType": "struct T15",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T16",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001be138038062001be18339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b611864806200037d6000396000f3fe60806040526004361061008f5760003560e01c80638e314769116100565780638e3147691461010a578063ab53f2c61461011d578063bf2c5b2414610140578063cc923b2914610153578063ebdbfdcc1461016657005b80631e93b0f11461009857806321642639146100bc5780632c10a159146100cf5780637eea518c146100e257806383230757146100f557005b3661009657005b005b3480156100a457600080fd5b506003545b6040519081526020015b60405180910390f35b6100966100ca3660046113e2565b610179565b6100966100dd366004611405565b610427565b6100966100f0366004611405565b6105b6565b34801561010157600080fd5b506001546100a9565b610096610118366004611405565b610734565b34801561012957600080fd5b506101326108cf565b6040516100b3929190611417565b61009661014e366004611405565b61096c565b610096610161366004611474565b610b03565b6100966101743660046113e2565b610dbf565b610189600760005414601c61105b565b6101a38135158061019c57506001548235145b601d61105b565b6000808055600280546101b590611486565b80601f01602080910402602001604051908101604052809291908181526020018280546101e190611486565b801561022e5780601f106102035761010080835404028352916020019161022e565b820191906000526020600020905b81548152906001019060200180831161021157829003601f168201915b5050505050806020019051810190610246919061150f565b90506102598160e001514310601e61105b565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f338360405161028a9291906115bb565b60405180910390a161029e3415601a61105b565b60608101516102b9906001600160a01b03163314601b61105b565b61031a60405180610120016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b81516001600160a01b0390811682526020808401518184015260408085015181850152606080860151909316928401929092526080808501519084015260a0808501519084015260c080850151908401528481013560e08401528482013561010084015260096000554360015590516103fd9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061042192919061129b565b50505050565b610437600160005414600961105b565b6104518135158061044a57506001548235145b600a61105b565b60008080556002805461046390611486565b80601f016020809104026020016040519081016040528092919081815260200182805461048f90611486565b80156104dc5780601f106104b1576101008083540402835291602001916104dc565b820191906000526020600020905b8154815290600101906020018083116104bf57829003601f168201915b50505050508060200190518101906104f491906115ec565b905061050781606001514310600b61105b565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13383604051610538929190611665565b60405180910390a161055181602001513414600861105b565b61055961131f565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516001905251439201919091525180016020820151604001526105b181611081565b505050565b6105c6600160005414600d61105b565b6105e0813515806105d957506001548235145b600e61105b565b6000808055600280546105f290611486565b80601f016020809104026020016040519081016040528092919081815260200182805461061e90611486565b801561066b5780601f106106405761010080835404028352916020019161066b565b820191906000526020600020905b81548152906001019060200180831161064e57829003601f168201915b505050505080602001905181019061068391906115ec565b90506106978160600151431015600f61105b565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106c8929190611665565b60405180910390a16106dc3415600c61105b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b506000808055600181905561073090600290611378565b5050565b610744600560005414601761105b565b61075e8135158061075757506001548235145b601861105b565b60008080556002805461077090611486565b80601f016020809104026020016040519081016040528092919081815260200182805461079c90611486565b80156107e95780601f106107be576101008083540402835291602001916107e9565b820191906000526020600020905b8154815290600101906020018083116107cc57829003601f168201915b505050505080602001905181019061080191906116a2565b90506108158160a00151431015601961105b565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051610846929190611665565b60405180910390a161085a3415601561105b565b805161088e906001600160a01b031633146108845760608201516001600160a01b03163314610887565b60015b601661105b565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f19350505050158015610719573d6000803e3d6000fd5b6000606060005460028080546108e490611486565b80601f016020809104026020016040519081016040528092919081815260200182805461091090611486565b801561095d5780601f106109325761010080835404028352916020019161095d565b820191906000526020600020905b81548152906001019060200180831161094057829003601f168201915b50505050509050915091509091565b61097c600760005414602161105b565b6109968135158061098f57506001548235145b602261105b565b6000808055600280546109a890611486565b80601f01602080910402602001604051908101604052809291908181526020018280546109d490611486565b8015610a215780601f106109f657610100808354040283529160200191610a21565b820191906000526020600020905b815481529060010190602001808311610a0457829003601f168201915b5050505050806020019051810190610a39919061150f565b9050610a4d8160e00151431015602361105b565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a7e929190611665565b60405180910390a1610a923415601f61105b565b8051610ac6906001600160a01b03163314610abc5760608201516001600160a01b03163314610abf565b60015b602061105b565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610719573d6000803e3d6000fd5b610b13600960005414602861105b565b610b2d81351580610b2657506001548235145b602961105b565b600080805560028054610b3f90611486565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6b90611486565b8015610bb85780601f10610b8d57610100808354040283529160200191610bb8565b820191906000526020600020905b815481529060010190602001808311610b9b57829003601f168201915b5050505050806020019051810190610bd09190611736565b6040805180820182526000808252602080830191909152825133815286358183015290860135818401529185013560608084019190915285013560808084019190915285013560a08301529192507fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c573415602461105b565b8151610c6f906001600160a01b03163314602561105b565b604051610cbc90610c96906020808701359160608801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661105b565b60408051848201356020820152608085013591810191909152610d02906060016040516020818303038152906040528051906020012060001c8360c0015114602761105b565b610d1783602001604001358360e001516111e9565b808252610100830151146020820152610d2e61131f565b825181516001600160a01b039182169052602080850151835190910152604080850151835190910152606080850151835192169101528151608085013514610d87578160200151610d80576001610d9a565b6000610d9a565b8160200151610d97576002610d9a565b60015b6020808301805192909252815143910152608084015190516040015261042181611081565b610dcf600560005414601261105b565b610de981351580610de257506001548235145b601361105b565b600080805560028054610dfb90611486565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2790611486565b8015610e745780601f10610e4957610100808354040283529160200191610e74565b820191906000526020600020905b815481529060010190602001808311610e5757829003601f168201915b5050505050806020019051810190610e8c91906116a2565b9050610ea46040518060200160405280600081525090565b610eb58260a001514310601461105b565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a3384604051610ee69291906115bb565b60405180910390a1610efa3415601061105b565b8151610f12906001600160a01b03163314601161105b565b610f204383604001516111e9565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516110309183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6040516020818303038152906040526002908051906020019061105492919061129b565b5050505050565b816107305760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60408051602081019091526000815260208201515160011415611186576110b88260200151602001518360000151604001516111e9565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016103fd565b60208201515160021461119e578151606001516111a2565b8151515b6001600160a01b03166108fc6111c1600285600001516020015161123c565b6040518115909202916000818181858888f19350505050158015610719573d6000803e3d6000fd5b6000826111f683826117d5565b91508110156112365760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401611078565b92915050565b60008115806112605750828261125281836117ed565b925061125e908361180c565b145b6112365760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401611078565b8280546112a790611486565b90600052602060002090601f0160209004810192826112c9576000855561130f565b82601f106112e257805160ff191683800117855561130f565b8280016001018555821561130f579182015b8281111561130f5782518255916020019190600101906112f4565b5061131b9291506113b5565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161137360405180606001604052806000815260200160008152602001600081525090565b905290565b50805461138490611486565b6000825580601f10611394575050565b601f0160209004906000526020600020908101906113b291906113b5565b50565b5b8082111561131b57600081556001016113b6565b6000606082840312156113dc57600080fd5b50919050565b6000606082840312156113f457600080fd5b6113fe83836113ca565b9392505050565b6000604082840312156113dc57600080fd5b82815260006020604081840152835180604085015260005b8181101561144b5785810183015185820160600152820161142f565b8181111561145d576000606083870101525b50601f01601f191692909201606001949350505050565b600060a082840312156113dc57600080fd5b600181811c9082168061149a57607f821691505b602082108114156113dc57634e487b7160e01b600052602260045260246000fd5b604051610120810167ffffffffffffffff811182821017156114ed57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461150a57600080fd5b919050565b600061010080838503121561152357600080fd5b6040519081019067ffffffffffffffff8211818310171561155457634e487b7160e01b600052604160045260246000fd5b81604052611561846114f3565b81526020840151602082015260408401516040820152611583606085016114f3565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152608081016113fe60208301848035825260208082013590830152604090810135910152565b6000608082840312156115fe57600080fd5b6040516080810181811067ffffffffffffffff8211171561162f57634e487b7160e01b600052604160045260246000fd5b60405261163b836114f3565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461169357600080fd5b80604085015250509392505050565b600060c082840312156116b457600080fd5b60405160c0810181811067ffffffffffffffff821117156116e557634e487b7160e01b600052604160045260246000fd5b6040526116f1836114f3565b81526020830151602082015260408301516040820152611713606084016114f3565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610120828403121561174957600080fd5b6117516114bb565b61175a836114f3565b8152602083015160208201526040830151604082015261177c606084016114f3565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082198211156117e8576117e86117bf565b500190565b6000816000190483118215151615611807576118076117bf565b500290565b60008261182957634e487b7160e01b600052601260045260246000fd5b50049056fea264697066735822122083cd7e3bfe935948348dab130780cee4595052c6ed2019ee2429e1164a4b52dc64736f6c634300080c0033`,
  BytecodeLen: 7137,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:58:3:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:62:61:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:106:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:68:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:77:90:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:80:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:88:78:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:91:5:after expr stmt',
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
