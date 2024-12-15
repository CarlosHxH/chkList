import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await hash("admin", 12);
  const user = await prisma.user.upsert({
    where: { email: "admin@admin.com" },
    update: {},
    create: {
      email: "admin@admin.com",
      name: "Admin",
      password,
    },
  });
  console.log({ user });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });



/*
const userData: Prisma.UserCreateInput[] = [
  {
    name: "Alice",
    email: "alice@pingcap.com",
    posts: {
      create: [
        {
          title: "Join the TiDB Cloud",
          content: "https://www.pingcap.com/tidb-cloud",
          published: true,
        },
      ],
    },
  },
  {
    name: "Nilu",
    email: "nilu@pingcap.com",
    posts: {
      create: [
        {
          title: "Follow PingCAP on Twitter",
          content: "https://twitter.com/PingCAP",
          published: true,
        },
      ],
    },
  },
  {
    name: "Mahmoud",
    email: "mahmoud@pingcap.com",
    posts: {
      create: [
        {
          title: "Ask a question on our Forums",
          content: "https://internals.tidb.io",
          published: true,
        },
        {
          title: "TiDB on GitHub",
          content: "https://github.com/pingcap/tidb",
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });
    console.log(`Created user with id: ${user.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
*/