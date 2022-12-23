# Content
- [Spanish](#spanish)
- [English](#english) 
- [Diagrams](#diagrams)
- [Images](#images)


# Spanish
 
# ¿Qué es Th3 Hub?

Es una iniciativa para el Equipo de esports Heretics que busca hacer uso de la tecnología
blockchain para fortalecer la relación del club con sus fans. Mediante un metaverso y tokens
de utilidad fungibles y no fungibles, que los fans podrán usar para comprar/canjear productos
del club y acceder a la plataforma de ventas para verificar la autenticidad de las piezas e
intercambiarlas.

Mediante Th3 Hub, el club podrá incrementar los vínculos con sus fans y acceder al ecosistema
creciente de web3, junto a las tecnologías emergentes.

# SOLUCIÓN

## MÓDULO 1: TH3 HUB Y WEB

**_Objetivo_** : Crear un punto de reunión de fans, dónde puedan pasar tiempo con sus creadores
favoritos, ver partidos y comprar skins o merchandising del club o colaboraciones.

**_Metodología_** : Creación de un launcher ejecutable en, una web que almacene credenciales y
cartera, y contratos inteligentes ERC1155 alojados en blockchain que permita la emisión de
activos digitales y físicos a bajo coste desplegado en la Binance Smart Chain.

**_Arquitectura_** :

- Hub: Desarrollado en Unreal Engine 5, conectado por blockchain a los contratos
    inteligentes necesarios para conectarse a las carteras y credenciales de los usuarios y
    ver sus assets, para poder identificarlos.
- Base de datos: creación de una base de datos centralizada para almacenar las
    credenciales y direcciones de cartera.
- Wallets: Las carteras serán creadas por los usuarios, para la interacción correcta con la
    compra de activos. De esta manera el club no almacena frase semilla y no es necesario
    la custodia de datos sensibles.
- Contratos inteligentes: Realizados con solidity para la EVM que cubran la compra de
    activos y visión de estos en el juego.
- Web: desarrollada en React y Typescript donde el usuario podrá crear una cuenta,
    explorar las diferentes secciones y descargar el juego.


## MÓDULO 2: CREACIÓN DE NFTS E IMPLEMENTACIÓN

**_Objetivo_** : Crear los activos digitales, que permita a los fans obtener beneficios físicos y/o
digitales relacionados con el club, como merchandising o beneficios de marcas patrocinadoras.

**_Metodología_** : Diseño y creación de las imágenes y los metadatos de estos activos,
implementación de funciones de acuñación de tokens no fungibles en el contrato, y la
conexión en la web y el juego.

**_Autenticidad_** : Los artículos físicos estarán vinculados a un NFT que contiene todos los datos
del producto, que servirán como prueba de autenticidad e inmutabilidad para sus propietarios.

**_Arquitectura_** :

- Contratos inteligentes: Realizados con solidity para la EVM que cubran la compra de
    activos y visión de estos en el juego.
- Diseño: creados con la suite de Adobe y programas de renderización 3d como es
    blender.

**_Casos de usos:_**

- Compra cualquier producto de la tienda y llévate el producto digitalizado para Th
    Hub.
- Escanea el código de tu camiseta y comprueba su autenticidad.
- Compra y recibe entradas para eventos VIP.
- Compra y recibe entradas para partidos de tu equipo de manera presencial.
- Compra productos de marcas patrocinadoras.
- Verifica la trazabilidad de estos productos y de la identidad de los dueños.


## MÓDULO 3: CREACIÓN DE NFSTS Y REMODELACIÓN DE TOKEN

**_Objetivo_** : Convertir Heretics fan token en un token de seguridad, que tendrá NFT con
utilidades asociadas, dependiendo del número de tokens de seguridad que se tenga en
propiedad. Convirtiendo el fan token en un token no fungible de seguridad, donde además de
poder participar en las decisiones del club, puedas obtener una parte de los beneficios de la
empresa, y beneficios especiales asociados.

**_Metodología_** : Mediante el nuevo estándar de la CNMV, se propone convertir una parte de la
liquidez de acciones de la empresa a blockchain, donde puedan acceder inversores de todo el
mundo a través de un contrato inteligente.

**_Arquitectura_** :

- Economía de la empresa: Otorgada por Heretics, se decidirá convertir un porcentaje a
    tokens de seguridad.
- Contratos inteligentes: Realizados con solidity para la EVM, siguiendo el estándar
    proporcionado por la CNMV.

**_Beneficios_** **:**

- Accionistas por todo el mundo.
- Facilidad de compra y reglas propias de estas acciones tokenizadas.
- Decisiones del club.
- Propuestas de colaboración.
- Acceso y ropa exclusiva.
- Contacto directo con fundadores y directiva.
- Más beneficios digitales, tales como acceso a preventas, acceso a discord exclusivo...


## MÓDULO 4: ECONOMÍA CIRCULAR

**_Objetivo_** : Creación de una economía circular, a través del token, las compras y los beneficios,
que permita tener un volumen de transacción en continuo movimiento, pero siempre dentro
del ecosistema de Heretics.

**_Metodología_** : Mediante los tokens y el Hub, los usuarios podrán comprar los activos con un
pequeño descuento o recepción de algunos tokens de cashback, que incitarán a los usuarios a
comprar con descuento más productos del club y de marcas patrocinadoras.

**_Beneficios_** :

- Aumento de interacción con marcas.
- Aumento de flujo de dinero.
- Incitar al usuario a gastar el cashback.
- Trazabilidad de todas las compras.
- Beneficios a fans.
- Obtención de datos exactos.








# English


# What is Th3 Hub?

It is an initiative for the Heretics esports team that seeks to make use of blockchain technology
to strengthen the club's relationship with its fans. Through a metaverse and fungible and non-
fungible utility tokens, which fans will be able to use to buy/trade club products and access the
sales platform to verify the authenticity of the pieces and exchange them.

Through Th3 Hub, the club will be able to increase conecction with its fans and access the
growing web3 ecosystem, along with emerging technologies.

# SOLUTION
## Dependencies Title
## MODULE 1: TH3 HUB AND WEB

**_Objective_** : Create a meeting point for fans, where they can spend time with their favorite
creators, watch matches and buy skins, club merchandising or brand collaborations.

**_Methodology_** : Creation of an executable launcher on, a website that stores credentials and
wallet, and ERC1155 smart contracts hosted on blockchain that allows the issuance of digital
and physical assets at low cost deployed on the Binance Smart Chain.

**_Architecture_** :

- Hub: developed in Unreal Engine 5, connected by blockchain to the smart contracts needed
to connect to users' wallets and credentials and view their assets, to identify them.
- Database: creation of a centralized database to store credentials and wallet addresses.
- Wallets: Wallets will be created by users, for proper interaction with the purchase of assets.
In this way the club does not store seed phrase and no custody of sensitive data is necessary.
- Smart contracts: Made with solidity for EVM covering the purchase of assets and viewing of
these in the game.
- Web: developed in React and Typescript where the user can create an account, explore the
different sections, and download the game.


## MODULE 2: NFTS CREATION AND IMPLEMENTATION

**_Objective_** : Create digital assets that allow fans to obtain physical and/or digital benefits
related to the club, such as merchandising or benefits from sponsoring brands.

**_Methodology_** : Design and creation of the images and metadata of these assets,
implementation of non-fungible token minting functions in the contract, and the connection
on the web and the game.

**_Authenticity_** : Physical items will be linked to an NFT containing all product data, which will
serve as proof of authenticity and immutability for their owners.

**_Architecture_** :

- Smart contracts: Made with solidity for EVM covering the purchase of assets and viewing of
these in-game.
- Design: created with Adobe suite and 3d rendering programs such as blender.

**_Use Cases_**:

- Buy any product from the store and take the product digitized for Th3 Hub.
- Scan the code of your T-shirt and check its authenticity.
- Buy and receive tickets for VIP events.
- Buy and receive tickets to your team's games in person.
- Buy products from sponsoring brands.
- Verify the traceability of these products and the identity of the owners.


## MODULE 3: NFSTS CREATION AND TOKEN REMODELING

**_Objective_** : Convert Heretics fan token into a security token, which will have NFTs with
associated utilities, depending on the number of security tokens owned. Converting the fan
token into a non-fungible security token, where in addition to being able to participate in the
club's decisions, you can get a share of the company's profits, and special associated benefits.

**_Methodology_** : Using the new CNMV standard, it is proposed to convert a part of the
company's stock liquidity to blockchain, where investors from all over the world can access
through a smart contract.

**_Architecture:_**

- Company economics: Granted by Heretics, it will be decided to convert a percentage to
security tokens.
- Smart contracts: Made with solidity for EVM, following the standard provided by CNMV.

**_Benefits_**

- Shareholders all over the world.
- Ease of purchase and rules specific to these tokenized shares.
- Club decisions.
- Collaboration proposals.
- Access and exclusive clothing.
- Direct contact with founders and board of directors.
- More digital benefits, such as access to presales, access to exclusive discord...


## MODULE 4: CIRCULAR ECONOMY

**_Objective_** : Creation of a circular economy, through the token, purchases and benefits, which
allows to have a transaction volume in continuous movement, but always within the Heretics
ecosystem.

**_Methodology_** : Through tokens and the Hub, users will be able to purchase assets with a small
discount or receipt of some cashback tokens, which will encourage users to purchase with
discount more products from the club and sponsoring brands.

**_Benefits_** :

- Increased interaction with brands.
- Increased cash flow.
- Incite the user to spend the cashback.
- Traceability of all purchases.
- Benefits to fans.
- Obtaining accurate data.


# Diagrams

![Dapp Diagram](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/diagrams/Dapp%20Diagram.jpg?raw=true)
![Technological Diagram](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/diagrams/Technological%20Diagram.jpg?raw=true)
![Sequence Diagram](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/diagrams/Sequence%20Diagram.jpg?raw=true)





# Images

## Mockups

![Branding](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/Branding.png?raw=true)

![Landing](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/LANDING.png?raw=true)

![Sing Up](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/Sign%20up.png?raw=true)

![Log In](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/Log%20in.png?raw=true)

![Edit Profile](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/Edit%20profile.png?raw=true)

![Marketplace](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/mockups/MARKETPLACE.png?raw=true)


## Web

![Landing](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/landing.png?raw=true)

![Marketplace 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/Marketplace1.png?raw=true)

![Marketplace 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/Marketplace2.png?raw=true)

![Item 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/item1.png?raw=true)

![Item 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/item2.png?raw=true)

![Sweatshirt](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/Sweatshirt.png?raw=true)

![Item 3](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/item3.png?raw=true)

![My Items](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/MyItems.png?raw=true)

![Open Sea](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/opensea.png?raw=true)

![Faqs](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/web-img/faqs.png?raw=true)


## In Game Screenshots

![Center 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/Center1.png?raw=true)

![Center 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/Center2.png?raw=true)

![Center 3](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/Center3.png?raw=true)

![Gold Zone 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/GoldZone1.png?raw=true)

![Gold Zone 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/GoldZone2.png?raw=true)

![Red Zone 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/RedZone1.png?raw=true)

![Red Zone 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/RedZone2.png?raw=true)

![Blue Zone 1](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/BlueZone1.png?raw=true)

![Blue Zone 2](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/BlueZone2.png?raw=true)

![Blue Zone 3](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/BlueZone3.png?raw=true)

![Blue Zone 4](https://github.com/Non-Fungible-Cloud/The-Hub/blob/main/public/in-game/BlueZone4.png?raw=true)
