/src
|-- /domain               # Lógica de Domínio
|   |-- /entities         # Entidades do Domínio
|   |-- /value-objects     # Objetos de Valor
|   |-- /aggregates       # Agregados
|   |-- /repositories      # Interfaces de Repositórios
|   |-- /services         # Serviços do Domínio
|   |-- /events           # Eventos do Domínio
|
|-- /application          # Camada de Aplicação
|   |-- /dtos             # Objetos de Transferência de Dados (DTOs)
|   |-- /commands         # Comandos
|   |-- /queries          # Consultas
|   |-- /services         # Serviços de Aplicação
|
|-- /infrastructure       # Camada de Infraestrutura
|   |-- /repositories      # Implementações dos Repositórios
|   |-- /orm              # Configurações do ORM (ex: TypeORM, Prisma)
|   |-- /middlewares      # Middleware (intermediários)
|   |-- /config           # Configurações da Aplicação
|   |-- /exceptions       # Exceções Personalizadas
|
|
|-- /shared               # Componentes compartilhados
|   |-- /utils            # Funções utilitárias
|   |-- /constants        # Constantes
|
|-- app.module.ts         # Módulo Principal
|-- main.ts               # Ponto de Entrada da Aplicação

| **Camada**      | **Responsabilidade**                                                                                                                                              |
|------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Domínio**      | Contém a lógica central e as regras de negócio da aplicação.                                                                                                    |
| **Entidades**    | Representam objetos que possuem identidade e ciclo de vida (ex: `User`, `Order`).                                                                                |
| **Objetos de Valor** | Representam atributos sem identidade própria, definidos por seus valores (ex: `Email`, `Address`).                                                                |
| **Agregados**    | Conjuntos de entidades e objetos de valor tratados como uma unidade (ex: `Order` que inclui `OrderItems`).                                                      |
| **Repositórios** | Interfaces que definem operações de acesso a dados sem implementar a lógica (ex: métodos como `findById()`).                                                  |
| **Serviços do Domínio** | Contêm lógica de negócio que não pertence a uma entidade ou objeto de valor, geralmente envolvendo regras complexas.                                            |
| **Eventos do Domínio** | Representam eventos que ocorrem no domínio e podem ser utilizados para comunicação entre componentes.                                                       |
| **Aplicação**    | Coordena as operações e interações entre a camada de domínio e a interface.                                                                                   |
| **DTOs**        | Estruturas que transferem dados entre a camada de aplicação e a interface, incluindo validações.                                                                 |
| **Comandos**     | Representam ações que alteram o estado do sistema (ex: `CreateUserCommand`).                                                                                   |
| **Consultas**    | Operações de leitura que não alteram o estado (ex: `GetUserQuery`).                                                                                            |
| **Serviços de Aplicação** | Coordenam a lógica entre o domínio e a interface, processando comandos e consultas e orquestrando operações.                                               |
| **Infraestrutura** | Implementa a lógica de acesso a dados e outras preocupações técnicas.                                                                                          |
| **Repositórios** | Implementações das interfaces de repositórios, utilizando um ORM para acesso a dados (ex: `UserRepository`).                                                      |
| **ORM**          | Configurações e definições relacionadas ao ORM utilizado (ex: TypeORM, Prisma).                                                                                |
| **Middlewares**  | Funções que processam requisições antes de chegarem aos controladores, usadas para autenticação, logging, etc.                                                 |
| **Config**       | Contém configurações gerais da aplicação, como variáveis de ambiente e credenciais.                                                                             |
| **Exceções**     | Definições de exceções personalizadas para tratamento de erros em toda a aplicação.                                                                             |
| **Interface**    | Exponha a funcionalidade da aplicação ao mundo externo, gerenciando interações com o usuário.                                                                    |
| **Controladores HTTP** | Recebem requisições HTTP e interagem com a camada de aplicação, delegando as chamadas aos serviços (ex: `UserController`).                                        |
| **GraphQL Controllers** | Definem resolvers para consultas e mutações GraphQL, se aplicável.                                                                                          |
| **Compartilhado** | Fornece utilidades e constantes para evitar repetição e facilitar a manutenção.                                                                                  |
| **Utils**        | Funções auxiliares reutilizáveis em diferentes partes da aplicação.                                                                                            |
| **Constants**    | Definições de constantes utilizadas em toda a aplicação para evitar duplicação de valores e facilitar manutenção.                                               |
