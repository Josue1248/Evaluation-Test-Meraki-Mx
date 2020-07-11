-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema meraki_shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema meraki_shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `meraki_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `meraki_shop` ;

-- -----------------------------------------------------
-- Table `meraki_shop`.`customers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meraki_shop`.`customers` (
  `id_customer` INT NOT NULL AUTO_INCREMENT,
  `address` VARCHAR(30) NULL DEFAULT NULL,
  `country` VARCHAR(15) NULL DEFAULT NULL,
  `c_fname` VARCHAR(15) NULL DEFAULT NULL,
  `c_lname` VARCHAR(30) NULL DEFAULT NULL,
  PRIMARY KEY (`id_customer`),
  UNIQUE INDEX `id_customer_UNIQUE` (`id_customer` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meraki_shop`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meraki_shop`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `p_name` VARCHAR(15) NULL DEFAULT NULL,
  `category` VARCHAR(15) NULL DEFAULT NULL,
  `price` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_product`),
  UNIQUE INDEX `id_product_UNIQUE` (`id_product` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `meraki_shop`.`orders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `meraki_shop`.`orders` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `order_date` DATE NULL DEFAULT NULL,
  `id_customer` INT NULL DEFAULT NULL,
  `id_product` INT NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `total` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_order`),
  INDEX `fk_id_product` (`id_product` ASC) VISIBLE,
  INDEX `fk_id_customer` (`id_customer` ASC) VISIBLE,
  CONSTRAINT `fk_id_customer`
    FOREIGN KEY (`id_customer`)
    REFERENCES `meraki_shop`.`customers` (`id_customer`),
  CONSTRAINT `fk_id_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `meraki_shop`.`products` (`id_product`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `meraki_shop`.`customers`
-- -----------------------------------------------------
START TRANSACTION;
USE `meraki_shop`;
INSERT INTO `meraki_shop`.`customers` (`id_customer`, `address`, `country`, `c_fname`, `c_lname`) VALUES (id_customer, 'address', 'country', 'c_fname', 'c_lname');
INSERT INTO `meraki_shop`.`customers` (`id_customer`, `address`, `country`, `c_fname`, `c_lname`) VALUES (1, 'Luisa Martinez 23656', 'Mexico', 'Josue', 'Montaño');
INSERT INTO `meraki_shop`.`customers` (`id_customer`, `address`, `country`, `c_fname`, `c_lname`) VALUES (2, 'Federico Benitez 5569', 'Mexico', 'Abel', 'Aguilar');
INSERT INTO `meraki_shop`.`customers` (`id_customer`, `address`, `country`, `c_fname`, `c_lname`) VALUES (3, 'St. San Louis', 'USA', 'David', 'Bowie');
INSERT INTO `meraki_shop`.`customers` (`id_customer`, `address`, `country`, `c_fname`, `c_lname`) VALUES (4, 'Abraham Llincon', 'USA', 'Jack', 'Black');

COMMIT;


-- -----------------------------------------------------
-- Data for table `meraki_shop`.`products`
-- -----------------------------------------------------
START TRANSACTION;
USE `meraki_shop`;
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (id_product, 'p_name', 'category', price);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (1, 'Sneakers', 'Casual', 100);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (2, 'T-shirt', 'Casual', 50);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (3, 'Pants', 'Sports', 50);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (4, 'Shorts', 'Formal', 75);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (5, 'Shirt', 'Formal', 100);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (6, 'Tie', 'Formal', 25);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (7, 'Gloves', 'Formal', 50);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (8, 'Umbrella', 'Accesories', 50);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (9, 'Sunglasses', 'Accesories', 25);
INSERT INTO `meraki_shop`.`products` (`id_product`, `p_name`, `category`, `price`) VALUES (10, 'Socks', 'Formal', 25);

COMMIT;


-- -----------------------------------------------------
-- Data for table `meraki_shop`.`orders`
-- -----------------------------------------------------
START TRANSACTION;
USE `meraki_shop`;
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (id_order, 'order_date', id_customer, id_product, quantity, total);
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (1, '2020-01-01', 1, 1, 1, 100);
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (2, '2020-01-01', 3, 10, 2, 50);
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (3, '2020-01-01', 2, 2, 1, 50);
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (4, '2020-01-01', 4, 3, 2, 100);
INSERT INTO `meraki_shop`.`orders` (`id_order`, `order_date`, `id_customer`, `id_product`, `quantity`, `total`) VALUES (5, '2020-01-01', 1, 5, 2, 200);

COMMIT;

