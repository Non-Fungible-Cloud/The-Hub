import { Card, Typography } from "@mui/material";
import React from "react";
import ActionButton from "src/components/buttons/actionbutton";
import Page from "./page";

const FaqPage = () => {
    return (
        <Page background='grey'>

            <Card
                className="mt-24 border-black shadow p-10"
                sx={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    boxShadow: "5px 7px 10px rgba(0,0,0,0.2)",
                    backdropFilter: "blur(5px)",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.8);",
                    flexGrow: 1,
                    maxWidth: "1500px",
                }}
            >
                <div>
                    <div className="flex justify-evenly my-6">
                        <ActionButton url="#spanish">Spanish</ActionButton>
                        <ActionButton url="#english">English</ActionButton>
                    </div>
                    <div  className='text-left mt-10'>
                    
                        <Typography variant="h6" id="english">English</Typography>
                        <Typography variant="h4" id="what-is-th3-hub-">What is Th3 Hub?</Typography>
                        <p>It is an initiative for the Heretics esports team that seeks to make use of blockchain technology
                            to strengthen the club&#39;s relationship with its fans. Through a metaverse and fungible and non-
                            fungible utility tokens, which fans will be able to use to buy/trade club products and access the
                            sales platform to verify the authenticity of the pieces and exchange them.</p>
                        <p>Through Th3 Hub, the club will be able to increase conecction with its fans and access the
                            growing web3 ecosystem, along with emerging technologies.</p>

                            <div className="mt-6">
                        <Typography variant="h4" className="text-center" style={{color:'#F23827'}}id="solution">SOLUTION</Typography>
                        <Typography variant="h4" className="text-center" id="module-1-th3-hub-and-web">MODULE 1: TH3 HUB AND WEB</Typography>
                        </div>
                        <p><strong><em>Objective</em></strong> : Create a meeting point for fans, where they can spend time with their favorite
                            creators, watch matches and buy skins, club merchandising or brand collaborations.</p>
                        <p><strong><em>Methodology</em></strong> : Creation of an executable launcher on, a website that stores credentials and
                            wallet, and ERC1155 smart contracts hosted on blockchain that allows the issuance of digital
                            and physical assets at low cost deployed on the Binance Smart Chain.</p>
                        <p><strong><em>Architecture</em></strong> :</p>
                        <ul>
                            <li>Hub: developed in Unreal Engine 5, connected by blockchain to the smart contracts needed
                                to connect to users&#39; wallets and credentials and view their assets, to identify them.</li>
                            <li>Database: creation of a centralized database to store credentials and wallet addresses.</li>
                            <li>Wallets: Wallets will be created by users, for proper interaction with the purchase of assets.
                                In this way the club does not store seed phrase and no custody of sensitive data is necessary.</li>
                            <li>Smart contracts: Made with solidity for EVM covering the purchase of assets and viewing of
                                these in the game.</li>
                            <li>Web: developed in React and Typescript where the user can create an account, explore the
                                different sections, and download the game.</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}}  id="module-2-nfts-creation-and-implementation">MODULE 2: NFTS CREATION AND IMPLEMENTATION</Typography>
                        <p><strong><em>Objective</em></strong> : Create digital assets that allow fans to obtain physical and/or digital benefits
                            related to the club, such as merchandising or benefits from sponsoring brands.</p>
                        <p><strong><em>Methodology</em></strong> : Design and creation of the images and metadata of these assets,
                            implementation of non-fungible token minting functions in the contract, and the connection
                            on the web and the game.</p>
                        <p><strong><em>Authenticity</em></strong> : Physical items will be linked to an NFT containing all product data, which will
                            serve as proof of authenticity and immutability for their owners.</p>
                        <p><strong><em>Architecture</em></strong> :</p>
                        <ul>
                            <li>Smart contracts: Made with solidity for EVM covering the purchase of assets and viewing of
                                these in-game.</li>
                            <li>Design: created with Adobe suite and 3d rendering programs such as blender.</li>
                        </ul>
                        <p><strong><em>Use Cases</em></strong>:</p>
                        <ul>
                            <li>Buy any product from the store and take the product digitized for Th3 Hub.</li>
                            <li>Scan the code of your T-shirt and check its authenticity.</li>
                            <li>Buy and receive tickets for VIP events.</li>
                            <li>Buy and receive tickets to your team&#39;s games in person.</li>
                            <li>Buy products from sponsoring brands.</li>
                            <li>Verify the traceability of these products and the identity of the owners.</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}} id="module-3-nfsts-creation-and-token-remodeling">MODULE 3: NFSTS CREATION AND TOKEN REMODELING</Typography>
                        <p><strong><em>Objective</em></strong> : Convert Heretics fan token into a security token, which will have NFTs with
                            associated utilities, depending on the number of security tokens owned. Converting the fan
                            token into a non-fungible security token, where in addition to being able to participate in the
                            club&#39;s decisions, you can get a share of the company&#39;s profits, and special associated benefits.</p>
                        <p><strong><em>Methodology</em></strong> : Using the new CNMV standard, it is proposed to convert a part of the
                            company&#39;s stock liquidity to blockchain, where investors from all over the world can access
                            through a smart contract.</p>
                        <p><strong><em>Architecture:</em></strong></p>
                        <ul>
                            <li>Company economics: Granted by Heretics, it will be decided to convert a percentage to
                                security tokens.</li>
                            <li>Smart contracts: Made with solidity for EVM, following the standard provided by CNMV.</li>
                        </ul>
                        <p><strong><em>Benefits</em></strong></p>
                        <ul>
                            <li>Shareholders all over the world.</li>
                            <li>Ease of purchase and rules specific to these tokenized shares.</li>
                            <li>Club decisions.</li>
                            <li>Collaboration proposals.</li>
                            <li>Access and exclusive clothing.</li>
                            <li>Direct contact with founders and board of directors.</li>
                            <li>More digital benefits, such as access to presales, access to exclusive discord...</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}}  id="module-4-circular-economy">MODULE 4: CIRCULAR ECONOMY</Typography>
                        <p><strong><em>Objective</em></strong> : Creation of a circular economy, through the token, purchases and benefits, which
                            allows to have a transaction volume in continuous movement, but always within the Heretics
                            ecosystem.</p>
                        <p><strong><em>Methodology</em></strong> : Through tokens and the Hub, users will be able to purchase assets with a small
                            discount or receipt of some cashback tokens, which will encourage users to purchase with
                            discount more products from the club and sponsoring brands.</p>
                        <p><strong><em>Benefits</em></strong> :</p>
                        <ul>
                            <li>Increased interaction with brands.</li>
                            <li>Increased cash flow.</li>
                            <li>Incite the user to spend the cashback.</li>
                            <li>Traceability of all purchases.</li>
                            <li>Benefits to fans.</li>
                            <li>Obtaining accurate data.</li>
                        </ul>
                    </div>
                    <div className='text-left mt-10'>
                        <Typography variant="h5" id='spanish'>Spanish</Typography>
                        <Typography variant="h4" className="text-center	" id="-qu-es-th3-hub-">¿Qué es Th3 Hub?</Typography>
                        <p>Es una iniciativa para el Equipo de esports Heretics que busca hacer uso de la tecnología
                            blockchain para fortalecer la relación del club con sus fans. Mediante un metaverso y tokens
                            de utilidad fungibles y no fungibles, que los fans podrán usar para comprar/canjear productos
                            del club y acceder a la plataforma de ventas para verificar la autenticidad de las piezas e
                            intercambiarlas.</p>
                        <p>Mediante Th3 Hub, el club podrá incrementar los vínculos con sus fans y acceder al ecosistema
                            creciente de web3, junto a las tecnologías emergentes.</p>
                        <div className="mt-6">
                            <Typography variant="h4" className="text-center" style={{color:'#F23827'}} id="soluci-n">SOLUCIÓN</Typography>
                            <Typography variant="h4" className="text-center	" id="m-dulo-1-th3-hub-y-web">MÓDULO 1: TH3 HUB Y WEB</Typography>
                        </div>

                        <p><strong><em>Objetivo</em></strong> : Crear un punto de reunión de fans, dónde puedan pasar tiempo con sus creadores
                            favoritos, ver partidos y comprar skins o merchandising del club o colaboraciones.</p>
                        <p><strong><em>Metodología</em></strong> : Creación de un launcher ejecutable en, una web que almacene credenciales y
                            cartera, y contratos inteligentes ERC1155 alojados en blockchain que permita la emisión de
                            activos digitales y físicos a bajo coste desplegado en la Binance Smart Chain.</p>
                        <p><strong><em>Arquitectura</em></strong> :</p>
                        <ul>
                            <li>Hub: Desarrollado en Unreal Engine 5, conectado por blockchain a los contratos
                                inteligentes necesarios para conectarse a las carteras y credenciales de los usuarios y
                                ver sus assets, para poder identificarlos.</li>
                            <li>Base de datos: creación de una base de datos centralizada para almacenar las
                                credenciales y direcciones de cartera.</li>
                            <li>Wallets: Las carteras serán creadas por los usuarios, para la interacción correcta con la
                                compra de activos. De esta manera el club no almacena frase semilla y no es necesario
                                la custodia de datos sensibles.</li>
                            <li>Contratos inteligentes: Realizados con solidity para la EVM que cubran la compra de
                                activos y visión de estos en el juego.</li>
                            <li>Web: desarrollada en React y Typescript donde el usuario podrá crear una cuenta,
                                explorar las diferentes secciones y descargar el juego.</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}} id="m-dulo-2-creaci-n-de-nfts-e-implementaci-n">MÓDULO 2: CREACIÓN DE NFTS E IMPLEMENTACIÓN</Typography>
                        <p><strong><em>Objetivo</em></strong> : Crear los activos digitales, que permita a los fans obtener beneficios físicos y/o
                            digitales relacionados con el club, como merchandising o beneficios de marcas patrocinadoras.</p>
                        <p><strong><em>Metodología</em></strong> : Diseño y creación de las imágenes y los metadatos de estos activos,
                            implementación de funciones de acuñación de tokens no fungibles en el contrato, y la
                            conexión en la web y el juego.</p>
                        <p><strong><em>Autenticidad</em></strong> : Los artículos físicos estarán vinculados a un NFT que contiene todos los datos
                            del producto, que servirán como prueba de autenticidad e inmutabilidad para sus propietarios.</p>
                        <p><strong><em>Arquitectura</em></strong> :</p>
                        <ul>
                            <li>Contratos inteligentes: Realizados con solidity para la EVM que cubran la compra de
                                activos y visión de estos en el juego.</li>
                            <li>Diseño: creados con la suite de Adobe y programas de renderización 3d como es
                                blender.</li>
                        </ul>
                        <p><strong><em>Casos de usos:</em></strong></p>
                        <ul>
                            <li>Compra cualquier producto de la tienda y llévate el producto digitalizado para Th
                                Hub.</li>
                            <li>Escanea el código de tu camiseta y comprueba su autenticidad.</li>
                            <li>Compra y recibe entradas para eventos VIP.</li>
                            <li>Compra y recibe entradas para partidos de tu equipo de manera presencial.</li>
                            <li>Compra productos de marcas patrocinadoras.</li>
                            <li>Verifica la trazabilidad de estos productos y de la identidad de los dueños.</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}} id="m-dulo-3-creaci-n-de-nfsts-y-remodelaci-n-de-token">MÓDULO 3: CREACIÓN DE NFSTS Y REMODELACIÓN DE TOKEN</Typography>
                        <p><strong><em>Objetivo</em></strong> : Convertir Heretics fan token en un token de seguridad, que tendrá NFT con
                            utilidades asociadas, dependiendo del número de tokens de seguridad que se tenga en
                            propiedad. Convirtiendo el fan token en un token no fungible de seguridad, donde además de
                            poder participar en las decisiones del club, puedas obtener una parte de los beneficios de la
                            empresa, y beneficios especiales asociados.</p>
                        <p><strong><em>Metodología</em></strong> : Mediante el nuevo estándar de la CNMV, se propone convertir una parte de la
                            liquidez de acciones de la empresa a blockchain, donde puedan acceder inversores de todo el
                            mundo a través de un contrato inteligente.</p>
                        <p><strong><em>Arquitectura</em></strong> :</p>
                        <ul>
                            <li>Economía de la empresa: Otorgada por Heretics, se decidirá convertir un porcentaje a
                                tokens de seguridad.</li>
                            <li>Contratos inteligentes: Realizados con solidity para la EVM, siguiendo el estándar
                                proporcionado por la CNMV.</li>
                        </ul>
                        <p><strong><em>Beneficios</em></strong> <strong>:</strong></p>
                        <ul>
                            <li>Accionistas por todo el mundo.</li>
                            <li>Facilidad de compra y reglas propias de estas acciones tokenizadas.</li>
                            <li>Decisiones del club.</li>
                            <li>Propuestas de colaboración.</li>
                            <li>Acceso y ropa exclusiva.</li>
                            <li>Contacto directo con fundadores y directiva.</li>
                            <li>Más beneficios digitales, tales como acceso a preventas, acceso a discord exclusivo...</li>
                        </ul>
                        <Typography variant="h4" className="text-center" style={{marginTop:'20px'}} id="m-dulo-4-econom-a-circular">MÓDULO 4: ECONOMÍA CIRCULAR</Typography>
                        <p><strong><em>Objetivo</em></strong> : Creación de una economía circular, a través del token, las compras y los beneficios,
                            que permita tener un volumen de transacción en continuo movimiento, pero siempre dentro
                            del ecosistema de Heretics.</p>
                        <p><strong><em>Metodología</em></strong> : Mediante los tokens y el Hub, los usuarios podrán comprar los activos con un
                            pequeño descuento o recepción de algunos tokens de cashback, que incitarán a los usuarios a
                            comprar con descuento más productos del club y de marcas patrocinadoras.</p>
                        <p><strong><em>Beneficios</em></strong> :</p>
                        <ul>
                            <li>Aumento de interacción con marcas.</li>
                            <li>Aumento de flujo de dinero.</li>
                            <li>Incitar al usuario a gastar el cashback.</li>
                            <li>Trazabilidad de todas las compras.</li>
                            <li>Beneficios a fans.</li>
                            <li>Obtención de datos exactos.</li>
                        </ul>
                    </div>

                </div>
            </Card>
        </Page>

    );
};

export default FaqPage;