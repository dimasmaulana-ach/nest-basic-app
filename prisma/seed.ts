import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const jsonSeedRole = [
  {
    name: 'admin',
  },
  {
    name: 'CEO',
  },
  {
    name: 'CTO',
  },
  {
    name: 'COO',
  },
  {
    name: 'Manager',
  },
  {
    name: 'Supervisor',
  },
  {
    name: 'Employee',
  },
];

const jsonSeedUser = [
  {
    name: 'Ellison Hurst',
    email: 'ellisonhurst@cogentry.com',
    password: 'password',
    rolesId: 4,
  },
  {
    name: 'Abigail Leach',
    email: 'abigailleach@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Mosley Hernandez',
    email: 'mosleyhernandez@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Aurora Randolph',
    email: 'aurorarandolph@cogentry.com',
    password: 'password',
    rolesId: 5,
  },
  {
    name: 'Clarissa Vang',
    email: 'clarissavang@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Deidre Raymond',
    email: 'deidreraymond@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Dixon Valenzuela',
    email: 'dixonvalenzuela@cogentry.com',
    password: 'password',
    rolesId: 4,
  },
  {
    name: 'Carly Cooley',
    email: 'carlycooley@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Faye Stanley',
    email: 'fayestanley@cogentry.com',
    password: 'password',
    rolesId: 1,
  },
  {
    name: 'Dominique Morrow',
    email: 'dominiquemorrow@cogentry.com',
    password: 'password',
    rolesId: 1,
  },
  {
    name: 'Rodriquez Pruitt',
    email: 'rodriquezpruitt@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Oliver Humphrey',
    email: 'oliverhumphrey@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Merritt Farrell',
    email: 'merrittfarrell@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Franklin Goodman',
    email: 'franklingoodman@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Foster Lane',
    email: 'fosterlane@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Solis Farley',
    email: 'solisfarley@cogentry.com',
    password: 'password',
    rolesId: 1,
  },
  {
    name: 'Shepard Becker',
    email: 'shepardbecker@cogentry.com',
    password: 'password',
    rolesId: 3,
  },
  {
    name: 'Black Owen',
    email: 'blackowen@cogentry.com',
    password: 'password',
    rolesId: 4,
  },
  {
    name: 'Willis Deleon',
    email: 'willisdeleon@cogentry.com',
    password: 'password',
    rolesId: 2,
  },
  {
    name: 'Eugenia Perkins',
    email: 'eugeniaperkins@cogentry.com',
    password: 'password',
    rolesId: 5,
  },
];

const jsonPostSeed = [
  {
    title:
      'Pariatur mollit labore irure minim officia adipisicing irure excepteur tempor ullamco ex ut voluptate tempor. Id cillum est quis adipisicing cupidatat mollit ipsum adipisicing incididunt nisi minim ea aliqua eiusmod. Aliquip est velit sint velit ex ad est Lorem in amet deserunt. Deserunt laboris id voluptate minim. Fugiat sint cupidatat do ea irure cillum velit commodo proident.',
    content:
      'Magna nulla anim et labore ipsum velit. Velit veniam aute laborum in anim commodo est in Lorem excepteur nostrud. Officia minim velit nisi pariatur velit amet sint deserunt pariatur. Mollit in occaecat tempor eiusmod laboris incididunt Lorem id sunt minim cillum sint.\r\n',
    publised: true,
    authorId: 4,
  },
  {
    title:
      'Culpa aliqua quis proident minim labore. Nostrud nisi consequat aliqua cillum eiusmod esse do voluptate culpa nisi do. Voluptate irure ex adipisicing anim consectetur fugiat pariatur. Laborum sunt eu occaecat amet sit exercitation nulla minim id ea. Minim minim elit eu minim deserunt quis quis culpa sit deserunt.',
    content:
      'In pariatur consectetur commodo ut eiusmod ea mollit in ad non laboris. Voluptate ea non aliquip cupidatat enim tempor et sit. Magna amet nulla aliquip labore. Voluptate nulla commodo reprehenderit excepteur irure elit velit dolor proident enim quis in qui ut. Commodo ullamco proident esse ipsum laboris non mollit sunt veniam in pariatur.\r\n',
    publised: true,
    authorId: 3,
  },
  {
    title:
      'Laboris cupidatat ex dolor labore ea aute qui. Officia anim culpa deserunt tempor sit aliquip sint et dolor magna non nulla sit in. Veniam velit officia ipsum aliqua anim incididunt nulla quis. Excepteur laboris veniam ut elit consectetur culpa occaecat proident fugiat ea aute. Do culpa dolore ipsum proident aute id proident ullamco enim.',
    content:
      'Sit sit voluptate tempor exercitation dolor ut ullamco commodo tempor pariatur magna ea culpa. Excepteur laboris proident et esse. Enim nisi labore eu veniam nisi dolore reprehenderit fugiat commodo occaecat nostrud ex id Lorem. Laborum minim velit adipisicing laborum. Pariatur tempor et non qui veniam amet exercitation. Do laborum aliquip deserunt exercitation est. Elit cupidatat adipisicing nulla aute id consectetur adipisicing occaecat adipisicing velit sunt.\r\n',
    publised: false,
    authorId: 3,
  },
  {
    title:
      'Cupidatat ea nostrud enim enim aute. Ullamco adipisicing aute deserunt mollit fugiat ipsum nisi. Qui occaecat mollit voluptate dolor pariatur cillum velit incididunt in anim. Culpa eu in id enim labore consequat deserunt sit laboris ullamco incididunt. Cupidatat labore cillum officia aute exercitation eiusmod commodo cillum amet.',
    content:
      'Eiusmod cillum adipisicing elit nostrud do commodo ut et exercitation dolore fugiat. Exercitation deserunt incididunt duis eu veniam excepteur labore est sit officia. Cupidatat ullamco id esse labore sint occaecat voluptate dolore. Minim magna pariatur deserunt nisi laborum aute incididunt proident deserunt aute ad. Id est occaecat eiusmod consectetur esse deserunt mollit. Cillum aute laborum aliqua qui dolor deserunt do.\r\n',
    publised: false,
    authorId: 3,
  },
  {
    title:
      'Minim nostrud dolore id cillum. Tempor et consequat Lorem consequat excepteur sit. Voluptate consequat velit laborum in ipsum deserunt ipsum dolor elit. Reprehenderit minim dolor incididunt ipsum ea. Tempor quis ex id nulla elit culpa id veniam proident nostrud culpa aliqua.',
    content:
      'Irure cillum adipisicing culpa incididunt irure qui consectetur. In eiusmod magna pariatur elit ipsum. Duis non irure laborum irure Lorem reprehenderit consectetur eiusmod. Adipisicing culpa elit culpa sunt eiusmod pariatur id qui ea veniam commodo nostrud.\r\n',
    publised: true,
    authorId: 3,
  },
  {
    title:
      'Proident sunt eu do nisi sint. Eu consequat dolor occaecat amet commodo elit pariatur. Ex magna irure non qui velit ex pariatur ut. Adipisicing aliquip laboris dolor elit ex duis. Duis amet magna eiusmod do enim reprehenderit culpa amet aute.',
    content:
      'Aliqua Lorem ea ex sunt sint quis nostrud tempor ex nulla. Consectetur occaecat occaecat cupidatat Lorem sint mollit aute dolor fugiat voluptate sint. Do nisi Lorem sunt reprehenderit eu. Commodo sint ipsum irure esse nisi reprehenderit. Ut magna eiusmod id quis sunt labore deserunt officia excepteur veniam in aliqua. Proident laborum aute id proident quis culpa excepteur velit incididunt est fugiat consequat. Do officia Lorem non irure qui anim et officia mollit cupidatat in proident incididunt.\r\n',
    publised: false,
    authorId: 10,
  },
  {
    title:
      'Mollit non amet in ullamco ad qui enim est mollit cupidatat quis. In occaecat occaecat aliqua magna dolore proident sunt esse elit. Quis minim qui velit et aliquip cupidatat consequat ex. In cillum elit duis ut commodo deserunt minim duis commodo elit veniam. Officia esse aliquip excepteur excepteur ut tempor consequat quis adipisicing esse velit adipisicing occaecat incididunt.',
    content:
      'Proident voluptate dolor velit irure ut ex tempor cupidatat aute aliquip. Id nostrud amet non voluptate veniam aliqua reprehenderit non aliquip id. Culpa esse tempor incididunt tempor enim aute incididunt do sint tempor nulla dolore exercitation. Sunt cillum adipisicing sunt enim Lorem fugiat do aliquip adipisicing. Irure sunt laboris est esse ex. Sint nisi amet culpa fugiat velit pariatur anim laborum id et dolor aute aliqua. Mollit occaecat cupidatat reprehenderit magna non magna labore ipsum minim occaecat do ullamco.\r\n',
    publised: false,
    authorId: 1,
  },
  {
    title:
      'Incididunt ut voluptate consequat dolor cillum amet adipisicing minim occaecat fugiat eu magna. Fugiat ipsum dolore excepteur consectetur. Id sint consectetur adipisicing sunt. Culpa laboris excepteur cillum ex excepteur sit laborum et cupidatat. Nostrud occaecat non deserunt culpa ex cillum ullamco do labore consectetur.',
    content:
      'Eiusmod proident esse labore Lorem mollit cillum velit esse magna nisi enim ipsum. Laboris labore aute quis consequat exercitation cupidatat ut. Pariatur ea adipisicing pariatur anim.\r\n',
    publised: true,
    authorId: 16,
  },
  {
    title:
      'Ex sit commodo occaecat id nisi labore ea adipisicing eiusmod ipsum. Voluptate excepteur culpa laborum reprehenderit incididunt commodo occaecat dolor enim anim. Proident nisi commodo commodo nostrud dolore sunt commodo veniam dolore voluptate minim ex anim qui. Adipisicing fugiat consectetur voluptate aliquip culpa tempor elit ipsum aute do laborum. Mollit officia sit mollit reprehenderit velit esse laboris fugiat.',
    content:
      'Incididunt consectetur adipisicing proident excepteur. Do irure reprehenderit culpa ad laborum ullamco minim ad. Anim amet commodo amet reprehenderit enim eiusmod esse consequat cupidatat tempor aute officia. Do enim qui esse culpa minim proident qui dolor adipisicing dolore aliquip quis cupidatat. Adipisicing laborum dolore ut velit nisi voluptate dolor excepteur reprehenderit incididunt minim in nulla. Non nulla laborum amet laborum incididunt esse.\r\n',
    publised: false,
    authorId: 4,
  },
  {
    title:
      'Deserunt ex velit anim eiusmod ea commodo aliquip eu non deserunt. Culpa Lorem reprehenderit ullamco commodo reprehenderit minim amet cupidatat irure pariatur voluptate. Fugiat nisi qui enim magna est consectetur mollit labore cupidatat consequat proident ex aute amet. Amet pariatur culpa dolor cillum veniam duis elit officia et eu cupidatat sunt laboris. Laborum elit in ut Lorem excepteur et cupidatat ex voluptate sit consectetur.',
    content:
      'Sint eiusmod consectetur ut ad laborum nisi exercitation dolore incididunt nostrud mollit excepteur. Aute eiusmod quis magna pariatur nostrud aliquip quis. Minim anim esse in ex enim velit sit sint dolor. Quis voluptate duis do irure velit. Quis labore commodo sint quis tempor cillum excepteur aliquip commodo sunt deserunt quis ad. Mollit eu sint dolor laboris amet consectetur irure nisi ullamco qui officia. Ut elit fugiat adipisicing elit officia veniam nisi et aliqua.\r\n',
    publised: true,
    authorId: 6,
  },
];

async function seedRole() {
  jsonSeedRole.map(async (role) => {
    await prisma.role.create({
      data: {
        name: role.name,
      },
    });
  });
}

async function seedUser() {
  jsonSeedUser.map(async (user) => {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
        rolesId: user.rolesId,
      },
    });
  });
}

async function seedPost() {
  jsonPostSeed.map(async (post) => {
    await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        published: post.publised,
        authorId: post.authorId,
      },
    });
  });
}

async function seed() {
  // seedRole().then(() => {
  //   seedUser().then(() => {
  //     seedPost();
  //   });
  // });
  // await seedRole();
  // await seedUser();
  await seedPost();
}

async function main() {
  try {
    await seed();
  } catch (error) {
    console.error('Error running seeding script:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
