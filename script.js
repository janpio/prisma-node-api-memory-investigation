const { PrismaClient } = require("@prisma/client")

async function main() {
  i = 0
  while (true) {
    i++
    var prisma = new PrismaClient()

    await prisma.user.deleteMany()
    const user = await prisma.user.create({
      data: {
        email: "test",
      },
    });
    await prisma.$disconnect()


    let used = process.memoryUsage()
    let memory = ""
    for (let key in used) {
      memory = memory + `${key} ${Math.round(used[key] / 1024 / 1024 * 100) / 100} MB  |  `
    }

    console.log(i, memory)

  }
}

main();
