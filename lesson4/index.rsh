'reach 0.1';

const Player = {
  getHand: Fun([], UInt),
  seeOutcome: Fun([UInt], Null),
  informTimeout: Fun()
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    wager: UInt,
    deadline: UInt,
  });

  const Eve = Participant('Eve', {
    ...Player,
    acceptWager: Fun([UInt], Null),
  });
  init();

  const informTimeout = () => {
      each([Alice, Bob], () => {
        interact.informTimeout()
      });
  }

  Alice.only(() => {
    const wager = declassify(interact.wager);
    const handAlice = declassify(interact.getHand())
  })

  Alice.publish(wager, handAlice).pay(wager)
  commit();

  Eve.only(()=> {
    interact.acceptWager(wager);
    timeout(relativeTime(deadline), ()=> closeTo(Alice, informTimeout()))

  })
  Eve.publish().pay(wager)
  
  
  transfer(forAlice * wager).to(Alice)
  commit()

  each([Alice, Eve], () => {
    interact.seeOutcome(outCome)
  })

})