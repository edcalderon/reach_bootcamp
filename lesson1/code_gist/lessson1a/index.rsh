'reach 0.1';

const participant = {
  getChallenge: Fun([], UInt),
  seeResult: Fun([UInt], Null),
};

export const main = Reach.App(() => {
  const Vanna = Participant('Vanna', {
    ...participant,
  });

  const Pat = Participant('Pat', {
    ...participant,
  });
  init();

  Vanna.only(() => {
    const challengePat = declassify(interact.getChallenge())
  })
  Vanna.publish(challengePat)
  commit()

  Pat.only(()=> {
    const challengeVanna = declassify(interact.getChallenge())
  })
  Pat.publish(challengeVanna)
  commit()
})