-- CreateTable
CREATE TABLE `Menu` (
    `sectionName` VARCHAR(191) NOT NULL,
    `items` JSON NOT NULL,

    UNIQUE INDEX `Menu_sectionName_key`(`sectionName`),
    PRIMARY KEY (`sectionName`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
