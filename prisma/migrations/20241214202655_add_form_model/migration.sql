-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "tipo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "ano" INTEGER NOT NULL,
    "capacidade" REAL NOT NULL,
    "placa" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nivelOleo" TEXT NOT NULL,
    "pneuFurado" BOOLEAN NOT NULL,
    "nivelAgua" TEXT NOT NULL,
    "eletrica" TEXT NOT NULL,
    "freio" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "CheckList" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT,
    "vehicle_id" TEXT,
    "form_id" TEXT,
    CONSTRAINT "CheckList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CheckList_vehicle_id_fkey" FOREIGN KEY ("vehicle_id") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "CheckList_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "Form" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
