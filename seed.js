const { green, red } = require('chalk');
const { db, Goods,Users } = require('./server/db');

const good1 = {
    name: 'Magnus The Red',
    total_amount: 6,
    price: 131.99,
    description: 'Magnus the Red (Also known as the Crimson King, the Sorcerer-King, Cyclopean Magnus or the Red Cyclops) is the Primarch of the Thousand Sons Chaos Space Marine legion. ',
    imgUrl:"data:image/jpeg;base64,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"
}

const good2={
  name: 'Horus The Warmaster',
    total_amount: 2,
    price: 199,
    description: 'Horus, also called Horus Lupercal, or more simply The Lupercal during his lifetime by the Astartes of his Luna Wolves Legion, was one of the 20 genetically-engineered Primarchs created by the Emperor of Mankind from the foundation of His own DNA before the start of the Great Crusade to lead the armies of the newborn Imperium of Man.',
    imgUrl:'https://rustymagos.files.wordpress.com/2015/09/horus1.jpg'
}

const good3={
  name: 'Sanguinius',
    total_amount: 4,
    price: 267.70,
    description: 'Sanguinius, also known as the "Great Angel" and the "Brightest One" during his lifetime, was the Primarch of the Blood Angels Legion of Space Marines. He was killed during the climax of the Horus Heresy at the Battle of Terra defending the Emperor of Mankind from the Warmaster Horus aboard his flagship, the Battle Barge Vengeful Spirit.',
    imgUrl: 'https://i.etsystatic.com/22715570/r/il/3f9193/2345945189/il_794xN.2345945189_c2j9.jpg'
}

const user1={
  email:'alex@mail.com',
  password:1234
}

const seed =async()=>{
    try{
        await db.sync({force:true});
        const g1=await Goods.create(good1);
        await Goods.create(good2);
        await Goods.create(good3);
        const u1=await Users.create(user1);
        await g1.addUser(u1);
    }catch(err){
        console.log(red(err));
    }
}

module.exports = seed;

if (require.main === module) {
    seed()
      .then(() => {
        console.log(green('Seeding success!'));
        //db.close();
      })
      .catch((err) => {
        console.error(red('Oh noes! Something went wrong!'));
        console.error(err);
        db.close();
      });
  }