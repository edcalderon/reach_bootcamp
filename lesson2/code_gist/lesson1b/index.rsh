'reach 0.1';

const participant = {
   seePrice: Fun([], UInt),
   getDescription: Fun([], Bytes(1)),
};

export const main = Reach.App(() => {
  const Creator = Participant('Creator', {
    ...participant,
  });

  const Bidder = Participant('Bidder', {
    ...participant,
  });

  const Buyer = Participant('Buyer', {
    ...participant,
  });
  init();

  Bidder.only(() => {
    const price = declassify(interact.seePrice())
  })
  
  Bidder.publish(price)
  commit()

  Buyer.only(()=> {
    const description = declassify(interact.getDescription())
  })
  Buyer.publish(description)
  commit()
})