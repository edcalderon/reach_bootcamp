'reach 0.1';
const [isFortune, MONEY, HEALTH, DIE] = makeEnum(3)
const [isDesition, TRUE, FALSE] = makeEnum(2)

const Player = {
  ...hasRandom,
  informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    ...Player,
    amount: UInt,
    decide: Fun([UInt], UInt),
    deadline: UInt
  });
  const Bob = Participant('Bob', {
    ...Player,
    readFortune: Fun([], UInt)
  });
  init();
  Alice.only(() => {
    const amount = declassify(interact.amount)
    const deadline = declassify(interact.deadline)
  }
  )
  Alice.publish(amount, deadline)
    .pay(amount)
  commit();

  Bob.publish()
  
  var accepted = FALSE
  invariant(balance() == amount)
  while (accepted == FALSE) {
    commit()
    Bob.only(() => {
      const fortune = declassify(interact.readFortune())
    }
    )
    Bob.publish(fortune);
    commit()
    Alice.only(() => {
      const desition = declassify(interact.decide(fortune))
    })
    Alice.publish(desition)
    accepted = desition
    continue
  }

  transfer(amount).to(Bob);
  commit();
  exit();
});
